<!-- evergreen:intro:start -->
![LocalBrain · HyphenTech](screenshots/readme-hero.svg)

# LocalBrain · Local AI models, file tools and media workspace

Run supported local models, work with authorized files, and manage speech, image, video and music tasks in one desktop application by HyphenTech. Models plan and call tools; the app retains real execution receipts. Apple Silicon Mac integrates MLX, Metal llama.cpp, Splash and Prism; Windows uses adapted llama.cpp / Prism; Linux is preview support.


<p align="center"><a href="README.md">简体中文</a> | <a href="README.zh-TW.md">繁體中文</a> | <a href="README.en.md">English</a></p>

<p align="center"><a href="https://github.com/HackerChi-Hub/localbrain-releases/releases/latest"><img alt="Download" src="https://img.shields.io/badge/Download-18181b?style=for-the-badge&amp;logo=github" /></a> <a href="https://hyphentech.top"><img alt="Website" src="https://img.shields.io/badge/Website-334155?style=for-the-badge" /></a></p>
<!-- evergreen:intro:end -->

<!-- recent-features:start -->
## Recent features and improvements (5 items)

- **2.1.1** · Compaction checkpoints retain trusted submitted user text to reduce lost task parameters. Drafts remain session-bound; old authorizations and login state are not restored.
- **2.1.1** · Windows/Linux 2.1.1 packages include current features and independent updater signatures. Linux provides Debian and AppImage; special engines are not implicitly upgraded.
- **2.0.8** · Model settings and registration share path validation; ordinary saves do not incorrectly stop independent engines or relax external-directory authorization.
- **2.0.8** · Web CTF foundations add task-local login state and paginated evidence/screenshots. Full isolated-browser and model CTF acceptance remains pending.
- **2.0.7** · Windows/Linux 2.0.7 packages include current features and independent updater signatures. Linux provides Debian and AppImage; special engines are not implicitly upgraded.
<!-- recent-features:end -->

<!-- windows-performance:start -->
## Windows 2.0.1: small-context tasks and runtime speed

For local models with 8K contexts, tool schemas load on demand and short spans avoid repeated summarization. Compacted checkpoints add short records from actual tool receipts to help models recognize completed steps. Ordinary requests gain no permanent hint; original records are preserved and users judge the quality of delivered results.

On 2026-10-20, this RTX 4070 Laptop with 8GB VRAM and 32GB RAM ran Qwen3.6-35B-A3B UD Q3_K_M through PolyStrata. Recent logs commonly showed about 75–90 decoded tokens/s, including thinking, rather than visible-text speed. Single-run timings for synthetic read-only tool tasks:

| Scenario | Earlier 2.0.0 | 2.0.1 (historical sample) |
| --- | --- | --- |
| Two tools in one step, no compaction | 8.38 s | 7.91 s |
| Sequential reads with one compaction | No matched comparison | 19.70 s |
| Failure, compaction, retry and completion; two compactions | No matched comparison | 31.66 s |

These are not repeated performance benchmarks. Version 2.0.0 already included some optimizations; these results do not establish a consistent 6% gain over an unoptimized release. Compaction takes time: one recent summary took about 5 s. Avoiding repeated operations may reduce total task time, but that benefit has not been quantified. Five real-model regression scenarios and 47 engine tests passed; this does not guarantee completion of every task or constitute a rerun of the original 12-question evaluation. See [methods and limits](PERFORMANCE-2.0.1-WINDOWS.md).

These are historical samples from 2026-10-20. Use the latest-downloads section for current installers and update manifests.
<!-- windows-performance:end -->

<!-- evergreen:demos:start -->
## ▶ Watch a practical demo

**Starting local models, longer tasks and actual delivery**

