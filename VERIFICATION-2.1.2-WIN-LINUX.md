# Windows / Linux 2.1.2 验收与下载

2026-10-24，Asia/Shanghai。同源独立构建 Windows NSIS、Linux Debian 和 AppImage；保留现有 Mac 2.1.2 安装包、签名和独立清单。运行源码：`799a2e28e8666fee615742b1423099050098dc05`。

本版修复只读程序资源下的 MCP 安装：仅向受管 Python 环境注册路径，在新进程验证来源，失败恢复原注册；不修改程序资源权限。网络安全名单全宽、连接与工具按需展开，接入页保留 DeepSeek Harness；赞助文字仅在回合结束后出现，点击才打开二维码，不加入模型上下文。各平台特殊运行环境独立维护，应用升级不隐式升级模型引擎、CUDA 或驱动。

Windows：最终安装包解包，核对内置官方 Node 22.23.3、DSH、DocFactory 及注册器资源。真实 PolyStrata Qwen3.6-35B-A3B Q3 在 8K 窗口完成原生宿主问候、一次倒计时文件写入、实际压缩、近期回执检查点、无重复读取续答和生产聊天输入。已安装到 D:\LocalBrain，EXE、DSH 及注册器与包内一致，正式配置 SHA-256 未变。

Linux：两种包核对版本、架构、DEB/APP 类型标记、Node 官方哈希、DSH 和 DocFactory；包内 Node 初始化真实 DSH 后退出。在 Ubuntu22.04 WSL2+Xvfb 各存活20秒；Debian 已安装。AppImage 最终封装恢复经过官方哈希验证的原始 Node，避免 linuxdeploy 修改 RPATH 后二进制与清单不符。排除不适用 musl 备用模块，保留 glibc 模块。

本地回归：TypeScript 1611通过/2跳过，适配器14通过，Windows Rust396通过/29忽略，Windows与Linux DSH各53通过；完整Windows Python45文件通过（43个unittest文件369条用例，含条件跳过，另2个脚本通过）。Windows编码修复后已重跑Python和Rust，不借用Mac测试数字。

边界：Linux 未进行裸机桌面/GPU推理，本轮未验收两平台生产 Docker 隔离、远程 SSH/VPN 或真实 HTB 完整链路；安全执行仍需本平台授权和隔离验证。未重跑原12题能力评测，摘要仍可能有损。三个安装包实际独立验签；应用更新签名不等于 Windows Authenticode。清单提供 Debian/AppImage 独立目标；未实际执行跨版本自动更新安装。远端CI单独记录，本地通过不替代线上检查。

| 安装包 | SHA-256 |
| --- | --- |
| LocalBrain_2.1.2_x64-setup.exe | `0bf1da7a736151648fbd75645f8890bdca6295c8ed77fc67c5f0545482dc6b87` |
| LocalBrain_2.1.2_amd64.deb | `8da5b637f8fd6bd1e48c0df71ac87d7eadd98c35fca6e62f1a80b97440ecb28a` |
| LocalBrain_2.1.2_amd64.AppImage | `56e26c15bad2915959d35130f56ec47cc9f47d4b8ec8fbf2aa6386d3bc456257` |

[机器验收记录](https://github.com/HackerChi-Hub/localbrain-releases/blob/main/evidence/windows-linux-2.1.2/acceptance.json)。


## 远端检查状态

GitHub 源码说明同步作业 [40047103417](https://github.com/HackerChi-Hub/localbrain/actions/runs/40047103417) 未启动执行步骤，原因为账户付款失败或支出额度限制。本地说明同步检查通过，不冒称线上 CI 通过；作者已于2026-10-24明确批准本批Windows/Linux例外发布，要求保留CI限制说明。

最终包额外验证：Windows、Debian、AppImage 的程序均内嵌本批注册代码；实际注册七类工具入口正确、失败日志 UTF-8 可读，前后资源哈希一致。Windows 原生赞助文字、点击展开二维码、关闭后入口保留均通过。Windows 首次专项脚本比较换行时失败，已改为解析 JSON 后比较；一次脚本移位造成版本文件定位失败，已固定到源码位置重跑。首轮 Python 中文路径失败及中止的旧候选构建日志保留，不计为通过。
