import { aiLeaves } from "./ai-leaves";
import { aiPageContent } from "./ai-page";
import { categoryOverviews } from "./category-overviews";
import { designLeaves } from "./design-leaves";
import { developmentLeaves } from "./development-leaves";
import { digitalMarketingLeaves } from "./digital-marketing-leaves";
import { shopifyLeaves } from "./shopify-leaves";
import { shopifyPageContent } from "./shopify-page";

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServicePhase {
  index: string;
  name: string;
  duration: string;
  description: string;
}

export interface ServiceTrustStat {
  value: string;
  label: string;
}

export interface ServiceTrustLogo {
  name: string;
  /** Path under /public, e.g. /brands/northway.svg */
  src: string;
}

/** Post-hero logo strip — clients and platforms Buildaze works with. */
export interface ServiceLogoStripItem {
  name: string;
  /**
   * Authentic logo asset under /public (official / Simple Icons path).
   * Prefer real brand files — do not invent marks in code.
   */
  src?: string;
  /**
   * `icon` = brand mark + name label.
   * `wordmark` = full logo artwork (no extra text).
   */
  mark?: "icon" | "wordmark";
  /** Optional link (e.g. case study or partner page). */
  href?: string;
}

export interface ServiceLogoStripContent {
  label: string;
  items: ServiceLogoStripItem[];
}

export interface ServiceSelectedCase {
  id: string;
  index: string;
  category: string;
  title: string;
  description: string;
  /** One-line relevance, e.g. "This project involved performance optimization." */
  relevance?: string;
  /** Optional large metric callout, e.g. performance score. */
  outcome?: { value: string; label: string };
  tags: string[];
  cta: string;
  href: string;
  /** Abstract visual theme for the case canvas (fallback when no image). */
  visual: "performance" | "build" | "redesign";
  /**
   * Optional project cover image under /public.
   * Example: `/work/shopify-performance/cover.webp`
   */
  image?: string;
  /** Accessible alt text for the cover image. */
  imageAlt?: string;
}

export interface ServiceSelectedWork {
  eyebrow: string;
  headline: string;
  intro: string[];
  cases: ServiceSelectedCase[];
}

export interface ServiceProblem {
  index: string;
  /** Stable id for analytics and enquiry deep links. */
  id?: string;
  name: string;
  title: string;
  description: string;
  /** Buyer-facing service group label(s). */
  serviceLabel?: string;
  /** Deep link into the Shopify enquiry with problem context. */
  enquiryHref?: string;
}

export interface ServiceProblemsContent {
  eyebrow: string;
  headline: string;
  intro: string[];
  problems: ServiceProblem[];
  closingTitle: string;
  closingBody: string;
  ctaLabel: string;
  ctaHref: string;
}

export interface ServiceCapability {
  id: string;
  index: string;
  name: string;
  title: string;
  description: string;
  /** Who this service group is for. */
  bestFor?: string;
  /** Important scope boundaries (honest limitations). */
  boundaries?: string;
  items: string[];
  cta: string;
  href: string;
  /** Optional specialist-page link shown beside the primary CTA. */
  detailHref?: string;
  detailLabel?: string;
}

export interface ServiceCapabilitiesContent {
  eyebrow: string;
  headline: string;
  intro: string[];
  capabilities: ServiceCapability[];
  closingTitle: string;
  closingBody: string;
  ctaLabel: string;
  ctaHref: string;
}

export interface ServiceDeliveryStep {
  id: string;
  index: string;
  /** Short label on the journey rail (e.g. DISCOVER). */
  shortName: string;
  /** Full step name (e.g. Discovery & Audit). */
  name: string;
  title: string;
  description: string;
  /** Section heading above the item list. */
  itemsLabel: string;
  items: string[];
  outcome: string;
}

export interface ServiceDeliveryProcess {
  eyebrow: string;
  headline: string;
  intro: string[];
  steps: ServiceDeliveryStep[];
  closingTitle: string;
  closingBody: string;
  ctaLabel: string;
  ctaHref: string;
}

