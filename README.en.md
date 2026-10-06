# LocalBrain

[简体中文](README.md) · [繁體中文](README.zh-TW.md) · **English**

A desktop workspace for local models, file tools and media generation. You choose the model and authorize the scope; the model plans and calls tools, while the application preserves real execution receipts.

[Website](https://hyphentech.top/localbrain) · [All releases](https://github.com/HackerChi-Hub/localbrain-releases/releases) · [Security tutorial in Chinese](https://hyphentech.top/localbrain-network-security/)

## Latest downloads: 1.7.1

| Platform | Package and acceptance |
| --- | --- |
| Apple Silicon Mac | [DMG](https://github.com/HackerChi-Hub/localbrain-releases/releases/download/v1.7.1/LocalBrain_1.7.1_aarch64.dmg), signatures, disk image, installation, launch and two consecutive strict tool-argument requests verified; not Apple-notarized |
| Windows x64 | [Installer](https://github.com/HackerChi-Hub/localbrain-releases/releases/download/v1.7.1/LocalBrain_1.7.1_x64-setup.exe), same-source CI build and updater signature verified; no native-device functional acceptance |
| Linux x64 | [AppImage](https://github.com/HackerChi-Hub/localbrain-releases/releases/download/v1.7.1/LocalBrain_1.7.1_amd64.AppImage) · [Debian](https://github.com/HackerChi-Hub/localbrain-releases/releases/download/v1.7.1/LocalBrain_1.7.1_amd64.deb), preview support without native-device acceptance |

[Release notes and verification files](https://github.com/HackerChi-Hub/localbrain-releases/releases/tag/v1.7.1). Drag the Mac app into Applications or run the Windows installer. On Linux run `chmod +x LocalBrain_1.7.1_amd64.AppImage`, or `sudo apt install ./LocalBrain_1.7.1_amd64.deb` on Debian/Ubuntu. Updater artifacts are signed; Linux updates use AppImage. Older releases are retained.

## Changes

Splash launch compatibility and omitted argument text / strict constraint failures are fixed. Mac 1.7.1 was installed, and the regular 27B model was launched from the app. Two consecutive real requests preserved times, leading zeroes, Chinese quotes and tool markers in 1.46 and 0.82 seconds. The managed entry does not edit upstream files or model weights; other candidate runtime upgrades are excluded. [1.7.1 acceptance](https://github.com/HackerChi-Hub/localbrain/blob/main/docs/RELEASE_1.7.1_VERIFICATION.md).

### Inherited Office improvements

XLSX supports actual row/column pagination, worksheet inventory and scoped reads. Attachments explicitly mark reference summaries and truncation. Programmatic sum/count/min/max, safe appends, expected-value protection, independent formula checks and record reconciliation share one implementation across chat and the GUI. Documents and presentations offer rendered previews; no model-name exceptions are used.

The 1.7.0 document-tool tests and packaged Mac code checks passed: all 21 selected source rows were read, and the raw quantity sum was 303 (not an expense total). Full model-driven Office tasks and native Windows/Linux functionality remain unverified. Without LibreOffice, formula recalculation cannot be claimed; rendered screenshots do not establish layout quality. [Office acceptance record](https://github.com/HackerChi-Hub/localbrain/blob/main/docs/RELEASE_1.7.0_VERIFICATION.md).

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
| Mac DMG | `bd0a2c935b8ccc7b50660edc78363568cc0017cbeb862a058e2ecff1c7931be4` |
| Windows installer | `f811b61aa7b79b04f26801357a0d29752d4ba8a465413734d68947fa00f5ef43` |
| Linux AppImage | `eea27972039c67886edc9f4d847d9360bfa3bc4418142d8d89e47e077ceea1b3` |
| Linux Debian | `b0626facfc9a4bfe59ccdbe6d43d97949558e367bfa6711972f44d541b36f42d` |

This repository provides installers and documentation, not development source. Proprietary software, © HyphenTech.
