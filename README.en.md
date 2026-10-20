<!-- evergreen:intro:start -->
![LocalBrain · HyphenTech](screenshots/readme-hero.svg)

# LocalBrain · Local AI models, file tools and media workspace

Run supported local models, work with authorized files, and manage speech, image, video and music tasks in one desktop application by HyphenTech. Models plan and call tools; the app retains real execution receipts. Apple Silicon Mac integrates MLX, Metal llama.cpp, Splash and Prism; Windows uses adapted llama.cpp / Prism; Linux is preview support.


<p align="center"><a href="README.md">简体中文</a> | <a href="README.zh-TW.md">繁體中文</a> | <a href="README.en.md">English</a></p>

<p align="center"><a href="https://github.com/HackerChi-Hub/localbrain-releases/releases/latest"><img alt="Download" src="https://img.shields.io/badge/Download-18181b?style=for-the-badge&amp;logo=github" /></a> <a href="https://hyphentech.top"><img alt="Website" src="https://img.shields.io/badge/Website-334155?style=for-the-badge" /></a></p>
<!-- evergreen:intro:end -->

<!-- recent-features:start -->
## Recent features and improvements (5 items)

- **2.0.2** · Mac sampling recommendations follow the exact model and current thinking state. Unregistered fine-tunes retain their own configurations; ordinary-model policies are not applied to Swift or uncensored variants.
- **2.0.2** · Temperature and sampling fields support manual adjustment and automatic reset. The footer shows exact values and sources; unsupported Sushi fields are explicitly omitted.
- **2.0.1** · Windows checkpoints add short committed-receipt records; after useful compaction, a proactive target may be exceeded only when the full output allowance still fits.
- **2.0.0** · Windows small-window continuation: skip unhelpful short summaries and defer built-in schemas, avoiding false stops after repeated tiny compactions.
- **2.0.0** · Windows small-window chat: tool-free, non-thinking summaries, bounded PolyStrata reasoning, and preserving records and stopping when safe space cannot be recovered.
<!-- recent-features:end -->

<!-- evergreen:demos:start -->
## ▶ Watch a practical demo

**Starting local models, longer tasks and actual delivery**

