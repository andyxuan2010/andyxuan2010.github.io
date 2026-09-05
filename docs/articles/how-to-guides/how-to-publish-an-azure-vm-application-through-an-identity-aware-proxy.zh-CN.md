---
title: "如何通过身份感知代理发布 Azure VM 应用"
summary: "通过 Microsoft Entra Application Proxy 在私有 Azure VM 上为批准的外部用户发布 Web 应用，并具有等效的 AWS 模式和控件。"
document_id: "HTG-33"
category: "操作指南与教程"
article_type: "how-to"
tags:
  - application-proxy
  - azure-vm
  - external-access
  - identity
  - reverse-proxy
  - aws
  - zero-trust
status: "published"
order: 330
version: "1.0"
last_updated: "2026-08-28"
review_status: "machine-validated"
review_cadence: "annual"
decision_status: "active"
owner: "云卓越中心"
audience:
  - 云架构师
  - 平台工程师
  - 网络工程师
  - 安全工程师
  - 应用负责人
environment_scope:
  - development
  - test
  - staging
  - production
cloud_scope:
  - Azure
  - AWS
related_document_ids:
  - HTG-17
  - HTG-18
  - HTG-19
  - NIS-04
  - NIS-09
---
> **文档类型：** 操作指南
> **规范性术语：** **MUST**、**MUST NOT**、**SHOULD**、**SHOULD NOT** 和 **MAY** 是要求级别。
> **适用范围：** 通过 Microsoft Entra Application Proxy 或 AWS 等效物发布私有 Azure VM 应用，并具有身份、网络和可观测性控制。
> **例外流程：** 偏离要求需要记录风险评估、补偿控制、指定风险负责人和到期日期。

|控制领域|价值|
|---|---|
|文件编号 | `HTG-33` |
|负责人|云卓越中心 |
|审核周期|至少每年一次，并且在重大代理、身份或工作负载发生变化之后 |
|证据|代理和连接器配置、身份策略、私有可达性、TLS 和运行状况测试、登录日志、后端日志和回滚证据 |

# 如何通过身份感知代理发布 Azure VM 应用

> **决策简述：** 在转发到私有后端之前进行身份验证，保持工作负载网络对互联网关闭，并关联身份、代理和应用证据。

> **文件类型：** 实施指南
> **主要示例：** 具有私有 Azure VM 的 Microsoft Entra Application Proxy
> **云范围：** Azure 和 AWS
> **运行原则：** 发布应用服务，而不是工作负载网络；转发前进行身份验证，保持后端私有，并使路径可监控。

## 目标

将 Azure Virtual Machines 上运行的 HTTP 或 HTTPS 应用公开给批准的外部用户，无需为应用 VM 分配公共 IP 或打开工作负载 VNet 的入站 Internet 端口。主要实现在 Azure 中的 Windows Server VM 上使用 Microsoft Entra Application Proxy 和私有网络连接器。

本指南还将设计映射到 AWS。它涵盖基于浏览器的 Web 应用和中小型合作伙伴或员工受众。它不会使虚拟机托管的应用适合匿名互联网规模、任意 TCP/UDP 或管理访问；当这些是实际要求时，请使用以下替代方案。

## 架构成果

用户到达公共应用 URL 并向身份提供商进行身份验证。然后，云代理或边缘服务仅将授权请求转发到私有应用端点。应用 VM 和连接器或目标 VM 没有公共入站路径。下图显示了主要的 Azure 模式和两个 AWS 等效模式。

![针对私有 VM 托管应用将 Azure Microsoft Entra Application Proxy 与 AWS ALB 身份验证和 AWS Verified Access 进行比较的架构图](../../assets/application-proxy-vm-external-access.svg)

### 信任边界

1. **公共客户端边界：** 浏览器或 API 客户端不受信任。它仅通过 HTTPS 到达代理或边缘主机名。
2. **身份边界：** Microsoft Entra ID、OIDC 提供商或 Amazon Cognito 对用户进行身份验证并评估策略。身份验证不是应用授权；应用仍然强制执行自己的角色和数据权限。
3. **代理边界：**代理终止外部会话并创建到后端的单独连接。 Azure 连接器使用与 Application Proxy 服务的出站连接；它不接受入站互联网连接。
4. **工作负载边界：** VM 通过私有 DNS 或私有 IP 寻址。网络控制仅允许经过批准的代理、负载均衡器或连接器路径到达应用端口。
5. **证据边界：** 身份、代理、网络、VM、应用和配置更改日志根据工作负载要求进行关联和保留。

