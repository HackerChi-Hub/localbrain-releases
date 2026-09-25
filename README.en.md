# LocalBrain

[简体中文](README.md) · [繁體中文](README.zh-TW.md) · **English**

A private AI workspace: manage local models, chat, use tools, and connect your existing AI clients.

[Website](https://hyphentech.top/localbrain) · [Downloads](https://github.com/HackerChi-Hub/localbrain-releases/releases)

## Current release

[Download Mac 1.3.11](https://github.com/HackerChi-Hub/localbrain-releases/releases/download/v1.3.11/LocalBrain_1.3.11_aarch64.dmg) · [Windows 1.3.8 downloads](https://github.com/HackerChi-Hub/localbrain-releases/releases/tag/v1.3.8)

Mac installer SHA-256: `9eace92ecb18beb82318d4b953c5cb4fb6abc33fc7660605888876fe688d865c`

- **Mac: 1.3.11** for Apple Silicon. A web check that returns no result is no longer reported as a possible page hang, and delivery is no longer blocked forever by one such interruption. Settings now live behind one entry point split into nine categories; each item shows a keyword and the long explanation moves into a hover tooltip, and the chat page's Parameters drawer renders the same panel as the settings page. Read-only folders and writable workspaces have separate permissions; build/test commands require confirmation each time; webpage previews can optionally use restricted network access.
- **Windows: 1.3.8** remains the published installer. Multilingual source is available; the next Windows package will be built separately. The Mac version does not imply a Windows release.
- Select **Settings → Interface language**, or follow the system language. Changes apply immediately and persist. Conversations, model responses, code, paths, and raw backend logs are not translated.

## Features

- **Model management:** download, start, stop, and import models. Mac supports MLX and llama.cpp; Windows uses llama.cpp with CUDA or CPU according to the hardware.
- **Model catalog and capabilities:** language, speech, image, and video categories. Bonsai 2 uses an isolated Prism runtime. Check in-app descriptions for model and platform restrictions.
- **Hardware-aware parameters:** runtime and context budgets use actual memory, VRAM, and model metadata. Recommendations are estimates, not a guarantee against out-of-memory errors in every workload.
- **Chat and tools:** streaming, attachments, cancellation, context management, web search, document tools, and restricted local file access. Successful tool calls do not guarantee correct artifacts; inspect the result.
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
