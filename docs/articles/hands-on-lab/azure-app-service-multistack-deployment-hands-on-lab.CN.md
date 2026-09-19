---
title: "Azure App Service 多技术栈部署"
summary: "使用 GitHub Actions 和 Azure DevOps 将 Python、Node.js 和 .NET 参考应用部署到 Terraform 配置的 Azure App Service。"
document_id: "HOL-03"
category: "动手实验"
article_type: "lab"
tags:
  - azure-app-service
  - github-actions
  - azure-devops
  - ci-cd
  - application-deployment
status: "published"
order: 30
version: "2.0"
last_updated: "2026-08-28"
review_status: "machine-validated"
review_cadence: "annual"
decision_status: "active"
owner: "云卓越中心"
audience:
  - 应用开发者
  - 平台工程师
  - 演示工程师
  - 云架构师
environment_scope:
  - development
  - test
  - staging
  - production
cloud_scope:
  - Azure
reference_repositories:
  - https://github.com/andyxuan2010/azure-landingzone
  - https://github.com/andyxuan2010/web-ccoedemo-python
  - https://github.com/andyxuan2010/web-ccoedemo-node
  - https://github.com/andyxuan2010/web-ccoedemo-dotnet
lab_type: "guided deployment"
difficulty: "intermediate"
estimated_duration: "3-4 hours"
related_document_ids:
  - HTG-07
  - APP-02
  - CICD-05
  - CICD-07
  - HTG-14
---
> **文档类型：** 动手实验
> **规范性术语：** **MUST**、**MUST NOT**、**SHOULD**、**SHOULD NOT** 和 **MAY** 是要求级别。
> **适用范围：** 应用于 Azure App Service 上的 Python、Node.js、.NET 和容器化工作负载的 Terraform 和流水线交付，包括身份、配置、网络、插槽、回滚和漂移。
> **例外流程：** 偏离要求需要记录风险评估、补偿控制、指定风险负责人和到期日期。

|控制领域|价值|
|---|---|
|文件编号 | `HOL-03` |
|负责人|云卓越中心 |
|审核周期|至少每年一次，并且在发生重大 App Service、提供商、安全性或源仓库更改之后 |
|证据|审查仓库快照、Terraform 计划和应用、构建制品、应用运行状况、身份和配置检查、回滚测试和清理证据 |

# Azure App Service 多技术栈部署

> **决策简述：** 跨 Python、Node.js 和 .NET 路径构建和部署相同的已确定版本，保持 Terraform、流水线、身份、配置和回滚边界明确。

该综合指南既是部署标准，也是实践实验室。它使用四个公共参考仓库：一个 Terraform Landing Zone，提供三项 App Service 和三个使用 Python、Node.js 和 .NET 实现的应用。应用仓库包含工作的 GitHub Actions 和 Azure DevOps 流水线；他们提交的自动化是可执行的事实来源。

当前的开发环境使用 F1 App Service 计划。 F1 支持直接部署，但不支持部署槽位。完成现有资源的直接部署练习。在通过 Terraform 将计划更改为 S1 或支持插槽的其他层后，插槽升级模式将应用。

## 结果

完成实验后，您将能够：

- 跟踪每个应用从 Terraform 配置到运行时和流水线；
- 比较 ZIP 部署、从包运行、Oryx 构建自动化、部署中心和自定义容器；
- 正确打包 Flask/Python 3.12、Express/Node.js 24 和 ASP.NET Core .NET 8；
- 运行并评估 GitHub Actions 和 Azure DevOps 交付路径；
- 管理部署中心冲突、SCM 访问限制、健康验证和回滚；
- 单独的流水线身份、运行时身份、配置和机密；
- 将直接部署扩展到基于插槽的升级，而无需重建版本。

## 管理原则

1. 构建一次并部署相同的已识别制品。不要在环境之间重建。
2. 将环境配置和机密保留在 ZIP 或容器镜像之外。
3. 将部署标识与 App Service 运行时托管标识分开。
4. 优先使用工作负载身份联合和短期令牌，而不是客户端机密和发布配置文件。
5. 通过分支控制、批准、检查和最低权限 RBAC 保护环境。
6. 使运行状况、版本、安全性和回滚验证可执行。
7. 在 Terraform 中管理持久 App Service 配置。流水线变更不得造成未经审查的偏差。
8. 一次仅对目标使用一种权威部署机制。

## 参考仓库和审查的快照

