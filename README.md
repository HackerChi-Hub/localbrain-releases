# 方寸智匣 · LocalBrain

**简体中文** · [繁體中文](README.zh-TW.md) · [English](README.en.md)

本地模型、文件工具与媒体工作台放进同一个桌面应用。你选择模型和授权范围，模型规划任务、调用工具，程序保留真实执行回执。

[官网](https://hyphentech.top/localbrain) · [全部发行](https://github.com/HackerChi-Hub/localbrain-releases/releases) · [安全检查实测教程](https://hyphentech.top/localbrain-network-security/)

## 最新下载：1.7.1

| 平台 | 安装包与状态 |
| --- | --- |
| Apple Silicon Mac | [DMG](https://github.com/HackerChi-Hub/localbrain-releases/releases/download/v1.7.1/LocalBrain_1.7.1_aarch64.dmg)，签名、镜像、安装启动和连续两次严格工具参数实测通过；未苹果公证 |
| Windows x64 | [安装程序](https://github.com/HackerChi-Hub/localbrain-releases/releases/download/v1.7.1/LocalBrain_1.7.1_x64-setup.exe)，同源CI构建、更新验签；未真机功能验收 |
| Linux x64 | [AppImage](https://github.com/HackerChi-Hub/localbrain-releases/releases/download/v1.7.1/LocalBrain_1.7.1_amd64.AppImage) · [Debian包](https://github.com/HackerChi-Hub/localbrain-releases/releases/download/v1.7.1/LocalBrain_1.7.1_amd64.deb)，预览支持，未真机功能验收 |

[发行说明及全部校验文件](https://github.com/HackerChi-Hub/localbrain-releases/releases/tag/v1.7.1)。Mac拖入应用程序，Windows运行安装程序；Linux AppImage先执行`chmod +x LocalBrain_1.7.1_amd64.AppImage`，Debian/Ubuntu执行`sudo apt install ./LocalBrain_1.7.1_amd64.deb`。更新包带签名，Linux自动更新使用AppImage。旧发行保留。

## 本版 Splash 兼容修复

修复新版 Splash 启动接口，以及工具参数文字被省略和严格约束报错。Mac已安装1.7.1，从软件启动普通27B模型，连续两次真实请求完整保留时间、前导零、中文引号和工具标签，耗时1.46秒与0.82秒。受管入口不修改上游安装或模型权重，其他候选运行环境升级未纳入正式包。[1.7.1验收记录](https://github.com/HackerChi-Hub/localbrain/blob/main/docs/RELEASE_1.7.1_VERIFICATION.md)。

## 继承的办公优化

XLSX支持真实行列分页、工作表目录与指定区域读取；附件明确标注参考摘要和截取范围。提供求和、计数、最小值、最大值的程序统计。安全追加与旧值保护、独立公式结果和原始明细对账分开验收，文档与简报支持渲染预览。聊天与图形界面共用实现，不按模型名称特判。

1.7.0完成真实文档工具链和Mac包内代码验证；原始费用表指定区域21行完整读回，数量列统计303（不是费用总额）。完整模型主导办公任务及Windows/Linux真机功能仍待验收；缺少LibreOffice时不能宣称公式已重算，渲染截图不等于排版合格。[办公验收记录](https://github.com/HackerChi-Hub/localbrain/blob/main/docs/RELEASE_1.7.0_VERIFICATION.md)。

## 功能和使用

本地模型下载、导入、启停；流式对话、附件、思考控制、硬件感知上下文预算与任务恢复；已授权文件、项目构建测试、文档和网页工具；已集成模型的语音、图片、视频、音乐工作台；MCP、本地模型接口、存储管理和三语界面。媒体详细参数依模型能力，不保证所有模型支持笑声、精确停顿或多参考图。

1. 启动支持工具调用的模型，进入设置的网络安全入口。
2. 选择内置练习靶场、自己的主机或服务、自己的容器。
3. 选择目标和模型检查／直接检查，核对范围并确认。
4. 环境自动准备，模型以原生批准调用工具并读取证据；维护默认折叠。

只检查自己拥有或明确获授权目标。主机授权绑定实际地址和端口，不扩展至其他目标；主要覆盖TCP、明文HTTP及限定泄露规则，不是无限制漏洞扫描或自动利用平台。项目工作目录限制不等于系统沙箱，镜像审计不等于运行中应用的完整评估。

## 平台与隐私

Mac支持已集成MLX、Metal llama.cpp、Splash与Prism；Windows使用适配llama.cpp/Prism，不支持MLX/Splash。Linux近期新增预览，受管llama.cpp/Prism下载未完整接入，不支持MLX/Splash。构建成功不代替真机验收。

本地推理不要求对话上传云端；下载、依赖、更新、网页与外部服务仍可能联网。应用不捆绑模型权重，模型许可证独立。

## SHA-256

| 文件 | 散列 |
| --- | --- |
| Mac DMG | `bd0a2c935b8ccc7b50660edc78363568cc0017cbeb862a058e2ecff1c7931be4` |
| Windows安装程序 | `f811b61aa7b79b04f26801357a0d29752d4ba8a465413734d68947fa00f5ef43` |
| Linux AppImage | `eea27972039c67886edc9f4d847d9360bfa3bc4418142d8d89e47e077ceea1b3` |
| Linux Debian包 | `b0626facfc9a4bfe59ccdbe6d43d97949558e367bfa6711972f44d541b36f42d` |

本仓提供安装包与说明，不是开发源码目录。专有软件，© HyphenTech · 黑粉科技。
