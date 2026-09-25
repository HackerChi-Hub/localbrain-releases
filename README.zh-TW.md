# 方寸智匣 · LocalBrain

[简体中文](README.md) · **繁體中文** · [English](README.en.md)

把電腦變成私有 AI 工作台：管理本機模型、進行對話、呼叫工具，並連接既有的 AI 用戶端。

[官方網站](https://hyphentech.top/localbrain) · [下載與更新](https://github.com/HackerChi-Hub/localbrain-releases/releases)

## 最新版本

[下載 Mac 1.3.11](https://github.com/HackerChi-Hub/localbrain-releases/releases/download/v1.3.11/LocalBrain_1.3.11_aarch64.dmg) · [Windows 1.3.8 下載頁](https://github.com/HackerChi-Hub/localbrain-releases/releases/tag/v1.3.8)

Mac 安裝包 SHA-256：`9eace92ecb18beb82318d4b953c5cb4fb6abc33fc7660605888876fe688d865c`

- **Mac：1.3.11**，適用於 Apple Silicon。設定合併到一個入口、按九類分欄，每項只顯示關鍵詞，長說明收進浮動提示；對話頁「參數」與設定頁用同一套介面。唯讀目錄與可寫工作區分開授權；專案建置／測試命令須逐次確認；網頁預覽可選擇受限連網。
- **Windows：1.3.8** 仍為目前已發布的安裝包。多語言原始碼已同步，Windows 新安裝包另行手動建置；Mac 版本號不代表 Windows 已更新。
- 在「設定 → 介面語言」選擇語言，亦可跟隨系統。立即生效並儲存，不改變對話、模型回答、程式碼及檔案路徑；後端原始日誌保留原文。

## 功能

- **模型管理**：下載、啟動、停止與匯入模型。Mac 支援 MLX 及 llama.cpp；Windows 使用 llama.cpp，依硬體選擇 CUDA 或 CPU。
- **模型目錄與能力說明**：涵蓋語言、語音、圖像及影片。Bonsai 2 使用獨立 Prism 執行環境。能力及平台限制以應用內說明為準。
- **硬體感知參數**：依實際記憶體、顯示記憶體及模型中繼資料計算執行與上下文預算；建議值不保證所有工作都不會記憶體不足。
- **對話與工具**：串流回答、附件、取消、上下文管理、網頁搜尋、文件處理與受限檔案工具。工具成功不代表內容正確，仍須檢查產物。
- **文件工作台**：DocFactory 讀取、建立、編輯、填寫範本及預覽檢查 DOCX、PPTX、XLSX、PDF。
- **Mac 本機媒體**：已支援的語音辨識、語音合成、圖像、影片及音樂後端，實際功能取決於模型包與硬體。
- **用戶端整合**：本機相容介面與 MCP 設定。OpenCode 等可使用本機語言模型；Codex、Claude Code 建議保留雲端模型，透過 MCP 使用本機工具。
- **可設定工作台**：可信任的本機 stdio MCP 伺服器、四種主題及分平台更新。

## 平台差異

| 功能 | Apple Silicon Mac | Windows x64 |
|---|---|---|
| 語言模型 | MLX / llama.cpp（Metal） | llama.cpp（CUDA / CPU） |
| 對話、網頁及文件工具 | 支援 | 支援 |
| MLX 媒體後端 | 已支援的模型可用 | 不支援，隱藏相關入口 |
| 三語言介面起始版本 | 1.2.70 | 待手動建置 |

能辨識模型檔案不等於能執行其架構；效果取決於模型、量化、執行環境與硬體。

## 開始使用

1. 下載符合平台的安裝包。Mac 將應用程式拖入「應用程式」；Windows 執行安裝程式。
2. 在「設定」安裝所需環境，選擇介面語言、模型目錄及下載來源。
3. 在「探索」下載適合的模型，或匯入既有模型目錄。
4. 啟動語言模型並開啟「對話」；透過「整合」連接外部用戶端。

推論可以在本機進行；首次下載、環境安裝、更新檢查與網頁搜尋需要網路。只有明確加入的外部模型目錄才會被讀取。切換語言不會將對話傳送至翻譯服務。

## 開發

本儲存庫僅提供下載及使用說明。以下指令適用於已取得原始碼的開發者，不能在此下載儲存庫直接執行。

React / TypeScript / Vite 前端，Tauri / Rust 桌面層。

```bash
npm install
npm test
npm run build
npm run tauri:dev
```

Mac 使用 `npm run package`；Windows 在 Windows 上執行 `npm run package:win`。發布前檢查安裝包、簽章、線上下載與分平台更新清單。

介面詞典位於 `src/locales/`，不修改模型提示詞、工具參數及使用者內容。

## 授權

專有軟體。模型遵守各自授權；應用下載不包含模型權重。© HyphenTech · 黑粉科技。
