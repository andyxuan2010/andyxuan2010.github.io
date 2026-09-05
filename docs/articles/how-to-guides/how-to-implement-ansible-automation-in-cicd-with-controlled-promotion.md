---
title: "How to Implement Ansible Automation in CI/CD with Controlled Promotion"
summary: "Implement a CI/CD workflow that tests Ansible content, builds immutable execution environments, and promotes automation through controlled environment approvals."
document_id: "HTG-31"
category: "How-to & Guides"
article_type: "how-to"
tags:
  - ansible
  - cicd
  - promotion
  - execution-environments
  - devops
  - change-management
  - testing
status: "published"
order: 310
version: "1.0"
last_updated: "2026-08-28"
review_status: "machine-validated"
review_cadence: "annual"
decision_status: "active"
owner: "Cloud Center of Excellence"
audience:
  - DevOps engineers
  - automation engineers
  - platform engineers
  - IT operations professionals
  - security engineers
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
  - CICD-15
  - SBP-13
  - CICD-07
  - HTG-11
  - HOL-05
---

> **Document class:** How-to Guides implementation guide
> **Normative terms:** **MUST**, **MUST NOT**, **SHOULD**, **SHOULD NOT**, and **MAY** are requirements levels.
> **Applicability:** Ansible content testing, execution-environment builds, artifact publication, controlled promotion, approvals, and target-aware execution.
> **Exception process:** Deviations require a documented risk assessment, compensating controls, named risk owner, and expiry date.

| Control field | Value |
|---|---|
| Document ID | `HTG-31` |
| Owner | Cloud Center of Excellence |
| Review cycle | At least annually and after material Ansible, controller, or pipeline changes |
| Evidence | Source revision, test results, execution-environment digest, promotion approvals, controller job, target inventory, and rollback evidence |

# How to Implement Ansible Automation in CI/CD with Controlled Promotion

> **Decision in brief:** Treat Ansible content and execution environments as immutable release artifacts, and keep production execution behind target-aware approvals.

## Purpose

Use this procedure to deliver Ansible playbooks, roles, collections, and execution environments through a protected CI/CD workflow. The procedure keeps CI responsible for validation and publication while a controller or approved execution service remains responsible for target-aware production execution.

The result is a promotion path that can prove which source revision, runtime, inventory, identity, approval, and target scope produced a change. Adapt the pipeline syntax to Azure DevOps, GitHub Actions, GitLab, or another CI platform; keep the control boundaries the same.

## Target workflow

```mermaid
flowchart LR
    CHANGE[Pull request] --> TEST[Lint, syntax, unit, integration, secret and security tests]
    TEST --> BUILD[Build and scan execution environment]
    BUILD --> PUBLISH[Publish immutable artifact]
    PUBLISH --> DEV[Development controller job]
    DEV --> STAGE[Staging approval and job]
    STAGE --> PROD[Production approval]
    PROD --> CANARY[Canary execution]
    CANARY --> HEALTH[Health gate]
    HEALTH --> WAVE[Serial production waves]
    WAVE --> EVIDENCE[Evidence and change closure]
```

## Prerequisites

- a Git repository with a protected default branch;
- a CI project with protected environments;
- an Ansible controller or approved execution service;
- a container registry for execution environments;
- test targets that can be restored or recreated;
- an approved secret provider; and
- a change record or release system for production promotion.

## Step 1: Define the repository contract

Document supported Ansible, Python, collection, operating-system, and controller versions. Include `collections/requirements.yml`, `execution-environment.yml`, `.ansible-lint`, tests, a README, and a changelog.

Declare for each deployable playbook:

- purpose and non-goals;
- supported target platforms and inventory groups;
- required privileges and network access;
- variables, types, defaults, and sensitive values;
- check-mode and idempotency behavior;
- target exclusions and maximum scope;
- health checks and success criteria; and
- rollback or forward-recovery behavior.

Do not allow the pipeline to infer a production target from a branch name or free-form variable.

## Step 2: Build CI validation

Run checks in a controlled environment that resembles production:

```bash
ansible-lint .
ansible-playbook --syntax-check playbooks/site.yml
ansible-galaxy collection install -r collections/requirements.yml --force-with-deps
pytest -q
```

Add:

- YAML parsing and formatting;
- dependency and license review;
- secret scanning;
- static security analysis;
- Molecule or equivalent integration tests;
- a check-mode or dry-run test;
- a second-run idempotency test; and
- execution-environment image scan and signature verification.

Fail the pull request when a required check fails. A warning may be used for a known limitation only when an owner, issue, and expiry are recorded.

## Step 3: Build an immutable execution environment

The execution environment should be generated from a versioned definition with pinned collections and system dependencies:

```yaml
version: 3
dependencies:
  galaxy: collections/requirements.yml
  python: requirements.txt
images:
  base_image:
    name: registry.example.com/ansible/base:1.0
```

