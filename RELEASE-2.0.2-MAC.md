# 方寸智匣 2.0.2 · Apple Silicon Mac

聊天参数新增按模型和本次思考模式联动的采样推荐，保留手动调整，支持恢复自动。底栏显示精确温度和来源，0.65不再显示成0.7。

- 精确登记模型采用核实的官方模式建议；其他模型读取自己的权重配置，缺少依据时标明经验默认。Swift和去审查版不套用普通版参数。
- Sushi/Splash补读生成配置；Sushi未解析的字段明确不发送，其他后端按其字段名称适配。只影响方寸智匣自己的请求，不改服务端启动默认或外部客户端。
- 前端1596通过、2跳过，适配器13通过、宿主／压缩47通过，Rust369通过／28忽略，Python41个文件通过。
- 真实Sushi模型完成四种采样短答与工具请求；最终安装包内宿主完成一次工具调用和两请求往返。已在本机安装，安装目录与构建12,995个文件哈希一致，原配置和模型保留。

生产参数组件交互已验证；Mac锁定阻止安装版参数面板的原生点选，该项待补核。GitHub账户付款／支出额度限制使远端说明检查作业未启动，本地同项检查通过，不冒充远端通过。

本次仅发布Mac 2.0.2；Windows保留2.0.1、Linux Debian保留1.9.5，AppImage更新保留1.7.2。其他平台分平台清单逐字节保留，历史发行保留。没有下载新模型或升级Sushi/Splash运行环境。

DMG SHA-256：`60089a54af5a3dbbd5b4e7850214977b33a31e58d10fb225c4329ddbb5c91c66`。严格代码签名及独立更新签名通过，尚未Apple公证。

[完整验收和边界](https://github.com/HackerChi-Hub/localbrain-releases/blob/main/VERIFICATION-2.0.2-MAC.md) · [采样规则](https://github.com/HackerChi-Hub/localbrain-releases/blob/main/SAMPLING_RECOMMENDATIONS.md)
