# LocalBrain 2.5.2 · Windows / Linux

「技能与记忆」自动发现本机 Agent 技能和记忆。外部来源只读挂载，技能和记忆可分别关闭或设为手动读取，内容按需加载。

- Windows x64 完成安装。本机隔离验收覆盖只读来源、独立读取开关、中文记忆检索、Inkling GGUF Q2 CUDA 启动和工具往返。
- Linux amd64 的 Debian 与 AppImage 通过 WSL2 Ubuntu 22.04 安装与启动检查。包内 DSH 宿主在 ext4 工作目录通过，自动发现和挂载夹具通过。Linux 模型推理和裸机 GPU 未实测。
- 本地 Windows Rust 511 项、TypeScript 主组 1707 项、适配器 16 项、运行时 9 项、DSH 60 项通过。Linux Rust 全套运行被中断，退出码为 15，定向挂载用例单独通过。
- GitHub 源码 CI 因账单或额度限制未启动。Mac 2.5.2 安装包使用原有独立发行。

安装包附 Tauri 更新器签名。构建来源和三个安装包的哈希见 BUILD 与 SHA256SUMS。

用户已确认同步本批安装包和说明，按上述验收范围发布。
