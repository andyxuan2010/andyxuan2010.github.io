---
title: "Documentation Taxonomy and Category Layout Standard"
summary: "Defines a consistent documentation taxonomy, repository layout, naming convention, metadata model, and migration approach for cloud engineering repositories."
document_id: "SBP-15"
category: "Standards & Best Practices"
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
owner: "Cloud Center of Excellence"
audience:
  - platform engineers
  - application teams
  - DevOps engineers
  - technical writers
  - security reviewers
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

# Documentation Taxonomy and Category Layout Standard

## Purpose

This standard defines the documentation categories, file layout, naming rules, metadata, and maintenance expectations for Cloud Center of Excellence repositories.

The objective is to make documentation predictable across infrastructure, platform, application, automation, security, and migration repositories. A contributor should be able to find architecture, deployment, pipeline, operational, security, validation, and reference information without relying on repository-specific conventions.

This standard complements the [Repository Structure and Documentation Standard](repository-structure-and-documentation-standard.md). SBP-03 defines repository governance requirements; this standard defines how documentation is organized and classified.

## Normative language

The key words **MUST**, **MUST NOT**, **REQUIRED**, **SHOULD**, **SHOULD NOT**, and **MAY** are normative:

- **MUST / MUST NOT**: mandatory for in-scope repositories.
- **SHOULD / SHOULD NOT**: expected unless a documented exception is approved.
- **MAY**: optional when the repository scope does not require the category.

## Design principles

1. **Documentation is part of the product.** A change that changes behavior, deployment, security, or operations MUST update the affected documentation.
2. **The repository README is the entry point.** It MUST explain the repository purpose, scope, prerequisites, quick start, deployment path, limitations, and links to the documentation map.
3. **Categories describe subjects.** Architecture, deployment, pipelines, and operations are controlled categories and MUST NOT be replaced by ad hoc folder names.
4. **Document types describe intent.** A how-to guide, tutorial, explanation, reference, and decision record are different types of documents and SHOULD be identified separately from the subject category.
5. **Documentation follows ownership boundaries.** Repository-level design belongs in `docs/`; module-specific contracts and behavior remain close to the module.
6. **Authored and generated content are distinct.** Generated manifests, static sites, PDFs, and indexes MUST be reproducible and MUST NOT be treated as the canonical authored source.
7. **The map of content is authoritative.** Every repository with more than one document MUST provide `docs/README.md` or an equivalent documentation map.

## Standard repository-level taxonomy

Repositories SHOULD use the following ordered categories. A repository MAY omit a category when it has no content for that subject; empty placeholder directories SHOULD NOT be created.

| Category | Directory | Purpose | Typical documents |
|---|---|---|---|
| Overview | `00-overview/` | Scope, audience, status, assumptions, and reading paths | scope, assumptions, glossary |
| Architecture | `10-architecture/` | Context, components, boundaries, flows, diagrams, and design principles | architecture overview, network design, data flow |
| Repository | `20-repository/` | File structure, module catalog, ownership, source-of-truth rules, and dependencies | repository structure, modules index |
| Deployment | `30-deployment/` | Prerequisites, environment setup, provisioning, promotion, rollback, and destroy procedures | deployment guide, environment guide |
| Pipelines | `40-pipelines/` | CI/CD triggers, jobs, identities, secrets, approvals, artifacts, and pipeline recovery | pipeline guide, authentication, runner guidance |
| Operations | `50-operations/` | Routine operations, monitoring, troubleshooting, backup, recovery, and incident response | runbooks, operations reference, troubleshooting |
| Security and governance | `60-security-governance/` | Security controls, identity, network boundaries, naming, tagging, compliance, and cost guardrails | security controls, naming standard, tagging standard |
| Validation | `70-validation/` | Tests, linting, quality gates, validation commands, and evidence | validation guide, validation summary |
| Reference | `80-reference/` | Stable technical facts and generated or semi-generated technical references | Terraform reference, current-state inventory |
| Decisions | `90-decisions/` | Requirements, options analysis, ADRs, exceptions, and decision history | ADRs, migration options, design decisions |

The root `README.md` remains the primary overview page. `docs/00-overview/` is only needed when the overview contains multiple documents.

## Recommended layout

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

The module layout is scope-aware. A module README MUST describe the module contract, inputs, outputs, dependencies, examples, security considerations, and limitations. Module-specific architecture or operations documentation SHOULD remain under the module instead of being duplicated at repository level.

## Document types

Each document SHOULD have one primary type:

| Type | Use for | Example |
|---|---|---|
| `explanation` | Concepts, architecture, rationale, and operating context | Architecture overview |
| `how-to` | A focused procedure for a known task | Configure workload identity |
| `reference` | Precise facts, interfaces, inputs, outputs, and commands | Terraform reference |
| `tutorial` | A learning-oriented end-to-end walkthrough | Deploy the foundation example |
| `decision` | A requirement, option analysis, ADR, or approved exception | Select a landing-zone model |

The taxonomy category and document type MUST remain separate. For example, `docs/40-pipelines/github-actions-authentication.md` may have `category: pipelines` and `article_type: how-to`.

## Metadata standard

New documents SHOULD use YAML front matter when the documentation site or repository tooling supports it:

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

The following values are controlled:

