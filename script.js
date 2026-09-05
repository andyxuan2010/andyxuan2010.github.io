const repositories = [
  { name: "azure-landingzone", description: "Terraform-based Azure Landing Zone for deploying a governed cloud foundation with management groups, shared platform services, hub-spoke networking, private DNS, Key Vault, Log Analytics, Automation, App Service patterns, Linux runner resources, and CI/CD validation through GitHub Actions and Azure DevOps.", category: "Cloud", language: "HCL", tags: ["Terraform", "IaC", "Azure", "Landing Zone", "Azure DevOps"], accent: "#1677b8", featured: true, docs: "https://andyxuan2010.github.io/azure-landingzone/" },
  { name: "azure-template", description: "Reusable Azure Terraform template repository for validated IaC modules, root planning harnesses, Azure DevOps pipeline templates, examples, tests, and reference documentation. Designed as a source-of-truth distribution repo for Azure landing zone and workload module consumers.", category: "Cloud", language: "HCL", tags: ["Terraform", "IaC", "Azure", "IaC Modules", "Azure DevOps"], accent: "#0b806f", featured: true, docs: "https://andyxuan2010.github.io/azure-template/" },
  { name: "cloud-migration-demo", description: "Small-business migration reference for retiring on-premises Active Directory Domain Services and moving to cloud-native identity, endpoint management, collaboration, and hosted desktop services.", curatedDescription: true, category: "Cloud", language: "Markdown", tags: ["AD DS", "Entra ID", "Intune", "Azure Virtual Desktop", "Google Workspace"], accent: "#0b806f", featured: true, docs: "https://andyxuan.ca/cloud-migration-demo/" },
  { name: "enterprise-ai-chatbot", description: "Enterprise AI chatbot on Azure using Python, Terraform, Azure App Service, Azure OpenAI, Azure AI Search, Blob Storage, Key Vault, and Entra ID. Implements document-grounded RAG with hybrid search, embeddings, reranking, citation validation, and reusable landing-zone resources.", category: "AI", language: "HCL", tags: ["Python", "IaC", "Azure OpenAI", "RAG", "Azure DevOps"], accent: "#7353ba", demo: "http://chatbot.andyxuan.ca", featured: true },
  { name: "enterprise-ai-doc", description: "Terraform-based Azure enterprise document extraction workload using Azure AI Document Intelligence, Azure OpenAI, Azure Functions, Logic Apps, and Azure SQL Database to extract, normalize, summarize, and store structured data from invoices, claims, contracts, PDFs, resumes, and forms.", category: "AI", language: "HCL", tags: ["Terraform", "IaC", "Document AI", "Azure Functions", "Azure DevOps"], accent: "#c45a22", featured: true },
  { name: "aws-landingzone", description: "Terraform-based AWS landing zone for building a governed, repeatable multi-account cloud foundation.", category: "Cloud", language: "HCL", tags: ["Terraform", "IaC", "AWS", "Landing Zone", "Governance"], accent: "#b45309", featured: true },
  { name: "aws-template", description: "Reusable AWS Terraform template repository for validated infrastructure modules, examples, automation, and delivery pipelines.", category: "Cloud", language: "HCL", tags: ["Terraform", "IaC", "AWS", "IaC Modules", "CI/CD"], accent: "#d97706", featured: true },
  { name: "web-ccoedemo-dotnet", description: "ASP.NET Core .NET 8 Microsoft Entra authentication demo for Azure App Service, showing MSAL and Easy Auth patterns with MVC/Razor views, Azure DevOps ZIP deployment, GitHub Actions deployment, and optional Run From Package pipeline support.", category: "Apps", language: ".NET 8", tags: ["ASP.NET Core", "Entra ID", "App Service", "CI/CD", "Azure DevOps"], accent: "#512bd4", demo: "http://dotnet.andyxuan.ca", featured: true },
  { name: "web-ccoedemo-python", description: "Python Flask Microsoft Entra authentication demo for Azure App Service, showing MSAL and Easy Auth flows with GitHub Actions and Azure DevOps deployment pipelines.", category: "Apps", language: "Python", tags: ["Flask", "Entra ID", "App Service", "CI/CD", "Azure DevOps"], accent: "#2f6f9f", demo: "http://python.andyxuan.ca", featured: true },
  { name: "AIonK8sDemo", description: "Deploy the large language model “Dolly v2 3B” as an API on a Kubernetes cluster.", category: "AI", language: "HCL", tags: ["Terraform", "IaC", "AKS", "Dolly v2", "Kubernetes"], accent: "#6d4aff", featured: true, showInLibrary: false },
  { name: "web-ccoedemo-node", description: "Demonstrates Microsoft Entra authentication in a Node.js and Express application on Azure App Service. Includes application routes, MSAL/Easy Auth patterns, and Azure DevOps deployment pipelines. Intended as an identity and cloud application reference.", category: "Apps", language: "Node.js", tags: ["Express", "Entra ID", "App Service", "CI/CD", "Azure DevOps"], accent: "#2d8a55", demo: "http://node.andyxuan.ca", featured: true },
  { name: "oci-template", description: "Terraform modules dedicated to the OCI environment.", category: "Cloud", language: "HCL", tags: ["Terraform", "IaC", "OCI", "IaC Modules", "Networking"], accent: "#b84635", featured: true },
  { name: "oci-landingzone", description: "Terraform landing zone for provisioning a shared Oracle Cloud Infrastructure foundation, environment-specific configurations, networking, Object Storage, and optional Vault/KMS workloads.", category: "Cloud", language: "HCL", tags: ["Terraform", "IaC", "OCI", "Landing Zone", "Networking"], accent: "#8f4f78", featured: true },
  { name: "azure-azcopy", description: "No About description is currently provided for this repository on GitHub.", category: "Automation", language: "Shell", tags: ["AzCopy", "Blob Storage", "Backup", "Linux"] },
  { name: "azcopy-bulk", description: "No About description is currently provided for this repository on GitHub.", category: "Automation", language: "Shell", tags: ["AzCopy", "ADLS Gen2", "systemd", "Windows"] },
  { name: "medp-wl-notification", description: "No About description is currently provided for this repository on GitHub.", category: "Apps", language: "Python", tags: ["Monitoring", "Email", "SMS", "Scheduled Jobs"] },
  { name: "azure-scripts", description: "No About description is currently provided for this repository on GitHub.", category: "Automation", language: "Shell", tags: ["Azure", "ARO", "Bash", "Operations"] },
  { name: "ARO-management", description: "A collection of scripts to manage Azure Red Hat OpenShift (ARO) clusters.", category: "Automation", language: "Shell", tags: ["Azure", "OpenShift", "Backup", "Operations"] },
  { name: "ci-cd-template", description: "No About description is currently provided for this repository on GitHub.", category: "Automation", language: "YAML", tags: ["GitHub Actions", "Azure", "PowerShell", "Bash"] },
  { name: "cwb-adf-clientaccount", description: "No About description is currently provided for this repository on GitHub.", category: "Automation", language: "YAML", tags: ["Data Factory", "Azure Pipelines", "CI/CD", "Data Integration", "Azure DevOps"] },
  { name: "azure-deployment", description: "No About description is currently provided for this repository on GitHub.", category: "Cloud", language: "HCL", tags: ["Terraform", "IaC", "Azure", "IaC Modules", "Azure DevOps"] },
  { name: "3tierweb", description: "No About description is currently provided for this repository on GitHub.", category: "Cloud", language: "HCL", tags: ["Terraform", "IaC", "AWS", "Auto Scaling", "RDS"] },
  { name: "consul-project", description: "No About description is currently provided for this repository on GitHub.", category: "Cloud", language: "HCL", tags: ["Terraform", "IaC", "Kubernetes", "Consul", "Service Mesh"] },
  { name: "cloudflare-ddns-updater", description: "No About description is currently provided for this repository on GitHub.", category: "Automation", language: "Shell", tags: ["Cloudflare API", "Dynamic DNS", "Cron", "Linux"] },
  { name: "azure-alicesmith-bicep", description: "No About description is currently provided for this repository on GitHub.", category: "Cloud", language: "Bicep", tags: ["IaC", "Azure", "PlayFab", "XR Server", "Azure DevOps"] },
  { name: "AksIngressControllerDemo", description: "No About description is currently provided for this repository on GitHub.", category: "Cloud", language: "Shell", tags: ["IaC", "AKS", "NGINX Ingress", "Helm", "Azure DevOps"] },
  { name: "CognitiveServiceDemo", description: "No About description is currently provided for this repository on GitHub.", category: "AI", language: "HCL", tags: ["Terraform", "IaC", "Azure OpenAI", "Private Endpoint", "Cognitive Services"] }
];