## 选择解决方案

使用满足受众、协议、可用性和安全性要求的最窄服务。

|选项 |选择何时 |主要控制|重要限制 |
|---|---|---|---|
| Microsoft Entra Application Proxy |指定员工或合作伙伴用户需要浏览器访问、SSO、MFA、条件访问，并且没有 VNet 的入站路径 | Entra 预身份验证、用户/组分配、连接器组、私有后端、审核和登录日志 |仅网络协议；连接器在 Windows Server 上运行；应用许可和应用兼容性；不是匿名的公共入口|
|带有 WAF 的 Azure Application Gateway |应用面向互联网，需要区域第 7 层路由、WAF、TLS 终止、运行状况探测或会话关联 |公共侦听器、WAF 策略、私有后端、NSG、后端运行状况、诊断日志 |网关是公共入口点，必须作为边缘服务进行操作和保护；身份必须在网关或应用上实施 |
| Azure Front Door 标准/高级加私有源站 |用户遍及全球，应用需要全球边缘路由、WAF、加速或多区域故障转移 |Front Door WAF、来源保护、自定义域、支持的私有来源、运行状况探测 |增加全球边缘和成本；它不能替代应用授权|
| Azure VM 上的反向代理 |遗留应用需要托管服务未提供的特定重写、标头或协议行为 | NGINX、HAProxy 或 IIS 加固、TLS、WAF 或上游保护、虚拟机强化、运行状况和故障转移 |最高的运营负担和新的面向互联网的服务器；避免使用默认平台模式 |
| VPN 或 Microsoft Entra 私有访问 |访问权限应该是员工或托管设备的私有访问权限，而不是公开访问权限 |设备和身份策略、私有路由、按应用分段、无公共应用 URL |添加客户端或私有访问依赖项，这不是外部客户的正常选择 |

对于 AWS，将 HTTPS Application Load Balancer 与公共浏览器应用的 `authenticate-oidc` 或 `authenticate-cognito` 侦听器操作结合使用。当需要全球交付或边缘保护时，请使用 CloudFront 和 AWS WAF。当应用应保持私有性，同时仍可供经批准的外部用户在无需 VPN 的情况下访问时，将 AWS Verified Access 与内部 Application Load Balancer 结合使用。 AWS Systems Manager Session Manager 是管理路径，而不是公共 Application Proxy。

## 高级 Azure 设计
Microsoft Entra Application Proxy 是私有网络连接器前面的云服务。连接器是一个轻量级 Windows 代理，它与服务建立出站连接，然后连接到内部应用。 Microsoft 将此描述为仅出站模式：连接器不需要入站防火墙端口，并且应用可以在 Entra 身份验证后通过外部 URL 公开。

### 推荐的生产拓扑

- 将应用虚拟机置于没有公共 IP 的工作负载子网中。
- 使用区域支持的单独故障域或可用区，将至少两个连接器虚拟机放置在单独的连接器子网中。
- 通过 Azure NAT 网关或 Azure Firewall 为连接器 VM 提供受控的出站访问。允许 TCP 80 和 443 上记录在案的 Microsoft Entra 连接器目标。
- 仅允许来自连接器子网的应用端口。对于敏感数据，从连接器到应用首选 HTTPS。
- 使用 Azure Bastion、私有管理路径或受控跳转主机进行管理。不允许任一虚拟机使用互联网 RDP 或 SSH。
- 使用私有 DNS 作为内部应用名称。如果适用使用基于主机的路由或绝对 URL，请明确其内部和外部主机名行为。
- 将应用分配到专用于区域、网络边界或环境的连接器组。请勿在生产和非生产中共享一组不受限制的连接器。
- 将虚拟机、NSG、应用、连接器运行状况、Entra 登录、Entra 审核和配置更改遥测数据发送到批准的监控和证据系统。

Azure 连接器组是一个逻辑高可用性单元。 Microsoft 建议在一个组中至少使用两个连接器，并解释说流量在连接器之间分配，而没有保证会话关联性。如果后端需要粘性会话，请使用 cookie 感知的第 7 层后端或重新设计应用以在单个虚拟机外部存储会话状态。

### 应用兼容性

Application Proxy 非常适合 HTTP/HTTPS Web 应用和一些 API。在承诺之前确认以下内容：

