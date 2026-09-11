---
title: "如何定义 SLO 和错误预算"
summary: "将客户旅程转换为跨云平台的可度量的服务级别指标、目标、错误预算、告警和发布决策。"
document_id: "HTG-24"
category: "操作指南与教程"
article_type: "how-to"
tags:
  - slo
  - reliability
  - error-budget
  - alerting
  - operations
status: "published"
order: 240
version: "1.0"
last_updated: "2026-08-28"
review_status: "machine-validated"
review_cadence: "annual"
decision_status: "active"
owner: "云卓越中心"
audience:
  - 服务负责人
  - 现场可靠性工程师
  - 产品工程师
environment_scope:
  - development
  - test
  - staging
  - production
cloud_scope:
  - Azure
  - AWS
  - GCP
  - OCI
related_document_ids:
  - ORF-01
  - HTG-23
  - ORF-06
---
> **文档类型：** 操作指南
> **规范性术语：** **MUST**、**MUST NOT**、**SHOULD**、**SHOULD NOT** 和 **MAY** 是要求级别。
> **适用范围：** 跨云平台的客户旅程 SLI 和 SLO 定义、错误预算策略、告警、发布决策和服务所有权。
> **例外流程：** 偏离要求需要记录风险评估、补偿控制、指定风险负责人和到期日期。

|控制领域|价值|
|---|---|
|文件编号 | `HTG-24` |
|负责人|云卓越中心 |
|审核周期|至少每年一次以及在重大维护、可靠性或度量变化之后 |
|证据| SLI 查询定义、目标原则、错误预算消耗速率告警、预算报告、发布决策、事件链接和审查记录 |

# 如何定义 SLO 和错误预算

> **决策简述：** 选择以用户为中心的指标，设定可实现的目标，并让测得的错误预算消耗情况指导变更决策。

> **文档类型：** 可靠性实施指南  
> **操作原则：**度量用户体验，设定低于完美的可实现目标，并使用预算消耗量来平衡可靠性和变化。

## 目标

定义指导工程行动的服务级别目标，而不是生成装饰性仪表板。 SLO 结合了服务级别指标、目标、滚动窗口、范围、排除、数据源、所有者以及消耗错误预算时的后果。

## 对用户旅程进行建模

从登录、提交订单、检索文档、部署工作负载或解析 DNS 等关键操作开始。确定入口点、成功结果、最大可接受延迟、依赖性、流量类别和业务影响。资源正常运行时间并不能替代旅程的成功。
```mermaid
flowchart LR
    USER[User journey] --> SLI[Good events / valid events]
    SLI --> SLO[Target over rolling window]
    SLO --> BUDGET[Allowed bad events]
    BUDGET --> BURN[Fast and slow burn alerts]
    BURN --> ACTION[Repair, release control, or investment]
```
## 定义有用的指标

|可靠性维度 | SLI 示例 |
|---|---|
|可用性 |成功的有效请求除以有效请求 |
|延迟|低于旅程阈值的成功请求比例 |
|正确性|有效输出除以评估输出 |
|新鲜度|在承诺的延迟内更新日志记录 |
|持久性|按承诺保留和恢复对象 |
|流水线可靠性|部署在目标持续时间内正确完成 |

定义什么算作有效事件。仅当策略明确并且不隐藏提供商或运维方故障时，才排除综合探针、客户引起的无效请求或维护。

## 设定目标

使用历史性能、客户期望、依赖性限制和工程成本。对于 30 天内 99.9% 可用性的 SLO，理论错误预算约为 43.2 分钟，但基于事件的 SLI 应根据有效事件计算预算，而不是盲目转换为时间。

避免比最弱的关键依赖关系更严格的目标，除非架构掩盖了该依赖关系。当客户承诺不同时，分开层级或旅程。

## 配置错误预算消耗速率告警

使用多个窗口：快速消耗告警可以快速检测严重事件；慢速消耗告警会发现持续的退化。在寻呼之前需要短窗口和长窗口以减少噪声。对于较低的消耗速率，可创建工单，因为它们会威胁到预算但不需要立即中断。

## 错误预算策略

- 剩余 50% 以上：通过标准控制正常交付。
- 20% 到 50% 之间：优先考虑已知的可靠性风险并审查有风险的版本。
- 低于 20%：需要服务所有者明确批准重大风险。
- 预算耗尽：暂停不必要的变更，纠正测量故障，并执行可靠性恢复计划。

安全补丁和紧急风险降低可以在例外情况下进行；记录该决定。预算不是故意造成失败的许可。

## 验证

- [ ] SLI 查询重现已知的良好、缓慢、失败和排除的测试事件。
- [ ] SLO 仪表板标识所有者、窗口、目标、剩余预算和主要消费者。
- [ ] 快速和慢速错误预算消耗速率测试路由至正确的响应路径。
- [ ] 提供商、区域、租户和版本维度暴露局部故障，而没有无限的基数。
- [ ] 发布和事件流程使用记录在案的预算策略。
- [ ] SLO 在架构、流量或客户合同更改后进行审核。

## 相关主题

- [云运营与可靠性模型](../operations-reliability-finops/cloud-operations-and-reliability-model.md)
- [如何构建集中式多云可观测性](how-to-build-centralized-multicloud-observability.md)
- [验证、测试和运营就绪](../operations-reliability-finops/validation-testing-and-operational-readiness.md)

## 相关仓库

- [andyxuan2010/medp-wl-notification](https://github.com/andyxuan2010/medp-wl-notification) — 提供预定的通知模式，可应用于错误预算报告和非寻呼可靠性通知。
