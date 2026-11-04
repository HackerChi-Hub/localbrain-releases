<!-- evergreen:intro:start -->
![LocalBrain · HyphenTech](screenshots/readme-hero.svg)

# LocalBrain · Local AI models, file tools and media workspace

Run supported local models, work with authorized files, and manage speech, image, video and music tasks in one desktop application by HyphenTech. Models plan and call tools; the app retains real execution receipts. Apple Silicon Mac integrates MLX, Metal llama.cpp, Splash and Prism; Windows uses adapted llama.cpp / Prism; Linux is preview support.


<p align="center"><a href="README.md">简体中文</a> | <a href="README.zh-TW.md">繁體中文</a> | <a href="README.en.md">English</a></p>

<p align="center"><a href="https://github.com/HackerChi-Hub/localbrain-releases/releases/latest"><img alt="Download" src="https://img.shields.io/badge/Download-18181b?style=for-the-badge&amp;logo=github" /></a> <a href="https://hyphentech.top"><img alt="Website" src="https://img.shields.io/badge/Website-334155?style=for-the-badge" /></a></p>
<!-- evergreen:intro:end -->

<!-- recent-features:start -->
## Recent features and improvements (5 items)

- **2.2.9** · Windows/Linux separates installed runtimes, offline services and unverified images; failed queries no longer inflate the missing-component count or prompt reinstalls.
- **2.2.9** · Mac runtime inventory separates confirmed missing components from unverified states, prevents duplicate installation and preserves external system dependencies.
- **2.2.9** · Mac container readiness checks the real service, refreshes in the foreground and separates historical maintenance failures from current recovery.
- **2.2.8** · Mac video shares resolution presets and custom dimensions with immediate model-specific legality and memory guidance, without automatic quality reduction.
- **2.2.8** · Mac incorporates archive safety fixes, rejecting cross-platform traversal, links and special files while preserving existing models and runtimes.
<!-- recent-features:end -->

## Windows / Linux 2.2.9: distinguish installed runtimes from offline containers

Settings → Runtime and diagnostics counts only confirmed missing or incomplete components in the install-missing action. When the container service is disconnected, existing tools are no longer collectively presented as needing reinstallation. Images and volumes remain unverified: start the container service, then refresh. Failed queries retain a specific reason instead of becoming an empty inventory. Installing a managed copy of an existing external tool still requires a separate selection.

The runtime page reloads inventory after maintenance, on entry and when the window becomes active, reducing stale status. Windows x64 ships an installer; Linux amd64 ships Debian and AppImage packages. This batch verifies Linux installation and startup on Ubuntu 22.04 WSL2/Xvfb, not bare-metal GPU operation.

Mac 2.2.9 was published independently during this build; its installation assets and updater manifest are preserved. H3, LTX and Pika video backends remain Apple Silicon Mac only. Newly researched models are not integrated in this batch, and user drivers, model weights and special inference engines are not upgraded.

