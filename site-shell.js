(() => {
  const nav = document.querySelector("[data-site-header]");
  if (!nav) return;

  const base = nav.dataset.base === ".." ? "../" : "";
  const active = nav.dataset.active || "";
  const activeClass = (name) => name === active ? " active-nav" : "";
  const storedLanguage = localStorage.getItem("portfolio-language");
  const savedLanguage = ["en", "fr", "zh"].includes(storedLanguage) ? storedLanguage : "en";
  const shellTranslations = {
    en: {
      "shell.language": "Language",
      "shell.openNavigation": "Open navigation",
      "shell.closeNavigation": "Close navigation",
      "menu.cloudArchitecture": "Cloud architecture",
      "menu.devops": "DevOps & GitOps",
      "menu.infrastructureAsCode": "Infrastructure as Code",
      "menu.dataAi": "Data & AI",
      "menu.featuredProjects": "Featured projects",
      "menu.cloudMigrationDemo": "Cloud Migration Demo",
      "menu.allPublicProjects": "All public projects",
      "menu.handsOnLabs": "Hands-on Labs",
      "menu.openEngineeringLibrary": "Open engineering library",
      "menu.majorRepositories": "Major repositories",
      "menu.allGithubRepositories": "All GitHub repositories ↗"
    },
    fr: {
      "shell.language": "Langue",
      "shell.openNavigation": "Ouvrir la navigation",
      "shell.closeNavigation": "Fermer la navigation",
      "menu.cloudArchitecture": "Architecture infonuagique",
      "menu.devops": "DevOps et GitOps",
      "menu.infrastructureAsCode": "Infrastructure en tant que code",
      "menu.dataAi": "Données et IA",
      "menu.featuredProjects": "Projets sélectionnés",
      "menu.cloudMigrationDemo": "Cloud Migration Demo",
      "menu.allPublicProjects": "Tous les projets publics",
      "menu.handsOnLabs": "Laboratoires pratiques",
      "menu.openEngineeringLibrary": "Ouvrir la bibliothèque technique",
      "menu.majorRepositories": "Principaux dépôts",
      "menu.allGithubRepositories": "Tous les dépôts GitHub ↗"
    },
    zh: {
      "shell.language": "语言",
      "shell.openNavigation": "打开导航",
      "shell.closeNavigation": "关闭导航",
      "menu.cloudArchitecture": "云架构",
      "menu.devops": "DevOps 与 GitOps",
      "menu.infrastructureAsCode": "基础设施即代码",
      "menu.dataAi": "数据与 AI",
      "menu.featuredProjects": "精选项目",
      "menu.cloudMigrationDemo": "Cloud Migration Demo",
      "menu.allPublicProjects": "所有公共项目",
      "menu.handsOnLabs": "动手实验",
      "menu.openEngineeringLibrary": "打开工程知识库",
      "menu.majorRepositories": "主要仓库",
      "menu.allGithubRepositories": "所有 GitHub 仓库 ↗"
    }
  };
  const shellCategoryTranslations = {
    en: {
      "applications-kubernetes": "Applications & Kubernetes",
      "ci-cd-automation": "CI/CD & Automation",
      "cloud-foundations-governance": "Cloud Foundations & Governance",
      "cloud-resource": "Cloud Free Resource",
      "data-ai-integration": "Data, AI & Integration",
      "enterprise-solutions": "Enterprise Solutions",
      "hands-on-lab": "Hands-on Labs",
      "how-to-guides": "How-to & Guides",
      "infra-architecture": "Infra Architecture",
      "infrastructure-as-code": "Infrastructure as Code",
      "networking-identity-security": "Networking, Identity & Security",
      "operations-reliability-finops": "Operations, Reliability & FinOps",
      "standards-best-practices": "Standards & Best Practices"
    },
    fr: {
      "applications-kubernetes": "Applications et Kubernetes",
      "ci-cd-automation": "CI/CD et automatisation",
      "cloud-foundations-governance": "Fondations infonuagiques et gouvernance",
      "cloud-resource": "Ressources infonuagiques gratuites",
      "data-ai-integration": "Données, IA et intégration",
      "enterprise-solutions": "Solutions d’entreprise",
      "hands-on-lab": "Laboratoires pratiques",
      "how-to-guides": "Procédures et guides",
      "infra-architecture": "Architecture d’infrastructure",
      "infrastructure-as-code": "Infrastructure en tant que code",
      "networking-identity-security": "Réseau, identité et sécurité",
      "operations-reliability-finops": "Opérations, fiabilité et FinOps",
      "standards-best-practices": "Normes et bonnes pratiques"
    },
    zh: {
      "applications-kubernetes": "应用与 Kubernetes",
      "ci-cd-automation": "CI/CD 与自动化",
      "cloud-foundations-governance": "云基础与治理",
      "cloud-resource": "云端免费资源",
      "data-ai-integration": "数据、AI 与集成",
      "enterprise-solutions": "企业解决方案",
      "hands-on-lab": "动手实验",
      "how-to-guides": "操作指南与教程",
      "infra-architecture": "基础设施架构",
      "infrastructure-as-code": "基础设施即代码",
      "networking-identity-security": "网络、身份与安全",
      "operations-reliability-finops": "运营、可靠性与 FinOps",
      "standards-best-practices": "标准与最佳实践"
    }
  };
  let shellLanguage = savedLanguage;
  const shellText = key => shellTranslations[shellLanguage]?.[key] || shellTranslations.en[key] || key;
  const shellCategoryLabel = folder => shellCategoryTranslations[shellLanguage]?.[folder] || shellCategoryTranslations.en[folder] || folder;

  nav.className = "nav";
  nav.innerHTML = `
    <a class="brand" href="${base}index.html" aria-label="Andy Xuan home">
      <span class="brand-mark">AX</span>
      <span class="brand-copy"><strong>Andy Xuan</strong><small>Cloud Architect</small></span>
    </a>
    <button class="mobile-nav-toggle" type="button" aria-expanded="false" aria-controls="site-navigation" aria-label="${shellText("shell.openNavigation")}">
      <span aria-hidden="true"></span><span aria-hidden="true"></span><span aria-hidden="true"></span>
    </button>
    <div class="nav-links" id="site-navigation">
      <a class="nav-item nav-item-home${activeClass("home")}" href="${base}index.html" data-i18n="nav.home">Home</a>
      <details class="nav-menu nav-item nav-item-focus"><summary class="${activeClass("focus").trim()}"><span data-i18n="nav.solutions">Focus</span><span class="nav-chevron">▾</span></summary><div class="nav-dropdown"><a href="${base}focus.html#cloud" data-shell-i18n="menu.cloudArchitecture">Cloud architecture</a><a href="${base}focus.html#devops" data-shell-i18n="menu.devops">DevOps &amp; GitOps</a><a href="${base}focus.html#iac" data-shell-i18n="menu.infrastructureAsCode">Infrastructure as Code</a><a href="${base}focus.html#data-ai" data-shell-i18n="menu.dataAi">Data &amp; AI</a></div></details>
      <details class="nav-menu nav-item nav-item-projects"><summary><span data-i18n="nav.projects">Projects</span><span class="nav-chevron">▾</span></summary><div class="nav-dropdown"><a href="${base}index.html#featured" data-shell-i18n="menu.featuredProjects">Featured projects</a><a href="https://andyxuan.ca/cloud-migration-demo/" target="_blank" rel="noreferrer" data-shell-i18n="menu.cloudMigrationDemo">Cloud Migration Demo</a><a href="${base}index.html#repositories" data-shell-i18n="menu.allPublicProjects">All public projects</a><a href="${base}docs/#Hands-on%20Labs" data-shell-i18n="menu.handsOnLabs">Hands-on Labs</a></div></details>
      <details class="nav-menu nav-item nav-item-library"><summary class="${activeClass("docs").trim()}"><span data-i18n="nav.docs">Library</span><span class="nav-chevron">▾</span></summary><div class="nav-dropdown" data-docs-menu><a href="${base}docs/" data-shell-i18n="menu.openEngineeringLibrary">Open engineering library</a></div></details>
      <details class="nav-menu nav-item nav-item-repos"><summary><span data-i18n="nav.repos">Repos</span><span class="nav-chevron">▾</span></summary><div class="nav-dropdown"><a href="${base}index.html#repositories" data-shell-i18n="menu.majorRepositories">Major repositories</a><a href="https://github.com/andyxuan2010?tab=repositories" target="_blank" rel="noreferrer" data-shell-i18n="menu.allGithubRepositories">All GitHub repositories ↗</a></div></details>
      <a class="nav-item nav-item-contact${activeClass("contact")}" href="${base}contact.html" data-i18n="nav.contact">Contact</a>
      <a class="github-link" href="https://github.com/andyxuan2010" target="_blank" rel="noreferrer">GitHub <span>↗</span></a>
      <span class="nav-divider" aria-hidden="true"></span>
      <button class="theme-switch" id="theme-switch" type="button" aria-pressed="false"><span class="theme-switch-icon" aria-hidden="true">☼</span><span class="theme-switch-label">Classic</span></button>
      <div class="language-switch" aria-label="${shellText("shell.language")}">
        <button class="language-option${savedLanguage === "en" ? " active" : ""}" type="button" data-language="en" aria-pressed="${savedLanguage === "en"}">EN</button>
        <span aria-hidden="true">/</span>
        <button class="language-option${savedLanguage === "fr" ? " active" : ""}" type="button" data-language="fr" aria-pressed="${savedLanguage === "fr"}">FR</button>
        <span aria-hidden="true">/</span>
        <button class="language-option${savedLanguage === "zh" ? " active" : ""}" type="button" data-language="zh" aria-pressed="${savedLanguage === "zh"}">中文</button>
      </div>
    </div>`;

  const translateShell = language => {
    shellLanguage = ["en", "fr", "zh"].includes(language) ? language : "en";
    nav.querySelectorAll("[data-shell-i18n]").forEach(element => {
      element.textContent = shellText(element.dataset.shellI18n);
    });
    nav.querySelectorAll("[data-shell-category]").forEach(element => {
      element.textContent = shellCategoryLabel(element.dataset.shellCategory);
    });
    nav.querySelector(".language-switch")?.setAttribute("aria-label", shellText("shell.language"));
    const mobileToggle = nav.querySelector(".mobile-nav-toggle");
    if (mobileToggle) {
      const isOpen = nav.classList.contains("mobile-open");
      mobileToggle.setAttribute("aria-label", shellText(isOpen ? "shell.closeNavigation" : "shell.openNavigation"));
    }
  };

  translateShell(savedLanguage);
  nav.querySelectorAll(".language-option").forEach(button => {
    button.addEventListener("click", () => translateShell(button.dataset.language));
  });

  const docsMenu = nav.querySelector("[data-docs-menu]");
  fetch(`${base}docs/docs-index.json`, { cache: "no-cache" })
    .then(response => {
      if (!response.ok) throw new Error("Documentation index unavailable");
      return response.json();
    })
    .then(index => {
      const categories = [...index.categories].sort((left, right) => {
        if (left.folder === "cloud-resource") return 1;
        if (right.folder === "cloud-resource") return -1;
        return 0;
      });
      categories.forEach(category => {
        if (category.folder === "cloud-resource") {
          const divider = document.createElement("span");
          divider.className = "nav-dropdown-divider";
          divider.setAttribute("role", "separator");
          docsMenu.append(divider);
        }
        const link = document.createElement("a");
        link.href = `${base}docs/#${encodeURIComponent(category.title)}`;
        link.dataset.shellCategory = category.folder;
        link.textContent = shellCategoryLabel(category.folder);
        docsMenu.append(link);
      });
    })
    .catch(() => { /* Keep the primary Library link available if metadata cannot load. */ });

  const mobileToggle = nav.querySelector(".mobile-nav-toggle");
  const navLinks = nav.querySelector(".nav-links");
  const desktopHover = matchMedia("(min-width: 1101px) and (hover: hover) and (pointer: fine)");
  const closeMobileNavigation = () => {
    nav.classList.remove("mobile-open");
    mobileToggle.setAttribute("aria-expanded", "false");
    mobileToggle.setAttribute("aria-label", shellText("shell.openNavigation"));
  };

  mobileToggle.addEventListener("click", () => {
    const willOpen = !nav.classList.contains("mobile-open");
    nav.classList.toggle("mobile-open", willOpen);
    mobileToggle.setAttribute("aria-expanded", String(willOpen));
    mobileToggle.setAttribute("aria-label", shellText(willOpen ? "shell.closeNavigation" : "shell.openNavigation"));
  });

  navLinks.addEventListener("click", event => {
    if (event.target.closest("a")) closeMobileNavigation();
  });

  document.addEventListener("click", event => {
    if (!nav.contains(event.target)) closeMobileNavigation();
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      closeMobileNavigation();
      mobileToggle.focus();
    }
  });

  document.querySelectorAll(".nav-menu").forEach((menu) => {
    menu.addEventListener("mouseenter", () => {
      if (desktopHover.matches) menu.setAttribute("open", "");
    });
    menu.addEventListener("mouseleave", () => {
      if (!desktopHover.matches) return;
      menu.removeAttribute("open");
      if (menu.contains(document.activeElement)) document.activeElement.blur();
    });
  });

  addEventListener("resize", () => {
    if (innerWidth > 1100) closeMobileNavigation();
  });

  const footer = document.querySelector("[data-site-footer]");
  if (footer) {
    const isHome = active === "home";
    footer.className = "container";
    footer.innerHTML = `
      <a class="brand" href="${isHome ? "#top" : `${base}index.html`}">
        <span class="brand-mark">AX</span>
        <span class="brand-copy"><strong>Andy Xuan</strong><small>Cloud Architect</small></span>
      </a>
      <p data-i18n="footer.focus">Cloud · Infrastructure · AI · Automation</p>
      <a class="footer-action" href="${isHome ? "#top" : `${base}index.html`}" data-i18n="${isHome ? "footer.top" : "footer.home"}">${isHome ? "Back to top ↑" : "Back home ↑"}</a>`;
  }
})();
