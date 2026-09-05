---
title: "How to Manage Secrets, Certificates, and Keys"
summary: "Centralize issuance, access, rotation, monitoring, and recovery for application secrets, TLS certificates, and cryptographic keys across multiple clouds."
document_id: "HTG-22"
category: "How-to & Guides"
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
owner: "Cloud Center of Excellence"
audience:
  - security engineers
  - platform engineers
  - application engineers
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

> **Document class:** How-to Guides implementation guide
> **Normative terms:** **MUST**, **MUST NOT**, **SHOULD**, **SHOULD NOT**, and **MAY** are requirements levels.
> **Applicability:** Secrets, certificates, keys, issuance, delivery, rotation, revocation, monitoring, and recovery across multiple clouds.
> **Exception process:** Deviations require a documented risk assessment, compensating controls, named risk owner, and expiry date.

| Control field | Value |
|---|---|
| Document ID | `HTG-22` |
| Owner | Cloud Center of Excellence |
| Review cycle | At least annually and after material cryptography, identity, or provider changes |
| Evidence | Inventory, owner and expiry, access policy, rotation test, certificate health, audit logs, backup or recovery record, and incident response |

# How to Manage Secrets, Certificates, and Keys

> **Decision in brief:** Prefer workload identity, centralize unavoidable cryptographic material, and automate its scope, rotation, revocation, and recovery.

> **Document type:** Security and operations guide  
> **Primary example:** Azure Key Vault with managed identity  
> **Operating principle:** Prefer identity over secrets; when secret material is unavoidable, make its lifecycle automatic, scoped, observable, and recoverable.

## Objective

Prevent credentials and private keys from being embedded in source code, pipeline variables, container images, configuration files, chat, or operator workstations. Establish one governed lifecycle for creation, storage, use, rotation, expiry, revocation, deletion, and evidence.

## Classify the material

| Type | Examples | Required handling |
|---|---|---|
| Secret | Password, API token, connection string | Generate randomly, scope narrowly, rotate, never log |
| Certificate | TLS or client-auth certificate | Track issuer, SANs, chain, renewal, deployment, revocation |
| Key | KMS/HSM encryption or signing key | Define algorithm, protection level, rotation, usage policy, recovery |
| Recovery material | Break-glass credential, root key share | Offline or isolated storage, dual control, test and monitor use |

## Reference lifecycle

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

## Implement the control plane

1. Assign a named owner and rotation SLA to every secret, certificate, and key.
2. Use separate vault boundaries for production, non-production, tenant, and regulatory scope.
3. Connect through private endpoints where required and restrict public access.
4. Authorize workloads with managed identity, IAM role, workload federation, or resource principal.
5. Separate read, write, rotate, backup, recover, purge, and policy-administration duties.
6. Enable soft delete, purge protection, versioning, audit logs, expiry alerts, and immutable evidence retention.
7. Deliver material at runtime through an SDK, sidecar/driver, or short-lived broker; do not copy it into deployment artifacts.
8. Automate rotation and verify every consumer before disabling the old version.

## Provider mapping

| Capability | Azure | AWS | GCP | OCI |
|---|---|---|---|---|
| Secrets | Key Vault secrets | Secrets Manager or Parameter Store | Secret Manager | Vault secrets |
| Managed keys | Key Vault / Managed HSM | KMS / CloudHSM | Cloud KMS / Cloud HSM | Vault / KMS / dedicated HSM options |
| Certificates | Key Vault and managed certificate services | ACM / Private CA | Certificate Manager / CAS | Certificates / private CA capabilities |
| Workload access | Managed identity / federation | IAM role and STS | Workload identity / service account | Resource or instance principal |

## Rotation pattern

Use overlapping versions: issue a new version, update consumers, prove successful authentication or decryption, then disable and later destroy the old version according to retention policy. For database credentials, prefer dynamic or identity-based access. For TLS, test the complete chain, SNI, revocation behavior, client trust, and rollback before cutover.

Key rotation does not automatically re-encrypt existing data. Document whether rotation changes only the wrapping key version, requires background re-encryption, or affects signatures that must remain verifiable.

## Prevent leakage

- Run secret scanning before commit and continuously across history and artifacts.
- Masking is not protection; malicious code can transform or exfiltrate values.
- Never place production secrets in developer `.env` files or shared variable groups.
- Prevent operators from listing secret values unless break-glass access is approved.
- Scrub sensitive headers and payloads from logs, traces, crash dumps, and support bundles.

## Validation

- [ ] Workloads retrieve only their required material with short-lived identity.
- [ ] Network and IAM controls block unauthorized vault access and purge operations.
- [ ] Rotation completes without outage and the retired version no longer authenticates.
- [ ] Expiry, access anomaly, deletion, policy change, and logging failure alerts are tested.
- [ ] Restore and break-glass procedures work under dual control.
- [ ] Repositories, images, pipeline artifacts, state files, and logs contain no secret values.

## Incident response

For suspected disclosure, revoke or disable the credential, rotate every derivative credential, isolate the affected workload, preserve evidence, inspect use since the earliest exposure, remove the value from current and historical artifacts through an approved process, and correct the delivery path. Rotation without investigation is incomplete.

## Related topics

- [Secrets, Certificates, and Key Management](../networking-identity-security/nis-secrets-certificates-and-key-management.md)
- [Identity, Secrets, and Workload-Federation Standard](../standards-best-practices/identity-secrets-and-workload-federation-standard.md)
- [How to Federate Workload Identity Across Clouds](how-to-federate-workload-identity-across-clouds.md)

## Related repos

- [andyxuan2010/azure-landingzone](https://github.com/andyxuan2010/azure-landingzone) — implements Key Vault and private foundation controls applicable to the centralized lifecycle described here.
- [andyxuan2010/enterprise-ai-chatbot](https://github.com/andyxuan2010/enterprise-ai-chatbot) — demonstrates an application workload using Key Vault and Entra identity for protected service configuration.
