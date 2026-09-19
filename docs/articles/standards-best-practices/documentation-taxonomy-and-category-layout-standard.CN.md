---
title: "文档分类体系与目录布局标准"
summary: "为云工程仓库定义一致的文档分类体系、仓库布局、命名约定、元数据模型和迁移方法。"
document_id: "SBP-15"
category: "标准与最佳实践"
article_type: "standard"
tags:
  - documentation
  - repositories
  - taxonomy
  - docs-as-code
  - governance
  - developer-experience
status: "published"
order: 150
version: "1.0"
last_updated: "2026-09-19"
review_status: "machine-validated"
review_cadence: "annual"
decision_status: "active"
owner: "云卓越中心"
audience:
  - 平台工程师
  - 应用团队
  - DevOps 工程师
  - 技术文档作者
  - 安全审查员
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
  - SBP-03
  - SBP-01
  - SBP-02
  - SBP-08
---

# 文档分类体系与目录布局标准

## 目的

该标准定义了云卓越中心仓库的文档类别、文件布局、命名规则、元数据和维护要求。

目标是让基础设施、平台、应用、自动化、安全和迁移仓库中的文档保持一致且易于查找。贡献者无需依赖特定仓库的约定，就应能够找到架构、部署、流水线、运维、安全、验证和参考信息。

该标准补充[仓库结构和文档标准](repository-structure-and-documentation-standard.md)。SBP-03 定义仓库治理要求；本标准定义文档的组织和分类方式。

## 规范语言

关键字 **MUST**、**MUST NOT**、**REQUIRED**、**SHOULD**、**SHOULD NOT** 和 **MAY** 是规范性的：

- **MUST / MUST NOT**：对于范围内的仓库是强制性的。
- **SHOULD / SHOULD NOT**：预期遵循，除非例外情况已获批准并记录在案。
- **MAY**：当仓库范围不需要某个类别时可以选择不使用。

## 设计原则

1. **文档是产品的一部分。** 改变行为、部署、安全性或运维方式的更改 MUST 更新受影响的文档。
2. **仓库 README 是入口。** README MUST 说明仓库目的、范围、先决条件、快速入门、部署路径、限制以及文档地图链接。
3. **类别描述主题。** 架构、部署、流水线和运维是受控类别，MUST NOT 被临时目录名称替代。
4. **文档类型描述意图。** 操作指南、教程、解释文档、参考文档和决策记录是不同类型的文档，SHOULD 与主题类别分开标识。
5. **文档遵循所有权边界。** 仓库级设计属于 `docs/`；模块特定的契约和行为应保留在模块附近。
6. **人工编写内容与生成内容相互区分。** 生成的清单、静态站点、PDF 和索引 MUST 可复现，MUST NOT 被视为权威源文件。
7. **文档地图是权威来源。** 包含多个文档的每个仓库 MUST 提供 `docs/README.md` 或等效的文档地图。

## 标准仓库级分类体系

仓库 SHOULD 使用以下有序类别。当仓库没有某个主题的内容时 MAY 省略该类别；SHOULD NOT 创建空的占位目录。

| 类别 | 目录 | 用途 | 典型文档 |
|---|---|---|---|
| 概览 | `00-overview/` | 范围、受众、状态、假设和阅读路径 | 范围、假设、术语表 |
| 架构 | `10-architecture/` | 上下文、组件、边界、流程、图表和设计原则 | 架构概览、网络设计、数据流 |
| 仓库 | `20-repository/` | 文件结构、模块清单、所有权、单一事实来源规则和依赖关系 | 仓库结构、模块索引 |
| 部署 | `30-deployment/` | 先决条件、环境设置、预配、环境晋级、回滚和销毁流程 | 部署指南、环境指南 |
| 流水线 | `40-pipelines/` | CI/CD 触发器、作业、身份、机密、审批、制品和流水线恢复 | 流水线指南、身份验证、运行器指南 |
| 运维 | `50-operations/` | 日常运维、监控、故障排除、备份、恢复和事件响应 | 运行手册、运维参考、故障排除 |
| 安全与治理 | `60-security-governance/` | 安全控制、身份、网络边界、命名、标签、合规和成本护栏 | 安全控制、命名标准、标签标准 |
| 验证 | `70-validation/` | 测试、代码检查、质量门禁、验证命令和证据 | 验证指南、验证摘要 |
| 参考 | `80-reference/` | 稳定的技术事实以及生成或部分生成的技术参考文档 | Terraform 参考、当前状态清单 |
| 决策 | `90-decisions/` | 需求、选项分析、ADR、例外和决策历史 | ADR、迁移选项、设计决策 |