export interface ServiceDifferentiator {
  id: string;
  index: string;
  name: string;
  /** Short line shown under the name in the left list. */
  summary: string;
  title: string;
  description: string;
  /** Large manifesto statement shown in the right panel. */
  panelStatement: string;
  /** Optional supporting line under the panel statement. */
  panelNote?: string;
}

export interface ServiceWhyContent {
  eyebrow: string;
  headline: string;
  intro: string[];
  differentiators: ServiceDifferentiator[];
  closingTitle: string;
  closingBody: string;
  /** Pillar words shown under the closing statement. */
  pillars: string[];
  closingNote: string;
  ctaLabel: string;
  ctaHref: string;
}

export type ServiceReviewSource = "upwork" | "linkedin" | "direct";

export interface ServiceClientReview {
  id: string;
  quote: string;
  name: string;
  role: string;
  brand: string;
  project: string;
  source: ServiceReviewSource;
  /** Optional path to a real review screenshot under /public. */
  imageSrc?: string;
  imageAlt?: string;
  href?: string;
}

export interface ServiceClientProof {
  eyebrow: string;
  headline: string;
  intro: string[];
  featured: ServiceClientReview;
  reviews: ServiceClientReview[];
  categoriesLabel: string;
  categories: string[];
  closingTitle: string;
  closingBody: string;
  ctaLabel: string;
  ctaHref: string;
}

export interface ServiceEcosystemGroup {
  id: string;
  index: string;
  name: string;
  /** Short label for hub nodes (e.g. Marketing). */
  shortName: string;
  items: string[];
}

export interface ServiceEcosystem {
  eyebrow: string;
  headline: string;
  intro: string[];
  groups: ServiceEcosystemGroup[];
  closingTitle: string;
  closingBody: string;
  ctaLabel: string;
  ctaHref: string;
}

export interface ServiceAudienceStage {
  id: string;
  index: string;
  /** Short maturity label on the journey rail (e.g. Launch). */
  stage: string;
  name: string;
  title: string;
  description: string;
  itemsLabel: string;
  items: string[];
  goalLabel: string;
  goal: string;
}

export interface ServiceAudience {
  eyebrow: string;
  headline: string;
  intro: string[];
  stages: ServiceAudienceStage[];
  closingTitle: string;
  closingBody: string;
  ctaLabel: string;
  ctaHref: string;
}

export interface ServiceTrustContent {
  eyebrow: string;
  headline: string;
  body: string;
  stats: ServiceTrustStat[];
  closing: string;
  /** Marquee statements under “Trusted by” when no logos are provided. */
  trustedBy: string[];
  /** Optional brand logos for the Trusted by marquee. */
  logos?: ServiceTrustLogo[];
}

export interface ServicePageContent {
  /** SEO / social */
  metaTitle: string;
  metaDescription: string;
  /** Optional Open Graph / Twitter image path under /public. */
  ogImage?: string;
  /** Optional hero eyebrow above the section label (e.g. partner badge). */
  eyebrow?: string;
  /**
   * Optional hero entity label (e.g. "Shopify Development & Growth Agency").
   * Shown as visible supporting label — not a second H1.
   */
  entityLabel?: string;
  /**
   * Concise, visible entity-definition paragraph for search / AI clarity.
   * Must be server-rendered and human-readable — never hidden SEO copy.
   */
  entityDefinition?: string;
  /** Hero */
  headline: string;
  subheadline: string;
  /** Optional client / collaborator logos shown directly after the hero. */
  logoStrip?: ServiceLogoStripContent;
  /** Optional trust / proof section rendered after the hero. */
  trust?: ServiceTrustContent;
  /** Optional selected work section (e.g. Shopify case studies). */
  selectedWork?: ServiceSelectedWork;
  /** Optional problems / why brands hire us section. */
  problems?: ServiceProblemsContent;
  /** Optional interactive capabilities directory. */
  capabilities?: ServiceCapabilitiesContent;
  /** Optional interactive delivery process / how we work journey. */
  deliveryProcess?: ServiceDeliveryProcess;
  /** Optional why Buildaze / differentiators manifesto. */
  why?: ServiceWhyContent;
  /** Optional client proof / testimonials wall. */
  clientProof?: ServiceClientProof;
  /** Optional Shopify ecosystem / integrations network. */
  ecosystem?: ServiceEcosystem;
  /** Optional who we work with / growth maturity journey. */
  audience?: ServiceAudience;
  overviewTitle: string;
  overview: string[];
  /** What we build */
  solutionsTitle: string;
  solutions: string[];
  deliverables: string[];
  included: string[];
  stackTags: string[];
  ctaLabel: string;
  /** Optional secondary hero CTA label. Defaults to "See related work". */
  secondaryCtaLabel?: string;
  /** Process on this page */
  process: ServicePhase[];
  /** Related case study ids from work.ts */
  relatedWorkIds: string[];
  faqs: ServiceFaq[];
  /** Optional FAQ section framing (Shopify-style sales FAQ). */
  faqEyebrow?: string;
  faqHeadline?: string;
  faqIntro?: string[];
  faqClosingTitle?: string;
  faqClosingBody?: string;
  faqCtaLabel?: string;
  faqCtaHref?: string;
}

