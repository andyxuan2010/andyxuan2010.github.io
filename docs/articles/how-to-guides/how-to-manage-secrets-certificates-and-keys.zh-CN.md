---
title: "如何管理机密、证书和密钥"
summary: "跨多个云集中发布、访问、轮换、监控和恢复应用机密、TLS 证书和加密密钥。"
document_id: "HTG-22"
category: "操作指南与教程"
article_type: "how-to"
tags:
  - secrets
  - certificates
  - encryption
  - key-management
  - multi-cloud
status: "published"
order: 220
version: "1.0"
last_updated: "2026-08-28"
review_status: "machine-validated"
review_cadence: "annual"
decision_status: "active"
owner: "云卓越中心"
audience:
  - 安全工程师
  - 平台工程师
  - 应用工程师
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
  - NIS-08
  - SBP-06
  - HTG-21
---
> **文档类型：** 操作指南
> **规范性术语：** **MUST**、**MUST NOT**、**SHOULD**、**SHOULD NOT** 和 **MAY** 是要求级别。
> **适用范围：** 跨多个云的机密、证书、密钥、颁发、交付、轮换、撤销、监控和恢复。
> **例外流程：** 偏离要求需要记录风险评估、补偿控制、指定风险负责人和到期日期。

|控制领域|价值|
|---|---|
|文件编号 | `HTG-22` |
|负责人|云卓越中心 |
|审核周期|至少每年一次，并且在重大加密、身份或提供商发生变化之后 |
|证据|清单、所有者和到期日、访问策略、轮换测试、证书运行状况、审计日志、备份或恢复日志记录以及事件响应 |

# 如何管理机密、证书和密钥

> **决策简述：** 优先选择工作负载身份，集中不可避免的加密材料，并自动化其范围、轮换、撤销和恢复。

> **文档类型：** 安全和操作指南  
> **主要示例：** 具有托管身份的 Azure Key Vault  
> **操作原则：** 优先考虑身份而非机密；当机密信息不可避免时，使其生命周期自动化、有范围、可监控和可恢复。

## 目标

防止凭据和私钥嵌入源代码、流水线变量、容器镜像、配置文件、聊天或操作员工作站中。建立一个受管理的生命周期，用于创建、存储、使用、轮换、到期、撤销、删除和证据。

## 对材料进行分类

|类型 |示例 |所需处理 |
|---|---|---|
|机密|密码、API 令牌、连接字符串 |随机生成、范围狭窄、轮换、从不记录 |
|证书| TLS 或客户端身份验证证书 |跟踪发布者、SAN、链、续订、部署、撤销 |
|关键| KMS/HSM 加密或签名密钥 |定义算法、保护级别、轮换、使用策略、恢复 |
|恢复材料|break-glass 凭证，根密钥共享 |离线或隔离存储，双重控制，测试和监控使用|

## 参考生命周期
```mermaid
flowchart LR
    REQUEST[Approved request] --> ISSUE[Generate or issue]
    ISSUE --> VAULT[Managed vault or HSM]
    VAULT --> ID[Identity-authorized retrieval]
    ID --> USE[In-memory workload use]
    USE --> ROTATE[Automated rotation]
    ROTATE --> VERIFY[Consumer verification]
    VERIFY --> REVOKE[Disable old version]
    REVOKE --> EVIDENCE[Audit and retention]
```
## 实现控制平面

1. 为每个机密、证书和密钥分配指定所有者和轮换 SLA。
2. 对生产、非生产、租户和监管范围使用单独的 Vault 边界。
3. 根据需要通过私有端点进行连接并限制公共访问。
4. 使用托管身份、IAM 角色、工作负载身份联合或资源主体授权工作负载。
5. 分离读取、写入、轮转、备份、恢复、清除和策略管理职责。
6. 启用软删除、清除保护、版本控制、审计日志、过期告警和不可变证据保留。
7. 通过 SDK、sidecar/driver 或短期代理在运行时交付材料；不要将其复制到部署制品中。
8. 在禁用旧版本之前自动轮换并验证每个消费者。

## 提供商映射

|能力|Azure|AWS | GCP |OCI |
|---|---|---|---|---|
|机密 | Key Vault 的机密 | Secrets Manager 或参数存储 |Secrets Manager|Vault 的机密 |
|托管密钥 | Key Vault / 托管 HSM | KMS / Cloud HSM |Cloud KMS/Cloud HSM | Vault/KMS/专用 HSM 选项 |
|证书 | Key Vault 和托管证书服务 | ACM / Private CA |Certificate Manager / CAS |Certificates / private CA capabilities |
|工作负载访问 |托管身份/联合 | IAM 角色和 STS |工作负载身份/服务账户 |资源或实例主体 |

## 旋转模式

使用重叠版本：发布新版本，更新消费者，证明身份验证或解密成功，然后根据保留策略禁用并稍后销毁旧版本。对于数据库凭证，首选动态或基于身份的访问。对于 TLS，在切换前测试完整链、SNI、吊销行为、客户端信任和回滚。

密钥轮换不会自动重新加密现有数据。记录轮换是否仅更改包装密钥版本、需要后台重新加密或影响必须保持可验证的签名。

## 防止泄漏

- 在提交之前运行机密扫描，并持续扫描历史记录和制品。
- 掩蔽不是保护；恶意代码可以改变或窃取值。
- 切勿将生产机密放入开发人员 `.env` 文件或共享变量组中。
- 阻止操作员列出机密值，除非批准了 break-glass 访问。
- 从日志、跟踪、故障转储和支持包中清除敏感标头和有效负载。

## 验证

- [ ] 工作负载仅检索具有短期身份的所需材料。
- [ ] 网络和 IAM 控制阻止未经授权的 Vault 访问和清除操作。
- [ ] 轮换完成且没有中断，并且已停用的版本不再进行身份验证。
- [ ] 测试过期、访问异常、删除、策略更改和记录失败告警。
- [ ] 恢复和 break-glass 程序在双重控制下工作。
- [ ] 仓库、镜像、流水线制品、状态文件和日志不包含机密值。

## 事件响应
对于可疑的披露，撤销或禁用凭证，轮换每个衍生凭证，隔离受影响的工作负载，保留证据，检查自最早暴露以来的使用情况，通过批准的流程从当前和历史制品中删除价值，并纠正交付路径。未经调查的轮换是不完整的。

## 相关主题

- [机密、证书和密钥管理](../networking-identity-security/nis-secrets-certificates-and-key-management.md)
- [身份、机密和工作负载身份联合标准](../standards-best-practices/identity-secrets-and-workload-federation-standard.md)
- [如何跨云联合工作负载身份](how-to-federate-workload-identity-across-clouds.md)

## 相关仓库

- [andyxuan2010/azure-landingzone](https://github.com/andyxuan2010/azure-landingzone) — 实现应用于此处描述的集中式生命周期的 Key Vault 和私有基础控制。
- [andyxuan2010/enterprise-ai-chatbot](https://github.com/andyxuan2010/enterprise-ai-chatbot) — 演示使用 Key Vault 和 Entra 身份进行受保护服务配置的应用工作负载。
