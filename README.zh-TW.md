<!-- evergreen:intro:start -->
![LocalBrain · HyphenTech](screenshots/readme-hero.svg)

# 方寸智匣 LocalBrain · 本機 AI 大模型與檔案、媒體工作台

在一個桌面應用中管理本機模型、授權檔案與語音、圖片、影片、音樂工作。由黑粉科技開發，模型規劃任務並呼叫工具，程式保留真實執行回執。Apple Silicon Mac 整合 MLX、Metal llama.cpp、Splash 與 Prism；Windows 使用適配的 llama.cpp / Prism；Linux 為預覽支援。


<p align="center"><a href="README.md">简体中文</a> | <a href="README.zh-TW.md">繁體中文</a> | <a href="README.en.md">English</a></p>

<p align="center"><a href="https://github.com/HackerChi-Hub/localbrain-releases/releases/latest"><img alt="立即下載" src="https://img.shields.io/badge/立即下載-18181b?style=for-the-badge&amp;logo=github" /></a> <a href="https://hyphentech.top"><img alt="官網" src="https://img.shields.io/badge/官網-334155?style=for-the-badge" /></a></p>
<!-- evergreen:intro:end -->

<!-- recent-features:start -->
## 近期新增與改進（最近 5 項）

- **2.1.1** · 壓縮檢查點保留可信提交的使用者原文，減少任務參數遺失；草稿依會話隔離，不恢復舊授權或登入狀態。
- **2.1.1** · Windows/Linux 2.1.1補齊同源功能與獨立更新簽章；Linux同時提供Debian及AppImage，各平台特殊引擎不隨應用程式隱式升級。
- **2.0.8** · 模型設定儲存與登記統一路徑驗證，一般儲存不誤停獨立引擎；不放寬外部目錄授權。
- **2.0.8** · 新增網頁CTF基礎入口、任務內登入狀態及分頁證據/截圖匯出；完整隔離瀏覽器與模型CTF閉環尚未驗收。
- **2.0.7** · Windows/Linux 2.0.7補齊同源功能與獨立更新簽章；Linux同時提供Debian及AppImage，各平台特殊引擎不隨應用程式隱式升級。
<!-- recent-features:end -->

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

## 最新下載：Windows 2.1.1 · Mac 2.1.1 · Linux 2.1.1

Mac 2.1.1 修復壓縮後使用者原文遺失與會話草稿串用：壓縮時在語意摘要之外保留你給出的目標、帳號、參數與限制，網頁內容與工具回執不能冒充你的要求；草稿與安全任務標記隨所屬對話，刪除後丟棄。單輪時長改為整輪硬上限並分別回報預填／生成耗時；網頁證據支援控制項連結目標、正文續讀區間、核驗失敗分因且不透露候選對錯；授權中途到期明確要求停手；本機清理入口整批預檢並核對保護登記。真實 HTB 握手仍未建立：本輪實測該網路到不了平台邊緣（10 個節點與 TCP/UDP 設定均無伺服器回應），不能據此排除平台或帳號原因；原生批准、含待辦操作的重啟恢復與 Windows/Linux 本輪實收未完成。Windows 2.0.8 與 Linux 2.0.8 保持原版本。[安全能力與限制](SECURITY-CAPABILITIES.md) · [本輪驗收記錄](https://github.com/HackerChi-Hub/localbrain/blob/main/docs/RELEASE_2.1.1_MAC_VERIFICATION.md)。

Mac 1.9.9修復下載終態及Sushi啟動錯誤提示，包括狀態重新整理遮蔽記憶體原因的問題。最終安裝版已驗證真實預檢拒絕、恢復32K後完整常駐載入與中文回應；同權重常駐／32 GiB精確SSD分別駐留44.20／31.21 GiB。模式手動選擇，儲存並重啟生效，不自動降級。見[最終安裝與實測範圍](VERIFICATION-1.9.9-MAC.md)。下方1.9.8段落保留當時驗收邊界。




2.0.8新增模型設定路徑驗證修復與網頁CTF基礎。網頁傳輸6項在Windows/Linux通過，但正式隔離瀏覽器、原生批准及真實模型CTF完整鏈路仍未驗收；須本平台隔離驗證通過才能執行。[機制與限制](SECURITY-WEB-CTF.md)。


Windows/Linux 2.1.1安裝套件已建置驗收：Windows原生聊天、工具寫入與壓縮續答通過，已安裝且設定雜湊不變；Linux Debian及AppImage的資源、套件內DSH與WSL2啟動檢查通過，Debian已安裝。Linux未做裸機桌面/GPU驗收，安全隔離須本平台反向驗證通過。Mac 2.1.1既有資產保留。見[驗收與限制](VERIFICATION-2.1.1-WIN-LINUX.md)。下方候選及舊版本段落皆為歷史狀態。

| 平台 | 安裝包與狀態 |
| --- | --- |
| Apple Silicon Mac 2.1.1 | [DMG](https://github.com/HackerChi-Hub/localbrain-releases/releases/download/v2.1.1/LocalBrain_2.1.1_aarch64.dmg) · 已安裝；四道本機閘與包內程式碼／更新簽章通過；壓縮保留原文、草稿隔離、整輪時長與網頁證據已實測。授權商城為指定任務工具鏈驗證（不是無提示盲測）；原生批准、含待辦重啟恢復與真實 HTB 未驗收。尚未 Apple 公證 |
| Windows x64 | [安裝程式](https://github.com/HackerChi-Hub/localbrain-releases/releases/download/v2.1.1/LocalBrain_2.1.1_x64-setup.exe) · 2.1.1已安裝；原生聊天、工具及壓縮續答通過，更新簽章通過，非Authenticode |
| Linux x64 | [Debian](https://github.com/HackerChi-Hub/localbrain-releases/releases/download/v2.1.1/LocalBrain_2.1.1_amd64.deb) · [AppImage](https://github.com/HackerChi-Hub/localbrain-releases/releases/download/v2.1.1/LocalBrain_2.1.1_amd64.AppImage) · 2.1.1，套件內DSH及Ubuntu22.04 WSL2+Xvfb啟動核對通過；Debian已安裝，預覽支援，未代替裸機/GPU驗收 |

[2.1.1 Windows/Linux發行說明與校驗檔案](https://github.com/HackerChi-Hub/localbrain-releases/releases/tag/v2.1.1)。Mac 拖入應用程式；Debian/Ubuntu 執行 `sudo apt install ./LocalBrain_2.1.1_amd64.deb`。保留舊發行。

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
| Mac DMG | `20f44469c1ef3804657017965de199fbc0a37f3a484c0c97edecff29ae1aea72` |
| Windows安裝程式 | `eb8065515b4b40b8966384e0ecc5046e93ee26be5b44e2dad4173545239deb31` |
| Linux AppImage | `247ac5202fa49db24e7e181411864e133ab1e77ba350cd7e247f14fa6051db99` |
| Linux Debian包 | `b560fa612b17b05e95078f3c7edc658c9100883d9319859bc2cb796dcce39276` |

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
