---
title: "Azure App Service Multistack Deployment"
summary: "Deploy the Python, Node.js, and .NET reference applications to their Terraform-provisioned Azure App Services with GitHub Actions and Azure DevOps."
document_id: "HOL-03"
category: "Hands-on Labs"
article_type: "lab"
tags:
  - azure-app-service
  - github-actions
  - azure-devops
  - ci-cd
  - application-deployment
status: "published"
order: 30
version: "2.0"
last_updated: "2026-08-28"
review_status: "machine-validated"
review_cadence: "annual"
decision_status: "active"
owner: "Cloud Center of Excellence"
audience:
  - application developers
  - platform engineers
  - devops engineers
  - cloud architects
environment_scope:
  - development
  - test
  - staging
  - production
cloud_scope:
  - Azure
reference_repositories:
  - https://github.com/andyxuan2010/azure-landingzone
  - https://github.com/andyxuan2010/web-ccoedemo-python
  - https://github.com/andyxuan2010/web-ccoedemo-node
  - https://github.com/andyxuan2010/web-ccoedemo-dotnet
lab_type: "guided deployment"
difficulty: "intermediate"
estimated_duration: "3-4 hours"
related_document_ids:
  - HTG-07
  - APP-02
  - CICD-05
  - CICD-07
  - HTG-14
---

> **Document class:** Hands-on Labs guided implementation lab
> **Normative terms:** **MUST**, **MUST NOT**, **SHOULD**, **SHOULD NOT**, and **MAY** are requirements levels.
> **Applicability:** Terraform and pipeline delivery for Python, Node.js, .NET, and containerized workloads on Azure App Service, including identity, configuration, networking, slots, rollback, and drift.
> **Exception process:** Deviations require a documented risk assessment, compensating controls, named risk owner, and expiry date.

| Control field | Value |
|---|---|
| Document ID | `HOL-03` |
| Owner | Cloud Center of Excellence |
| Review cycle | At least annually and after material App Service, provider, security, or source-repository changes |
| Evidence | Reviewed repository snapshots, Terraform plan and apply, build artifacts, application health, identity and configuration checks, rollback tests, and cleanup evidence |

# Azure App Service Multistack Deployment

> **Decision in brief:** Build and deploy the same identified release across Python, Node.js, and .NET paths, keeping Terraform, pipeline, identity, configuration, and rollback boundaries explicit.

This consolidated guide is both a deployment standard and a hands-on lab. It uses four public reference repositories: one Terraform landing zone that provisions three App Services and three applications implemented with Python, Node.js, and .NET. The application repositories contain working GitHub Actions and Azure DevOps pipelines; their checked-in automation is the executable source of truth.

The current development estate uses F1 App Service plans. F1 supports direct deployment but not deployment slots. Complete the direct-deployment exercises on the existing resources. The slot-promotion pattern applies after the plan is changed through Terraform to S1 or another tier that supports slots.

## Outcomes

After completing the lab, you will be able to:

- trace each application from Terraform configuration to runtime and pipeline;
- compare ZIP deployment, run from package, Oryx build automation, Deployment Center, and custom containers;
- package Flask/Python 3.12, Express/Node.js 24, and ASP.NET Core .NET 8 correctly;
- run and evaluate both GitHub Actions and Azure DevOps delivery paths;
- manage Deployment Center conflicts, SCM access restrictions, health validation, and rollback;
- separate pipeline identity, runtime identity, configuration, and secrets;
- extend direct deployment to slot-based promotion without rebuilding the release.

## Governing principles

1. Build once and deploy the same identified artifact. Do not rebuild between environments.
2. Keep environment configuration and secrets outside the ZIP or container image.
3. Separate deployment identity from the App Service runtime managed identity.
4. Prefer workload identity federation and short-lived tokens over client secrets and publish profiles.
5. Protect environments with branch controls, approvals, checks, and least-privilege RBAC.
6. Make health, version, security, and rollback validation executable.
7. Manage persistent App Service configuration in Terraform. Pipeline changes must not create unreviewed drift.
8. Use only one authoritative deployment mechanism for a target at a time.

## Reference repositories and reviewed snapshots