| Bilibili | YouTube |
| :---: | :---: |
| [![Watch on Bilibili](https://img.shields.io/badge/Bilibili-00a1d6?style=for-the-badge&logo=bilibili&logoColor=white)](https://www.bilibili.com/video/BV11Xab6GEjy/) | [![Watch on YouTube](https://img.shields.io/badge/YouTube-ff0033?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/watch?v=A6nRwKU8fao) |

These videos show the versions available when recorded. Use the current release information on this page for downloads and capabilities. Narration is in Chinese.
<!-- evergreen:demos:end -->

## Latest downloads：Windows 2.1.1 · Mac 2.1.1 · Linux 2.1.1

Mac 2.1.1 fixes loss of your original instructions after compaction and cross-conversation security drafts: alongside the semantic summary it keeps the target, account, parameters and limits you supplied, and web content or tool receipts cannot impersonate them; drafts and security task markers stay with their own conversation and are discarded with it. Per-round duration is now a hard cap for the whole round with separate prefill/generation timings; web evidence exposes control link targets, continuation ranges and verification failure causes without revealing whether a candidate is right; expired authorization explicitly stops the run; the local cleanup entry prechecks the whole batch against the protection registry. The real HTB tunnel is still not up: on this network the platform edge is unreachable (ten nodes plus TCP and UDP profiles all received no server reply), which does not rule out a platform or account-side cause; native approval, restart recovery with a pending operation and this round's Windows/Linux acceptance are incomplete. Windows 2.0.8 and Linux 2.0.8 keep their existing builds. [Security capabilities and limits](SECURITY-CAPABILITIES.md) · [This round's verification](https://github.com/HackerChi-Hub/localbrain/blob/main/docs/RELEASE_2.1.1_MAC_VERIFICATION.md).

Mac 1.9.9 repairs download completion and Sushi startup diagnostics, including status polling masking memory errors. Final installed-app checks exercised real preflight rejection, restoring 32K, full-resident loading and a Chinese response. Matched resident/32 GiB exact SSD tests recorded 44.20/31.21 GiB residency. Modes are selected manually and require saving and restarting; no automatic downgrade. See [final installation and test limits](VERIFICATION-1.9.9-MAC.md). Older 1.9.8 paragraphs retain their original verification scope.




2.0.8 adds model-settings path-validation fixes and Web CTF foundations. Six transport tests passed on Windows/Linux, but production isolated-browser, native approval and real-model CTF acceptance remain pending. Execution requires passing local isolation checks. [Mechanism and limits](SECURITY-WEB-CTF.md).


Windows/Linux 2.1.1 packages are built and verified: Windows native chat, tool writing and compacted continuation passed; installed with the configuration hash unchanged. Linux Debian/AppImage resources, packaged DSH and WSL2 startup checks passed; Debian is installed. Linux bare-metal desktop/GPU acceptance is not covered; security isolation requires passing local reverse checks. Existing Mac 2.1.1 assets are retained. See [acceptance and limits](VERIFICATION-2.1.1-WIN-LINUX.md). Candidate and older-version paragraphs below are historical.

| Platform | Package and status |
| --- | --- |
| Apple Silicon Mac 2.1.1 | [DMG](https://github.com/HackerChi-Hub/localbrain-releases/releases/download/v2.1.1/LocalBrain_2.1.1_aarch64.dmg) · Installed; four local gates plus bundled-code and updater signatures verified; compaction retention, draft isolation, whole-round timing and web evidence tested. The authorized-shop loop is a specified-task tool-chain check, not a prompt-free blind test; native approval, restart recovery with a pending operation and real HTB remain unverified. Not Apple-notarized |
| Windows x64 | [Installer](https://github.com/HackerChi-Hub/localbrain-releases/releases/download/v2.1.1/LocalBrain_2.1.1_x64-setup.exe) · 2.1.1 installed; native chat, tool and compacted continuation passed; updater signature verified, not Authenticode |
| Linux x64 | [Debian](https://github.com/HackerChi-Hub/localbrain-releases/releases/download/v2.1.1/LocalBrain_2.1.1_amd64.deb) · [AppImage](https://github.com/HackerChi-Hub/localbrain-releases/releases/download/v2.1.1/LocalBrain_2.1.1_amd64.AppImage) · 2.1.1; packaged DSH and Ubuntu22.04 WSL2+Xvfb startup verified; Debian installed, preview support, not bare-metal/GPU acceptance |

[2.1.1 Mac release notes and checksums](https://github.com/HackerChi-Hub/localbrain-releases/releases/tag/v2.1.1) · [2.0.8 Windows/Linux notes](https://github.com/HackerChi-Hub/localbrain-releases/releases/tag/v2.0.8). Drag the Mac app into Applications; on Debian/Ubuntu run `sudo apt install ./LocalBrain_2.1.1_amd64.deb`. Older releases are retained.

The following Windows 2.0.1 and earlier paragraphs retain their original historical status. Current platform versions are listed in the download table above.

This release updates **Windows 2.0.1**: compacted checkpoints append short records from the last three committed tool receipts, without a permanent hint in ordinary requests. After productive compaction, a proactive target may be exceeded only if the full output allowance still fits. Real-model fault injection, explicit redo, failed-tool retry, batching, and final-package chat/search checks passed; installed locally. Summaries remain lossy. See [acceptance and limits](VERIFICATION-2.0.1.md). Mac retains 1.9.9; existing Linux packages are unchanged.

Historical 1.9.1 acceptance notes: See the [1.9.1 verification record](VERIFICATION-1.9.1.md) for context compaction, skills, memory and their tested limits. Originals and summaries are saved separately; recovery does not replay completed tools. Summaries remain lossy and can miss facts. Historical media results and their speech, editing, music and experimental-video issues remain in the [1.8.0 verification record](VERIFICATION-1.8.0.md). Windows and Linux Debian 1.9.1 packages were added on 2026-10-17 from the same main-branch commit with the native tool engine enabled. Windows package and updater-signature checks passed; Linux passed installation and a 20-second startup check in WSL. Full UI, model and automatic/manual compaction acceptance remains pending on both platforms. Install Linux Debian manually; its AppImage updater retains 1.7.2. GitHub account payment or spending limits prevented remote jobs from starting; local checks are not presented as passing remote CI.

Mac 1.9.8 adds optional managed Sushi 1.2.4: explicitly install its ~71MB isolated runtime in Settings, then download or mount a dedicated Qwen3.8 Flash Next 2.6-bit pack. Defaults to 32K context and full residency, with an optional exact SSD budget. No Homebrew dependency, startup updates, system proxy changes or GPU memory-limit changes. Architecture, shards and actual loaded-model state are checked before readiness. The 125B weights were not downloaded again; runtime installation and CORS checks do not establish generation quality, speed or tool generation. See [usage](SUSHI_RUNTIME.md) and [Mac verification limits](VERIFICATION-1.9.8-MAC-SUSHI.md). Existing Windows 1.9.8 fixes and verification remain intact; Linux releases are unchanged.

## Security capabilities and limits (2.0.7)

- What it does: on targets you explicitly authorize, the local model independently runs connect/header checks, web-exposure rules, service detection, SQLi probing, TLS audit, content discovery and custom-PoC verification, then exports a byte-verifiable report.
- Grant constraints: explicit per-target grants (single address, up to 8 ports, 1–60 minutes, separate LAN confirmation); the model cannot create or widen grants, every tool run needs native confirmation, and grants expire when the app quits.
- Near-zero destructive reach: each task runs on a zero-route internal network whose only egress is a proxy locked to granted ports; containers are unprivileged, read-only and mount nothing; destructive categories are refused; state-changing scripts need a second confirmation.
- Not included: exploit frameworks, reverse shells, privilege escalation, lateral movement, full CTF/HTB campaigns; VPN-tunneled targets are unreachable; Windows/Linux isolation is untested and fails closed there too.
- Legal boundary is yours: obtain written authorization before scanning any system you do not own.

Full text: [Security Capabilities and Limits](SECURITY-CAPABILITIES.md)


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

Only inspect owned or explicitly authorized targets. Host grants bind to the reviewed address and ports, without scope expansion. Current coverage spans connect/header checks, web exposure rules, service detection, SQLi probing, TLS audit, content discovery and authorized custom scripts — still not unrestricted scanning or exploitation. A working-directory restriction is not an OS sandbox, and image auditing is not a full assessment of a running application.

## Platforms and privacy

Mac supports integrated MLX, Metal llama.cpp, Splash and Prism. Windows uses adapted llama.cpp/Prism, without MLX/Splash. Linux is a recent preview: managed llama.cpp/Prism downloads are not fully wired, and MLX/Splash are unavailable. Build success does not establish native-device acceptance.

Local inference does not require sending conversations to the cloud; downloads, dependencies, updates, web tools and external services can use the network. Model weights are not bundled and retain separate licenses.
<!-- evergreen:capabilities:end -->

## SHA-256

| File | Hash |
| --- | --- |
| Mac DMG | `20f44469c1ef3804657017965de199fbc0a37f3a484c0c97edecff29ae1aea72` |
| Windows installer | `eb8065515b4b40b8966384e0ecc5046e93ee26be5b44e2dad4173545239deb31` |
| Linux AppImage | `247ac5202fa49db24e7e181411864e133ab1e77ba350cd7e247f14fa6051db99` |
| Linux Debian | `b560fa612b17b05e95078f3c7edc658c9100883d9319859bc2cb796dcce39276` |

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