- 可以通过配置的内部 URL 从连接器 VM 访问应用；
- 重定向、绝对 URL、cookie、WebSocket、大上传、长期连接和健康端点通过代理运行；
- 应用仅信任来自连接器或批准的内部代理的转发标头；
- 应用经过 Entra 认证后具有独立的授权模型；
- 集成的 Windows 身份验证是经过精心处理的。 IWA SSO 可能需要域加入和 Kerberos 约束委派；
- 应用不依赖于代理不支持的任意 TCP/UDP、源 IP 关联或直接入站回调。

## 先决条件

在改变生产之前，获取：

- Azure 订阅、Microsoft Entra 租户和应用管理员或委派的同等人员；
- 支持 Application Proxy 的 Microsoft Entra ID 许可，通常是目标租户的 P1 或 P2；
- 如果需要自定义 Application Proxy 域，则需要批准的公共 DNS 区域和 PFX 格式的证书；
- 已修补、适当备份并可通过记录在案的 HTTP/HTTPS 端口私下访问的应用 VM；
- 具有当前支持的 .NET 和连接器先决条件的 Windows Server 2016 或更高版本连接器 VM 镜像。使用当前支持的 Windows Server 镜像进行新部署；
- 用于生产的两个连接器虚拟机、一个连接器组分配以及记录在案的出站出口路径；
- 应用端口、DNS 记录、身份策略、日志记录和外部暴露的网络和安全审批；
- 测试用户组和回滚所有者。切勿首先使用唯一的生产管理员账户进行测试。

## 实现 Azure 环境

以下命令是说明性拓扑脚手架。替换占位符值，使用组织批准的命名和标记模块，并通过审查的 Bicep 或 Terraform 部署持久资源。这些命令不会为应用或连接器虚拟机创建公共 IP。

### 创建私有子网和安全边界

为工作负载和连接器层创建单独的子网。单独保留 Azure Bastion 子网或批准的私有管理路径。使用 NAT 网关或 Azure Firewall 作为连接器出口；没有出口的子网无法注册或操作连接器。
```powershell
az group create --name <resource-group> --location <region>

az network vnet create `
  --resource-group <resource-group> `
  --name <vnet-name> `
  --address-prefixes 10.40.0.0/16 `
  --subnet-name snet-app `
  --subnet-prefixes 10.40.1.0/24

az network vnet subnet create `
  --resource-group <resource-group> `
  --vnet-name <vnet-name> `
  --name snet-connector `
  --address-prefixes 10.40.2.0/24

az network nsg create --resource-group <resource-group> --name nsg-app
az network nsg create --resource-group <resource-group> --name nsg-connector

az network vnet subnet update `
  --resource-group <resource-group> `
  --vnet-name <vnet-name> `
  --name snet-app `
  --network-security-group nsg-app

az network vnet subnet update `
  --resource-group <resource-group> `
  --vnet-name <vnet-name> `
  --name snet-connector `
  --network-security-group nsg-connector
```
在策略即代码中定义最终规则。预期的最小值是：

|资源 |入境 |出境 |
|---|---|---|
|应用 VM NSG |仅来自连接器子网或经批准的内部网关的应用端口；仅从 Bastion 或管理子网进行管理 |所需的应用依赖项、监控、更新和 DNS 目标 |
|连接器 VM NSG |仅从 Bastion 或管理子网进行管理；没有来自互联网的应用端口 | TCP 443 到 Microsoft Entra Application Proxy 目标，TCP 80 用于证书吊销下载；DNS 和所需的更新目标 |
| NAT 网关或 Azure Firewall |不是应用的入站侦听器 |记录连接器出口、日志记录和威胁控制 |

不要在应用 VM 规则上使用广泛的 `0.0.0.0/0` 源。 Azure Application Proxy 流量通过连接器的出站会话到达连接器，因此来自公共 Internet 的入站规则既不需要也不可取。

### 私有部署应用 VM

在没有公共 IP 的情况下创建或移动应用 VM 到 `snet-app`。将应用绑定到记录在案的私有侦听器并公开一个运行状况端点，该端点返回有意义的状态而不会泄露机密。
```powershell
az vm create `
  --resource-group <resource-group> `
  --name <app-vm-name> `
  --image <approved-image> `
  --size <approved-size> `
  --vnet-name <vnet-name> `
  --subnet snet-app `
  --public-ip-address "" `
  --admin-username <break-glass-or-bootstrap-user> `
  --ssh-key-values <approved-public-key-or-secret-reference>
```
对于 Windows 应用 VM，请使用组织批准的 Windows 镜像和管理路径，而不是 SSH 示例。重要的属性是私有放置、无公共 IP、修补、端点保护、备份策略以及可从连接器子网访问的应用侦听器。

