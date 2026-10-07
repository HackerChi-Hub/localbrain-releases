<!-- evergreen:intro:start -->
![LocalBrain · HyphenTech](screenshots/readme-hero.svg)

# 方寸智匣 LocalBrain · 本機 AI 大模型與檔案、媒體工作台

在一個桌面應用中管理本機模型、授權檔案與語音、圖片、影片、音樂工作。由黑粉科技開發，模型規劃任務並呼叫工具，程式保留真實執行回執。Apple Silicon Mac 整合 MLX、Metal llama.cpp、Splash 與 Prism；Windows 使用適配的 llama.cpp / Prism；Linux 為預覽支援。


<p align="center"><a href="README.md">简体中文</a> | <a href="README.zh-TW.md">繁體中文</a> | <a href="README.en.md">English</a></p>

<p align="center"><a href="https://github.com/HackerChi-Hub/localbrain-releases/releases/latest"><img alt="立即下載" src="https://img.shields.io/badge/立即下載-18181b?style=for-the-badge&amp;logo=github" /></a> <a href="https://hyphentech.top"><img alt="官網" src="https://img.shields.io/badge/官網-334155?style=for-the-badge" /></a></p>
<!-- evergreen:intro:end -->

<!-- recent-features:start -->
## 近期新增與改進（最近 5 項）

- **1.7.2** · 修復新版 Harness 本機模型接入，改用 cordis.patch.yml，保留其他提供方、支援備份與原子寫入；已有會話需重新選擇模型。
- **1.7.0** · 表格按真實列分頁，可選工作表和儲存格範圍；附件標示截取邊界。
- **1.7.0** · 提供加總、計數、最小值及最大值的程式統計，避免把模型估算當作計算。
- **1.7.0** · 文件安全追加、舊值保護與獨立對帳；重算副本保留原件。
- **1.7.0** · 文件與簡報支援渲染預覽與排版預警；完整模型主導辦公工作仍待驗收。
<!-- recent-features:end -->

<!-- evergreen:demos:start -->
## ▶ 使用示範

**本機模型啟動、長任務與實際交付**

| Bilibili | YouTube |
| :---: | :---: |
| [![B 站觀看](https://img.shields.io/badge/Bilibili-00a1d6?style=for-the-badge&logo=bilibili&logoColor=white)](https://www.bilibili.com/video/BV11Xab6GEjy/) | [![YouTube 觀看](https://img.shields.io/badge/YouTube-ff0033?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/watch?v=A6nRwKU8fao) |

影片示範的是拍攝時的版本；安裝套件與目前功能以本頁正式發行資訊為準。影片以中文講解。
<!-- evergreen:demos:end -->

## 最新下載：1.7.2

| 平台 | 安裝包與狀態 |
| --- | --- |
| Apple Silicon Mac | [DMG](https://github.com/HackerChi-Hub/localbrain-releases/releases/download/v1.7.2/LocalBrain_1.7.2_aarch64.dmg)，簽章、映像及更新簽章通過；本機安裝與新包按鈕驗收等待活躍工作結束；未蘋果公證 |
| Windows x64 | [安裝程式](https://github.com/HackerChi-Hub/localbrain-releases/releases/download/v1.7.2/LocalBrain_1.7.2_x64-setup.exe)，同源CI建置與更新驗簽；未實機功能驗收 |
| Linux x64 | [AppImage](https://github.com/HackerChi-Hub/localbrain-releases/releases/download/v1.7.2/LocalBrain_1.7.2_amd64.AppImage) · [Debian包](https://github.com/HackerChi-Hub/localbrain-releases/releases/download/v1.7.2/LocalBrain_1.7.2_amd64.deb)，預覽支援，未實機功能驗收 |

[發行說明與校驗檔案](https://github.com/HackerChi-Hub/localbrain-releases/releases/tag/v1.7.2)。Mac拖入應用程式，Windows執行安裝程式；Linux AppImage先執行`chmod +x LocalBrain_1.7.2_amd64.AppImage`，Debian/Ubuntu執行`sudo apt install ./LocalBrain_1.7.2_amd64.deb`。更新包帶簽章，Linux更新使用AppImage。保留舊發行。

本版三平台建置原始碼為 `9fd4fe45bde2ac4634392ed77f46e066444d9674`。原失敗 Harness 會話已恢復並回覆「連線成功」；保留1.7.1的Splash相容修復，工作區影片LoRA改動未納入本包。[1.7.2驗收記錄](https://github.com/HackerChi-Hub/localbrain/blob/main/docs/RELEASE_1.7.2_VERIFICATION.md)。

<!-- evergreen:screenshots:start -->
## 實際介面

沿用倉庫已公開的 1.4.6 版 macOS 簡體中文截圖，展示模型管理與工具接入；不是最新版截圖，模型與記憶體數字僅代表拍攝時狀態。

![方寸智匣本機模型工作台，歷史版本 1.4.6](screenshots/zh-CN/home.png)

![方寸智匣本機工具與 AI 客戶端接入，歷史版本 1.4.6](screenshots/zh-CN/integrations.png)
<!-- evergreen:screenshots:end -->

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
| Mac DMG | `2a51ee558edc06edeea1dd1e8b13900c1056060ed21af426bfd05233c443ee52` |
| Windows安裝程式 | `386dea8822d64d531b2554217e74fd769a6f5b9b4be8467c9805917bb3e8e3f8` |
| Linux AppImage | `b22a0fd0eb3c37245ce843e2cf27047b22a1cfbec49eb73090d4d09b6f3b65d7` |
| Linux Debian包 | `9bc9c8b5897a194c9684fcf301b68d9872e78af4c14f9ab4ec095dd8ca077fec` |

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
