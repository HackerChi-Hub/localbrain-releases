# Mac 1.9.5 统一设备与网络检查

2026-10-18，Asia/Shanghai。本次只更新软件及源码／下载说明，不更新Blog文章或公众号。

网络安全仅保留工作区安全审查、设备与网络检查两个入口。后者共用一个添加目标按钮、连接方式选择、一份待确认名单及一个对话交接按钮。连接方式包括本机电脑、已授权手机、网络地址、固件文件、已解包目录，容器和练习靶场仍使用原检查流程。四个大型设备分类按钮及重复名单移除。仅使用本机／手机／固件时不初始化网络环境面板；切换连接方式保留已登记条目，任务运行时禁用切换。

网络目标仍复用原来的地址解析、批量授权、到期与隔离执行逻辑。纯网络选择保留原授权检查能力；本机／手机／固件与网络混合时，网络必须最多16端口且仅含TCP连接、响应头或服务识别，其他范围明确要求单独对话。混合交接经原生确认并注册只读条目、绑定会话，不执行检查；已有映射复用，统一名单按原授权编号去重。模型仍不能自己创建授权、批准工具或指定任意路径。

前端1583通过、2跳过，生产适配器12通过，类型与正式构建通过；设备后端7项通过。实际组件配合明确模拟IPC验证：本机加两个网络地址批量登记，三项都保留勾选；只有一份名单，交接生成三项设备范围草稿，无扫描调用。首轮定位并修复批量回读覆盖末项勾选的竞争。模拟不是实际网络扫描，也不代表真实手机或嵌入式硬件验收。

完整后端回归363通过、27忽略，Mac运行环境检查通过。正式包签名、安装交互和公开资产回读结果在完成后追加。已有1.9.4真实模型工具链证据保留，不冒充本轮重复实测。Windows/Linux安装包不跟随Mac升版。

安装交互：原生1.9.5验证两个主入口、统一添加菜单、本机与回环网络地址保存到同一名单。原生批准后生成含两个登记编号的未发送草稿，未启动模型或扫描；回到名单仍只有两个条目，无映射重复卡片。撤销本机条目、网络授权及映射，删除本轮空草稿，保留原有会话，配置与验收前一致。保存期间误用旧“检查运行中”提示已改为保存／解析／准备草稿的独立状态，并重新回归前端1583项及12项适配器。

最终重新打包安装后核对启动、双入口与空名单；12,978个文件逐个与DMG内一致，严格应用签名及自动更新签名验证通过。DMG为72,651,844字节，SHA-256为`5ea4ee16d9c7254bc7b7639c355b26b9052f993dcb90a8862327f02a029bb7d4`。本机安装位置为/Applications/LocalBrain.app，当前0模型服务。开发签名，未经Apple公证。构建提交a45e4be。

公开发布：v1.9.5上传8份资产后全部重新下载，校验清单7项一致，远端更新包独立验签通过，再设为公开latest。Windows1.9.2、Linux AppImage1.7.2平台清单原样保留，Linux Debian下载保持1.9.2。源码与三语下载说明同步，不调用博客或公众号发布流程。

## Windows / Linux 1.9.5 — 2026-10-19

Built from source `a001efd` on Windows x64 and Ubuntu 22.04 WSL2 x64. Existing Mac 1.9.5 assets and its platform manifest are retained. Native PolyStrata installations, CUDA, model weights and driver versions are unchanged; no implicit third-party engine upgrade.

Frontend: 1583 passed, 2 skipped; production adapters: 12 passed. Windows Rust: 354 passed, 27 ignored. Both platform runtime contracts passed. Windows NSIS installed at D:/LocalBrain; packaged Node 22.23.3, DocFactory files and PolyStrata launcher checked against source. The installed WebView registered the native PolyStrata Q3 model, loaded 8K context, streamed a Chinese reply, completed a DSH countdown task, and stopped/restarted the service with exit cleanup. Tests used an isolated profile; formal user preferences and models were preserved.

Linux Debian installed in Ubuntu 22.04 WSL2; isolated Xvfb startup survived 20 seconds and packaged Node/DSH initialization passed. WSL2 does not replace native Linux desktop, physical-device, or other GPU testing. Existing 1.9.2 real Linux model evidence is retained; this release does not claim a repeated Linux GPU acceptance. No new AppImage; Debian upgrades manually. New personal-device/native confirmation interactions have not been fully exercised on Windows/Linux; physical phones and embedded hardware remain unverified.

Both new installers have independently verified updater signatures (not Windows Authenticode). Earlier Mac acceptance above remains historical evidence for that platform only.

| File | SHA-256 |
| --- | --- |
| LocalBrain_1.9.5_x64-setup.exe | `9a6d77fa1dffe3076e3a171edab4c7f422f4a127233c506f4e4bb1d40eb76d82` |
| LocalBrain_1.9.5_amd64.deb | `882c7800ba8455379bcb1911bc3456dfca8a22612e4e3193cc046f3f50ac9e33` |

Additional checks: 8 targeted Windows Python tests passed (PolyStrata and LTX compatibility). The broader Python run is not green: Linux reported missing Pillow/httpx/Chromium (1 failure, 5 errors, 21 skipped); Windows also exposed POSIX-path/symlink/browser assumptions and was interrupted when H3 dummy-weight fixtures caused real large-file writes. The three generated fixture directories were inspected and removed. No full Python-suite pass is claimed. Private GitHub README CI remains blocked before any steps by account billing/spending limits; local README checks are recorded separately.
