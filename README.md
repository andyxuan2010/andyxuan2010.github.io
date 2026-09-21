# andyxuan2010.github.io

A simple, framework-free introduction to the repositories under
[@andyxuan2010](https://github.com/andyxuan2010).

The site is built with plain HTML, CSS, and JavaScript so GitHub Pages can serve
it without a build framework.

## Repository layout

| Path | Purpose |
|---|---|
| `index.html`, `focus.html`, `contact.html` | Public site pages. |
| `script.js` | Repository catalog, GitHub API synchronization, filtering, and home-page rendering. |
| `site-shell.js` | Shared navigation and documentation menu. |
| `docs/articles/` | Canonical Markdown articles grouped by category. |
| `docs/docs-index.json` | Generated documentation catalog; it is intentionally ignored by Git. |
| `scripts/` | Markdown, generated-index, and complete-site validation. |
| `.github/workflows/` | Pull-request validation and publication to the public Pages repository. |

## Local development

Node.js 20 or newer is required. Install the browser-test dependencies once with
`npm ci`; no application build is needed.

Generate the documentation index and run all checks from the repository root:

```bash
node scripts/validate-markdown.mjs
node scripts/generate-docs-index.mjs
node scripts/generate-docs-index.mjs --check
node scripts/validate-site.mjs
npm run validate:links
npm run test:browser
```

Serve the repository through a local HTTP server rather than opening the HTML
files directly. For example:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000/`. The home page requests current public
repository metadata from the GitHub API. If that request fails, the saved data
in `script.js` remains visible.

## Repository catalog

The `repositories` array at the top of `script.js` controls curated repository
presentation. Use `featured: true` for a major repository card. Set
`showInLibrary: false` when a repository should remain featured but should not
also appear in the searchable **More repositories** list.

After initial rendering, the browser refreshes public metadata from GitHub. A
successful response removes saved entries that are no longer public, updates
descriptions and languages, and adds newly discovered public repositories to
the library. Curated properties such as `featured`, `accent`, `demo`, tags, and
`showInLibrary` remain local presentation controls.

## Publishing

This private source repository does not deploy GitHub Pages directly. On changes
to `main`, `.github/workflows/pages.yml` validates the site and publishes an
allowlisted snapshot to the public repository configured by:

- Repository variable `STAGE_REPOSITORY`, using the `owner/owner.github.io`
  format.
- Repository variable `PAGES_CUSTOM_DOMAIN`, containing the verified custom
  domain hostname without a scheme or path.
- Repository secret `STAGE_REPO_TOKEN`, authorized for the public Pages
  repository. For the active snapshot and build jobs, a fine-grained token
  needs `Contents: write` and `Pages: write` on `andyxuan2010/andyxuan2010.github.io`.
  `Administration: write` is additionally required only if the commented
  custom-domain restoration job is re-enabled.

The public `owner/owner.github.io` repository uses branch-based Pages publishing
from `main:/`. The snapshot excludes the entire `.github/` directory, so no
workflow or Dependabot configuration is copied to or executed in staging.
Source-only validation scripts are also excluded from the published snapshot.
The snapshot includes a generated root `CNAME` file. After pushing it, the
active `request-pages-build` job requests a branch-based Pages build through the
GitHub Pages API; normal publishing does not modify the existing custom-domain
configuration. This build request uses `STAGE_REPO_TOKEN`, not the workflow's
source-repository `GITHUB_TOKEN`, so the token must be authorized for the target
Pages repository.

If the build request returns `403 Resource not accessible by personal access
token`, update `STAGE_REPO_TOKEN` in the source repository's Actions secrets and
variables. Verify that the fine-grained token has access to the target
`owner/owner.github.io` repository and includes `Pages: write`. The snapshot may
already have been published before the build job fails; rerun the workflow after
updating the secret. The earlier combined custom-domain job treated these API
403 responses as warnings, so a green historical run did not prove that the
Pages build request was authorized.

Run the same static validation locally with:

```bash
node scripts/validate-markdown.mjs
node scripts/generate-docs-index.mjs
node scripts/validate-site.mjs
```

## Engineering controls

Repository changes follow a pull-request GitOps flow: create a short-lived
branch, run the same validation used in CI, review the generated diff, and merge
to `main`. Only a successful `main` workflow may publish the allowlisted site
snapshot. Direct, manual edits to the public Pages repository are overwritten by
the next publication and are not an authoritative source.

See the [engineering documentation](docs/README.md) for the control model,
required checks, release and rollback procedure, and the current platform
limitations. Security issues should follow [SECURITY.md](SECURITY.md), not a
public issue.
