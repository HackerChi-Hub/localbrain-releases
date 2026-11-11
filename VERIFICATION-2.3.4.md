# 方寸智匣 2.3.4 验收记录

- Mac Apple Silicon 实机安装。15,658 项安装条目、文件、权限和链接核对一致。已验证应用临时签名、更新包签名和磁盘镜像。DMG 未经 Apple 公证。
- Mac 的 H3-Image 本地实测覆盖 2K 生图、单图编辑、原生 4096×4096、双参考图组合及开启扩写后的中文生图和改图。Windows 和 Linux 安装包的验收范围为构建、安装或解包启动以及控制服务就绪。
- Windows x64 在 GitHub Actions 的 Windows Server 2022 环境运行 NSIS 安装器，检查安装版本、应用窗口和控制服务。更新签名用于应用更新校验。
- Linux x64 在 GitHub Actions 的 Ubuntu 22.04 环境安装 Debian 包，并在虚拟显示中启动。AppImage 以解包运行方式验收。两项均回读控制服务健康状态。
- Mac 推理功能需要 Apple Silicon 与 macOS 26 或更新版本。参考图数量上限是接口能力，本轮最多实际使用两张。双图组合的指定位置有偏差。

Mac 已验收构建使用提交 `647328a6fc05ca20117de2858db3af82ccc4ba10`。Windows 与 Linux 构建使用提交 `c9eda35b63a3f6e19011d7ac4fd23515e2d1ddf6`。两者的应用源码和打包配置一致。

[Windows 构建及安装记录](https://github.com/HackerChi-Hub/localbrain/actions/runs/42952248281) · [Linux 构建及安装记录](https://github.com/HackerChi-Hub/localbrain/actions/runs/42952248286) · [说明文档同步检查](https://github.com/HackerChi-Hub/localbrain/actions/runs/42952239220)