export type ServiceRole = "category" | "detail";

export interface Service {
  id: string;
  slug: string;
  /**
   * Optional canonical public path when the page is not under `/services/[slug]`.
   * Example: `/shopify-growth-agency`
   */
  path?: string;
  /** Legacy paths that should permanently redirect to `path` (or `/services/${slug}`). */
  redirectsFrom?: string[];
  /**
   * Primary nav/hub/homepage categories vs preserved detail pages.
   * Defaults to category when omitted on new records.
   */
  role?: ServiceRole;
  index: string;
  name: string;
  shortName: string;
  oneLiner: string;
  description: string;
  capabilities: string[];
  /** Nodes of the animated flow diagram shown in the service environment. */
  flow: string[];
  /** Optional label above the flow diagram. Defaults to "How it flows". */
  flowLabel?: string;
  cta: string;
  /** Optional related service ids for the related-services section. */
  relatedServiceIds?: string[];
  page: ServicePageContent;
}

/** Preserved specialist + detail records (AI, Shopify, Web, SaaS, Ecommerce). */
const legacyServices: Service[] = [
  {
    id: "ai",
    slug: "ai-development",
    index: "01",
    name: "AI Development",
    shortName: "AI",
    oneLiner: "AI agents, RAG systems and LLM products that ship to production.",
    description:
      "Custom LLM integrations, RAG systems, AI agents and fine-tuned models built on OpenAI, Anthropic Claude and open-source stacks — with citations, freshness controls and evals, not demos that fall over.",
    capabilities: [
      "OpenAI & Claude integration",
      "RAG & vector databases",
      "LangChain pipelines & agents",
      "Fine-tuning & evals",
    ],
    flow: ["LLM", "Retrieval", "Business data", "Response"],
    cta: "Explore AI Development",
    page: {
      metaTitle: "AI Development Services | Custom LLM, RAG & AI Agents",
      metaDescription:
        "Buildaze designs and ships production AI systems — LLM workflows, RAG applications, agents and copilots — with evaluation, security and monitoring from day one.",
      headline: "AI that ships. Not demos that fall over.",
      subheadline:
        "Custom LLM integrations, RAG systems, AI agents and document-intelligence pipelines — scoped conservatively, evaluated honestly, owned by you.",
      overviewTitle: "What AI development includes",
      overview: [
        "Most AI projects fail not because the model was wrong, but because the surrounding product system wasn't built for real data, edge cases, permissions, latency and user trust.",
        "We build AI systems engineered for production: custom LLM integrations, retrieval-augmented generation, agents, document workflows and internal copilots that connect cleanly to your existing tools.",
        "We define evaluation criteria before launch. The goal is not a demo that sounds impressive once — it is a system your team can trust, monitor, improve and own.",
      ],
      solutionsTitle: "AI solutions we build",
      solutions: [
        "LLM integrations into existing products",
        "RAG pipelines over private company knowledge",
        "AI agents with tool use and audit trails",
        "Custom AI voice agents for callers and handoff",
        "Internal copilots for support, ops and sales",
        "Document intelligence & summarization",
        "Evaluation frameworks with acceptance thresholds",
      ],
      deliverables: [
        "Custom LLM integration with your product or data",
        "RAG pipeline with accurate retrieval over your corpus",
        "AI agent workflows with tool use and audit trails",
        "Evaluation framework with acceptance thresholds before launch",
      ],
      included: [
        "LLM integration (OpenAI / Claude / open-source)",
        "RAG pipeline (LangChain + Pinecone / pgvector)",
        "Prompt engineering & context management",
        "Eval dashboard & cost monitoring",
      ],
      stackTags: [
        "OpenAI",
        "Anthropic Claude",
        "LangChain",
        "Pinecone",
        "Supabase Vector",
        "RAG",
        "AI Agents",
      ],
      ctaLabel: "Request an AI roadmap",
      process: [
        {
          index: "01",
          name: "Discover & Scope",
          duration: "3–5 days",
          description:
            "Review your data, define what “correct” means, set accuracy targets. Output: evaluation rubric, risk map and scoped build plan.",
        },
        {
          index: "02",
          name: "Build & Evaluate",
          duration: "3–8 weeks",
          description:
            "Sprints with weekly demos. Every increment is evaluated against agreed thresholds before we move forward.",
        },
        {
          index: "03",
          name: "Validate & Hand Off",
          duration: "1 week",
          description:
            "Production deployment with cost monitoring, eval dashboards and full handover of prompts, pipelines and infrastructure.",
        },
      ],
      relatedWorkIds: [
        "support-copilot",
        "underwriting-copilot",
        "clinical-summarizer",
        "catalog-intelligence",
      ],
      faqs: [
        {
          question: "What are AI development services?",
          answer:
            "Planning, architecture, development, integration, deployment and monitoring of AI systems — LLM workflows, RAG applications, agents, copilots and document-processing pipelines.",
        },
        {
          question: "Do you build custom AI voice agents?",
          answer:
            "Yes. Voice agents for routine inquiries, lead qualification, appointment requests and human handoff are a focused Buildaze product. See the Voice Agent page for a browser demo and how a custom deployment works: https://www.buildaze.com/voice-agent",
        },
        {
          question: "When do you need RAG instead of fine-tuning?",
          answer:
            "RAG is usually the better fit when answers must come from private, changing or permissioned company knowledge. Fine-tuning fits when you need to change model behavior, tone or a narrow task pattern.",
        },
        {
          question: "How do you reduce hallucinations in production?",
          answer:
            "Grounded retrieval, constrained prompts, answer validation, human-review paths for sensitive actions, evaluation datasets and production monitoring.",
        },
        {
          question: "Can you add AI into an existing SaaS product?",
          answer:
            "Yes. We add AI search, copilots, document workflows, support automation, recommendations or agentic workflows inside an existing product without forcing a full rebuild.",
        },
      ],
    },
  },
  {
    id: "saas",
    slug: "saas-development",
    index: "02",
    name: "SaaS Development",
    shortName: "SaaS",
    oneLiner: "Production-grade SaaS with billing, auth and multi-tenant architecture.",
    description:
      "End-to-end SaaS products with multi-tenant architecture, Stripe billing, role-based access control and analytics dashboards. Built to onboard real users from day one.",
    capabilities: [
      "Multi-tenant architecture",
      "Stripe billing & subscriptions",
      "Role-based access control",
      "Analytics dashboards",
    ],
    flow: ["User", "Product", "Billing", "Analytics", "Infrastructure"],
    cta: "Explore SaaS Development",
    relatedServiceIds: ["development", "web", "ai", "ecommerce"],
    page: {
      metaTitle: "SaaS Development Services | Buildaze",
      metaDescription:
        "Buildaze designs and ships multi-tenant SaaS products with Stripe billing, RBAC, analytics and operational tooling — fixed scope, weekly demos, full code ownership.",
      headline: "SaaS Development Services for Scalable Products",
      subheadline:
        "Multi-tenancy, billing, permissions and dashboards designed early — so the product can grow without a painful rebuild.",
      overviewTitle: "What SaaS development covers",
      overview: [
        "Building a SaaS product is not the same as building a website. You need tenancy that isolates customer data correctly, billing that handles upgrades and failed payments, permissions that scale past the first admin, and dashboards that show what the business is doing.",
        "We make those architecture choices early. Data models for multi-tenancy from day one, Stripe webhooks so billing state stays aligned with your database, and admin tools your team can use after launch.",
        "You get weekly demos, written scope and full code ownership — a product ready for real users, not a prototype that breaks when two customers edit the same record.",
      ],
      solutionsTitle: "The architecture decisions that determine scale",
      solutions: [
        "Multi-tenant data architecture",
        "User & organization management",
        "Subscription billing with webhooks",
        "Role-based access control",
        "Admin dashboards & usage metering",
        "AI-ready product surfaces when needed",
      ],
      deliverables: [
        "Multi-tenant data architecture with proper tenant isolation",
        "Stripe billing: subscriptions, upgrades, failed payments, webhooks",
        "RBAC with organisation-level permissions",
        "Admin dashboard with user management and usage analytics",
      ],
      included: [
        "Multi-tenant backend (Node.js / Supabase / PostgreSQL)",
        "Auth system (JWT / OAuth / SSO-ready)",
        "Stripe billing integration & webhook handlers",
        "Frontend dashboard (Next.js / React)",
      ],
      stackTags: [
        "Next.js",
        "PostgreSQL",
        "Supabase",
        "Stripe",
        "RBAC",
        "Multi-tenant",
        "SSO / SAML",
      ],
      ctaLabel: "Request a SaaS roadmap",
      process: [
        {
          index: "01",
          name: "Discover & Scope",
          duration: "1 week",
          description:
            "Define tenancy model, auth flows, billing tiers and data schema. Output: written spec with ERD, API contracts and cost model.",
        },
        {
          index: "02",
          name: "Sprint Build",
          duration: "6–12 weeks",
          description:
            "Weekly demos of working features. Auth first, then billing, then core product — each layer validated before the next.",
        },
        {
          index: "03",
          name: "Validate & Hand Off",
          duration: "3–5 days",
          description:
            "Production deployment, smoke testing, Stripe live-mode activation and full codebase handover with documentation.",
        },
      ],
      relatedWorkIds: ["support-copilot", "underwriting-copilot"],
      faqs: [
        {
          question: "What's included in SaaS development services?",
          answer:
            "Product planning, architecture, multi-tenant data modeling, authentication, billing, permissions, dashboards, deployment and operational tooling.",
        },
        {
          question: "How long does it take to build a SaaS MVP?",
          answer:
            "A focused SaaS MVP often takes 6–12 weeks after discovery, depending on integrations, billing complexity, tenancy model, dashboard scope and security requirements.",
        },
        {
          question: "What is multi-tenant SaaS architecture?",
          answer:
            "One product serving multiple customer organizations while keeping each tenant's data, permissions, billing state and admin controls properly isolated.",
        },
        {
          question: "Do we own the code and infrastructure after launch?",
          answer:
            "Yes. You get repos, deployment access, documentation, credentials and the production codebase — your team owns the product after launch.",
        },
      ],
    },
  },
  {
    id: "web",
    slug: "web-development",
    index: "03",
    name: "Web Development",
    shortName: "Web",
    oneLiner: "Fast, accessible, SEO-ready websites and custom web applications.",
    description:
      "Premium custom websites and web apps on Next.js, React, Node.js and Laravel. Custom builds only — no templates, no page builders, no lock-in.",
    capabilities: [
      "Next.js & React",
      "Node.js & Laravel",
      "Custom web applications",
      "Technical SEO & performance",
    ],
    flow: ["Brand", "UX", "Frontend", "Backend", "Deployment"],
    cta: "Explore Web Development",
    relatedServiceIds: ["development", "saas", "ecommerce", "shopify"],
    page: {
      metaTitle: "Custom Web Development Services | Buildaze",
      metaDescription:
        "Buildaze builds custom websites and web applications that are fast, accessible, SEO-ready and fully owned by you — Next.js, React, Node.js and Laravel.",
      headline: "Custom Website & Web Application Development",
      subheadline:
        "Custom marketing sites and web applications with front-end performance, semantic HTML, accessible components and content architecture search engines can understand.",
      overviewTitle: "What web development includes",
      overview: [
        "A website that loads slowly, breaks on mobile or ranks nowhere is an expense, not an asset. We build web applications and marketing sites with performance, semantic markup, responsive UX and clean deployment workflows.",
        "Whether you need a marketing site that converts, a web app that scales, or a legacy codebase modernized onto a current stack — we scope it clearly, build it transparently and hand it over with documentation your team can use.",
        "Custom builds only. No templates, no page builders, no lock-in.",
      ],
      solutionsTitle: "Websites and web apps we build",
      solutions: [
        "Marketing websites that convert",
        "Custom web applications & portals",
        "Legacy rebuilds onto modern stacks",
        "API-integrated platforms",
        "Dashboards and product interfaces",
        "SEO-ready content architecture",
      ],
      deliverables: [
        "Sub-second load times and passing Core Web Vitals",
        "Fully responsive layouts tested across real devices",
        "SEO-ready structure — semantic HTML, meta, sitemaps, schema",
        "Accessible components meeting WCAG 2.1 AA baseline",
      ],
      included: [
        "Frontend (Next.js / React / TypeScript)",
        "Backend API (Node.js / Laravel)",
        "Database design (PostgreSQL / Supabase)",
        "Deployment & CI/CD (Vercel / AWS)",
      ],
      stackTags: [
        "Next.js",
        "React",
        "TypeScript",
        "Node.js",
        "Laravel",
        "PostgreSQL",
        "Tailwind CSS",
      ],
      ctaLabel: "Request a web roadmap",
      process: [
        {
          index: "01",
          name: "Discover & Scope",
          duration: "3–5 days",
          description:
            "Map requirements, agree on pages and features, define success metrics. Output: written spec, sitemap and tech decisions.",
        },
        {
          index: "02",
          name: "Build & Demo",
          duration: "2–6 weeks",
          description:
            "Fixed sprints with a working demo every week. You review and approve each increment before we move forward.",
        },
        {
          index: "03",
          name: "Validate & Hand Off",
          duration: "3–5 days",
          description:
            "Deployment, DNS, performance audit and full code handover. You own everything — repos, credentials, pipelines.",
        },
      ],
      relatedWorkIds: ["support-copilot", "catalog-intelligence"],
      faqs: [
        {
          question: "What's included in web development services?",
          answer:
            "Planning, frontend and backend development, responsive UI, performance engineering, accessibility, SEO-ready markup, deployment, integrations and documentation.",
        },
        {
          question: "Can you rebuild an existing site without hurting SEO?",
          answer:
            "Yes. A safe rebuild maps existing URLs, preserves important metadata, keeps or improves internal links, redirects changed paths and validates performance before launch.",
        },
        {
          question: "How do you improve Core Web Vitals?",
          answer:
            "We plan performance before implementation: lean layouts, optimized images, minimal blocking scripts, semantic markup, caching, careful font loading and staging checks before launch.",
        },
        {
          question: "Do you build websites, web apps, or both?",
          answer:
            "Both. Marketing websites, dashboards, SaaS interfaces, portals, API-integrated platforms and custom web applications — with full code ownership.",
        },
      ],
    },
  },
  {
    id: "ecommerce",
    slug: "ecommerce-development",
    index: "04",
    name: "Ecommerce Development",
    shortName: "Ecommerce",
    oneLiner: "Shopify, headless and conversion-focused commerce experiences.",
    description:
      "Shopify, WooCommerce and headless commerce builds with AI-driven product recommendations and conversion-optimized UX — measured in revenue, not page views.",
    capabilities: [
      "Shopify & WooCommerce",
      "Headless commerce (Medusa)",
      "AI personalization",
      "Conversion optimization",
    ],
    flow: ["Discovery", "PDP", "Checkout", "Retention"],
    cta: "Explore Ecommerce Development",
    relatedServiceIds: ["development", "shopify", "web", "saas"],
    page: {
      metaTitle: "Ecommerce Development Services | Buildaze",
      metaDescription:
        "Buildaze builds, redesigns and migrates Shopify, WooCommerce and headless commerce stores — performance, conversion and SEO preservation included.",
      headline: "Ecommerce Development for Shopify, WooCommerce & Headless Stores",
      subheadline:
        "Shopify, WooCommerce and headless commerce builds with conversion-focused UX, clean migrations and performance tested before launch.",
      overviewTitle: "What ecommerce development includes",
      overview: [
        "We build, redesign, optimize and migrate ecommerce stores with a practical focus on technical performance, product-page UX, checkout clarity, analytics and SEO preservation.",
        "The strongest ecommerce builds don't rely on a theme alone — they connect storefront speed, merchandising, platform constraints, integrations and migration planning into one launch-ready system.",
        "We scope platform choices carefully: standard storefront when speed and operational simplicity matter most; headless when you need custom frontends, advanced content or tighter performance control. Looking specifically for Shopify design, development, migrations, apps or ongoing support? Explore Buildaze’s dedicated Shopify service hub.",
      ],
      solutionsTitle: "What we build",
      solutions: [
        "Custom Shopify storefronts",
        "Shopify Plus-aware enterprise workflows where plan-appropriate",
        "Headless commerce (Hydrogen / Next.js / Medusa)",
        "Platform migrations with SEO risk management",
        "Custom Shopify apps & integrations",
        "CRO and storefront performance improvements",
      ],
      deliverables: [
        "Storefront performance targets defined and tested before launch",
        "Clear product, collection and checkout UX",
        "Clean product, inventory and customer data migration planning",
        "Redirect mapping, metadata preservation and crawl checks",
      ],
      included: [
        "Shopify / WooCommerce / Medusa storefront build",
        "Headless Next.js frontend (optional)",
        "Payment integration (Stripe / Shopify Payments)",
        "Product data migration & SEO redirect mapping",
      ],
      stackTags: [
        "Shopify",
        "WooCommerce",
        "Medusa",
        "Headless",
        "Next.js",
        "Stripe",
        "Hydrogen",
      ],
      ctaLabel: "Request an ecommerce roadmap",
      process: [
        {
          index: "01",
          name: "Discover & Scope",
          duration: "3–5 days",
          description:
            "Review current stack, identify bottlenecks, define migration or build scope. Output: spec with performance targets and data migration plan.",
        },
        {
          index: "02",
          name: "Build & Performance Test",
          duration: "4–8 weeks",
          description:
            "Weekly demos of working storefront features. Performance tested against agreed targets at each increment.",
        },
        {
          index: "03",
          name: "Validate & Hand Off",
          duration: "3–5 days",
          description:
            "Staged cutover with DNS plan, performance audit, redirect verification and full code handover.",
        },
      ],
      relatedWorkIds: ["catalog-intelligence"],
      faqs: [
        {
          question: "What are ecommerce development services?",
          answer:
            "Helping brands build, redesign, optimize or migrate online stores that are fast, secure, conversion-focused and ready for search discovery.",
        },
        {
          question: "Standard storefront or headless?",
          answer:
            "A standard storefront is often best for speed, budget and platform-native operations. Headless fits brands that need custom frontends, complex content, multiple channels or advanced performance control.",
        },
        {
          question: "How do you migrate without losing SEO?",
          answer:
            "We map current URLs, preserve important metadata, redirect changed paths, verify product and collection data, validate analytics and test crawlable internal links before launch.",
        },
        {
          question: "What should an ecommerce redesign prioritize first?",
          answer:
            "The biggest conversion and technical risks: mobile speed, navigation, product-page clarity, checkout friction, search visibility, analytics accuracy and migration safety.",
        },
      ],
    },
  },
  {
    id: "shopify",
    slug: "shopify-growth-agency",
    path: "/shopify-growth-agency",
    redirectsFrom: [
      "/services/shopify-growth-development-agency",
      "/services/shopify-growth-agency",
    ],
    index: "05",
    name: "Shopify",
    shortName: "Shopify",
    oneLiner:
      "Shopify design, development, migrations, apps, integrations and ongoing support.",
    description:
      "Store design and development, migrations, integrations, advanced commerce and ongoing Shopify support.",
    capabilities: [
      "Store Design & Development",
      "Migrations & Replatforming",
      "App Development & System Integrations",
      "Headless Commerce & Enterprise B2B",
      "Retainers & Ongoing Support",
    ],
    flow: ["Understand", "Scope", "Build", "Launch", "Support"],
    flowLabel: "Clear scope · Progress reviews · Practical handover",
    cta: "Explore Shopify Services",
    page: shopifyPageContent,
  },
];