|公共仓库 |审查提交 |目的|
|---|---|---|
| `andyxuan2010/azure-landingzone` | `1cdf5ca` |提供 App Service 计划、Web 应用、运行时设置、身份验证、托管身份、运行状况检查、网络和部署方法设置 |
| `andyxuan2010/web-ccoedemo-python` | `71921e8` | Flask/Python 3.12 应用，带有 GitHub Actions、Oryx ZIP 部署和备用独立包流水线 |
| `andyxuan2010/web-ccoedemo-node` | `f16586c` | Express/Node.js 24 应用具有独立的生产依赖项和 ZIP/run-from-package 交付 |
| `andyxuan2010/web-ccoedemo-dotnet` | `0e7d885` | ASP.NET Core .NET 8 应用使用经过测试的 Windows 或 Linux App Service `dotnet publish` 输出 |

这些快照使本指南可供审查。在执行较新的提交之前，请阅读其仓库文档和流水线差异。

## 配置拓扑

Landing Zone 命名表达式为 `web-${workload}-${location-code}-${environment}-${stack}`。开发输入使用工作负载 `platform`、位置 `canadacentral` (`cc`) 和环境 `dev`。

|应用 |App Service|操作系统/运行时 |健康 | Terraform 中的开发方法 |
|---|---|---|---|---|
|蟒蛇 | `web-platform-cc-dev-python` | Linux、Python 3.12、Gunicorn | `/health` |部署中心，分公司`main` |
| Node.js | `web-platform-cc-dev-node` | Linux、Node.js 24 LTS | `/health` |部署中心，分公司`main` |
| .NET | `web-platform-cc-dev-dotnet` | Windows、.NET 8 | `/health` |部署中心，分公司`main` |

所有三个计划目前都使用 F1 和 32 位工作程序。 Terraform 配置支持系统分配的托管身份、身份验证集成、站点和 SCM 限制以及特定于堆栈的设置。
```mermaid **Figure 1 — Reference topology.** Terraform owns the hosting contract; each application repository owns its stack-specific build and deployment path.
flowchart LR
    LZ[azure-landingzone] --> PYAPP[Python App Service]
    LZ --> NODEAPP[Node App Service]
    LZ --> NETAPP[.NET App Service]
    PY[web-ccoedemo-python] -->|GitHub or ADO| PYAPP
    NODE[web-ccoedemo-node] -->|GitHub or ADO| NODEAPP
    NET[web-ccoedemo-dotnet] -->|GitHub or ADO| NETAPP
    PYAPP --> MON[Health, logs, metrics]
    NODEAPP --> MON
    NETAPP --> MON
    classDef infra fill:#15213b,stroke:#38d3ff,color:#e9eefc,stroke-width:2px;
    classDef app fill:#121d35,stroke:#3edbb0,color:#e9eefc,stroke-width:2px;
    classDef source fill:#121d35,stroke:#ffbd38,color:#e9eefc,stroke-width:2px;
    classDef observe fill:#0f1a30,stroke:#7181a6,color:#e9eefc,stroke-width:2px;
    class LZ infra;
    class PY,NODE,NET source;
    class PYAPP,NODEAPP,NETAPP app;
    class MON observe;
```
## Terraform 实现

