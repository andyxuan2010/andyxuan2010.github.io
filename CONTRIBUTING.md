# Contributing

## Change workflow

1. Create a short-lived branch from the latest `main`.
2. Make one focused change and avoid committing generated files outside the
   documented site snapshot.
3. Run the complete local validation sequence:

   ```bash
   node scripts/validate-markdown.mjs
   node scripts/generate-docs-index.mjs
   node scripts/generate-docs-index.mjs --check
   node scripts/validate-site.mjs
   npm run validate:links
   npm run test:browser
   ```

   Node.js 20 or newer is required. The generated `docs/docs-index.json` file is
   a local and publication artifact and must not be committed.
4. Open a pull request describing the change, risk, validation, and rollback.
5. Review the diff and required checks before merging.

Do not commit credentials, access tokens, private keys, personal data, build
artifacts, or local configuration. Report security findings using
[SECURITY.md](SECURITY.md).

## Publishing

Merging to `main` is the only supported publication trigger. The workflow
creates an allowlisted snapshot for the public Pages repository. Do not edit the
published repository directly because the next successful publication replaces
its `main` branch.

To roll back, revert the source commit through a pull request. The resulting
`main` workflow republishes the previous desired state while preserving the
audit trail.

## Site and catalog changes

- Keep shared navigation changes in `site-shell.js`.
- Keep curated repository metadata in the `repositories` array in `script.js`.
- Use `featured: true` to place a repository in the major-project section.
- Use `showInLibrary: false` only to suppress the duplicate entry in the
  searchable repository library; it must not be implemented by excluding the
  repository from GitHub synchronization.

## Documentation changes

Add canonical articles under `docs/articles/<category>/` by starting from
`docs/ARTICLE_TEMPLATE.md`. Folder names and front matter determine the
generated navigation and search catalog.

The obsolete corpus-rebuild utility was removed because canonical articles must
be edited incrementally. Do not introduce tooling that deletes and recreates
the complete `docs/articles/` tree.
