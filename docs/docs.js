let articles = [];
let docsSections = [];

const themeSwitch = document.querySelector("#theme-switch");
const languageOptions = [...document.querySelectorAll(".language-option")];
const storedLanguage = localStorage.getItem("portfolio-language");
let currentLanguage = ["en", "fr", "zh"].includes(storedLanguage) ? storedLanguage : "en";
const navTranslations = {
  en: { "nav.home":"Home", "nav.solutions":"Focus", "nav.projects":"Projects", "nav.docs":"Library", "nav.repos":"Repos", "nav.contact":"Contact", "pdf.download":"Download PDF", "pdf.generating":"Generating PDF…", "pdf.error":"Could not generate the PDF.", "md.download":"Download Markdown", "md.generating":"Downloading Markdown…", "md.error":"Could not download the Markdown file." },
  fr: { "nav.home":"Accueil", "nav.solutions":"Expertise", "nav.projects":"Projets", "nav.docs":"Bibliothèque", "nav.repos":"Dépôts", "nav.contact":"Contact", "pdf.download":"Télécharger le PDF", "pdf.generating":"Génération du PDF…", "pdf.error":"Impossible de générer le PDF.", "md.download":"Télécharger le Markdown", "md.generating":"Téléchargement du Markdown…", "md.error":"Impossible de télécharger le fichier Markdown." },
  zh: { "nav.home":"首页", "nav.solutions":"专长", "nav.projects":"项目", "nav.docs":"知识库", "nav.repos":"仓库", "nav.contact":"联系", "pdf.download":"下载 PDF", "pdf.generating":"正在生成 PDF…", "pdf.error":"无法生成 PDF。", "md.download":"下载 Markdown", "md.generating":"正在下载 Markdown…", "md.error":"无法下载 Markdown 文件。" }
};
const docsUiTranslations = {
  en: {
    "docs.all": "All",
    "docs.library": "Engineering library",
    "docs.onThisPage": "On this page",
    "docs.resourceDomains": "Resource domains",
    "docs.browse": "Browse documentation",
    "docs.continue": "Continue reading",
    "docs.referencedBy": "Referenced by",
    "docs.otherCategories": "Other documentation categories",
    "docs.documentationNavigation": "Documentation navigation",
    "docs.breadcrumb": "Breadcrumb",
    "docs.libraryMap": "Documentation library map",
    "docs.articleFilters": "Article filters",
    "docs.searchArticles": "Search articles",
    "docs.empty": "No articles match that filter.",
    "docs.handsOnEmpty": "Hands-on labs for LLM, Azure, and generative AI deployments are being prepared.",
    "docs.indexEyebrow": "Engineering library",
    "docs.indexTitle": "Cloud patterns, made practical.",
    "docs.indexIntro": "Canonical Markdown guides and hands-on labs organized into thirteen focused categories, with architecture, operations, how-to, and standards content kept easy to navigate.",
    "docs.solarTitle": "Engineering knowledge solar system",
    "docs.solarDescription": "documentation categories orbit a light yellow central sphere containing the count of Markdown guides.",
    "docs.canonicalGuides": "CANONICAL GUIDES",
    "docs.liveLibrary": "Live library",
    "docs.centerOrbitingDomains": "center-orbiting domains",
    "docs.orbit": "1 orbit = 10 minutes",
    "docs.guides": "guides"
  },
  fr: {
    "docs.all": "Tous",
    "docs.library": "Bibliothèque technique",
    "docs.onThisPage": "Sur cette page",
    "docs.resourceDomains": "Domaines de ressources",
    "docs.browse": "Parcourir la documentation",
    "docs.continue": "Poursuivre la lecture",
    "docs.referencedBy": "Référencé par",
    "docs.otherCategories": "Autres catégories de documentation",
    "docs.documentationNavigation": "Navigation de la documentation",
    "docs.breadcrumb": "Fil d’Ariane",
    "docs.libraryMap": "Carte de la bibliothèque technique",
    "docs.articleFilters": "Filtres d’articles",
    "docs.searchArticles": "Rechercher des articles",
    "docs.empty": "Aucun article ne correspond à ce filtre.",
    "docs.handsOnEmpty": "Les laboratoires pratiques pour les déploiements LLM, Azure et IA générative sont en préparation.",
    "docs.indexEyebrow": "Bibliothèque technique",
    "docs.indexTitle": "Des modèles infonuagiques, rendus pratiques.",
    "docs.indexIntro": "Guides Markdown canoniques et laboratoires pratiques organisés en treize catégories ciblées, avec du contenu d’architecture, d’exploitation, de procédures et de normes facile à parcourir.",
    "docs.solarTitle": "Système solaire des connaissances techniques",
    "docs.solarDescription": "catégories de documentation orbitent autour d’une sphère centrale jaune contenant le nombre de guides Markdown.",
    "docs.canonicalGuides": "GUIDES CANONIQUES",
    "docs.liveLibrary": "Bibliothèque active",
    "docs.centerOrbitingDomains": "domaines en orbite",
    "docs.orbit": "1 orbite = 10 minutes",
    "docs.guides": "guides"
  },
  zh: {
    "docs.all": "全部",
    "docs.library": "工程知识库",
    "docs.onThisPage": "本页内容",
    "docs.resourceDomains": "资源领域",
    "docs.browse": "浏览文档",
    "docs.continue": "继续阅读",
    "docs.referencedBy": "引用此文",
    "docs.otherCategories": "其他文档分类",
    "docs.documentationNavigation": "文档导航",
    "docs.breadcrumb": "面包屑导航",
    "docs.libraryMap": "工程知识库地图",
    "docs.articleFilters": "文章筛选",
    "docs.searchArticles": "搜索文章",
    "docs.empty": "没有文章匹配此筛选条件。",
    "docs.handsOnEmpty": "面向 LLM、Azure 和生成式 AI 部署的动手实验正在准备中。",
    "docs.indexEyebrow": "工程知识库",
    "docs.indexTitle": "实用云模式。",
    "docs.indexIntro": "规范 Markdown 指南和动手实验分为十三个重点类别，涵盖架构、运营、操作指南和标准内容，便于浏览。",
    "docs.solarTitle": "工程知识星系",
    "docs.solarDescription": "个文档分类围绕着包含 Markdown 指南数量的浅黄色中心球运行。",
    "docs.canonicalGuides": "规范指南",
    "docs.liveLibrary": "知识库运行中",
    "docs.centerOrbitingDomains": "个围绕中心运行的领域",
    "docs.orbit": "1 个轨道 = 10 分钟",
    "docs.guides": "篇指南"
  }
};
const docsCategoryTranslations = {
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
const docsTypeTranslations = {
  en: { Architecture: "Architecture", Guide: "Guide", "Hands-on lab": "Hands-on lab", "How-to": "How-to", Reference: "Reference", Standard: "Standard" },
  fr: { Architecture: "Architecture", Guide: "Guide", "Hands-on lab": "Laboratoire pratique", "How-to": "Procédure", Reference: "Référence", Standard: "Norme" },
  zh: { Architecture: "架构", Guide: "指南", "Hands-on lab": "动手实验", "How-to": "操作指南", Reference: "参考", Standard: "标准" }
};
const themeTranslations = {
  en: { classic: "Classic", cloud: "Cloud" },
  fr: { classic: "Classique", cloud: "Nuage" },
  zh: { classic: "经典", cloud: "云端" }
};
const articlePdfButtons = () => [...document.querySelectorAll(".article-pdf-button")];
const articleMarkdownButtons = () => [...document.querySelectorAll(".article-md-button")];
const articleDownloadButtons = () => [...document.querySelectorAll(".article-download-button")];
const pdfArticleContent = document.querySelector("#article-content");
const pdfLibraryUrl = "https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js";
let activeArticle = null;
let activeArticleSourcePath = "";
let activeArticleHeadings = [];
let activeArticleRenderId = 0;
let docsIndexRefresh = null;
let pdfLibraryPromise = null;

const articleTranslation = key => navTranslations[currentLanguage]?.[key] || docsUiTranslations[currentLanguage]?.[key] || navTranslations.en[key] || docsUiTranslations.en[key] || key;
const articleCategoryLabel = article => {
  const folder = article?.categoryFolder || article?.folder;
  return docsCategoryTranslations[currentLanguage]?.[folder] || docsCategoryTranslations.en[folder] || article?.category || article?.title || "";
};
const articleTypeLabel = type => docsTypeTranslations[currentLanguage]?.[type] || docsTypeTranslations.en[type] || type || "Guide";
const articleForLanguage = article => {
  if (!article) return article;
  const localized = article.localized?.[currentLanguage];
  return localized ? { ...article, ...localized } : article;
};
const articlePathForLanguage = article => articleForLanguage(article)?.path || article?.path || "";

function setArticlePdfButtonLabel(key) {
  const label = articleTranslation(key);
  articlePdfButtons().forEach(button => {
    button.setAttribute("aria-label", label);
    if (button.title) button.title = label;
  });
}

function setArticleMarkdownButtonLabel(key) {
  const label = articleTranslation(key);
  articleMarkdownButtons().forEach(button => {
    button.setAttribute("aria-label", label);
    if (button.title) button.title = label;
  });
}

function setArticleDownloadButtonLabels() {
  setArticlePdfButtonLabel("pdf.download");
  setArticleMarkdownButtonLabel("md.download");
}

function articlePdfIconMarkup() {
  return `<svg class="article-pdf-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M5 2.5h9l5 5v14H5z" fill="#ef4444" stroke="#ef4444" stroke-linejoin="round" stroke-width="1"></path><path class="article-pdf-icon-fold" d="M14 2.5v5h5z"></path><path d="M14 2.5v5h5" fill="none" stroke="#fecaca" stroke-linejoin="round" stroke-width="1"></path><path d="M7.25 12.25h9.5" fill="none" stroke="#fecaca" stroke-linecap="round" stroke-width="1.15"></path><text x="12" y="17.8" text-anchor="middle">PDF</text></svg>`;
}

function articleMarkdownIconMarkup() {
  return `<svg class="article-md-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M6 2.5h8l4 4v15H6z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.7"></path><path d="M14 2.5v4h4" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.7"></path><path class="article-md-icon-accent" d="M5 13.5h14v5.5H5z"></path><text x="12" y="17.8" text-anchor="middle">MD</text></svg>`;
}

function articleDownloadButtonMarkup(type, position = "top") {
  const isMarkdown = type === "md";
  const label = escapeHtml(articleTranslation(isMarkdown ? "md.download" : "pdf.download"));
  const buttonClass = isMarkdown ? "article-md-button" : "article-pdf-button";
  const id = `article-${isMarkdown ? "md" : "pdf"}-download-${position}`;
  const icon = isMarkdown ? articleMarkdownIconMarkup() : articlePdfIconMarkup();
  return `<button class="article-download-button ${buttonClass} article-pdf-button-icon-only" id="${id}" type="button" aria-label="${label}" title="${label}" disabled>${icon}</button>`;
}

function articlePdfButtonMarkup(position = "top") {
  return articleDownloadButtonMarkup("pdf", position);
}

function articleMarkdownButtonMarkup(position = "top") {
  return articleDownloadButtonMarkup("md", position);
}

function loadPdfLibrary() {
  if (window.html2pdf) return Promise.resolve(window.html2pdf);
  if (pdfLibraryPromise) return pdfLibraryPromise;
  pdfLibraryPromise = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = pdfLibraryUrl;
    script.async = true;
    script.dataset.pdfLibrary = "html2pdf";
    script.onload = () => window.html2pdf ? resolve(window.html2pdf) : reject(new Error("PDF library unavailable"));
    script.onerror = () => reject(new Error("PDF library failed to load"));
    document.head.appendChild(script);
  });
  return pdfLibraryPromise;
}

