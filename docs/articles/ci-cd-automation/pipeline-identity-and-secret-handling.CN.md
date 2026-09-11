---
title: "流水线身份和机密处理"
summary: "定义最低权限流水线身份、工作负载身份联合、机密存储、凭证轮换和事件响应要求。"
document_id: "CICD-05"
category: "CI/CD 与自动化"
article_type: "guide"
tags:
  - cloud
  - engineering
  - workload-identity
  - secrets-management
  - devsecops
status: "published"
order: 50
version: "1.0"
last_updated: "2026-08-28"
review_status: "machine-validated"
review_cadence: "annual"
decision_status: "active"
owner: "云卓越中心"
audience:
  - 安全架构师
  - 平台工程师
  - DevOps 工程师
  - 身份工程师
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
  - CICD-06
  - CICD-02
  - CICD-03
  - CICD-14
---
> **文档类型：** CI/CD & 自动化实施指南
> **规范性术语：** **MUST**、**MUST NOT**、**SHOULD**、**SHOULD NOT** 和 **MAY** 是要求级别。
> **适用范围：** CI/CD 身份、联合云访问、机密存储和注入、签名、来源、轮换和事件响应。
> **例外流程：** 偏离要求需要记录风险评估、补偿控制、指定风险负责人和到期日期。

|控制领域|价值|
|---|---|
|文件编号 | `CICD-05` |
|负责人|云卓越中心 |
|审核周期|至少每年一次，并且在重大平台、提供商、安全性或运营模式发生变化之后 |
|证据|信任策略、令牌声明、访问审查、机密清单和轮换、签名证明和事件测试 |

# 流水线身份和机密处理

> **简要决定：** 尽可能消除常设流水线机密，限制每个已发布的身份，并使令牌使用可监控和可逆。

## 概述

流水线凭证是高价值的攻击目标，因为它们将源代码连接到生产系统。正确的目标不是“安全地存储机密”。它是为了尽可能消除长期机密，限制每一个颁发的凭证，并使滥用行为可监控和可逆转。

成熟的设计具有以下特点：

- CI/CD 平台标识。
- 仓库或项目标识。
- 工作流程、作业或流水线标识。
- 目标环境部署标识。
- 运行时工作负载标识。
- 人类的 break-glass 身份。

将这些内容合并到一个共享服务账户中会破坏归因并扩大传播范围。

## 目标和非目标

### 目标

- 更喜欢短期联合凭证。
- 将信任绑定到仓库、分支、环境、工作流程和受众声明。
- 将只读计划标识与可写应用标识分开。
- 防止不受信任的代码访问受保护的凭据。
- 将不可避免的机密存储在受管理的机密系统中。
- 检测、撤销凭证暴露并从中恢复。

### 非目标

- 依靠日志屏蔽作为主要安全控制。
- 跨环境或团队共享一份凭证。
- 为流水线所有者提供不受限制的云管理。
- 将仓库隐私视为最低权限的替代品。

## 参考架构
```mermaid
flowchart LR
    A[Repository event] --> B[CI/CD job]
    B --> C[Platform-issued OIDC token]
    C --> D[Cloud trust policy]
    D --> E[Short-lived deployment credential]
    E --> F[Environment-scoped role]
    F --> G[Target resources]

    H[Managed secret store] --> I[Exceptional secrets]
    I --> B

    J[Audit logs] <-- C
    J <-- E
    J <-- G
```
云信任策略是决定性的控制。仅仅启用 OIDC 并不会产生最低权限。

## 身份层次结构

使用层次结构，例如：

![CI/CD 身份层次结构](../../assets/ci-identity-hierarchy.svg)

生产角色只能从生产部署作业中担任，而不是从仓库中的每个作业中担任。

## 提供商联合

### Azure

将 Microsoft Entra 工作负载身份联合用于 Azure DevOps 或 GitHub Actions。配置具有精确匹配的颁发者、受众和主题的联合凭据。仅向支持服务主体或托管标识分配目标范围所需的 Azure RBAC 角色。

当资源组或资源范围的角色足够时，避免订阅范围的 `Owner` 或 `Contributor`。将部署资源的权限与授予角色的权限分开。

