# Windows / Linux 2.1.3 候选包验收

2026-10-24。Windows修复包已安装；Linux Debian及AppImage已在本地WSL2 Ubuntu22.04独立构建，Debian已安装。本批尚待当前版本的CI例外发布确认，不将本地包写成已公开下载。Mac2.1.3已有发行物保留。

修复内容：接入识别实际运行的PolyStrata/VLM，导出真实服务模型名、窗口及模态；接入页顶部补回一键恢复接入，保留各客户端单项撤销。恢复编排分别报告冲突、锁定和无备份；单客户端失败不阻断其它客户端，不强制覆盖用户设置。正式配置未用于恢复测试。

Windows：1615条TypeScript测试通过、2条跳过，适配器14条通过。最终安装包的原生界面已验证无运行模型时顶部入口可用；资源与官方Node22.23.3、72个DocFactory文件及PolyStrata启动器核对，更新签名验证通过。安装前后五处正式配置校验值一致。

Linux：Debian/AppImage版本、架构、DEB/APP标记、官方Node哈希、DSH与DocFactory资源核对通过，包内Node初始化DSH后正常退出；两种包在WSL2+Xvfb各运行20秒，53条DSH测试通过。Debian2.1.3已安装，安装后的程序与解包内容哈希一致，两种包更新签名分别验证通过。未进行裸机GPU推理或真实桌面交互验收。

已知问题：完整Harness桌面请求在PolyStrata8K窗口仍超限；短适配器回答不等于完整桌面兼容。2B蒸馏模型基础文本由用户确认可用，服务实际窗口262144，但满窗性能、视觉、MCP图片呈现及完整工具/多轮任务仍未验收。当前2B端点不支持看图。详见[待解决问题](KNOWN-ISSUES-DSH-LOCAL-MODELS.md)。

GitHub源码检查因账户付款/支出限制没有启动；本地通过不冒充线上CI通过。应用更新签名不是Windows Authenticode；未升级第三方引擎、CUDA、驱动或模型。

| 安装包 | SHA-256 |
| --- | --- |
| LocalBrain_2.1.3_x64-setup.exe | `1a7cde8c28dc3964f61f5c645cb58e58532a5c43ecff8f17e8a9aaa39b7c81a1` |
| LocalBrain_2.1.3_amd64.deb | `0de5ac2d3e9a086f5759e8c329ab7cbec94ab7d49c346e87ab38bcfb2a79638f` |
| LocalBrain_2.1.3_amd64.AppImage | `78a77457f4e8a1fbb0b9c002b131d24099369be670b99dd0616a436eeecbc35d` |
