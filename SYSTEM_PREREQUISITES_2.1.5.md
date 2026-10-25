# 2.1.5 新用户依赖准备

状态：2026-10-25，Mac 候选已打包安装，重新绑定后原生状态与实际截图同步，安装版针对性交互验收通过；见[安装记录](VERIFICATION-2.1.5-MAC.md)。用户已明确批准本次Mac 2.1.5例外发布；GitHub说明检查因账户限制未启动，本地通过不冒称远端通过，Windows/Linux保留2.1.3。全新电脑实装与现有环境复用分开记录。

## 用户流程

设置 → 运行环境与诊断 → 一键安装缺少组件。确认清单包含组件及缺少的前置依赖；队列按依赖顺序执行，一个失败后停止后续，修复后可重试。系统依赖准备完成后重新读库存，跳过恢复在线后发现的已有镜像与数据。下载暂停和缓存机制沿用2.1.4；系统安装器、pip和容器步骤仍在步骤边界暂停，不强行终止外部安装器。

- Mac：优先保留已在线的专用连接。没有专用Colima配置且已安装Docker Desktop时复用其本地套接字；已有专用Colima配置优先保留。缺少包管理器时使用官方Homebrew 7.0.10安装包，固定SHA-256 `ae13b8b0ac910730d3e982a9e7518288d17fd0ad272e42f412027e8ab4555575`，执行系统签名检查后打开安装器。Apple命令行开发工具由系统安装窗口确认。缺少Docker/Colima/CMake时仅提交缺少项，关闭本次Homebrew自动更新和已安装项升级。启动旧Colima配置不覆盖任何资源参数；新专用实例用2核、2GiB、40GiB、VZ、无宿主目录挂载，不切默认连接。
- Windows：缺少WinGet时打开Microsoft Store的App Installer入口，等待安装；缺少Docker Desktop时使用官方WinGet源的交互安装，保留许可、系统管理员和重启提示。检查实际Linux引擎，Windows容器模式不冒充就绪，不自动切换或关闭已有容器。
- Linux：优先保留专用的合法本地连接，支持本用户rootless套接字、Docker Desktop套接字和系统Docker套接字。Debian/Ubuntu使用发行版签名软件源，经pkexec授权安装Docker或构建工具，通过systemd启动服务。已有引擎不重装；不自动增加docker用户组、不chmod套接字、不执行下载的shell安装器。访问权限不足或发行版、服务管理器不支持时给出明确原因和官方入口，不标记完成。

系统安装管理器、构建工具、共享容器服务不提供卸载。模型引擎、Python、FFmpeg及工具仍由原受管机制安装。sd-cpp依赖图增加构建工具；Torch使用同一提交的Diffusers源码归档，避免安装系统Git。模型权重、用户配置和第三方虚拟机不进入维护计划。安装不会自动开放安全检查执行权限，隔离边界仍需原来的独立验证。

## 安全与验收边界

固定命令参数由程序生成，不接受模型提供的安装命令。只复用明确的本地Unix套接字或Windows Linux引擎命名管道；拒绝TCP、SSH和其他用户的套接字，不覆盖已有异常专用连接。Docker子进程去除宿主DOCKER_HOST、DOCKER_CONTEXT和TLS环境覆盖，不调用context use。

回归覆盖全新依赖顺序、已安装离线、已有服务复用、失败停止、不可卸载、非法连接与旧Colima参数保护。真实Mac仅在已有环境上验证幂等复用，不删除用户环境模拟新机；无Homebrew新Mac、Windows和Linux全新安装尚待对应系统实装。许可、管理员授权、硬件虚拟化、WSL和重启不能由本应用静默代答。

参考：[Homebrew官方安装器](https://github.com/Homebrew/install/blob/main/README.md)、[Docker Desktop Mac安装](https://docs.docker.com/desktop/setup/install/mac-install/)、[Docker Linux安装](https://docs.docker.com/engine/install/ubuntu/)、[无root服务](https://docs.docker.com/engine/security/rootless/)。
