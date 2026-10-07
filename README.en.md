<!-- evergreen:intro:start -->
![LocalBrain · HyphenTech](screenshots/readme-hero.svg)

# LocalBrain · Local AI models, file tools and media workspace

Run supported local models, work with authorized files, and manage speech, image, video and music tasks in one desktop application by HyphenTech. Models plan and call tools; the app retains real execution receipts. Apple Silicon Mac integrates MLX, Metal llama.cpp, Splash and Prism; Windows uses adapted llama.cpp / Prism; Linux is preview support.


<p align="center"><a href="README.md">简体中文</a> | <a href="README.zh-TW.md">繁體中文</a> | <a href="README.en.md">English</a></p>

<p align="center"><a href="https://github.com/HackerChi-Hub/localbrain-releases/releases/latest"><img alt="Download" src="https://img.shields.io/badge/Download-18181b?style=for-the-badge&amp;logo=github" /></a> <a href="https://hyphentech.top"><img alt="Website" src="https://img.shields.io/badge/Website-334155?style=for-the-badge" /></a></p>
<!-- evergreen:intro:end -->

<!-- recent-features:start -->
## Recent features and improvements (5 items)

- **1.7.2** · Fix newer Harness local-model integration using cordis.patch.yml, preserving other providers with backups and atomic writes; existing conversations must select the current model again.
- **1.7.0** · Read spreadsheets by actual rows, sheets and selected ranges; attachments show truncation boundaries.
- **1.7.0** · Programmatic sum, count, minimum and maximum avoid treating model estimates as calculations.
- **1.7.0** · Safe document appends, expected-value protection and independent reconciliation preserve originals.
- **1.7.0** · Documents and presentations provide rendering and layout warnings; full model-led Office tasks remain unverified.
<!-- recent-features:end -->

<!-- evergreen:demos:start -->
## ▶ Watch a practical demo

**Starting local models, longer tasks and actual delivery**

| Bilibili | YouTube |
| :---: | :---: |
| [![Watch on Bilibili](https://img.shields.io/badge/Bilibili-00a1d6?style=for-the-badge&logo=bilibili&logoColor=white)](https://www.bilibili.com/video/BV11Xab6GEjy/) | [![Watch on YouTube](https://img.shields.io/badge/YouTube-ff0033?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/watch?v=A6nRwKU8fao) |

These videos show the versions available when recorded. Use the current release information on this page for downloads and capabilities. Narration is in Chinese.
<!-- evergreen:demos:end -->

## Latest downloads: 1.7.2

| Platform | Package and acceptance |
| --- | --- |
| Apple Silicon Mac | [DMG](https://github.com/HackerChi-Hub/localbrain-releases/releases/download/v1.7.2/LocalBrain_1.7.2_aarch64.dmg), application, disk-image and updater signatures verified; local installation and packaged-button acceptance await completion of active tasks; not Apple-notarized |
| Windows x64 | [Installer](https://github.com/HackerChi-Hub/localbrain-releases/releases/download/v1.7.2/LocalBrain_1.7.2_x64-setup.exe), same-source CI build and updater signature verified; no native-device functional acceptance |
| Linux x64 | [AppImage](https://github.com/HackerChi-Hub/localbrain-releases/releases/download/v1.7.2/LocalBrain_1.7.2_amd64.AppImage) · [Debian](https://github.com/HackerChi-Hub/localbrain-releases/releases/download/v1.7.2/LocalBrain_1.7.2_amd64.deb), preview support without native-device acceptance |

[Release notes and verification files](https://github.com/HackerChi-Hub/localbrain-releases/releases/tag/v1.7.2). Drag the Mac app into Applications or run the Windows installer. On Linux run `chmod +x LocalBrain_1.7.2_amd64.AppImage`, or `sudo apt install ./LocalBrain_1.7.2_amd64.deb` on Debian/Ubuntu. Updater artifacts are signed; Linux updates use AppImage. Older releases are retained.

All three packages were built from `9fd4fe45bde2ac4634392ed77f46e066444d9674`. The failed Harness conversation recovered and returned a successful connection response. Splash compatibility fixes from 1.7.1 remain included; uncommitted video LoRA changes are excluded. [1.7.2 acceptance](https://github.com/HackerChi-Hub/localbrain/blob/main/docs/RELEASE_1.7.2_VERIFICATION.md).

<!-- evergreen:screenshots:start -->
## Real application screenshots

Existing public macOS screenshots from version 1.4.6 show model management and client integration in Simplified Chinese. They are historical screenshots, not images of the latest release. Models and memory values reflect the captured session.

![LocalBrain local model workspace, historical 1.4.6 screenshot](screenshots/zh-CN/home.png)

![LocalBrain local tools and AI client integrations, historical 1.4.6 screenshot](screenshots/zh-CN/integrations.png)
<!-- evergreen:screenshots:end -->

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
| Mac DMG | `2a51ee558edc06edeea1dd1e8b13900c1056060ed21af426bfd05233c443ee52` |
| Windows installer | `386dea8822d64d531b2554217e74fd769a6f5b9b4be8467c9805917bb3e8e3f8` |
| Linux AppImage | `b22a0fd0eb3c37245ce843e2cf27047b22a1cfbec49eb73090d4d09b6f3b65d7` |
| Linux Debian | `9bc9c8b5897a194c9684fcf301b68d9872e78af4c14f9ab4ec095dd8ca077fec` |

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
