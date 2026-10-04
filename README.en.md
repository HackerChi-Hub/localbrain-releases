# LocalBrain

[简体中文](README.md) · [繁體中文](README.zh-TW.md) · **English**

A desktop workspace for local models, file tools and media generation. You choose the model and authorize the scope; the model plans and calls tools, while the application preserves real execution receipts.

[Website](https://hyphentech.top/localbrain) · [All releases](https://github.com/HackerChi-Hub/localbrain-releases/releases) · [Security tutorial in Chinese](https://hyphentech.top/localbrain-network-security/)

## Latest downloads: 1.6.7

| Platform | Package and acceptance |
| --- | --- |
| Apple Silicon Mac | [DMG](https://github.com/HackerChi-Hub/localbrain-releases/releases/download/v1.6.7/LocalBrain_1.6.7_aarch64.dmg), installed and tested with the original 27B model; not Apple-notarized |
| Windows x64 | [Installer](https://github.com/HackerChi-Hub/localbrain-releases/releases/download/v1.6.7/LocalBrain_1.6.7_x64-setup.exe), same-source CI build and updater signature verified; no native-device functional acceptance |
| Linux x64 | [AppImage](https://github.com/HackerChi-Hub/localbrain-releases/releases/download/v1.6.7/LocalBrain_1.6.7_amd64.AppImage) · [Debian](https://github.com/HackerChi-Hub/localbrain-releases/releases/download/v1.6.7/LocalBrain_1.6.7_amd64.deb), preview support without native-device acceptance |

[Release notes and verification files](https://github.com/HackerChi-Hub/localbrain-releases/releases/tag/v1.6.7). Drag the Mac app into Applications or run the Windows installer. On Linux run `chmod +x LocalBrain_1.6.7_amd64.AppImage`, or `sudo apt install ./LocalBrain_1.6.7_amd64.deb` on Debian/Ubuntu. Updater artifacts are signed; Linux updates use AppImage. Older releases are retained.

## Changes

Invalid targets are rejected before approval and checked again at execution. Reports provide effective pagination arguments, complete next-page requests and persistent deduplicated evidence counts. Missing fixed-version fields remain unknown. Successful database preparation is recorded separately from offline scanning. Shared mechanisms do not branch on model names or rewrite model arguments.

The installed Mac app completed native scope confirmation, tool approval, Juice Shop image scanning and evidence reading. The 170 records are component matches, not proven exploitable vulnerabilities. Models may still misinterpret evidence or recommend unverified upgrades; inspect the original report. [Acceptance record](https://github.com/HackerChi-Hub/localbrain/blob/main/docs/RELEASE_1.6.7_VERIFICATION.md).

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

## SHA-256

| File | Hash |
| --- | --- |
| Mac DMG | `ed61a9d5061fc79c71e6a70000ee6783d8871fbb29dfef57eadcb56dad369e0f` |
| Windows installer | `ff71f6a28dd2e571bf45566436d2980711118b24d660f1f596e4aa747e46ef39` |
| Linux AppImage | `3e91879ddb928f185dbfcde23ec1b57743937ed02f2862b3971aa3d0a42f2e42` |
| Linux Debian | `29a2ba9315fc848a95eedad6a77c4e93f81ece390938df0d7c6f4b848178aca8` |

This repository provides installers and documentation, not development source. Proprietary software, © HyphenTech.
