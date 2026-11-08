# Windows / Linux 2.3.2 验收与限制

2026-11-06。源码提交 `b7eb0ebf126f0b86aae6a2fbfe39bf92156ae3d2`。

## 构建

| 平台 | 工作流 | 产物 |
|---|---|---|
| Windows x64 | `windows-package.yml`（GitHub Actions，windows-2022） | `LocalBrain_2.3.2_x64-setup.exe` |
| Linux amd64 | `linux-package.yml`（GitHub Actions，ubuntu-22.04） | `LocalBrain_2.3.2_amd64.deb`、`LocalBrain_2.3.2_amd64.AppImage` |

两个工作流均构建成功；Windows 构建前修复了两处跨平台编码问题（`prepare-plugins.py` 按 UTF-8 读 JSON、控制台按 UTF-8 输出），提交 `f19e1a7`、`b7eb0eb`。

## 签名

三个安装包的 Tauri 更新器签名由本机私钥（指纹 `36357F5B08EDA24`）对 CI 产物生成，`.sig` 与安装包同批上传。更新器签名不等于 Windows Authenticode 代码签名。

## 未验证

- **没有在 Windows 或 Linux 上安装/运行**：只完成在线构建、签名与哈希核对；
- 未做 Windows SmartScreen / Linux 桌面环境启动检查；
- 功能验收在 macOS 2.3.2 上完成（安装、固件模拟、nuclei 命中与 PoC 复现）。

## 校验

SHA-256 见 `SHA256SUMS-2.3.2-WIN-LINUX.txt` 与 `BUILD-2.3.2-WIN-LINUX.json`。
