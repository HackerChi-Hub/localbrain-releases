# PolyStrata 1.9.2 Windows/Linux 验收（2026-10-17）

应用将 PolyStrata 作为 Windows/Linux 独立后端接入，不经过 MLX、Splash 或 llama.cpp 的启动参数转换。使用步骤、版本边界和三平台维护规则见 [PLATFORM_RUNTIMES.md](PLATFORM_RUNTIMES.md)。以下区分源码、真实推理与正式包验收；Mac 包保持 1.9.1。

## 环境

- Windows 11 x64：RTX 4070 Laptop 8GB、i9-14900HX、32GB RAM、NVIDIA 546.26；目录内 CUDA 12.9 编译，不升级驱动。
- Linux：Ubuntu 22.04 / WSL2，在同一 GPU 上使用独立 Linux Python 3.10、CUDA 12.9、GCC 11 与 ELF 引擎；不是裸机 Linux、其他 GPU 或 AMD 验收。
- PolyStrata 固定源 e190c1a3bb0eca96b5a50eab172927898ec7ca44，0.1.44.1；Qwen3.6-35B-A3B-MTP UD-Q3_K_M，固定 revision 5bc3e238d916f48a861bac2f8a1990a0e9b7e98d。
- 模型 17,104,402,720 bytes，SHA256 8966dd0cd8c543c4228490a2a8b0e0814fc4f1e6a8e199ceed4de6754ae7b8e1。8K 上下文、tail-skip 0、单请求、额外多会话缓存关闭。

## 已完成

- Windows 生产 Rust 命令构造器：真实模型加载、health/model/window、中文回复通过。
- Windows Tauri 开发构建，独立 LOCALBRAIN_DATA_DIR 与 WebView2 profile：登记安装、首页显示、真实后端启动、实际 8192 窗口、语言模型身份、配置记忆、停止、自启标志清除、重启通过。
- Windows 应用后端提供的服务与 Linux 原生启动器：分别通过真实原生 DSH 的倒计时任务；只保存一次 HTML 后结束，没有触发轮数或时长边界，内联 JavaScript 语法通过。外观效果仍由人判断，不把语法验证当成完整视觉验收。
- Linux 原生启动器：中文、结构化工具调用及工具结果往返、流式取消和后续回复通过；取消后恢复约 1.78 秒。结束后 API 关闭。
- 新增配置与进程测试 Windows/Linux 各 3 条通过。Linux 直接强杀启动器的首轮测试发现子进程残留，补充 PR_SET_PDEATHSIG 后通过；Windows 使用非继承的 kill-on-close Job Object。
- 前端 1570 通过、2 跳过，适配器 12/0；Rust 343/0、27 个需本机资源的测试跳过；另显式运行真实模型测试通过。三平台资源合同检查与三语 README 同步检查通过。

## 边界

Q2/Q4 兼容入口存在，未代替其真实模型验收。视觉、AMD、多请求并发、长上下文及长时间稳定性未覆盖。Mac 特殊运行环境保持原状，本轮不发布 Mac 包。短样本生成速度受提示长度与专家缓存命中影响，不给跨平台统一性能保证。

验收资料使用独立临时数据与会话目录，不把夹具放进用户正式资料库。仅保存独立日志与结果证据，发行后清理自行创建的配置、会话与测试产物。

正式包首次验收发现 HTTP CORS 缺失：上游只为显式 cors_origins 的 /v1/* 返回响应头，原生 HTTP 客户端能通不能证明 WebView 可用。新增内存内 HTTP handler 适配，明确允许应用来源与本机开发来源访问 /v1/*、/health，拒绝其他来源和管理接口；保留原请求校验、流式与取消实现，不改上游源码文件。单元测试覆盖 Windows、Linux 自定义 Tauri 来源与私网预检。发现问题的首批候选仅保留为本机证据，不发布；修复后重新打包并重验。

发布前复核自动恢复路径，修正 PolyStrata 在恢复与首页之间的后端 ID 前缀不一致；最终正式包已验证退出后重开自动恢复，实际后端 ID 与首页一致，不以手动重启代替自动恢复验收。

## 正式包

构建源码：`77bf5767dad4a459cc000fa96c8632970f572d54`。Windows NSIS 已解包，版本 1.9.2，Node 22.23.3、51 个 DocFactory 文件与生产启动器校验通过；正式应用的模型登记、首页、8K 窗口、浏览器跨域、原生 DSH 倒计时、停止、重启与退出回收通过。Linux Debian 已安装到 Ubuntu 22.04 WSL2，20 秒 Xvfb 启动通过；包内 Node/DSH 初始化、资源校验以及真实模型中文/工具往返/流式取消/倒计时任务通过。Linux 原生桌面交互与完整应用内模型按钮流程未覆盖，WSL2 虚拟机只有 16GB 内存，应用仍建议 32GB 运行此 Q3 配置。

两份文件均使用应用更新密钥签名，并独立核验 Ed25519/可信注释。此为更新器签名，不冒充 Windows Authenticode。私有 GitHub CI 因账户付款/支出限制未启动（steps 为空），本地检查不代表云端通过。

| 文件 | SHA-256 |
| --- | --- |
| LocalBrain_1.9.2_x64-setup.exe | `9d8732be966714908e1150a3023508bcd408d7300a7d802ef77d586766b8a137` |
| LocalBrain_1.9.2_amd64.deb | `d3829507c24b2a9c3396da63365f7f3cf0895a638fbc1ba93c48ce5b9e56d4af` |

最终 Windows WebView 实际 POST 流式回复通过（HTTP 200，收到「应用内推理就绪」），退出后重开自动恢复实际 8192 窗口且首页提供停止按钮。原生 DSH 倒计时保存一次后结束。对应程序来自最终签名安装器解包，启动器与构建源码 SHA-256 一致。
