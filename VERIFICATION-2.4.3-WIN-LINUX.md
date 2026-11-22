# Windows/Linux 2.4.3 本地验收

- 构建代码：`33e8741ac45586c238f9a6c51784d4a5b67b8115`；后续说明文档提交 `548b22d9b9d2b02902c7dfbd9e9bd6ef6e5efeff`，无产品代码改动。
- Windows x64 NSIS、Linux amd64 Debian/AppImage 均已本地构建并附带 Tauri 更新器签名，三个签名均通过公钥验证。不是 Authenticode 签名。
- Windows 安装至 D 盘，安装后 13,990 个资源文件逐字节一致；六处已有用户配置哈希保持不变。
- Windows 独立验收资料库中，8 个内置模块包、随包 Node 24.22.3、原生 DSH 宿主初始化通过；5 个适用受管模块为 2.4.3。
- 原生界面检查 Inkling Q2/Q3/Q4 卡片与系统内存提示；全新固定引擎安装、CUDA 验证、真实 Q2 启动、工具调用及工具结果往返通过。验收使用独立资料库，未写入用户正式会话。
- WSL2 Ubuntu 22.04 安装 Debian 2.4.3；Debian、AppImage 的资源、模块、Linux Node 哈希及隔离启动检查通过；原生宿主在 ext4 工作目录初始化通过。NTFS 上一次历史初始化超过 40 秒的限制继续保留；不声称裸机 GPU 或 Linux 模型推理已验收。
- Rust：491 通过、0 失败、38 忽略。TypeScript 主组：1680 通过、0 失败、2 跳过；另两组 14 与 9 项通过。Python：49 个 unittest 文件共 409 条用例，加两个独立脚本，51 文件全部通过。
- 下载草稿 12 个资产均已下载回验，与本地 SHA-256 和字节数一致。Mac 2.4.3 单平台清单原字节保留。
- 三语 README 永久介绍、实际演示和最近五项结构检查通过；Blog 三语原件更新，历史段落与封面保留。Blog 预构建 309 页面、15,841 条链接、325 个下载引用零失败。

## 模型结论范围

Windows RTX 4070 Laptop 8GB、32GB 系统内存、NVIDIA 621.01 的既有完整 Q2 对照：同题同种子 384 token，DSpark 开 28.37、关 15.34 token/s。约 1.85 倍仅限该题；本批安装后工具往返是独立短题，不作为速度对照。Q3/Q4 与 Linux 模型推理未实测。长输出可降速，小预算可能全耗在思考，曾出现安全题截断。Inkling 当前固定 f16 KV；建议 32GB 系统内存。

## 远端 CI 限制与发布状态

源码作业 [45081009219](https://github.com/HackerChi-Hub/localbrain/actions/runs/45081009219) 未执行任何步骤。GitHub 原因：近期付款失败或支出额度不足。不得将本地通过写成远端 CI 成功。

作者于 2026-11-23 明确批准本批记录 CI 限制后正式发布 `v2.4.3-win-linux`。三语 README 与 Blog 同批上线。既有 Mac 2.4.3 发行不变。