| Public repository | Reviewed commit | Purpose |
|---|---|---|
| `andyxuan2010/azure-landingzone` | `1cdf5ca` | Provisions App Service plans, web apps, runtime settings, authentication, managed identity, health checks, networking, and deployment-method settings |
| `andyxuan2010/web-ccoedemo-python` | `71921e8` | Flask/Python 3.12 application with GitHub Actions, Oryx ZIP deployment, and an alternate self-contained package pipeline |
| `andyxuan2010/web-ccoedemo-node` | `f16586c` | Express/Node.js 24 application with self-contained production dependencies and ZIP/run-from-package delivery |
| `andyxuan2010/web-ccoedemo-dotnet` | `0e7d885` | ASP.NET Core .NET 8 application using tested `dotnet publish` output for Windows or Linux App Service |

The snapshots make this guide reviewable. Before executing a newer commit, read its repository documentation and pipeline diff.

## Provisioned topology

The landing-zone naming expression is `web-${workload}-${location-code}-${environment}-${stack}`. The development input uses workload `platform`, location `canadacentral` (`cc`), and environment `dev`.

| Application | App Service | OS/runtime | Health | Development method in Terraform |
|---|---|---|---|---|
| Python | `web-platform-cc-dev-python` | Linux, Python 3.12, Gunicorn | `/health` | Deployment Center, branch `main` |
| Node.js | `web-platform-cc-dev-node` | Linux, Node.js 24 LTS | `/health` | Deployment Center, branch `main` |
| .NET | `web-platform-cc-dev-dotnet` | Windows, .NET 8 | `/health` | Deployment Center, branch `main` |

All three plans currently use F1 and 32-bit workers. The Terraform configuration enables system-assigned managed identity, authentication integration, site and SCM restrictions, and stack-specific settings.

```mermaid **Figure 1 — Reference topology.** Terraform owns the hosting contract; each application repository owns its stack-specific build and deployment path.
flowchart LR
    LZ[azure-landingzone] --> PYAPP[Python App Service]
    LZ --> NODEAPP[Node App Service]
    LZ --> NETAPP[.NET App Service]
    PY[web-ccoedemo-python] -->|GitHub or ADO| PYAPP
    NODE[web-ccoedemo-node] -->|GitHub or ADO| NODEAPP
    NET[web-ccoedemo-dotnet] -->|GitHub or ADO| NETAPP
    PYAPP --> MON[Health, logs, metrics]
    NODEAPP --> MON
    NETAPP --> MON
    classDef infra fill:#15213b,stroke:#38d3ff,color:#e9eefc,stroke-width:2px;
    classDef app fill:#121d35,stroke:#3edbb0,color:#e9eefc,stroke-width:2px;
    classDef source fill:#121d35,stroke:#ffbd38,color:#e9eefc,stroke-width:2px;
    classDef observe fill:#0f1a30,stroke:#7181a6,color:#e9eefc,stroke-width:2px;
    class LZ infra;
    class PY,NODE,NET source;
    class PYAPP,NODEAPP,NETAPP app;
    class MON observe;
```

## Terraform implementation