| Bilibili | YouTube |
| :---: | :---: |
| [![Watch on Bilibili](https://img.shields.io/badge/Bilibili-00a1d6?style=for-the-badge&logo=bilibili&logoColor=white)](https://www.bilibili.com/video/BV11Xab6GEjy/) | [![Watch on YouTube](https://img.shields.io/badge/YouTube-ff0033?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/watch?v=A6nRwKU8fao) |

These videos show the versions available when recorded. Use the current release information on this page for downloads and capabilities. Narration is in Chinese.
<!-- evergreen:demos:end -->

## Latest downloads：Windows 2.0.1 · Mac 2.0.2 · Linux 1.9.5

Mac 2.0.2 adds model- and thinking-aware sampling recommendations, preserved manual choices, automatic reset, and exact temperature/source display. Sushi/Splash now read generation configurations; Swift and uncensored variants do not inherit ordinary-model policies. Real-model, packaged-host, production-component interaction and installed-file checks passed. A locked desktop prevented native parameter-panel clicks; that check remains pending. Mac only; model weights, engine versions and external-client defaults are unchanged. [2.0.2 verification and limits](VERIFICATION-2.0.2-MAC.md) · [Sampling rules](SAMPLING_RECOMMENDATIONS.md).

Mac 1.9.9 repairs download completion and Sushi startup diagnostics, including status polling masking memory errors. Final installed-app checks exercised real preflight rejection, restoring 32K, full-resident loading and a Chinese response. Matched resident/32 GiB exact SSD tests recorded 44.20/31.21 GiB residency. Modes are selected manually and require saving and restarting; no automatic downgrade. See [final installation and test limits](VERIFICATION-1.9.9-MAC.md). Older 1.9.8 paragraphs retain their original verification scope.

| Platform | Package and status |
| --- | --- |
| Apple Silicon Mac 2.0.2 | [DMG](https://github.com/HackerChi-Hub/localbrain-releases/releases/download/v2.0.2/LocalBrain_2.0.2_aarch64.dmg) · Installed; real-model sampling, packaged tool host and production-component interactions verified. Native parameter-panel clicks remain pending due to the locked desktop. Strict code and updater signatures verified; not Apple-notarized |
| Windows x64 | [Installer](https://github.com/HackerChi-Hub/localbrain-releases/releases/download/v2.0.1/LocalBrain_2.0.1_x64-setup.exe) · Windows 2.0.1 installed; real-model compaction, continuation and chat tools verified; updater signature verified, not Authenticode |
| Linux x64 | [Debian](https://github.com/HackerChi-Hub/localbrain-releases/releases/download/v1.9.5/LocalBrain_1.9.5_amd64.deb) · Installed and startup-tested in Ubuntu 22.04 WSL2; packaged native DSH initialized; preview support, not native desktop acceptance; no new AppImage |

[2.0.1 Windows release notes and checksums](https://github.com/HackerChi-Hub/localbrain-releases/releases/tag/v2.0.1). Drag the Mac app into Applications; on Debian/Ubuntu run `sudo apt install ./LocalBrain_1.9.5_amd64.deb`. Older releases are retained.

The following Windows 2.0.1 and earlier paragraphs retain their original historical status. Current platform versions are listed in the download table above.

This release updates **Windows 2.0.1**: compacted checkpoints append short records from the last three committed tool receipts, without a permanent hint in ordinary requests. After productive compaction, a proactive target may be exceeded only if the full output allowance still fits. Real-model fault injection, explicit redo, failed-tool retry, batching, and final-package chat/search checks passed; installed locally. Summaries remain lossy. See [acceptance and limits](VERIFICATION-2.0.1.md). Mac retains 1.9.9; existing Linux packages are unchanged.

Historical 1.9.1 acceptance notes: See the [1.9.1 verification record](VERIFICATION-1.9.1.md) for context compaction, skills, memory and their tested limits. Originals and summaries are saved separately; recovery does not replay completed tools. Summaries remain lossy and can miss facts. Historical media results and their speech, editing, music and experimental-video issues remain in the [1.8.0 verification record](VERIFICATION-1.8.0.md). Windows and Linux Debian 1.9.1 packages were added on 2026-10-17 from the same main-branch commit with the native tool engine enabled. Windows package and updater-signature checks passed; Linux passed installation and a 20-second startup check in WSL. Full UI, model and automatic/manual compaction acceptance remains pending on both platforms. Install Linux Debian manually; its AppImage updater retains 1.7.2. GitHub account payment or spending limits prevented remote jobs from starting; local checks are not presented as passing remote CI.

Mac 1.9.8 adds optional managed Sushi 1.2.4: explicitly install its ~71MB isolated runtime in Settings, then download or mount a dedicated Qwen3.8 Flash Next 2.6-bit pack. Defaults to 32K context and full residency, with an optional exact SSD budget. No Homebrew dependency, startup updates, system proxy changes or GPU memory-limit changes. Architecture, shards and actual loaded-model state are checked before readiness. The 125B weights were not downloaded again; runtime installation and CORS checks do not establish generation quality, speed or tool generation. See [usage](SUSHI_RUNTIME.md) and [Mac verification limits](VERIFICATION-1.9.8-MAC-SUSHI.md). Existing Windows 1.9.8 fixes and verification remain intact; Linux releases are unchanged.

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
| Mac DMG | `60089a54af5a3dbbd5b4e7850214977b33a31e58d10fb225c4329ddbb5c91c66` |
| Windows installer | `e854ac19dd5f9c861f998b2fab313f34a8069a9f562de78d7f37e7f867c74123` |
| Linux Debian | `882c7800ba8455379bcb1911bc3456dfca8a22612e4e3193cc046f3f50ac9e33` |

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
