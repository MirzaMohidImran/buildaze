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

export interface ServiceSelectedCase {
  id: string;
  index: string;
  category: string;
  title: string;
  description: string;
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
  name: string;
  title: string;
  description: string;
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
  items: string[];
  cta: string;
  href: string;
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
  page: ServicePageContent;
}

export const services: Service[] = [
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
    page: {
      metaTitle: "SaaS Development Services | Multi-Tenant SaaS Products",
      metaDescription:
        "Buildaze designs and ships multi-tenant SaaS products with Stripe billing, RBAC, analytics and operational tooling — fixed scope, weekly demos, full code ownership.",
      headline: "SaaS architecture that survives your second customer.",
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
    page: {
      metaTitle: "Web Development Services | Fast, SEO-Ready Websites & Apps",
      metaDescription:
        "Buildaze builds custom websites and web applications that are fast, accessible, SEO-ready and fully owned by you — Next.js, React, Node.js and Laravel.",
      headline: "Websites and apps built to perform.",
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
    page: {
      metaTitle: "Ecommerce Development Services | Fast, Conversion-Ready Stores",
      metaDescription:
        "Buildaze builds, redesigns and migrates Shopify, WooCommerce and headless commerce stores — performance, conversion and SEO preservation included.",
      headline: "Stores measured in revenue, not page views.",
      subheadline:
        "Shopify, WooCommerce and headless commerce builds with conversion-focused UX, clean migrations and performance tested before launch.",
      overviewTitle: "What ecommerce development includes",
      overview: [
        "We build, redesign, optimize and migrate ecommerce stores with a practical focus on technical performance, product-page UX, checkout clarity, analytics and SEO preservation.",
        "The strongest ecommerce builds don't rely on a theme alone — they connect storefront speed, merchandising, platform constraints, integrations and migration planning into one launch-ready system.",
        "We scope platform choices carefully: standard storefront when speed and operational simplicity matter most; headless when you need custom frontends, advanced content or tighter performance control. Looking specifically for Shopify development? See our Shopify Growth Agency page for Shopify-focused builds, CRO, performance, migrations and Plus support.",
      ],
      solutionsTitle: "What we build",
      solutions: [
        "Custom Shopify storefronts",
        "Shopify Plus & enterprise workflows",
        "Headless commerce (Hydrogen / Next.js / Medusa)",
        "Platform migrations with SEO preservation",
        "Custom Shopify apps & integrations",
        "CRO & Core Web Vitals optimization",
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
    name: "Shopify Growth Agency",
    shortName: "Shopify",
    oneLiner:
      "Custom Shopify development, redesigns, CRO, performance, migrations, and ongoing growth.",
    description:
      "Buildaze is a Shopify development and growth agency helping ecommerce brands design, build, redesign, migrate, and optimize high-performing Shopify stores — combining custom development, conversion strategy, performance, integrations, and ongoing support.",
    capabilities: [
      "Custom Shopify & theme development",
      "Redesign, CRO & performance",
      "Migrations with SEO planning",
      "Shopify Plus & ongoing support",
    ],
    flow: ["Audit", "Build", "Convert", "Grow"],
    flowLabel:
      "No-obligation consultation · Clear project scope · Built around your growth goals",
    cta: "Explore Shopify Services",
    page: {
      metaTitle: "Shopify Development & Growth Agency | Buildaze",
      metaDescription:
        "Buildaze is a Shopify development and growth agency for custom stores, redesigns, CRO, performance optimization, migrations, Shopify Plus, and ongoing support.",
      ogImage: "/og/shopify-growth-agency-og.png",
      entityLabel: "Shopify Development & Growth Agency",
      entityDefinition:
        "Buildaze is a Shopify development and growth agency helping ecommerce brands design, build, redesign, migrate, and optimize high-performing Shopify stores. Our work combines custom Shopify development, conversion strategy, performance optimization, integrations, and ongoing ecommerce support.",
      headline: "Shopify stores built to convert, scale, and stay fast.",
      subheadline:
        "Buildaze is a Shopify development agency for brands that have outgrown templates, slow storefronts, and conversion leaks — combining custom development with CRO, performance, migrations, and ongoing growth support.",
      trust: {
        eyebrow: "Trusted Shopify expertise",
        headline: "Built for brands that take ecommerce seriously.",
        body: "From new storefronts to complex redesigns, migrations, CRO, and custom Shopify development, we help ecommerce brands build faster, stronger, and more conversion-focused shopping experiences.",
        stats: [
          { value: "50+", label: "Projects shipped across Buildaze" },
          { value: "CRO + Dev", label: "One growth-focused team" },
          { value: "Liquid", label: "Custom theme development" },
          { value: "Shopify Plus", label: "Scalable development support" },
        ],
        closing:
          "Trusted by ecommerce brands for Shopify development, redesigns, optimization, migrations, and ongoing growth.",
        trustedBy: [
          "Shopify store builds",
          "Shopify Plus development",
          "Theme redesigns",
          "Platform migrations",
          "CRO & conversion work",
          "Custom Liquid & apps",
          "Headless Hydrogen",
          "Ongoing growth retainers scoped fixed",
        ],
      },
      selectedWork: {
        eyebrow: "Shopify case studies",
        headline: "Selected Shopify work",
        intro: [
          "Every Shopify project starts with a different business problem — slow performance, poor conversion, an outdated storefront, limited functionality, or a platform that no longer supports growth.",
          "Here are selected examples of how we turn those problems into stronger ecommerce experiences. Metrics shown are verified project outcomes only.",
        ],
        cases: [
          {
            id: "shopify-performance",
            index: "01",
            category: "Shopify Performance + CRO",
            title: "From a slow storefront to a performance-focused shopping experience.",
            description:
              "We optimized the storefront architecture, theme code, assets, and front-end experience to improve speed without compromising the brand experience. Verified outcome: performance score moved from 28 to 91.",
            outcome: { value: "28 → 91", label: "Performance score" },
            tags: [
              "Performance Optimization",
              "Theme Cleanup",
              "Mobile Experience",
              "Conversion-Focused Improvements",
            ],
            cta: "View Case Study",
            href: "/work/shopify-performance-optimization",
            visual: "performance",
            image: "/work/shopify-performance/cover.webp",
            imageAlt: "Shopify performance optimization storefront cover",
          },
          {
            id: "shopify-full-build",
            index: "02",
            category: "Custom Shopify Development",
            title: "A stronger ecommerce foundation built around the brand.",
            description:
              "We developed a complete Shopify storefront with a focus on usability, product discovery, mobile shopping, performance, and a cleaner purchase journey.",
            tags: [
              "Custom Shopify Build",
              "Storefront Development",
              "Product Page Experience",
              "Custom Sections",
              "Mobile Optimization",
              "Performance Improvements",
            ],
            cta: "Discuss a Similar Build",
            href: "#contact",
            visual: "build",
            image: "/work/shopify-full-build/cover.webp",
            imageAlt: "Custom Shopify storefront build cover",
          },
          {
            id: "shopify-redesign",
            index: "03",
            category: "Shopify Redesign + CRO",
            title: "Turning an outdated storefront into a clearer buying experience.",
            description:
              "We reworked the storefront around customer behavior — improving visual hierarchy, product discovery, trust, mobile usability, and the path from landing page to checkout.",
            outcome: { value: "Before → After", label: "Store transformation" },
            tags: [
              "Store Redesign",
              "UX Improvements",
              "Conversion Strategy",
              "Product Page Optimization",
              "Responsive Development",
            ],
            cta: "Discuss a Redesign",
            href: "#contact",
            visual: "redesign",
            image: "/work/shopify-redesign/cover.webp",
            imageAlt: "Shopify store redesign cover",
          },
        ],
      },
      problems: {
        eyebrow: "Shopify problems we solve",
        headline: "Shopify problems we solve when the store holds growth back.",
        intro: [
          "A Shopify store can look good and still lose revenue through slow performance, weak product pages, poor mobile UX, limited functionality, or unnecessary friction across the buying journey.",
          "We help identify what is getting in the way — then design and build the right solution around your customers, operations, and growth goals.",
        ],
        problems: [
          {
            index: "01",
            name: "Low conversion rate",
            title: "Traffic is coming in, but too few visitors are buying.",
            description:
              "We improve the customer journey across landing pages, collections, product pages, cart, and checkout to reduce friction and make purchasing easier.",
          },
          {
            index: "02",
            name: "Outdated storefront",
            title: "Your brand has grown, but your Shopify store has not.",
            description:
              "We redesign outdated storefronts into stronger ecommerce experiences that better reflect the quality of the brand and make products easier to discover and buy.",
          },
          {
            index: "03",
            name: "Slow Shopify store",
            title:
              "Apps, theme code, and unnecessary complexity are hurting performance.",
            description:
              "We identify performance bottlenecks and improve theme architecture, scripts, media, and front-end delivery without stripping away the experience your brand needs.",
          },
          {
            index: "04",
            name: "Poor mobile experience",
            title:
              "Your customers shop on mobile, but your store still feels desktop-first.",
            description:
              "We optimize navigation, product discovery, page hierarchy, interactions, cart behavior, and responsive layouts around how customers actually shop on smaller screens.",
          },
          {
            index: "05",
            name: "Limited Shopify functionality",
            title:
              "Your theme or app stack cannot support what the business needs next.",
            description:
              "We build custom Shopify functionality, Liquid components, integrations, and tailored storefront experiences when off-the-shelf solutions are no longer enough.",
          },
          {
            index: "06",
            name: "Difficult migration or replatform",
            title:
              "You need to move to Shopify without creating new business problems.",
            description:
              "We plan migrations around products, customers, content, SEO, redirects, analytics, integrations, and launch QA so the transition is controlled rather than disruptive.",
          },
        ],
        closingTitle:
          "Not sure whether you need a redesign, CRO work, custom development, or a full rebuild?",
        closingBody:
          "We start by identifying the problem before recommending the solution.",
        ctaLabel: "Discuss Your Shopify Store",
        ctaHref: "#contact",
      },
      capabilities: {
        eyebrow: "Shopify development & growth services",
        headline:
          "Shopify development & growth services for stores that need to convert and scale.",
        intro: [
          "A Shopify development agency should do more than install a theme. Buildaze designs, develops, redesigns, migrates, and optimizes Shopify stores — including custom Liquid development, CRO, performance, integrations, Shopify Plus work, and ongoing support.",
          "Choose the capability you need today — without limiting what your store can become tomorrow.",
        ],
        capabilities: [
          {
            id: "store-development",
            index: "01",
            name: "Shopify Store Development",
            title: "Build the right foundation from day one.",
            description:
              "Custom Shopify store development designed around your brand, products, customers, and operational requirements — not forced into a generic template. Includes theme architecture, product and collection structure, responsive UX, and integrations.",
            items: [
              "Custom Storefront Development",
              "Theme Setup & Customization",
              "Product & Collection Architecture",
              "Responsive Development",
              "App & Third-Party Integrations",
            ],
            cta: "Explore Shopify Development",
            href: "#contact",
          },
          {
            id: "redesign",
            index: "02",
            name: "Shopify Store Redesign",
            title: "When the business has evolved but the storefront has not.",
            description:
              "Shopify store redesign focused on stronger visual hierarchy, easier product discovery, better mobile usability, clearer trust signals, and a more intentional purchase journey — without redesigning for aesthetics alone.",
            items: [
              "UX & UI Redesign",
              "Navigation Improvements",
              "Product Page Redesign",
              "Mobile Optimization",
              "Custom Theme Development",
            ],
            cta: "Explore Store Redesign",
            href: "#contact",
          },
          {
            id: "cro",
            index: "03",
            name: "Shopify CRO",
            title: "Turn more of your existing traffic into customers.",
            description:
              "Shopify conversion rate optimization analyzes the purchase journey to identify friction across landing pages, collections, product pages, cart, navigation, trust, and mobile experience — then prioritizes changes that make buying clearer.",
            items: [
              "Conversion Audits",
              "Customer Journey Analysis",
              "PDP Optimization",
              "Cart & Checkout Friction",
              "A/B Test Recommendations",
            ],
            cta: "Explore Shopify CRO",
            href: "#contact",
          },
          {
            id: "performance",
            index: "04",
            name: "Shopify Performance Optimization",
            title: "A faster storefront without stripping away the experience.",
            description:
              "Shopify speed and performance optimization addresses heavy theme code, scripts, apps, media, rendering, and front-end bottlenecks that slow Core Web Vitals and the shopping experience.",
            items: [
              "Theme Performance Audit",
              "JavaScript & Asset Optimization",
              "App Impact Review",
              "Image Optimization",
              "Core Web Vitals Improvements",
            ],
            cta: "Improve Store Performance",
            href: "#contact",
          },
          {
            id: "custom-dev",
            index: "05",
            name: "Custom Shopify Development",
            title: "When your store needs more than an off-the-shelf theme or app.",
            description:
              "Custom Shopify development using Liquid, custom sections, Admin and Storefront APIs, integrations, and app development when native features or existing apps cannot support the business requirement.",
            items: [
              "Custom Liquid Development",
              "Reusable Shopify Sections",
              "Custom Product Experiences",
              "API Integrations",
              "Custom Shopify Apps",
            ],
            cta: "Discuss Custom Development",
            href: "#contact",
          },
          {
            id: "migration",
            index: "06",
            name: "Shopify Migration",
            title: "Move to Shopify without leaving critical business assets behind.",
            description:
              "Structured Shopify migration from platforms such as WooCommerce, BigCommerce, Magento, and other ecommerce systems — planning products, customers, content, redirects, SEO, analytics, and launch QA.",
            items: [
              "Product & Customer Migration",
              "Content Migration",
              "URL & Redirect Mapping",
              "SEO Preservation",
              "Analytics & Integration Setup",
            ],
            cta: "Explore Shopify Migration",
            href: "#contact",
          },
          {
            id: "plus",
            index: "07",
            name: "Shopify Plus Development",
            title:
              "Advanced Shopify development for stores operating at greater scale.",
            description:
              "Shopify Plus development support for larger ecommerce teams — tailored storefront experiences, integrations, automation, international commerce (Markets), checkout extensibility, and scalable architecture.",
            items: [
              "Shopify Plus Development",
              "Advanced Integrations",
              "International Commerce",
              "Automation & Workflows",
              "Scalable Storefront Architecture",
            ],
            cta: "Explore Shopify Plus",
            href: "#contact",
          },
          {
            id: "support",
            index: "08",
            name: "Ongoing Shopify Support",
            title: "Your Shopify store should keep improving after launch.",
            description:
              "Ongoing Shopify development and support for ecommerce teams that need continued optimization, testing, maintenance, and new functionality as customer needs and business priorities evolve.",
            items: [
              "Ongoing Development",
              "CRO Improvements",
              "Performance Monitoring",
              "Feature Development",
              "Technical Support",
            ],
            cta: "Discuss Ongoing Support",
            href: "#contact",
          },
        ],
        closingTitle: "Not sure which Shopify service you need?",
        closingBody:
          "Tell us what is happening with your store. We will help identify the right starting point.",
        ctaLabel: "Talk to a Shopify Expert",
        ctaHref: "#contact",
      },
      deliveryProcess: {
        eyebrow: "Our Shopify development process",
        headline:
          "Our Shopify development process — from first conversation to launch and beyond.",
        intro: [
          "Great Shopify projects are not built by jumping straight into development.",
          "We start by understanding the business, customers, current challenges, and growth goals — then move through strategy, design, development, testing, and launch with a clear plan at every stage.",
        ],
        steps: [
          {
            id: "discover",
            index: "01",
            shortName: "Discover",
            name: "Discovery & Audit",
            title: "Understand the business before touching the store.",
            description:
              "We review your current Shopify setup, customer journey, storefront experience, analytics, theme, apps, technical limitations, and business priorities.",
            itemsLabel: "What we look at",
            items: [
              "Business & Growth Goals",
              "Storefront & UX",
              "Conversion Friction",
              "Theme & App Stack",
              "Performance",
              "Analytics & Tracking",
              "Competitor Landscape",
            ],
            outcome:
              "A clear understanding of what needs to change — and why.",
          },
          {
            id: "strategy",
            index: "02",
            shortName: "Strategy",
            name: "Strategy & Scope",
            title: "Define the right solution before development begins.",
            description:
              "We translate the audit into a practical roadmap covering priorities, functionality, user journeys, technical requirements, deliverables, and project milestones.",
            itemsLabel: "What we define",
            items: [
              "Project Scope",
              "Customer Journey",
              "Feature Requirements",
              "Technical Approach",
              "Integrations",
              "Milestones & Deliverables",
            ],
            outcome:
              "Everyone knows what is being built, how it will work, and what success looks like.",
          },
          {
            id: "design",
            index: "03",
            shortName: "Design",
            name: "UX & Design",
            title: "Design around how customers actually shop.",
            description:
              "We shape the storefront experience around product discovery, buying intent, mobile behavior, trust, usability, and conversion — while staying aligned with the brand.",
            itemsLabel: "What we work on",
            items: [
              "Information Architecture",
              "Navigation",
              "Collection Experience",
              "Product Pages",
              "Cart Experience",
              "Mobile UX",
              "Visual Design",
            ],
            outcome:
              "A storefront direction that balances brand, usability, and ecommerce performance.",
          },
          {
            id: "build",
            index: "04",
            shortName: "Build",
            name: "Shopify Development",
            title:
              "Turn the approved direction into a fast, scalable Shopify experience.",
            description:
              "Our developers build the storefront using clean, maintainable Shopify architecture — including custom Liquid, reusable sections, integrations, and functionality where required.",
            itemsLabel: "What we build",
            items: [
              "Theme Development",
              "Custom Liquid",
              "Reusable Sections",
              "App Integrations",
              "Custom Functionality",
              "Responsive Front-End",
              "Tracking Implementation",
            ],
            outcome:
              "A production-ready Shopify store built around the requirements of the business.",
          },
          {
            id: "validate",
            index: "05",
            shortName: "QA",
            name: "QA & Validation",
            title: "Test the experience before customers do.",
            description:
              "Before launch, we test the storefront across devices, browsers, customer journeys, integrations, analytics, performance, and critical ecommerce functionality.",
            itemsLabel: "What we validate",
            items: [
              "Responsive Experience",
              "Product & Variant Logic",
              "Cart & Checkout Flow",
              "Forms & Integrations",
              "Analytics & Tracking",
              "Performance",
              "Browser Compatibility",
            ],
            outcome: "A thoroughly tested storefront ready for launch.",
          },
          {
            id: "launch",
            index: "06",
            shortName: "Launch",
            name: "Launch & Optimize",
            title: "Launch is the beginning, not the finish line.",
            description:
              "We manage the final deployment, migration requirements, redirects, tracking checks, and post-launch validation — then support ongoing improvements as the store grows.",
            itemsLabel: "What happens next",
            items: [
              "Launch Support",
              "Redirect Validation",
              "Analytics Checks",
              "Performance Monitoring",
              "CRO Improvements",
              "New Features",
              "Ongoing Shopify Support",
            ],
            outcome:
              "A stable launch with a clear path for continued improvement.",
          },
        ],
        closingTitle: "Already have a Shopify store?",
        closingBody:
          "You do not need to know whether the answer is a redesign, CRO project, performance fix, or complete rebuild. Start with the problem. We will help determine the right path.",
        ctaLabel: "Start a Shopify Conversation",
        ctaHref: "#contact",
      },
      why: {
        eyebrow: "Why ecommerce brands choose Buildaze",
        headline:
          "Why ecommerce brands choose Buildaze for Shopify development and growth.",
        intro: [
          "A storefront can be technically correct and still underperform.",
          "That is why Buildaze brings ecommerce strategy, conversion thinking, design, and development into the same process — so decisions are made around the business, not just the build.",
        ],
        differentiators: [
          {
            id: "ecommerce-thinking",
            index: "01",
            name: "Ecommerce Thinking",
            summary: "We think beyond the development ticket.",
            title: "We think beyond the development ticket.",
            description:
              "Every design and development decision is considered in the context of product discovery, buying behavior, conversion friction, mobile experience, and the wider customer journey. We are not simply asking “Can we build this?” We are also asking “Should we build it this way?”",
            panelStatement:
              "The right question is not only whether we can build it — but whether this is the right way to help customers buy.",
            panelNote:
              "Product discovery, buying behavior, friction, and mobile — before the ticket.",
          },
          {
            id: "custom-simple",
            index: "02",
            name: "Custom Without Unnecessary Complexity",
            summary: "Custom where it creates value. Simple where it should stay simple.",
            title:
              "Custom where it creates value. Simple where it should stay simple.",
            description:
              "Not every problem needs another app, complicated architecture, or complete rebuild. We use Shopify's native capabilities wherever they make sense and introduce custom development when the business genuinely requires it. The result is a storefront that is easier to manage, maintain, and evolve.",
            panelStatement:
              "Custom code should create leverage — not another layer of debt your team has to live with.",
            panelNote:
              "Native Shopify first. Custom only when the business truly needs it.",
          },
          {
            id: "cro-dev",
            index: "03",
            name: "CRO + Development Together",
            summary: "Performance is considered before the store goes live.",
            title: "Performance is considered before the store goes live.",
            description:
              "Conversion optimization is not treated as something that gets added after development. Navigation, page hierarchy, product information, trust, mobile UX, cart behavior, and performance are considered throughout the project. The goal is not simply to launch a better-looking store. It is to build a better buying experience.",
            panelStatement:
              "A beautiful storefront means very little if customers struggle to buy from it.",
            panelNote:
              "Conversion is designed into the build — not bolted on after launch.",
          },
          {
            id: "clean-builds",
            index: "04",
            name: "Clean, Maintainable Builds",
            summary:
              "Your Shopify store should not become harder to manage every time it grows.",
            title:
              "Your Shopify store should not become harder to manage every time it grows.",
            description:
              "We build reusable sections, structured theme components, and maintainable functionality so your internal team can operate the storefront without depending on a developer for every small change. When custom code is required, it should solve a problem — not create another one.",
            panelStatement:
              "A store that grows should stay operable — not become a maze only one developer understands.",
            panelNote:
              "Reusable sections. Structured components. Changes your team can own.",
          },
          {
            id: "communication",
            index: "05",
            name: "Clear Communication",
            summary: "You should always know what is happening with your project.",
            title: "You should always know what is happening with your project.",
            description:
              "We define scope, responsibilities, milestones, and deliverables before development begins and keep communication clear throughout the project. No disappearing developers. No unclear handoffs. No surprise functionality decisions at launch.",
            panelStatement:
              "Clarity is part of the deliverable — scope, milestones, and ownership, not radio silence.",
            panelNote:
              "No disappearing developers. No surprise decisions at launch.",
          },
          {
            id: "what-comes-next",
            index: "06",
            name: "Built for What Comes Next",
            summary: "We do not treat launch as the end of the relationship.",
            title: "We do not treat launch as the end of the relationship.",
            description:
              "Ecommerce businesses change. New products launch. Campaigns evolve. Integrations change. Conversion opportunities appear. Buildaze can continue supporting development, optimization, testing, and new functionality as your Shopify business grows.",
            panelStatement:
              "Launch is a milestone — not the moment we stop caring about the business behind the store.",
            panelNote:
              "Ongoing development, CRO, testing, and new features as you grow.",
          },
        ],
        closingTitle:
          "The difference is not simply how we build Shopify stores.",
        closingBody:
          "It is how we think about the business they are being built for.",
        pillars: [
          "Strategy",
          "Conversion",
          "Design",
          "Development",
          "Performance",
        ],
        closingNote: "One Shopify-focused team.",
        ctaLabel: "Work With Buildaze",
        ctaHref: "#contact",
      },
      clientProof: {
        eyebrow: "Client reviews",
        headline: "Client reviews from Shopify and ecommerce work.",
        intro: [
          "The strongest proof of our work comes from the businesses we have helped build, improve, and grow.",
          "Below is feedback tied to real project contexts from Buildaze’s existing client communications. Additional third-party review URLs (Clutch, Upwork, LinkedIn) should be linked as they are verified.",
        ],
        featured: {
          id: "featured-northway",
          quote:
            "Our Shopify store was outdated and slow. Buildaze rebuilt it headless in 7 weeks. Conversion rate went up 18% in the first month — and communication stayed clear the entire way.",
          name: "David Kim",
          role: "Ecommerce Director",
          brand: "Northway",
          project: "Headless Shopify rebuild",
          source: "direct",
          href: "#contact",
        },
        reviews: [],
        categoriesLabel: "Project types reflected in client feedback",
        categories: [
          "Shopify Development",
          "Store Redesigns",
          "Custom Functionality",
          "Performance Optimization",
          "CRO",
          "Ongoing Support",
        ],
        closingTitle: "Have a Shopify project in mind?",
        closingBody:
          "Tell us what you are trying to improve and we will help you identify the clearest next step.",
        ctaLabel: "Discuss Your Shopify Project",
        ctaHref: "#contact",
      },
      ecosystem: {
        eyebrow: "Shopify technologies & integrations",
        headline:
          "Shopify technologies & integrations your ecommerce business already depends on.",
        intro: [
          "A Shopify store rarely operates alone.",
          "We connect storefronts with the marketing, analytics, customer experience, subscription, operations, and growth tools that keep ecommerce businesses moving.",
          "From native Shopify capabilities — Liquid, metafields, metaobjects, Functions, Markets, Checkout Extensibility, and Storefront APIs — to custom integrations, we build the technical connections around how your business actually works.",
        ],
        groups: [
          {
            id: "shopify-core",
            index: "01",
            name: "Shopify Core",
            shortName: "Core",
            items: [
              "Shopify",
              "Shopify Plus",
              "Liquid",
              "Shopify Functions",
              "Metafields & Metaobjects",
              "Shopify Markets",
              "Checkout Extensibility",
              "Storefront APIs",
              "Shopify Apps",
            ],
          },
          {
            id: "marketing",
            index: "02",
            name: "Marketing & Retention",
            shortName: "Marketing",
            items: [
              "Klaviyo",
              "Meta",
              "Google Ads",
              "Email & SMS Integrations",
              "Customer Segmentation",
              "Lifecycle Marketing Integrations",
            ],
          },
          {
            id: "analytics",
            index: "03",
            name: "Analytics & Tracking",
            shortName: "Analytics",
            items: [
              "Google Analytics 4",
              "Google Tag Manager",
              "Meta Pixel",
              "Conversion Tracking",
              "Event Tracking",
              "Ecommerce Measurement",
            ],
          },
          {
            id: "cx",
            index: "04",
            name: "Customer Experience",
            shortName: "CX",
            items: [
              "Gorgias",
              "Judge.me",
              "Recharge",
              "Subscriptions",
              "Reviews & Loyalty",
              "Customer Account Experiences",
            ],
          },
          {
            id: "custom",
            index: "05",
            name: "Custom Integrations",
            shortName: "Custom",
            items: [
              "Third-Party APIs",
              "ERP Connections",
              "CRM Integrations",
              "Inventory Systems",
              "Custom Shopify Apps",
              "Private Business Workflows",
            ],
          },
        ],
        closingTitle: "Already using a complex app stack?",
        closingBody:
          "We can work with your existing Shopify ecosystem, simplify unnecessary dependencies, and build custom integrations where off-the-shelf tools are not enough.",
        ctaLabel: "Discuss an Integration",
        ctaHref: "#contact",
      },
      audience: {
        eyebrow: "Who we work with",
        headline:
          "Who we work with — Shopify brands at every growth stage.",
        intro: [
          "Buildaze works with launching brands, growing DTC companies, established ecommerce businesses, and teams with more advanced Shopify requirements.",
          "A new brand may need the right storefront from day one. A growing store may need better conversion and performance. An established business may need custom functionality, integrations, or a platform that can support significantly more complexity.",
          "Buildaze adapts the approach around where your business is now — and where it needs to go next.",
        ],
        stages: [
          {
            id: "launch",
            index: "01",
            stage: "Launch",
            name: "Launching & Emerging Brands",
            title:
              "Start with a store you will not need to replace six months later.",
            description:
              "For brands building their first serious Shopify storefront, we create a scalable foundation around the brand, customer journey, merchandising, performance, and the systems needed to operate effectively.",
            itemsLabel: "Best fit when you need",
            items: [
              "Brand-led Shopify Store Design",
              "Custom Theme Development",
              "Product & Collection Architecture",
              "Conversion-Focused UX",
              "Analytics & Tracking Setup",
              "Essential Integrations",
            ],
            goalLabel: "Typical goal",
            goal: "Launch professionally with a storefront built for growth rather than a temporary template.",
          },
          {
            id: "grow",
            index: "02",
            stage: "Grow",
            name: "Growing DTC Brands",
            title:
              "When more traffic exposes the weaknesses in your storefront.",
            description:
              "As acquisition grows, small UX, performance, and conversion problems become expensive. We help growing ecommerce brands improve the buying experience, reduce friction, strengthen product pages, increase storefront performance, and build functionality around the next stage of growth.",
            itemsLabel: "Best fit when you need",
            items: [
              "Shopify CRO",
              "Store Redesign",
              "PDP & Collection Optimization",
              "Mobile UX Improvements",
              "Performance Optimization",
              "Custom Features",
            ],
            goalLabel: "Typical goal",
            goal: "Get more value from the traffic and customer demand you already have.",
          },
          {
            id: "scale",
            index: "03",
            stage: "Scale",
            name: "Established Ecommerce Businesses",
            title:
              "Your storefront now has to support a more complex business.",
            description:
              "Established stores often outgrow the theme, app stack, architecture, or workflows that worked at an earlier stage. We help restructure and extend Shopify around larger catalogs, integrations, custom functionality, operational requirements, and evolving customer journeys.",
            itemsLabel: "Best fit when you need",
            items: [
              "Complex Shopify Development",
              "Custom Integrations",
              "Theme Architecture Improvements",
              "Advanced Merchandising",
              "Platform Migration",
              "Ongoing Development",
            ],
            goalLabel: "Typical goal",
            goal: "Remove technical limitations without disrupting a business that is already operating at scale.",
          },
          {
            id: "extend",
            index: "04",
            stage: "Extend",
            name: "Shopify Plus & Ecommerce Teams",
            title:
              "More scale creates different technical and operational requirements.",
            description:
              "We support ecommerce teams that need advanced Shopify development, custom storefront experiences, integrations, international commerce capabilities, automation, and an experienced development partner that can work alongside internal stakeholders.",
            itemsLabel: "Best fit when you need",
            items: [
              "Shopify Plus Development",
              "Advanced Integrations",
              "Checkout Extensibility",
              "International Commerce",
              "Custom Workflows",
              "Ongoing Technical Partnership",
            ],
            goalLabel: "Typical goal",
            goal: "Create a more flexible Shopify ecosystem capable of supporting continued scale.",
          },
        ],
        closingTitle: "Not sure which category you fit into?",
        closingBody:
          "That is completely fine. The first conversation is about understanding where your Shopify business is today, what is limiting the next stage of growth, and whether Buildaze is the right partner to help solve it.",
        ctaLabel: "Tell Us About Your Store",
        ctaHref: "#contact",
      },
      overviewTitle: "What Shopify growth & development includes",
      overview: [
        "Shopify is the fastest path to a working store — but growth stalls when the theme is fragile, checkout is confusing, or the catalog and apps fight each other. We treat Shopify as a production commerce system, not a template install.",
        "We build and extend stores with maintainable theme code or Hydrogen storefronts, clean app architecture, Plus-ready planning where required, and migrations that protect search equity.",
        "Every engagement is fixed-scope with weekly demos. You leave with the storefront, integrations, documentation and ownership — ready to grow without lock-in.",
      ],
      solutionsTitle: "Shopify services we ship",
      solutions: [
        "Custom Shopify theme development",
        "Shopify Plus & enterprise storefronts",
        "Headless Shopify (Hydrogen / Next.js)",
        "Migrations from WooCommerce, Magento & more",
        "Custom Shopify apps & ERP / CRM integrations",
        "CRO, performance and post-launch growth",
      ],
      deliverables: [
        "Launch-ready Shopify or Plus storefront with tested Core Web Vitals",
        "Product, collection and checkout UX built for conversion",
        "Migration plan with redirects, metadata and data integrity checks",
        "App, payment and ops integrations wired into how your team works",
      ],
      included: [
        "Shopify / Shopify Plus storefront build",
        "Theme or Hydrogen / Next.js frontend",
        "Shopify Payments / Stripe & checkout flows",
        "Migration, SEO redirects & analytics setup",
      ],
      stackTags: [
        "Shopify",
        "Shopify Plus",
        "Hydrogen",
        "Liquid",
        "Next.js",
        "Stripe",
        "Klaviyo",
      ],
      ctaLabel: "Book a Shopify Strategy Call",
      secondaryCtaLabel: "View Shopify Work",
      process: [
        {
          index: "01",
          name: "Audit & Scope",
          duration: "3–5 days",
          description:
            "Review catalog, theme debt, apps and conversion bottlenecks. Output: fixed scope, performance targets and growth priorities.",
        },
        {
          index: "02",
          name: "Build & Optimize",
          duration: "4–8 weeks",
          description:
            "Weekly demos of working storefront features. Performance and checkout flows tested against agreed targets each sprint.",
        },
        {
          index: "03",
          name: "Launch & Hand Off",
          duration: "3–5 days",
          description:
            "Staged launch with DNS plan, redirect verification, analytics checks and full storefront handover.",
        },
      ],
      relatedWorkIds: ["shopify-performance", "catalog-intelligence"],
      faqEyebrow: "Shopify development FAQs",
      faqHeadline: "Shopify development FAQs",
      faqIntro: [
        "Every Shopify project is different, but the questions businesses ask before choosing a development partner are often similar.",
        "Here are straightforward answers about scope, timelines, existing stores, migrations, custom development, ownership, and what working with Buildaze looks like.",
      ],
      faqs: [
        {
          question: "How much does a Shopify project with Buildaze cost?",
          answer:
            "There is no one-size-fits-all Shopify project price because the scope can vary significantly between a focused optimization project, a storefront redesign, a migration, and a completely custom build. We first understand what needs to be solved, define the required deliverables, and then provide a clear project scope and cost. You will know what is included before development begins.",
        },
        {
          question: "How long does a Shopify project take?",
          answer:
            "The timeline depends on the size and complexity of the project. A focused development or optimization project may take considerably less time than a complete redesign, migration, or custom Shopify build. Once the scope is defined, we establish clear milestones and a realistic delivery timeline before work begins.",
        },
        {
          question: "Can you work with our existing Shopify theme?",
          answer:
            "Yes. A complete rebuild is not always necessary. We can review your existing theme, architecture, apps, performance, and current limitations to determine whether it makes more sense to improve what you already have or build a stronger foundation. We recommend the approach based on the problem — not because a rebuild is easier to sell.",
        },
        {
          question:
            "Can you improve conversions without redesigning the entire store?",
          answer:
            "Yes. Conversion problems do not automatically mean the entire storefront needs to be replaced. Depending on what the data and customer journey reveal, improvements may focus on areas such as product pages, navigation, merchandising, trust signals, mobile UX, cart behavior, performance, or specific landing pages. We identify the friction first and recommend changes from there.",
        },
        {
          question:
            "Can you build custom Shopify functionality if an app cannot do what we need?",
          answer:
            "Yes. When Shopify's native functionality or an existing app does not meet the requirement, we can develop tailored solutions using Liquid, Shopify APIs, custom theme components, integrations, and custom app development where appropriate. We also avoid custom development when a simpler, maintainable solution already solves the problem.",
        },
        {
          question:
            "Can you migrate our existing store to Shopify without damaging SEO?",
          answer:
            "SEO preservation is an important part of a structured ecommerce migration. We plan around existing URLs, redirects, page content, metadata, products, collections, analytics, tracking, and other migration requirements so important search and business assets are not ignored during the move. No migration can responsibly promise zero ranking fluctuation, but it can be planned carefully to reduce avoidable risk.",
        },
        {
          question: "Do you work with Shopify Plus?",
          answer:
            "Yes. Buildaze can support Shopify Plus requirements including advanced storefront development, integrations, international commerce, checkout extensibility, automation, and ongoing technical development. The exact approach depends on your existing setup, business requirements, and Shopify architecture.",
        },
        {
          question:
            "Will we own the Shopify store and custom work you build?",
          answer:
            "Yes. The store, approved custom theme work, and project deliverables created for your business remain under your control according to the agreed project scope. We build with maintainability in mind so your team is not intentionally locked into Buildaze for everyday storefront management.",
        },
        {
          question: "Can Buildaze support our Shopify store after launch?",
          answer:
            "Yes. Many ecommerce businesses continue evolving after launch. We can support ongoing development, CRO improvements, performance work, new functionality, integrations, storefront updates, and technical maintenance based on the needs of the business.",
        },
        {
          question: "What happens after we contact Buildaze?",
          answer:
            "We start with a conversation about your store, business goals, current challenges, and what you are trying to improve. From there, we determine whether the right next step is an audit, focused development work, redesign, migration, custom build, or another approach. If there is a good fit, we define the scope, deliverables, timeline, and next steps before development begins.",
        },
      ],
      faqClosingTitle: "Still have a question?",
      faqClosingBody:
        "Tell us what is happening with your Shopify store and we will give you a straightforward answer.",
      faqCtaLabel: "Ask Buildaze About Your Store",
      faqCtaHref: "#contact",
    },
  },
];

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
