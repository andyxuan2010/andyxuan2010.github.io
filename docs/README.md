# Engineering Documentation

The public documentation is a curated set of canonical Markdown articles in `articles/`. Each category is represented by a folder and may contain as many published articles as its subject requires.

Repository-specific README files, generated indexes, quick references, completion reports, and validation reports are intentionally excluded from the published documentation. Their reusable knowledge is consolidated into architecture guides, operational guidance, task-oriented how-to articles, and testable standards.

Every article uses the normalized front matter schema below. `scripts/validate-markdown.mjs` validates the complete schema and document structure. `scripts/generate-docs-index.mjs` validates index fields and creates `docs-index.json`. The browser uses that generated index for cards, filters, search, sidebars, article paths, and related links.

| Field | Requirement |
|---|---|
| `title` | Required, unique, 10-100 characters, and identical to the single H1. |
| `summary` | Required outcome statement containing 30-220 characters. |
| `document_id` | Required, unique identifier in `PREFIX-00` format. |
| `category` | Required and identical to the canonical title for the containing folder. |
| `article_type` | Required controlled value: `architecture`, `standard`, `how-to`, `lab`, `guide`, or `reference`. |
| `tags` | Required YAML list containing 2-8 unique, lowercase, URL-safe values. |
| `status` | Required; `draft` or `published`. |
| `order` | Required integer from 1-999 and unique within the category. |
| `version` | Required numeric document version such as `1.0` or `1.2.3`. |
| `last_updated` | Required valid date in `YYYY-MM-DD` format. |
| `review_status` | Required lifecycle value: `needs-review`, `machine-validated`, `human-reviewed`, or `retired`. |
| `review_cadence` | Required value: `quarterly`, `semiannual`, `annual`, `event-driven`, or `none`. |
| `decision_status` | Required value: `proposed`, `active`, `superseded`, or `deprecated`. |
| `owner` | Required accountable team name. |
| `audience` | Required non-empty YAML list. |
| `environment_scope` | Required non-empty YAML list using only `development`, `test`, `staging`, and `production`. |
| `cloud_scope` | Required non-empty YAML list using only `Azure`, `AWS`, `GCP`, and `OCI`. |

Hands-on labs must declare `lab_type`, `difficulty`, and `estimated_duration`. They MAY also declare `reference_repositories`, `source_repository`, and `source_commit`. These fields are reserved for reproducibility and lab navigation; they are not used by general articles.

Knowledge-base metadata MAY also declare `review_date`, `reviewer`, `supersedes`, `superseded_by`, and `related_document_ids`. `machine-validated` records structural, metadata, index, and automated-site validation; it does not claim human editorial approval. Use `human-reviewed` only after an accountable reviewer has completed content review and record the review date and reviewer.

Lifecycle rules are enforced by the validator:

- New documents start as `status: draft`, `review_status: needs-review`, and `decision_status: proposed`.
- A published document cannot remain `proposed`; active, superseded, and deprecated documents must be published.
- `human-reviewed` requires `review_date` and `reviewer`.
- `retired` requires `decision_status: deprecated`.
- `superseded` requires one or more `superseded_by` document IDs.
- Hands-on labs require their reproducibility metadata and architecture/lab articles require a diagram.

The `article_type` field makes the library usable as a knowledge base as well as a document site. It separates architecture decisions, standards, implementation guides, how-to procedures, reference material, and reproducible labs without relying only on folder names.

The dedicated `Validate Markdown Documentation` workflow runs for documentation pull requests and changes to `main`. The Pages publication workflow runs the same Markdown validator before generating or publishing the site, so noncompliant articles cannot be published.

## Add an article

1. Choose the closest archetype template: [architecture](templates/architecture.md), [standard](templates/standard.md), [how-to](templates/how-to.md), [hands-on lab](templates/lab.md), or [guide/reference](templates/guide-reference.md). Use [ARTICLE_TEMPLATE.md](ARTICLE_TEMPLATE.md) as the generic fallback.
2. Copy the selected template into one of the category folders under `articles/`.
3. Rename it with a lowercase URL-safe filename such as `backup-restoration-testing.md`. Do not add a numeric ordering prefix; use `order` metadata for presentation order.
4. Complete every required front matter field using the schema and controlled values above.
5. Use `status: draft` and `decision_status: proposed` while authoring. Change to `status: published` and `decision_status: active` only after review and evidence are complete.
6. From the repository root, normalize the article before validation. The normalizer is idempotent, so it is safe to run repeatedly:

   ```bash
   node scripts/normalize-markdown.mjs
   node scripts/normalize-markdown.mjs --check
   ```

