---
title: "Enterprise Multi-Cloud Ansible Automation Reference Architecture"
summary: "Defines a governed Ansible architecture for Azure, AWS, GCP, OCI, on-premises, Linux, Windows, cloud APIs, and enterprise automation operations."
document_id: "ES-09"
category: "Enterprise Solutions"
article_type: "architecture"
tags:
  - ansible
  - automation
  - control-plane
  - multi-cloud
  - hybrid-cloud
  - linux
  - windows
  - patch-management
status: "published"
order: 90
version: "1.1"
last_updated: "2026-08-28"
review_status: "machine-validated"
review_cadence: "annual"
decision_status: "active"
owner: "Cloud Center of Excellence"
audience:
  - enterprise architects
  - platform architects
  - automation engineers
  - DevOps engineers
  - system administrators
  - security engineers
  - operations engineers
  - service owners
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
  - IA-02
  - HOL-05
  - CICD-10
  - ORF-03
---

# Enterprise Multi-Cloud Ansible Automation Reference Architecture

> **Document class:** Enterprise architecture reference model
> **Normative terms:** **MUST**, **MUST NOT**, **SHOULD**, **SHOULD NOT**, and **MAY** are requirements levels.
> **Applicability:** Enterprise Ansible automation across Azure, AWS, GCP, OCI, on-premises, hybrid, Linux, Windows, network, and API-driven targets.
> **Exception process:** Deviations require a documented risk assessment, compensating controls, named risk owner, and expiry date.

| Control field | Value |
|---|---|
| Document ID | `ES-09` |
| Owner | Cloud Center of Excellence |
| Version | `1.1` |
| Review cycle | At least annually and after material controller, Ansible, collection, identity, network, or target-platform changes |
| Evidence | Architecture decision record, platform contract, inventory policy, controller configuration, CI results, execution evidence, recovery test, and operational readiness review |

> **Decision in brief:** Use Git, immutable Execution Environments, governed inventory, separated identities, and bounded execution to manage hybrid and multicloud targets. Keep controller objects replaceable so Semaphore can evolve to AWX without rewriting automation content.

## Change summary

- Promoted immutable Execution Environments and image-digest pinning to mandatory architecture controls.
- Added the Platform Contract and formal operating-model separation.
- Added identity separation as an independent Identity and Trust Plane.
- Defined inventory as a security boundary with fail-closed behavior.
- Added controlled same-revision and same-Execution-Environment-digest promotion.
- Added controller-object constraints, canary execution, health gates, bounded waves, and failure thresholds.
- Added structured automation evidence, ITSM/change correlation, and change recovery.
- Added formal validation and acceptance criteria aligned with HOL-05.

## Executive summary

The goal is not simply to deploy an Ansible server with a web UI. It is to establish a sustainable enterprise automation platform that can manage Azure, AWS, GCP, OCI, and on-premises resources across production, QA, development, and lab environments while supporting Linux, Windows, network devices, and API-driven platforms and integrating cleanly with GitHub or Azure DevOps.

The recommended principles are:

1. **Git is the source of truth for automation content.** Playbooks, roles, collections, inventory configuration, Execution Environment definitions, and CI configuration are version controlled.
2. **Decouple Ansible content from the controller.** Business logic must not be embedded in Semaphore/AWX UI objects. The controller should manage projects, credentials, inventories, templates, schedules, RBAC, auditing, and execution.
3. **Prefer AWX as the long-term enterprise open-source control plane; use Semaphore Community as a lightweight starting point.** Semaphore Community is simple, lightweight, and MIT licensed, but the current product places capabilities such as Project Runners, HA, and Extended RBAC in paid editions. AWX is heavier and requires Kubernetes, but is a stronger long-term open-source enterprise control-plane candidate.[R1][R2][R18][R19][R33][R34]
4. **Prefer dynamic inventory.** Use `azure.azcollection.azure_rm` for Azure and `amazon.aws.aws_ec2` for AWS. For GCP and OCI, use the approved provider inventory plugin or API integration, supplemented by the CMDB where required. Use static YAML, NetBox/CMDB, or VMware inventory for on-premises. Cloud environments should not depend on manually maintained IP lists.[R8][R9]
5. **Keep playbooks thin and put reusable logic into roles and collections.** Common enterprise capabilities should converge into internal collections such as `company.platform`.
6. **Make production execution reproducible.** Pin `ansible-core`, collections, Python dependencies, and use Ansible Execution Environment containers to avoid dependency drift.[R20]
7. **CI validates; it should not automatically mutate production by default.** PR pipelines perform linting, syntax validation, Molecule/ansible-test, and security scanning. After merge/tag, the controller synchronizes the code and production execution is triggered through approvals, controlled templates, or schedules.
8. **Never store plaintext credentials in Git.** The minimum baseline is Ansible Vault; a more mature fully open-source design can evaluate OpenBao. Semaphore Community includes an encrypted Key Store, but external HashiCorp Vault integration is a paid feature and must not be assumed to be part of the free Community capability.[R5][R35][R21]

**v1.1 strengthening objective**: this version promotes the enterprise acceptance criteria demonstrated in HOL-05 from implementation guidance to explicit architecture controls. The platform must be able to prove the complete trust chain: `Code -> Validation -> Immutable Runtime -> Approved Inventory -> Identity -> Canary -> Approval -> Bounded Execution -> Validation -> Evidence -> Recovery`. The same source revision and the same Execution Environment digest should be promoted through dev/test/staging/prod rather than rebuilt or allowed to drift between environments.

Source markers such as [R1] link to the supporting references at the end of this article.

## Design principles

1. **Source of truth**: GitHub or Azure Repos is the authoritative source for automation content, platform IaC, EE definitions, and CI policy.
2. **Controller-agnostic content**: playbooks, roles, collections, inventory policy, and tests must not depend on proprietary controller UI logic.
3. **Immutable runtime**: production jobs execute in an Execution Environment traceable to an image digest; tags are for discovery, digests are used for production pinning.
4. **Same-revision promotion**: only the tested commit, Collection versions, and EE digest are promoted to the next environment.
5. **Least privilege and identity separation**: engineer, CI publisher, controller service, cloud API, target connection, and approver identities use separate identities or at minimum distinct permission boundaries.
6. **Inventory is a security boundary**: inventory is not merely an asset list; it defines execution scope. Dynamic inventory resolution failures must fail closed.
7. **Bounded blast radius**: production changes must use limits, serial/concurrency controls, failure thresholds, canaries, and health gates.
8. **Evidence by design**: every production execution must produce evidence correlating Git commit, EE digest, identity, inventory, targets, approval, result, and recovery.
9. **Recovery is part of change design**: every high-risk automation must define rollback, forward-fix, or manual recovery.
10. **Open-source-first, replaceable layers**: prioritize free/open-source components now, while keeping Git, Collections, EE, Inventory, and CI portable to avoid controller or secret-manager lock-in.

## Reference repository analysis

### `semaphoreui/semaphore`

