# LocalBrain 1.7.6 Windows / Linux 发布验收

- 构建源码：`ae787fed72b5530d213ede5266faf1d4d1062825`；DocFactory：`d152ae9c3e6ed9fe73b0b108202e11586a801240`。版本 1.7.6；功能基于 Docker 环境修复提交 8279608。后续提交只同步发行记录。
- Windows 与 Linux 使用同一提交的独立源码副本。仅重定向 DocFactory 打包资源并关闭自动签名，产物生成后使用既有发行密钥签名。
- 前端测试：1,455 通过、2 跳过、0 失败。Docker 修复阶段的 Windows Rust 相关测试：30 通过、14 忽略；Linux 编译检查通过。
- 两平台生产构建通过。Windows NSIS 解包、主程序版本、Node 22.23.3 及 DocFactory 资源校验通过；Linux Debian 版本 1.7.6、架构 amd64、资源校验通过。
- Linux Debian 在 Ubuntu 22.04 WSL 中安装，使用独立 HOME/XDG 配置、D-Bus 与 Xvfb 运行 20 秒后正常由测试超时结束。此检查不代替真实桌面交互和模型功能验收。
- 两份安装包的文件签名、密钥 ID 和可信注释签名通过应用内公开密钥独立验证；发布后下载回验。
- 完整 Docker 安装、系统授权、首次设置、重启及模型检查链路未实机验收；Windows 安装后交互尚未验收。

| 文件 | SHA-256 |
| --- | --- |
| LocalBrain_1.7.6_x64-setup.exe | `e593eb820bdfc9588b4efc62ec17a19a71bfc90fac6b1a84a04a8506d0805389` |
| LocalBrain_1.7.6_amd64.deb | `8fd14a5b1a88131d4a9e8dc5e4444e68d706eec1468c71588f99ce91756fee6d` |

Linux 延续 1.7.5 已验证的 Debian 发布方式；已知 AppImage 的 musl 原生依赖打包问题未修改，本次不发布 AppImage。Linux 自动更新仍为有效的 1.7.2；1.7.6 须手动安装 Debian 包。Mac 继续使用 1.7.5，未重建或替换 Mac 安装包。

新发行包含原样保留的 Mac/Linux 分平台更新清单。Windows 分平台及合并清单为 1.7.6；仅使用旧式合并清单的非 Windows 老客户端不能从该清单获取更新，应使用对应平台的现有下载。旧发行全部保留。

三语主页、近期五项改进、散列与下载链接同步更新；长期内容、演示、截图保持不变。私有仓库 GitHub Actions 此前因账单／配额未能启动，本地文档同步检查已通过；以当前云端检查状态为准。
