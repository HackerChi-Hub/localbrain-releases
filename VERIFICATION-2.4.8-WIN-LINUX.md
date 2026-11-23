# Windows / Linux 2.4.8 Validation

Windows/Linux 2.4.8 passed local installation and real-model UI verification. Version 2.4.8 resolves newly added models still showing incomplete after download, opening on uninstalled quant tiers, leaking sibling cache byte counts, and failing to manage or remove external folders (`origin === "library"` with empty `recordPath`).

## Validated Scope
- **Source commit**: `01ddc081ded5a7f549c46229abb1328ae78fd0aa`
- **Automated test gates**: Rust `501 passed, 0 failed, 39 ignored`; TypeScript main `1695 passed, 0 failed, 2 skipped`, adapters `15 passed`, runtime `9 passed`; DSH `60 passed`; catalog-wide cross-layout regression check passed across all `CURATED_MODELS`.
- **Windows x64 (`LocalBrain_2.4.8_x64-setup.exe`, SHA-256 `7c8c5af46d9132a23dd56533c9974d1ad10961122ae2cc48166034122cd6213e`)**:
  - Installed `13,994` files matched extracted bundle; existing user configuration hashes unchanged; packaged DSH host initialization passed (`Node 24.22.3`).
  - CUDA runtime install/verification and native `Inkling-2-Mini-GGUF` `Q2_K_XL` inference + tool round trip passed.
  - Isolated real-model UI verification passed against local `unsloth--Inkling-2-Mini-GGUF` (`Q2_K_XL` nested layout + root `dspark`/`mmproj`), `strata-engine--Inkling-2-Mini-Strata` (`SQ-10` + `Vision.strata`), and a disposable external library folder (`origin === "library"`, `recordPath === ""`): installed tiers auto-focused and displayed `已安装` + `管理 / 移除` + `去使用`, sibling tiers (`Q3_K_XL` / `SQ-15`) reported `已登记，所选档位尚未完整` with zero leaked cache bytes, and external library model deletion succeeded without mutating user model files.
- **Linux amd64 (`LocalBrain_2.4.8_amd64.deb` SHA-256 `a786efb899f275008a910863d76332544344de3f46f583aa831cfbc55dcaaba0`; `LocalBrain_2.4.8_amd64.AppImage` SHA-256 `132ee00849cc356968c7c7b96bfd106c2f2b75314a12fb3e04ff3d08fbdec259`)**:
  - Debian installation, Debian + AppImage Xvfb startup, `14,020` packaged resources, and ext4 native DSH host initialization passed on WSL2 Ubuntu 22.04.

## Boundaries & Unvalidated Scope
- Shared Mac model-management code is fixed in source, while published Apple Silicon Mac installers and `latest-darwin-aarch64.json` remain preserved at `2.4.7` pending native macOS build and validation.
- Strata inference on Windows/Linux, `Q3_K_XL`/`Q4_K_M` inference, and bare-metal Linux GPU/model inference were not executed in this batch.
- GitHub Actions source CI did not run due to account billing/spending limits; local tests are recorded separately from remote CI.
