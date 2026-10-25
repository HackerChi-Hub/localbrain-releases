# Windows / Linux 2.1.6 验收与下载

2026-10-25，分别构建 Windows NSIS、Linux Debian 与 AppImage，运行源码为 `87f2004817e0ccda7ae7fb51cd706b1a0602ff58`。Mac2.1.6既有包、签名与独立清单保留。

本批包含2.1.4至2.1.6的运行环境管理、可安装项筛选、依赖卸载说明、下载暂停/续传与固定0.2.1-rc.3 DSH内核适配。随包Node保持22.23.3；不升级用户CUDA、驱动或模型权重。新工作目录服务只提供宿主已选目录身份，不新增终端/文件系统授权。

Windows：最终包资源、官方Node哈希、72个DocFactory文件及PolyStrata启动器核对通过；全部DSH直接依赖为0.2.1-rc.3。原生包的运行环境管理界面渲染通过，用已有PolyStrata Qwen3.6-35B-A3B UD Q3_K_M、实际8192窗口完成两次模型请求、一次只读回显工具，最终回答包含真实回执，持久turn/end为completed。本次未借用Mac的原生卸载按钮或中文压缩截图作Windows证据。已安装到本机，程序与包内一致，安装前后五处正式配置校验值一致。

Linux：Debian/AppImage包版本、架构、DEB/APP标记、官方Node、DSH及DocFactory资源核对通过；包内Node初始化新版宿主正常退出。两个包在Ubuntu22.04 WSL2+Xvfb分别启动20秒，53条DSH测试通过。Debian2.1.6已安装，程序与解包内容一致。WSL2结果不代替裸机GPU、实际桌面完整交互或模型推理验收。

两平台均由真实旧0.2.0-rc.2产生独立JSONL，再用新包0.2.1-rc.3恢复；原始日志前缀逐字节保留、工具不重放、已有回执进入新请求、不完整尾帧恢复及序号唯一性均通过。这里只操作隔离会话，不打开用户真实会话库。

本地回归：TypeScript1632通过/2跳过，适配器14通过；两平台DSH各53通过；Windows Rust427通过/34忽略；完整Python45文件通过（43个unittest文件369条用例，含条件跳过，另2个脚本通过），安全工具额外7条通过。Windows的Unix套接字夹具增加Unix条件后全套重跑通过，未放宽生产端点白名单。初次Python解释器缺少依赖的失败保留记录，最终使用独立QA环境和独立浏览器缓存重跑通过，未修改正式Python环境。

限制：外部完整Harness在PolyStrata8K的固定提示/工具预算超窗仍未解决；当前2B蒸馏端点仅文本。未重跑原12题评测、完整图片/工具任务集、真实HTB扫描或破坏性卸载。应用更新签名不是Windows Authenticode，签名和清单校验不等于已实际完成跨版本自动更新安装。[持续已知问题](KNOWN-ISSUES-DSH-LOCAL-MODELS.md)。

源码GitHub作业仍因账户付款/支出限制未启动，作者于2026-10-25明确批准本批Windows/Linux2.1.6例外发布，不沿用Windows/Linux2.1.3或Mac2.1.6的旧批准；本地通过不冒充线上CI通过。

| 安装包 | SHA-256 |
| --- | --- |
| LocalBrain_2.1.6_x64-setup.exe | `1fb51a2bd2a40464bc7327114411225a20ae344a609c563a7a21a91057a99113` |
| LocalBrain_2.1.6_amd64.deb | `8daa70485a2bba7c2323b581b4cfa8be6ffea5c9c56242d269ea21c9de176758` |
| LocalBrain_2.1.6_amd64.AppImage | `1882e35d2ac79cfa0bec2e5236714bca11b4a9141e01c5a16bb4a343f98ee688` |