根目录的 `README.md` 仍是主要概览页。只有在概览包含多个文档时才需要 `docs/00-overview/`。

## 推荐布局

```text
README.md
SECURITY.md
CONTRIBUTING.md
CHANGELOG.md

docs/
├── README.md
├── 10-architecture/
├── 20-repository/
├── 30-deployment/
├── 40-pipelines/
├── 50-operations/
├── 60-security-governance/
├── 70-validation/
├── 80-reference/
└── 90-decisions/

modules/<module-name>/
├── README.md
├── examples/<scenario>/README.md
└── docs/
    ├── architecture.md
    ├── operations.md
    └── pipeline.md
```

模块布局应根据范围调整。模块 README MUST 描述模块契约、输入、输出、依赖关系、示例、安全注意事项和限制。模块特定的架构或运维文档 SHOULD 保留在模块下，而不是在仓库级别重复。

## 文档类型

每个文档 SHOULD 有一个主要类型：

| 类型 | 用途 | 示例 |
|---|---|---|
| `explanation` | 概念、架构、理由和运作上下文 | 架构概览 |
| `how-to` | 针对特定任务的操作步骤 | 配置工作负载身份 |
| `reference` | 精确事实、接口、输入、输出和命令 | Terraform 参考 |
| `tutorial` | 面向学习的端到端演练 | 部署基础示例 |
| `decision` | 需求、选项分析、ADR 或已批准的例外 | 选择 Landing Zone（落地区域）模型 |

分类体系中的类别和文档类型 MUST 保持分离。例如，`docs/40-pipelines/github-actions-authentication.md` 可以使用 `category: pipelines` 和 `article_type: how-to`。

## 元数据标准

当文档站点或仓库工具支持时，新文档 SHOULD 使用 YAML front matter：

```yaml
---
title: "GitHub Actions Azure Authentication"
category: "pipelines"
article_type: "how-to"
scope: "repository"
status: "current"
owner: "Cloud Center of Excellence"
last_reviewed: "2026-09-19"
---
```

以下值是受控的：

- `category`：`overview`、`architecture`、`repository`、`deployment`、`pipelines`、`operations`、`security-governance`、`validation`、`reference` 或 `decisions`。
- `article_type`：`explanation`、`how-to`、`reference`、`tutorial` 或 `decision`。
- `scope`：`repository`、`module`、`example`、`platform` 或 `cloud`。
- `status`：`draft`、`current`、`deprecated` 或 `superseded`。

## 命名和放置规则

1. 新的 Markdown 文件 MUST 使用小写 kebab-case。
2. 每个文档 MUST 恰好有一个与其标题匹配的有意义的 H1 标题。
3. 仓库 MUST NOT 为同一主题维护两个相互竞争的规范文档。
4. 提供商特定内容 SHOULD 优先放置在相应类别下，例如 `docs/10-architecture/aws.md` 和 `docs/10-architecture/azure.md`。
5. 运行手册 MUST 放置在 `50-operations/` 下，除非它们严格属于 `30-deployment/` 的预配流程。
6. 命名、标签、代码标准、预提交、DevSecOps、身份和网络控制内容 MUST 放置在 `60-security-governance/` 下，除非它是纯粹的运维流程。
7. Terraform 输入、输出、资源和生成的模块文档属于 `80-reference/` 或相关模块旁边的位置。
8. 当 GitHub 或组织策略要求时，`SECURITY.md`、`CONTRIBUTING.md`、`CHANGELOG.md` 和 `LICENSE` MUST 保留在仓库根目录。

