---
title: "内部应用发布 — Microsoft Entra Application Proxy"
summary: "定义 Microsoft Entra Application Proxy 何时应使用 Entra SSO、条件访问、MFA、出站连接器和可选的 Kerberos 约束委派向远程用户发布专用 Web 应用。"
document_id: "ES-08"
category: "企业解决方案"
article_type: "architecture"
tags:
  - application-proxy
  - entra-id
  - sso
  - conditional-access
  - mfa
  - kerberos
  - private-access
  - legacy-modernization
status: "published"
order: 80
version: "1.0"
last_updated: "2026-08-28"
review_status: "machine-validated"
review_cadence: "annual"
decision_status: "active"
owner: "云卓越中心"
audience:
  - 企业架构师
  - 身份架构师
  - 安全工程师
  - 平台工程师
  - 网络工程师
  - 应用负责人
  - 操作工程师
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
  - ES-01
  - HTG-33
  - NIS-09
  - NIS-10
  - ORF-06
---
> **文档类型：**企业架构参考模型
> **规范性术语：** **MUST**、**MUST NOT**、**SHOULD**、**SHOULD NOT** 和 **MAY** 是要求级别。
> **适用范围：** 安全远程用户访问私有 HTTP 或 HTTPS Web 应用，包括尚无法直接使用 Microsoft Entra ID 进行身份验证的旧应用。
> **例外流程：** 偏离要求需要记录风险评估、补偿控制、指定风险负责人和到期日期。

|控制领域|价值|
|---|---|
|文件编号 | `ES-08` |
|负责人|云卓越中心 |
|审核周期|至少每年一次并在 Microsoft Entra、Application Proxy、连接器、条件访问、Kerberos、DNS、证书、网络或应用身份验证发生重大更改之后 |
|证据|已发布的应用日志、用户和组分配、条件访问策略、连接器组拓扑、后端授权、SSO 测试、网络审查、登录日志和运营就绪情况审查 |

# 内部应用发布 — Microsoft Entra Application Proxy

> **简要决定：** 使用 Application Proxy 对私有 Web 应用进行身份识别访问。它不是一般的网络隧道、API 网关或机器到机器的传输。

## 目的

此体系结构使用 Microsoft Entra Application Proxy 为远程用户发布专用 Web 应用，而无需打开私有网络的入站防火墙端口。用户访问外部应用 URL 或门户，使用 Microsoft Entra ID 进行身份验证，通过条件访问和多重身份验证要求，并通过仅出站连接器通过 Application Proxy 服务转发到私有后端。

使用 Application Proxy 进行 Microsoft Entra SSO、条件访问和 MFA、对旧版 Web 应用的外部访问以及通过 Kerberos 约束委派进行集成 Windows 身份验证。它主要是一种用户到 Web 应用的访问模式。它不是一般的网络连接、ExpressRoute、VPN 网关、Virtual WAN 或内部私有访问的替代品，也不是任意的机器对机器集成传输。

[如何通过身份感知代理发布 Azure VM 应用](../how-to-guides/how-to-publish-an-azure-vm-application-through-an-identity-aware-proxy.md) 指南提供了私有 VM 托管应用的实现详细信息。该架构文档定义了可复用平台边界和服务选择决策。

## 范围和设计成果

当远程用户需要执行以下操作时，请使用此模型：

- 从私有网络外部访问内部 HTTP 或 HTTPS 业务线应用；
- 通过 Microsoft Entra ID 进行身份验证并使用 SSO，而不是在支持的情况下使用单独的应用登录；
- 在请求到达后端之前应用条件访问、MFA、身份风险、位置、设备、会话或用户分配控制；
- 发布旧版 Web 应用，而无需创建到应用网络的入站互联网路由；
- 支持使用 Kerberos 约束委派的集成 Windows 身份验证；
- 提供稳定的外部主机名，同时保持应用内部 URL 的私有性；或
- 使用记录在案的 Microsoft Entra 身份验证模式向批准的客户端公开有界 Web API。

目标结果是：

