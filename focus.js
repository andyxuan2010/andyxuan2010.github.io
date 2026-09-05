const copy = {
  en: {
    "nav.home":"Home","nav.solutions":"Focus","nav.projects":"Projects","nav.focus":"Focus","nav.docs":"Library","nav.repos":"Repos","nav.contact":"Contact",
    "focus.eyebrow":"What I work on","focus.title":"Areas of focus","focus.copy":"Engineering practices applied across Azure, AWS, Kubernetes, and enterprise platforms—from governed landing zones and infrastructure as code to modern data platforms and AI workloads.",
    "architecture.title":"Cloud Architecture","architecture.1":"Azure & AWS landing zones","architecture.2":"Governance and policy","architecture.3":"Networking and identity","architecture.4":"Security and resilience","architecture.5":"Enterprise platform design","architecture.6":"Hybrid and multi-cloud strategy",
    "devops.title":"DevOps & GitOps","devops.1":"CI/CD pipelines","devops.4":"Argo CD and Kubernetes","devops.5":"Release automation","devops.6":"AWS CodePipeline and CodeBuild",
    "iac.title":"Infra as Code","iac.3":"Reusable cloud modules","iac.4":"policy-as-code","iac.5":"Automated validation","iac.6":"AWS CloudFormation and CDK",
    "data-ai.title":"Data & AI","data-ai.1":"Data platforms and pipelines","data-ai.2":"Data lakes and warehousing","data-ai.3":"Analytics and business intelligence","data-ai.4":"Machine learning and MLOps","data-ai.5":"Generative AI and RAG","data-ai.6":"Data governance and security",
    "callout.label":"From architecture to production","callout.title":"Patterns built to be secure, repeatable, and operable.","callout.copy":"Explore the public repositories for working implementations, reference architectures, reusable modules, and delivery automation.","callout.projects":"Explore projects","callout.contact":"Get in touch",
    "footer.focus":"Cloud · Infrastructure · AI · Automation","footer.home":"Back home ↑","theme.cloud":"Cloud","theme.classic":"Classic"
  },
  fr: {
    "nav.home":"Accueil","nav.solutions":"Expertise","nav.projects":"Projets","nav.focus":"Expertise","nav.docs":"Bibliothèque","nav.repos":"Dépôts","nav.contact":"Contact",
    "focus.eyebrow":"Mes domaines de travail","focus.title":"Domaines d’expertise","focus.copy":"Des pratiques d’ingénierie appliquées à Azure, AWS, Kubernetes et aux plateformes d’entreprise—des zones d’atterrissage gouvernées et de l’infrastructure en tant que code jusqu’aux plateformes de données modernes et aux charges de travail IA.",
    "architecture.title":"Architecture infonuagique","architecture.1":"Zones d’atterrissage Azure et AWS","architecture.2":"Gouvernance et politiques","architecture.3":"Réseau et identité","architecture.4":"Sécurité et résilience","architecture.5":"Conception de plateformes d’entreprise","architecture.6":"Stratégie hybride et multinuage",
    "devops.title":"DevOps et GitOps","devops.1":"Pipelines CI/CD","devops.4":"Argo CD et Kubernetes","devops.5":"Automatisation des livraisons","devops.6":"AWS CodePipeline et CodeBuild",
    "iac.title":"Infrastructure en tant que code","iac.3":"Modules infonuagiques réutilisables","iac.4":"Politiques en tant que code","iac.5":"Validation automatisée","iac.6":"AWS CloudFormation et CDK",
    "data-ai.title":"Données et IA","data-ai.1":"Plateformes et pipelines de données","data-ai.2":"Lacs de données et entrepôts de données","data-ai.3":"Analytique et intelligence d’affaires","data-ai.4":"Apprentissage automatique et MLOps","data-ai.5":"IA générative et RAG","data-ai.6":"Gouvernance et sécurité des données",
    "callout.label":"De l’architecture à la production","callout.title":"Des modèles sécurisés, reproductibles et exploitables.","callout.copy":"Explorez les dépôts publics pour découvrir des implémentations, architectures de référence, modules réutilisables et automatisations de livraison.","callout.projects":"Explorer les projets","callout.contact":"Prendre contact",
    "footer.focus":"Infonuagique · Infrastructure · IA · Automatisation","footer.home":"Retour à l’accueil ↑","theme.cloud":"Nuage","theme.classic":"Classique"
  },
  zh: {
    "nav.home":"首页","nav.solutions":"专长","nav.projects":"项目","nav.focus":"专长","nav.docs":"知识库","nav.repos":"仓库","nav.contact":"联系",
    "focus.eyebrow":"我的工作领域","focus.title":"专业领域","focus.copy":"将工程实践应用于 Azure、AWS、Kubernetes 和企业平台，覆盖受治理的着陆区、基础设施即代码、现代数据平台和 AI 工作负载。",
    "architecture.title":"云架构","architecture.1":"Azure 与 AWS 着陆区","architecture.2":"治理与策略","architecture.3":"网络与身份","architecture.4":"安全与韧性","architecture.5":"企业平台设计","architecture.6":"混合云与多云战略",
    "devops.title":"DevOps 与 GitOps","devops.1":"CI/CD 流水线","devops.4":"Argo CD 与 Kubernetes","devops.5":"发布自动化","devops.6":"AWS CodePipeline 与 CodeBuild",
    "iac.title":"基础设施即代码","iac.3":"可复用云模块","iac.4":"策略即代码","iac.5":"自动化验证","iac.6":"AWS CloudFormation 与 CDK",
    "data-ai.title":"数据与 AI","data-ai.1":"数据平台与流水线","data-ai.2":"数据湖与数据仓库","data-ai.3":"分析与商业智能","data-ai.4":"机器学习与 MLOps","data-ai.5":"生成式 AI 与 RAG","data-ai.6":"数据治理与安全",
    "callout.label":"从架构到生产","callout.title":"构建安全、可复用且易于运营的模式。","callout.copy":"探索公共仓库，获取可运行的实现、参考架构、可复用模块和交付自动化方案。","callout.projects":"探索项目","callout.contact":"联系我",
    "footer.focus":"云平台 · 基础设施 · AI · 自动化","footer.home":"返回首页 ↑","theme.cloud":"云端","theme.classic":"经典"
  }
};
const buttons=[...document.querySelectorAll("[data-language]")],theme=document.querySelector("#theme-switch");
const storedLanguage=localStorage.getItem("portfolio-language");
let lang=["en","fr","zh"].includes(storedLanguage)?storedLanguage:"en";
const t=k=>copy[lang][k]||copy.en[k]||k;
function localize(){document.documentElement.lang=lang;document.querySelectorAll("[data-i18n]").forEach(e=>e.textContent=t(e.dataset.i18n));buttons.forEach(b=>{const a=b.dataset.language===lang;b.classList.toggle("active",a);b.setAttribute("aria-pressed",String(a));});}
function setTheme(){const cloud=document.documentElement.dataset.theme==="cloud";theme.setAttribute("aria-pressed",String(cloud));theme.querySelector(".theme-switch-icon").textContent=cloud?"☼":"◐";theme.querySelector(".theme-switch-label").textContent=cloud?t("theme.classic"):t("theme.cloud");}
if(localStorage.getItem("portfolio-theme")==="classic")delete document.documentElement.dataset.theme;
theme.addEventListener("click",()=>{const cloud=document.documentElement.dataset.theme==="cloud";if(cloud){delete document.documentElement.dataset.theme;localStorage.setItem("portfolio-theme","classic");}else{document.documentElement.dataset.theme="cloud";localStorage.setItem("portfolio-theme","cloud");}setTheme();});
buttons.forEach(b=>b.addEventListener("click",()=>{lang=b.dataset.language;localStorage.setItem("portfolio-language",lang);localize();setTheme();}));
localize();setTheme();
document.querySelectorAll(".nav-menu").forEach(menu=>{menu.addEventListener("mouseenter",()=>menu.setAttribute("open",""));menu.addEventListener("mouseleave",()=>{menu.removeAttribute("open");if(menu.contains(document.activeElement)&&matchMedia("(pointer: fine)").matches)document.activeElement.blur();});});