以下缩写输入取自 [`environments/dev/terraform.tfvars`](https://github.com/andyxuan2010/azure-landingzone/blob/main/environments/dev/terraform.tfvars)。它显示了应用流水线必须保留的运行时契约。
```hcl
app_services = {
  dotnet = {
    enabled           = true
    stack             = "dotnet"
    kind              = "Windows"
    plan_os_type      = "Windows"
    sku_name          = "F1"
    use_32_bit_worker = true
    dotnet_version    = "v8.0"
    health_check_path = "/health"
    deployment_method = "deployment_center"
  }

  node = {
    enabled           = true
    stack             = "node"
    kind              = "Linux"
    plan_os_type      = "Linux"
    sku_name          = "F1"
    use_32_bit_worker = true
    node_version      = "24-lts"
    health_check_path = "/health"
    deployment_method = "deployment_center"
    app_settings = {
      WEBSITE_NODE_DEFAULT_VERSION = "~24"
    }
  }

  python = {
    enabled           = true
    stack             = "python"
    kind              = "Linux"
    plan_os_type      = "Linux"
    sku_name          = "F1"
    python_version    = "3.12"
    health_check_path = "/health"
    deployment_method = "deployment_center"
    startup_command   = "gunicorn --bind=0.0.0.0 --timeout 600 --access-logfile '-' --error-logfile '-' --chdir /home/site/wwwroot app:app"
  }
}
```
[`main.tf`](https://github.com/andyxuan2010/azure-landingzone/blob/main/main.tf) 中的资源循环将每个选定的运行时传递到共享 App Service 模块：

> [!注意]
> 摘录有意显示部署契约，而不是整个模块。按照嵌入的源链接了解当前验证、网络、诊断、身份验证和依赖性行为。
```hcl
module "app_service" {
  for_each = local.enabled_app_services
  source   = "../azure-template/modules/appservice"

  app_name            = each.value.app_name
  resource_group_name = module.resource_group.name
  app_service_plan_id = module.app_service_plan[each.key].id
  kind                 = each.value.kind
  app_command_line     = try(each.value.startup_command, null)

  system_assigned_identity_enabled = true
  health_check_path                 = try(each.value.health_check_path, null)

  application_stack = merge(
    { current_stack = each.value.stack },
    each.value.stack == "dotnet" ? { dotnet_version = each.value.dotnet_version } : {},
    each.value.stack == "node" ? { node_version = each.value.node_version } : {},
    each.value.stack == "python" ? { python_version = each.value.python_version } : {}
  )
}
```
使用紧凑的 [`features` 输出](https://github.com/andyxuan2010/azure-landingzone/blob/main/outputs.tf) 来发现实际名称和 URL：
```bash
cd ../azure-landingzone
terraform output -json features | jq '.enable_app_services.items'
```
如果本地工作区不保存已应用的状态：
```bash
az webapp list \
  --resource-group rg-platform-dev \
  --query "[?starts_with(name, 'web-platform-cc-dev-')].{name:name,state:state,host:defaultHostName}" \
  --output table
```
## 部署方法决策

|方法|构建地点 |运行时内容 |最适合|参考实现 |
|---|---|---|---|---|
|使用 Oryx 进行 ZIP 部署 |部署期间的 App Service |内置于可运行内容中的源 ZIP |常规 Python 布局|主要 Python Azure DevOps 流水线 |
|预建 ZIP | CI 运行器 |准备运行提取的内容 |已发布的 .NET 或独立应用 |主要 .NET 流水线 |
|从包运行 | CI 运行器 |只读安装 ZIP | Node.js 和不可变包 |主 Node.js 和备用流水线 |
|部署中心|连接仓库加平台构建 |分支衍生内容 |快速引导和门户连接交付 |当前开发 Terraform 选择 |
|定制集装箱|容器构建运行器 | OCI 镜像 |原生包、非标准运行时、可移植性 |记录在案的扩展；未在三个应用仓库中实现 |

不要为已经包含运行时依赖项的包启用 Oryx。当所选运行时必须修改 `WEBSITE_RUN_FROM_PACKAGE=1` 时，请勿启用 `wwwroot`。切勿在生产中使用可变容器标签。

## 特定于堆栈的构建契约

###Python

GitHub 工作流程构建一个独立的 Python 包。公共镜像有意排除`.github`；其行为记录在公共[Python 流水线指南](https://github.com/andyxuan2010/web-ccoedemo-python/blob/main/docs/PIPELINES.md)中。此摘录来自经过审查的源工作流程：
```yaml
- name: Validate application and dependencies
  run: |
    python -m pip install -r requirements.txt -r requirements-dev.txt
    ruff check .
    ruff format --check .
    pytest
    pip-audit -r requirements.txt

- name: Build self-contained application package
  run: |
    rm -rf "${PACKAGE_ROOT}"
    mkdir -p "${PACKAGE_ROOT}/.python_packages/lib/site-packages"
    python -m pip install \
      --target "${PACKAGE_ROOT}/.python_packages/lib/site-packages" \
      -r requirements.txt
    cp app.py requirements.txt "${PACKAGE_ROOT}/"
    cp -R templates static "${PACKAGE_ROOT}/"
```
该包必须在预期路径中包含 `app.py`、模板、静态资产和依赖项。原生轮子必须与 App Service 操作系统、架构和 Python 版本相匹配。本地虚拟环境不是部署制品。

主 Azure DevOps 路径会发送源代码并启用 Oryx。这段摘录来自[`azure-pipelines/deploy-stage.yml`](https://github.com/andyxuan2010/web-ccoedemo-python/blob/main/azure-pipelines/deploy-stage.yml)：
```bash
az webapp config set \
  --resource-group "${resource_group}" \
  --name "${app_name}" \
  --linux-fx-version "PYTHON|${pythonVersion}" \
  --startup-file "gunicorn --bind=0.0.0.0 --timeout 600 --access-logfile '-' --error-logfile '-' app:app"

az webapp config appsettings delete \
  --resource-group "${resource_group}" \
  --name "${app_name}" \
  --setting-names WEBSITE_RUN_FROM_PACKAGE PYTHONPATH || true

az webapp config appsettings set \
  --resource-group "${resource_group}" \
  --name "${app_name}" \
  --settings SCM_DO_BUILD_DURING_DEPLOYMENT=true ENABLE_ORYX_BUILD=true

az webapp deploy \
  --resource-group "${resource_group}" \
  --name "${app_name}" \
  --src-path "${packagePath}" \
  --type zip \
  --restart true \
  --track-status false
```
### Node.js

Node.js 交付从锁定文件中准确恢复、验证、修剪开发依赖项并暂存一个独立的包。这段摘录来自[`azure-pipelines.yml`](https://github.com/andyxuan2010/web-ccoedemo-node/blob/main/azure-pipelines.yml)：
```yaml
- task: UseNode@1
  inputs:
    version: "$(nodeVersion)"

- script: npm ci
  displayName: Install dependencies

- script: npm run check
  displayName: Lint, test, and audit

- script: |
    npm prune --omit=dev
    npm run stage-package -- "$(packageRoot)"
  displayName: Stage application files

- task: ArchiveFiles@2
  inputs:
    rootFolderOrFile: "$(packageRoot)"
    includeRootFolder: false
    archiveType: zip
    archiveFile: "$(packagePath)"
```
分阶段的 ZIP 包括生产 `node_modules`，因此部署路径设置 `WEBSITE_RUN_FROM_PACKAGE=1` 并禁用远程构建。 Linux 应用以 `cd /home/site/wwwroot && npm start` 开头。服务器必须侦听 `0.0.0.0` 和 App Service 提供的端口。

### .NET

仅在打包 `dotnet publish` 输出之前进行 .NET 交付测试和审核。公共镜像有意排除`.github`；其行为记录在公共 [.NET 流水线指南](https://github.com/andyxuan2010/web-ccoedemo-dotnet/blob/main/docs/PIPELINE.md) 中。此摘录来自经过审查的源工作流程：
```yaml
- name: Restore
  run: dotnet restore tests/WebCcoeDemo.Web.Tests/WebCcoeDemo.Web.Tests.csproj --configfile NuGet.config

- name: Run automated tests
  run: dotnet test tests/WebCcoeDemo.Web.Tests/WebCcoeDemo.Web.Tests.csproj --configuration "${BUILD_CONFIGURATION}" --no-restore

- name: Audit NuGet dependencies
  run: dotnet list "${PROJECT_FILE}" package --vulnerable --include-transitive

- name: Publish
  run: dotnet publish "${PROJECT_FILE}" --configuration "${BUILD_CONFIGURATION}" --output "${RUNNER_TEMP}/publish"

- name: Archive application
  run: |
    cd "${RUNNER_TEMP}/publish"
    zip -r "${RUNNER_TEMP}/app.zip" .

- name: Validate package root contains web.config
  run: unzip -l "${RUNNER_TEMP}/app.zip" | awk '{print $4}' | grep -x "web.config" > /dev/null
```
不要将项目源压缩为运行时制品。 `web.config` 使包与 Windows App Service/IIS 兼容，而发布的应用还支持适当配置的 Linux App Service。

## 流水线生命周期
```mermaid **Figure 2 — Direct deployment on the current F1 plans.** Validation and target/SCM prechecks gate the upload; the nonredirecting health response becomes release evidence.
flowchart LR
    PR[Pull request] --> CHECK[Lint, test, audit]
    CHECK --> BUILD[Stack-specific build]
    BUILD --> ZIP[(app.zip)]
    ZIP --> PRE[Target and SCM precheck]
    PRE --> DEPLOY[Direct deploy on F1]
    DEPLOY --> HEALTH["/health validation"]
    HEALTH --> EVIDENCE[Run, commit, artifact, target]
    classDef gate fill:#15213b,stroke:#38d3ff,color:#e9eefc,stroke-width:2px;
    classDef artifact fill:#121d35,stroke:#ffbd38,color:#e9eefc,stroke-width:2px;
    classDef release fill:#121d35,stroke:#3edbb0,color:#e9eefc,stroke-width:2px;
    class PR,CHECK,PRE gate;
    class BUILD,ZIP artifact;
    class DEPLOY,HEALTH,EVIDENCE release;
```
仓库添加了超出最小部署任务的控制：

- 最低权限默认工作流程权限；
- 分支或环境上下文解析；
- 目标存在检查；
- SCM DNS/TCP 检查；
- 配置时临时 SCM 允许规则；
- 检测并删除冲突的部署中心绑定；
- 运行时适当的应用设置；
- 拒绝重定向的有限健康重试；
- 可选的次要目标和镜像发布；
- 清理临时 SCM 规则。

## GitHub Actions 练习

### 选择并检查仓库
```bash
cd ../web-ccoedemo-python # repeat later for node and dotnet
git status --short
git branch --show-current
```
按顺序阅读：

1.`README.md`；
2、`docs/ARCHITECTURE.md`；
3.`docs/DEPLOYMENT_METHODS.md`；
4、流水线导向；
5.`.github/workflows/azure-webapp.yml`。

### 配置受保护环境

所审查的工作流程使用仓库变量 `DEPLOY_ENV` 来选择 GitHub 环境。使用所选仓库中记录在案的确切变量和机密名称配置该环境。将主要应用目标仅设置为其匹配的开发 Web 应用：

|仓库 |主要目标 |
|---|---|
| `web-ccoedemo-python` | `web-platform-cc-dev-python` |
| `web-ccoedemo-node` | `web-platform-cc-dev-node` |
| `web-ccoedemo-dotnet` | `web-platform-cc-dev-dotnet` |

在实验室期间将可选的第二和第三目标留空。

审核后的工作流程使用受保护的服务主体凭据进行身份验证。目标标准是带有 `azure/login`、`id-token: write`、精确联合主题和资源组范围的 RBAC 的 GitHub OIDC。仅在联合凭证准备就绪并且新登录已得到验证后才进行迁移；永远不要默默地退回到发布配置文件。

### 运行并验证

1. 打开拉取请求并确认验证已完成（无需部署）。
2. 检查包内容和依赖性审核。
3. 运行记录在案的手动部署或合并路径。
4. 确认工作流找到所需的 App Service。
5. 检查其删除的任何部署中心绑定。
6. 确认部署后 SCM 访问已恢复。
7. 验证 `/health` 并记录工作流运行 URL、提交、制品、环境和目标。

提交的运行状况循环需要非重定向 HTTP 2xx 响应。由于公共镜像不包括 `.github`，因此请使用已发布的 [Python 流水线指南](https://github.com/andyxuan2010/web-ccoedemo-python/blob/main/docs/PIPELINES.md)、[Node.js 部署指南](https://github.com/andyxuan2010/web-ccoedemo-node/blob/main/docs/DEPLOYMENT_METHODS.md) 和 [.NET 流水线指南](https://github.com/andyxuan2010/web-ccoedemo-dotnet/blob/main/docs/PIPELINE.md) 作为这些源工作流的公共参考。

## Azure DevOps 练习

### 了解分支到环境的行为

仓库故意有所不同：

- Python 和 Node.js 验证 `main`、`dev` 和 `sbx`；他们的 `dev` 分支针对匹配的开发 App Service，而 `main` 仅在经过审查的 Azure DevOps 流水线中构建。
- .NET 在开发阶段使用其记录在案的 Sandbox-to-Dev 序列并以 `web-platform-cc-dev-dotnet` 为目标。
- `run_from_package.yml` 是备用的手动选择路径，而不是额外的自动部署。

使用所选仓库的`azure-pipelines.yml`和`azure-pipelines/deploy-stage.yml`；不要在它们之上复制通用流水线。

### 配置身份和环境

创建或验证流水线使用的命名 Azure Resource Manager 服务连接。首选工作负载身份联合、对预期资源组的访问范围、限制流水线授权以及向受保护的 Azure DevOps 环境添加批准/检查。
流水线身份部署内容并配置目标。运行时托管身份访问 Key Vault、存储、数据库和其他依赖项。这些身份不能仅仅为了方便而共享权限。

### 运行并验证

1. 对 PR 验证构建进行排队。
2. 检查测试、审核、存档和包根验证。
3. 运行仓库的开发分支/阶段。
4. 确认 SCM DNS 和 TCP 443 预检查通过。
5. 确认堆栈特定设置与所选制品样式匹配。
6. 验证目标运行状况端点。
```bash
curl --fail "https://web-platform-cc-dev-python.azurewebsites.net/health"
curl --fail "https://web-platform-cc-dev-node.azurewebsites.net/health"
curl --fail "https://web-platform-cc-dev-dotnet.azurewebsites.net/health"
```
记录流水线运行、源提交、制品、服务连接、目标、运行状况结果和批准证据。

## 部署中心和 Terraform 漂移

当前开发的 Terraform 选择部署中心，而仓库管理的 ZIP 流水线可以删除冲突的源绑定。如果 Terraform 保持不变，稍后应用可以恢复该绑定。

> [!重要]
> 将其视为所有权冲突，而不是流水线滋扰。在采用仓库管理的 ZIP 流水线作为权威路径之前，更新 Terraform 部署方法选择。

每个目标选择一种方法：

- 保留部署中心，并且不对同一目标运行独立的 ZIP 部署工作流程；或
- 将`deployment_method`中的`azure-landingzone`更改为流水线对齐方法，审查计划，应用它，然后使用应用流水线。

切勿仅通过门户解决此冲突。采集 Terraform 中的权威选择和变更记录。

## 配置、机密和身份

- 将非机密环境值存储在 App Service 设置或受管配置中。
- 将机密存储在 Key Vault 中，并首选托管身份/Key Vault 引用。
- 将 `FLASK_SECRET_KEY`、`SESSION_SECRET`、Entra 凭据和连接字符串保留在 ZIP 文件和日志之外。
- 将流水线部署权限与应用运行时权限分开对待。
- 避免在支持 Microsoft Entra 部署的情况下发布配置文件和 SCM 基本凭据。
- 当设置必须保留在环境中时，在插槽交换之前将设置标记为粘性。
- 独立验证 Easy Auth 和应用管理的 MSAL；它们是单独的授权层。

当缺少所需的会话/身份验证配置时，参考应用会安全失败或降级。不要为了使部署看起来健康而削弱这种行为。

## 私有网络和部署代理

私有端点控制入站访问。 VNet 集成控制应用出站访问。他们解决不同的问题。

当 SCM 端点受到限制或私有时：

- 使用具有经批准的网络可达性的运行器/代理；
- 正确解析`<app>.azurewebsites.net`和`<app>.scm.azurewebsites.net`；
- 上传前测试 TCP 443；
- 保留最低权限的 SCM 访问限制；
- 不要广泛打开 SCM 端点来进行流水线传递。

参考流水线包括 SCM 预检查，并且可以暂时允许当前运行器 IP。私有端点需要网络集成的运行器而不是临时的公共规则。

## 插槽扩展

F1 不支持插槽。要执行此扩展，请将 `sku_name` 更改为 S1 或 `azure-landingzone` 中的其他受支持的层，查看 `terraform plan` 并通过受管基础设施流水线进行应用。

目标发布流程为：
```mermaid **Figure 3 — Slot promotion after upgrading the plan.** The tested artifact is promoted without rebuilding, and the previous production content remains available for swap-back.
flowchart LR
    BUILD[Build once] --> ART[(Immutable ZIP or image digest)]
    ART --> SLOT[Deploy staging slot]
    SLOT --> TEST[Warm-up and smoke tests]
    TEST --> APPROVE[Approval]
    APPROVE --> SWAP[Swap to production]
    SWAP --> VERIFY[Production verification]
    classDef build fill:#121d35,stroke:#ffbd38,color:#e9eefc,stroke-width:2px;
    classDef gate fill:#15213b,stroke:#38d3ff,color:#e9eefc,stroke-width:2px;
    classDef release fill:#121d35,stroke:#3edbb0,color:#e9eefc,stroke-width:2px;
    class BUILD,ART build;
    class SLOT,TEST,APPROVE gate;
    class SWAP,VERIFY release;
```
通过受控自动化创建和晋级插槽。等效的 CLI 操作有：
```bash
az webapp deployment slot create \
  --resource-group rg-platform-dev \
  --name web-platform-cc-dev-node \
  --slot staging

curl --fail "https://web-platform-cc-dev-node-staging.azurewebsites.net/health"

az webapp deployment slot swap \
  --resource-group rg-platform-dev \
  --name web-platform-cc-dev-node \
  --slot staging \
  --target-slot production
```
使用扩展和收缩数据库迁移。槽交换无法撤消不兼容的架构更改、删除的数据、下游契约更改或共享机密故障。

## 自定义容器扩展

当原生系统打包、非标准运行时或可移植性证明需要自有运行时镜像是合理的时，请使用自定义容器。

1. 固定基础镜像。
2. 构建并测试镜像。
3. 扫描并生成 SBOM/来源证明。
4. 将提交地址的镜像推送到 ACR。
5. 日志记录摘要。
6. 仅授予 Web 应用的托管标识 `AcrPull`。
7. 部署准确的摘要并验证 `/health`。

不要部署 `latest`、存储注册表管理员凭据、将状态写入容器文件系统或忽略 stdout/stderr 日志记录。

## 验证

### 构建和制品

- [ ] 在支持的情况下使用基于锁定文件的恢复。
- [ ] Lint、单元测试、依赖性审核和所需的安全扫描通过。
- [ ] 仅打包运行时文件。
- [ ] 所需的条目文件位于 ZIP 根目录中。
- [ ] 制品与源提交和流水线运行相关联。
- [ ] 不存在凭证或 `.env` 文件。

### 部署

- [ ] 预期的 App Service 存在并且其操作系统/运行时与包匹配。
- [ ] 部署身份仅具有所需的访问权限。
- [ ] SCM DNS 和 TCP 连接通过。
- [ ] 无意中不会保留任何竞争的部署中心绑定。
- [ ] Build-during-deployment 和 run-from-package 设置与所选方法匹配。
- [ ] 临时 SCM 规则已删除。

### 运行时

- [ ] `/health` 返回非重定向 HTTP 2xx 响应。
- [ ] 应用报告预期的发布/提交（如果可用）。
- [ ] MSAL 和 Easy Auth 流程按设计运行。
- [ ] 依赖关系可通过预期路由和 DNS 访问。
- [ ] 日志、指标和跟踪到达预期目的地。
- [ ] HTTP 5xx、延迟、重新启动和依赖性故障保持在阈值内。

## 回滚

对于直接 ZIP 部署，重新部署以前保留的包而不重建它。对于从包运行，请恢复以前的包引用。对于自定义容器，恢复之前的摘要。

对于具有向后兼容数据更改的插槽部署，请交换回来：
```bash
az webapp deployment slot swap \
  --resource-group rg-platform-dev \
  --name web-platform-cc-dev-node \
  --slot staging \
  --target-slot production
```
回滚后，验证运行状况，保留诊断信息，停止进一步升级，记录事件和制品标识符，并通过新的审核版本进行修复。当共享依赖项或架构实际失败时，不要重复交换。

## 故障排除

|症状|可能的原因 |更正|
|---|---|---|
|默认 App Service 页面 | ZIP 根目录不正确或启动失败 |检查包根目录、部署日志和应用日志 |
| Python 缺少模块 | Oryx 因源 ZIP 或提供商路径不正确而被禁用 |对齐 `SCM_DO_BUILD_DURING_DEPLOYMENT`、`PYTHONPATH`、包布局和 Python 版本 |
| Gunicorn 无法加载应用 |启动模块或工作目录错误 |将 `app:app` 和 `/home/site/wwwroot` 与提交的 Flask 布局匹配 |
|节点返回 503 |缺少生产依赖项或错误的启动/监听地址 |验证`node_modules`、`npm start`、`0.0.0.0`和平台端口 |
| .NET 无法启动 |部署源代码而不是发布输出 |从 `dotnet publish` 输出重新创建 ZIP 并验证 `web.config` |
|部署 401/403 |错误的联合主题、机密、服务连接或 RBAC |检查登录名和角色范围；不要默默地替换发布配置文件 |
|单体应用超时|访问限制、DNS 或私有网络路径 |运行提交预检查并在专用时使用网络集成代理 |
| Terraform 恢复源绑定 | Pipeline 删除了部署中心，但 IaC 仍然选择它 |更改权威的 `deployment_method` 并应用经过审核的 Terraform |
|健康重定向到登录 |健康端点受 Easy Auth 保护 |保持可到达平台和流水线的最小非机密准备路径 |
|运行时文件消失 |应用在只读/临时内容下写入 |在适当的情况下使用 `/home` 或外部持久服务 |

有用的诊断：
```bash
az webapp log config \
  --resource-group rg-platform-dev \
  --name web-platform-cc-dev-python \
  --application-logging filesystem \
  --level information

az webapp log tail \
  --resource-group rg-platform-dev \
  --name web-platform-cc-dev-python
```
## 安全和生产强化

- 保护分支并要求审查工作流程、流水线和 Terraform 更改。
- 根据供应链策略固定第三方 Action 和共享流水线模板。
- 添加机密、SAST、依赖项、IaC 和容器扫描（如果适用）。
- 在支持的情况下对制品/镜像进行签名并保留来源证明。
- 对每个环境使用单独的身份、服务连接和批准。
- 实施 HTTPS、TLS 策略、访问限制、私有连接、托管身份和最小权限。
- 配置诊断、Application Insights、部署注释、告警、SLO 和保留。
- 选择支持生产的层并验证始终在线、自动扩缩容、区域弹性、备份和恢复要求。
- 测试启动、扩展、回滚以及从保留的制品中完全重新部署。

## 受控失败练习

### 启动命令不正确

仅更改一次性目标的启动命令，监控运行状况故障和日志，然后通过 Terraform 恢复它。这证明了运行时故障排除和漂移控制。

### 断掉的 SCM 路由

从未经授权的运行器处验证部署前 SCM 预检查是否失败。由批准的代理人重复。不要扩大限制。

### 缺少运行时权限

删除一次性托管身份角色，确认应用（而不是流水线）丢失依赖项访问权限，恢复最低权限并重新测试。这表明身份分离。

## 运营所有权

|控制|主要负责人 |
|---|---|
|应用构建和健康端点|应用团队|
|流水线模式和共享模板|平台/DevOps 团队 |
|服务连接和联合|平台/安全团队 |
|环境审批|环境负责人|
| Terraform 和 App Service 运行时配置 |平台和应用团队|
|运行时身份权限|资源所有者/安全团队|
|监控和告警 |应用和运营团队 |
|回滚决定|事件/变更权限 |
|数据库迁移 |应用和数据库团队|

## 清理

参考 App Service 属于共享 Landing Zone。请勿删除 `rg-platform-dev` 或其任何资源作为实验室清理。

仅删除特定于实验室的身份、联合凭据、环境、服务连接、变量、临时分支和运行器注册。通过`andyxuan2010/azure-landingzone`协调持久化配置；不要手动反转 Terraform 管理的设置。

## 完成的定义

当所有三个仓库成功构建和测试、至少执行了一个 GitHub Actions 和一个 Azure DevOps 部署、每个应用达到其匹配目标、`/health` 通过、部署方法选择与 Terraform 一致、并且保留发布证据和以前的制品时，直接部署实验室就完成了。当插槽验证、批准、交换、生产验证和回滚也在支持的层上进行了测试时，扩展就完成了。

## 官方参考文档

- [App Service 部署最佳实践](https://learn.microsoft.com/azure/app-service/deploy-best-practices)
- [使用 GitHub Actions 进行部署](https://learn.microsoft.com/azure/app-service/deploy-github-actions)
- [使用 Azure Pipelines 部署](https://learn.microsoft.com/azure/app-service/deploy-azure-pipelines)
- [ZIP 部署](https://learn.microsoft.com/azure/app-service/deploy-zip)
- [从包运行](https://learn.microsoft.com/azure/app-service/deploy-run-package)
- [部署槽位](https://learn.microsoft.com/azure/app-service/deploy-staging-slots)
- [App Service 健康检查](https://learn.microsoft.com/azure/app-service/monitor-instances-health-check)
- [App Service 托管身份](https://learn.microsoft.com/azure/app-service/overview-managed-identity)
- [App Service 私有端点](https://learn.microsoft.com/azure/app-service/overview-private-endpoint)
- [配置 Python](https://learn.microsoft.com/azure/app-service/configure-language-python)
- [配置 Node.js](https://learn.microsoft.com/azure/app-service/configure-language-nodejs)
- [配置自定义容器](https://learn.microsoft.com/azure/app-service/configure-custom-container)
- [Azure DevOps 环境](https://learn.microsoft.com/azure/devops/pipelines/process/environments)
- [Azure Resource Manager 服务连接](https://learn.microsoft.com/azure/devops/pipelines/library/connect-to-azure)

## 相关主题

- [如何将应用部署到 Azure App Service](../how-to-guides/how-to-deploy-an-application-to-azure-app-service.md)
- [Azure App Service 架构和部署](../applications-kubernetes/app-azure-app-service-architecture-and-deployment.md)
- [流水线身份和机密处理](../ci-cd-automation/pipeline-identity-and-secret-handling.md)
- [环境晋级、审批、发布控制](../ci-cd-automation/environment-promotion-approval-and-release-controls.md)
- [如何跨环境晋级不可变制品](../how-to-guides/how-to-promote-immutable-artifacts-across-environments.md)

## 相关仓库

- [andyxuan2010/azure-landingzone](https://github.com/andyxuan2010/azure-landingzone) — 提供三项 App Service；请参阅[开发输入](https://github.com/andyxuan2010/azure-landingzone/blob/main/environments/dev/terraform.tfvars)、[Terraform 实现](https://github.com/andyxuan2010/azure-landingzone/blob/main/main.tf) 和[功能输出](https://github.com/andyxuan2010/azure-landingzone/blob/main/outputs.tf)。
- [andyxuan2010/web-ccoedemo-python](https://github.com/andyxuan2010/web-ccoedemo-python) — Flask/Python 参考；请参阅[架构](https://github.com/andyxuan2010/web-ccoedemo-python/blob/main/docs/ARCHITECTURE.md)、[流水线](https://github.com/andyxuan2010/web-ccoedemo-python/blob/main/docs/PIPELINES.md)和[部署方法](https://github.com/andyxuan2010/web-ccoedemo-python/blob/main/docs/DEPLOYMENT_METHODS.md)。
- [andyxuan2010/web-ccoedemo-node](https://github.com/andyxuan2010/web-ccoedemo-node) — Express/Node.js 参考；请参阅[体系结构](https://github.com/andyxuan2010/web-ccoedemo-node/blob/main/docs/ARCHITECTURE.md)、[Azure DevOps 流水线](https://github.com/andyxuan2010/web-ccoedemo-node/blob/main/azure-pipelines.yml) 和[部署方法](https://github.com/andyxuan2010/web-ccoedemo-node/blob/main/docs/DEPLOYMENT_METHODS.md)。
- [andyxuan2010/web-ccoedemo-dotnet](https://github.com/andyxuan2010/web-ccoedemo-dotnet) — ASP.NET Core 参考；参见[架构](https://github.com/andyxuan2010/web-ccoedemo-dotnet/blob/main/docs/ARCHITECTURE.md)、[流水线指南](https://github.com/andyxuan2010/web-ccoedemo-dotnet/blob/main/docs/PIPELINE.md)、[部署方式](https://github.com/andyxuan2010/web-ccoedemo-dotnet/blob/main/docs/DEPLOYMENT_METHODS.md)。
