# LocalBrain 1.7.7 Mac 发布验收

日期：2026-10-09。范围仅限 Apple Silicon Mac 安装包及新增模型目录入口。用户决定跳过整模下载和手动推理测试；目录显示不能作为模型已可用的证明。

## 已验证

- Apple M5 Pro、64 GB 统一内存的本机生成、安装并启动 1.7.7；界面显示版本 1.7.7。
- 「发现」搜索 `Swift 1.5` 可见 SC117 条目；Q2_0、IQ2_XS、IQ3_XXS 三档切换后，分别显示约 67.41、69.06、76.74 GB。
- TypeScript 测试 1,456 通过、2 跳过；前端及 Rust 发行构建通过，应用签名校验通过。
- Mac DMG 的 SHA-256 为 `da4c9fbaa9cc4eb55fad3a114eb365e92b98412c5571f6f0d20f3919235f46b9`。

## 未验证与风险

- 未下载新模型完整权重，未验证启动、对话、图片、工具调用或长上下文；不能承诺稳定可用。
- 上游 Q2_0 两片权重加视觉投影约 67.4 GB。旧 Atomic M64 模型在 64 GB Mac 上的表现不能推导到本版；64 GB 设备不建议作为稳定运行环境。
- 96 GB 最低容量提示属于保守估计，并非已实测的性能保证。
- 本次仅升级 Mac；Windows 和 Linux Debian 仍为 1.7.6。Mac 包尚未经过苹果公证。

对应源码与完整记录：[LocalBrain 源码提交及验收文档](https://github.com/HackerChi-Hub/localbrain/blob/e44e88636affb0235e7b4a9bdec610b692c25df2/docs/RELEASE_1.7.7_VERIFICATION.md)。
