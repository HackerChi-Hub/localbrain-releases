<!-- evergreen:intro:start -->
![LocalBrain · HyphenTech](screenshots/readme-hero.svg)

# 方寸智匣 LocalBrain · 本地 AI 大模型与文件、媒体工作台

**把本地大模型、文件工具和媒体生成放进一个桌面应用，按自己的授权范围完成任务。**

方寸智匣是黑粉科技开发的本地 AI 工作台，面向希望在电脑上运行大语言模型、处理文件和管理语音、图片、视频、音乐任务的用户。它整合模型下载、导入、启停、流式对话、附件和工具调用；模型规划任务，程序保留真实执行回执。Apple Silicon Mac 提供 MLX、Metal llama.cpp、Splash 与 Prism 集成，Windows 使用适配的 llama.cpp / Prism，Linux 为预览支持。


<p align="center"><a href="README.md">简体中文</a> | <a href="README.zh-TW.md">繁體中文</a> | <a href="README.en.md">English</a></p>

<p align="center"><a href="https://github.com/HackerChi-Hub/localbrain-releases/releases/latest"><img alt="立即下载" src="https://img.shields.io/badge/立即下载-18181b?style=for-the-badge&amp;logo=github" /></a> <a href="https://hyphentech.top"><img alt="官网" src="https://img.shields.io/badge/官网-334155?style=for-the-badge" /></a></p>
<!-- evergreen:intro:end -->

<!-- recent-features:start -->
## 近期新增与改进（最近 5 项）

- **1.9.1** · 普通聊天自动整理改为增量语义摘要，复用有效旧摘要、合并新增历史；工具会话改用精简中文摘要，保留官方持久化与恢复机制。
- **1.9.0** · 对话输入区新增“立即压缩”，空闲时可主动整理较早上下文；相同历史重复点击不重复推理，底栏统一标为“上下文已压缩”。
- **1.9.0** · 原始消息独立归档、摘要另存；失败或取消保留原文，恢复不重执行已完成工具，来源编辑或知识设置变化后不复用旧普通摘要。
- **1.8.9** · 技能与记忆支持发现外部代理资料、只读挂载或复制导入、内部编辑与按需读取；自动、仅手动、完全关闭模式分别可选，正式版隐藏开发回收站。
- **1.8.8** · 下载速度使用滑动窗口移动平均，补齐实时速度与预计剩余时间；断流后撤下旧读数并提示等待数据，停滞时速度平滑归零。
<!-- recent-features:end -->

<!-- evergreen:demos:start -->
## ▶ 使用演示

**本地模型启动、长任务与实际交付**

| Bilibili | YouTube |
| :---: | :---: |
| [![B 站观看](https://img.shields.io/badge/Bilibili-00a1d6?style=for-the-badge&logo=bilibili&logoColor=white)](https://www.bilibili.com/video/BV11Xab6GEjy/) | [![YouTube 观看](https://img.shields.io/badge/YouTube-ff0033?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/watch?v=A6nRwKU8fao) |

视频演示的是拍摄时的版本；安装包与当前功能以本页正式发行信息为准。视频为中文讲解。
<!-- evergreen:demos:end -->

## 最新下载：Mac 1.9.1；Windows、Linux Debian 1.7.6

| 平台 | 安装包与状态 |
| --- | --- |
| Apple Silicon Mac 1.9.1 | [DMG](https://github.com/HackerChi-Hub/localbrain-releases/releases/download/v1.9.1/LocalBrain_1.9.1_aarch64.dmg)，已安装并实测自动增量摘要、“立即压缩”、重复点击和重启续聊；严格本地签名与独立更新签名通过，未苹果公证 |
| Windows x64 | [安装程序](https://github.com/HackerChi-Hub/localbrain-releases/releases/download/v1.7.6/LocalBrain_1.7.6_x64-setup.exe)，Windows 本机构建、包内资源及更新签名校验通过；尚未完成安装后界面和模型功能验收 |
| Linux x64 | [Debian包](https://github.com/HackerChi-Hub/localbrain-releases/releases/download/v1.7.6/LocalBrain_1.7.6_amd64.deb)，Ubuntu 22.04 WSL 构建、安装和 20 秒启动检查通过；预览支持，尚未完成真实桌面与模型功能验收；本版无 AppImage |

[Mac 1.9.1 发行说明及校验文件](https://github.com/HackerChi-Hub/localbrain-releases/releases/tag/v1.9.1)；[Windows、Linux 1.7.6 发行说明](https://github.com/HackerChi-Hub/localbrain-releases/releases/tag/v1.7.6)。Mac 拖入应用程序；Debian/Ubuntu 执行 `sudo apt install ./LocalBrain_1.7.6_amd64.deb`。旧发行保留。

本轮上下文整理、技能与记忆的行为、实测与限制见 [1.9.1 验收记录](VERIFICATION-1.9.1.md)。原文与摘要分开保存，恢复不重执行已完成工具；摘要仍有损，可能遗漏事实。历史媒体实测见 [1.8.0 验收记录](VERIFICATION-1.8.0.md)，保留其语音、编辑、音乐和实验视频的问题说明。Windows、Linux没有本轮新包；Linux自动更新清单仍保留1.7.2。GitHub账户付款或支出限制使远端作业未启动，本地检查不冒充远端CI通过。

<!-- evergreen:screenshots:start -->
## 实际界面

下面沿用仓库中已公开的 1.4.6 版 macOS 截图，展示模型管理与工具接入布局；不是最新版本截图，模型与内存数字仅代表拍摄时的状态。

![方寸智匣本地 AI 模型管理工作台，历史版本 1.4.6](screenshots/zh-CN/home.png)

![方寸智匣本地工具与 AI 客户端接入，历史版本 1.4.6](screenshots/zh-CN/integrations.png)
<!-- evergreen:screenshots:end -->

## 1.8.0 实际对话与下载页

以下为本机安装版实拍，顶部控制条已裁除；原始运行记录保留。下载页沿用同轮Wuli安装验收截图，对话为本轮媒体实测。

![1.8.0 实际对话与下载页](screenshots/1.8.0-media-chat.png)

![Wuli MiniMax-H3-Turbo](screenshots/1.8.0-wuli-download.png)

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
| Mac DMG | `74725034276f594c5d01556c35a6e12f10c4a636a1b8c9bdea355dd23466d148` |
| Windows安装程序 | `e593eb820bdfc9588b4efc62ec17a19a71bfc90fac6b1a84a04a8506d0805389` |
| Linux Debian包 | `8fd14a5b1a88131d4a9e8dc5e4444e68d706eec1468c71588f99ce91756fee6d` |

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