在发布之前，从每个连接器 VM 验证内部名称、端口、证书链和运行状况端点：
```powershell
Resolve-DnsName app.internal.example.com
Test-NetConnection app.internal.example.com -Port 443
Invoke-WebRequest https://app.internal.example.com/health -UseBasicParsing
```
如果适用内部仅支持 HTTP，则仅在批准连接器到 VM 风险后才使用 `http://app.internal.example.com:8080` 作为内部 URL。外部 URL 应仍需要 HTTPS。

### 部署并注册连接器虚拟机

在 `snet-connector` 中创建两个 Windows Server 连接器 VM。在支持的情况下使用单独的区域或故障域，并且不要将两个连接器放置在一个未经测试的出口依赖项后面。当需要集成 Windows 身份验证时，连接器计算机可以加入域；否则，请使用最低特权支持的配置。
```powershell
az vm create `
  --resource-group <resource-group> `
  --name <connector-vm-01> `
  --image Win2022Datacenter `
  --size Standard_D2s_v5 `
  --vnet-name <vnet-name> `
  --subnet snet-connector `
  --public-ip-address "" `
  --zone 1 `
  --admin-username <bootstrap-user> `
  --admin-password <approved-bootstrap-password>

az vm create `
  --resource-group <resource-group> `
  --name <connector-vm-02> `
  --image Win2022Datacenter `
  --size Standard_D2s_v5 `
  --vnet-name <vnet-name> `
  --subnet snet-connector `
  --public-ip-address "" `
  --zone 2 `
  --admin-username <bootstrap-user> `
  --admin-password <approved-bootstrap-password>
```
确切的镜像、SKU、区域和引导机制是环境决策。请勿将占位符凭据复制到命令历史记录或流水线日志中。首选 Azure Bastion、即时访问、专用运行器或一次性管理工作流程。

在每个虚拟机上：

1. 应用批准的 Windows 基准、更新、端点保护、时间同步和监控。
2. 通过批准的 NAT 网关或 Azure Firewall 验证 DNS 解析和出站 TCP 80/443。
3. 从 Microsoft Entra 管理中心下载当前的 Microsoft Entra 私有网络连接器。将其安装在 VM 上并将其注册到承载 Application Proxy 应用的同一租户。
4. 确认连接器组中的两个连接器均处于**活动**状态。保持连接器自动更新处于启用状态。
5. 如果需要出站代理，请使用支持的连接器过程进行配置。除非 Microsoft 明确支持该设计，否则请勿终止或内联检查连接器的出站 TLS 会话。
6. 当 Application Proxy 发布需要时，在运行 Windows Server 2019 或更高版本的连接器服务器上禁用 HTTP/2，并在推出之前验证当前的连接器文档。

连接器使用与 Microsoft 服务和应用的出站连接。它不会将连接器虚拟机变为公共反向代理侦听器。将连接器虚拟机视为特权基础架构代理：对其进行修补、监视、限制管理以及通过信任边界隔离连接器组。

### 在 Microsoft Entra ID 中发布应用

在 Microsoft Entra 管理中心：

1. 转至 **Entra ID > 企业应用 > 新建应用 > 添加本地应用**。
2. 设置明确的应用名称并使用为此工作负载创建的连接器组。
3. 将**内部 URL** 设置为已从连接器测试的 URL，例如 `https://app.internal.example.com`.
4. 将**预身份验证**设置为**Microsoft Entra ID**。当设计需要在请求到达私有网络之前进行 Entra 预身份验证和条件访问时，请勿选择直通。
5. 使用生成的 `msappproxy.net` URL 进行第一次测试。仅在应用与默认端点配合使用后才配置自定义域。
6. 在**用户和组**下分配测试用户组。当应用是 API 或故意不列出的服务时，请在“我的应用”门户中隐藏该应用。
7. 配置适当的 SSO 模式。仅当应用需要并且域信任、SPN、委派和连接器身份得到批准时，才使用集成 Windows 身份验证和 KCD。
8. 对于 2026 年 6 月 30 日之后创建的新 Application Proxy 企业应用，当门户请求时，明确授予所需的 `User.Read` 委派权限和管理员同意。
9. 测试来自非托管网络和预期托管设备策略的外部 URL。确认未分配的用户、策略失败的设备和失败的 MFA 质询均被拒绝。
Application Proxy 处理 Front Door 身份验证决策，但应用仍然必须授权操作、租户、角色和数据。请勿将 Entra 应用分配中的成员资格视为应用授权的替代品。