### AWS

将 CI/CD 平台配置为 IAM OIDC 提供商，并仅在严格条件下允许 `sts:AssumeRoleWithWebIdentity`。限制：

- 观众。
- 仓库和组织声明。
- 分支、标签或环境。
- 由声明支持的工作流程身份。
- 会话持续时间。
- IAM 权限和资源范围。

使用不同的角色进行计划、部署和生产。在组织需要深度防御的地方使用权限边界或服务控制策略。

### GCP

使用工作负载身份联合。将外部声明映射到属性并强制执行属性条件。仅允许针对预期的外部主体集进行服务账户模拟。

避免包含每个仓库或分支的广泛 `principalSet` 映射。服务账户密钥是长期持有凭证，一旦联合运行就应删除。

### OCI

当执行发生在 OCI 内部时，首选 OCI 原生身份：

- 实例主体。
- 资源主体。
- 支持的 OCI 服务和 Kubernetes 模式的工作负载身份。
- 用于 Terraform 执行的 OCI Resource Manager。

对于外部 CI/CD，评估 OCI 支持的外部令牌交换或身份传播信任。如果联合不可用或操作不成熟，请使用专用的 API 签名主体以及范围狭窄的 IAM 策略、隔离的密钥材料、轮换和监控。

## 信任策略设计

稳健的信任策略可以回答五个问题：

1. 令牌是谁发布的？
2. 令牌的目标受众是什么？
3. 哪个仓库、项目或组织发起了该作业？
4. 允许哪些分支、标签、环境或工作流程？
5. 可以发出什么角色和会话持续时间？

概念规则示例：
```text
allow token only when:
  issuer == approved CI platform
  audience == cloud token service
  repository == platform/infrastructure
  environment == production
  ref == protected main branch
```
不要使用通配符主题来简化初始部署，然后永久保留它们。通配符是授权决策，而不是实现细节。

## 规划和应用身份分离

Terraform 和基础设施流水线应使用不同的标识：

|身份 |权限 |
|---|---|
|验证 |无法访问云 |
|计划|读取目标资源和状态；有限的数据源访问|
|应用 |在一个环境中创建/更新批准的资源 |
|状态管理|仅限 break-glass；后端恢复操作|
|角色分配|单独的特权工作流程或人工批准|

一些 Terraform 提供商无法生成具有严格只读权限的完整计划。记录所需的确切写入权限并隔离它们。不要默认为完全管理访问权限。

## 机密分类

在决定存储流水线值之前对它们进行分类。

|班级 |示例 |处理|
|---|---|---|
|公共配置|区域、非敏感资源名称|仓库或环境变量 |
|内部配置|租户 ID、账户 ID、内部端点 |受限变量；不要假设保密|
|凭证 |密码、API 令牌、私钥 |管理机密存储；寿命短|
|密码学根 |签名密钥、CA 密钥、主解密密钥 |硬件支持或专门的密钥管理 |
|恢复机密|break-glass 令牌，状态恢复凭证 |离线或高度受限的 Vault 流程 |

租户、订阅、项目和账户标识符通常不是身份验证器，但它们在操作上可能仍然敏感。不要滥用机密存储来弥补不良的配置管理。

## 机密存储层次结构

首选订单：

1. 众所周知：工作负载身份联合。
2. 环境本地管理身份。
3. 使用动态或短期凭证的托管机密存储。
4. 链接到托管机密源的 CI/CD 环境机密。
5. 静态仓库或项目机密作为临时例外。
6. 明文文件或流水线变量：禁止。

云机密系统包括 Azure Key Vault、AWS Secrets Manager 或 Systems Manager Parameter Store、Google Secret Manager 和 OCI Vault。

## 机密注入

仅将机密注入到需要它们的进程中，并且仅在所需的持续时间内注入。

优选机制：

- 环境变量的范围仅限于一个步骤。
- 创建具有严格权限的内存文件，并立即删除。
- 工具支持的过程替换或标准输入。
- 按需获取令牌的 Cloud SDK 凭证提供程序。

避免：

