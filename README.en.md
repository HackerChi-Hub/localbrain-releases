<!-- evergreen:intro:start -->
![LocalBrain · HyphenTech](screenshots/readme-hero.svg)

# LocalBrain · Local AI models, file tools and media workspace

Run supported local models, work with authorized files, and manage speech, image, video and music tasks in one desktop application by HyphenTech. Models plan and call tools; the app retains real execution receipts. Apple Silicon Mac integrates MLX, Metal llama.cpp, Splash and Prism; Windows uses adapted llama.cpp / Prism; Linux is preview support.


<p align="center"><a href="README.md">简体中文</a> | <a href="README.zh-TW.md">繁體中文</a> | <a href="README.en.md">English</a></p>

<p align="center"><a href="https://github.com/HackerChi-Hub/localbrain-releases/releases/latest"><img alt="Download" src="https://img.shields.io/badge/Download-18181b?style=for-the-badge&amp;logo=github" /></a> <a href="https://hyphentech.top"><img alt="Website" src="https://img.shields.io/badge/Website-334155?style=for-the-badge" /></a></p>
<!-- evergreen:intro:end -->

<!-- recent-features:start -->
## Recent features and improvements (5 items)

- **2.1.3** · Windows/Linux restore the top-level one-click integration recovery, reporting client locks and conflicts separately while preserving existing settings and individual undo.
- **2.1.3** · Windows/Linux local-model integration uses the running PolyStrata/VLM service, exports its real model ID and context window, and rejects offline or stale writes.
- **2.1.3** · Restore one-click MCP integration for Codex and Claude Code alongside DeepSeek Harness; add tools without changing models, providers or other settings.
- **2.1.3** · Undo tools separately for each client with external-edit conflict checks; Harness tool undo keeps model blocks and does not use legacy full-file restore points.
- **2.1.2** · Fix MCP installation with read-only app resources by registering and validating managed Python paths; Windows Unicode paths and verification logs explicitly use UTF-8.
<!-- recent-features:end -->

## Mac 2.1.4 candidate: one-click runtime setup (pending publication)

Settings → Runtime and diagnostics shows five groups: model engines, media, security tools, offline data and system services. Built-in document/web tools and the Harness core update with the app without maintenance rows. Choose “Install missing components” and review dependencies to fill missing supported components while skipping ready ones. Reconnection rereads and reuses container images/databases; retries process only what is still missing. Individual installation, updates and verification remain available.

Removal controls appear only for confirmed installed managed components, excluding missing, partial, external and unreadable offline states. Batch removal is hidden without eligible selections. Pinned archives preserve interrupted downloads, validate ranges and verify SHA-256 before extraction. Supported existing official package managers prepare system dependencies, preserving system licensing, administrator and restart requirements. Ready services do not show redundant installation instructions.

![One-click setup and model environment preview](screenshots/2.1.4-runtime-models-oneclick-preview.jpg)

![Unready security tools show installation controls only](screenshots/2.1.4-runtime-security-oneclick-preview.jpg)

These use the production component with read-only inventory and explicitly mocked changes. The revision is installed; all 12,995 files/links match and signature/image checks pass. Native capture still fails; native clicks, complete container setup and actual removal remain unverified. See [acceptance limits](VERIFICATION-2.1.4-MAC.md) and [runtime scope](RUNTIME_CENTER.md). Weights, external tools, sessions, reports and VMs remain intact. The Harness core stays on 0.2.0-rc.2. The software package remains unpublished; Windows/Linux remain on 2.1.3.

