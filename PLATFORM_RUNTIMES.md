# 各平台运行环境维护

运行环境合同真源是 [platform-runtimes.json](platform-runtimes.json)。应用版本升级不代表所有平台的特殊引擎都升级或通过验收。

| 平台 | 特殊语言运行环境 | 维护与发布边界 |
| --- | --- | --- |
| Mac Apple Silicon | MLX、llama.cpp Metal、Splash 1.3.1 | 独立的 Python/Metal 依赖和模型组装协议。本批不改 Splash；保留已发布的 Mac 1.9.5，见 RELEASE_1.9.5_VERIFICATION.md。 |
| Windows x64 | llama.cpp、PolyStrata NVIDIA CUDA | Windows 原生 `.venv/Scripts/python.exe` 与 `engine-poly/strata-poly.exe`，不使用 Linux/WSL 的文件。 |
| Linux x64 | llama.cpp、PolyStrata NVIDIA CUDA | Linux 原生 `.venv/bin/python` 与 ELF `engine-poly/strata-poly`，单独构建及验收；WSL2 实测须标注，不能冒充裸机测试。 |

## 连接 PolyStrata

1. 从 [上游](https://github.com/VecSzn/PolyStrata) 获取本平台安装。当前验收基线为 `e190c1a3bb0eca96b5a50eab172927898ec7ca44`、发布 `v0.1.44.1-poly.6`。先用其安装器准备 `--family qwen36 --model UD-Q3_K_M --context 8192 --vision no --no-start`；安装器完成权重 SHA-256 校验和分词器准备后再连接。
2. 官方 CUDA 13 预编译包要求 NVIDIA 580 及以上驱动。旧驱动可选择实验性 `--cuda 12`，须本平台另有 CUDA 12 工具链并编译；不自动升级显卡驱动。Windows 546.26 + CUDA 12.9 已有本机基线验证。
3. LocalBrain 首页「大语言模型」点「连接 PolyStrata」，选择含 `setup.py`、`.venv`、`engine-poly`、`strata-qwen36-*.json` 的安装根。连接会登记当前平台，不搬走或删除原权重。
4. 在同一语言模型列表点击「启动」。应用用该安装的 Python 运行随包提供的启动器，对外提供 `127.0.0.1:11434/v1`；只有模型真正 loaded、身份匹配且返回实际窗口后才显示可用。聊天、工具代理和外部客户端共用它。
5. 启动不会调用上游安装器、拉取代码、下载模型或更新依赖。更新 PolyStrata 必须显式完成该平台安装后重新验收；更换位置后重新连接。登记不会跨操作系统复用；引擎构建记录不是已验收的 0.1.44.1 时明确拒绝接入，需先维护适配。

本版仅接入上游 Qwen3.6-35B-A3B MTP 的 UD-Q2_K_XL、UD-Q3_K_M、UD-Q4_K_M 配套文件；首选 Q3 约 17.1GB，8GB 显存旁的系统内存估算约 21GB，建议整机 32GB。Q2/Q4 兼容路径存在，不能将 Q3 实测等同于每个量化档都已实测。Qwen3.8-27B 是稠密模型，不能交给当前 PolyStrata Qwen MoE 引擎。AMD、视觉、多请求并发和长上下文尚未纳入本版接入验收。

LocalBrain 的会话使用精度优先设置：`tail-skip=0`、单请求、关闭额外多会话缓存；保留独立安装配置，不把 llama.cpp 的 GPU 层数或 KV 校准参数发送给 PolyStrata。上下文由独立安装配置的 `--max-context` 决定，运行后以 `/health.max_context` 为准；应用的 llama.cpp 参数不控制它。修改该窗口后需重启、重新实测内存。停止/退出回收整棵推理进程树；Windows 使用 Job Object，Linux 使用独立进程组与父进程存活检查。

## 每次维护检查

- 变更对应平台的版本、固定提交、模型 revision、解释器/引擎布局及依赖要求；不能把另一个平台的成功记录当成本平台证据。
- 分别运行 `python scripts/check-platform-runtimes.py --platform macos|windows|linux`。这是资源合同检查，不是 GPU 推理验收。
- 改动特殊引擎时，在对应系统验证加载、实际上下文、普通/流式对话、工具往返、取消/停止、应用退出和错误提示；记录硬件、驱动、量化、上下文及测试环境。
- 打包检查该平台的启动资源、Node/工具引擎和文档组件；分别维护平台更新清单、签名、校验值和下载链接。没有新包的平台继续指向原版本。
- 验收可用显式绝对路径环境变量 `LOCALBRAIN_DATA_DIR` 建立独立数据目录；默认数据路径不变，不使用正式资料作夹具。不同系统即使同步数据，也须分别登记运行环境。

## Windows 显式自动安装

Windows 1.9.6 已安装发布：首页「自动安装并接入」只使用固定的 Windows CUDA 12.9 sm_89 运行包，面向 RTX 40 系、NVIDIA 528.33+ 与约32GB内存。选择位置并确认下载后，准备独立Python环境、运行文件和Q3权重；不调用上游setup、不安装CUDA编译工具、不修改驱动。源码、运行包、模型固定提交和SHA-256见resources/polystrata_windows_recipe.json；运行包包含CUDA/VC++运行库、分词器及第三方许可。

安装任务独立于应用窗口，进度与取消标记保存在本平台用户数据目录；重新打开主页恢复状态，完成后自动登记。已完成安装直接连接；非受管非空目录不覆盖。手动连接入口保留；Mac/Linux不提供此Windows自动安装入口。见POLYSTRATA_AUTO_INSTALL.md。
