# 方寸智匣 · LocalBrain

[简体中文](README.md) · **繁體中文** · [English](README.en.md)

本機模型、檔案工具與媒體工作台放進桌面應用。使用者選擇模型與授權範圍，模型規劃工作、呼叫工具，程式保留真實回執。

[官方網站](https://hyphentech.top/localbrain) · [全部發行](https://github.com/HackerChi-Hub/localbrain-releases/releases) · [安全檢查實測教學](https://hyphentech.top/localbrain-network-security/)

## 最新下載：1.7.0

| 平台 | 安裝包與狀態 |
| --- | --- |
| Apple Silicon Mac | [DMG](https://github.com/HackerChi-Hub/localbrain-releases/releases/download/v1.7.0/LocalBrain_1.7.0_aarch64.dmg)，簽章、磁碟映像及包內辦公程式核驗通過；本版未安裝驗收，未蘋果公證 |
| Windows x64 | [安裝程式](https://github.com/HackerChi-Hub/localbrain-releases/releases/download/v1.7.0/LocalBrain_1.7.0_x64-setup.exe)，同源CI建置與更新驗簽；未實機功能驗收 |
| Linux x64 | [AppImage](https://github.com/HackerChi-Hub/localbrain-releases/releases/download/v1.7.0/LocalBrain_1.7.0_amd64.AppImage) · [Debian包](https://github.com/HackerChi-Hub/localbrain-releases/releases/download/v1.7.0/LocalBrain_1.7.0_amd64.deb)，預覽支援，未實機功能驗收 |

[發行說明與校驗檔案](https://github.com/HackerChi-Hub/localbrain-releases/releases/tag/v1.7.0)。Mac拖入應用程式，Windows執行安裝程式；Linux AppImage先執行`chmod +x LocalBrain_1.7.0_amd64.AppImage`，Debian/Ubuntu執行`sudo apt install ./LocalBrain_1.7.0_amd64.deb`。更新包帶簽章，Linux更新使用AppImage。保留舊發行。

## 本版辦公優化

XLSX支援真實行列分頁、工作表目錄與指定區域讀取；附件標明參考摘要與截取範圍。提供加總、計數、最小值、最大值的程式統計。安全追加、舊值保護、獨立公式結果與明細對帳分開驗收，文件與簡報支援渲染預覽。聊天與圖形介面共用實現，不按模型名稱特判。

本版完成真實文件工具鏈與Mac包內程式驗證；原始費用表指定區域21列完整讀回，數量欄統計303（不是費用總額）。完整模型主導辦公工作與Windows/Linux實機功能仍待驗收；缺少LibreOffice時不能聲稱公式已重算，渲染截圖不等於排版合格。[驗收紀錄](https://github.com/HackerChi-Hub/localbrain/blob/main/docs/RELEASE_1.7.0_VERIFICATION.md)。

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

## SHA-256

| 檔案 | 散列 |
| --- | --- |
| Mac DMG | `f348e90754e943aa32cc9a187e06c58590f45524b08c61719f97a14bb6b229fc` |
| Windows安裝程式 | `9f0af81ab5de83f0acfec1df654dd02d48446ee3bee66ea6f359c1ef78df3fb7` |
| Linux AppImage | `1aa926f956e7be1850f521b9926ac2c5d36245cfdbb53d8b4a363f7583df2366` |
| Linux Debian包 | `6da45c53e2b8631676b71a36b13fd2515fcd17f6a007b8fce8ed7847f5c8ac7f` |

本倉提供安裝包與說明，不是開發原始碼目錄。專有軟體，© HyphenTech · 黑粉科技。
