# Windows / Linux 2.0.8 验收与下载

2026-10-21，从最新2.0.8运行代码 `e705d47` 构建；Linux资源准备修复 `542486c`，沿用此前已提交的AppImage最终封装脚本和CI接线。Mac 2.0.7既有安装包、签名及独立清单保留。

- Windows x64：NSIS包资源逐字节核对；内置Node 22.23.3和DocFactory核对；真实PolyStrata Qwen3.6-35B-A3B Q3模型在8K下完成原生宿主问候、一次倒计时文件写入、真实压缩及近期回执检查点、无重复读取续答和生产聊天输入。已安装到D:\LocalBrain，EXE及DSH资源与包内一致，安装前后正式配置SHA-256未变。本轮未重复联网新闻场景或完整安全任务闭环。
- Linux amd64：Debian和AppImage均完成版本/架构、DEB/APP包类型标记、Node官方二进制SHA-256、DSH源码及DocFactory资源核对；包内原生Node初始化DSH并正常退出。两种包均在Ubuntu22.04 WSL2+Xvfb下存活20秒。Debian已在WSL安装。未做裸机桌面交互、GPU模型或真实Docker隔离验收。
- Linux打包排除不适用的Koffi musl备用模块，保留glibc模块。依赖整理会向Node添加RPATH（不只是strip），因此在最后生成AppImage前恢复经官方散列校验的原始Node，再核对解包后二进制；不会把修改后的文件冒充官方哈希。流程已接入构建脚本。
- 本地回归：TypeScript1607通过/2跳过，适配器14通过，DSH两平台各47通过，Windows Rust382通过/29忽略。不是Mac的392条结果；完整Python回归记录见下文。
- 两平台安全功能仍要求各自隔离/反向验证通过才能开放，未验证不得视作可用；Mac安全闭环实测不移作两平台证据。特殊运行环境、驱动和模型未升级。
- 三个包分别使用应用更新密钥签名并校验；非Windows Authenticode。Linux清单提供AppImage和Debian专用条目，避免给Debian安装版分发AppImage文件。未实际执行跨版本自动更新安装，签名及清单回读不等于完整更新安装实测。

| 包 | SHA-256 |
| --- | --- |
| LocalBrain_2.0.8_x64-setup.exe | `06f8bbb84cf538bfb9e5b5d9ad0623b343a6d09eb14ea94b1b9e7acb29e4f066` |
| LocalBrain_2.0.8_amd64.deb | `4cfca85b29dc659f04ef2a9813fbf3d5ff055bcaf080525255c4aa62d0c7f0c9` |
| LocalBrain_2.0.8_amd64.AppImage | `c67b9bbb2255806df557459e14877ddace203052f5b4f94e32b8ee7a2160698e` |

[构建与机器验收记录](evidence/windows-linux-2.0.8/acceptance.json)。远端CI状态单独回读，本地通过不替代远端检查。

## 2.0.8新增内容与回归

上游运行源码为e705d47650b585fbdfe2571b23809558c4679321，修复受管模型的设置保存路径校验与普通保存误停，并加入网页CTF基础入口、任务内登录态与证据导出。Windows/Linux安装包包含这些代码；Mac2.0.8仍是上游未发布候选，本次不更新Mac包。

Windows完整Python回归最终通过42个文件：40个unittest文件335条用例（包含平台跳过），另2个脚本通过。新增网页传输6项在Windows与Linux各通过，覆盖真实回环HTTP登录/Cookie、浏览器填写/点击/截图、外站跳转拒绝、截断证据和HTTPS真实SNI。首轮测试环境缺少浏览器/OpenSSL或Playwright，补齐独立测试依赖后重跑通过；没有把环境失败记为产品通过。

这些回环传输测试不等于生产Docker隔离或端到端模型CTF验证。隔离浏览器镜像启动、原生逐操作批准及真实模型CTF完整闭环仍未验收；本平台隔离/反向验证不过时保持禁用。未新增HTB网络网关、远程会话或权限链。没有把上游Mac候选验收当成本平台验收。
