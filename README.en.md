# LocalBrain

[简体中文](README.md) · [繁體中文](README.zh-TW.md) · **English**

A private AI workspace: manage local models, chat, use tools, and connect your existing AI clients.

[Website](https://hyphentech.top/localbrain) · [Downloads](https://github.com/HackerChi-Hub/localbrain-releases/releases)

## Current release

[Download Mac 1.3.25](https://github.com/HackerChi-Hub/localbrain-releases/releases/download/v1.3.25/LocalBrain_1.3.25_aarch64.dmg) · [Windows 1.3.8 downloads](https://github.com/HackerChi-Hub/localbrain-releases/releases/tag/v1.3.8)

Mac installer SHA-256: `fb1d22fbaf644317722c6639ff4f804bc830df268ad3dfb259352f048167da99`

- **Mac: 1.3.25** for Apple Silicon. **Large files can finally be read to the end.** Above roughly 20,000 characters the read tool hit four defects every time: the description of the start-line parameter was written twice and the second silently replaced the first; a truncated read reported no total line count; and the suggested continuation advanced only 61 lines before the tool reported "nothing more to read", leaving 72% of a 2,500-line file unreachable. With the same model on the same file, the fixed tool reached line 2,000 and answered correctly in both trials. **All three stop switches now do what they say**: "stop when idle" governs every no-progress guard, and when it is off a repeated call is blocked while the task keeps going; document tasks previously ignored every switch and now follow the same settings. The Settings sidebar uses larger text and the content is centred on wide screens.
- The same installer still carries the previous releases: Splash models installed from Discover are no longer hidden; video generation differs every run (a seed is drawn and reported, and putting it back reproduces the result); soundtracks are normalised to −16 LUFS; generating a video right after an image no longer fails for lack of memory; a finished task shows how long this kind of task usually takes.
- **Windows: 1.3.8** remains the published installer. Multilingual source is available; the next Windows package will be built separately. The Mac version does not imply a Windows release.
- Select **Settings → Interface language**, or follow the system language. Changes apply immediately and persist. Conversations, model responses, code, paths, and raw backend logs are not translated.

## Features

- **Model management:** download, start, stop, and import models. Mac supports MLX and llama.cpp; Windows uses llama.cpp with CUDA or CPU according to the hardware.
- **Model catalog and capabilities:** language, speech, image, and video categories. Bonsai 2 uses an isolated Prism runtime. Check in-app descriptions for model and platform restrictions.
- **Hardware-aware parameters:** runtime and context budgets use actual memory, VRAM, and model metadata. Recommendations are estimates, not a guarantee against out-of-memory errors in every workload.
- **Chat and tools:** streaming, attachments, cancellation, context management, web search, document tools, and restricted local file access. Successful tool calls do not guarantee correct artifacts; inspect the result.
- **Run view and timing:** each step shows its action, target, and time; hover to see argument generation versus execution. Repeats fold together without hiding failures, and a finished task shows total time split four ways (segment colors checked for color-blind separation and contrast). **Debug info** expands per-round input tokens, limits, and timings.
- **Prompt templates:** 8 for images (portrait, product, transparent asset, local edit, new scene, person + product composite, Chinese poster, Chinese-English ad) and 5 for video (scenic camera move, everyday close-up, first frame, first-and-last frame, multiple references). One click fills a complete prompt and shows what to change, how many reference images it needs, a reference time from this machine, and the tested result; modes the current video model package cannot run say why.
- **Document workbench:** DocFactory reads, creates, edits, fills templates, and checks previews for DOCX, PPTX, XLSX, and PDF.
- **Local media on Mac:** supported speech recognition, speech synthesis, image, video, and music backends, subject to model-pack and hardware requirements.
- **Client integration:** local compatible API and MCP configuration. OpenCode and similar clients can use local language models. For Codex and Claude Code, retain the cloud model and expose local tools through MCP.
- **Configurable workspace:** trusted local stdio MCP servers, four themes, and platform-specific updates.

## Platforms

| Feature | Apple Silicon Mac | Windows x64 |
|---|---|---|
| Language models | MLX / llama.cpp (Metal) | llama.cpp (CUDA / CPU) |
| Chat, web, and document tools | Supported | Supported |
| MLX media backends | Supported models | Unavailable; entries hidden |
| Multilingual UI since | 1.2.70 | Separate manual build pending |

Recognizing a model file does not mean its architecture can run. Results depend on the model, quantization, runtime, and hardware.

## Quick start

1. Download the installer for your platform. On Mac, drag LocalBrain into Applications.
2. In Settings, install required runtimes and choose the interface language, model directory, and download source.
3. Download a suitable model in Discover, or import an existing model directory.
4. Start a language model and open Chat. Use Integrations for external clients.

Inference can run locally. Downloads, runtime installation, update checks, and web search require a network connection. Only explicitly added external model directories are read. Language switching never sends conversations to a translation service.

## Development

This is a downloads-only repository. The commands below apply to developers with source access, not to this download repository.

React / TypeScript / Vite frontend; Tauri / Rust desktop application.

```bash
npm install
npm test
npm run build
npm run tauri:dev
```

Mac: `npm run package`. Windows: run `npm run package:win` on Windows. Verify installers, signatures, published downloads, and platform-specific manifests before release.

UI dictionaries live in `src/locales/`. Translation must not modify prompts, tool arguments, or user content.

## License

Proprietary software. Models retain their own licenses; weights are not bundled with the app. © HyphenTech.
