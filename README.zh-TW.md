# 方寸智匣 · LocalBrain

[简体中文](README.md) · **繁體中文** · [English](README.en.md)

本機模型、檔案工具與媒體工作台放進桌面應用。使用者選擇模型與授權範圍，模型規劃工作、呼叫工具，程式保留真實回執。

[官方網站](https://hyphentech.top/localbrain) · [全部發行](https://github.com/HackerChi-Hub/localbrain-releases/releases) · [安全檢查實測教學](https://hyphentech.top/localbrain-network-security/)

## 最新下載：1.6.7

| 平台 | 安裝包與狀態 |
| --- | --- |
| Apple Silicon Mac | [DMG](https://github.com/HackerChi-Hub/localbrain-releases/releases/download/v1.6.8/LocalBrain_1.6.8_aarch64.dmg)，已安裝及原版27B工具鏈實測；未蘋果公證 |
| Windows x64 | [安裝程式](https://github.com/HackerChi-Hub/localbrain-releases/releases/download/v1.6.8/LocalBrain_1.6.8_x64-setup.exe)，同源CI建置與更新驗簽；未實機功能驗收 |
| Linux x64 | [AppImage](https://github.com/HackerChi-Hub/localbrain-releases/releases/download/v1.6.8/LocalBrain_1.6.8_amd64.AppImage) · [Debian包](https://github.com/HackerChi-Hub/localbrain-releases/releases/download/v1.6.8/LocalBrain_1.6.8_amd64.deb)，預覽支援，未實機功能驗收 |

[發行說明與校驗檔案](https://github.com/HackerChi-Hub/localbrain-releases/releases/tag/v1.6.8)。Mac拖入應用程式，Windows執行安裝程式；Linux AppImage先執行`chmod +x LocalBrain_1.6.8_amd64.AppImage`，Debian/Ubuntu執行`sudo apt install ./LocalBrain_1.6.8_amd64.deb`。更新包帶簽章，Linux更新使用AppImage。保留舊發行。

## 本版修正

無效目標在批准前拒絕，執行時再次核對；報告提供真實分頁參數、下一頁請求與持久化去重證據數量；缺失修復欄位保持未知；漏洞庫最近成功準備狀態與離線掃描分開。共用機制不按模型名稱特判，不替模型改寫參數。

Mac真實安裝版已完成範圍確認、原生批准、Juice Shop鏡像掃描與證據讀取。170條是元件匹配，不是已驗證可利用漏洞。模型仍可能誤解證據或給出未驗證升級建議，須核對原始報告。[驗收紀錄](https://github.com/HackerChi-Hub/localbrain/blob/main/docs/RELEASE_1.6.8_VERIFICATION.md)。

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
| Mac DMG | `fe9f5f1e4ba95ab4eb662ef978dde1effb32eec9135d693cd45bbc79a2a2fe6b` |
| Windows安裝程式 | `ff71f6a28dd2e571bf45566436d2980711118b24d660f1f596e4aa747e46ef39` |
| Linux AppImage | `81c1904a0df699cdfcaf55ce557723f19c61113ec0b70495d2ce02f59d75ffbf` |
| Linux Debian包 | `fb0bc79e193cfb230812384755cc56a9c68b5a8a5d5cc4005d1c0882f7340a55` |

本倉提供安裝包與說明，不是開發原始碼目錄。專有軟體，© HyphenTech · 黑粉科技。
