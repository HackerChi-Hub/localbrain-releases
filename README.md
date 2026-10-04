# 方寸智匣 · LocalBrain

**简体中文** · [繁體中文](README.zh-TW.md) · [English](README.en.md)

本地模型、文件工具与媒体工作台放进同一个桌面应用。你选择模型和授权范围，模型规划任务、调用工具，程序保留真实执行回执。

[官网](https://hyphentech.top/localbrain) · [全部发行](https://github.com/HackerChi-Hub/localbrain-releases/releases) · [安全检查实测教程](https://hyphentech.top/localbrain-network-security/)

## 最新下载：1.6.9

| 平台 | 安装包与状态 |
| --- | --- |
| Apple Silicon Mac | [DMG](https://github.com/HackerChi-Hub/localbrain-releases/releases/download/v1.6.9/LocalBrain_1.6.9_aarch64.dmg)，已本机安装及原版27B工具链实测；未苹果公证 |
| Windows x64 | [安装程序](https://github.com/HackerChi-Hub/localbrain-releases/releases/download/v1.6.9/LocalBrain_1.6.9_x64-setup.exe)，同源CI构建、更新验签；未真机功能验收 |
| Linux x64 | [AppImage](https://github.com/HackerChi-Hub/localbrain-releases/releases/download/v1.6.9/LocalBrain_1.6.9_amd64.AppImage) · [Debian包](https://github.com/HackerChi-Hub/localbrain-releases/releases/download/v1.6.9/LocalBrain_1.6.9_amd64.deb)，预览支持，未真机功能验收 |

[发行说明及全部校验文件](https://github.com/HackerChi-Hub/localbrain-releases/releases/tag/v1.6.9)。Mac拖入应用程序，Windows运行安装程序；Linux AppImage先执行`chmod +x LocalBrain_1.6.9_amd64.AppImage`，Debian/Ubuntu执行`sudo apt install ./LocalBrain_1.6.9_amd64.deb`。更新包带签名，Linux自动更新使用AppImage。旧发行保留。

## 本版修正

无效安全目标在批准前拒绝，执行时再次核对；报告返回实际分页参数、下一页请求、持久化去重证据数量；缺失修复字段保持未知；漏洞库最近成功准备状态与离线扫描分开。共同机制不按模型名称特判，不替模型改写参数。

Mac真实安装版已完成范围确认、原生工具批准、Juice Shop镜像扫描与证据读取。170条是组件匹配，不是已验证可利用漏洞。模型仍可能误解证据或给出未验证升级建议，须核对原始报告。[验收记录](https://github.com/HackerChi-Hub/localbrain/blob/main/docs/RELEASE_1.6.9_VERIFICATION.md)。

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
| Mac DMG | `0fb3427d1331c342b2bbe668763c98f3b652a5b66a7d4162e8c21074f0ff8d6e` |
| Windows安装程序 | `4271ec946a9d9248c6f3a5341a13d697f19fccb7a62606566b0652bf5f813b12` |
| Linux AppImage | `4f97d49f724cc4cbf912bbcc92e1596e6c2607e7e961f100df528725d88e3db7` |
| Linux Debian包 | `2cc8bd8da1ea328c53b9782060cb5bc118524130e916755bf1479c50ecf409f8` |

本仓提供安装包与说明，不是开发源码目录。专有软件，© HyphenTech · 黑粉科技。