## 规范迁移映射

现有常见名称 SHOULD 按以下方式规范化：

| 现有模式 | 规范类别 |
|---|---|
| `architecture.md`、`ARCHITECTURE.md`、设计概览 | `10-architecture/` |
| `repository-structure.md`、README 文件结构、模块索引 | `20-repository/` |
| `DEPLOYMENT.md`、`DEPLOYMENT_METHODS.md`、预配指南 | `30-deployment/` |
| `PIPELINE.md`、`PIPELINES.md`、流水线指南、运行器指南 | `40-pipelines/` |
| `runbooks/`、`operations.md`、故障排除 | `50-operations/` |
| 命名、标签、代码标准、预提交、安全控制 | `60-security-governance/` |
| `VALIDATION.md`、`VALIDATION_SUMMARY.md`、测试证据 | `70-validation/` |
| `TERRAFORM_REFERENCE.md`、当前资源清单 | `80-reference/` |
| 需求、选项分析、ADR、已批准的例外 | `90-decisions/` |

迁移期间，旧路径 SHOULD 作为简短的重定向或兼容存根保留，直到所有内部链接、站点导航、自动化和外部引用都已更新。

## 生成文档和文档站点

`docs-manifest.json`、`_site/`、`site/`、生成的 HTML 和导出的 PDF 等文件是构建制品。它们 MUST 从受跟踪的源文件生成，MUST NOT 成为第二个权威来源。

文档站点生成器 SHOULD 从受控分类体系或文档元数据推导导航，而不是使用“`modules/` 之外的所有内容都是指南”这类硬编码假设。

每当移动文档时，仓库 MUST：

1. 重新生成文档清单；
2. 重新构建文档站点；
3. 验证生成页面和内部链接；以及
4. 确认导航恰好展示每个当前文档一次。

## 最低文档基线

每个基础设施、平台、应用或自动化仓库 MUST 提供：

- 根目录 `README.md`；
- `docs/README.md` 或等效位置的文档地图；
- 架构或范围文档；
- 仓库或组件结构文档；
- 部署或使用说明；
- 当存在 CI/CD 时的流水线文档；
- 安全和所有权指南；
- 验证说明和预期结果；以及
- 稳定接口、输入、输出或运维约束的参考文档。

当仓库承担相应职责时，运维、决策、迁移和灾难恢复类别是 REQUIRED。

## 采用步骤

仓库 SHOULD 按以下顺序规范化：

1. 建立分类体系和元数据值。
2. 规范可复用的 Azure、AWS 和 OCI 模板仓库。
3. 将模板结构应用于 Landing Zone（落地区域）仓库。
4. 将相同类别应用于 Web 演示和应用仓库。
5. 将链接验证、元数据验证和文档站点验证加入 CI。
6. 至少每年审查一次文档，并在架构、部署、安全或运维行为发生变化时进行审查。

`andyxuan2010` 文章库是一个独立的文档产品。其面向领域的文章分类体系 MAY 保持独立，而本标准仍是其所记录的工程仓库的推荐结构。

## 验证

采用本标准的仓库 MUST 验证文档结构及其生成输出。验证证据 SHOULD 包括：

- 确认根目录 README 和文档地图标识仓库范围和阅读路径；
- 确认文档使用获批准的类别、文档类型、元数据值和小写 kebab-case 文件名；
- 验证根据仓库职责所需的文档类别是否存在；
- 成功完成内部链接、元数据和标题验证；
- 构建文档站点，并确认每个当前文档恰好展示一次；以及
- 在分类体系发生变化后审查已移动文档的重定向、生成清单和导航。

在仓库被视为合规之前，验证失败 MUST 被修正或记录为已批准的例外。

## 相关主题

- [仓库结构和文档标准](repository-structure-and-documentation-standard.md)
- [基础设施即代码工程标准](infrastructure-as-code-engineering-standard.md)
- [Terraform 模块设计标准](terraform-module-design-standard.md)
- [CI/CD 流水线和发布控制标准](ci-cd-pipeline-and-release-control-standard.md)