Windows/Linux 2.1.3 are publicly released: Windows and WSL2 Debian are installed; Debian/AppImage resource checks, packaged DSH initialization, 20-second startup and 53 DSH tests passed. All three updater signatures were verified. The author explicitly approved this batch despite source CI account limits; online source CI is not reported as passing. Bare-metal Linux GPU and full DSH image/tool tasks remain unverified; PolyStrata 35B still overflows its 8K window with the desktop agent. See [acceptance and unresolved items](VERIFICATION-2.1.3-WIN-LINUX.md) and [downloads](https://github.com/HackerChi-Hub/localbrain-releases/releases/tag/v2.1.3). Earlier local-candidate and initial single-platform paragraphs below are historical; this section states current platform status.

## Windows local fixes and DSH integration limits (2026-10-24)

The integration page again has a top-level one-click restore for full Harness integration and managed Codex/Claude Code MCP entries. Each client reports locks, conflicts and missing restore points separately while retaining existing settings. The Windows2.1.3 fix is installed locally; public download versions are shown in the platform table. Linux packages are built and verified separately.

The user has confirmed **basic DSH text usage with Qwen3.8-2B-Distill Q4_K_M**. The live service reports a262144-token window matching the exported configuration. Full-window speed, memory consumption and quality have not been tested, nor does this establish complete tool or multi-turn task compatibility. The current2B endpoint has no vision. Image understanding, MCP image rendering and visual-model integration require separate acceptance.

**The full DSH desktop agent still overflows PolyStrata35B's8K window.** Screenshots show about1.5K system-prompt tokens plus7.4K tool-definition tokens; another request had12728 input tokens. Compressing history or reducing output alone cannot fix an oversized fixed prefix. Reduce task-specific tool overhead or separately test a larger window. Context occupancy does not establish GPU memory exhaustion. The previous short adapter request proved connectivity and routing, not full desktop-agent compatibility.

[Known issues and acceptance scope](https://github.com/HackerChi-Hub/localbrain-releases/blob/main/KNOWN-ISSUES-DSH-LOCAL-MODELS.md). Source GitHub CI remains blocked by account limits; local checks are not represented as online CI success.

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

## Latest downloads：Windows 2.1.3 · Mac 2.1.3 · Linux 2.1.3

Mac 2.1.3 restores one-click MCP tools for Codex and Claude Code alongside DeepSeek Harness. OpenCode is not restored. In Integrations, copy, write or undo tools separately for each client. Only LocalBrain tool entries are changed; models, providers, other MCP entries and project settings are preserved. Configuration previews are collapsed by default; new sessions pick up writes. Running desktop clients must be closed after current work finishes; LocalBrain does not terminate them.

Local installation, consistency of 12,995 files and links, app-signature checks and independent updater verification passed. Installed MCP protocol discovery passed 26/26, and a real Codex document-tool call passed. Claude Code testing stopped at the author's request after revoked login credentials returned 401; it is not marked as a passed model-call test. Mac is ad-hoc signed, not Apple-notarized. The GitHub documentation-sync job could not start because of account restrictions; the author explicitly approved this Mac release exception; local passing checks are not passing online CI. [Acceptance and limits](VERIFICATION-2.1.3-MAC.md). Windows/Linux retain 2.1.2 and their existing acceptance records.

The Mac 2.1.2 paragraphs below retain their historical fixes and acceptance records.

Mac 2.1.2 is publicly released: fixes MCP installation on read-only app resources by registering and validating the source path only in the managed Python environment; completed turns show a support text entry, with the QR code opened only on click. The security target list uses the full width; connections and tools are collapsed by default, with forms shown by target and connection type. HTB is no longer advertised as supported. Integration offers DeepSeek Harness only, and short-task timing no longer shows an infinite multiplier. Local regression, targeted installed-app acceptance and consistency of 12,995 files and links passed. GitHub checks could not start because of account payment/spending restrictions; the author explicitly authorized this Mac-only exception. Local passing results are not reported as passing online CI. Windows/Linux 2.1.2 packages are now available; see platform acceptance below. Real HTB end-to-end acceptance, native security execution approval and restart recovery with a pending operation remain unverified. [Acceptance and limits](VERIFICATION-2.1.2-MAC.md).

Mac 1.9.9 repairs download completion and Sushi startup diagnostics, including status polling masking memory errors. Final installed-app checks exercised real preflight rejection, restoring 32K, full-resident loading and a Chinese response. Matched resident/32 GiB exact SSD tests recorded 44.20/31.21 GiB residency. Modes are selected manually and require saving and restarting; no automatic downgrade. See [final installation and test limits](VERIFICATION-1.9.9-MAC.md). Older 1.9.8 paragraphs retain their original verification scope.




2.0.8 adds model-settings path-validation fixes and Web CTF foundations. Six transport tests passed on Windows/Linux, but production isolated-browser, native approval and real-model CTF acceptance remain pending. Execution requires passing local isolation checks. [Mechanism and limits](SECURITY-WEB-CTF.md).


Windows/Linux 2.1.2 now include the bundled-resource registration fix and current UI improvements. Windows native real-model chat, file writing and compacted continuation passed; installed with configuration hash unchanged. Linux Debian/AppImage packaged hosts, resources and WSL2 startup passed; Debian installed. Linux bare-metal/GPU and real HTB are unverified; special engines are not implicitly upgraded. [2.1.2 verification](VERIFICATION-2.1.2-WIN-LINUX.md).

The author approved this Windows/Linux 2.1.2 release exception. The source GitHub check could not start due to account payment/spending restrictions; local passing checks are not passing online CI.

| Platform | Package and status |
| --- | --- |
| Apple Silicon Mac 2.1.3 | [DMG](https://github.com/HackerChi-Hub/localbrain-releases/releases/download/v2.1.3/LocalBrain_2.1.3_aarch64.dmg) · Installed and publicly released; three client tool cards, protocol discovery and a real Codex call passed. Claude Code model-call testing stopped; ad-hoc signed, not Apple-notarized |
| Windows x64 | [Installer](https://github.com/HackerChi-Hub/localbrain-releases/releases/download/v2.1.3/LocalBrain_2.1.3_x64-setup.exe) · 2.1.3 installed; integration routing and top recovery UI checked; updater signed, not Authenticode |
| Linux x64 | [Debian](https://github.com/HackerChi-Hub/localbrain-releases/releases/download/v2.1.3/LocalBrain_2.1.3_amd64.deb) · [AppImage](https://github.com/HackerChi-Hub/localbrain-releases/releases/download/v2.1.3/LocalBrain_2.1.3_amd64.AppImage) · 2.1.3; resources, packaged DSH, WSL2+Xvfb startup and 53 DSH tests passed; Debian installed, preview support, no bare-metal GPU acceptance |

[Mac 2.1.3 release notes](https://github.com/HackerChi-Hub/localbrain-releases/releases/tag/v2.1.3) · [Mac checksums](SHA256SUMS-2.1.3-MAC.txt) · [Windows/Linux 2.1.3 release notes](https://github.com/HackerChi-Hub/localbrain-releases/releases/tag/v2.1.3). Drag the Mac app into Applications; on Debian/Ubuntu run `sudo apt install ./LocalBrain_2.1.3_amd64.deb`. Older releases are retained.

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

## Installed Mac 2.1.3 tool integration

The three clients have separate tool controls and collapsed configuration previews. MCP self-check covers protocol and tool discovery, not every media model's generation quality. These are final installed-app screenshots in Simplified Chinese; only the system automation control title bar was cropped, with originals retained locally.

![Installed Mac 2.1.3 tool integration for three clients](screenshots/2.1.3-mac/mcp-clients.png)

![Installed Mac 2.1.3 MCP protocol and tool discovery, 26/26](screenshots/2.1.3-mac/mcp-selfcheck.png)

## Installed Mac 2.1.2 security page

The list uses the full width and optional connections/tools are collapsed by default. This is the final installed app with no test target added, not proof of real HTB connectivity. The interface shown is Chinese.

![Installed Mac 2.1.2 full-width list and optional tools](screenshots/2.1.2-mac/security-workbench.png)


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
| Mac DMG | `023934d617c93cb50cd3dd41f55bd7ad672d29983548000cfb78d1f7985417b8` |
| Windows installer | `1a7cde8c28dc3964f61f5c645cb58e58532a5c43ecff8f17e8a9aaa39b7c81a1` |
| Linux AppImage | `78a77457f4e8a1fbb0b9c002b131d24099369be670b99dd0616a436eeecbc35d` |
| Linux Debian | `0de5ac2d3e9a086f5759e8c329ab7cbec94ab7d49c346e87ab38bcfb2a79638f` |

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
