---
title: "Free Cloud Resources for Infrastructure Engineers"
summary: "A deduplicated catalog of infrastructure-focused free tiers and tools merged from free-for.dev and free-for-devops, organized into seven capability domains for faster scanning."
document_id: "CR-01"
category: "Cloud Free Resource"
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
owner: "Cloud Center of Excellence"
audience:
  - infrastructure engineers
  - platform engineers
  - cloud architects
  - DevOps engineers
  - FinOps practitioners
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

# Free Cloud Resources for Infrastructure Engineers

This article combines the [free-for.dev resource page](https://github.com/ripienaar/free-for-dev/blob/master/README.md) with the [free-for-devops resource page](https://github.com/hungrydevops/free-for-devops/blob/main/README.md) into a navigable catalog for infrastructure engineers. It preserves the upstream resource links while grouping them under the source categories, so readers can scan providers, platforms, delivery tooling, observability, data services, and adjacent engineering resources without losing the original context.

The upstream repository is the authority for current availability, quotas, eligibility, regional limits, identity or payment requirements, and provider terms. This page is a curated navigation layer, not a guarantee that an offer remains free.

The provider entries were reviewed against the upstream catalog and current provider free-tier or pricing documentation on 2026-08-17. Where a provider's current documentation differs from the upstream snapshot, the current provider limit is shown; eligibility, billing-account type, region, and usage conditions still apply.

The catalog preserves all 57 free-for.dev categories, adds the mapped free-for-devops entries, and removes duplicate URLs across both sources. The seven capability domains make it easier to move from cloud foundations to delivery, data, security, collaboration, product tooling, and specialized resources without losing the original source categories.

## Free resource catalog

The catalog is organized into seven capability domains. Each domain contains the original free-for.dev categories, with provider-level detail retained where the source provides it.

### Cloud Platforms & Infrastructure

#### Major Cloud Providers


##### [Google Cloud Platform](<https://cloud.google.com>)
- [App Engine](<https://cloud.google.com/appengine>) — Standard environment: 28 F1 instance-hours/day, 9 B1 instance-hours/day, and 1 GB outbound data transfer/day.
- [Cloud Firestore](<https://cloud.google.com/firestore>) — 1 GiB storage, 50,000 reads, 20,000 writes, and 20,000 deletes per day per project, plus 10 GiB outbound data transfer per month. The free tier applies to one database per project.
- [Compute Engine](<https://cloud.google.com/compute>) — 1 non-preemptible e2-micro VM per month in supported US regions, 30 GB-months of standard persistent disk, and 1 GB outbound data transfer from North America to eligible destinations per month. GPUs and TPUs are excluded.
- [Cloud Storage](<https://cloud.google.com/storage>) — 5 GB-months of Standard regional storage in supported US regions, 5,000 Class A operations, 50,000 Class B operations, and 100 GB outbound data transfer from North America per month.
- [Cloud Shell](<https://cloud.google.com/shell>) — Browser-based shell and editor with 5 GB of persistent disk storage and a 50-hour default weekly usage quota.
- [Cloud Pub/Sub](<https://cloud.google.com/pubsub>) — 10 GiB of messages per month.
- [Cloud Functions](<https://cloud.google.com/functions>) — Now documented as Cloud Run functions: 2 million invocations per month, plus 400,000 GB-seconds, 200,000 GHz-seconds, and 5 GB outbound data transfer per month.
- [Cloud Run](<https://cloud.google.com/run>) — 2 million requests per month, 360,000 GB-seconds of memory, 180,000 vCPU-seconds of compute time, and 1 GB outbound data transfer from North America per month under request-based billing.
- [Google Kubernetes Engine](<https://cloud.google.com/kubernetes-engine>) — One free Autopilot or zonal Standard cluster per month. The free credit covers the cluster charge only; nodes, networking, and other resources are billed separately.
- [BigQuery](<https://cloud.google.com/bigquery>) — 1 TiB of querying and 10 GiB of storage per month.
- [Cloud Build](<https://cloud.google.com/build>) — 2,500 build-minutes per month for the e2-standard-2 machine type in the default pool.
- [Google Colab](<https://colab.research.google.com/>) — Free Jupyter Notebooks development environment.
- [Kaggle](<https://www.kaggle.com/>) — Notebook environment with 4 CPU cores and 30 GB RAM; verified users can access P100/T4 GPUs for 30 GPU-hours/week or a TPU v3-8 for 20 hours/week.
- [Technical Specifications](<https://www.kaggle.com/docs/notebooks#technical-specifications>) — Kaggle notebook hardware and usage details.
- [ChromeRemoteDesktop](<https://remotedesktop.google.com/>) — Free remote desktop app with practically no limit on the number of devices, owned by Google, so needs a Google account.
- [Google AI Studio](<https://aistudio.google.com/>) — Free Gemini and Gemma model access; published limits include 5 Flash requests/minute, 20/day, and model-specific token and request caps.
- [cloud.google.com](<https://cloud.google.com/free>) — Detailed provider free-tier list.

##### [Amazon Web Services](<https://aws.amazon.com>)
- [CloudFront](<https://aws.amazon.com/cloudfront/>) — 1 TB data transfer out, 10 million HTTP/HTTPS requests, and 2 million CloudFront Functions invocations per month.
- [CloudWatch](<https://aws.amazon.com/cloudwatch/>) — 5 GB of log data, 10 custom metrics, 1 million API requests, and 10 standard-resolution alarm metrics per month; additional free observability allowances also apply.
- [CodeBuild](<https://aws.amazon.com/codebuild/>) — 100 build-minutes per month on general1.small or arm1.small on-demand compute, or 6,000 build-seconds per month on eligible Lambda compute.
- [CodeCommit](<https://aws.amazon.com/codecommit/>) — 5 active users, 50 GB of storage, and 10,000 Git requests per month. This offer is available indefinitely to new and existing AWS customers.
- [CodePipeline](<https://aws.amazon.com/codepipeline/>) — 1 active V1 pipeline per month, or 100 V2 action-execution minutes per month.
- [DynamoDB](<https://aws.amazon.com/dynamodb/>) — 25 WCUs, 25 RCUs, 25 GB of Standard table storage, 25 replicated WCUs for global tables across two Regions, and 2.5 million DynamoDB Streams read requests per month.
- [Lambda](<https://aws.amazon.com/lambda/>) — 1 million requests and 400,000 GB-seconds per month.
- [SNS](<https://aws.amazon.com/sns/>) — 1 million publishes/month
- [SES](<https://aws.amazon.com/ses/>) — The former 3,000 message-charge allowance for the first 12 months is not available to new customers starting July 21, 2026; eligible existing customers may retain the remainder of their allowance. New customers can apply AWS Free Tier credits to eligible SES usage.
- [SQS](<https://aws.amazon.com/sqs/>) — 1 million requests per month.
- [aws.amazon.com](<https://aws.amazon.com/free/>) — New customers can receive up to $200 in AWS credits and a six-month Free account plan; more than 30 always-free offers remain, subject to account-plan and service terms.

##### [Microsoft Azure](<https://azure.microsoft.com>)
- [App Service](<https://azure.microsoft.com/services/app-service/>) — 10 web, mobile, or API apps with 1 GB storage and 60 CPU minutes per day.
- [Functions](<https://azure.microsoft.com/services/functions/>) — 1 million requests per month
- [DevTest Labs](<https://azure.microsoft.com/services/devtest-lab/>) — Enable fast, easy, and lean dev-test environments
- [Microsoft Entra ID (formerly Azure Active Directory)](<https://azure.microsoft.com/services/active-directory/>) — 50,000 stored objects with single sign-on to cloud applications.
- [Azure AD B2C](<https://azure.microsoft.com/services/active-directory/external-identities/b2c/>) — 50,000 monthly active users (MAU).
- [Azure DevOps](<https://azure.microsoft.com/services/devops/>) — 5 active users, unlimited private Git repos
- [Azure Pipelines](<https://azure.microsoft.com/services/devops/pipelines/>) — 10 free parallel jobs with unlimited minutes for open source for Linux, macOS, and Windows
- [Microsoft IoT Hub](<https://azure.microsoft.com/services/iot-hub/>) — 8,000 messages per day
- [Load Balancer](<https://azure.microsoft.com/services/load-balancer/>) — 750 hours, 15GB data processing and 5 rules (12mo)
- [Notification Hubs](<https://azure.microsoft.com/services/notification-hubs/>) — 1 million push notifications
- [Bandwidth](<https://azure.microsoft.com/pricing/details/bandwidth/>) — 15 GB outbound per month for the first 12 months and 100 GB outbound per month under the always-free offer.
- [Cosmos DB](<https://azure.microsoft.com/services/cosmos-db/>) — 1,000 RUs/second of provisioned throughput and 25 GB of storage under the always-free offer.
- [Static Web Apps](<https://azure.microsoft.com/pricing/details/app-service/static/>) — 100 GB bandwidth per subscription, 2 custom domains, and 0.5 GB storage per app, with free SSL, authentication/authorization, and preview deployments.
- [Storage](<https://azure.microsoft.com/services/storage/>) — First 12 months: Azure Files, Blob, Archive, and two 64-GB P6 SSD free allowances, subject to operation, snapshot, and regional limits.
- [Cognitive Services](<https://azure.microsoft.com/services/cognitive-services/>) — AI/ML APIs (Computer Vision, Translator, Face detection, Bots, etc) with free tier including limited transactions
- [Cognitive Search](<https://azure.microsoft.com/services/search/#features>) — Azure AI Search Free tier: 50 MB storage, up to 10,000 hosted documents, and 3 indexes per service.
- [Azure Kubernetes Service](<https://azure.microsoft.com/services/kubernetes-service/>) — Managed Kubernetes service, free cluster management
- [Event Grid](<https://azure.microsoft.com/services/event-grid/>) — 100K ops/month
- [Service Bus](<https://azure.microsoft.com/products/service-bus/>) — 750 hours and 13 million operations Standard tier base unit (12mo)
- [azure.microsoft.com](<https://azure.microsoft.com/free/>) — Detailed provider free-tier list.

##### [Oracle Cloud](<https://www.oracle.com/cloud/>)
- [Compute](<https://www.oracle.com/cloud/compute/>) — Up to two AMD VM.Standard.E2.1.Micro instances, or 1,500 OCPU-hours and 9,000 GB-hours per month of Ampere A1 resources (equivalent to 2 OCPUs and 12 GB memory). Idle instances may be reclaimed after Oracle's documented 7-day low-utilization test.
- [Block Volume](<https://docs.oracle.com/en-us/iaas/Content/Block/Concepts/overview.htm>) — 200 GB total of boot and block volume storage plus five volume backups in the home region.
- [Object Storage](<https://www.oracle.com/cloud/storage/object-storage/>) — 20 GB combined Always Free storage and 50,000 Object Storage API requests per month for an Always Free-only tenancy; paid or trial accounts receive 10 GB each of Standard, Infrequent Access, and Archive storage.
- [Load Balancer](<https://docs.oracle.com/en-us/iaas/Content/Balance/Concepts/balanceoverview.htm>) — 1 Flexible Load Balancer with 10 Mbps plus 1 Network Load Balancer.
- [Databases](<https://www.oracle.com/cloud/database/>) — 2 Autonomous AI databases with 20 GB each; Oracle NoSQL and MySQL HeatWave also have separate Always Free offers.
- [Monitoring](<https://docs.oracle.com/en-us/iaas/Content/Monitoring/home.htm>) — 500 million ingestion data points and 1 billion retrieval data points per month.
- [Bandwidth](<https://docs.oracle.com/en-us/iaas/Content/FreeTier/freetier_topic-Always_Free_Resources.htm#outbound_data_transfer>) — 10 TB outbound data per month; VM internet bandwidth is up to 50 Mbps for AMD and scales with OCPUs for Arm.
- [Public IP](<https://docs.oracle.com/en-us/iaas/Content/Network/Tasks/managingpublicIPs.htm>) — Public IPv4 addresses are included with eligible compute and load-balancing resources; exact allocation is tenancy- and resource-dependent.
- [Notifications](<https://www.oracle.com/cloud/cloud-native/notifications/>) — 1 million HTTPS notifications and 1,000 email notifications per month.
- [deemed idle](<https://docs.oracle.com/en-us/iaas/Content/FreeTier/freetier_topic-Always_Free_Resources.htm#compute__idleinstances>) — Instances will be reclaimed when deemed idle
- [www.oracle.com](<https://www.oracle.com/cloud/free/>) — Detailed provider free-tier list.

##### [IBM Cloud](<https://www.ibm.com/cloud/free/>)
- [Cloudant database](<https://www.ibm.com/products/cloudant>) — 1 GB of data storage on the Lite plan.
- [Db2 database](<https://www.ibm.com/products/db2>) — 200 MB of data storage.
- [API Connect](<https://www.ibm.com/products/api-connect>) — 50,000 API calls per month.
- [Availability Monitoring](<https://cloud.ibm.com/catalog/services/availability-monitoring>) — The upstream 3-million-data-point figure is not confirmed in current IBM documentation; check the catalog for the active plan and quota.
- [Log Analysis](<https://cloud.ibm.com/catalog/services/cloud-logs>) — Current IBM Cloud Logs is metered by ingestion tier; the upstream 500 MB/day allowance is not confirmed in current IBM documentation, so verify the active catalog plan before use.

##### [Cloudflare](<https://www.cloudflare.com/>)
- [Application Services](<https://www.cloudflare.com/plans/>) — Free DNS for an unlimited number of domains, DDoS Protection, CDN along with free SSL, Firewall rules and page rules, WAF, Bot Mitigation, Free Unmetered Rate Limiting - 1 rule per domain, Analytics, Email forwarding
- [Zero Trust & SASE](<https://www.cloudflare.com/plans/zero-trust-services/>) — Up to 50 Users, 24 hours of activity logging, three network locations
- [Cloudflare Tunnel](<https://www.cloudflare.com/products/tunnel/>) — You can expose locally running HTTP port over a tunnel to a random subdomain on trycloudflare.com use Quick Tunnels, No account required. More features (TCP tunnel, Load balancing, VPN) in Zero Trust Free Plan.
- [Quick Tunnels](<https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/do-more-with-tunnels/trycloudflare/>) — Temporary trycloudflare.com tunnels for development and testing; no account required.
- [Zero Trust](<https://www.cloudflare.com/products/zero-trust/>) — Cloudflare access, gateway, and network security platform; free-plan limits vary by product.
- [Workers](<https://developers.cloudflare.com/workers/>) — Deploy serverless code for free on Cloudflare's global network-100k daily requests.
- [Workers KV](<https://developers.cloudflare.com/kv>) — 100k read requests per day, 1000 write requests per day, 1000 delete requests per day, 1000 list requests per day, 1 GB stored data
- [R2](<https://developers.cloudflare.com/r2/>) — 10 GB per month, 1 million Class A operations per month, 10 million Class B operations per month
- [D1](<https://developers.cloudflare.com/d1/>) — 5 million rows read per day, 100,000 rows written per day, and 5 GB storage on the Workers Free plan.
- [Pages](<https://developers.cloudflare.com/pages/>) — Develop and deploy your web apps on Cloudflare's fast, secure global network. Five hundred monthly builds, 100 custom domains, Integrated SSL, unlimited accessible seats, unlimited preview deployments, and full-stack capability via Cloudflare Workers integration.
- [Queues](<https://developers.cloudflare.com/queues/>) — 10,000 operations per day on the Workers Free plan; the paid plan includes 1 million operations per month.
- [TURN](<https://developers.cloudflare.com/calls/turn/>) — 1TB of free (outgoing) traffic per month.

##### [Zoho](<https://www.zoho.com>)

Zoho - Started as an e-mail provider but now provides a suite of services, some of which have free plans. List of services having free plans
- [Catalyst by Zoho](<https://catalyst.zoho.com>) — PaaS/full-stack cloud platform with a generous free tier
- [free tier](<https://catalyst.zoho.com/free-tier.html>) — Zoho Catalyst free-tier details for full-stack and serverless applications.
- [Zoho Apptics](<https://www.zoho.com/apptics/>) — Unified and actionable product analytics to monitor performance, analyze user behavior and collect feedback for mobile, web, and desktop apps with generous Free Forever plan.
- [Email](<https://zoho.com/mail>) — Email Free for 5 users. 5GB/user & 25 MB attachment limit, one domain.
- [Zoho Assist](<https://www.zoho.com/assist>) — Zoho Assist's forever free plan includes one concurrent remote support license and Access to 5 unattended computer licenses for unlimited duration available for both professional and personnel use.
- [Sprints](<https://zoho.com/sprints>) — Sprints Free for 5 users,5 Projects & 500MB storage.
- [Docs](<https://zoho.com/docs>) — Free for 5 users with 1 GB upload limit & 5GB storage. Zoho Office Suite (Writer, Sheets & Show) comes bundled.
- [Projects](<https://zoho.com/projects>) — Free for 3 users, 2 projects & 10 MB attachment limit. The same plan applies to Bugtracker.
- [Bugtracker](<https://zoho.com/bugtracker>) — Zoho issue tracking for small teams; free plan includes 3 users, 2 projects, and 10 MB attachments.
- [Connect](<https://zoho.com/connect>) — Team Collaboration free for 25 users with three groups, three custom apps, 3 Boards, 3 Manuals, and 10 Integrations along with channels, events & forums.
- [Meeting](<https://zoho.com/meeting>) — Meetings with upto 3 meeting participants & 10 Webinar attendees.
- [Vault](<https://zoho.com/vault>) — Password Management is accessible for Individuals.
- [Showtime](<https://zoho.com/showtime>) — Yet another Meeting software for training for a remote session of up to 5 attendees.
- [Notebook](<https://zoho.com/notebook>) — A free alternative to Evernote.
- [Wiki](<https://zoho.com/wiki>) — Free for three users with 50 MB storage, unlimited pages, zip backups, RSS & Atom feed, access controls & customizable CSS.
- [Subscriptions](<https://zoho.com/subscriptions>) — Recurring Billing management free for 20 customers/subscriptions & 1 user with all the payment hosting done by Zoho. The last 40 subscription metrics are stored
- [Checkout](<https://zoho.com/checkout>) — Product Billing management with 3 pages & up to 50 payments.
- [Desk](<https://zoho.com/desk>) — Customer Support management with three agents, private knowledge base, and email tickets. Integrates with Assist for one remote technician & 5 unattended computers.
- [Assist](<https://zoho.com/assist>) — Zoho remote-support and unattended-access service.
- [Cliq](<https://zoho.com/cliq>) — Team chat software with 100 GB storage, unlimited users, 100 users per channel & SSO.
- [Campaigns](<https://zoho.com/campaigns>) — Email Marketing
- [Forms](<https://zoho.com/forms>) — Form Creator
- [Sign](<https://zoho.com/sign>) — Paperless Signatures
- [Surveys](<https://zoho.com/surveys>) — Online Surveys
- [Bookings](<https://zoho.com/bookings>) — Appointment Scheduling

[Back to top](#free-resource-catalog)

#### Cloud management solutions


| Resource and free-tier context | Resource and free-tier context |
|---|---|
| [Brainboard](<https://www.brainboard.co>) — Collaborative solution to visually build and manage cloud infrastructures from end-to-end.| [Cloud 66](<https://www.cloud66.com/>) — Free for personal projects (includes one deployment server, one static site), Cloud 66 gives you everything you need to build, deploy, and grow your applications on any cloud without the headache of the “server stuff.”.|
| [deployment.io](<https://deployment.io>) — Deployment.io helps developers automate deployments on AWS. On our free tier, a developer (single user) can deploy unlimited static sites, web services, and environments.| [Parsivex](<https://www.parsivex.com>) — Parsivex scans your AWS account for idle EC2, unattached EBS, oversized RDS, stale snapshots, NAT gateway overuse etc. Free tier provides a monthly scan for one AWS account and returns total monthly waste plus a category breakdown.|
| [Pulumi](<https://www.pulumi.com/>) — Modern infrastructure as a code platform that allows you to use familiar programming languages and tools to build, deploy, and manage cloud infrastructure.| [scalr.com](<https://scalr.com/>) — Scalr is a Terraform Automation and COllaboration (TACO) product used to better collaboration and automation on infrastructure and configurations managed by Terraform. Use up to 50 runs/month for free.|

[Back to top](#free-resource-catalog)

#### CDN and Protection


| Resource and free-tier context | Resource and free-tier context |
|---|---|
| [bootstrapcdn.com](<https://www.bootstrapcdn.com/>) — CDN for bootstrap, bootswatch and fontawesome.io.| [CacheFly](<https://portal.cachefly.com/signup/free2023>) — Up to 5 TB per month of Free CDN traffic, 19 Core PoPs , 1 Domain and Universal SSL.|
| [cdnjs.com](<https://cdnjs.com/>) — Simple. cdnjs is a free and open-source CDN service trusted by over 11% of all websites, powered by Cloudflare.| [developers.google.com](<https://developers.google.com/speed/libraries/>) — The Google Hosted Libraries is a content distribution network for the most popular Open Source JavaScript libraries.|
| [Gcore](<https://gcorelabs.com/>) — Global CDN with 1 TB and 1 million free requests per month, plus free DNS hosting.| [jsdelivr.com](<https://www.jsdelivr.com/>) — A free, fast, and reliable open-source CDN.|
| [Microsoft Ajax](<https://docs.microsoft.com/en-us/aspnet/ajax/cdn/overview>) — The Microsoft Ajax CDN hosts popular third-party JavaScript libraries such as jQuery and enables you to easily add them to your Web application.| [Namecheap Supersonic](<https://www.namecheap.com/supersonic-cdn/#free-plan>) — Free DDoS protection.|
| [ovh.ie](<https://www.ovh.ie/ssl-gateway/>) — Free DDoS protection and SSL certificate.| [PromoProxy](<https://promoproxy.net/>) — Free cloud Secure Web Gateway. Free plan includes up to 5 users and 1 GB per day.|
| [raw.githack.com](<https://raw.githack.com/>) — A modern replacement of **rawgit.com** which simply hosts file using Cloudflare.| [Skypack](<https://www.skypack.dev/>) — The 100% Native ES Module JavaScript CDN. Free for 1 million requests per domain per month.|
| [statically.io](<https://statically.io/>) — CDN for Git repos (GitHub, GitLab, Bitbucket), WordPress-related assets, and images.| [Stellate](<https://stellate.co/>) — Stellate is a blazing-fast, reliable CDN for your GraphQL API and free for two services.|
| [toranproxy.com](<https://toranproxy.com/>) — Proxy for Packagist and GitHub. Free for personal use, one developer, no support.| [UNPKG](<https://unpkg.com/>) — CDN for everything on npm.|
| [weserv](<https://images.weserv.nl/>) — An image cache & resize service.| [bootstrapcdn.com](<http://www.bootstrapcdn.com/>) — CDN for bootstrap, bootswatch and fontawesome.io.|
| [jsdelivr.com](<http://www.jsdelivr.com/>) — CDN of OSS (JS, CSS, fonts) for developers and webmasters, accepts PRs to add more.| [asp.net](<https://www.asp.net/ajax/cdn/>) — The Microsoft Ajax CDN hosts popular third party JavaScript libraries such as jQuery and enables you to easily add them to your Web application.|
| [rawgit.com](<https://rawgit.com/>) — Free limited traffic, serves raw files directly from GitHub with proper Content-Type headers.| [incapsula.com](<https://www.incapsula.com/>) — Free CDN and DDoS protection.|
| [fastly.com](<https://www.fastly.com/>) — Free CDN, all features until USD 50/month is reached, enough for most, then pay or suspended.| [athenalayer.com](<http://athenalayer.com/>) — Free DDoS protection with unlimited websites.|
| [section.io](<https://www.section.io/>) — A simple way to spin up and manage a complete Varnish Cache solution. Supposedly free forever for one site.| [netdepot.com](<https://netdepot.com/>) — Cloud infrastructure and hosting services.|
| [speeder.io](<https://speeder.io/>) — Uses KeyCDN. Automatic image optimization and free CDN boost.| [jare.io](<http://www.jare.io>) — You should login using your GitHub account and register your domain.|
| [Cloudflare CDN](<https://www.cloudflare.com/plans/free/>) — Free CDN and foundational performance features for websites.|  |

[Back to top](#free-resource-catalog)

#### PaaS


| Resource and free-tier context | Resource and free-tier context |
|---|---|
| [ampt.dev](<https://getampt.com/>) — Ampt lets teams build, deploy, and scale JavaScript apps on AWS without complicated configs or managing infrastructure. Free Preview plan includes 500 invocations hourly, 2,500 invocations daily and 50,000 invocations monthly.| [anvil.works](<https://anvil.works>) — Web app development with nothing but Python. Free tier with unlimited apps and 30-second timeouts.|
| [Apply.build](<https://apply.build/>) — Build and deploy your GitHub app for free with 0.5 vCPUs / 512 MiB RAM, European servers, automatic firewall, real-time performance metrics.| [appwrite](<https://appwrite.io>) — Unlimited projects with no project pausing (supports websockets) and authentication service. 1 Database, 3 Buckets, 5 Functions per project in free tier.|
| [Clever Cloud](<https://clever.cloud>) — European PaaS with automated deployments, autoscaling, managed databases, and Git-based workflows. Includes €20 free credits at signup, a limited DEV plan with free MySQL and PostgreSQL databases, and free allowances for services like Heptapod and FS Buckets.| [Choreo](<https://wso2.com/choreo/>) — AI-native internal developer platform as a service. The free tier includes up to 5 components and $100 credits per month.|
| [codenameone.com](<https://www.codenameone.com/>) — Open source, cross-platform, mobile app development toolchain for Java/Kotlin developers. Free for commercial use with an unlimited number of projects.| [Cohesivity](<https://cohesivity.ai>) — Headless backend and services, purpose built for AI agents. Includes hosting, databases, storage, LLMs, and third-party APIs.|
| [Daestro](<https://daestro.com>) — Run compute jobs across Cloud Providers & On-Prem. The free tier includes up to 10 concurrent job runs, 2 compute spawns, self-hosted compute, 1 cloud provider, 1 container registry and 1 cron job.| [Deno Deploy](<https://deno.com/deploy>) — Distributed system that runs JavaScript, TypeScript, and WebAssembly at the edge worldwide. The free tier includes 100,000 requests per day and 100 GiB data transfers per month.|
| [domcloud.co](<https://domcloud.co>) — Linux hosting service that provides CI/CD with GitHub, SSH, and MariaDB/Postgres database. The free version has 1 GB storage and 1 GB network/month limit and is limited to a free domain.| [encore.dev](<https://encore.dev/>) — Backend framework using static analysis to provide automatic infrastructure, boilerplate-free code, and more. Includes free cloud hosting for hobby projects.|
| [flightcontrol.dev](<https://flightcontrol.dev/>) — Deploy web services, databases, and more on your own AWS account with a Git push style workflow. Free tier for users with 1 developer on personal GitHub repos.| [gigalixir.com](<https://gigalixir.com/>) — Gigalixir provides one free instance that never sleeps and a free-tier PostgreSQL database limited to 2 connections, 10, 000 rows and no backups for Elixir/Phoenix apps.|
| [Northflank](<https://northflank.com>) — Build and deploy microservices, jobs, and managed databases with a powerful UI, API & CLI. The free tier includes two services, two cron jobs and 1 database.| [Ownkube](<https://ownkube.io>) — Free single-node k3s in your own AWS account, run apps, databases, workers with a git push. Use your AWS credits at peak efficiency.|
| [pipedream.com](<https://pipedream.com>) — An integration platform built for developers. Workflows are code you can run for free.| [for free](<https://docs.pipedream.com/pricing/>) — pipedream.com - An integration platform built for developers. Workflows are code you can run for free.|
| [pythonanywhere.com](<https://www.pythonanywhere.com/>) — Cloud Python app hosting. Beginner account is free, 1 Python web application at your-username.pythonanywhere.com domain, 512 MB private file storage, one MySQL database.| [Runsite](<https://runsite.app/>) — European PaaS with automated deployments from GitHub for web services or static sites (1 web 0.1 vCPU/256 MB free), managed PostgreSQL and Valkey(Redis) (30 days for free), Transactional Email (3,000 emails/month free), S3 compatible storage (5 GB/free), all what you need for…|
| [Val Town](<https://www.val.town>) — Collaborative TypeScript/JavaScript serverless platform for scripts, HTTP endpoints, and cron jobs. Free plan includes unlimited public vals, 15-minute cron intervals, 1-minute wall-clock time per run, and 3-day log retention.| [WunderGraph](<https://cloud.wundergraph.com>) — An open-source platform that allows you to quickly build, ship and manage modern APIs. Up to 3 projects, 1GB egress, 300 minutes of build time per month on the free plan.|
| [free plan](<https://wundergraph.com/pricing>) — WunderGraph free plan: up to 3 projects, 1 GB egress, and 300 build minutes per month.| [YepCode](<https://yepcode.io>) — All-in-one platform to connect APIs and services in a serverless environment. The free tier includes 1.000 yeps.|
| [1.000 yeps](<https://yepcode.io/pricing/>) — YepCode free-tier allocation: 1,000 yeps.| [cloud.google.com](<https://cloud.google.com/appengine/>) — Google App Engine gives 28 instance hours/day free, 1 GB NoSQL database and more.|
| | [appharbor.com](<https://appharbor.com/>) — A .Net PaaS that provides 1 free worker.|
| [heroku.com](<https://www.heroku.com/>) — Host your apps in the cloud, free for single process apps.| [firebase.com](<https://www.firebase.com/>) — Build real-time apps, free plan has 100 max. connections, 10 GB data transfer, 1 GB data storage, 1 GB hosting storage and 10 GB hosting transfer.|
| | [outsystems.com](<http://www.outsystems.com/>) — Enterprise web development PaaS for on-premise or cloud, free "personal environment" offering allows for unlimited code and up to 1 GB database.|
| | [scn.sap.com](<https://scn.sap.com/docs/DOC-56411>) — The in-memory Platform-as-a-Service offering from SAP. Free developer accounts come with 1 GB structured, 1 GB unstructured, 1 GB of Git data and allow you to run HTML5, Java and HANA XS apps.|
| [configure.it](<http://www.configure.it/>) — Mobile app development platform, free for 2 projects, limited features but no resource limits.| [elastx.com](<http://elastx.com/start/easypaas/>) — Free tier with up to 4 cloudlets, must be renewed every year.|
| | [cloudandheat.com](<https://www.cloudandheat.com/>) — 128 MB of RAM for free, includes support for custom domains for free.|
| [zeit.co/now](<https://zeit.co/now>) — Managed platform for Node.js deployments, featuring dynamic real-time scaling. Includes 20 free deploys/month limited to 1 GB storage and 1 GB bandwidth for OSS projects (source files are exposed on a public URL).| [sandstorm.io](<https://sandstorm.io/>) — Sandstorm is an open source operating system for personal and private clouds. Free plan offers 200 MB storage and 5 grains free.|
| [gearhost.com](<https://www.gearhost.com/pricing>) — Platform for .NET and PHP apps. 256 MB of RAM for free on a shared server with limited resources.|  |

[Back to top](#free-resource-catalog)

#### BaaS


| Resource and free-tier context | Resource and free-tier context |
|---|---|
| [Activepieces](<https://www.activepieces.com>) — Build automation flows to connect several apps together in your app's backend. Free up to 5,000 tasks per month.| [back4app.com](<https://www.back4app.com>) — Back4App is an easy-to-use, flexible and scalable backend based on Parse Platform.|
| [backendless.com](<https://backendless.com/>) — Mobile and Web Baas, with 1 GB file storage free, push notifications of 50,000/month, and 1000 data objects in the table.| [connectycube.com](<https://connectycube.com>) — Unlimited chat messages, p2p voice & video calls, files attachments and push notifications. Free for apps up to 1000 users.|
| [convex.dev](<https://convex.dev/>) — Reactive backend as a service, hosting your data (documents with relationships & serializable ACID transactions), serverless functions, and WebSockets to stream updates to various clients. Free for small projects - up to 1M records, 5M monthly function calls.| [ETLR](<https://etlr.io>) — Define, version, and deploy automation scripts using YAML. Free tier includes 100 credits/month.|
| [Flutter Flow](<https://flutterflow.io>) — FlutterFlow is a browser-based drag-and-drop interface to build mobile app using flutter.| [getstream.io](<https://getstream.io/>) — Build scalable In-App Chat, Messaging, Video and audio, and Feeds in a few hours instead of weeks.|
| [IFTTT](<https://ifttt.com>) — Automate your favorite apps and devices. Free 2 Applets.| [Integrately](<https://integrately.com>) — Automate tedious tasks with a single click. Free 100 Tasks, 15 Minute.|
| [LeanCloud](<https://leancloud.app/>) — Mobile backend. 1GB of data storage, 256MB instance, 3K API requests/day, and 10K pushes/day are free.| [nhost.io](<https://nhost.io>) — Serverless backend for web and mobile apps. The free plan includes PostgreSQL, GraphQL (Hasura), Authentication, Storage, and Serverless Functions.|
| [paraio.com](<https://paraio.com>) — Backend service API with flexible authentication, full-text search and caching. Free for one app, 1GB of app data.| [pusher.com](<https://pusher.com/beams>) — Free, unlimited push notifications for 2000 monthly active users.|
| [simperium.com](<https://simperium.com/>) — Move data everywhere instantly and automatically, multi-platform, unlimited sending and storage of structured data, max.| [snill.ai](<https://snill.ai>) — AI no-code platform that turns a plain-language description into a complete business system with a relational database, dashboards, workflows, REST API and webhooks. Free plan for solo operators includes 2 apps, 1,000 records and 10 AI requests/day.|
| [Supabase](<https://supabase.com>) — The Open Source Firebase Alternative to build backends. Free Plan offers Authentication, Realtime Database & Object Storage.| [tyk.io](<https://tyk.io/>) — API management with authentication, quotas, monitoring and analytics. Free cloud offering.|
| [zapier.com](<https://zapier.com/>) — Connect the apps you use to automate tasks. Five zaps every 15 minutes and 100 tasks/month.| [apigee.com](<http://docs.apigee.com/api-baas>) — Unlimited trial includes NoSQL data store with 25 GB of storage, user and permission management, geolocation, 10 million push notifications/month, remote configuration, beta and A/B split testing, APM, fully API driven.|
| [appacitive.com](<http://appacitive.com/>) — Mobile backend, free for the first 3 months with 100,000 API calls, push notifications.| [bip.io](<https://bip.io/>) — A web-automation platform for easily connecting web services. Fully open GPLv3 to power the backend of your Open Source project.|
| [blockspring.com](<https://www.blockspring.com/>) — Cloud functions. Free for 5 million runs/month.| |
| [Progress Kinvey](<https://www.progress.com/kinvey>) — Backend-as-a-Service capabilities for mobile and enterprise applications.| [layer.com](<https://layer.com/>) — The full-stack building block for communications.|
| [quickblox.com](<http://quickblox.com/>) — A communication backend for instant messaging, video and voice calling and push notifications.| [pushbots.com](<https://pushbots.com/>) — Push notification service. Free for up to 1.5 million pushes/month.|
| [iron.io](<http://www.iron.io/>) — Async task processing (like AWS Lambda) with free tier and 1 month free trial.| [stackhut.com](<http://stackhut.com/>) — Async task processing (like AWS Lambda). 10 free private services and unlimited free public services.|
| [stackstorm.com](<https://stackstorm.com/>) — Event-driven automation for apps, services and workflows, free without flow, access control, LDAP,...| |

[Back to top](#free-resource-catalog)

#### Low-code Platform


| Resource and free-tier context | Resource and free-tier context |
|---|---|
| [appsmith](<https://www.appsmith.com/>) — Low code project to build admin panels, internal tools, and dashboards.| [BudiBase](<https://budibase.com/>) — Budibase is an open-source low-code platform for creating internal apps in minutes.|
| [Clappia](<https://www.clappia.com>) — A low-code platform designed for building business process applications with customizable mobile and web apps.| [lil'bots](<https://www.lilbots.io/>) — write and run scripts online utilizing free built-in APIs like OpenAI, Anthropic, Firecrawl and others. Free-tier includes full access to APIs, AI coding assistant and 10,000 execution credits / month.|
| [manubes](<https://www.manubes.com>) — Powerful no-code cloud platform with a focus on industrial production management. Free for one user with 1 million workflow activities a month (also available in german).| [also available in german](<https://www.manubes.de>) — manubes - Powerful no-code cloud platform with a focus on industrial production management. Free for one user with 1 million workflow activities a month (also available in german). |
| [Mendix](<https://www.mendix.com/>) — Rapid Application Development for Enterprises, unlimited accessible sandbox environments supporting total users, 0.5 GB storage and 1 GB RAM per app.| [outsystems.com](<https://www.outsystems.com/>) — Enterprise web development PaaS for on-premise or cloud, free "personal environment" offering allows for unlimited code and up to 1 GB database.|
| [ReTool](<https://retool.com/>) — Low-code platform for building internal applications. The free tier allows up to five users per month, unlimited apps and API connections.| [ToolJet](<https://www.tooljet.com/>) — Extensible low-code framework for building business applications.|
| [UI Bakery](<https://uibakery.io>) — Low-code platform that enables faster building of custom web applications. Free for up to 5 users.|  |

[Back to top](#free-resource-catalog)

#### Web Hosting


| Resource and free-tier context | Resource and free-tier context |
|---|---|
| [Alwaysdata](<https://www.alwaysdata.com/>) — 1 GB free web hosting with support for MySQL, PostgreSQL, RabbitMQ, .NET, Deno, Elixir, Go, Java, Lua, Node.js, PHP, Python, Ruby, Rust.| [Awardspace.com](<https://www.awardspace.com>) — Free web hosting + a free short domain, PHP, MySQL, App Installer, Email Sending & No Ads.|
| [boomurl](<https://boomurl.com>) — Publish static sites (HTML/Markdown/images/PDF or a whole folder) to an instant HTTPS URL with no account; free tier shows a small banner.| [Bubble](<https://bubble.io/>) — Visual programming to build web and mobile apps without code, free with Bubble branding.|
| [dAppling Network](<https://www.dappling.network/>) — Decentralized web hosting platform for Web3 frontends focusing on increasing uptime and security and providing an additional access point for users.| [DigitalOcean](<https://www.digitalocean.com/pricing>) — Build and deploy three static sites for free on the App Platform Starter tier.|
| [FreeFlarum](<https://freeflarum.com/>) — Community-powered free Flarum hosting for up to 250 users (donate to remove the watermark from the footer).| [Harvis.dev](<https://harvis.dev>) — Static site hosting via CLI (`npx harvis`) with no config files or build step. Includes free subdomain, free form submissions collections, GitHub Actions integration, CloudFlare CDN, free SSL.|
| [Kinsta Static Site Hosting](<https://kinsta.com/static-site-hosting/>) — Deploy up to 100 static sites for free, custom domains with SSL, 100 GB monthly bandwidth, 260+ Cloudflare CDN locations.| [Koyeb](<https://www.koyeb.com/>) — Serverless platform with a free Hobby plan providing 550 free compute hours/month (512 MB RAM Free tier), 1 free PostgreSQL database, and custom domain SSL.|
| [MDB GO](<https://mdbgo.com/>) — Free hosting for one project with two weeks Container TTL, 500 MB RAM per project, SFTP - 1G disk space.| [Mirin](<https://mirin.com>) — Website platform for developer-built React, Vue, or Svelte component sites with visual editing, forms, analytics, and global CDN hosting. Free tier includes 1 site with unlimited pages and submissions.|
| [Neocities](<https://neocities.org>) — Static, 1 GB free storage with 200 GB Bandwidth.| [Netlify](<https://www.netlify.com/>) — Builds, deploys and hosts static site/app free for 300 credits/month (equals 30 GB bandwidth).|
| [PandaStack](<https://www.pandastack.io/>) — An eco-system for developers includes web hosting in different formats (static web hosting, container based web hosting, wordpress and so many other m. Free tier: One free web hosting (static or containered) and one free database with 100GB Bandwidth and 300 Build mins/mon…| [pantheon.io](<https://pantheon.io/>) — Drupal and WordPress hosting, automated DevOps, and scalable infrastructure. Free for developers and agencies.|
| [Qoddi](<https://qoddi.com>) — PaaS service similar to Heroku with a developer-centric approach and all-inclusive features. Free tier for static assets, staging, and developer apps.| [readthedocs.org](<https://readthedocs.org/>) — Free documentation hosting with versioning, PDF generation, and more.|
| [render.com](<https://render.com>) — Unified cloud to build and run apps and sites with free SSL, a global CDN, private networks, auto-deploys from Git, and completely free plans for web services, databases, and static web pages.| [Revdoku](<https://revdoku.com/>) — Publish files, reports, custom microsites right from ChatGPT, Claude, Codex and other AI agents as public or password-protected websites. Free tier: 2GB storage, 2 live sites/apps, 1 database (25 MB), 3 AI connections, 1k files/bucket (100 MB/file), basic analytics.|
| [ShipStatic](<https://shipstatic.com>) — Static hosting your AI agent can drive itself: `npx @shipstatic/ship ./dist` and the site is live, with no install, no signup, no repo, no build. Free accounts keep sites permanently with automatic HTTPS, global edge delivery and unmetered bandwidth; custom domains are paid.| [SourceForge](<https://sourceforge.net/>) — Find, Create, and Publish Open Source software for free.|
| [surge.sh](<https://surge.sh/>) — Static web publishing for Front-End developers. Unlimited sites with custom domain support.| [tilda.cc](<https://tilda.cc/>) — One site, 50 pages, 50 MB storage, only the main pre-defined blocks among 170+ available, no fonts, no favicon, and no custom domain.|
| [Vercel](<https://vercel.com/>) — Build, deploy, and host web apps with free SSL, global CDN, and unique Preview URLs each time you `git push`.| [Versoly](<https://versoly.com/>) — SaaS-focused website builder - unlimited websites, 70+ blocks, five templates, custom CSS, favicon, SEO and forms.|
| [Stormkit](<https://www.stormkit.io>) — Self-hostable Vercel alternative for building, hosting, and deploying modern frontend and JavaScript applications. Free plan includes 1 app, 50 GB bandwidth, unlimited custom domains, and free SSL.| [closeheat.com](<https://closeheat.com/>) — Development Environment in the Cloud for Static Websites with Free Hosting and GitHub integration. 1 free website with custom domain support.|
| [serverpilot.io](<https://serverpilot.io/>) — serverpilot.io ServerPilot, and we'll install everything you need to host PHP apps like WordPress. Unlimited servers, 1 SSH/SFTP user.| [devport.co](<http://devport.co/>) — Turn GitHub projects, apps and websites into a personal developer portfolio.|
| [acquia.com](<https://www.acquia.com/>) — Hosting for Drupal sites. Free tier for developers.| [bitballoon.com](<https://www.bitballoon.com/>) — Hosting for static sites and apps. Free on a subdomain.|

[Back to top](#free-resource-catalog)

#### DNS


| Resource and free-tier context | Resource and free-tier context |
|---|---|
| [1.1.1.1](<https://developers.cloudflare.com/1.1.1.1/>) — Free public DNS Resolver, which is fast and secure (encrypt your DNS query), provided by Cloudflare.| [to block adult & malware content](<https://developers.cloudflare.com/1.1.1.1/1.1.1.1-for-families>) — 1.1.1.1 - Free public DNS Resolver, which is fast and secure (encrypt your DNS query), provided by Cloudflare.|
| [via API](<https://developers.cloudflare.com/1.1.1.1/encrypted-dns/dns-over-https/make-api-requests>) — 1.1.1.1 - Free public DNS Resolver, which is fast and secure (encrypt your DNS query), provided by Cloudflare.| [1984.is](<https://www.1984.is/product/freedns/>) — Free DNS service with API and lots of other free DNS features included.|
| [cloudns.net](<https://www.cloudns.net/>) — Free DNS hosting up to 1 domain with 50 records.| [deSEC](<https://desec.io>) — Free DNS hosting with API support, designed with security in mind.|
| [SSE](<https://www.securesystems.de/>) — deSEC - Free DNS hosting with API support, designed with security in mind.| [dns.he.net](<https://dns.he.net/>) — Free DNS hosting service with Dynamic DNS Support.|
| [dnspod.com](<https://www.dnspod.com/>) — Free DNS hosting.| [duckdns.org](<https://www.duckdns.org/>) — Free DDNS with up to 5 domains on the free tier.|
| [Dynv6.com](<https://dynv6.com/>) — Free DDNS service with API support and management of a lot of dns record types (like CNAME, MX, SPF, SRV, TXT and others).| [API support](<https://dynv6.com/docs/apis>) — Dynv6 DNS API and record-management documentation.|
| [freedns.afraid.org](<https://freedns.afraid.org/>) — Free DNS hosting. Also, provide free subdomains based on numerous public user contributed domains.| [contributed domains](<https://freedns.afraid.org/domain/registry/>) — freedns.afraid.org - Free DNS hosting. Also, provide free subdomains based on numerous public user contributed domains.|
| [Glauca](<https://docs.glauca.digital/hexdns/>) — Free DNS hosting for up to 3 domains and DNSSEC support.| [Hetzner](<https://www.hetzner.com/dns-console>) — Free DNS hosting from Hetzner with API support.|
| [huaweicloud.com](<https://www.huaweicloud.com/intl/en-us/product/dns.html>) — Free DNS hosting by Huawei.| [LocalCert](<https://localcert.net>) — Free `.localcert.net` subdomains compatible with public CAs for use with-in private networks.|
| [luadns.com](<https://www.luadns.com/>) — Free DNS hosting, three domains, all features with reasonable limits.| [namecheap.com](<https://www.namecheap.com/domains/freedns/>) — Free DNS. No limit on the number of domains.|
| [nextdns.io](<https://nextdns.io>) — DNS-based firewall, 300K free queries monthly.| [noip.at](<https://noip.at/>) — Free DDNS service without registration, tracking, logging or advertising. No limit to domains.|
| [noip](<https://www.noip.com/>) — a dynamic DNS service that allows up to 3 hostnames free with confirmation every 30 days.| [sslip.io](<https://sslip.io/>) — Free DNS service that when queried with a hostname with an embedded IP address returns that IP address.|
| [Cloudflare DNS](<https://developers.cloudflare.com/dns/>) — Free authoritative DNS on Cloudflare plans.| [zoneedit.com](<https://www.zoneedit.com/free-dns/>) — Free DNS hosting with Dynamic DNS Support.|
| [Zonomi](<https://zonomi.com/>) — Free DNS hosting service with instant DNS propagation. Free plan: 1 DNS zone (domain name) with up to 10 DNS records.| [luadns.com](<http://www.luadns.com/>) — Free DNS hosting, 3 domains, all features with reasonable limits.|
| | [Selectel DNS](<https://selectel.ru/services/additional/dns/>) — DNS hosting with globally distributed authoritative servers.|
| [ns1.com](<https://ns1.com/>) — Data Driven DNS, automatic traffic management, 1 million free queries.| [zonewatcher.com](<https://zonewatcher.com>) — Automatic backups and DNS change monitoring. 1 domain free.|

[Back to top](#free-resource-catalog)

#### Domain


| Resource and free-tier context | Resource and free-tier context |
|---|---|
| [DigitalPlat](<https://domain.digitalplat.org>) — Free subdomains.| [DNSHE](<https://www.dnshe.com/>) — Free subdomain registration across multiple domain suffixes, with custom nameserver support.|
| [isroot.in](<https://isroot.in>) — Free isroot.in subdomains.| [pp.ua](<https://nic.ua/>) — Free pp.ua subdomains.|

[Back to top](#free-resource-catalog)

#### IaaS


| Resource and free-tier context | Resource and free-tier context |
|---|---|
| [4EVERLAND](<https://www.4everland.org/>) — Compatible with AWS S3 - APIs, interface operations, CLI, and other upload methods, upload and store files from the IPFS and Arweave networks in a safe, convenient, and efficient manner.| [backblaze.com](<https://www.backblaze.com/b2/>) — Backblaze B2 cloud storage. Free 10 GB (Amazon S3-like) object storage for unlimited time.|
| [filebase.com](<https://filebase.com/>) — S3 Compatible Object Storage Powered by Blockchain. 5 GB free storage for an unlimited duration.| [Modal](<https://modal.com>) — AI-driven IaaS with generous compute, storage; offers $30 (might be limited to $5 on certain accounts) of free monthly credits.|
| [exoscale.ch](<https://www.exoscale.ch/>) — Free resources for Open Source.| [developer.rackspace.com](<https://developer.rackspace.com/>) — Rackspace Cloud gives USD 50/month for 12 months.|
| [cloud.google.com/compute](<https://cloud.google.com/compute/>) — Google Compute Engine gives USD 300 over 60 days.| [IBM Cloud Free Tier](<https://www.ibm.com/cloud/free>) — Free Lite services and trial credits for eligible accounts.|
| [backblaze.com](<https://backblaze.com/b2/>) — Backblaze B2 cloud storage. Free 10 GB (Amazon S3-like) object storage for unlimited time.| [OpenStack](<https://www.openstack.org/>) — Open-source cloud infrastructure platform and community resources.|
| [Oracle Cloud Free Tier](<https://www.oracle.com/cloud/free/>) — Always Free compute resources and trial credits for eligible new accounts.|  |

[Back to top](#free-resource-catalog)

#### Managed Data Services


| Resource and free-tier context | Resource and free-tier context |
|---|---|
| [8base.com](<https://www.8base.com/>) — 8base is a full-stack low-code development platform built for JavaScript developers built on top of MySQL and GraphQL and serverless backend-as-a-serv. Free tier: It allows you to start building web applications quickly using a UI app builder and scale quickly, The Free ti…| [airtable.com](<https://airtable.com/>) — Looks like a spreadsheet, but it's a relational database unlimited bases, 1,200 rows/base, and 1,000 API requests/month.|
| [Aiven](<https://aiven.io/>) — Aiven offers free PostgreSQL, MySQL and Valkey (Redis compatible) plans on its open-source data platform. Single node, 1 CPU, 1GB RAM, and for PostgreSQL and MySQL, 1GB storage.| [BackupDrill](<https://backupdrill.com>) — Backs up Supabase projects to your own S3/R2/B2 bucket, then runs scheduled restore drills to prove backups restore. Provides a free plan with weekly backups for one project and one restore drill on your first backup.|
| [CockroachDB Cloud](<https://www.cockroachlabs.com/pricing/>) — Free tier offers 50 million RUs and 10 GiB of storage (same as 15$ worth) free per month.| [What's the Request Units](<https://www.cockroachlabs.com/docs/cockroachcloud/metrics-request-units.html>) — CockroachDB request-unit metrics documentation.|
| [codehooks.io](<https://codehooks.io/>) — Easy to use JavaScript serverless API/backend and NoSQL database service with functions, Mongdb-ish queries, key/value lookups, a job system, realtime messages, worker queues, a powerful CLI and a web-based data manager. Free plan has 5GB storage and 60/API calls per minute.| [Couchbase Capella](<https://www.couchbase.com/products/capella/>) — deploy a forever free tier fully managed database cluster with 1 node and 8GB storage, built for developers to create the next generation of applications across IoT to AI.|
| [CrateDB](<https://crate.io/>) — Distributed Open Source SQL database for real-time analytics. Free Tier CRFREE: One-node with 2 CPUs, 2 GiB of memory, 8 GiB of storage.| [Free Tier CRFREE](<https://crate.io/lp-crfree>) — CrateDB CRFREE tier: one node with 2 CPUs, 2 GiB RAM, and 8 GiB storage.|
| [filess.io](<https://filess.io>) — filess.io is a platform where you can create two databases with up to 10 MB per database of the following DBMS for free: MySQL, MariaDB, MongoDB, and PostgreSQL.| [InfluxDB](<https://www.influxdata.com/>) — Timeseries database, free up to 3MB/5 minutes writes, 30MB/5 minutes reads and 10,000 cardinalities series.|
| [Layerbase](<https://layerbase.com/>) — 2 free managed databases, pick from: Postgres, MariaDB, Redis, Valkey, DuckDB, SQLite, libSQL, and TypeDB. Branch 7 of 8 free engines, 1 branch per database - 10 GB/day, 50 GB/week, 150 GB/month throughput limits on free.| [MemCachier](<https://www.memcachier.com/>) — Managed Memcache service. Free for up to 25MB, 1 Proxy Server, and basic analytics.|
| [MongoDB Atlas](<https://www.mongodb.com/cloud/atlas>) — free tier gives 512 MB.| [Neo4j Aura](<https://neo4j.com/cloud/aura/>) — Managed native Graph DBMS / analytics platform with a Cypher query language and a REST API.|
| [Neon](<https://neon.tech/>) — Managed PostgreSQL, 0.5 GB of storage per project, 100 Projects ,10 branches per project, Unlimited Databases, always-available primary branch ( Auto suspend after 5 minutes), 20 hours of Active time per month (total) for non-primary branch compute.| [Nile](<https://www.thenile.dev/>) — A Postgres platform for B2B apps. Unlimited databases, Always available with no shutdown, 1GB of storage (total), 50 million query tokens, autoscaling, unlimited vector embeddings.|
| [Prisma Postgres](<https://prisma.io/postgres>) — Super fast hosted Postgres built on unikernels and running on bare metal, 500MB total storage, 5 databases, integrated with Prisma ORM.| [Qdrant](<https://qdrant.tech/>) — Vector Database for embedding data, single node cluster with 0.5 vCPU, 1GB RAM, and 4GB disk.|
| [restdb.io](<https://restdb.io/>) — a fast and straightforward NoSQL cloud database service. The free plan allows 3 users, 2500 records, and 1 API request per second.| [SeaTable](<https://seatable.io/>) — Flexible, Spreadsheet-like Database built by the Seafile team. unlimited tables, 2,000 lines, 1-month versioning, up to 25 team members.|
| [skyvia.com](<https://skyvia.com/>) — Cloud Data Platform offers a free tier and all plans are completely free while in beta.| [StackBy](<https://stackby.com/>) — One tool that combines spreadsheets' flexibility, databases' power, and built-in integrations with your favorite business apps. The free plan includes unlimited users, ten stacks, and a 2GB attachment per stack.|
| [Tinybird](<https://tinybird.co>) — A serverless managed ClickHouse with connection-less data ingest over HTTP and lets you publish SQL queries as managed HTTP APIs. There is no time limit on free-tier, 10GB storage + 1000 API requests per day.| [Turso by ChiselStrike](<https://turso.tech/>) — Turso is SQLite Developer Experience in an Edge Database. Turso provides a Free Forever starter plan, 9 GB of total storage, Up to 500 databases, Up to 3 locations, 1 billion row reads per month, and Local development support with SQLite.|
| [Upstash](<https://upstash.com/>) — Serverless Redis with free tier up to 500K monthly commands, 256MB max database size, and 20 concurrent connections.| [cloudant.com](<https://cloudant.com/>) — Hosted database from IBM, free if usage is below USD 50/month.|
| | [Redis Cloud](<https://redis.io/cloud/>) — Managed Redis with a free tier for small databases and development workloads.|
| [backand.com](<https://www.backand.com/>) — Back-end as a service for AngularJS.| [zenginehq.com](<http://www.zenginehq.com/>) — Build business workflow apps in minutes, free for single users.|
| [redsmin.com](<https://redsmin.com/>) — Online real-time monitoring and administration service for Redis, 1 Redis instance free.| |
| [elephantsql.com](<http://www.elephantsql.com/>) — PostgreSQL as a service, 20 MB free.| [graphenedb.com](<http://www.graphenedb.com/>) — Neo4j as a service, up to 1,000 nodes and 10,000 relations free.|
| [mlab.com](<https://mlab.com/>) — MongoDB as a service, 500 MB free.| [scalingo.com](<https://scalingo.com/>) — Primarily a PaaS but offers a 512 MB free tier of MySQL, PostgreSQL or MongoDB.|
| [fieldbook.com](<https://fieldbook.com/>) — Fieldbook lets anyone create a simple tracking database, as easily as a spreadsheet. Unlimited free sheets, share with unlimited users.| [Apache CouchDB](<https://couchdb.apache.org/>) — Open-source document database for development and self-hosting.|

[Back to top](#free-resource-catalog)

#### Storage and Media Processing


| Resource and free-tier context | Resource and free-tier context |
|---|---|
| [AndroidFileHost](<https://androidfilehost.com/>) — Free file-sharing platform with unlimited speed, bandwidth, file count, download count, etc. It is mainly aimed for Android dev-related files like APK build, custom ROM & modifications, etc. But seems to accept any other files as well.| [anon.li Drop](<https://anon.li/drop>) — Zero-knowledge E2EE file sharing with client-side AES-256-GCM encryption and zero server-side data access. Free uploads for files up to 5GB with max expiry up to 3 days through the website, CLI or API.|
| [borgbase.com](<https://www.borgbase.com/>) — Simple and secure offsite backup hosting for Borg Backup. 10 GB free backup space and two repositories.| [cloudinary.com](<https://cloudinary.com/>) — Image upload, powerful manipulations, storage, and delivery for sites and apps, with Ruby, Python, Java, PHP, Objective-C, and more libraries.|
| [degoo.com](<https://degoo.com/>) — AI based cloud storage with free up to 20 GB, three devices, 5 GB referral bonus (90 days account inactivity).| [dlvr.sh](<https://dlvr.sh/>) — Temporary file delivery for agents and automation. Free tier includes 10 deliveries every 24 hours with API, MCP, and CLI access.|
| [Dropshare](<https://dropsha.re>) — Zero-knowledge file sharing. Free uploads for files up to 1GB with no data collection.| [embed.ly](<https://embed.ly/>) — Provides APIs for embedding media in a webpage, responsive image scaling, and extracting elements from a webpage. Free for up to 5,000 URLs/month at 15 requests/second.|
| [Ente](<https://ente.io/>) — Ente is an end-to-end encrypted cloud for photos, videos and 2FA secrets. Can also be self-hosted along with a generous forever free-tier of 10GB.| [FileShot.io](<https://fileshot.io>) — Zero-knowledge encrypted file sharing. Free tier includes unlimited uploads with no file size restrictions.|
| [file.io](<https://www.file.io>) — 2 GB storage of files. REST API to interact with the storage.| |
| [getpantry.cloud](<https://getpantry.cloud/>) — A simple JSON data storage API perfect for personal projects, hackathons, and mobile apps!| [GoFile.io](<https://gofile.io/>) — Free file sharing and storage platform can be used via web-based UI & also API. unlimited file size, bandwidth, download count, etc. But it will be deleted when a file becomes inactive (no download for more than ten days).|
| [gumlet.com](<https://www.gumlet.com/>) — Image and video hosting, processing and streaming via CDN. Provides generous free tier of 250 GB / month for videos and 30 GB / month for images.| [hyperserve.io](<https://hyperserve.io/>) — Video backend API for developers: accept any format your users upload, transcode to MP4, and deliver globally via CDN. The free tier includes 50 videos, 1 GB per file, and 250 GB bandwidth per month.|
| [icedrive.net](<https://www.icedrive.net/>) — Simple cloud storage service. 10 GB free storage.| [image-charts.com](<https://www.image-charts.com/>) — Unlimited image chart generation with a watermark.|
| [ImageEngine](<https://imageengine.io/>) — ImageEngine is an easy to use global image CDN. Claim your free developer account here.| [here](<https://imageengine.io/developer-program/>) — ImageEngine free developer program details.|
| [imagekit.io](<https://imagekit.io>) — Image CDN with automatic optimization, real-time transformation, and storage that you can integrate with existing setup in minutes.| [ImgBB](<https://imgbb.com/>) — ImgBB is an unlimited image hosting service. 32 MB / image limit.|
| [Imgbot](<https://github.com/marketplace/imgbot>) — Imgbot is a friendly robot that optimizes your images and saves you time. It's free for open source.| [imgen](<https://www.jitbit.com/imgen/>) — On the fly image generation API (text over background, logo) for opengraph images, free, no watermark, CDN.|
| [imgix](<https://www.imgix.com/>) — Image Caching, management and CDN. Free plan includes 1000 origin images, infinite transformations and 100 GB bandwidth.| [internxt.com](<https://internxt.com>) — Internxt Drive is a zero-knowledge file storage service based on absolute privacy and uncompromising security. Sign up and get 10 GB for free, forever!|
| [kraken.io](<https://kraken.io/>) — Image optimization for website performance as a service, free plan up to 1 MB file size.| [LibreQR](<https://libreqr.com>) — Free QR code generator focused on privacy and no tracking. Free to use with no data collection.|
| [MConverter](<https://mconverter.eu/>) — Convert files in bulk. Free for 15 files per 24h, up to 100 MB each, processed in batches of eight.| [AVIF](<https://mconverter.eu/convert/to/avif/>) — MConverter AVIF conversion tool; free for 15 files per 24 hours up to 100 MB each.|
| [nitropack.io](<https://nitropack.io/>) — Accelerate your site's speed on autopilot with complete front-end optimization (caching, images and code optimization, CDN). Free for up to 5,000 pageviews/month.| [npoint.io](<https://www.npoint.io/>) — JSON store with collaborative schema editing.|
| [MantleDB](<https://mantledb.sh>) — Anonymous JSON storage for scripts and tiny apps. Free tier includes 1 bucket (1MB limit) with a 72h inactivity scavenger policy.| [otixo.com](<https://www.otixo.com/>) — Encrypt, share, copy, and move all your cloud storage files from one place. The basic plan provides unlimited file transfer with 250 MB max.|
| [packagecloud.io](<https://packagecloud.io/>) — Hosted Package Repositories for YUM, APT, RubyGem and PyPI. Limited free plans and open-source plans are available via request.| [pcloud.com](<https://www.pcloud.com/>) — Cloud storage service. Up to 10 GB of free storage.|
| [Pinata IPFS](<https://pinata.cloud>) — Pinata is the simplest way to upload and manage files on IPFS. 1 GB storage free, along with access to API.| [plot.ly](<https://plot.ly/>) — Graph and share your data. The free tier includes unlimited public files and ten private files.|
| [podio.com](<https://podio.com/>) — You can use Podio with a team of up to five people and try out the features of the Basic Plan, except user management.| [Proton Drive](<https://proton.me/drive>) — Ultra-secure cloud storage for files and key documents. Free plan offers 5gb of storage space.|
| [QRtracer](<https://qrtracer.io>) — Free QR code generator with built-in scan analytics, bulk generation & brand customisation, focused on reliability without any ads.| [QuickChart](<https://quickchart.io>) — Generate embeddable image charts, graphs, and QR codes.|
| [redbooth.com](<https://redbooth.com>) — P2P file syncing, free for up to 2 users.| [resmush.it](<https://resmush.it>) — reSmush.it is a FREE API that provides image optimization. reSmush.it is the most used image optimization API with more than seven billion images already treated, and it is still Free of charge.|
| [sirv.com](<https://sirv.com/>) — Smart Image CDN with on-the-fly image optimization and resizing. The free tier includes 500 MB of storage and 2 GB of bandwidth.| [SlingSite](<https://slingsite.github.io>) — Create all the optimized versions of your images and videos. For Free.|
| [sync.com](<https://www.sync.com/>) — End-to-End cloud storage service. 5 GB of free storage.| [tinypng.com](<https://tinypng.com/>) — API to compress and resize PNG and JPEG images, offers 500 compressions for free each month.|
| [transloadit.com](<https://transloadit.com/>) — Handles file uploads and encoding of video, audio, images, documents. Free for Open source, charities, and students via the GitHub Student Developer Pack.| [twicpics.com](<https://www.twicpics.com>) — Responsive images as a service. The service is free for up to 3GB of traffic/per month.|
| [uploadcare.com](<https://uploadcare.com/hub/developers/>) — Uploadcare provides the media pipeline with the ultimate toolkit based on cutting-edge algorithms. All features are available for developers absolutely for free: File Uploading API and UI, Image CDN and Origin Services, Adaptive Delivery, and Smart Compression.| [VaocherApp QR Code Generator](<https://www.vaocherapp.com/qr-code-generator>) — Easily create custom QR codes for gift cards, gift vouchers, and promotions.|
| [aerofs.com](<https://aerofs.com/>) — P2P file syncing, free for up to 30 users.| [JFrog Artifactory](<https://jfrog.com/artifactory/>) — Binary repository management with public and open-source distribution options.|
| [cloudinary.com](<http://cloudinary.com/>) — Image upload, powerful manipulations, storage and delivery for sites and apps, with libraries for Ruby, Python, Java, PHP, Objective-C and more.| [shrinkray.io](<https://shrinkray.io/>) — Free image optimization of GitHub repos.|
| [imagefly.io](<http://imagefly.io/>) — Responsive images on-demand. 100 MB/month for free.| |
| [placekitten.com](<https://placekitten.com/>) — A quick and simple service for getting pictures of kittens for use as placeholders.| |
| [embed.ly](<http://embed.ly/>) — Provides APIs for embedding media in a webpage, responsive image scaling, extracting elements from a webpage. Free for up to 5,000 URLs/month at 15 requests/second.| |
| [otixo.com](<http://otixo.com/>) — Encrypt, share, copy and move all your cloud storage files from one place. Basic plan provides unlimited files transfer with 250 MB max.| [filestack.com](<https://filestack.com/>) — File picker, transform and deliver, free for 250 files, 500 transformations and 3 GB bandwidth.|
| [image-charts.com](<https://image-charts.com/>) — Unlimited image chart generation with a watermark.|  |

[Back to top](#free-resource-catalog)

#### Tunneling, WebRTC, Web Socket Servers and Other Routers


| Resource and free-tier context | Resource and free-tier context |
|---|---|
| [cname.dev](<https://cname.dev/>) — Free and secure dynamic reverse proxy service.| [conveyor.cloud](<https://conveyor.cloud/>) — Visual Studio extension to expose IIS Express to the local network or over a tunnel to a public URL.|
| [Expose](<https://expose.dev/>) — Expose local sites via secure tunnels. The free plan includes an EU Server, Random subdomains, and Single users.| [Hamachi](<https://www.vpn.net/>) — LogMeIn Hamachi is a hosted VPN service that lets you securely extend LAN-like networks to distributed teams with a free plan that allows unlimited networks with up to 5 people.|
| [Hookdeck](<https://hookdeck.com/pricing>) — Develop, test, and monitor your webhooks from anywhere. 100K requests and 100K attempts per month with three days retention.| [localhost.run](<https://localhost.run/>) — Expose locally running servers over a tunnel to a public URL.|
| [localtonet](<https://localtonet.com/>) — Multi-protocol tunneling for HTTP, TLS, TCP, UDP, File Server (Default, SFTP, WebDAV), and Proxy Tunnel (HTTP, SOCKS5, Shadowsocks, VLESS). Free plan: 1 tunnel, 1GB/month bandwidth, 30 min timeout (excl. HTTP Tunnels).| [localtunnel](<https://theboroer.github.io/localtunnel-www/>) — Expose locally running servers over a tunnel to a public URL. Free hosted version, and open source.|
| [open source](<https://github.com/localtunnel/localtunnel>) — localtunnel - Expose locally running servers over a tunnel to a public URL. Free hosted version, and open source. | [LocalXpose](<https://localxpose.io>) — Reverse proxy that enables you to expose your localhost servers to the internet. The free plan has 15 minutes tunnel lifetime.|
| [ngrok.com](<https://ngrok.com/>) — Expose locally running servers over a tunnel to a public URL.| [Pinggy](<https://pinggy.io>) — Public URLs for localhost with a single command, no downloads required. The free plan has 60 minutes tunnel lifetime.|
| [Radmin VPN](<https://www.radmin-vpn.com/>) — Connect multiple computers together via a VPN-enabling LAN-like network. Unlimited peers.| [serveo](<https://serveo.net/>) — Expose local servers to the internet. Free subdomain, no limits.|
| [stun:global.stun.twilio.com:3478?transport=udp](<stun:global.stun.twilio.com:3478?transport=udp>) — Twilio STUN | [stun:stun.l.google.com:19302](<stun:stun.l.google.com:19302>) — Google STUN |
| [Tailscale](<https://tailscale.com/>) — Zero config VPN, using the open-source WireGuard protocol. Free plan for personal use with 100 devices and three users.| [webhookrelay.com](<https://webhookrelay.com>) — Manage, debug, fan-out, and proxy all your webhooks to public or internal (i.e. localhost) destinations.|
| | [Xirsys](<https://www.xirsys.com/pricing/>) — Unlimited STUN usage + 500 MB monthly TURN bandwidth, capped bandwidth, single geographic region.|
| [ZeroTier](<https://www.zerotier.com>) — FOSS managed virtual Ethernet as a service. Unlimited end-to-end encrypted networks of 25 clients on the free plan.| [segment.com](<https://segment.com/>) — Hub to translate and route events to other third party services. 100,000 events/month free.|
| [meetfinch.com](<https://meetfinch.com/>) — Easily create SSL encrypted URLs that tunnel to your local development machine.|  |

### Developer Experience & Delivery

[Back to top](#free-resource-catalog)

#### Source Code Repos


| Resource and free-tier context | Resource and free-tier context |
|---|---|
| [Bitbucket](<https://bitbucket.org/>) — Unlimited public and private Git repos for up to 5 users with Pipelines for CI/CD.| [Codeberg](<https://codeberg.org/>) — Unlimited public and private Git repos for free and open-source projects (with unlimited collaborators).|
| [Forgejo](<https://forgejo.org/>) — Forgejo open-source Git forge used by Codeberg.| [Codeberg Pages](<https://codeberg.page/>) — Static website hosting by Codeberg.|
| [Codeberg's CI](<https://docs.codeberg.org/ci/>) — Codeberg CI/CD documentation and service details.| [Codeberg Translate](<https://translate.codeberg.org/>) — Codeberg translation hosting.|
| [framagit.org](<https://framagit.org/>) — Framagit is the software forge of Framasoft based on the Gitlab software includes CI, Static Pages, Project pages and Issue tracking.| [GitGud](<https://gitgud.io>) — Unlimited private and public repositories. Free forever.|
| [GitHub](<https://github.com/>) — Unlimited public repositories and unlimited private repositories (with unlimited collaborators).| [gitlab.com](<https://about.gitlab.com/>) — Unlimited public and private Git repos with up to 5 collaborators.|
| [heptapod.net](<https://foss.heptapod.net/>) — Heptapod is a friendly fork of GitLab Community Edition providing support for Mercurial.| [pijul.com](<https://pijul.com/>) — Unlimited free and open source distributed version control system.|
| [projectlocker.com](<https://projectlocker.com>) — One free private project (Git and Subversion) with 50 MB of space.| [RocketGit](<https://rocketgit.com>) — Repository Hosting based on Git. Unlimited Public and private repositories.|
| [savannah.gnu.org](<https://savannah.gnu.org/>) — Serves as a collaborative software development management system for free Software projects (for GNU Projects).| [savannah.nongnu.org](<https://savannah.nongnu.org/>) — Serves as a collaborative software development management system for free Software projects (for non-GNU projects).|
| [gitea.com](<https://about.gitea.com/>) — Self-hosted Git hosting, code review, team collaboration, package registry, and CI/CD.|  |

[Back to top](#free-resource-catalog)

#### Artifact Repos


| Resource and free-tier context | Resource and free-tier context |
|---|---|
| [Gemfury](<https://gemfury.com>) — Private and public artifact repos for Maven, PyPi, NPM, Go Module, Nuget, APT, and RPM repositories. Free for public projects.| [jitpack.io](<https://jitpack.io/>) — Maven repository for JVM and Android projects on GitHub, free for public projects.|
| [paperspace](<https://www.paperspace.com/>) — Build & scale AI models, Develop, train, and deploy AI applications, free plan: public projects, 5Gb storage, basic instances.| [RepoFlow](<https://repoflow.io>) — RepoFlow Simplifies package management with support for npm, PyPI, Docker, Go, Helm, and more. Try it for free with 10GB storage, 10GB bandwidth, 100 packages, and unlimited users in the cloud, or self-hosted for personal use only.|
| [RepoForge](<https://repoforge.io>) — Private cloud-hosted repository for Python, Debian, NPM packages and Docker registries. Free plan for open source/public projects.| [repsy.io](<https://repsy.io>) — 1 GB Free private/public Maven Repository.|

[Back to top](#free-resource-catalog)

#### Code Generation


| Resource and free-tier context | Resource and free-tier context |
|---|---|
| [Appinvento](<https://appinvento.io/>) — A free no-code app builder. It provides complete access to the automatically generated backend source code and allows for unlimited APIs and routes.| [DhiWise](<https://www.dhiwise.com/>) — Converts Figma designs into dynamic Flutter and React applications.|
| [Karbon Sites](<https://www.karbonsites.space>) — An AI-powered site builder and editor that generates production-ready frontend code from text prompts, sketches, or resumes. Features include native Android (APK) export and a free tier with 5 generations per month (unlimited via custom Gemini API key).| [Metalama](<https://www.postsharp.net/metalama>) — A C#-specific tool that generates boilerplate code on the fly during compilation to keep source code clean. It is free for open-source projects; its commercial-friendly free tier includes up to three aspects.|
| [Supermaven](<https://www.supermaven.com/>) — A high-speed AI code completion plugin for VS Code, JetBrains, and Neovim. The free tier provides unlimited inline completions with a focus on ultra-low latency.| [v0.dev](<https://v0.dev/>) — Created by Vercel, v0 generates copy-and-paste friendly React code using shadcn/ui and Tailwind CSS. It uses a credit system, providing 1,200 starting credits and 200 free credits monthly.|

[Back to top](#free-resource-catalog)

#### Code Quality


| Resource and free-tier context | Resource and free-tier context |
|---|---|
| [beanstalkapp.com](<https://beanstalkapp.com/>) — A complete workflow to write, review, and deploy code), a free account for one user, and one repository with 100 MB of storage.| [codacy.com](<https://www.codacy.com/>) — Automated code reviews for PHP, Python, Ruby, Java, JavaScript, Scala, CSS, and CoffeeScript, free for unlimited public and private repositories.|
| [Codeac.io](<https://www.codeac.io/infrastructure-as-code.html?ref=free-for-dev>) — Automated Infrastructure as Code review tool for DevOps integrates with GitHub, Bitbucket, and GitLab (even self-hosted). (open-source free).| [codecov.io](<https://codecov.io/>) — Code coverage tool (SaaS), free for Open Source and one free private repo.|
| [CodeFactor](<https://www.codefactor.io>) — Automated Code Review for Git. The free version includes unlimited users, public repositories, and one private repo.| [coderabbit.ai](<https://coderabbit.ai>) — AI-powered code review tool that integrates with GitHub/GitLab. Free tier includes 200 files/hour, 3 reviews per hour, and 50 conversations/hour.|
| [CodSpeed](<https://codspeed.io>) — Automate performance tracking in your CI pipelines. Free forever for Open Source projects.| [coveralls.io](<https://coveralls.io/>) — Display test coverage reports, free for Open Source.|
| [deepscan.io](<https://deepscan.io>) — Advanced static analysis for automatically finding runtime errors in JavaScript code, free for Open Source.| [DeepSource](<https://deepsource.io/>) — DeepSource continuously analyzes source code changes, finding and fixing issues categorized under security, performance, anti-patterns, bug-risks, documentation, and style.|
| [DiffText](<https://difftext.com>) — Instantly find the differences between two blocks of code. Completely free to use.| [eversql.com](<https://www.eversql.com/>) — EverSQL - The #1 platform for database optimization.|
| [gerrithub.io](<https://review.gerrithub.io/>) — Gerrit code review for GitHub repositories for free.| [goreportcard.com](<https://goreportcard.com/>) — Code Quality for Go projects, free for Open Source.|
| [gtmetrix.com](<https://gtmetrix.com/>) — Reports and thorough recommendations to optimize websites.| [holistic.dev](<https://holistic.dev/>) — The #1 static code analyzer for Postgresql optimization.|
| [houndci.com](<https://houndci.com/>) — Comments on GitHub commits about code quality, free for Open Source.| [reviewable.io](<https://reviewable.io/>) — Code review for GitHub repositories, free for public or personal repos.|
| [scan.coverity.com](<https://scan.coverity.com/>) — Static code analysis for Java, C/C++, C# and JavaScript, free for Open Source.| [scrutinizer-ci.com](<https://scrutinizer-ci.com/>) — Continuous inspection platform, free for Open Source.|
| [semanticdiff.com](<https://app.semanticdiff.com/>) — Programming language aware diff for GitHub pull requests and commits, free for public repositories.| [shields.io](<https://shields.io>) — Quality metadata badges for open source projects.|
| [sonarcloud.io](<https://sonarcloud.io>) — Automated source code analysis for Java, JavaScript, C/C++, C#, VB.NET, PHP, Objective-C, Swift, Python, Groovy and even more languages, free for Open Source.| [CodeClimate](<https://codeclimate.com/>) — Automated code review and maintainability checks for various languages. Free for open-source projects.|
| [SonarQube](<https://www.sonarsource.com/products/sonarqube/>) — Open-source platform for continuous inspection of code quality and security vulnerabilities.| [Codecov](<https://about.codecov.io/>) — Code coverage reports and insights to ensure well-tested code. Free for open-source projects.|
| [DeepSource](<https://deepsource.com/>) — Static analysis for Python, Go, Ruby, and more with automated code fixes. Free for open-source projects.| [Snyk](<https://snyk.io>) — Finds and fixes vulnerabilities in code, dependencies, and containers. Free for open-source projects.|

[Back to top](#free-resource-catalog)

#### Code Search and Browsing


| Resource and free-tier context | Resource and free-tier context |
|---|---|
| [CodeKeep](<https://codekeep.io>) — Google Keep for Code Snippets.| [libraries.io](<https://libraries.io/>) — Search and dependency update notifications for 32 different package managers, free for open source.|
| [Namae](<https://namae.dev/>) — Search various websites like GitHub, Gitlab, Heroku, Netlify, and many more for the availability of your project name.| [tickgit.com](<https://www.tickgit.com/>) — Surfaces `TODO` comments (and other markers) to identify areas of code worth returning to for improvement.|

[Back to top](#free-resource-catalog)

#### CI and CD


| Resource and free-tier context | Resource and free-tier context |
|---|---|
| [appcircle.io](<https://appcircle.io>) — An enterprise-grade mobile DevOps platform that automates the build, test, and publish store of mobile apps for faster, efficient release cycle. Free for 30 minutes max build time per build, 20 monthly builds and 1 concurrent build.| [appveyor.com](<https://www.appveyor.com/>) — CD service for Windows, free for Open Source.|
| [bitrise.io](<https://www.bitrise.io/>) — A CI/CD for mobile apps, native or hybrid. With 200 free builds/month 10 min build time and two team members.| [buddy.works](<https://buddy.works/>) — A CI/CD with five free projects and one concurrent run (120 executions/month).|
| [Buildkite](<https://buildkite.com>) — CI Pipelines free for 3 users and 5k job minutes/month. Test Analytics free developer tier includes 100k test executions/month, with more free inclusions for open-source projects.| [bytebase.com](<https://www.bytebase.com/>) — Database CI/CD and DevOps. Free under 20 users and ten database instances.|
| [CircleCI](<https://circleci.com/>) — Comprehensive free plan with all features included in a hosted CI/CD service for GitHub, GitLab, and BitBucket repositories.| [cirun.io](<https://cirun.io>) — Free for public GitHub repositories.|
| [codemagic.io](<https://codemagic.io/>) — Codemagic is a fully hosted and managed CI/CD for mobile apps. The free tier offers 500 free minutes/month and a Mac Mini instance with 2.3 GHz and 8 GB of RAM.| [deployhq.com](<https://www.deployhq.com/>) — 1 project with ten daily deployments (30 build minutes/month).|
| [LocalOps](<https://localops.co/>) — Deploy your app on AWS/GCP/Azure in under 30 minutes. The free plan allows 1 user and 1 app environment.| [Make](<https://www.make.com/en>) — The workflow automation tool lets you connect apps and automate workflows using UI. Free for public GitHub repositories, and free tier with 100 Mb, 1000 Operations, and 15 minutes of minimum interval.|
| [Mergify](<https://mergify.com>) — workflow automation and merge queue for GitHub - Free for public GitHub repositories.| [Nx Cloud](<https://nx.dev/ci>) — Nx Cloud speeds up your monorepos on CI with features such as remote caching, distribution of tasks across machines and even automated splitting of your e2e test runs. It comes with a free plan for up to 30 contributors with generous 150k credits included.|
| [RunMyJob](<https://runmyjob.io>) — Run GitHub Actions and GitLab CI pipelines smarter with real-time scaling Spike Instances. Free tier includes 400 vCPU-minutes, 800 GB-minutes, and 10 concurrent jobs with high-performance runners (12 vCPU and 32 GB RAM per job).| [Shipfox](<https://www.shipfox.io/>) — Run your GitHub actions 2x faster, 3.000 build minutes free each month.|
| [Spacelift](<https://spacelift.io/>) — Management platform for Infrastructure as Code. Free plan features: IaC collaboration, Terraform module registry, ChatOps integration, Continuous resource compliance with Open Policy Agent, SSO with SAML 2.0, and access to public worker pools: up to 200 minutes/month.| [Squash Labs](<https://www.squash.io/>) — creates a VM for each branch and makes your app available from a unique URL, Unlimited public & private repos, Up to 2 GB VM Sizes.|
| [Terramate](<https://terramate.io/>) — Terramate is an orchestration and management platform for Infrastructure as Code (IaC) tools such as Terraform, OpenTofu, and Terragrunt. Free up to 2 users including all features.| [Terrateam](<https://terrateam.io>) — GitOps-first Terraform automation with pull request-driven workflows, project isolation via self-hosted runners, and layered runs for ordered operations.|
| [Trigger.dev](<https://trigger.dev>) — Open-source background jobs and AI agent platform with durable tasks, no timeouts, and realtime. Free plan includes $5 monthly compute credits, 20 concurrent runs, unlimited tasks, 5 team members, 10 schedules, and 1-day log retention.| [GitHub Actions](<https://github.com/features/actions>) — Native CI/CD platform on GitHub, free for public repositories, and 2,000 build minutes for private repositories per month.|
| [GitLab CI](<https://about.gitlab.com/gitlab-ci/>) — Free for unlimited public and private projects, with CI/CD pipelines.| [Tekton](<https://tekton.dev/>) — Free for public and private repos with unlimited build minutes and up to 10 free parallel jobs for public repositories.|
| [Drone.io](<https://drone.io>) — Free for public and private repos with unlimited build minutes and up to 10 free parallel jobs for public repositories.| [Travis CI](<https://travis-ci.org>) — Free for open-source GitHub repositories, with a simple YAML configuration for building pipelines.|
| [Jenkins](<https://www.jenkins.io>) — Free for public and private repos with unlimited build minutes and up to 10 free parallel jobs for public repositories.| [TeamCity](<https://www.jetbrains.com/teamcity/>) — Free for public and private repos with unlimited build minutes and up to 10 free parallel jobs for public repositories.|
| [Codefresh](<https://codefresh.io>) — Free plan includes 120 builds/month and supports Docker-based pipelines for Kubernetes deployments.| [Azure Pipelines](<https://azure.microsoft.com/en-us/products/devops/pipelines/>) — Free for public and private repos with unlimited build minutes and up to 10 free parallel jobs for public repositories.|

[Back to top](#free-resource-catalog)

#### Testing


| Resource and free-tier context | Resource and free-tier context |
|---|---|
| [Appetize](<https://appetize.io>) — Test your Android & iOS apps on this Cloud Based Android Phone / Tablets emulator and iPhone/iPad simulators directly in your browser. The free tier includes two concurrent session with 30 minutes of usage per month.| [Argos](<https://argos-ci.com>) — Open Source visual testing for developers. Unlimitedprojects, with 5,000 screenshots per month.|
| [Bencher](<https://bencher.dev/>) — A continuous benchmarking tool suite to catch CI performance regressions. Free for all public projects.| [BugBug](<https://bugbug.io/>) — Lightweight test automation tool for web applications. You can run unlimited tests on your own computer for free.|
| [checkbot.io](<https://www.checkbot.io/>) — Browser extension that tests if your website follows 50+ SEO, speed and security best practices. Free tier for smaller websites.| [Checkly](<https://checklyhq.com>) — Open source E2E / Synthetic monitoring and deep API monitoring for developers. Free plan with one user and 10k API & network / 1.5k browser check runs.|
| [CORS-Tester](<https://cors-error.dev/cors-tester/>) — A free tool for developers and API testers to check if an API is CORS-enabled for a given domain and identify gaps.| [cypress.io](<https://www.cypress.io/>) — Fast, easy and reliable testing for anything that runs in a browser. Cypress Test Runner is always free and open-source with no restrictions and limitations.|
| [everystep-automation.com](<https://www.everystep-automation.com/>) — Records and replays all steps made in a web browser and creates scripts, free with fewer options.| [gridlastic.com](<https://www.gridlastic.com/>) — Selenium Grid testing with a free plan of up to 4 simultaneous selenium nodes/10 grid starts/4,000 test minutes/month.|
| [katalon.com](<https://katalon.com>) — Provides a testing platform that can help teams of all sizes at different levels of testing maturity, including Katalon Studio, TestOps (+ Visual Testing free), TestCloud, and Katalon Recorder.| [Keploy](<https://keploy.io/>) — Keploy is a functional testing toolkit for developers. It is free for Open Source projects.|
| [Lastest](<https://lastest.cloud>) — Ship fast. Free forever plan: 1 project, 500 runner-minutes/mo, 1 concurrent run, no credit card.| [loadmill.com](<https://www.loadmill.com/>) — Automatically create API and load tests by analyzing network traffic. Simulate up to 50 concurrent users for up to 60 minutes for free monthly.|
| [lost-pixel.com](<https://lost-pixel.com>) — holistic visual regression testing for your Storybook, Ladle, Histoire stories and Web Apps. Unlimited team members, totally free for open-source, 7,000 snapshots/month.| [pagegym.com](<https://pagegym.com>) — Load behaviour and page speed analysis and optimization tool. The free plan provides 10 tests per day, 5 experiments per week, and 15 GB of maximum ingested data per month.|
| [percy.io](<https://percy.io>) — Add visual testing to any web app, static site, style guide, or component library. Unlimited team members, Demo app, and unlimited projects, 5,000 snapshots/month.| [qase.io](<https://qase.io>) — Test management system for Dev and QA teams. The free tier includes all core features, with 500MB available for attachments and up to 3 users.|
| [Repeato](<https://repeato.app/>) — No-code mobile app test automation tool built on top of computer vision and AI. The free plan is limited to 10 tests for iOS and 10 for Android, but includes most of the features of the paid plans, including unlimited test runs.| [Requestly](<https://requestly.com/>) — Open-source Chrome Extension to Intercept, Redirect and Mock HTTP Requests. Redirect URLs, Modify HTTP Headers, Mock APIs, Inject custom JS, Modify GraphQL Requests, Generate Mock API Endpoints, Record session with Network & Console Logs.|
| [Debugger](<https://requestly.com/products/web-debugger/>) — Featuring Debugger, Mock Server, API Client and Session Recording. Redirect URLs, Modify HTTP Headers, Mock APIs, Inject custom JS, Modify GraphQL Requests, Generate Mock API Endpoints, Record session with Network & Console Logs.| [Mock Server](<https://requestly.com/products/mock-server/>) — Featuring Debugger, Mock Server, API Client and Session Recording. Redirect URLs, Modify HTTP Headers, Mock APIs, Inject custom JS, Modify GraphQL Requests, Generate Mock API Endpoints, Record session with Network & Console Logs.|
| [API Client](<https://requestly.com/products/api-client/>) — Featuring Debugger, Mock Server, API Client and Session Recording. Redirect URLs, Modify HTTP Headers, Mock APIs, Inject custom JS, Modify GraphQL Requests, Generate Mock API Endpoints, Record session with Network & Console Logs.| [Session Recording](<https://requestly.com/products/session-book/>) — Featuring Debugger, Mock Server, API Client and Session Recording. Redirect URLs, Modify HTTP Headers, Mock APIs, Inject custom JS, Modify GraphQL Requests, Generate Mock API Endpoints, Record session with Network & Console Logs.|
| [seotest.me](<https://seotest.me/>) — Free on-page SEO website tester. 10 free website crawls per day.| [Sherlo](<https://sherlo.io>) — Visual regression testing for React Native apps. Free plan: 1,000 snapshots/month, iOS & Android simulators.|
| [snippets.uilicious.com](<https://snippets.uilicious.com>) — It's like CodePen but for cross-browser testing. UI-licious lets you write tests like user stories and offers a free platform - UI-licious Snippets - that allows you to run unlimited tests on Chrome with no sign-up required for up to 3 minutes per test run.| [SSR (Server-side Rendering) Checker](<https://www.crawlably.com/ssr-checker/>) — Check SSR (server-side rendering) for any URL by visually comparing the server rendered version of the page with the regular version.|
| [testingbot.com](<https://testingbot.com/>) — Selenium Browser and Device Testing, free for Open Source.| [free for Open Source](<https://testingbot.com/open-source>) — testingbot.com - Selenium Browser and Device Testing, free for Open Source.|
| [Testspace.com](<https://testspace.com/>) — A Dashboard for publishing automated test results and a Framework for implementing manual tests as code using GitHub. The service is free for Open Source and accounts for 450 monthly results.| [free for Open Source](<https://github.com/marketplace/testspace-com>) — Testspace open-source marketplace details.|
| [tesults.com](<https://www.tesults.com>) — Test results reporting and test case management. Open Source software developers, individuals, educators, and small teams getting started can request discounted and free offerings beyond basic free projects.| [UseWebhook.com](<https://usewebhook.com>) — Capture and inspect webhooks from your browser. Free to use.|
| [Vaadin](<https://vaadin.com>) — Build scalable UIs in Java or TypeScript, and use the integrated tooling, components, and design system to iterate faster, design better, and simplify the development process. Unlimited Projects with five years of free maintenance.| [webhook.site](<https://webhook.site>) — Verify webhooks, outbound HTTP requests, or emails with a custom URL. A temporary URL and email address are always free.|
| [websitepulse.com](<https://www.websitepulse.com/tools/>) — Various free network and server tools.| [kogiQA](<https://kogiqa.com>) — A web UI automation tool that functions without the need for selectors. Every developer gets 500 actions per month for free.|
| [BrowserStack](<https://www.browserstack.com/>) — Manual and automated browser testing on real devices and browsers. Free for open-source projects with comprehensive integration for CI/CD.| [Sauce Labs](<https://saucelabs.com/>) — Cloud-based testing on real devices and browsers, offering automated and manual testing. Free for open-source projects.|
| [Applitools](<https://applitools.com/>) — Visual validation testing tool with AI-based smart visual comparison. Free for open-source projects with limited usage for visual regression testing.| [Playwright](<https://playwright.dev/>) — Open-source automation library for browser testing with features like headless testing and cross-browser support.|
| [Selenium](<https://www.selenium.dev/>) — Open-source framework for browser automation, free for everyone, widely used for web application testing.| [Ghost Inspector](<https://ghostinspector.com/>) — Free for one user with automated browser testing, supports scheduled tests and CI/CD integration.|

[Back to top](#free-resource-catalog)

#### Package Build System


| Resource and free-tier context | Resource and free-tier context |
|---|---|
| [build.opensuse.org](<https://build.opensuse.org/>) — Package build service for multiple distros (SUSE, EL, Fedora, Debian, etc.).| [copr.fedorainfracloud.org](<https://copr.fedorainfracloud.org>) — Mock-based RPM build service for Fedora and EL.|
| [help.launchpad.net](<https://help.launchpad.net/Packaging>) — Ubuntu and Debian build service.|  |

[Back to top](#free-resource-catalog)

#### IDE and Code Editing


| Resource and free-tier context | Resource and free-tier context |
|---|---|
| [Android Studio](<https://developer.android.com/studio>) — Android Studio provides the fastest tools for building apps on every type of Android device. Open Source IDE is free for everyone and the best Android app development.| [AndroidIDE](<https://m.androidide.com/>) — An Open Source IDE to develop real, Gradle-based Android applications on Android devices.|
| [Apache Netbeans](<https://netbeans.apache.org/>) — Development Environment, Tooling Platform and Application Framework.| [apiary.io](<https://apiary.io/>) — Collaborative design API with instant API mock and generated documentation (Free for unlimited API blueprints and unlimited users with one admin account and hosted documentation).|
| [BBEdit](<https://www.barebones.com/>) — BBEdit is a popular and extensible editor for macOS. Free Mode provides a powerful core feature set and an upgrade path to advanced features.| [powerful core feature set](<https://www.barebones.com/products/bbedit/comparison.html>) — BBEdit free-mode feature comparison.|
| [Binder](<https://mybinder.org/>) — Turn a Git repo into a collection of interactive notebooks. It is a free public service.| [BlueJ](<https://bluej.org>) — A free Java Development Environment designed for beginners, used by millions worldwide.|
| [Brackets](<https://brackets.io/>) — Brackets is an open-source text editor specifically designed for web development.| [cacher.io](<https://www.cacher.io>) — Code snippet organizer with labels and support for 100+ programming languages.|
| [cocalc.com](<https://cocalc.com/>) — Collaborative calculation in the cloud. Browser access to full Ubuntu with built-in collaboration and lots of free software for mathematics, science, data science, preinstalled: Python, LaTeX, Jupyter Notebooks, SageMath, scikitlearn, etc.| [Code::Blocks](<https://codeblocks.org>) — Free Fortran & C/C++ IDE. Open Source and runs on Windows,macOS & Linux.|
| [Codeground](<https://codeground.ai/>) — Free browser IDE and playgrounds for 15+ languages plus Postgres, MySQL, MongoDB, and Redis. Free playgrounds need no install.| [codiga.io](<https://codiga.io/>) — Coding Assistant that lets you search, define, and reuse code snippets directly in your IDE. Free for individual and small organizations.|
| [Components.studio](<https://webcomponents.dev/>) — Code components in isolation, visualize them in stories, test them, and publish them on npm.| [Eclipse Che](<https://www.eclipse.org/che/>) — Web-based and Kubernetes-Native IDE for Developer Teams with multi-language support. Open Source and community-driven.|
| [workspaces.openshift.com](<https://workspaces.openshift.com/>) — Eclipse Che hosted workspace details.| [ForgeCode](<https://forgecode.dev/>) — AI-enabled pair programmer for Claude, GPT4 Series, Grok, Deepseek, Gemini and all frontier models. Free tier includes basic AI model access with local processing.|
| [GetVM](<https://getvm.io>) — Instant free Linux and IDEs chrome sidebar. The free tier includes 5 VMs per day.| [JDoodle](<https://www.jdoodle.com>) — Online compiler and editor for more than 60 programming languages with a free plan for REST API code compiling up to 200 credits per day.|
| [jetbrains.com](<https://jetbrains.com/products.html>) — Productivity tools, IDEs and deploy tools (aka IntelliJ IDEA, PyCharm, etc). Free license for students, teachers, Open Source and user groups.| [IntelliJ IDEA](<https://www.jetbrains.com/idea/>) — jetbrains.com - Productivity tools, IDEs and deploy tools (aka IntelliJ IDEA, PyCharm, etc). Free license for students, teachers, Open Source and user groups. |
| [PyCharm](<https://www.jetbrains.com/pycharm/>) — jetbrains.com - Productivity tools, IDEs and deploy tools (aka IntelliJ IDEA, PyCharm, etc). Free license for students, teachers, Open Source and user groups. | [JSONPlaceholder](<https://jsonplaceholder.typicode.com/>) — Some REST API endpoints that return some fake data in JSON format.|
| [Lazarus](<https://www.lazarus-ide.org/>) — Lazarus is a Delphi-compatible cross-platform IDE for Rapid Application Development.| [MarsCode](<https://www.marscode.com/>) — A free AI-powered cloud-based IDE.|
| [micro-jaymock](<https://micro-jaymock.now.sh/>) — Tiny API mocking microservice for generating fake JSON data.| [mockaroo](<https://mockaroo.com/>) — Mockaroo lets you generate realistic test data in CSV, JSON, SQL, and Excel formats.|
| [Mocklets](<https://mocklets.com>) — an HTTP-based mock API simulator that helps simulate APIs for faster parallel development and more comprehensive testing, with a lifetime free tier.| [OneCompiler](<https://onecompiler.com/>) — Free online compiler supporting 70+ languages including Java, Python, C++, JavaScript.|
| [OnlineGDB](<https://onlinegdb.com>) — A free online ide thats supports 40+ languages and is pre installed with tons of libraries; and also has a debugging option, flags, tutorials, and a QNA page!| [pterocos](<https://pterocos.eu.org>) — a free opensource browser-based coding environment for front-end developers. all projects save to local storage.|
| [Paiza](<https://paiza.cloud/en/>) — Develop Web apps in Browser without needing to set up anything. Free Plan offers one server with 24 24-hour lifetime and 4 hours of running time per day with 2 CPU cores, 2 GB RAM, and 1 GB storage.| [PHPSandbox](<https://phpsandbox.io/>) — Online development environment for PHP.|
| [Replit](<https://replit.com/>) — A cloud coding environment for various program languages.| [RunMat](<https://runmat.com/sandbox>) — GPU-accelerated numerical computing IDE in the browser. Open source runtime with CLI, NPM package, and Jupyter kernel support.|
| [SoloLearn](<https://code.sololearn.com>) — A cloud programming playground well-suited for running code snippets. Also offers free courses for beginners and intermediate-level coders.| [stackblitz.com](<https://stackblitz.com/>) — Online/Cloud Code IDE to create, edit, & deploy full-stack apps.|
| [https://node.new](<https://node.new>) — stackblitz.com - Online/Cloud Code IDE to create, edit, & deploy full-stack apps.| [Sublime Text](<https://www.sublimetext.com/>) — Sublime Text is a popular, versatile, and highly customizable text editor used for coding and text editing tasks.|
| [Visual Studio Code](<https://code.visualstudio.com/>) — Code editor redefined and optimized for building and debugging modern web and cloud applications.| [Visual Studio Community](<https://visualstudio.microsoft.com/vs/community/>) — Fully-featured IDE with thousands of extensions, cross-platform app development (Microsoft extensions available for download for iOS and Android), desktop, web and cloud development, multi-language support (C#, C++, JavaScript, Python, PHP and more).|
| [VSCodium](<https://vscodium.com/>) — Community-driven, without telemetry/tracking, and freely-licensed binary distribution of Microsoft’s editor VSCode.| [wakatime.com](<https://wakatime.com/>) — Quantified self-metrics about your coding activity using text editor plugins, limited plan for free.|
| [Wave Terminal](<https://waveterm.dev/>) — Wave is an open-source, cross-platform terminal for seamless workflows.| [c9.io](<https://c9.io/>) — IDE in a browser.|
| [koding.com](<http://www.koding.com/>) — Cloud-based development environment.| [codeanywhere.com](<https://codeanywhere.com/>) — Full IDE in the browser and mobile apps.|
| [codenvy.com](<https://codenvy.com/>) — IDE and automated developer workspaces in a browser, collaborative, Git/SVN integration, build and run your app in customizable Docker-based runners (free tier includes: 4 GB RAM, always-on machines, ability to run multiple machines simultaneously), pre-integrated deploy to Go…| [Visual Studio Community](<https://visualstudio.microsoft.com/vs/community/>) — Fully-featured IDE with thousands of extensions for desktop, web and cloud development.|
| [code.visualstudio.com](<http://code.visualstudio.com/>) — Build and debug modern web and cloud applications. Code is free, Open Source and available on your favorite platform, Linux, Mac OSX and Windows.| [cloud.sagemath.com](<https://cloud.sagemath.com/>) — Collaborative mathematics-oriented IDE in a browser, with support for Python, LaTeX, IPython Notebooks, etc.|
| | [stackhive.com](<http://stackhive.com/>) — Cloud based IDE in browser that supports HTML5/CSS3/jQuery/Bootstrap.|
| | [codepen.io](<https://codepen.io/>) — CodePen is a playground for the front end side of the web.|

[Back to top](#free-resource-catalog)

#### Docker Related


| Resource and free-tier context | Resource and free-tier context |
|---|---|
| [Appish](<https://appi.sh/>) — Host Docker containers for demos with just a docker push. Free tier includes 1 slot with 2-hour sessions.| [Container Registry Service](<https://container-registry.com/>) — Harbor based Container Management Solution. The free tier offers 1 GB of storage for private repositories.|
| [Docker Hub](<https://hub.docker.com>) — One free private repository and unlimited public repositories to build and store Docker images.| [quay.io](<https://quay.io/>) — Build and store container images with unlimited free public repositories.|
| [ttl.sh](<https://ttl.sh/>) — Anonymous & ephemeral Docker image registry.| [Arukas Cloud](<https://arukas.io/>) — Free docker container hosting, 10 during beta period, 3 afterwards (Japanese).|
| [Docker Cloud](<https://cloud.docker.com>) — Manages the deployments of Docker containers to your (separate) cloud environment with one free repository.| [Docker Hub](<https://hub.docker.com/>) — Build and store container images with unlimited free public repositories.|

[Back to top](#free-resource-catalog)

#### Feature Toggles Management Platforms


| Resource and free-tier context | Resource and free-tier context |
|---|---|
| [Abby](<https://www.tryabby.com>) — Open-Source feature flags & A/B testing. Generous free tier and cheap scaling options.| [ConfigCat](<https://configcat.com>) — ConfigCat is a developer-centric feature flag service with unlimited team size, excellent support, and a reasonable price tag.|
| [Flagsmith](<https://flagsmith.com>) — Release features with confidence; manage feature flags across web, mobile, and server-side applications.| [GrowthBook](<https://growthbook.io>) — Open source feature flag and A/B testing provider with built-in Bayesian statistical analysis engine. Free for up to 3 users, unlimited feature flags and experiments.|
| [Rollgate](<https://rollgate.io>) — EU-hosted feature flag management with scheduled releases, instant rollback, and A/B testing. Free plan up to 500K API requests/month, unlimited flags, 3 team members, no credit card required.| [Hypertune](<https://www.hypertune.com>) — Type-safe feature flags, A/B testing, analytics and app configuration, with Git-style version control and synchronous, in-memory, local flag evaluation. Free for up to 5 team members with unlimited feature flags and A/B tests.|
| [Statsig](<https://www.statsig.com>) — A robust platform for feature management, A/B testing, analytics, and more. Its generous free plan offers unlimited seats, flags, experiments, and dynamic configurations, supporting up to 1 million events per month.| [Toggled.dev](<https://www.toggled.dev>) — Enterprise-ready, scalable multi-regional feature toggles management platform. Free plan up to 10 flags, two environments, unlimited requests.|

### Data, AI & Observability

[Back to top](#free-resource-catalog)

#### APIs, Data, and ML


| Resource and free-tier context | Resource and free-tier context |
|---|---|
| [Abstract API](<https://www.abstractapi.com>) — API suite for various use cases, including IP geolocation, phone number validation, or email validation.| [AlphaAI](<https://alphai.io/developers>) — Financial news API and MCP server. The free tier includes 20 requests per minute and 100 requests per day on both REST and MCP, no card required.|
| [AnyHook](<https://anyhook.net>) — Inbound webhook relay: point a Stripe, GitHub or LINE bot webhook at it and it stores each event before delivering to your handler, retries automatica. Free tier: Free plan includes 3,000 events/month, 1 app, 3 retries and 3 days of retention, no credit card.…| [Apify](<https://www.apify.com/>) — Web scraping and automation platform to create an API for any website and extract data. Free plan with $5 platform credits included every month.|
| [APITemplate.io](<https://apitemplate.io>) — Auto-generate images and PDF documents with a simple API or automation tools like Zapier & Airtable. The free plan comes with 50 images/month and three templates.| [APIVerve](<https://apiverve.com>) — Get instant access to over 120+ APIs for free, built with quality, consistency, and reliability in mind. The free plan covers up to 50 API Tokens per month.|
| [Arize AI](<https://arize.com/>) — AI engineering platform that helps AI eng/PMs, evaluate, and observe AI applications and agents with built-in Alyx agent. Free product includes 25k spans and ingestion volume of 1gb per month.| [Beeceptor](<https://beeceptor.com>) — No-code, cloud-based platform for mocking and debugging multi-protocol APIs (REST, SOAP, gRPC & GraphQL), providing instant servers with rules-based l. Free tier: The free plan includes 50 requests per day and provides a public dashboard/endpoint where anyone with the dash…|
| [BigDataCloud](<https://www.bigdatacloud.com/>) — Provides fast, accurate, and free (Unlimited or up to 10K-50K/month) APIs for modern web like IP Geolocation, Reverse Geocoding, Networking Insights, Email and Phone Validation, Client Info and more.| [Brave Search API](<https://brave.com/search/api/>) — Independent web, news, image, video search and AI/LLM context API, suitable for RAG pipelines and AI agents. Free tier includes $5 in monthly credits (credit card required for verification).|
| [Browse AI](<https://www.browse.ai>) — Extracting and monitoring data on the web. 1k credits per month for free, equals 1k concurrent requests.| [Calendarific](<https://calendarific.com>) — Enterprise-grade Public holiday API service for over 200 countries. The free plan includes 500 calls per month.|
| [Canopy](<https://www.canopyapi.co/>) — GraphQL API for Amazon.com product, search, and category data. The free plan includes 100 calls per month.| [CarAPI.dev](<https://carapi.dev>) — Comprehensive automotive data API with VIN decoding, stolen vehicle checks, vehicle valuation, inspection data, and more. Free tier includes 100 requests/month across all 9 endpoints.|
| [CatchDoms](<https://catchdoms.com>) — Aggregator of expired and dropping domain listings from 16 marketplaces, with SEO enrichment (backlinks, Trust Flow, Wayback history) and a quality score. Free plan: 10 unlocked listings, 5 favorites, 3 saved searches.| [Cloudmersive](<https://cloudmersive.com/>) — Utility API platform with full access to expansive API Library including Document Conversion, Virus Scanning, and more with 600 calls/month, North America AZ only, 2.5MB maximum file size.|
| [CometML](<https://www.comet.com/site/>) — The MLOps platform for experiment tracking, model production management, model registry, and complete data lineage, covering your workflow from training to production. Free for individuals and academics.| [Commerce Layer](<https://commercelayer.io>) — Composable commerce API that can build, place, and manage orders from any front end. The developer plan allows 100 orders per month and up to 1,000 SKUs for free.|
| [Composio](<https://composio.dev/>) — Integration platform for AI Agents and LLMs.| [Conversion Tools](<https://conversiontools.io/>) — Online File Converter for documents, images, video, audio, and eBooks. Support files up to 50 GB (for paid plans).|
| [Country-State-City Microservice API](<https://country-state-city.rebuscando.info/>) — API and Microservice to provides a wide range of information including countries, regions, provinces, cities, postal codes, and much more. The free tier includes up to 100 requests per day.| [Coupler](<https://www.coupler.io/>) — Data integration tool that syncs between apps. The free plan is limited to one user, data connection, data source, and data destination.|
| [CraftMyPDF](<https://craftmypdf.com>) — Auto-Generate PDF documents from reusable templates with a drop-and-drop editor and a simple API. The free plan comes with 100 PDFs/month and three templates.| [Cube](<https://cube.dev/>) — Cube helps data engineers and application developers access data from modern data stores, organize it into consistent definitions, and deliver it to every application. The fastest way to use Cube is with Cube Cloud, which has a free tier limited to 1,000 queries per day.|
| [CurlHub](<https://curlhub.io>) — Proxy service for inspecting and debugging API calls. The free plan includes 10,000 requests per month.| [CurrencyScoop](<https://currencyscoop.com>) — Realtime currency data API for fintech apps. The free plan includes 5,000 calls per month.|
| [CustomJS](<https://www.customjs.io>) — HTML to PDF or PDF to PNG/Text & PDF merging/extraction/merging APIs. Free tier has 600 calls a month.| [Data Fetcher](<https://datafetcher.com>) — Connect Airtable to any application or API with no code. Postman-like interface for running API requests in Airtable.|
| [Data Miner](<https://dataminer.io/>) — A browser extension (Google Chrome, MS Edge) for data extraction from web pages CSV or Excel. The free plan gives you 500 pages/month.| [Dataimporter.io](<https://www.dataimporter.io>) — Tool for connecting, cleaning, and importing data into Salesforce. Free Plan includes up to 20,000 records per month.|
| [Datalore](<https://datalore.jetbrains.com>) — Python notebooks by Jetbrains. Includes 10 GB of storage and 120 hours of runtime each month.| [DB Designer](<https://www.dbdesigner.net/>) — Cloud-based Database schema design and modeling tool with a free starter plan of 2 Database models and ten tables per model.|
| [DB-IP](<https://db-ip.com/api/free>) — Free IP geolocation API with 1k request per IP per day.lite database under the CC-BY 4.0 License is free too.| [DeepAR](<https://developer.deepar.ai>) — Augmented reality face filters for any platform with one SDK. The free plan provides up to 10 monthly active users (MAU) and tracks up to 4 faces.|
| [Deepnote](<https://deepnote.com>) — A new data science notebook. The free tier includes unlimited personal projects, unlimited basic machines with 5GB RAM and 2vCPU, and teams with up to 3 editors.| [Compare JSON](<https://comparejson.com>) — An online tool for comparing differences between two JSON data structures, helping you quickly locate the differences in JSON data.|
| [Disease.sh](<https://disease.sh/>) — A free API providing accurate data for building the Covid-19 related useful Apps.| [Doczilla](<https://www.doczilla.app/>) — SaaS API empowering the generation of screenshots or PDFs directly from HTML/CSS/JS code. The free plan allows 250 documents month.|
| [Doppio](<https://doppio.sh/>) — Managed API to generate and privately store PDFs and Screenshots using top rendering technology. The free plan allows 400 PDFs and Screenshots per month.| [DocPenny](<https://docpenny.com>) — HTML to PDF document generation with templates, webhook delivery, and credit-based pricing. Free plan with 50 monthly credits, no credit card required.|
| [Doqlo](<https://doqlo.com/>) — Bulk fill and mail merge PDF forms from CSV using the web app or Public API. The free plan includes 100 output PDFs/month.| [drawDB](<https://drawdb.app/>) — Free and open-source online database diagram editor with no signup required.|
| [DynamicDocs](<https://advicement.io>) — Generate PDF documents with JSON to PDF API based on LaTeX templates. The free plan allows 50 API calls per month and access to a library of templates.| [Earnings Feed](<https://earningsfeed.com/api>) — Real-time SEC filings, insider trades, and institutional holdings API. Free tier includes 15 requests per minute.|
| [Export SDK](<https://exportsdk.com>) — PDF generator API with drag-and-drop template editor that provides an SDK and no-code integrations. The free plan has 250 monthly pages, unlimited users, and three templates.| [ExtendsClass](<https://extendsclass.com/rest-client-online.html>) — Free web-based HTTP client to send HTTP requests.|
| [Financial Data](<https://financialdata.net/>) — Stock market and financial data API. Free plan allows 300 requests per day.| [Firecrawl](<https://www.firecrawl.dev/>) — API that crawls websites and converts them into clean, LLM-ready markdown or structured data, handling JavaScript rendering, proxies, and rate limits. The free plan includes 1,000 credits per month with no credit card required.|
| [finlight](<https://finlight.me>) — Real-time financial news API with entity resolution (tickers, ISIN) and sentiment tagging, available over REST, WebSocket, webhooks and an MCP server. Free tier: 5,000 requests/month on both REST and MCP, 12-hour delayed articles, no card required.|  |
| [FormatJSONOnline.com](<https://formatjsononline.com>) — A free, browser-based tool to format, validate,compare and minify JSON data instantly.| [FraudLabs Pro](<https://www.fraudlabspro.com>) — Help merchants to prevent payment fraud and chargebacks. Free Micro Plan available with 500 queries/month.|
| [FreeIPAPI](<https://freeipapi.com>) — Free, Fast and Reliable IP Geolocation API for commercial and non-commercial users available in JSON.| [Geolocated.io](<https://geolocated.io>) — IP Geolocation API with multi-continent servers, offering a free plan with 2,000 requests per day.|
| [Hex](<https://hex.tech/>) — a collaborative data platform for notebooks, data apps, and knowledge libraries. Free community tier with up to five projects.| [Hook0](<https://www.hook0.com/>) — Hook0 is an open-source Webhooks-as-a-service (WaaS) that makes it easy for online products to provide webhooks. Dispatch up to 100 events/day with seven days of history retention for free.|
| [Hoppscotch](<https://hoppscotch.io>) — A free, fast, and beautiful API request builder.| [HS Ping](<https://hsping.com>) — A multi-country HS (Harmonized System) and HTS (Harmonized Tariff System) code lookup API, with a free plan offering 100 lookups/day.|
| [huggingface.co](<https://huggingface.co>) — Build, train, and deploy NLP models for Pytorch, TensorFlow, and JAX. Free up to 30k input characters/mo.| [Insomnia](<https://insomnia.rest>) — Open-source API client for designing and testing APIs, it supports REST and GraphQL.|
| [Inngest](<https://www.inngest.com>) — Durable execution and event-driven workflows for TypeScript, Python, and Go. Hobby plan is free with 50k executions/month, 5 concurrent steps, 500k events ingested, and no credit card required.| [Invantive Cloud](<https://cloud.invantive.com/>) — Access over 70 (cloud)platforms such as Exact Online, Twinfield, ActiveCampaign or Visma using Invantive SQL or OData4 (typically Power BI or Power Query). Free plan for developers and implementation consultants.|
| [IP Geolocation API by ipwho.org](<https://ipwho.org/>) — 2,000 free requests per day.| [IP Geolocation API](<https://www.abstractapi.com/ip-geolocation-api>) — IP Geolocation API from Abstract - Allows 1,000 free requests.|
| [IP Geolocation](<https://ipgeolocation.io/>) — Free DEVELOPER plan available with 30K requests/month.| [ip-api](<https://ip-api.com>) — IP Geolocation API, Free for non-commercial use, no API key required, limited to 45 req/minute from the same IP address for the free plan.|
| [IP.City](<https://ip.city>) — 100 Free IP geolocation requests per day.| [IP2Location.io](<https://www.ip2location.io/>) — Freemium, fast, and reliable IP geolocation API. The free plan includes 50k credits per month.|
| [Proxmint GeoIP](<https://proxmint.com/tools/ip-lookup>) — Free IP → country/city/ASN JSON API, no key, CORS-open.| [ip2geo.dev](<https://ip2geo.dev>) — IP geolocation API to convert IP addresses into location data including city, country, timezone, ASN, and currency. The free plan includes 1,000 requests per month.|
| [ipaddress.sh](<https://ipaddress.sh>) — Simple service to get a public IP address in different formats.| [formats](<https://about.ipaddress.sh/>) — ipaddress.sh - Simple service to get a public IP address in different formats. |
| [ipapi.is](<https://ipapi.is/>) — A reliable IP Address API from Developers for Developers with the best Hosting Detection capabilities that exist. The free plan offers 1000 lookups without signup.| [ipapi](<https://ipapi.co/>) — IP Address Location API by Kloudend, Inc - A reliable geolocation API built on AWS, trusted by Fortune 500. The free tier offers 30k lookups/month (1k/day) without signup.|
| [ipbase.com](<https://ipbase.com>) — IP Geolocation API - Forever free plan that spans 150 monthly requests.| [IPinfo](<https://ipinfo.io/>) — Fast, accurate, and free (up to 50k/month) IP address data API. All paid APIs can be trialed for free.|
| [IPLocate](<https://www.iplocate.io>) — IP Geolocation API, free up to 1,000 requests/day. IPLocate also offers free downloadable IP to Country and IP to ASN databases in CSV or GeoIP-compatible MMDB formats.| [IPTrace](<https://iptrace.io>) — An embarrassingly simple API that provides your business with reliable and helpful IP geolocation data with 50,000 free lookups per month.|
| [JSON IP](<https://getjsonip.com>) — Returns the Public IP address of the client it is requested from. No registration is required for the free tier.| [JSON to Table](<https://jsontotable.org>) — Convert JSON into an interactive table for quick viewing, editing, and sharing online.|
| [JSON2Video](<https://json2video.com>) — A video editing API to automate video marketing and social media videos, programmatically or with no code.| [JSONGrid](<https://jsongrid.com>) — Free tool to Visualize, Edit, Filter complex JSON data into beautiful tabular Grid.|
| [JSONing](<https://jsoning.com/api/>) — Create a fake REST API from a JSON object, and customize HTTP status codes, headers, and response bodies.| [JSONSwiss](<https://www.jsonswiss.com/>) — JSONSwiss is a powerful online JSON viewer, editor, and validator.|
| [KillBait API](<https://killbait.com/api/doc>) — KillBait API allows users to submit URLs for content evaluation, detecting potential clickbait and categorizing articles.| [Kreya](<https://kreya.app>) — Free gRPC GUI client to call and test gRPC APIs.|
| [LoginLlama](<https://loginllama.app>) — A login security API to detect fraudulent and suspicious logins and notify your customers. Free for 1,000 logins per month.| [Market Data API](<https://www.marketdata.app>) — Provides real-time and historical financial data for stocks, options, mutual funds, and more. The Free Forever API tier allows for 100 daily API requests at no charge.|
| [Maxim AI](<https://getmaxim.ai/>) — Simulate, evaluate, and observe your AI agents. Free forever for indie developers and small teams (3 seats).| [microlink.io](<https://microlink.io/>) — It turns any website into data such as metatags normalization, beauty link previews, scraping capabilities, or screenshots as a service. 50 requests/day every day free.|
| [Mintlify](<https://mintlify.com>) — Modern standard for API documentation. Free for 1 editor.| [MockAPI](<https://www.mockapi.io/>) — MockAPI is a simple tool that lets you quickly mock up APIs, generate custom data, and perform operations using a RESTful interface.|
| [Mockerito](<https://mockerito.com/>) — Free mock REST API service providing realistic data across 9 domains (e-commerce, finance, healthcare, education, recruitment, social media, stock markets, weather, and aviation).| [Mockfly](<https://www.mockfly.dev/>) — Mockfly is a trusted development tool for API mocking and feature flag management. The free tier offers 500 requests per day.|
| [Mocko.dev](<https://mocko.dev/>) — Proxy your API, choose which endpoints to mock in the cloud and inspect traffic, for free.| [Multi-Exit IP Address Checker](<https://ip.alstra.ca/>) — A free and simple tool to check your exit IP address across multiple nodes and understand how your IP appears to different global regions and services.|
| [NASdisks Drive Data API](<https://www.nasdisks.com/data/>) — Free, no-key, CORS-enabled API for NAS HDD/SSD specifications, per-model CMR/SMR classification, and annualized failure rates derived from Backblaze Drive Stats.| [News API](<https://newsapi.org>) — Search news on the web with code, and get JSON results. Developers get 100 queries free each day.|
| [numlookupapi.com](<https://numlookupapi.com>) — Free phone number validation API - 100 free requests / month.| [OCR.Space](<https://ocr.space/>) — An OCR API parses image and pdf files that return the text results in JSON format. 25,000 requests per month are free and a 1MB file size limit.|
| [OpenAPI3 Designer](<https://openapidesigner.com/>) — Visually create Open API 3 definitions for free.| [Parseur](<https://parseur.com>) — 20 free pages/month: Extract data from PDFs, emails.|
| [PDF-API.io](<https://pdf-api.io>) — PDF Automation API, visual template editor or HTML to PDF, dynamic data integration, and PDF rendering with an API. The free plan comes with one template, 100 PDFs/month.| [PDFBolt](<https://pdfbolt.com>) — Developer-focused PDF generation API designed with privacy in mind. It offers Stripe-inspired documentation and includes 500 free PDF conversions per month.|
| [Pexafy](<https://pexafy.com>) — Semantic image search API across 9 free photo sources (Unsplash, Pexels, Pixabay, Kaboompics & more), 9M+ photos under one JSON schema instead of one integration per source.| [Pixela](<https://pixe.la/>) — Free daystream database service. All operations are performed by API.|
| [Posthook](<https://posthook.io>) — Schedule webhooks to fire at a future time with automatic retries, delivery tracking, and failure alerting. Free plan includes 1,000 webhooks per month.| [Postman](<https://postman.com>) — Simplify workflows and create better APIs - faster - with Postman, a collaboration platform for API development. Use the Postman App for free forever.|
| [PrefectCloud](<https://www.prefect.io/cloud/>) — A complete platform for dataflow automation. Free plan includes 5 deployed workflows and 500 minutes of serverless compute credits per month.| [Preset Cloud](<https://preset.io/>) — A hosted Apache Superset service. Forever free for teams of up to 5 users, featuring unlimited dashboards and charts, a no-code chart builder, and a collaborative SQL editor.|
| [ProxySentry](<https://proxysentry.io/>) — IP API that detects residential proxies and VPNs. ProxySentry.io offers a free tier with 10k requests per month on rapidapi.com.| [Reducto](<https://reducto.ai>) — Turn any unstructured documents (PDF, XLSX, JPG, PPTX, etc.) into structured JSON data. Free tier with 15k free credits and pay-as-you-go.|
| [Rendi](<https://rendi.dev>) — FFmpeg API - A REST API for FFmpeg, run FFmpeg online without handling the infrastructure. Free tier with monthly processing quota and 4 vCPUs available.| [RequestBin.com](<https://requestbin.com>) — Create a free endpoint to which you can send HTTP requests. Any HTTP requests sent to that endpoint will be recorded with the associated payload and headers so you can observe recommendations from webhooks and other services.|
| [ROBOHASH](<https://robohash.org/>) — Web service to generate unique and cool images from any text.| [Scraper's Proxy](<https://scrapersproxy.com>) — Simple HTTP proxy API for scraping. First 100 successful scrapes per month free including javascript rendering (more available if you contact support).|
| [ScrapingAnt](<https://scrapingant.com/>) — Headless Chrome scraping API and free checked proxies service. Free 10,000 API credits.| [SerpApi](<https://serpapi.com/>) — Real-time search engine scraping API. The free plan includes 100 successful API calls per month.|
| [Simplescraper](<https://simplescraper.io>) — Trigger your webhook after each operation. The free plan includes 100 cloud scrape credits.| [Geekflare API](<https://geekflare.com/api/>) — Geekflare API lets you scrape websites into Markdown, take screenshots, perform TLS scans and DNS lookups, test load times, and more. The free plan offers 500 API credits per month (e.g., 500 DNS lookups, 250 web scrapes, or 100 screenshots).|
| [credit mapping](<https://docs.geekflare.com/api/api-credit-mapping>) — Geekflare API credit mapping.| [SmartParse](<https://smartparse.io>) — SmartParse is a data migration and CSV to API platform that offers time- and cost-saving developer tools. The Free tier includes 300 Processing Units per month, Browser uploads, Data quarantining, Circuit breakers, and Job Alerts.|
| [Sofodata](<https://www.sofodata.com/>) — Create secure RESTful APIs from CSV files. The free plan includes 2 APIs and 2,500 API calls per month.| [Sqlable](<https://sqlable.com/>) — A collection of free online SQL tools, including an SQL formatter and validator, SQL regex tester, fake data generator, and interactive database playgrounds.|
| [Svix](<https://www.svix.com/>) — Webhooks as a Service. Send up to 50,000 messages/month for free.| [Tavily AI](<https://tavily.com/>) — API for online search and rapid insights and comprehensive research, with the capability of organization of research results. 1000 request/month for the Free tier with No credit card required.|
| [TemplateFox](<https://pdftemplateapi.com>) — PDF generation API with a visual template editor, dynamic data merging, and SDKs for 7 languages. Free plan includes 60 PDFs/month and 3 templates.| [The IP API](<https://theipapi.com/>) — IP Geolocation API with 1000 free requests / day.|
| [TinyMCE](<https://www.tiny.cloud>) — rich text editing API. Core features are free for unlimited usage.| [Tomorrow.io Weather API](<https://www.tomorrow.io/weather-api/>) — Offers free plan of weather API.|
| [Treblle](<https://www.treblle.com>) — Treblle helps teams build, ship, and govern APIs. You get all features for free, but there is a limit of up to 250k requests per month on the free tier.| [Trophy](<https://trophy.so>) — Trophy is the gamification layer for consumer apps. Free for up to 1,000 monthly active users.|
| [UniRateAPI](<https://unirateapi.com>) — Real-time exchange rates for 590+ currencies and crypto. Unlimited API calls on the free plan, perfect for developers and finance apps.| [vatcheckapi.com](<https://vatcheckapi.com>) — Simple and free VAT number validation API. 150 free validations per month.|
| [vatnode](<https://vatnode.dev>) — EU VAT number validation REST API with VIES and national tax-registry fallback, returning the official VIES consultation number for audit records. Free tier of 100 validations/month, no credit card.| [WeatherXu](<https://weatherxu.com/>) — Global weather data including current conditions, hourly and daily forecasts, and weather alerts via our API. Free tier includes 10,000 API calls/month.|
| [WebScraping.AI](<https://webscraping.ai>) — Simple Web Scraping API with built-in parsing, Chrome rendering, and proxies. Two thousand free API calls per month.| [Weights & Biases](<https://wandb.ai>) — The developer-first MLOps platform. Free tier for personal projects only, with 100 GB of storage included.|
| [What Is My IP](<https://whatismyip.help>) — A free service to check your public IPv4 and IPv6 address and related request data through an API with different output formats for automation, scripts, and network troubleshooting.| [What The Diff](<https://whatthediff.ai>) — AI-powered code review assistant. The free plan has a limit of 25,000 monthly tokens (~10 PRs).|
| [XFlux](<https://www.xfluxapi.com>) — X/Twitter read REST API (profiles, search, timelines) plus account monitors. Free tier: 1,000 API calls/month, 1 monitor, instant API key.| [wolfram.com](<https://wolfram.com/language/>) — Built-in knowledge-based algorithms in the cloud.|
| [wrapapi.com](<https://wrapapi.com/>) — Turn any website into a parameterized API. 30k API calls per month.| [Zenscrape](<https://zenscrape.com/web-scraping-api>) — Web scraping API with headless browsers, residentials IPs, and straightforward pricing. One thousand free API calls/month and extra credits for students and non-profits.|
| [Zipcodebase](<https://zipcodebase.com>) — Free Zip Code API, access to Worldwide Postal Code Data. 5,000 free requests/month.| [Zip-Codes](<https://www.zip-codes.com/api/>) — REST API for US and Canadian postal codes with address validation, radius search, and Census demographics. 2,500 free requests/day.|
| [Zipcodestack](<https://zipcodestack.com>) — Free Zip Code API and Postal Code Validation. Ten thousand free requests/month.| [Zuplo](<https://zuplo.com/>) — Free API Management platform to design, build, and deploy APIs to the Edge. Add API Key authentication, rate limiting, developer documentation and Monetization to any API in minutes.|
| [Metashot](<https://metashot.io>) — Open Graph (OG) social preview image generation API. Free tier: 1,000 renders/month.| [dreamfactory.com](<http://dreamfactory.com/>) — Open source REST API backend for mobile, web, and IoT applications. Hook up any SQL/NoSQL database, file storage system, or external service and it instantly creates a comprehensive REST API platform with live documentation, user management,...|
| [monkeylearn.com](<http://monkeylearn.com/>) — Text analysis with machine learning, free 100,000 queries/month.| [wit.ai](<https://wit.ai/>) — NLP for developers.|
| [parsehub.com](<https://parsehub.com/>) — Extract data from dynamic sites, turn dynamic websites into APIs, 5 projects free.| [import.io](<https://import.io/>) — Easily turn websites into APIs, completely free for life.|
| [algorithmia.com](<https://algorithmia.com/>) — Host algorithms for free. Includes free monthly allowance for running algorithms.| [bigml.com](<https://bigml.com/>) — Hosted machine learning algorithms. Unlimited free tasks for development, limit of 16 MB data/task.|
| [mashape.com](<https://www.mashape.com/>) — API Marketplace and powerful tools for private and public APIs. With the free tier, some features are limited such as monitoring, alerting and support.| [dominodatalab.com](<https://www.dominodatalab.com>) — Data science with support for Python, R, Spark, Hadoop, Matlab and others.|
| | [restlet.com](<http://restlet.com/products/apispark/>) — APISpark enables any API, application or data owner to become an API provider in minutes via an intuitive browser interface.|
| [scrapinghub.com](<http://scrapinghub.com>) — Data scraping with visual interface and plugins. Free plan includes unlimited scraping on a shared server.| |
| [cloudrail.com](<https://cloudrail.com>) — API integration solution.|  |

[Back to top](#free-resource-catalog)

#### Generative AI


| Resource and free-tier context | Resource and free-tier context |
|---|---|
| | [Braintrust](<https://www.braintrustdata.com/>) — Evals, prompt playground, and data management for Gen AI. Free plan gives upto 1,000 private eval rows/week.|
| [Clair](<https://askclair.ai/>) — Clinical AI Reference. Students have free access to the professional tool suite, which includes Open Search, Clinical Summary, Med Review, Drug Interactions, ICD-10 Codes, and Stewardship.| [Comet Opik](<https://www.comet.com/site/products/opik/>) — Evaluate, test, and ship LLM applications across your dev and production lifecycles.|
| [#opensource](<https://github.com/comet-ml/opik/>) — Opik open-source LLM evaluation repository.| [Future AGI](<https://futureagi.com>) — Open-source platform to evaluate, observe, and improve LLM and AI agent apps, with tracing, evals, simulations, and guardrails.. Free tier: Free tier includes 50GB storage, 2K eval credits, 100K AI-gateway requests/month, 1M tokens of text agent simu…|
| [#opensource](<https://github.com/future-agi/future-agi>) — Future AGI open-source LLM and agent evaluation repository.| [Gonka Broker](<https://gonkabroker.com/>) — OpenAI-compatible API for open-source models served over the decentralized Gonka.ai GPU network. 1M+ free tokens monthly.|
| [Keywords AI](<https://keywordsai.co>) — The best LLM monitoring platform. 10,000 free requests every month and $0 for platform features!| [Langfuse](<https://langfuse.com/>) — Open-source LLM engineering platform that helps teams collaboratively debug, analyze, and iterate on their LLM applications. Free forever plan includes 50k observations per month and all platform features.|
| [#opensource](<https://github.com/langfuse/langfuse>) — Langfuse open-source LLM engineering repository.| [LangWatch](<https://langwatch.ai>) — A LLMOps platform helping AI teams measure, monitor, and optimize LLM applications for reliability, cost-efficiency, and performance. Free plan includes all platform features, 1k traces/month and 1 workflow DSPy optimizers.|
| [#opensource](<https://github.com/langwatch/langwatch>) — LangWatch open-source LLM observability repository.| [Latitude](<https://latitude.so>) — Open-source (MIT) LLM observability and evaluation platform to trace, monitor, and evaluate AI agents in production. Free Starter plan includes 20K credits/month, 30-day data retention, and unlimited seats.|
| [#opensource](<https://github.com/latitude-dev/latitude-llm>) — Latitude open-source LLM evaluation repository.| [Lumenfall.ai](<https://lumenfall.ai/>) — AI media gateway providing unified access to leading image generation models via an OpenAI-compatible API. The platform itself is free to use with zero markup and no subscription fee.|
| [Maxim](<https://www.getmaxim.ai>) — An LLM evaluation and observability platform with agent simulation and prompt playground. Free tier offers 10k monthly logs, access to prompt playground, simulations and evaluations via BYOK.| [Mediaworkbench.ai](<https://mediaworkbench.ai>) — MediaWorkbench.ai offers 100,000 free words for Azure OpenAI, DeepSeek, and Google Gemini models, enabling users to access powerful tools for code generation, deep research, and image creation.|
| [OpenRouter](<https://openrouter.ai/models?q=free>) — Provides various free AI models including DeepSeek R1, V3, Llama, and Moonshot AI. Note that while these models are free to use, they are subject to rate limits.| [Pollinations.AI](<https://pollinations.ai/>) — easy-to-use, free image generation AI with free API available.|
| [#opensource](<https://github.com/pollinations/pollinations>) — Pollinations.AI open-source image-generation repository.| [Portkey](<https://portkey.ai/>) — Control panel for Gen AI apps featuring an observability suite & an AI gateway. Send & log up to 10,000 requests for free every month.|
| [ReportGPT](<https://ReportGPT.app>) — AI Powered Writing Assistant. The entire platform is free as long as you bring your own API key.| [telemetry.dev](<https://telemetry.dev>) — Observability for AI/LLM apps built on OpenTelemetry. Free plan includes 10,000 spans/month, 7-day retention, 1 project and 2 seats, no credit card.|
| [Transcript LOL](<https://transcript.lol/>) — Converts audio or video to text using AI. The free tier includes 2 transcriptions per day.| [Zenable](<https://zenable.io>) — Instantly auto-fix outputs from tools like Cursor, Windsurf, and Copilot to meet your company's quality and compliance standards using guardrails buil. Free tier: The free tier includes 100 tools calls per day to the MCP server and 25 free automated pull request reviews pe…|

[Back to top](#free-resource-catalog)

#### Analytics, Events and Statistics


| Resource and free-tier context | Resource and free-tier context |
|---|---|
| [amplitude.com](<https://amplitude.com/>) — 1 million monthly events, up to 2 apps.| [AppFit](<https://appfit.io>) — AppFit is a comprehensive analytics and product management tool designed to facilitate seamless, cross-platform management of analytics and product updates. Free plan includes 10,000 events per month, product journal and weekly insights.|
| [Aptabase](<https://aptabase.com>) — Open Source, Privacy-Friendly, and Simple Analytics for Mobile and Desktop Apps. Free for up to 20,000 events per month.| [Avo](<https://avo.app/>) — Simplified analytics release workflow. Single-source-of-truth tracking plan, type-safe analytics tracking library, in-app debuggers, and data observability to catch all data issues before you release.|
| [Beampipe.io](<https://beampipe.io>) — Beampipe is simple, privacy-focussed web analytics. free for up to 5 domains & 10k monthly page views.| [Census](<https://www.getcensus.com/>) — Reverse ETL & Operational Analytics Platform.|
| [Clicky](<https://clicky.com>) — Website Analytics Platform. Free Plan for one website with 3000 views analytics.| [counter.dev](<https://counter.dev>) — Web analytics made simple and therefore privacy friendly. Free or pay what you want by donation.|
| [DocBeacon](<https://docbeacon.io>) — Secure document sharing with document tracking and engagement Analytics. Free plan supports up to 20 PDF documents (10 MB max), 10 contacts, and 2 shares per document with basic analytics for views downloads, time and engagement.| [Dwh.dev](<https://dwh.dev>) — Data Cloud Observability Solution (Snowflake). Free for personal use.|
| [Expensify](<https://www.expensify.com/>) — Expense reporting, free personal reporting approval workflow.| [getinsights.io](<https://getinsights.io>) — Privacy-focused, cookie-free analytics, free for up to 3k events/month.|
| [Gizmo Analytics](<https://gizmoanalytics.io/>) — Simple analytics for people managing lots of sites. Free for up to 10k events/month.| [GoatCounter](<https://www.goatcounter.com/>) — GoatCounter is an open-source web analytics platform available as a hosted service (free for non-commercial use) or self-hosted app.|
| [Google Analytics](<https://analytics.google.com/>) — Google Analytics.| [heap.io](<https://heap.io>) — Automatically captures every user action in iOS or web apps. Free for up to 10K monthly sessions.|
| [Hightouch](<https://hightouch.com/>) — Hightouch is a Reverse ETL platform that helps you sync customer data from your data warehouse to your CRM, marketing, and support tools. The free tier offers you one destination to sync data to.| [HitKeep](<https://hitkeep.com/>) — Privacy-focused, open-source web and product analytics platform with a free cloud plan for 3 websites, 3 team members, 60-day data retention, AI analytics, goals, funnels, events, and hits.|
| [Hotjar](<https://hotjar.com>) — Website Analytics and Reports . Free Plan allows 2000 pageviews/day.| [LogSpot](<https://logspot.io>) — Full unified web and product analytics platform, including embeddable analytics widgets and automated robots (slack, telegram, and webhooks). Free plan includes 10,000 events per month.|
| [Mixpanel](<https://mixpanel.com/>) — 100,000 monthly tracked users, unlimited data history and seats, US or EU data residency.| [Moesif](<https://www.moesif.com>) — Generate revenue from APIs via usage-based billing. Connect to Stripe, Chargebee, etc. The free tier offers 30,000 events/month.|
| [PostHog](<https://posthog.com>) — Full Product Analytics suite free for up to 1m tracked events per month. Also provides unlimited in-App Surveys with 250/month responses.| [Repohistory](<https://repohistory.com>) — Beautiful dashboard for tracking GitHub repo traffic history longer than 14 days. Free Plan allows users to monitor traffic for a single repository.|
| [Row Zero](<https://rowzero.io>) — Blazingly fast, connected spreadsheet. Three free (forever) workbooks.| [Rybbit](<https://rybbit.io>) — Open-source and cookieless alternative to Google Analytics that is 10x more intuitive. Free plans has 3,000 monthly events.|
| [Seline](<https://seline.so>) — Seline is a simple & private website and product analytics. Free plan includes 3,000 events per month and provides access to all our features, such as the dashboard, user journeys, funnels, and more.| [StatCounter](<https://statcounter.com/>) — Website Viewer Analytics. Free plan for analytics of 500 most recent visitors.|
| [Statsig](<https://statsig.com>) — All-in-one platform spanning across analytics, feature flagging, and A/B testing. Free for up to 1m metered events per month.| [TraceLog](<https://tracelog.io/>) — AI Analytics for E-commerce. Free for up to 10k events per month.|
| [Trackingplan](<https://www.trackingplan.com/>) — Automatically detect digital analytics, marketing data and pixels issues, maintain up-to-date tracking plans, and foster seamless collaboration.| [TrackWith Dicloud](<https://dicloud.net/trackwith-privacy-focused-analytics/>) — Free lightweight privacy-focused alternative to Google Analytics. Unlimited pageviews, unlimited visitor, unlimited page heatmaps & goal tracking.|
| [Umami](<https://umami.is/>) — Simple, fast, privacy-focused, open-source alternative to Google Analytics.| [usabilityhub.com](<https://usabilityhub.com/>) — Test designs and mockups on real people and track visitors. Free for one user, unlimited tests.|
| [heapanalytics.com](<https://heapanalytics.com/>) — Automatically captures every user action in iOS or web apps. Free for up to 5,000 visits/month.| [sematext.com](<https://sematext.com//search-analytics>) — Free for up to 50 K actions/month, 1 day data retention, unlimited dashboards, users, etc.|
| [gosquared.com](<https://gosquared.com/>) — Track up to 1,000 data points for free.| [keen.io](<https://keen.io/>) — Custom Analytics for data collection, analysis and visualization. 50,000 events/month free.|
| [inspectlet.com](<http://inspectlet.com/>) — 100 sessions/month free for 1 website.| [mousestats.com](<https://mousestats.com/>) — 100 sessions/month free for 1 website.|
| [metrica.yandex.com](<https://metrica.yandex.com/>) — Unlimited free analytics.| [imprace.com](<http://imprace.com/>) — Landing page analysis with suggestions to improve bounce rates. Free 5 landing pages/domain.|
| [baremetrics.com](<https://baremetrics.com/>) — Analytics and Insights for stripe.| [optimizely.com](<https://optimizely.com>) — A/B Testing solution, free starter plan, 1 website, 1 iOS and 1 Android app.|
| [expensify.com](<https://expensify.com/>) — Expense reporting, free personal reporting approval workflow.| [ironSource atom](<http://www.ironsrc.com/data-flow-management/>) — Atom Data Flow Management is a data pipeline solution, 10 million monthly events free.|

[Back to top](#free-resource-catalog)

#### Data Visualization on Maps


| Resource and free-tier context | Resource and free-tier context |
|---|---|
| [Clockwork Micro](<https://clockworkmicro.com/>) — Map tools that work like clockwork. Fifty thousand free monthly queries (map tiles, db2vector, elevation).| [Foursquare](<https://developer.foursquare.com/>) — Location discovery, venue search, and context-aware content from Places API and Pilgrim SDK.|
| [geoapify.com](<https://www.geoapify.com/>) — Vector and raster map tiles, geocoding, places, routing, isolines APIs. Three thousand free requests/day.| [geocod.io](<https://www.geocod.io/>) — Geocoding via API or CSV Upload. Two thousand five hundred free queries/day.|
| [geocodify.com](<https://geocodify.com/>) — Geocoding and Geoparsing via API or CSV Upload. 10k free queries/month.| [geojs.io](<https://www.geojs.io/>) — Highly available REST/JSON/JSONP IP Geolocation lookup API.|
| [Geokeo api](<https://geokeo.com>) — Geocoding API with language correction and more. 2,500 free daily queries.| [graphhopper.com](<https://www.graphhopper.com/>) — A free developer package is offered for Routing, Route Optimization, Distance Matrix, Geocoding, and Map Matching.|
| [here](<https://developer.here.com/>) — APIs and SDKs for maps and location-aware apps. 250k transactions/month for free.| [ipstack](<https://ipstack.com/>) — Locate and identify Website Visitors by IP Address.|
| [LatLng](<https://www.latlng.work>) — Geocoding, reverse geocoding, places, static maps, and vector map tiles APIs. Free tier includes 3,000 geocoding requests/day, 300 reverse geocoding requests/day, and 100 static map images/day.| [locationiq.com](<https://locationiq.com/>) — Geocoding, Maps, and Routing APIs. Five thousand requests/day for free.|
| [mapbox.com](<https://www.mapbox.com/>) — Maps, geospatial services and SDKs for displaying map data.| [maps.stamen.com](<https://maps.stamen.com/>) — Free map tiles and tile hosting.|
| [maptiler.com](<https://www.maptiler.com/cloud/>) — Vector maps, map services and SDKs for map visualization. Free vector tiles with weekly updates and four map styles.| [nominatim.org](<https://nominatim.org/>) — OpenStreetMap's free geocoding service, providing global address search functionality and reverse geocoding capabilities.|
| [opencagedata.com](<https://opencagedata.com>) — Geocoding API aggregating OpenStreetMap and other open geo sources. Two thousand five hundred free queries/day.| [osmnames](<https://osmnames.org/>) — Geocoding, search results ranked by the popularity of related Wikipedia page.|
| [positionstack](<https://positionstack.com/>) — Free geocoding for global places and coordinates. 25,000 Requests per month for personal use.| [stadiamaps.com](<https://stadiamaps.com/>) — Map tiles, routing, navigation, and other geospatial APIs. Two thousand five hundred free map views and API requests/day for non-commercial usage and testing.|

[Back to top](#free-resource-catalog)

#### Monitoring


| Resource and free-tier context | Resource and free-tier context |
|---|---|
| [Pingzo](<https://www.pingzoapp.com>) — Free tier offers 1 uptime/API monitor with 15-minute check intervals and instant email alerts.| [Accesserty Pulse](<https://accesserty.com/en/pulse>) — Accesserty Pulse monitors interaction signals and detectable accessibility risks on live websites. Free plans for everyone and 14-day Pro trial.|
| [AlertKick](<https://www.alertkick.com>) — server security (eBPF agent for Linux), uptime monitoring, on-call alerting/status pages in one product. Free tier includes 10 uptime monitors and heartbeats, 5-minute check intervals, 7-day retention.| [assertible.com](<https://assertible.com>) — Automated API testing and monitoring. Free plans for teams and individuals.|
| [Better Stack](<https://betterstack.com/better-uptime>) — Uptime monitoring, incident management, on-call scheduling/alerting, and status pages in a single product. The free plan includes ten monitors with 3-minute check frequency and status pages.| [bleemeo.com](<https://bleemeo.com>) — Free for 3 servers, 5 uptime monitors, unlimited users, unlimited dashboards, unlimited alerting rules.|
| [Core Web Vitals History](<https://punits.dev/core-web-vitals-historical/>) — Find Core Web Vitals history for a url or a website.| [cronitor.io](<https://cronitor.io/>) — Performance insights and uptime monitoring for cron jobs, websites, APIs and more. A free tier with five monitors.|
| [datadoghq.com](<https://www.datadoghq.com/>) — Free for up to 5 nodes.| [deadmanssnitch.com](<https://deadmanssnitch.com/>) — Monitoring for cron jobs. One free snitch (monitor), more if you refer others to sign up.|
| [downtimemonkey.com](<https://downtimemonkey.com/>) — 60 uptime monitors, 5-minute interval.| [drumbeats.io](<https://drumbeats.io/>) — Cron, heartbeat, and uptime monitoring with incident management and status pages. Free for up to 50 monitors with 1-min interval and unlimited team seats.|
| [economize.cloud](<https://economize.cloud>) — Economize helps demystify cloud infrastructure costs by organizing cloud resources to optimize and report the same. Free for up to $5,000 spent on Google Cloud Platform every month.| [fivenines.io](<https://fivenines.io/>) — Linux server monitoring with real‑time dashboards and alerting - free forever for up to 5 monitored servers at 60-seconds interval.|
| [FlareWarden](<https://flarewarden.com>) — Uptime, content, dependency, and SSL monitoring with multi-region verification and status pages. Free plan includes 15 monitors, 5-minute checks, and 90 days of history.| [Grafana Cloud](<https://grafana.com/products/cloud/>) — Grafana Cloud is a composable observability platform that integrates metrics and logs with Grafana. Free: 3 users, ten dashboards, 100 alerts, metrics storage in Prometheus and Graphite (10,000 series, 14 days retention), logs storage in Loki (50 GB of logs, 14 days retention).|
| [healthchecks.io](<https://healthchecks.io>) — Monitor your cron jobs and background tasks. Free for up to 20 checks.| [incidenthub.cloud](<https://incidenthub.cloud/>) — Cloud and SaaS status page aggregator - 20 monitors and 2 notification channels (Slack and Discord) are free forever.|
| [inspector.dev](<https://www.inspector.dev>) — A complete Real-Time monitoring dashboard in less than one minute with a free forever tier.| [instatus.com](<https://instatus.com>) — Get a beautiful status page in 10 seconds. Free forever with unlimited subs and unlimited teams.|
| [isitdownstatus.com](<https://isitdownstatus.com>) — Free public JSON API returning real-time status for 500+ popular services (GitHub, Stripe, AWS, etc.).| [linkok.com](<https://linkok.com>) — Online broken link checker, free for small websites up to 100 pages, completely free for open-source projects.|
| [loader.io](<https://loader.io/>) — Free load testing tools with limitations.| [MarionetteOps.com](<https://www.marionetteops.com/>) — Server monitoring, public status pages, and service uptime monitoring.|
| [Middleware.io](<https://middleware.io/>) — Middleware observability platform provides complete visibility into your apps & stack, so you can monitor & diagnose issues at scale.. Free tier: They have a free forever plan for Dev community use that allows Log monitoring for up to 1M log events, Infras…| [MonitorMonk](<https://monitormonk.com>) — Minimalist uptime monitoring with beautiful status pages. The Forever Free plan offers HTTPS, Keyword, SSL and Response-time monitorming for 10 websites or api-endpoints, and provides 2 dashboards/status pages.|
| [netdata.cloud](<https://www.netdata.cloud/>) — Netdata is an open-source tool to collect real-time metrics.| [newrelic.com](<https://www.newrelic.com>) — New Relic observability platform built to help engineers create more perfect software. The free tier offers 100GB/month of free data ingest, one free full-access user, and unlimited free primary users.|
| [OnlineOrNot.com](<https://onlineornot.com/>) — OnlineOrNot provides uptime monitoring for websites and APIs, monitoring for cron jobs and scheduled tasks. The first five checks with a 3-minute interval are free.| [OntarioNet.ca CN Test](<https://cntest.ontarionet.ca>) — Check if a website is blocked in China by the Great Firewall.|
| [pagecrawl.io](<https://pagecrawl.io/>) — Monitor website changes, free for up to 6 monitors with daily checks.| [pagertree.com](<https://pagertree.com/>) — Simple interface for alerting and on-call management. Free up to 5 users.|
| [phare.io](<https://phare.io/>) — Uptime Monitoring free for up to 100,000 events for unlimited projects and unlimited status pages.| [pingbreak.com](<https://pingbreak.com/>) — Modern uptime monitoring service. Check unlimited URLs and get downtime notifications via Discord, Slack, or email.|
| [Pingmeter.com](<https://pingmeter.com/>) — 5 uptime monitors with 10-minute interval.| [pingpong.one](<https://pingpong.one/>) — Advanced status page platform with monitoring. The free tier includes one public customizable status page with an SSL subdomain.|
| [Prismix](<https://prismix.dev>) — Free REST API (GET /api/v1/statuses) returning real-time operational status for 75+ AI services including OpenAI, Anthropic, Gemini, Mistral, and more.| [Pulsetic](<https://pulsetic.com>) — 10 monitors, 6 Months of historical Uptime/Logs, unlimited status pages, and custom domains included! For infinite time and unlimited email alerts for free.|
| [robusta.dev](<https://home.robusta.dev/>) — Powerful Kubernetes monitoring based on Prometheus. The free tier includes up to 20 Kubernetes nodes.| [Runframe](<https://runframe.io/>) — On-call alerting, incident management, and public/private status pages. The free plan includes up to 5 users, 1 team, 1 on-call schedule, basic status pages, incident lifecycle, and Slack-native incident response.|
| [Servervana](<https://servervana.com>) — Advanced uptime monitoring with support for large projects and teams. The free tier includes 10 HTTP monitors, 1 DNS monitor and one status page.| [Simple Observability](<https://simpleobservability.com>) — Powerful server monitoring in a unified platform for metrics and logs, with no setup complexity. Free for one server.|
| [sitesure.net](<https://sitesure.net>) — Website and cron monitoring - 2 monitors free.| [skylight.io](<https://www.skylight.io/>) — Free for first 100,000 requests (Rails only).|
| [statuscake.com](<https://www.statuscake.com/>) — Website monitoring, unlimited tests free with limitations.| [statusgator.com](<https://statusgator.com/>) — Status page monitoring, 3 monitors free.|
| | [superlog.sh](<https://superlog.sh/>) — Open-source OpenTelemetry observability (traces, logs, and metrics) with AI-agent incident investigation. The free tier includes 1M spans, 5M logs, and 10M metric points per month with 30-day retention, no credit card required.|
| [SweetUptime](<https://dicloud.net/sweetuptime-server-uptime-monitoring/>) — Server monitoring, uptime monitoring, DNS & domain monitoring. Monitor 10 server, 10 uptime, and 10 domain for free.| [syagent.com](<https://syagent.com/>) — Noncommercial free server monitoring service, alerts and metrics.|
| [UptimeObserver.com](<https://uptimeobserver.com>) — Get 20 uptime monitors with 5-minute intervals and a customizable status page-even for commercial use. Enjoy unlimited, real-time notifications via email and Telegram.| [uptimetoolbox.com](<https://uptimetoolbox.com/>) — Free monitoring for five websites, 3-minute intervals, public statuspage.|
| [Wachete](<https://www.wachete.com>) — monitor five pages, checks every 24 hours.| [Xitoring.com](<https://xitoring.com/>) — Uptime monitoring: 20 free, Linux and Windows Server monitoring: 5 free, Status page: 1 free - Mobile app, multiple notification channel, and much more!|
| [UptimeRobot](<https://uptimerobot.com/>) — Free uptime monitoring for hobby projects. Includes 50 monitors with 5-minute check intervals, supports HTTP, ping, port, and keyword monitoring.| [Prometheus](<https://prometheus.io/>) — Free, open-source monitoring and alerting toolkit for time-series data, widely used in cloud and microservices environments.|
| [Zabbix](<https://www.zabbix.com/>) — Free and open-source monitoring tool for network, server, and application metrics with real-time alerting.| [Grafana Cloud](<https://grafana.com>) — Free tier includes 10k active series for metrics, 50 GB logs, and 50 GB traces, all with customizable dashboards.|
| [Checkmk](<https://www.checkmk.com/>) — Open-source monitoring solution with free tiers for small environments.| [Healthchecks.io](<https://www.healthchecks.io/>) — Free service to monitor cron jobs, background tasks, and more. Unlimited free checks.|
| [OpsDash](<https://opsdash.com/>) — Self-hosted server, cluster, and service monitoring, free for up to 5 servers and 5 services.| [thousandeyes.com](<https://www.thousandeyes.com/>) — Network and user experience monitoring. 3 locations and 20 data feeds of major web services free.|

[Back to top](#free-resource-catalog)

#### Log Management


| Resource and free-tier context | Resource and free-tier context |
|---|---|
| [bugfender.com](<https://bugfender.com/>) — Free up to 100k log lines/day with 24 hours retention.| [log.dog](<https://log.dog/>) — LogDog is a remote debugging/logging SDK (iOS and Android) with a web ui. Captures all logs, requests and events in real-time and allows to intercept them.|
| [logflare.app](<https://logflare.app/>) — Free for up to 12,960,000 entries per app per month, 3 days retention.| [logtail.com](<https://logtail.com/>) — ClickHouse-based SQL-compatible log management. Free up to 1 GB per month, three days retention.|
| [logzab.com](<https://logzab.com/>) — Audit trail management system. Free 1,000 user activity logs per month, 1-month retention, for up to 5 projects.| [ManageEngine Log360 Cloud](<https://www.manageengine.com/cloud-siem/>) — Log Management service powered by Manage Engine. Free Plan offers 50 GB storage with 15 days Storage Retention and 7 days search.|
| [openobserve.ai](<https://openobserve.ai/>) — 200 GB Ingestion/month free, 15 Days Retention.| [Smart Grow Logs](<https://logs.smart-grow.app/>) — Centralized log management platform with end-to-end encryption, real-time alerts, and multi-platform SDKs. Free tier includes up to 3.000 logs per day.|
| [Papertrail](<https://www.papertrail.com/>) — Free tier includes 48 hours search and 7 days archive, with 100 MB/month of log data.| [Splunk](<https://www.splunk.com/>) — Free tier includes 24 hours search and 7 days archive, with 1 GB/month of log data.|
| [Logz.io](<https://logz.io/>) — Free plan includes 1 GB/day of log ingestion with 3-day retention, ideal for small-scale projects.| [LogDNA](<https://www.logdna.com/>) — Free tier includes 1 GB/day of log ingestion with 7-day retention, ideal for small-scale projects.|
| [Graylog](<https://www.graylog.org/>) — Free tier includes 1 GB/day of log ingestion with 7-day retention, ideal for small-scale projects.| [Sumo Logic](<https://www.sumologic.com/>) — Free tier offers 500 MB/day of log ingestion with 7-day retention, good for small teams and projects.|
| [sematext.com](<https://sematext.com/>) — Free tier offers 500 MB/day of log ingestion with 7-day retention, good for small teams and projects.| [Elastic](<https://www.elastic.co/>) — Free tier offers 1 GB of log ingestion per month and a 7-day retention window.|
| [Fluentd](<https://github.com/fluent/fluentd>) — Free tier offers 1 GB of log ingestion per month and a 7-day retention window.|  |

[Back to top](#free-resource-catalog)

#### Crash and Exception Handling


| Resource and free-tier context | Resource and free-tier context |
|---|---|
| [Axiom](<https://axiom.co/>) — Store up to 0.5 TB of logs with 30-day retention.| [Bugsink](<https://www.bugsink.com/>) — Error-tracking with Sentry-SDK compatibility. Free for up to 5,000 errors/month, or unlimited use when self-hosted.|
| [bugsnag.com](<https://www.bugsnag.com/>) — Free for up to 2,000 errors/month after the initial trial.| [CatchJS.com](<https://catchjs.com/>) — JavaScript error tracking with screenshots and click trails. Free for open-source projects.|
| [elmah.io](<https://elmah.io/>) — Error logging and uptime monitoring for web developers. Free Small Business subscription for open-source projects.| [Embrace](<https://embrace.io/>) — Mobile app monitoring. Free for small teams with up to 1 million user sessions per year.|
| [exceptionless](<https://exceptionless.com>) — Real-time error, feature, log reporting, and more. Free for 3k events per month/1 user.| [GlitchTip](<https://glitchtip.com/>) — Simple, open-source error tracking. 1000 events per month for free, or can self-host with no limits.|
| [honeybadger.io](<https://www.honeybadger.io>) — Exception, uptime, and cron monitoring. Free for small teams and open-source projects (12,000 errors/month).| [Jam](<https://jam.dev>) — Developer friendly bug reports in one click. Free plan with unlimited jams.|
| [memfault.com](<https://memfault.com>) — Cloud device observability and debugging platform. 100 devices free for Nordic, NXP, and Laird devices.| [Nordic](<https://app.memfault.com/register-nordic>) — memfault.com - Cloud device observability and debugging platform. 100 devices free for Nordic, NXP, and Laird devices. |
| [NXP](<https://app.memfault.com/register-nxp>) — memfault.com - Cloud device observability and debugging platform. 100 devices free for Nordic, NXP, and Laird devices. | [Laird](<https://app.memfault.com/register-laird>) — memfault.com - Cloud device observability and debugging platform. 100 devices free for Nordic, NXP, and Laird devices. |
| [rollbar.com](<https://rollbar.com/>) — Exception and error monitoring, free plan with 5,000 errors/month, unlimited users, 30 days retention.| [Semaphr](<https://semaphr.com>) — Free all-in-one kill switch for your mobile apps.|
| [sentry.io](<https://sentry.io/>) — Sentry tracks app exceptions in real-time and has a small free plan. Free for 5k errors per month/ 1 user, unrestricted use if self-hosted.| [Whitespace](<https://whitespace.dev>) — One-click bug reports straight in your browser. Free plan with unlimited recordings for personal use.|

[Back to top](#free-resource-catalog)

#### Search


| Resource and free-tier context | Resource and free-tier context |
|---|---|
| [algolia.com](<https://www.algolia.com/>) — Hosted search solution with typo-tolerance, relevance, and UI libraries to easily create search experiences. The free "Build" plan includes 1M documents and 10K searches/month.| [developer documentation search](<https://docsearch.algolia.com/>) — algolia.com - Hosted search solution with typo-tolerance, relevance, and UI libraries to easily create search experiences. The free "Build" plan includes 1M documents and 10K searches/month.|
| [bonsai.io](<https://bonsai.io/>) — Free 1 GB memory and 1 GB storage.| [CommandBar](<https://www.commandbar.com/>) — Unified Search Bar as-a-service, web-based UI widget/plugin that allows your users to search contents, navigations, features, etc. within your product, which helps discoverability.|
| [searchly.com](<https://www.searchly.com/>) — Free 2 indices and 20 MB storage.|  |

[Back to top](#free-resource-catalog)

#### Messaging and Streaming


| Resource and free-tier context | Resource and free-tier context |
|---|---|
| [Ably](<https://www.ably.com/>) — Realtime messaging service with presence, persistence and guaranteed delivery. The free plan includes 3m messages per month, 100 peak connections, and 100 peak channels.| [cloudamqp.com](<https://www.cloudamqp.com/>) — RabbitMQ as a Service. Little Lemur plan: max 1 million messages/month, max 20 concurrent connections, max 100 queues, max 10,000 queued messages, multiple nodes in different AZ's.|
| [courier.com](<https://www.courier.com/>) — Single API for push, in-app, email, chat, SMS, and other messaging channels with template management and other features. The free plan includes 10,000 messages/mo.| [EMQX Serverless](<https://www.emqx.com/en/cloud/serverless-mqtt>) — Scalable and secure serverless MQTT broker you can get in seconds. 1M session minutes/month free forever (no credit card required).|
| [Engage](<https://engage.so/>) — All-in-one Customer Engagement and Automation Tool (email, push, SMS, product tours, banners and more) for SaaS. Free for up to 1,000 active users per month.| [engagespot.co](<https://engagespot.co/>) — Multi-channel notification infrastructure for developers with a prebuilt in-app inbox and no-code template editor. Free plan includes 10,000 messages/mo.|
| [HiveMQ](<https://www.hivemq.com/mqtt-cloud-broker/>) — Connect your MQTT devices to the Cloud Native IoT Messaging Broker. Free to connect up to 100 devices (no credit card required) forever.| [httpSMS](<https://httpsms.com>) — Send and receive text messages using your Android phone as an SMS Gateway. Free to send and receive up to 200 messages per month.|
| [knock.app](<https://knock.app>) — Notifications infrastructure for developers. The free plan includes 10,000 messages/mo.| [Novu.co](<https://novu.co>) — The open-source notification infrastructure for developers. The free plan includes 30,000 notifications/month with 90 days of retention.|
| [Pingram.io](<https://www.pingram.io/>) — Communication infrastructure in 5 minutes. Free tier includes: 100 SMS and calls, 3000 Emails, Push, Slack, MS Teams, WhatsApp, and more.| [Pocket Alert](<https://pocketalert.app>) — Send push notifications to your iOS and Android devices. Free plan: 50 messages per day to 1 device and 1 application.|
| [pubnub.com](<https://www.pubnub.com/>) — Free push notifications for up to 1 million messages/month and 100 active daily devices.| [pusher.com](<https://pusher.com/>) — Realtime messaging service. Free for up to 100 simultaneous connections and 200,000 messages/day.|
| [scaledrone.com](<https://www.scaledrone.com/>) — Realtime messaging service. Free for up to 20 simultaneous connections and 100,000 events/day.| [SMSGate](<https://sms-gate.app>) — SMS Gateway for Android™ enables sending and receiving SMS messages through your devices using cloud routing. Completely free cloud service (with recommended notification for usage above 10,000 messages/day to maintain quality for all users).|
| [SuprSend](<https://www.suprsend.com/>) — SuprSend is a notification infrastructure that streamlines your product notifications with an API-first approach.. Free tier: In free plan you get 10,000 notifications per month, including different workflow nodes such as digests, batch…| [synadia.com](<https://synadia.com/ngs>) — NATS.io as a service. Free forever with 4k msg size, 50 active connections, and 5GB of data per month.|
| [NATS.io](<https://nats.io>) — synadia.com - NATS.io as a service. Free forever with 4k msg size, 50 active connections, and 5GB of data per month.| [webpushr](<https://www.webpushr.com/>) — Web Push Notifications - Free for upto 10k subscribers, unlimited push notifications, in-browser messaging.|
| [vask](<https://vask.dev>) — Realtime messaging service, Pusher-compatible. Dev tier is limited to local development only and free with 100 concurrent connections, 1,000,000 broadcasts/month, unlimited client events, 32kb message size.|  |

### Security, Identity & Governance

[Back to top](#free-resource-catalog)

#### Security and PKI


| Resource and free-tier context | Resource and free-tier context |
|---|---|
| [aikido.dev](<https://www.aikido.dev>) — All-in-one appsec platform covering SCA, SAST, CSPM, DAST, Secrets, IaC, Malware, Container scanning, EOL,... Free plan includes two users, scanning of 10 repos, 1 cloud, 2 containers & 1 domain.| [CertKit](<https://www.certkit.io/certificate-management>) — Manage SSL Certificate issuance, renewal, and monitoring. Free for 3 certificates and 1 user after the beta.|
| [CertObserver CT Search](<https://certobserver.com/ct-search>) — Find public SSL/TLS certificates recorded in Certificate Transparency logs. CT search is free but CT monitoring is not.| [CertPost](<https://www.certpost.ai>) — Live SSL/TLS certificate monitoring on port 443 or custom ports (SMTP/IMAP). Free tier includes 3 certificates monitored forever.|
| [Corgea](<https://corgea.com/>) — Free autonomous security platform that finds, validates and fixes insecure code and packages across +20 languages and frameworks.| [crypteron.com](<https://www.crypteron.com/>) — Cloud-first, developer-friendly security platform prevents data breaches in .NET and Java applications.|
| [CyberChef](<https://gchq.github.io/CyberChef/>) — A simple, intuitive web app for analyzing and decoding/encoding data without dealing with complex tools or programming languages. All features are free to use, with no limit.| [Datree](<https://www.datree.io/>) — Open Source CLI tool to prevent Kubernetes misconfigurations by ensuring that manifests and Helm charts follow best practices as well as your organization’s policies.|
| [Dependabot](<https://dependabot.com/>) — Automated dependency updates for Ruby, JavaScript, Python, PHP, Elixir, Rust, Java (Maven and Gradle), .NET, Go, Elm, Docker, Terraform, Git Submodules, and GitHub Actions.| [DJ Checkup](<https://djcheckup.com>) — Scan your Django site for security flaws with this free, automated checkup tool.|
| [Doppler](<https://doppler.com/>) — Universal Secrets Manager for application secrets and config, with support for syncing to various cloud providers. Free for five users with basic access controls.| [Dotenv](<https://dotenv.org/>) — Sync your .env files, quickly & securely. Free for up to 3 teammates.|
| [GitGuardian](<https://www.gitguardian.com>) — Keep secrets out of your source code with automated secrets detection and remediation. Scan your git repos for 350+ types of secrets and sensitive files - Free for individuals and teams of 25 developers or less.| [HasMySecretLeaked](<https://gitguardian.com/hasmysecretleaked>) — Search across 20 million exposed secrets in public GitHub repositories, gists, issues,and comments for Free.|
| [Have I been pwned?](<https://haveibeenpwned.com>) — REST API for fetching the information on the breaches.| [HimitsuShell](<https://himitsushell.com>) — A shell script DRM compiler that converts shell scripts into obfuscated binaries using an embedded shell interpreter and anti-debugging (alternative to shc). Free unlimited web edition.|
| [hostedscan.com](<https://hostedscan.com>) — Online vulnerability scanner for web applications, servers, and networks. Ten free scans per month.| [Infisical](<https://infisical.com/>) — Open source platform that lets you manage developer secrets across your team and infrastructure: everywhere from local development to staging/production 3rd-party services.|
| [inspect.software](<https://inspect.software/>) — Public record of automated open-source repository audits: security posture, maintainability, dependency health, and malicious-package checks, with a v. Free tier: Free tier: full access to all published reports, automatic coverage of repositories above the public-interest…| [Internet.nl](<https://internet.nl>) — Test for modern Internet Standards like IPv6, DNSSEC, HTTPS, DMARC, STARTTLS and DANE.|
| [IntoDNS.ai](<https://intodns.ai>) — DNS and email security analyzer that checks SPF, DKIM, DMARC, DNSSEC, BIMI, MTA-STS, and 40+ blacklists with AI-powered explanations and fix suggestions. 100% free, no signup required.| [letsencrypt.org](<https://letsencrypt.org/>) — Free SSL Certificate Authority with certs trusted by all major browsers.|
| [meterian.io](<https://www.meterian.io/>) — Monitor Java, Javascript, .NET, Scala, Ruby, and NodeJS projects for security vulnerabilities in dependencies. Free for one private project, unlimited projects for open source.| [Mozilla Observatory](<https://observatory.mozilla.org/>) — Find and fix security vulnerabilities in your site.|
| [Otterwatch](<https://otterwatch.dev/>) — Daily SSL/TLS certificate monitoring: expiry alerts (30/7/1 day), chain and OCSP revocation checks, and certificate transparency issuance history.| [Protectumus](<https://protectumus.com>) — Free website security check, site antivirus, and server firewall (WAF) for PHP. Email notifications for registered users in the free tier.|
| [Public Cloud Threat Intelligence](<https://cloudintel.himanshuanand.com/>) — High-confidence cloud threat intelligence with public-cloud IOCs; the full list is available through the API.| [github.com](<https://github.com/unknownhad/AWSAttacks>) — Public-cloud attack indicators and research dataset.|
| [pyup.io](<https://pyup.io>) — Monitor Python dependencies for security vulnerabilities and update them automatically. Free for one private project, unlimited projects for open source.| [qualys.com](<https://www.qualys.com/community-edition>) — Find web app vulnerabilities, audit for OWASP Risks.|
| [SikkerKey](<https://sikkerkey.com>) — Machine authenticated secrets manager, includes 2 projects, 2 bootstrapped machines, 20 secrets and 7 days audit log retention for free.| [Smart Grow Vault](<https://vault.smart-grow.app/>) — Secure Enterprise-grade platform for managing environment variables and secrets. Free tier includes up to 3 applications and 150 secrets per project.|
| [Socket](<https://socket.dev>) — Free supply chain security for individual developers, small teams, and open source projects. Includes a free app and firewall CLI tool to protect your code from vulnerable and malicious dependencies.| [ssllabs.com](<https://www.ssllabs.com/ssltest/>) — Intense analysis of the configuration of any SSL web server.|
| [Sucuri SiteCheck](<https://sitecheck.sucuri.net>) — Free website security check and malware scanner.| [TestTLS.com](<https://testtls.com>) — Test an SSL/TLS service for secure server configuration, certificates, chains, etc. Not limited to HTTPS.|
| [Virgil Security](<https://virgilsecurity.com/>) — Tools and services for implementing end-to-end encryption, database protection, IoT security, and more in your digital solution. Free for applications with up to 250 users.| [Trivy](<https://trivy.dev/>) — Open-source vulnerability scanner for containers, filesystems, Git repositories, and Kubernetes.|
| [Docker Scout](<https://docs.docker.com/scout/>) — Docker image analysis and software supply-chain insights with a free tier.| [OWASP ZAP](<https://www.zaproxy.org/>) — Free, open-source web application security scanner.|
| | [cloudsploit.com](<https://cloudsploit.com/>) — Amazon Web Services (AWS) security and compliance auditing and monitoring.|
| [globalsign.com](<https://www.globalsign.com/en/ssl/ssl-open-source/>) — Free SSL certificates for Open Source.|  |

[Back to top](#free-resource-catalog)

#### Authentication, Authorization, and User Management


| Resource and free-tier context | Resource and free-tier context |
|---|---|
| [360username](<https://360username.com/>) — A free tool to search a username across 90+ social platforms to find matching profiles.| [Aserto](<https://www.aserto.com>) — Fine-grained authorization as a service for applications and APIs. Free up to 1000 MAUs and 100 authorizer instances.|
| [asgardeo.io](<https://wso2.com/asgardeo>) — Seamless Integration of SSO, MFA, passwordless auth and more. Free up to 1000 MAUs and five identity providers.| [Auth0](<https://auth0.com/>) — Hosted SSO. The free plan includes 25,000 MAUs, unlimited Social Connections, a custom domain, and more.|
| [Authgear](<https://www.authgear.com>) — Bring Passwordless, OTPs, 2FA, SSO to your apps in minutes. Free up to 5000 MAUs.| [Authress](<https://authress.io/>) — Authentication login and access control, unlimited identity providers for any project. The first 1000 API calls are free.|
| [Authy](<https://authy.com>) — Two-factor authentication (2FA) on multiple devices, with backups. Free for up to 100 successful authentications.| [Cerbos Hub](<https://www.cerbos.dev/product-cerbos-hub>) — A complete authorization management system for authoring, testing, and deploying access policies. Fine-grained authorization and access control, free up to 100 monthly active principals.|
| [Clerk](<https://clerk.com>) — User management, authentication, 2FA/MFA, prebuilt UI components for sign-in, sign-up, user profiles, and more. Free plan includes unlimited applications, 50,000 MRU limit per app, 3 dashboard seats, and more.| [Cloud-IAM](<https://www.cloud-iam.com/>) — Keycloak Identity and Access Management as a Service. Free up to 100 users and one realm.|
| [Descope](<https://www.descope.com/>) — Highly customizable AuthN flows, has both a no-code and API/SDK approach, Free 7,500 active users/month, 50 tenants (up to 5 SAML/SSO tenants).| [duo.com](<https://duo.com/>) — Two-factor authentication (2FA) for website or app. Free for ten users, all authentication methods, unlimited, integrations, hardware tokens.|
| [Kinde](<https://kinde.com/>) — Simple, robust authentication you can integrate with your product in minutes. Everything you need to get started with 7,500 free MAU.| [logintc.com](<https://www.logintc.com/>) — Two-factor authentication (2FA) by push notifications, free for ten users, VPN, Websites, and SSH.|
| [Logto](<https://logto.io/>) — Develop, secure, and manage user identities of your product - for both authentication and authorization. Free for up to 5,000 MAUs with open-source self-hosted option available.| [MojoAuth](<https://mojoauth.com/>) — MojoAuth makes it easy to implement Passwordless authentication on your web, mobile, or any application in minutes.|
| [Okta](<https://developer.okta.com/signup/>) — User management, authentication and authorization. Free for up to 100 monthly active users.| [Ory](<https://ory.sh/>) — AuthN/AuthZ/OAuth2.0/Zero Trust managed security platform. Forever free developer accounts with all security features, unlimited team members, 200 daily active users, and 25k/mo permission checks.|
| [Permit.io](<https://permit.io>) — Auhtorization-as-a-service provider platform enabling RBAC, ABAC, and ReBAC for scalable microservices with real-time updates and a no-code policy UI. A 1000 Monthly Active User free tier.| [Phase Two](<https://phasetwo.io>) — Keycloak Open Source Identity and Access Management. Free realm up to 1000 users, up to 10 SSO connections, leveraging Phase Two's Keycloak enhanced container which includes the Organization extension.|
| [Organization](<https://phasetwo.io/product/organizations/>) — Phase Two Organizations extension documentation for Keycloak.| [PropelAuth](<https://propelauth.com>) — A Sell to companies of any size immediately with a few lines of code, free up to 200 users and 10k Transactional Emails (with a watermark branding: "Powered by PropelAuth").|
| [Scalekit](<https://scalekit.com>) — Enterprise SSO (SAML, OIDC), SCIM provisioning, and social logins for B2B SaaS. Free tier includes 1 million MAU, 100 organizations, 1 SSO connection, and 1 SCIM connection.| [Stack Auth](<https://stack-auth.com>) — Open-source authentication that doesn't suck. The most developer-friendly solution, getting you started in just five minutes.|
| [Stytch](<https://www.stytch.com/>) — An all-in-one platform that provides APIs and SDKs for authentication and fraud prevention. The free plan includes 10,000 monthly active users, unlimited organizations, 5 SSO or SCIM connections, and 1,000 M2M tokens.| [SuperTokens](<https://supertokens.com/>) — Open source user authentication that natively integrates into your app - enabling you to get started quickly while controlling the user and developer experience.|
| [WorkOS](<https://workos.com/>) — Free user management and authentication for up to 1 Million MAUs.| [ZITADEL Cloud](<https://zitadel.com>) — A turnkey user and access management that works for you and supports multi-tenant (B2B) use cases. Free for up to 25,000 authenticated requests, with all security features (no paywall for OTP, Passwordless, Policies, and so on).|

[Back to top](#free-resource-catalog)

#### Privacy Management


| Resource and free-tier context | Resource and free-tier context |
|---|---|
| [Bearer](<https://www.bearer.sh/>) — Helps implement privacy by design via audits and continuous workflows so that organizations comply with GDPR and other regulations. The free tier is limited to smaller teams and the SaaS version only.| [Concord](<https://www.concord.tech/>) — Full data privacy platform, including consent management, privacy request handling (DSARs), and data mapping. Free tier includes core consent management features and they also provide a more advanced plan for free to verified open source projects.|
| [Cookiefirst](<https://cookiefirst.com/>) — Cookie banners, auditing, and multi-language consent management solution. The free tier offers a one-time scan and a single banner.| [Iubenda](<https://www.iubenda.com/>) — Privacy and cookie policies and consent management. The free tier offers limited privacy and cookie policy as well as cookie banners.|
| [Ketch](<https://www.ketch.com/>) — Consent management and privacy framework tool. The free tier offers most features with a limited visitor count.|  |

### Collaboration & Business Operations

[Back to top](#free-resource-catalog)

#### Tools for Teams and Collaboration


| Resource and free-tier context | Resource and free-tier context |
|---|---|
| [3Cols](<https://3cols.com/>) — A free cloud-based code snippet manager for personal and collaborative code.| [BookmarkOS.com](<https://bookmarkos.com>) — Free all-on-one bookmark manager, tab manager, and task manager in a customizable online desktop with folder collaboration.|
| [Braid](<https://www.braidchat.com/>) — Chat app designed for teams. Free for public access group, unlimited users, history, and integrations.| [Calendly](<https://calendly.com>) — Calendly is the tool for connecting and scheduling meetings. The free plan provides 1 Calendar connection per user and Unlimited sessions.|
| [cally.com](<https://cally.com/>) — Find the perfect time and date for a meeting.| [cDox](<https://cdox.ca>) — Private document editor hosted in Canada. Free plan includes 50 MB storage, up to 3 public links, and export to PDF, Word, and Markdown.|
| [Chanty.com](<https://chanty.com/>) — Chanty is another alternative to Slack. It has a free forever plan for small teams (up to 10) with unlimited public and private conversations, searchable history, unlimited 1:1 audio calls, unlimited voice messages, ten integrations, and 20 GB storage per team.| [DevToolLab](<https://devtoollab.com>) — Online developer tools offering free access to all basic tools, with the ability to auto save one entry per tool, standard processing speed, and community support.|
| [Discord](<https://discord.com/>) — Chat with public/private rooms. Free for unlimited users.| [Dubble](<https://dubble.so/>) — Free Step-by-Step Guide creator.|
| | [element.io](<https://element.io/>) — A decentralized and open-source communication tool built on Matrix.|
| [evernote.com](<https://evernote.com/>) — Tool for organizing information.| [Fibery](<https://fibery.io/>) — Connected workspace platform. Free for single users, up to 2 GB disk space.|
| [Fibo](<https://fibo.dev>) — A free online realtime scrum poker tool for agile teams that lets unlimited members estimate story points for faster planning.| [Fizzy](<https://www.fizzy.do/>) — Kanban-based platform for project management and issue tracking. Create public boards, set up webhooks, use card stamping, and track unlimited users - free for up to 1000 items.|
| [flat.social](<https://flat.social>) — Interactive customizable spaces for team meetings & happy hours socials. Unlimited meetings, free up to 8 concurrent users.| [flock.com](<https://flock.com>) — A faster way for your team to communicate. Free Unlimited Messages, Channels, Users, Apps & Integrations.|
| [GhostChat](<https://ghostchat.dev>) — Privacy-first live chat widget for websites (~15KB, no cookies, no tracking). Free plan includes 1 site, unlimited messages, 30-day history, Gmail threading, canned responses and push notifications.| [GitBook](<https://www.gitbook.com/>) — Platform for capturing and documenting technical knowledge - from product docs to internal knowledge bases and APIs. Free plan for individual developers.|
| [GitDailies](<https://gitdailies.com>) — Daily reports of your team's Commit and Pull Request activity on GitHub. The free tier has unlimited users, three repos, and 3 alert configs.| [gitter.im](<https://gitter.im/>) — Chat, for GitHub. Unlimited public and private rooms, free for teams of up to 25.|
| [gokanban.io](<https://gokanban.io>) — Syntax-based, no registration Kanban Board for fast use. Free with no limitations.| [Hackmd.io](<https://hackmd.io/>) — Real time collaboration & writing tool for markdown format docs/files. Free unlimited number of "notes", but the number of collaborators (invitee) for private notes & template will be limited.|
| [will be limited](<https://hackmd.io/pricing>) — HackMD free-plan collaboration limits.| [HeySpace](<https://hey.space>) — Task management tool with chat, calendar, timeline and video calls. Free for up to 5 users.|
| [Huly](<https://huly.io/>) — All-in-One Project Management Platform (alternative to Linear, Jira, Slack, Notion, Motion) - unlimited users, 10GB storage per workspace, 10GB video(audio) traffic.| [Keybase](<https://keybase.io/>) — Keybase is a FOSS alternative to Slack; it keeps everyone's chats and files safe, from families to communities to companies.|
| [Knocket](<https://trtc.io/solutions/knocket>) — Free-forever contact layer for indie developers and small teams: live chat widget for websites and mobile apps (iOS/Android/Flutter/React Native via WebView), a shareable contact page (Linktree-style with socials, booking links, and blog), and a unified Telegram/email inbox.| [Linkinize](<https://linkinize.com>) — Bookmark manager for teams with tagging, multi-workspaces, and collaboration. Free plan includes 4 workspaces and 10 team members.|
| [Lockitbot](<https://www.lockitbot.com/>) — Reserve and lock shared resources within Slack like Rooms, Dev environments , servers etc. Free for upto 2 resources.| [meet.jit.si](<https://meet.jit.si/>) — One-click video conversations, and screen sharing, for free.|
| [Miro](<https://miro.com/>) — Scalable, secure, cross-device, and enterprise-ready collaboration whiteboard for distributed teams. With a freemium plan.| [Notion](<https://www.notion.so/>) — Notion is a note-taking and collaboration application with markdown support that integrates tasks, wikis, and databases.|
| [Nuclino](<https://www.nuclino.com>) — A lightweight and collaborative wiki for all your team's knowledge, docs, and notes. Free plan with all essential features, up to 50 items, and 5GB storage.| [OnlineInterview.io](<https://onlineinterview.io/>) — Free code interview platform with embedded video chat, drawing board, and online code editor where you can compile and run your code on the browser.|
| [paste.sh](<https://paste.sh/>) — This is a JavaScript and the Crypto based simple paste site.| [Pastefy](<https://pastefy.app/>) — Beautiful and simple Pastebin with optional Client-Encryption, Multitab-Pastes, an API, a highlighted Editor and more.|
| [Pendulums](<https://pendulums.io/>) — Pendulums is a free time tracking tool that helps you manage your time in a better manner with an easy-to-use interface and valuable statistics.| [Proton Pass](<https://proton.me/pass>) — Password manager with built-in email aliases, 2FA authenticator, sharing and passkeys.|
| [Pullflow](<https://pullflow.com>) — Pullflow offers an AI-enhanced platform for code review collaboration across GitHub, Slack, and VS Code.| [Pumble](<https://pumble.com>) — Free team chat app. Unlimited users and message history, free forever.|
| [Quidlo Timesheets](<https://www.quidlo.com/timesheets>) — A simple timesheet and time tracking app for teams. The free plan has time tracking and generating reports features for up to 10 users.| [Raindrop.io](<https://raindrop.io>) — Private and secure bookmarking app for macOS, Windows, Android, iOS, and Web. Free Unlimited Bookmarks and Collaboration.|
| [Reezn.io](<https://reezn.io/>) — Spec-driven development workflow for teams: shifts review left so problems get caught before code is written, instead of piling up in code review. Free plan: 3 seats, 1 project, 5 features/month.| [Revolt.chat](<https://revolt.chat/>) — An OpenSource alternative forDiscord, that respects your privacy. It also have most proprietary features from discord for free.|
| [Rocket.Chat](<https://rocket.chat/>) — Open-source communication platform with Omnichannel features, Matrix Federation, Bridge with others apps, Unlimited messaging, and Full messaging history.| [ruttl.com](<https://ruttl.com/>) — The best all-in-one feedback tool to collect digital feedback and review websites, PDFs, and images.|
| [Screen Sharing via Browser](<https://screensharing.net>) — Free screen sharing tool, share your screen with collabrators right from your browser, no download or registration needed.| [seafile.com](<https://www.seafile.com/>) — Private or cloud storage, file sharing, sync, discussions. The cloud version has just 1 GB.|
| [SiteDots](<https://sitedots.com/>) — Share feedback for website projects directly on your website, no emulation, canvas or workarounds. Completely functional free tier.| [Slab](<https://slab.com/>) — A modern knowledge management service for teams. Free for up to 10 users.|
| [slack.com](<https://slack.com/>) — Free for unlimited users with some feature limitations.| [StatusPile](<https://www.statuspile.com/>) — A status page of status pages.|
| [Stickies](<https://stickies.app/>) — Visual collaboration app used for brainstorming, content curation, and notes. Free for up to 3 Walls, unlimited users, and 1 GB storage.| [MeetBackdrops](<https://meetbackdrops.com>) — Free HD virtual backgrounds for video calls on Zoom, Microsoft Teams, and Google Meet.|
| [talky.io](<https://talky.io/>) — Free group video chat.| [Teamcamp](<https://www.teamcamp.app>) — All-in-one project management application for software development companies.|
| [Teamhood](<https://teamhood.com/>) — Free Project, Task, and Issue-tracking software. Free for five users and three project portfolios.| [Teamplify](<https://teamplify.com>) — improve team development processes with Team Analytics and Smart Daily Standup. Free for small groups of up to 5 users.|
| [Telegram](<https://telegram.org/>) — Telegram is for everyone who wants fast, reliable messaging and calls. Business users and small teams may like the large groups, usernames, desktop apps, and powerful file-sharing options.| [Tencent RTC](<https://trtc.io/>) — Tencent Real-Time Communication (TRTC) offers solutions for group audio/video calls.10,000 free minutes/month for the first year.|
| [TimeCamp](<https://www.timecamp.com/>) — Free time tracking software for unlimited users.| [tldraw.com](<https://tldraw.com>) — Free open-source white-boarding and diagramming tool with intelligent arrows, snapping, sticky notes, and SVG export features.|
| [transfernow](<https://www.transfernow.net/>) — simplest, fastest and safest interface to transfer and share files.| [Tugboat](<https://tugboat.qa>) — Preview every pull request, automated and on-demand. Free for all, complimentary Nano tier for non-profits.|
| [twist.com](<https://twist.com>) — An asynchronous-friendly team communication app where conversations stay organized and on-topic. Free and Unlimited plans are available.| [userforge.com](<https://userforge.com/>) — Interconnected online personas, user stories and context mapping. Helps keep design and dev in sync free for up to 3 personas and two collaborators.|
| [Visual Debug](<https://visualdebug.com>) — A Visual feedback tool for better client-dev communication.| [Webex](<https://www.webex.com/>) — Video meetings with a free plan offering 40 minutes per meeting with 100 attendees.|
| [Webvizio](<https://webvizio.com>) — Website feedback tool, website review software, and bug reporting tool for streamlining web development collaboration on tasks directly on live websites and web apps, images, PDFs, and design files.| [whereby.com](<https://whereby.com/>) — One-click video conversations, for free (formerly known as appear.in).|
| [windmill.dev](<https://windmill.dev/>) — Windmill is an open-source developer platform to quickly build production-grade multi-step automation and internal apps from minimal Python and Typescript scripts. As a free user, you can create and be a member of at most three non-premium workspaces.| [wistia.com](<https://wistia.com/>) — Video hosting with viewer analytics, HD video delivery, and marketing tools to help understand your visitors, 25 videos, and Wistia branded player.|
| [wormhol.org](<https://www.wormhol.org/>) — Straightforward file sharing service. Share unlimited files up to 5GB with as many peers as you want.| [Wormhole](<https://wormhole.app/>) — Share files up to 5GB with end-to-end encryption for up to 24hours. For files larger than 5 GB, it uses peer-to-peer transfer to send your files directly.|
| [zoom.us](<https://zoom.us/>) — Secure Video and Web conferencing add-ons available. The free plan is limited to 40 minutes.| [Zulip](<https://zulip.com/>) — Real-time chat with a unique email-like threading model. The free plan includes 10,000 messages of search history and File storage up to 5 GB.|
| [RightFeature](<https://rightfeature.com/>) — Easily collect feedback from your customers, turn customer feedback into your product roadmap. Collect, prioritize, and ship features that actually matter to your users.| [Zeitio](<https://zeitio.com/>) — Time tracking and invoicing for freelancers and small teams. Free plan includes 1 user, 3 active projects and 3 invoices per month.|
| [teams.microsoft.com](<https://teams.microsoft.com>) — Free plan with unlimited chat and video calling.| [mattermost.com](<https://mattermost.com/>) — Open-source, self-hosted alternative to Slack with DevOps integrations like GitLab and Jenkins. Free plan available for small teams.|
| [rocket.chat](<https://www.rocket.chat/>) — Open-source team communication platform with integrations for GitLab, Jenkins, and other DevOps tools.| [hangouts.google.com](<https://hangouts.google.com/>) — One place for all your conversations, for free, need a Google account.|

[Back to top](#free-resource-catalog)

#### CMS


| Resource and free-tier context | Resource and free-tier context |
|---|---|
| [Contentful](<https://www.contentful.com/>) — Headless CMS. Comes with one free Community space that includes five users, 25K records, 48 Content Types, 2 locales.| [Cosmic](<https://www.cosmicjs.com/>) — Headless CMS and API toolkit. Free personal plans for developers.|
| [Crystallize](<https://crystallize.com>) — Headless PIM with ecommerce support. The free version includes unlimited users, 1000 catalog items, 5 GB/month bandwidth, and 25k/month API calls.| [DatoCMS](<https://www.datocms.com/>) — Offers free tier for small projects. On the lower tier, you have 100k/month calls.|
| [Hygraph](<https://hygraph.com/>) — Offers free tier for small projects.| [Prismic](<https://www.prismic.io/>) — Headless CMS. The Community Plan provides unlimited API calls, documents, custom types, assets, and locales to one user.|
| [Sanity.io](<https://www.sanity.io/>) — Platform for structured content with an open-source editing environment and a real-time hosted data store. Unlimited projects.| [Solo](<https://soloist.ai>) — Free AI website creator from Mozilla, create a beautiful website for your business from a few simple inputs. Free custom domain, no credit card needed.|
| [Squidex](<https://squidex.io/>) — Offers free tier for small projects. Open source and based on event sourcing (versing every change automatically).| [Storyblok](<https://www.storyblok.com>) — A Headless CMS for developers and marketers that works with all modern frameworks.. Free tier: The Community (free) tier offers Management API, Visual Editor, ten sources, Custom Field Types, International…|
| [TinaCMS](<https://tina.io/>) — Replacing Forestry.io. Open source Git-backed headless CMS that supports Markdown, MDX, and JSON.| [WPJack](<https://wpjack.com>) — Set up WordPress on any cloud in less than 5 minutes! The free tier includes 1 server, 2 sites, free SSL certificates, and unlimited cron jobs.|

[Back to top](#free-resource-catalog)

#### Management System


| Resource and free-tier context | Resource and free-tier context |
|---|---|
| [bitnami.com](<https://bitnami.com/>) — Deploy prepared apps on IaaS. Management of 1 AWS micro instance free.| [Esper](<https://esper.io>) — MDM and MAM for Android Devices with DevOps. One hundred devices free with one user license and 25 MB Application Storage.|
| [jamf.com](<https://www.jamf.com/>) — Device management for iPads, iPhones, and Macs, three devices free.| [Miradore](<https://miradore.com>) — Device Management service. Stay up-to-date with your device fleet and secure unlimited devices for free.|
| [ploi.io](<https://ploi.io/>) — Server management tool to easily manage and deploy your servers & sites. Free for one server.| [runcloud.io](<https://runcloud.io/>) — Server management focusing mainly on PHP projects. Free for up to 1 server.|
| [serveravatar.com](<https://serveravatar.com>) — Manage and monitor PHP-based web servers with automated configurations. Free for one server.| [xcloud.host](<https://xcloud.host>) — Server management and deployment platform with a user-friendly interface. Free tier available for one server.|

[Back to top](#free-resource-catalog)

#### Issue Tracking and Project Management


| Resource and free-tier context | Resource and free-tier context |
|---|---|
| [acunote.com](<https://www.acunote.com/>) — Free project management and SCRUM software for up to 5 team members.| [asana.com](<https://asana.com/>) — Free for private project with collaborators.|
| [Backlog](<https://backlog.com>) — Everything your team needs to release great projects in one platform. The free plan offers 1 Project with ten users & 100MB of storage.| [Basecamp](<https://basecamp.com/personal>) — To-do lists, milestone management, forum-like messaging, file sharing, and time tracking. Up to 3 projects, 20 users, and 1GB of storage space.|
| [bitrix24.com](<https://www.bitrix24.com/>) — Intranet and project management tool. The free plan has 5GB for unlimited users.| [cacoo.com](<https://cacoo.com/>) — Online real-time diagrams: flowchart, UML, network. Free max.|
| [clickup.com](<https://clickup.com/>) — Project management. Free, premium version with cloud storage.| [Clockify](<https://clockify.me>) — Time tracker and timesheet app that lets you track work hours across projects. Unlimited users, free forever.|
| [Cloudcraft](<https://cloudcraft.co/>) — Design a professional architecture diagram in minutes with the Cloudcraft visual designer, optimized for AWS with intelligent components that show live data too.| [Confluence](<https://www.atlassian.com/software/confluence>) — Atlassian's content collaboration tool is used to help teams collaborate and share knowledge efficiently. Free plan for up to 10 users.|
| [Crosswork](<https://crosswork.app/>) — Versatile project management platform. Free for up to 3 projects, unlimited users, 1 GB storage.| [diagrams.net](<https://app.diagrams.net/>) — Online diagrams stored locally in Google Drive, OneDrive, or Dropbox. Free for all features and storage levels.|
| [easyretro.io](<https://www.easyretro.io/>) — Simple and intuitive sprint retrospective tool. The free plan has three public boards and one survey per board per month.| [freedcamp.com](<https://freedcamp.com/>) — tasks, discussions, milestones, time tracking, calendar, files and password manager. Free plan with unlimited projects, users, and file storage.|
| [GForge](<https://gforge.com>) — Project Management and issue Tracking toolset for complex projects with self-premises and SaaS options. SaaS free plan offers the first five users free & free for Open Source Projects.| [gleek.io](<https://www.gleek.io>) — Free description-to-diagrams tool for developers.|
| [GraphQL Inspector](<https://github.com/marketplace/graphql-inspector>) — GraphQL Inspector outputs a list of changes between two GraphQL schemas.| [Helploom](<https://helploom.com>) — Customer support software that offers a live chat on the free forever plan.|
| [HeyRetro](<https://heyretro.io/>) — Real-time sprint retrospective platform with voting, timers, surveys, guest collaboration, and ice-breaker games. The forever-free plan includes one board per month, anonymous surveys, and guest link sharing.| [Hygger](<https://hygger.io>) — Project management platform. The free plan offers unlimited users, projects & boards with 100 MB of Storage.|
| [Ilograph](<https://www.ilograph.com/>) — interactive diagrams that allow users to see their infrastructure from multiple perspectives and levels of detail. The free tier has unlimited private diagrams with up to 3 viewers.| [Jira](<https://www.atlassian.com/software/jira>) — Advanced software development project management tool used in many corporate environments. Free plan for up to 10 users.|
| [kan.bn](<https://kan.bn/>) — A powerful, flexible kanban app that helps you organise work, track progress, and deliver results-all in one place. Free plan up to 1 user for unlimited boards, unlimited lists, unlimited cards.| [kanbanflow.com](<https://kanbanflow.com/>) — Board-based project management. Free, premium version with more options.|
| [kanbantool.com](<https://kanbantool.com/>) — Kanban board-based project management. The free plan has two boards and two users, without attachments or files.| [Kitemaker.co](<https://kitemaker.co>) — Collaborate through all phases of the product development process and keep track of work across Slack, Discord, Figma, and Github. Unlimited users, unlimited spaces.|
| [Kiter.app](<https://www.kiter.app/>) — Let anyone organize their job search and track interviews, opportunities, and connections. Completely free.| [Kumu.io](<https://kumu.io/>) — Relationship maps with animation, decorations, filters, clustering, spreadsheet imports, etc. The free tier allows unlimited public projects.|
| [leiga.com](<https://www.leiga.com/>) — Leiga is a SaaS product that uses AI to automatically manage your projects, helping your team stay focused and unleash immense potential, ensuring you. Free tier: Free for up to 10 users, 20 custom fields, 2GB of storage space, Video Recording with AI limited to 5 mins/vid…| [Linear](<https://linear.app/>) — Issue tracker with a streamlined interface. Free for unlimited members, up to 10MB file upload size, 250 issues (excluding Archive).|
| [Lucidchart](<https://www.lucidchart.com/>) — An online diagram tool with collaboration features. Free plan with three editable documents, 100 professional templates, and basic collaboration features.| [MeisterTask](<https://www.meistertask.com/>) — Online task management for teams. Free up to 3 projects and unlimited project members.|
| [MeuScrum](<https://www.meuscrum.com/en>) — Free online scrum tool with kanban board.| [nTask](<https://www.ntaskmanager.com/>) — Project management software that enables your teams to collaborate, plan, analyze, and manage everyday tasks. The essential plan is free forever with 100 MB storage and five users/teams.|
| [Plane](<https://plane.so/>) — Plane is a simple, extensible, open-source project and product management tool. Free for unlimited members, up to 5MB file upload size, 1000 issues.| [planitpoker.com](<https://www.planitpoker.com/>) — Free online planning poker (estimation tool).|
| [point.poker](<https://www.point.poker/>) — Online Planning Poker (consensus-based estimation tool). Free for unlimited users, teams, sessions, rounds, and votes.| [Pulse.red](<https://pulse.red>) — Free Minimalistic Time Tracker and Timesheet app for projects.|
| [ScrumFast](<https://www.scrumfast.com>) — Scrum board with a very intuitive interface, free up to 5 users.| [Sflow](<https://sflow.io>) — sflow.io is a project management tool built for agile software development, marketing, sales, and customer support, especially for outsourcing and cross-organization collaboration projects. Free plan up to 3 projects and five members.|
| [Shake](<https://www.shakebugs.com/>) — In-app bug reporting and feedback tool for mobile apps. Free plan, ten bug reports per app/month.| [Shortcut](<https://shortcut.com/>) — Project management platform. Free for up to 10 users forever.|
| [taiga.io](<https://taiga.io/>) — Project management platform for startups and agile developers, free for Open Source.| [taskade.com](<https://www.taskade.com/>) — Real-time collaborative task lists and team outlines. The free plan has one workspace with unlimited tasks and projects; 1GB file storage; 1-week project history; and five attendees per video meeting.|
| [Teaminal](<https://www.teaminal.com>) — Standup, retro, and sprint planning tool for remote teams. Free for up to 15 users.| [teamwork.com](<https://teamwork.com/>) — Project management & Team Chat. Free for five users and two projects.|
| [teleretro.com](<https://www.teleretro.com/>) — Simple and fun retrospective tool with icebreakers, gifs and emojis. The free plan includes three retros and unlimited members.| [Tenzu](<https://tenzu.net/>) — Lightweight project management tool for agile teams. The SaaS relies on free contributions; users can always choose to give 0 and there is no features paywall {more details}.|
| [more details](<https://tenzu.net/pricing/>) — Tenzu free-contribution and pricing details.| [titanapps.io](<https://titanapps.io/>) — productivity tools for Jira and monday.com offering structured checklists, templates, and approvals inside issues/tasks. Free plan available for small teams.|
| [todoist.com](<https://todoist.com/>) — Collaborative and individual task management. The free plan has: 5 active projects, five users in the project, file uploading up to 5MB, three filters, and one week of activity history.| [Toggl](<https://toggl.com/>) — Provides two free productivity tools. Toggl Track for time management and tracking app with a free plan provides seamless time tracking and reporting designed with freelancers in mind.|
| [Toggl Track](<https://toggl.com/track/>) — Toggl Track free time-tracking details.| [Toggl Plan](<https://toggl.com/plan/>) — Toggl Plan free task-planning details.|
| [trello.com](<https://trello.com/>) — Board-based project management. Unlimited Personal Boards, 10 Team Boards.| [Tweek](<https://tweek.so/>) — Simple Weekly To-Do Calendar & Task Management.|
| [Wikifactory](<https://wikifactory.com/>) — Product designing Service with Projects, VCS & Issues. The free plan offers unlimited projects & collaborators and 3GB storage.| [Yodiz](<https://www.yodiz.com/>) — Agile development and issue tracking. Free up to 3 users, unlimited projects.|
| [YouTrack](<https://www.jetbrains.com/youtrack/buy/#edition=incloud>) — Free hosted YouTrack (InCloud) for FOSS projects and private projects (free for three users).| [zenhub.com](<https://www.zenhub.com>) — The only project management solution inside GitHub. Free for public repos, OSS, and nonprofit organizations.|
| [zenkit.com](<https://zenkit.com>) — Project management and collaboration tool. Free for up to 5 members, 5 GB attachments.| [Zube](<https://zube.io>) — Project management with free plan for 4 Projects & 4 users.|
| [Shortcut](<https://www.shortcut.com/>) — Project management and issue tracking for software teams.| [Atlassian Open Source](<https://developer.atlassian.com/platform/open-source/>) — Atlassian support and software donation information for open-source projects.|
| [kanbantool.com](<http://kanbantool.com/>) — Kanban board based project management. Free, paid plans with more options.| [kanbanery.com](<https://kanbanery.com/>) — Board based project management. Free for 2 users, premium tiers with more options.|
| | [producteev.com](<https://producteev.com/>) — Task management tool. Free, premium version with more options.|
| [GitHub Issues](<https://github.com/features/issues>) — Issue tracking integrated with GitHub repositories.| [JetBrains YouTrack](<https://www.jetbrains.com/youtrack/buy/>) — Free hosted YouTrack for small teams and qualifying open-source projects.|
| [free for 10 users](<https://www.jetbrains.com/youtrack/buy/>) — jetbrains.com — Free hosted YouTrack (InCloud) for FOSS projects, private projects {free for 10 users}.| [acunote.com](<http://acunote.com/>) — Free project management and SCRUM software for up to 5 team members.|
| [gliffy.com](<http://gliffy.com/>) — Online diagrams: flowchart, UML, wireframe,... 5 diagrams and 2 MB free.| [draw.io](<https://www.draw.io/>) — Online diagrams stored locally, in Google Drive, OneDrive or Dropbox. Free for all features and storage levels.|
| | [leankit.com](<http://leankit.com/>) — Kanban board, that visualizes your workflow. Free up to 10 users.|
| [visualstudio.com](<https://www.visualstudio.com//products/what-is-visual-studio-online-vs>) — Unlimited free private code repositories; Tracks bugs, work items, feedback and more.| [testlio.com](<https://testlio.com/>) — Issue tracking, test management and beta testing platform. Free for private use.|
| | [targetprocess.com](<http://targetprocess.com/>) — Visual project management, from Kanban and Scrum to almost any operational process. Free for unlimited users, up to 1,000 data entities {more details}.|
| [more details](<http://www.targetprocess.com/pricing/>) — targetprocess.com — Visual project management, from Kanban and Scrum to almost any operational process. Free for unlimited users, up to 1,000 data entities {more details}.| [overv.io](<https://overv.io/>) — Agile project management for teams who love GitHub.|
| [taskulu.com](<https://taskulu.com/>) — Role based project management. Free up to 5 users.| [contriber.com](<https://contriber.com/>) — Customizable project management platform, free starter plan, 5 workspaces.|
| [planitpoker.com](<http://planitpoker.com/>) — Free online planning poker (estimation tool).| [ubertesters.com](<https://ubertesters.com/>) — Test platform, integration and crowdtesters, 2 projects, 5 members.|

[Back to top](#free-resource-catalog)

#### Email


| Resource and free-tier context | Resource and free-tier context |
|---|---|
| [10minutemail](<https://10minutemail.com>) — Free, temporary email for testing.| [AhaSend](<https://ahasend.com>) — Transactional email service, free for 1000 emails per month, with unlimited domains, team members, webhooks and message routes in the free plan.|
| [AnonAddy](<https://anonaddy.com>) — Open-source anonymous email forwarding, create unlimited email aliases for free.| [anon.li Alias](<https://anon.li/alias>) — Open source, anonymous email alias/forwarding solution with PGP encryption, reply capability, 10 random & 1 custom alias on the free plan with developer API & CLI.|
| [Antideo](<https://www.antideo.com>) — 10 API requests per hour for email verification, IP, and phone number validation in the free tier. No Credit Cards are required.| [Anypost](<https://anypost.com>) — transactional and broadcast email API. 3,000 emails/month free, then as low as 8¢ per 1k.|
| [Atomic Mail](<https://atomicmail.ai>) — Email built for AI agents, entirely free.| [Brevo](<https://www.brevo.com/>) — 9,000 emails/month, 300 emails/day free.|
| [Bump](<https://bump.email/>) — Free 10 Bump email addresses, one custom domain.| [Burnermail](<https://burnermail.io/>) — Free 5 Burner Email Addresses, 1 Mailbox, 7-day Mailbox History.|
| [Buttondown](<https://buttondown.email/>) — Newsletter service. Up to 100 subscribers free.| [Canny Pigeons](<https://cannypigeons.com/>) — DMARC monitoring platform with DNS drift alerts, IP threat intel and unlimited users. First domain is free - no credit card required.|
| [Conduit](<https://conduit.email/>) — Turn incoming emails into webhooks to trigger your API from emails. The service is completely free.| [Contact.do](<https://contact.do/>) — Contact form in a link (bitly for contact forms).|
| [debugmail.io](<https://debugmail.io/>) — Easy to use testing mail server for developers.| [dkimvalidator.com](<https://dkimvalidator.com/>) — Test if the email's DNS/SPF/DKIM/DMARC settings are correct, free service by roundsphere.com.|
| [DNSExit](<https://dnsexit.com/>) — Up to 2 Email addresses under your domain for free with 100MB of storage space.| [EmailGuard](<https://emailguard.lazrek.net/>) — Block disposable emails, catch typos, and validate MX records via a simple API. 100 free requests/month.|
| [EmailJS](<https://www.emailjs.com/>) — This is not an entire email server; this is just an email client that you can use to send emails right from the client without exposing your credentials, the free tier has 200 monthly requests, 2 email templates, Requests up to 50Kb, Limited contacts history.| [EmailLabs.io](<https://emaillabs.io/en>) — Send up to 9,000 Emails for free every month, up to 300 emails daily.|
| [EmailQo Email Infrastructure Grader](<https://emailqo.com/email-grader>) — Free email infrastructure grader that checks SPF, DKIM, DMARC and mail server configuration.| [EmailOctopus](<https://emailoctopus.com>) — Up to 2,500 subscribers and 10,000 emails per month free.|
| [Emailvalidation.io](<https://emailvalidation.io>) — 100 free email verifications per month.| [Emitlo](<https://emitlo.com>) — free 12,000 emails/month, Email API and SMTP, SPF/DKIM/DMARC support, No Credit Cards are required.|
| [EtherealMail](<https://ethereal.email>) — Ethereal is a fake SMTP service, mainly aimed at Nodemailer and EmailEngine users (but not limited to). It's an entirely free anti-transactional email service where messages never get delivered.| [forwardemail.net](<https://forwardemail.net>) — Free email forwarding for custom domains.|
| [Imitate Email](<https://imitate.email>) — Sandbox Email Server for testing email functionality across build/qa and ci/cd. Free accounts get 15 emails a day forever.| [ImprovMX](<https://improvmx.com>) — Free email forwarding.|
| [Inboxes App](<https://inboxesapp.com>) — Create up to 3 temporary emails a day, then delete them when you're done from within a handy Chrome extension.| [inboxkitten.com](<https://inboxkitten.com/>) — Free temporary/disposable email inbox, with up to 3-day email auto-deletes. Open source and can be self-hosted.|
| [KaiMail](<https://kaimail.net>) — Email forwarding for custom domains with ARC/DKIM signing. Free plan includes 1 domain, 1 mailbox, 300 emails/month, and up to 1MB message size.| [mail-tester.com](<https://www.mail-tester.com>) — Test if the email's DNS/SPF/DKIM/DMARC settings are correct, 20 free/month.|
| [Maileroo](<https://maileroo.com>) — SMTP relay and email API for developers. 5,000 emails per month, unlimited domains, free email verification, blacklist monitoring, mail tester and more.| [mailcatcher.me](<https://mailcatcher.me/>) — Catches mail and serves it through a web interface.|
| [mailchannels.com](<https://www.mailchannels.com>) — Email API with REST API and SMTP integrations, free for upto 3,000 emails/month.| [Mailcheck.ai](<https://www.mailcheck.ai/>) — Prevent users to sign up with temporary email addresses, 120 requests/hour (~86,400 per month).|
| [Maildroppa](<https://maildroppa.com>) — Up to 100 subscribers and unlimited emails as well as automations for free.| [MailerLite.com](<https://www.mailerlite.com>) — 1,000 subscribers/month, 12,000 emails/month free.|
| [MailerSend.com](<https://www.mailersend.com>) — Email API, SMTP, 500 emails/month free for transactional emails, 100 API requests/day.| [mailinator.com](<https://www.mailinator.com/>) — Free, public email system where you can use any inbox you want.|
| [Mailjet](<https://www.mailjet.com/>) — 6,000 emails/month free (200 emails daily sending limit).| [mailsac.com](<https://mailsac.com>) — Free API for temporary email testing, free public email hosting, outbound capture, email-to-slack/websocket/webhook (1,500 monthly API limit).|
| [Mailtrap.io](<https://mailtrap.io/>) — Email API and SMTP with 4,000 emails/month free, limited to 150 emails/day. Email Marketing includes 500 contacts and 1,500 emails/month.| [Mutant Mail](<https://www.mutantmail.com/>) — Free 10 Email IDs, 1 Domain, 1 Mailbox.|
| [OneSignal](<https://onesignal.com/>) — Unlimited free push notifications. 10,000 email sends per month, with unlimited contacts and access to Auto Warm Up.| [Orbisearch](<https://orbisearch.com>) — Free bulk email validator, 100 validations per day, no signup required.|
| [Parsio.io](<https://parsio.io>) — Free email parser (Forward email, extract the data, send it to your server).| [Plunk](<https://useplunk.com>) — 3K emails/month for free.|
| [Postmark](<https://postmarkapp.com/>) — 100 emails/month free, unlimited DMARC weekly digests.| [Proton Mail](<https://proton.me/mail>) — Free secure email account service provider with built-in end-to-end encryption. Free 1GB storage.|
| [Reloop](<https://reloop.sh>) — Transactional email API and SMTP for developers. Free plan: 3,000 emails/month, 200 emails/day, one custom domain and one agent inbox.| [Resend](<https://resend.com>) — Transactional emails API for developers. 3,000 emails/month, 100 emails/day free, one custom domain.|
| [SendBridge Mail Tester](<https://sendbridge.com/mail-tester>) — Free email deliverability test with no signup. Unlimited tests, results in seconds, shareable report pages.| [Sender](<https://www.sender.net>) — Up to 15,000 emails/month, up to 2,500 subscribers.|
| [Sendpulse](<https://sendpulse.com>) — 500 subscribers/month, 15,000 emails/month free.| [SendStreak](<https://www.sendstreak.com/>) — Email framework as a service, that adds templates, automations, history, etc to your own SMTP server (E.g. AWS, Maileroo, Gmail). Free up to 100 emails/day, no time limit.|
| [SimpleLogin](<https://simplelogin.io/>) — Open source, self-hostable email alias/forwarding solution. Free 10 Aliases, unlimited bandwidth, unlimited reply/send.| [Substack](<https://substack.com>) — Unlimited free newsletter service.|
| [Suped](<https://www.suped.com/>) — A user-friendly DMARC monitoring platform. The free plan covers one domain with up to 1,000 emails per month.| [Sweego](<https://www.sweego.io/>) — European transactional emails API for developers. 100 emails/day free.|
| [temp-mail.io](<https://temp-mail.io>) — Free disposable temporary email service with multiple emails at once and forwarding.| [Temp-Mail.org](<https://temp-mail.org/en/>) — Temporary / Disposable Mail Gen Utilizing a range variety of domain. It is entirely free and does not include any pricing for their services.|
| [TempMailDetector.com](<https://tempmaildetector.com/>) — Verify up to 200 emails a month for free and see if an email is temporary or not.| [trashmail.com](<https://www.trashmail.com>) — Free disposable email addresses with forwarding and automatic address expiration.|
| [Tuta](<https://tuta.com/>) — Free secure email account service provider with built-in end-to-end encryption, no ads, no tracking. Free 1GB storage, one calendar (Tuta also have an paid plan.).| [paid plan](<https://tuta.com/pricing>) — Tuta pricing and free-plan details.|
| [open source](<https://github.com/tutao/tutanota>) — Tuta open-source repository.| [Verifalia](<https://verifalia.com/email-verification-api>) — Real-time email verification API with mailbox confirmation and disposable email address detector; 25 free email verifications/day.|
| [verimail.io](<https://verimail.io/>) — Bulk and API email verification service. 100 free verifications/month.| [Waitlio](<https://waitlio.com/>) — Waitlist management software for product launches. Free plan includes 100 subscribers/month, 1 waitlist, and API access.|
| [Wraps](<https://wraps.dev>) — email automation workflows, 5k tracked events and unlimited contacts free.| [ZeroSMTP](<https://github.com/msgwing/ZeroSMTP>) — Free SMTP relay on the msgwing.com domain, up to 200 emails/day, no paid tier.|

[Back to top](#free-resource-catalog)

#### Translation Management


| Resource and free-tier context | Resource and free-tier context |
|---|---|
| [AutoLocalise.com](<https://www.autolocalise.com/>) — Instantly localize without managing translation files. Free for up to 10,000 characters/month, unlimited languages.| [crowdin.com](<https://crowdin.com/>) — Unlimited projects, unlimited strings, and collaborators for Open Source.|
| [Free PO editor](<https://pofile.net/free-po-editor>) — Free for everybody.| [Lingo.dev](<https://lingo.dev>) — Open-source AI-powered CLI for web & mobile localization. Bring your own LLM, or use 10,000 free words every month via Lingo.dev-managed localization engine.|
| [lingohub.com](<https://lingohub.com/>) — Free up to 3 users, always free for Open Source.| [Localhero.ai](<https://localhero.ai>) — Automatic on-brand translations on every pull request, with glossary and translation memory. Free for 1 project, 250 translation credits/month (~4,000 words).|
| [localazy.com](<https://localazy.com>) — Free for 1000 source language strings, unlimited languages, unlimited contributors, startup and open source deals.| [Localit](<https://localit.io>) — Fast, developer-friendly localization platform with seamless and free GitHub/GitLab integration, AI-assisted and manual translations, and a generous free plan (includes 2 users, 500 keys, and unlimited projects).|
| [localizely.com](<https://localizely.com/>) — Free for Open Source.| [Loco](<https://localise.biz/>) — Free up to 2000 translations, Unlimited translators, ten languages/project, 1000 translatable assets/project.|
| [POEditor](<https://poeditor.com/>) — Free up to 1000 strings.| [SimpleLocalize](<https://simplelocalize.io/>) — Free up to 100 translation keys, unlimited strings, unlimited languages, startup deals.|
| [Texterify](<https://texterify.com/>) — Free for a single user.| [Tolgee](<https://tolgee.io>) — Free SaaS offering with limited translations, forever-free self-hosted version.|
| [transifex.com](<https://www.transifex.com/>) — Free for Open Source.|  |

[Back to top](#free-resource-catalog)

#### Forms


| Resource and free-tier context | Resource and free-tier context |
|---|---|
| [FabForm](<https://fabform.io/>) — Form backend platform for intelligent developers. The free plan allows 250 form submissions per month.| [Feathery](<https://feathery.io>) — Powerful, developer-friendly form builder. The free plan allows up to 250 submissions/month and five active forms.|
| [feedback.fish](<https://feedback.fish/>) — Free plan allows collecting 25 total feedback submissions.| [FluidForms](<https://fluidforms.ai/>) — Form builder and backend with AI-driven logic. Free plan includes 100 responses per month, unlimited forms (including AI-created forms), webhooks, and embedding.|
| [Form.taxi](<https://form.taxi/>) — Endpoint for HTML forms submissions. Free plan for basic usage.| [Formcarry.com](<https://formcarry.com>) — HTTP POST Form endpoint, Free plan allows 100 monthly submissions.|
| [Formester.com](<https://formester.com>) — Share and embed unique-looking forms on your website-no limits on the number of forms created or features restricted by the plan.| [Forminit](<https://forminit.com/>) — Headless form backend for developers. The free plan allows 100 form submissions per month including file uploads, server-side field validation, email notifications, spam protection and Zapier.|
| [FormKeep.com](<https://www.formkeep.com/>) — Unlimited forms with 50 monthly submissions, spam protection, email notification, and a drag-and-drop designer that can export HTML.| [Form Plume](<https://formplume.com>) — Form Plume is a form backend for HTML and JavaScript forms. Free for 500 submissions/mo.|
| [formlets.com](<https://formlets.com/>) — Online forms, unlimited single page forms/month, 100 submissions/month, email notifications.| [forms.app](<https://forms.app/>) — Create online forms with powerful features like conditional logic, automatic score calculator, and AI. Collect up to 100 responses with a free plan, embed your forms on a website, or use them with a link.|
| [formspark.io](<https://formspark.io/>) — Form to Email service, free plan allows unlimited forms, 250 submissions per month, support by Customer assistance team.| [Formspree.io](<https://formspree.io/>) — Send email using an HTTP POST request. The free tier limits to 50 submissions per form per month.|
| [Formsubmit.co](<https://formsubmit.co/>) — Easy form endpoints for your HTML forms. Free Forever.| [Formware.io](<https://formware.io/>) — Create fully-responsive and captivating forms in seconds, without knowing how to code, and collect unlimited responses for free!|
| [HeroTofu.com](<https://herotofu.com/>) — Forms backend with bot detection and encrypted archive. The free plan gives unlimited forms and 100 submissions per month.| [HeyForm.net](<https://heyform.net/>) — Drag and drop online form builder. The free tier lets you create unlimited forms and collect unlimited submissions.|
| [Jotform.com](<https://jotform.com/>) — Create online forms for free, collect submissions, accept payments, automate workflows, and get documents signed with built-in e-signatures.| [Kwes.io](<https://kwes.io/>) — Feature rich form endpoint. The free plan includes up to 1 website with up to 50 monthly submissions.|
| [Pageclip](<https://pageclip.co/>) — The free plan allows one site, one form, and 1,000 monthly submissions.| [SimplePDF.eu](<https://simplepdf.eu/embed>) — Embed a PDF editor on your website and turn any PDF into a fillable form. The free plan allows unlimited PDFs with three submissions per PDF.|
| [smartforms.dev](<https://smartforms.dev/>) — Powerful and easy form backend for your website, forever free plan allows 50 submissions per month, 250MB file storage, Zapier integration, CSV/JSON export, custom redirect, custom response page, Telegram & Slack bot, single email notifications.| [staticforms.xyz](<https://www.staticforms.xyz/>) — Integrate HTML forms easily without any server-side code for free.|
| [Survicate](<https://survicate.com/>) — Pull feedback from all sources and send follow-up surveys with one tool. Free email, website, in-product or mobile surveys, AI survey creator, and 25 monthly responses.| [Tally.so](<https://tally.so/>) — 99% of all the features are free. The free tier lets you have: unlimited forms, unlimited submissions, email notifications, form logic, collect payments, file upload, custom thank you page, and many more.|
| [Typeform.com](<https://www.typeform.com/>) — Include beautifully designed forms on websites. The free plan allows only ten fields per form and 100 monthly responses.| [Vidhook](<https://vidhook.io/>) — Collect feedback using delightful surveys with high response rates. Free plan includes 1 active survey, 25 responses per survey and customizable templates.|
| [WaiverStevie.com](<https://waiverstevie.com>) — Electronic Signature platform with a REST API. Free plan watermarks signed documents but allow unlimited envelopes + signatures.| [Web3Forms](<https://web3forms.com>) — Contact forms for Static & JAMStack Websites without writing backend code. The free plan allows Unlimited Forms, Unlimited Domains & 250 Submissions per month.|
| [Wufoo](<https://www.wufoo.com/>) — Quick forms to use on websites. The free plan has a limit of 100 submissions each month.| [FormNX](<https://FormNX.com/>) — Create unlimited forms get unlimited submissions free of cost.|

[Back to top](#free-resource-catalog)

#### Payment and Billing Integration


| Resource and free-tier context | Resource and free-tier context |
|---|---|
| [Adapty.io](<https://adapty.io/>) — One-stop solution with open-source SDK for mobile in-app subscription integration to iOS, Android, React Native, Flutter, Unity, or web app. Free up to $10k monthly revenue.| [AllRatesToday](<https://allratestoday.com>) — Real-time mid-market exchange rates for 150+ currencies with official JavaScript, Python, and PHP SDKs. Free tier includes 300 requests/month over HTTPS.|
| [Codex](<https://www.codex.io>) — Real-time crypto and prediction market data API for pricing, charts, transactions, wallet balances, and trending data. The free tier offers 10,000 requests for free per month, with credit card or crypto authentication required.| [Churnkey](<https://churnkey.co>) — Cancel flows (open-sourced), churn metrics, and revenue analytics for subscription businesses. Free forever.|
| [CoinMarketCap](<https://coinmarketcap.com/api/>) — Provides cryptocurrency market data including the latest crypto and fiat currency exchange rates. The free tier offers 10K call credits/month.| [Currencyapi](<https://currencyapi.com>) — Free currency conversion and exchange rate data API. Free 300 requests per month, 10 requests per minute for private use.|
| [CurrencyApi](<https://currencyapi.net/>) — Live Currency Rates for Physical and Cryptocurrencies, delivered in JSON and XML. The free tier offers 1,250 API requests/month.| [CurrencyFreaks](<https://currencyfreaks.com/>) — Provides current and historical currency exchange rates. Free DEVELOPER plan available with 1000 requests/month.|
| [currencylayer](<https://currencylayer.com/>) — Reliable Exchange Rates and Currency Conversion for your Business, 100 API requests/month free.| [exchangerate-api.com](<https://www.exchangerate-api.com>) — An easy-to-use currency conversion JSON API. The free tier updates once per day with a limit of 1,500 requests/month.|
| [Exchange Rate API](<https://exchange-rateapi.com>) — Real-time currency rates for 160+ currencies with 60-second updates and official SDKs. Free tier includes 300 requests/month.| [FxRatesAPI](<https://fxratesapi.com>) — Provides real-time and historical exchange rates. The free tier requires attribution.|
| [ParityVend](<https://www.ambeteco.com/ParityVend/>) — Automatically adjust pricing based on visitor location to expand your business globally and reach new markets (purchasing power parity). The free plan includes 7,500 API requests/month.| [Qonversion](<https://qonversion.io/>) — All-in-one cross-platform subscription management platform offering analytics, A/B testing, Apple Search Ads, remote configs, and growth tools for optimizing in-app purchases and monetization. Free up to $10k in monthly tracked revenue.|
| [RevenueCat](<https://www.revenuecat.com/>) — Hosted backend for in-app purchases and subscriptions (iOS and Android). Free up to $2.5k/mo in tracked revenue.| [vatlayer](<https://vatlayer.com/>) — Instant VAT number validation and EU VAT rates API, free 100 API requests/month.|
| [braintreepayments.com](<https://braintreepayments.com/>) — Credit Card, Paypal, Venmo, Bitcoin, Apple Pay,... First USD 50,000 free.| [taxratesapi.avalara.com](<http://taxratesapi.avalara.com/>) — Get the right sales tax rates to charge for the close to 10,000 sales tax jurisdictions in the USA. Free REST API.|

[Back to top](#free-resource-catalog)

#### Commenting Platforms


| Resource and free-tier context | Resource and free-tier context |
|---|---|
| [GraphComment](<https://graphcomment.com/>) — GraphComment is a comments platform that helps you build an active community from the website’s audience.| [IntenseDebate](<https://intensedebate.com/>) — A feature-rich comment system for WordPress, Tumblr, Blogger, and many other website platforms.|
| [Remarkbox](<https://www.remarkbox.com/>) — Open source hosted comments platform, pay what you can for "One moderator on a few domains with complete control over behavior & appearance".| [Utterances](<https://utteranc.es/>) — A lightweight comments widget built on GitHub issues.|

### Product, Web & Creative

[Back to top](#free-resource-catalog)

#### Design and UI


| Resource and free-tier context | Resource and free-tier context |
|---|---|
| [Beste](<https://beste.co>) — A composition-first website builder based on shadcn/ui blocks. The free plan lets you connect your own custom domain, and includes unlimited pages, multi-language support, blog, forms, and hosting.| [BoxySVG](<https://boxy-svg.com>) — A free installable Web app for drawing SVGs and exporting in SVG, PNG, jpeg, and other formats.|
| [BrandIcons](<https://brandicons.dev>) — Favicon API. Free tier includes 500,000 requests per month with attribution.| [Calendar Icons Generator](<https://calendariconsgenerator.app/>) — Generate an entire year's worth of unique icons in a single click, absolutely FREE.|
| [Canva](<https://canva.com>) — Free online design tool to create visual content.| [CodedThemes](<https://codedthemes.com/>) — Offers a well-crafted admin dashboard & and UI kits designed to simplify and speed up modern web development.|
| [Excalidraw](<https://excalidraw.com/>) — A free online drawing document web page with free save to local and export support.| [figma.com](<https://www.figma.com>) — Online, collaborative design tool for teams; free tier includes unlimited files and viewers with a max of 2 editors and three projects.|
| [Flows](<https://flows.sh/>) — A fully customizable product adoption platform for building onboarding and user engagement experiences. Free for up to 250 monthly tracked users.| [landen.co](<https://www.landen.co>) — Generate, edit, and publish beautiful websites and landing pages for your startup. The free tier allows you to have one website, fully customizable and published on the web.|
| [lensdump.com](<https://lensdump.com/>) — Free cloud image hosting.| [Logo.dev](<https://www.logo.dev>) — Company logo API with 44M+ brands that's as easy as calling a URL. First 10,000 API calls are free.|
| [marvelapp.com](<https://marvelapp.com/>) — Design, prototyping, and collaboration, free plan limited to one user and project.| [Mindmup.com](<https://www.mindmup.com/>) — Unlimited mind maps for free and store them in the cloud.|
| [Mockplus iDoc](<https://www.mockplus.com/idoc>) — Mockplus iDoc is a powerful design collaboration & handoff tool. Free Plan includes three users and five projects with all features available.| [photopea.com](<https://www.photopea.com>) — A Free, Advanced online design editor with Adobe Photoshop UI supporting PSD, XCF & Sketch formats (Adobe Photoshop, Gimp and Sketch App).|
| [Plasmic](<https://www.plasmic.app/>) — A fast, easy-to-use, robust web design tool and page builder that integrates into your codebase.| [Proto.io](<https://www.proto.io>) — Create fully interactive UI prototypes without coding. The free tier is available when the free trial ends.|
| [Quant Ux](<https://quant-ux.com/>) — Quant Ux is a prototyping and design tool. - It's completely free and also open source.| [Shadcn Studio](<https://shadcnstudio.com/theme-editor>) — Preview your theme changes across different components and layouts.|
| [smartmockups.com](<https://smartmockups.com/>) — Create product mockups, 200 free mockups.| [SVGicons.com](<https://svgicons.com/>) — Free search engine for 312K+ open-source SVG icons with ready-to-use SVG, React, Vue, HTML, and CSS code.|
| [TeleportHQ](<https://teleporthq.io/>) — Low-code Front-end Design & Development Platform. Three free projects, unlimited collaborators, and free code export.| [Unicorn Platform](<https://unicornplatform.com/>) — Effortless landing page builder with hosting. One website for free.|
| [Updrafts.app](<https://updrafts.app>) — WYSIWYG website builder for tailwindcss-based designs. Free for non-commercial usage.| [Webflow](<https://webflow.com>) — WYSIWYG website builder with animations and website hosting. Free for two projects.|
| [Webstudio](<https://webstudio.is/>) — Open-source alternative to Webflow. The free plan offers unlimited websites on their domain.| [whimsical.com](<https://whimsical.com/>) — Collaborative flowcharts, wireframes, sticky notes and mind maps. Create up to 4 free boards.|
| [Zeplin](<https://zeplin.io/>) — Designer and developer collaboration platform. Free for one project.| [WrapPixel](<https://www.wrappixel.com/>) — Download High Quality Free and Premium Admin dashboard template created with Angular, React, VueJs, NextJS, and NuxtJS!|
| [Themeselection](<https://themeselection.com/>) — Selected high quality, modern design, professional and easy-to-use Free Admin Dashboard Template,.| [AdminMart](<https://adminmart.com/>) — High-Quality Free and Premium Admin Dashboard and Website Templates created with Angular, Bootstrap, React, VueJs, NextJS, and NuxtJS!|

[Back to top](#free-resource-catalog)

#### Font


| Resource and free-tier context | Resource and free-tier context |
|---|---|
| [Befonts](<https://befonts.com/>) — Provides several unique fonts for personal or commercial use.| [Bunny](<https://fonts.bunny.net>) — Privacy oriented Google Fonts.|
| [dafont](<https://www.dafont.com/>) — The fonts presented on this website are their authors' property and are either freeware, shareware, demo versions, or public domain.| [Everything Fonts](<https://everythingfonts.com/>) — Offers multiple tools; @font-face, Units Converter, Font Hinter and Font Submitter.|
| [Font of web](<https://fontofweb.com/>) — Identify all the fonts used on a website and how they are used.| [Font Squirrel](<https://www.fontsquirrel.com/>) — Freeware fonts licensed for commercial work.|
| [FontGet](<https://www.fontget.com/>) — Has a variety of fonts available to download and sorted neatly with tags.| [fonts.xz.style](<https://fonts.xz.style/>) — free and open source service for delivering font families to websites using CSS.|
| [Fontsensei](<https://fontsensei.com/>) — Opensourced Google fonts tagged by users.| [Fontshare](<https://www.fontshare.com/>) — is a free fonts service. It’s a growing collection of professional-grade fonts, 100% free for personal and commercial use.|
| [Google Fonts](<https://fonts.google.com/>) — Many free fonts are easy and quick to install on a website via a download or a link to Google's CDN.|  |

[Back to top](#free-resource-catalog)

#### Mobile App Distribution and Feedback


| Resource and free-tier context | Resource and free-tier context |
|---|---|
| [Appho.st](<https://appho.st>) — Mobile app hosting platform. The free plan includes five apps, 50 monthly downloads, and a maximum file size of 100 MB.| [Diawi](<https://www.diawi.com>) — Deploy iOS & Android apps directly to devices. Free plan: app uploads, password-protected links, 1-day expiration, ten installations.|
| [GetUpdraft](<https://www.getupdraft.com>) — Distribute mobile apps for testing. The free plan includes one app project, three app versions, 500 MB storage, and 100 app installations per month.| [InstallOnAir](<https://www.installonair.com>) — Distribute iOS & Android apps over the air. Free plan: unlimited uploads, private links, 2-day expiration for guests, 60 days for registered users.|
| [Loadly](<https://loadly.io>) — iOS & Android beta apps distribution service offers completely free services with unlimited downloads, high-speed downloads, and unlimited uploads.| [DistApp](<https://distapp.app>) — Manage and distribute Android, iOS and Desktop apps. Try it for free with 2 apps, 1 org, 100 MB storage with unlimited downloads, or self-hosted your self.|

[Back to top](#free-resource-catalog)

#### Visitor Session Recording


| Resource and free-tier context | Resource and free-tier context |
|---|---|
| [FullStory.com](<https://www.fullstory.com>) — 1,000 sessions/month with one month data retention and three user seats.| [here](<https://help.fullstory.com/hc/en-us/articles/360020623354-FullStory-Free-Edition>) — FullStory Free Edition limits.|
| [howuku.com](<https://howuku.com>) — Track user interaction, engagement, and event. Free for up to 5,000 visits/month.| [inspectlet.com](<https://www.inspectlet.com/>) — 2,500 sessions/month free for one website.|
| [LogRocket.com](<https://www.logrocket.com>) — 1,000 sessions/month with 30-day retention, error tracking, live mode.| [Microsoft Clarity](<https://clarity.microsoft.com/>) — Session recording completely free with "no traffic limits", no project limits, and no sampling.|
| [mouseflow.com](<https://mouseflow.com/>) — 500 sessions/month free for one website.| [OpenReplay.com](<https://www.openreplay.com>) — Open-source session replay with dev tools for bug reproduction, live session for real-time support, and product analytics suite. One thousand sessions/month with access to all features and 7-day retention.|
| [Reactflow.com](<https://www.reactflow.com/>) — Per site: 1,000 pages views/day, three heatmaps, three widgets, free bug tracking.| [smartlook.com](<https://www.smartlook.com/>) — free packages for web and mobile apps (1500 sessions/month), three heatmaps, one funnel, 1-month data history.|
| [UXtweak.com](<https://www.uxtweak.com/>) — Record and watch how visitors use your website or app. Free unlimited time for small projects.|  |

[Back to top](#free-resource-catalog)

#### Dev Blogging Sites


| Resource and free-tier context | Resource and free-tier context |
|---|---|
| [AyeDot](<https://ayedot.com/>) — Share your ideas, knowledge, and stories with the world for Free in the form of Modern multimedia short-format Miniblogs.| [BearBlog](<https://bearblog.dev/>) — Minimalist, Markdown-powered blog and website builder.|
| [Dev.to](<https://dev.to/>) — Where programmers share ideas and help each other grow.| [Hashnode](<https://hashnode.com/>) — Hassle-free Blogging Software for Developers!.|
| [Medium](<https://medium.com/>) — Get more thoughtful about what matters to you.| [JustBlogged](<https://justblogged.com>) — Free blogging platform with custom domain support, and fast global performance.|

[Back to top](#free-resource-catalog)

#### Screenshot APIs


| Resource and free-tier context | Resource and free-tier context |
|---|---|
| [ApiFlash](<https://apiflash.com>) — A screenshot API based on Aws Lambda and Chrome.| [PhantomJsCloud](<https://PhantomJsCloud.com>) — Browser automation and page rendering. Free Tier offers up to 500 pages/day.|
| [screenshotbase.com](<https://screenshotbase.com>) — 300 free screenshots / month. Fast, free & scalable.| [screenshotlayer.com](<https://screenshotlayer.com/>) — Capture highly customizable snapshots of any website. Free 100 snapshots/month.|
| [screenshotmachine.com](<https://www.screenshotmachine.com/>) — Capture 100 snapshots/month, png, gif and jpg, including full-length captures, not only home page.| [Screenshot Scout](<https://screenshotscout.com/>) — Screenshot API for developers. Free plan includes 200 screenshots per month, forever.|
| [Shotpipe](<https://shotpipe.io>) — Screenshot and Open Graph image API built for static sites. Free tier includes 100 renders/month, no card required.| [SnapAPI](<https://snapapi.pics>) — Screenshot, video recording, PDF generation, and web data extraction API. Free plan includes 200 screenshots/month.|
| [thumbnail.ws](<https://thumbnail.ws>) — API for generating thumbnails of websites. Free 1,000 requests/month.|  |

[Back to top](#free-resource-catalog)

#### International Mobile Number Verification API and SDK


| Resource and free-tier context | Resource and free-tier context |
|---|---|
| [numverify](<https://numverify.com/>) — Global phone number validation and lookup JSON API. 100 API requests/month.| [veriphone](<https://veriphone.io/>) — Global phone number verification in a free, fast, reliable JSON API. 1000 requests/month.|

### Learning & Specialized Resources

[Back to top](#free-resource-catalog)

#### Education and Career Development


| Resource and free-tier context | Resource and free-tier context |
|---|---|
| [Cisco Networking Academy, Skills for All](<https://skillsforall.com/>) — Offers free certification-aligned courses in topics like cybersecurity, networking, and Python.| [CloudCertPrep](<https://cloudcertprep.io>) — Free, open-source AWS certification practice exams with 1,050+ questions for CLF-C02.|
| [CodeTrain](<https://codetrain.ai>) — AI coding tutor that teaches you on your own codebase and never writes the code for you. Free tier: 10 in-browser lessons/month, Python/JS run client-side, no card required.| [DeepLearning.AI Short Courses](<https://www.deeplearning.ai/short-courses/>) — Free short courses from industry-leading experts to get hands-on experience with the latest generative AI tools and techniques in an hour or less.|
| [DevNet Academy](<https://devnet-academy.com/>) — Free, self-paced training for the Cisco DevNet Expert / CCIE Automation certification.| [Django-tutorial.dev](<https://django-tutorial.dev>) — Free online guides for learning Django as their first framework & gives free dofollow backlink to articles written by users.|
| [edX](<https://www.edx.org/>) — Offers access to over 4,000 free online courses from 250 leading institutions, including Harvard and MIT, specializing in computer science, engineering, and data science.| [Exercism](<https://exercism.org>) — Free, open-source programming education in over 75 programming languages, with human mentoring.|
| [Free Professional Resume Templates & Editor](<https://www.overleaf.com/latex/templates/tagged/cv>) — Free platform with lots of Resume templates of Experienced Professionals, ready to clone and edit fully and download, ATS optimized.| [FreeCodeCamp](<https://www.freecodecamp.org/>) — Open-source platform offering free courses and certifications in Data Analysis, Information Security, Web Development, and more.|
| [Full Stack Open](<https://fullstackopen.com/en/>) — Free university-level course on modern web development with React, Node.js, GraphQL, TypeScript, and more.| [Interactive CV](<https://interactive-cv.com>) — AI-powered resume builder with real-time editing and ATS optimization. Free tier includes automatic CV conversion to premium templates (Harvard, Europass), PDF export, job tracker with unlimited job posting insights and CV sharing with chat/voice features.|
| [Khan Academy](<https://www.khanacademy.org/computing/computer-programming>) — Free online guides for learning basic and advanced HTML/CSS, JavaScript and SQL.| [LabEx](<https://labex.io>) — Develop skills in Linux, DevOps, Cybersecurity, Programming, Data Science, and more through interactive labs and real-world projects.|
| [MIT OpenCourseWare](<https://ocw.mit.edu/>) — MIT OpenCourseWare is an online publication of materials from over 2,500 MIT courses, freely sharing knowledge with learners and educators around the world.| [@mitocw](<https://www.youtube.com/@mitocw/featured>) — MIT OpenCourseWare YouTube channel.|
| [Reactive Resume](<https://rxresu.me>) — Free, open-source resume builder with dozens of templates.| [Roadmap.sh](<https://roadmap.sh>) — Free learning roadmaps covering all aspects of development from Blockchain to UX Design.|
| [The Odin Project](<https://www.theodinproject.com/>) — Free, open-source platform with a curriculum focused on JavaScript and Ruby for web development.| [W3Schools](<https://www.w3schools.com/>) — Offers free tutorials on web development technologies like HTML, CSS, JavaScript, and more.|

[Back to top](#free-resource-catalog)

#### Flutter Related and Building IOS Apps without Mac


| Resource and free-tier context | Resource and free-tier context |
|---|---|
| [FlutLab](<https://flutlab.io/>) — FlutLab is a modern Flutter online IDE and the best place to create, debug, and build cross-platform projects.|  |

[Back to top](#free-resource-catalog)

#### Miscellaneous


| Resource and free-tier context | Resource and free-tier context |
|---|---|
| [BinShare.net](<https://binshare.net>) — Create & share code or binaries.| [Blynk](<https://blynk.io>) — A SaaS with API to control, build & evaluate IoT devices. Free Developer Plan with 5 devices, Free Cloud & data storage.|
| [cron-job.org](<https://cron-job.org>) — Online cronjobs service. Unlimited jobs are free of charge.| [Cronhooks](<https://cronhooks.io/>) — Schedule on-time or recurring webhooks. The free plan allows 5 ad-hoc schedules.|
| [datelist.io](<https://datelist.io>) — Online booking / appointment scheduling system. Free up to 5 bookings per month, includes 1 calendar.| [FOSSA](<https://fossa.com/>) — Scalable, end-to-end management for third-party code, license compliance and vulnerabilities.|
| [Hook Relay](<https://www.hookrelay.dev/>) — Add webhook support to your app without the hassles: done-for-you queueing, retries with backoff, and logging. The free plan has 100 deliveries per day, 14-day retention, and 3 hook endpoints.| [Hosting Checker](<https://hostingchecker.co>) — Check hosting information such as ASN, ISP, location and more for any domain, website or IP address.|
| [newreleases.io](<https://newreleases.io/>) — Receive notifications on email, Slack, Telegram, Discord, and custom webhooks for new releases from GitHub, GitLab, Bitbucket, Python PyPI, Java Maven, Node.js NPM, Node.js Yarn, Ruby Gems, PHP Packagist, .NET NuGet, Rust Cargo and Docker Hub.| [PDFMonkey](<https://www.pdfmonkey.io/>) — Manage PDF templates in a dashboard, call the API with dynamic data, and download your PDF. Offers 300 free documents per month.|
| [Pika Code Screenshots](<https://pika.style/templates/code-image>) — Create beautiful, customizable screenshots from code snippets and VSCode using the extension.| [QuickType.io](<https://quicktype.io/>) — Quickly auto-generate models/class/type/interface and serializers from JSON, schema, and GraphQL for working with data quickly & safely in any programming language.|
| [readme.com](<https://readme.com/>) — Beautiful documentation made easy, free for Open Source.| [redirect.pizza](<https://redirect.pizza/>) — Easily manage redirects with HTTPS support. The free plan includes 10 sources and 100,000 hits per month.|
| [redirection.io](<https://redirection.io/>) — SaaS tool for managing HTTP redirections for businesses, marketing and SEO.| [redirs.com](<https://www.redirs.com/>) — Easy domain redirects with auto-SSL, analytics, and URL path forwarding. Free for basic use (up to 5 domains).|
| [RedirHub](<https://www.redirhub.com/>) — API-first URL redirect infrastructure with custom nameservers, edge network, HTTPS, and proactive link monitoring. Free plan includes 2 hostnames, 100K requests per month, auto-SSL, path forwarding, and REST API access.| [ReqBin](<https://reqbin.com/>) — Post HTTP Requests Online. Includes a basic login system for saving your requests.|
| [Smartcar API](<https://smartcar.com>) — An API for cars to locate, get fuel tank, battery levels, odometer, unlock/lock doors, etc.| [Sunrise and Sunset](<https://sunrisesunset.io/api/>) — Get sunrise and sunset times for a given longitude and latitude.|
| [superfeedr.com](<https://superfeedr.com/>) — Real-time PubSubHubbub compliant feeds, export, analytics. Free with less customization.| [SurveyMonkey.com](<https://www.surveymonkey.com>) — Create online surveys. The free plan allows only 10 questions and 100 responses per survey.|
| [SYNCDATE](<https://syncdate.app>) — Two-way Google Calendar sync. Free tier: 2 accounts, unlimited events.| [UUID Generator](<https://newuuid.com/>) — Generate UUID v1, UUID v4, UUID v7, GUID, Nil UUIDs, CUID v1/v2, NanoID, and ULID instantly with enterprise-grade.|
| [Versionfeeds](<https://versionfeeds.com>) — Custom RSS feeds for releases of your favorite software. (The first 3 feeds are free).| [apichangelog.com](<https://apichangelog.com/>) — Subscribe to be notified each time API Documentation is updated (Facebook, Twitter, Google,...).|
| [docsapp.io](<https://www.docsapp.io/>) — Easiest way to publish documentation, free for Open Source.| |
| [fullcontact.com](<https://fullcontact.com/developer/pricing/>) — Help your users know more about their contacts by adding social profile into your app. 500 free Person API matches/month.| [screenshotmachine.com](<https://screenshotmachine.com/>) — Capture 100 snapshots/month, png, gif and jpg, including full-length captures, not only home page.|
| [readme.io](<https://readme.io/>) — Beautiful documentations made easy, free for Open Source.| [formaholic.com](<https://formaholic.com>) — Simple form endpoint.|

[Back to top](#free-resource-catalog)

#### Remote Desktop Tools


| Resource and free-tier context | Resource and free-tier context |
|---|---|
| [Parsec](<https://parsec.app/>) — Free for installation on unlimited number of devices(for personal use) and allows up to 20 connections to a single device at once.| [AnyDesk](<https://anydesk.com>) — Free for 3 devices, no limits on the number and duration of sessions.|
| [Getscreen.me](<https://getscreen.me>) — Free for 2 devices, no limits on the number and duration of sessions.| [RemSupp](<https://remsupp.com>) — On-demand support and permanent access to devices (2 sessions/day for free).|
| [RustDesk](<https://rustdesk.com/>) — Open source virtual/remote desktop infrastructure for everyone!|  |

[Back to top](#free-resource-catalog)

#### Other Free Resources


| Resource and free-tier context | Resource and free-tier context |
|---|---|
| [get.localhost.direct](<https://get.localhost.direct>) — A better `*.localhost.direct` Wildcard public CA signed SSL cert for localhost development with sub-domain support.| [GitHub Education](<https://education.github.com/pack>) — Collection of free services for students.|
| [Glob tester](<https://globster.xyz/>) — A website that allows you to design and test glob patterns.| [Killer Coda](<https://killercoda.com/>) — Interactive playground in your browser to study Linux, Kubernetes, Containers, Programming, DevOps, Networking.|
| [Microsoft 365 Developer Program](<https://developer.microsoft.com/microsoft-365/dev-program>) — Get a free sandbox, tools, and other resources you need to build solutions for the Microsoft 365 platform. The subscription is a 90-day Microsoft 365 E5 Subscription (Windows excluded) which is renewable.| [Microsoft 365 E5 Subscription](<https://www.microsoft.com/microsoft-365/enterprise/e5>) — Microsoft 365 E5 subscription details.|
| [MySQL Visual Explain](<https://mysqlexplain.com>) — Easy-to-understand and free MySQL EXPLAIN output visualizer to optimize slow queries.| [RedHat for Developers](<https://developers.redhat.com>) — Free access to Red Hat products including RHEL, OpenShift, CodeReady, etc. exclusively for developers. Individual plan only.|
| [sandbox.httpsms.com](<https://sandbox.httpsms.com>) — Send and receive test SMS messages for free.| [SimpleBackups.com](<https://simplebackups.com/>) — Backup automation service for servers and databases (MySQL, PostgreSQL, MongoDB) stored directly into cloud storage providers (AWS, DigitalOcean, and Backblaze).|
| [SimpleRestore](<https://simplerestore.io>) — Hassle-free MySQL backup restoration.| [SnapShooter](<https://snapshooter.com/>) — Backup solution for DigitalOcean, AWS, LightSail, Hetzner, and Exoscale, with support for direct database, file system and application backups to s3 based storage.|
| [github.com - FOSS for Dev](<https://github.com/httpsGithubParty/FOSS-for-Dev>) — A hub of free and Open Source software for developers.| [TechSoup](<https://www.techsoup.org/>) — Technology donations and discounted services for qualifying nonprofit organizations.|
| [Awesome Lists](<https://github.com/sindresorhus/awesome>) — A curated directory of high-quality free and open-source resources from GitHub.|  |

[Back to top](#free-resource-catalog)

## Related topics

- [Cloud Cost Management and FinOps](../operations-reliability-finops/cloud-cost-management-and-finops.md)
- [Resource Inventory, Reporting, and Compliance Evidence](../operations-reliability-finops/resource-inventory-reporting-and-compliance-evidence.md)
- [Multi-Cloud Architecture and Governance](../cloud-foundations-governance/multi-cloud-architecture-and-governance.md)
- [Infrastructure as Code Engineering Standards](../infrastructure-as-code/iac-infrastructure-as-code-engineering-standards.md)
