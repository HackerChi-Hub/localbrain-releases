<!-- evergreen:intro:start -->
![LocalBrain · HyphenTech](screenshots/readme-hero.svg)

# 方寸智匣 LocalBrain · 本機 AI 大模型與檔案、媒體工作台

在一個桌面應用中管理本機模型、授權檔案與語音、圖片、影片、音樂工作。由黑粉科技開發，模型規劃任務並呼叫工具，程式保留真實執行回執。Apple Silicon Mac 整合 MLX、Metal llama.cpp、Splash 與 Prism；Windows 使用適配的 llama.cpp / Prism；Linux 為預覽支援。


<p align="center"><a href="README.md">简体中文</a> | <a href="README.zh-TW.md">繁體中文</a> | <a href="README.en.md">English</a></p>

<p align="center"><a href="https://github.com/HackerChi-Hub/localbrain-releases/releases/latest"><img alt="立即下載" src="https://img.shields.io/badge/立即下載-18181b?style=for-the-badge&amp;logo=github" /></a> <a href="https://hyphentech.top"><img alt="官網" src="https://img.shields.io/badge/官網-334155?style=for-the-badge" /></a></p>
<!-- evergreen:intro:end -->

<!-- recent-features:start -->
## 近期新增與改進（最近 5 項）

- **2.1.3** · 恢復 Codex、Claude Code 的 MCP 一鍵接入，保留 DeepSeek Harness；僅新增工具，不變更模型、提供方與其他設定。
- **2.1.3** · 每個用戶端個別撤銷工具接入，核對外部變更衝突；Harness 工具撤銷保留模型區塊，不讀取舊版整檔恢復點。
- **2.1.2** · 修正唯讀程式資源造成的 MCP 安裝失敗：向受管 Python 環境註冊並驗證來源；Windows 中文路徑及驗證日誌明確使用 UTF-8。
- **2.1.2** · 每輪聊天結束顯示「贊助開發」文字，點擊才顯示 QR 碼；可暫時收起，不自動彈出，也不進入模型上下文。
- **2.1.2** · 網路安全名單改為全寬，連線與工具按需展開；批次交接只產生草稿，真實 HTB 尚未驗收，不作支援承諾。
<!-- recent-features:end -->

## Windows 本機修復與 DSH 接入邊界（2026-10-24）

接入頁頂部已補回「一鍵恢復接入」，可集中撤銷 Harness 完整接入及 Codex、Claude Code 的受管 MCP；各用戶端分別回報鎖定、衝突及無恢復點，保留原有設定。Windows 2.1.3 修復包已於本機安裝，公開下載狀態以下方分平台表為準。Linux 新包獨立建置及驗收，不沿用 Windows 結果。

使用者已確認 **Qwen3.8-2B-Distill Q4_K_M 在 DSH 的基本文字使用可用**。本機服務實際回報262144 token視窗，與匯出設定一致；不代表已驗證填滿後的速度、記憶體及長文品質，也不等於工具呼叫、多輪任務全部通過。目前2B端點不支援看圖；圖片理解、MCP圖片顯示與視覺模型接入須分別驗收。

**PolyStrata 35B 的完整 DSH 桌面請求在8K視窗仍會超限。** 截圖顯示系統提示約1.5K、工具定義約7.4K，兩項已超過8K，另一次請求輸入12728 token。只壓縮對話或降低輸出上限不足以解決固定開銷；需要按任務精簡工具，或另測較大視窗。這是上下文預算問題，不能據此判定顯示記憶體不足。先前介面卡短請求通過，只證明連線與模型路由，並非完整桌面代理驗收。

