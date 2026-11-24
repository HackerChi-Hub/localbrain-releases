# Windows / Linux 2.4.9 Validation

Windows/Linux 2.4.9 passed local installation, runtime upgrade, and multi-layout mount verification, aligning all three desktop platforms (`darwin-aarch64`, `windows-x86_64`, `linux-x86_64`) on `2.4.9`.

## Validated Scope
- **Source commit**: `c87cd54128abbf5c3f5cc26f18f0e9afdeb11233`
- **Automated test gates**: Rust `505 passed, 0 failed, 39 ignored`; TypeScript main/adapters/runtime all passed; DSH `60 passed`; Windows & Linux runtime-contract checks passed; catalog-wide cross-layout regression tests passed across all `CURATED_MODELS`.
- **Windows x64 (`LocalBrain_2.4.9_x64-setup.exe`, `43,840,773` bytes, SHA-256 `b761c071ef9781b82da1080291db43191b053e2a9b8647897dd5fe14bc137974`)**:
  - Installed `13,994` files matched extracted bundle; existing user configuration and model metadata hashes unchanged; packaged DSH host initialization passed (`Node 24.22.3`).
  - Upgraded isolated `inkling-gguf` (`Unsloth b12651-mix-c7059d6` CUDA 12.8, unlocking `Q8_0` KV cache) installed and passed `--version` + `CUDA0` device verification; native `Inkling-2-Mini-GGUF` `Q2_K_XL` startup, chat completion, and tool round trip passed.
  - Isolated real-model UI verification confirmed new `2.4.9` catalog entries (`nokeepai/Inkling-2-Mini-Unbound-GGUF` `v2.1` and `RX5950XT/Inkling-2-Mini-Uncensored-Strata`), verified official vs. Uncensored/Unbound card isolation against local `Q2_K_XL` and `Strata SQ-10` directories, verified standalone single-file `.gguf` mounting + `.localbrain-reference.json` config save/unmount (preserving source file and without mounting adjacent files), and verified disposable external-library deletion.
- **Linux amd64 (`LocalBrain_2.4.9_amd64.deb` `122,190,450` bytes, SHA-256 `5f01bb07d44a83b27472ed8e60fd4b4a261397a4d0d732ab174e683fe6dd70ab`; `LocalBrain_2.4.9_amd64.AppImage` `195,447,288` bytes, SHA-256 `e3f4d43db7fefb7399d7f4a1c516723f2c6dc513624c6db442541558085aebf6`)**:
  - Debian installation, Debian + AppImage Xvfb startup, `14,020` packaged resources, and ext4 native DSH host initialization passed on WSL2 Ubuntu 22.04.

## Boundaries & Unvalidated Scope
- `Atomic Engine` cold-expert SSD streaming and `oMLX 0.8.3` are Apple Silicon Mac only.
- Strata inference on Windows/Linux, `Unbound v2.1` / `Q3_K_XL` / `Q4_K_M` checkpoint inference, and bare-metal Linux GPU/model inference were not executed locally in this batch.
- GitHub Actions source CI did not run due to account billing/spending limits; local checks are recorded separately from remote CI.
- Published Mac `2.4.9` installers and `latest-darwin-aarch64.json` are preserved byte-for-byte, and `latest.json` now unifies all three platforms at `2.4.9`.
