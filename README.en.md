<!-- evergreen:intro:start -->
# LocalBrain · Local AI models, file tools and media workspace

Run supported local models, work with authorized files, and manage speech, image, video and music tasks in one desktop application by HyphenTech. Models plan and call tools; the app retains real execution receipts. Apple Silicon Mac integrates MLX, Metal llama.cpp, Splash and Prism; Windows uses adapted llama.cpp / Prism; Linux is preview support.

[Download LocalBrain](https://github.com/HackerChi-Hub/localbrain-releases/releases/latest) · [Website](https://hyphentech.top/localbrain) · [Report an issue](https://github.com/HackerChi-Hub/localbrain-releases/issues)

[简体中文](README.md) · [繁體中文](README.zh-TW.md) · English
<!-- evergreen:intro:end -->

<!-- recent-features:start -->
## Recent features and improvements (5 items)

- **1.7.1** · Splash launch and strict tool arguments now preserve times, leading zeroes, quotes and tool markers.
- **1.7.0** · Read spreadsheets by actual rows, sheets and selected ranges; attachments show truncation boundaries.
- **1.7.0** · Programmatic sum, count, minimum and maximum avoid treating model estimates as calculations.
- **1.7.0** · Safe document appends, expected-value protection and independent reconciliation preserve originals.
- **1.7.0** · Documents and presentations provide rendering and layout warnings; full model-led Office tasks remain unverified.
<!-- recent-features:end -->

## Latest downloads: 1.7.1

| Platform | Package and acceptance |
| --- | --- |
| Apple Silicon Mac | [DMG](https://github.com/HackerChi-Hub/localbrain-releases/releases/download/v1.7.1/LocalBrain_1.7.1_aarch64.dmg), signatures, disk image, installation, launch and two consecutive strict tool-argument requests verified; not Apple-notarized |
| Windows x64 | [Installer](https://github.com/HackerChi-Hub/localbrain-releases/releases/download/v1.7.1/LocalBrain_1.7.1_x64-setup.exe), same-source CI build and updater signature verified; no native-device functional acceptance |
| Linux x64 | [AppImage](https://github.com/HackerChi-Hub/localbrain-releases/releases/download/v1.7.1/LocalBrain_1.7.1_amd64.AppImage) · [Debian](https://github.com/HackerChi-Hub/localbrain-releases/releases/download/v1.7.1/LocalBrain_1.7.1_amd64.deb), preview support without native-device acceptance |

[Release notes and verification files](https://github.com/HackerChi-Hub/localbrain-releases/releases/tag/v1.7.1). Drag the Mac app into Applications or run the Windows installer. On Linux run `chmod +x LocalBrain_1.7.1_amd64.AppImage`, or `sudo apt install ./LocalBrain_1.7.1_amd64.deb` on Debian/Ubuntu. Updater artifacts are signed; Linux updates use AppImage. Older releases are retained.

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
| Mac DMG | `bd0a2c935b8ccc7b50660edc78363568cc0017cbeb862a058e2ecff1c7931be4` |
| Windows installer | `f811b61aa7b79b04f26801357a0d29752d4ba8a465413734d68947fa00f5ef43` |
| Linux AppImage | `eea27972039c67886edc9f4d847d9360bfa3bc4418142d8d89e47e077ceea1b3` |
| Linux Debian | `b0626facfc9a4bfe59ccdbe6d43d97949558e367bfa6711972f44d541b36f42d` |

This repository provides installers and documentation, not development source. Proprietary software, © HyphenTech.

<!-- evergreen:discovery:start -->
## More HyphenTech software

Local models: [LocalBrain](https://github.com/HackerChi-Hub/localbrain-releases). Screen tutorials: [HyphenScreen](https://github.com/HackerChi-Hub/HyphenScreen-Releases). Movie English: [ScreenLex](https://github.com/HackerChi-Hub/screenlex-download). API discovery and routing: [HyphenBox](https://github.com/HackerChi-Hub/hyphenbox-release). Share this repository homepage so others can choose the latest package for their system.
<!-- evergreen:discovery:end -->