[待解問題與驗收邊界](https://github.com/HackerChi-Hub/localbrain-releases/blob/main/KNOWN-ISSUES-DSH-LOCAL-MODELS.md)。GitHub 原始碼 CI 仍受帳戶限制，本機檢查不冒稱線上通過。

<!-- windows-performance:start -->
## Windows 2.0.1：小視窗任務與執行速度

針對本地模型的8K上下文，工具說明按需載入，短片段不反覆摘要；壓縮檢查點附加真實工具回執的短記錄，協助模型辨識已完成步驟。一般請求不增加常駐提示，原始記錄保留，成果效果仍由使用者判斷。

2026-10-20，本機RTX 4070 Laptop 8GB顯示記憶體、32GB記憶體，PolyStrata執行Qwen3.6-35B-A3B UD Q3_K_M：最近日誌常見解碼速度約75～90 token/秒，包含思考，不等於畫面文字速度。以下為唯讀合成工具任務的單次耗時：

| 情境 | 舊版2.0.0 | 2.0.1（歷史樣本） |
| --- | --- | --- |
| 同輪雙工具讀取，未壓縮 | 8.38秒 | 7.91秒 |
| 依序讀取，含一次壓縮 | 未做同條件對照 | 19.70秒 |
| 失敗後壓縮、重試並結束，含兩次壓縮 | 未做同條件對照 | 31.66秒 |

這不是多輪效能基準；2.0.0也已包含部分最佳化，不能據此宣稱相對未最佳化版穩定加速6%。壓縮本身有耗時，最近一次摘要約5秒；減少重複執行可能節省整項任務時間，但尚未量化。五類真實模型回歸及47條引擎測試通過，不代表所有任務均能完成，也不是原12題重測。見[測試方法與限制](PERFORMANCE-2.0.1-WINDOWS.md)。

以上為2026-10-20的歷史測試樣本；目前安裝套件與更新清單以最新下載區為準。
<!-- windows-performance:end -->

<!-- evergreen:demos:start -->
## ▶ 使用示範

**本機模型啟動、長任務與實際交付**

| Bilibili | YouTube |
| :---: | :---: |
| [![B 站觀看](https://img.shields.io/badge/Bilibili-00a1d6?style=for-the-badge&logo=bilibili&logoColor=white)](https://www.bilibili.com/video/BV11Xab6GEjy/) | [![YouTube 觀看](https://img.shields.io/badge/YouTube-ff0033?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/watch?v=A6nRwKU8fao) |

影片示範的是拍攝時的版本；安裝套件與目前功能以本頁正式發行資訊為準。影片以中文講解。
<!-- evergreen:demos:end -->

## 最新下載：Windows 2.1.2 · Mac 2.1.3 · Linux 2.1.2

Mac 2.1.3 恢復 Codex、Claude Code 的 MCP 一鍵工具接入，保留 DeepSeek Harness，不恢復 OpenCode。進入「集成」，按用戶端複製、寫入或個別撤銷；僅操作方寸智匣工具，保留模型、提供方、其他 MCP 與專案設定。設定預設收起，寫入後新會話生效；桌面用戶端執行時要求先結束工作再退出，不自動關閉用戶端。

已完成本機安裝、12,995 個檔案及連結一致性、簽章檢查與更新套件獨立驗章，安裝版 MCP 自檢 26/26。Codex 實際呼叫文件工具通過；Claude Code 因登入憑證已撤銷，依作者要求停測，不列為實際呼叫通過。Mac 為臨時簽章、未 Apple 公證。GitHub 說明同步作業因帳戶限制未啟動，作者明確授權本次 Mac 例外發布，本機通過不冒稱線上 CI 通過。[本輪驗收與限制](VERIFICATION-2.1.3-MAC.md)。Windows/Linux 保留 2.1.2 及原有驗收。

以下 Mac 2.1.2 段落保留當時修正與驗收紀錄。

Mac 2.1.2 已正式發布：修正唯讀程式資源引起的 MCP 安裝失敗，改為向受管 Python 環境註冊並驗證資源路徑；每輪結束僅顯示「贊助開發」文字，點擊才展開 QR 碼。網路安全名單佔用全寬，連線與工具預設收起；按目標及連線類型顯示表單，不再宣稱已支援 HTB。接入僅保留 DeepSeek Harness，另修正短任務耗時顯示無窮倍數。已完成本輪本機回歸、安裝版針對性驗收，以及 12,995 個檔案與連結的一致性核對。GitHub 檢查因帳戶付款／支出限制未啟動，作者明確授權本次僅 Mac 例外發布，不將本機通過冒稱線上 CI 通過。Windows/Linux 已补齐 2.1.2，详见下方验收。真實 HTB 閉環、原生安全執行批准及含待辦操作的重啟復原仍未驗收。[驗收紀錄與限制](VERIFICATION-2.1.2-MAC.md)。

Mac 1.9.9修復下載終態及Sushi啟動錯誤提示，包括狀態重新整理遮蔽記憶體原因的問題。最終安裝版已驗證真實預檢拒絕、恢復32K後完整常駐載入與中文回應；同權重常駐／32 GiB精確SSD分別駐留44.20／31.21 GiB。模式手動選擇，儲存並重啟生效，不自動降級。見[最終安裝與實測範圍](VERIFICATION-1.9.9-MAC.md)。下方1.9.8段落保留當時驗收邊界。




2.0.8新增模型設定路徑驗證修復與網頁CTF基礎。網頁傳輸6項在Windows/Linux通過，但正式隔離瀏覽器、原生批准及真實模型CTF完整鏈路仍未驗收；須本平台隔離驗證通過才能執行。[機制與限制](SECURITY-WEB-CTF.md)。


Windows/Linux 2.1.2 已補齊唯讀資源註冊修正與本版介面改進。Windows 原生真實模型聊天、檔案寫入及壓縮續答通過，已安裝且設定雜湊未變；Linux Debian/AppImage 的套件內宿主、資源及 WSL2 啟動檢查通過，Debian 已安裝。Linux 裸機/GPU及真實 HTB 未驗收，特殊引擎不隨應用程式隱式升級。 [2.1.2 verification](VERIFICATION-2.1.2-WIN-LINUX.md).

作者已批准本批 Windows/Linux 2.1.2 例外發布。GitHub 原始碼檢查因帳戶付款／額度限制未啟動，本機通過不冒充線上CI通過。

| 平台 | 安裝包與狀態 |
| --- | --- |
| Apple Silicon Mac 2.1.3 | [DMG](https://github.com/HackerChi-Hub/localbrain-releases/releases/download/v2.1.3/LocalBrain_2.1.3_aarch64.dmg) · 已安裝並發布；三用戶端工具入口、協定自檢及 Codex 實際呼叫通過。Claude Code 模型呼叫停測；臨時簽章、未 Apple 公證 |
| Windows x64 | [安裝程式](https://github.com/HackerChi-Hub/localbrain-releases/releases/download/v2.1.2/LocalBrain_2.1.2_x64-setup.exe) · 2.1.2已安裝；原生聊天、工具及壓縮續答通過，更新簽章通過，非Authenticode |
| Linux x64 | [Debian](https://github.com/HackerChi-Hub/localbrain-releases/releases/download/v2.1.2/LocalBrain_2.1.2_amd64.deb) · [AppImage](https://github.com/HackerChi-Hub/localbrain-releases/releases/download/v2.1.2/LocalBrain_2.1.2_amd64.AppImage) · 2.1.2，套件內DSH及Ubuntu22.04 WSL2+Xvfb啟動核對通過；Debian已安裝，預覽支援，未代替裸機/GPU驗收 |

[Mac 2.1.3 發行說明](https://github.com/HackerChi-Hub/localbrain-releases/releases/tag/v2.1.3) · [Mac 校驗值](SHA256SUMS-2.1.3-MAC.txt) · [Windows/Linux 2.1.2 發行說明](https://github.com/HackerChi-Hub/localbrain-releases/releases/tag/v2.1.2)。Mac 拖入應用程式；Debian/Ubuntu 執行 `sudo apt install ./LocalBrain_2.1.2_amd64.deb`。保留舊發行。

以下Windows 2.0.1及更早段落保留發布時的歷史狀態；目前平台版本以上方下載表為準。

本次更新 **Windows 2.0.1**：壓縮檢查點附加最近3筆程式原始回執短記錄，協助辨識已完成操作；一般請求不增加常駐提示。有效壓縮後，僅完整輸出額度仍可容納時才越過提前整理目標。真實模型故障注入、明確重做、失敗重試、批次呼叫及最終套件聊天/連網回歸通過，本機已安裝。摘要仍有損。見[驗收及限制](VERIFICATION-2.0.1.md)。Mac保留1.9.9，Linux既有套件不變。

以下為 1.9.1 的歷史驗收說明： 本輪上下文整理、技能與記憶的行為、實測與限制見 [1.9.1 驗收記錄](VERIFICATION-1.9.1.md)。原文與摘要分開保存，還原不重新執行已完成工具；摘要仍有損，可能遺漏事實。歷史媒體實測見 [1.8.0 驗收記錄](VERIFICATION-1.8.0.md)，保留其語音、編輯、音樂與實驗影片的問題說明。Windows、Linux Debian 已於 2026-10-17 從同一主分支提交補齊 1.9.1，啟用原生工具引擎。Windows 套件結構與更新簽章通過；Linux 完成 WSL 安裝及 20 秒啟動檢查。完整介面、模型與自動／手動摘要互動尚未於兩平台實機驗收；Linux 須手動安裝 Debian 包，AppImage 自動更新保留 1.7.2。GitHub帳戶付款或支出限制使遠端作業未啟動，本機檢查不冒充遠端CI通過。

Mac 1.9.8 新增可選受管Sushi1.2.4：設定顯式安裝約71MB獨立環境，發現頁下載或掛載Qwen3.8 Flash Next 2.6位專用包。預設32K與完整常駐，可手動設定精確SSD預算；不依賴Homebrew，啟動不更新引擎、不改系統代理與GPU記憶體限制。架構、分片及真實載入狀態檢查後才顯示可用。本輪未重新下載125B權重，不把環境安裝與跨域測試當作完整生成、速度或工具生成驗收。見[使用說明](SUSHI_RUNTIME.md)與[Mac驗收邊界](VERIFICATION-1.9.8-MAC-SUSHI.md)。Windows1.9.8既有修復及驗收保留，Linux發行不變。

## 安全能力與限制（2.0.7）

- 能做什麼：在你明確授權的目標上，本地模型獨立完成連接/回應標頭檢查、網頁暴露規則檢測、服務識別、注入探測、TLS稽核、目錄發現與自寫PoC驗證，並匯出逐位元組可校驗的檢查報告。
- 授權約束：逐目標明確授權（單一位址、最多8個連接埠、1–60分鐘、內網單獨確認）；模型不能建/擴授權，工具執行逐次原生確認，退出應用授權即失效。
- 破壞力接近零：每任務零路由內部網路，唯一出口是鎖定授權連接埠的代理；容器降權唯讀無掛載；破壞性類別一律拒絕；改狀態腳本二次確認。
- 不具備：漏洞利用框架、反向shell、提權、內網橫向、完整CTF/HTB攻堅；需要VPN隧道的目標不可達；Windows/Linux隔離未實測、同樣預設禁用。
- 法律邊界在你：掃描任何不屬於自己的系統須先獲書面授權。

全文：[安全能力與限制說明](SECURITY-CAPABILITIES.md)


<!-- evergreen:screenshots:start -->
## 實際介面

沿用倉庫已公開的 1.4.6 版 macOS 簡體中文截圖，展示模型管理與工具接入；不是最新版截圖，模型與記憶體數字僅代表拍攝時狀態。

![方寸智匣本機模型工作台，歷史版本 1.4.6](screenshots/zh-CN/home.png)

![方寸智匣本機工具與 AI 客戶端接入，歷史版本 1.4.6](screenshots/zh-CN/integrations.png)
<!-- evergreen:screenshots:end -->

## 2.1.3 安裝版工具接入

三個用戶端個別管理工具，範例預設收起；MCP 自檢驗證協定及工具發現，不代表每個媒體模型都已完成生成實測。截圖取自最終安裝版，僅裁除系統自動操作控制列，原圖留存本機；介面為簡體中文。

![2.1.3 安裝版三用戶端工具接入](screenshots/2.1.3-mac/mcp-clients.png)

![2.1.3 安裝版 MCP 協定與工具發現自檢 26/26](screenshots/2.1.3-mac/mcp-selfcheck.png)

## 2.1.2 安裝版網路安全頁面

名單佔用全寬，下方「連線與工具」預設收起；截圖來自最終安裝版，未新增測試目標，不代表真實 HTB 已連通。

![2.1.2 安裝版全寬名單與按需連線工具](screenshots/2.1.2-mac/security-workbench.png)


## 1.8.0 實際對話與下載頁

以下為本機安裝版實拍，頂部控制列已裁除；原始執行記錄保留。下載頁沿用同輪Wuli安裝驗收截圖，對話為本輪媒體實測。

![1.8.0 實際對話與下載頁](screenshots/1.8.0-media-chat.png)

![Wuli MiniMax-H3-Turbo](screenshots/1.8.0-wuli-download.png)

<!-- evergreen:capabilities:start -->
## 功能和操作

本機模型下載、匯入與啟停；串流對話、附件、思考控制、硬體感知上下文預算與工作恢復；授權檔案、專案測試、文件及網頁工具；媒體工作台、MCP、本機模型介面、儲存管理與三語介面。媒體控制依模型，不保證所有模型支援笑聲、精確停頓或多參考圖。

1. 啟動支援工具的模型，進入設定的網路安全入口。
2. 選擇內建練習靶場、自己的主機或服務、自己的容器。
3. 選擇目標及模型檢查／直接檢查，核對範圍並確認。
4. 自動準備環境，模型以原生批准呼叫工具並讀取證據；維護預設摺疊。

只檢查自己擁有或明確獲授權目標。主機授權綁定實際位址與埠，不擴大至其他目標；覆蓋連接與回應標頭、網頁暴露規則、服務識別、注入探測、TLS稽核、目錄發現與授權自寫腳本，不是無限制漏洞掃描或自動利用平台。工作目錄限制不是系統沙箱，鏡像審計不等於執行中應用的完整評估。

## 平台與隱私

Mac支援已整合MLX、Metal llama.cpp、Splash與Prism；Windows使用適配llama.cpp/Prism，不支援MLX/Splash。Linux近期新增預覽，受管llama.cpp/Prism下載未完整接入，不支援MLX/Splash。建置成功不替代實機驗收。

本機推論不要求對話傳雲端；下載、依賴、更新、網頁與外部服務仍可能聯網。應用不捆綁模型權重，模型授權各自獨立。
<!-- evergreen:capabilities:end -->

## SHA-256

| 檔案 | 散列 |
| --- | --- |
| Mac DMG | `023934d617c93cb50cd3dd41f55bd7ad672d29983548000cfb78d1f7985417b8` |
| Windows安裝程式 | `0bf1da7a736151648fbd75645f8890bdca6295c8ed77fc67c5f0545482dc6b87` |
| Linux AppImage | `56e26c15bad2915959d35130f56ec47cc9f47d4b8ec8fbf2aa6386d3bc456257` |
| Linux Debian包 | `8da5b637f8fd6bd1e48c0df71ac87d7eadd98c35fca6e62f1a80b97440ecb28a` |

本倉提供安裝包與說明，不是開發原始碼目錄。專有軟體，© HyphenTech · 黑粉科技。

<!-- evergreen:use-cases:start -->
## 常見問題

**本機 AI 可以不把對話傳到雲端嗎？** 本機推理可以留在電腦上；下載、更新、網頁工具與外部服務仍可能連網。

**任何模型都能處理檔案和辦公任務嗎？** 不是。請選擇支援所需工具的模型，檢查執行回執與產出的檔案；模型說「完成」不能代替結果驗證。

**所有平台功能相同嗎？** 不是。請參考上方平台差異和發行驗收狀態，Linux 仍為預覽支援。

**怎樣和其他黑粉科技軟體搭配？** 方寸智匣執行本機模型，黑粉盒子管理平台 API，光影詞庫用影視學英語，黑粉錄屏錄製與剪輯教學。
<!-- evergreen:use-cases:end -->

<!-- evergreen:discovery:start -->
## 更多黑粉科技自製軟體

本機模型：[方寸智匣](https://github.com/HackerChi-Hub/localbrain-releases)。錄製教學：[黑粉錄屏](https://github.com/HackerChi-Hub/HyphenScreen-Releases)。影視英語：[光影詞庫](https://github.com/HackerChi-Hub/screenlex-download)。介面發現與路由：[黑粉盒子](https://github.com/HackerChi-Hub/hyphenbox-release)。分享倉庫首頁，讓朋友按系統選擇最新安裝包。
<!-- evergreen:discovery:end -->