const account = "andyxuan2010";
const featuredGrid = document.querySelector("#featured-grid");
const repoGrid = document.querySelector("#repo-grid");
const searchInput = document.querySelector("#repo-search");
const emptyMessage = document.querySelector("#empty-message");
const filterButtons = [...document.querySelectorAll("[data-filter]")];
const themeSwitch = document.querySelector("#theme-switch");
const languageOptions = [...document.querySelectorAll("[data-language]")];
let activeFilter = "All";
const storedLanguage = localStorage.getItem("portfolio-language");
let currentLanguage = ["en", "fr", "zh"].includes(storedLanguage) ? storedLanguage : "en";

const translations = {
  en: {
    "nav.home": "Home", "nav.solutions": "Focus", "nav.projects": "Projects", "nav.focus": "Focus", "nav.docs": "Library", "nav.repos": "Repos", "nav.contact": "Contact",
    "hero.eyebrow": "Cloud architect & open-source builder",
    "hero.title": "Design/Build infra<br>for <em>enterprises.</em>",
    "hero.intro": "I design secure enterprise cloud platforms and turn them into reusable Terraform modules, landing-zone patterns, CI/CD pipelines, GitOps workflows, and production-ready reference implementations.",
    "hero.explore": "Explore projects", "hero.github": "View all on GitHub ↗",
    "featured.label": "Selected work", "featured.title": "Major public repositories",
    "featured.copy": "A curated starting point for the projects that best represent my recent work.",
    "library.label": "Project library", "library.title": "More repositories",
    "library.copy": "The complete repository catalog, including major projects, tools, reference applications, and experiments.",
    "search.placeholder": "Search repositories", "card.repository": "View repository",
    "card.demo": "Demo", "card.docs": "Docs", "theme.cloud": "Cloud", "theme.classic": "Classic",
    "filter.all": "All", "filter.cloud": "Cloud", "filter.apps": "Apps", "filter.automation": "Automation",
    "search.empty": "No repositories match that search.",
    "closing.label": "Open source", "closing.title": "Explore, reuse,<br>and build on it.",
    "closing.copy": "Each repository is here to be read, tested, adapted, and improved. Visit GitHub for complete source code and documentation.",
    "closing.github": "Visit my GitHub", "footer.focus": "Cloud · Infrastructure · AI · Automation", "footer.top": "Back to top ↑"
  },
  fr: {
    "nav.home": "Accueil", "nav.solutions": "Expertise", "nav.projects": "Projets", "nav.focus": "Expertise", "nav.docs": "Bibliothèque", "nav.repos": "Dépôts", "nav.contact": "Contact",
    "hero.eyebrow": "Architecte infonuagique et créateur open source",
    "hero.title": "Bâtir l’infrastructure<br>des <em>entreprises.</em>",
    "hero.intro": "Je conçois des plateformes infonuagiques d’entreprise sécurisées et les transforme en modules Terraform réutilisables, modèles de zones d’atterrissage, pipelines CI/CD, flux GitOps et implémentations de référence prêtes pour la production.",
    "hero.explore": "Explorer les projets", "hero.github": "Tout voir sur GitHub ↗",
    "featured.label": "Travaux sélectionnés", "featured.title": "Principaux dépôts publics",
    "featured.copy": "Une sélection des projets qui représentent le mieux mes travaux récents.",
    "library.label": "Bibliothèque de projets", "library.title": "Autres dépôts",
    "library.copy": "Le catalogue complet des dépôts, y compris les projets majeurs, les outils, les applications de référence et les expériences.",
    "search.placeholder": "Rechercher des dépôts", "card.repository": "Voir le dépôt",
    "card.demo": "Démo", "card.docs": "Docs", "theme.cloud": "Nuage", "theme.classic": "Classique",
    "filter.all": "Tous", "filter.cloud": "Infonuagique", "filter.apps": "Applications", "filter.automation": "Automatisation",
    "search.empty": "Aucun dépôt ne correspond à cette recherche.",
    "closing.label": "Code source ouvert", "closing.title": "Explorer, réutiliser<br>et bâtir.",
    "closing.copy": "Chaque dépôt peut être lu, testé, adapté et amélioré. Visitez GitHub pour consulter le code source et la documentation.",
    "closing.github": "Visiter mon GitHub", "footer.focus": "Infonuagique · Infrastructure · IA · Automatisation", "footer.top": "Retour en haut ↑"
  },
  zh: {
    "nav.home": "首页", "nav.solutions": "专长", "nav.projects": "项目", "nav.focus": "专长", "nav.docs": "知识库", "nav.repos": "仓库", "nav.contact": "联系",
    "hero.eyebrow": "云架构师与开源建设者",
    "hero.title": "为<em>企业</em>设计<br>并构建基础设施",
    "hero.intro": "我设计安全的企业云平台，并将其转化为可复用的 Terraform 模块、着陆区模式、CI/CD 流水线、GitOps 工作流和可用于生产的参考实现。",
    "hero.explore": "探索项目", "hero.github": "在 GitHub 查看全部 ↗",
    "featured.label": "精选项目", "featured.title": "主要公共仓库",
    "featured.copy": "精选项目集合，帮助你快速了解最能代表我近期工作的内容。",
    "library.label": "项目库", "library.title": "更多仓库",
    "library.copy": "完整的仓库目录，包含主要项目、工具、参考应用和实验项目。",
    "search.placeholder": "搜索仓库", "card.repository": "查看仓库",
    "card.demo": "演示", "card.docs": "文档", "theme.cloud": "云端", "theme.classic": "经典",
    "filter.all": "全部", "filter.cloud": "云平台", "filter.apps": "应用", "filter.automation": "自动化",
    "search.empty": "没有匹配的仓库。",
    "closing.label": "开源", "closing.title": "探索、复用，<br>并在此基础上构建。",
    "closing.copy": "每个仓库都可以被阅读、测试、改造和改进。访问 GitHub 获取完整源代码和文档。",
    "closing.github": "访问我的 GitHub", "footer.focus": "云平台 · 基础设施 · AI · 自动化", "footer.top": "返回顶部 ↑"
  }
};

