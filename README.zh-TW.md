<!-- evergreen:intro:start -->
![LocalBrain · HyphenTech](screenshots/readme-hero.svg)

# 方寸智匣 LocalBrain · 本機 AI 大模型與檔案、媒體工作台

在一個桌面應用中管理本機模型、授權檔案與語音、圖片、影片、音樂工作。由黑粉科技開發，模型規劃任務並呼叫工具，程式保留真實執行回執。Apple Silicon Mac 整合 MLX、Metal llama.cpp、Splash 與 Prism；Windows 使用適配的 llama.cpp / Prism；Linux 為預覽支援。


<p align="center"><a href="README.md">简体中文</a> | <a href="README.zh-TW.md">繁體中文</a> | <a href="README.en.md">English</a></p>

<p align="center"><a href="https://github.com/HackerChi-Hub/localbrain-releases/releases/latest"><img alt="立即下載" src="https://img.shields.io/badge/立即下載-18181b?style=for-the-badge&amp;logo=github" /></a> <a href="https://hyphentech.top"><img alt="官網" src="https://img.shields.io/badge/官網-334155?style=for-the-badge" /></a></p>
<!-- evergreen:intro:end -->

<!-- recent-features:start -->
## 近期新增與改進（最近 5 項）

- **2.0.0** · Windows小視窗任務接續修復：略過無收益短摘要，內建工具也按需載入，避免反覆壓縮同一小片段後誤停。
- **2.0.0** · Windows小視窗對話修復：摘要停用工具與思考，PolyStrata限制思考額度，無法釋放安全空間時保留記錄並停止。
- **1.9.9** · Mac下載達到100%後依背景、完整檔案及登記結果確認完成；延遲的暫停、取消回執不會覆蓋完成狀態，保留已下載權重。
- **1.9.9** · Sushi記憶體預檢失敗顯示本次實際原因及操作建議；常駐與精確SSD手動選擇，32K同權重兩模式已實測，不自動降級或繞過保護。
- **1.9.8** · Windows 聊天宿主啟動修復：傳送訊息可正常進入模型；異常保留具體診斷，避免只顯示第0輪通道關閉。 大型工具目錄按需載入，避免8K視窗被說明佔滿；已登記PolyStrata可保存選擇，原權限保留。
<!-- recent-features:end -->

<!-- evergreen:demos:start -->
## ▶ 使用示範

**本機模型啟動、長任務與實際交付**