- `category`: `overview`, `architecture`, `repository`, `deployment`, `pipelines`, `operations`, `security-governance`, `validation`, `reference`, or `decisions`.
- `article_type`: `explanation`, `how-to`, `reference`, `tutorial`, or `decision`.
- `scope`: `repository`, `module`, `example`, `platform`, or `cloud`.
- `status`: `draft`, `current`, `deprecated`, or `superseded`.

## Naming and placement rules

1. New Markdown files MUST use lowercase kebab-case.
2. Each document MUST have exactly one meaningful H1 heading matching its title.
3. A repository MUST NOT maintain two competing canonical documents for the same subject.
4. Provider-specific material SHOULD be placed under the category first, for example `docs/10-architecture/aws.md` and `docs/10-architecture/azure.md`.
5. Runbooks MUST be placed under `50-operations/`, unless they are strictly provisioning procedures that belong under `30-deployment/`.
6. Naming, tagging, code standards, pre-commit, DevSecOps, identity, and network-control material MUST be placed under `60-security-governance/` unless it is a purely operational procedure.
7. Terraform inputs, outputs, resources, and generated module documentation belong under `80-reference/` or beside the relevant module.
8. `SECURITY.md`, `CONTRIBUTING.md`, `CHANGELOG.md`, and `LICENSE` MUST remain at the repository root when required by GitHub or organizational policy.

## Canonical migration mapping

Existing common names SHOULD be normalized as follows:

| Existing pattern | Canonical category |
|---|---|
| `architecture.md`, `ARCHITECTURE.md`, design overview | `10-architecture/` |
| `repository-structure.md`, `README` file structure, module index | `20-repository/` |
| `DEPLOYMENT.md`, `DEPLOYMENT_METHODS.md`, provisioning guides | `30-deployment/` |
| `PIPELINE.md`, `PIPELINES.md`, pipeline guides, runner guidance | `40-pipelines/` |
| `runbooks/`, `operations.md`, troubleshooting | `50-operations/` |
| naming, tagging, code standards, pre-commit, security controls | `60-security-governance/` |
| `VALIDATION.md`, `VALIDATION_SUMMARY.md`, test evidence | `70-validation/` |
| `TERRAFORM_REFERENCE.md`, current resource inventory | `80-reference/` |
| requirements, options analysis, ADRs, approved exceptions | `90-decisions/` |

During migration, old paths SHOULD remain as short redirect or compatibility stubs until all internal links, site navigation, automation, and external references have been updated.

## Generated documentation and documentation sites

Files such as `docs-manifest.json`, `_site/`, `site/`, generated HTML, and exported PDFs are build artifacts. They MUST be generated from tracked source files and MUST NOT become a second source of truth.

Documentation-site generators SHOULD derive navigation from the controlled taxonomy or document metadata rather than hard-coded assumptions such as “everything outside `modules/` is a guide.”

Whenever documents are moved, the repository MUST:

1. regenerate its document manifest;
2. rebuild the documentation site;
3. validate generated pages and internal links; and
4. verify that the navigation exposes every current document exactly once.

## Minimum documentation baseline

Every infrastructure, platform, application, or automation repository MUST provide:

- a root `README.md`;
- a documentation map at `docs/README.md` or an equivalent location;
- architecture or scope documentation;
- repository or component structure documentation;
- deployment or usage instructions;
- pipeline documentation when CI/CD exists;
- security and ownership guidance;
- validation instructions and expected results; and
- reference documentation for stable interfaces, inputs, outputs, or operational constraints.

Operations, decisions, migration, and disaster-recovery categories are REQUIRED when the repository has those responsibilities.

## Adoption approach

Repositories SHOULD be normalized in this order:

1. Establish the taxonomy and metadata values.
2. Normalize the reusable Azure, AWS, and OCI template repositories.
3. Apply the template structure to landing-zone repositories.
4. Apply the same categories to web demos and application repositories.
5. Add link validation, metadata validation, and documentation-site validation to CI.
6. Review documentation at least annually and whenever architecture, deployment, security, or operational behavior changes.

The `andyxuan2010` article library is a separate documentation product. Its domain-oriented article taxonomy MAY remain distinct from repository implementation documentation, while this standard remains the recommended structure for the engineering repositories that it documents.

## Validation

Repositories adopting this standard MUST validate the documentation structure and its generated outputs. Validation evidence SHOULD include:

- confirmation that the root README and documentation map identify the repository scope and reading paths;
- confirmation that documents use approved categories, document types, metadata values, and lowercase kebab-case filenames;
- verification that required documentation categories are present for the repository's responsibilities;
- successful internal-link, metadata, and heading validation;
- a documentation-site build that exposes every current document exactly once; and
- review of moved-document redirects, generated manifests, and navigation after any taxonomy change.

Validation failures MUST be corrected or recorded as an approved exception before the repository is considered compliant.

## Related topics

- [Repository Structure and Documentation Standard](repository-structure-and-documentation-standard.md)
- [Infrastructure as Code Engineering Standard](infrastructure-as-code-engineering-standard.md)
- [Terraform Module Design Standard](terraform-module-design-standard.md)
- [CI/CD Pipeline and Release-Control Standard](ci-cd-pipeline-and-release-control-standard.md)
