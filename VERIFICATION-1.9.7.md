# Windows 1.9.7：首次安装修复 / First-install repair

2026-10-19，Asia/Shanghai。仅更新Windows，Mac/Linux Debian保持1.9.5，Linux AppImage更新保持1.7.2。

用户实际日志有两类失败：进度文件原子替换时WinError5，以及venv创建时ensurepip退出1。使用同一PBS Python3.12.13和全新中文目录复现：Rust canonicalize传来的Windows verbatim路径在pip扫描路径的 `/.` 项时触发WinError123。此前完整安装验收复用了已存在venv，未覆盖真正首次创建，不能以旧记录证明此路径正常。

安装器为Python运行环境使用普通Windows路径；首次创建拆分为不带pip的venv和单独离线ensurepip，保留完整子进程输出。已有python.exe但缺少pip的半成品也会修复，不因文件存在就跳过bootstrap。启动子进程清除PYTHONHOME/PYTHONPATH，避免外部解释器路径覆盖独立环境。状态写入使用唯一临时文件，并在Windows拒绝删除共享时限次重试；永久错误明确归为状态错误，不误报下载网络失败。

11项安装器测试通过，包括真实Windows中文verbatim路径中新建venv并运行pip、无pip半成品修复、真实Win32读取句柄不允许DELETE共享后释放并恢复状态写入、永久错误有界及临时文件清理；原有HTTP断点、忽略Range、哈希拒绝、取消和解压边界继续通过。未声称重跑整套前端/Rust（本轮修改为Python安装资源与版本）。

旧失败目录和日志保留；已使用修复后的独立安装任务继续用户选中的正式目录，不删除权重、断点或原有目录。最终NSIS包原生IPC在没有.venv的独立中文目录成功创建Python、运行pip25.0.1并安装固定依赖；随后主动取消，确认取消任务终止。该夹具复用已校验源码/运行包缓存，未下载第二套完整模型。正式用户目录使用同一修复继续，已越过Python和依赖阶段，正在下载模型。全量模型下载和本版推理仍待完成；不将1.9.6推理记录冒充1.9.7新验收。私有GitHub CI受账户付款/支出限制，云端状态与本地结果分别报告。

最终安装包39,283,948字节，SHA-256 `ca34dbb98d3ba0726e60bee978e1a28489af9297b233d30094807e01406f419e`；应用代码提交 `77286b39a726f7829bf45ee59b5df2358c344349`。最终包解压程序SHA-256 `20ea6871f28552d9eb028573ad0de898931dffcac48db5bd17b8324364502f9c`，本机D:/LocalBrain安装版本1.9.7及关键资源一致。包内Node22.23.3、51个DocFactory文件和PolyStrata脚本与构建来源一致。独立更新签名验证通过，非Windows Authenticode。