- 每个已发布的应用都有企业所有者、应用所有者、身份所有者、连接器所有者、受众、数据分类以及退休或现代化计划；
- 用户通过 Microsoft Entra ID 进行预先身份验证，并通过用户、组或批准的权利工作流程明确分配；
- 在会话到达私有应用之前评估条件访问和 MFA 要求；
- 连接器组具有高可用性、修补性、受监控性，并放置在靠近后端及其身份依赖项的位置；
- 连接器路径不需要打开入站互联网防火墙；
- 后端应用授权保持独立于 Entra 登录和代理发布；
- 测试已发布的主机名、证书、DNS、cookie、重定向、标头和会话行为；和
- Application Proxy 不用于提供任意网络可达性或隐藏的机器对机器集成。

## 背景和决策驱动因素

旧版 Web 应用通常依赖于内部 DNS、集成 Windows 身份验证、私有网络路径或特定于应用的会话。将每个应用迁移到现代身份协议或公共边缘可能需要比业务访问需求所允许的时间更长的时间。受控的身份感知代理可以提供过渡性的、有时是长期的用户访问边界，同时保持应用的私有性。

该决定的驱动因素是：

- **受众：** 指定的员工、合作伙伴或来宾用户，而不是任意匿名互联网流量或不受管理的计算机客户端。
- **协议：** 基于浏览器的 HTTP 或 HTTPS，支持 Web 身份验证和会话行为。
- **身份：** 需要 Microsoft Entra 身份验证、SSO、条件访问、MFA 和应用分配。
- **网络暴露：** 后端不得要求入站公共防火墙端口或公共虚拟机地址。
- **旧版兼容性：** 后端使用 IWA、表单、基于标头、基于密码、SAML 或其他支持的身份验证模式。
- **应用形状：** 应用可以容忍代理终止、主机转换、cookie、重定向、标头和连接器路径。
- **操作：** 团队可以操作连接器主机、身份依赖项、DNS、证书、后端运行状况和登录证据。
- **边界适合：** 要求是用户到 Web 应用的访问，而不是网络级访问、任意 TCP/UDP 或批量集成。

## 考虑的选项

### Microsoft Entra Application Proxy

当指定远程用户需要通过 Entra 预身份验证、SSO、条件访问、MFA 和出站连接器路径安全访问私有 Web 应用时，请使用 Application Proxy。使用具有冗余连接器和专用后端的连接器组。当 IWA 应用要求连接器代表用户向后端进行身份验证时，请使用 KCD。

