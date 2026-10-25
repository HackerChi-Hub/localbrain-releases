# Windows / Linux 2.1.7 验收记录

本批修复 Windows 已有图像环境安装完成后仍显示“部分安装 · 待修复”的状态检测错误。原检测只遍历 lib/python*/site-packages，漏掉 Windows 的 Lib/site-packages；新检测先识别 Windows 布局，再保留 Unix 布局。只查文件，不在每次刷新时加载 Torch，也不升级已有环境、CUDA、驱动或模型。

源码构建提交：`f646813d199df840f1fad8698557afe9fda67104`。Mac 保留已发布 2.1.6 包及独立更新清单，不把本批视为 Mac 新包。

Windows：原生应用在隔离数据与 WebView profile 中，只读引用本机已有 torch-env，实际 runtime_status 返回 torch=true、diffusers=true，组件状态为 managed；真实 UI 显示“已安装 · 方寸智匣管理”，没有“部分安装”或“下载并安装”。候选执行文件与安装包解出执行文件逐字节一致，安装后执行文件再次核对一致，并在安装版重跑原生状态检查。安装前后正式应用、Harness、Codex、Claude 配置哈希保留，不恢复、不重写接入。真实 Torch2.14.1+cu126、Diffusers0.41.0.dev0、Torchvision、ZImagePipeline、QwenImage21Pipeline 可导入，CUDA可用。导入成功不等于真实出图验收，未下载图像模型或生成图片。

Linux：在 Ubuntu22.04 WSL2 独立构建 Debian 与 AppImage。两包版本、架构、DEB/APP类型、官方固定Node22.23.3摘要、DocFactory资源与包内DSH宿主初始化通过，分别在Xvfb启动20秒。Debian已升级安装，执行文件与解包内容一致。直接抽取同一生产 has_module 函数，用Linux rustc测试Windows和Unix目录布局通过；WSL2结果不冒充裸机GPU或完整桌面交互验收。

本批测试：Windows Rust428通过/34忽略，TypeScript1632通过/2跳过，适配器14通过；Windows/Linux随包DSH0.2.1-rc.3各53通过。初次主源码DSH测试读取到未纳管的旧rc.2依赖而失败，日志保留；改用本次实际归档构建目录的随包rc.3依赖重跑53项通过。本次未重跑全套Python或旧12题模型评测，不复用旧数字。

已知限制：完整独立Harness桌面的PolyStrata8K固定提示/工具预算超限仍未解决；当前2B端点仅文本；真实出图、完整图片/工具任务集及Linux裸机GPU推理尚未验收。应用更新签名不是Windows Authenticode，也不等于已实际验证自动更新跨版本安装。

源码CI作业40203809020因GitHub账户付款/支出额度限制未启动。本地测试通过不冒充线上CI通过。作者于2026-10-25明确批准本批Windows/Linux2.1.7例外发布下载包并上线README与Blog；此记录不沿用2.1.6批准。

| 安装包 | SHA-256 |
| --- | --- |
| LocalBrain_2.1.7_x64-setup.exe | `304b9d00203c8cdf94ba7bf210510ee764a01d61f6c67f60a3eeb1e902141a43` |
| LocalBrain_2.1.7_amd64.deb | `07e0d22feab9f4b8d34832bfe3e79832f4b628eefb8bbc8947e6d79e82aee06d` |
| LocalBrain_2.1.7_amd64.AppImage | `dd51274347276752e36ec42fb9e6fc208387ba08693ad67cf4d6ac0faa76a859` |