### 配置自定义域和证书

当应用具有绝对链接、SAML 或严格的重定向 URI 要求、品牌要求或需要保留一个稳定的外部名称时，请使用自定义域。

1. 验证 Microsoft Entra ID 中的自定义域。
2. 在 Application Proxy 应用中，上传批准的 PFX 证书并选择自定义外部 URL。
3. 添加公共 DNS 提供商处的 Application Proxy 门户显示的 CNAME 记录。将外部名称指向 Application Proxy `msappproxy.net` 名称，而不是专用 VM IP。
4. 如果内部和外部用户应使用相同的主机名，请有意实施拆分 DNS。内部解析必须返回批准的私有路径；外部解析必须返回 Application Proxy 端点。
5. 确认证书到期告警并记录谁负责更新。当 Application Proxy 应用或租户停用时删除 DNS 记录，以防止悬空别名。

### 添加可观测性和操作控制

将外部请求 ID、Entra 登录、连接器活动、私有 VM Web 日志和产品公开字段的应用事务 ID 关联起来。监控：

- Entra 登录失败、条件访问结果、异常位置、不可能的旅行、有风险的用户和分配更改；
- 连接器活动/非活动状态、服务重启、更新状态、CPU、内存、临时端口压力和出站连接；
- 应用响应代码、延迟、健康端点状态、重定向、身份验证失败和会话行为；
- NSG 流日志或等效网络遥测、DNS 解析、NAT 或防火墙出口以及意外的公共 IP 关联；
- 证书过期、DNS 更改、虚拟机补丁状态、备份状态和配置漂移。

保留连接器丢失的操作手册。单个连接器故障不应中断服务。连接器组或区域故障需要记录恢复路径，例如第二个连接器组、第二个区域应用或计划迁移到边缘服务。

## 实现 AWS 等效项

AWS 没有 Microsoft Entra Application Proxy 的单一产品副本。选择所需边界的等效项：

|要求 | AWS 实施 |流量|
|---|---|---|
|身份预认证公共浏览器应用|使用 OIDC 或 Amazon Cognito 进行 HTTPS 侦听器身份验证的公共 Application Load Balancer | Route 53 或 CloudFront -> ALB 身份验证操作 -> 私有 EC2 目标组 |
|全球公共交付和边缘保护|具有 AWS WAF 和 ALB 或 VPC 源的 CloudFront |路由 53 -> CloudFront/WAF -> ALB 或私有 VPC 源 -> EC2 |
|未经批准的外部用户的私有应用，无需 VPN |通过信任提供商和内部 ALB 端点进行 AWS Verified Access |公共 Verified Access 端点 -> 策略评估 -> 内部 ALB -> 私有 EC2 |
|管理虚拟机访问 | AWS Systems Manager 会话管理器 | AWS Systems Manager 操作员身份->SSM->EC2；没有公共应用端点|

### 公共 ALB 实施

1. 创建一个具有至少两个可用区子网的 VPC。将 ALB 放置在适合面向 Internet 的负载均衡器的子网中，并将 EC2 实例放置在私有应用子网中。
2. 创建单独的安全组。允许从目标客户端群到 ALB 安全组的 TCP 443。允许 EC2 安全组仅接收来自 ALB 安全组的目标端口和运行状况检查端口。不允许 `0.0.0.0/0` 连接 EC2 应用端口。
3. 启动没有公共 IPv4 地址的 EC2 实例。使用 Systems Manager 进行管理，并为所需的操作系统和管理出口提供 NAT 或 VPC 端点。
4. 创建具有专用运行状况路径的 HTTP 或 HTTPS 目标组。在添加侦听器规则之前，跨可用区注册实例并验证目标运行状况。
5. 请求公共证书或将其导入 AWS Certificate Manager。在端口 443 上创建 HTTPS 侦听器，如果启用了端口 80，则将 HTTP 重定向到 HTTPS。
6. 添加应用于公司 IdP 的 `authenticate-oidc` 操作或应用于 Amazon Cognito 的 `authenticate-cognito`，然后添加到目标组的转发操作。向 IdP 注册准确的 ALB 或自定义域回调 URI。 HTTPS 侦听器支持 ALB 身份验证操作。
7. 创建 ALB 的 Route 53 别名，或将 CloudFront 放在 ALB 前面。如果 CloudFront 前面经过身份验证的 ALB，则转发身份验证 cookie、查询字符串和所需标头；不要缓存经过会话策略的经过身份验证的响应。
8. 根据需要将 AWS WAF 与 CloudFront 或 ALB 关联。从测量模式下的托管规则开始，调整范围较小的排除，然后强制执行。启用 ALB 访问日志、WAF 日志、CloudTrail、CloudWatch 指标、VPC 流日志和 EC2/应用日志。

