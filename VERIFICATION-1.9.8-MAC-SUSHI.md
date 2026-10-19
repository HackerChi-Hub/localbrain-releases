# Mac 1.9.8 Sushi 接入验收

日期：2026-10-19，Asia/Shanghai。初始源码142f8e9。用户要求受管集成、打包安装、推送，不重新下载大模型，不更新文章。

## 真实运行记录

官方Sushi1.2.4归档71,178,447字节，SHA-256与固定清单一致。隔离数据根 `/tmp/localbrain-sushi-native-qa`，模型夹具 `/tmp/localbrain-sushi-qa-model`，不写用户正式资料库。

小模型 `mlx-community/Qwen3-0.6B-4bit` 固定提交 `73e3e38d981303bc594367cd910ea6eb48349da8`，权重335,450,584字节，SHA-256 `392e8d466d56100ada00eb82031fb854297fc9e389b7d303eba3af114e87bce2`。仅测试配置添加引擎标记，权重未改。

生产命令构造器启动真实Sushi，报告版本1.2.4/MLX0.32.3，明确关闭更新检查，完成分词器读取和内存预检后，以 `ArchitectureUnsupported` / `LoadFailed` 退出：只支持 `qwen4_exp, mimo_v2, glm5_next`，普通Qwen3不能用于验收生成。测试进程已回收。此结果促成启动前架构检查，不能记录为对话或工具调用成功。

## 代码与安装交互检查

Rust回归367通过、28忽略；全量前端回归通过，新增Sushi身份、实际窗口、诊断头兼容检查。平台固定版本／归档哈希合同通过。已合并远端d64e047及其Windows1.9.8聊天和按需工具目录修复。

首个安装候选在原生设置页点击安装，真实下载官方归档、哈希校验、解压、二进制试运行后显示校验／卸载入口；保存16384上下文、8GiB预算并回读隔离配置一致。操作发现设置分区组件每次输入重建、丢焦点，已稳定组件身份；已装版本校验改为离线，独立原生组件不再测速PyPI。

真实Sushi空模型注册表服务监听18019，GET /v1/models返回空data，不能判为模型就绪。OPTIONS实际仅允许Content-Type/Authorization，不允许原有两个X-LocalBrain诊断头；已按Sushi后端登记HTTP兼容状态，省略这两个头并保留本地请求台账，不重发推理。

真实浏览器跨源对照：相同Sushi服务、相同消息、相同入口；带旧诊断头返回TypeError: Failed to fetch，使用生产chatTransport兼容函数后可读HTTP503及原始JSON“No default model configured”。这证明跨域请求可到达并返回真实无模型错误，不证明已加载模型能生成。

最终重建包、原生交互、签名和发布资产读回将在本记录继续回填。

## 未覆盖

125B专用包完整下载、完整常驻、SSD流式、生成质量、速度、原生聊天和工具生成尚未在本轮验收。历史独立安装的样本不迁移为本版结果。后续可从现有完整包继续实测；本轮不为覆盖这些项自行重下大模型。

原始架构失败日志：[unsupported-qwen3.txt](evidence/sushi-1.9.8/unsupported-qwen3.txt)。

最终安装候选重启后保留16384／8设置，连续键入32768后焦点仍停在同一数字控件；恢复32768／0并保存成功。受管版本重复校验立即返回，不再测速。发现页截图读回显示Sushi2.6位卡片、79.2GB、64GB与下载／使用已有入口；未点击大模型下载。卸载测试发现旧网页确认框静默返回，已改用原生ask，继续重建验证。

最终包已完整替换到/Applications/LocalBrain.app，12981个文件逐一SHA-256与打包应用一致；应用二进制SHA-256 eddd50d9befc11e2c54346f8d5f7fe467d6dc4620f2d6408b68f5081dcf9abbd。codesign --verify --deep --strict通过。DMG 72,679,280字节，SHA-256 c6a82c9a3c5beef5f0ab8501b3f3d19cbd9106fb532d88488d3f88230906c855，hdiutil verify通过。更新归档73,665,618字节，SHA-256 0ac4a62328d033752522dff0dd0981170070d979e27821f4cc8250753da42172；minisign独立验证签名与签名注释通过。尚未Apple公证。

Sushi运行环境从原生安装器实际下载且校验的隔离安装复制到正式LocalBrain运行环境目录，同一二进制--version确认1.2.4/MLX0.32.3；不安装Homebrew、不改配置或下载模型。原生卸载确认的最终复核遇桌面自动锁定，已向用户请求解锁；当前不宣称该最终交互已完成。
