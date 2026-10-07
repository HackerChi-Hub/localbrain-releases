<!-- evergreen:intro:start -->
![LocalBrain · HyphenTech](screenshots/readme-hero.svg)

# LocalBrain · Local AI models, file tools and media workspace

Run supported local models, work with authorized files, and manage speech, image, video and music tasks in one desktop application by HyphenTech. Models plan and call tools; the app retains real execution receipts. Apple Silicon Mac integrates MLX, Metal llama.cpp, Splash and Prism; Windows uses adapted llama.cpp / Prism; Linux is preview support.


<p align="center"><a href="README.md">简体中文</a> | <a href="README.zh-TW.md">繁體中文</a> | <a href="README.en.md">English</a></p>

<p align="center"><a href="https://github.com/HackerChi-Hub/localbrain-releases/releases/latest"><img alt="Download" src="https://img.shields.io/badge/Download-18181b?style=for-the-badge&amp;logo=github" /></a> <a href="https://hyphentech.top"><img alt="Website" src="https://img.shields.io/badge/Website-334155?style=for-the-badge" /></a></p>
<!-- evergreen:intro:end -->

<!-- recent-features:start -->
## Recent features and improvements (5 items)

- **1.7.4** · A dedicated Security workspace groups workspace review, built-in labs, authorized hosts and container images by task.
- **1.7.4** · Settings are more compact; security resources load independently and previous errors are distinct from current status.
- **1.7.2** · Updated DeepSeek Harness integration uses cordis.patch.yml, preserves configuration and supports restore; existing sessions must reselect the model.
- **1.7.1** · Splash launch and strict tool arguments now preserve times, leading zeroes, quotes and tool markers.
- **1.7.0** · Read spreadsheets by actual rows, sheets and selected ranges; attachments show truncation boundaries.
<!-- recent-features:end -->

<!-- evergreen:demos:start -->
## ▶ Watch a practical demo

**Starting local models, longer tasks and actual delivery**

| Bilibili | YouTube |
| :---: | :---: |
| [![Watch on Bilibili](https://img.shields.io/badge/Bilibili-00a1d6?style=for-the-badge&logo=bilibili&logoColor=white)](https://www.bilibili.com/video/BV11Xab6GEjy/) | [![Watch on YouTube](https://img.shields.io/badge/YouTube-ff0033?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/watch?v=A6nRwKU8fao) |

These videos show the versions available when recorded. Use the current release information on this page for downloads and capabilities. Narration is in Chinese.
<!-- evergreen:demos:end -->

## Latest downloads: 1.7.4

| Platform | Package and acceptance |
| --- | --- |
| Apple Silicon Mac | [DMG](https://github.com/HackerChi-Hub/localbrain-releases/releases/download/v1.7.4/LocalBrain_1.7.4_aarch64.dmg), disk image and signatures verified; installed locally and the dedicated Security workspace checked; not Apple-notarized |
| Windows x64 | [Installer](https://github.com/HackerChi-Hub/localbrain-releases/releases/download/v1.7.4/LocalBrain_1.7.4_x64-setup.exe), build and updater signature verified; not yet installed and checked on a Windows device |
| Linux x64 | [Debian package](https://github.com/HackerChi-Hub/localbrain-releases/releases/download/v1.7.4/LocalBrain_1.7.4_amd64.deb), version, architecture and resources verified; AppImage packaging failed for this release, so there is no 1.7.4 Linux automatic update; not yet installed on a Linux device |

[Release notes and checksums](https://github.com/HackerChi-Hub/localbrain-releases/releases/tag/v1.7.4). Drag the Mac app into Applications or run the Windows installer. On Debian/Ubuntu run `sudo apt install ./LocalBrain_1.7.4_amd64.deb`. Mac and Windows updater artifacts are signed; Linux requires a manual install for this release. Older releases are retained.

See the [1.7.4 verification record](VERIFICATION-1.7.4.md) for platform build commits and acceptance limits. Packaging fixes do not change the Security workspace code. Uncommitted video LoRA changes are excluded.

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
| Mac DMG | `2e37a452e26b68a5ce35b7dbe1fa5a7b95cb1975f6249295d69fb3b1fcef08db` |
| Windows installer | `0b4b6d539cd4809aa3e4a6eda919f83f7bac2bf99a4ff1106f0601aa38abc442` |
| Linux Debian | `8043038099c96e55c317f9dafc5aeee5b046564a99bbc05356df79741af503ac` |

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