const translate = (key) => translations[currentLanguage][key] || translations.en[key] || key;

function applyLanguage() {
  document.documentElement.lang = currentLanguage;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = translate(element.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    element.innerHTML = translate(element.dataset.i18nHtml);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const value = translate(element.dataset.i18nPlaceholder);
    element.placeholder = value;
    element.setAttribute("aria-label", value);
  });
  languageOptions.forEach((button) => {
    const active = button.dataset.language === currentLanguage;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

languageOptions.forEach((button) => button.addEventListener("click", () => {
  currentLanguage = button.dataset.language;
  localStorage.setItem("portfolio-language", currentLanguage);
  applyLanguage();
  updateThemeSwitch();
  renderFeatured();
  renderRepositories();
}));

const repositoryUrl = (name) => `https://github.com/${account}/${name}`;
const documentationUrl = (name) => `https://${account}.github.io/${name}/`;
const missingAbout = "No About description is currently provided for this repository on GitHub.";
const aboutDescription = (repo) => repo.description?.trim() || missingAbout;
const escapeHtml = (value) => String(value).replace(
  /[&<>"']/g,
  (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character]
);

const savedTheme = localStorage.getItem("portfolio-theme");
if (savedTheme !== "classic") document.documentElement.dataset.theme = "cloud";

function updateThemeSwitch() {
  const isCloud = document.documentElement.dataset.theme === "cloud";
  themeSwitch.setAttribute("aria-pressed", String(isCloud));
  themeSwitch.querySelector(".theme-switch-icon").textContent = isCloud ? "☼" : "◐";
  themeSwitch.querySelector(".theme-switch-label").textContent = isCloud ? translate("theme.classic") : translate("theme.cloud");
}

themeSwitch.addEventListener("click", () => {
  const isCloud = document.documentElement.dataset.theme === "cloud";
  if (isCloud) {
    delete document.documentElement.dataset.theme;
    localStorage.setItem("portfolio-theme", "classic");
  } else {
    document.documentElement.dataset.theme = "cloud";
    localStorage.setItem("portfolio-theme", "cloud");
  }
  updateThemeSwitch();
});

updateThemeSwitch();

repositories.forEach((repo) => {
  repo.docs = repo.docs || documentationUrl(repo.name);
});

function categoryFor(repo) {
  const text = `${repo.name} ${repo.description || ""} ${repo.language || ""}`.toLowerCase();
  if (/(openai|artificial intelligence|machine learning|cognitive|chatbot|rag|document intelligence|language model)/.test(text)) return "AI";
  if (/(script|automation|azcopy|pipeline|ci\/cd|inventory|openshift|ddns|data factory)/.test(text)) return "Automation";
  if (/(web|app|flask|node|dotnet|notification|ebook)/.test(text)) return "Apps";
  return "Cloud";
}

function tagsFor(repo) {
  const text = `${repo.name} ${repo.description || ""} ${repo.language || ""} ${(repo.topics || []).join(" ")}`.toLowerCase();
  const rules = [
    ["Terraform", /terraform|\bhcl\b/],
    ["IaC", /terraform|\bhcl\b|\bbicep\b|infrastructure.as.code/],
    ["Azure", /\bazure\b|\baks\b|\baro\b/],
    ["AWS", /\baws\b|amazon web services/],
    ["OCI", /\boci\b|oracle cloud/],
    ["Kubernetes", /kubernetes|\bk8s\b|\baks\b/],
    ["CI/CD", /ci\/cd|pipeline|github actions|azure devops/],
    ["Azure DevOps", /azure devops|azure pipelines|\.azdo/],
    ["AI", /openai|artificial intelligence|language model|chatbot|\brag\b/],
    ["Automation", /script|automation|scheduled|cron|systemd/],
    ["Web App", /web|flask|node|dotnet|app service/],
    ["Data", /database|storage|blob|search|data factory/]
  ];
  const tags = rules.filter(([, pattern]) => pattern.test(text)).map(([tag]) => tag);
  return [...new Set([...tags, categoryFor(repo), "GitHub"])].slice(0, 4);
}

function badgesFor(repo, limit = 6) {
  const badges = [repo.language || "Repository", ...(repo.tags || [])];
  return [...new Set(badges)].slice(0, limit);
}

function demoControl(repo) {
  if (repo.demo) {
    return `<a class="demo-link" href="${repo.demo}" target="_blank" rel="noreferrer" aria-label="${translate("card.demo")} ${repo.name}"><i class="demo-icon" aria-hidden="true"></i>${translate("card.demo")}</a>`;
  }

  return `<span class="demo-link is-disabled" aria-disabled="true" title="Demo not available"><i class="demo-icon" aria-hidden="true"></i>Demo</span>`;
}

function liveRepository(remote) {
  return {
    name: remote.name,
    description: aboutDescription(remote),
    aboutUpdatedAt: remote.updated_at,
    category: categoryFor(remote),
    language: remote.language || "Repository",
    tags: tagsFor(remote),
    docs: documentationUrl(remote.name)
  };
}

async function refreshFromGitHub() {
  try {
    const response = await fetch(`https://api.github.com/users/${account}/repos?per_page=100&sort=updated`, {
      cache: "no-store",
      headers: {
        Accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28"
      }
    });
    if (!response.ok) return;

    const remoteRepositories = await response.json();
    const remoteByName = new Map(remoteRepositories.map((repo) => [repo.name.toLowerCase(), repo]));

    // A successful public API response is authoritative: entries that are now
    // private, deleted, or renamed are removed from the visible catalog.
    repositories.splice(
      0,
      repositories.length,
      ...repositories.filter((repo) => remoteByName.has(repo.name.toLowerCase()))
    );

    repositories.forEach((repo) => {
      const remote = remoteByName.get(repo.name.toLowerCase());
      if (!remote) return;
      if (!repo.curatedDescription) repo.description = aboutDescription(remote);
      repo.aboutUpdatedAt = remote.updated_at;
      repo.language = remote.language || repo.language;
      repo.docs = repo.docs || documentationUrl(remote.name);
    });

    const knownNames = new Set(repositories.map((repo) => repo.name.toLowerCase()));
    remoteRepositories
      .filter((repo) => repo.name !== `${account}.github.io` && !knownNames.has(repo.name.toLowerCase()))
      .forEach((repo) => repositories.push(liveRepository(repo)));

    renderFeatured();
    renderRepositories();
  } catch {
    // The saved repository data remains visible when GitHub is unavailable.
  }
}

function featuredCard(repo, index) {
  return `
    <article class="repo-card" style="--accent: ${repo.accent || "#236b51"}">
      <div class="card-top">
        <div class="card-title">
          <span class="card-number">${String(index + 1).padStart(2, "0")}</span>
          <h3>${repo.name}</h3>
        </div>
        <span class="card-category">${repo.category}</span>
      </div>
      <p data-source="github-about" title="Current GitHub About description">${escapeHtml(repo.description)}</p>
      <div class="repo-meta">${badgesFor(repo).map((badge) => `<span>${badge}</span>`).join("")}</div>
      <div class="card-footer">
        <a href="${repositoryUrl(repo.name)}" target="_blank" rel="noreferrer"><span class="link-copy"><i class="link-icon repository-icon" aria-hidden="true"></i>${translate("card.repository")}</span><span>↗</span></a>
        ${demoControl(repo)}
        ${repo.docs ? `<a class="docs-link" href="${repo.docs}" target="_blank" rel="noreferrer"><i class="link-icon docs-icon" aria-hidden="true"></i>${translate("card.docs")}</a>` : ""}
      </div>
    </article>`;
}

function smallCard(repo) {
  return `
    <article class="small-card">
      <div class="small-card-top">
        <span class="small-card-name">${escapeHtml(repo.name)}</span>
        <span>${repo.category}</span>
      </div>
      <p data-source="github-about" title="Current GitHub About description">${escapeHtml(repo.description)}</p>
      <div class="small-card-badges">${badgesFor(repo, 4).map((badge) => `<span>${badge}</span>`).join("")}</div>
      <div class="small-card-footer">
        <a class="small-card-repo-link" href="${repositoryUrl(repo.name)}" target="_blank" rel="noreferrer" aria-label="${translate("card.repository")} ${escapeHtml(repo.name)}"><i class="link-icon repository-icon" aria-hidden="true"></i><span>${translate("card.repository")}</span><span aria-hidden="true">↗</span></a>
        ${repo.docs ? `<a class="small-card-docs-link docs-link" href="${repo.docs}" target="_blank" rel="noreferrer" aria-label="Open documentation for ${escapeHtml(repo.name)}" title="Open documentation"><i class="link-icon docs-icon" aria-hidden="true"></i></a>` : ""}
      </div>
    </article>`;
}

function renderFeatured() {
  featuredGrid.innerHTML = repositories.filter((repo) => repo.featured).map(featuredCard).join("");
}

function renderRepositories() {
  const query = searchInput.value.trim().toLowerCase();
  const visible = repositories
    .filter((repo) => repo.showInLibrary !== false)
    .filter((repo) => {
      const matchesFilter = activeFilter === "All" || repo.category === activeFilter;
      const matchesSearch = `${repo.name} ${repo.description} ${repo.language} ${(repo.tags || []).join(" ")}`.toLowerCase().includes(query);
      return matchesFilter && matchesSearch;
    })
    .sort((a, b) => Number(Boolean(a.featured)) - Number(Boolean(b.featured)));

  repoGrid.innerHTML = visible.map(smallCard).join("");
  emptyMessage.hidden = visible.length > 0;
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.toggle("active", item === button));
    renderRepositories();
  });
});

searchInput.addEventListener("input", renderRepositories);

featuredGrid.addEventListener("click", event => {
  const link = event.target.closest('a[target="_blank"]');
  if (link && event.detail > 0) link.blur();
});

applyLanguage();
updateThemeSwitch();
renderFeatured();
renderRepositories();
refreshFromGitHub();

document.querySelectorAll(".nav-menu").forEach((menu) => {
  menu.addEventListener("mouseenter", () => menu.setAttribute("open", ""));
  menu.addEventListener("mouseleave", () => {
    menu.removeAttribute("open");
    if (menu.contains(document.activeElement) && matchMedia("(pointer: fine)").matches) document.activeElement.blur();
  });
});