[Windows](https://github.com/HackerChi-Hub/localbrain-releases/releases/download/v2.2.9-win-linux/LocalBrain_2.2.9_x64-setup.exe) · [Debian](https://github.com/HackerChi-Hub/localbrain-releases/releases/download/v2.2.9-win-linux/LocalBrain_2.2.9_amd64.deb) · [AppImage](https://github.com/HackerChi-Hub/localbrain-releases/releases/download/v2.2.9-win-linux/LocalBrain_2.2.9_amd64.AppImage) · [Verification](VERIFICATION-2.2.9-WIN-LINUX.md)

## Mac 2.2.9: separate installed components from service connectivity

Installed tools were incorrectly counted as 13 missing components when their container service became unreachable. The inventory now shows an unverified state, restores connectivity before reading tools, and does not treat a failed query as missing files.

Open Settings → Runtime and diagnostics. The top counter includes only confirmed missing or incomplete components. Installed components do not offer duplicate installation. Existing container services, package managers and build tools are retained without per-item uninstall actions. The foreground page refreshes every 30 seconds and immediately when returning; maintenance pauses polling.

Container startup waits for an actual service response. An “already running” message alone no longer establishes readiness. Historical failures remain expandable, while a recovered service reports that current detection is ready. Unavailable connections preserve disks, images and data without automatically restarting or rebuilding a VM.

The November 5 installed native UI identified 27 managed components and three existing system dependencies, with zero missing and zero unverified. Selecting Sushi, system-dependency buttons, historical error details and manual refresh were exercised in the actual app. All 15,653 installed child entries, modes and links match. Model/runtime directory fingerprints, configuration and the video library are unchanged. App/updater signatures, disk-image integrity and mounted contents passed verification. Locally signed, not Apple notarized. This batch generated no new videos; earlier video tests and screenshots retain their original dates.

[Download Mac 2.2.9 (Apple Silicon DMG)](https://github.com/HackerChi-Hub/localbrain-releases/releases/download/v2.2.9/LocalBrain_2.2.9_aarch64.dmg) · [Release and updates](https://github.com/HackerChi-Hub/localbrain-releases/releases/tag/v2.2.9) · [Acceptance record](VERIFICATION-2.2.9-MAC.md)

The DMG is 75,310,516 bytes, approximately 75.3 MB. SHA-256: `8323c521ec6d0fb39fcd838a1c38636e775381559c9211213ec24ead39dc342a`. Existing Windows/Linux 2.2.8 packages, signatures and independent update manifests remain unchanged. Older text, images and acceptance records are retained; current downloads follow this section and the download table.

## Mac 2.2.8: immediate video-size validation and archive safety fixes

The public Mac build incorporates the later archive-safety fix and the resolution controls from the previous candidate. Select a model, then a common preset or custom dimensions. Legal sizes, alignment, side lengths and pixel-area limits are shown immediately. Invalid input remains unchanged until the user selects a correction; the app never silently resizes, trims or reduces quality.

![Immediate size validation, November 2 installed-app acceptance](screenshots/2.2.8-mac/resolution-validation.png)

Memory guidance separates the engine budget from currently available memory. Unknown peaks remain advisory; execution retains the requested parameters within the runtime budget. Relative pixels and frames are not presented as a precise memory prediction.

![LTX dimensions and memory guidance, November 2 acceptance](screenshots/2.2.8-mac/ltx-resolution-memory.png)

Source archives are validated against POSIX and Windows path rules before extraction. Absolute paths, drive paths, traversal, symlinks, hard links and special files are rejected. Valid archives extract normally and existing source trees are reused. Models, runtimes, configuration and recording assets are preserved.

The November 3 build is installed. All15,653 entries, modes and links match; app/updater signatures, trusted comments and the disk image passed verification. Locally signed, not Apple notarized. Eight tests exercised the installed extraction code; real system-MCP file writing and reading passed. The main frontend suite passed1,668, Rust474, Python395 unit cases plus two standalone scripts, and DSH53, with explicit skipped/ignored cases. Native accessibility read back version2.2.8, existing models and zero running services. The native automation service was unavailable; this batch did not repeat all clicks or generate new videos. Six November2 clips and native resolution checks remain separate historical evidence.

[Download Mac 2.2.8 (Apple Silicon DMG)](https://github.com/HackerChi-Hub/localbrain-releases/releases/download/v2.2.8/LocalBrain_2.2.8_aarch64.dmg) · [Release and updates](https://github.com/HackerChi-Hub/localbrain-releases/releases/tag/v2.2.8) · [Verification](VERIFICATION-2.2.8-MAC.md)

The DMG is75,294,743 bytes. SHA-256: `4b66333e2778a637291e069fd2bd7cd7836b3e07f3877cf4bd3795e3ca2e2481`. Existing Windows/Linux2.2.8 installers, signatures and manifests remain unchanged. Older sections retain their original version context; current downloads follow this section and the download table.

## Windows / Linux 2.2.8: current resources and cross-platform archive checks

This Windows/Linux batch updates the application and bundled tool packages to 2.2.8. Source extraction checks both POSIX and Windows path conventions, rejecting absolute paths, drive paths, parent traversal and links while preserving existing sources and runtimes.

Installed Windows checks cover migration of five supported modules from2.2.4 with rollback retained, an existing Qwen3.8 2B request, document read/write and maintenance state. Debian and AppImage checks cover packaged resources, host initialization and startup under WSL2/Xvfb. The model request and document tools are separate checks, not an autonomous complex-task benchmark.

H3, LTX, Pika and video enhancements remain Apple Silicon Mac only; this batch adds no Windows/Linux video backend. Newly researched Bonsai, LFM3 and low-VRAM image options are not integrated. The public Mac release stays at2.2.7; six videos generated in the Mac2.2.8 candidate are separate evidence. Existing user models, drivers, special engines and configuration are preserved.

[Windows](https://github.com/HackerChi-Hub/localbrain-releases/releases/download/v2.2.8-win-linux/LocalBrain_2.2.8_x64-setup.exe) · [Debian](https://github.com/HackerChi-Hub/localbrain-releases/releases/download/v2.2.8-win-linux/LocalBrain_2.2.8_amd64.deb) · [AppImage](https://github.com/HackerChi-Hub/localbrain-releases/releases/download/v2.2.8-win-linux/LocalBrain_2.2.8_amd64.AppImage) · [Verification](VERIFICATION-2.2.8-WIN-LINUX.md)

## Mac 2.2.7: choose a model, then its video capabilities

Video enhancements now follow one workflow: prepare the model and optional capabilities in Discover, then select the model, generation method, enhancement and parameters in chat before generating. Four/eight-forward acceleration belongs to 8-bit MiniMax H3; endpoint Transition and Layout to Render belong to LTX-2.5. Standard generation remains available; H3 acceleration is off by default.

![Discover: H3 acceleration](screenshots/2.2.7-mac/discover-h3.jpg)

![Discover: LTX capabilities](screenshots/2.2.7-mac/discover-ltx.jpg)

Four capabilities reuse two base models. Complete converted H3 8-bit weights skip approximately 41.4 GB of original backbone weights. Connect a prepared directory with the existing-files selector; new users review the missing shared files, adapters and runtime before installation. Models, conversions, caches and outputs stay in the selected directory, including external disks. Downloads support pause, validated resume and pinned checksums. Installation never starts generation.

1. Find 8-bit MiniMax H3 or LTX-2.5 in Discover, connect existing files and install or enable the required capability.
2. Open the unified workspace through “Go to use”, then select the model. H3 offers standard sampling, four or eight forwards; LTX offers text generation, endpoint Transition or Layout to Render.
3. Supply first/last images for Transition; for Layout, supply an equally long 24-fps driving video and an aligned appearance image. Set dimensions, frame count and seed.
4. Generate, preview, locate the file or reference it in chat. Receipts retain actual parameters, elapsed time and logs.

Layout needs official access approval and a local Hugging Face token; the app never accepts account-data-sharing terms for users. Imported assets are referenced and retained when disabled. Uninstall removes only an adapter downloaded and registered by the app, preserving shared models, runtime, inputs and final videos. An occupied backend blocks a new job without stopping other models. Pika was not downloaded again, and the app does not silently reduce dimensions or decoding precision.

### Four real short-video calls in the installed app

Each call used the installed 2.2.7 native interface on an M5 Pro with 64 GB, the same toy-car prompt, seed 22704 and 24 fps. Approximately one-second samples establish successful calls, not five-second 720P performance. Peaks below are MLX active allocations, not total system memory.

|Capability|Actual output|Elapsed|MLX active peak|
|---|---|---:|---:|
|H3 four forwards|256×256, 22 frames, approximately 0.92 s|21.56 s|25.63 GiB|
|H3 eight forwards|256×256, 22 frames, approximately 0.92 s|25.96 s|25.63 GiB|
|Transition|384×256, 25 frames, approximately 1.04 s|27.61 s|21.81 GiB|
|Layout|384×256, 25 frames, approximately 1.04 s|33.28 s|24.57 GiB|

![H3 four-forward sample frames](screenshots/2.2.7-mac/h3-4-contact.jpg)

![H3 eight-forward sample frames](screenshots/2.2.7-mac/h3-8-contact.jpg)

H3 receipts confirm four/eight actual forwards and 208 attached layers, with full 32-bit video decoding. Reduced sampling compute does not guarantee equal detail for every scene.

![Transition sample frames](screenshots/2.2.7-mac/transition-contact.jpg)

Transition uses the 2.3 adapter with the 2.5 eight-bit distilled base in a compatibility recipe, matching 576 adapter pairs. This is not full native 2.3 acceptance.

![Layout sample frames](screenshots/2.2.7-mac/layout-contact.jpg)

Layout uses an explicitly prepared 25-frame driving clip; the original 81-frame source remains intact. All 480 adapter pairs attach and both control stages complete. Inputs must match the requested length; the app does not silently trim or retime them. All four outputs passed video/audio decoding and dimension/frame checks. Original audio is retained; an audio stream does not establish loudness, dialogue quality or synchronization. High-resolution, long-form and complex scenes still require separate evaluation.

### Download and installation checks

The Apple Silicon Mac 2.2.7 DMG is 92,790,171 bytes, approximately 92.8 MB. All 15,652 built, mounted and installed entries, permissions and links match. App/updater signatures and disk-image verification passed; locally signed, not Apple-notarized. Rust 474 and frontend 1660 tests passed with explicit ignored/skipped cases; 49 Python files passed. A complete clean-machine large-model download and Windows/Linux video inference were not tested in this batch.

[Download Mac 2.2.7 (Apple Silicon DMG)](https://github.com/HackerChi-Hub/localbrain-releases/releases/download/v2.2.7/LocalBrain_2.2.7_aarch64.dmg) · [Downloads and updates](https://github.com/HackerChi-Hub/localbrain-releases/releases/latest) · [Acceptance record](https://github.com/HackerChi-Hub/localbrain-releases/blob/main/VERIFICATION-2.2.7-MAC.md)

SHA-256: `a0eea9853c6f5c8f8ff142749257c6ae4e5b426bb1a75f0646c21a9f3523c89f`.

This batch updates Mac only; Windows/Linux stay at 2.2.4. Historical sections and images below retain their original conditions and platform boundaries.

## Windows / Linux 2.2.4: retain startup errors and upgrade internal tools

Startup failures retain their actual cause after process cleanup. Bundled tools follow the host version, fixing skipped updates under a permanent 1.0.0 version; custom plugin installation remains closed.

Isolated native Windows acceptance migrates the 2.2.2 app's1.0.0 modules to 2.2.4 with rollback versions retained. Paste copies, maintenance receipts, an existing 2B request and real document calls are checked separately.

Pika H3 Flex currently requires Apple Silicon/MLX; Windows/Linux reports unsupported, without borrowing Mac generation results or downloading Pika weights.

DSH 53 passed per platform; Windows Rust 454 passed/37 ignored; frontend 1650 passed/2 skipped; 14 adapters and 7 queue tests passed; 46 Python files (44 unittest files, 375 cases and two scripts) plus 7 security tests passed. A 400ms task-start test initially failed; bounded readiness polling and cleanup before assertions passed the full rerun. Linux acceptance is Ubuntu22.04 WSL2/Xvfb resources and startup, not bare-metal GPU or media inference. See verification for source CI restrictions and this batch's publication status.

[Verification](VERIFICATION-2.2.4-WIN-LINUX.md) · [Downloads](https://github.com/HackerChi-Hub/localbrain-releases/releases/tag/v2.2.4-win-linux)

The Mac section below retains its original independent acceptance scope; current Windows/Linux status is described above.

## Mac 2.2.4: Pika H3 Flex text and first-frame video with audio

Pika H3 Flex is integrated into the main LocalBrain project. Generate a short clip from text or supply one local image as its first frame. The current pipeline uses six steps and 124 frames at 24 fps, producing approximately 5.17 seconds of video with audio. Last-frame conditioning, multiple references and automatic continuation are not implemented. It uses the Pika-specific adapter rather than substituting Wuli or ordinary H3 weights.

Use an Apple Silicon Mac with macOS 26 or newer; 64 GB of unified memory is recommended. Original files require approximately 78.2 GB, with another 23 GB for Q8 conversions and the adapter. Complete files and valid partial downloads are reused. Originals, conversions, cache and receipts stay in managed storage, and Pika has a separate runtime. Existing models and environments are retained. Finish other large-model tasks and release their memory before video generation.

To use it:

1. Prepare Pika H3 Flex in Discover; reuse existing files when available.
2. Install or verify its separate environment in Settings → Runtime and diagnostics.
3. Select the existing Pika model in Settings → Multimedia backends → Video generation and save.
4. Choose the video tool in Chat, then Text only or First-frame reference. Start with 256×256 or 448×256, six steps and 124 frames.

Earlier development verification on the same day used an M5 Pro with 64 GB, 256×256, six steps and a fixed seed. Text generation took 63.71 seconds and first-frame generation 64.12 seconds; observed engine peaks were 25.658 GiB and 26.540 GiB. A previous installed-app MCP call produced a 448×256 clip in 102.90 seconds. All three clips had 124 frames and 32 kHz stereo audio, with decoding and non-silence checks completed. These are single-machine samples, not a cross-device speed promise; audio signal checks do not replace a listening-quality assessment.

![Earlier Pika text-generation sample: first, middle and last frames](screenshots/2.2.4-mac/pika-text-contact.jpg)

![Earlier Pika first-frame sample: first, middle and last frames](screenshots/2.2.4-mac/pika-first-frame-contact.jpg)

This main-project rebuild is installed. All 15,401 entries, permissions and links match the DMG and updater archive. App and updater signatures pass; the app is not Apple-notarized. Thirteen targeted Pika/media-interface tests passed; merge-stage records also include 467 passing Rust tests and 1,650 passing frontend tests. This rebuild did not download models again or run video generation; the author chose to verify text and first-frame output personally. Internal tool packages follow the host version and defer switching while related tasks are active, fixing skipped same-version package upgrades and filtering of non-default media models.

Only Mac receives a new installer in this batch. Windows/Linux retain their independently released 2.2.2; Mac Pika results do not establish support on those platforms. [See verification and actual test scope](VERIFICATION-2.2.4-MAC.md).

[Mac 2.2.4 release page](https://github.com/HackerChi-Hub/localbrain-releases/releases/tag/v2.2.4) · [Download Mac 2.2.4 (Apple Silicon DMG)](https://github.com/HackerChi-Hub/localbrain-releases/releases/download/v2.2.4/LocalBrain_2.2.4_aarch64.dmg)

Mac DMG SHA-256: `63f040f7ea65df5afe4a28b8e7d9b64c4686db0ed2772ee81b6b70dd3a8495a0`.


## Mac 2.2.3: show actual startup failures

Mac 2.2.3 fixes a misleading backend-removed error during model startup. Each attempt retains its exit status and bounded log even when status polling reaps the process first. Sushi residency-budget and context-cache errors show the engine’s actual figures. Models and runtimes are retained. The app does not silently change parameters, raise system memory limits or download weights again. If the requested budget exceeds the limit, reduce the budget or context manually in Settings → Runtime and diagnostics before retrying.

The installed Mac app verified the actual preflight error from Home, restored controls and retained model cards. All 15,639 entries, permissions and links match, and the configuration hash is unchanged. Rust results are 462 passed and 39 ignored; app signing, updater signature verification and DMG validation passed. The app is not Apple-notarized. On 2026-10-31 the author approved a batch-specific exception for the source documentation CI billing restriction; local checks are not a remote CI pass. Windows/Linux remain at independently released 2.2.2.

[Mac 2.2.3](VERIFICATION-2.2.3-MAC.md)



## Windows / Linux 2.2.2: maintenance receipts and pasted attachments

Settings → Runtime and diagnostics unifies maintenance controls and saves outcomes per component. Official update checks are explicit; model startup never upgrades engines. The independent Windows/Linux update channel currently supports Trivy only; llama.cpp and Prism retain verified multi-resource installers. Mac six-engine results are separate. Pasting creates file/image drafts for manual sending; video and unknown binaries remain references without comprehension claims. DSH is pinned to 0.2.1-rc.5 with officially hashed Node 22.23.4. Native Windows checks cover source references, owned paste copies and removal, real Torch verification receipts, an existing 2B request and real DOCX/Markdown. Linux acceptance is WSL2/Xvfb startup and host initialization, not bare-metal GPU, media inference or real OS clipboard gestures. Windows Rust 445 passed/37 ignored; frontend 1650 passed/2 skipped; 14 adapters, 7 queue tests and 53 DSH checks per platform passed. Python 43 files/371 cases and two scripts passed separately; 7 security tests passed. The browser canvas check initially failed and passed an isolated rerun; its instability remains recorded. The author approved this batch CI exception; the account restriction and local acceptance are recorded in verification.

[Verification](VERIFICATION-2.2.2-WIN-LINUX.md) · [Downloads](https://github.com/HackerChi-Hub/localbrain-releases/releases/tag/v2.2.2-win-linux)

The Mac section below retains its initial platform scope.

## Mac 2.2.2: consistent runtime maintenance and pasted attachments

Mac 2.2.2 is publicly released after installed-app verification. On 2026-10-31 the author approved this batch exception for source CI account billing restrictions; local checks are not a remote CI pass. The installed app verified consistent controls, six independent engine updates, database feedback and a Trivy rollback round trip. Existing weights with Splash 1.5 completed text and vision replies. Images, text files and video references can be pasted into chat and are read only after manual sending; videos currently remain file references. Embedded Harness is adapted to 0.2.1-rc.5. Mac is locally signed and not Apple-notarized. Windows/Linux remain at 2.2.1 and will be packaged separately by the author.

[Mac 2.2.2 verification](VERIFICATION-2.2.2-MAC.md). Historical sections retain their original scopes; see the download table for current platform versions.



## Windows / Linux 2.2.1: truthful maintenance stages and prompt completion

Windows and WSL2 Debian are built and installed at 2.2.1, with AppImage also prepared; existing Mac 2.2.1 assets are retained. Settings→Runtime and diagnostics shows percentages only with measured download bytes and totals. Preparation, installation, extraction, verification and removal show stages and clear stale numbers. Main vulnerability and Java index databases report cache, source and verification separately. Completion, failure or pause settles the indicator before a fresh inventory read. Native Windows Torch verification, an existing 2B request, 35 MCP schemas and real DOCX/Markdown passed. Separate controlled UI checks cover 37.5% and slow refresh; they are not Windows real-download evidence. Windows Rust 435 passed/36 ignored; frontend 1641 passed/2 skipped; 14 adapters and 3 queue tests passed; 53 DSH checks per platform; 45 Python files plus 7 security tests passed. Linux acceptance is Ubuntu22.04 WSL2/Xvfb, not bare-metal GPU or media inference. Full standalone Harness 8K compatibility remains unresolved. The author explicitly approved this Windows/Linux 2.2.1 batch exception with local acceptance and the source CI account restriction recorded; local checks are not presented as successful online source CI.

[Windows/Linux verification](VERIFICATION-2.2.1-WIN-LINUX.md) · [Downloads](https://github.com/HackerChi-Hub/localbrain-releases/releases/tag/v2.2.1)

The Mac 2.2.1 section below retains its initial publication scope; current Windows/Linux batch status is described above.

## Mac 2.2.1: maintenance stages and measured download progress

Maintenance no longer stays at a fixed 0%. In Settings → Runtime & Diagnostics, percentages require valid downloaded bytes and a known total. Preparation, extraction, dependency installation, verification and removal show their actual stages. The container database distinguishes the main database and Java index, including freshness checks, valid cache reuse, download sources and commit. Completion clears the busy indicator before refreshing actual state and receipts.

The installed Mac build passed a real 49.0MB tool download and cached container-database maintenance. Download completion automatically changed the component to installed; both valid databases kept their original download times while the latest verification time refreshed. No databases were cleared to force a download, and no large models were downloaded. The Mac app is locally signed and the updater signature was independently verified; it is not Apple-notarized. Windows/Linux remain at 2.2.0 and older releases are retained. See [verification and release boundaries](VERIFICATION-2.2.1-MAC.md).

![Installed app: measured download bytes, speed and percentage](screenshots/2.2.1-mac/measured-download.png)

![Installed app: unknown totals show the verification stage](screenshots/2.2.1-mac/maintenance-stage.png)

![Completed maintenance retains valid caches and refreshes the verification time](screenshots/2.2.1-mac/completed-receipt.png)

## Windows / Linux 2.2.0: internal modules and real document calls

Windows and WSL2 Debian are installed at2.2.0; AppImage is available alongside existing Mac2.2.0 packages. Eight tool packages ship with the app; five apply on Windows/Linux and all are ready at1.0.0. Custom plugin UI and installation commands remain closed. Engine, page and runtime registration is shared; compaction uses consistent kernel measurements including summary framing. Windows image runtime detection remains fixed. An existing2B model completed a real request;35 tools across five packaged MCPs matched compatibility schemas, and real DOCX create/read plus Markdown export passed. Model and MCP tests are separate, not an autonomous end-to-end task benchmark. An initial document failure exposed stale build inputs; final packages use the document implementation from the2.2.0 source package. Windows Rust435 passed/36 ignored;2 live module tests passed; TypeScript1638 passed/2 skipped;14 adapters passed;53 DSH tests passed per platform;45 Python files and7 security plus2 packaging tests passed. Linux acceptance is WSL2/Xvfb only. Windows media generation, standalone Harness8K tasks and real HTB remain outside acceptance. Batch CI limits and approval status are recorded; Mac sections below retain their separate test scope.

[Windows/Linux verification](VERIFICATION-2.2.0-WIN-LINUX.md) · [Downloads](https://github.com/HackerChi-Hub/localbrain-releases/releases/tag/v2.2.0)

## Mac 2.2.0: internal modules and consistent context accounting

Publicly released and installed locally on 2026-10-26. The author explicitly authorized this batch's source-CI billing-limit exception. Local checks, signatures and installation verification pass; hosted source CI is not represented as passing.

Eight tool services use internal versioned packages, with shared capability registration for model backends, pages and runtimes. The core retains tasks, authorization, context, skills, memory and user data. Custom plugin installation remains unavailable; existing one-click runtime installation and maintenance remain available. Internal updates validate before activation, defer for active calls and retain the previous implementation on failure.

Manual compaction uses the same engine meter before and after, including summary framing. Originals are retained and completed tools are not replayed. These actual same-source 2.2.0 functional acceptance images are cropped to remove control chrome and unrelated sessions; they do not establish completion of security lab tasks.

![2.2.0 context compaction and retained originals](screenshots/2.2.0-mac/context-compaction.png)

![2.2.0 runtime and diagnostics](screenshots/2.2.0-mac/runtime-center.png)

Cached models completed representative real chat, document and media calls. Independent web, SSH and local certificate-VPN adapter tests pass. Three native model lab runs timed out without model proof acceptance, model report export or post-repair model retesting; real HTB remains unverified. Experiment materials stay local and are not distributed with the application. See [installation and release verification](VERIFICATION-2.2.0-MAC.md). This batch updates only Mac; Windows/Linux remain at 2.1.7. Older sections below retain historical status; use the platform download table for current releases.

## Windows / Linux 2.1.7: correct Windows image runtime status

A missing Windows Lib/site-packages lookup made verified image environments appear partially installed. This release fixes detection while preserving Linux/macOS layouts, existing runtimes, models, CUDA and drivers. The native Windows package recognizes existing Torch/Diffusers as installed and offers no reinstall action. Both image pipelines and Torchvision import successfully and CUDA is available; actual image generation was not tested. Windows and WSL2 Debian are installed; Debian/AppImage resources and WSL2+Xvfb startup were checked. Mac retains 2.1.6. Source CI billing limits and this batch publication status are recorded in verification; standalone Harness 8K overflow remains unresolved.

[Verification](VERIFICATION-2.1.7-WIN-LINUX.md) · [Windows/Linux downloads](https://github.com/HackerChi-Hub/localbrain-releases/releases/tag/v2.1.7)

## Windows / Linux 2.1.6 released

Windows and WSL2 Debian are installed. This release adds runtime management, download pause/resume and pinned Harness0.2.1-rc.3; Node22.23.3, models and drivers are retained. Native Windows runtime-center rendering and a real read-only PolyStrata35B tool roundtrip passed. Both platforms passed53 DSH tests and old-session recovery without tool replay. Windows Rust:427 passed/34 ignored; TypeScript:1632 passed/2 skipped; adapters:14 passed; all45 Python test files and7 additional security tests passed. All three updater signatures were verified. The author explicitly approved this batch despite source CI billing/spending limits; online source CI is not represented as passing. Linux acceptance is WSL2/Xvfb only; standalone Harness8K overflow and full image/tool task limits remain documented.

[Windows/Linux verification](VERIFICATION-2.1.6-WIN-LINUX.md) · [Known issues](KNOWN-ISSUES-DSH-LOCAL-MODELS.md) · [Downloads](https://github.com/HackerChi-Hub/localbrain-releases/releases/tag/v2.2.0)

Initial Mac and earlier Windows/Linux sections below retain their historical scope; this section and the download table state current platform versions.

## Mac 2.1.6: updated Harness core and clearer runtime maintenance

Mac 2.1.6 is publicly released and installed. Windows/Linux retain published 2.1.3 builds and will be packaged separately by the author. The embedded DSH SDK moves from 0.2.0-rc.2 to the current official prerelease **0.2.1-rc.3**, with exact dependencies and a lockfile. It updates with LocalBrain without changing the standalone Harness client, accounts or existing model configuration.

Ready ordinary components no longer offer an individual install action in Settings → Runtime and diagnostics. Selecting them does not enable batch installation. Missing components can still be prepared together, while offline databases retain explicit update-and-verify actions.

![Installed selection does not enable installation](screenshots/2.1.6-mac/installed-selection.png)

Dependency-blocked Python removal now immediately shows a native explanation listing every unselected dependent; this installed check listed four. The app neither selects extra components nor deletes them automatically. Shared Docker services are detected locally, reused when available, started when offline and installed only when missing. Shared system components retain their existing versions and have no removal action.

![Native dependency-blocked removal](screenshots/2.1.6-mac/uninstall-blocker.png)

The updated skill plugin introduced a working-directory service dependency. The adapter supplies only the host-owned directory identity; tools still return to LocalBrain’s authorized executor. On-demand skills, full opt-out, incremental Chinese summaries and old-session recovery remain available.

The installed app used an existing Splash model for two rounds and one actual read-only security-capability query, returning phase=2 and dockerInstalled=true without scanning a target. Clicking Compact now produced a durable Chinese summary containing trusted user originals and actual receipts while preserving original records. A separate old-SDK session upgrade verified exactly-once tool execution and incomplete-tail recovery. All 53 core tests passed on the bundled Node runtime; 1632 TypeScript and 14 adapter tests passed, with 2 additional tests skipped.

![Installed tool call and context compaction](screenshots/2.1.6-mac/compaction-final.png)

All 13,984 files, permissions and links matched across the build, DMG, updater archive and installed app; application/updater signatures passed and four existing configuration hashes remained unchanged. No models were downloaded and no environments were removed to simulate a new machine. Native button, actual tool-result and compaction terminal-state readback passed. Temporary verification sessions and originals were removed from the regular stores, with evidence retained locally. The Mac app remains locally signed and not Apple-notarized. First-time Mac setup, Windows/Linux and real HTB are outside this round.

![Existing shared system services retained](screenshots/2.1.6-mac/system-services.png)

The GitHub source documentation job did not start because of account billing/spending restrictions. On 2026-10-25 the author explicitly authorized a Mac 2.1.6 exception based on local checks and the stated verification limits; this is not a remote CI pass.


[Verification and limits](VERIFICATION-2.1.6-MAC.md)。


## Mac 2.1.5: prepare prerequisites and container services together

Mac 2.1.5 is publicly released following packaging, installation and targeted native-interface checks. Windows and Linux retain their published 2.1.3 packages, with new builds handled separately by the author.

Open Settings → Runtime and diagnostics → Install missing components, review the scope and confirm. Missing package managers, build tools and container services are prepared before dependent environments. A failure stops subsequent components; retry fills what is still missing and skips ready items. Containers count as ready only after a successful connection; installed but offline services offer a start action.

![Installed 2.1.5 runtime management](screenshots/2.1.5-mac/runtime-overview.png)

Existing local Docker Desktop or Colima services are reused, preserving the default connection, VM resources and running containers. Shared system components have no removal control; Python, FFmpeg, engines and tools retain separate managed environments. On Macs without Homebrew, the app downloads and verifies the official package before handing it to the system installer. Licensing, administrator approval and restarts still require user action.

![Shared system prerequisites retain existing versions](screenshots/2.1.5-mac/system-services.png)

Downloads can pause with partial files retained and resume explicitly. Extraction, pip and container steps finish the current component before later steps pause. Controls distinguish downloading, resuming and installing a complete cached archive; removal appears only for confirmed installed managed components and cleanup only when cache exists. Built-in document/web tools and the Harness core update with the app without separate maintenance rows.

![Filtering, batch selection and conditional controls](screenshots/2.1.5-mac/filter-selection.png)

Native checks covered five component groups, zero missing items, no removal for the three shared dependencies, filtering, selection, installation-scope confirmation and cancellation. Cancellation did not start installation. The build, disk image, updater archive and installed application matched across 12,995 files and links; application and updater signatures passed. Existing-environment reuse and official-installer download/signature/offline-cache checks passed. First-time setup on a Mac without Homebrew and native Windows/Linux system installation remain untested. Existing environments were not removed to simulate a new machine; no models were downloaded or containers stopped.

![Review installation scope before execution](screenshots/2.1.5-mac/install-confirmation.png)

The Mac app retains local signing and is not Apple-notarized. The GitHub source documentation job did not start because of account billing/spending limits; the author explicitly approved a Mac 2.1.5 release exception. Local checks are not a remote CI pass. See [verification](VERIFICATION-2.1.5-MAC.md) and [prerequisite setup](SYSTEM_PREREQUISITES_2.1.5.md).

[Download Mac 2.2.1 (Apple Silicon DMG)](https://github.com/HackerChi-Hub/localbrain-releases/releases/download/v2.2.1/LocalBrain_2.2.1_aarch64.dmg)


## Historical candidate record: Mac 2.1.4 candidate: one-click runtime setup (pending publication)

The 2026-10-25 candidate adds runtime pause, persisted pending items and explicit continuation, plus Splash pause that preserves original weight fragments. Download, resume, cached installation, removal and cache-cleanup controls follow actual state. Small files and background tasks use real byte units and discard stale speeds on pause. An official approximately 25 MB archive passed exact-offset resumption, full verification, offline reuse and cleanup without downloading a large model. See [usage and verification limits](DOWNLOAD_CONTROLS_2.1.4.md). The independent UI preview below explicitly simulates installation/removal and shows download returning after cache cleanup. Public installers remain at 2.1.3.

![Download-control interaction preview](screenshots/2.1.4-runtime-download-clean-preview.png)

Settings → Runtime and diagnostics shows five groups: model engines, media, security tools, offline data and system services. Built-in document/web tools and the Harness core update with the app without maintenance rows. Choose “Install missing components” and review dependencies to fill missing supported components while skipping ready ones. Reconnection rereads and reuses container images/databases; retries process only what is still missing. Individual installation, updates and verification remain available.

Removal controls appear only for confirmed installed managed components, excluding missing, partial, external and unreadable offline states. Batch removal is hidden without eligible selections. Pinned archives preserve interrupted downloads, validate ranges and verify SHA-256 before extraction. Supported existing official package managers prepare system dependencies, preserving system licensing, administrator and restart requirements. Ready services do not show redundant installation instructions.

![One-click setup and model environment preview](screenshots/2.1.4-runtime-models-oneclick-preview.jpg)

![Unready security tools show installation controls only](screenshots/2.1.4-runtime-security-oneclick-preview.jpg)

These use the production component with read-only inventory and explicitly mocked changes. The revision is installed; all 12,995 files/links match and signature/image checks pass. Native capture still fails; native clicks, complete container setup and actual removal remain unverified. See [acceptance limits](VERIFICATION-2.1.4-MAC.md) and [runtime scope](RUNTIME_CENTER.md). Weights, external tools, sessions, reports and VMs remain intact. The Harness core stays on 0.2.0-rc.2. The software package remains unpublished; Windows/Linux remain on 2.1.3.

Windows/Linux 2.1.3 are publicly released: Windows and WSL2 Debian are installed; Debian/AppImage resource checks, packaged DSH initialization, 20-second startup and 53 DSH tests passed. All three updater signatures were verified. The author explicitly approved this batch despite source CI account limits; online source CI is not reported as passing. Bare-metal Linux GPU and full DSH image/tool tasks remain unverified; PolyStrata 35B still overflows its 8K window with the desktop agent. See [acceptance and unresolved items](VERIFICATION-2.1.3-WIN-LINUX.md) and [downloads](https://github.com/HackerChi-Hub/localbrain-releases/releases/tag/v2.2.0). Earlier local-candidate and initial single-platform paragraphs below are historical; this section states current platform status.

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

## Latest downloads：Windows 2.2.9 · Mac 2.2.9 · Linux 2.2.9

The following 2.1.3 tool-integration checks are historical.

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
| Apple Silicon Mac 2.2.9 | [DMG](https://github.com/HackerChi-Hub/localbrain-releases/releases/download/v2.2.9/LocalBrain_2.2.9_aarch64.dmg) · Installed; archive safety and real file-tool calls passed; locally signed, not Apple-notarized |
| Windows x64 | [Installer](https://github.com/HackerChi-Hub/localbrain-releases/releases/download/v2.2.9-win-linux/LocalBrain_2.2.9_x64-setup.exe) · 2.2.9; installed; platform acceptance and limits above|
| Linux x64 | [Debian](https://github.com/HackerChi-Hub/localbrain-releases/releases/download/v2.2.9-win-linux/LocalBrain_2.2.9_amd64.deb) · [AppImage](https://github.com/HackerChi-Hub/localbrain-releases/releases/download/v2.2.9-win-linux/LocalBrain_2.2.9_amd64.AppImage) · 2.2.9; installed; platform acceptance and limits above|

[Mac 2.2.9 release notes](https://github.com/HackerChi-Hub/localbrain-releases/releases/tag/v2.2.9) · [Mac checksums](SHA256SUMS-2.2.9-MAC.txt) · [Windows/Linux 2.2.9 release notes](https://github.com/HackerChi-Hub/localbrain-releases/releases/tag/v2.2.9-win-linux). Drag the Mac app into Applications; on Debian/Ubuntu run `sudo apt install ./LocalBrain_2.2.9_amd64.deb`. Older releases are retained.

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
| Mac DMG | `8323c521ec6d0fb39fcd838a1c38636e775381559c9211213ec24ead39dc342a` |
| Windows installer | `b1f0e8df75d73186e058473c113d76dfdfe1fb706c50d58b7b8bc78e827f17ef` |
| Linux AppImage | `05e41debc713cb258dcfbfacc06b3ba6fefca99f66a5ef82d1f206d0e667cfa8` |
| Linux Debian | `d647f5733d42e05811d42035bf752de3d84c81335e7c4c94995310dc425216cf` |

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