AWS 安全组支持引用 ALB 安全组作为 EC2 入口规则的源。这种基于身份的网络关系比单独信任 ALB 子网 CIDR 更好，但它不能取代应用授权或主机强化。

### Verified Access 实施

当要求比普通匿名公共站点更接近私有身份感知访问时，请使用 Verified Access：

1. 在与私有 EC2 目标相同的 VPC 中创建内部 ALB。将 EC2 安全组限制为 ALB 安全组。
2. 为员工或客户身份创建 Verified Access 信任提供商，并定义表达用户、设备和上下文要求的 Verified Access 组策略。
3. 创建负载均衡器 Verified Access 端点。 AWS 需要内部 ALB 或 NLB、公共应用域以及名称与该域匹配的公共证书。
4. 将公共 DNS 名称路由到 Verified Access 端点，并使用预期的客户端状态测试允许和拒绝路径。
5. 启用 Verified Access 日志并将策略决策与 ALB、EC2、应用和身份提供商证据相关联。
Verified Access 根据信任数据和策略评估每个应用请求，并拒绝访问，直到策略允许为止。它不是 ALB、WAF 或应用授权的通用替代品。在选择之前验证协议、WebSocket、客户端 IP、会话和区域可用性要求。

## 安全设计要求

- 当所选代理或负载均衡器可以使用私有寻址时，请勿将公共 IP 分配给应用 VM、连接器 VM 或 EC2 目标。
- 请勿通过公共应用侦听器公开 RDP、SSH、WinRM、数据库端口或云管理端口。
- 有意终止并重新建立 TLS。当代理支持时验证后端证书和主机名；记录任何异常情况。
- 将后端限制为代理或负载均衡器路径，并测试直接 IP、备用主机名和旁路尝试。
- 使用托管身份、实例配置文件或云 API 的短期联合。不要将长期存在的云密钥放置在虚拟机或应用配置中。
- 将 `X-Forwarded-For`、OIDC 声明和代理添加的标头视为不可信，直到验证其来源、签名和信任边界。
- 将 WAF 用于需要常见 Web 漏洞利用保护的公共应用。单纯的身份预认证并不是 WAF。
- 在了解客户端身份和路由的层应用速率限制和滥用控制。保护应用免受昂贵或无限制的请求的影响。
- 使用单独的连接器组、ALB、策略和日志范围进行生产。记录所有者、到期日和补偿控制的异常情况。

## 验证

- [ ] 外部主机名解析为批准的代理或边缘服务，而不解析为 VM 公共 IP。
- [ ] HTTPS 证书、重定向 URI、主机头、cookie 和重定向行为正确。
- [ ] 已分配的合规用户可以访问应用，而未分配或策略失败的用户则不能。
- [ ] 应用授权仍会拒绝经过身份验证的用户，而无需所需的应用角色或租户权限。
- [ ] 应用 VM 和连接器或 EC2 目标没有公共管理或应用入口。
- [ ] 后端安全规则仅允许来自连接器、ALB 或批准的内部网关的流量。
- [ ] 连接器组、区域、目标和运行状况探测故障行为经过测试和日志记录。
- [ ] 直接 IP、备用主机名、伪造转发标头和旁路路径测试安全失败。
- [ ] 身份、代理、网络、VM 和应用日志将代表性请求关联起来，而不记录机密或令牌。
- [ ] 测试了证书续订、DNS 回滚、连接器更换、VM 恢复和边缘策略回滚。
- [ ] 成本、延迟、吞吐量、上传大小、长期连接和峰值并发与工作负载目标相匹配。

