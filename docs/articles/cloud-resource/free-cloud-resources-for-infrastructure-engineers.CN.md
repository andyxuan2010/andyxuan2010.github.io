---
title: "为基础设施工程师提供免费云资源"
summary: "一个以基础设施为中心的免费层和工具的去重目录，由 free-for.dev 和 free-for-devops 合并而成，组织成七个功能域，以实现更快的扫描。"
document_id: "CR-01"
category: "云端免费资源"
article_type: "reference"
tags:
  - cloud-resources
  - free-tier
  - finops
  - infrastructure
  - multi-cloud
  - devops
status: "published"
order: 10
version: "1.6"
last_updated: "2026-08-17"
review_status: "machine-validated"
review_cadence: "event-driven"
decision_status: "active"
owner: "云卓越中心"
audience:
  - 基础设施工程师
  - 平台工程师
  - 云架构师
  - DevOps 工程师
  - FinOps 从业人员
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
---
# 为基础设施工程师提供免费云资源

本文将 [free-for.dev 资源页面](https://github.com/ripienaar/free-for-dev/blob/master/README.md) 与 [free-for-devops 资源页面](https://github.com/hungrydevops/free-for-devops/blob/main/README.md) 合并为基础设施工程师的可导航目录。它保留了上游资源链接，同时将它们分组在源类别下，因此读者可以扫描提供商、平台、交付工具、可观测性、数据服务和相邻的工程资源，而不会丢失原始上下文。

上游仓库是当前可用性、配额、资格、区域限制、身份或付款要求以及提供商条款的权威。此页面是一个精选的导航层，并不保证优惠保持免费。

提供商条目已于 2026 年 8 月 17 日根据上游目录和当前提供商免费套餐或定价文档进行审核。如果提供商的当前文档与上游快照不同，则会显示当前提供商的限制；资格、计费账户类型、区域和使用条件仍然应用。

该目录保留所有 57 个 free-for.dev 类别，添加映射的 free-for-devops 条目，并删除两个源中的重复 URL。七个功能域使您可以更轻松地从云基础迁移到交付、数据、安全、协作、产品工具和专业资源，而不会丢失原始源类别。

## 免费资源目录

该目录分为七个功能域。每个域都包含原始的 free-for.dev 类别，并在源提供的地方保留提供商级别的详细信息。

### 云平台和基础设施

#### 主要云提供商


##### [Google Cloud Platform](<https://cloud.google.com>)
- [App Engine](<https://cloud.google.com/appengine>) — 标准环境：每天 28 个 F1 实例小时、每天 9 个 B1 实例小时和每天 1 GB 出站数据传输。
- [Cloud Firestore](<https://cloud.google.com/firestore>) — 每个项目每天 1 GiB 存储、50,000 次读取、20,000 次写入和 20,000 次删除，加上每月 10 GiB 出站数据传输。免费套餐应用于每个项目一个数据库。
- [Compute Engine](<https://cloud.google.com/compute>) — 在受支持的美国区域每月 1 个非抢占式 e2-micro VM、每月 30 GB 的标准永久性磁盘以及每月从北美到符合条件的目的地的 1 GB 出站数据传输。 GPU 和 TPU 不包括在内。
- [Cloud Storage](<https://cloud.google.com/storage>) — 支持的美国地区每月 5 GB 标准区域存储、5,000 次 A 类操作、50,000 次 B 类操作以及每月从北美进行 100 GB 的出站数据传输。
- [Cloud Shell](<https://cloud.google.com/shell>) — 基于浏览器的 shell 和编辑器，具有 5 GB 永久磁盘存储和 50 小时默认每周使用配额。
- [Cloud Pub/Sub](<https://cloud.google.com/pubsub>) — 每月 10 GiB 消息。
- [Cloud Functions](<https://cloud.google.com/functions>) — 现在显示为 Cloud Run functions：每月 200 万次调用，加上每月 400,000 GB 秒、200,000 GHz 秒和 5 GB 出站数据传输。
- [Cloud Run](<https://cloud.google.com/run>) — 每月 200 万个请求、360,000 GB 秒内存、180,000 vCPU 秒计算时间以及每月从北美进行 1 GB 出站数据传输（按请求计费）。
- [Google Kubernetes Engine](<https://cloud.google.com/kubernetes-engine>) — 每月一个免费的 Autopilot 或区域标准集群。免费积分仅涵盖集群费用；节点、网络和其他资源单独计费。
- [BigQuery](<https://cloud.google.com/bigquery>) — 每月 1 TiB 查询和 10 GiB 存储。
- [Cloud Build](<https://cloud.google.com/build>) — 默认池中的 e2-standard-2 机器类型每月 2,500 构建分钟。
- [Google Colab](<https://colab.research.google.com/>) — 免费 Jupyter Notebooks 开发环境。
- [Kaggle](<https://www.kaggle.com/>) — 具有 4 个 CPU 核心和 30 GB RAM 的笔记本环境；经过验证的用户可以每周使用 P100/T4 GPU 30 个 GPU 小时，或每周使用 TPU v3-8 20 小时。
- [技术规格](<https://www.kaggle.com/docs/notebooks#technical-specifications>) — Kaggle 笔记本硬件和使用详细信息。
- [ChromeRemoteDesktop](<https://remotedesktop.google.com/>) — 免费远程桌面应用，设备数量几乎没有限制，归 Google 所有，因此需要 Google 账户。
- [Google AI Studio](<https://aistudio.google.com/>) — 免费使用 Gemini 和 Gemma 模型；已发布的限制包括 5 个 Flash 请求/分钟、20 个/天，以及特定于模型的令牌和请求上限。
- [cloud.google.com](<https://cloud.google.com/free>) — 详细的提供商免费套餐列表。

##### [AWS](<https://aws.amazon.com>)
- [CloudFront](<https://aws.amazon.com/cloudfront/>) — 每月 1 TB 数据传出、1000 万个 HTTP/HTTPS 请求和 200 万次 CloudFront Functions 调用。
- [CloudWatch](<https://aws.amazon.com/cloudwatch/>) — 每月 5 GB 日志数据、10 个自定义指标、100 万个 API 请求和 10 个标准粒度告警指标；额外的免费监控津贴也应用。
- [CodeBuild](<https://aws.amazon.com/codebuild/>) — 在 General1.small 或 arm1.small 按需计算上每月 100 分钟构建时间，或者在符合条件的 Lambda 计算上每月 6,000 秒构建时间。
- [CodeCommit](<https://aws.amazon.com/codecommit/>) — 5 个活跃用户、50 GB 存储空间以及每月 10,000 个 Git 请求。新老 AWS 客户可以无限期享受此优惠。
- [CodePipeline](<https://aws.amazon.com/codepipeline/>) — 每月 1 个活跃的 V1 流水线，或每月 100 分钟的 V2 操作执行分钟。
- [DynamoDB](<https://aws.amazon.com/dynamodb/>) — 25 个 WCU、25 个 RCU、25 GB 标准表存储、跨两个区域的全局表的 25 个复制 WCU，以及每月 250 万个 DynamoDB Streams 读取请求。
- (<https://aws.amazon.com/lambda/>) — 每月 100 万个请求和 400,000 GB 秒。
- [SNS](<https://aws.amazon.com/sns/>) — 每月 100 万次发布
- [SES](<https://aws.amazon.com/ses/>) — 自 2026 年 7 月 21 日起，新客户将无法享受前 12 个月的 3,000 条消息费用津贴；符合资格的现有客户可以保留剩余的津贴。新客户可以将 AWS 免费套餐积分用于符合条件的 SES 使用。
- [SQS](<https://aws.amazon.com/sqs/>) — 每月 100 万个请求。
- [aws.amazon.com](<https://aws.amazon.com/free/>) — 新客户可以获取高达 200 美元的 AWS 积分和六个月的免费账户计划；仍有 30 多项始终免费的优惠，但须遵守账户计划和服务条款。

##### [Microsoft Azure](<https://azure.microsoft.com>)
- [App Service](<https://azure.microsoft.com/services/app-service/>) — 10 个 Web、移动或 API 应用，每天具有 1 GB 存储空间和 60 CPU 分钟。
- [Functions](<https://azure.microsoft.com/services/functions/>) — 每月 100 万个请求
- [DevTest Labs](<https://azure.microsoft.com/services/devtest-lab/>) — 实现快速、简单且精益的开发测试环境
- [Microsoft Entra ID (formerly Azure Active Directory)](<https://azure.microsoft.com/services/active-directory/>) — 50,000 个存储对象，可单点登录到云应用。
- [Azure AD B2C](<https://azure.microsoft.com/services/active-directory/external-identities/b2c/>) — 50,000 名每月活跃用户 (MAU)。
- [Azure DevOps](<https://azure.microsoft.com/services/devops/>) — 5 个活跃用户，无限的私有 Git 仓库
- [Azure Pipelines](<https://azure.microsoft.com/services/devops/pipelines/>) — 10 个免费并行作业，时间不限，应用于 Linux、macOS 和 Windows 开源
- [Microsoft IoT Hub](<https://azure.microsoft.com/services/iot-hub/>) — 每天 8,000 条消息
- [Load Balancer](<https://azure.microsoft.com/services/load-balancer/>) — 750 小时、15GB 数据处理和 5 条规则 (12mo)
- [Notification Hubs](<https://azure.microsoft.com/services/notification-hubs/>) — 100万条推送通知
- [Bandwidth](<https://azure.microsoft.com/pricing/details/bandwidth/>) — 前 12 个月每月 15 GB 出站流量，在永久免费优惠下每月 100 GB 出站流量。
- [Cosmos DB](<https://azure.microsoft.com/services/cosmos-db/>) — 始终免费提供 1,000 RU/秒的预配置吞吐量和 25 GB 存储空间。
- [Static Web Apps](<https://azure.microsoft.com/pricing/details/app-service/static/>) — 每个订阅 100 GB 带宽、2 个自定义域和每个应用 0.5 GB 存储空间，并提供免费 SSL、身份验证/授权和预览部署。
- [Storage](<https://azure.microsoft.com/services/storage/>) — 前 12 个月：Azure Files、Blob、Archive 和两个 64 GB P6 SSD 免费配额，受限于操作、快照和区域限制。
- [Cognitive Services](<https://azure.microsoft.com/services/cognitive-services/>) — AI/ML API（计算机视觉、翻译器、人脸检测、机器人等），提供免费套餐，包括有限的交易
- [Cognitive Search](<https://azure.microsoft.com/services/search/#features>) — Azure AI Search 免费套餐：50 MB 存储空间、最多 10,000 个托管文档以及每个服务 3 个索引。
- [Azure Kubernetes Service](<https://azure.microsoft.com/services/kubernetes-service/>) — 托管 Kubernetes 服务，免费集群管理
- [Event Grid](<https://azure.microsoft.com/services/event-grid/>) — 100K 次操作/月
- [Service Bus](<https://azure.microsoft.com/products/service-bus/>) — 750 小时和 1300 万次操作标准层基本单元 (12mo)
- [azure.microsoft.com](<https://azure.microsoft.com/free/>) — 详细的提供商免费套餐列表。

##### [Oracle Cloud](<https://www.oracle.com/cloud/>)
- [Compute](<https://www.oracle.com/cloud/compute/>) — 最多两个 AMD VM.Standard.E2.1.Micro 实例，或每月 1,500 OCPU 小时和 9,000 GB 小时的 Ampere A1 资源（相当于 2 个 OCPU 和 12 GB 内存）。在 Oracle 记录在案的 7 天低利用率测试后，可以回收空闲实例。
- [Block Volume](<https://docs.oracle.com/en-us/iaas/Content/Block/Concepts/overview.htm>) — 总计 200 GB 的启动和块卷存储以及主区域中的五个卷备份。
- [Object Storage](<https://www.oracle.com/cloud/storage/object-storage/>) — 每月 20 GB 的始终免费存储和 50,000 个对象存储 API 请求，用于始终免费的租户；付费或试用账户可获取标准存储、不频繁访问存储和存档存储各 10 GB 的空间。
- [Load Balancer](<https://docs.oracle.com/en-us/iaas/Content/Balance/Concepts/balanceoverview.htm>) — 1 个 10 Mbps 的 Flexible Load Balancer 以及 1 个 Network Load Balancer。
- [Databases](<https://www.oracle.com/cloud/database/>) — 2 个 Autonomous AI Database 实例，每个 20 GB；Oracle NoSQL 和 MySQL HeatWave 也有单独的 Always Free 优惠。
- [Monitoring](<https://docs.oracle.com/en-us/iaas/Content/Monitoring/home.htm>) — 每月 5 亿个摄取数据点和 10 亿个检索数据点。
- [Bandwidth](<https://docs.oracle.com/en-us/iaas/Content/FreeTier/freetier_topic-Always_Free_Resources.htm#outbound_data_transfer>) — 每月 10 TB 出站数据； AMD 的 VM 互联网带宽高达 50 Mbps，Arm 的 VM 互联网带宽可通过 OCPU 进行扩展。
- [Public IP](<https://docs.oracle.com/en-us/iaas/Content/Network/Tasks/managingpublicIPs.htm>) — 公共 IPv4 地址包含在合格的计算和负载均衡资源中；确切的分配取决于租户和资源。
- [Notifications](<https://www.oracle.com/cloud/cloud-native/notifications/>) — 每月 100 万条 HTTPS 通知和 1,000 条电子邮件通知。
- [deemed idle](<https://docs.oracle.com/en-us/iaas/Content/FreeTier/freetier_topic-Always_Free_Resources.htm#compute__idleinstances>) — 实例在被判定为空闲时将被回收
- [www.oracle.com](<https://www.oracle.com/cloud/free/>) — 详细的提供商免费套餐列表。

##### [IBM Cloud](<https://www.ibm.com/cloud/free/>)
- [Cloudant database](<https://www.ibm.com/products/cloudant>) — Lite 套餐上有 1 GB 的数据存储空间。
- [Db2 database](<https://www.ibm.com/products/db2>) — 200 MB 的数据存储空间。
- [API Connect](<https://www.ibm.com/products/api-connect>) — 每月 50,000 次 API 调用。
- [Availability Monitoring](<https://cloud.ibm.com/catalog/services/availability-monitoring>) — 当前 IBM 文档中未确认上游 300 万个数据点的数字；请在目录中检查当前套餐和配额。
- [Log Analysis](<https://cloud.ibm.com/catalog/services/cloud-logs>) — 当前 IBM Cloud Logs 按摄取层计量；当前 IBM 文档中未确认上游 500 MB/天的配额，因此请在使用前验证当前目录套餐。

##### [Cloudflare](<https://www.cloudflare.com/>)
- [Application Services](<https://www.cloudflare.com/plans/>) — 应用于无限数量域名的免费 DNS、DDoS 防护、CDN 以及免费 SSL、防火墙规则和页面规则、WAF、机器人缓解、免费不限流量限制 - 每个域 1 条规则、分析、电子邮件转发
- [Zero Trust & SASE](<https://www.cloudflare.com/plans/zero-trust-services/>) — 最多 50 个用户、24 小时活动日志、三个网络位置
- [Cloudflare Tunnel](<https://www.cloudflare.com/products/tunnel/>) — 您可以使用快速隧道，通过隧道将本地运行的 HTTP 端口公开到 trycloudflare.com 上的随机子域，无需账户。零信任免费计划中的更多功能（TCP 隧道、负载均衡、VPN）。
- [Quick Tunnels](<https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/do-more-with-tunnels/trycloudflare/>) — 用于开发和测试的临时 trycloudflare.com 隧道；无需账户。
- [Zero Trust](<https://www.cloudflare.com/products/zero-trust/>) — Cloudflare 访问、网关和网络安全平台；免费计划的限制因产品而异。
- [Workers](<https://developers.cloudflare.com/workers/>) — 在 Cloudflare 的全球网络上免费部署无服务器代码 - 每日 10 万个请求。
- [Workers KV](<https://developers.cloudflare.com/kv>) — 每天 100k 读取请求、每天 1000 个写入请求、每天 1000 个删除请求、每天 1000 个列表请求、1 GB 存储数据
- [R2](<https://developers.cloudflare.com/r2/>) — 每月 10 GB，每月 100 万次 A 类操作，每月 1000 万次 B 类操作
- [D1](<https://developers.cloudflare.com/d1/>) — Workers Free 计划每天读取 500 万行，每天写入 100,000 行，以及 5 GB 存储空间。
- [Pages](<https://developers.cloudflare.com/pages/>) — 在 Cloudflare 快速、安全的全球网络上开发和部署您的 Web 应用。 500 个每月构建、100 个自定义域、集成 SSL、无限制访问席位、无限制预览部署以及通过 Cloudflare Workers 集成实现的全堆栈功能。
- [Queues](<https://developers.cloudflare.com/queues/>) — Workers Free 计划每天 10,000 次操作；付费计划包括每月 100 万次操作。
- [TURN](<https://developers.cloudflare.com/calls/turn/>) — 每月 1TB 免费（传出）流量。

##### [Zoho](<https://www.zoho.com>)

Zoho - 最初是一家电子邮件提供商，但现在提供一套服务，其中一些有免费计划。具有免费计划的服务列表
- [Catalyst by Zoho](<https://catalyst.zoho.com>) — PaaS/全栈云平台，提供慷慨的免费套餐
- [免费套餐](<https://catalyst.zoho.com/free-tier.html>) — 应用于全栈和无服务器应用的 Zoho Catalyst 免费套餐详细信息。
- [Zoho Apptics](<https://www.zoho.com/apptics/>) — 统一且可用于指导行动的产品分析，可通过慷慨的永久免费计划监控性能、分析用户行为并收集移动、Web 和桌面应用的反馈。
- [Email](<https://zoho.com/mail>) — 5 位用户免费发送电子邮件。 5 GB/用户和 25 MB 附件限制，一个域。
- [Zoho Assist](<https://www.zoho.com/assist>) — Zoho Assist 的永久免费计划包括一个并发远程支持许可证和无限期访问 5 个无人值守计算机许可证，可供专业人士和个人使用。
- [Sprints](<https://zoho.com/sprints>) — Sprints 免费供 5 个用户、5 个项目和 500MB 存储空间。
- [Docs](<https://zoho.com/docs>) — 免费供 5 位用户使用，上传限制为 1 GB，存储空间为 5 GB。 Zoho Office 套件（Writer、Sheets 和 Show）捆绑提供。
- [Projects](<https://zoho.com/projects>) — 免费供 3 个用户、2 个项目和 10 MB 附件限制。同样的计划也应用于 Bugtracker。
- [Bugtracker](<https://zoho.com/bugtracker>) — 针对小型团队的 Zoho 问题跟踪；免费计划包括 3 个用户、2 个项目和 10 MB 附件。
- [Connect](<https://zoho.com/connect>) — 免费为 25 位用户提供团队协作，包括三个小组、三个自定义应用、3 个看板、3 个手册和 10 个集成以及频道、活动和论坛。
- [Meeting](<https://zoho.com/meeting>) — 最多可容纳 3 名会议参与者和 10 名网络研讨会与会者的会议。
- [Vault](<https://zoho.com/vault>) — 个人可以访问密码管理。
- [Showtime](<https://zoho.com/showtime>) — 另一种会议软件，用于培训最多 5 名与会者的远程会议。
- [Notebook](<https://zoho.com/notebook>) — Evernote 的免费替代品。
- [Wiki](<https://zoho.com/wiki>) — 三个用户免费，包含 50 MB 存储空间、无限页面、zip 备份、RSS 和 Atom 提要、访问控制和可自定义 CSS。
- [Subscriptions](<https://zoho.com/subscriptions>) — 为 20 个客户/订阅和 1 个用户免费提供定期账单管理，所有付款托管均由 Zoho 完成。存储最后 40 个订阅指标
- [Checkout](<https://zoho.com/checkout>) — 产品账单管理，包含 3 个页面和最多 50 笔付款。
- [Desk](<https://zoho.com/desk>) — 具有三个代理、私有知识库和电子邮件票证的客户支持管理。与 Assist 集成，应用于一名远程技术人员和 5 台无人值守计算机。
- [Assist](<https://zoho.com/assist>) — Zoho 远程支持和无人值守访问服务。
- [Cliq](<https://zoho.com/cliq>) — 团队聊天软件，具有 100 GB 存储空间、无限用户、每个频道 100 个用户和 SSO。
- [Campaigns](<https://zoho.com/campaigns>) — 电子邮件营销
- [Forms](<https://zoho.com/forms>) — 表格创建者
- [Sign](<https://zoho.com/sign>) — 无纸化签名
- [Surveys](<https://zoho.com/surveys>) — 在线调查
- [Bookings](<https://zoho.com/bookings>) — 预约安排

[返回顶部](#free-resource-catalog)

#### 云管理解决方案


|资源和免费层上下文 |资源和免费层上下文 |
|---|---|
| [Brainboard](<https://www.brainboard.co>) — 端到端可视化构建和管理云基础设施的协作解决方案。| [Cloud 66](<https://www.cloud66.com/>) — 免费用于个人项目（包括一台部署服务器、一个静态站点），Cloud 66 为您提供在任何云上构建、部署和扩展应用所需的一切，而无需担心“服务器问题”。|
| [deployment.io](<https://deployment.io>) — Deployment.io 帮助开发人员在 AWS 上自动部署。在我们的免费套餐中，开发人员（单个用户）可以部署无限的静态站点、Web 服务和环境。 [Parsivex](<https://www.parsivex.com>) — Parsivex 扫描您的 AWS 账户，查找空闲 EC2、未连接的 EBS、超大 RDS、陈旧快照、NAT 网关过度使用等。免费套餐提供对一个 AWS 账户的每月扫描，并返回每月总浪费以及类别细分。
| [Pulumi](<https://www.pulumi.com/>) — 现代基础设施作为代码平台，允许您使用熟悉的编程语言和工具来构建、部署和管理云基础设施。| [scalr.com](<https://scalr.com/>) — Scalr 是一款 Terraform 自动化和协作 (TACO) 产品，用于在 Terraform 管理的基础设施和配置上更好地协作和自动化。每月最多免费运行 50 次。|

[返回顶部](#free-resource-catalog)

#### CDN 和保护


|资源和免费层上下文 |资源和免费层上下文 |
|---|---|
| [bootstrapcdn.com](<https://www.bootstrapcdn.com/>) — bootstrap、bootswatch 和 fontawesome.io 的 CDN。| [CacheFly](<https://portal.cachefly.com/signup/free2023>) — 每月高达 5 TB 的免费 CDN 流量、19 个核心 PoP、1 个域和通用 SSL。|
| [cdnjs.com](<https://cdnjs.com/>) — 简单。 cdnjs 是一项免费开源 CDN 服务，由 Cloudflare 提供支持，受到超过 11% 的站点信任。| [developers.google.com](<https://developers.google.com/speed/libraries/>) — Google 托管库是最流行的开源 JavaScript 库的内容分发网络。|
| [Gcore](<https://gcorelabs.com/>) — 全球 CDN，提供 1 TB 和每月 100 万个免费请求，以及免费 DNS 托管。| [jsdelivr.com](<https://www.jsdelivr.com/>) — 免费、快速、可靠的开源 CDN。|
| [Microsoft Ajax](<https://docs.microsoft.com/en-us/aspnet/ajax/cdn/overview>) — Microsoft Ajax CDN 托管流行的第三方 JavaScript 库（例如 jQuery），使您能够轻松地将它们添加到您的 Web 应用中。 [Namecheap Supersonic](<https://www.namecheap.com/supersonic-cdn/#free-plan>) — 免费 DDoS 防护。
| [ovh.ie](<https://www.ovh.ie/ssl-gateway/>) — 免费 DDoS 保护和 SSL 证书。| [PromoProxy](<https://promoproxy.net/>) — 免费云安全 Web 网关。免费计划包括最多 5 个用户和每天 1 GB。|
| [raw.githack.com](<https://raw.githack.com/>) — **rawgit.com** 的现代替代品，它只是使用 Cloudflare 托管文件。| [Skypack](<https://www.skypack.dev/>) — 100% 原生 ES 模块 JavaScript CDN。每个域每月 100 万个请求免费。|
| [statically.io](<https://statically.io/>) — Git 仓库（GitHub、GitLab、Bitbucket）、WordPress 相关资产和镜像的 CDN。| [Stellate](<https://stellate.co/>) — Stellate 是一款应用于 GraphQL API 的超快、可靠的 CDN，并且免费提供两项服务。|
| [toranproxy.com](<https://toranproxy.com/>) — Packagist 和 GitHub 的代理。免费供个人使用，一位开发者，无支持。| [UNPKG](<https://unpkg.com/>) — npm 上所有内容的 CDN。|
| [weserv](<https://images.weserv.nl/>) — 图像缓存和调整大小服务。 [bootstrapcdn.com](<http://www.bootstrapcdn.com/>) — bootstrap、bootswatch 和 fontawesome.io 的 CDN。|
| [jsdelivr.com](<http://www.jsdelivr.com/>) — 为开发者和站点管理员提供的 OSS（JS、CSS、字体）的 CDN，接受 PR 来添加更多内容。| [asp.net](<https://www.asp.net/ajax/cdn/>) — Microsoft Ajax CDN 托管流行的第三方 JavaScript 库（例如 jQuery），使您能够轻松地将它们添加到您的 Web 应用中。
| [rawgit.com](<https://rawgit.com/>) — 免费有限流量，直接从 GitHub 提供带有适当内容类型标头的原始文件。| [incapsula.com](<https://www.incapsula.com/>) — 免费 CDN 和 DDoS 保护。
| [fastly.com](<https://www.fastly.com/>) — 免费 CDN，所有功能，直到达到每月 50 美元，对于大多数人来说足够了，然后付费或暂停。| [athenalayer.com](<http://athenalayer.com/>) — 免费 DDoS 保护，无限站点。|
| [section.io](<https://www.section.io/>) — 一种启动和管理完整 Varnish 缓存解决方案的简单方法。据说一个站点永远免费。| [netdepot.com](<https://netdepot.com/>) — 云基础设施和托管服务。|
| [speeder.io](<https://speeder.io/>) — 使用 KeyCDN。自动图像优化和免费 CDN 提升。 [jare.io](<http://www.jare.io>) — 您应该使用 GitHub 账户登录并注册您的域名。|
| [Cloudflare CDN](<https://www.cloudflare.com/plans/free/>) — 免费 CDN 和站点的基本性能功能。|  |

[返回顶部](#free-resource-catalog)

#### 平台即服务


|资源和免费层上下文 |资源和免费层上下文 |
|---|---|
| [ampt.dev](<https://getampt.com/>) — Ampt 允许团队在 AWS 上构建、部署和扩展 JavaScript 应用，而无需复杂的配置或管理基础设施。免费预览计划包括每小时 500 次调用、每天 2,500 次调用和每月 50,000 次调用。 [anvil.works](<https://anvil.works>) — 仅使用 Python 进行 Web 应用开发。免费套餐，提供无限应用和 30 秒超时。|
| [Apply.build](<https://apply.build/>) — 使用 0.5 个 vCPU / 512 MiB RAM、欧洲服务器、自动防火墙、实时性能指标免费构建和部署您的 GitHub 应用。 [appwrite](<https://appwrite.io>) — 无限项目，无项目暂停（支持 websockets）和身份验证服务。免费套餐中每个项目 1 个数据库、3 个存储桶、5 个 Functions。
| [Clever Cloud](<https://clever.cloud>) — 欧洲 PaaS，具有自动部署、自动扩展、托管数据库和基于 Git 的工作流程。包括注册时 20 欧元的免费积分、包含免费 MySQL 和 PostgreSQL 数据库的有限 DEV 计划，以及 Heptapod 和 FS Buckets 等服务的免费津贴。 [Choreo](<https://wso2.com/choreo/>) — AI 原生内部开发者平台即服务。免费套餐包括最多 5 个组件和每月 100 美元的积分。
| [codenameone.com](<https://www.codenameone.com/>) — 面向 Java/Kotlin 开发人员的开源、跨平台、移动应用开发工具链。免费用于商业用途，项目数量不受限制。 [Cohesivity](<https://cohesivity.ai>) — 无头后端和服务，专为 AI 代理而构建。包括托管、数据库、存储、LLM 和第三方 API。
| [Daestro](<https://daestro.com>) — 跨云提供商和本地运行计算作业。免费套餐包括最多 10 个并发作业运行、2 个计算生成、自托管计算、1 个云提供商、1 个容器注册表和 1 个 cron 作业。 [Deno Deploy](<https://deno.com/deploy>) — 在全球边缘运行 JavaScript、TypeScript 和 WebAssembly 的分布式系统。免费套餐包括每天 100,000 个请求和每月 100 GiB 数据传输。
| [domcloud.co](<https://domcloud.co>) — Linux 托管服务，通过 GitHub、SSH 和 MariaDB/Postgres 数据库提供 CI/CD。免费版本具有 1 GB 存储空间和 1 GB 网络/月限制，并且仅限于免费域。| [encore.dev](<https://encore.dev/>) — 使用静态分析的后端框架提供自动化基础设施、无样板代码等。包括用于业余爱好项目的免费云托管。
| [flightcontrol.dev](<https://flightcontrol.dev/>) — 使用 Git 推送式工作流程在您自己的 AWS 账户上部署 Web 服务、数据库等。个人 GitHub 仓库仅有 1 名开发人员的用户可享受免费套餐。| [gigalixir.com](<https://gigalixir.com/>) — Gigalixir 为 Elixir/Phoenix 应用提供了一个永不休眠的免费实例和一个限制为 2 个连接、10、000 行且无备份的免费层 PostgreSQL 数据库。
| [Northflank](<https://northflank.com>) — 使用强大的 UI、API 和 CLI 构建和部署微服务、作业和托管数据库。免费层包括两项服务、两个 cron 作业和 1 个数据库。 [Ownkube](<https://ownkube.io>) — 您自己的 AWS 账户中的免费单节点 k3，使用 git Push 运行应用、数据库和工作程序。以最高效率使用您的 AWS 积分。|
| [pipedream.com](<https://pipedream.com>) — 为开发人员构建的集成平台。工作流程是您可以免费运行的代码。| [免费](<https://docs.pipedream.com/pricing/>) — Pipedream.com - 为开发人员构建的集成平台。工作流程是您可以免费运行的代码。|
| [pythonanywhere.com](<https://www.pythonanywhere.com/>) — 云 Python 应用托管。初学者账户免费，1 个位于 your-username.pythonanywhere.com 域的 Python Web 应用，512 MB 私有文件存储，1 个 MySQL 数据库。 [Runsite](<https://runsite.app/>) — 欧洲 PaaS，可从 GitHub 自动部署 Web 服务或静态站点（1 个 Web 0.1 vCPU/256 MB 免费）、托管 PostgreSQL 和 Valkey(Redis)（免费 30 天）、事务性电子邮件（每月免费 3,000 封电子邮件）、S3 兼容存储（5 GB/免费），您所需的一切……|
| [Val Town](<https://www.val.town>) — 用于脚本、HTTP 端点和 cron 作业的协作 TypeScript/JavaScript 无服务器平台。免费计划包括无限的公共值、15 分钟的 cron 间隔、每次运行 1 分钟的挂钟时间以及 3 天的日志保留。 [WunderGraph](<https://cloud.wundergraph.com>) — 一个开源平台，可让您快速构建、发布和管理现代 API。免费计划最多 3 个项目、1 GB 出口、每月 300 分钟的构建时间。
| [免费计划](<https://wundergraph.com/pricing>) — WunderGraph 免费计划：最多 3 个项目、1 GB 出站流量和每月 300 分钟构建时间。| [YepCode](<https://yepcode.io>) — 在无服务器环境中连接 API 和服务的集成平台。免费套餐包括 1.000 yeps。|
| [1.000 yeps](<https://yepcode.io/pricing/>) — YepCode 免费套餐分配：1,000 yeps。 [cloud.google.com](<https://cloud.google.com/appengine/>) — Google App Engine 每天提供 28 个实例小时免费、1 GB NoSQL 数据库等等。|
| | [appharbor.com](<https://appharbor.com/>) — 提供 1 个免费 worker 的 .NET PaaS。
| [heroku.com](<https://www.heroku.com/>) — 在云中托管您的应用，对于单进程应用免费。| [firebase.com](<https://www.firebase.com/>) — 构建实时应用，免费计划最多 100 个。连接、10 GB 数据传输、1 GB 数据存储、1 GB 托管存储和 10 GB 托管传输。
| | [outsystems.com](<http://www.outsystems.com/>) — 应用于本地或云的企业 Web 开发 PaaS，免费的“个人环境”产品允许无限的代码和高达 1 GB 的数据库。|
| | [scn.sap.com](<https://scn.sap.com/docs/DOC-56411>) — SAP 的内存平台即服务产品。免费开发者账户附带 1 GB 结构化数据、1 GB 非结构化数据、1 GB Git 数据，并允许您运行 HTML5、Java 和 HANA XS 应用。
| [configure.it](<http://www.configure.it/>) — 移动应用开发平台，免费供 2 个项目使用，功能有限但没有资源限制。| [elastx.com](<http://elastx.com/start/easypaas/>) — 最多包含 4 个 cloudlet 的免费套餐，必须每年续订。|
| | [cloudandheat.com](<https://www.cloudandheat.com/>) — 免费 128 MB RAM，包括免费的自定义域支持。|
| [zeit.co/now](<https://zeit.co/now>) — 用于 Node.js 部署的托管平台，具有动态实时扩展功能。包括每月 20 次免费部署，仅限 OSS 项目的 1 GB 存储和 1 GB 带宽（源文件在公共 URL 上公开）。| [sandstorm.io](<https://sandstorm.io/>) — Sandstorm 是一个用于个人云和私有云的开源操作系统。免费计划提供 200 MB 存储空间和 5 个免费 Grain。
| [gearhost.com](<https://www.gearhost.com/pricing>) — .NET 和 PHP 应用平台。资源有限的共享服务器上免费提供 256 MB RAM。|  |

[返回顶部](#free-resource-catalog)

#### 基础设施即服务


|资源和免费层上下文 |资源和免费层上下文 |
|---|---|
| [Activepieces](<https://www.activepieces.com>) — 构建自动化流程以在应用后端将多个应用连接在一起。每月最多可释放 5,000 个任务。| [back4app.com](<https://www.back4app.com>) — Back4App 是一个基于 Parse Platform 的易于使用、灵活且可扩展的后端。
| [backendless.com](<https://backendless.com/>) — 移动和 Web Baas，免费提供 1 GB 文件存储，每月推送 50,000 条通知，表中包含 1000 个数据对象。| [connectycube.com](<https://connectycube.com>) — 无限聊天消息、p2p 语音和视频通话、文件附件和推送通知。对于最多 1000 个用户的应用免费。|
| [convex.dev](<https://convex.dev/>) — 响应式后端即服务，托管数据（具有关系和可序列化 ACID 事务的文档）、无服务器函数和 WebSockets，以将更新流式传输到各种客户端。对于小型项目免费 - 最多 1M 条日志记录，每月 500 万次函数调用。 [ETLR](<https://etlr.io>) — 使用 YAML 定义、版本化和部署自动化脚本。免费套餐包括每月 100 个积分。|
| [Flutter Flow](<https://flutterflow.io>) — FlutterFlow 是一个基于浏览器的拖放界面，用于使用 flutter 构建移动应用。| [getstream.io](<https://getstream.io/>) — 在几个小时而不是几周内构建可扩展的应用内聊天、消息传递、视频和音频以及源。|
| [IFTTT](<https://ifttt.com>) — 自动化您喜爱的应用和设备。免费 2 个小程序。| [Integrately](<https://integrately.com>) — 只需单击一下即可自动执行繁琐的任务。免费 100 项任务，15 分钟。|
| [LeanCloud](<https://leancloud.app/>) — 移动后端。 1 GB 数据存储、256MB 实例、3K API 请求/天、10K 推送/天免费。| [nhost.io](<https://nhost.io>) — 用于网络和移动应用的无服务器后端。免费计划包括 PostgreSQL、GraphQL (Hasura)、身份验证、存储和无服务器函数。
| [paraio.com](<https://paraio.com>) — 具有灵活身份验证、全文搜索和缓存的后端服务 API。一个应用免费，1 GB 应用数据。| [pusher.com](<https://pusher.com/beams>) — 为 2000 名每月活跃用户提供免费、无限制的推送通知。|
| [simperium.com](<https://simperium.com/>) — 即时自动地将数据移动到任何地方，多平台，无限发送和存储结构化数据，最大| [snill.ai](<https://snill.ai>) — AI 无代码平台，可将简单语言描述变为包含关系数据库、仪表板、工作流程、REST API 和 Webhooks 的完整业务系统。单独操作员的免费计划包括 2 个应用、1,000 条日志记录和每天 10 个 AI 请求。
| [Supabase](<https://supabase.com>) — 用于构建后端的开源 Firebase 替代方案。免费计划提供身份验证、实时数据库和对象存储。 [tyk.io](<https://tyk.io/>) — 具有身份验证、配额、监控和分析功能的 API 管理。免费云产品。|
| [zapier.com](<https://zapier.com/>) — 连接用于自动执行任务的应用。每 15 分钟 5 次 Zap，每月 100 项任务。| [apigee.com](<http://docs.apigee.com/api-baas>) — 无限制试用包括 25 GB 存储空间的 NoSQL 数据存储、用户和权限管理、地理位置、每月 1000 万条推送通知、远程配置、beta 和 A/B 对比测试、APM、完全 API 驱动。
| [appacitive.com](<http://appacitive.com/>) — 移动后端，前 3 个月免费，有 100,000 次 API 调用、推送通知。| [bip.io](<https://bip.io/>) — 一个用于轻松连接 Web 服务的 Web 自动化平台。完全开放的 GPLv3 为您的开源项目的后端提供支持。|
| [blockspring.com](<https://www.blockspring.com/>) — Cloud Functions。每月免费运行 500 万次。| |
| [Progress Kinvey](<https://www.progress.com/kinvey>) — 应用于移动和企业应用的后端即服务功能。| [layer.com](<https://layer.com/>) — 用于通信的全栈构建块。|
| [quickblox.com](<http://quickblox.com/>) — 用于即时消息、视频和语音通话以及推送通知的通信后端。| [pushbots.com](<https://pushbots.com/>) — 推送通知服务。每月最多免费推送 150 万次。|
| [iron.io](<http://www.iron.io/>) — 异步任务处理（如 AWS Lambda），提供免费套餐和 1 个月免费试用。| [stackhut.com](<http://stackhut.com/>) — 异步任务处理（如 AWS Lambda）。 10项免费私有服务和无限量免费公共服务。
| [stackstorm.com](<https://stackstorm.com/>) — 应用、服务和工作流程的事件驱动自动化，免费，无流量，访问控制，LDAP，...| |

[返回顶部](#free-resource-catalog)

#### 低代码平台


|资源和免费层上下文 |资源和免费层上下文 |
|---|---|
| [appsmith](<https://www.appsmith.com/>) — 用于构建管理面板、内部工具和仪表板的低代码项目。| [BudiBase](<https://budibase.com/>) — Budibase 是一个开源低代码平台，可在几分钟内创建内部应用。|
| [Clappia](<https://www.clappia.com>) — 一个低代码平台，旨在通过可定制的移动和 Web 应用构建业务流程应用。| [lil'bots](<https://www.lilbots.io/>) — 利用 OpenAI、Anthropic、Firecrawl 等免费内置 API 在线编写和运行脚本。免费套餐包括对 API、AI 编码助手的完全访问权限和每月 10,000 个执行积分。
| [manubes](<https://www.manubes.com>) — 强大的无代码云平台，专注于工业生产管理。对于每月进行 100 万次工作流活动的一名用户免费（也提供德语版本）。| [也有德语版](<https://www.manubes.de>) — manubes - 强大的无代码云平台，专注于工业生产管理。每月进行 100 万次工作流活动的一名用户免费（也提供德语版本）。 |
| [Mendix](<https://www.mendix.com/>) — 企业快速应用开发、支持总用户数的无限制访问沙盒环境、每个应用 0.5 GB 存储和 1 GB RAM。| [outsystems.com](<https://www.outsystems.com/>) — 应用于本地或云的企业 Web 开发 PaaS，免费的“个人环境”产品允许无限的代码和高达 1 GB 的数据库。|
| [ReTool](<https://retool.com/>) — 用于构建内部应用的低代码平台。免费套餐每月最多允许 5 个用户、无限的应用和 API 连接。 [ToolJet](<https://www.tooljet.com/>) — 用于构建业务应用的可扩展低代码框架。
| [UI Bakery](<https://uibakery.io>) — 低代码平台，可更快地构建自定义 Web 应用。最多 5 个用户免费。|  |

[返回顶部](#free-resource-catalog)

#### 虚拟主机


|资源和免费层上下文 |资源和免费层上下文 |
|---|---|
| [Alwaysdata](<https://www.alwaysdata.com/>) — 1 GB 免费网络托管，支持 MySQL、PostgreSQL、RabbitMQ、.NET、Deno、Elixir、Go、Java、Lua、Node.js、PHP、Python、Ruby、Rust。 [Awardspace.com](<https://www.awardspace.com>) — 免费网络托管 + 免费短域名、PHP、MySQL、应用安装程序、电子邮件发送且无广告。|
| [boomurl](<https://boomurl.com>) — 无需账户即可将静态站点（HTML/Markdown/images/PDF 或整个文件夹）发布到即时 HTTPS URL；免费层显示一个小横幅。| [Bubble](<https://bubble.io/>) — 可视化编程，无需代码即可构建网络和移动应用，免费使用 Bubble 品牌。|
| [dAppling Network](<https://www.dappling.network/>) — 用于 Web3 前端的去中心化 Web 托管平台，专注于增加正常运行时间和安全性，并为用户提供额外的访问点。 [DigitalOcean](<https://www.digitalocean.com/pricing>) — 在应用平台入门层上免费构建和部署三个静态站点。
| [FreeFlarum](<https://freeflarum.com/>) — 社区支持的免费 Flarum 托管，最多可容纳 250 位用户（捐赠以删除页脚的水印）。| [Harvis.dev](<https://harvis.dev>) — 通过 CLI (`npx harvis`) 进行静态站点托管，无需配置文件或构建步骤。包括免费子域、免费表单提交集合、GitHub Actions 集成、CloudFlare CDN、免费 SSL。
| [Kinsta Static Site Hosting](<https://kinsta.com/static-site-hosting/>) — 免费部署多达 100 个静态站点、带 SSL 的自定义域、每月 100 GB 带宽、260 多个 Cloudflare CDN 位置。 [Koyeb](<https://www.koyeb.com/>) — 无服务器平台，提供免费的 Hobby 计划，每月提供 550 个免费计算小时（512 MB RAM 免费套餐）、1 个免费 PostgreSQL 数据库和自定义域 SSL。|
| [MDB GO](<https://mdbgo.com/>) — 免费托管一个项目，具有两周容器 TTL、每个项目 500 MB RAM、SFTP - 1G 磁盘空间。 [Mirin](<https://mirin.com>) - 开发人员构建的 React、Vue 或 Svelte 组件站点的站点平台，具有可视化编辑、表单、分析和全球 CDN 托管。免费套餐包括 1 个具有无限页面和提交内容的站点。
| [Neocities](<https://neocities.org>) — 静态，1 GB 免费存储空间，200 GB 带宽。| [Netlify](<https://www.netlify.com/>) — 免费构建、部署和托管静态站点/应用，每月 300 个积分（相当于 30 GB 带宽）。|
| [PandaStack](<https://www.pandastack.io/>) — 为开发人员提供的生态系统，包括不同格式的 Web 托管（静态 Web 托管、基于容器的 Web 托管、WordPress 等）。免费层：一个免费 Web 托管（静态或容器）和一个免费数据库，带宽 100GB，构建时间为 300 分钟/月…| [pantheon.io](<https://pantheon.io/>) — Drupal 和 WordPress 托管、自动化 DevOps 和可扩展基础设施。对开发人员免费和机构。
| [Qoddi](<https://qoddi.com>) — 类似于 Heroku 的 PaaS 服务，具有以开发人员为中心的方法和包罗万象的功能。静态资产、暂存和开发人员应用的免费套餐。| [readthedocs.org](<https://readthedocs.org/>) — 免费文档托管，具有版本控制、PDF 生成等功能。|
| [render.com](<https://render.com>) — 统一云，用于构建和运行应用和站点，包括免费 SSL、全球 CDN、私有网络、Git 自动部署以及完全免费的 Web 服务、数据库和静态网页计划。| [Revdoku](<https://revdoku.com/>) — 直接从 ChatGPT、Claude、Codex 和其他 AI 代理将文件、报告、自定义微型站点发布为公共或受密码保护的站点。免费套餐：2GB 存储空间、2 个实时站点/应用、1 个数据库 (25 MB)、3 个 AI 连接、1k 文件/存储桶（100 MB/文件）、基本分析。
| [ShipStatic](<https://shipstatic.com>) — 静态托管您的 AI 代理可以自行驱动：`npx @shipstatic/ship ./dist` 并且该站点已上线，无需安装、无需注册、无需仓库、无需构建。免费账户使站点永久保持自动 HTTPS、全球边缘交付和不限流量的带宽；自定义域名是付费的。| [SourceForge](<https://sourceforge.net/>) — 免费查找、创建和发布开源软件。|
| [surge.sh](<https://surge.sh/>) — 面向前端开发人员的静态 Web 发布。具有自定义域支持的无限站点。| [tilda.cc](<https://tilda.cc/>) — 一个站点，50 个页面，50 MB 存储空间，只有 170 多个可用的主要预定义块，没有字体，没有图标，也没有自定义域。|
| [Vercel](<https://vercel.com/>) — 每次使用 `git push` 时，使用免费的 SSL、全局 CDN 和唯一的预览 URL 构建、部署和托管 Web 应用。| [Versoly](<https://versoly.com/>) — 专注于 SaaS 的站点构建器 - 无限的站点、70 多个块、五个模板、自定义 CSS、favicon、SEO 和表单。
| [Stormkit](<https://www.stormkit.io>) — 用于构建、托管和部署现代前端和 JavaScript 应用的自托管 Vercel 替代方案。免费计划包括 1 个应用、50 GB 带宽、无限制的自定义域和免费 SSL。| [closeheat.com](<https://closeheat.com/>) — 具有免费托管和 GitHub 集成的静态站点云开发环境。 1 个具有自定义域支持的免费站点。|
| [serverpilot.io](<https://serverpilot.io/>) — serverpilot.io ServerPilot，我们将安装托管 PHP 应用（例如 WordPress）所需的一切。无限服务器，1 个 SSH/SFTP 用户。| [devport.co](<http://devport.co/>) — 将 GitHub 项目、应用和站点变为个人开发者作品集。
| [acquia.com](<https://www.acquia.com/>) — Drupal 站点托管。开发者免费套餐。| [bitballoon.com](<https://www.bitballoon.com/>) — 静态站点和应用的托管。在子域上免费。|

[返回顶部](#free-resource-catalog)

#### DNS


|资源和免费层上下文 |资源和免费层上下文 |
|---|---|
| [1.1.1.1](<https://developers.cloudflare.com/1.1.1.1/>) — 由 Cloudflare 提供的免费公共 DNS 解析器，快速且安全（加密您的 DNS 查询）。| [阻止成人和恶意软件内容](<https://developers.cloudflare.com/1.1.1.1/1.1.1.1-for-families>) — 1.1.1.1 - 免费公共 DNS 解析器，快速且安全（加密您的 DNS 查询），由 Cloudflare 提供。|
| [通过 API](<https://developers.cloudflare.com/1.1.1.1/encrypted-dns/dns-over-https/make-api-requests>) — 1.1.1.1 - 由 Cloudflare 提供的免费公共 DNS 解析器，快速且安全（加密您的 DNS 查询）。| [1984.is](<https://www.1984.is/product/freedns/>) — 免费 DNS 服务，包含 API 和许多其他免费 DNS 功能。|
| [cloudns.net](<https://www.cloudns.net/>) — 免费 DNS 托管最多 1 个包含 50 条记录在案的域。 [deSEC](<https://desec.io>) — 具有 API 支持的免费 DNS 托管，设计时考虑到了安全性。|
| [SSE](<https://www.securesystems.de/>) — deSEC - 具有 API 支持的免费 DNS 托管，设计时考虑到了安全性。 [dns.he.net](<https://dns.he.net/>) — 免费 DNS 托管服务，支持动态 DNS。|
| [dnspod.com](<https://www.dnspod.com/>) — 免费 DNS 托管。 [duckdns.org](<https://www.duckdns.org/>) — 免费 DDNS，免费层最多包含 5 个域名。|
| [Dynv6.com](<https://dynv6.com/>) — 免费的 DDNS 服务，具有 API 支持和管理多种 DNS 记录类型（如 CNAME、MX、SPF、SRV、TXT 等）。| [API 支持](<https://dynv6.com/docs/apis>) — Dynv6 DNS API 和日志记录管理文档。
| [freedns.afraid.org](<https://freedns.afraid.org/>) — 免费 DNS 托管。此外，还根据众多公共用户贡献的域提供免费的子域。 [贡献的域名](<https://freedns.afraid.org/domain/registry/>) — freedns.afraid.org - 免费 DNS 托管。此外，还根据众多公共用户贡献的域提供免费的子域。
| [Glauca](<https://docs.glauca.digital/hexdns/>) — 最多 3 个域的免费 DNS 托管和 DNSSEC 支持。| [Hetzner](<https://www.hetzner.com/dns-console>) — Hetzner 提供的免费 DNS 托管，具有 API 支持。|
| [huaweicloud.com](<https://www.huaweicloud.com/intl/en-us/product/dns.html>) — 华为免费 DNS 托管。 [LocalCert](<https://localcert.net>) — 与公共 CA 兼容的免费 `.localcert.net` 子域，可在私有网络中使用。
| [luadns.com](<https://www.luadns.com/>) — 免费 DNS 托管，三个域，所有功能都有合理的限制。| [namecheap.com](<https://www.namecheap.com/domains/freedns/>) — 免费 DNS。域数量没有限制。|
| [nextdns.io](<https://nextdns.io>) — 基于 DNS 的防火墙，每月 30 万次免费查询。 [noip.at](<https://noip.at/>) — 免费 DDNS 服务，无需注册、跟踪、日志或广告。域没有限制。|
| [noip](<https://www.noip.com/>) — 一种动态 DNS 服务，允许最多 3 个免费主机名，每 30 天确认一次。| [sslip.io](<https://sslip.io/>) — 免费 DNS 服务，当使用带有嵌入式 IP 地址的主机名进行查询时，会返回该 IP 地址。
| [Cloudflare DNS](<https://developers.cloudflare.com/dns/>) — Cloudflare 计划上的免费权威 DNS。| [zoneedit.com](<https://www.zoneedit.com/free-dns/>) — 免费 DNS 托管，支持动态 DNS。|
| [Zonomi](<https://zonomi.com/>) — 免费 DNS 托管服务，具有即时 DNS 传播功能。免费计划：1 个 DNS 区域（域名），最多 10 个 DNS 记录。 [luadns.com](<http://www.luadns.com/>) — 免费 DNS 托管，3 个域，所有功能都有合理的限制。|
| | [Selectel DNS](<https://selectel.ru/services/additional/dns/>) — 具有全球分布的权威服务器的 DNS 托管。
| [ns1.com](<https://ns1.com/>) — 数据驱动 DNS、自动流量管理、100 万次免费查询。| [zonewatcher.com](<https://zonewatcher.com>) — 自动备份和 DNS 更改监控。 1 个免费域名。|

[返回顶部](#free-resource-catalog)

#### 域名


|资源和免费层上下文 |资源和免费层上下文 |
|---|---|
| [DigitalPlat](<https://domain.digitalplat.org>) — 免费子域名。| [DNSHE](<https://www.dnshe.com/>) — 跨多个域后缀的免费子域注册，并支持自定义名称服务器。|
| [isroot.in](<https://isroot.in>) — 免费 isroot.in 子域。| [pp.ua](<https://nic.ua/>) — 免费 pp.ua 子域。

[返回顶部](#free-resource-catalog)

#### 基础设施即服务


|资源和免费层上下文 |资源和免费层上下文 |
|---|---|
| [4EVERLAND](<https://www.4everland.org/>) — 兼容 AWS S3 - API、接口操作、CLI 等上传方式，安全、便捷、高效地从 IPFS 和 Arweave 网络上传和存储文件。 [backblaze.com](<https://www.backblaze.com/b2/>) — Backblaze B2 云存储。无限期免费 10 GB（类似 Amazon S3）对象存储。|
| [filebase.com](<https://filebase.com/>) — 由区块链支持的 S3 兼容对象存储。 5 GB 无限期免费存储空间。| [Modal](<https://modal.com>) — AI 驱动的 IaaS，具有大量的计算、存储能力；提供 30 美元（某些账户可能限制为 5 美元）的每月免费积分。|
| [exoscale.ch](<https://www.exoscale.ch/>) — 开源的免费资源。| [developer.rackspace.com](<https://developer.rackspace.com/>) — Rackspace Cloud 每月提供 50 美元，为期 12 个月。|
| [cloud.google.com/compute](<https://cloud.google.com/compute/>) — Google Compute Engine 在 60 天内提供 300 美元。| [IBM Cloud 免费套餐](<https://www.ibm.com/cloud/free>) — 符合条件的账户的免费 Lite 服务和试用积分。|
| [backblaze.com](<https://backblaze.com/b2/>) — Backblaze B2 云存储。无限期免费 10 GB（类似 Amazon S3）对象存储。| [OpenStack](<https://www.openstack.org/>) — 开源云基础设施平台和社区资源。
| [Oracle Cloud 免费套餐](<https://www.oracle.com/cloud/free/>) — 始终为符合条件的新账户免费提供计算资源和试用积分。  |

[返回顶部](#free-resource-catalog)

#### 托管数据服务


|资源和免费层上下文 |资源和免费层上下文 |
|---|---|
| [8base.com](<https://www.8base.com/>) — 8base 是一个为 JavaScript 开发人员构建的全栈低代码开发平台，构建在 MySQL 和 GraphQL 以及无服务器后端即服务之上。免费套餐：它允许您使用 UI 应用生成器快速开始构建 Web 应用并快速扩展，免费 ti…| [airtable.com](<https://airtable.com/>) — 看起来像电子表格，但它是一个关系数据库，无限基数、1,200 行/基数和 1,000 个 API 请求/月。|
| [Aiven](<https://aiven.io/>) — Aiven 在其开源数据平台上提供免费的 PostgreSQL、MySQL 和 Valkey（兼容 Redis）计划。单节点，1 个 CPU，1 GB RAM，对于 PostgreSQL 和 MySQL，1 GB 存储。 [BackupDrill](<https://backupdrill.com>) — 将 Supabase 项目备份到您自己的 S3/R2/B2 存储桶，然后运行计划的恢复演练以证明备份已恢复。提供免费计划，每周为一个项目备份一次，并在第一次备份时进行一次恢复演练。
| [CockroachDB Cloud](<https://www.cockroachlabs.com/pricing/>) — 免费套餐每月免费提供 5000 万个 RU 和 10 GiB 存储（相当于 15 美元）。| [请求单位是什么](<https://www.cockroachlabs.com/docs/cockroachcloud/metrics-request-units.html>) — CockroachDB 请求单位指标文档。
| [codehooks.io](<https://codehooks.io/>) — 易于使用的 JavaScript 无服务器 API/后端和 NoSQL 数据库服务，具有函数、Mongdb-ish 查询、键/值查找、作业系统、实时消息、工作队列、强大的 CLI 和基于 Web 的数据管理器。免费计划包含 5GB 存储空间和每分钟 60/API 调用。| [Couchbase Capella](<https://www.couchbase.com/products/capella/>) — 部署具有 1 个节点和 8GB 存储空间的永久免费层完全托管数据库集群，专为开发人员创建跨 IoT 到 AI 的下一代应用而构建。
| [CrateDB](<https://crate.io/>) — 用于实时分析的分布式开源 SQL 数据库。免费层 CRFREE：具有 2 个 CPU、2 GiB 内存、8 GiB 存储的单节点。| [免费层 CRFREE](<https://crate.io/lp-crfree>) — CrateDB CRFREE 层：一个节点，具有 2 个 CPU、2 GiB RAM 和 8 GiB 存储。
| [filess.io](<https://filess.io>) — filess.io 是一个平台，您可以免费创建以下 DBMS 的两个数据库，每个数据库最多 10 MB：MySQL、MariaDB、MongoDB 和 PostgreSQL。| [InfluxDB](<https://www.influxdata.com/>) — 时间序列数据库，可释放高达 3MB/5 分钟写入、30MB/5 分钟读取和 10,000 个基数系列。
| [Layerbase](<https://layerbase.com/>) — 2 个免费托管数据库，选自：Postgres、MariaDB、Redis、Valkey、DuckDB、SQLite、libSQL 和 TypeDB。 8 个免费引擎中的 7 个分支，每个数据库 1 个分支 - 10 GB/天、50 GB/周、150 GB/月免费吞吐量限制。 [MemCachier](<https://www.memcachier.com/>) — 托管 Memcache 服务。免费提供高达 25 MB、1 个代理服务器和基本分析。|
| [MongoDB Atlas](<https://www.mongodb.com/cloud/atlas>) — 免费套餐提供 512 MB。| [Neo4j Aura](<https://neo4j.com/cloud/aura/>) — 具有 Cypher 查询语言和 REST API 的托管原生图形 DBMS/分析平台。
| [Neon](<https://neon.tech/>) — 托管 PostgreSQL，每个项目 0.5 GB 存储，100 个项目，每个项目 10 个分支，无限数据库，始终可用的主分支（5 分钟后自动挂起），每月（总计）20 小时的非主分支计算活动时间。 [Nile](<https://www.thenile.dev/>) — 用于 B2B 应用的 Postgres 平台。无限数据库、始终可用、无需关闭、1 GB 存储（总计）、5000 万个查询令牌、自动扩缩容、无限向量嵌入。|
| [Prisma Postgres](<https://prisma.io/postgres>) — 基于 unikernels 构建的超快速托管 Postgres，在裸机上运行，500MB 总存储空间，5 个数据库，与 Prisma ORM 集成。| [Qdrant](<https://qdrant.tech/>) — 用于嵌入数据的向量数据库，具有 0.5 vCPU、1 GB RAM 和 4GB 磁盘的单节点集群。|
| [restdb.io](<https://restdb.io/>) — 快速、简单的 NoSQL 云数据库服务。免费计划允许 3 个用户、2500 条日志记录和每秒 1 个 API 请求。| [SeaTable](<https://seatable.io/>) — 由 Seafile 团队构建的灵活的、类似电子表格的数据库。无限表、2,000 行、1 个月版本控制、最多 25 名团队成员。
| [skyvia.com](<https://skyvia.com/>) — 云数据平台提供免费套餐，所有计划在测试期间都是完全免费的。| [StackBy](<https://stackby.com/>) — 一款将电子表格的灵活性、数据库的强大功能以及与您最喜爱的业务应用的内置集成结合在一起的工具。免费计划包括无限用户、十个堆栈和每个堆栈 2GB 附件。
| [Tinybird](<https://tinybird.co>) — 无服务器托管 ClickHouse，通过 HTTP 进行无连接数据摄取，并允许您将 SQL 查询发布为托管 HTTP API。免费套餐没有时间限制，每天 10GB 存储 + 1000 个 API 请求。| [Turso by ChiselStrike](<https://turso.tech/>) — Turso 是边缘数据库中的 SQLite 开发人员体验。 Turso 提供永久免费入门计划、9 GB 总存储、最多 500 个数据库、最多 3 个位置、每月 10 亿行读取以及 SQLite 本地开发支持。
| [Upstash](<https://upstash.com/>) — 无服务器 Redis，免费套餐每月最多 500K 命令、最大数据库大小 256MB 和 20 个并发连接。| [cloudant.com](<https://cloudant.com/>) — 来自 IBM 的托管数据库，如果使用量低于 50 美元/月则免费。|
| | [Redis Cloud](<https://redis.io/cloud/>) — 托管 Redis，提供免费层，应用于小型数据库和开发工作负载。
| [backand.com](<https://www.backand.com/>) — AngularJS 的后端服务。| [zenginehq.com](<http://www.zenginehq.com/>) — 在几分钟内构建业务工作流程应用，对单个用户免费。|
| [redsmin.com](<https://redsmin.com/>) — Redis 在线实时监控和管理服务，免费 1 个 Redis 实例。 |
| [elephantsql.com](<http://www.elephantsql.com/>) — PostgreSQL 即服务，20 MB 免费。| [graphenedb.com](<http://www.graphenedb.com/>) — Neo4j 作为一项服务，最多 1,000 个节点和 10,000 个免费关系。|
| [mlab.com](<https://mlab.com/>) — MongoDB 即服务，500 MB 免费。| [scalingo.com](<https://scalingo.com/>) — 主要是 PaaS，但提供 512 MB 免费的 MySQL、PostgreSQL 或 MongoDB。|
| [fieldbook.com](<https://fieldbook.com/>) — Fieldbook 允许任何人创建简单的跟踪数据库，就像电子表格一样轻松。无限免费表格，与无限用户共享。 [Apache CouchDB](<https://couchdb.apache.org/>) — 用于开发和自托管的开源文档数据库。|

[返回顶部](#free-resource-catalog)

#### 存储和媒体处理


|资源和免费层上下文 |资源和免费层上下文 |
|---|---|
| [AndroidFileHost](<https://androidfilehost.com/>) - 免费文件共享平台，速度、带宽、文件数、下载数等均不受限制。它主要针对 Android 开发相关文件，如 APK 构建、自定义 ROM 和修改等。但似乎也接受任何其他文件。| [anon.li Drop](<https://anon.li/drop>) — 零知识 E2EE 文件共享，具有客户端 AES-256-GCM 加密和零服务器端数据访问。通过站点、CLI 或 API 免费上传最大 5GB 的文件，最长有效期为 3 天。|
| [borgbase.com](<https://www.borgbase.com/>) — 用于 Borg Backup 的简单且安全的异地备份托管。 10 GB 可用备份空间和两个仓库。| [cloudinary.com](<https://cloudinary.com/>) — 使用 Ruby、Python、Java、PHP、Objective-C 等库为站点和应用上传图像、强大的操作、存储和交付。|
| [degoo.com](<https://degoo.com/>) — 基于 AI 的云存储，免费高达 20 GB，三台设备，5 GB 推荐奖金（90 天账户不活动）。| [dlvr.sh](<https://dlvr.sh/>) — 用于代理和自动化的临时文件传送。免费套餐包括每 24 小时 10 次交付，可访问 API、MCP 和 CLI。
| [Dropshare](<https://dropsha.re>) — 零知识文件共享。免费上传最大 1 GB 的文件，无需收集数据。| [embed.ly](<https://embed.ly/>) — 提供用于在网页中嵌入媒体、响应式图像扩缩容以及从网页中提取元素的 API。免费每月最多 5,000 个 URL，每秒 15 个请求。|
| [Ente](<https://ente.io/>) — Ente 是一个用于照片、视频和 2FA 机密的端到端加密云。还可以自行托管，并提供 10GB 的永久免费空间。| [FileShot.io](<https://fileshot.io>) — 零知识加密文件共享。免费套餐包括无限上传，没有文件大小限制。|
| [file.io](<https://www.file.io>) — 2 GB 文件存储空间。用于与存储交互的 REST API。| |
| [getpantry.cloud](<https://getpantry.cloud/>) — 一个简单的 JSON 数据存储 API，非常适合个人项目、黑客马拉松和移动应用！| [GoFile.io](<https://gofile.io/>) — 免费文件共享和存储平台可以通过基于 Web 的 UI 和 API 使用。不限制文件大小、带宽、下载次数等。但当文件变为非活动状态（超过十天没有下载）时，它将被删除。|
| [gumlet.com](<https://www.gumlet.com/>) — 通过 CDN 托管、处理和流式传输图像和视频。为视频提供 250 GB/月的免费套餐，为图像提供每月 30 GB 的免费套餐。| [hyperserve.io](<https://hyperserve.io/>) — 面向开发人员的视频后端 API：接受用户上传的任何格式，转码为 MP4，并通过 CDN 在全球范围内交付。免费套餐包括 50 个视频、每个文件 1 GB 以及每月 250 GB 带宽。
| [icedrive.net](<https://www.icedrive.net/>) — 简单的云存储服务。 10 GB 免费存储空间。| [image-charts.com](<https://www.image-charts.com/>) — 带水印的无限图像图表生成。|
| [ImageEngine](<https://imageengine.io/>) — ImageEngine 是一个易于使用的全局图像 CDN。在此申领您的免费开发者账户。| [此处](<https://imageengine.io/developer-program/>) — ImageEngine 免费开发者计划详细信息。
| [imagekit.io](<https://imagekit.io>) — 具有自动优化、实时转换和存储功能的图像 CDN，您可以在几分钟内与现有设置集成。| [ImgBB](<https://imgbb.com/>) — ImgBB 是一种无限制的图像托管服务。 32 MB/图像限制。|
| [Imgbot](<https://github.com/marketplace/imgbot>) — Imgbot 是一个友好的机器人，可以优化您的图像并节省您的时间。它是免费的开源软件。| [imgen](<https://www.jitbit.com/imgen/>) — 用于 opengraph 镜像的动态图像生成 API（背景文本、徽标），免费，无水印，CDN。
| [imgix](<https://www.imgix.com/>) — 图像缓存、管理和 CDN。免费计划包括 1000 张原始图像、无限变换和 100 GB 带宽。| [internxt.com](<https://internxt.com>) — Internxt Drive 是一种基于绝对隐私和毫不妥协的安全性的零知识文件存储服务。注册并永久免费获取 10 GB！|
| [kraken.io](<https://kraken.io/>) — 用于站点性能的图像优化即服务，免费计划最大文件大小为 1 MB。| [LibreQR](<https://libreqr.com>) — 免费 QR 代码生成器，专注于隐私且无跟踪。免费使用，无需收集数据。|
| [MConverter](<https://mconverter.eu/>) — 批量转换文件。每 24 小时免费提供 15 个文件，每个文件最多 100 MB，以八个为一组进行处理。 [AVIF](<https://mconverter.eu/convert/to/avif/>) — MConverter AVIF 转换工具;每 24 小时免费提供 15 个文件，每个文件最多 100 MB。|
| [nitropack.io](<https://nitropack.io/>) — 通过完整的前端优化（缓存、图像和代码优化、CDN），自动加速站点的速度。每月最多 5,000 次浏览量免费。| [npoint.io](<https://www.npoint.io/>) — 具有协作模式编辑功能的 JSON 存储。|
| [MantleDB](<https://mantledb.sh>) — 用于脚本和小型应用的匿名 JSON 存储。免费套餐包括 1 个存储桶（限制为 1MB），并具有 72 小时不活动清除策略。 [otixo.com](<https://www.otixo.com/>) — 从一处加密、共享、复制和移动所有云存储文件。基本计划提供无限文件传输，最大 250 MB。|
| [packagecloud.io](<https://packagecloud.io/>) — YUM、APT、RubyGem 和 PyPI 的托管包仓库。可根据要求提供有限的免费计划和开源计划。 [pcloud.com](<https://www.pcloud.com/>) — 云存储服务。高达 10 GB 的免费存储空间。|
| [Pinata IPFS](<https://pinata.cloud>) — Pinata 是在 IPFS 上上传和管理文件的最简单方法。 1 GB 免费存储空间，以及 API 访问权限。| [plot.ly](<https://plot.ly/>) — 绘制图表并分享您的数据。免费套餐包括无限的公共文件和十个私有文件。
| [podio.com](<https://podio.com/>) — 您可以与最多五人的团队一起使用 Podio，并尝试基本计划的功能（用户管理除外）。| [Proton Drive](<https://proton.me/drive>) — 用于文件和关键文档的超安全云存储。免费计划提供 5GB 存储空间。
| [QRtracer](<https://qrtracer.io>) — 免费的二维码生成器，内置扫描分析、批量生成和品牌定制，专注于可靠性，没有任何广告。| [QuickChart](<https://quickchart.io>) — 生成可嵌入的图像图表、图形和二维码。|
| [redbooth.com](<https://redbooth.com>) — P2P 文件同步，最多 2 个用户免费。| [resmush.it](<https://resmush.it>) — reSmush.it 是一个提供图像优化的免费 API。 reSmush.it 是最常用的图像优化 API，已处理超过 70 亿张图像，并且仍然免费。|
| [sirv.com](<https://sirv.com/>) — 具有即时图像优化和调整大小功能的智能图像 CDN。免费套餐包括 500 MB 存储空间和 2 GB 带宽。 [SlingSite](<https://slingsite.github.io>) — 创建图像和视频的所有优化版本。免费。|
| [sync.com](<https://www.sync.com/>) — 端到端云存储服务。 5 GB 免费存储空间。| [tinypng.com](<https://tinypng.com/>) — 用于压缩 PNG 和 JPEG 图像并调整其大小的 API，每月免费提供 500 次压缩。|
| [transloadit.com](<https://transloadit.com/>) — 处理文件上传以及视频、音频、图像、文档的编码。通过 GitHub 学生开发包免费向开源、慈善机构和学生开放。 [twicpics.com](<https://www.twicpics.com>) — 响应式图像即服务。该服务每月最多可免费使用 3GB 流量。|
| [uploadcare.com](<https://uploadcare.com/hub/developers/>) — Uploadcare 为媒体管道提供基于尖端算法的终极工具包。所有功能均完全免费供开发人员使用：文件上传 API 和 UI、图像 CDN 和源服务、自适应交付和智能压缩。 [VaocherApp QR Code Generator](<https://www.vaocherapp.com/qr-code-generator>) — 轻松创建礼品卡、礼券和促销活动的自定义二维码。|
| [aerofs.com](<https://aerofs.com/>) — P2P 文件同步，最多 30 个用户免费。| [JFrog Artifactory](<https://jfrog.com/artifactory/>) — 具有公共和开源分发选项的二进制仓库管理。
| [cloudinary.com](<http://cloudinary.com/>) — 站点和应用的图像上传、强大的操作、存储和交付，以及 Ruby、Python、Java、PHP、Objective-C 等库。| [shrinkray.io](<https://shrinkray.io/>) — GitHub 仓库的免费图像优化。|
| [imagefly.io](<http://imagefly.io/>) — 响应式图像点播。每月 100 MB 免费。| |
| [placekitten.com](<https://placekitten.com/>) — 一种快速简单的服务，用于获取小猫的图片以用作占位符。| |
| [embed.ly](<http://embed.ly/>) — 提供用于在网页中嵌入媒体、响应式图像扩缩容、从网页中提取元素的 API。免费每月最多 5,000 个 URL，每秒 15 个请求。| |
| [otixo.com](<http://otixo.com/>) — 从一处加密、共享、复制和移动所有云存储文件。基本计划提供无限制的文件传输，最大 250 MB。| [filestack.com](<https://filestack.com/>) — 文件选择器、转换和交付，免费提供 250 个文件、500 次转换和 3 GB 带宽。|
| [image-charts.com](<https://image-charts.com/>) — 带水印的无限图像图表生成。|  |

[返回顶部](#free-resource-catalog)

#### 隧道、WebRTC、Web Socket 服务器和其他路由器


|资源和免费层上下文 |资源和免费层上下文 |
|---|---|
| [cname.dev](<https://cname.dev/>) — 免费且安全的动态反向代理服务。| [conveyor.cloud](<https://conveyor.cloud/>) — Visual Studio 扩展，用于将 IIS Express 公开到本地网络或通过隧道公开到公共 URL。
| [Expose](<https://expose.dev/>) — 通过安全隧道公开本地站点。免费计划包括 EU 服务器、随机子域和单用户。 [Hamachi](<https://www.vpn.net/>) — LogMeIn Hamachi 是一项托管 VPN 服务，可让您通过免费计划安全地将类似 LAN 的网络扩展到分布式团队，该计划允许最多 5 人的无限网络。|
| [Hookdeck](<https://hookdeck.com/pricing>) — 随时随地开发、测试和监控您的 webhook。每月 10 万次请求和 10 万次尝试，保留三天。| [localhost.run](<https://localhost.run/>) — 通过隧道将本地运行的服务器公开到公共 URL。
| [localtonet](<https://localtonet.com/>) — HTTP、TLS、TCP、UDP、文件服务器（默认、SFTP、WebDAV）和代理隧道（HTTP、SOCKS5、Shadowsocks、VLESS）的多协议隧道。免费计划：1 个隧道、1 GB/月带宽、30 分钟超时（不包括 HTTP 隧道）。| [localtunnel](<https://theboroer.github.io/localtunnel-www/>) — 通过隧道将本地运行的服务器公开到公共 URL。免费托管版本，并且开源。|
| [开源](<https://github.com/localtunnel/localtunnel>) — localtunnel - 通过隧道将本地运行的服务器公开到公共 URL。免费托管版本，并且开源。 | [LocalXpose](<https://localxpose.io>) — 反向代理，使您能够将本地主机服务器公开到互联网。免费计划的隧道寿命为 15 分钟。|
| [ngrok.com](<https://ngrok.com/>) — 通过隧道将本地运行的服务器公开到公共 URL。 [Pinggy](<https://pinggy.io>) — 使用单个命令即可获取本地主机的公共 URL，无需下载。免费计划的隧道寿命为 60 分钟。|
| [Radmin VPN](<https://www.radmin-vpn.com/>) — 通过支持 VPN 的类似 LAN 的网络将多台计算机连接在一起。无限的同行。| [serveo](<https://serveo.net/>) — 将本地服务器公开到互联网。免费子域名，没有限制。|
| [stun:global.stun.twilio.com:3478?transport=udp](<stun:global.stun.twilio.com:3478?transport=udp>) — Twilio STUN | [stun:stun.l.google.com:19302](<stun:stun.l.google.com:19302>) — Google STUN |
| [Tailscale](<https://tailscale.com/>) — 零配置 VPN，使用开源 WireGuard 协议。供 100 台设备和 3 个用户使用的个人使用的免费计划。 [webhookrelay.com](<https://webhookrelay.com>) — 管理、调试、扇出并将所有 Webhooks 代理到公共或内部（即本地主机）目的地。
| | [Xirsys](<https://www.xirsys.com/pricing/>) — 无限 STUN 使用 + 每月 500 MB TURN 带宽，带宽上限，单一地理区域。|
| [ZeroTier](<https://www.zerotier.com>) — FOSS 管理的虚拟以太网即服务。免费计划中 25 个客户端的无限端对端加密网络。 [segment.com](<https://segment.com/>) — 将事件转换并路由到其他第三方服务的中心。每月 100,000 个事件免费。|
| [meetfinch.com](<https://meetfinch.com/>) — 轻松创建通过隧道连接到本地开发计算机的 SSL 加密 URL。  |

### 开发者体验和交付

[返回顶部](#free-resource-catalog)

#### 源代码仓库


|资源和免费层上下文 |资源和免费层上下文 |
|---|---|
| [Bitbucket](<https://bitbucket.org/>) — 通过 CI/CD 流水线为最多 5 个用户提供无限的公共和私有 Git 仓库。 [Codeberg](<https://codeberg.org/>) - 免费和开源项目的无限公共和私有 Git 仓库（具有无限合作者）。|
| [Forgejo](<https://forgejo.org/>) — Codeberg 使用的 Forgejo 开源 Git forge。| [Codeberg Pages](<https://codeberg.page/>) — 由 Codeberg 托管的静态站点。
| [Codeberg's CI](<https://docs.codeberg.org/ci/>) — Codeberg CI/CD 文档和服务详细信息。 [Codeberg Translate](<https://translate.codeberg.org/>) — Codeberg 翻译托管。
| [framagit.org](<https://framagit.org/>) — Framagit 是 Framasoft 的软件锻造厂，基于 Gitlab 软件，包括 CI、静态页面、项目页面和问题跟踪。| [GitGud](<https://gitgud.io>) — 无限的私有和公共仓库。永远免费。|
| [GitHub](<https://github.com/>) - 无限的公共仓库和无限的私有仓库（具有无限的协作者）。| [gitlab.com](<https://about.gitlab.com/>) — 无限的公共和私有 Git 仓库，最多可容纳 5 名协作者。|
| [heptapod.net](<https://foss.heptapod.net/>) — Heptapod 是 GitLab 社区版的一个友好分支，为 Mercurial 提供支持。 [pijul.com](<https://pijul.com/>) — 无限制的免费开源分布式版本控制系统。
| [projectlocker.com](<https://projectlocker.com>) — 一个免费的私有项目（Git 和 Subversion），提供 50 MB 空间。| [RocketGit](<https://rocketgit.com>) — 基于 Git 的仓库托管。无限的公共和私有仓库。|
| [savannah.gnu.org](<https://savannah.gnu.org/>) — 用作免费软件项目（针对 GNU 项目）的协作软件开发管理系统。 [savannah.nongnu.org](<https://savannah.nongnu.org/>) — 用作自由软件项目（针对非 GNU 项目）的协作软件开发管理系统。
| [gitea.com](<https://about.gitea.com/>) — 自托管 Git 托管、代码审查、团队协作、包注册表和 CI/CD。|  |

[返回顶部](#free-resource-catalog)

#### 制品仓库


|资源和免费层上下文 |资源和免费层上下文 |
|---|---|
| [Gemfury](<https://gemfury.com>) — Maven、PyPi、NPM、Go Module、Nuget、APT 和 RPM 仓库的私有和公共制品仓库。免费用于公共项目。| [jitpack.io](<https://jitpack.io/>) - GitHub 上 JVM 和 Android 项目的 Maven 仓库，对公共项目免费。|
| [paperspace](<https://www.paperspace.com/>) — 构建和扩展 AI 模型，开发、训练和部署 AI 应用，免费计划：公共项目、5Gb 存储、基本实例。| [RepoFlow](<https://repoflow.io>) — RepoFlow 支持 npm、PyPI、Docker、Go、Helm 等，简化了包管理。免费试用 10GB 存储空间、10GB 带宽、100 个套餐以及云中无限用户，或自行托管仅供个人使用。
| [RepoForge](<https://repoforge.io>) — 用于 Python、Debian、NPM 包和 Docker 注册表的私有云托管仓库。开源/公共项目的免费计划。| [repsy.io](<https://repsy.io>) — 1 GB 免费私有/公共 Maven 仓库。

[返回顶部](#free-resource-catalog)

#### 代码生成


|资源和免费层上下文 |资源和免费层上下文 |
|---|---|
| [Appinvento](<https://appinvento.io/>) — 免费的无代码应用构建器。它提供对自动生成的后端源代码的完整访问，并允许无限的 API 和路由。 [DhiWise](<https://www.dhiwise.com/>) — 将 Figma 设计转换为动态 Flutter 和 React 应用。|
| [Karbon Sites](<https://www.karbonsites.space>) — 一款 AI 驱动的站点构建器和编辑器，可根据文本提示、草图或简历生成可用于生产的前端代码。功能包括原生 Android (APK) 导出和每月 5 代的免费套餐（通过自定义 Gemini API 密钥无限制）。| [Metalama](<https://www.postsharp.net/metalama>) — 一种特定于 C# 的工具，可在编译期间动态生成样板代码以保持源代码干净。对于开源项目来说是免费的；其商业友好的免费套餐最多包括三个方面。
| [Supermaven](<https://www.supermaven.com/>) — 应用于 VS Code、JetBrains 和 Neovim 的高速 AI 代码补全插件。免费层提供无限的内联完成，重点是超低延迟。 [v0.dev](<https://v0.dev/>) — v0 由 Vercel 创建，使用 shadcn/ui 和 Tailwind CSS 生成复制粘贴友好的 React 代码。它采用积分系统，每月提供1,200个起始积分和200个免费积分。

[返回顶部](#free-resource-catalog)

#### 代码质量


|资源和免费层上下文 |资源和免费层上下文 |
|---|---|
| [beanstalkapp.com](<https://beanstalkapp.com/>) — 用于编写、审查和部署代码的完整工作流程）、一个用户的免费账户以及一个具有 100 MB 存储空间的仓库。| [codacy.com](<https://www.codacy.com/>) — PHP、Python、Ruby、Java、JavaScript、Scala、CSS 和 CoffeeScript 的自动代码审查，免费提供无限的公共和私有仓库。|
| [Codeac.io](<https://www.codeac.io/infrastructure-as-code.html?ref=free-for-dev>) — 用于 DevOps 的自动化基础设施作为代码审查工具，与 GitHub、Bitbucket 和 GitLab（甚至是自托管）集成。 （开源免费）。| [codecov.io](<https://codecov.io/>) — 代码覆盖率工具 (SaaS)，免费开源和一个免费的私有仓库。|
| [CodeFactor](<https://www.codefactor.io>) — Git 的自动代码审查。免费版本包括无限用户、公共仓库和一个私有仓库。| [coderabbit.ai](<https://coderabbit.ai>) — 与 GitHub/GitLab 集成的 AI 代码审查工具。免费套餐包括 200 个文件/小时、3 个评论/小时和 50 个对话/小时。
| [CodSpeed](<https://codspeed.io>) — 自动跟踪 CI 流水线中的性能。开源项目永远免费。| [coveralls.io](<https://coveralls.io/>) — 显示测试覆盖率报告，免费开源。|
| [deepscan.io](<https://deepscan.io>) — 高级静态分析，用于自动查找 JavaScript 代码中的运行时错误，免费开源。| [DeepSource](<https://deepsource.io/>) — DeepSource 持续分析源代码更改，查找并修复按安全性、性能、反模式、错误风险、文档和风格分类的问题。|
| [DiffText](<https://difftext.com>) — 立即找到两个代码块之间的差异。完全免费使用。| [eversql.com](<https://www.eversql.com/>) — EverSQL - #1 数据库优化平台。
| [gerrithub.io](<https://review.gerrithub.io/>) — 免费查看 GitHub 仓库的 Gerrit 代码。| [goreportcard.com](<https://goreportcard.com/>) — Go 项目的代码质量，免费开源。|
| [gtmetrix.com](<https://gtmetrix.com/>) — 优化站点的报告和全面建议。| [holistic.dev](<https://holistic.dev/>) — 用于 Postgresql 优化的 #1 静态代码分析器。|
| [houndci.com](<https://houndci.com/>) — GitHub 提交的关于代码质量的评论，免费开源。| [reviewable.io](<https://reviewable.io/>) — GitHub 仓库的代码审查，免费用于公共或个人仓库。|
| [scan.coverity.com](<https://scan.coverity.com/>) — Java、C/C++、C# 和 JavaScript 的静态代码分析，免费开源。| [scrutinizer-ci.com](<https://scrutinizer-ci.com/>) — 持续检查平台，免费开源。|
| [semanticdiff.com](<https://app.semanticdiff.com/>) — 用于 GitHub 拉取请求和提交的编程语言感知差异，对公共仓库免费。| [shields.io](<https://shields.io>) — 开源项目的质量元数据徽章。|
| [sonarcloud.io](<https://sonarcloud.io>) — Java、JavaScript、C/C++、C#、VB.NET、PHP、Objective-C、Swift、Python、Groovy 以及更多语言的自动源代码分析，免费开源。| [CodeClimate](<https://codeclimate.com/>) — 针对各种语言的自动代码审查和可维护性检查。对于开源项目免费。|
| [SonarQube](<https://www.sonarsource.com/products/sonarqube/>) — 用于持续检查代码质量和安全漏洞的开源平台。| [Codecov](<https://about.codecov.io/>) — 代码覆盖率报告和见解，以确保代码经过充分测试。对于开源项目免费。|
| [DeepSource](<https://deepsource.com/>) — 通过自动代码修复对 Python、Go、Ruby 等进行静态分析。对于开源项目免费。| [Snyk](<https://snyk.io>) — 查找并修复代码、依赖项和容器中的漏洞。对于开源项目免费。|

[返回顶部](#free-resource-catalog)

#### 代码搜索和浏览


|资源和免费层上下文 |资源和免费层上下文 |
|---|---|
| [CodeKeep](<https://codekeep.io>) — Google Keep 代码片段。| [libraries.io](<https://libraries.io/>) — 32 个不同的包管理器的搜索和依赖项更新通知，免费开源。|
| [Namae](<https://namae.dev/>) — 搜索各种站点，例如 GitHub、Gitlab、Heroku、Netlify 等，了解您的项目名称的可用性。| [tickgit.com](<https://www.tickgit.com/>) — 显示 `TODO` 注释（和其他标记），以识别值得返回进行改进的代码区域。

[返回顶部](#free-resource-catalog)

#### CI 和 CD


|资源和免费层上下文 |资源和免费层上下文 |
|---|---|
| [appcircle.io](<https://appcircle.io>) — 企业级移动 DevOps 平台，可自动构建、测试和发布移动应用存储，以实现更快、更高效的发布周期。每个构建的最长构建时间为 30 分钟，每月构建 20 次，并发构建 1 次免费。| [appveyor.com](<https://www.appveyor.com/>) — 应用于 Windows 的 CD 服务，免费开源。|
| [bitrise.io](<https://www.bitrise.io/>) — 应用于原生或混合移动应用的 CI/CD。每月 200 次免费构建，构建时间为 10 分钟，团队成员为两名。| [buddy.works](<https://buddy.works/>) — 一个 CI/CD，包含 5 个免费项目和一个并发运行（120 次执行/月）。|
| [Buildkite](<https://buildkite.com>) — CI Pipelines 免费供 3 个用户使用，每月可运行 5,000 分钟。 Test Analytics 免费开发者套餐包括每月 10 万次测试执行，以及更多针对开源项目的免费内容。 [bytebase.com](<https://www.bytebase.com/>) — 数据库 CI/CD 和 DevOps。 20 个以下用户和 10 个数据库实例免费。|
| [CircleCI](<https://circleci.com/>) — 全面的免费计划，包含 GitHub、GitLab 和 BitBucket 仓库的托管 CI/CD 服务中包含的所有功能。| [cirun.io](<https://cirun.io>) — 免费用于公共 GitHub 仓库。|
| [codemagic.io](<https://codemagic.io/>) — Codemagic 是一个针对移动应用的完全托管和管理的 CI/CD。免费套餐提供每月 500 分钟免费时间以及配备 2.3 GHz 和 8 GB RAM 的 Mac Mini 实例。 [deployhq.com](<https://www.deployhq.com/>) — 1 个项目，每日部署 10 次（每月 30 分钟构建）。|
| [LocalOps](<https://localops.co/>) — 在 30 分钟内将您的应用部署到 AWS/GCP/Azure 上。免费计划允许 1 个用户和 1 个应用环境。| [Make](<https://www.make.com/en>) — 工作流程自动化工具可让您使用 UI 连接应用并自动化工作流程。公共 GitHub 仓库免费，免费套餐包含 100 Mb、1000 次操作和 15 分钟的最小间隔。|
| [Mergify](<https://mergify.com>) — GitHub 的工作流程自动化和合并队列 - 免费用于公共 GitHub 仓库。 [Nx Cloud](<https://nx.dev/ci>) — Nx Cloud 通过远程缓存、跨机器分配任务，甚至自动拆分 e2e 测试运行等功能，加速 CI 上的单一仓库。它附带一个免费计划，最多可容纳 30 名贡献者，并包含慷慨的 15 万积分。
| [RunMyJob](<https://runmyjob.io>) — 通过实时扩展 Spike 实例，更智能地运行 GitHub Actions 和 GitLab CI 流水线。免费套餐包括 400 个 vCPU 分钟、800 GB 分钟和 10 个具有高性能运行器的并发作业（每个作业 12 个 vCPU 和 32 GB RAM）。 [Shipfox](<https://www.shipfox.io/>) — 运行 GitHub Actions 的速度提高 2 倍，每月免费 3000 分钟构建时间。|
| [Spacelift](<https://spacelift.io/>) — 基础设施即代码的管理平台。免费计划功能：IaC 协作、Terraform 模块注册表、ChatOps 集成、开放策略代理的持续资源合规性、SAML 2.0 的 SSO 以及对公共 worker 池的访问：每月最多 200 分钟。 [Squash Labs](<https://www.squash.io/>) — 为每个分支创建一个虚拟机，并使您的应用可通过唯一的 URL、无限的公共和私有仓库、高达 2 GB 的虚拟机大小使用。|
| [Terramate](<https://terramate.io/>) — Terramate 是基础设施即代码 (IaC) 工具（例如 Terraform、OpenTofu 和 Terragrunt）的编排和管理平台。免费最多 2 位用户，包括所有功能。| [Terrateam](<https://terrateam.io>) - GitOps 首创的 Terraform 自动化，具有拉取请求驱动的工作流程、通过自托管运行器进行项目隔离以及有序操作的分层运行。|
| [Trigger.dev](<https://trigger.dev>) — 开源后台作业和 AI 代理平台，具有持久任务、无超时和实时性。免费计划包括每月 5 美元的计算积分、20 次并发运行、无限任务、5 名团队成员、10 个计划和 1 天日志保留。 [GitHub Actions](<https://github.com/features/actions>) - GitHub 上的原生 CI/CD 平台，对公共仓库免费，每月为私有仓库提供 2,000 分钟的构建时间。|
| [GitLab CI](<https://about.gitlab.com/gitlab-ci/>) — 免费用于无限量的公共和私有项目，具有 CI/CD 流水线。| [Tekton](<https://tekton.dev/>) — 免费用于公共和私有仓库，具有无限的构建时间和公共仓库最多 10 个免费并行作业。
| [Drone.io](<https://drone.io>) — 免费用于公共和私有仓库，具有无限的构建时间和公共仓库最多 10 个免费并行作业。 [Travis CI](<https://travis-ci.org>) — 免费的开源 GitHub 仓库，具有用于构建流水线的简单 YAML 配置。
| [Jenkins](<https://www.jenkins.io>) — 免费用于公共和私有仓库，具有无限的构建时间和公共仓库最多 10 个免费并行作业。 [TeamCity](<https://www.jetbrains.com/teamcity/>) — 免费用于公共和私有仓库，构建时间不受限制，公共仓库最多可有 10 个免费并行作业。|
| [Codefresh](<https://codefresh.io>) — 免费计划包括每月 120 次构建，并支持基于 Docker 的 Kubernetes 部署流水线。| [Azure Pipelines](<https://azure.microsoft.com/en-us/products/devops/pipelines/>) — 免费用于公共和私有仓库，构建时间不受限制，公共仓库最多可有 10 个免费并行作业。|

[返回顶部](#free-resource-catalog)

#### 测试


|资源和免费层上下文 |资源和免费层上下文 |
|---|---|
| [Appetize](<https://appetize.io>) — 直接在浏览器中在此基于云的 Android 手机/平板电脑模拟器和 iPhone/iPad 模拟器上测试您的 Android 和 iOS 应用。免费套餐包括两个并发会话，每月使用 30 分钟。| [Argos](<https://argos-ci.com>) — 为开发人员提供的开源可视化测试。无限项目，每月 5,000 个屏幕截图。|
| [Bencher](<https://bencher.dev/>) — 用于采集 CI 性能回归的连续基准测试工具套件。所有公共项目免费。| [BugBug](<https://bugbug.io/>) — 用于 Web 应用的轻量级测试自动化工具。您可以在自己的计算机上免费运行无限测试。|
| [checkbot.io](<https://www.checkbot.io/>) — 浏览器扩展，用于测试您的站点是否遵循 50 多个 SEO、速度和安全最佳实践。小型站点的免费套餐。| [Checkly](<https://checklyhq.com>) — 为开发人员提供开源 E2E/综合监控和深度 API 监控。一个用户的免费计划和 10k API 和网络/1.5k 浏览器检查运行。|
| [CORS-Tester](<https://cors-error.dev/cors-tester/>) — 一个免费工具，供开发人员和 API 测试人员检查 API 是否针对给定域启用了 CORS 并识别差距。| [cypress.io](<https://www.cypress.io/>) — 对浏览器中运行的任何内容进行快速、简单且可靠的测试。 Cypress Test Runner 始终免费且开源，没有限制和限制。
| [everystep-automation.com](<https://www.everystep-automation.com/>) — 记录并重播在网络浏览器中执行的所有步骤并创建脚本，免费且选项较少。| [gridlastic.com](<https://www.gridlastic.com/>) — Selenium 网格测试，免费计划最多可同时运行 4 个 Selenium 节点/10 个网格启动/每月 4,000 分钟测试。|
| [katalon.com](<https://katalon.com>) — 提供一个测试平台，可以帮助各种规模的团队达到不同的测试成熟度水平，包括 Katalon Studio、TestOps（+ 免费的可视化测试）、TestCloud 和 Katalon Recorder。 [Keploy](<https://keploy.io/>) — Keploy 是面向开发人员的功能测试工具包。对于开源项目来说它是免费的。|
| [最新](<https://lastest.cloud>) — 快速交付。永久免费计划：1 个项目，每月 500 运行分钟，1 次并发运行，无需信用卡。| [loadmill.com](<https://www.loadmill.com/>) — 通过分析网络流量自动创建 API 和负载测试。每月免费模拟最多 50 个并发用户，最多 60 分钟。|
| [lost-pixel.com](<https://lost-pixel.com>) — 针对 Storybook、Ladle、Histoire 故事和 Web 应用的整体视觉回归测试。团队成员不限，完全免费开源，每月 7,000 个快照。| [pagegym.com](<https://pagegym.com>) — 加载行为和页面速度分析和优化工具。免费计划提供每天 10 次测试、每周 5 次实验以及每月 15 GB 的最大摄取数据。
| [percy.io](<https://percy.io>) — 将可视化测试添加到任何 Web 应用、静态站点、样式指南或组件库。无限的团队成员、演示应用和无限的项目、每月 5,000 个快照。| [qase.io](<https://qase.io>) - 开发和 QA 团队的测试管理系统。免费套餐包括所有核心功能，可用于附件的空间为 500MB，最多可供 3 个用户使用。
| [Repeato](<https://repeato.app/>) — 基于计算机视觉和 AI 构建的无代码移动应用测试自动化工具。免费计划仅限于 iOS 10 次测试和 Android 10 次测试，但包含付费计划的大部分功能，包括无限制的测试运行。 [Requestly](<https://requestly.com/>) — 用于拦截、重定向和模拟 HTTP 请求的开源 Chrome 扩展。重定向 URL、修改 HTTP 标头、模拟 API、注入自定义 JS、修改 GraphQL 请求、生成模拟 API 端点、使用网络和控制台会话日志记录。
| [调试器](<https://requestly.com/products/web-debugger/>) — 具有调试器、模拟服务器、API 客户端和会话日志记录。重定向 URL、修改 HTTP 标头、模拟 API、注入自定义 JS、修改 GraphQL 请求、生成模拟 API 端点、使用网络和控制台会话日志记录。 [模拟服务器](<https://requestly.com/products/mock-server/>) — 具有调试器、模拟服务器、API 客户端和会话日志记录。重定向 URL、修改 HTTP 标头、模拟 API、注入自定义 JS、修改 GraphQL 请求、生成模拟 API 端点、使用网络和控制台会话日志记录。
| [API 客户端](<https://requestly.com/products/api-client/>) — 具有调试器、模拟服务器、API 客户端和会话日志记录。重定向 URL、修改 HTTP 标头、模拟 API、注入自定义 JS、修改 GraphQL 请求、生成模拟 API 端点、使用网络和控制台会话日志记录。 [会话日志记录](<https://requestly.com/products/session-book/>) — 具有调试器、模拟服务器、API 客户端和会话日志记录。重定向 URL、修改 HTTP 标头、模拟 API、注入自定义 JS、修改 GraphQL 请求、生成模拟 API 端点、使用网络和控制台会话日志记录。
| [seotest.me](<https://seotest.me/>) — 免费页面 SEO 站点测试器。每天 10 次免费站点抓取。| [Sherlo](<https://sherlo.io>) — React Native 应用的视觉回归测试。免费计划：每月 1,000 个快照，iOS 和 Android 模拟器。
| [snippets.uilicious.com](<https://snippets.uilicious.com>) — 它类似于 CodePen，但用于跨浏览器测试。 UI-licious 可让您编写用户故事等测试，并提供免费平台 - UI-licious Snippets - 允许您在 Chrome 上运行无限测试，无需注册，每次测试运行最多 3 分钟。 [SSR（服务器端渲染）检查器](<https://www.crawlably.com/ssr-checker/>) — 通过直观地将页面的服务器渲染版本与常规版本进行比较，检查任何 URL 的 SSR（服务器端渲染）。|
| [testingbot.com](<https://testingbot.com/>) — Selenium 浏览器和设备测试，免费开源。| [免费开源](<https://testingbot.com/open-source>) — testingbot.com - Selenium 浏览器和设备测试，免费开源。|
| [Testspace.com](<https://testspace.com/>) — 用于发布自动化测试结果的仪表板和使用 GitHub 将手动测试作为代码实施的框架。该服务对开源免费，每月有 450 个结果。 [免费开源](<https://github.com/marketplace/testspace-com>) — Testspace 开源市场详细信息。
| [tesults.com](<https://www.tesults.com>) — 测试结果报告和测试用例管理。开源软件开发人员、个人、教育工作者和小型团队可以请求除基本免费项目之外的折扣和免费产品。 [UseWebhook.com](<https://usewebhook.com>) — 从浏览器采集并检查 webhook。免费使用。|
| [Vaadin](<https://vaadin.com>) — 使用 Java 或 TypeScript 构建可扩展的 UI，并使用集成工具、组件和设计系统来更快地迭代、更好地设计并简化开发过程。无限项目，五年免费维护。 [webhook.site](<https://webhook.site>) — 验证 webhook、出站 HTTP 请求或具有自定义 URL 的电子邮件。临时 URL 和电子邮件地址始终免费。|
| [websitepulse.com](<https://www.websitepulse.com/tools/>) — 各种免费网络和服务器工具。 [kogiQA](<https://kogiqa.com>) — 一种 Web UI 自动化工具，无需选择器即可运行。每个开发者每月免费获取 500 次操作。|
| [BrowserStack](<https://www.browserstack.com/>) — 在真实设备和浏览器上进行手动和自动浏览器测试。免费用于开源项目，全面集成 CI/CD。| [Sauce Labs](<https://saucelabs.com/>) — 在真实设备和浏览器上进行基于云的测试，提供自动和手动测试。对于开源项目免费。|
| [Applitools](<https://applitools.com/>) — 具有基于 AI 的智能视觉比较的视觉验证测试工具。对于视觉回归测试使用有限的开源项目免费。| [Playwright](<https://playwright.dev/>) - 用于浏览器测试的开源自动化库，具有无头测试和跨浏览器支持等功能。|
| [Selenium](<https://www.selenium.dev/>) — 浏览器自动化的开源框架，对所有人免费，广泛用于 Web 应用测试。| [Ghost Inspector](<https://ghostinspector.com/>) — 免费供一名用户使用，具有自动浏览器测试功能，支持计划测试和 CI/CD 集成。

[返回顶部](#free-resource-catalog)

#### 包构建系统


|资源和免费层上下文 |资源和免费层上下文 |
|---|---|
| [build.opensuse.org](<https://build.opensuse.org/>) — 多个发布版（SUSE、EL、Fedora、Debian 等）的软件包构建服务。| [copr.fedorainfracloud.org](<https://copr.fedorainfracloud.org>) — 用于 Fedora 和 EL 的基于模拟的 RPM 构建服务。
| [help.launchpad.net](<https://help.launchpad.net/Packaging>) — Ubuntu 和 Debian 构建服务。  |

[返回顶部](#free-resource-catalog)

#### IDE 和代码编辑


|资源和免费层上下文 |资源和免费层上下文 |
|---|---|
| [Android Studio](<https://developer.android.com/studio>) — Android Studio 提供了在各种类型的 Android 设备上构建应用的最快工具。开源 IDE 对所有人免费，是最好的 Android 应用开发。| [AndroidIDE](<https://m.androidide.com/>) — 一个开源 IDE，用于在 Android 设备上开发真正的、基于 Gradle 的 Android 应用。|
| [Apache Netbeans](<https://netbeans.apache.org/>) — 开发环境、工具平台和应用框架。 [apiary.io](<https://apiary.io/>) — 协作设计 API，具有即时 API 模拟和生成文档（免费提供无限 API 蓝图和无限用户，只需一个管理员账户和托管文档）。|
| [BBEdit](<https://www.barebones.com/>) — BBEdit 是一款应用于 macOS 的流行且可扩展的编辑器。免费模式提供了强大的核心功能集和高级功能的升级路径。 [强大核心功能集](<https://www.barebones.com/products/bbedit/comparison.html>) — BBEdit 自由模式功能对比。
| [Binder](<https://mybinder.org/>) — 将 Git 仓库变为交互式笔记本的集合。这是一项免费的公共服务。 [BlueJ](<https://bluej.org>) — 专为初学者设计的免费 Java 开发环境，全球数百万人使用。
| [Brackets](<https://brackets.io/>) — Brackets 是一款专为 Web 开发设计的开源文本编辑器。 [cacher.io](<https://www.cacher.io>) — 带标签的代码片段管理器并支持 100 多种编程语言。|
| [cocalc.com](<https://cocalc.com/>) — 云端协作计算。通过浏览器访问完整的 Ubuntu，内置协作和大量预装的数学、科学、数据科学免费软件：Python、LaTeX、Jupyter Notebooks、SageMath、scikitlearn 等| [Code::Blocks](<https://codeblocks.org>) — 免费的 Fortran 和 C/C++ IDE。开源并在 Windows、macOS 和 Linux 上运行。
| [Codeground](<https://codeground.ai/>) — 应用于 15 种以上语言以及 Postgres、MySQL、MongoDB 和 Redis 的免费浏览器 IDE 和 Playground。免费Playground无需安装。| [codiga.io](<https://codiga.io/>) — 编码助手，可让您直接在 IDE 中搜索、定义和重用代码片段。对于个人和小型组织免费。|
| [Components.studio](<https://webcomponents.dev/>) — 独立编写组件代码、在故事中可视化它们、测试它们并将它们发布到 npm 上。| [Eclipse Che](<https://www.eclipse.org/che/>) — 面向开发团队的基于 Web 的 Kubernetes 原生 IDE，具有多语言支持。开源和社区驱动。|
| [workspaces.openshift.com](<https://workspaces.openshift.com/>) — Eclipse Che 托管工作区详细信息。 [ForgeCode](<https://forgecode.dev/>) — 支持 AI 的结对程序员，应用于 Claude、GPT4 系列、Grok、Deepseek、Gemini 和所有前沿模型。免费套餐包括具有本地处理功能的基本 AI 模型访问。
| [GetVM](<https://getvm.io>) — 即时免费的 Linux 和 IDE chrome 侧边栏。免费套餐包括每天 5 个虚拟机。 [JDoodle](<https://www.jdoodle.com>) — 应用于 60 多种编程语言的在线编译器和编辑器，提供免费的 REST API 代码计划，每天最多可编译 200 个积分。|
| [jetbrains.com](<https://jetbrains.com/products.html>) — 生产力工具、IDE 和部署工具（又名 IntelliJ IDEA、PyCharm 等）。学生、教师、开源和用户组的免费许可证。 [IntelliJ IDEA](<https://www.jetbrains.com/idea/>) — jetbrains.com - 生产力工具、IDE 和部署工具（又名 IntelliJ IDEA、PyCharm 等）。学生、教师、开源和用户组的免费许可证。 |
| [PyCharm](<https://www.jetbrains.com/pycharm/>) — jetbrains.com - 生产力工具、IDE 和部署工具（又名 IntelliJ IDEA、PyCharm 等）。学生、教师、开源和用户组的免费许可证。 | [JSONPlaceholder](<https://jsonplaceholder.typicode.com/>) — 一些 REST API 端点以 JSON 格式返回一些虚假数据。|
| [Lazarus](<https://www.lazarus-ide.org/>) — Lazarus 是一款兼容 Delphi 的跨平台 IDE，用于快速应用开发。 [MarsCode](<https://www.marscode.com/>) — 一款免费的 AI 驱动的基于云的 IDE。
| [micro-jaymock](<https://micro-jaymock.now.sh/>) - 用于生成虚假 JSON 数据的微型 API 模拟微服务。 [mockaroo](<https://mockaroo.com/>) — Mockaroo 可让您生成 CSV、JSON、SQL 和 Excel 格式的真实测试数据。|
| [Mocklets](<https://mocklets.com>) — 一个基于 HTTP 的模拟 API 模拟器，可帮助模拟 API，以实现更快的并行开发和更全面的测试，并提供终身免费套餐。| [OneCompiler](<https://onecompiler.com/>) — 免费在线编译器，支持 70 多种语言，包括 Java、Python、C++、JavaScript。|
| [OnlineGDB](<https://onlinegdb.com>) — 一个免费的在线 IDE，支持 40 多种语言，并预装了大量库；并且还有调试选项、标志、教程和 QNA 页面！| [pterocos](<https://pterocos.eu.org>) — 为前端开发人员提供的基于浏览器的免费开源编码环境。所有项目都保存到本地存储。|
| [Paiza](<https://paiza.cloud/en/>) — 在浏览器中开发 Web 应用，无需进行任何设置。免费计划提供一台具有 24 个 24 小时使用寿命和每天 4 小时运行时间的服务器，具有 2 个 CPU 核心、2 GB RAM 和 1 GB 存储空间。 [PHPSandbox](<https://phpsandbox.io/>) — PHP 在线开发环境。
| [Replit](<https://replit.com/>) — 应用于各种程序语言的云编码环境。| [RunMat](<https://runmat.com/sandbox>) — 浏览器中的 GPU 加速数值计算 IDE。具有 CLI、NPM 包和 Jupyter 内核支持的开源运行时。|
| [SoloLearn](<https://code.sololearn.com>) — 非常适合运行代码片段的云编程Playground。还为初学者和中级编码人员提供免费课程。 [stackblitz.com](<https://stackblitz.com/>) — 用于创建、编辑和部署全栈应用的在线/云代码 IDE。|
| [https://node.new](<https://node.new) — stackblitz.com - 用于创建、编辑和部署全栈应用的在线/云代码 IDE。 [Sublime Text](<https://www.sublimetext.com/>) — Sublime Text 是一款流行的、多功能的、高度可定制的文本编辑器，用于编码和文本编辑任务。
| [Visual Studio Code](<https://code.visualstudio.com/>) - 代码编辑器重新定义和优化，用于构建和调试现代 Web 和云应用。| [Visual Studio Community](<https://visualstudio.microsoft.com/vs/community/>) — 功能齐全的 IDE，具有数千个扩展、跨平台应用开发（可下载应用于 iOS 和 Android 的 Microsoft 扩展）、桌面、Web 和云开发、多语言支持（C#、C++、JavaScript、Python、PHP 等）。|
| [VSCodium](<https://vscodium.com/>) — 社区驱动、无遥测/跟踪、免费许可的 Microsoft 编辑器 VSCode 二进制发布版。| [wakatime.com](<https://wakatime.com/>) — 使用文本编辑器插件对您的编码活动进行量化的自我度量，有限的免费计划。|
| [Wave Terminal](<https://waveterm.dev/>) — Wave 是一个开源、跨平台的终端，可实现无缝工作流程。| [c9.io](<https://c9.io/>) — 浏览器中的 IDE。|
| [koding.com](<http://www.koding.com/>) — 基于云的开发环境。| [codeanywhere.com](<https://codeanywhere.com/>) — 浏览器和移动应用中的完整 IDE。|
| [codenvy.com](<https://codenvy.com/>) — 浏览器中的 IDE 和自动化开发人员工作区、协作、Git/SVN 集成、在可定制的基于 Docker 的运行器中构建和运行您的应用（免费套餐包括：4 GB RAM、始终在线的机器、同时运行多台机器的能力）、预集成部署到 Go…| [Visual Studio Community](<https://visualstudio.microsoft.com/vs/community/>) — 功能齐全的 IDE，具有数千个用于桌面、Web 和云开发的扩展。|
| [code.visualstudio.com](<http://code.visualstudio.com/>) — 构建和调试现代 Web 和云应用。代码是免费、开源的，可在您最喜欢的平台、Linux、Mac OSX 和 Windows 上使用。 [cloud.sagemath.com](<https://cloud.sagemath.com/>) — 浏览器中面向数学的协作 IDE，支持 Python、LaTeX、IPython Notebooks 等|
| | [stackhive.com](<http://stackhive.com/>) — 浏览器中基于云的 IDE，支持 HTML5/CSS3/jQuery/Bootstrap。|
| | [codepen.io](<https://codepen.io/>) — CodePen 是网络前端的Playground。|

[返回顶部](#free-resource-catalog)

#### Docker 相关


|资源和免费层上下文 |资源和免费层上下文 |
|---|---|
| [Appish](<https://appi.sh/>) — 只需通过 docker Push 即可托管用于演示的 Docker 容器。免费套餐包括 1 个时段，每次 2 小时。| [容器注册服务](<https://container-registry.com/>) — 基于 Harbor 的容器管理解决方案。免费套餐为私有仓库提供 1 GB 的存储空间。
| [Docker Hub](<https://hub.docker.com>) — 一个免费的私有仓库和无限的公共仓库，用于构建和存储 Docker 镜像。 [quay.io](<https://quay.io/>) — 使用无限的免费公共仓库构建和存储容器镜像。
| [ttl.sh](<https://ttl.sh/>) — 匿名和临时 Docker 镜像注册表。 [Arukas Cloud](<https://arukas.io/>) — 免费 docker 容器托管，测试期间 10 个，之后 3 个（日语）。
| [Docker Cloud](<https://cloud.docker.com>) — 使用一个免费仓库管理 Docker 容器到您（独立）云环境的部署。 [Docker Hub](<https://hub.docker.com/>) — 使用无限的免费公共仓库构建和存储容器镜像。

[返回顶部](#free-resource-catalog)

#### 功能开关管理平台


|资源和免费层上下文 |资源和免费层上下文 |
|---|---|
| [Abby](<https://www.tryabby.com>) — 开源功能开关和 A/B 测试。慷慨的免费套餐和廉价的扩展选项。 [ConfigCat](<https://configcat.com>) — ConfigCat 是一项以开发人员为中心的功能开关服务，团队规模不受限制，支持出色，价格合理。|
| [Flagsmith](<https://flagsmith.com>) — 放心发布功能；跨网络、移动和服务器端应用管理功能开关。 [GrowthBook](<https://growthbook.io>) - 开源功能开关和 A/B 测试提供商，具有内置贝叶斯统计分析引擎。最多 3 位用户免费，无限的功能开关和实验。|
| [Rollgate](<https://rollgate.io>) — EU 托管的功能开关管理，包括计划发布、即时回滚和 A/B 测试。免费计划每月最多 500K API 请求，无限制标记，3 名团队成员，无需信用卡。| [Hypertune](<https://www.hypertune.com>) — 类型安全功能开关、A/B 测试、分析和应用配置，具有 Git 风格的版本控制和同步、内存中、本地标志评估。最多 5 名团队成员免费，具有无限的功能开关和 A/B 测试。
| [Statsig](<https://www.statsig.com>) — 用于功能开关管理、A/B 测试、分析等的强大平台。其慷慨的免费计划提供无限的席位、标志、实验和动态配置，每月支持多达 100 万个事件。 [Toggled.dev](<https://www.toggled.dev>) — 企业级、可扩展的多区域功能开关管理平台。免费计划最多 10 个标志、两种环境、无限请求。|

### 数据、AI 和可观测性

[返回顶部](#free-resource-catalog)

#### API、数据和 ML


|资源和免费层上下文 |资源和免费层上下文 |
|---|---|
| [Abstract API](<https://www.abstractapi.com>) — 应用于各种用例的 API 套件，包括 IP 地理定位、电话号码验证或电子邮件验证。| [AlphaAI](<https://alphai.io/developers>) — 财经新闻 API 和 MCP 服务器。免费套餐包括 REST 和 MCP 上每分钟 20 个请求和每天 100 个请求，无需卡片。
| [AnyHook](<https://anyhook.net>) — 入站 Webhook 中继：将 Stripe、GitHub 或 LINE 机器人 Webhook 指向它，它会在传递给处理程序之前存储每个事件，自动重试。免费套餐：免费计划包括每月 3,000 个事件、1 个应用、3 次重试和 3 天保留，无需信用卡。...| [Apify](<https://www.apify.com/>) — 网络抓取和自动化平台，可为任何站点创建 API 并提取数据。免费计划，每月包含 5 美元平台积分。|
| [APITemplate.io](<https://apitemplate.io>) — 使用简单的 API 或 Zapier 和 Airtable 等自动化工具自动生成图像和 PDF 文档。免费计划包含 50 张图像/月和三个模板。 [APIVerve](<https://apiverve.com>) — 免费即时访问超过 120 多个 API，其构建时考虑到了质量、一致性和可靠性。免费计划涵盖每月最多 50 个 API 令牌。
| [Arize AI](<https://arize.com/>) — AI 工程平台，可帮助 AI 工程师/项目经理评估和监控内置 Alyx 代理的 AI 应用和代理。免费产品包括 25k 跨度和每月 1 GB 的摄取量。| [Beeceptor](<https://beeceptor.com>) — 用于模拟和调试多协议 API（REST、SOAP、gRPC 和 GraphQL）的无代码、基于云的平台，为即时服务器提供基于规则的 l.免费套餐：免费计划包括每天 50 个请求，并提供一个公共仪表板/端点，任何有破折号的人都可以… |
| [BigDataCloud](<https://www.bigdatacloud.com/>) — 为现代网络提供快速、准确且免费（无限制或高达 10K-50K/月）的 API，例如 IP 地理定位、反向地理编码、网络见解、电子邮件和电话验证、客户信息等。| [Brave Search API](<https://brave.com/search/api/>) — 独立的网页、新闻、图像、视频搜索和 AI/LLM 上下文 API，应用于 RAG 管道和 AI 代理。免费套餐包括每月 5 美元的积分（需要信用卡进行验证）。|
| [Browse AI](<https://www.browse.ai>) — 在网络上提取和监控数据。每月 1k 积分免费，相当于 1k 并发请求。| [Calendarific](<https://calendarific.com>) — 应用于 200 多个国家/地区的企业级公共假期 API 服务。免费计划包括每月 500 次通话。
| [Canopy](<https://www.canopyapi.co/>) — 用于 Amazon.com 产品、搜索和类别数据的 GraphQL API。免费计划包括每月 100 次通话。 [CarAPI.dev](<https://carapi.dev>) — 全面的汽车数据 API，具有 VIN 解码、被盗车辆检查、车辆估价、检查数据等。免费套餐包括每月 100 个请求，跨所有 9 个端点。
| [CatchDoms](<https://catchdoms.com>) — 来自 16 个市场的过期和已删除域名列表的聚合器，具有 SEO 丰富功能（反向链接、信任流、Wayback 历史记录）和质量评分。免费计划：10 个解锁列表、5 个收藏夹、3 个已保存搜索。| [Cloudmersive](<https://cloudmersive.com/>) — 实用 API 平台，可完全访问扩展的 API 库，包括文档转换、病毒扫描等，每月 600 次调用，仅限北美可用区，最大文件大小 2.5 MB。|
| [CometML](<https://www.comet.com/site/>) — 用于实验跟踪、模型生产管理、模型注册和完整的数据血缘的 MLOps 平台，涵盖从培训到生产的工作流程。对个人和学者免费。| [Commerce Layer](<https://commercelayer.io>) — 可组合的商务 API，可以从任何前端构建、下达和管理订单。开发者计划允许每月 100 个订单和最多 1,000 个 SKU 免费。
| [Composio](<https://composio.dev/>) — AI 代理和 LLM 的集成平台。| [Conversion Tools](<https://conversiontools.io/>) — 用于文档、图像、视频、音频和电子书的在线文件转换器。支持高达 50 GB 的文件（对于付费计划）。|
| [国家-状态-城市微服务 API](<https://country-state-city.rebuscando.info/>) — API 和微服务提供广泛的信息，包括国家、地区、省份、城市、邮政编码等。免费套餐每天最多包含 100 个请求。| [Coupler](<https://www.coupler.io/>) — 在应用之间同步的数据集成工具。免费计划仅限于一个用户、数据连接、数据源和数据目标。|
| [CraftMyPDF](<https://craftmypdf.com>) — 使用拖放编辑器和简单的 API 从可复用的模板自动生成 PDF 文档。免费计划附带 100 个 PDF/月和三个模板。 [Cube](<https://cube.dev/>) — Cube 帮助数据工程师和应用开发人员从现代数据存储中访问数据，将其组织成一致的定义，并将其交付给每个应用。使用 Cube 的最快方法是使用 Cube Cloud，它的免费套餐仅限每天 1,000 次查询。|
| [CurlHub](<https://curlhub.io>) — 用于检查和调试 API 调用的代理服务。免费计划包括每月 10,000 个请求。 [CurrencyScoop](<https://currencyscoop.com>) — 用于金融科技应用的实时货币数据 API。免费计划包括每月 5,000 次通话。|
| [CustomJS](<https://www.customjs.io>) — HTML 到 PDF 或 PDF 到 PNG/文本和 PDF 合并/提取/合并 API。免费套餐每月有 600 个呼叫。| [Data Fetcher](<https://datafetcher.com>) — 无需代码即可将 Airtable 连接到任何应用或 API。用于在 Airtable 中运行 API 请求的类似于 Postman 的接口。
| [Data Miner](<https://dataminer.io/>) — 用于从网页 CSV 或 Excel 中提取数据的浏览器扩展程序（Google Chrome、MS Edge）。免费计划为您提供 500 页/月。| [Dataimporter.io](<https://www.dataimporter.io>) — 用于连接、清理数据并将数据导入 Salesforce 的工具。免费计划每月最多包含 20,000 条记录。|
| [Datalore](<https://datalore.jetbrains.com>) — Jetbrains 的 Python 笔记本。包括 10 GB 存储空间和每月 120 小时的运行时间。 [DB Designer](<https://www.dbdesigner.net/>) — 基于云的数据库模式设计和建模工具，提供 2 个数据库模型和每个模型 10 个表的免费入门计划。|
| [DB-IP](<https://db-ip.com/api/free>) — 免费的 IP 地理定位 API，每个 IP 每天有 1k 请求。CC-BY 4.0 许可证下的 Lite 数据库也是免费的。| [DeepAR](<https://developer.deepar.ai>) — 具有一个 SDK 的应用于任何平台的增强现实面部滤镜。免费计划提供最多 10 个每月活跃用户 (MAU) 并跟踪最多 4 个面孔。
| [Deepnote](<https://deepnote.com>) — 一个新的数据科学笔记本。免费套餐包括无限个个人项目、无限个具有 5GB RAM 和 2vCPU 的基础机器以及最多 3 名编辑的团队。 [Compare JSON](<https://comparejson.com>) — 一个在线比较两种 JSON 数据结构差异的工具，帮助您快速定位 JSON 数据的差异。
| [Disease.sh](<https://disease.sh/>) — 一个免费的 API，为构建 Covid-19 相关的有用应用提供准确的数据。| [Doczilla](<https://www.doczilla.app/>) — SaaS API 支持直接从 HTML/CSS/JS 代码生成屏幕截图或 PDF。免费计划每月允许 250 个文档。
| [Doppio](<https://doppio.sh/>) — 使用顶级渲染技术生成和私有存储 PDF 和屏幕截图的托管 API。免费计划每月允许 400 个 PDF 和屏幕截图。 [DocPenny](<https://docpenny.com>) — 使用模板、Webhook 交付和基于信用的定价生成 HTML 到 PDF 文档。免费计划，每月 50 个积分，无需信用卡。|
| [Doqlo](<https://doqlo.com/>) — 使用 Web 应用或公共 API 从 CSV 批量填写和邮件合并 PDF 表单。免费计划包括每月 100 个 PDF 输出。| [drawDB](<https://drawdb.app/>) — 免费开源在线数据库图表编辑器，无需注册。|
| [DynamicDocs](<https://advicement.io>) — 基于 LaTeX 模板，使用 JSON to PDF API 生成 PDF 文档。免费计划允许每月 50 次 API 调用并访问模板库。| [Earnings Feed](<https://earningsfeed.com/api>) — 实时 SEC 文件、内幕交易和机构持股 API。免费套餐包括每分钟 15 个请求。|
| [导出 SDK](<https://exportsdk.com>) — PDF 生成器 API，带有拖放模板编辑器，提供 SDK 和无代码集成。免费计划有 250 个每月页面、无限用户和三个模板。 [ExtendsClass](<https://extendsclass.com/rest-client-online.html>) — 用于发送 HTTP 请求的免费基于 Web 的 HTTP 客户端。
| [金融数据](<https://financialdata.net/>) — 股票市场和金融数据 API。免费计划每天允许 300 个请求。| [Firecrawl](<https://www.firecrawl.dev/>) — 抓取站点并将其转换为干净的、LLM 就绪的 markdown 或结构化数据的 API，处理 JavaScript 渲染、代理和速率限制。免费计划包括每月 1,000 个积分，无需信用卡。|
| [finlight](<https://finlight.me>) — 具有实体解析（股票、ISIN）和情绪标记的实时财经新闻 API，可通过 REST、WebSocket、webhooks 和 MCP 服务器使用。免费套餐：REST 和 MCP 上每月 5,000 个请求，文章延迟 12 小时，无需卡片。  |
| [FormatJSONOnline.com](<https://formatjsononline.com>) — 一款基于浏览器的免费工具，用于即时格式化、验证、比较和缩小 JSON 数据。| [FraudLabs Pro](<https://www.fraudlabspro.com>) — 帮助商家防止付款欺诈和退款。免费微型计划可提供每月 500 次查询。|
| [FreeIPAPI](<https://freeipapi.com>) — 为商业和非商业用户提供免费、快速且可靠的 IP 地理定位 API，以 JSON 格式提供。 [Geolocated.io](<https://geolocated.io>) — 具有多洲服务器的 IP 地理定位 API，提供每天 2,000 个请求的免费计划。|
| [Hex](<https://hex.tech/>) — 用于笔记本、数据应用和知识库的协作数据平台。免费社区层最多包含五个项目。| [Hook0](<https://www.hook0.com/>) — Hook0 是一种开源 Webhooks 即服务 (WaaS)，可让在线产品轻松提供 Webhooks。每天发送最多 100 个事件，并免费保留 7 天的历史记录。
| [Hoppscotch](<https://hoppscotch.io>) — 一个免费、快速、美观的 API 请求生成器。| [HS Ping](<https://hsping.com>) — 多国 HS（统一制度）和 HTS（统一关税制度）代码查找 API，免费计划每天提供 100 次查找。|
| [huggingface.co](<https://huggingface.co>) — 为 Pytorch、TensorFlow 和 JAX 构建、训练和部署 NLP 模型。每月最多可释放 30k 输入字符。| [Insomnia](<https://insomnia.rest>) - 用于设计和测试 API 的开源 API 客户端，它支持 REST 和 GraphQL。|
| [Inngest](<https://www.inngest.com>) — 应用于 TypeScript、Python 和 Go 的持久执行和事件驱动工作流程。爱好计划是免费的，每月执行 50,000 次，5 个并发步骤，摄取 500,000 个事件，无需信用卡。| [Invantive Cloud](<https://cloud.invantive.com/>) — 使用 Invantive SQL 或 OData4（通常是 Power BI 或 Power Query）访问 70 多个（云）平台，例如 Exact Online、Twinfield、ActiveCampaign 或 Visma。为开发人员和实施顾问提供免费计划。|
| [ipwho.org 提供的 IP 地理定位 API](<https://ipwho.org/>) — 每天 2,000 个免费请求。| [IP 地理定位 API](<https://www.abstractapi.com/ip-geolocation-api>) — 摘要中的 IP 地理定位 API - 允许 1,000 个免费请求。
| [IP 地理定位](<https://ipgeolocation.io/>) — 免费开发者计划，每月可处理 30K 请求。| [ip-api](<https://ip-api.com>) — IP 地理定位 API，免费用于非商业用途，无需 API 密钥，免费计划的同一 IP 地址限制为 45 个请求/分钟。|
| [IP.City](<https://ip.city>) — 每天 100 个免费 IP 地理定位请求。| [IP2Location.io](<https://www.ip2location.io/>) — 免费增值、快速且可靠的 IP 地理定位 API。免费计划包括每月 50k 积分。|
| [Proxmint GeoIP](<https://proxmint.com/tools/ip-lookup>) — 免费 IP → 国家/城市/ASN JSON API，无密钥，CORS 开放。| [ip2geo.dev](<https://ip2geo.dev>) — IP 地理定位 API，用于将 IP 地址转换为位置数据，包括城市、国家、时区、ASN 和货币。免费计划包括每月 1,000 个请求。
| [ipaddress.sh](<https://ipaddress.sh>) — 获取不同格式的公共 IP 地址的简单服务。| [格式](<https://about.ipaddress.sh/>) — ipaddress.sh - 获取不同格式的公共 IP 地址的简单服务。 |
| [ipapi.is](<https://ipapi.is/>) — 来自开发人员为开发人员提供的可靠 IP 地址 API，具有现有的最佳托管检测功能。免费计划提供 1000 次查找，无需注册。| [ipapi](<https://ipapi.co/>) — Kloudend, Inc 的 IP 地址定位 API - 基于 AWS 构建的可靠地理定位 API，受到财富 500 强企业的信赖。免费套餐每月提供 30k 次查找（1k/天），无需注册。|
| [ipbase.com](<https://ipbase.com>) — IP 地理定位 API - 永久免费计划，涵盖 150 个每月请求。| [IPinfo](<https://ipinfo.io/>) — 快速、准确且免费（高达 50k/月）的 IP 地址数据 API。所有付费 API 均可免费试用。
| [IPLocate](<https://www.iplocate.io>) — IP 地理定位 API，每天最多免费 1,000 个请求。 IPLocate 还以 CSV 或 GeoIP 兼容的 MMDB 格式提供免费下载的 IP 到国家/地区和 IP 到 ASN 数据库。 [IPTrace](<https://iptrace.io>) — 一个极其简单的 API，可为您的企业提供可靠且有用的 IP 地理定位数据，每月可进行 50,000 次免费查找。|
| [JSON IP](<https://getjsonip.com>) — 返回请求的客户端的公共 IP 地址。免费套餐无需注册。| [JSON 转表格](<https://jsontotable.org>) — 将 JSON 转换为交互式表格，以便快速查看、编辑和在线共享。
| [JSON2Video](<https://json2video.com>) — 一种视频编辑 API，用于以编程方式或无需代码的方式自动执行视频营销和社交媒体视频。| [JSONGrid](<https://jsongrid.com>) — 免费工具，可将复杂的 JSON 数据可视化、编辑、过滤到漂亮的表格网格中。|
| [JSONing](<https://jsoning.com/api/>) — 从 JSON 对象创建假 REST API，并自定义 HTTP 状态代码、标头和响应正文。| [JSONSwiss](<https://www.jsonswiss.com/>) — JSONSwiss 是一个强大的在线 JSON 查看器、编辑器和验证器。
| [KillBait API](<https://killbait.com/api/doc>) — KillBait API 允许用户提交 URL 进行内容评估、检测潜在的标题诱饵并对文章进行分类。| [Kreya](<https://kreya.app>) — 免费 gRPC GUI 客户端，用于调用和测试 gRPC API。|
| [LoginLlama](<https://loginllama.app>) — 登录安全 API，用于检测欺诈和可疑登录并通知您的客户。每月 1,000 次登录免费。| [市场数据 API](<https://www.marketdata.app>) — 提供股票、期权、共同基金等的实时和历史财务数据。永久免费 API 层允许每天免费进行 100 个 API 请求。
| [Maxim AI](<https://getmaxim.ai/>) — 模拟、评估和监控您的 AI 代理。独立开发者和小型团队永久免费（3 个席位）。| [microlink.io](<https://microlink.io/>) — 它将任何站点转换为数据，例如元标记标准化、美容链接预览、抓取功能或屏幕截图即服务。每天 50 个请求免费。|
| [Mintlify](<https://mintlify.com>) — API 文档的现代标准。 1 名编辑免费。| [MockAPI](<https://www.mockapi.io/>) — MockAPI 是一个简单的工具，可让您快速模拟 API、生成自定义数据并使用 RESTful 接口执行操作。|
| [Mockerito](<https://mockerito.com/>) — 免费模拟 REST API 服务，提供跨 9 个领域（电子商务、金融、医疗保健、教育、招聘、社交媒体、股票市场、天气和航空）的真实数据。| [Mockfly](<https://www.mockfly.dev/>) — Mockfly 是一款值得信赖的 API 模拟和功能开关管理开发工具。免费套餐每天提供 500 个请求。
| [Mocko.dev](<https://mocko.dev/>) — 免费代理您的 API、选择要在云中模拟的端点并检查流量。| [多出口 IP 地址检查器](<https://ip.alstra.ca/>) — 一个免费且简单的工具，用于跨多个节点检查您的出口 IP 地址，并了解您的 IP 在全球不同区域和服务中的显示方式。|
| [NASdisks 驱动器数据 API](<https://www.nasdisks.com/data/>) — 免费、无密钥、支持 CORS 的 API，应用于 NAS HDD/SSD 规格、每个模型的 CMR/SMR 分类以及源自 Backblaze Drive Stats 的年度故障率。 [新闻 API](<https://newsapi.org>) — 使用代码在网络上搜索新闻，并获取 JSON 结果。开发者每天免费获取 100 个查询。|
| [numlookupapi.com](<https://numlookupapi.com>) — 免费电话号码验证 API - 每月 100 个免费请求。 [OCR.Space](<https://ocr.space/>) — OCR API 解析图像和 pdf 文件，并以 JSON 格式返回文本结果。每月 25,000 个请求免费，文件大小限制为 1MB。|
| [OpenAPI3 Designer](<https://openapidesigner.com/>) — 免费直观地创建 Open API 3 定义。 [Parseur](<https://parseur.com>) — 20 个免费页面/月：从 PDF、电子邮件中提取数据。
| [PDF-API.io](<https://pdf-api.io>) — PDF 自动化 API、可视化模板编辑器或 HTML 转 PDF、动态数据集成以及使用 API 进行 PDF 渲染。免费计划附带一个模板，每月 100 个 PDF。| [PDFBolt](<https://pdfbolt.com>) — 以开发人员为中心的 PDF 生成 API，设计时考虑到隐私。它提供受 Stripe 启发的文档，并包含每月 500 次免费 PDF 转换。
| [Pexafy](<https://pexafy.com>) — 跨 9 个免费照片源（Unsplash、Pexels、Pixabay、Kaboompics 等）的语义图像搜索 API，一个 JSON 模式下有超过 900 万张照片，而不是每个源一个集成。| [Pixela](<https://pixe.la/>) — 免费的日流数据库服务。所有操作均由 API 执行。
| [Posthook](<https://posthook.io>) — 安排 webhooks 在未来某个时间触发，并提供自动重试、传送跟踪和故障告警。免费计划包括每月 1,000 个 Webhook。| [Postman](<https://postman.com>) — 使用 API 开发协作平台 Postman 简化工作流程并更快地创建更好的 API。永久免费使用邮递员应用。
| [PrefectCloud](<https://www.prefect.io/cloud/>) — 一个完整的数据流自动化平台。免费计划包括 5 个已部署的工作流程和每月 500 分钟的无服务器计算积分。| [Preset Cloud](<https://preset.io/>) — 托管的 Apache Superset 服务。对于最多 5 名用户的团队永远免费，具有无限的仪表板和图表、无代码图表生成器和协作 SQL 编辑器。
| [ProxySentry](<https://proxysentry.io/>) — 用于检测住宅代理和 VPN 的 IP API。 ProxySentry.io 在rapidapi.com 上提供每月 10k 个请求的免费套餐。| [Reducto](<https://reducto.ai>) — 将任何非结构化文档（PDF、XLSX、JPG、PPTX 等）转换为结构化 JSON 数据。免费套餐，包含 15k 免费积分和即用即付。|
| [Rendi](<https://rendi.dev>) — FFmpeg API - FFmpeg 的 REST API，在线运行 FFmpeg，无需处理基础设施。免费套餐，具有每月处理配额和 4 个可用 vCPU。 [RequestBin.com](<https://requestbin.com>) — 创建一个可以向其发送 HTTP 请求的免费端点。发送到该端点的任何 HTTP 请求都将与关联的负载和标头一起日志记录，以便您可以监控来自 webhooks 和其他服务的建议。
| [ROBOHASH](<https://robohash.org/>) — 用于从任何文本生成独特且炫酷镜像的 Web 服务。 [Scraper's Proxy](<https://scrapersproxy.com>) — 用于抓取的简单 HTTP 代理 API。每月前 100 次成功抓取免费，包括 javascript 渲染（如果您联系支持人员，可以获取更多信息）。|
| [ScrapingAnt](<https://scrapingant.com/>) — 无头 Chrome 抓取 API 和免费检查代理服务。免费 10,000 API 积分。| [SerpApi](<https://serpapi.com/>) — 实时搜索引擎抓取 API。免费计划包括每月 100 次成功的 API 调用。
| [Simplescraper](<https://simplescraper.io>) — 每次操作后触发您的 webhook。免费计划包括 100 个云抓取积分。 [Geekflare API](<https://geekflare.com/api/>) — Geekflare API 可让您将站点抓取到 Markdown 中、截取屏幕截图、执行 TLS 扫描和 DNS 查找、测试加载时间等。免费计划每月提供 500 个 API 积分（例如 500 次 DNS 查找、250 次网络抓取或 100 次屏幕截图）。|
| [信用映射](<https://docs.geekflare.com/api/api-credit-mapping>) — Geekflare API 信用映射。| [SmartParse](<https://smartparse.io>) — SmartParse 是一个数据迁移和 CSV 到 API 平台，提供节省时间和成本的开发人员工具。免费套餐包括每月 300 个处理单元、浏览器上传、数据隔离、断路器和作业告警。
| [Sofodata](<https://www.sofodata.com/>) — 从 CSV 文件创建安全的 RESTful API。免费计划包括 2 个 API 和每月 2,500 次 API 调用。 [Sqlable](<https://sqlable.com/>) — 免费在线 SQL 工具的集合，包括 SQL 格式化程序和验证程序、SQL 正则表达式测试程序、假数据生成器和交互式数据库Playground。|
| [Svix](<https://www.svix.com/>) — Webhooks 即服务。每月免费发送多达 50,000 条消息。| [Tavily AI](<https://tavily.com/>) — 在线搜索、快速洞察和综合研究的 API，具有研究结果的组织能力。免费套餐每月 1000 个请求，无需信用卡。|
| [TemplateFox](<https://pdftemplateapi.com>) — PDF 生成 API，具有可视化模板编辑器、动态数据合并和应用于 7 种语言的 SDK。免费计划包括每月 60 个 PDF 和 3 个模板。 [IP API](<https://theipapi.com/>) — IP 地理定位 API，每天有 1000 个免费请求。|
| [TinyMCE](<https://www.tiny.cloud>) — 富文本编辑 API。核心功能免费，无限制使用。| [Tomorrow.io Weather API](<https://www.tomorrow.io/weather-api/>) — 提供免费的天气 API 计划。|
| [Treblle](<https://www.treblle.com>) — Treblle 帮助团队构建、发布和管理 API。您可以免费获取所有功能，但免费套餐每月最多有 25 万个请求的限制。 [Trophy](<https://trophy.so>) — Trophy 是消费者应用的游戏化层。每月最多 1,000 名活跃用户免费。|
| [UniRateAPI](<https://unirateapi.com>) — 590 多种货币和加密货币的实时汇率。免费计划提供无限制的 API 调用，非常适合开发人员和金融应用。| [vatcheckapi.com](<https://vatcheckapi.com>) — 简单且免费的增值税号验证 API。每月 150 次免费验证。|
| [vatnode](<https://vatnode.dev>) — 具有 VIES 和国家税务登记后备功能的欧盟增值税号验证 REST API，返回审计记录在案的官方 VIES 咨询号。每月 100 次验证的免费套餐，无需信用卡。| [WeatherXu](<https://weatherxu.com/>) — 全球天气数据，包括当前状况、每小时和每日预报以及通过我们的 API 发出的天气告警。免费套餐包括每月 10,000 次 API 调用。|
| [WebScraping.AI](<https://webscraping.ai>) — 简单的 Web 抓取 API，具有内置解析、Chrome 渲染和代理。每月 2000 次免费 API 调用。 [Weights & Biases](<https://wandb.ai>) — 开发人员优先的 MLOps 平台。免费套餐仅应用于个人项目，包含 100 GB 存储空间。|
| [我的 IP 是什么](<https://whatismyip.help>) — 一项免费服务，可通过具有不同输出格式的 API 检查您的公共 IPv4 和 IPv6 地址及相关请求数据，以实现自动化、脚本和网络故障排除。 [区别](<https://whatthediff.ai>) — AI 支持的代码审查助手。免费计划的每月限额为 25,000 个令牌（约 10 个 PR）。|
| [XFlux](<https://www.xfluxapi.com>) — X/Twitter 读取 REST API（个人文档、搜索、时间线）以及账户监视器。免费套餐：每月 1,000 次 API 调用、1 个监视器、即时 API 密钥。| [wolfram.com](<https://wolfram.com/language/>) — 云端内置基于知识的算法。|
| [wrapapi.com](<https://wrapapi.com/>) — 将任何站点变为参数化 API。每月 30,000 次 API 调用。| [Zenscrape](<https://zenscrape.com/web-scraping-api>) — 具有无头浏览器、住宅 IP 和简单定价的 Web 抓取 API。每月 1000 次免费 API 调用，并为学生和非营利组织提供额外学分。|
| [Zipcodebase](<https://zipcodebase.com>) — 免费邮政编码 API，访问全球邮政编码数据。每月 5,000 个免费请求。| [Zip-Codes](<https://www.zip-codes.com/api/>) — 应用于美国和加拿大邮政编码的 REST API，具有地址验证、半径搜索和人口普查功能。每天 2,500 个免费请求。|
| [Zipcodestack](<https://zipcodestack.com>) — 免费邮政编码 API 和邮政编码验证。每月一万个免费请求。| [Zuplo](<https://zuplo.com/>) — 免费的 API Management 平台，用于设计、构建 API 并将其部署到边缘。在几分钟内将 API 密钥身份验证、速率限制、开发人员文档和货币化添加到任何 API。|
| [Metashot](<https://metashot.io>) — Open Graph (OG) 社交预览图像生成 API。免费套餐：1,000 次渲染/月。| [dreamfactory.com](<http://dreamfactory.com/>) — 应用于移动、Web 和 IoT 应用的开源 REST API 后端。连接任何 SQL/NoSQL 数据库、文件存储系统或外部服务，它会立即创建一个具有实时文档、用户管理等功能的全面 REST API 平台...|
| [monkeylearn.com](<http://monkeylearn.com/>) — 使用机器学习进行文本分析，每月免费 100,000 次查询。| [wit.ai](<https://wit.ai/>) — 面向开发者的 NLP。|
| [parsehub.com](<https://parsehub.com/>) — 从动态站点中提取数据，将动态站点转换为 API，免费 5 个项目。| [import.io](<https://import.io/>) — 轻松将站点变成 API，终身完全免费。|
| [algorithmia.com](<https://algorithmia.com/>) — 免费托管算法。包括运行算法的每月免费津贴。 [bigml.com](<https://bigml.com/>) — 托管机器学习算法。无限免费开发任务，每个任务限制 16 MB 数据。|
| [mashape.com](<https://www.mashape.com/>) — API 市场以及用于私有和公共 API 的强大工具。对于免费套餐，某些功能受到限制，例如监控、告警和支持。 [dominodatalab.com](<https://www.dominodatalab.com>) — 支持 Python、R、Spark、Hadoop、Matlab 等的数据科学。|
| | [restlet.com](<http://restlet.com/products/apispark/>) — APISpark 使任何 API、应用或数据所有者都可以通过直观的浏览器界面在几分钟内成为 API 提供商。|
| [scrapinghub.com](<http://scrapinghub.com>) — 使用可视化界面和插件进行数据抓取。免费计划包括在共享服务器上无限制地抓取。| |
| [cloudrail.com](<https://cloudrail.com>) — API 集成解决方案。  |

[返回顶部](#free-resource-catalog)

#### 生成式 AI


|资源和免费层上下文 |资源和免费层上下文 |
|---|---|
| | [Braintrust](<https://www.braintrustdata.com/>) — Gen AI 的评估、提示Playground和数据管理。免费计划每周提供最多 1,000 行私有评估行。
| [Clair](<https://askclair.ai/>) — 临床 AI 参考。学生可以免费使用专业工具套件，其中包括开放搜索、临床摘要、医学评论、药物相互作用、ICD-10 代码和管理。 [Comet Opik](<https://www.comet.com/site/products/opik/>) — 在您的开发和生产生命周期中评估、测试和交付 LLM 应用。
| [#opensource](<https://github.com/comet-ml/opik/>) — Opik 开源 LLM 评估仓库。| [Future AGI](<https://futureagi.com>) - 用于评估、监控和改进 LLM 和 AI 代理应用的开源平台，具有跟踪、评估、模拟和护栏。免费套餐：免费套餐包括 50GB 存储、2K 评估积分、100K AI 网关请求/月、1M 文本代理模拟令牌……|
| [#opensource](<https://github.com/future-agi/future-agi>) — 未来 AGI 开源 LLM 和代理评估仓库。 [Gonka Broker](<https://gonkabroker.com/>) — 用于在去中心化 Gonka.ai GPU 网络上提供服务的开源模型的 OpenAI 兼容 API。每月 100 万以上免费令牌。|
| [关键词 AI](<https://keywordsai.co>) — 最好的 LLM 监控平台。每月 10,000 个免费请求，平台功能 0 美元！| [Langfuse](<https://langfuse.com/>) — 开源 LLM 工程平台，可帮助团队协作调试、分析和迭代其 LLM 应用。永久免费计划包括每月 50k 次监控和所有平台功能。|
| [#opensource](<https://github.com/langfuse/langfuse>) — Langfuse 开源 LLM 工程仓库。| [LangWatch](<https://langwatch.ai>) — 一个 LLMOps 平台，帮助 AI 团队度量、监控和优化 LLM 应用的可靠性、成本效率和性能。免费计划包括所有平台功能、每月 1k 条跟踪和 1 个工作流程 DSPy 优化器。
| [#opensource](<https://github.com/langwatch/langwatch>) — LangWatch 开源 LLM 可观测性仓库。 [Latitude](<https://latitude.so>) — 开源 (MIT) LLM 可观测性和评估平台，用于跟踪、监控和评估生产中的 AI 代理。免费入门计划包括每月 20K 积分、30 天数据保留和无限席位。
| [#opensource](<https://github.com/latitude-dev/latitude-llm>) — Latitude 开源 LLM 评估仓库。| [Lumenfall.ai](<https://lumenfall.ai/>) — AI 媒体网关，通过兼容 OpenAI 的 API 提供对领先图像生成模型的统一访问。该平台本身免费使用，零加价，无订阅费。
| [Maxim](<https://www.getmaxim.ai>) — 一个 LLM 评估和可观测性平台，具有代理模拟和提示Playground。免费套餐提供 10k 每月日志、通过 BYOK 访问提示Playground、模拟和评估。 [Mediaworkbench.ai](<https://mediaworkbench.ai>) — MediaWorkbench.ai 为 Azure OpenAI、DeepSeek 和 Google Gemini 模型提供 100,000 个免费单词，使用户能够访问用于代码生成、深入研究和图像创建的强大工具。
| [OpenRouter](<https://openrouter.ai/models?q=free>) — 提供各种免费的 AI 模型，包括 DeepSeek R1、V3、Llama 和 Moonshot AI。请注意，虽然这些模型可以免费使用，但它们受到速率限制。 [Pollinations.AI](<https://pollinations.ai/>) — 易于使用的免费图像生成 AI，提供免费 API。|
| [#opensource](<https://github.com/pollinations/pollinations>) — Pollinations.AI 开源图像生成仓库。| [Portkey](<https://portkey.ai/>) — Gen AI 应用的控制面板，具有可观测性套件和 AI 网关。每月免费发送和日志记录多达 10,000 个请求。|
| [ReportGPT](<https://ReportGPT.app>) — AI 支持的写作助手。只要您自带 API key，整个平台都是免费的。| [telemetry.dev](<https://telemetry.dev>) — 基于 OpenTelemetry 的 AI/LLM 应用的可观测性。免费计划包括 10,000 个跨度/月、7 天保留、1 个项目和 2 个席位，无需信用卡。
| [Transcript LOL](<https://transcript.lol/>) — 使用 AI 将音频或视频转换为文本。免费套餐包括每天 2 次转录。 [Zenable](<https://zenable.io>) — 使用护栏构建即时自动修复 Cursor、Windsurf 和 Copilot 等工具的输出，以满足公司的质量和合规性标准。免费层包括每天对 MCP 服务器的 100 次工具调用和 25 个免费的自动拉取请求评论…|

[返回顶部](#free-resource-catalog)

#### 分析、事件和统计


|资源和免费层上下文 |资源和免费层上下文 |
|---|---|
| [amplitude.com](<https://amplitude.com/>) — 每月 100 万个事件，最多 2 个应用。| [AppFit](<https://appfit.io>) — AppFit 是一款全面的分析和产品管理工具，旨在促进分析和产品更新的无缝跨平台管理。免费计划包括每月 10,000 个事件、产品日志和每周见解。
| [Aptabase](<https://aptabase.com>) — 应用于移动和桌面应用的开源、隐私友好且简单的分析。每月最多可免费处理 20,000 个事件。| [Avo](<https://avo.app/>) — 简化的分析发布工作流程。单一事实来源跟踪计划、类型安全的分析跟踪库、应用内调试器和数据可观测性，可在发布之前采集所有数据问题。
| [Beampipe.io](<https://beampipe.io>) — Beampipe 是简单、注重隐私的网络分析。免费最多 5 个域名和 10,000 每月页面浏览量。| [Census](<https://www.getcensus.com/>) — 反向 ETL 和运营分析平台。
| [Clicky](<https://clicky.com>) — 站点分析平台。免费计划一个具有 3000 次浏览分析的站点。| [counter.dev](<https://counter.dev>) — 网络分析变得简单，因此隐私友好。免费或通过捐赠支付您想要的费用。
| [DocBeacon](<https://docbeacon.io>) — 通过文档跟踪和参与分析确保文档共享的安全。免费计划支持最多 20 个 PDF 文档（最大 10 MB）、10 个联系人以及每个文档 2 次共享，并提供浏览量下载、时间和参与度的基本分析。 [Dwh.dev](<https://dwh.dev>) — 数据云可观测性解决方案（Snowflake）。免费供个人使用。|
| [Expensify](<https://www.expensify.com/>) — 费用报告，免费的个人报告审批工作流程。| [getinsights.io](<https://getinsights.io>) — 注重隐私、无 cookie 的分析，每月最多免费提供 3000 个事件。|
| [Gizmo Analytics](<https://gizmoanalytics.io/>) — 为管理大量站点的人员提供简单分析。每月最多可免费处理 10,000 个事件。| [GoatCounter](<https://www.goatcounter.com/>) — GoatCounter 是一个开源网络分析平台，可作为托管服务（免费用于非商业用途）或自托管应用。|
| [Google Analytics](<https://analytics.google.com/>) — Google Analytics。| [heap.io](<https://heap.io>) — 自动采集 iOS 或 Web 应用中的每个用户操作。每月最多可免费使用 10K 次会话。|
| [Hightouch](<https://hightouch.com/>) — Hightouch 是一个反向 ETL 平台，可帮助您将数据仓库中的客户 DataSync 到 CRM、营销和支持工具。免费套餐为您提供一个同步数据的目的地。 [HitKeep](<https://hitkeep.com/>) — 注重隐私的开源网络和产品分析平台，为 3 个站点、3 名团队成员提供免费云计划、60 天数据保留、AI 分析、目标、渠道、事件和点击量。|
| [Hotjar](<https://hotjar.com>) — 站点分析和报告。免费计划允许每天 2000 次浏览量。| [LogSpot](<https://logspot.io>) — 完全统一的网络和产品分析平台，包括嵌入式分析小部件和自动化机器人（slack、telegram 和 webhooks）。免费计划包括每月 10,000 个事件。|
| [Mixpanel](<https://mixpanel.com/>) — 每月 100,000 名跟踪用户、无限数据历史记录和席位、美国或欧盟数据驻留。| [Moesif](<https://www.moesif.com>) — 通过基于使用情况的计费从 API 中产生收入。连接到 Stripe、Chargebee 等。免费套餐每月提供 30,000 个事件。
| [PostHog](<https://posthog.com>) — 完整的产品分析套件免费，每月最多可跟踪 100 万个事件。还提供无限制的应用内调查，每月有 250 个回复。| [Repohistory](<https://repohistory.com>) — 漂亮的仪表板，用于跟踪超过 14 天的 GitHub 仓库流量历史记录。免费计划允许用户监控单个仓库的流量。|
| [Row Zero](<https://rowzero.io>) — 速度极快、互联的电子表格。三本免费（永久）的工作簿。 [Rybbit](<https://rybbit.io>) — 开源且无 cookie 的 Google Analytics 替代方案，直观性高 10 倍。免费计划有 3,000 个每月活动。|
| [Seline](<https://seline.so>) — Seline 是一个简单的私有站点和产品分析。免费计划包括每月 3,000 个事件，并提供对我们所有功能的访问，例如仪表板、用户旅程、渠道等。 [StatCounter](<https://statcounter.com/>) — 站点浏览者分析。免费计划分析 500 个最近访问者。|
| [Statsig](<https://statsig.com>) — 涵盖分析、功能开关和 A/B 测试的集成平台。每月最多免费处理 100 万个度量事件。| [TraceLog](<https://tracelog.io/>) — 电子商务 AI 分析。每月最多免费处理 10,000 个事件。|
| [Trackingplan](<https://www.trackingplan.com/>) — 自动检测数字分析、营销数据和像素问题，维护最新的跟踪计划并促进无缝协作。| [TrackWith Dicloud](<https://dicloud.net/trackwith-privacy-focused-analytics/>) — Google Analytics 的免费、轻量级、注重隐私的替代品。无限的页面浏览量、无限的访问者、无限的页面热图和目标跟踪。|
| [Umami](<https://umami.is/>) — Google Analytics 的简单、快速、注重隐私的开源替代品。| [usabilityhub.com](<https://usabilityhub.com/>) — 在真人身上测试设计和模型并跟踪访客。一位用户免费，无限次测试。|
| [heapanalytics.com](<https://heapanalytics.com/>) — 自动采集 iOS 或 Web 应用中的每个用户操作。每月最多 5,000 次访问免费。| [sematext.com](<https://sematext.com//search-analytics>) — 免费每月最多 5 万次操作、1 天数据保留、无限的仪表板、用户等|
| [gosquared.com](<https://gosquared.com/>) — 免费跟踪多达 1,000 个数据点。| [keen.io](<https://keen.io/>) — 用于数据收集、分析和可视化的自定义分析。每月 50,000 个事件免费。|
| [inspectlet.com](<http://inspectlet.com/>) — 1 个站点每月免费 100 次会话。| [mousestats.com](<https://mousestats.com/>) — 1 个站点每月免费 100 次会话。|
| [metrica.yandex.com](<https://metrica.yandex.com/>) — 无限免费分析。| [imprace.com](<http://imprace.com/>) — 着陆页分析以及提高跳出率的建议。免费 5 个登陆页面/域名。|
| [baremetrics.com](<https://baremetrics.com/>) — Stripe 分析和洞察。| [optimizely.com](<https://optimizely.com>) — A/B 测试解决方案、免费入门计划、1 个站点、1 个 iOS 和 1 个 Android 应用。|
| [expensify.com](<https://expensify.com/>) — 费用报告，免费的个人报告批准工作流程。| [ironSourceatom](<http://www.ironsrc.com/data-flow-management/>) — Atom 数据流管理是一个数据管道解决方案，每月免费提供 1000 万个事件。

[返回顶部](#free-resource-catalog)

#### 地图上的数据可视化


|资源和免费层上下文 |资源和免费层上下文 |
|---|---|
| [Clockwork Micro](<https://clockworkmicro.com/>) — 像发条一样工作的地图工具。每月 5 万次免费查询（地图图块、db2vector、海拔）。| [Foursquare](<https://developer.foursquare.com/>) — 来自 Places API 和 Pilgrim SDK 的位置发现、地点搜索和上下文感知内容。|
| [geoapify.com](<https://www.geoapify.com/>) — 向量和栅格地图图块、地理编码、地点、路由、等值线 API。每天三千个免费请求。| [geocod.io](<https://www.geocod.io/>) — 通过 API 或 CSV 上传进行地理编码。每天两千五百次免费查询。
| [geocodify.com](<https://geocodify.com/>) — 通过 API 或 CSV 上传进行地理编码和地理解析。每月 10,000 次免费查询。| [geojs.io](<https://www.geojs.io/>) — 高度可用的 REST/JSON/JSONP IP 地理位置查找 API。|
| [Geokeo api](<https://geokeo.com>) — 具有语言校正等功能的地理编码 API。每日 2,500 次免费查询。 [graphhopper.com](<https://www.graphhopper.com/>) — 为路由、路由优化、距离矩阵、地理编码和地图匹配提供免费的开发人员包。|
| [此处](<https://developer.here.com/>) — 用于地图和位置感知应用的 API 和 SDK。每月 25 万笔交易免费。| [ipstack](<https://ipstack.com/>) — 通过 IP 地址定位和识别站点访问者。
| [LatLng](<https://www.latlng.work>) — 地理编码、反向地理编码、地点、静态地图和向量地图图块 API。免费套餐包括每天 3,000 个地理编码请求、每天 300 个反向地理编码请求以及每天 100 个静态地图图像。| [locationiq.com](<https://locationiq.com/>) — 地理编码、地图和路由 API。每天 5000 个请求免费。|
| [mapbox.com](<https://www.mapbox.com/>) — 地图、地理空间服务和用于显示地图数据的 SDK。| [maps.stamen.com](<https://maps.stamen.com/>) — 免费地图图块和图块托管。|
| [maptiler.com](<https://www.maptiler.com/cloud/>) — 用于地图可视化的向量地图、地图服务和 SDK。免费向量图块，每周更新和四种地图样式。 [nominatim.org](<https://nominatim.org/>) — OpenStreetMap 的免费地理编码服务，提供全球地址搜索功能和反向地理编码功能。|
| [opencagedata.com](<https://opencagedata.com>) — 聚合 OpenStreetMap 和其他开放地理资源的地理编码 API。每天两千五百次免费查询。 [osmnames](<https://osmnames.org/>) — 地理编码，搜索结果按相关维基百科页面的受欢迎程度排名。
| [positionstack](<https://positionstack.com/>) — 全球地点和坐标的免费地理编码。每月 25,000 个请求供个人使用。| [stadiamaps.com](<https://stadiamaps.com/>) — 地图图块、路由、导航和其他地理空间 API。每天 2500 个免费地图视图和 API 请求，用于非商业使用和测试。

[返回顶部](#free-resource-catalog)

#### 监控


|资源和免费层上下文 |资源和免费层上下文 |
|---|---|
| [Pingzo](<https://www.pingzoapp.com>) — 免费套餐提供 1 个正常运行时间/API 监视器，具有 15 分钟检查间隔和即时电子邮件告警。 [Accesserty Pulse](<https://accesserty.com/en/pulse>) — Accesserty Pulse 监控实时站点上的交互信号和可检测的可访问性风险。适合所有人的免费计划和 14 天 Pro 试用版。
| [AlertKick](<https://www.alertkick.com>) — 服务器安全（Linux 的 eBPF 代理）、正常运行时间监控、待命告警/状态页面在一款产品中。免费套餐包括 10 个正常运行时间监视器和心跳、5 分钟检查间隔、7 天保留。 [assertible.com](<https://assertible.com>) — 自动化 API 测试和监控。适合团队和个人的免费计划。|
| [Better Stack](<https://betterstack.com/better-uptime>) — 单个产品中的正常运行时间监控、事件管理、待命调度/告警和状态页面。免费计划包括 10 个监视器，每 3 分钟检查一次频率和状态页面。 [bleemeo.com](<https://bleemeo.com>) — 免费用于 3 台服务器、5 个正常运行时间监视器、无限用户、无限仪表板、无限告警规则。
| [Core Web Vitals 历史记录](<https://punits.dev/core-web-vitals-historical/>) — 查找 URL 或站点的 Core Web Vitals 历史记录。 [cronitor.io](<https://cronitor.io/>) — 针对 cron 作业、站点、API 等的性能洞察和正常运行时间监控。具有五个显示器的免费套餐。
| [datadoghq.com](<https://www.datadoghq.com/>) — 最多 5 个节点免费。| [deadmanssnitch.com](<https://deadmanssnitch.com/>) — 监控 cron 作业。一名免费告密者（监视器），如果您推荐其他人注册，则可以提供更多。|
| [downtimemonkey.com](<https://downtimemonkey.com/>) — 60 个正常运行时间监视器，间隔 5 分钟。| [drumbeats.io](<https://drumbeats.io/>) — 通过事件管理和状态页面进行 Cron、心跳和正常运行时间监控。免费供最多 50 台显示器使用，间隔时间为 1 分钟，团队席位不受限制。
| [economize.cloud](<https://economize.cloud>) — Economize 通过组织云资源进行优化和报告，帮助揭开云基础设施成本的神秘面纱。每月在 Google Cloud Platform 上消费最多 5,000 美元即可免费。| [ Fivenines.io](<https://fivenines.io/>) — 通过实时仪表板和告警进行 Linux 服务器监控 - 永久免费，最多 5 个受监控服务器，间隔 60 秒。|
| [FlareWarden](<https://flarewarden.com>) — 具有多区域验证和状态页面的正常运行时间、内容、依赖性和 SSL 监控。免费计划包括 15 个显示器、5 分钟检查和 90 天的历史记录。 [Grafana Cloud](<https://grafana.com/products/cloud/>) — Grafana Cloud 是一个可组合的可观测性平台，它将指标和日志与 Grafana 集成。免费：3 个用户、10 个仪表板、100 个告警、Prometheus 和 Graphite 中的指标存储（10,000 个系列，保留 14 天）、Loki 中的日志存储（50 GB 日志，保留 14 天）。
| [healthchecks.io](<https://healthchecks.io>) — 监控您的 cron 作业和后台任务。最多 免费执行 20 次检查。| [incidenthub.cloud](<https://incidenthub.cloud/>) - 云和 SaaS 状态页面聚合器 - 20 个监视器和 2 个通知通道（Slack 和 Discord）永久免费。|
| [inspector.dev](<https://www.inspector.dev>) — 不到一分钟的完整实时监控仪表板，并且永久免费。| [instatus.com](<https://instatus.com>) — 10 秒内获取漂亮的状态页面。永久免费，无限订阅者和无限团队。|
| [isitdownstatus.com](<https://isitdownstatus.com>) — 免费公共 JSON API，返回 500 多个流行服务（GitHub、Stripe、AWS 等）的实时状态。| [linkok.com](<https://linkok.com>) — 在线损坏链接检查器，对于最多 100 页的小型站点免费，对于开源项目完全免费。|
| [loader.io](<https://loader.io/>) — 有限制的免费负载测试工具。| [MarionetteOps.com](<https://www.marionetteops.com/>) — 服务器监控、公共状态页面和服务正常运行时间监控。
| [Middleware.io](<https://middleware.io/>) - 中间件可观测性平台提供对应用和堆栈的完整可见性，因此您可以大规模监控和诊断问题。. 免费层：他们有一个供开发社区使用的永久免费计划，允许对多达 1M 日志事件进行日志监控，Infras…| [MonitorMonk](<https://monitormonk.com>) — 具有漂亮状态页面的极简正常运行时间监控。永久免费计划为 10 个站点或 api 端点提供 HTTPS、关键字、SSL 和响应时间监控，并提供 2 个仪表板/状态页面。
| [netdata.cloud](<https://www.netdata.cloud/>) — Netdata 是一个用于收集实时指标的开源工具。| [newrelic.com](<https://www.newrelic.com>) — New Relic 可观测平台，旨在帮助工程师创建更完美的软件。免费套餐提供 100GB/月的免费数据摄取、一名免费的完全访问用户和无限制的免费主要用户。
| [OnlineOrNot.com](<https://onlineornot.com/>) — OnlineOrNot 提供站点和 API 的正常运行时间监控、cron 作业和计划任务的监控。前五次检查（间隔 3 分钟）免费。| [OntarioNet.ca CN 测试](<https://cntest.ontarionet.ca>) — 检查某个站点在中国是否被防火墙屏蔽。
| [pagecrawl.io](<https://pagecrawl.io/>) — 监控站点变化，最多可免费供 6 个显示器进行每日检查。| [pagertree.com](<https://pagertree.com/>) — 用于告警和待命管理的简单界面。最多可释放 5 个用户。|
| [phare.io](<https://phare.io/>) — 免费运行时间监控最多 100,000 个事件，应用于无限的项目和无限的状态页面。| [pingbreak.com](<https://pingbreak.com/>) — 现代正常运行时间监控服务。检查无限的 URL 并通过 Discord、Slack 或电子邮件获取停机通知。
| [Pingmeter.com](<https://pingmeter.com/>) — 5 个正常运行时间监视器，间隔 10 分钟。| [pingpong.one](<https://pingpong.one/>) — 带监控的高级状态页面平台。免费层包括一个带有 SSL 子域的公共可定制状态页面。
| [Prismix](<https://prismix.dev>) — 免费 REST API (GET /api/v1/statuses) 返回 75 多个 AI 服务的实时运行状态，包括 OpenAI、Anthropic、Gemini、Mistral 等。| [Pulsetic](<https://pulsetic.com>) — 10 个监视器、6 个月的历史正常运行时间/日志、无限状态页面和自定义域！免费无限时间和无限电子邮件提醒。|
| [robusta.dev](<https://home.robusta.dev/>) — 基于 Prometheus 的强大 Kubernetes 监控。免费套餐包括最多 20 个 Kubernetes 节点。 [Runframe](<https://runframe.io/>) — 待命告警、事件管理和公共/私有状态页面。免费计划包括最多 5 个用户、1 个团队、1 个待命计划、基本状态页面、事件生命周期和 Slack 原生事件响应。
| [Servervana](<https://servervana.com>) — 高级正常运行时间监控，支持大型项目和团队。免费层包括 10 个 HTTP 监视器、1 个 DNS 监视器和 1 个状态页。 [简单的可观测性](<https://simpleobservability.com>) — 在统一的指标和日志平台中进行强大的服务器监控，无需设置复杂性。一台服务器免费。|
| [sitesure.net](<https://sitesure.net>) — 站点和 cron 监控 - 2 个免费监视器。 [skylight.io](<https://www.skylight.io/>) — 前 100,000 个请求免费（仅限 Rails）。|
| [statuscake.com](<https://www.statuscake.com/>) — 站点监控，无限制免费测试。| [statusgator.com](<https://statusgator.com/>) — 状态页面监控，3个显示器免费。|
| | [superlog.sh](<https://superlog.sh/>) - 具有 AI 代理事件调查的开源 OpenTelemetry 可观测性（跟踪、日志和指标）。免费套餐包括每月 100 万个跨度、500 万条日志和 1000 万个指标点，保留 30 天，无需信用卡。
| [SweetUptime](<https://dicloud.net/sweetuptime-server-uptime-monitoring/>) — 服务器监控、正常运行时间监控、DNS 和域监控。免费监控 10 个服务器、10 个正常运行时间和 10 个域。 [syagent.com](<https://syagent.com/>) — 非商业免费服务器监控服务、告警和指标。
| [UptimeObserver.com](<https://uptimeobserver.com>) — 获取 20 个运行时间监视器，间隔 5 分钟，并可自定义状态页面 - 甚至可用于商业用途。通过电子邮件和 Telegram 享受无限的实时通知。| [uptimetoolbox.com](<https://uptimetoolbox.com/>) — 免费监控五个站点，每隔 3 分钟一次，公共状态页。|
| [Wachete](<https://www.wachete.com>) — 监控五个页面，每 24 小时检查一次。 [Xitoring.com](<https://xitoring.com/>) — 正常运行时间监控：20 个免费，Linux 和 Windows Server 监控：5 个免费，状态页面：1 个免费 - 移动应用、多个通知渠道等等！|
| [UptimeRobot](<https://uptimerobot.com/>) — 业余爱好项目的免费正常运行时间监控。包括 50 个监视器，检查间隔为 5 分钟，支持 HTTP、ping、端口和关键字监控。 [Prometheus](<https://prometheus.io/>) — 免费、开源的时序数据监控和告警工具包，广泛应用于云和微服务环境。
| [Zabbix](<https://www.zabbix.com/>) — 用于网络、服务器和应用指标的免费开源监控工具，具有实时告警功能。 [Grafana Cloud](<https://grafana.com>) — 免费套餐包括 10k 个活跃指标序列、50 GB 日志和 50 GB 跟踪，所有这些都带有可自定义的仪表板。|
| [Checkmk](<https://www.checkmk.com/>) — 开源监控解决方案，为小型环境提供免费套餐。| [Healthchecks.io](<https://www.healthchecks.io/>) — 用于监控 cron 作业、后台任务等的免费服务。无限次免费检查。|
| [OpsDash](<https://opsdash.com/>) — 自托管服务器、集群和服务监控，最多免费支持 5 台服务器和 5 项服务。| [thousandeyes.com](<https://www.thousandeyes.com/>) — 网络和用户体验监控。免费提供主要网络服务的 3 个位置和 20 个数据源。
[返回顶部](#free-resource-catalog)

#### 日志管理


|资源和免费层上下文 |资源和免费层上下文 |
|---|---|
| [bugfender.com](<https://bugfender.com/>) — 每天免费最多 10 万行日志，保留 24 小时。| [log.dog](<https://log.dog/>) — LogDog 是一个带有 Web UI 的远程调试/日志记录 SDK（iOS 和 Android）。实时采集所有日志、请求和事件并允许拦截它们。|
| [logflare.app](<https://logflare.app/>) — 每个应用每月最多可免费使用 12,960,000 个条目，保留 3 天。| [logtail.com](<https://logtail.com/>) — 基于 ClickHouse 的 SQL 兼容日志管理。每月最多免费 1 GB，保留三天。|
| [logzab.com](<https://logzab.com/>) — 审计跟踪管理系统。每月免费 1,000 个用户活动日志，保留 1 个月，最多 5 个项目。| [ManageEngine Log360 Cloud](<https://www.manageengine.com/cloud-siem/>) — 由 Manage Engine 提供支持的日志管理服务。免费计划提供 50 GB 存储空间、15 天存储保留和 7 天搜索时间。
| [openobserve.ai](<https://openobserve.ai/>) — 每月免费获取 200 GB，保留 15 天。| [Smart Grow Logs](<https://logs.smart-grow.app/>) — 集中式日志管理平台，具有端到端加密、实时告警和多平台 SDK。免费套餐每天最多包含 3.000 个日志。|
| [Papertrail](<https://www.papertrail.com/>) — 免费套餐包括 48 小时搜索和 7 天存档，以及每月 100 MB 的日志数据。| [Splunk](<https://www.splunk.com/>) — 免费套餐包括 24 小时搜索和 7 天存档，以及每月 1 GB 的日志数据。|
| [Logz.io](<https://logz.io/>) — 免费计划包括 1 GB/天的日志摄取和 3 天的保留，非常适合小型项目。| [LogDNA](<https://www.logdna.com/>) — 免费套餐包括 1 GB/天的日志摄取，保留 7 天，非常适合小型项目。|
| [Graylog](<https://www.graylog.org/>) — 免费套餐包括 1 GB/天的日志摄取和 7 天的保留，非常适合小型项目。| [Sumo Logic](<https://www.sumologic.com/>) — 免费套餐提供 500 MB/天的日志摄取，保留 7 天，适合小型团队和项目。
| [sematext.com](<https://sematext.com/>) — 免费套餐提供 500 MB/天的日志摄取，保留 7 天，适合小型团队和项目。| [Elastic](<https://www.elastic.co/>) — 免费套餐提供每月 1 GB 的日志摄取和 7 天的保留窗口。
| [Fluentd](<https://github.com/fluent/fluentd>) — 免费套餐提供每月 1 GB 的日志摄取和 7 天的保留窗口。  |

[返回顶部](#free-resource-catalog)

#### 崩溃和异常处理


|资源和免费层上下文 |资源和免费层上下文 |
|---|---|
| [Axiom](<https://axiom.co/>) — 存储最多 0.5 TB 的日志，保留 30 天。| [Bugsink](<https://www.bugsink.com/>) — 具有 Sentry-SDK 兼容性的错误跟踪。每月最多可免费处理 5,000 个错误，或在自托管时无限制使用。|
| [bugsnag.com](<https://www.bugsnag.com/>) — 初次试用后每月最多可免费解决 2,000 个错误。| [CatchJS.com](<https://catchjs.com/>) — 通过屏幕截图和点击轨迹进行 JavaScript 错误跟踪。对于开源项目免费。|
| [elmah.io](<https://elmah.io/>) — Web 开发人员的错误日志记录和正常运行时间监控。免费小型企业订阅开源项目。| [Embrace](<https://embrace.io/>) — 移动应用监控。对于每年最多 100 万个用户会话的小型团队免费。|
| [exceptionless](<https://exceptionless.com>) — 实时错误、功能、日志报告等。每月/每位用户可免费处理 3,000 个事件。| [GlitchTip](<https://glitchtip.com/>) — 简单的开源错误跟踪。每月免费处理 1,000 个事件，也可无限量自托管。|
| [honeybadger.io](<https://www.honeybadger.io>) — 异常、正常运行时间和 cron 监控。对于小型团队和开源项目免费（每月 12,000 个错误）。| [Jam](<https://jam.dev>) — 一键报告开发人员友好的错误报告。免费计划，无限堵塞。|
| [memfault.com](<https://memfault.com>) — 云设备可观测和调试平台。 Nordic、NXP 和 Laird 设备可免费使用 100 台设备。| [Nordic](<https://app.memfault.com/register-nordic>) — memfault.com - 云设备可观测和调试平台。 Nordic、NXP 和 Laird 设备可免费使用 100 台设备。 |
| [NXP](<https://app.memfault.com/register-nxp>) — memfault.com - 云设备可观测和调试平台。 Nordic、NXP 和 Laird 设备可免费使用 100 台设备。 | [Laird](<https://app.memfault.com/register-laird>) — memfault.com - 云设备可观测和调试平台。 Nordic、NXP 和 Laird 设备可免费使用 100 台设备。 |
| [rollbar.com](<https://rollbar.com/>) — 异常和错误监控，每月 5,000 个错误的免费计划，无限用户，保留 30 天。| [Semaphr](<https://semaphr.com>) — 应用于您的移动应用的免费一体式终止开关。
| [sentry.io](<https://sentry.io/>) — Sentry 实时跟踪应用异常，并有一个小型免费计划。每月 5k 错误/1 个用户免费，如果自托管则不受限制使用。| [Whitespace](<https://whitespace.dev>) — 直接在浏览器中一键报告错误。免费计划，无限录音供个人使用。|

[返回顶部](#free-resource-catalog)

#### 搜索


|资源和免费层上下文 |资源和免费层上下文 |
|---|---|
| [algolia.com](<https://www.algolia.com/>) — 托管搜索解决方案，具有拼写错误、相关性和 UI 库，可轻松创建搜索体验。免费的“Build”计划包括每月 100 万个文档和 10K 次搜索。 [开发人员文档搜索](<https://docsearch.algolia.com/>) — algolia.com - 托管搜索解决方案，具有拼写错误、相关性和 UI 库，可轻松创建搜索体验。免费的“Build”计划包括每月 100 万个文档和 10K 次搜索。
| [bonsai.io](<https://bonsai.io/>) — 免费 1 GB 内存和 1 GB 存储空间。| [CommandBar](<https://www.commandbar.com/>) — 统一搜索栏即服务、基于 Web 的 UI 小部件/插件，允许您的用户在您的产品中搜索内容、导航、功能等，这有助于发现。|
| [searchly.com](<https://www.searchly.com/>) — 免费 2 个索引和 20 MB 存储空间。  |

[返回顶部](#free-resource-catalog)

#### 消息传递和 Streaming


|资源和免费层上下文 |资源和免费层上下文 |
|---|---|
| [Ably](<https://www.ably.com/>) — 实时消息传递服务，具有存在性、持久性和有保证的传递。免费计划包括每月 300 万条消息、100 个峰值连接和 100 个峰值通道。 [cloudamqp.com](<https://www.cloudamqp.com/>) — RabbitMQ 即服务。 Little Lemur 计划：每月最多 100 万条消息，最多 20 个并发连接，最多 100 个队列，最多 10,000 条排队消息，不同可用区中的多个节点。
| [courier.com](<https://www.courier.com/>) — 用于推送、应用内、电子邮件、聊天、短信和其他消息传递渠道的单一 API，具有模板管理和其他功能。免费计划包括每月 10,000 条消息。| [EMQX Serverless](<https://www.emqx.com/en/cloud/serverless-mqtt>) — 您可以在几秒钟内获取可扩展且安全的无服务器 MQTT 代理。每月 100 万分钟会话，永久免费（无需信用卡）。|
| [Engage](<https://engage.so/>) — 应用于 SaaS 的集成客户参与和自动化工具（电子邮件、推送、短信、产品导览、横幅等）。每月最多 1,000 名活跃用户免费。| [engagespot.co](<https://engagespot.co/>) — 为开发人员提供的多渠道通知基础设施，具有预构建的应用内收件箱和无代码模板编辑器。免费计划包括每月 10,000 条消息。|
| [HiveMQ](<https://www.hivemq.com/mqtt-cloud-broker/>) — 将 MQTT 设备连接到云原生 IoT 消息传递代理。永久免费连接最多 100 个设备（无需信用卡）。| [httpSMS](<https://httpsms.com>) — 使用 Android 手机作为短信网关发送和接收短信。每月免费发送和接收最多 200 条消息。|
| [knock.app](<https://knock.app>) — 面向开发人员的通知基础设施。免费计划包括每月 10,000 条消息。| [Novu.co](<https://novu.co>) — 面向开发人员的开源通知基础设施。免费计划包括每月 30,000 条通知，保留 90 天。
| [Pingram.io](<https://www.pingram.io/>) — 5 分钟内的通信基础设施。免费套餐包括：100 条短信和通话、3000 封电子邮件、推送、Slack、MS Teams、WhatsApp 等。 [Pocket Alert](<https://pocketalert.app>) — 向您的 iOS 和 Android 设备发送推送通知。免费计划：每天向 1 台设备和 1 个应用发送 50 条消息。|
| [pubnub.com](<https://www.pubnub.com/>) — 每月最多 100 万条消息和 100 个日常活跃设备的免费推送通知。| [pusher.com](<https://pusher.com/>) — 实时消息服务。免费最多可同时连接 100 个和每天发送 200,000 条消息。|
| [scaledrone.com](<https://www.scaledrone.com/>) — 实时消息服务。免费最多可同时连接 20 个连接和每天 100,000 个事件。| [SMSGate](<https://sms-gate.app>) — Android™ 短信网关支持使用云路由通过您的设备发送和接收 SMS 消息。完全免费的云服务（建议每天使用超过 10,000 条消息时发出通知，以保持所有用户的质量）。|
| [SuprSend](<https://www.suprsend.com/>) — SuprSend 是一个通知基础架构，可通过 API 优先的方法简化您的产品通知。 免费套餐：在免费计划中，您每月收到 10,000 条通知，包括不同的工作流程节点，例如摘要、批处理……| [synadia.com](<https://synadia.com/ngs>) — NATS.io 作为服务。永久免费，每月 4k 消息大小、50 个活跃连接和 5GB 数据。|
| [NATS.io](<https://nats.io>) — synadia.com - NATS.io 作为服务。永久免费，每月 4k 消息大小、50 个活跃连接和 5GB 数据。| [webpushr](<https://www.webpushr.com/>) — Web 推送通知 - 最多 10k 订阅者免费、无限制的推送通知、浏览器内消息传递。|
| [vask](<https://vask.dev>) — 实时消息服务，与 Pusher 兼容。开发层仅限于本地开发，并且免费，具有 100 个并发连接、每月 1,000,000 次广播、无限制的客户端事件、32kb 消息大小。  |

### 安全、身份和治理

[返回顶部](#free-resource-catalog)

#### 安全和 PKI


|资源和免费层上下文 |资源和免费层上下文 |
|---|---|
| [aikido.dev](<https://www.aikido.dev>) — 集成应用安全平台，涵盖 SCA、SAST、CSPM、DAST、Secrets、IaC、恶意软件、容器扫描、EOL...免费计划包括两个用户，扫描 10 个仓库、1 个云、2 个容器和 1 个域。| [CertKit](<https://www.certkit.io/certificate-management>) — 管理 SSL 证书颁发、续订和监控。测试版后，3 个证书和 1 个用户免费。|
| [CertObserver CT 搜索](<https://certobserver.com/ct-search>) — 查找证书透明度日志中记录在案的公共 SSL/TLS 证书。 CT 搜索是免费的，但 CT 监测不是免费的。| [CertPost](<https://www.certpost.ai>) — 端口 443 或自定义端口 (SMTP/IMAP) 上的实时 SSL/TLS 证书监控。免费套餐包括 3 个永久监控的证书。
| [Corgea](<https://corgea.com/>) — 免费的自主安全平台，可跨 20 多种语言和框架查找、验证和修复不安全的代码和包。| [crypteron.com](<https://www.crypteron.com/>) — 云优先、开发人员友好的安全平台可防止 .NET 和 Java 应用中的数据泄露。|
| [CyberChef](<https://gchq.github.io/CyberChef/>) — 一个简单、直观的 Web 应用，用于分析和解码/编码数据，无需处理复杂的工具或编程语言。所有功能均可免费使用，无限制。| [Datree](<https://www.datree.io/>) - 开源 CLI 工具，通过确保清单和 Helm Chart遵循最佳实践以及组织的策略来防止 Kubernetes 错误配置。|
| [Dependabot](<https://dependabot.com/>) — Ruby、JavaScript、Python、PHP、Elixir、Rust、Java（Maven 和 Gradle）、.NET、Go、Elm、Docker、Terraform、Git 子模块和 GitHub Actions 的自动依赖项更新。 [DJ 检查](<https://djcheckup.com>) — 使用这个免费的自动检查工具扫描您的 Django 站点是否存在安全漏洞。
| [Doppler](<https://doppler.com/>) — 用于应用机密和配置的通用 Secret Manager，支持同步到各种云提供商。五个用户免费，具有基本的访问控制。| [Dotenv](<https://dotenv.org/>) — 快速安全地同步您的 .env 文件。最多 3 名队友免费。|
| [GitGuardian](<https://www.gitguardian.com>) — 通过自动机密检测和修复，确保源代码中的机密不被泄露。扫描您的 git 仓库以查找 350 多种类型的机密和敏感文件 - 对于 25 名或更少开发人员的个人和团队免费。 [HasMySecretLeaked](<https://gitguardian.com/hasmysecretleaked>) — 免费搜索公共 GitHub 仓库、要点、问题和评论中的 2000 万个暴露的机密。|
| [我被攻击了吗？](<https://haveibeenpwned.com>) — 用于获取违规信息的 REST API。| [HimitsuShell](<https://himitsushell.com>) — 一个 shell 脚本 DRM 编译器，它使用嵌入式 shell 解释器和反调试（替代 shc）将 shell 脚本转换为混淆的二进制文件。免费无限网络版。|
| [hostedscan.com](<https://hostedscan.com>) — 用于 Web 应用、服务器和网络的在线漏洞扫描程序。每月十次免费扫描。| [Infisical](<https://infisical.com/>) — 开源平台，可让您管理整个团队和基础架构中的开发人员机密：从本地开发到临时/生产第 3 方服务。|
| [inspect.software](<https://inspect.software/>) - 自动化开源仓库审计的公共日志记录：安全态势、可维护性、依赖关系运行状况和恶意包检查，带有 v. 免费层：对所有已发布报告的完全访问权限，自动覆盖公共利益之上的仓库……| [Internet.nl](<https://internet.nl>) — 测试现代互联网标准，如 IPv6、DNSSEC、HTTPS、DMARC、STARTTLS 和 DANE。|
| [IntoDNS.ai](<https://intodns.ai>) — DNS 和电子邮件安全分析器，可检查 SPF、DKIM、DMARC、DNSSEC、BIMI、MTA-STS 和 40 多个黑名单，并提供 AI 驱动的解释和修复建议。 100% 免费，无需注册。| [letsencrypt.org](<https://letsencrypt.org/>) — 免费 SSL 证书颁发机构，其证书受到所有主要浏览器的信任。|
| [meterian.io](<https://www.meterian.io/>) — 监控 Java、Javascript、.NET、Scala、Ruby 和 NodeJS 项目的依赖项中的安全漏洞。一个私有项目免费，开源项目无限。| [Mozilla Observatory](<https://observatory.mozilla.org/>) — 查找并修复您站点中的安全漏洞。
| [Otterwatch](<https://otterwatch.dev/>) — 每日 SSL/TLS 证书监控：到期告警（30/7/1 天）、链和 OCSP 吊销检查以及证书透明度颁发历史记录。| [Protectumus](<https://protectumus.com>) — 应用于 PHP 的免费站点安全检查、站点防病毒和服务器防火墙 (WAF)。免费套餐中注册用户的电子邮件通知。|
| [公有云威胁情报](<https://cloudintel.himanshuanand.com/>) — 公有云 IOC 的高可信度云威胁情报；完整列表可通过 API 获取。| [github.com](<https://github.com/unknownhad/AWSAttacks>) — 公共云攻击指标和研究数据集。|
| [pyup.io](<https://pyup.io>) — 监控 Python 依赖项是否存在安全漏洞并自动更新。一个私有项目免费，开源项目无限。| [qualys.com](<https://www.qualys.com/community-edition>) — 查找 Web 应用漏洞，审核 OWASP 风险。|
| [SikkerKey](<https://sikkerkey.com>) - 机器验证的 Secret Manager，包括 2 个项目、2 个引导机器、20 个机密和免费 7 天审计日志保留。 [Smart Grow Vault](<https://vault.smart-grow.app/>) — 用于管理环境变量和机密的安全企业级平台。免费套餐包括每个项目最多 3 个应用和 150 个机密。
| [Socket](<https://socket.dev>) — 为个人开发人员、小型团队和开源项目提供免费的供应链安全。包括免费的应用和防火墙 CLI 工具，可保护您的代码免受易受攻击和恶意依赖项的影响。| [ssllabs.com](<https://www.ssllabs.com/ssltest/>) — 对任何 SSL Web 服务器的配置进行深入分析。
| [Sucuri SiteCheck](<https://sitecheck.sucuri.net>) — 免费站点安全检查和恶意软件扫描程序。 [TestTLS.com](<https://testtls.com>) — 测试 SSL/TLS 服务的安全服务器配置、证书、链等。不限于 HTTPS。|
| [Virgil Security](<https://virgilsecurity.com/>) — 用于在数字解决方案中实施端到端加密、数据库保护、物联网安全等的工具和服务。对于最多 250 个用户的应用免费。| [Trivy](<https://trivy.dev/>) - 应用于容器、文件系统、Git 仓库和 Kubernetes 的开源漏洞扫描器。|
| [Docker Scout](<https://docs.docker.com/scout/>) — 免费的 Docker 镜像分析和软件供应链洞察。| [OWASP ZAP](<https://www.zaproxy.org/>) — 免费、开源 Web 应用安全扫描器。
| | [cloudsploit.com](<https://cloudsploit.com/>) — Amazon Web Services (AWS) 安全性与合规性审核和监控。
| [globalsign.com](<https://www.globalsign.com/en/ssl/ssl-open-source/>) — 开源的免费 SSL 证书。|  |

[返回顶部](#free-resource-catalog)

#### 身份验证、授权和用户管理


|资源和免费层上下文 |资源和免费层上下文 |
|---|---|
| [360username](<https://360username.com/>) — 一款免费工具，可在 90 多个社交平台上搜索用户名以查找匹配的个人文档。| [Aserto](<https://www.aserto.com>) — 细粒度授权作为应用和 API 的服务。释放最多 1000 个 MAU 和 100 个授权者实例。|
| [asgardeo.io](<https://wso2.com/asgardeo>) — SSO、MFA、无密码身份验证等的无缝集成。免费最多 1000 个 MAU 和五个身份提供商。| [Auth0](<https://auth0.com/>) — 托管 SSO。免费计划包括 25,000 个 MAU、无限的社交连接、自定义域等等。|
| [Authgear](<https://www.authgear.com>) — 在几分钟内将无密码、OTP、2FA、SSO 引入您的应用。免费最多 5000 个 MAU。| [Authress](<https://authress.io/>) — 身份验证登录和访问控制，任何项目的无限身份提供商。前 1000 次 API 调用免费。|
| [Authy](<https://authy.com>) — 多个设备上的双因素身份验证 (2FA)，并带有备份。最多 100 次成功的身份验证免费。| [Cerbos Hub](<https://www.cerbos.dev/product-cerbos-hub>) — 用于编写、测试和部署访问策略的完整授权管理系统。细粒度的授权和访问控制，每月最多免费释放100个活跃委托人。
| [Clerk](<https://clerk.com>) — 用户管理、身份验证、2FA/MFA、用于登录、注册、用户配置文件等的预构建 UI 组件。免费计划包括无限制的应用、每个应用 50,000 MRU 限制、3 个仪表板席位等。 [Cloud-IAM](<https://www.cloud-iam.com/>) — Keycloak 身份和访问管理即服务。释放最多 100 个用户和 1 个领域。|
| [Descope](<https://www.descope.com/>) — 高度可定制的 AuthN 流程，同时具有无代码和 API/SDK 方法，每月免费 7,500 个活跃用户，50 个租户（最多 5 个 SAML/SSO 租户）。| [duo.com](<https://duo.com/>) — 站点或应用的双因素身份验证 (2FA)。十个用户免费，所有身份验证方法，无限制，集成，硬件令牌。|
| [Kinde](<https://kinde.com/>) — 简单、强大的身份验证，您可以在几分钟内与您的产品集成。开始使用 7,500 个免费月活跃用户所需的一切。| [logintc.com](<https://www.logintc.com/>) — 通过推送通知进行双因素身份验证 (2FA)，十个用户免费，VPN、站点和 SSH。|
| [Logto](<https://logto.io/>) — 开发、保护和管理产品的用户身份 - 用于身份验证和授权。最多 5,000 个 MAU 免费，并提供开源自托管选项。| [MojoAuth](<https://mojoauth.com/>) — MojoAuth 让您可以在几分钟内轻松地在 Web、移动设备或任何应用上实现无密码身份验证。|
| [Okta](<https://developer.okta.com/signup/>) — 用户管理、身份验证和授权。每月最多 100 名活跃用户免费。| [Ory](<https://ory.sh/>) — AuthN/AuthZ/OAuth2.0/零信任托管安全平台。具有所有安全功能的永久免费开发者账户、无限的团队成员、200 个每日活跃用户和 25k/月 权限检查。
| [Permit.io](<https://permit.io>) — 授权即服务提供商平台，支持 RBAC、ABAC 和 ReBAC，以实现具有实时更新和无代码策略 UI 的可扩展微服务。每月 1000 名活跃用户免费套餐。| [Phase Two](<https://phasetwo.io>) — Keycloak 开源身份和访问管理。免费领域最多可容纳 1000 个用户，最多 10 个 SSO 连接，利用 Phase Two 的 Keycloak 增强容器（其中包括组织扩展）。
| [组织](<https://phasetwo.io/product/organizations/>) — Keycloak 的第二阶段组织扩展文档。 [PropelAuth](<https://propelauth.com>) — 只需几行代码即可立即向任何规模的公司销售，免费最多 200 个用户和 10k 事务电子邮件（带有水印品牌：“Powered by PropelAuth”）。
| [Scalekit](<https://scalekit.com>) — B2B SaaS 的企业 SSO（SAML、OIDC）、SCIM 配置和社交登录。免费套餐包括 100 万个 MAU、100 个组织、1 个 SSO 连接和 1 个 SCIM 连接。 [Stack Auth](<https://stack-auth.com>) — 不错的开源身份验证。对开发人员最友好的解决方案，只需五分钟即可开始使用。|
| [Stytch](<https://www.stytch.com/>) — 一个集成平台，提供用于身份验证和预防欺诈的 API 和 SDK。免费计划包括 10,000 个每月活跃用户、无限组织、5 个 SSO 或 SCIM 连接以及 1,000 个 M2M 令牌。 [SuperTokens](<https://supertokens.com/>) - 原生集成到您的应用中的开源用户身份验证 - 使您能够快速入门，同时控制用户和开发人员体验。|
| [WorkOS](<https://workos.com/>) — 最多 100 万月活跃用户的免费用户管理和身份验证。| [ZITADEL Cloud](<https://zitadel.com>) — 适合您并支持多租户 (B2B) 用例的交钥匙用户和访问管理。免费最多可处理 25,000 个经过身份验证的请求，并具有所有安全功能（OTP、无密码、策略等无需付费）。|

[返回顶部](#free-resource-catalog)

#### 隐私管理


|资源和免费层上下文 |资源和免费层上下文 |
|---|---|
| [Bearer](<https://www.bearer.sh/>) — 通过审核和连续工作流程帮助实施隐私设计，以便组织遵守 GDPR 和其他法规。免费层仅限于较小的团队和 SaaS 版本。 [Concord](<https://www.concord.tech/>) — 完整的数据隐私平台，包括同意管理、隐私请求处理 (DSAR) 和数据映射。免费层包括核心同意管理功能，它们还免费提供更高级的计划来验证开源项目。
| [Cookiefirst](<https://cookiefirst.com/>) — Cookie 横幅、审核和多语言同意管理解决方案。免费套餐提供一次性扫描和单个横幅。 [Iubenda](<https://www.iubenda.com/>) — 隐私和 cookie 策略以及同意管理。免费套餐提供有限的隐私和 cookie 策略以及 cookie 横幅。
| [Ketch](<https://www.ketch.com/>) — 同意管理和隐私框架工具。免费套餐提供大多数功能，但访问者数量有限。  |

### 协作与业务运营

[返回顶部](#free-resource-catalog)

#### 团队和协作工具


|资源和免费层上下文 |资源和免费层上下文 |
|---|---|
| [3Cols](<https://3cols.com/>) — 一个免费的基于云的代码片段管理器，用于个人和协作代码。| [BookmarkOS.com](<https://bookmarkos.com>) — 可定制在线桌面中的免费一体式书签管理器、选项卡管理器和任务管理器，具有文件夹协作功能。|
| [Braid](<https://www.braidchat.com/>) — 专为团队设计的聊天应用。公共访问组免费，用户、历史记录和集成不受限制。| [Calendly](<https://calendly.com>) — Calendly 是用于连接和安排会议的工具。免费计划为每个用户提供 1 个日历连接和无限会话。
| [cally.com](<https://cally.com/>) — 查找召开会议的最佳时间和日期。| [cDox](<https://cdox.ca>) - 在加拿大托管的私有文档编辑器。免费计划包括 50 MB 存储空间、最多 3 个公共链接，并可导出为 PDF、Word 和 Markdown。|
| [Chanty.com](<https://chanty.com/>) — Chanty 是 Slack 的另一种替代品。它为小型团队（最多 10 人）提供永久免费计划，具有无限的公共和私有对话、可搜索历史记录、无限的 1:1 音频通话、无限的语音消息、十个集成以及每个团队 20 GB 的存储空间。 [DevToolLab](<https://devtoollab.com>) — 在线开发者工具，提供对所有基本工具的免费访问，能够为每个工具自动保存一个条目、标准处理速度和社区支持。|
| [Discord](<https://discord.com/>) — 与公共/私有房间聊天。无限用户免费。| [Dubble](<https://dubble.so/>) — 免费分步指南创建者。|
| | [element.io](<https://element.io/>) — 基于 Matrix 的去中心化开源通信工具。|
| [evernote.com](<https://evernote.com/>) — 组织信息的工具。| [Fibery](<https://fibery.io/>) — 连接的工作区平台。单用户免费，最多 2 GB 磁盘空间。|
| [Fibo](<https://fibo.dev>) — 一款应用于敏捷团队的免费在线实时 Scrum 扑克工具，可让无限的成员估计故事点以加快规划速度。| [Fizzy](<https://www.fizzy.do/>) — 基于看板的项目管理和问题跟踪平台。创建公共看板、设置 Webhook、使用卡片标记并跟踪无限用户 - 免费最多可查看 1000 个项目。
| [flat.social](<https://flat.social>) — 用于团队会议和欢乐时光社交的交互式可定制空间。无限次会议，最多可免费容纳 8 个并发用户。| [flock.com](<https://flock.com>) — 为您的团队提供更快的沟通方式。免费无限的消息、频道、用户、应用和集成。
| [GhostChat](<https://ghostchat.dev>) — 隐私第一的站点实时聊天小部件（~15KB，无 cookie，无跟踪）。免费计划包括 1 个站点、无限消息、30 天历史记录、Gmail 线程、预设回复和推送通知。| [GitBook](<https://www.gitbook.com/>) — 用于采集和日志记录技术知识的平台 - 从产品文档到内部知识库和 API。面向个人开发者的免费计划。|
| [GitDailys](<https://gitdailies.com>) — 团队在 GitHub 上的提交和拉取请求活动的每日报告。免费层支持无限用户、三个仓库和 3 个告警配置。| [gitter.im](<https://gitter.im/>) — 聊天，用于 GitHub。无限量的公共和私有房间，最多 25 人的团队免费。|
| [gokanban.io](<https://gokanban.io>) — 基于语法，无需注册看板即可快速使用。免费，无任何限制。| [Hackmd.io](<https://hackmd.io/>) - 用于 Markdown 格式文档/文件的实时协作和编写工具。免费无限数量的“笔记”，但私有笔记和模板的协作者（受邀者）数量将受到限制。
| [将受到限制](<https://hackmd.io/pricing>) — HackMD 免费计划协作限制。 [HeySpace](<https://hey.space>) — 具有聊天、日历、时间线和视频通话功能的任务管理工具。最多 5 个用户免费。|
| [Huly](<https://huly.io/>) — 集成项目管理平台（替代 Linear、Jira、Slack、Notion、Motion）- 无限用户、每个工作区 10GB 存储、10GB 视频（音频）流量。| [Keybase](<https://keybase.io/>) — Keybase 是 Slack 的 FOSS 替代品；它可以保证每个人的聊天和文件的安全，从家庭到社区再到公司。
| [Knocket](<https://trtc.io/solutions/knocket>) - 为独立开发者和小型团队提供永久免费的联系层：站点和移动应用的实时聊天小部件（iOS/Android/Flutter/React Native via WebView）、可共享的联系页面（带有社交、预订链接和博客的 Linktree 风格）以及统一的 Telegram/电子邮件收件箱。 [Linkinize](<https://linkinize.com>) — 具有标记、多工作空间和协作功能的团队书签管理器。免费计划包括 4 个工作区和 10 名团队成员。|
| [Lockitbot](<https://www.lockitbot.com/>) — 在 Slack 中保留和锁定共享资源，如房间、开发环境、服务器等。最多免费 2 个资源。| [meet.jit.si](<https://meet.jit.si/>) — 一键视频对话和屏幕共享，免费。|
| [Miro](<https://miro.com/>) — 应用于分布式团队的可扩展、安全、跨设备和企业级协作白板。具有免费增值计划。| [Notion](<https://www.notion.so/>) — Notion 是一款笔记和协作应用，支持 Markdown，集成了任务、wiki 和数据库。|
| [Nuclino](<https://www.nuclino.com>) — 一个轻量级的协作式 wiki，包含您团队的所有知识、文档和注释。免费计划包含所有基本功能、最多 50 个项目和 5GB 存储空间。 [OnlineInterview.io](<https://onlineinterview.io/>) — 免费的代码面试平台，带有嵌入式视频聊天、映射板和在线代码编辑器，您可以在浏览器上编译和运行代码。|
| [paste.sh](<https://paste.sh/>) — 这是一个基于 JavaScript 和加密货币的简单粘贴站点。 [Pastefy](<https://pastefy.app/>) — 美观而简单的 Pastebin，具有可选的客户端加密、多选项卡粘贴、API、突出显示的编辑器等。|
| [Pendulums](<https://pendulums.io/>) — Pendulums 是一款免费时间跟踪工具，通过易于使用的界面和有价值的统计数据，帮助您更好地管理时间。 [Proton Pass](<https://proton.me/pass>) — 带有内置电子邮件别名、2FA 身份验证器、共享和密钥的密码管理器。|
| [Pullflow](<https://pullflow.com>) — Pullflow 提供了一个 AI 增强型平台，用于跨 GitHub、Slack 和 VS Code 进行代码审查协作。| [Pumble](<https://pumble.com>) — 免费团队聊天应用。无限用户和消息历史记录，永久免费。|
| [Quidlo 时间表](<https://www.quidlo.com/timesheets>) — 适合团队的简单时间表和时间跟踪应用。免费计划具有时间跟踪和生成报告功能，最多可供 10 个用户使用。 [Raindrop.io](<https://raindrop.io>) — 应用于 macOS、Windows、Android、iOS 和 Web 的私有且安全的书签应用。免费无限书签和协作。|
| [Reezn.io](<https://reezn.io/>) - 团队规范驱动的开发工作流程：将审查左移，以便在编写代码之前发现问题，而不是在代码审查中堆积起来。免费计划：3 个席位，1 个项目，5 个 Functions/月。| [Revolt.chat](<https://revolt.chat/>) —Discord 的开源替代品，尊重您的隐私。它还免费提供 Discord 的大多数专有功能。
| [Rocket.Chat](<https://rocket.chat/>) — 开源通信平台，具有全渠道功能、矩阵联合、与其他应用桥接、无限消息传递和完整消息历史记录。| [ruttl.com](<https://ruttl.com/>) — 最好的集成反馈工具，用于收集数字反馈和评论站点、PDF 和图像。|
| [通过浏览器共享屏幕](<https://screensharing.net>) — 免费屏幕共享工具，直接通过浏览器与协作者共享屏幕，无需下载或注册。 [seafile.com](<https://www.seafile.com/>) — 私有或云存储、文件共享、同步、讨论。云版只有1 GB。|
| [SiteDots](<https://sitedots.com/>) — 直接在您的站点上分享站点项目的反馈，无需模拟、画布或解决方法。功能齐全的免费套餐。| [Slab](<https://slab.com/>) — 面向团队的现代知识管理服务。最多 10 个用户免费。|
| [slack.com](<https://slack.com/>) — 免费为无限用户提供，但有一些功能限制。| [StatusPile](<https://www.statuspile.com/>) — 状态页面的状态页面。|
| [Stickies](<https://stickies.app/>) — 用于头脑风暴、内容管理和笔记的可视化协作应用。最多可免费使用 3 面墙、无限用户和 1 GB 存储空间。| [MeetBackdrops](<https://meetbackdrops.com>) — 用于 Zoom、Microsoft Teams 和 Google Meet 上视频通话的免费高清虚拟背景。
| [talky.io](<https://talky.io/>) — 免费群组视频聊天。| [Teamcamp](<https://www.teamcamp.app>) — 面向软件开发公司的集成项目管理应用。
| [Teamhood](<https://teamhood.com/>) — 免费项目、任务和问题跟踪软件。五个用户和三个项目组合免费。| [Teamplify](<https://teamplify.com>) — 通过团队分析和智能每日站会改进团队开发流程。最多 5 名用户的小团体免费。|
| [Telegram](<https://telegram.org/>) — Telegram 适合所有想要快速、可靠的消息和通话的人。商业用户和小型团队可能喜欢大型群组、用户名、桌面应用和强大的文件共享选项。 [Tencent RTC](<https://trtc.io/>) — 腾讯实时通讯（TRTC）提供群组音视频通话解决方案，首年每月10,000分钟免费。
| [TimeCamp](<https://www.timecamp.com/>) — 无限用户的免费时间跟踪软件。 [tldraw.com](<https://tldraw.com>) — 免费的开源白板和图表工具，具有智能箭头、捕捉、便笺和 SVG 导出功能。|
| [transfernow](<https://www.transfernow.net/>) — 最简单、最快、最安全的文件传输和共享界面。| [Tugboat](<https://tugboat.qa>) — 预览每个拉取请求，自动化且按需。所有人免费，非营利组织免费获取 Nano 层。|
| [twist.com](<https://twist.com>) — 一款异步友好的团队通信应用，对话保持井然有序且切题。提供免费和无限制的计划。 [userforge.com](<https://userforge.com/>) — 互连的在线角色、用户故事和上下文映射。帮助最多 3 个角色和两个协作者保持设计和开发同步。
| [Visual Debug](<https://visualdebug.com>) — 一个可视化反馈工具，用于更好的客户端与开发人员沟通。| [Webex](<https://www.webex.com/>) — 视频会议免费计划，每次会议 40 分钟，有 100 名与会者。|
| [Webvizio](<https://webvizio.com>) - 站点反馈工具、站点审查软件和错误报告工具，用于直接在实时站点和 Web 应用、图像、PDF 和设计文件上简化任务的 Web 开发协作。| [whereby.com](<https://whereby.com/>) — 免费的一键式视频对话（以前称为appear.in）。|
| [windmill.dev](<https://windmill.dev/>) — Windmill 是一个开源开发者平台，可通过最少的 Python 和 Typescript 脚本快速构建生产级多步骤自动化和内部应用。作为免费用户，您最多可以创建三个非高级工作区并成为其成员。 [wistia.com](<https://wistia.com/>) — 视频托管，具有观看者分析、高清视频传输和营销工具，可帮助了解您的访问者、25 个视频和 Wistia 品牌播放器。|
| [wormhol.org](<https://www.wormhol.org/>) — 简单的文件共享服务。与任意数量的同伴共享高达 5GB 的无限文件。| [Wormhole](<https://wormhole.app/>) — 通过端到端加密共享最大 5GB 的文件，持续时间长达 24 小时。对于大于 5 GB 的文件，它使用点对点传输直接发送您的文件。
| [zoom.us](<https://zoom.us/>) — 提供安全视频和网络会议插件。免费计划仅限 40 分钟。| [Zulip](<https://zulip.com/>) — 使用独特的类似电子邮件的线程模型进行实时聊天。免费计划包括 10,000 条搜索历史消息和高达 5 GB 的文件存储空间。|
| [RightFeature](<https://rightfeature.com/>) — 轻松收集客户的反馈，将客户反馈转换为您的产品路线图。收集、优先排序并交付对用户真正重要的功能。| [Zeitio](<https://zeitio.com/>) — 为自由职业者和小团队提供时间跟踪和发票。免费计划包括每月 1 个用户、3 个活跃项目和 3 张发票。
| [teams.microsoft.com](<https://teams.microsoft.com>) — 免费计划，提供无限制的聊天和视频通话。| [mattermost.com](<https://mattermost.com/>) — Slack 的开源、自托管替代方案，具有 GitLab 和 Jenkins 等 DevOps 集成。适合小型团队的免费计划。|
| [rocket.chat](<https://www.rocket.chat/>) - 开源团队沟通平台，集成了 GitLab、Jenkins 和其他 DevOps 工具。| [hangouts.google.com](<https://hangouts.google.com/>) — 一个可以进行所有对话的地方，免费，需要一个 Google 账户。|

[返回顶部](#free-resource-catalog)

#### 内容管理系统


|资源和免费层上下文 |资源和免费层上下文 |
|---|---|
| [Contentful](<https://www.contentful.com/>) — 无头 CMS。附带 1 个免费社区空间，其中包括 5 位用户、25K 条日志、48 种内容类型、2 个区域设置。| [Cosmic](<https://www.cosmicjs.com/>) — 无头 CMS 和 API 工具包。为开发人员提供免费的个人计划。|
| [Crystallize](<https://crystallize.com>) — 支持电子商务的无头 PIM。免费版本包括无限用户、1000 个目录项、5 GB/月带宽和 25k/月 API 调用。 [DatoCMS](<https://www.datocms.com/>) — 为小型项目提供免费套餐。在较低层，您每月有 10 万次调用。|
| [Hygraph](<https://hygraph.com/>) — 为小型项目提供免费套餐。| [Prismic](<https://www.prismic.io/>) — 无头 CMS。社区计划为一名用户提供无限的 API 调用、文档、自定义类型、资产和区域设置。|
| [Sanity.io](<https://www.sanity.io/>) — 具有开源编辑环境和实时托管数据存储的结构化内容平台。无限项目。| [Solo](<https://soloist.ai>) — 来自 Mozilla 的免费 AI 站点创建器，只需几个简单的输入即可为您的企业创建一个漂亮的站点。免费自定义域名，无需信用卡。|
| [Squidex](<https://squidex.io/>) — 为小型项目提供免费套餐。开源并基于事件源（自动处理每个更改）。| [Storyblok](<https://www.storyblok.com>) — 面向开发人员和营销人员的无头 CMS，可与所有现代框架配合使用。免费层：社区（免费）层提供管理 API、可视化编辑器、十个源、自定义字段类型、国际……|
| [TinaCMS](<https://tina.io/>) — 取代 Forestry.io。支持 Markdown、MDX 和 JSON 的开源 Git 支持的无头 CMS。| [WPJack](<https://wpjack.com>) — 不到 5 分钟即可在任何云上设置 WordPress！免费套餐包括 1 台服务器、2 个站点、免费 SSL 证书和无限的 cron 作业。

[返回顶部](#free-resource-catalog)

#### 管理体系


|资源和免费层上下文 |资源和免费层上下文 |
|---|---|
| [bitnami.com](<https://bitnami.com/>) — 在 IaaS 上部署准备好的应用。免费管理 1 个 AWS 微型实例。| [Esper](<https://esper.io>) — 应用于具有 DevOps 的 Android 设备的 MDM 和 MAM。具备 1 个用户许可证和 25 MB 应用存储空间即可免费使用 100 台设备。|
| [jamf.com](<https://www.jamf.com/>) — iPad、iPhone 和 Mac 的设备管理，三种设备免费。| [Miradore](<https://miradore.com>) — 设备管理服务。随时了解您的设备群的最新情况并免费保护无限的设备。
| [ploi.io](<https://ploi.io/>) — 服务器管理工具，可轻松管理和部署服务器和站点。一台服务器免费。| [runcloud.io](<https://runcloud.io/>) — 主要针对 PHP 项目的服务器管理。最多 1 台服务器免费。|
| [serveravatar.com](<https://serveravatar.com>) — 通过自动化配置管理和监控基于 PHP 的 Web 服务器。一台服务器免费。| [xcloud.host](<https://xcloud.host>) — 具有用户友好界面的服务器管理和部署平台。一台服务器可使用免费套餐。|

[返回顶部](#free-resource-catalog)

#### 问题跟踪和项目管理


|资源和免费层上下文 |资源和免费层上下文 |
|---|---|
| [acunote.com](<https://www.acunote.com/>) — 最多可供 5 名团队成员使用的免费项目管理和 SCRUM 软件。 [asana.com](<https://asana.com/>) — 免费与合作者合作的私有项目。|
| [Backlog](<https://backlog.com>) — 您的团队在一个平台上发布优秀项目所需的一切。免费计划提供 1 个具有 10 个用户的项目和 100MB 存储空间。 [Basecamp](<https://basecamp.com/personal>) — 待办事项列表、里程碑管理、类似论坛的消息传递、文件共享和时间跟踪。最多 3 个项目、20 个用户和 1 GB 存储空间。|
| [bitrix24.com](<https://www.bitrix24.com/>) — 内联网和项目管理工具。免费套餐有 5GB，可供无限用户使用。| [cacoo.com](<https://cacoo.com/>) — 在线实时图表：流程图、UML、网络。最大免费|
| [clickup.com](<https://clickup.com/>) — 项目管理。免费的高级版本，带有云存储。| [Clockify](<https://clockify.me>) — 时间跟踪器和时间表应用，可让您跟踪跨项目的工作时间。无限用户，永久免费。|
| [Cloudcraft](<https://cloudcraft.co/>) — 使用 Cloudcraft 视觉设计器在几分钟内设计出专业的架构图，并针对 AWS 进行了优化，并具有显示实时数据的智能组件。| [Confluence](<https://www.atlassian.com/software/confluence>) — Atlassian 的内容协作工具用于帮助团队高效协作和共享知识。最多可容纳 10 位用户的免费计划。|
| [Crosswork](<https://crosswork.app/>) — 多功能项目管理平台。最多可免费使用 3 个项目、无限用户、1 GB 存储空间。| [diagrams.net](<https://app.diagrams.net/>) — 本地存储在 Google Drive、OneDrive 或 Dropbox 中的在线图表。所有功能和存储级别均免费。|
| [easyretro.io](<https://www.easyretro.io/>) - 简单直观的冲刺回顾工具。免费计划包含三个公共看板，每个看板每月进行一项调查。 [freedcamp.com](<https://freedcamp.com/>) — 任务、讨论、里程碑、时间跟踪、日历、文件和密码管理器。免费计划，项目、用户和文件存储不受限制。|
| [GForge](<https://gforge.com>) — 用于具有自托管和 SaaS 选项的复杂项目的项目管理和问题跟踪工具集。 SaaS 免费计划为前五名用户免费提供开源项目。| [gleek.io](<https://www.gleek.io>) — 为开发人员提供的免费描述到图表工具。|
| [GraphQL Inspector](<https://github.com/marketplace/graphql-inspector>) — GraphQL Inspector 输出两个 GraphQL 架构之间的更改列表。| [Helploom](<https://helploom.com>) — 客户支持软件，提供永久免费计划的实时聊天。|
| [HeyRetro](<https://heyretro.io/>) — 实时冲刺回顾平台，具有投票、计时器、调查、嘉宾协作和破冰游戏。永久免费计划包括每月一个看板、匿名调查和访客链接共享。 [Hygger](<https://hygger.io>) — 项目管理平台。免费计划提供无限的用户、项目和板以及 100 MB 的存储空间。
| [Ilograph](<https://www.ilograph.com/>) — 交互式图表，允许用户从多个角度和详细程度查看其基础设施。免费套餐包含无限的私有图表，最多可容纳 3 位查看者。 [Jira](<https://www.atlassian.com/software/jira>) — 在许多企业环境中使用的高级软件开发项目管理工具。最多可容纳 10 位用户的免费计划。|
| [kan.bn](<https://kan.bn/>) — 一款功能强大、灵活的看板应用，可帮助您在一个地方组织工作、跟踪进度并交付结果。最多 1 位用户的免费计划，可享受无限的看板、无限的列表、无限的卡片。| [kanbanflow.com](<https://kanbanflow.com/>) — 基于看板的项目管理。免费的高级版本有更多选项。|
| [kanbantool.com](<https://kanbantool.com/>) — 基于看板的项目管理。免费计划有两个板和两个用户，没有附件或文件。| [Kitemaker.co](<https://kitemaker.co>) — 在产品开发流程的所有阶段进行协作，并跟踪 Slack、Discord、Figma 和 Github 的工作。无限用户，无限空间。|
| [Kiter.app](<https://www.kiter.app/>) — 让任何人都可以组织自己的求职并跟踪面试、机会和人脉。完全免费。| [Kumu.io](<https://kumu.io/>) — 带有动画、装饰、过滤器、聚类、电子表格导入等的关系图。免费层允许无限的公共项目。|
| [leiga.com](<https://www.leiga.com/>) — Leiga 是一款 SaaS 产品，它使用 AI 自动管理您的项目，帮助您的团队保持专注并释放巨大潜力，为您提供保障。免费套餐：最多 10 个用户免费、20 个自定义字段、2GB 存储空间、AI 视频录制仅限 5 分钟/视频……| [Linear](<https://linear.app/>) — 具有简化界面的问题跟踪器。会员免费，上传文件大小不超过 10MB，250 期（不包括存档）。|
| [Lucidchart](<https://www.lucidchart.com/>) — 具有协作功能的在线图表工具。免费计划，包含三个可编辑文档、100 个专业模板和基本协作功能。| [MeisterTask](<https://www.meistertask.com/>) — 团队在线任务管理。免费最多 3 个项目和无限的项目成员。|
| [MeuScrum](<https://www.meuscrum.com/en>) — 带看板的免费在线 Scrum 工具。 [nTask](<https://www.ntaskmanager.com/>) — 项目管理软件，使您的团队能够协作、计划、分析和管理日常任务。基本计划永久免费，包含 100 MB 存储空间和五个用户/团队。|
| [Plane](<https://plane.so/>) — Plane 是一个简单、可扩展的开源项目和产品管理工具。会员免费，上传文件大小不超过 5 MB，1000 期。| [planitpoker.com](<https://www.planitpoker.com/>) — 免费在线规划扑克（估算工具）。|
| [point.poker](<https://www.point.poker/>) — 在线规划扑克（基于共识的估算工具）。免费提供无限用户、团队、会议、回合和投票。| [Pulse.red](<https://pulse.red>) — 应用于项目的免费简约时间跟踪器和时间表应用。
| [ScrumFast](<https://www.scrumfast.com>) — Scrum 板具有非常直观的界面，最多可免费容纳 5 个用户。| [Sflow](<https://sflow.io>) — sflow.io 是一款专为敏捷软件开发、营销、销售和客户支持而构建的项目管理工具，特别应用于外包和跨组织协作项目。免费计划最多 3 个项目和 5 名成员。
| [Shake](<https://www.shakebugs.com/>) — 应用于移动应用的应用内错误报告和反馈工具。免费计划，每个应用每月十个错误报告。| [Shortcut](<https://shortcut.com/>) — 项目管理平台。最多 10 位用户永久免费。|
| [taiga.io](<https://taiga.io/>) — 面向初创公司和敏捷开发人员的项目管理平台，免费开源。| [taskade.com](<https://www.taskade.com/>) — 实时协作任务列表和团队大纲。免费计划包含一个工作区，可容纳无限的任务和项目； 1 GB 文件存储空间； 1周的项目历史；每个视频会议有五名与会者。|
| [Teaminal](<https://www.teaminal.com>) — 应用于远程团队的站立、回顾和冲刺计划工具。最多 15 个用户免费。| [teamwork.com](<https://teamwork.com/>) — 项目管理和团队聊天。五个用户和两个项目免费。|
| [teleretro.com](<https://www.teleretro.com/>) — 简单有趣的回顾工具，包含破冰游戏、GIF 和表情符号。免费计划包括三个复古和无限会员。 [Tenzu](<https://tenzu.net/>) — 应用于敏捷团队的轻量级项目管理工具。 SaaS 依赖于免费贡献；用户可以随时选择给予 0 并且没有付费墙功能{更多详情}。|
| [更多详细信息](<https://tenzu.net/pricing/>) — Tenzu 免费贡献和定价详细信息。 [titanapps.io](<https://titanapps.io/>) — Jira 和 monday.com 的生产力工具，在问题/任务中提供结构化清单、模板和批准。适合小型团队的免费计划。|
| [todoist.com](<https://todoist.com/>) — 协作和个人任务管理。免费计划有：5个活跃项目、项目中的五个用户、上传最多5 MB 的文件、三个过滤器和一星期的活动历史记录。 [Toggl](<https://toggl.com/>) — 提供两个免费的生产力工具。用于时间管理和跟踪的 Toggl Track 应用提供免费计划，提供专为自由职业者设计的无缝时间跟踪和报告。
| [Toggl Track](<https://toggl.com/track/>) — Toggl Track 免费时间跟踪详细信息。 [Toggl Plan](<https://toggl.com/plan/>) — Toggl Plan 免费任务规划详细信息。
| [trello.com](<https://trello.com/>) — 基于看板的项目管理。无限个人看板、10 个团队看板。| [Tweek](<https://tweek.so/>) — 简单的每周待办事项日历和任务管理。
| [Wikifactory](<https://wikifactory.com/>) — 包含项目、VCS 和问题的产品设计服务。免费计划提供无限的项目和协作者以及 3GB 存储空间。 [Yodiz](<https://www.yodiz.com/>) — 敏捷开发和问题跟踪。免费最多 3 个用户，无限项目。|
| [YouTrack](<https://www.jetbrains.com/youtrack/buy/#edition=incloud>) — 免费托管的 YouTrack (InCloud)，应用于 FOSS 项目和私有项目（三个用户免费）。| [zenhub.com](<https://www.zenhub.com>) — GitHub 内唯一的项目管理解决方案。对于公共仓库、OSS 和非营利组织免费。|
| [zenkit.com](<https://zenkit.com>) — 项目管理和协作工具。最多 5 名成员免费，附件 5 GB。| [Zube](<https://zube.io>) — 项目管理，提供 4 个项目和 4 个用户的免费计划。|
| [快捷方式](<https://www.shortcut.com/>) — 软件团队的项目管理和问题跟踪。| [Atlassian 开源](<https://developer.atlassian.com/platform/open-source/>) — Atlassian 开源项目的支持和软件捐赠信息。
| [kanbantool.com](<http://kanbantool.com/>) — 基于看板的项目管理。免费、付费计划有更多选择。| [kanbanery.com](<https://kanbanery.com/>) — 基于看板的项目管理。 2 位用户免费，高级级别有更多选择。|
| | [producteev.com](<https://producteev.com/>) — 任务管理工具。免费的高级版本有更多选项。|
| [GitHub Issues](<https://github.com/features/issues>) — 与 GitHub 仓库集成的问题跟踪。 [JetBrains YouTrack](<https://www.jetbrains.com/youtrack/buy/>) — 为小型团队和合格的开源项目提供免费托管的 YouTrack。|
| [10 位用户免费](<https://www.jetbrains.com/youtrack/buy/>) — jetbrains.com — 免费托管 YouTrack (InCloud)，用于 FOSS 项目、私有项目{10 位用户免费}。| [acunote.com](<http://acunote.com/>) — 最多可供 5 名团队成员使用的免费项目管理和 SCRUM 软件。
| [gliffy.com](<http://gliffy.com/>) — 在线图表：流程图、UML、线框图...5 个图表，免费 2 MB。| [draw.io](<https://www.draw.io/>) — 本地存储在 Google Drive、OneDrive 或 Dropbox 中的在线图表。所有功能和存储级别均免费。|
| | [leankit.com](<http://leankit.com/>) — 看板，可视化您的工作流程。最多可释放 10 个用户。|
| [visualstudio.com](<https://www.visualstudio.com//products/what-is-visual-studio-online-vs>) — 无限制的免费私有代码仓库；跟踪错误、工作项、反馈等。| [testlio.com](<https://testlio.com/>) — 问题跟踪、测试管理和 Beta 测试平台。免费供私有使用。|
| | [targetprocess.com](<http://targetprocess.com/>) — 可视化项目管理，从看板和 Scrum 到几乎任何操作流程。免费供无限用户使用，最多 1,000 个数据实体{更多详细信息}。|
| [更多详细信息](<http://www.targetprocess.com/pricing/>) — targetprocess.com — 可视化项目管理，从看板和 Scrum 到几乎任何操作流程。免费供无限用户使用，最多 1,000 个数据实体{更多详细信息}。| [overv.io](<https://overv.io/>) — 为喜爱 GitHub 的团队提供敏捷项目管理。|
| [taskulu.com](<https://taskulu.com/>) — 基于角色的项目管理。最多可释放 5 个用户。| [contriber.com](<https://contriber.com/>) — 可定制的项目管理平台，免费入门计划，5 个工作区。|
| [planitpoker.com](<http://planitpoker.com/>) — 免费在线规划扑克（估算工具）。| [ubertesters.com](<https://ubertesters.com/>) — 测试平台、集成和众测者、2 个项目、5 名成员。

[返回顶部](#free-resource-catalog)

#### 电子邮件


|资源和免费层上下文 |资源和免费层上下文 |
|---|---|
| [10minutemail](<https://10minutemail.com>) — 用于测试的免费临时电子邮件。| [AhaSend](<https://ahasend.com>) — 事务性电子邮件服务，每月免费 1000 封电子邮件，免费计划中具有无限的域名、团队成员、网络钩子和消息路由。|
| [AnonAddy](<https://anonaddy.com>) — 开源匿名电子邮件转发，免费创建无限的电子邮件别名。| [anon.li Alias](<https://anon.li/alias>) — 开源、匿名电子邮件别名/转发解决方案，具有 PGP 加密、回复功能、免费计划中的 10 个随机别名和 1 个自定义别名，具有开发人员 API 和 CLI。|
| [Antideo](<https://www.antideo.com>) — 免费套餐中每小时 10 个 API 请求，用于电子邮件验证、IP 和电话号码验证。无需信用卡。| [Anypost](<https://anypost.com>) — 交易和广播电子邮件 API。每月 3,000 封电子邮件免费，然后低至每 1000 封 8 美分。|
| [Atomic Mail](<https://atomicmail.ai>) — 为 AI 代理构建的电子邮件，完全免费。| [Brevo](<https://www.brevo.com/>) — 每月 9,000 封电子邮件，每天 300 封电子邮件免费。|
| [Bump](<https://bump.email/>) — 免费 10 个 Bump 电子邮件地址，1 个自定义域。| [Burnermail](<https://burnermail.io/>) — 免费 5 个 Burner 电子邮件地址、1 个邮箱、7 天邮箱历史记录。
| [Buttondown](<https://buttondown.email/>) — 时事通讯服务。最多 100 名订阅者免费。| [Canny Pigeons](<https://cannypigeons.com/>) — DMARC 监控平台，具有 DNS 漂移告警、IP 威胁情报和无限用户。第一个域名是免费的 - 无需信用卡。|
| [Conduit](<https://conduit.email/>) — 将传入电子邮件转换为 Webhook，以从电子邮件触发您的 API。该服务完全免费。| [Contact.do](<https://contact.do/>) — 链接中的联系表单（联系表单为 bitly）。|
| [debugmail.io](<https://debugmail.io/>) — 易于开发人员使用的测试邮件服务器。| [dkimvalidator.com](<https://dkimvalidator.com/>) — 测试电子邮件的 DNS/SPF/DKIM/DMARC 设置是否正确，由 roundsphere.com 提供的免费服务。|
| [DNSExit](<https://dnsexit.com/>) — 您的域名下最多可免费使用 2 个电子邮件地址，并提供 100MB 的存储空间。| [EmailGuard](<https://emailguard.lazrek.net/>) — 通过简单的 API 阻止一次性电子邮件、采集拼写错误并验证 MX 日志记录。每月 100 个免费请求。|
| [EmailJS](<https://www.emailjs.com/>) — 这不是一个完整的电子邮件服务器；这只是一个电子邮件客户端，您可以使用它直接从客户端发送电子邮件，而无需暴露您的凭据，免费套餐有 200 个每月请求、2 个电子邮件模板、高达 50Kb 的请求、有限的联系人历史记录。 [EmailLabs.io](<https://emaillabs.io/en>) — 每月免费发送多达 9,000 封电子邮件，每天最多发送 300 封电子邮件。|
| [EmailQo 电子邮件基础设施分级器](<https://emailqo.com/email-grader>) — 免费电子邮件基础设施分级器，用于检查 SPF、DKIM、DMARC 和邮件服务器配置。 [EmailOctopus](<https://emailoctopus.com>) — 每月最多 2,500 个订阅者和 10,000 封电子邮件免费。|
| [Emailvalidation.io](<https://emailvalidation.io>) — 每月 100 次免费电子邮件验证。| [Emitlo](<https://emitlo.com>) — 每月免费 12,000 封电子邮件，电子邮件 API 和 SMTP，SPF/DKIM/DMARC 支持，无需信用卡。|
| [EtherealMail](<https://ethereal.email>) — Ethereal 是一个假冒的 SMTP 服务，主要针对 Nodemailer 和 EmailEngine 用户（但不限于）。这是一个完全免费的反交易电子邮件服务，消息永远不会被传递。 [forwardemail.net](<https://forwardemail.net>) — 自定义域的免费电子邮件转发。|
| [模仿电子邮件](<https://imitate.email>) - 沙箱电子邮件服务器，用于跨 build/qa 和 ci/cd 测试电子邮件功能。免费账户永远每天收到 15 封电子邮件。| [ImprovMX](<https://improvmx.com>) — 免费电子邮件转发。|
| [Inboxes App](<https://inboxesapp.com>) — 每天最多创建 3 封临时电子邮件，然后在完成后从方便的 Chrome 扩展程序中删除它们。 [inboxkitten.com](<https://inboxkitten.com/>) — 免费的临时/一次性电子邮件收件箱，最多可自动删除 3 天的电子邮件。开源且可以自托管。|
| [KaiMail](<https://kaimail.net>) — 使用 ARC/DKIM 签名的自定义域的电子邮件转发。免费计划包括 1 个域名、1 个邮箱、每月 300 封电子邮件以及最多 1MB 的邮件大小。| [mail-tester.com](<https://www.mail-tester.com>) — 测试电子邮件的 DNS/SPF/DKIM/DMARC 设置是否正确，每月 20 个免费。|
| [Maileroo](<https://maileroo.com>) — 供开发人员使用的 SMTP 中继和电子邮件 API。每月 5,000 封电子邮件、无限域名、免费电子邮件验证、黑名单监控、邮件测试器等。| [mailcatcher.me](<https://mailcatcher.me/>) — 采集邮件并通过 Web 界面提供服务。
| [mailchannels.com](<https://www.mailchannels.com>) — 具有 REST API 和 SMTP 集成的电子邮件 API，每月最多可免费发送 3,000 封电子邮件。| [Mailcheck.ai](<https://www.mailcheck.ai/>) — 阻止用户使用临时电子邮件地址注册，每小时 120 个请求（每月约 86,400 个）。|
| [Maildroppa](<https://maildroppa.com>) — 最多 100 个订阅者和无限的电子邮件以及免费的自动化。| [MailerLite.com](<https://www.mailerlite.com>) — 1,000 个订阅者/月，12,000 封电子邮件/月免费。|
| [MailerSend.com](<https://www.mailersend.com>) — 电子邮件 API、SMTP、每月 500 封电子邮件免费用于交易电子邮件，每天 100 个 API 请求。| [mailinator.com](<https://www.mailinator.com/>) — 免费的公共电子邮件系统，您可以在其中使用任何您想要的收件箱。
| [Mailjet](<https://www.mailjet.com/>) — 每月 6,000 封电子邮件免费（每日发送限制为 200 封电子邮件）。| [mailsac.com](<https://mailsac.com>) — 用于临时电子邮件测试的免费 API、免费公共电子邮件托管、出站采集、电子邮件到 slack/websocket/webhook（每月 1,500 个 API 限制）。|
| [Mailtrap.io](<https://mailtrap.io/>) — 电子邮件 API 和 SMTP，每月免费发送 4,000 封电子邮件，每天限制为 150 封电子邮件。电子邮件营销包括每月 500 个联系人和 1,500 封电子邮件。| [Mutant Mail](<https://www.mutantmail.com/>) — 免费 10 个电子邮件 ID、1 个域名、1 个邮箱。
| [OneSignal](<https://onesignal.com/>) — 无限制的免费推送通知。每月发送 10,000 封电子邮件，联系人数量不受限制，并可访问自动预热。| [Orbisearch](<https://orbisearch.com>) — 免费批量电子邮件验证器，每天 100 次验证，无需注册。|
| [Parsio.io](<https://parsio.io>) — 免费电子邮件解析器（转发电子邮件，提取数据，将其发送到您的服务器）。| [Plunk](<https://useplunk.com>) — 每月 3K 封电子邮件免费。|
| [Postmark](<https://postmarkapp.com/>) — 每月 100 封电子邮件免费，无限 DMARC 每周摘要。| [Proton Mail](<https://proton.me/mail>) — 内置端到端加密的免费安全电子邮件账户服务提供商。免费 1 GB 存储空间。|
| [Reloop](<https://reloop.sh>) — 面向开发人员的事务性电子邮件 API 和 SMTP。免费计划：3,000 封电子邮件/月，200 封电子邮件/天，1 个自定义域和 1 个代理收件箱。 [Resend](<https://resend.com>) — 面向开发人员的事务性电子邮件 API。每月 3,000 封电子邮件，每天免费 100 封电子邮件，一个自定义域。|
| [SendBridge Mail Tester](<https://sendbridge.com/mail-tester>) — 免费电子邮件送达率测试，无需注册。无限测试，数秒内得出结果，可共享报告页面。| [发件人](<https://www.sender.net>) — 每月最多 15,000 封电子邮件，最多 2,500 名订阅者。|
| [Sendpulse](<https://sendpulse.com>) — 500 个订阅者/月，15,000 封电子邮件/月免费。| [SendStreak](<https://www.sendstreak.com/>) — 电子邮件框架即服务，可将模板、自动化、历史记录等添加到您自己的 SMTP 服务器（例如 AWS、Maileroo、Gmail）。每天最多免费发送 100 封电子邮件，没有时间限制。|
| [SimpleLogin](<https://simplelogin.io/>) — 开源、可自托管的电子邮件别名/转发解决方案。免费10个别名，无限带宽，无限回复/发送。| [Substack](<https://substack.com>) — 无限制的免费新闻通讯服务。
| [Suped](<https://www.suped.com/>) — 一个用户友好的 DMARC 监控平台。免费计划涵盖一个域，每月最多可发送 1,000 封电子邮件。| [Sweego](<https://www.sweego.io/>) — 面向开发人员的欧洲交易电子邮件 API。每天 100 封电子邮件免费。|
| [temp-mail.io](<https://temp-mail.io>) — 免费的一次性临时电子邮件服务，可同时转发多封电子邮件。| [Temp-Mail.org](<https://temp-mail.org/en/>) — 使用各种域名的临时/一次性邮件生成器。它是完全免费的，不包括其服务的任何定价。
| [TempMailDetector.com](<https://tempmaildetector.com/>) — 每月免费验证多达 200 封电子邮件，并查看电子邮件是否是临时的。| [trashmail.com](<https://www.trashmail.com>) — 免费的一次性电子邮件地址，具有转发功能和自动地址过期功能。|
| [Tuta](<https://tuta.com/>) — 免费安全电子邮件账户服务提供商，内置端到端加密，无广告，无跟踪。免费 1 GB 存储空间、一本日历（Tuta 也有付费计划。）。| [付费计划](<https://tuta.com/pricing>) — Tuta 定价和免费计划详细信息。
| [开源](<https://github.com/tutao/tutanota>) — Tuta 开源仓库。| [Verifalia](<https://verifalia.com/email-verification-api>) — 实时电子邮件验证 API，具有邮箱确认和一次性电子邮件地址检测器；每天 25 次免费电子邮件验证。|
| [verimail.io](<https://verimail.io/>) — 批量和 API 电子邮件验证服务。每月 100 次免费验证。| [Waitlio](<https://waitlio.com/>) — 用于产品发布的等候名单管理软件。免费计划包括 100 个订阅者/月、1 个候补名单和 API 访问权限。
| [Wraps](<https://wraps.dev>) — 电子邮件自动化工作流程、5k 个跟踪事件和无限的免费联系人。| [ZeroSMTP](<https://github.com/msgwing/ZeroSMTP>) — msgwing.com 域上的免费 SMTP 中继，每天最多 200 封电子邮件，无付费套餐。|

[返回顶部](#free-resource-catalog)

#### 翻译管理


|资源和免费层上下文 |资源和免费层上下文 |
|---|---|
| [AutoLocalise.com](<https://www.autolocalise.com/>) — 即时本地化，无需管理翻译文件。每月最多可免费使用 10,000 个字符，语言不限。| [crowdin.com](<https://crowdin.com/>) — 无限的项目、无限的字符串和开源合作者。|
| [免费 PO 编辑器](<https://pofile.net/free-po-editor>) — 所有人免费。| [Lingo.dev](<https://lingo.dev>) — 用于网络和移动本地化的开源 AI 支持的 CLI。带上您自己的 LLM，或通过 Lingo.dev 管理的本地化引擎每月使用 10,000 个免费单词。
| [lingohub.com](<https://lingohub.com/>) — 最多免费 3 个用户，始终免费开源。| [Localhero.ai](<https://localhero.ai>) — 根据每个拉取请求自动进行品牌翻译，并带有术语表和翻译记忆库。 1 个项目免费，每月 250 个翻译学分（约 4,000 字）。|
| [localazy.com](<https://localazy.com>) — 免费提供 1000 种源语言字符串、无限语言、无限贡献者、启动和开源交易。| [Localit](<https://localit.io>) — 快速、开发人员友好的本地化平台，具有无缝且免费的 GitHub/GitLab 集成、AI 辅助和手动翻译以及慷慨的免费计划（包括 2 个用户、500 个密钥和无限的项目）。|
| [localizely.com](<https://localizely.com/>) — 免费开源。| [Loco](<https://localise.biz/>) — 最多 2000 种免费翻译、无限制翻译者、十种语言/项目、1000 个可翻译资产/项目。|
| [POEditor](<https://poeditor.com/>) — 免费最多 1000 个字符串。| [SimpleLocalize](<https://simplelocalize.io/>) — 免费最多 100 个翻译键、无限字符串、无限语言、启动优惠。|
| [Texterify](<https://texterify.com/>) — 对单个用户免费。| [Tolgee](<https://tolgee.io>) — 免费 SaaS 产品，翻译有限，永久免费的自托管版本。|
| [transifex.com](<https://www.transifex.com/>) — 免费开源。|  |

[返回顶部](#free-resource-catalog)

#### 表格


|资源和免费层上下文 |资源和免费层上下文 |
|---|---|
| [FabForm](<https://fabform.io/>) — 为智能开发者提供的表单后端平台。免费计划允许每月提交 250 份表格。| [Feathery](<https://feathery.io>) — 功能强大、开发人员友好的表单生成器。免费计划允许每月最多 250 次提交和五个活跃表单。
| [feedback.fish](<https://feedback.fish/>) — 免费计划允许收集总共 25 份反馈提交。| [FluidForms](<https://fluidforms.ai/>) — 具有 AI 驱动逻辑的表单构建器和后端。免费计划包括每月 100 个回复、无限表单（包括 AI 创建的表单）、网络钩子和嵌入。|
| [Form.taxi](<https://form.taxi/>) — HTML 表单提交的端点。基本使用免费计划。| [Formcarry.com](<https://formcarry.com>) — HTTP POST 表单端点，免费计划允许每月提交 100 次。|
| [Formester.com](<https://formester.com>) — 在您的站点上共享和嵌入外观独特的表单 - 创建的表单数量或计划限制的功能没有限制。| [Forminit](<https://forminit.com/>) — 供开发人员使用的无头表单后端。免费计划允许每月提交 100 份表单，包括文件上传、服务器端字段验证、电子邮件通知、垃圾邮件防护和 Zapier。
| [FormKeep.com](<https://www.formkeep.com/>) — 每月提交 50 次的无限表单、垃圾邮件防护、电子邮件通知以及可导出 HTML 的拖放设计器。| [Form Plume](<https://formplume.com>) — Form Plume 是 HTML 和 JavaScript 表单的表单后端。每月 500 份提交免费。|
| [formlets.com](<https://formlets.com/>) — 在线表格、每月无限制的单页表格、每月 100 份提交、电子邮件通知。| [forms.app](<https://forms.app/>) — 创建具有条件逻辑、自动评分计算器和 AI 等强大功能的在线表单。通过免费计划收集最多 100 个回复，将您的表单嵌入到站点上，或通过链接使用它们。
| [formspark.io](<https://formspark.io/>) — 表单到电子邮件服务，免费计划允许无限量的表单，每月 250 次提交，由客户支持团队提供支持。| [Formspree.io](<https://formspree.io/>) — 使用 HTTP POST 请求发送电子邮件。免费套餐限制为每个表单每月提交 50 次。|
| [Formsubmit.co](<https://formsubmit.co/>) — HTML 表单的简单表单端点。永远免费。| [Formware.io](<https://formware.io/>) — 在几秒钟内创建完全响应式且迷人的表单，无需知道如何编码，并免费收集无限的响应！|
| [HeroTofu.com](<https://herotofu.com/>) — 具有机器人检测和加密存档功能的表单后端。免费计划提供无限量的表格和每月 100 份提交。 [HeyForm.net](<https://heyform.net/>) — 拖放在线表单生成器。免费套餐可让您创建无限量的表单并收集无限量的提交内容。
| [Jotform.com](<https://jotform.com/>) — 免费创建在线表单、收集提交内容、接受付款、自动化工作流程以及使用内置电子签名签署文档。| [Kwes.io](<https://kwes.io/>) — 功能丰富的表单端点。免费计划包括最多 1 个站点，每月最多提交 50 条内容。
| [Pageclip](<https://pageclip.co/>) — 免费计划允许一个站点、一份表格和每月 1,000 次提交。| [SimplePDF.eu](<https://simplepdf.eu/embed>) — 在您的站点上嵌入 PDF 编辑器，并将任何 PDF 转换为可填写的表单。免费计划允许无限量的 PDF，每个 PDF 提交三份。
| [smartforms.dev](<https://smartforms.dev/>) — 强大而简单的站点表单后端，永久免费计划允许每月 50 次提交，250MB 文件存储，Zapier 集成，CSV/JSON 导出，自定义重定向，自定义响应页面，Telegram 和 Slack 机器人，单封电子邮件通知。| [staticforms.xyz](<https://www.staticforms.xyz/>) — 免费轻松集成 HTML 表单，无需任何服务器端代码。|
| [Suvicate](<https://survicate.com/>) — 使用一种工具从所有来源获取反馈并发送后续调查。免费电子邮件、站点、产品内或移动调查、AI 调查创建器以及 25 个月的回复。 [Tally.so](<https://tally.so/>) — 99% 的功能都是免费的。免费套餐包含：无限的表单、无限的提交、电子邮件通知、表单逻辑、收取付款、文件上传、自定义感谢页面等等。|
| [Typeform.com](<https://www.typeform.com/>) — 在站点上包含设计精美的表单。免费计划仅允许每个表格 10 个字段和 100 个每月回复。 [Vidhook](<https://vidhook.io/>) — 使用高响应率的令人愉快的调查收集反馈。免费计划包括 1 项主动调查、每项调查 25 个回复以及可自定义模板。
| [WaiverStevie.com](<https://waiverstevie.com>) — 具有 REST API 的电子签名平台。免费计划水印签署的文件，但允许无限的信封+签名。 [Web3Forms](<https://web3forms.com>) — 静态和 JAMStack 站点的联系表单，无需编写后端代码。免费计划允许无限表格、无限域名和每月 250 次提交。
| [Wufoo](<https://www.wufoo.com/>) — 在站点上使用的快速表单。免费计划每月提交的次数上限为 100 次。| [FormNX](<https://FormNX.com/>) — 创建无限量的表单，免费获取无限量的提交。|

[返回顶部](#free-resource-catalog)

#### 支付和账单集成


|资源和免费层上下文 |资源和免费层上下文 |
|---|---|
| [Adapty.io](<https://adapty.io/>) — 具有开源 SDK 的一站式解决方案，用于将移动应用内订阅集成到 iOS、Android、React Native、Flutter、Unity 或 Web 应用。免费获取每月高达 10,000 美元的收入。| [AllRatesToday](<https://allratestoday.com>) — 使用官方 JavaScript、Python 和 PHP SDK 提供 150 多种货币的实时中间市场汇率。免费套餐包括每月 300 个通过 HTTPS 的请求。
| [Codex](<https://www.codex.io>) — 用于定价、图表、交易、钱包余额和趋势数据的实时加密和预测市场数据 API。免费套餐每月免费提供 10,000 个请求，需要信用卡或加密身份验证。 [Churnkey](<https://churnkey.co>) — 订阅业务的取消流程（开源）、流失指标和收入分析。永远免费。|
| [CoinMarketCap](<https://coinmarketcap.com/api/>) — 提供加密货币市场数据，包括最新的加密货币和法定货币汇率。免费套餐每月提供 10K 通话积分。| [Currencyapi](<https://currencyapi.com>) — 免费货币换算和汇率数据 API。每月免费 300 个请求，私有使用每分钟 10 个请求。
| [CurrencyApi](<https://currencyapi.net/>) — 实物和加密货币的实时汇率，以 JSON 和 XML 形式提供。免费套餐每月提供 1,250 个 API 请求。 [CurrencyFreaks](<https://currencyfreaks.com/>) — 提供当前和历史货币汇率。免费开发者计划每月可处理 1000 个请求。|
| [currencylayer](<https://currencylayer.com/>) — 为您的企业提供可靠的汇率和货币转换，每月免费 100 个 API 请求。| [exchangerate-api.com](<https://www.exchangerate-api.com>) — 易于使用的货币转换 JSON API。免费套餐每天更新一次，每月限制为 1,500 个请求。|
| [汇率 API](<https://exchange-rateapi.com>) — 160 多种货币的实时汇率，60 秒更新和官方 SDK。免费套餐包括每月 300 个请求。| [FxRatesAPI](<https://fxratesapi.com>) — 提供实时和历史汇率。免费套餐需要归属。|
| [ParityVend](<https://www.ambeteco.com/ParityVend/>) — 根据访问者位置自动调整定价，以在全球范围内扩展您的业务并开拓新市场（购买力平价）。免费计划包括每月 7,500 个 API 请求。| [Qonversion](<https://qonversion.io/>) — 集成跨平台订阅管理平台，提供分析、A/B 测试、Apple Search Ads、远程配置和用于优化应用内购买和货币化的增长工具。免费获取每月高达 10,000 美元的跟踪收入。
| [RevenueCat](<https://www.revenuecat.com/>) — 用于应用内购买和订阅的托管后端（iOS 和 Android）。免费跟踪收入，每月高达 2500 美元。| [vatlayer](<https://vatlayer.com/>) — 即时增值税号码验证和欧盟增值税税率 API，每月免费 100 个 API 请求。|
| [braintree payments.com](<https://braintreepayments.com/>) — 信用卡、Paypal、Venmo、比特币、Apple Pay...首付 50,000 美元免费。 [taxratesapi.avalara.com](<http://taxratesapi.avalara.com/>) — 获取针对美国近 10,000 个销售税管辖区收取的正确销售税率。免费的 REST API。|

[返回顶部](#free-resource-catalog)

#### 评论平台


|资源和免费层上下文 |资源和免费层上下文 |
|---|---|
| [GraphComment](<https://graphcomment.com/>) — GraphComment 是一个评论平台，可帮助您从站点的受众中建立一个活跃的社区。| [IntenseDebate](<https://intensedebate.com/>) — 应用于 WordPress、Tumblr、Blogger 和许多其他站点平台的功能丰富的评论系统。|
| [Remarkbox](<https://www.remarkbox.com/>) - 开源托管评论平台，尽你所能支付“几个域的一位版主，完全控制行为和外观”。| [Utterances](<https://utteranc.es/>) — 基于 GitHub issues 构建的轻量级评论小部件。

### 产品、网络和创意

[返回顶部](#free-resource-catalog)

#### 设计和用户界面


|资源和免费层上下文 |资源和免费层上下文 |
|---|---|
| [Beste](<https://beste.co>) — 基于 shadcn/ui 块的组合优先站点构建器。免费计划可让您连接自己的自定义域，并包括无限页面、多语言支持、博客、表单和托管。 [BoxySVG](<https://boxy-svg.com>) — 一款免费的可安装 Web 应用，用于绘制 SVG 并以 SVG、PNG、jpeg 和其他格式导出。|
| [BrandIcons](<https://brandicons.dev>) — 站点图标 API。免费套餐包括每月 500,000 个带有归属的请求。| [日历图标生成器](<https://calendariconsgenerator.app/>) — 只需单击一下即可生成一整年的独特图标，完全免费。|
| [Canva](<https://canva.com>) — 用于创建视觉内容的免费在线设计工具。 [CodedThemes](<https://codedthemes.com/>) — 提供精心设计的管理仪表板和 UI 套件，旨在简化和加速现代 Web 开发。
| [Excalidraw](<https://excalidraw.com/>) — 免费的在线映射文档网页，支持免费保存到本地和导出。| [figma.com](<https://www.figma.com>) — 团队在线协作设计工具；免费层包括无限的文件和查看器，最多 2 个编辑器和三个项目。
| [Flows](<https://flows.sh/>) — 一个完全可定制的产品采用平台，用于构建入门和用户参与体验。最多 250 个每月跟踪用户免费。| [landen.co](<https://www.landen.co>) — 为您的初创企业生成、编辑和发布精美的站点和登陆页面。免费套餐允许您使用一个完全可定制并在网络上发布的站点。
| [lensdump.com](<https://lensdump.com/>) — 免费云服务映射片托管。 [Logo.dev](<https://www.logo.dev>) — 覆盖超过 4400 万个品牌的公司徽标 API，就像调用 URL 一样简单。前 10,000 次 API 调用免费。|
| [marvelapp.com](<https://marvelapp.com/>) — 设计、配置文件设计和协作，仅限一个用户和项目的免费计划。| [Mindmup.com](<https://www.mindmup.com/>) — 免费无限量思维导图并将其存储在云端。|
| [Mockplus iDoc](<https://www.mockplus.com/idoc>) — Mockplus iDoc 是一款强大的设计协作和交付工具。免费计划包括三个用户和五个项目，具有所有可用功能。 [photopea.com](<https://www.photopea.com>) — 一款免费、高级的在线设计编辑器，带有 Adobe Photoshop UI，支持 PSD、XCF 和 Sketch 格式（Adobe Photoshop、Gimp 和 Sketch 应用）。|
| [Plasmic](<https://www.plasmic.app/>) — 一种快速、易于使用、强大的网页设计工具和页面构建器，可集成到您的代码库中。| [Proto.io](<https://www.proto.io>) — 无需编码即可创建完全交互式的 UI 配置文件。免费试用结束后即可使用免费套餐。|
| [Quant Ux](<https://quant-ux.com/>) — Quant Ux 是一款配置文件设计和设计工具。 - 它是完全免费且开源的。| [Shadcn Studio](<https://shadcnstudio.com/theme-editor>) — 预览不同组件和布局的主题更改。|
| [smartmockups.com](<https://smartmockups.com/>) — 创建产品模型，200 个免费模型。| [SVGicons.com](<https://svgicons.com/>) — 免费搜索引擎，提供 312K+ 开源 SVG 图标，包含现成的 SVG、React、Vue、HTML 和 CSS 代码。|
| [TeleportHQ](<https://teleporthq.io/>) — 低代码前端设计和开发平台。三个免费项目、无限合作者和免费代码导出。| [Unicorn Platform](<https://unicornplatform.com/>) — 轻松构建具有托管功能的登陆页面。一个站点免费。|
| [Updrafts.app](<https://updrafts.app>) — 用于基于 tailwindcss 设计的所见即所得站点构建器。免费用于非商业用途。| [Webflow](<https://webflow.com>) — 所见即所得站点构建器，具有动画和站点托管功能。两个项目免费。|
| [Webstudio](<https://webstudio.is/>) — Webflow 的开源替代品。免费计划在其域上提供无限的站点。| [whimsical.com](<https://whimsical.com/>) — 协作流程图、线框、便签和思维导图。创建最多 4 个免费板。|
| [Zeplin](<https://zeplin.io/>) — 设计师和开发人员协作平台。一个项目免费。| [WrapPixel](<https://www.wrappixel.com/>) — 下载使用 Angular、React、VueJs、NextJS 和 NuxtJS 创建的高品质免费和高级管理仪表板模板！|
| [Themeselection](<https://themeselection.com/>) — 精选高品质、现代设计、专业且易于使用的免费管理仪表板模板。| [AdminMart](<https://adminmart.com/>) — 使用 Angular、Bootstrap、React、VueJs、NextJS 和 NuxtJS 创建的高质量免费和高级管理仪表板和站点模板！|

[返回顶部](#free-resource-catalog)

#### 字体


|资源和免费层上下文 |资源和免费层上下文 |
|---|---|
| [Befonts](<https://befonts.com/>) — 提供几种独特的字体供个人或商业用途。 [Bunny](<https://fonts.bunny.net>) — 面向隐私的 Google 字体。|
| [dafont](<https://www.dafont.com/>) — 本站点上提供的字体是其作者的财产，并且是免费软件、共享软件、演示版或公共域。| [Everything Fonts](<https://everythingfonts.com/>) — 提供多种工具； @font-face，单位转换器，字体提示和字体提交器。|
| [网页字体](<https://fontofweb.com/>) — 识别站点上使用的所有字体及其使用方式。| [Font Squirrel](<https://www.fontsquirrel.com/>) — 许可用于商业作品的免费软件字体。
| [FontGet](<https://www.fontget.com/>) — 有多种字体可供下载，并用标签整齐地排序。 [fonts.xz.style](<https://fonts.xz.style/>) — 免费开源服务，用于使用 CSS 向站点提供字体系列。|
| [Fontsensei](<https://fontsensei.com/>) — 由用户标记的开源 Google 字体。| [Fontshare](<https://www.fontshare.com/>) — 是一项免费字体服务。这是一个不断增长的专业级字体集合，100% 免费供个人和商业使用。
| [Google Fonts](<https://fonts.google.com/>) — 通过下载或指向 Google CDN 的链接，可以轻松快速地在站点上安装许多免费字体。|  |

[返回顶部](#free-resource-catalog)

#### 移动应用分发和反馈


|资源和免费层上下文 |资源和免费层上下文 |
|---|---|
| [Appho.st](<https://appho.st>) — 移动应用托管平台。免费计划包括五个应用、每月 50 次下载、最大文件大小为 100 MB。| [Diawi](<https://www.diawi.com>) — 将 iOS 和 Android 应用直接部署到设备。免费计划：应用上传、受密码保护的链接、1 天过期、十次安装。
| [GetUpdraft](<https://www.getupdraft.com>) — 分发移动应用以进行测试。免费计划包括 1 个应用项目、3 个应用版本、500 MB 存储空间以及每月 100 次应用安装。 [InstallOnAir](<https://www.installonair.com>) — 通过无线方式分发 iOS 和 Android 应用。免费计划：无限制上传、私有链接、访客有效期为 2 天、注册用户有效期为 60 天。
| [Loadly](<https://loadly.io>) — iOS 和 Android 测试版应用分发服务提供完全免费的服务，无限下载、高速下载和无限上传。| [DistApp](<https://distapp.app>) — 管理和分发 Android、iOS 和桌面应用。免费试用 2 个应用、1 个组织、100 MB 存储空间并可无限下载，或自行托管。|

[返回顶部](#free-resource-catalog)

#### 访客会话录音


|资源和免费层上下文 |资源和免费层上下文 |
|---|---|
| [FullStory.com](<https://www.fullstory.com>) — 每月 1,000 个会话，保留一个月的数据和三个用户席位。| [此处](<https://help.fullstory.com/hc/en-us/articles/360020623354-FullStory-Free-Edition>) — FullStory 免费版限制。|
| [howuku.com](<https://howuku.com>) — 跟踪用户交互、参与度和事件。每月最多 5,000 次访问免费。| [inspectlet.com](<https://www.inspectlet.com/>) — 一个站点每月免费 2,500 次会话。|
| [LogRocket.com](<https://www.logrocket.com>) — 每月 1,000 个会话，保留 30 天、错误跟踪、实时模式。| [Microsoft Clarity](<https://clarity.microsoft.com/>) — 会话录制完全免费，“无流量限制”、无项目限制、无采样。|
| [mouseflow.com](<https://mouseflow.com/>) — 一个站点每月免费 500 次会话。| [OpenReplay.com](<https://www.openreplay.com>) — 开源会话重放，带有用于错误重现的开发工具、用于实时支持的实时会话以及产品分析套件。每月一千次会话，可访问所有功能并保留 7 天。|
| [Reactflow.com](<https://www.reactflow.com/>) — 每个站点：每天 1,000 页面浏览量、三个热图、三个小部件、免费错误跟踪。 [smartlook.com](<https://www.smartlook.com/>) — 应用于网络和移动应用的免费软件包（1500 个会话/月）、三张热图、一个漏斗、1 个月的数据历史记录。|
| [UXtweak.com](<https://www.uxtweak.com/>) — 记录并监控访问者如何使用您的站点或应用。小型项目免费无限时间。|  |

[返回顶部](#free-resource-catalog)

#### 开发博客站点


|资源和免费层上下文 |资源和免费层上下文 |
|---|---|
| [AyeDot](<https://ayedot.com/>) — 以现代多媒体短格式迷你博客的形式免费与世界分享您的想法、知识和故事。 [BearBlog](<https://bearblog.dev/>) — 极简主义、Markdown 驱动的博客和站点构建器。
| [Dev.to](<https://dev.to/>) — 程序员分享想法并帮助彼此成长的地方。| [Hashnode](<https://hashnode.com/>) — 为开发者提供的无忧博客软件！.|
| [Medium](<https://medium.com/>) — 更加思考对您来说重要的事情。| [JustBlogged](<https://justblogged.com>) — 免费博客平台，具有自定义域支持和快速的全球性能。|

[返回顶部](#free-resource-catalog)

#### 截图 API


|资源和免费层上下文 |资源和免费层上下文 |
|---|---|
| [ApiFlash](<https://apiflash.com>) — 基于 Aws Lambda 和 Chrome 的屏幕截图 API。| [PhantomJsCloud](<https://PhantomJsCloud.com>) — 浏览器自动化和页面渲染。免费套餐提供高达 500 页/天。|
| [screenshotbase.com](<https://screenshotbase.com>) — 每月 300 张免费屏幕截图。快速、免费且可扩展。| [screenshotlayer.com](<https://screenshotlayer.com/>) — 采集任何站点的高度可定制的快照。每月免费 100 个快照。|
| [screenshotmachine.com](<https://www.screenshotmachine.com/>) — 每月采集 100 个快照，png、gif 和 jpg，包括完整长度的采集，而不仅仅是主页。| [Screenshot Scout](<https://screenshotscout.com/>) — 面向开发人员的屏幕截图 API。免费计划包括每月 200 张屏幕截图，永久有效。|
| [Shotpipe](<https://shotpipe.io>) - 为静态站点构建的屏幕截图和 Open Graph 图像 API。免费套餐包括每月 100 次渲染，无需卡片。| [SnapAPI](<https://snapapi.pics>) — 屏幕截图、视频录制、PDF 生成和 Web 数据提取 API。免费计划包括每月 200 张屏幕截图。|
| [thumbnail.ws](<https://thumbnail.ws>) — 用于生成站点缩略图的 API。每月免费 1,000 个请求。|  |

[返回顶部](#free-resource-catalog)

#### 国际手机号码验证 API 和 SDK


|资源和免费层上下文 |资源和免费层上下文 |
|---|---|
| [numverify](<https://numverify.com/>) — 全球电话号码验证和查找 JSON API。每月 100 个 API 请求。| [veriphone](<https://veriphone.io/>) — 使用免费、快速、可靠的 JSON API 进行全球电话号码验证。每月 1000 个请求。|

### 学习和专业资源

[返回顶部](#free-resource-catalog)

#### 教育和职业发展


|资源和免费层上下文 |资源和免费层上下文 |
|---|---|
| [Cisco Networking Academy, Skills for All](<https://skillsforall.com/>) — 提供网络安全、网络和 Python 等主题的免费认证课程。| [CloudCertPrep](<https://cloudcertprep.io>) — 免费开源 AWS 认证模拟考试，包含 1,050 多个 CLF-C02 问题。|
| [CodeTrain](<https://codetrain.ai>) — AI 编码导师，在您自己的代码库上教您，并且从不为您编写代码。免费套餐：每月 10 节浏览器内课程，Python/JS 在客户端运行，无需卡片。| [DeepLearning.AI Short Courses](<https://www.deeplearning.ai/short-courses/>) — 来自行业领先专家的免费短期课程，在一小时或更短的时间内获取最新的生成式 AI 工具和技术的实践经验。
| [DevNet Academy](<https://devnet-academy.com/>) — 针对思科 DevNet 专家/CCIE 自动化认证的免费自定进度培训。| [Django-tutorial.dev](<https://django-tutorial.dev>) — 免费在线指南，用于学习 Django 作为他们的第一个框架，并为用户撰写的文章提供免费的 dofollow 反向链接。|
| [edX](<https://www.edx.org/>) — 提供来自 250 个领先机构（包括哈佛大学和麻省理工学院）的 4,000 多个免费在线课程，专门从事计算机科学、工程和数据科学。 [Exercism](<https://exercism.org>) — 提供超过 75 种编程语言的免费开源编程教育，并提供人工指导。|
| [免费专业简历模板和编辑器](<https://www.overleaf.com/latex/templates/tagged/cv>) — 免费平台，提供大量适合经验丰富专业人士的简历模板，可完全克隆和编辑并下载，ATS 优化。| [FreeCodeCamp](<https://www.freecodecamp.org/>) — 开源平台，提供数据分析、信息安全、Web 开发等方面的免费课程和认证。|
| [Full Stack Open](<https://fullstackopen.com/en/>) — 使用 React、Node.js、GraphQL、TypeScript 等进行现代 Web 开发的免费大学级课程。| [交互式简历](<https://interactive-cv.com>) — AI 驱动的简历生成器，具有实时编辑和 ATS 优化功能。免费套餐包括将简历自动转换为高级模板（哈佛、Europass）、PDF 导出、具有无限职位发布见解的职位跟踪器以及具有聊天/语音功能的简历共享。
| [Khan Academy](<https://www.khanacademy.org/computing/computer-programming>) — 用于学习基础和高级 HTML/CSS、JavaScript 和 SQL 的免费在线指南。 [LabEx](<https://labex.io>) — 通过交互式实验室和实际项目培养 Linux、DevOps、网络安全、编程、数据科学等方面的技能。|
| [MIT OpenCourseWare](<https://ocw.mit.edu/>) — MIT OpenCourseWare 是一个在线出版物，包含来自 2,500 多个 MIT 课程的材料，与世界各地的学习者和教育工作者免费分享知识。 [@mitocw](<https://www.youtube.com/@mitocw/featured>) — 麻省理工学院 OpenCourseWare YouTube 频道。|
| [Reactive Resume](<https://rxresu.me>) — 免费、开源的简历生成器，包含数十个模板。| [Roadmap.sh](<https://roadmap.sh>) — 免费学习路线图，涵盖从区块链到用户体验设计的各个开发方面。|
| [The Odin Project](<https://www.theodinproject.com/>) — 免费的开源平台，其课程重点关注用于 Web 开发的 JavaScript 和 Ruby。| [W3Schools](<https://www.w3schools.com/>) — 提供有关 HTML、CSS、JavaScript 等 Web 开发技术的免费教程。|

[返回顶部](#free-resource-catalog)

#### Flutter 相关以及在不使用 Mac 的情况下构建 IOS 应用


|资源和免费层上下文 |资源和免费层上下文 |
|---|---|
| [FlutLab](<https://flutlab.io/>) — FlutLab 是一个现代 Flutter 在线 IDE，也是创建、调试和构建跨平台项目的最佳场所。|  |

[返回顶部](#free-resource-catalog)

#### 杂项


|资源和免费层上下文 |资源和免费层上下文 |
|---|---|
| [BinShare.net](<https://binshare.net>) — 创建和共享代码或二进制文件。 [Blynk](<https://blynk.io>) — 带有 API 的 SaaS，用于控制、构建和评估 IoT 设备。免费开发者计划，包含 5 台设备、免费云和数据存储。
| [cron-job.org](<https://cron-job.org>) — 在线 cronjobs 服务。无限的工作是免费的。 [Cronhooks](<https://cronhooks.io/>) — 安排按时或定期的 Webhooks。免费计划允许 5 个临时时间表。
| [datelist.io](<https://datelist.io>) — 在线预订/预约安排系统。每月最多可免费预订 5 次，包括 1 个日历。| [FOSSA](<https://fossa.com/>) — 针对第三方代码、许可证合规性和漏洞的可扩展的端到端管理。
| [Hook Relay](<https://www.hookrelay.dev/>) — 轻松为您的应用添加 Webhook 支持：为您完成排队、带回退的重试和日志记录。免费计划每天有 100 次交付、14 天保留和 3 个挂钩端点。 [Hosting Checker](<https://hostingchecker.co>) — 检查任何域、站点或 IP 地址的托管信息，例如 ASN、ISP、位置等。
| [newreleases.io](<https://newreleases.io/>) — 从 GitHub、GitLab、Bitbucket、Python PyPI、Java Maven、Node.js NPM、Node.js Yarn、Ruby Gems、PHP Packagist、.NET NuGet、Rust Cargo 和 Docker Hub 接收有关新版本的电子邮件、Slack、Telegram、Discord 和自定义 Webhooks 的通知。 [PDFMonkey](<https://www.pdfmonkey.io/>) — 在仪表板中管理 PDF 模板、使用动态数据调用 API 并下载 PDF。每月提供 300 个免费文档。|
| [Pika Code Screenshots](<https://pika.style/templates/code-image>) — 使用扩展从代码片段和 VSCode 创建漂亮的、可自定义的屏幕截图。 [QuickType.io](<https://quicktype.io/>) — 从 JSON、模式和 GraphQL 快速自动生成模型/类/类型/接口和序列化器，以便在任何编程语言中快速、安全地处理数据。|
| [readme.com](<https://readme.com/>) — 精美的文档变得简单，免费开源。| [redirect.pizza](<https://redirect.pizza/>) — 通过 HTTPS 支持轻松管理重定向。免费计划包括 10 个来源和每月 100,000 次点击。
| [redirection.io](<https://redirection.io/>) — 用于管理企业、营销和 SEO 的 HTTP 重定向的 SaaS 工具。 [redirs.com](<https://www.redirs.com/>) — 通过自动 SSL、分析和 URL 路径转发轻松进行域重定向。免费基本使用（最多 5 个域）。|
| [RedirHub](<https://www.redirhub.com/>) — API 优先的 URL 重定向基础设施，具有自定义名称服务器、边缘网络、HTTPS 和主动链接监控。免费计划包括 2 个主机名、每月 100K 请求、自动 SSL、路径转发和 REST API 访问。| [ReqBin](<https://reqbin.com/>) — 在线发布 HTTP 请求。包括用于保存您的请求的基本登录系统。|
| [Smartcar API](<https://smartcar.com>) — 汽车定位、获取油箱、电池电量、里程表、开/锁车门等的 API| [Sunrise and Sunset](<https://sunrisesunset.io/api/>) — 获取给定经度和纬度的日出和日落时间。
| [superfeedr.com](<https://superfeedr.com/>) — 符合 PubSubHubbub 标准的实时提要、导出、分析。免费，定制较少。| [SurveyMonkey.com](<https://www.surveymonkey.com>) — 创建在线调查。免费计划每项调查仅允许 10 个问题和 100 个答复。
| [SYNCDATE](<https://syncdate.app>) — 双向 Google 日历同步。免费等级：2 个账户，无限次事件。| [UUID Generator](<https://newuuid.com/>) — 立即生成企业级 UUID v1、UUID v4、UUID v7、GUID、Nil UUID、CUID v1/v2、NanoID 和 ULID。
| [Versionfeeds](<https://versionfeeds.com>) — 用于发布您喜爱的软件的自定义 RSS 源。 （前 3 个提要免费）。| [apichangelog.com](<https://apichangelog.com/>) — 订阅以便在每次更新 API 文档时收到通知（Facebook、Twitter、Google...）。|
| [docsapp.io](<https://www.docsapp.io/>) — 发布文档的最简单方法，免费开源。| |
| [fullcontact.com](<https://fullcontact.com/developer/pricing/>) — 通过将社交文档添加到您的应用中，帮助您的用户更多地了解他们的联系人。每月 500 次免费 Person API 匹配。| [screenshotmachine.com](<https://screenshotmachine.com/>) — 每月采集 100 个快照，png、gif 和 jpg，包括完整长度的采集，而不仅仅是主页。|
| [readme.io](<https://readme.io/>) — 精美的文档变得简单，免费开源。| [formaholic.com](<https://formaholic.com>) — 简单形式端点。|

[返回顶部](#free-resource-catalog)

#### 远程桌面工具


|资源和免费层上下文 |资源和免费层上下文 |
|---|---|
| [Parsec](<https://parsec.app/>) — 免费安装在无限数量的设备上（供个人使用），并允许同时与单个设备建立最多 20 个连接。| [AnyDesk](<https://anydesk.com>) — 免费用于 3 台设备，会话数量和持续时间没有限制。|
| [Getscreen.me](<https://getscreen.me>) — 2 台设备免费，会话数量和持续时间没有限制。| [RemSupp](<https://remsupp.com>) — 按需支持和永久访问设备（免费每天 2 次会话）。|
| [RustDesk](<https://rustdesk.com/>) — 适合所有人的开源虚拟/远程桌面基础设施！|  |

[返回顶部](#free-resource-catalog)

#### 其他免费资源


|资源和免费层上下文 |资源和免费层上下文 |
|---|---|
| [get.localhost.direct](<https://get.localhost.direct>) — 更好的 `*.localhost.direct` 通配符公共 CA 签名 SSL 证书，用于具有子域支持的本地主机开发。 [GitHub Education](<https://education.github.com/pack>) — 为学生提供的免费服务集合。|
| [Glob tester](<https://globster.xyz/>) — 一个允许您设计和测试 glob 模式的站点。| [Killer Coda](<https://killercoda.com/>) — 浏览器中的交互式Playground，用于学习 Linux、Kubernetes、容器、编程、DevOps、网络。|
| [Microsoft 365 开发人员计划](<https://developer.microsoft.com/microsoft-365/dev-program>) — 获取为 Microsoft 365 平台构建解决方案所需的免费沙箱、工具和其他资源。该订阅是 90 天的 Microsoft 365 E5 订阅（Windows 除外），可续订。 [Microsoft 365 E5 订阅](<https://www.microsoft.com/microsoft-365/enterprise/e5>) — Microsoft 365 E5 订阅详细信息。|
| [MySQL VisualExplain](<https://mysqlexplain.com>) — 易于理解且免费的 MySQL EXPLAIN 输出可视化工具，用于优化慢速查询。 [RedHat for Developers](<https://developers.redhat.com>) — 免费访问专为开发人员提供的Red Hat 产品，包括 RHEL、OpenShift、CodeReady 等。仅限个人计划。|
| [sandbox.httpsms.com](<https://sandbox.httpsms.com>) — 免费发送和接收测试短信。| [SimpleBackups.com](<https://simplebackups.com/>) — 直接存储到云存储提供商（AWS、DigitalOcean 和 Backblaze）中的服务器和数据库（MySQL、PostgreSQL、MongoDB）的备份自动化服务。
| [SimpleRestore](<https://simplerestore.io>) — 轻松恢复 MySQL 备份。 [SnapShooter](<https://snapshooter.com/>) — 应用于 DigitalOcean、AWS、LightSail、Hetzner 和 Exoscale 的备份解决方案，支持将数据库、文件系统和应用直接备份到基于 s3 的存储。
| [github.com - FOSS for Dev](<https://github.com/httpsGithubParty/FOSS-for-Dev>) — 为开发人员提供的免费开源软件中心。| [TechSoup](<https://www.techsoup.org/>) — 为符合条件的非营利组织提供技术捐赠和折扣服务。|
| [Awesome Lists](<https://github.com/sindresorhus/awesome>) — 来自 GitHub 的高质量免费开源资源的精选目录。|  |

[返回顶部](#free-resource-catalog)

## 相关主题

- [云成本管理和 FinOps](../operations-reliability-finops/cloud-cost-management-and-finops.md)
- [资源清单、报告和合规证据](../operations-reliability-finops/resource-inventory-reporting-and-compliance-evidence.md)
- [多云架构与治理](../cloud-foundations-governance/multi-cloud-architecture-and-governance.md)
- [基础设施即代码工程标准](../infrastructure-as-code/iac-infrastructure-as-code-engineering-standards.md)