- 进程列表中可见的命令行参数。
- 将机密写入仓库工作区。
- 在 Docker 层中保留凭据。
- 导出整个作业的所有机密。
- 包括存储为制品的 Terraform 变量文件中的机密。

## 屏蔽限制

日志屏蔽是最后一行减少控制，而不是保密强制。

在以下情况下，屏蔽可能会失败：

- 机密被转换、编码、分割或部分打印。
- 结构化数据仅包含注册机密的一部分。
- 恶意进程通过网络窃取价值。
- 调试跟踪打印环境状态。
- 机密被写入制品、缓存、测试报告或故障转储。

禁用围绕凭证操作的 shell 跟踪，并且切勿在机密承载步骤中使用 `set -x`。

## Git 凭证和 `extraheader`

CI 系统通常通过临时标头或帮助程序配置来验证 Git。将这些值视为凭据。

控制：

- 默认情况下禁用结账凭证持久性。
- 在需要时将特定于 URL 的 `http.<url>.extraheader` 用于单个命令。
- 从本地和全局 Git 配置中删除标头。
- 不要缓存 `.git/config` 或主目录 Git 配置。
- 不要跨信任级别重复使用工作区。
- 使用专用机器人身份进行仓库写入。
- 将仓库令牌范围限定为单个仓库和操作。

对于 Azure Pipelines，`persistCredentials: true` 会在签出后故意将 OAuth 令牌保留在 Git 配置中。仅当后续 Git 命令需要时才启用它，并在自托管代理上显式清除它。

## 按事件类型进行机密访问

|活动 |机密姿势|
|---|---|
|从 fork 拉取请求 |没有受保护的机密或特权自托管运行器 |
|从同一仓库拉取请求 |最多只读身份；在经过审查之前仍将代码视为不可信 |
|推送到受保护的分支 |受控的低层环境身份|
|受保护的环境部署|检查后环境范围内的短期身份 |
|预定工作 |独立的身份；限制仓库和工作流程声明|
|人工调度 |单独使用还不够；仍然需要环境和分支控制|

维护人员单击“运行工作流程”并不会使未经审查的代码变得安全。

## 轮换和生命周期

每个凭证例外都需要：

- 负责人。
- 目的。
- 范围。
- 创建日期。
- 截止日期。
- 旋转方法。
- 撤销方法。
- 最后使用遥测。
- 更换计划。

对未使用、永不过期或存在于清单之外的机密进行自动轮换和告警。

## 签名和来源证明

与普通部署凭证相比，签名密钥值得更强的控制。当生态系统支持时，首选基于工作负载身份的无密钥签名。否则：

- 使用 KMS 或 HSM 支持的密钥。
- 将签名权限与制品发布分开。
- 日志记录身份、制品摘要和构建元数据。
- 在部署或准入时验证签名。

签名的制品并不自动安全；它证明谁或什么签署了确切的字节。签名身份和构建过程必须值得信赖。

## 事件响应

如果流水线凭证可能被暴露：

1. 停止受影响的工作流程并隔离自托管运行器。
2. 必要时撤销令牌、密钥、会话和联合信任。
3. 轮换凭证可以访问的下游机密。
4. 保留日志、制品、运行器磁盘和审计日志记录。
5. 确定确切的范围和时间窗口。
6. 检查云控制平面操作和仓库更改。
7. 从可信镜像重建运行器。
8. 使用更窄的权限和经过测试的联合来恢复访问。
9. 记录根本原因和控制失败。
删除日志行不是事件响应。假设复制的凭据已被泄露，除非另有证明。

## 验证

- 扫描仓库和流水线定义以查找机密。
- 阻止包含已知凭证模式的提交。
- 用负面案例测试信任策略。
- 验证分叉的拉取请求无法获取令牌。
- 审计角色假设和服务账户模拟。
- 对异常区域、资源、时间或仓库发出告警。
- 检查未使用的权限。
- 验证机密不会出现在制品或缓存中。

## 令牌生命周期、受众和会话绑定

只有当发布范围狭窄时，短期凭证才会更安全。定义：