## 故障排除或回滚

|症状|可能的边界 |检查和行动|
|---|---|---|
|Application Proxy URL 无法访问 | DNS、Entra 应用或连接器组 |检查外部 DNS 记录、应用状态、用户分配、连接器状态和 Entra 登录结果。第一个修复方法是不要打开入站 VM 端口。 |
|连接器处于非活动状态 |出口、服务、证书或补丁状态 |检查 Windows 服务、连接器事件日志、DNS、出站 TCP 80/443、所需的 Microsoft 目标、时间和证书续订。一次修理或更换一个连接器。 |
|连接器处于活动状态，但后端出现故障 |私有 DNS、路由、NSG、端口或应用侦听器 |运行 `Resolve-DnsName`、`Test-NetConnection` 以及来自每个连接器的经过身份验证的运行状况请求。将配置的内部 URL 与工作负载专用 URL 进行比较。 |
|登录循环或重定向到内部名称 | URL 转换、自定义域、cookie 或应用配置 |尽可能使用一个稳定的主机名，配置自定义 DNS 和证书，检查重定向 URI，并修复应用绝对 URL。 |
| AWS ALB 身份验证循环 | HTTPS 侦听器、回调 URI、cookie 或 CloudFront 转发 |确认准确的小写回调 URL、HTTPS 端到端、通过 CloudFront 转发的查询字符串和 Cookie，以及每个应用的唯一 Cookie 名称。 |
|后端可直接访问 |公共 IP、宽松的安全规则、路由或备用主机名 |删除公共地址，收紧 NSG/安全组规则，删除绕过 DNS，并重新运行直接 IP 和直接主机测试。 |

对于回滚，首先禁用或删除外部路由或应用分配，同时保持专用应用正常运行。然后恢复之前的 DNS 或边缘配置，验证未暴露直接公共访问，并保留身份、代理、网络和应用日志。仅在了解 DNS TTL、活动会话和恢复证据后才删除连接器或边缘资源。

## 相关主题

- [如何配置云防火墙、出口控制和路由检查](how-to-configure-firewalls-egress-and-route-inspection.md)
- [如何选择应用流量和负载均衡服务](how-to-select-application-traffic-services.md)
- [如何实现私有云资源零信任管理](how-to-implement-zero-trust-private-administration.md)
- [防火墙、路由和网络安全控制](../networking-identity-security/nis-firewalls-routing-and-network-security-controls.md)
- [零信任和私有访问设计](../networking-identity-security/nis-zero-trust-and-private-access-design.md)

## 官方参考文档

- [Microsoft Entra Application Proxy 概述](https://learn.microsoft.com/en-us/entra/identity/app-proxy/overview-what-is-app-proxy)
- [Microsoft Entra 私有网络连接器](https://learn.microsoft.com/en-us/entra/global-secure-access/concept-connectors)
- [为 Microsoft Entra Private Access 和 Application Proxy Config Connector](https://learn.microsoft.com/en-us/entra/global-secure-access/how-to-configure-connectors)
- [Application Proxy 高可用性和负载均衡](https://learn.microsoft.com/en-us/entra/identity/app-proxy/application-proxy-high-availability-load-balancing)
- [在 Microsoft Entra Application Proxy 中配置自定义域](https://learn.microsoft.com/en-us/entra/identity/app-proxy/how-to-configure-custom-domain)
- [添加本地应用以通过 Application Proxy 进行远程访问](https://learn.microsoft.com/en-us/entra/identity/app-proxy/application-proxy-add-on-premises-application)
- [Azure Application Gateway 概述](https://learn.microsoft.com/en-us/azure/application-gateway/overview)
- [Azure Front Door 概述](https://learn.microsoft.com/en-us/azure/frontdoor/front-door-overview)
- [使用 AWS Application Load Balancer 对用户进行身份验证](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/listener-authenticate-users.html)
- [AWS Application Load Balancer 安全组](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-update-security-groups.html)
- [AWS Verified Access](https://docs.aws.amazon.com/verified-access/latest/ug/what-is-verified-access.html)
- [为 AWS Verified Access 创建负载均衡器端点](https://docs.aws.amazon.com/verified-access/latest/ug/create-load-balancer-endpoint.html)
- [限制对 CloudFront 后面的 Application Load Balancer 的访问](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/restrict-access-to-load-balancer.html)
