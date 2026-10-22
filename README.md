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

- **2.1.1** · 压缩后仍保留你给出的账户、目标与参数；网页内容和工具回执不能冒充你的要求。
- **2.1.1** · 切换或删除对话后，安全任务草稿不再串到其他对话；确认框显示确切操作标题，取消后保留原对话。
- **2.1.0** · 「单轮时长」改为整轮硬上限，到点分别报告耗时在预填还是生成，长任务更可预期。
- **2.1.0** · 网页证据：控件带链接目标、正文未读完给出续读区间、核验失败区分原因且不透露答案对错。
- **2.1.0** · 授权到期明确要求停手；本地清理入口整批预检并核对保护登记，避免误删保留资源。
<!-- recent-features:end -->

<!-- windows-performance:start -->
## Windows 2.0.1：小窗口任务与运行速度

针对本地模型的8K上下文，工具说明按需加载，短片段不反复摘要；压缩检查点附加真实工具回执的短记录，帮助模型识别已完成步骤。普通请求不增加常驻提示，原始记录保留，成果效果仍由用户判断。

2026-10-20，本机RTX 4070 Laptop 8GB显存、32GB内存，PolyStrata运行Qwen3.6-35B-A3B UD Q3_K_M：最近日志常见解码速度约75～90 token/秒，包含思考，不等于屏幕文字速度。以下是只读合成工具任务的单次耗时：

| 场景 | 旧版2.0.0 | 2.0.1（历史样本） |
| --- | --- | --- |
| 同轮双工具读取，未压缩 | 8.38秒 | 7.91秒 |
| 顺序读取，含一次压缩 | 未做同条件对照 | 19.70秒 |
| 失败后压缩、重试并结束，含两次压缩 | 未做同条件对照 | 31.66秒 |

这不是多轮性能基准；2.0.0也已包含部分优化，不能据此宣称相对未优化版稳定提速6%。压缩本身有耗时，最近一次摘要约5秒；减少重复执行可能节省整项任务时间，但尚未量化。五类真实模型回归及47条引擎测试通过，不代表所有任务都能完成，也不是原12题重测。见[测试方法与限制](PERFORMANCE-2.0.1-WINDOWS.md)。

以上为2026-10-20的历史测试样本；当前安装包与更新清单以上方/下方最新下载区为准。
<!-- windows-performance:end -->

<!-- evergreen:demos:start -->
## ▶ 使用演示

**本地模型启动、长任务与实际交付**

