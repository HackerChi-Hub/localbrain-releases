# DSH 本地模型：已验证范围与待解决问题

更新：2026-10-24（Asia/Shanghai）。此记录区分 LocalBrain 内置对话、DSH 适配器短请求和 DeepSeek Harness 完整桌面代理，不将一种测试的结果外推到另一种。

## 当前状态

| 项目 | 证据与结论 | 状态 |
| --- | --- | --- |
| Qwen3.8-2B-Distill Q4_K_M 文本 | 用户确认在 DSH 可用；本机服务报告 n_ctx=262144、纯文本、支持工具协议字段。未进行完整任务集重测 | 基础文本可用 |
| 262K 上下文 | 服务实际报告的允许上限，与导出的配置一致；未测试填满后的速度、内存、长文质量 | 容量已核对，满窗未验收 |
| PolyStrata Qwen3.6-35B-A3B Q3 接入 | 已修正实际服务模型名、运行引擎与上下文配置；真实 Harness 适配器完成短请求 | 短请求通过 |
| PolyStrata 8K + 完整 DSH 桌面代理 | 用户请求为12728输入 token，超过8192窗口；另一截图显示系统约1.5K、工具约7.4K、消息约2.6K | 未解决 |
| 当前2B模型看图 | 服务明确报告vision=false；当前权重与接入为纯文本 | 不支持，不是开启附件开关即可解决 |
| 视觉模型与DSH图片 | 需支持视觉的权重、匹配投影/视觉后端及正确模态声明；目录存在mmproj不等于已成功启用 | 完整链路待验收 |
| MCP工具返回图片 | 与模型理解图片分开验证，需核对DSH呈现及是否再次送给模型 | 待验收 |
| DSH工具调用与多轮任务 | 短文本回答不证明工具参数、执行、回执与多轮收尾全部可用 | 完整任务集待验收 |
| 顶部一键恢复接入 | Windows本机已安装；无模型时入口可用，编排夹具验证单客户端失败不会阻断其它项，未对正式配置执行恢复 | 本地界面验收通过 |

## 待解决问题与下一步验收

1. **DSH小窗口工具预算**：8K下系统提示与工具定义已超窗。应按任务减少工具定义，并为回答保留空间；仅压缩聊天历史、把max_tokens降到1或打开fit_max_tokens不能解决输入本身超限。需用完整桌面请求重新测试新会话问候、文件任务、工具往返和长工具回执，并记录实际输入/输出。
2. **窗口扩大需独立实测**：可测试16K或更大，但须测当前8GB显存/32GB内存机器的稳定性、峰值与延迟，不自动更改用户运行参数，不承诺扩窗不增加成本。
3. **图片能力分开验收**：分别验证图片发送、视觉模型实际理解、MCP图片显示与后续消费。当前纯文本2B模型不列为视觉适配失败，也不作看图支持承诺。
4. **说明文案需收紧**：兼容开关按具体后端说明；不能把MLX的约束一概套到Windows GGUF，也不能暗示声明contextWindow就能保证客户端永不超窗。
5. **平台边界**：Windows与Linux独立构建和维护特殊运行环境；Linux WSL2/Xvfb包检查、启动与安装不代表裸机GPU推理验收。应用更新不自动升级引擎、CUDA、驱动或模型。

上下文占用不是显存占用；上述错误本身不能证明GPU或系统内存不足。旧版内置对话的压缩/工具测试保留其原有证据，不作为完整DSH桌面代理已修复的依据。

## English scope

Qwen3.8-2B-Distill Q4_K_M basic DSH text usage is user-confirmed; the live service reports a 262144-token context limit and no vision. Full-window performance, visual-model integration, MCP image rendering and full tool/multi-turn tasks remain unverified. PolyStrata short adapter requests passed, but the full Harness desktop envelope exceeds its actual 8192-token window. Context occupancy is not GPU memory occupancy. Reduce fixed prompt/tool overhead or separately test a larger window; do not claim history compaction or output clamping alone fixes this.