7. Run the validation sequence below. Node.js 20 or newer is required.

   ```bash
   node scripts/validate-markdown.mjs
   node scripts/generate-docs-index.mjs
   node scripts/generate-docs-index.mjs --check
   node scripts/validate-site.mjs
   ```

   The generated `docs/docs-index.json` is intentionally ignored by Git. Generate it before local preview or complete-site validation, but do not commit it.

GitHub Actions runs the same generation automatically. A valid published Markdown file appears after the Pages deployment without changes to JavaScript.

Canonical articles are maintained incrementally. The former corpus-rebuild utility was removed because it could erase current articles and regenerate obsolete metadata.

## Heading standard

- Use exactly one H1 (`#`) for the document title, matching the front matter `title`.
- Use unnumbered H2 (`##`) headings for primary sections.
- Use unnumbered H3 (`###`) headings for subsections.
- Use sentence case for headings.
- Use numbered lists only when the order of steps matters; do not manually number headings.
- Use task-list syntax such as `- [ ]` for validation checklists.
- Use sentence case for H2 and H3 headings; use H3 for subsections and do not use H4 or deeper headings except for the Cloud Free Resource catalog's domain, category, and provider hierarchy.
- Use the canonical `Validation` and `Related topics` H2 sections in every published article, except the source-oriented Cloud Free Resource catalog. Existing equivalent validation headings are migrated to this vocabulary without discarding their content.

### Article archetype sections

Use the following section patterns as a quality contract. Domain-specific sections are welcome when they add information, but do not add empty boilerplate.

| Article type | Recommended sections |
|---|---|
| `architecture` | Purpose, reference architecture, operational considerations, validation, related topics |
| `standard` | Purpose, mandatory requirements, governance/exceptions/enforcement, validation, related topics |
| `how-to` | Objective, prerequisites, procedure, validation, troubleshooting or rollback, related topics |
| `lab` | Lab overview, prerequisites, target architecture, modules, validation, cleanup, related topics, related repos |
| `guide` / `reference` | Purpose or scope, design/reference content, validation, operational considerations where applicable, related topics |

The archetype templates also define diagram expectations:

- `architecture`: include a Mermaid context, container, or component diagram showing boundaries, identities, flows, and dependencies.
- `standard`: include a Mermaid control lifecycle, approval, or exception-flow diagram when the standard defines a process.
- `how-to`: include a Mermaid flow or sequence diagram for multi-stage or production-impacting procedures.
- `lab`: include Mermaid target-architecture and execution-flow diagrams, including cleanup boundaries.
- `guide` / `reference`: include a Mermaid conceptual map, decision tree, lifecycle, or relationship diagram when it improves comprehension.

Use the shared site rendering for Mermaid diagrams. Every diagram must have a short caption or explanatory paragraph, identify important trust boundaries and flows, and remain understandable without relying on color alone. Use an approved image with equivalent explanatory text when Mermaid is not suitable.

## Definition of done

An article is ready for publication only when all of the following are true:

- [ ] Metadata is complete, ordered, controlled, and lifecycle-consistent.
- [ ] The title, summary, audience, ownership, environment scope, and cloud scope are specific.
- [ ] The article follows the section pattern for its `article_type`.
- [ ] Required diagrams are present, captioned, accessible, and consistent with the prose.
- [ ] Validation proves the design, procedure, lab, or control with repeatable evidence.
- [ ] Related topics and `related_document_ids` are synchronized.
- [ ] Repository links, source commits, versions, and tool references are verified.
- [ ] No secrets, private endpoints, or unapproved production values are included.
- [ ] `node scripts/normalize-markdown.mjs --check`, `npm test`, and `git diff --check` pass.

## Knowledge-base conventions

- Link related articles with relative Markdown links so the source remains portable and the site can generate forward links and backlinks.
- Keep `related_document_ids` synchronized with the canonical links in `Related topics`; IDs must refer to existing article documents.
- Keep one canonical idea per article; use `Related topics` for adjacent ideas rather than duplicating large sections.
- Use `article_type`, tags, ownership, and update metadata consistently so cards, search, filters, and future graph views can be generated from Markdown.
- Prefer explicit validation, operational, and reference sections for production-facing guidance. Article archetypes may add domain-specific sections, but should not fill gaps with boilerplate.

The documentation index validator enforces the single-title and unnumbered-heading rules for every article outside fenced code blocks.

## Category folders

Category folders are discovered automatically. Use a lowercase URL-safe folder name such as `platform-engineering` or `how-to-guides`; the generator converts it to a readable menu title. Well-known technical names such as AI, AWS, CI/CD, DevOps, FinOps, IaC, and K8s retain their standard capitalization. Adding, renaming, or removing a folder is reflected automatically in the generated index and in both documentation menus.

Browse the rendered documentation at [docs/index.html](index.html).
