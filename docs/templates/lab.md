---
title: "Replace with a clear hands-on lab title"
summary: "Describe the reproducible lab outcome, target platform, and intended learner in one sentence of 30 to 220 characters."
document_id: "HOL-00"
category: "Hands-on Labs"
article_type: "lab"
tags:
  - hands-on-lab
  - cloud
status: "draft"
order: 100
version: "1.0"
last_updated: "YYYY-MM-DD"
review_status: "needs-review"
review_cadence: "annual"
decision_status: "proposed"
owner: "Cloud Center of Excellence"
audience:
  - cloud engineers
environment_scope:
  - development
cloud_scope:
  - Azure
lab_type: "guided hands-on"
difficulty: "intermediate"
estimated_duration: "2-4 hours"
# Add source_repository/source_commit for a pinned external implementation when applicable.
# Optional knowledge-base metadata: review_date, reviewer, supersedes,
# superseded_by, and related_document_ids.
---

# Replace with a clear hands-on lab title

State the learning outcome, supported environment, estimated duration, and cleanup expectation.

## Lab overview

Describe the scenario, learning objectives, success criteria, scope, and what the lab intentionally omits.

## Prerequisites

List subscriptions, accounts, quotas, tools, versions, permissions, source repositories, and estimated cost.

## Target architecture

Describe the resources, trust boundaries, identities, network paths, data flows, and lab-specific topology.

<!-- Diagram required: include a Mermaid architecture and execution-flow diagram. Show target resources,
     learner/operator actions, external services, identities, and cleanup boundaries. -->

```mermaid
flowchart LR
    learner[Learner] --> control[Lab control plane]
    control --> workload[Target workload]
    workload --> evidence[Validation evidence]
```

## Lab modules

Break the exercise into repeatable modules. Include commands, expected output, checkpoints, and evidence for each module.

## Validation

- [ ] Each learning objective has a pass/fail check.
- [ ] Deployment, security, functional, and operational evidence is captured.
- [ ] The lab can be repeated from the stated versions and source commits.

## Cleanup

Remove billable resources, temporary identities, test data, credentials, local artifacts, and access grants. Verify cleanup.

## Related topics

Link to related canonical Markdown articles using relative Markdown links and keep their document IDs in sync.

## Related Repos

List only repositories directly used by the lab, with a pinned commit when reproducibility depends on source code.

<!-- Definition of done: metadata is complete, prerequisites and cost are clear, diagrams are present, every
     module has evidence, cleanup is verified, source versions are pinned, links are checked, and validation passes. -->
