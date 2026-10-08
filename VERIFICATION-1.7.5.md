# 1.7.5 发布验收

- 源码提交：`8a8b55c`（包含上一提交 `75ad64a` 的隔离环境网络修复）。工作区未提交的视频 LoRA 文件未纳入。
- Apple Silicon Mac：前端构建通过；TypeScript 测试 1,449 通过、2 跳过；Rust 测试 313 通过、20 忽略。应用版本为 1.7.5，代码签名和 DMG 校验通过；`/Applications/LocalBrain.app` 与构建应用目录逐文件一致，应用进程已成功启动。未进行苹果公证。
- 安全功能实测：在专用本地 Colima 环境中对内置 Juice Shop 镜像做组件漏洞匹配，报告记录严重 10、高危 55、中危 86、低危 24；临时容器与网络已清理。该数据不是网页业务漏洞的可利用性证明。
- Windows、Linux Debian：已于 2026-10-08 从最新主分支本机构建，见下方补包记录。Windows 未做安装后交互验收；Linux 在 WSL 中安装与启动检查通过，未做真实桌面和模型验收。
- 更新器：Mac、Windows 分平台清单与合并清单为 1.7.5；Linux 分平台清单保留有效的 1.7.2，本次升级 Linux 须手动安装 Debian 包。

---

# LocalBrain 1.7.5 Windows / Linux 补包验收

日期：2026-10-08。发布源码为 `904d90dfcaf41c2e555a94aae916fcdd17a08042`，版本 1.7.5；本次后续提交仅更新发行文档。DocFactory 固定为 CI 同一提交 `d152ae9c3e6ed9fe73b0b108202e11586a801240`。使用独立源码副本构建，仅替换 DocFactory 资源路径，并关闭构建时自动签名、改为产物生成后签名，未修改产品功能。

## 本次验证

- Windows：TypeScript 1,449 项通过、2 项跳过、0 失败；前端生产构建、Rust release 编译、NSIS 打包通过。
- Windows 安装包解包通过（12,717 文件），主程序文件版本与产品版本均为 1.7.5；内置 Node 22.23.3 x64 可执行，散列与 runtime-manifest.json 一致，DocFactory 资源包含在包中。
- Linux：Ubuntu 22.04 WSL，锁定依赖编译与 Debian 打包通过；dpkg 版本 1.7.5、架构 amd64，主程序为 x86-64 ELF，包含 DocFactory 与 Linux Node 22.23.3。
- Linux Debian 在 WSL 安装成功；独立 HOME/XDG 配置目录、D-Bus 和 Xvfb 下持续运行 20 秒后由 timeout 结束（退出码 124）。日志有 WSL 门户挂载及 GTK 警告，未据此宣称交互功能验收通过。
- 两份安装包均用现有发行密钥签名，并使用应用内的公开密钥独立验证文件签名、密钥 ID 和可信注释签名。
- 未覆盖：Windows 安装后界面操作、Linux 真实桌面、两平台模型推理与完整工作流。既有 Mac 记录中的 Rust 313/20 不是本次重新执行的结果。

## 安装包 SHA-256

| 文件 | SHA-256 |
| --- | --- |
| LocalBrain_1.7.5_x64-setup.exe | `8b1e9b5d5036bf82ff6c64417c221d5b6a2c22b2332d31c618cd11fc932e56fe` |
| LocalBrain_1.7.5_amd64.deb | `4bb01a404e148e5961c0fa94165d0c470c380cafab84f041d543939f0cfda6e1` |

## 发布边界

AppImage 打包在 `@koromix/koffi-linux-x64/musl_x64/koffi.node` 处失败：`Could not find dependency: libc.musl-x86_64.so.1`。未删除隔离工具或修改运行时代码来绕过；只发布已校验的 Debian 包。Linux 分平台自动更新清单保留现有 1.7.2，不能将 Debian 文件冒充 AppImage。Mac 资产和清单保持原样，合并清单增加 Windows 1.7.5。

三语源码说明与公开下载主页同步版本、下载链接、散列和验收限制。公开主页永久段落、最近五项功能、截图与演示保持原样。
