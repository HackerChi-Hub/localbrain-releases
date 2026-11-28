# Windows / Linux 2.5.1 Validation

Windows/Linux 2.5.1 passed local installation, Skill Cards + Unified Long-Term Memory verification (personal-memory core card, atomic write without `policy.revision` bump, web prompt-injection quarantine/approval, zero-VRAM hybrid CJK/ASCII BM25 search), and native CUDA runtime & tool round-trip verification, unifying all three desktop platforms (`darwin-aarch64`, `windows-x86_64`, `linux-x86_64`) on `2.5.1`.

## Validated Scope
- **Source commit**: `aaea34038464b08a0f4733a165433cb92c4b7ee9`
- **Automated test gates**: Rust `511 passed, 0 failed, 39 ignored`; TypeScript main/adapters/runtime all passed; DSH `60 passed`; Windows & Linux runtime-contract checks passed.
- **Windows x64 (`LocalBrain_2.5.1_x64-setup.exe`, `43,898,612` bytes, SHA-256 `a709f8441ccc669a4c2aa4a05db1ac77412516b8d63f077d232f8ba741c6728d`)**:
  - Installed `13,994` files matched extracted bundle (`14,001` bundle entries); existing user configuration and model metadata hashes unchanged; packaged DSH host initialization passed (`Node 24.22.3`).
  - Verified `2.5.1` Skill Cards + Unified Long-Term Memory on `#/knowledge`: pinned built-in `个人长期记忆 (personal-memory)` core card rendered, `remember` persisted without incrementing `policy.revision`, `untrustedWeb: true` memories entered `pendingMemories` quarantine and passed explicit `pendingMemoryApprove`, and pure-CPU hybrid CJK/ASCII BM25 `search` recalled unspaced Chinese queries (`中文回执`). Chat `[超级权限]` toggle remained intact.
  - Isolated `inkling-gguf` (`Unsloth b12651-mix-c7059d6` CUDA 12.8) passed `--version` + `CUDA0` device verification; native `Inkling-2-Mini-GGUF` `Q2_K_XL` startup, chat completion, and tool round trip passed.
- **Linux amd64 (`LocalBrain_2.5.1_amd64.deb` `122,278,672` bytes, SHA-256 `d99729eb8bc9fcf04931b029c6012810d7b7a2e08692e2a2242e93b957816d65`; `LocalBrain_2.5.1_amd64.AppImage` `195,537,400` bytes, SHA-256 `b86635f592a2231b75ec21c772273ffb6a0b8b6e682e61be1f0d3aa149166de0`)**:
  - Debian installation, Debian + AppImage Xvfb startup, `14,020` packaged resources, and ext4 native DSH host initialization passed on WSL2 Ubuntu 22.04.

## Boundaries & Unvalidated Scope
- `Atomic Engine` cold-expert SSD streaming and `oMLX 0.8.3` are Apple Silicon Mac only.
- Strata inference on Windows/Linux, `Unbound v2.1` / `Q3_K_XL` / `Q4_K_M` checkpoint inference, and bare-metal Linux GPU/model inference were not executed locally in this batch.
- GitHub Actions source CI did not run due to account billing/spending limits; local checks are recorded separately from remote CI.
- Published Mac `2.5.1` installers and `latest-darwin-aarch64.json` are preserved byte-for-byte, and `latest.json` now unifies all three platforms at `2.5.1`.
