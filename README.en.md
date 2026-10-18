<!-- evergreen:intro:start -->
![LocalBrain · HyphenTech](screenshots/readme-hero.svg)

# LocalBrain · Local AI models, file tools and media workspace

Run supported local models, work with authorized files, and manage speech, image, video and music tasks in one desktop application by HyphenTech. Models plan and call tools; the app retains real execution receipts. Apple Silicon Mac integrates MLX, Metal llama.cpp, Splash and Prism; Windows uses adapted llama.cpp / Prism; Linux is preview support.


<p align="center"><a href="README.md">简体中文</a> | <a href="README.zh-TW.md">繁體中文</a> | <a href="README.en.md">English</a></p>

<p align="center"><a href="https://github.com/HackerChi-Hub/localbrain-releases/releases/latest"><img alt="Download" src="https://img.shields.io/badge/Download-18181b?style=for-the-badge&amp;logo=github" /></a> <a href="https://hyphentech.top"><img alt="Website" src="https://img.shields.io/badge/Website-334155?style=for-the-badge" /></a></p>
<!-- evergreen:intro:end -->

<!-- recent-features:start -->
## Recent features and improvements (5 items)

- **1.9.4** · Personal-device categories cover phones, computers, embedded devices and firmware: fixed read-only collection, network scopes up to 16 ports, single-thread signature identification and offline component matching, with approval before execution.
- **1.9.4** · Batch-add targets without starting tasks. Multi-selection creates an editable chat draft; add requirements and send manually before execution. Expired authorizations are not restored.
- **1.9.3** · Restore only managed external-client keys. Empty backups retain later user additions; malformed configurations keep the current file and backup.
- **1.9.3** · Home pauses memory/backend polling when unfocused or hidden and refreshes on return; switching windows no longer scans Discover model directories.
- **1.9.3** · Search session titles and bodies and rename inline. Streamed text and input skip unrelated sidebar and attachment renders.
<!-- recent-features:end -->

<!-- evergreen:demos:start -->
## ▶ Watch a practical demo

**Starting local models, longer tasks and actual delivery**