- 最大令牌和云会话生命周期。
- 确切的受众。
- 允许的仓库、项目、分支、标签、工作流程和环境声明。
- 会话标签或属性是否记录源运行。
- 最大并发会话数。
- 撤销或信任禁用程序。
- 时钟偏差容限和时间同步监控。

不要仅仅因为流水线可能排队或等待批准而请求长时间的云会话。在受保护的检查完成并尽可能接近特权操作后颁发凭证。

## 凭证代理隔离

当中央代理将 CI 身份交换为云凭证时，请将其视为关键的安全服务。

代理应该：

- 验证发布者、受众、签名、新鲜度和声明。
- 将声明映射到固定的允许列表角色。
- 拒绝调用者提供的任意角色名称。
- 记录源运行和发出的会话，而不存储原始令牌。
- 应用速率、寿命和环境限制。
- 生产和非生产信任分开。
- 支持快速禁用和审计导出。

接受仓库声明和用户提供的目标角色的代理通过不同的机制重新创建广泛的静态凭据。

## 权限审核与缩减

使用实际部署活动运行定期权限分析：

1. 盘点每个流水线身份和信任关系。
2. 将授予的权限与观测到的操作进行比较。
3. 确定通配符操作和广泛的资源范围。
4. 分离控制平面、数据平面、角色分配和机密读取权限。
5. 首先删除较低环境中未使用的访问。
6. 测试完整的部署和恢复路径。
7. 记录合理的剩余权限。

不要仅仅因为某个权限在短时间内未使用而自动删除该权限；恢复和不频繁的生命周期操作可能需要它。与所有者和操作手册进行验证。

## 零机密设计

用于获取所有其他凭据的第一个凭据是“机密零”。首选平台颁发的、签名的工作负载身份令牌或环境本地托管身份。如果引导信息是不可避免的，请将其与仓库控制的代码隔离，将其限制为令牌交换，轮换它并监视每次使用。

任何流水线都不应仅仅为了检索一个部署机密而需要通用 Vault 管理员凭据。

## 操作清单

- [ ] 联合是默认身份验证方法。
- [ ] 信任策略限制仓库、分支、工作流程和环境。
- [ ] 计划和应用使用单独的身份。
- [ ] 生产标识是环境范围内的。
- [ ] 拉取请求无法访问生产凭据。
- [ ] 静态机密具有所有者和到期日期。
- [ ] 机密值仅注入到必需的步骤中。
- [ ] 围绕机密禁用 Shell 跟踪。
- [ ] Git 凭证和 `extraheader` 值已清除。
- [ ] 签名密钥使用硬件支持或无密钥控制。
- [ ] 审计日志和撤销程序经过测试。

## 相关主题

- [共享运行器安全与清理规范](shared-runner-security-and-hygiene.md)
- [使用 Azure DevOps 部署 Terraform](deploying-terraform-with-azure-devops.md)
- [使用 GitHub Actions 部署 Terraform](deploying-terraform-with-github-actions.md)
- [GitOps 中的配置和机密管理](configuration-and-secret-management-in-gitops.md)

## 参考文档

- [GitHub：OpenID Connect 参考](https://docs.github.com/en/actions/reference/security/oidc)
- [GitHub：GitHub Actions 中的安全性](https://docs.github.com/en/actions/concepts/security)
- [Microsoft：Azure Resource Manager 服务连接的工作负载身份联合](https://learn.microsoft.com/en-us/azure/devops/pipelines/release/configure-workload-identity)
- [Microsoft: 使用 Microsoft Entra 工作负载身份访问 Azure DevOps](https://learn.microsoft.com/en-us/azure/devops/pipelines/library/add-devops-entra-service-connection)
- [AWS：创建 IAM OIDC 身份提供商](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_create_oidc.html)
- [GCP：工作负载身份联合](https://cloud.google.com/iam/docs/workload-identity-federation)
- [GCP：工作负载身份联合的最佳实践](https://cloud.google.com/iam/docs/best-practices-for-using-workload-identity-federation)
- [Oracle：用 JSON Web 令牌交换 UPST](https://docs.oracle.com/en-us/iaas/Content/Identity/api-getstarted/json_web_token_exchange.htm)
