# 方寸智匣 · LocalBrain

**简体中文** · [繁體中文](README.zh-TW.md) · [English](README.en.md)

把电脑变成私有 AI 工作台：管理本地模型、进行对话、调用工具，并连接已有的 AI 客户端。

[官网](https://hyphentech.top/localbrain) · [下载与更新](https://github.com/HackerChi-Hub/localbrain-releases/releases)

## 最新版本

[下载 Mac 1.3.16](https://github.com/HackerChi-Hub/localbrain-releases/releases/download/v1.3.16/LocalBrain_1.3.16_aarch64.dmg) · [Windows 1.3.8 下载页](https://github.com/HackerChi-Hub/localbrain-releases/releases/tag/v1.3.8)

Mac 安装包 SHA-256：`9b3eebd902c25305d906c9118900d8fa7f547468e4f85f5e2d1c6901e1df6fa3`

- **Mac：1.3.16**，适用于 Apple Silicon。语音合成的模型下拉现在会列出 OmniVoice——此前它权重下完、后端也能跑，列表里就是不显示；同类遗漏已由一条新的自动检查拦住。模型的联网检索现在可以在设置里关掉；没授权工作区或没开终端时，相应工具不再出现在模型的工具清单里。网页检查没能返回结果时不再报成「页面可能死循环」，交付也不会被这样一次中断永久拦住。设置合并到一个入口、按九类分栏，每项只显示关键词，长说明收进悬浮提示；对话页「参数」与设置页用同一套界面。读取目录与可写工作区分开授权；项目构建／测试命令须逐次确认；网页预览可选择受限联网。
- **Windows：1.3.8** 仍为当前已发布安装包。多语言源码已同步，Windows 新安装包另行手动构建；Mac 版本号不代表 Windows 已更新。
- 在「设置 → 界面语言」选择语言，也可以跟随系统；立即生效并保存。不改变对话、模型回答、代码及文件路径；后端原始日志保留原文。

## 功能

- **模型管理**：下载、启动、停止、导入已有模型。Mac 支持 MLX 与 llama.cpp；Windows 支持 llama.cpp，按设备选择 CUDA 或 CPU。
- **模型目录与能力说明**：涵盖语言、语音、图像和视频。Bonsai 2 使用独立 Prism 运行环境。模型能力及平台限制以应用内说明为准。
- **硬件感知参数**：使用本机内存、显存和模型元数据计算运行预算与上下文建议；建议值不是所有任务都不会内存不足的保证。
- **对话与工具**：流式回复、附件、取消、上下文管理；网页搜索、文档处理及受限本地文件工具。工具成功不代表内容正确，产物仍需检查。
- **文档工作台**：DocFactory 支持 DOCX、PPTX、XLSX、PDF 的读取、创建、编辑、模板填充与预览检查。
- **本地媒体**：Mac 可运行已支持的语音识别、语音合成、图像、视频及音乐后端；能力取决于模型包及硬件。
- **客户端集成**：提供本地兼容接口和 MCP 配置。OpenCode 等可使用本地语言模型；Codex、Claude Code 建议保留云端模型，通过 MCP 使用本地工具。
- **可配置工作台**：可信本地 stdio MCP 服务器、四种主题、分平台自动更新。

## 平台差异

| 功能 | Apple Silicon Mac | Windows x64 |
|---|---|---|
| 语言模型 | MLX / llama.cpp（Metal） | llama.cpp（CUDA / CPU） |
| 对话、网页及文档工具 | 支持 | 支持 |
| MLX 媒体后端 | 已支持的模型可用 | 不支持，隐藏相关入口 |
| 三语言界面起始版本 | 1.2.70 | 待手动构建 |

识别到模型文件不代表支持其架构；运行效果取决于模型、量化、运行时和硬件。

## 开始使用

1. 下载对应平台安装包。Mac 将应用拖入「应用程序」；Windows 执行安装程序。
2. 在「设置」安装所需运行环境，选择界面语言、模型目录及下载来源。
3. 在「发现」下载合适的模型，或导入已有模型目录。
4. 启动语言模型，在「对话」使用；通过「集成」连接外部客户端。

推理可以在本机进行；首次下载、运行环境安装、更新检查和联网搜索需要网络。只有明确加入的外部模型目录才会被读取。语言切换不会将对话发送给翻译服务。

## 开发

本仓库仅提供下载及使用说明。以下命令面向已获得源码的开发者，不能在本下载仓库直接执行。

React / TypeScript / Vite 前端，Tauri / Rust 桌面层。

```bash
npm install
npm test
npm run build
npm run tauri:dev
```

Mac：`npm run package`。Windows：在 Windows 上运行 `npm run package:win`。发布前检查安装包、签名、线上下载和分平台更新清单。

词典位于 `src/locales/`，只处理显示文案，不修改提示词、工具参数或用户内容。

## 许可

专有软件。模型遵守各自许可；应用下载不包含模型权重。© HyphenTech · 黑粉科技。
