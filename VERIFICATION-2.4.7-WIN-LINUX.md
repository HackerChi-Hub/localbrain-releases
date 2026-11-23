# Windows/Linux 2.4.7 validation

Windows/Linux 2.4.7 passed local installation checks. Home now uses one model list without the separate PolyStrata explanation card; installation and connection actions are under Add model. Windows GGUF Q2, CUDA runtime and tool round trips passed; Debian/AppImage installation, startup and host checks passed on WSL2 Ubuntu22.04. Strata inference on Windows/Linux is untested; Locals remains Apple Silicon only. The full Python suite did not pass: Mac Locals tests lack the locals dependency, and the canvas-change assertion failed repeated runs. These are excluded from validated claims. Source CI could not run due to GitHub billing/spending limits; the author authorized publishing the validated scope first. Existing Mac packages are preserved.

Source: f16fee15d162fd6f1dbfffabcce540c1b87b20ac

Rust 497 passed,39 ignored; TypeScript main1680 passed,2 skipped, adapters15 passed, runtime9 passed; DSH60 passed. The full Python suite failed on the two documented checks. UI installation verification includes absence of the separate explanation card and presence of Add model.