| Bilibili | YouTube |
| :---: | :---: |
| [![B 站觀看](https://img.shields.io/badge/Bilibili-00a1d6?style=for-the-badge&logo=bilibili&logoColor=white)](https://www.bilibili.com/video/BV11Xab6GEjy/) | [![YouTube 觀看](https://img.shields.io/badge/YouTube-ff0033?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/watch?v=A6nRwKU8fao) |

影片示範的是拍攝時的版本；安裝套件與目前功能以本頁正式發行資訊為準。影片以中文講解。
<!-- evergreen:demos:end -->

## 最新下載：Windows 2.0.0 · Mac 1.9.9 · Linux 1.9.5

Mac 1.9.9修復下載終態及Sushi啟動錯誤提示，包括狀態重新整理遮蔽記憶體原因的問題。最終安裝版已驗證真實預檢拒絕、恢復32K後完整常駐載入與中文回應；同權重常駐／32 GiB精確SSD分別駐留44.20／31.21 GiB。模式手動選擇，儲存並重啟生效，不自動降級。見[最終安裝與實測範圍](VERIFICATION-1.9.9-MAC.md)。下方1.9.8段落保留當時驗收邊界。

| 平台 | 安裝包與狀態 |
| --- | --- |
| Apple Silicon Mac 1.9.9 | [DMG](https://github.com/HackerChi-Hub/localbrain-releases/releases/download/v1.9.9/LocalBrain_1.9.9_aarch64.dmg) · 已安裝，下載終態、真實啟動錯誤、32K完整常駐及中文回應驗收完成；常駐與SSD比較見紀錄。嚴格簽章與獨立更新簽章通過，尚未 Apple 公證 |
| Windows x64 | [安裝程式](https://github.com/HackerChi-Hub/localbrain-releases/releases/download/v2.0.0/LocalBrain_2.0.0_x64-setup.exe) · Windows 2.0.0已安裝；真實模型摘要、接續及聊天工具驗收通過；更新簽章通過，非Authenticode |
| Linux x64 | [Debian](https://github.com/HackerChi-Hub/localbrain-releases/releases/download/v1.9.5/LocalBrain_1.9.5_amd64.deb) · Ubuntu 22.04 WSL2 已安裝及啟動驗證；套件內原生 DSH 初始化通過，預覽支援，不代替原生桌面驗收；無新 AppImage |

[2.0.0 Windows發行說明與校驗檔案](https://github.com/HackerChi-Hub/localbrain-releases/releases/tag/v2.0.0)。Mac 拖入應用程式；Debian/Ubuntu 執行 `sudo apt install ./LocalBrain_1.9.5_amd64.deb`。保留舊發行。

本次更新 **Windows 2.0.0**：修復摘要階段呼叫工具或耗盡思考額度導致壓縮失敗；摘要獨立停用工具及思考，PolyStrata依實際輸出額度保留回答空間。短片段無收益且有輸出空間時保留原文繼續，實際溢出仍停止；內建工具說明亦按需載入。最終套件真實模型自動摘要、接續回答、問候、倒計時及2K/5K連網新聞任務驗收通過，本機已安裝。見[驗收及限制](VERIFICATION-2.0.0.md)。Mac保留1.9.9，Linux Debian1.9.5、AppImage更新1.7.2。

以下為 1.9.1 的歷史驗收說明： 本輪上下文整理、技能與記憶的行為、實測與限制見 [1.9.1 驗收記錄](VERIFICATION-1.9.1.md)。原文與摘要分開保存，還原不重新執行已完成工具；摘要仍有損，可能遺漏事實。歷史媒體實測見 [1.8.0 驗收記錄](VERIFICATION-1.8.0.md)，保留其語音、編輯、音樂與實驗影片的問題說明。Windows、Linux Debian 已於 2026-10-17 從同一主分支提交補齊 1.9.1，啟用原生工具引擎。Windows 套件結構與更新簽章通過；Linux 完成 WSL 安裝及 20 秒啟動檢查。完整介面、模型與自動／手動摘要互動尚未於兩平台實機驗收；Linux 須手動安裝 Debian 包，AppImage 自動更新保留 1.7.2。GitHub帳戶付款或支出限制使遠端作業未啟動，本機檢查不冒充遠端CI通過。

Mac 1.9.8 新增可選受管Sushi1.2.4：設定顯式安裝約71MB獨立環境，發現頁下載或掛載Qwen3.8 Flash Next 2.6位專用包。預設32K與完整常駐，可手動設定精確SSD預算；不依賴Homebrew，啟動不更新引擎、不改系統代理與GPU記憶體限制。架構、分片及真實載入狀態檢查後才顯示可用。本輪未重新下載125B權重，不把環境安裝與跨域測試當作完整生成、速度或工具生成驗收。見[使用說明](SUSHI_RUNTIME.md)與[Mac驗收邊界](VERIFICATION-1.9.8-MAC-SUSHI.md)。Windows1.9.8既有修復及驗收保留，Linux發行不變。

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

只檢查自己擁有或明確獲授權目標。主機授權綁定實際位址與埠，不擴大至其他目標；主要覆蓋TCP、明文HTTP及限定洩露規則，不是無限制掃描或自動利用平台。工作目錄限制不是系統沙箱，鏡像審計不等於執行中應用的完整評估。

## 平台與隱私

Mac支援已整合MLX、Metal llama.cpp、Splash與Prism；Windows使用適配llama.cpp/Prism，不支援MLX/Splash。Linux近期新增預覽，受管llama.cpp/Prism下載未完整接入，不支援MLX/Splash。建置成功不替代實機驗收。

本機推論不要求對話傳雲端；下載、依賴、更新、網頁與外部服務仍可能聯網。應用不捆綁模型權重，模型授權各自獨立。
<!-- evergreen:capabilities:end -->

## SHA-256

| 檔案 | 散列 |
| --- | --- |
| Mac DMG | `6fbc94eb895220fbf99a8d497b8ec3506074e6964c51dc895374d985ae5d6c27` |
| Windows安裝程式 | `547c745ad1494b89bc7c4d3ee8646b6fcc28f1c469a59be3496361e149b6e668` |
| Linux Debian包 | `882c7800ba8455379bcb1911bc3456dfca8a22612e4e3193cc046f3f50ac9e33` |

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
