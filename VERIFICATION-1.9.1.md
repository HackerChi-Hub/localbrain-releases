# LocalBrain 1.9.1 Mac 发行验收

日期：2026-10-16（Asia/Shanghai）。10 月 16 日更新 Apple Silicon Mac；10 月 17 日补齐 Windows 与 Linux Debian，详见下方补包记录。

## 已验证

- 安装版自动增量语义摘要、实际点击「立即压缩」、重复点击不重复推理、重启恢复续聊。
- 自动与手动摘要分别持久化，原消息与归档逐项一致。工具恢复实践实际派发一次，没有重放已完成操作。
- 最终安装版样例自动整理约2.97秒、手动约2.48秒；不同词元口径不能作为整体提速承诺。摘要有损，不能保证所有事实均保留。
- 前端1569项通过、2项既有跳过；宿主/中文扩展/适配器46项、归档1项、类型检查与构建通过。
- DMG完整性、应用严格临时签名、安装版与包内主程序一致、独立更新签名已核验。应用尚未经过Apple公证。
- 测试会话、应用内验收资料和临时应用副本已清理；独立验收证据保留。

## 版本及边界

- Mac：1.9.1，安装包 `LocalBrain_1.9.1_aarch64.dmg`。
- Windows 与 Linux Debian 已补齐 1.9.1；Linux 自动更新 AppImage 仍为 1.7.2。
- 本包包含技能与记忆管理、按需加载和完全关闭。模型可以检索/读取；不能自行创建、修改或启用内部知识。
- 本轮没有重跑所有媒体、模型、参数组合。未知未来Splash接口不承诺兼容。
- GitHub文档检查受账户账单/额度限制未启动；本地等价规则通过。这不属于远端CI通过。

DMG SHA-256：`74725034276f594c5d01556c35a6e12f10c4a636a1b8c9bdea355dd23466d148`

详细源码与验收记录：[上下文整理](https://github.com/HackerChi-Hub/localbrain/blob/main/docs/CONTEXT_COMPACTION.md)。资产哈希见本目录 `SHA256SUMS-1.9.1.txt`。

---

# LocalBrain 1.9.1 Windows / Linux 补包验收

日期：2026-10-17（Asia/Shanghai）。构建源码 `76b93c2c31991877528e3ad23296143e8b14f96d`，DocFactory 固定为 `e51c7670be3a1e816f8df61adab61beda3aebf97`，与当前 CI 配置相同。两端均使用 `VITE_DSH_NATIVE_ENGINE=1` 与生产调试导出关闭配置。

- 独立源码副本构建；仅重定向 DocFactory 打包路径并关闭自动签名，完成后本机签名。后续源码提交只涉及验收文档及中文摘要测试的 Windows ESM 文件 URL 兼容，不改变包内产品代码。
- Windows 前端回归：1569 通过、2 跳过；适配器 12、宿主 33、中文摘要扩展 1 项通过。没有将 Mac 的真实模型、手动点击与摘要时延迁移为 Windows/Linux 验收结果。
- Windows 原文归档回归 1 项通过，覆盖原文保留、去重及路径越界拒绝；测试使用临时目录并完成清理。两平台包内 Node + DSH 宿主初始化与关闭检查通过，此检查不发起模型推理。
- Windows / Linux 生产构建与版本校验通过。Windows NSIS 解包、主程序文件版本 1.9.1、内置 Node 22.23.3 与固定 DocFactory 资源散列通过；Linux Debian 版本 1.9.1、架构 amd64、x86-64 ELF 与资源校验通过。
- Linux 在 Ubuntu 22.04 WSL 安装成功，独立临时 HOME/XDG、D-Bus 与 Xvfb 中持续运行 20 秒，由 timeout 结束；日志保留，临时资料目录自动清理。日志中的 WSL/GTK 警告不计为界面交互验收通过。
- 两份安装包签名以应用公开密钥独立验证文件签名、密钥 ID 与可信注释；发布后重新下载并核对散列、签名及更新清单。
- 未覆盖：Windows 安装后界面、Linux 真实桌面、两平台模型推理、自动/手动上下文摘要、完整媒体与 Docker 安装流程。Linux 保持预览支持。

| 文件 | SHA-256 |
| --- | --- |
| LocalBrain_1.9.1_x64-setup.exe | `a14a76342dc6a04b2c4a3edc1e92ca85dd52963789184c5933cdfad4f22cba24` |
| LocalBrain_1.9.1_amd64.deb | `234a9005d0c1a18ebb0516924340bfaf618addba8cafc99179ac601cd5d566ac` |

Linux 沿用已验证的 Debian 打包格式；现有 AppImage musl 原生依赖兼容问题未修改，本次不发布 AppImage。其分平台自动更新保持有效的 1.7.2，升级请手动安装 Debian 包。Windows 与 Mac 分平台清单均为 1.9.1，合并清单保留 Mac 并增加 Windows。原 Mac 安装包、更新归档与历史发行不变。

三语下载页、源码说明、真实下载链接与校验值同步。近期功能仍为已复核的 1.9.1 五项，未新增虚构功能；永久介绍、演示与截图保持完整。远端检查状态单独回读，本地测试不冒充云端 CI。
