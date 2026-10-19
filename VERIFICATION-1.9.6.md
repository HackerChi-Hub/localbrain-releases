# Windows 1.9.6 安装与验收 / Acceptance

2026-10-19, Asia/Shanghai. Windows-only release. Mac/Linux Debian retain 1.9.5; Linux AppImage updater retains 1.7.2. No other platform runtime was upgraded.

Application source: `84ac3f74d446886cb98f3dd5f4089ba1f7a8b029` (application code `52f910c7d82d40b62bf127d4e2ce2ded9077603e`, final pinned runtime recipe and notices at `84ac3f7`). DocFactory: `e51c7670be3a1e816f8df61adab61beda3aebf97`. Installer: 39,280,675 bytes; SHA-256 `b873cc27d5b33aa3f15dc8d09eb20ade4efb80b30cd939fe082df2bf529e2f22`. Installed at `D:/LocalBrain`, version 1.9.6. Installed executable SHA-256 `2ff5e64cbe7e113f6d6334dc38f096bcf71efaa136dd26c6f8de734f57b6a7b1`; installer extraction and installed resources match. Independent updater signature verified; not Windows Authenticode.

## Automatic installation

Home offers automatic install/connect and connection to an existing installation. Automatic installation supports Windows x64 RTX 40 / sm_89, NVIDIA 528.33+, >=7GB VRAM and about32GB RAM. Allow at least24GB free disk. The Q3 model is17,104,402,720 bytes; runtime ZIP592,540,168 bytes. Source/runtime/model URLs, revisions and hashes are pinned. The private venv does not modify system Python, display drivers or install compilers. Starting inference never updates dependencies. Initial Python preparation needs the app open; the independent installation job continues after full app exit. Completed history registers only once and cannot override a later manual connection.

Pinned runtime r2 SHA-256 `a4ed0618b92d2326f2b7f5fa1de836c10513c51ffd2056659598a025b09c7aca`: PolyStrata0.1.44.1 / source e190c1a3bb0eca96b5a50eab172927898ec7ca44 / CUDA12.9 / sm_89, including CUDA/VC++ redistributables, tokenizer, licenses and per-file hashes. Model SHA-256 `8966dd0cd8c543c4228490a2a8b0e0814fc4f1e6a8e199ceed4de6754ae7b8e1`.

## Evidence

- Frontend1583 passed,2 skipped; production adapters12 passed. Windows Rust354 passed,27 ignored. Targeted Python installer/launcher10 passed. Production build passed. Platform runtime contracts and local three-language README checks passed.
- Independent installation downloaded pinned source and runtime, created the private venv and installed pinned dependencies. Existing Q3 was reused only after full SHA verification, using a hard link; no original weights were modified. The17GB model was not downloaded again. HTTP fixtures verified Range/resume, ignored Range, corrupt-file refusal, cancellation and safe archive paths.
- Native IPC verified confirmation rejection, duplicate-job rejection, cancellation, existing-install registration and preservation of a later manual connection. A fresh empty profile successfully prepared Python. After quitting the app, the native job remained active and completed; reopening the final extracted installer restored progress, registered the model and displayed both Home actions.
- The final extracted installer ran the actual GPU backend on RTX4070 Laptop8188MiB, driver546.26,32GB RAM. WebView streamed a Chinese answer with health reporting8192 context; the packaged DSH engine completed a countdown file task. Stop, restart and full application exit released the service. These final-package tests used an isolated profile. The formal installed1.9.6 executable and resources were subsequently compared with that package; formal preferences/models were preserved.
- No driver, pagefile, WSL limit or original third-party installation was changed. Test data is isolated from formal data; independent logs retained.

Not covered: other GPUs, Windows ARM, automatic Q2/Q4, vision, full17GB model network interruption/resume, native Linux desktop or new Mac runtime acceptance. Model output quality remains for user review. Private GitHub CI is blocked before steps by account billing/spending limits; local passes are not remote-CI passes.