The following abbreviated input is taken from [`environments/dev/terraform.tfvars`](https://github.com/andyxuan2010/azure-landingzone/blob/main/environments/dev/terraform.tfvars). It shows the runtime contract that application pipelines must preserve.

```hcl
app_services = {
  dotnet = {
    enabled           = true
    stack             = "dotnet"
    kind              = "Windows"
    plan_os_type      = "Windows"
    sku_name          = "F1"
    use_32_bit_worker = true
    dotnet_version    = "v8.0"
    health_check_path = "/health"
    deployment_method = "deployment_center"
  }

  node = {
    enabled           = true
    stack             = "node"
    kind              = "Linux"
    plan_os_type      = "Linux"
    sku_name          = "F1"
    use_32_bit_worker = true
    node_version      = "24-lts"
    health_check_path = "/health"
    deployment_method = "deployment_center"
    app_settings = {
      WEBSITE_NODE_DEFAULT_VERSION = "~24"
    }
  }

  python = {
    enabled           = true
    stack             = "python"
    kind              = "Linux"
    plan_os_type      = "Linux"
    sku_name          = "F1"
    python_version    = "3.12"
    health_check_path = "/health"
    deployment_method = "deployment_center"
    startup_command   = "gunicorn --bind=0.0.0.0 --timeout 600 --access-logfile '-' --error-logfile '-' --chdir /home/site/wwwroot app:app"
  }
}
```

The resource loop in [`main.tf`](https://github.com/andyxuan2010/azure-landingzone/blob/main/main.tf) passes each selected runtime to the shared App Service module:

> [!NOTE]
> The excerpts intentionally show the deployment contract, not the entire module. Follow the embedded source links for current validations, networking, diagnostics, authentication, and dependency behavior.

```hcl
module "app_service" {
  for_each = local.enabled_app_services
  source   = "../azure-template/modules/appservice"

  app_name            = each.value.app_name
  resource_group_name = module.resource_group.name
  app_service_plan_id = module.app_service_plan[each.key].id
  kind                 = each.value.kind
  app_command_line     = try(each.value.startup_command, null)

  system_assigned_identity_enabled = true
  health_check_path                 = try(each.value.health_check_path, null)

  application_stack = merge(
    { current_stack = each.value.stack },
    each.value.stack == "dotnet" ? { dotnet_version = each.value.dotnet_version } : {},
    each.value.stack == "node" ? { node_version = each.value.node_version } : {},
    each.value.stack == "python" ? { python_version = each.value.python_version } : {}
  )
}
```

Use the compact [`features` output](https://github.com/andyxuan2010/azure-landingzone/blob/main/outputs.tf) to discover actual names and URLs:

```bash
cd ../azure-landingzone
terraform output -json features | jq '.enable_app_services.items'
```

If the local workspace does not hold the applied state:

```bash
az webapp list \
  --resource-group rg-platform-dev \
  --query "[?starts_with(name, 'web-platform-cc-dev-')].{name:name,state:state,host:defaultHostName}" \
  --output table
```

## Deployment-method decision

| Method | Build location | Runtime content | Best fit | Reference implementation |
|---|---|---|---|---|
| ZIP deploy with Oryx | App Service during deployment | Source ZIP built into runnable content | Conventional Python layout | Primary Python Azure DevOps pipeline |
| Prebuilt ZIP | CI runner | Ready-to-run extracted content | Published .NET or self-contained app | Primary .NET pipeline |
| Run from package | CI runner | Read-only mounted ZIP | Node.js and immutable packages | Primary Node.js and alternate pipelines |
| Deployment Center | Connected repository plus platform build | Branch-derived content | Fast bootstrap and portal-connected delivery | Current development Terraform selection |
| Custom container | Container build runner | OCI image | Native packages, nonstandard runtime, portability | Documented extension; not implemented in the three app repos |

Do not enable Oryx for a package that already includes runtime dependencies. Do not enable `WEBSITE_RUN_FROM_PACKAGE=1` when the selected runtime must modify `wwwroot`. Never use a mutable container tag for production.

## Stack-specific build contracts

### Python

The GitHub workflow builds a self-contained Python package. The public mirror intentionally excludes `.github`; its behavior is recorded in the public [Python pipeline guide](https://github.com/andyxuan2010/web-ccoedemo-python/blob/main/docs/PIPELINES.md). This excerpt comes from the reviewed source workflow:

```yaml
- name: Validate application and dependencies
  run: |
    python -m pip install -r requirements.txt -r requirements-dev.txt
    ruff check .
    ruff format --check .
    pytest
    pip-audit -r requirements.txt

- name: Build self-contained application package
  run: |
    rm -rf "${PACKAGE_ROOT}"
    mkdir -p "${PACKAGE_ROOT}/.python_packages/lib/site-packages"
    python -m pip install \
      --target "${PACKAGE_ROOT}/.python_packages/lib/site-packages" \
      -r requirements.txt
    cp app.py requirements.txt "${PACKAGE_ROOT}/"
    cp -R templates static "${PACKAGE_ROOT}/"
```

The package must contain `app.py`, templates, static assets, and dependencies at the expected paths. Native wheels must match the App Service operating system, architecture, and Python version. A local virtual environment is not a deployment artifact.

The primary Azure DevOps path instead sends source and enables Oryx. This excerpt comes from [`azure-pipelines/deploy-stage.yml`](https://github.com/andyxuan2010/web-ccoedemo-python/blob/main/azure-pipelines/deploy-stage.yml):

```bash
az webapp config set \
  --resource-group "${resource_group}" \
  --name "${app_name}" \
  --linux-fx-version "PYTHON|${pythonVersion}" \
  --startup-file "gunicorn --bind=0.0.0.0 --timeout 600 --access-logfile '-' --error-logfile '-' app:app"

az webapp config appsettings delete \
  --resource-group "${resource_group}" \
  --name "${app_name}" \
  --setting-names WEBSITE_RUN_FROM_PACKAGE PYTHONPATH || true

az webapp config appsettings set \
  --resource-group "${resource_group}" \
  --name "${app_name}" \
  --settings SCM_DO_BUILD_DURING_DEPLOYMENT=true ENABLE_ORYX_BUILD=true

az webapp deploy \
  --resource-group "${resource_group}" \
  --name "${app_name}" \
  --src-path "${packagePath}" \
  --type zip \
  --restart true \
  --track-status false
```

### Node.js

Node.js delivery restores exactly from the lock file, validates, prunes development dependencies, and stages a self-contained package. This excerpt comes from [`azure-pipelines.yml`](https://github.com/andyxuan2010/web-ccoedemo-node/blob/main/azure-pipelines.yml):

```yaml
- task: UseNode@1
  inputs:
    version: "$(nodeVersion)"

- script: npm ci
  displayName: Install dependencies

- script: npm run check
  displayName: Lint, test, and audit

- script: |
    npm prune --omit=dev
    npm run stage-package -- "$(packageRoot)"
  displayName: Stage application files

- task: ArchiveFiles@2
  inputs:
    rootFolderOrFile: "$(packageRoot)"
    includeRootFolder: false
    archiveType: zip
    archiveFile: "$(packagePath)"
```

The staged ZIP includes production `node_modules`, so the deploy path sets `WEBSITE_RUN_FROM_PACKAGE=1` and disables remote build. The Linux application starts with `cd /home/site/wwwroot && npm start`. The server must listen on `0.0.0.0` and the port supplied by App Service.

### .NET

.NET delivery tests and audits before packaging only `dotnet publish` output. The public mirror intentionally excludes `.github`; its behavior is recorded in the public [.NET pipeline guide](https://github.com/andyxuan2010/web-ccoedemo-dotnet/blob/main/docs/PIPELINE.md). This excerpt comes from the reviewed source workflow:

```yaml
- name: Restore
  run: dotnet restore tests/WebCcoeDemo.Web.Tests/WebCcoeDemo.Web.Tests.csproj --configfile NuGet.config

- name: Run automated tests
  run: dotnet test tests/WebCcoeDemo.Web.Tests/WebCcoeDemo.Web.Tests.csproj --configuration "${BUILD_CONFIGURATION}" --no-restore

- name: Audit NuGet dependencies
  run: dotnet list "${PROJECT_FILE}" package --vulnerable --include-transitive

- name: Publish
  run: dotnet publish "${PROJECT_FILE}" --configuration "${BUILD_CONFIGURATION}" --output "${RUNNER_TEMP}/publish"

- name: Archive application
  run: |
    cd "${RUNNER_TEMP}/publish"
    zip -r "${RUNNER_TEMP}/app.zip" .

- name: Validate package root contains web.config
  run: unzip -l "${RUNNER_TEMP}/app.zip" | awk '{print $4}' | grep -x "web.config" > /dev/null
```

Do not ZIP project source as the runtime artifact. `web.config` keeps the package compatible with Windows App Service/IIS, while the published application also supports an appropriately configured Linux App Service.

## Pipeline lifecycle

```mermaid **Figure 2 — Direct deployment on the current F1 plans.** Validation and target/SCM prechecks gate the upload; the nonredirecting health response becomes release evidence.
flowchart LR
    PR[Pull request] --> CHECK[Lint, test, audit]
    CHECK --> BUILD[Stack-specific build]
    BUILD --> ZIP[(app.zip)]
    ZIP --> PRE[Target and SCM precheck]
    PRE --> DEPLOY[Direct deploy on F1]
    DEPLOY --> HEALTH["/health validation"]
    HEALTH --> EVIDENCE[Run, commit, artifact, target]
    classDef gate fill:#15213b,stroke:#38d3ff,color:#e9eefc,stroke-width:2px;
    classDef artifact fill:#121d35,stroke:#ffbd38,color:#e9eefc,stroke-width:2px;
    classDef release fill:#121d35,stroke:#3edbb0,color:#e9eefc,stroke-width:2px;
    class PR,CHECK,PRE gate;
    class BUILD,ZIP artifact;
    class DEPLOY,HEALTH,EVIDENCE release;
```

The repositories add controls beyond a minimal deploy task:

- least-privilege default workflow permissions;
- branch or environment context resolution;
- target existence checks;
- SCM DNS/TCP checks;
- temporary SCM allow rules when configured;
- detection and removal of conflicting Deployment Center bindings;
- runtime-appropriate application settings;
- bounded health retries that reject redirects;
- optional secondary targets and mirror publishing;
- cleanup of temporary SCM rules.

## GitHub Actions exercise

### Select and inspect a repository

```bash
cd ../web-ccoedemo-python # repeat later for node and dotnet
git status --short
git branch --show-current
```

Read, in order:

1. `README.md`;
2. `docs/ARCHITECTURE.md`;
3. `docs/DEPLOYMENT_METHODS.md`;
4. the pipeline guide;
5. `.github/workflows/azure-webapp.yml`.

### Configure the protected environment

The reviewed workflows use repository variable `DEPLOY_ENV` to select a GitHub Environment. Configure that environment with the exact variable and secret names documented in the selected repository. Set the primary application target to only its matching development web app:

| Repository | Primary target |
|---|---|
| `web-ccoedemo-python` | `web-platform-cc-dev-python` |
| `web-ccoedemo-node` | `web-platform-cc-dev-node` |
| `web-ccoedemo-dotnet` | `web-platform-cc-dev-dotnet` |

Leave optional secondary and third targets blank during the lab.

The reviewed workflows authenticate with protected service-principal credentials. The target standard is GitHub OIDC with `azure/login`, `id-token: write`, an exact federated subject, and resource-group-scoped RBAC. Migrate only after the federated credential is ready and the new login has been proven; never silently fall back to a publish profile.

### Run and validate

1. Open a pull request and confirm validation completes without deployment.
2. Review the package contents and dependency audit.
3. Run the documented manual deployment or merge path.
4. Confirm the workflow finds the expected App Service.
5. Review any Deployment Center binding that it removes.
6. Confirm SCM access is restored after deployment.
7. Verify `/health` and record the workflow run URL, commit, artifact, environment, and target.

The checked-in health loop expects a nonredirecting HTTP 2xx response. Because public mirrors exclude `.github`, use the published [Python pipeline guide](https://github.com/andyxuan2010/web-ccoedemo-python/blob/main/docs/PIPELINES.md), [Node.js deployment guide](https://github.com/andyxuan2010/web-ccoedemo-node/blob/main/docs/DEPLOYMENT_METHODS.md), and [.NET pipeline guide](https://github.com/andyxuan2010/web-ccoedemo-dotnet/blob/main/docs/PIPELINE.md) as the public references for those source workflows.

## Azure DevOps exercise

### Understand branch-to-environment behavior

The repositories deliberately differ:

- Python and Node.js validate `main`, `dev`, and `sbx`; their `dev` branch targets the matching development App Service, while `main` is build-only in the reviewed Azure DevOps pipelines.
- .NET uses its documented Sandbox-to-Dev sequence and targets `web-platform-cc-dev-dotnet` in the development stage.
- `run_from_package.yml` is an alternate, manually selected path rather than an additional automatic deployment.

Use the selected repository's `azure-pipelines.yml` and `azure-pipelines/deploy-stage.yml`; do not copy a generic pipeline over them.

### Configure identity and environments

Create or verify the named Azure Resource Manager service connections used by the pipeline. Prefer workload identity federation, scope access to the intended resource group, restrict pipeline authorization, and add approvals/checks to protected Azure DevOps environments.

Pipeline identity deploys content and configures the target. Runtime managed identity accesses Key Vault, Storage, databases, and other dependencies. These identities must not share permissions merely for convenience.

### Run and validate

1. Queue a PR validation build.
2. Inspect test, audit, archive, and package-root validation.
3. Run the repository's development branch/stage.
4. Confirm SCM DNS and TCP 443 prechecks pass.
5. Confirm stack-specific settings match the selected artifact style.
6. Verify the target health endpoint.

```bash
curl --fail "https://web-platform-cc-dev-python.azurewebsites.net/health"
curl --fail "https://web-platform-cc-dev-node.azurewebsites.net/health"
curl --fail "https://web-platform-cc-dev-dotnet.azurewebsites.net/health"
```

Record the pipeline run, source commit, artifact, service connection, target, health result, and approval evidence.

## Deployment Center and Terraform drift

The current development Terraform selects Deployment Center, while the repo-managed ZIP pipelines can remove a conflicting source binding. If Terraform remains unchanged, a later apply can restore that binding.

> [!IMPORTANT]
> Treat this as an ownership conflict, not a pipeline nuisance. Update the Terraform deployment-method selection before adopting a repo-managed ZIP pipeline as the authoritative path.

Choose one method per target:

- retain Deployment Center and do not run an independent ZIP deploy workflow against the same target; or
- change `deployment_method` in `azure-landingzone` to the pipeline-aligned method, review the plan, apply it, and then use the application pipeline.

Never resolve this conflict only through the portal. Capture the authoritative choice in Terraform and the change record.

## Configuration, secrets, and identity

- Store nonsecret environment values in App Service settings or governed configuration.
- Store secrets in Key Vault and prefer managed identity/Key Vault references.
- Keep `FLASK_SECRET_KEY`, `SESSION_SECRET`, Entra credentials, and connection strings out of ZIP files and logs.
- Treat pipeline deployment permission separately from application runtime permission.
- Avoid publish profiles and SCM basic credentials where Microsoft Entra deployment is supported.
- Mark settings sticky before a slot swap when they must remain with the environment.
- Verify Easy Auth and application-managed MSAL independently; they are separate authorization layers.

The reference applications fail or degrade safely when required session/authentication configuration is absent. Do not weaken that behavior to make a deployment appear healthy.

## Private networking and deployment agents

Private Endpoint controls inbound access. VNet Integration controls application outbound access. They solve different problems.

When the SCM endpoint is restricted or private:

- use a runner/agent with approved network reachability;
- resolve both `<app>.azurewebsites.net` and `<app>.scm.azurewebsites.net` correctly;
- test TCP 443 before upload;
- preserve least-privilege SCM access restrictions;
- do not open the SCM endpoint broadly to make a pipeline pass.

The reference pipelines include SCM prechecks and can temporarily allow the current runner IP. A private endpoint requires a network-integrated runner rather than a temporary public rule.

## Slot-promotion extension

F1 does not support slots. To perform this extension, change `sku_name` to S1 or another supported tier in `azure-landingzone`, review `terraform plan`, and apply through the governed infrastructure pipeline.

The target release flow is:

```mermaid **Figure 3 — Slot promotion after upgrading the plan.** The tested artifact is promoted without rebuilding, and the previous production content remains available for swap-back.
flowchart LR
    BUILD[Build once] --> ART[(Immutable ZIP or image digest)]
    ART --> SLOT[Deploy staging slot]
    SLOT --> TEST[Warm-up and smoke tests]
    TEST --> APPROVE[Approval]
    APPROVE --> SWAP[Swap to production]
    SWAP --> VERIFY[Production verification]
    classDef build fill:#121d35,stroke:#ffbd38,color:#e9eefc,stroke-width:2px;
    classDef gate fill:#15213b,stroke:#38d3ff,color:#e9eefc,stroke-width:2px;
    classDef release fill:#121d35,stroke:#3edbb0,color:#e9eefc,stroke-width:2px;
    class BUILD,ART build;
    class SLOT,TEST,APPROVE gate;
    class SWAP,VERIFY release;
```

Create and promote the slot with governed automation. Equivalent CLI operations are:

```bash
az webapp deployment slot create \
  --resource-group rg-platform-dev \
  --name web-platform-cc-dev-node \
  --slot staging

curl --fail "https://web-platform-cc-dev-node-staging.azurewebsites.net/health"

az webapp deployment slot swap \
  --resource-group rg-platform-dev \
  --name web-platform-cc-dev-node \
  --slot staging \
  --target-slot production
```

Use expand-and-contract database migrations. A slot swap cannot undo an incompatible schema change, deleted data, downstream contract change, or shared-secret failure.

## Custom-container extension

Use a custom container when native system packages, a nonstandard runtime, or portability justify owning the runtime image.

1. Pin the base image.
2. Build and test the image.
3. Scan it and generate an SBOM/provenance.
4. Push a commit-addressed image to ACR.
5. Record the digest.
6. Grant the web app's managed identity only `AcrPull`.
7. Deploy the exact digest and validate `/health`.

Do not deploy `latest`, store registry administrator credentials, write state into the container filesystem, or omit stdout/stderr logging.

## Validation

### Build and artifact

- [ ] Lock-file-based restore is used where supported.
- [ ] Lint, unit tests, dependency audit, and required security scans pass.
- [ ] Only runtime files are packaged.
- [ ] Required entry files are at the ZIP root.
- [ ] The artifact is associated with the source commit and pipeline run.
- [ ] No credential or `.env` file is present.

### Deployment

- [ ] The expected App Service exists and its OS/runtime match the package.
- [ ] Deployment identity has only required access.
- [ ] SCM DNS and TCP connectivity pass.
- [ ] No competing Deployment Center binding remains unintentionally.
- [ ] Build-during-deployment and run-from-package settings match the selected method.
- [ ] Temporary SCM rules are removed.

### Runtime

- [ ] `/health` returns a nonredirecting HTTP 2xx response.
- [ ] The application reports the expected release/commit where available.
- [ ] MSAL and Easy Auth flows behave as designed.
- [ ] Dependencies are reachable through the expected routes and DNS.
- [ ] Logs, metrics, and traces arrive at the intended destination.
- [ ] HTTP 5xx, latency, restarts, and dependency failures remain within thresholds.

## Rollback

For direct ZIP deployment, redeploy the previously retained package without rebuilding it. For run from package, restore the previous package reference. For a custom container, restore the previous digest.

For a slot deployment with backward-compatible data changes, swap back:

```bash
az webapp deployment slot swap \
  --resource-group rg-platform-dev \
  --name web-platform-cc-dev-node \
  --slot staging \
  --target-slot production
```

After rollback, validate health, preserve diagnostics, stop further promotion, record the incident and artifact identifiers, and fix forward through a new reviewed build. Do not repeatedly swap when a shared dependency or schema is the actual failure.

## Troubleshooting

| Symptom | Likely cause | Correction |
|---|---|---|
| Default App Service page | Incorrect ZIP root or startup failure | Inspect package root, deployment log, and application log |
| Python missing module | Oryx disabled for source ZIP or vendored path incorrect | Align `SCM_DO_BUILD_DURING_DEPLOYMENT`, `PYTHONPATH`, package layout, and Python version |
| Gunicorn cannot load app | Startup module or working directory is wrong | Match `app:app` and `/home/site/wwwroot` to the checked-in Flask layout |
| Node returns 503 | Missing production dependencies or wrong startup/listen address | Verify `node_modules`, `npm start`, `0.0.0.0`, and platform port |
| .NET cannot start | Source rather than publish output was deployed | Recreate ZIP from `dotnet publish` output and verify `web.config` |
| Deployment 401/403 | Wrong federated subject, secret, service connection, or RBAC | Inspect login and role scope; do not substitute a publish profile silently |
| SCM timeout | Access restriction, DNS, or private network path | Run the checked-in precheck and use a network-integrated agent when private |
| Terraform restores source binding | Pipeline removed Deployment Center but IaC still selects it | Change the authoritative `deployment_method` and apply reviewed Terraform |
| Health redirects to login | Health endpoint is protected by Easy Auth | Keep a minimal nonsecret readiness path reachable to the platform and pipeline |
| Runtime files disappear | App writes under read-only/ephemeral content | Use `/home` where appropriate or an external durable service |

Useful diagnostics:

```bash
az webapp log config \
  --resource-group rg-platform-dev \
  --name web-platform-cc-dev-python \
  --application-logging filesystem \
  --level information

az webapp log tail \
  --resource-group rg-platform-dev \
  --name web-platform-cc-dev-python
```

## Security and production hardening

- Protect branches and require review of workflow, pipeline, and Terraform changes.
- Pin third-party actions and shared pipeline templates according to supply-chain policy.
- Add secret, SAST, dependency, IaC, and container scans as applicable.
- Sign artifacts/images and retain provenance when supported.
- Use separate identities, service connections, and approvals for each environment.
- Enforce HTTPS, TLS policy, access restrictions, private connectivity, managed identity, and least privilege.
- Configure diagnostics, Application Insights, deployment annotations, alerts, SLOs, and retention.
- Select a production-capable tier and validate Always On, autoscale, zone resilience, backup, and recovery requirements.
- Test startup, scaling, rollback, and full redeployment from retained artifacts.

## Controlled failure exercises

### Incorrect startup command

Change only a disposable target's startup command, observe the health failure and logs, then restore it through Terraform. This proves runtime troubleshooting and drift control.

### Broken SCM route

From a nonauthorized runner, verify that SCM precheck fails before deployment. Repeat from an approved agent. Do not broaden the restriction.

### Missing runtime permission

Remove a disposable managed identity role, confirm the application—not the pipeline—loses dependency access, restore least privilege, and retest. This demonstrates identity separation.

## Operational ownership

| Control | Primary owner |
|---|---|
| Application build and health endpoint | Application team |
| Pipeline patterns and shared templates | Platform/DevOps team |
| Service connections and federation | Platform/security team |
| Environment approvals | Environment owner |
| Terraform and App Service runtime configuration | Platform and application teams |
| Runtime identity permissions | Resource owner/security team |
| Monitoring and alerts | Application and operations teams |
| Rollback decision | Incident/change authority |
| Database migrations | Application and database teams |

## Cleanup

The reference App Services belong to the shared landing zone. Do not delete `rg-platform-dev` or any of its resources as lab cleanup.

Remove only lab-specific identities, federated credentials, environments, service connections, variables, temporary branches, and runner registrations. Reconcile persistent configuration through `andyxuan2010/azure-landingzone`; do not reverse Terraform-owned settings manually.

## Definition of done

The direct-deployment lab is complete when all three repositories build and test successfully, at least one GitHub Actions and one Azure DevOps deployment have been executed, each app reaches its matching target, `/health` passes, the deployment-method choice agrees with Terraform, and release evidence and a previous artifact are retained. The extension is complete when slot validation, approval, swap, production verification, and rollback have also been tested on a supported tier.

## Official references

- [App Service deployment best practices](https://learn.microsoft.com/azure/app-service/deploy-best-practices)
- [Deploy with GitHub Actions](https://learn.microsoft.com/azure/app-service/deploy-github-actions)
- [Deploy with Azure Pipelines](https://learn.microsoft.com/azure/app-service/deploy-azure-pipelines)
- [ZIP deployment](https://learn.microsoft.com/azure/app-service/deploy-zip)
- [Run from package](https://learn.microsoft.com/azure/app-service/deploy-run-package)
- [Deployment slots](https://learn.microsoft.com/azure/app-service/deploy-staging-slots)
- [App Service health checks](https://learn.microsoft.com/azure/app-service/monitor-instances-health-check)
- [App Service managed identity](https://learn.microsoft.com/azure/app-service/overview-managed-identity)
- [App Service private endpoints](https://learn.microsoft.com/azure/app-service/overview-private-endpoint)
- [Configure Python](https://learn.microsoft.com/azure/app-service/configure-language-python)
- [Configure Node.js](https://learn.microsoft.com/azure/app-service/configure-language-nodejs)
- [Configure custom containers](https://learn.microsoft.com/azure/app-service/configure-custom-container)
- [Azure DevOps environments](https://learn.microsoft.com/azure/devops/pipelines/process/environments)
- [Azure Resource Manager service connections](https://learn.microsoft.com/azure/devops/pipelines/library/connect-to-azure)

## Related topics

- [How to Deploy an Application to Azure App Service](../how-to-guides/how-to-deploy-an-application-to-azure-app-service.md)
- [Azure App Service Architecture and Deployment](../applications-kubernetes/app-azure-app-service-architecture-and-deployment.md)
- [Pipeline Identity and Secret Handling](../ci-cd-automation/pipeline-identity-and-secret-handling.md)
- [Environment Promotion, Approval, and Release Controls](../ci-cd-automation/environment-promotion-approval-and-release-controls.md)
- [How to Promote Immutable Artifacts Across Environments](../how-to-guides/how-to-promote-immutable-artifacts-across-environments.md)

## Related repos

- [andyxuan2010/azure-landingzone](https://github.com/andyxuan2010/azure-landingzone) — provisions the three App Services; see [development inputs](https://github.com/andyxuan2010/azure-landingzone/blob/main/environments/dev/terraform.tfvars), [Terraform implementation](https://github.com/andyxuan2010/azure-landingzone/blob/main/main.tf), and [feature outputs](https://github.com/andyxuan2010/azure-landingzone/blob/main/outputs.tf).
- [andyxuan2010/web-ccoedemo-python](https://github.com/andyxuan2010/web-ccoedemo-python) — Flask/Python reference; see [architecture](https://github.com/andyxuan2010/web-ccoedemo-python/blob/main/docs/ARCHITECTURE.md), [pipelines](https://github.com/andyxuan2010/web-ccoedemo-python/blob/main/docs/PIPELINES.md), and [deployment methods](https://github.com/andyxuan2010/web-ccoedemo-python/blob/main/docs/DEPLOYMENT_METHODS.md).
- [andyxuan2010/web-ccoedemo-node](https://github.com/andyxuan2010/web-ccoedemo-node) — Express/Node.js reference; see [architecture](https://github.com/andyxuan2010/web-ccoedemo-node/blob/main/docs/ARCHITECTURE.md), [Azure DevOps pipeline](https://github.com/andyxuan2010/web-ccoedemo-node/blob/main/azure-pipelines.yml), and [deployment methods](https://github.com/andyxuan2010/web-ccoedemo-node/blob/main/docs/DEPLOYMENT_METHODS.md).
- [andyxuan2010/web-ccoedemo-dotnet](https://github.com/andyxuan2010/web-ccoedemo-dotnet) — ASP.NET Core reference; see [architecture](https://github.com/andyxuan2010/web-ccoedemo-dotnet/blob/main/docs/ARCHITECTURE.md), [pipeline guide](https://github.com/andyxuan2010/web-ccoedemo-dotnet/blob/main/docs/PIPELINE.md), and [deployment methods](https://github.com/andyxuan2010/web-ccoedemo-dotnet/blob/main/docs/DEPLOYMENT_METHODS.md).