Build the image once, scan it, publish it with a release tag, and capture its digest. Production jobs should use the digest, not a moving tag. The same digest should be promoted through environments unless an environment-specific compatibility decision is documented.

## Step 4: Connect CI to the controller

Use a short-lived CI identity with permission to start only the intended controller workflow. The pipeline should pass a release ID and a typed input document, not arbitrary controller object IDs.

The controller workflow should fix:

- project and revision policy;
- playbook;
- execution environment;
- inventory or inventory group;
- target credential;
- maximum limit and concurrency;
- approval nodes; and
- notification destinations.

Validate controller responses and store the job URL, job ID, status, and output summary in the pipeline artifact. Treat a timeout as an unknown state until the controller job is queried; do not automatically retry a mutation without deduplication.

## Step 5: Promote through environments

Use separate environment boundaries for development, staging, and production. Each boundary should have an owner, approval policy, credentials, inventory, and evidence destination.

Promotion should follow this sequence:

1. Merge the reviewed change.
2. Build and publish the immutable execution environment.
3. Run the development workflow against an isolated target set.
4. Review job output, changed count, failures, and health evidence.
5. Promote the same source and runtime to staging.
6. Obtain the required staging or production approval.
7. Execute a canary or first serial wave.
8. Evaluate the health gate.
9. Continue, pause, or recover according to the result.

Environment variables may differ, but the playbook contract and runtime must not be silently reinterpreted.

## Step 6: Add canary and wave controls

For high-risk automation, configure:

- an explicit canary inventory group;
- serial batch size or percentage;
- maximum failed hosts;
- stop-on-failure behavior;
- prechecks for connectivity, OS, maintenance, disk, and service state;
- postchecks for health, version, configuration, and telemetry; and
- a recovery action or operator handoff.

Example playbook controls:

```yaml
- name: Apply platform baseline in controlled waves
  hosts: managed_servers
  serial:
    - 1
    - "25%"
    - "50%"
  max_fail_percentage: 10
  any_errors_fatal: true
  tasks:
    - name: Validate target ownership and maintenance window
      ansible.builtin.assert:
        that:
          - target_environment == approved_environment
          - maintenance_window_open | bool
        fail_msg: "Target is outside the approved execution contract."
```

The actual values must reflect service criticality and recovery capability. A broad automation job should not use the same wave size as a low-risk development change.

## Step 7: Record evidence

Store:

- repository and commit;
- pipeline run and release identifier;
- execution-environment digest;
- controller workflow and job IDs;
- inventory source and target scope;
- credential identity and approval;
- start and end times;
- changed, skipped, failed, and unreachable counts;
- precheck and postcheck results; and
- recovery or follow-up ticket.

Do not store secrets or unrestricted job output in a broadly readable artifact. Redact sensitive task output while retaining enough context to investigate.

## Step 8: Handle failure and unknown state

When a pipeline or controller request fails:

1. Determine whether the job started and whether it is still running.
2. Query the authoritative job status before retrying.
3. Identify completed targets and partial mutations.
4. Apply the documented rollback or forward-recovery path.
5. Re-run validation against the actual state.
6. Record the incident and update the playbook if the recovery path was unclear.

Never solve a partial failure by running the entire production inventory again without understanding idempotency and target state.

## Validation

- [ ] Pull requests require all defined content and security checks.
- [ ] Execution environments are reproducible, scanned, and referenced by digest.
- [ ] CI cannot select arbitrary production credentials or inventories.
- [ ] The controller workflow fixes playbook, revision, runtime, scope, and concurrency.
- [ ] The same artifact is promoted through all environments.
- [ ] Canary failure blocks subsequent waves.
- [ ] A controller timeout is reconciled before retry.
- [ ] Evidence is correlated to the release and change record.
- [ ] Recovery has been tested with a partial-failure scenario.

## Related topics

- [Ansible Delivery Patterns for CI/CD and Operations](../ci-cd-automation/ansible-delivery-patterns-for-cicd-and-operations.md)
- [Ansible Automation Engineering Standard](../standards-best-practices/ansible-automation-engineering-standard.md)
- [Environment Promotion, Approval, and Release Controls](../ci-cd-automation/environment-promotion-approval-and-release-controls.md)
- [How to Validate Infrastructure Before Release](how-to-validate-infrastructure-before-release.md)
- [Build an Enterprise Ansible Automation Platform for Azure and Hybrid Servers](../hands-on-lab/build-enterprise-ansible-automation-platform-for-azure-and-hybrid-servers.md)

## References

- [Ansible execution environments](https://docs.ansible.com/projects/ansible/latest/collections/community/general/docsite/guide_ee.html)
- [Ansible Builder](https://docs.ansible.com/projects/builder/en/latest/)
- [GitHub Actions environments](https://docs.github.com/en/actions/deployment/targeting-different-environments/using-environments-for-deployment)