### Microsoft Entra Private Access 或其他身份识别私有访问服务
当用户需要访问已发布的 Web 应用之外的私有网络资源（包括服务支持的更广泛的专用应用或网段）时，请使用 [Microsoft Entra Private Access](https://learn.microsoft.com/en-us/entra/global-secure-access/concept-private-access) 或经批准的零信任网络访问服务。选择最窄的应用感知边界；不要将 Application Proxy 变成私有访问服务的替代品。

### ExpressRoute、VPN 网关或 Virtual WAN

使用[混合网络连接 - ExpressRoute、VPN 网关和 Virtual WAN](../networking-identity-security/nis-hybrid-network-connectivity-expressroute-vpn-gateway-virtual-wan.md) 在用户、分支机构、数据中心和 Azure 网络之间建立网络连接。这些服务解决路由和中转问题，而不是用户预身份验证、SSO、条件访问或后端 Web 会话中介。网络可达性仍然 MUST 与身份和应用授权相结合。

### API Management

使用 [API 主导的集成 - Azure API Management](api-led-integration-azure-api-management.md) 进行受管理的 API 发布、API 产品、JWT 验证、配额、转换、速率限制、API 发现和机器对机器消费者。Application Proxy MAY 在支持的场景中发布有界的 Web API，但当需求是企业 API 平台时，它不应该取代 API 网关。

### Application Gateway、Front Door 或公共网络边缘

当应用需要 WAF、全局路由、TLS 和证书管理、运行状况探测、大容量匿名访问、区域故障转移或 L7 流量管理时，请使用 Application Gateway 或全局边缘。这些服务不会自动提供相同的 Entra 用户预身份验证和条件访问边界；需要时将它们与批准的身份模式结合起来。

### 将应用现代化为 Microsoft Entra 身份验证

当应用的生命周期、安全性、用户体验、规模、协议和工程能力证明直接 Microsoft Entra 身份验证合理时，对应用进行现代化改造。直接现代化可以消除代理兼容性约束并减少连接器依赖性，但它需要应用代码、令牌验证、角色和租户授权、测试以及受控迁移。

### 选择方向：Microsoft Entra Application Proxy

当 Entra 身份策略和无入站防火墙开放是主要设计驱动因素时，使用 Application Proxy 来安全地远程用户访问私有 Web 应用。保持后端私有，使用仅出站连接器，选择正确的 SSO 方法，并保留应用级授权。当需求是一般网络连接、任意协议访问、大容量公共边缘交付、受管理的 API 或机器对机器集成时，请使用其他服务。

## 参考架构

![使用 Microsoft Entra Application Proxy 的内部应用发布架构](../../assets/internal-application-publication-entra-application-proxy-architecture.svg)
用户到达已发布的外部 URL 并被重定向到 Microsoft Entra ID 进行预身份验证。条件访问和 MFA 在 Application Proxy 接受会话之前评估登录。Application Proxy 服务将请求传递到分配的连接器组中的可用连接器。连接器打开或维护到云服务的出站连接，并使用其私有网络路径连接到专用 Web 应用。

对于 IWA，连接器使用 Kerberos 约束委派代表用户向后端应用进行身份验证。应用仍然负责其自身的授权、角色、租户检查、数据访问以及标头和声明的安全处理。连接器组、后端、Active Directory、DNS、证书、防火墙出口和监控路径是已发布应用的操作依赖项。

[Microsoft Entra Application Proxy 概述](https://learn.microsoft.com/en-us/entra/identity/app-proxy/overview-what-is-app-proxy) 记录了用户、Microsoft Entra ID、Application Proxy 服务、私有网络连接器、Active Directory 和后端应用流。在应用日志中明确公共和私有信任边界，并测试允许和拒绝的路径。

## 应用发布模型

### 已发布的应用日志记录

每个已发布的应用 MUST 有一条日志记录，其中包含：

- 应用名称、所有者、业务能力、环境和重要性；
- 内部 URL、外部 URL、自定义域、DNS 所有者和证书所有者；
- 连接器组、连接器主机、后端服务器、端口、私有 DNS 和防火墙出口；
- Microsoft Entra 预认证模式和 SSO 方法；
- 分配的用户、组、合作伙伴或来宾范围以及权利流程；
- 条件访问、MFA、会话、登录风险、设备、位置和访问审核策略；
- 后端身份验证、授权、角色、租户边界以及服务账户或 SPN 详细信息；
- 数据分类、日志、保留、隐私和监管要求；
- 预期用户、并发性、请求大小、上传和下载行为、延迟和可用性；
- 支持路径、事件所有者、证书和凭据轮换以及恢复程序；和
- 现代化、审查和退役日期。

不要发布具有无主外部主机名、未知后端、共享特权连接器、未记录的身份验证模式或无法立即删除访问权限的应用。

### 用户请求流程

正常的预认证流程是：

1. 用户打开已发布的外部 URL 或从批准的门户中选择应用。
2. Microsoft Entra ID 对用户进行身份验证并评估分配、条件访问、MFA、登录风险、设备、位置和会话策略。
3. Application Proxy 服务接受授权会话并选择应用的连接器组。
4. 可用连接器通过其与 Application Proxy 服务的出站连接接收请求。
5. 连接器通过批准的私有路径连接到内部 Web 应用。
6. 后端根据选择的 SSO 方法对请求进行身份验证并强制执行应用授权。
7. 响应通过连接器和 Application Proxy 服务返回给用户。

身份决策和应用决策是分开的。通过 Entra 身份验证的用户仍可能被应用角色、租户、资源或数据授权拒绝。相反，应用的内部登录屏幕并不能证明绕过所需的 Entra 预身份验证和条件访问策略。

### HTTP 和 HTTPS 兼容性

Application Proxy 专为 Web 应用而设计。验证 URL 转换、主机标头、绝对重定向、cookie、WebSocket 或需要时的长期连接、上传、下载、请求大小、响应大小、压缩、客户端 IP 标头、TLS 终止、后端证书和会话关联。

代理终止外部连接并重新建立后端连接。不要假设后端看到原始 TLS 会话、源 IP、浏览器连接或客户端证书。将转发的标头视为不可信，直到日志记录和测试受信任的代理路径、标头行为和后端验证。

如果适用嵌入绝对内部 URL、硬编码端口、非公共重定向或特定于域的 cookie 范围，请配置支持的 URL 转换或对应用进行现代化改造。不要通过公开内部主机名或打开直接公共路径来解决重定向循环。

### 外部和内部访问

对远程用户使用外部 URL，对网络内部的用户使用内部 URL 或批准的门户体验，以提供预期的用户体验。仅当其所有权、解析、证书、路由和监控明确时才定义拆分 DNS。

Application Proxy 主要用于远程访问。Microsoft 警告说，使用它进行内联网访问可能会带来延迟；对应用进行现代化改造，以直接使用 Microsoft Entra ID 进行身份验证，或者在主要受众已位于私有网络上时使用合适的内部访问模式。

## 身份和 SSO

### Microsoft Entra 预身份验证

当应用在请求到达私有网络之前需要 Entra 身份验证、分配、条件访问、MFA、身份保护或登录证据时，请使用 Microsoft Entra 预身份验证。直通预身份验证不提供相同的 Entra 身份验证和条件访问边界；仅将其用于明确记录在案的具有补偿控制的兼容性要求。

应用分配 MUST 是明确的。使用具有所有者、批准、访问审查、加入者-移动者-离开者处理和紧急移除路径的组或权利工作流程。来宾或合作伙伴访问 MUST 定义租户、赞助商、身份验证强度、数据范围、会话和卸载控制。

### 条件访问和 MFA
条件访问策略 SHOULD 表达实际风险和用户上下文：所需的身份验证强度、MFA、合规设备、登录风险、位置、客户端类型、会话控制和批准的适用范围。测试允许、拒绝、升级、过期会话、风险登录、非托管设备和紧急访问行为。

不要依赖恰好涵盖该应用的广泛策略。记录策略 ID、排除项、break-glass 设计、评估证据和变更所有者。服务账户、管理员或合作伙伴用户的策略排除是一种高风险例外，需要明确审查。

### 登录方法

从应用的实际协议中选择后端 SSO 方法：

|后台认证 |Application Proxy 模式|控制和限制|
|---|---|---|
|集成 Windows 身份验证 | Microsoft Entra 预身份验证加上 Kerberos 约束委派 |需要连接器和后端域信任、SPN、委派范围、时间同步和应用授权 |
|基于表单或密码的登录 |在适当的情况下使用受支持的基于密码的 SSO 进行 Entra 预身份验证 |请勿在批准的 Entra 和应用机制之外存储或重复使用凭证；测试密码轮换和账户锁定 |
|基于标头的身份验证 |支持的基于标头的合作伙伴集成或应用模式 |验证可信标头源、声明映射、抗欺骗性和后端授权 |
| SAML 或 WS-Federation |支持 Microsoft Entra 联合的 SSO |验证受众、回复 URL、证书、声明、时钟偏差和注销行为 |
|现代 OIDC 或 OAuth 应用 |更喜欢直接 Microsoft Entra 身份验证或受管理的 API/Application Gateway |当应用可以安全地验证令牌并直接强制执行角色时，避免添加代理层 |

不要声称 Application Proxy 使应用变得现代。提供访问边界和兼容路径；应用仍然负责协议正确性、授权、安全会话处理和数据保护。

## Kerberos 约束委派

当 Web 应用使用集成 Windows 身份验证并且连接器必须代表登录用户向后端进行身份验证时，请使用 KCD。根据支持的设计，连接器主机和应用服务器 MUST 加入域或位于受信任的域中。应用服务主体名称、委派权限、用户标识符映射、DNS、时间同步和后端身份验证行为必须正确。

KCD SHOULD 仅限于所需的确切后端服务主体和连接器机器或服务身份。不要仅仅为了让第一次测试通过而授予无限制的委派或广泛的委派。记录 SPN、服务账户、连接器组、委派所有者、域信任和更改过程。

测试：

- 具有预期本地 UPN 或账户映射的用户；
- 没有应用分配的用户；
- 条件访问或 MFA 失败的用户；
- 具有预期角色的后端账户和不具有预期角色的后端账户；
- 过期或无效的 Kerberos 票证；
- 时钟偏差、DNS 故障、连接器故障和域控制器故障；和
- 直接后端访问、备用主机名和伪造标头绕过尝试。

如果 KCD 无法变得可靠或权限最小，请使用其他受支持的身份验证模式或对应用进行现代化改造。不要削弱域委派或发布直接后端路由作为解决方法。

## 连接器和网络架构

### 仅出站连接器路径

私有网络连接器是安装在私有网络内的 Windows Server 上的轻量级代理。它们使用到 Application Proxy 服务的出站连接，因此设计不需要从互联网到连接器或后端的入站防火墙端口。然后连接器通过批准的私有网络路径到达后端。

仅允许所需的出站目标、DNS、证书吊销、更新、身份、监控和私有后端路径。与防火墙、代理、TLS 检查、DNS 和出口所有者协调。请勿仅仅因为连接器使用出站连接而允许不受限制的出站访问。

后端防火墙 SHOULD 仅允许连接器或批准的内部负载均衡器路径。不允许公共来源范围或广泛的互联网规则。验证连接器主机和后端是否解析预期名称，并且路由不会绕过检查或分段控制。

### 连接器组和高可用性

将每个已发布的应用分配到具有明确位置、环境、信任边界、后端可访问性和所有者的连接器组。未经批准的原因，请勿跨生产和非生产应用或不兼容的身份域共享连接器组。

生产连接器组 MUST 在单独的主机上具有冗余连接器，并且在可行的情况下具有独立的故障路径。 Microsoft 建议一组中至少有两个连接器，并且更喜欢三个连接器以提供操作缓冲区。在应用 SLO 需要的地方跨可用性、主机、电源、网络和维护域放置连接器。

连接器是无状态的，流量分布在可用连接器之间，但应用行为仍然取决于 cookie、连接模式、后端会话关联性或连接器容量。根据正常流量、峰值并发、单节点丢失、维护和后端响应行为调整连接器组的大小。监控连接器运行状况、版本、出站连接计数、CPU、内存、网络、错误和应用延迟。

### 私有后端和 DNS

保持应用服务器的私有性。使用私有 IP 地址、内部负载均衡器、私有 DNS、批准的路由、NSG、防火墙和运行状况检查。如果存在多个后端服务器，请定义负载均衡、会话持久性、运行状况探测、证书和故障行为。

Application Proxy 中配置的内部 URL MUST 能从每个连接器主机解析并建立连接。后端可能在管理员工作站上运行正常，但由于 DNS、路由、防火墙、证书或身份差异而无法从连接器子网访问。从每个连接器组节点进行测试。

## 安全和授权
- 根据需要使用 Microsoft Entra 预身份验证、显式应用分配、条件访问、MFA、登录风险以及设备或会话控制。
- 将连接器、后端、域控制器和管理路径保留在私有网络上，而无需公共入站应用或管理端口。
- 使用最低权限的连接器和后端服务身份；将连接器管理与应用所有权和 Entra 应用管理分开。
- 将 KCD 委派限制为所需的服务主体、域、连接器身份和应用。
- 将证书、机密、服务凭证、注册密钥和后端密码存储在经批准的机密管理系统中，并与证据一起轮换。
- 独立于 Entra 登录和组分配验证后端角色、租户、资源和数据授权。
- 将转发的标头、声明、客户端 IP、主机标头和代理元数据视为不可信，直到定义其来源和验证为止。
- 当威胁模型和流量概况需要时，使用 WAF、速率限制、滥用控制、上传限制和应用安全控制。
- 在支持的情况下，使用共享关联标识符日志记录身份、条件访问、代理、连接器、DNS、防火墙、后端和应用事件。
- 对诊断和支持采集中的令牌、cookie、凭证、个人数据和敏感应用内容进行脱敏。

Application Proxy 预身份验证可减少匿名暴露，但不会使易受攻击的应用变得安全。根据应用安全标准修补后端、保护会话、验证输入、强制授权并修复应用漏洞。

## 性能、可靠性和限制

围绕用户、并发请求、连接器计数、连接器出站限制、后端延迟、页面和资产计数、上传和下载大小、长期连接、会话关联性、身份验证延迟、条件访问评估、DNS 和私有网络容量来规划容量。通过代理验证应用的实际行为，而不是根据仅后端测试进行估计。

当一个应用的流量或维护可能影响另一个应用时，请使用单独的连接器组、后端池和应用日志记录。避免将不相关的大容量应用放置在一小群连接器后面。跨 Entra 身份验证、Application Proxy、连接器、网络和后端跃点监控用户感知的延迟。

Application Proxy 并非旨在提供任意网络访问、大容量匿名 Web 交付、一般 TCP 或 UDP 代理、数据库连接、文件系统安装或通用机器到机器传输。它可能支持有界的 Web API 场景，但 API 使用者需要显式的身份验证、授权、配额、版本控制和操作设计。当 API 管理或私有应用访问是主要要求时，请使用这些。

失效设计 MUST 覆盖：

- Microsoft Entra 身份验证、条件访问、MFA 或身份提供商中断；
- Application Proxy 服务或外部 DNS 故障；
- 一台或多台连接器主机、出站路径或连接器组发生故障；
- 私有 DNS、路由、防火墙、证书、域控制器或 KCD 故障；
- 一台或多台后端服务器、负载均衡器、应用池或会话存储发生故障；
- 高并发、后端响应慢、上传下载量大、会话寿命长；和
- 应用重定向、cookie、标头、协议或授权回归。

不要仅从绿色连接器状态来声明高可用性。测试用户登录、后端访问、SSO、拒绝访问、连接器故障转移、后端故障转移以及从每个预期客户端位置进行的恢复。

## 部署和生命周期

将 Entra 企业应用、Application Proxy URL、连接器组、条件访问策略、SSO 配置、KCD 对象、DNS、证书、后端规则、连接器主机、监控和访问分配作为版本化或可审核的部署输入进行管理。避免在没有经过批准的证据跟踪的情况下进行仅生产的门户更改。

每个已发布的应用版本 SHOULD 包括：

- 应用 URL、后端 URL、DNS、证书、重定向、cookie、主机标头和 TLS 测试；
- 已分配和未分配的用户测试、条件访问允许和拒绝测试、MFA、设备、位置和登录风险测试；
- 针对所选表单、标头、SAML、OIDC 或 IWA/KCD 方法的 SSO 测试；
- 连接器健康状况、出站防火墙、代理、DNS、私有路由、后端端口和证书测试；
- 直接 IP、备用主机名、伪造标头、公共入口和旁路路径测试；
- 连接器组节点丢失、维护、后端故障、域控制器故障和故障转移测试；
- 请求大小、并发性、会话、长期连接、上传、下载和后端延迟测试；
- 登录、代理、连接器、网络、后端和应用遥测关联；和
- 回滚、访问删除、证书续订、连接器更换、DNS 恢复和现代化计划更新。

至少每年审查已发布的应用，并在重大身份、应用、后端、网络或风险发生变化后进行审查。仅在了解活动用户、会话、依赖项和回滚证据后，才删除未使用的分配、外部 DNS、证书、连接器和应用日志记录。

## 可观测性和操作

身份和访问平台团队负责 Entra 企业应用配置、Application Proxy 标准、连接器组、条件访问模式、SSO 指导和身份遥测。网络团队负责出口、DNS、路由、防火墙和私有路径。应用团队负责后端安全、角色、会话、数据访问、修补和应用 SLO。运营团队负责仪表板、告警、事件响应、连接器生命周期和恢复证据。
每个生产应用都应有一个操作记录，其中包含所有者、受众、业务目的、外部和内部 URL、数据分类、身份和 SSO 方法、条件访问策略、分配组、连接器组、连接器主机、后端池、DNS、证书、KCD 对象、预期数量、SLO、支持路径、升级路径、审核日期以及停用或现代化日期。

至少监控：

- 登录、应用分配更改、条件访问结果、MFA、风险、设备、会话和身份验证失败；
- Application Proxy 请求计数、状态代码、延迟、响应大小、连接错误、重定向和上游故障；
- 连接器组和节点状态、版本、更新状态、CPU、内存、出站连接、错误和容量；
- 连接器到后端 DNS、TCP、TLS、HTTP、应用池、负载均衡器和运行状况探测结果；
- KCD 票证、SPN、委派、域控制器、时间、UPN 映射和后端 IWA 故障；
- 外部 DNS、自定义域证书、私有 DNS、防火墙、出口代理、路由和私有网络更改；
- 后端授权失败、应用错误、会话存储问题、上传或下载失败以及延迟；
- 直接访问或绕过尝试、伪造标头、意外源路径、异常用户或客户端行为以及暴露的端点；和
- 应用分配、连接器、SSO、条件访问、KCD、DNS、证书、网络、后端和部署更改。

Runbook 应涵盖登录失败、条件访问拒绝、MFA 问题、重定向循环、cookie 或主机名问题、连接器中断、出站防火墙故障、后端可访问性、KCD 或 SPN 故障、证书过期、DNS 故障、后端池故障、高延迟、容量饱和、直接入口暴露、访问删除、连接器更换和受控回滚。

## 验证

- [ ] 该要求主要是指远程用户访问 HTTP 或 HTTPS Web 应用，而不是一般网络连接或任意机器对机器集成。
- 选择 [ ] Application Proxy，而不是基于记录在案的要求的内部私有访问、VPN、ExpressRoute、Virtual WAN、API 管理、Application Gateway、Front Door 或直接应用现代化。
- [ ] 已发布的应用日志记录包含所有者、受众、URL、后端、数据分类、身份方法、连接器组、支持路径以及退役或现代化计划。
- [ ] Microsoft Entra 预身份验证、显式分配、条件访问、MFA、设备、位置、风险、会话和 break-glass 行为均已日志记录和测试。
- [ ] 连接器组至少有两个生产连接器、独立的主机或网络故障路径（如果可行）、受支持的版本、修补、容量、监控和替换程序。
- [ ] 连接器使用仅出站访问 Application Proxy 服务和批准的后端、DNS、Key Vault、更新、监控和证书路径；不需要打开入站互联网防火墙。
- [ ] 后端保持私有，防火墙规则限制对连接器或批准的内部路径的访问，并且直接 IP、备用主机名和旁路测试安全失败。
- [ ] 验证外部和内部 DNS、自定义域、证书、URL 转换、主机标头、重定向、cookie、TLS 终止、客户端 IP 标头和会话行为。
- [ ] 测试所选的 SSO 方法； IWA 使用具有正确域、SPN、委派、身份映射、时间、DNS 和后端授权的受限 KCD。
- [ ] 后端角色、租户、资源、数据和管理授权保持独立于 Entra 登录和应用分配。
- [ ] 连接器、代理、Entra、条件访问、DNS、防火墙、后端和应用日志将代表允许、拒绝、失败和恢复的请求关联起来。
- [ ] 容量和故障测试涵盖用户并发、后端延迟、上传和下载、长期会话、连接器丢失、后端丢失、域控制器丢失和网络故障。
- [ ] 机密、证书、服务身份、KCD 委派、连接器注册、访问审查和诊断脱敏是权限最低且可审计的。
- [ ] 仪表板、告警、支持联系人、访问删除、证书续订、连接器更换、回滚、恢复和现代化操作手册在生产前已准备就绪。

## 相关主题

- [API 主导的集成 — Azure API Management](api-led-integration-azure-api-management.md)
- [混合网络连接 - ExpressRoute、VPN 网关和 Virtual WAN](../networking-identity-security/nis-hybrid-network-connectivity-expressroute-vpn-gateway-virtual-wan.md)
- [如何通过身份感知代理发布 Azure VM 应用](../how-to-guides/how-to-publish-an-azure-vm-application-through-an-identity-aware-proxy.md)
- [云身份与访问架构](../networking-identity-security/nis-cloud-identity-and-access-architecture.md)
- [零信任和私有访问设计](../networking-identity-security/nis-zero-trust-and-private-access-design.md)

## 参考文档

- [使用 Microsoft Entra Application Proxy 发布本地应用](https://learn.microsoft.com/en-us/entra/identity/app-proxy/overview-what-is-app-proxy)
- [Microsoft Entra Application Proxy 的安全注意事项](https://learn.microsoft.com/en-us/entra/identity/app-proxy/application-proxy-security)
- [Microsoft Entra Application Proxy 中的高可用性和负载均衡](https://learn.microsoft.com/en-us/entra/identity/app-proxy/application-proxy-high-availability-load-balancing)
- [规划 Microsoft Entra Application Proxy 部署](https://learn.microsoft.com/en-us/entra/identity/app-proxy/conceptual-deployment-plan)
- [配置单点登录到 Application Proxy 应用](https://learn.microsoft.com/en-us/entra/identity/app-proxy/how-to-configure-sso)
- [Kerberos 约束委派疑难解答](https://learn.microsoft.com/en-us/entra/identity/app-proxy/application-proxy-back-end-kerberos-constrained-delegation-how-to)
- [使用 Microsoft Entra Application Proxy 访问本地 API](https://learn.microsoft.com/en-us/entra/identity/app-proxy/application-proxy-secure-api-access)
