const translations = {
  en: {
    "nav.home": "Home", "nav.solutions": "Focus", "nav.projects": "Projects", "nav.focus": "Focus", "nav.docs": "Library", "nav.repos": "Repos", "nav.contact": "Contact",
    "contact.eyebrow": "Get in touch", "contact.title": "Let’s talk cloud, automation & DevOps",
    "contact.copy": "I’m open to conversations and collaboration around secure cloud platforms, landing zones, infrastructure as code, CI/CD, GitOps, AI workloads, and open-source tooling.",
    "contact.email": "Email", "contact.projects": "Projects", "contact.projectsValue": "Explore selected work →",
    "contact.docs": "Documentation", "contact.docsValue": "Browse public repositories →",
    "callout.label": "Open source collaboration", "callout.title": "Building repeatable cloud platforms together.",
    "callout.copy": "Have a useful pattern, improvement, or project idea? Start a conversation by email or open an issue in the relevant GitHub repository.",
    "callout.email": "Send an email", "callout.github": "View repositories",
    "footer.focus": "Cloud · Infrastructure · AI · Automation", "footer.home": "Back home ↑",
    "theme.cloud": "Cloud", "theme.classic": "Classic"
  },
  fr: {
    "nav.home": "Accueil", "nav.solutions": "Expertise", "nav.projects": "Projets", "nav.focus": "Expertise", "nav.docs": "Bibliothèque", "nav.repos": "Dépôts", "nav.contact": "Contact",
    "contact.eyebrow": "Prendre contact", "contact.title": "Parlons infonuagique, automatisation et DevOps",
    "contact.copy": "Je suis ouvert aux échanges et aux collaborations sur les plateformes infonuagiques sécurisées, les zones d’atterrissage, l’infrastructure en tant que code, le CI/CD, GitOps, les charges de travail IA et les outils open source.",
    "contact.email": "Courriel", "contact.projects": "Projets", "contact.projectsValue": "Explorer les travaux sélectionnés →",
    "contact.docs": "Documentation", "contact.docsValue": "Parcourir les dépôts publics →",
    "callout.label": "Collaboration open source", "callout.title": "Bâtissons ensemble des plateformes infonuagiques reproductibles.",
    "callout.copy": "Vous avez un modèle utile, une amélioration ou une idée de projet? Écrivez-moi ou ouvrez un enjeu dans le dépôt GitHub concerné.",
    "callout.email": "Envoyer un courriel", "callout.github": "Voir les dépôts",
    "footer.focus": "Infonuagique · Infrastructure · IA · Automatisation", "footer.home": "Retour à l’accueil ↑",
    "theme.cloud": "Nuage", "theme.classic": "Classique"
  },
  zh: {
    "nav.home": "首页", "nav.solutions": "专长", "nav.projects": "项目", "nav.focus": "专长", "nav.docs": "知识库", "nav.repos": "仓库", "nav.contact": "联系",
    "contact.eyebrow": "联系我", "contact.title": "聊聊云平台、自动化与 DevOps",
    "contact.copy": "我愿意围绕安全云平台、着陆区、基础设施即代码、CI/CD、GitOps、AI 工作负载和开源工具展开交流与合作。",
    "contact.email": "邮箱", "contact.projects": "项目", "contact.projectsValue": "探索精选项目 →",
    "contact.docs": "文档", "contact.docsValue": "浏览公共仓库 →",
    "callout.label": "开源协作", "callout.title": "一起构建可复用的云平台。",
    "callout.copy": "有实用的模式、改进建议或项目想法？欢迎通过邮件交流，或在相关 GitHub 仓库中发起议题。",
    "callout.email": "发送邮件", "callout.github": "查看仓库",
    "footer.focus": "云平台 · 基础设施 · AI · 自动化", "footer.home": "返回首页 ↑",
    "theme.cloud": "云端", "theme.classic": "经典"
  }
};

const languageButtons = [...document.querySelectorAll("[data-language]")];
const themeSwitch = document.querySelector("#theme-switch");
const storedLanguage = localStorage.getItem("portfolio-language");
let language = ["en", "fr", "zh"].includes(storedLanguage) ? storedLanguage : "en";

const t = (key) => translations[language][key] || translations.en[key] || key;

function applyLanguage() {
  document.documentElement.lang = language;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    element.innerHTML = t(element.dataset.i18nHtml);
  });
  languageButtons.forEach((button) => {
    const active = button.dataset.language === language;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

function updateTheme() {
  const cloud = document.documentElement.dataset.theme === "cloud";
  themeSwitch.setAttribute("aria-pressed", String(cloud));
  themeSwitch.querySelector(".theme-switch-icon").textContent = cloud ? "☼" : "◐";
  themeSwitch.querySelector(".theme-switch-label").textContent = cloud ? t("theme.classic") : t("theme.cloud");
}

if (localStorage.getItem("portfolio-theme") === "classic") delete document.documentElement.dataset.theme;

themeSwitch.addEventListener("click", () => {
  const cloud = document.documentElement.dataset.theme === "cloud";
  if (cloud) {
    delete document.documentElement.dataset.theme;
    localStorage.setItem("portfolio-theme", "classic");
  } else {
    document.documentElement.dataset.theme = "cloud";
    localStorage.setItem("portfolio-theme", "cloud");
  }
  updateTheme();
});

languageButtons.forEach((button) => button.addEventListener("click", () => {
  language = button.dataset.language;
  localStorage.setItem("portfolio-language", language);
  applyLanguage();
  updateTheme();
}));

applyLanguage();
updateTheme();

document.querySelectorAll(".nav-menu").forEach((menu) => {
  menu.addEventListener("mouseenter", () => menu.setAttribute("open", ""));
  menu.addEventListener("mouseleave", () => {
    menu.removeAttribute("open");
    if (menu.contains(document.activeElement) && matchMedia("(pointer: fine)").matches) document.activeElement.blur();
  });
});
