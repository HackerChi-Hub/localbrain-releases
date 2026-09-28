# LocalBrain

[简体中文](README.md) · [繁體中文](README.zh-TW.md) · **English**

A private AI workspace: manage local models, chat, use tools, and connect your existing AI clients.

[Website](https://hyphentech.top/localbrain) · [Downloads](https://github.com/HackerChi-Hub/localbrain-releases/releases)

## Current release

[Download Mac 1.3.29](https://github.com/HackerChi-Hub/localbrain-releases/releases/download/v1.3.29/LocalBrain_1.3.29_aarch64.dmg) · [Windows 1.3.8 downloads](https://github.com/HackerChi-Hub/localbrain-releases/releases/tag/v1.3.8)

Mac installer SHA-256: `768ab6837e86cb1755509ab6a9e1d3b8cdacb933a80dae6fbd62c8cd6c6a4a00`

- **Mac: 1.3.29** for Apple Silicon. **The interface no longer freezes on long, fast outputs.** With models that stream 100–250 tokens a second, such as 35B-A3B-Splash, writing code or running document tasks used to make the window slower and slower until it stopped responding: every streamed fragment re-counted the whole output, redrew the entire page including past messages, and rewrote the whole conversation to local storage. Now the view refreshes at most every 0.15 s and only redraws the message being written, conversations are saved at most once a second, and the live preview while writing a file shows just the last 16 lines being written. In a stress test writing a 19,200-token file, the longest stall dropped from 0.19 s to 0.03 s and disk writes from about 980 MB to 36 MB.
- The same installer carries the previous releases: document tasks with a Splash model no longer fail with 404; long tasks no longer stall on "output budget used up"; when the model repeats a read of a large, unchanged file, the app reads the next page for it; four defects that stopped large files from being read to the end are fixed; all three stop switches follow your settings; Splash models installed from Discover are no longer hidden.
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