| Bilibili | YouTube |
| :---: | :---: |
| [![Watch on Bilibili](https://img.shields.io/badge/Bilibili-00a1d6?style=for-the-badge&logo=bilibili&logoColor=white)](https://www.bilibili.com/video/BV11Xab6GEjy/) | [![Watch on YouTube](https://img.shields.io/badge/YouTube-ff0033?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/watch?v=A6nRwKU8fao) |

These videos show the versions available when recorded. Use the current release information on this page for downloads and capabilities. Narration is in Chinese.
<!-- evergreen:demos:end -->

## Latest downloads: Windows/Linux 1.9.2 · Mac 1.9.4

| Platform | Package and status |
| --- | --- |
| Apple Silicon Mac 1.9.4 | [DMG](https://github.com/HackerChi-Hub/localbrain-releases/releases/download/v1.9.4/LocalBrain_1.9.4_aarch64.dmg) · Installed files match the package; native confirmations, search and renaming were manually confirmed by the user. Strict code-signature and independent updater-signature checks passed; not Apple-notarized |
| Windows x64 | [Installer](https://github.com/HackerChi-Hub/localbrain-releases/releases/download/v1.9.2/LocalBrain_1.9.2_x64-setup.exe) · the packaged Windows app passed native registration, Home display, actual 8K inference, WebView CORS, a tool task, stop/restart and full-exit cleanup |
| Linux x64 | [Debian package](https://github.com/HackerChi-Hub/localbrain-releases/releases/download/v1.9.2/LocalBrain_1.9.2_amd64.deb) · built and installed on Ubuntu 22.04 WSL2; startup and real inference through packaged PolyStrata/DSH passed. Linux remains preview support, not bare-metal desktop acceptance; no new AppImage |

[1.9.4 release notes and checksums](https://github.com/HackerChi-Hub/localbrain-releases/releases/tag/v1.9.4). Drag the Mac app into Applications; on Debian/Ubuntu run `sudo apt install ./LocalBrain_1.9.2_amd64.deb`. Older releases are retained.

This release updates **Mac to 1.9.4**; Windows/Linux retain **1.9.2**. See [Mac verification and limits](VERIFICATION-1.9.4.md): installed files and signatures verified; list saving, unsent draft, native approval and a real-model inspection/evidence-read workflow completed. Physical phones and embedded hardware remain unverified. Earlier [Windows/Linux 1.9.2 verification](VERIFICATION-1.9.2.md) remains available. PolyStrata supports Qwen3.6-35B-A3B configurations with separate native runtimes; Q3 was tested, while Q2/Q4 are catalogue entries. Qwen3.8-27B, AMD and vision are outside that integration. Linux Debian upgrades manually; AppImage automatic updates remain at 1.7.2.

Historical 1.9.1 acceptance notes: See the [1.9.1 verification record](VERIFICATION-1.9.1.md) for context compaction, skills, memory and their tested limits. Originals and summaries are saved separately; recovery does not replay completed tools. Summaries remain lossy and can miss facts. Historical media results and their speech, editing, music and experimental-video issues remain in the [1.8.0 verification record](VERIFICATION-1.8.0.md). Windows and Linux Debian 1.9.1 packages were added on 2026-10-17 from the same main-branch commit with the native tool engine enabled. Windows package and updater-signature checks passed; Linux passed installation and a 20-second startup check in WSL. Full UI, model and automatic/manual compaction acceptance remains pending on both platforms. Install Linux Debian manually; its AppImage updater retains 1.7.2. GitHub account payment or spending limits prevented remote jobs from starting; local checks are not presented as passing remote CI.

<!-- evergreen:screenshots:start -->
## Real application screenshots

Existing public macOS screenshots from version 1.4.6 show model management and client integration in Simplified Chinese. They are historical screenshots, not images of the latest release. Models and memory values reflect the captured session.

![LocalBrain local model workspace, historical 1.4.6 screenshot](screenshots/zh-CN/home.png)

![LocalBrain local tools and AI client integrations, historical 1.4.6 screenshot](screenshots/zh-CN/integrations.png)
<!-- evergreen:screenshots:end -->

## Actual 1.8.0 chat and download page

Actual installed Mac screenshots, with the top control bar cropped; raw execution evidence is retained. The download page uses the same-round Wuli acceptance screenshot; chat shows this media test. The interface shown is Chinese.

![Actual 1.8.0 chat and download page](screenshots/1.8.0-media-chat.png)

![Wuli MiniMax-H3-Turbo](screenshots/1.8.0-wuli-download.png)

<!-- evergreen:capabilities:start -->
## Features and usage

Local model downloads/import/start/stop; streaming chat, attachments, reasoning controls, hardware-aware context budgets and task recovery; authorized files, project tests, documents and web tools; integrated media workbenches, MCP, local model APIs, storage management and three UI languages. Media controls depend on the model; laughter, precise pauses and multiple reference images are not universal capabilities.

1. Start a tool-capable model and open network-security settings.
2. Select a built-in lab, your host/service or your container.
3. Select a target and model execution or a direct check; review and confirm the scope.
4. The environment is prepared automatically. Model tools use native approval and return evidence; maintenance is collapsed by default.

Only inspect owned or explicitly authorized targets. Host grants bind to the reviewed address and ports, without scope expansion. Current coverage centers on TCP, plaintext HTTP and restricted exposure checks, not unrestricted scanning or exploitation. A working-directory restriction is not an OS sandbox, and image auditing is not a full assessment of a running application.

## Platforms and privacy

Mac supports integrated MLX, Metal llama.cpp, Splash and Prism. Windows uses adapted llama.cpp/Prism, without MLX/Splash. Linux is a recent preview: managed llama.cpp/Prism downloads are not fully wired, and MLX/Splash are unavailable. Build success does not establish native-device acceptance.

Local inference does not require sending conversations to the cloud; downloads, dependencies, updates, web tools and external services can use the network. Model weights are not bundled and retain separate licenses.
<!-- evergreen:capabilities:end -->

## SHA-256

| File | Hash |
| --- | --- |
| Mac DMG | `f2542209eb8000bf77aacb2bd9b24abaa57613c125bd5a46f44c9bc64475c929` |
| Windows installer | `9d8732be966714908e1150a3023508bcd408d7300a7d802ef77d586766b8a137` |
| Linux Debian | `d3829507c24b2a9c3396da63365f7f3cf0895a638fbc1ba93c48ce5b9e56d4af` |

This repository provides installers and documentation, not development source. Proprietary software, © HyphenTech.

<!-- evergreen:use-cases:start -->
## Common questions

**Can I use local AI without sending conversations to the cloud?** Local inference can stay on your computer. Downloads, updates, web tools and external services may still use the network.

**Is every model suitable for file or Office tasks?** No. Use a model that supports the required tools; inspect execution receipts and resulting files. A model's statement alone is not proof that a task succeeded.

**Do all platforms have the same features?** No. Check the platform notes and release acceptance status above. Linux remains preview support.

**How does it fit with other HyphenTech apps?** LocalBrain runs local models; HyphenBox manages provider APIs; ScreenLex handles movie-based English learning; HyphenScreen records and edits tutorials.
<!-- evergreen:use-cases:end -->

<!-- evergreen:discovery:start -->
## More HyphenTech software

Local models: [LocalBrain](https://github.com/HackerChi-Hub/localbrain-releases). Screen tutorials: [HyphenScreen](https://github.com/HackerChi-Hub/HyphenScreen-Releases). Movie English: [ScreenLex](https://github.com/HackerChi-Hub/screenlex-download). API discovery and routing: [HyphenBox](https://github.com/HackerChi-Hub/hyphenbox-release). Share this repository homepage so others can choose the latest package for their system.
<!-- evergreen:discovery:end -->