/** Primary category order: Design → Development → AI → Digital Marketing → Shopify. */
export const CATEGORY_IDS = [
  "design",
  "development",
  "ai",
  "digital-marketing",
  "shopify",
] as const;

function normalizeLegacyService(service: Service): Service {
  if (service.id === "ai") {
    return {
      ...service,
      role: "category",
      index: "03",
      name: "Artificial Intelligence",
      shortName: "AI",
      oneLiner:
        "AI applications, conversational agents and automation for enquiries, workflows and repetitive work.",
      description:
        "AI applications, chatbots, voice agents, custom solutions and automation designed around practical business workflows.",
      capabilities: [
        "AI Applications",
        "AI Chatbots",
        "AI Voice Agents",
        "Custom AI Solutions",
        "Business Automation",
      ],
      flow: ["Discover", "Scope", "Build", "Evaluate"],
      flowLabel: "Choose a service · Scope clearly · Evaluate honestly",
      cta: "Explore AI Solutions",
      relatedServiceIds: [
        "ai-applications",
        "ai-chatbots",
        "ai-voice",
        "ai-solutions",
        "ai-automation",
      ],
      page: aiPageContent,
    };
  }

  if (service.id === "shopify") {
    return {
      ...service,
      role: "category",
      index: "05",
      name: "Shopify",
      shortName: "Shopify",
      relatedServiceIds: [
        "shopify-store-design",
        "shopify-migrations",
        "shopify-apps",
        "shopify-headless",
        "shopify-support",
        "shopify-performance",
      ],
    };
  }

  if (service.id === "web" || service.id === "saas" || service.id === "ecommerce") {
    return { ...service, role: "detail" };
  }

  return service;
}