function waitForArticleImages(target) {
  const images = [...target.querySelectorAll("img")];
  return Promise.all(images.map(image => {
    image.loading = "eager";
    if (image.complete) return Promise.resolve();
    return new Promise(resolve => {
      let settled = false;
      const finish = () => {
        if (settled) return;
        settled = true;
        resolve();
      };
      image.addEventListener("load", finish, { once: true });
      image.addEventListener("error", finish, { once: true });
      window.setTimeout(finish, 5000);
    });
  }));
}

function rasterizePdfImages(target) {
  const replacements = [];
  target.querySelectorAll("img").forEach(image => {
    const source = image.currentSrc || image.src || "";
    if (!/\.svg(?:[?#]|$)/i.test(source)) return;
    const bounds = image.getBoundingClientRect();
    if (!image.complete || !bounds.width || !bounds.height) return;
    const styles = getComputedStyle(image);
    const canvas = document.createElement("canvas");
    const scale = 2;
    canvas.width = Math.ceil(bounds.width * scale);
    canvas.height = Math.ceil(bounds.height * scale);
    canvas.className = image.className;
    canvas.setAttribute("aria-hidden", "true");
    ["display", "boxSizing", "width", "maxWidth", "height", "marginTop", "marginRight", "marginBottom", "marginLeft", "border", "borderRadius", "background"].forEach(property => {
      canvas.style[property] = styles[property];
    });
    const context = canvas.getContext("2d");
    if (!context) return;
    context.drawImage(image, 0, 0, canvas.width, canvas.height);
    image.replaceWith(canvas);
    replacements.push({ image, canvas });
  });
  return () => replacements.reverse().forEach(({ image, canvas }) => canvas.replaceWith(image));
}

async function downloadArticlePdf() {
  const buttons = articleDownloadButtons();
  const pdfButtons = articlePdfButtons();
  if (!activeArticle || !pdfArticleContent || !pdfButtons.length) return;
  const generatingLabel = articleTranslation("pdf.generating");
  buttons.forEach(button => {
    button.disabled = true;
    button.setAttribute("aria-busy", "true");
  });
  pdfButtons.forEach(button => {
    button.setAttribute("aria-label", generatingLabel);
    if (button.title) button.title = generatingLabel;
  });
  document.body.classList.add("pdf-rendering");
  let restorePdfImages = () => {};
  try {
    const html2pdf = await loadPdfLibrary();
    await waitForArticleImages(pdfArticleContent);
    restorePdfImages = rasterizePdfImages(pdfArticleContent);
    const filename = `${String(activeArticleSourcePath || activeArticle.path || activeArticle.slug).split("/").pop().replace(/\.md$/i, "") || activeArticle.slug}.pdf`;
    const isCloud = document.documentElement.dataset.theme === "cloud";
    await html2pdf().set({
      margin: [12, 12, 12, 12],
      filename,
      image: { type: "png", quality: .96 },
      html2canvas: {
        backgroundColor: isCloud ? "#0c1324" : "#fbfaf7",
        logging: false,
        onclone: clonedDocument => {
          const clonedArticle = clonedDocument.querySelector("#article-content");
          if (!clonedArticle) return;
          const style = clonedDocument.createElement("style");
          style.textContent = "#article-content,#article-content *,#article-content *::before,#article-content *::after{background-image:none!important}";
          clonedDocument.head.appendChild(style);
          clonedArticle.querySelectorAll("*").forEach(element => element.style.setProperty("background-image", "none", "important"));
        },
        scale: 2,
        useCORS: true,
        scrollX: 0,
        scrollY: 0
      },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      pagebreak: { mode: ["css", "legacy"], avoid: [".article-alert", ".code-card", ".diagram-figure", ".table-wrapper", "h1", "h2", "h3"] }
    }).from(pdfArticleContent).save();
  } catch (error) {
    console.error("PDF generation failed", error);
    window.alert(articleTranslation("pdf.error"));
  } finally {
    restorePdfImages();
    document.body.classList.remove("pdf-rendering");
    buttons.forEach(button => {
      button.removeAttribute("aria-busy");
      button.disabled = !activeArticle;
    });
    setArticleDownloadButtonLabels();
  }
}

async function downloadArticleMarkdown() {
  const buttons = articleDownloadButtons();
  const markdownButtons = articleMarkdownButtons();
  if (!activeArticle || !markdownButtons.length) return;
  const generatingLabel = articleTranslation("md.generating");
  buttons.forEach(button => {
    button.disabled = true;
    button.setAttribute("aria-busy", "true");
  });
  markdownButtons.forEach(button => {
    button.setAttribute("aria-label", generatingLabel);
    if (button.title) button.title = generatingLabel;
  });
  try {
    const sourcePath = activeArticleSourcePath || articlePathForLanguage(activeArticle);
    const response = await fetch(sourcePath, { cache: "no-cache" });
    if (!response.ok) throw new Error("Markdown article unavailable");
    const markdown = await response.text();
    const filename = String(sourcePath || `${activeArticle.slug}.md`).split("/").pop() || `${activeArticle.slug}.md`;
    const url = URL.createObjectURL(new Blob([markdown], { type: "text/markdown;charset=utf-8" }));
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = filename;
    anchor.rel = "noopener";
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 0);
  } catch (error) {
    console.error("Markdown download failed", error);
    window.alert(articleTranslation("md.error"));
  } finally {
    buttons.forEach(button => {
      button.removeAttribute("aria-busy");
      button.disabled = !activeArticle;
    });
    setArticleDownloadButtonLabels();
  }
}

document.addEventListener("click", event => {
  const button = event.target.closest?.(".article-download-button");
  if (!button) return;
  if (button.classList.contains("article-md-button")) downloadArticleMarkdown();
  if (button.classList.contains("article-pdf-button")) downloadArticlePdf();
});
if (localStorage.getItem("portfolio-theme") === "classic") delete document.documentElement.dataset.theme;

function updateLanguage() {
  document.documentElement.lang = currentLanguage;
  document.querySelectorAll("[data-i18n]").forEach(element => {
    const value = articleTranslation(element.dataset.i18n);
    if (value && value !== element.dataset.i18n) element.textContent = value;
  });
  document.querySelectorAll("[data-i18n-attrs]").forEach(element => {
    element.dataset.i18nAttrs.split(",").forEach(specification => {
      const [attribute, key] = specification.split("=");
      const value = articleTranslation(key);
      if (attribute && value && value !== key) element.setAttribute(attribute, value);
    });
  });
  languageOptions.forEach(button => {
    const active = button.dataset.language === currentLanguage;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  setArticleDownloadButtonLabels();
  updateThemeSwitch();
  docsIndexRefresh?.();
  if (activeArticle) void renderArticle(activeArticle);
}

languageOptions.forEach(button => button.addEventListener("click", () => {
  currentLanguage = button.dataset.language;
  localStorage.setItem("portfolio-language", currentLanguage);
  updateLanguage();
}));
updateLanguage();

function updateThemeSwitch() {
  const cloud = document.documentElement.dataset.theme === "cloud";
  themeSwitch.setAttribute("aria-pressed", String(cloud));
  themeSwitch.querySelector(".theme-switch-icon").textContent = cloud ? "☼" : "◐";
  const labels = themeTranslations[currentLanguage] || themeTranslations.en;
  themeSwitch.querySelector(".theme-switch-label").textContent = cloud ? labels.classic : labels.cloud;
}

themeSwitch.addEventListener("click", () => {
  const cloud = document.documentElement.dataset.theme === "cloud";
  if (cloud) {
    delete document.documentElement.dataset.theme;
    localStorage.setItem("portfolio-theme", "classic");
  } else {
    document.documentElement.dataset.theme = "cloud";
    localStorage.setItem("portfolio-theme", "cloud");
  }
  updateThemeSwitch();
  const articleContent = document.querySelector("#article-content");
  if (articleContent) applyDiagramPalette(articleContent);
});
updateThemeSwitch();

const escapeHtml = (value) => String(value).replace(/[&<>"']/g, char => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;" })[char]);
const safeMarkdownHref = (value) => {
  const href = String(value).trim();
  if (/^(?:https?:|mailto:|stun:|#|\/(?!\/)|\.{1,2}\/)/i.test(href)) return href;
  if (/^[a-z][a-z0-9+.-]*:/i.test(href)) return "#";
  return href;
};
const safeMarkdownImageSrc = (value) => {
  const src = String(value).trim().replace(/^&lt;|&gt;$/g, "");
  if (/^(?:https?:|\/(?!\/)|\.{1,2}\/|[a-z0-9_-]+(?:\/|$))/i.test(src)) return src;
  return "#";
};
const inlineMarkdown = (value) => escapeHtml(value)
  .replace(/`([^`]+)`/g, "<code>$1</code>")
  .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
  .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (_, alt, src) => {
    return `<img src="${safeMarkdownImageSrc(src)}" alt="${alt}" loading="lazy" decoding="async">`;
  })
  .replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, label, href) => {
    const normalizedHref = href.trim().replace(/^&lt;|&gt;$/g, "");
    return `<a href="${safeMarkdownHref(normalizedHref)}">${label}</a>`;
  });

const codeLanguageLabels = {
  bash: "Bash",
  bicep: "Bicep",
  csharp: "C#",
  dockerfile: "Dockerfile",
  dotenv: "Environment variables",
  hcl: "Terraform / HCL",
  javascript: "JavaScript",
  json: "JSON",
  kusto: "Kusto Query Language",
  makefile: "Makefile",
  markdown: "Markdown",
  powershell: "PowerShell",
  python: "Python",
  shell: "Shell",
  terraform: "Terraform / HCL",
  text: "Text",
  typescript: "TypeScript",
  yaml: "YAML"
};

function parseDocument(source) {
  const frontmatter = {};
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/);
  if (match) {
    match[1].split(/\r?\n/).forEach(line => {
      const separator = line.indexOf(":");
      if (separator > 0) frontmatter[line.slice(0,separator).trim()] = line.slice(separator + 1).trim();
    });
    source = source.slice(match[0].length);
  }

  const lines = source.split(/\r?\n/);
  const output = [];
  let paragraph = [];
  const listStack = [];
  let inCode = false;
  let code = [];
  let codeLanguage = "";
  let codeCaption = "";
  const headings = [];
  const usedIds = new Set();
  const headingText = value => {
    const codeSpans = [];
    const protectedValue = value.replace(/`([^`]+)`/g, (_, code) => {
      codeSpans.push(code);
      return `\u0000${codeSpans.length - 1}\u0000`;
    });
    return protectedValue
      .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
      .replace(/\*\*([^*]+)\*\*/g, "$1")
      .replace(/__([^_]+)__/g, "$1")
      .replace(/\*([^*]+)\*/g, "$1")
      .replace(/_([^_]+)_/g, "$1")
      .replace(/[\*_]/g, "")
      .replace(/\u0000(\d+)\u0000/g, (_, index) => codeSpans[Number(index)]);
  };
  const headingId = value => {
    const plain = value.replace(/[`*_\[\]]/g, "").replace(/\([^)]*\)/g, "");
    const base = plain.toLowerCase().replace(/&/g, " and ").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "section";
    let id = base;
    let suffix = 2;
    while (usedIds.has(id)) id = `${base}-${suffix++}`;
    usedIds.add(id);
    return id;
  };

  const flushParagraph = () => {
    if (paragraph.length) output.push(`<p>${inlineMarkdown(paragraph.join(" "))}</p>`);
    paragraph = [];
  };
  const closeLists = (minimumIndent = -1) => {
    while (listStack.length && listStack.at(-1).indent >= minimumIndent) {
      const list = listStack.pop();
      if (list.liOpen) output.push("</li>");
      output.push(`</${list.type}>`);
    }
  };

  const renderListItem = (indent, type, content) => {
    flushParagraph();
    const task = content.match(/^\[([ xX])\]\s+(.+)$/);
    while (listStack.length && listStack.at(-1).indent > indent) closeLists(listStack.at(-1).indent);
    let current = listStack.at(-1);
    if (current && current.indent === indent && current.type !== type) {
      closeLists(indent);
      current = listStack.at(-1);
    }
    if (!current || current.indent < indent) {
      output.push(`<${type}${task ? ' class="task-list"' : ""}>`);
      current = { indent, type, liOpen: false };
      listStack.push(current);
    } else if (current.liOpen) {
      output.push("</li>");
      current.liOpen = false;
    }
    if (task) {
      const checked = task[1].toLowerCase() === "x";
      output.push(`<li class="task-list-item"><input type="checkbox" disabled${checked ? " checked" : ""} aria-label="${checked ? "Completed" : "Not completed"}"><span>${inlineMarkdown(task[2])}</span>`);
    } else {
      output.push(`<li>${inlineMarkdown(content)}`);
    }
    current.liOpen = true;
  };

  const tableCells = line => {
    const value = line.trim().replace(/^\|/, "").replace(/\|$/, "");
    const cells = [];
    let cell = "";
    for (let index = 0; index < value.length; index += 1) {
      if (value[index] === "\\" && value[index + 1] === "|") { cell += "|"; index += 1; continue; }
      if (value[index] === "|") { cells.push(cell.trim()); cell = ""; continue; }
      cell += value[index];
    }
    cells.push(cell.trim());
    return cells;
  };
  const tableDivider = line => tableCells(line).every(cell => /^:?-{3,}:?$/.test(cell));
  const tableAlignment = cell => cell.startsWith(":") && cell.endsWith(":") ? "center" : cell.endsWith(":") ? "right" : cell.startsWith(":") ? "left" : "";

  for (let lineIndex = 0; lineIndex < lines.length; lineIndex += 1) {
    const line = lines[lineIndex];
    if (line.startsWith("```")) {
      flushParagraph(); closeLists();
      if (inCode) {
        const source = code.join("\n");
        if (codeLanguage === "mermaid") {
          const customColors = /\bclassDef\b/.test(source);
          output.push(`<figure class="diagram-figure" data-custom-colors="${customColors}"><div class="mermaid">${escapeHtml(source)}</div>${codeCaption ? `<figcaption>${inlineMarkdown(codeCaption)}</figcaption>` : ""}</figure>`);
        } else {
          const language = codeLanguage || "text";
          const label = codeCaption || codeLanguageLabels[language] || language.toUpperCase();
          output.push(`<div class="code-card" data-language="${escapeHtml(language)}"><div class="code-head"><span class="code-dots" aria-hidden="true"><i></i><i></i><i></i></span><span class="code-file">${escapeHtml(label)}</span><button class="copy-code" type="button" aria-label="Copy ${escapeHtml(label)} code">Copy</button></div><pre><code${codeLanguage ? ` class="language-${escapeHtml(codeLanguage)}"` : ""}>${escapeHtml(source)}</code></pre></div>`);
        }
        code = [];
        codeLanguage = "";
        codeCaption = "";
      } else {
        const fence = line.slice(3).trim().match(/^(\S+)?(?:\s+(.+))?$/);
        codeLanguage = (fence?.[1] || "").toLowerCase().replace(/[^a-z0-9_-]/g, "");
        codeCaption = fence?.[2]?.trim() || "";
      }
      inCode = !inCode;
      continue;
    }
    if (inCode) { code.push(line); continue; }
    const heading = line.match(/^(#{1,6})\s+(.+)$/);
    if (heading) {
      flushParagraph(); closeLists();
      const level = heading[1].length;
      const id = headingId(heading[2]);
      const text = headingText(heading[2]);
      if (level > 1) headings.push({ level, id, text });
      output.push(`<h${level} id="${id}">${inlineMarkdown(heading[2])}</h${level}>`);
      continue;
    }
    const alert = line.match(/^>\s*\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\]\s*(.*)$/i);
    if (alert) {
      flushParagraph(); closeLists();
      const kind = alert[1].toLowerCase();
      const alertLines = [];
      if (alert[2]) alertLines.push(alert[2]);
      while (lines[lineIndex + 1]?.startsWith(">")) {
        lineIndex += 1;
        alertLines.push(lines[lineIndex].replace(/^>\s?/, ""));
      }
      output.push(`<aside class="article-alert article-alert-${kind}" role="note"><span class="article-alert-icon" aria-hidden="true"></span><div><strong>${escapeHtml(alert[1][0] + alert[1].slice(1).toLowerCase())}</strong><p>${inlineMarkdown(alertLines.join(" "))}</p></div></aside>`);
      continue;
    }
    const unordered = line.match(/^(\s*)[-*+]\s+(.+)$/);
    const ordered = line.match(/^(\s*)\d+[.)]\s+(.+)$/);
    if (unordered || ordered) {
      const item = unordered || ordered;
      renderListItem(item[1].replace(/\t/g, "    ").length, unordered ? "ul" : "ol", item[2]);
      continue;
    }
    if (line.includes("|") && lines[lineIndex + 1]?.includes("|") && tableDivider(lines[lineIndex + 1])) {
      flushParagraph(); closeLists();
      const headers = tableCells(line);
      const dividers = tableCells(lines[lineIndex + 1]);
      const alignments = dividers.map(tableAlignment);
      const rows = [];
      lineIndex += 2;
      while (lineIndex < lines.length && lines[lineIndex].trim() && lines[lineIndex].includes("|")) {
        rows.push(tableCells(lines[lineIndex]));
        lineIndex += 1;
      }
      lineIndex -= 1;
      const cellStyle = index => alignments[index] ? ` style="text-align:${alignments[index]}"` : "";
      output.push(`<div class="table-wrapper"><table><thead><tr>${headers.map((cell,index) => `<th scope="col"${cellStyle(index)}>${inlineMarkdown(cell)}</th>`).join("")}</tr></thead><tbody>${rows.map(row => `<tr>${headers.map((_,index) => `<td${cellStyle(index)}>${inlineMarkdown(row[index] || "")}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`);
      continue;
    }
    if (!line.trim()) { flushParagraph(); closeLists(); continue; }
    if (listStack.length) closeLists();
    paragraph.push(line.trim());
  }
  if (inCode && code.length) output.push(`<pre><code>${escapeHtml(code.join("\n"))}</code></pre>`);
  flushParagraph(); closeLists();
  return { frontmatter, headings, html: output.join("") };
}

function resolveArticleImageSources(target, articlePath) {
  if (!articlePath) return;
  const sourceUrl = new URL(articlePath, document.baseURI);
  target.querySelectorAll("img[src]").forEach(image => {
    const source = image.getAttribute("src") || "";
    if (!source || /^(?:[a-z][a-z0-9+.-]*:|\/)/i.test(source)) return;
    const resolved = new URL(source, sourceUrl);
    image.setAttribute("src", `${resolved.pathname}${resolved.search}${resolved.hash}`);
  });
}

function articleHref(slug) {
  return `article.html?article=${encodeURIComponent(slug)}`;
}

function articleAccent(slug) {
  let hash = 2166136261;
  for (const character of slug) {
    hash ^= character.charCodeAt(0);
    hash = Math.imul(hash, 16777619);
  }
  const hue = ((hash >>> 0) * 360 / 4294967296).toFixed(3);
  const lightness = hue >= 38 && hue <= 78 ? 43 : 56;
  return `hsl(${hue} 72% ${lightness}%)`;
}

const categoryAccents = new Map([
  ["applications-kubernetes", "#00c2d7"],
  ["ci-cd-automation", "#2f6dff"],
  ["cloud-foundations-governance", "#6d4aff"],
  ["cloud-resource", "#ff8c42"],
  ["data-ai-integration", "#a83ee6"],
  ["enterprise-solutions", "#0f766e"],
  ["how-to-guides", "#ed3975"],
  ["hands-on-lab", "#73a815"],
  ["infra-architecture", "#dc3748"],
  ["infrastructure-as-code", "#f47a2c"],
  ["networking-identity-security", "#d9a400"],
  ["operations-reliability-finops", "#20b86a"],
  ["standards-best-practices", "#009b91"]
]);

const cloudProviderIcons = new Map([
  ["Google Cloud Platform", { asset: "provider-google-cloud.svg", label: "GCP" }],
  ["Amazon Web Services", { asset: "provider-aws.svg", label: "AWS" }],
  ["Microsoft Azure", { asset: "provider-azure.svg", label: "Azure" }],
  ["Oracle Cloud", { asset: "provider-oracle-cloud.svg", label: "Oracle Cloud" }],
  ["IBM Cloud", { asset: "provider-ibm-cloud.svg", label: "IBM Cloud" }],
  ["Cloudflare", { asset: "provider-cloudflare.svg", label: "Cloudflare" }],
  ["Zoho", { asset: "provider-zoho.svg", label: "Zoho" }]
]);

function cardMarkup(article) {
  const view = articleForLanguage(article);
  const accent = categoryAccents.get(article.categoryFolder) || articleAccent(article.slug);
  return `<a class="docs-card" href="${articleHref(article.slug)}" style="--accent:${accent}"><span class="docs-card-category">${escapeHtml(articleCategoryLabel(article))}</span><div class="docs-card-meta"><span>${escapeHtml(articleTypeLabel(article.articleTypeLabel))}</span><span>${escapeHtml(view.lastUpdated || "")}</span><span>${view.readMinutes || 1} min read</span></div><h2>${escapeHtml(view.title)}</h2><p>${escapeHtml(view.summary)}</p><span class="docs-card-tags">${(view.tags || []).map(tag => `<small>${escapeHtml(tag)}</small>`).join("")}</span></a>`;
}

function rewriteInternalArticleLinks(target, article, sourcePath = article?.path) {
  const pathToSlug = new Map();
  articles.forEach(item => {
    pathToSlug.set(item.path, item.slug);
    Object.values(item.localized || {}).forEach(localized => {
      if (localized?.path) pathToSlug.set(localized.path, item.slug);
    });
  });
  target.querySelectorAll("a[href]").forEach(link => {
    const href = link.getAttribute("href") || "";
    if (/^(?:https?:|mailto:|#|\/)/i.test(href) || !/\.md(?:#.*)?$/i.test(href)) return;
    const [rawPath, rawHash = ""] = href.split("#", 2);
    let resolvedPath = "";
    try {
      resolvedPath = new URL(rawPath, `https://knowledge-base.invalid/${sourcePath || article.path}`).pathname.replace(/^\/+/, "");
    } catch {
      return;
    }
    const slug = pathToSlug.get(resolvedPath);
    if (slug) link.setAttribute("href", `${articleHref(slug)}${rawHash ? `#${rawHash}` : ""}`);
  });
}

function decorateExternalLinks(target, article) {
  if (article?.categoryFolder !== "cloud-resource") return;
  target.querySelectorAll("a[href]").forEach(link => {
    const href = (link.getAttribute("href") || "").trim();
    if (!/^(?:https?:|mailto:|tel:|stun:|\/\/)/i.test(href)) return;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  });
}

function articleLinkCards(slugs, currentSlug, limit = 3) {
  const seen = new Set([currentSlug]);
  return slugs.map(slug => articles.find(item => item.slug === slug)).filter(item => item && !seen.has(item.slug)).filter(item => {
    seen.add(item.slug);
    return true;
  }).slice(0, limit).map(item => {
    const view = articleForLanguage(item);
    return `<a class="related-link" href="${articleHref(item.slug)}"><small>${escapeHtml(articleTypeLabel(item.articleTypeLabel))}</small><strong>${escapeHtml(view.title)}</strong></a>`;
  }).join("");
}

function renderRelatedArticles(article) {
  if (!article) return;
  const fallback = articles.filter(item => item.slug !== article.slug && item.category === article.category).map(item => item.slug);
  const relatedSlugs = [...(article.relatedSlugs || []), ...fallback];
  const relatedGrid = document.querySelector("#related-grid");
  if (relatedGrid) relatedGrid.innerHTML = articleLinkCards(relatedSlugs, article.slug);
  const backlinks = [...(article.backlinkSlugs || [])];
  const backlinkAside = document.querySelector("#article-backlinks");
  if (backlinkAside) {
    backlinkAside.hidden = backlinks.length === 0;
    const backlinksGrid = document.querySelector("#backlinks-grid");
    if (backlinksGrid) backlinksGrid.innerHTML = articleLinkCards(backlinks, article.slug);
  }
}

function setupReaderShell(activeSlug = "") {
  const sidebar = document.querySelector("#docs-sidebar");
  const toggle = document.querySelector("#docs-nav-toggle");
  if (!sidebar) return;
  const activeArticle = articles.find(article => article.slug === activeSlug);
  const activeSection = activeArticle
    ? docsSections.find(section => section.folder === activeArticle.categoryFolder)
    : null;
  const otherSections = activeSection
    ? docsSections.filter(section => section.folder !== activeSection.folder)
    : docsSections;
  const activeMarkup = activeSection ? `
    <section class="docs-nav-group docs-nav-group-expanded">
      <h2><a class="docs-nav-category active" href="./#${encodeURIComponent(activeSection.title)}" aria-current="true"><span>${escapeHtml(articleCategoryLabel(activeSection))}</span><span aria-hidden="true">−</span></a></h2>
       ${activeSection.items.map(slug => {
       const item = articles.find(article => article.slug === slug);
       const view = articleForLanguage(item);
       return `<a href="${articleHref(slug)}"${slug === activeSlug ? ' class="active" aria-current="page"' : ""}>${escapeHtml(view.title)}</a>`;
     }).join("")}
    </section>` : "";
  const collapsedMarkup = otherSections.length ? `<nav class="docs-nav-collapsed" aria-label="${escapeHtml(articleTranslation("docs.otherCategories"))}">${otherSections.map(section => `
    <a class="docs-nav-category" href="./#${encodeURIComponent(section.title)}"><span>${escapeHtml(articleCategoryLabel(section))}</span><span class="docs-nav-chevron" aria-hidden="true">&gt;&gt;&gt;</span></a>`).join("")}</nav>` : "";
  sidebar.innerHTML = `<a class="docs-sidebar-home" href="./">${escapeHtml(articleTranslation("docs.library"))}</a>${activeMarkup}${collapsedMarkup}`;
  bindScrollCues(sidebar);
  if (toggle && !toggle.dataset.bound) {
    toggle.dataset.bound = "true";
    toggle.addEventListener("click", () => {
      const open = sidebar.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
      requestAnimationFrame(() => sidebar._updateScrollCues?.());
    });
  }
}

function buildTocTree(headings, rootLevel = 2) {
  const roots = [];
  const stack = [];
  headings.filter(heading => heading.level >= rootLevel).forEach(heading => {
    const node = { heading, children: [] };
    while (stack.length && stack.at(-1).heading.level >= heading.level) stack.pop();
    if (stack.length) stack.at(-1).children.push(node);
    else if (heading.level === rootLevel) roots.push(node);
    stack.push(node);
  });
  return roots;
}

function renderTocNode(node) {
  const { heading, children } = node;
  if (!children.length) return `<a class="toc-level-${heading.level}" data-toc-target="${escapeHtml(heading.id)}" href="#${heading.id}">${escapeHtml(heading.text)}</a>`;
  return `<details class="docs-toc-group${heading.level > 2 ? " docs-toc-subgroup" : ""}"><summary class="toc-level-${heading.level} docs-toc-summary" data-toc-target="${escapeHtml(heading.id)}"><span>${escapeHtml(heading.text)}</span><span class="docs-toc-group-toggle" aria-hidden="true">+</span></summary><div class="docs-toc-children">${children.map(renderTocNode).join("")}</div></details>`;
}

function closeTocSiblings(group) {
  const parent = group.parentElement;
  [...(parent?.children || [])]
    .filter(sibling => sibling !== group && sibling.classList?.contains("docs-toc-group") && sibling.open)
    .forEach(sibling => sibling.removeAttribute("open"));
}

function bindTocGroups(toc) {
  toc.querySelectorAll(".docs-toc-group").forEach(group => {
    group.addEventListener("toggle", () => {
      toc._updateScrollCues?.();
      if (!group.open) return;
      closeTocSiblings(group);
      toc._updateScrollCues?.();
    });
  });
}

function bindScrollCues(panel) {
  panel._scrollCueCleanup?.();
  const update = () => {
    const maxScroll = Math.max(0, panel.scrollHeight - panel.clientHeight);
    const scrollable = maxScroll > 4;
    panel.dataset.scrollable = String(scrollable);
    if (!scrollable) {
      panel.dataset.scrollPosition = "none";
      return;
    }
    const atTop = panel.scrollTop <= 4;
    const atBottom = panel.scrollTop >= maxScroll - 4;
    panel.dataset.scrollPosition = atTop ? "top" : atBottom ? "bottom" : "middle";
  };
  const cleanup = () => {
    panel.removeEventListener("scroll", update);
    window.removeEventListener("resize", update);
    if (panel._updateScrollCues === update) delete panel._updateScrollCues;
  };
  panel._scrollCueCleanup = cleanup;
  panel._updateScrollCues = update;
  panel.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  update();
}

function revealTocEntry(toc, entry) {
  if (!entry || toc.dataset.scrollable !== "true") return;
  const tocBounds = toc.getBoundingClientRect();
  const entryBounds = entry.getBoundingClientRect();
  const edge = 18;
  if (entryBounds.top >= tocBounds.top + edge && entryBounds.bottom <= tocBounds.bottom - edge) return;
  const targetTop = toc.scrollTop + entryBounds.top - tocBounds.top - (toc.clientHeight - entryBounds.height) / 2;
  const maxScroll = Math.max(0, toc.scrollHeight - toc.clientHeight);
  toc.scrollTo({ top: Math.max(0, Math.min(maxScroll, targetTop)), behavior: "smooth" });
}

function bindTocScrollSpy(toc, target) {
  toc._scrollSpyCleanup?.();
  const entries = [...toc.querySelectorAll("[data-toc-target]")];
  const entryById = new Map(entries.map(entry => [entry.dataset.tocTarget, entry]));
  const headingById = new Map([...target.querySelectorAll("h2[id],h3[id],h4[id],h5[id],h6[id]")].map(heading => [heading.id, heading]));
  const headings = entries.map(entry => headingById.get(entry.dataset.tocTarget)).filter(Boolean);
  if (!headings.length) return;

  let activeId = "";
  let frame = 0;
  const setActive = (id, reveal = true) => {
    if (!id) return;
    const changed = id !== activeId;
    if (!changed && !reveal) return;
    if (changed) {
      activeId = id;
      entries.forEach(entry => {
        const active = entry.dataset.tocTarget === id;
        entry.classList.toggle("active", active);
        entry.classList.remove("active-ancestor");
        if (active) entry.setAttribute("aria-current", "location");
        else entry.removeAttribute("aria-current");
      });
    }
    if (!reveal) return;
    const activeEntry = entryById.get(id);
    let group = activeEntry?.closest("details");
    while (group) {
      const summary = group.firstElementChild?.tagName === "SUMMARY" ? group.firstElementChild : null;
      summary?.classList.add("active-ancestor");
      group.open = true;
      closeTocSiblings(group);
      group = group.parentElement?.closest("details");
    }
    requestAnimationFrame(() => revealTocEntry(toc, activeEntry));
  };
  let firstUpdate = true;
  const update = () => {
    if (frame) return;
    frame = requestAnimationFrame(() => {
      frame = 0;
      const threshold = 126;
      let activeHeading = headings[0];
      headings.forEach(heading => {
        if (heading.getBoundingClientRect().top <= threshold) activeHeading = heading;
      });
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8) activeHeading = headings.at(-1);
      setActive(activeHeading.id, !firstUpdate);
      firstUpdate = false;
    });
  };
  const cleanup = () => {
    window.removeEventListener("scroll", update);
    window.removeEventListener("resize", update);
    if (frame) cancelAnimationFrame(frame);
  };
  toc._scrollSpyCleanup = cleanup;
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  update();
}

function renderToc(headings, article, target) {
  const toc = document.querySelector("#docs-toc");
  if (!toc) return;
  const isCloudResource = article?.categoryFolder === "cloud-resource";
  if (isCloudResource) {
    const catalogStart = headings.findIndex(heading => heading.level === 2);
    const catalogEnd = headings.findIndex((heading, index) => index > catalogStart && heading.level === 2);
    const catalogHeadings = catalogStart >= 0
      ? headings.slice(catalogStart + 1, catalogEnd >= 0 ? catalogEnd : headings.length)
      : [];
    const tocTree = buildTocTree(catalogHeadings, 3);
    toc.innerHTML = tocTree.length ? `<h2>${escapeHtml(articleTranslation("docs.resourceDomains"))}</h2>${tocTree.map(renderTocNode).join("")}` : "";
    bindScrollCues(toc);
    bindTocGroups(toc);
    bindTocScrollSpy(toc, target);
    toc.classList.toggle("docs-toc-cloud-resource", true);
    return;
  }
  const tocTree = buildTocTree(headings);
  toc.innerHTML = tocTree.length ? `<h2>${escapeHtml(articleTranslation("docs.onThisPage"))}</h2>${tocTree.map(renderTocNode).join("")}` : "";
  bindScrollCues(toc);
  bindTocGroups(toc);
  bindTocScrollSpy(toc, target);
  toc.classList.toggle("docs-toc-cloud-resource", isCloudResource);
}

function renderBreadcrumb(parts) {
  const target = document.querySelector("#docs-breadcrumb");
  if (!target) return;
  target.innerHTML = `<a href="./">${escapeHtml(articleTranslation("docs.library"))}</a>${parts.map((part, index) => `<span aria-hidden="true">/</span>${index === parts.length - 1 ? `<span>${escapeHtml(part)}</span>` : `<a href="${"./"}">${escapeHtml(part)}</a>`}`).join("")}`;
}

function decorateCloudResourceDocument(target) {
  const catalogHeading = target.querySelector("h2");
  if (!catalogHeading) return;
  target.querySelectorAll('a[href="#free-resource-catalog"]').forEach(link => {
    link.setAttribute("href", `#${catalogHeading.id}`);
  });
  const accents = ["#38d3ff", "#3edbb0", "#a78bfa", "#ffbd38", "#fb7185", "#60a5fa"];
  let node = catalogHeading.nextElementSibling;
  let card = null;
  let index = 0;
  while (node && node.tagName !== "H2") {
    const next = node.nextElementSibling;
    if (node.tagName === "H3") {
      card = document.createElement("section");
      card.className = "cloud-resource-category-card";
      card.dataset.categoryIndex = String(index);
      card.dataset.cloudResourceAccent = String(index % accents.length);
      node.before(card);
      card.append(node);
      index += 1;
    } else if (card) {
      if (node.tagName === "H5") {
        const providerName = node.textContent.trim();
        const provider = cloudProviderIcons.get(providerName);
        const link = node.querySelector("a");
        if (provider && link) {
          const icon = document.createElement("img");
          icon.className = "cloud-provider-icon";
          icon.src = new URL(`assets/${provider.asset}`, document.baseURI).pathname;
          icon.alt = "";
          icon.setAttribute("aria-hidden", "true");
          const accessibleLabel = document.createElement("span");
          accessibleLabel.className = "cloud-provider-label";
          accessibleLabel.textContent = providerName;
          link.className = "cloud-provider-link";
          link.setAttribute("aria-label", providerName);
          link.title = providerName;
          link.replaceChildren(icon, accessibleLabel);
          node.classList.add("cloud-provider-heading");
          node.dataset.provider = provider.label;
        }
      }
      card.append(node);
    }
    node = next;
  }
  const usedResourceIds = new Set();
  target.querySelectorAll(".cloud-resource-category-card table a, .cloud-resource-category-card ul a").forEach(link => {
    const base = `resource-${link.textContent.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "item"}`;
    let id = base;
    let suffix = 2;
    while (usedResourceIds.has(id)) id = `${base}-${suffix++}`;
    usedResourceIds.add(id);
    link.id = id;
    link.style.scrollMarginTop = "120px";
  });
}

function guardHeaderLayout(target) {
  requestAnimationFrame(() => {
    const elements = [target.querySelector(".article-kicker"),target.querySelector("h1"),target.querySelector(".article-summary, .source-path"),target.querySelector(".article-tags")].filter(Boolean);
    const overlaps = elements.some((element,index) => index > 0 && elements[index - 1].getBoundingClientRect().bottom > element.getBoundingClientRect().top);
    target.classList.toggle("compact-header",overlaps);
  });
}

function applyDiagramPalette(target) {
  const cloud = document.documentElement.dataset.theme === "cloud";
  const palette = cloud ? [
    ["#172554", "#60a5fa"],
    ["#351854", "#c084fc"],
    ["#10372f", "#34d399"],
    ["#472b0d", "#fbbf24"],
    ["#3f1725", "#fb7185"],
    ["#123247", "#38bdf8"]
  ] : [
    ["#dbeafe", "#2563eb"],
    ["#f3e8ff", "#9333ea"],
    ["#d1fae5", "#059669"],
    ["#fef3c7", "#d97706"],
    ["#ffe4e6", "#e11d48"],
    ["#e0f2fe", "#0284c7"]
  ];
  target.querySelectorAll('.diagram-figure[data-custom-colors="false"] .mermaid .node').forEach((node, index) => {
    const [fill, stroke] = palette[index % palette.length];
    node.querySelectorAll("rect, circle, ellipse, polygon, path").forEach(shape => {
      shape.style.fill = fill;
      shape.style.stroke = stroke;
      shape.style.strokeWidth = "2px";
    });
  });
  const actorFill = cloud ? "#15213b" : "#dbeafe";
  const actorStroke = cloud ? "#60a5fa" : "#075985";
  target.querySelectorAll('.diagram-figure .mermaid rect.actor').forEach(actor => {
    actor.style.setProperty("fill", actorFill, "important");
    actor.style.setProperty("stroke", actorStroke, "important");
    actor.style.setProperty("stroke-width", "2px", "important");
  });
  const textColor = cloud ? "#e9eefc" : "#0f172a";
  target.querySelectorAll(".diagram-figure .mermaid svg text, .diagram-figure .mermaid svg .nodeLabel, .diagram-figure .mermaid svg .edgeLabel, .diagram-figure .mermaid svg .messageText, .diagram-figure .mermaid svg .labelText, .diagram-figure .mermaid svg .loopText, .diagram-figure .mermaid svg .noteText").forEach(label => {
    label.style.setProperty("fill", textColor, "important");
    label.style.setProperty("color", textColor, "important");
  });
  const lineColor = cloud ? "#9fb4d9" : "#334155";
  target.querySelectorAll(".diagram-figure .mermaid svg .messageLine0, .diagram-figure .mermaid svg .messageLine1, .diagram-figure .mermaid svg .actor-line, .diagram-figure .mermaid svg .loopLine, .diagram-figure .mermaid svg .labelBox").forEach(line => {
    line.style.setProperty("stroke", lineColor, "important");
  });
  target.querySelectorAll(".diagram-figure .mermaid svg .labelBox").forEach(labelBox => {
    labelBox.style.setProperty("fill", cloud ? "#111a30" : "#f1f5f9", "important");
  });
  target.querySelectorAll(".diagram-figure .mermaid svg marker path").forEach(marker => {
    marker.style.setProperty("fill", lineColor, "important");
    marker.style.setProperty("stroke", lineColor, "important");
  });
}

function diagramThemeVariables(cloud) {
  return cloud ? {
    background: "#0c1324",
    primaryColor: "#15213b",
    primaryTextColor: "#e9eefc",
    primaryBorderColor: "#60a5fa",
    lineColor: "#9fb4d9",
    secondaryColor: "#121d35",
    secondaryTextColor: "#e9eefc",
    tertiaryColor: "#0f1a30",
    textColor: "#e9eefc",
    mainBkg: "#15213b",
    nodeBorder: "#60a5fa",
    clusterBkg: "#111a30",
    clusterBorder: "#7181a6",
    titleColor: "#e9eefc",
    edgeLabelBackground: "#111a30",
    actorBkg: "#15213b",
    actorBorder: "#60a5fa",
    actorTextColor: "#e9eefc",
    actorLineColor: "#9fb4d9",
    signalColor: "#e9eefc",
    signalTextColor: "#e9eefc",
    labelBoxBkgColor: "#111a30",
    labelBoxBorderColor: "#7181a6",
    labelTextColor: "#e9eefc",
    noteBkgColor: "#2a2540",
    noteBorderColor: "#c084fc",
    noteTextColor: "#e9eefc",
    activationBkgColor: "#263b5e",
    activationBorderColor: "#60a5fa",
    sequenceNumberColor: "#e9eefc",
    fontFamily: "Manrope, ui-sans-serif, system-ui, sans-serif",
    fontSize: "17px"
  } : {
    background: "#fbfcfe",
    primaryColor: "#dbeafe",
    primaryTextColor: "#0f172a",
    primaryBorderColor: "#075985",
    lineColor: "#334155",
    secondaryColor: "#eef8f1",
    secondaryTextColor: "#0f172a",
    tertiaryColor: "#fff8e8",
    textColor: "#0f172a",
    mainBkg: "#dbeafe",
    nodeBorder: "#075985",
    clusterBkg: "#f3f6fb",
    clusterBorder: "#b8c7d9",
    titleColor: "#0f172a",
    edgeLabelBackground: "#fbfcfe",
    actorBkg: "#dbeafe",
    actorBorder: "#075985",
    actorTextColor: "#0f172a",
    actorLineColor: "#334155",
    signalColor: "#0f172a",
    signalTextColor: "#0f172a",
    labelBoxBkgColor: "#ffffff",
    labelBoxBorderColor: "#334155",
    labelTextColor: "#0f172a",
    noteBkgColor: "#fff8e8",
    noteBorderColor: "#d99a00",
    noteTextColor: "#0f172a",
    activationBkgColor: "#dbeafe",
    activationBorderColor: "#075985",
    sequenceNumberColor: "#0f172a",
    fontFamily: "Manrope, ui-sans-serif, system-ui, sans-serif",
    fontSize: "17px"
  };
}

document.addEventListener("click", async event => {
  const button = event.target.closest(".copy-code");
  if (!button) return;
  const code = button.closest(".code-card")?.querySelector("code")?.textContent || "";
  try {
    await navigator.clipboard.writeText(code);
    button.textContent = "Copied";
    window.setTimeout(() => { button.textContent = "Copy"; }, 1600);
  } catch {
    button.textContent = "Select code";
  }
});

function initIndex() {
  const grid = document.querySelector("#docs-grid");
  const filters = document.querySelector("#docs-filters");
  const search = document.querySelector("#docs-search");
  const categories = ["All", ...docsSections.map(section => section.title)];
  let active = location.hash ? decodeURIComponent(location.hash.slice(1)) : "All";
  if (!categories.includes(active)) active = "All";
  const shortLabels = {
    en: {
      "applications-kubernetes": "Apps + Kubernetes",
      "ci-cd-automation": "CI/CD automation",
      "cloud-foundations-governance": "Cloud foundations",
      "cloud-resource": "Cloud free resource",
      "data-ai-integration": "Data + AI",
      "enterprise-solutions": "Enterprise solutions",
      "hands-on-lab": "Hands-on labs",
      "how-to-guides": "How-to guides",
      "infra-architecture": "Infra architecture",
      "infrastructure-as-code": "Infrastructure as Code",
      "networking-identity-security": "Network + security",
      "operations-reliability-finops": "Reliability + FinOps",
      "standards-best-practices": "Standards"
    },
    fr: {
      "applications-kubernetes": "Applications et Kubernetes",
      "ci-cd-automation": "CI/CD et automatisation",
      "cloud-foundations-governance": "Fondations infonuagiques",
      "cloud-resource": "Ressources gratuites",
      "data-ai-integration": "Données et IA",
      "enterprise-solutions": "Solutions d’entreprise",
      "hands-on-lab": "Laboratoires pratiques",
      "how-to-guides": "Procédures et guides",
      "infra-architecture": "Architecture d’infrastructure",
      "infrastructure-as-code": "Infrastructure en tant que code",
      "networking-identity-security": "Réseau et sécurité",
      "operations-reliability-finops": "Fiabilité et FinOps",
      "standards-best-practices": "Normes et pratiques"
    },
    zh: {
      "applications-kubernetes": "应用与 Kubernetes",
      "ci-cd-automation": "CI/CD 自动化",
      "cloud-foundations-governance": "云基础与治理",
      "cloud-resource": "云端免费资源",
      "data-ai-integration": "数据与 AI",
      "enterprise-solutions": "企业解决方案",
      "hands-on-lab": "动手实验",
      "how-to-guides": "操作指南",
      "infra-architecture": "基础设施架构",
      "infrastructure-as-code": "基础设施即代码",
      "networking-identity-security": "网络、身份与安全",
      "operations-reliability-finops": "运营、可靠性与 FinOps",
      "standards-best-practices": "标准与最佳实践"
    }
  };
  const shortLabel = section => shortLabels[currentLanguage]?.[section.folder] || articleCategoryLabel(section);
  const localizedCategoryLabel = category => category === "All"
    ? articleTranslation("docs.all")
    : articleCategoryLabel(docsSections.find(section => section.title === category));
  const localizedGuideCount = count => currentLanguage === "zh"
    ? `${count}${articleTranslation("docs.guides")}`
    : `${count} ${articleTranslation("docs.guides")}`;

  const constellation = document.querySelector("#docs-constellation");
  if (constellation) {
    const center = { x: 285, y: 180 };
    const orbitDuration = 600;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const orbits = [
      { rx: 225, ry: 135 },
      { rx: 177, ry: 104 },
      { rx: 125, ry: 72 }
    ];
    const orbitAssignments = [
      { ring: 0, phase: 205 }, { ring: 1, phase: 235 }, { ring: 2, phase: 270 },
      { ring: 0, phase: 315 }, { ring: 1, phase: 8 }, { ring: 0, phase: 48 },
      { ring: 2, phase: 82 }, { ring: 0, phase: 128 }, { ring: 1, phase: 168 },
      { ring: 2, phase: 195 }, { ring: 2, phase: 340 }
    ];
    const categoryColors = new Map([
      ["applications-kubernetes","#00c2d7"],
      ["ci-cd-automation","#2f6dff"],
      ["cloud-foundations-governance","#6d4aff"],
      ["cloud-resource","#ff8c42"],
      ["data-ai-integration","#a83ee6"],
      ["enterprise-solutions","#0f766e"],
      ["how-to-guides","#ed3975"],
      ["hands-on-lab","#73a815"],
      ["infra-architecture","#dc3748"],
      ["infrastructure-as-code","#f47a2c"],
      ["networking-identity-security","#d9a400"],
      ["operations-reliability-finops","#20b86a"],
      ["standards-best-practices","#009b91"]
    ]);
    const sectionCounts = docsSections.map(section => articles.filter(article => article.categoryFolder === section.folder).length);
    const maximumCount = Math.max(...sectionCounts);
    const orbitPath = ({ rx,ry }) => `M ${center.x + rx} ${center.y} A ${rx} ${ry} 0 1 1 ${center.x - rx} ${center.y} A ${rx} ${ry} 0 1 1 ${center.x + rx} ${center.y}`;
    const orbitRings = `<g class="constellation-orbits" aria-hidden="true">${orbits.map(orbit => `<ellipse class="constellation-orbit-ring" cx="${center.x}" cy="${center.y}" rx="${orbit.rx}" ry="${orbit.ry}"></ellipse>`).join("")}</g>`;
    const nodes = docsSections.map((section,index) => {
      const count = sectionCounts[index];
      const size = 10 + (count / maximumCount) * 16;
      const assignment = orbitAssignments[index] || { ring: index % orbits.length, phase: index * 36 };
      const orbit = orbits[assignment.ring];
      const radians = assignment.phase * Math.PI / 180;
      const staticX = center.x + orbit.rx * Math.cos(radians);
      const staticY = center.y + orbit.ry * Math.sin(radians);
      const begin = -((assignment.phase / 360) * orbitDuration);
      const motion = reduceMotion ? "" : `<animateMotion dur="${orbitDuration}s" begin="${begin}s" repeatCount="indefinite" rotate="0" path="${orbitPath(orbit)}"></animateMotion>`;
      const staticTransform = reduceMotion ? ` transform="translate(${staticX.toFixed(2)} ${staticY.toFixed(2)})"` : "";
      const color = categoryColors.get(section.folder) || "#38d3ff";
      return `<g class="planet-system" style="--node-delay:${index * -.38}s;--node-color:${color}"><g class="planet-orbit">${motion}<a class="constellation-node" href="#${encodeURIComponent(section.title)}" data-category="${escapeHtml(section.title)}"${staticTransform} aria-label="${escapeHtml(articleCategoryLabel(section))}: ${escapeHtml(localizedGuideCount(count))}"><circle class="constellation-halo" r="${(size * 2).toFixed(1)}"></circle><circle class="constellation-dot" r="${size.toFixed(1)}"></circle><circle class="constellation-pulse" r="${(size * 1.42).toFixed(1)}"></circle><text class="planet-number" y="4" text-anchor="middle">${count}</text><g class="planet-label"><text y="${(size + 18).toFixed(1)}" text-anchor="middle">${escapeHtml(shortLabel(section))}</text></g></a></g></g>`;
    }).join("");
    constellation.innerHTML = `<div class="constellation-frame"><svg viewBox="0 0 570 370" role="group" aria-labelledby="constellation-title constellation-description"><title id="constellation-title">${escapeHtml(articleTranslation("docs.solarTitle"))}</title><desc id="constellation-description">${docsSections.length} ${escapeHtml(articleTranslation("docs.solarDescription"))} ${articles.length} Markdown ${escapeHtml(articleTranslation("docs.guides"))}. Every category completes one orbit every ten minutes, and each planet radius scales directly with its guide count.</desc><defs><radialGradient id="constellation-core" cx="35%" cy="30%"><stop offset="0" stop-color="#fffef1" stop-opacity=".99"></stop><stop offset=".34" stop-color="#fff4ae" stop-opacity=".98"></stop><stop offset=".76" stop-color="#ffe377" stop-opacity=".94"></stop><stop offset="1" stop-color="#f6c84d" stop-opacity=".88"></stop></radialGradient></defs>${orbitRings}${nodes}<g class="constellation-core" transform="translate(${center.x} ${center.y})"><circle class="core-corona" r="59"></circle><circle class="core-shell" r="50"></circle><circle class="core-glint" cx="-15" cy="-16" r="13"></circle><text class="constellation-total" y="-2" text-anchor="middle">${articles.length}</text><text class="constellation-caption" y="20" text-anchor="middle">${escapeHtml(articleTranslation("docs.canonicalGuides"))}</text></g></svg><div class="constellation-status"><span><i></i>${escapeHtml(articleTranslation("docs.liveLibrary"))}</span><span>${docsSections.length} ${escapeHtml(articleTranslation("docs.centerOrbitingDomains"))}</span><span>${escapeHtml(articleTranslation("docs.orbit"))}</span></div></div>`;
  }

  docsIndexRefresh = () => {
    filters.querySelectorAll("button").forEach(button => {
      button.textContent = localizedCategoryLabel(button.dataset.category);
    });
    if (!constellation) {
      render();
      return;
    }
    constellation.querySelector("#constellation-title")?.replaceChildren(document.createTextNode(articleTranslation("docs.solarTitle")));
    constellation.querySelector("#constellation-description")?.replaceChildren(document.createTextNode(`${docsSections.length} ${articleTranslation("docs.solarDescription")} ${articles.length} Markdown ${articleTranslation("docs.guides")}. Every category completes one orbit every ten minutes, and each planet radius scales directly with its guide count.`));
    constellation.querySelectorAll(".constellation-node").forEach(node => {
      const section = docsSections.find(item => item.title === node.dataset.category);
      if (!section) return;
      const count = section.items.length;
      node.setAttribute("aria-label", `${articleCategoryLabel(section)}: ${localizedGuideCount(count)}`);
      const label = node.querySelector(".planet-label text");
      if (label) label.textContent = shortLabel(section);
    });
    const status = constellation.querySelectorAll(".constellation-status span");
    if (status[0]) status[0].innerHTML = `<i></i>${escapeHtml(articleTranslation("docs.liveLibrary"))}`;
    if (status[1]) status[1].textContent = `${docsSections.length} ${articleTranslation("docs.centerOrbitingDomains")}`;
    if (status[2]) status[2].textContent = articleTranslation("docs.orbit");
    const caption = constellation.querySelector(".constellation-caption");
    if (caption) caption.textContent = articleTranslation("docs.canonicalGuides");
    render();
  };

  filters.innerHTML = categories.map(category => `<button type="button" data-category="${escapeHtml(category)}">${escapeHtml(localizedCategoryLabel(category))}</button>`).join("");
  const render = () => {
    const query = search.value.trim().toLowerCase();
    const visible = articles.filter(article => {
      const view = articleForLanguage(article);
      return (active === "All" || article.category === active) && `${view.title} ${view.summary} ${article.category} ${article.articleTypeLabel || ""} ${(view.tags || []).join(" ")} ${article.documentId || ""} ${article.searchText || ""}`.toLowerCase().includes(query);
    });
    const selectedSection = docsSections.find(section => section.title === active);
    const emptyMessage = selectedSection?.folder === "hands-on-lab" && selectedSection.items.length === 0 && !query
      ? articleTranslation("docs.handsOnEmpty")
      : articleTranslation("docs.empty");
    grid.innerHTML = visible.length ? visible.map(cardMarkup).join("") : `<p class="docs-empty">${emptyMessage}</p>`;
    filters.querySelectorAll("button").forEach(button => button.classList.toggle("active", button.dataset.category === active));
    constellation?.querySelectorAll(".constellation-node").forEach(node => node.classList.toggle("active", node.dataset.category === active));
  };
  filters.addEventListener("click", event => {
    const button = event.target.closest("button");
    if (!button) return;
    active = button.dataset.category;
    history.replaceState(null, "", active === "All" ? location.pathname : `#${encodeURIComponent(active)}`);
    render();
  });
  constellation?.addEventListener("click", event => {
    const node = event.target.closest(".constellation-node");
    if (!node) return;
    event.preventDefault();
    active = node.dataset.category;
    history.replaceState(null, "", `#${encodeURIComponent(active)}`);
    render();
    document.querySelector("#docs-toolbar")?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
  window.addEventListener("hashchange", () => {
    const requestedCategory = location.hash ? decodeURIComponent(location.hash.slice(1)) : "All";
    const nextCategory = categories.includes(requestedCategory) ? requestedCategory : "All";
    if (nextCategory === active) return;
    active = nextCategory;
    render();
    document.querySelector("#docs-toolbar")?.scrollIntoView({ behavior: "smooth", block: "start" });
    document.querySelector("[data-docs-menu]")?.closest("details")?.removeAttribute("open");
  });
  search.addEventListener("input", render);
  render();
}

async function renderArticle(article) {
  const target = document.querySelector("#article-content");
  if (!target || !article) return;
  const view = articleForLanguage(article);
  const sourcePath = view.path || article.path;
  const renderId = ++activeArticleRenderId;
  activeArticleSourcePath = sourcePath;
  target.classList.add("editorial-doc");
  target.classList.toggle("cloud-resource-doc", article.categoryFolder === "cloud-resource");
  setupReaderShell(article.slug);
  renderBreadcrumb([articleCategoryLabel(article), view.title]);
  articleDownloadButtons().forEach(button => button.disabled = true);
  try {
    const response = await fetch(sourcePath, { cache: "no-cache" });
    if (!response.ok) throw new Error("Article unavailable");
    const parsed = parseDocument(await response.text());
    if (renderId !== activeArticleRenderId) return;
    const firstHeadingEnd = parsed.html.indexOf("</h1>");
    const body = firstHeadingEnd >= 0 ? parsed.html.slice(firstHeadingEnd + 5) : parsed.html;
    target.innerHTML = `<div class="article-header-row"><p class="article-kicker">${escapeHtml(articleCategoryLabel(article))} · ${escapeHtml(articleTypeLabel(article.articleTypeLabel))}</p><div class="article-download-actions">${articleMarkdownButtonMarkup("top")}${articlePdfButtonMarkup("top")}</div></div><h1>${escapeHtml(view.title)}</h1><p class="article-summary">${escapeHtml(view.summary)}</p><div class="article-tags">${(view.tags || []).map(tag => `<span>${escapeHtml(tag)}</span>`).join("")}</div>${body}<div class="article-download-actions article-download-actions-bottom">${articleMarkdownButtonMarkup("bottom")}${articlePdfButtonMarkup("bottom")}</div>`;
    resolveArticleImageSources(target, sourcePath);
    rewriteInternalArticleLinks(target, article, sourcePath);
    if (article.categoryFolder === "cloud-resource") decorateCloudResourceDocument(target);
    decorateExternalLinks(target, article);
    if (window.hljs) {
      target.querySelectorAll(".code-card pre code").forEach(block => {
        try { window.hljs.highlightElement(block); } catch { block.classList.add("no-highlight"); }
      });
    }
    if (target.querySelector(".mermaid")) {
      if (window.mermaid) {
        try {
          const editorialDiagram = target.classList.contains("editorial-doc") && document.documentElement.dataset.theme === "cloud";
          window.mermaid.initialize({ startOnLoad: false, securityLevel: "strict", theme: "base", themeVariables: diagramThemeVariables(editorialDiagram) });
          await window.mermaid.run({ nodes: target.querySelectorAll(".mermaid"), suppressErrors: true });
          if (renderId !== activeArticleRenderId) return;
          applyDiagramPalette(target);
        } catch {
          target.querySelectorAll(".mermaid:not([data-processed])").forEach(diagram => { diagram.outerHTML = `<pre><code>${escapeHtml(diagram.textContent)}</code></pre>`; });
        }
      } else {
        target.querySelectorAll(".mermaid").forEach(diagram => { diagram.outerHTML = `<pre><code>${escapeHtml(diagram.textContent)}</code></pre>`; });
      }
    }
    if (renderId !== activeArticleRenderId) return;
    guardHeaderLayout(target);
    activeArticleHeadings = parsed.headings;
    renderToc(activeArticleHeadings, article, target);
    document.title = `${view.title} — Andy Xuan`;
    renderRelatedArticles(article);
    articleDownloadButtons().forEach(button => button.disabled = false);
  } catch (error) {
    if (renderId !== activeArticleRenderId) return;
    console.error("Article loading failed", error);
    target.innerHTML = "<h1>Article unavailable</h1><p>The Markdown file could not be loaded. Please return to the engineering library and choose an available topic.</p>";
  }
}

async function initArticle() {
  const requestedSlug = new URLSearchParams(location.search).get("article");
  const article = articles.find(item => item.slug === requestedSlug || item.legacySlugs?.includes(requestedSlug));
  const target = document.querySelector("#article-content");
  if (!article) {
    target.innerHTML = "<h1>Article not found</h1><p>Return to the engineering library and choose an available topic.</p>";
    return;
  }
  if (requestedSlug !== article.slug) history.replaceState(null, "", articleHref(article.slug));
  activeArticle = article;
  await renderArticle(article);
}

async function bootstrapDocs() {
  try {
    const response = await fetch("docs-index.json", { cache: "no-cache" });
    if (!response.ok) throw new Error("Documentation index unavailable");
    const index = await response.json();
    articles = index.articles;
    docsSections = index.categories
      .map(category => ({
        folder: category.folder,
        title: category.title,
        items: articles.filter(article => article.categoryFolder === category.folder).map(article => article.slug)
      }));
    if (document.body.dataset.docsPage === "index") initIndex();
    if (document.body.dataset.docsPage === "article") initArticle();
  } catch {
    const target = document.querySelector("#docs-grid, #article-content");
    if (target) target.innerHTML = '<p class="docs-empty">The documentation index could not be loaded.</p>';
  }
}

bootstrapDocs();
