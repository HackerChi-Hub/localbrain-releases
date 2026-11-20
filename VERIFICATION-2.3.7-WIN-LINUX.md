# Windows / Linux 2.3.7 验收与下载

2026-11-20。Windows x64 与 Linux amd64 在本机构建（私有仓 GitHub Actions 额度仍阻塞，未使用在线构建）。本轮改动只涉及非 macOS 分支：GGUF 图像引擎（`sd-cpp`）的资产选择、后端回执与运行环境说明；Mac 2.3.7 安装资产与分平台清单保持不变。

## 变化与平台范围

| 平台 | GGUF 图像引擎选择 | 本批实测 |
| --- | --- | --- |
| Windows x64 | NVIDIA 驱动 ≥570.26 → CUDA 12.8 主包 + cudart；低于该门槛的 NVIDIA → 同版本 Vulkan 包；没有 NVIDIA → CPU 包 | RTX 4070 Laptop 8GB / 546.26 自动选 Vulkan：应用内生图与参考图编辑均通过 |
| Linux amd64 | 本项目在 Ubuntu 22.04（glibc 2.35）上按同一提交构建的 CPU 包；上游 Linux 预编译包要求 glibc 2.43，22.04/24.04 加载不了 | Ubuntu 22.04 WSL2：应用内受管链路安装、启动与生图通过 |
| Apple Silicon Mac | Metal（不变） | 沿用 Mac 2.3.7 记录 |

FLUX 3 Image Klein 的模型三件套与引擎归档都做 SHA-256 校验；安装回执在 `<数据目录>/runtime/sd-cpp/master-1106-532d2c1/.backend` 记录实际后端（`cuda` / `vulkan` / `cpu` / `metal`）。后端与当前机器期望不一致（例如旧版装了 CUDA 包、但驱动低于 570.26）时会重装为正确变体，而不是继续使用不兼容的包。

本批没有新增视频后端（H3 / LTX / Pika / Wuli 仍限 Apple Silicon Mac），也没有升级用户驱动、CUDA 或模型权重。

## 实测

**Windows（RTX 4070 Laptop 8GB，驱动 546.26，自动选 Vulkan）**

- 应用内受管链路：安装 2.3.7 → 应用自动安装 `sd-cpp` Vulkan 版与受管 Python → 首次启动前核对 6.30 GiB 三件套 SHA-256 → 后端就绪。
- `1024×1024` 十六步文生图：服务端 32.1–58.7 秒，显存峰值 5,276–7,129 MiB（多次运行）。
- 单参考图 + 提示词坐标框 `[300, 150, 700, 550]` 编辑：服务端 72.3–84.4 秒，显存峰值 6,302–7,149 MiB；实图确认红灯笼被替换为青花茶壶且雪景门廊保留。
- 同一 Vulkan 引擎独立运行：`1024×1024` 生成 35.81 秒，显存峰值 4,922 MiB。
- 参考图：`work/release-2.3.7/app-flux-gen.png`、`app-flux-edit.png`、`flux-gen-vulkan.png`。

**Linux（Ubuntu 22.04 WSL2，32 线程 CPU，仅 CPU 后端）**

- 应用内受管链路：从 deb 解包启动 → 应用下载本项目构建的 CPU 版 `sd-cpp`（25.5 MB）与受管 Python → 核对三件套 → 后端就绪用时 69 秒。
- `512×512` 十六步生图：服务端 190.4 秒，产物 `work/release-2.3.7/linux-app-flux.png`。
- 同一 CPU 引擎独立运行：`512×512` 十六步 188.8 秒（`linux-flux-512.png`）。

**Windows CUDA 分支（未在本机通过）**

驱动 546.26 低于 CUDA 12.8 要求的 570.26。本轮先验证了旧行为确实会崩：CUDA 12.8 包在 546.26 上完成加载后，第一次采样报 `ggml_cuda_compute_forward: GET_ROWS failed` / `CUDA error: device kernel image is invalid`，`sd-server` 退出；`GGML_CUDA_PDL=0` 无效。因此 CUDA 12.8 分支需要 NVIDIA 570.26 及以上，本机没有该驱动，未实测通过；低于门槛的 NVIDIA 机器现在会自动改用 Vulkan 包（本机实测路径）。

## 引擎资产与校验