const normalizedLegacy = legacyServices.map(normalizeLegacyService);

/** All routable services: primary categories + preserved detail pages. */
export const services: Service[] = [
  ...categoryOverviews,
  ...normalizedLegacy,
  ...digitalMarketingLeaves,
  ...aiLeaves,
  ...designLeaves,
  ...developmentLeaves,
  ...shopifyLeaves,
];

/** Primary five categories for nav, hub, homepage and footer. */
export const serviceCategories: Service[] = CATEGORY_IDS.map((id) => {
  const found = services.find((s) => s.id === id);
  if (!found) {
    throw new Error(`Missing service category: ${id}`);
  }
  return found;
});

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getServiceById(id: string): Service | undefined {
  return services.find((s) => s.id === id);
}

export function getServiceByPath(pathname: string): Service | undefined {
  const normalized = pathname.endsWith("/") && pathname !== "/"
    ? pathname.slice(0, -1)
    : pathname;
  return services.find(
    (s) =>
      s.path === normalized ||
      (!s.path && `/services/${s.slug}` === normalized),
  );
}

/** Slugs served by `/services/[slug]` — excludes top-level specialist pages. */
export const serviceSlugs = services
  .filter((s) => !s.path)
  .map((s) => s.slug);

/** All public service paths for sitemap / redirects. */
export const servicePublicPaths = services.map(
  (s) => s.path ?? `/services/${s.slug}`,
);
