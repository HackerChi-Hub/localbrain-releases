# Windows / Linux 2.1.1 验收

2026-10-22，Asia/Shanghai。运行源码c126e97；独立构建Windows NSIS、Linux Debian及AppImage，不混用平台运行环境，第三方特殊引擎和模型未升级。Mac2.1.1资产及独立更新清单保持不变。

本版继承可信用户原文保护、会话草稿隔离和整轮时长边界。Windows包内Node22.23.3、DSH源码及DocFactory资源核对通过；真实Qwen3.6-35B-A3B Q3完成原生宿主问候、一次文件写入、压缩/回执检查点与续答、生产聊天输入。Windows已安装，配置哈希未变。Linux两种包核对架构、包类型、Node官方哈希、DSH及文档资源，包内宿主初始化退出、WSL2 Ubuntu22.04+Xvfb 20秒启动通过，Debian已安装。

回归：TypeScript1607通过/2跳过，适配器14通过，Windows Rust395通过/29忽略，Windows与Linux DSH各53通过。完整Windows Python44文件通过：42个unittest文件364条用例（含平台跳过），另2个脚本通过。未把Mac或上次成绩作为本轮成绩。

边界：本轮未进行Linux裸机/GPU推理、两平台生产Docker隔离/网关/远程SSH闭环或真实HTB验收；相应能力仍需本平台授权和隔离验证。HTB延期，不能宣称已完成。未重跑原12题能力评测；摘要仍可能有损，原文过大时仍可能触及窗口边界。签名为应用更新签名，非Windows Authenticode；签名及清单校验不等于完整自动更新安装实测。

原生压力验收首轮出现一次提供方流中断（Stream ended without finish_reason）并停止；独立复测正常完成。第二轮验收脚本误将拒收无收益摘要当失败，现仅允许这类可恢复候选拒收，仍要求正常结束、正确PIN及恰好两次读取；最终整轮通过，并核对用户原文保留块实际存在。首轮流异常未定位根因，不保证本地模型服务不会偶发中断，失败记录完整保留。
