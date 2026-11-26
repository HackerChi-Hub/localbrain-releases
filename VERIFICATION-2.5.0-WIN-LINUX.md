# Windows / Linux 2.5.0 Validation

Windows/Linux 2.5.0 passed local installation, session-scoped Super-Permission UI/execution/isolation/guard checks, and native CUDA runtime & tool round-trip verification, unifying all three desktop platforms (`darwin-aarch64`, `windows-x86_64`, `linux-x86_64`) on `2.5.0`.

## Validated Scope
- **Source commit**: `016133cd1d6e9d6e3400aa870dda818b9bdae260`
- **Automated test gates**: Rust `508 passed, 0 failed`; TypeScript main/adapters/runtime all passed; DSH `60 passed`; Windows & Linux runtime-contract checks passed.
- **Windows x64 (`LocalBrain_2.5.0_x64-setup.exe`, `43,847,826` bytes, SHA-256 `3071551e59aa4a404b14d41c36562920ec4f25a203f0e80b059631626f7937e4`)**:
  - Installed `13,994` files matched extracted bundle (`14,001` bundle entries); existing user configuration and model metadata hashes unchanged; packaged DSH host initialization passed (`Node 24.22.3`).
  - Verified `2.5.0` Chat composer `[超级权限]` toggle (`54px` aligned beside `[附件]` and `[停止]` / `[发送]`), mandatory high-risk responsibility confirmation modal (`责任声明：使用者须对一切后果负全部责任`), persistent active warning banner + one-click `[退出超级权限]` revocation, strict `sessionId` memory isolation (other sessions stay OFF and reject privileged calls), Windows `PowerShell -NoProfile -NonInteractive -ExecutionPolicy Bypass` shell execution (`npm --version` under `Restricted` default execution policy), normalized non-verbatim Windows drive paths (`D:\...` without `\\?\` prefix), `write_any_file`, and `remove_path` with hard OS root protection (`C:\Windows` deletion blocked).
  - Isolated `inkling-gguf` (`Unsloth b12651-mix-c7059d6` CUDA 12.8) passed `--version` + `CUDA0` device verification; native `Inkling-2-Mini-GGUF` `Q2_K_XL` startup, chat completion, and tool round trip passed.
- **Linux amd64 (`LocalBrain_2.5.0_amd64.deb` `122,212,568` bytes, SHA-256 `87adca99e4cbc5ac74ecaf6b3f75afca673b6437535fe9f0f7710c403b2abffd`; `LocalBrain_2.5.0_amd64.AppImage` `195,471,864` bytes, SHA-256 `532857fddc1bc133073cd88251cdc1be1ba4b961ef21ac4cf35422292785e7ec`)**:
  - Debian installation, Debian + AppImage Xvfb startup, `14,020` packaged resources, and ext4 native DSH host initialization passed on WSL2 Ubuntu 22.04.

## Boundaries & Unvalidated Scope
- `Atomic Engine` cold-expert SSD streaming and `oMLX 0.8.3` are Apple Silicon Mac only.
- Strata inference on Windows/Linux, `Unbound v2.1` / `Q3_K_XL` / `Q4_K_M` checkpoint inference, and bare-metal Linux GPU/model inference were not executed locally in this batch.
- GitHub Actions source CI did not run due to account billing/spending limits; local checks are recorded separately from remote CI.
- Published Mac `2.5.0` installers and `latest-darwin-aarch64.json` are preserved byte-for-byte, and `latest.json` now unifies all three platforms at `2.5.0`.
