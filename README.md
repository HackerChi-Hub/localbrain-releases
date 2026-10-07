<!-- evergreen:intro:start -->
# 方寸智匣 LocalBrain · 本地 AI 大模型与文件、媒体工作台

**把本地大模型、文件工具和媒体生成放进一个桌面应用，按自己的授权范围完成任务。**

方寸智匣是黑粉科技开发的本地 AI 工作台，面向希望在电脑上运行大语言模型、处理文件和管理语音、图片、视频、音乐任务的用户。它整合模型下载、导入、启停、流式对话、附件和工具调用；模型规划任务，程序保留真实执行回执。Apple Silicon Mac 提供 MLX、Metal llama.cpp、Splash 与 Prism 集成，Windows 使用适配的 llama.cpp / Prism，Linux 为预览支持。

[**立即下载方寸智匣**](https://github.com/HackerChi-Hub/localbrain-releases/releases/latest) · [官网与使用介绍](https://hyphentech.top/localbrain) · [反馈问题](https://github.com/HackerChi-Hub/localbrain-releases/issues)

[简体中文](README.md) · [繁體中文](README.zh-TW.md) · [English](README.en.md)
<!-- evergreen:intro:end -->

<!-- recent-features:start -->
## 近期新增与改进（最近 5 项）

- **1.7.1** · 新版 Splash 启动与严格工具参数兼容：保留时间、前导零、中文引号和工具标签。
- **1.7.0** · 表格按真实行列分页读取，可选择工作表和单元格区域，附件显示截取范围。
- **1.7.0** · 提供求和、计数、最小值与最大值的程序统计，避免把模型估算当成计算结果。
- **1.7.0** · 文档安全追加、旧值保护与独立对账；重算副本保留原件。
- **1.7.0** · 文档与演示文稿支持渲染预览及排版预警；完整模型主导办公任务仍待验收。
<!-- recent-features:end -->

## 最新下载：1.7.1

| 平台 | 安装包与状态 |
| --- | --- |
| Apple Silicon Mac | [DMG](https://github.com/HackerChi-Hub/localbrain-releases/releases/download/v1.7.1/LocalBrain_1.7.1_aarch64.dmg)，签名、镜像、安装启动和连续两次严格工具参数实测通过；未苹果公证 |
| Windows x64 | [安装程序](https://github.com/HackerChi-Hub/localbrain-releases/releases/download/v1.7.1/LocalBrain_1.7.1_x64-setup.exe)，同源CI构建、更新验签；未真机功能验收 |
| Linux x64 | [AppImage](https://github.com/HackerChi-Hub/localbrain-releases/releases/download/v1.7.1/LocalBrain_1.7.1_amd64.AppImage) · [Debian包](https://github.com/HackerChi-Hub/localbrain-releases/releases/download/v1.7.1/LocalBrain_1.7.1_amd64.deb)，预览支持，未真机功能验收 |

[发行说明及全部校验文件](https://github.com/HackerChi-Hub/localbrain-releases/releases/tag/v1.7.1)。Mac拖入应用程序，Windows运行安装程序；Linux AppImage先执行`chmod +x LocalBrain_1.7.1_amd64.AppImage`，Debian/Ubuntu执行`sudo apt install ./LocalBrain_1.7.1_amd64.deb`。更新包带签名，Linux自动更新使用AppImage。旧发行保留。

<!-- evergreen:capabilities:start -->
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
<!-- evergreen:capabilities:end -->

## SHA-256

| 文件 | 散列 |
| --- | --- |
| Mac DMG | `bd0a2c935b8ccc7b50660edc78363568cc0017cbeb862a058e2ecff1c7931be4` |
| Windows安装程序 | `f811b61aa7b79b04f26801357a0d29752d4ba8a465413734d68947fa00f5ef43` |
| Linux AppImage | `eea27972039c67886edc9f4d847d9360bfa3bc4418142d8d89e47e077ceea1b3` |
| Linux Debian包 | `b0626facfc9a4bfe59ccdbe6d43d97949558e367bfa6711972f44d541b36f42d` |

本仓提供安装包与说明，不是开发源码目录。专有软件，© HyphenTech · 黑粉科技。

<!-- evergreen:use-cases:start -->
## 适合哪些人

| 需求 | 方寸智匣怎样帮助你 |
| --- | --- |
| 在 Mac 上部署本地大模型 | 集中管理已集成引擎和模型，不必分别维护多个桌面入口 |
| 让 AI 处理本地文件 | 选择支持工具调用的模型，授权工作范围，核对执行回执 |
| 用 AI 做办公与媒体任务 | 文件、文档、语音、图片、视频和音乐工作台按已集成模型能力使用 |
| 把本地模型接入其他工具 | 使用本地模型接口与 MCP 集成，兼容性以客户端和模型能力为准 |

## 第一次使用

1. 按系统下载安装包，打开后选择适合硬件的模型与引擎。
2. 下载或导入模型并启动，先完成一次普通对话。
3. 处理文件时选择支持工具调用的模型，明确授权范围，再核对真实结果。

模型权重需要另行下载，安装包不包含模型。语音、图片和视频功能取决于已集成模型，不能把一个模型的能力套用到所有模型。

## 常见问题

**本地 AI 能离线使用吗？** 已准备好运行环境和模型后，本地推理可以留在电脑上；下载、依赖、更新、网页及主动连接外部服务仍需要网络。

**Windows 和 Linux 也能运行 MLX 吗？** 当前 MLX 与 Splash 集成为 Mac 专属；Windows 使用适配的 llama.cpp / Prism，Linux 为预览支持。安装包构建通过不等于对应系统已完成所有实机验收。

**能代替办公排版验收吗？** 可以读取、编辑并预览已支持的文件；完整模型主导办公任务仍待验收，公式重算需要相应环境，渲染截图也不能代替人工排版检查。

**安装遇到提示怎么办？** Mac 包未完成苹果公证，请核对官方来源与校验值后按系统提示允许打开；Windows、Linux 按对应安装包说明操作。
<!-- evergreen:use-cases:end -->

<!-- evergreen:discovery:start -->
## 黑粉科技自制软件

按需求选用，也可以组合使用：本地模型交给方寸智匣，云端接口交给黑粉盒子，录制教程用黑粉录屏，影视英语学习用光影词库。

| 软件 | 适合解决的问题 | 官方下载 |
| --- | --- | --- |
| 方寸智匣 LocalBrain | 本地大模型、文件与媒体工作台 | [下载方寸智匣](https://github.com/HackerChi-Hub/localbrain-releases) |
| 黑粉录屏 HyphenScreen | 屏幕录制、教程剪辑、字幕与动画 | [下载黑粉录屏](https://github.com/HackerChi-Hub/HyphenScreen-Releases) |
| 光影词库 ScreenLex | 看电影学英语、字幕查词、生词复习 | [下载光影词库](https://github.com/HackerChi-Hub/screenlex-download) |
| 黑粉盒子 HyphenBox | 免费 AI API 发现、模型核验与统一接口 | [下载黑粉盒子](https://github.com/HackerChi-Hub/hyphenbox-release) |

## 分享与反馈

分享给朋友时，请复制本仓库首页或[官方网站](https://hyphentech.top)，让对方按自己的系统下载当前安装包。欢迎收藏仓库、点亮 Star，或在本仓库 Issues 提交使用体验、需求和脱敏问题。

关注[哔哩哔哩「黑粉科技」](https://space.bilibili.com/1846717524)、[YouTube 黑粉科技频道](https://www.youtube.com/@hyphentech_top)；公众号和视频号搜索「黑粉科技」，查看实际演示与使用教程。
<!-- evergreen:discovery:end -->