Repository: [semaphoreui/semaphore](https://github.com/semaphoreui/semaphore)

**Purpose**: The main Semaphore UI project. It provides a web UI/API for Ansible, Terraform/OpenTofu/Terragrunt, PowerShell, Shell, and Python. It supports concepts such as repositories, inventory, variable groups, key store, schedules, and teams. The main repository is MIT licensed.[R1][R3]

**What to reuse**:

- Containerized deployment patterns and configuration model.
- PostgreSQL for production instead of SQLite.
- HTTPS reverse proxy.
- Git repository integration.
- Key Store and credential encryption.
- Project, Inventory, Template, and Schedule object model.
- API-driven operations.

**What must not be assumed**:

- Community is not equivalent to the complete Enterprise product. Current documentation places High Availability in Enterprise, Project Runners/runner tags in the Pro direction, and Extended RBAC in Enterprise.[R33][R34][R4]
- Therefore, if the future design requires execution nodes located independently in Azure, AWS, GCP, OCI, and on-premises security zones, Semaphore Community can become a constraint.

**Role in the final architecture**:

- Phase 1 / small team: valid control plane.
- Long-term enterprise design: retain as a lightweight controller option, but do not make automation assets dependent on Semaphore-specific objects.

**Assessment**: Strong platform and easy deployment; the free edition's enterprise scaling boundaries must be designed around early.

### `semaphoreui/semaphore-demo`

Repository: [semaphoreui/semaphore-demo](https://github.com/semaphoreui/semaphore-demo)

**Purpose**: Official demo and example repository containing Ansible roles, inventory, collections, and playbooks, plus Terraform, Terragrunt, PowerShell, Shell, and stress-test examples.[R10]

**Strengths**:

- Excellent for validating how Semaphore pulls a Git repository and executes tasks.
- Demonstrates multiple automation tools in one project.
- Includes runnable examples.

**Weaknesses**:

- It is not an enterprise reference architecture.
- Environment isolation, secret management, CI quality gates, collection versioning, dynamic inventory, and production release controls are incomplete.
- It should not be forked unchanged as a production repository.

**Role in the final architecture**: PoC and task-template example source only.

### `adfinis/ansible-collection-semaphoreui`

Repository: [adfinis/ansible-collection-semaphoreui](https://github.com/adfinis/ansible-collection-semaphoreui)

**Purpose**: An Ansible collection that deploys and manages Semaphore UI. It supports Docker Compose, Semaphore servers and runners, SQLite/PostgreSQL/MySQL, and optional Caddy HTTPS. The collection uses GPL-3.0-or-later.[R11]

**Strengths**:

- The core idea is correct: **the automation platform itself must be managed as code**.
- Separates server and runner inventory groups.
- Includes production-oriented PostgreSQL and HTTPS concepts.
- Contains Molecule and ansible-lint structure that is useful as a collection-engineering reference.

**Weaknesses**:

- It is much smaller than the Semaphore main project and should not be treated as the authoritative platform lifecycle standard.
- Runner capabilities still depend on the Semaphore product edition.

**Role in the final architecture**: Reference for the `automation-platform-iac` repository. Even if the controller later changes to AWX, retain the "controller deployment as code" principle.

### `geerlingguy/ansible-for-devops`

Repository: [geerlingguy/ansible-for-devops](https://github.com/geerlingguy/ansible-for-devops)

**Purpose**: Teaching examples for Jeff Geerling's *Ansible for DevOps*, covering basic playbooks, multi-host orchestration, Docker, Kubernetes, and many other scenarios.[R12]

**Strengths**:

- Large number of readable examples.
- Excellent for learning inventory, roles, orchestration, CI, and Molecule patterns.
- Mature community usage.

**Critical limitation**:

The repository README explicitly states that **not all playbooks follow all of Ansible's best practices**. It is therefore a learning resource, not a production baseline.[R12]

**Role in the final architecture**: Coding-pattern/reference library only.

### `ansible-lockdown/*`

Organization: [ansible-lockdown](https://github.com/ansible-lockdown)

**Purpose**: Ansible-based CIS/STIG hardening. Current public content covers multiple Linux and Windows versions plus AWS, Azure, network, and application platforms. Some repositories include Molecule, linting, pre-commit, and GitHub Actions.[R13][R14]

**Strengths**:

- Mature security-baseline content structure.
- Valuable for enterprise Windows/Linux hardening.
- Role structure, defaults, vars, tasks, handlers, and Molecule tests are useful references.

**Critical risks**:

- CIS/STIG remediation is intrusive and must never be deployed to production merely because it comes from a community repository.
- Benchmark versions must match the organization's approved baseline.
- Some roles explicitly do not support or should not rely on check mode. The Windows Server 2022 CIS repository warns that remediation may have unintended consequences and does not treat check mode as a reliable validation path.[R15]

**Role in the final architecture**: Optional `security_baseline` / `compliance` layer, validated through lab -> dev -> QA -> production.

### Consolidated conclusion from the five repositories

| Repository | Suitable as direct enterprise baseline | Best use | Do not copy blindly |
|---|---|---|---|
| `semaphoreui/semaphore` | Partially | Control plane, API, inventory, schedules, Key Store | Paid HA/Runners/RBAC assumptions |
| `semaphoreui/semaphore-demo` | No | Demo, PoC, integrations | Production repository structure |
| `adfinis/ansible-collection-semaphoreui` | Partially | Controller-as-code, Compose, PostgreSQL, HTTPS | Treating it as official enterprise lifecycle tooling |
| `geerlingguy/ansible-for-devops` | No | Coding patterns and learning | Assuming every example is best practice |
| `ansible-lockdown/*` | Optional component | CIS/STIG roles, Molecule, linting | Unvalidated production hardening |

The correct enterprise approach is to build **your own automation platform and automation-content repositories**.

## Architecture decision and control-plane strategy

**Decision**: use **AWX** as the long-term fully open-source enterprise control-plane target, with **Semaphore UI Community** as a lighter starting option. Regardless of controller choice, the core automation assets must remain controller-agnostic.

Control-plane selection must not change the following assets:

- Git repositories and branch/approval policy;
- internal Ansible Collections and Roles;
- dynamic inventory policy;
- Execution Environments and OCI Registry;
- CI quality gates;
- secret-provider abstraction;
- evidence schema and change correlation.

### Phase 1: Semaphore UI Community

Suitable when:

- Starting with roughly 10-100+ hosts.
- One or a small number of operations teams.
- Azure/AWS/on-prem networks are already connected by VPN, ExpressRoute, Direct Connect, SD-WAN, or enterprise WAN.
- Active-active HA of the controller is not mandatory.
- Fine-grained custom RBAC is not mandatory.

Recommended deployment:

```text
Reverse Proxy / TLS
        |
Semaphore UI Community
        |
PostgreSQL
        |
Ansible + Python dependencies
        |
Reachable Azure / AWS / GCP / OCI / on-premises networks
```

Minimum production baseline:

- PostgreSQL, not SQLite.
- HTTPS.
- OIDC/LDAP where the current Community capability meets requirements, otherwise strong local authentication.
- Separate backup of Key Store encryption keys.[R5]
- SSH deploy key or scoped token for Git repositories.
- Log and database backup.
- Only required network ports exposed from the control node.

### Enterprise open-source target: AWX

AWX is the upstream open-source project related to the controller technology in Red Hat Ansible Automation Platform. The current official installation path uses the AWX Operator on Kubernetes. AWX jobs use containerized Execution Environments for dependency consistency and isolation.[R18][R19][R20]

Better suited for:

- Multiple teams.
- More complex inventories, projects, templates, and workflows.
- Multi-environment orchestration and approvals.
- Standardized Execution Environments.
- Organizations that already operate Kubernetes/AKS/EKS/on-prem Kubernetes.

Cost in complexity:

- Significantly heavier than Semaphore.
- Kubernetes, PostgreSQL, storage, ingress, backup, and upgrades become platform responsibilities.
- AWX is community software and does not provide the commercial SLA of Red Hat AAP.

**Recommendation**: For a personal/small-team platform, start with Semaphore. For a shared enterprise platform with existing Kubernetes competence, starting directly with AWX is more defensible.

**Migration principle**: a Semaphore -> AWX migration should primarily affect Project/Inventory/Credential/Template/Workflow objects, not require rewriting playbooks and roles.

## Platform operating model and platform contract

An enterprise automation platform is first an **operating model**, and only then a software deployment. A Platform Contract must be defined before production use.

| Role | Core responsibilities | Default access that should not be granted |
|---|---|---|
| Platform Team | Controller, EE supply chain, inventory integration, RBAC, logging, backup/DR | Application business approval |
| Automation Authors | Collections, Roles, Playbooks, Tests, documentation | Arbitrary production credentials or targets |
| Operations | Controlled Job/Workflow execution, incident handling, maintenance windows | Protected-code modification or arbitrary credentials |
| Security | Baselines, secrets policy, RBAC policy, compliance requirements | Routine application-change execution |
| Approvers / Change Managers | Production approval, change correlation | Direct playbook modification |
| Auditors | Evidence and audit queries | Mutation privileges |

The Platform Contract must record, at minimum: supported operating systems and connection methods, cloud API scopes, target privilege, environment boundaries, inventory authority, EE build and promotion path, log/output/secret retention, maximum target count, maximum concurrency, failure threshold, recovery owner, and cleanup owner.

**Anti-pattern**: one team simultaneously controls code merge, production credentials, production approval, and unrestricted execution. For critical production environments, separate these duties through RBAC, branch protection, CODEOWNERS, and workflow approval.

## Enterprise logical architecture

The architecture treats Source/CI, Runtime Supply Chain, Identity & Trust, Inventory, Control Plane, Execution, Evidence/ITSM, and Recovery as separate but mutually validating layers.

![Enterprise Multi-Cloud Ansible Automation Reference Architecture](../../assets/enterprise-ansible-automation-reference-architecture.png)

**Key data flow**: engineers submit changes through pull requests; CI validates content and builds an immutable EE; the approved commit and EE digest are promoted to the controller; the controller uses separate identities to resolve inventory and secrets; workflows execute through precheck -> canary -> health gate -> approval -> bounded waves -> post-validation; evidence is sent to both central logging/SIEM and the ITSM/change record.

## Trust and identity architecture

Identity must be separated from secret storage and designed as a Trust Plane. At minimum, separate the following identities:

| Identity | Typical privilege |
|---|---|
| Engineer | Create branches/PRs; no direct production credential access |
| CI Publisher | Pull code, run tests, push EEs; no target login |
| Controller Service | Sync projects and start approved workflows |
| Azure API Identity | Inventory read or explicitly declared Azure mutation scope |
| AWS API Identity | Inventory read or explicitly declared AWS IAM role |
| GCP API Identity | Inventory read or explicitly declared GCP mutation scope |
| OCI API Identity | Inventory read or explicitly declared OCI mutation scope |
| Target Connection Identity | SSH/PSRP/WinRM/network-device access |
| Operator | Execute controlled templates |
| Approver | Approve production; no target-admin privilege required |

Prefer Managed Identity or Workload Identity Federation for Azure; prefer OIDC/AssumeRole-style short-lived credentials for AWS; use Workload Identity Federation or service-account impersonation for GCP; use instance/resource principals or scoped user identity for OCI; for on-prem Windows use AD/Kerberos/gMSA where supported and validated by the controller/EE; for Linux use controlled SSH keys or SSH CA patterns.

**Explicitly prohibited**: one highly privileged service principal or IAM user performing inventory, cloud mutation, secret retrieval, server login, and production deployment.

## Repository architecture

Do not place everything in one repository. Use at least three repositories.

### Repo A: `automation-platform-iac`

Owns the control plane itself.

```text
automation-platform-iac/
+-- README.md
+-- docs/
+-- semaphore/                 # Phase 1 only
|   +-- compose/
|   +-- config/
|   \-- ansible/
+-- awx/                       # target architecture
|   +-- operator/
|   +-- kustomize/
|   \-- manifests/
+-- reverse-proxy/
+-- monitoring/
+-- backup/
\-- pipelines/
```

### Repo B: `ansible-automation-content`

This is the most important long-term asset.

```text
ansible-automation-content/
+-- README.md
+-- ansible.cfg
+-- requirements.yml
+-- inventories/
|   +-- prod/
|   |   +-- azure_rm.yml
|   |   +-- aws_ec2.yml
|   |   +-- onprem.yml
|   |   +-- group_vars/
|   |   \-- host_vars/
|   +-- qa/
|   +-- dev/
|   \-- lab/
+-- playbooks/
|   +-- linux/
|   |   +-- baseline.yml
|   |   +-- patch.yml
|   |   \-- collect_facts.yml
|   +-- windows/
|   |   +-- baseline.yml
|   |   +-- patch.yml
|   |   \-- collect_facts.yml
|   +-- network/
|   +-- cloud/
|   \-- orchestration/
+-- collections/
|   \-- ansible_collections/
|       \-- company/
|           \-- platform/
|               +-- galaxy.yml
|               +-- roles/
|               +-- plugins/
|               +-- playbooks/
|               \-- tests/
+-- tests/
|   +-- molecule/
|   \-- integration/
+-- .github/workflows/         # if GitHub
+-- azure-pipelines.yml        # if ADO
+-- .ansible-lint
+-- .yamllint
\-- docs/
```

### Repo C: `ansible-execution-environments`

```text
ansible-execution-environments/
+-- base/
|   +-- execution-environment.yml
|   +-- requirements.yml
|   +-- requirements.txt
|   \-- bindep.txt
+-- windows/
+-- network/
+-- cloud/
\-- pipelines/
```

Execution Environments lock `ansible-core`, Azure/AWS/GCP/OCI/Windows/network collections, and Python SDKs into versioned container images.[R20]

**Additional requirement**: controller-object definitions, Execution Environment definitions, and automation content should be separated into repositories or at least ownership domains. The platform deployment repository must not be coupled to the release cadence of application automation content.

## Inventory architecture

Do not combine `prod + dev + qa` into one giant inventory. Ansible's own guidance warns that mixing environments increases targeting mistakes and secret-access risk.[R22]

Use the environment as the first isolation boundary:

```text
inventories/
+-- prod/
+-- qa/
+-- dev/
\-- lab/
```

Inside each environment, combine multiple inventory sources:

```text
prod/
+-- azure_rm.yml
+-- aws_ec2.yml
+-- gcp.yml
+-- oci.yml
+-- onprem.yml
+-- group_vars/
\-- host_vars/
```

Recommended group taxonomy:

```text
env_prod
env_nonprod
cloud_azure
cloud_aws
cloud_gcp
cloud_oci
cloud_onprem
os_linux
os_windows
os_network
region_canadacentral
region_ca_central_1
site_montreal
role_web
role_database
role_domain_controller
business_app_x
patch_ring_1
patch_ring_2
```

Use `azure.azcollection.azure_rm` for Azure and `amazon.aws.aws_ec2` for AWS. For GCP and OCI, use the approved provider inventory plugin or API integration, supplemented by the CMDB where required.[R8][R9]

For VMware, note that the old `community.vmware.vmware_vm_inventory` plugin is deprecated and has moved to the newer `vmware.vmware` collection. A new platform should not be designed around the deprecated plugin.[R23]

### Inventory as a security boundary

Each target should carry at minimum `environment`, `owner`, `cloud`, `region`, `os_family`, `criticality`, `maintenance_window`, `lifecycle_state`, and `patch_ring` metadata. Production targeting should be policy-driven by these attributes rather than defaulting to `all`.

Dynamic inventory must **fail closed**. The following conditions should abort a job rather than broaden target scope: API/CMDB unavailable, unexpectedly empty results, unauthorized targets, decommissioned targets, targets from another environment, or missing critical metadata.

Use CI or controller prechecks for inventory schema validation, expected-count guardrails, and cross-environment detection.

## Multi-cloud integration

Multi-cloud differences should be absorbed by Collections, inventory plugins, and identity adapters rather than duplicated as provider-specific branches across business playbooks.

| Platform | Inventory | Preferred identity/authentication | Typical management scope |
|---|---|---|---|
| Azure | `azure.azcollection.azure_rm`, supplemented by Azure Resource Graph/CMDB | Managed Identity / Workload Identity Federation | VMs, NICs, NSGs, resource tags, PaaS APIs |
| AWS | `amazon.aws.aws_ec2`, supplemented by AWS APIs/CMDB | OIDC / AssumeRole / instance role | EC2, tags, security groups, AWS services |
| GCP | Approved provider inventory plugin/API, supplemented by CMDB | Workload Identity Federation / service-account impersonation | Compute, labels, and managed services |
| OCI | Approved provider inventory plugin/API, supplemented by CMDB | Instance/resource principals or scoped user identity | Compute, defined tags, and managed services |
| On-prem | NetBox, CMDB, VMware inventory, Git YAML | AD/Kerberos, SSH keys/CA, platform credentials | Linux/Windows, network, VMware, appliances |

Cloud-resource API automation and guest-OS automation should remain layered. For example, Azure VM resource configuration belongs in Azure Collection/API automation, while Windows guest patching belongs in `ansible.windows`/`community.windows`; do not combine both into one large, difficult-to-test role.

## Multi-platform connectivity

| Target | Recommended connection | Notes |
|---|---|---|
| Linux / Unix | SSH | Key-based authentication; sudo/become where needed |
| Windows Domain | PSRP/WinRM + Kerberos | Kerberos is recommended for domain environments; PSRP negotiate can prefer Kerberos |
| Windows Local | HTTPS + NTLM/Basic or SSH | Do not use Basic/NTLM over insecure HTTP |
| Network devices | `network_cli` / `httpapi` / `netconf` | Depends on platform collection |
| Azure/AWS/GCP/OCI APIs | local execution + SDK/API modules | Use least-privilege cloud identity |
| VMware / appliances | Collection/API plugin | Avoid excessive shell wrappers |

Ansible officially supports PSRP, WinRM, and SSH for Windows. The production Ansible control node should run on Linux/POSIX; Windows should not be used as a production Ansible control node.[R16][R17]

## Collections and roles

Do not accumulate all reusable logic indefinitely under a flat `roles/` directory. As the platform matures, create internal collections such as:

```text
company.platform
company.windows
company.linux
company.cloud
company.network
```

A standard collection can contain:

```text
collection/
+-- galaxy.yml
+-- docs/
+-- plugins/
+-- roles/
+-- playbooks/
+-- tests/
\-- meta/
```

This matches the supported Ansible collection structure.[R24]

Principles:

- Playbook = orchestration.
- Role = reusable configuration behavior.
- Collection = versioned enterprise automation product.
- Pin all external collection versions.
- Do not consume `latest` directly in production.
- Run regression tests before production upgrades.

## Execution environment supply chain

This is one of the key components that distinguishes a small Ansible setup from an enterprise implementation.

Problem: Direct `pip install` and `ansible-galaxy install` on a controller cause dependency drift.

Solution: Use `ansible-builder` to build Execution Environments:

```text
EE image
+-- pinned ansible-core
+-- azure.azcollection
+-- amazon.aws
+-- ansible.windows
+-- microsoft.ad
+-- ansible.netcommon
+-- vendor network collections
+-- Python Azure SDK
+-- boto3/botocore
+-- pypsrp / requests-kerberos
\-- company collections
```

CI build and scan flow:

```text
Git -> ansible-builder -> OCI image -> vulnerability scan -> registry -> AWX/controller
```

Ansible Builder documentation explicitly positions Execution Environments as portable, consistent environments reusable in AWX, local development, and CI.[R20]

### Execution environment requirements

Production EEs must not rely only on `:latest` or mutable tags. CI should record and publish: source commit, `ansible-builder` version, base-image digest, Collection locks/versions, Python/system dependency locks, SBOM, secret/dependency/image scan results, and the final image digest.

Recommended chain:

```text
execution-environment.yml
        -> ansible-builder
        -> tests
        -> SBOM + vulnerability scan
        -> OCI registry
        -> immutable sha256 digest
        -> controller job template
```

Production controllers reference the digest; tags may act as release aliases but must not be the only traceability identifier.

## CI/CD and GitHub / Azure DevOps integration

Standard workflow:

```text
Feature branch
   -> Pull Request
   -> YAML lint
   -> ansible-lint
   -> ansible-playbook --syntax-check
   -> Molecule / ansible-test
   -> security & secret scan
   -> build Execution Environment
   -> container vulnerability scan
   -> review / approval
   -> merge main
   -> release tag
   -> controller project sync
   -> controlled deployment
```

### GitHub

Recommended:

- Protected branch / required review.
- Use GitHub Actions for validation/build; keep production execution in AWX/Semaphore.
- When CI must access Azure/AWS, prefer OIDC/workload federation over long-lived cloud secrets. GitHub documents OIDC trust for providers including Azure and AWS.[R25][R26]

### Azure DevOps

Recommended:

- Azure Repos + Azure Pipelines.
- Reusable YAML templates for pipeline standards.
- Production Environments with approvals/checks.
- Least-privilege service connections.
- Use workload identity federation for Azure authentication; Microsoft currently recommends WIF instead of long-lived client secrets.[R27][R28][R29]

**Critical principle**: Do not design `merge main = patch every production host` as the default. Production changes should pass an explicit environment gate, approval, or controlled schedule.

**Recommended quality gates**: pull requests should run YAML/schema validation, `ansible-lint`, `ansible-playbook --syntax-check`, Molecule/`ansible-test` where applicable, secret scanning, and dependency/license scanning. The EE pipeline additionally runs image scanning, SBOM generation, and reproducibility checks. GitHub Actions and Azure Pipelines should implement equivalent controls rather than different security standards.

## Release and promotion model

The production release object is not "whatever is currently on main"; it is a traceable Automation Release.

An Automation Release should bind at minimum:

```yaml
release: 2026.08.27.1
source_commit: a739e41
collection_versions:
  company.platform: 2.4.1
execution_environment:
  image: registry.example.com/ansible-ee
  digest: sha256:...
inventory_policy_version: 3
change_reference: CHG0012345
```

Promotion model: `dev -> test -> staging -> production` uses the same source commit and the same EE digest. If the EE is rebuilt after staging, it becomes a new release and must be revalidated. Production must not directly track `main HEAD`.

Use a Git tag/release manifest as the input to controller synchronization and approval.

## Secrets management

### Baseline

Use:

- Semaphore/AWX credential store for controller connection credentials.
- Ansible Vault for encrypted variables that must live in Git.
- `no_log: true` on tasks that may expose secrets.
- Never store SSH private keys, Windows administrator passwords, or cloud credentials in plaintext vars.

Ansible Vault protects data at rest only; decrypted secrets still require careful handling during execution.[R21]

### More mature fully open-source target

OpenBao is an open-source secrets manager under the Linux Foundation/OpenSSF ecosystem, licensed under MPL-2.0, and is a candidate future independent secrets plane.[R30][R31]

Caution: the Ansible `community.hashi_vault` collection officially targets HashiCorp Vault APIs. OpenBao derives from Vault and aims at a highly compatible direction, but enterprise use must validate the specific authentication methods and secret engines required; compatibility must not be treated as unconditional.

A secrets provider is only the storage layer and does not replace identity separation. Credential templates should expose only fields required by the job and use `no_log`, output redaction, and short-lived credentials where possible. For an open-source-first route, Ansible Vault is the baseline and OpenBao is the more mature external secret-manager option; Azure Key Vault/AWS Secrets Manager can be cloud-platform options but introduce service cost/dependency.

## Controller object model

Controller Objects are controlled platform contracts, not free-form GUI combinations. At minimum define: Project, Inventory, Credential, Execution Environment, Job Template, Workflow Template, Notification, and Team/Role.

Production Job Templates should fix or tightly constrain:

- Project and approved revision/release;
- playbook path;
- inventory/environment;
- credential type;
- Execution Environment digest;
- allowed `limit`;
- allowed survey/extra vars;
- timeout, concurrency, and failure threshold.

**Do not allow by default** operators to select arbitrary credentials, project revisions, playbook paths, or cross-environment inventories. Prefer creating controller objects through API/IaC with code review.

## Workflow orchestration

Enterprise workflows should use a common stage model:

```text
Precheck
  -> Canary
  -> Automated Validation / Health Gate
  -> Approval
  -> Wave 1
  -> Health Gate
  -> Wave N
  -> Post-validation
  -> Evidence
```

Prechecks should validate connectivity, OS/platform, maintenance window, disk/capacity, critical service state, inventory ownership, target count, and release metadata. A Health Gate must not rely only on `failed=0`; it should also include application/service health, telemetry, or external monitoring results.

On failure, the workflow must explicitly enter one of three paths: `stop`, `rollback/forward-fix`, or `manual intervention`.

## Canary and bounded deployment

Canary and bounded execution are universal patterns for high-risk production automation, not only patching.

Controls include:

- `limit`: explicit target scope;
- `serial` or controller concurrency: limit simultaneous mutations;
- canary: start with one or a small representative subset;
- health gate: automated validation after the canary and each wave;
- `max_fail_percentage` or equivalent controller failure threshold;
- maintenance window;
- emergency stop/cancel;
- post-validation.

Production automation must satisfy: **no unbounded blast radius**. For Tier-1 systems, constrain target scope at both inventory and template layers so a single parameter error cannot broaden execution.

## Patch management

Linux:

- Distro-aware role.
- Ubuntu/Debian through apt.
- RHEL/Rocky/Alma/Amazon Linux through dnf/yum.
- Patch rings.
- Separate reboot and health validation.
- Non-production first, then production canary, then batches.

Windows: use `ansible.windows.win_updates`, which supports security/critical/update-rollup categories, managed update servers such as WSUS, and reboot handling.[R32]

Recommended rollout:

```text
Ring 0: lab
Ring 1: dev/QA
Ring 2: production canary
Ring 3: production batch A
Ring 4: production batch B
```

Required controls:

- Maintenance window.
- Pre-check.
- Drain/stop-service hook.
- Patch.
- Reboot.
- Post-check.
- Application health validation.
- Failure threshold / stop condition.

Patch workflows should use the common Workflow model in Sections 18/19. Differences such as Windows reboot, Linux kernel update, or cloud instance replacement are handled by roles/collections, while release, approval, canary, health gate, waves, and evidence remain consistent.

## Security, CIS, and STIG

`ansible-lockdown` should not be a global role executed on every run by default. Use a dedicated structure:

```text
playbooks/security/
+-- audit.yml
+-- cis-remediate-linux.yml
+-- cis-remediate-windows.yml
\-- verify.yml
```

Execution model:

```text
Audit -> report -> approve exception -> remediate -> reboot if required -> verify -> evidence
```

Every benchmark must bind to:

- OS version.
- Benchmark version.
- Organization exceptions.
- Test evidence.
- Rollback/repair plan.

## RBAC and separation of duties

Minimum role model:

| Role | Permission model |
|---|---|
| Platform Admin | Manages controller/platform; no default business-OS mutation rights |
| Automation Developer | Modifies code and opens PRs; no direct production execution |
| Operator | Runs approved job templates |
| Security Operator | Runs compliance/hardening templates |
| Auditor | Read-only job history/evidence |

Semaphore Community has built-in team roles, but fine-grained Extended RBAC is currently an Enterprise feature.[R4]

Therefore, if RBAC is a mandatory enterprise control, the long-term design should:

- Evaluate AWX; or
- Purchase the necessary Semaphore enterprise capability; or
- Put critical approval gates in GitHub/ADO environments instead of relying only on Semaphore Community UI.

Separation of duties must map to both Git and controller layers: code authors cannot bypass pull requests through the UI; approvers do not need target-admin secrets; credential administrators are not automatically job operators; auditors have read-only evidence access.

## Network and execution zones

The largest practical multi-cloud constraint is usually not Ansible itself; it is network reachability.

Controller-to-target requirements include:

- Linux: TCP/22.
- Windows WinRM: TCP/5985/5986 with secure configuration preferred.
- Windows SSH: TCP/22 when used.
- Network devices: platform-specific SSH/API/NETCONF ports.
- Azure/AWS API: outbound HTTPS/443.
- GitHub/ADO/registry: outbound HTTPS/443.

Recommended logical zones:

```text
Management Zone
   |
   +-- Azure Hub / Management VNet
   +-- AWS Shared Services VPC
   +-- On-prem Management VLAN
```

If one central controller cannot securely reach all zones, the long-term controller must support execution close to target networks. This requirement is a primary reason to evaluate AWX or enterprise runner models early.

Network-zone design must validate both the **control path** (Git/Registry/IdP/Secret/DB/API) and the **execution path** (EE -> target). AWX execution nodes/mesh or equivalent execution-zone capabilities fit Azure/AWS/GCP/OCI/on-premises/DMZ segmentation; if Semaphore Community is selected, verify that its free capabilities meet the required isolated-execution model rather than assuming commercial runner features exist.

## Observability

Minimum records:

- Job result.
- Who executed it.
- Execution time.
- Git commit/tag.
- Inventory/environment.
- Target hosts.
- changed/failed/unreachable status.
- stdout/stderr retention.

Recommended integrations:

- Prometheus/Grafana for platform metrics.
- Loki/ELK/OpenSearch for controller/system logs.
- SIEM for security/compliance events.

The Git commit ID must be traceable from the job record to establish a complete `code -> approval -> execution -> result` chain.

Observability should distinguish three data classes: controller platform health, automation-job telemetry, and managed-service/application health. The latter two jointly form health gates. Logging systems must avoid storing secret values while retaining sufficient evidence for audit and incident correlation.

## Automation evidence model

Logs are not the same as Evidence. Define a structured `AutomationEvidenceRecord` containing at minimum:

```yaml
change_id: CHG0012345
repository_url: https://github.com/company/ansible-automation-content
source_commit: a739e41
release: 2026.08.27.1
execution_environment_digest: sha256:...
controller_workflow_id: 12981
controller_job_id: 13721
requested_by: userA
approved_by: userB
executed_as: ansible-prod
inventory_source: azure_rm
environment: production
targets: [vm-prod-01, vm-prod-02]
start_time: ...
end_time: ...
changed: 2
failed: 0
precheck: pass
health_gate: pass
recovery_action: none
```

Evidence may be sent to SIEM/logging, object storage, or indexed/attached in ITSM, but it requires retention and access-control policy. Audit should allow `change_id` or `job_id` to trace back to commit, EE digest, target, identity, approval, and outcome.

## Change management integration

Change Management is an external control-plane integration point; do not hard-code ITSM logic into every role.

Recommended interface:

```text
Automation Release
   -> Change Request / Approval
   -> Controller Workflow
   -> Evidence Record
   -> Change Update / Closure
```

In the current open-source phase, GitHub/Azure DevOps Environment approval plus a change-reference field is sufficient. Later integration with ServiceNow, Jira Service Management, or another ITSM should not require rewriting underlying roles. Production workflows should require a `change_id` or equivalent reference and preserve it in evidence.

## Change recovery

You must distinguish **Change Recovery** from **Platform DR**.

Change Recovery addresses cases where automation executed but the business outcome is unacceptable, or execution failed mid-change:

- configuration files: restore the previous controlled artifact;
- packages: use a vendor-supported downgrade or forward-fix;
- Windows/Linux patches: rollback/uninstall/reimage according to OS/product support policy;
- certificates/identity: usually prefer forward recovery;
- database/schema: require dedicated migration/restore planning;
- network: capture before-state and use checkpoint/commit-confirmed where supported.

Every high-risk Role/Workflow must declare a `recovery_strategy` in README or metadata and validate it in lab/test. Do not confuse "Ansible idempotent" with "automatically reversible".

## Platform backup and DR

Git is the source of truth for automation code, but it is not a complete platform backup.

Back up:

- PostgreSQL.
- Controller encryption keys.
- Controller configuration.
- OIDC/LDAP configuration.
- Inventory/credential metadata.
- Execution Environment definitions.
- OpenBao data if used.
- TLS certificates/private keys or an automated rebuild process.

DR objective:

```text
Rebuild platform from IaC
+ Restore PostgreSQL
+ Restore encryption/secrets material
+ Pull automation content from Git
+ Pull/rebuild EE images
= Recovered control plane
```

Platform DR scope includes controller database, controller configuration/object definitions, registry/EE availability, secret-provider connectivity, Git availability, and evidence storage. Define RPO/RTO by production criticality. After platform recovery, verify that controller release, inventory, and credentials have not drifted.

## Validation

The HOL-05 hands-on lab success criteria become the minimum platform acceptance tests. Before production onboarding, prove at least:

- [ ] The repository contains no plaintext secrets;
- [ ] The EE builds from a pinned, reviewed definition and is reproducible locally/in CI;
- [ ] CI blocks on syntax, lint, test, secret, dependency, or image-scan failure;
- [ ] The same source revision and EE digest are tested and promoted;
- [ ] Dynamic inventory fails closed and cannot unexpectedly expand to all hosts;
- [ ] Production credentials/inventories cannot be selected by unauthorized users;
- [ ] Job Templates use fixed playbooks and bounded target scope;
- [ ] A deliberately failing canary prevents the next wave;
- [ ] Production simulation uses bounded concurrency, limits, and failure thresholds;
- [ ] A second compliant run produces no unintended changes where idempotency applies;
- [ ] Evidence correlates source, runtime, identity, targets, approval, and outcome;
- [ ] Recovery has been executed or exercised;
- [ ] Cleanup removes/expires lab identities, secrets, controller objects, and test resources.

These are architecture acceptance criteria, not optional "best practices".

## Implementation roadmap

### Phase 0: Repository foundation

- Create `automation-platform-iac`.
- Create `ansible-automation-content`.
- Create `ansible-execution-environments`.
- Define branch/PR policy.

### Phase 1: Lab

- Semaphore Community + PostgreSQL.
- Two Linux + two Windows demo hosts.
- GitHub or ADO integration.
- Linux SSH.
- Windows PSRP/WinRM.
- Static inventory.

### Phase 2: Multi-environment

- Separate dev/qa/prod inventories.
- Azure dynamic inventory.
- AWS dynamic inventory.
- GCP and OCI provider inventory integrations.
- Group taxonomy.
- Credential isolation.

### Phase 3: CI quality gates

- yamllint.
- ansible-lint.
- syntax check.
- Molecule.
- secret scanning.
- Execution Environment build.

### Phase 4: Enterprise operations

- Patching rings.
- Standard baseline roles.
- Health checks.
- Scheduling.
- Audit/evidence.
- OpenBao evaluation.

### Phase 5: Control-plane decision

Formally evaluate migration to AWX when any of the following appears:

- Multiple independent teams share the platform.
- Complex workflows are required.
- Stronger execution isolation is required.
- Stronger RBAC is required.
- Large-scale containerized Execution Environments are required.
- Execution must scale across isolated security zones.

### Phase 6: Controlled enterprise release

- Release manifest and same-revision promotion.
- EE digest pinning, SBOM, and image scanning.
- Controller objects as code.
- Canary/health-gate/bounded-wave workflows.
- Evidence schema and change reference.
- Recovery exercise and formal acceptance test.

## Final repository structure

Use at least three core repositories; larger organizations can further split Collections:

```text
automation-platform-iac/
+-- controller/
|   +-- awx/                  # or semaphore/
|   +-- objects/              # projects, inventories, templates, workflows
|   \-- rbac/
+-- kubernetes/               # if AWX operator is used
+-- database/
+-- reverse-proxy/
+-- backup/
+-- observability/
\-- docs/

ansible-execution-environments/
+-- base/
|   +-- execution-environment.yml
|   +-- requirements.yml
|   +-- requirements.txt
|   \-- bindep.txt
+-- linux/
+-- windows/
+-- cloud/
+-- network/
+-- tests/
\-- .github/ or azure-pipelines/

ansible-automation-content/
+-- inventories/
|   +-- dev/
|   +-- test/
|   +-- staging/
|   \-- prod/
+-- inventory_plugins/
+-- playbooks/
|   +-- linux/
|   +-- windows/
|   +-- cloud/
|   +-- network/
|   \-- workflows/
+-- collections/
|   \-- ansible_collections/company/platform/
|       +-- roles/
|       +-- plugins/
|       +-- playbooks/
|       +-- tests/
|       \-- docs/
+-- release/
|   \-- release-manifest.yml
+-- schemas/
|   +-- inventory.schema.json
|   \-- evidence.schema.json
+-- tests/
+-- .ansible-lint
+-- ansible.cfg
\-- README.md
```

**For larger organizations**: split `company.linux`, `company.windows`, `company.cloud`, `company.network`, and `company.security` into independent Collection repositories, leaving `ansible-automation-content` for thin playbooks and release orchestration.

## Technology matrix

| Layer | Recommendation |
|---|---|
| Automation language | Ansible |
| Source control | GitHub or Azure Repos |
| CI | GitHub Actions or Azure Pipelines |
| Starter controller | Semaphore UI Community |
| Enterprise OSS target | AWX |
| Controller DB | PostgreSQL |
| Execution packaging | ansible-builder / Execution Environments |
| Linux transport | SSH |
| Windows transport | PSRP/WinRM + Kerberos, or SSH |
| Azure inventory | `azure.azcollection.azure_rm` |
| AWS inventory | `amazon.aws.aws_ec2` |
| GCP/OCI inventory | Approved provider inventory plugin/API, supplemented by CMDB |
| Windows collection | `ansible.windows` + `microsoft.ad` |
| Network collections | `ansible.netcommon` + vendor collections |
| Secrets baseline | Ansible Vault + controller encrypted credential store |
| Future OSS secrets plane | OpenBao |
| Compliance | ansible-lockdown after validation |
| Testing | ansible-lint + Molecule + ansible-test |
| Registry | Enterprise OCI registry / GHCR / ACR / ECR, etc. |

Additional enterprise controls: Release Manifest, SBOM, Evidence Schema, ITSM integration point, health gate, and recovery metadata are part of the architecture standard.

## Architecture decisions and ADRs

If the current estate is only tens of hosts, deploying AWX immediately introduces material Kubernetes operational overhead. **Semaphore Community + PostgreSQL + Git + a standardized Ansible repository** is a defensible Phase 1.

However, if the end state is clearly a shared enterprise multi-cloud automation control plane, the future architecture must not be constrained by the free feature boundaries of Semaphore Community. The most important design decision is:

> **Place the durable value in Git, Ansible Collections, inventories, tests, and Execution Environments, not in any single controller UI.**

This allows Phase 1 to use Semaphore and Phase 5 to move to AWX while changing the control plane rather than rewriting Linux, Windows, Azure, AWS, GCP, OCI, and on-premises automation content.

---

Record the key decisions formally as ADRs:

| ADR | Decision |
|---|---|
| ADR-001 | Git is the source of truth; business logic is not stored in the controller |
| ADR-002 | AWX is the long-term OSS enterprise controller; Semaphore Community is the starter |
| ADR-003 | Production runtime uses immutable EE digests |
| ADR-004 | Dynamic inventory fails closed |
| ADR-005 | Same-revision promotion |
| ADR-006 | Identity separation / least privilege |
| ADR-007 | Canary + bounded waves are the default for high-risk production automation |
| ADR-008 | Evidence schema and change correlation are mandatory |
| ADR-009 | Change Recovery is separate from Platform DR |
| ADR-010 | Automation content remains controller-agnostic |

## Related topics

- [Ansible Automation Architecture Reference Model](../infra-architecture/ansible-automation-architecture-reference-model.md)
- [Build an Enterprise Ansible Automation Platform for Azure and Hybrid Servers](../hands-on-lab/build-enterprise-ansible-automation-platform-for-azure-and-hybrid-servers.md)
- [Pipeline as Code Standards and Reusable Templates](../ci-cd-automation/pipeline-as-code-standards-and-reusable-templates.md)
- [Infrastructure and Application Health Monitoring](../operations-reliability-finops/infrastructure-and-application-health-monitoring.md)
- [How to Manage Secrets, Certificates, and Keys](../how-to-guides/how-to-manage-secrets-certificates-and-keys.md)

## References

- [Semaphore UI main repository and license](https://github.com/semaphoreui/semaphore)
- [Semaphore UI pricing / edition guidance](https://semaphoreui.com/pricing)
- [Semaphore UI documentation](https://semaphoreui.com/docs)
- [Semaphore Teams and Extended RBAC](https://semaphoreui.com/docs/user-guide/team)
- [Semaphore encryption keys / credential encryption](https://semaphoreui.com/docs/admin-guide/security/encryption)
- [Semaphore Key Store](https://semaphoreui.com/docs/user-guide/key-store)
- [Semaphore repositories](https://semaphoreui.com/docs/user-guide/repositories)
- [Ansible Azure dynamic inventory: `azure.azcollection.azure_rm`](https://docs.ansible.com/projects/ansible/latest/collections/azure/azcollection/azure_rm_inventory.html)
- [Ansible AWS dynamic inventory: `amazon.aws.aws_ec2`](https://docs.ansible.com/projects/ansible/latest/collections/amazon/aws/docsite/aws_ec2_guide.html)
- [Semaphore demo repository](https://github.com/semaphoreui/semaphore-demo)
- [Adfinis Semaphore Ansible Collection](https://github.com/adfinis/ansible-collection-semaphoreui)
- [Ansible for DevOps examples](https://github.com/geerlingguy/ansible-for-devops)
- [Ansible Lockdown organization](https://github.com/ansible-lockdown)
- [Ansible Lockdown Ubuntu 22 CIS repository](https://github.com/ansible-lockdown/UBUNTU22-CIS)
- [Ansible Lockdown Windows Server 2022 CIS repository](https://github.com/ansible-lockdown/Windows-2022-CIS)
- [Ansible Windows connection guide](https://docs.ansible.com/projects/ansible-core/devel/os_guide/windows_winrm.html)
- [Managing Windows hosts with Ansible](https://docs.ansible.com/projects/ansible/latest/os_guide/intro_windows.html)
- [AWX Operator](https://github.com/ansible/awx-operator)
- [AWX Operator basic installation](https://github.com/ansible/awx-operator/blob/devel/docs/installation/basic-install.md)
- [Ansible Builder / Execution Environments](https://ansible.readthedocs.io/projects/builder/en/latest/)
- [Ansible Vault](https://docs.ansible.com/projects/ansible/latest/vault_guide/vault.html)
- [Ansible general tips: separate staging and production inventory](https://docs.ansible.com/projects/ansible/latest/tips_tricks/ansible_tips_tricks.html)
- [VMware inventory plugin deprecation/migration](https://docs.ansible.com/projects/ansible/latest/collections/community/vmware/vmware_vm_inventory_inventory.html)
- [Ansible Collection structure](https://docs.ansible.com/projects/ansible-core/devel/dev_guide/developing_collections_structure.html)
- [GitHub Actions OIDC reference](https://docs.github.com/en/actions/reference/security/oidc)
- [GitHub OIDC with Azure](https://docs.github.com/en/actions/how-tos/secure-your-work/security-harden-deployments/oidc-in-azure)
- [Azure Pipelines approvals and checks](https://learn.microsoft.com/en-us/azure/devops/pipelines/process/approvals)
- [Azure Pipelines secure YAML templates](https://learn.microsoft.com/en-us/azure/devops/pipelines/security/templates)
- [Azure DevOps workload identity federation service connections](https://learn.microsoft.com/en-us/azure/devops/pipelines/library/connect-to-azure)
- [OpenBao official site](https://openbao.org/)
- [OpenBao source and MPL-2.0 license](https://github.com/openbao/openbao)
- [`ansible.windows.win_updates`](https://docs.ansible.com/projects/ansible/latest/collections/ansible/windows/win_updates_module.html)
- [Semaphore Project Runners (Pro)](https://semaphoreui.com/docs/user-guide/projects/runners)
- [Semaphore High Availability (Enterprise)](https://semaphoreui.com/docs/admin-guide/ha)
- [Semaphore Security / HashiCorp Vault integration (Pro)](https://semaphoreui.com/docs/admin-guide/security)

- [Semaphore UI pricing / edition guidance](https://semaphoreui.com/pricing)
- [Semaphore UI documentation](https://semaphoreui.com/docs)
- [Semaphore Teams and Extended RBAC](https://semaphoreui.com/docs/user-guide/team)
- [Semaphore encryption keys / credential encryption](https://semaphoreui.com/docs/admin-guide/security/encryption)
- [Semaphore Key Store](https://semaphoreui.com/docs/user-guide/key-store)
- [Semaphore repositories](https://semaphoreui.com/docs/user-guide/repositories)
- [Ansible Azure dynamic inventory: `azure.azcollection.azure_rm`](https://docs.ansible.com/projects/ansible/latest/collections/azure/azcollection/azure_rm_inventory.html)
- [Ansible AWS dynamic inventory: `amazon.aws.aws_ec2`](https://docs.ansible.com/projects/ansible/latest/collections/amazon/aws/docsite/aws_ec2_guide.html)
- [Semaphore demo repository](https://github.com/semaphoreui/semaphore-demo)
- [Adfinis Semaphore Ansible Collection](https://github.com/adfinis/ansible-collection-semaphoreui)
- [Ansible for DevOps examples](https://github.com/geerlingguy/ansible-for-devops)
- [Ansible Lockdown organization](https://github.com/ansible-lockdown)
- [Ansible Lockdown Ubuntu 22 CIS repository](https://github.com/ansible-lockdown/UBUNTU22-CIS)
- [Ansible Lockdown Windows Server 2022 CIS repository](https://github.com/ansible-lockdown/Windows-2022-CIS)
- [Ansible Windows connection guide](https://docs.ansible.com/projects/ansible-core/devel/os_guide/windows_winrm.html)
- [Managing Windows hosts with Ansible](https://docs.ansible.com/projects/ansible/latest/os_guide/intro_windows.html)
- [AWX Operator](https://github.com/ansible/awx-operator)
- [AWX Operator basic installation](https://github.com/ansible/awx-operator/blob/devel/docs/installation/basic-install.md)
- [Ansible Builder / Execution Environments](https://ansible.readthedocs.io/projects/builder/en/latest/)
- [Ansible Vault](https://docs.ansible.com/projects/ansible/latest/vault_guide/vault.html)
- [Ansible general tips: separate staging and production inventory](https://docs.ansible.com/projects/ansible/latest/tips_tricks/ansible_tips_tricks.html)
- [VMware inventory plugin deprecation/migration](https://docs.ansible.com/projects/ansible/latest/collections/community/vmware/vmware_vm_inventory_inventory.html)
- [Ansible Collection structure](https://docs.ansible.com/projects/ansible-core/devel/dev_guide/developing_collections_structure.html)
- [GitHub Actions OIDC reference](https://docs.github.com/en/actions/reference/security/oidc)
- [GitHub OIDC with Azure](https://docs.github.com/en/actions/how-tos/secure-your-work/security-harden-deployments/oidc-in-azure)
- [Azure Pipelines approvals and checks](https://learn.microsoft.com/en-us/azure/devops/pipelines/process/approvals)
- [Azure Pipelines secure YAML templates](https://learn.microsoft.com/en-us/azure/devops/pipelines/security/templates)
- [Azure DevOps workload identity federation service connections](https://learn.microsoft.com/en-us/azure/devops/pipelines/library/connect-to-azure)
- [OpenBao official site](https://openbao.org/)
- [OpenBao source and MPL-2.0 license](https://github.com/openbao/openbao)
- [`ansible.windows.win_updates`](https://docs.ansible.com/projects/ansible/latest/collections/ansible/windows/win_updates_module.html)
- [Semaphore Project Runners (Pro)](https://semaphoreui.com/docs/user-guide/projects/runners)
- [Semaphore High Availability (Enterprise)](https://semaphoreui.com/docs/admin-guide/ha)
- [Semaphore Security / HashiCorp Vault integration (Pro)](https://semaphoreui.com/docs/admin-guide/security)

## Source alignment note

This v1.1 revision was cross-checked against [HOL-05, "Build an Enterprise Ansible Automation Platform for Azure and Hybrid Servers"](../hands-on-lab/build-enterprise-ansible-automation-platform-for-azure-and-hybrid-servers.md), version 1.0, last updated 2026-08-13. HOL-05 is used as an implementation and acceptance profile for Execution Environments, inventory, identity, controlled promotion, canary execution, evidence, recovery, and cleanup.

## License and usage note

This document is a reference architecture, not a product certification, security approval, or vendor support commitment. Before production rollout, validate Ansible versions, collection compatibility, controller edition limits, network and firewall design, authentication methods, CIS/STIG benchmark versions, and organization-specific change-management, audit, and compliance requirements.

<!-- Source-marker link definitions used throughout this article. -->
[R1]: https://github.com/semaphoreui/semaphore "Semaphore UI main repository and license"
[R2]: https://semaphoreui.com/pricing "Semaphore UI pricing and edition guidance"
[R3]: https://semaphoreui.com/docs "Semaphore UI documentation"
[R4]: https://semaphoreui.com/docs/user-guide/team "Semaphore teams and Extended RBAC"
[R5]: https://semaphoreui.com/docs/admin-guide/security/encryption "Semaphore encryption keys and credential encryption"
[R6]: https://semaphoreui.com/docs/user-guide/key-store "Semaphore Key Store"
[R7]: https://semaphoreui.com/docs/user-guide/repositories "Semaphore repositories"
[R8]: https://docs.ansible.com/projects/ansible/latest/collections/azure/azcollection/azure_rm_inventory.html "Ansible Azure dynamic inventory"
[R9]: https://docs.ansible.com/projects/ansible/latest/collections/amazon/aws/docsite/aws_ec2_guide.html "Ansible AWS dynamic inventory"
[R10]: https://github.com/semaphoreui/semaphore-demo "Semaphore demo repository"
[R11]: https://github.com/adfinis/ansible-collection-semaphoreui "Adfinis Semaphore Ansible Collection"
[R12]: https://github.com/geerlingguy/ansible-for-devops "Ansible for DevOps examples"
[R13]: https://github.com/ansible-lockdown "Ansible Lockdown organization"
[R14]: https://github.com/ansible-lockdown/UBUNTU22-CIS "Ansible Lockdown Ubuntu 22 CIS repository"
[R15]: https://github.com/ansible-lockdown/Windows-2022-CIS "Ansible Lockdown Windows Server 2022 CIS repository"
[R16]: https://docs.ansible.com/projects/ansible-core/devel/os_guide/windows_winrm.html "Ansible Windows connection guide"
[R17]: https://docs.ansible.com/projects/ansible/latest/os_guide/intro_windows.html "Managing Windows hosts with Ansible"
[R18]: https://github.com/ansible/awx-operator "AWX Operator"
[R19]: https://github.com/ansible/awx-operator/blob/devel/docs/installation/basic-install.md "AWX Operator basic installation"
[R20]: https://ansible.readthedocs.io/projects/builder/en/latest/ "Ansible Builder and Execution Environments"
[R21]: https://docs.ansible.com/projects/ansible/latest/vault_guide/vault.html "Ansible Vault"
[R22]: https://docs.ansible.com/projects/ansible/latest/tips_tricks/ansible_tips_tricks.html "Ansible environment separation guidance"
[R23]: https://docs.ansible.com/projects/ansible/latest/collections/community/vmware/vmware_vm_inventory_inventory.html "VMware inventory plugin guidance"
[R24]: https://docs.ansible.com/projects/ansible-core/devel/dev_guide/developing_collections_structure.html "Ansible Collection structure"
[R25]: https://docs.github.com/en/actions/reference/security/oidc "GitHub Actions OIDC reference"
[R26]: https://docs.github.com/en/actions/how-tos/secure-your-work/security-harden-deployments/oidc-in-azure "GitHub OIDC with Azure"
[R27]: https://learn.microsoft.com/en-us/azure/devops/pipelines/process/approvals "Azure Pipelines approvals and checks"
[R28]: https://learn.microsoft.com/en-us/azure/devops/pipelines/security/templates "Azure Pipelines secure YAML templates"
[R29]: https://learn.microsoft.com/en-us/azure/devops/pipelines/library/connect-to-azure "Azure DevOps workload identity federation service connections"
[R30]: https://openbao.org/ "OpenBao official site"
[R31]: https://github.com/openbao/openbao "OpenBao source and MPL-2.0 license"
[R32]: https://docs.ansible.com/projects/ansible/latest/collections/ansible/windows/win_updates_module.html "ansible.windows.win_updates"
[R33]: https://semaphoreui.com/docs/user-guide/projects/runners "Semaphore Project Runners"
[R34]: https://semaphoreui.com/docs/admin-guide/ha "Semaphore High Availability"
[R35]: https://semaphoreui.com/docs/admin-guide/security "Semaphore security and HashiCorp Vault integration"