- Windows CUDA 主包 `b0872191…` + cudart `fe203668…`；Windows CPU `abef332c…`；Windows Vulkan `3e66222c…`（与 `platform.rs` 一致，均来自上游 `master-1106-532d2c1`）。
- Linux 引擎为本项目构建：源码 `leejet/stable-diffusion.cpp` 提交 `532d2c15c430a785a712b2d94281f04e733008a4`，Ubuntu 22.04 + GCC 11.4 + glibc 2.35，`-DSD_BUILD_SHARED_LIBS=ON -DSD_BUILD_SHARED_GGML_LIB=ON -DGGML_BACKEND_DL=ON -DGGML_CPU_ALL_VARIANTS=ON -DGGML_NATIVE=OFF`，产物 `sd-cpp-532d2c1-linux-glibc235-x64.tar.gz`，SHA-256 `21af43fc89e1da60fb308c159a6d54ab15e822051144b8f66a07b5985690cf0a`，发布在下载库的 `engine-sd-cpp-532d2c1-linux` 标签（prerelease，不参与自动更新清单）。归档内 `objdump -T` 最高依赖 `GLIBC_2.34`，在 22.04（2.35）上无缺失库，`sd-server --version` 正常。
- 模型三件套实测哈希：`flux-3-image-klein-UD-Q4_K_XL.gguf` `0a057e07…`、`Qwen3VL-4B-Instruct-Q4_K_M.gguf` `66358cb1…`、`vae/ae.safetensors` `868fe7b3…`，与配方文件一致。

## 构建与安装

- Windows x64 NSIS：`LocalBrain_2.3.7_x64-setup.exe`，43,756,731 字节，更新器签名已生成（`.sig`）。签名是 Tauri 更新器签名，不是 Windows Authenticode。
- Linux amd64：`LocalBrain_2.3.7_amd64.deb` 122,085,936 字节、`LocalBrain_2.3.7_amd64.AppImage` 195,377,656 字节，均生成更新器签名。
- 构建环境：Windows 本机（Rust 1.98.1、Node 24.19.0、NSIS 3.11）；Linux 在 WSL2 Ubuntu 22.04 内构建（Rust 1.98.1、Node 22.23.3），打包资源中的 DocFactory 使用本机 `9fec4dda5e31dd1063f971db8d566c41414bbf20` 副本。
- 本批改动经 `cargo check --release` 通过；Windows 与 Linux 两条构建线均从含本批改动的源码产出安装包。完整前端/Python/Rust 测试沿用 Mac 2.3.7 批次记录，本批未重跑全套。

## 边界

- 首次启动曾出现一次 `WinError 10013` 端口绑定失败（11437 被占用/排除范围），应用自行重试后成功；这是本机端口状态偶发问题，没有改动代码。
- Windows CUDA 12.8 分支未在本机实测（驱动 546.26）；Vulkan 分支已实测。非 NVIDIA 显卡当前走 CPU 包，未验证 Intel/AMD 的 Vulkan 路径。
- Linux 只有 CPU 后端，`512×512` 约 3 分钟、`1024×1024` 会明显更慢；WSL2 验收不等于裸机 GPU 或桌面交互验收。
- 模型下载、生图与编辑只在本机受管数据目录内测试；未改动用户已有模型、配置或环境。测试期把 `resourcePolicy.releaseMode` 设为 `keep` 以避免 90 秒空闲卸载打断连续请求，正式默认值未改。
- 自动更新安装未在两平台执行；本轮只验证更新器签名与清单。

## SHA-256

| 安装包 | SHA-256 |
| --- | --- |
| LocalBrain_2.3.7_x64-setup.exe | `f3c4bdf65c914fee9ad49e8abe99975db771f99be0206e3d59b6efdb4e181efb` |
| LocalBrain_2.3.7_amd64.deb | `9bdc2a0260e51f641347ed6aa379d5a8ed676d11c2c254031d748a9582605fff` |
| LocalBrain_2.3.7_amd64.AppImage | `82a327dafd24f50f9c8530793aa36ed7a4206b0466195cff131f915df0c6402a` |
| sd-cpp-532d2c1-linux-glibc235-x64.tar.gz | `21af43fc89e1da60fb308c159a6d54ab15e822051144b8f66a07b5985690cf0a` |
