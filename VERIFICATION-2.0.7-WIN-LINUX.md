# Windows / Linux 2.0.7 验收与下载

2026-10-21，从最新2.0.7运行代码 `97d6687` 构建；Linux资源准备修复 `542486c`，另在本批源码加入AppImage最终封装脚本和CI接线。Mac 2.0.7既有安装包、签名及独立清单保留。

- Windows x64：NSIS包资源逐字节核对；内置Node 22.23.3和DocFactory核对；真实PolyStrata Qwen3.6-35B-A3B Q3模型在8K下完成原生宿主问候、一次倒计时文件写入、真实压缩及近期回执检查点、无重复读取续答和生产聊天输入。已安装到D:\LocalBrain，EXE及DSH资源与包内一致，安装前后正式配置SHA-256未变。本轮未重复联网新闻场景或完整安全任务闭环。
- Linux amd64：Debian和AppImage均完成版本/架构、DEB/APP包类型标记、Node官方二进制SHA-256、DSH源码及DocFactory资源核对；包内原生Node初始化DSH并正常退出。两种包均在Ubuntu22.04 WSL2+Xvfb下存活20秒。Debian已在WSL安装。未做裸机桌面交互、GPU模型或真实Docker隔离验收。
- Linux打包排除不适用的Koffi musl备用模块，保留glibc模块。依赖整理会向Node添加RPATH（不只是strip），因此在最后生成AppImage前恢复经官方散列校验的原始Node，再核对解包后二进制；不会把修改后的文件冒充官方哈希。流程已接入构建脚本。
- 本地回归：TypeScript1601通过/2跳过，适配器14通过，DSH两平台各47通过，Windows Rust375通过/29忽略。不是Mac的384条结果，也未重新运行整套Python回归。
- 两平台安全功能仍要求各自隔离/反向验证通过才能开放，未验证不得视作可用；Mac安全闭环实测不移作两平台证据。特殊运行环境、驱动和模型未升级。
- 三个包分别使用应用更新密钥签名并校验；非Windows Authenticode。Linux清单提供AppImage和Debian专用条目，避免给Debian安装版分发AppImage文件。未实际执行跨版本自动更新安装，签名及清单回读不等于完整更新安装实测。

| 包 | SHA-256 |
| --- | --- |
| LocalBrain_2.0.7_x64-setup.exe | `1acef63f83793b5b28ba0b31cfced1a7f32cb132a75c0f3fcb8dc1c5eb2ec670` |
| LocalBrain_2.0.7_amd64.deb | `2288a85a22d15b7b4922dc169d184aaa0f09686f5f6d687e958102d586741cf2` |
| LocalBrain_2.0.7_amd64.AppImage | `0f15d45d54990f853a430db65cdfefd23349e14e28c9dd86c9c50cba1889afb9` |

[构建与机器验收记录](evidence/windows-linux-2.0.7/acceptance.json)。远端CI状态单独回读，本地通过不替代远端检查。