| Bilibili | YouTube |
| :---: | :---: |
| [![B 站观看](https://img.shields.io/badge/Bilibili-00a1d6?style=for-the-badge&logo=bilibili&logoColor=white)](https://www.bilibili.com/video/BV11Xab6GEjy/) | [![YouTube 观看](https://img.shields.io/badge/YouTube-ff0033?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/watch?v=A6nRwKU8fao) |

视频演示的是拍摄时的版本；安装包与当前功能以本页正式发行信息为准。视频为中文讲解。
<!-- evergreen:demos:end -->

## 最新下载：Windows 2.0.8 · Mac 2.1.1 · Linux 2.0.8

Mac 2.1.1 修复压缩后用户原文丢失与会话草稿串用：压缩时在语义摘要之外保留你给出的目标、账户、参数与限制，网页内容与工具回执不能冒充你的要求；草稿与安全任务标记随所属对话，删除后丢弃。单轮时长改为整轮硬上限并分别报告预填/生成耗时；网页证据支持控件链接目标、正文续读区间、核验失败分因且不透露候选对错；授权中途到期明确要求停手；本地清理入口整批预检并核对保护登记。真实 HTB 握手仍未建立：本轮实测该网络到不了平台边缘（10 个节点与 TCP/UDP 配置均无服务端回应），不能据此排除平台或账号原因；原生批准、含待办操作的重启恢复与 Windows/Linux 本轮实收未完成。Windows 2.0.8 与 Linux 2.0.8 保持原版本。[安全能力与限制](SECURITY-CAPABILITIES.md) · [本轮验收记录](https://github.com/HackerChi-Hub/localbrain/blob/main/docs/RELEASE_2.1.1_MAC_VERIFICATION.md)。

Mac 1.9.9修复下载终态及Sushi启动错误提示，包括状态刷新遮蔽内存原因的问题。最终安装版已验证真实预检拒绝、恢复32K后完整常驻加载与中文响应；同权重常驻／32 GiB精确SSD分别驻留44.20／31.21 GiB。模式手动选择，保存并重启生效，不自动降级。见[最终安装与实测范围](VERIFICATION-1.9.9-MAC.md)。下方1.9.8段落保留其当时验收边界。



Windows/Linux 2.0.8安装包已构建验收：Windows原生聊天、工具写入与压缩续答通过，已安装且配置哈希不变；Linux Debian与AppImage的资源、包内DSH和WSL2启动检查通过，Debian已安装。Linux未做裸机桌面/GPU验收，安全隔离须本平台反向验证通过。Mac 2.0.7既有资产保留。见[验收与限制](VERIFICATION-2.0.8-WIN-LINUX.md)。下方候选和旧版本段落均为历史状态。


2.0.8新增模型设置路径校验修复与网页CTF基础。网页传输6项在Windows/Linux通过，但生产隔离浏览器、原生批准和真实模型CTF完整链路仍未验收；须本平台隔离验证通过才能执行。[机制与限制](SECURITY-WEB-CTF.md)。

| 平台 | 安装包与状态 |
| --- | --- |
| Apple Silicon Mac 2.1.1 | [DMG](https://github.com/HackerChi-Hub/localbrain-releases/releases/download/v2.1.1/LocalBrain_2.1.1_aarch64.dmg) · 已安装；四道本地闸与包内代码/更新签名通过；压缩保留原文、草稿隔离、整轮时长与网页证据已实测。授权商城为指定任务工具链验证（不是无提示盲测）；原生批准、含待办重启恢复与真实 HTB 未验收。尚未 Apple 公证 |
| Windows x64 | [安装程序](https://github.com/HackerChi-Hub/localbrain-releases/releases/download/v2.0.8/LocalBrain_2.0.8_x64-setup.exe) · 2.0.8已安装；原生聊天、工具及压缩续答通过，更新签名通过，非Authenticode |
| Linux x64 | [Debian](https://github.com/HackerChi-Hub/localbrain-releases/releases/download/v2.0.8/LocalBrain_2.0.8_amd64.deb) · [AppImage](https://github.com/HackerChi-Hub/localbrain-releases/releases/download/v2.0.8/LocalBrain_2.0.8_amd64.AppImage) · 2.0.8，包内DSH与Ubuntu22.04 WSL2+Xvfb启动核对通过；Debian已安装，预览支持，未代替裸机/GPU验收 |

[2.1.1 发行说明及校验文件](https://github.com/HackerChi-Hub/localbrain-releases/releases/tag/v2.1.1)。Mac 拖入应用程序；Debian/Ubuntu 执行 `sudo apt install ./LocalBrain_2.0.8_amd64.deb`。旧发行保留。

以下Windows 2.0.1及更早段落保留其发布时的历史状态；当前平台版本以上方下载表为准。

本次更新 **Windows 2.0.1**：压缩检查点附加最近3条程序原始回执短记录，帮助识别已完成操作；普通请求不增加常驻提示。有效压缩后，只有完整输出额度仍可容纳时才越过提前整理目标。真实模型故障注入、明确重做、失败重试、批量调用及最终包聊天/联网回归通过，本机已安装。摘要仍有损。见[验收与限制](VERIFICATION-2.0.1.md)。Mac保留1.9.9，Linux既有包不变。

以下为 1.9.1 的历史验收说明： 本轮上下文整理、技能与记忆的行为、实测与限制见 [1.9.1 验收记录](VERIFICATION-1.9.1.md)。原文与摘要分开保存，恢复不重执行已完成工具；摘要仍有损，可能遗漏事实。历史媒体实测见 [1.8.0 验收记录](VERIFICATION-1.8.0.md)，保留其语音、编辑、音乐和实验视频的问题说明。Windows、Linux Debian 已于 2026-10-17 从同一主分支提交补齐 1.9.1，启用原生工具引擎。Windows 包结构和更新签名通过；Linux 完成 WSL 安装及 20 秒启动检查。完整界面、模型和自动/手动摘要交互尚未在两平台实机验收；Linux 需手动安装 Debian 包，AppImage 自动更新保留 1.7.2。GitHub账户付款或支出限制使远端作业未启动，本地检查不冒充远端CI通过。

Mac 1.9.8 新增可选受管Sushi1.2.4：设置显式安装约71MB独立环境，发现页下载或挂载Qwen3.8 Flash Next 2.6位专用包。默认32K与完整常驻，可手动配置精确SSD预算；不依赖Homebrew，启动不更新引擎、不改系统代理和GPU内存限制。架构、分片和真实加载状态核对后才显示可用。本轮未重下125B权重，不把环境安装及跨域测试当作完整生成、速度或工具生成验收。见[使用说明](SUSHI_RUNTIME.md)与[Mac验收边界](VERIFICATION-1.9.8-MAC-SUSHI.md)。Windows1.9.8原有修复与验收保留，Linux发行不变。

## 安全能力与限制（2.0.7）

- 能做什么：在你显式授权的目标上，本地模型独立完成连接/响应头检查、网页暴露规则检测、服务识别、注入探测、TLS审计、目录发现与自写PoC验证，并导出逐字节可校验的检查报告。
- 授权约束：逐目标显式授权（单地址、最多8个端口、1–60分钟、内网单独确认）；模型不能建/扩授权，工具执行逐次原生确认，退出应用授权即失效。
- 破坏力接近零：每任务零路由内部网络，唯一出口是锁定授权端口的代理；容器降权只读无挂载；破坏性类别一律拒绝；改状态脚本二次确认。
- 不具备：漏洞利用框架、反向shell、提权、内网横向、完整CTF/HTB攻坚；需要VPN隧道的目标不可达；Windows/Linux隔离未实测、同样默认禁用。
- 法律边界在你：扫描任何不属于自己的系统须先获书面授权。

全文：[安全能力与限制说明](SECURITY-CAPABILITIES.md)


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

只检查自己拥有或明确获授权目标。主机授权绑定实际地址和端口，不扩展至其他目标；覆盖连接与响应头、网页暴露规则、服务识别、注入探测、TLS审计、目录发现与授权自写脚本，不是无限制漏洞扫描或自动利用平台。项目工作目录限制不等于系统沙箱，镜像审计不等于运行中应用的完整评估。

## 平台与隐私

Mac支持已集成MLX、Metal llama.cpp、Splash与Prism；Windows使用适配llama.cpp/Prism，不支持MLX/Splash。Linux近期新增预览，受管llama.cpp/Prism下载未完整接入，不支持MLX/Splash。构建成功不代替真机验收。

本地推理不要求对话上传云端；下载、依赖、更新、网页与外部服务仍可能联网。应用不捆绑模型权重，模型许可证独立。
<!-- evergreen:capabilities:end -->

## SHA-256

| 文件 | 散列 |
| --- | --- |
| Mac DMG | `20f44469c1ef3804657017965de199fbc0a37f3a484c0c97edecff29ae1aea72` |
| Windows安装程序 | `06f8bbb84cf538bfb9e5b5d9ad0623b343a6d09eb14ea94b1b9e7acb29e4f066` |
| Linux AppImage | `c67b9bbb2255806df557459e14877ddace203052f5b4f94e32b8ee7a2160698e` |
| Linux Debian包 | `4cfca85b29dc659f04ef2a9813fbf3d5ff055bcaf080525255c4aa62d0c7f0c9` |

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
