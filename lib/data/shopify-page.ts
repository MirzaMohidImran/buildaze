import type { ServicePageContent } from "./services";

/** Specialist page body for `/shopify-growth-agency`. */
export const shopifyPageContent: ServicePageContent = {
  metaTitle: "Shopify Design & Development Agency | Buildaze",
  metaDescription:
    "Shopify store design, development, migrations, apps, integrations and ongoing support. Tell Buildaze what your store needs and discuss the right next step.",
  ogImage: "/og/shopify-growth-agency-og.png",
  eyebrow: "Shopify design and development",
  entityLabel: "Shopify",
  headline: "Shopify design and development for your next stage of growth.",
  subheadline:
    "Launch a new store, redesign an existing storefront or connect the systems behind it — with a scope that matches the problem.",
  ctaLabel: "Discuss Your Shopify Store",
  secondaryCtaLabel: "View Shopify Work",

  logoStrip: {
    label: "Platforms we work with",
    items: [
      {
        name: "Google",
        src: "/brands/platforms/google.svg",
        mark: "icon",
      },
      {
        name: "Meta",
        src: "/brands/platforms/meta.svg",
        mark: "icon",
      },
      {
        name: "Shopify",
        src: "/brands/platforms/shopify.svg",
        mark: "icon",
      },
      {
        name: "GitHub",
        src: "/brands/platforms/github.svg",
        mark: "icon",
      },
      {
        name: "OpenAI",
        src: "/brands/platforms/openai.svg",
        mark: "icon",
      },
      {
        name: "Klaviyo",
        src: "/brands/platforms/klaviyo.svg",
        mark: "wordmark",
      },
      {
        name: "Zapier",
        src: "/brands/platforms/zapier.svg",
        mark: "icon",
      },
      {
        name: "Make",
        src: "/brands/platforms/make.svg",
        mark: "icon",
      },
      {
        name: "n8n",
        src: "/brands/platforms/n8n.svg",
        mark: "icon",
      },
    ],
  },

  problems: {
    eyebrow: "Starting points",
    headline: "Find the right starting point for your Shopify store",
    intro: [
      "Start with what is happening in your business. You do not need to decide whether the answer is a redesign, custom development or a different technical approach.",
    ],
    problems: [
      {
        id: "launch",
        index: "01",
        name: "Launching a new Shopify store",
        title: "A storefront designed around the brand, products and buying journey.",
        description:
          "We scope design and theme development around how customers discover products and complete a purchase — without assuming a full custom rebuild is always required.",
        serviceLabel: "Store Design & Development",
        enquiryHref:
          "/contact?service=shopify&problem=Launching%20a%20new%20Shopify%20store&capability=Store%20Design%20%26%20Development",
      },
      {
        id: "outdated",
        index: "02",
        name: "The store no longer reflects the business",
        title: "A focused redesign or improvement of the existing storefront.",
        description:
          "We review what still works and what is holding the brand back, then prioritize storefront changes that match how the business sells today.",
        serviceLabel: "Store Design & Development",
        enquiryHref:
          "/contact?service=shopify&problem=Store%20no%20longer%20reflects%20the%20business&capability=Store%20Design%20%26%20Development",
      },
      {
        id: "friction",
        index: "03",
        name: "Visitors struggle to find products or complete a purchase",
        title:
          "Review product discovery, mobile UX, product pages, cart behavior and measurable conversion friction.",
        description:
          "We investigate where the journey breaks down and prioritize changes. Conversion outcomes depend on more than development alone — we do not promise a specific lift.",
        serviceLabel: "Store Design & Development; Retainers where ongoing",
        enquiryHref:
          "/contact?service=shopify&problem=Purchase%20journey%20friction&capability=Store%20Design%20%26%20Development",
      },
      {
        id: "slow",
        index: "04",
        name: "The storefront feels slow",
        title:
          "Identify theme, app, media and rendering bottlenecks before choosing changes.",
        description:
          "We diagnose likely causes and recommend focused performance work — as a project or as part of ongoing support.",
        serviceLabel: "Store Design & Development or Retainers & Ongoing Support",
        enquiryHref:
          "/contact?service=shopify&problem=Slow%20storefront&capability=Store%20Design%20%26%20Development",
      },
      {
        id: "migration",
        index: "05",
        name: "Moving from another platform",
        title: "Plan data, content, redirects, integrations and launch verification.",
        description:
          "Migrations are planned carefully. Platform limits mean not every record, password or subscription can always move unchanged. We reduce avoidable risk — we do not promise zero SEO fluctuation.",
        serviceLabel: "Migrations & Replatforming",
        enquiryHref:
          "/contact?service=shopify&problem=Platform%20migration&capability=Migrations%20%26%20Replatforming",
      },
      {
        id: "integrations",
        index: "06",
        name: "The store needs functionality or connected systems",
        title:
          "Custom features, app development or integrations supporting actual operations.",
        description:
          "We prefer native features and maintainable tools when they solve the need, and build custom connections when they do not.",
        serviceLabel: "App Development & System Integrations",
        enquiryHref:
          "/contact?service=shopify&problem=Custom%20functionality%20or%20integrations&capability=App%20Development%20%26%20System%20Integrations",
      },
      {
        id: "headless",
        index: "07",
        name: "Advanced storefront or B2B requirements",
        title:
          "Assess headless, enterprise and B2B options against complexity, budget and platform constraints.",
        description:
          "Headless and advanced B2B work add implementation and operational complexity. We only recommend them when requirements justify the cost.",
        serviceLabel: "Headless Commerce & Enterprise B2B",
        enquiryHref:
          "/contact?service=shopify&problem=Headless%20or%20B2B%20requirements&capability=Headless%20Commerce%20%26%20Enterprise%20B2B",
      },
      {
        id: "retainer",
        index: "08",
        name: "Need a reliable team after launch",
        title: "Continued development, maintenance and prioritized improvements.",
        description:
          "Scope, capacity and responsibilities are agreed — not unlimited support or invented SLAs.",
        serviceLabel: "Retainers & Ongoing Support",
        enquiryHref:
          "/contact?service=shopify&problem=Ongoing%20support&capability=Retainers%20%26%20Ongoing%20Support",
      },
    ],
    closingTitle: "Not sure what the right solution is?",
    closingBody: "Tell us what is happening with your store.",
    ctaLabel: "Tell us about your store",
    ctaHref:
      "/contact?service=shopify&problem=Not%20sure%20yet&capability=Not%20sure%20yet",
  },

  selectedWork: {
    eyebrow: "Portfolio",
    headline: "Selected Shopify projects",
    intro: [
      "Documented Shopify projects with a clear problem and Buildaze’s contribution. Lab performance scores are not revenue or Core Web Vitals field claims.",
    ],
    cases: [
      {
        id: "shopify-performance",
        index: "01",
        category: "Performance optimization",
        title: "From a slow storefront to a clearer, faster shopping experience.",
        relevance: "This project involved theme and front-end performance work.",
        description:
          "We optimized theme code, assets and front-end delivery on an existing Shopify storefront so pages loaded more reliably. Documented lab result: Lighthouse Performance score moved from 28 to 91 (lab metric — not a Core Web Vitals field claim or revenue outcome). Device, tool and date context should be confirmed on the case study where recorded.",
        outcome: {
          value: "28 → 91",
          label: "Lighthouse Performance (lab score)",
        },
        tags: [
          "Performance Optimization",
          "Theme Cleanup",
          "Mobile Experience",
          "Store Design & Development",
        ],
        cta: "View case study",
        href: "/work/shopify-performance-optimization",
        visual: "performance",
        image: "/work/shopify-performance/cover.webp",
        imageAlt:
          "Illustrated Shopify storefront representing a performance optimization project",
      },
      {
        id: "shopify-redesign",
        index: "02",
        category: "Storefront redesign",
        title: "A clearer buying experience for an outdated storefront.",
        relevance: "This project involved a storefront redesign.",
        description:
          "We reworked visual hierarchy, product discovery and mobile usability so the storefront better matched how customers shop. This card uses an approved project cover; a full written case study is not published yet.",
        tags: [
          "Store Redesign",
          "UX Improvements",
          "Product Pages",
          "Store Design & Development",
        ],
        cta: "Discuss a similar project",
        href: "/contact?service=shopify&problem=Storefront%20redesign&capability=Store%20Design%20%26%20Development",
        visual: "redesign",
        image: "/work/shopify-redesign/cover.png",
        imageAlt: "Shopify store redesign project cover",
      },
    ],
  },

  capabilities: {
    eyebrow: "Shopify services",
    headline: "Shopify services built around your business needs",
    intro: [
      "Five service groups cover most Shopify needs. Store redesign, theme work, mobile UX, performance and conversion improvements sit inside Store Design & Development and/or ongoing support — not as separate top-level promises.",
    ],
    capabilities: [
      {
        id: "store-design-development",
        index: "01",
        name: "Store Design & Development",
        title: "New stores and stronger storefronts for existing brands.",
        bestFor:
          "Teams launching on Shopify or improving an existing theme, redesign, mobile UX, performance or buying journey.",
        boundaries:
          "An existing theme can often be improved before a full rebuild. Custom or headless is not always the better option. Conversion outcomes depend on more than development — we do not promise a specific lift.",
        description:
          "For a new store, an outdated storefront or a journey that needs improvement, we scope Shopify store design, theme customization, custom sections and responsive development around your products and customers. For existing stores, we assess whether targeted changes can solve the problem before recommending a rebuild.",
        items: [
          "New store builds",
          "Existing-store redesign",
          "Theme customization and custom sections",
          "Navigation, collections and product pages",
          "Responsive development and mobile UX",
          "Performance improvements",
          "Conversion-focused storefront improvements",
          "Appropriate app setup within storefront scope",
        ],
        cta: "Discuss store design & development",
        href: "/contact?service=shopify&capability=Store%20Design%20%26%20Development",
      },
      {
        id: "migrations-replatforming",
        index: "02",
        name: "Migrations & Replatforming",
        title: "Move to Shopify with a controlled cutover plan.",
        bestFor:
          "Businesses moving from another ecommerce platform to Shopify, or changing their commerce setup.",
        boundaries:
          "Not every record, password, order or subscription can migrate unchanged. SEO continuity is risk management — ranking fluctuations cannot be ruled out. We do not promise zero downtime or guaranteed preservation of all data.",
        description:
          "We assess catalogue, content, workflows and integrations, then plan data mapping, URL redirects, important metadata, tracking and launch checks around the agreed scope. Confirm which data can move and which features need rebuilding before cutover.",
        items: [
          "Discovery and migration requirements",
          "Product, customer and content mapping",
          "Supported data and functionality review",
          "URL and redirect planning",
          "Important metadata and tracking",
          "Integration dependencies",
          "Testing and launch checks",
          "Postlaunch validation",
        ],
        cta: "Discuss a migration",
        href: "/contact?service=shopify&capability=Migrations%20%26%20Replatforming",
      },
      {
        id: "apps-integrations",
        index: "03",
        name: "App Development & System Integrations",
        title: "Functionality and connections that match real operations.",
        bestFor:
          "Stores whose workflows need more than native Shopify features or existing apps provide.",
        boundaries:
          "Native features and maintainable tools may be preferable when they solve the need. Custom apps do not eliminate every ongoing cost — hosting, access, third-party fees and maintenance stay in scope discussions.",
        description:
          "We evaluate the requirement before recommending a custom app, integration or middleware. The aim is to connect the store with your business systems and reduce avoidable manual work — not to build custom software by default.",
        items: [
          "Requirement review vs native features and existing apps",
          "Custom Shopify apps where justified",
          "Storefront functionality",
          "ERP, CRM, fulfilment or inventory connections where supported",
          "APIs, webhooks and data flows",
          "Error handling and monitoring where scoped",
          "Maintenance and dependency planning",
        ],
        cta: "Discuss apps & integrations",
        href: "/contact?service=shopify&capability=App%20Development%20%26%20System%20Integrations",
      },
      {
        id: "headless-b2b",
        index: "04",
        name: "Headless Commerce & Enterprise B2B",
        title: "Architecture for requirements that justify the complexity.",
        bestFor:
          "Teams with advanced storefront, wholesale/B2B or content needs that a conventional theme cannot support well.",
        boundaries:
          "Headless adds cost, complexity and maintenance load. It is not an automatic performance or conversion guarantee. Plan-dependent Shopify features and integrations need feasibility checks. Shopify Plus may matter for some project scopes — it is not a separate service group.",
        description:
          "We assess whether a conventional Shopify theme, supported B2B features or a headless architecture best fits your goals, operating model and maintenance capacity — then plan only when requirements justify the work.",
        items: [
          "Theme vs headless trade-off assessment",
          "Headless feasibility and architecture",
          "Custom storefront development where justified",
          "Wholesale and B2B buying workflows",
          "Enterprise integrations",
          "Complex content or commerce experiences",
          "Plan-dependent limitation checks",
        ],
        cta: "Discuss headless or B2B",
        href: "/contact?service=shopify&capability=Headless%20Commerce%20%26%20Enterprise%20B2B",
      },
      {
        id: "ongoing-support",
        index: "05",
        name: "Retainers & Ongoing Support",
        title: "Continued Shopify development after launch.",
        bestFor:
          "Ecommerce teams that need a prioritized backlog of theme changes, fixes, features, integrations and performance or UX work.",
        boundaries:
          "Included work, exclusions, capacity and communication are agreed. We do not invent monthly hours, prices, 24/7 coverage, SLAs, response times or unlimited tasks.",
        description:
          "Agree a prioritized backlog covering theme changes, bug fixes, new features, integrations and performance or UX improvements, with clear release checks and communication. Ongoing support is optional — not required to keep agreed custom work after handover.",
        items: [
          "Request and prioritization process",
          "Development backlog",
          "Theme changes and bug fixes",
          "Feature and integration improvements",
          "Performance and UX work",
          "Release checks and communication",
        ],
        cta: "Discuss ongoing support",
        href: "/contact?service=shopify&capability=Retainers%20%26%20Ongoing%20Support",
      },
    ],
    closingTitle: "Not sure which service fits?",
    closingBody:
      "Describe the store and the outcome you want. We will suggest a practical starting point.",
    ctaLabel: "Discuss your Shopify store",
    ctaHref: "/contact?service=shopify&capability=Not%20sure%20yet",
  },

  deliveryProcess: {
    eyebrow: "How we work",
    headline: "How your Shopify project moves from scope to launch",
    intro: [
      "Timelines depend on the agreed scope. A focused improvement is not the same engagement as a redesign, migration, app or headless build.",
    ],
    steps: [
      {
        id: "understand",
        index: "01",
        shortName: "Understand",
        name: "Understand the Store",
        title: "Review goals, setup, journey and relevant data.",
        description:
          "We look at the business goals, existing Shopify setup, customer journey and the data you can share before recommending an approach.",
        itemsLabel: "What we review",
        items: [
          "Business goals",
          "Current storefront and theme",
          "Customer journey friction",
          "Relevant analytics or reports",
          "Apps and integrations in use",
        ],
        outcome: "A shared understanding of the problem to solve.",
      },
      {
        id: "scope",
        index: "02",
        shortName: "Scope",
        name: "Define the Scope",
        title: "Agree approach, deliverables, responsibilities and milestones.",
        description:
          "Deliverables, dependencies and cost are agreed before build so both sides know what is in and out of the engagement.",
        itemsLabel: "What we agree",
        items: [
          "Approach and deliverables",
          "Responsibilities",
          "Dependencies",
          "Milestones",
          "Cost before build",
        ],
        outcome: "A written scope you can decide on before development starts.",
      },
      {
        id: "build",
        index: "03",
        shortName: "Build",
        name: "Design and Build",
        title: "Complete the agreed work with clear progress reviews.",
        description:
          "We design and develop the scoped work and share progress at defined review points so feedback arrives while changes are still practical.",
        itemsLabel: "What happens",
        items: [
          "Agreed design and development",
          "Scheduled reviews",
          "Course corrections within scope",
        ],
        outcome: "Progress you can see against the agreed deliverables.",
      },
      {
        id: "launch",
        index: "04",
        shortName: "Launch",
        name: "Test and Launch",
        title: "Validate flows, performance, integrations and launch requirements.",
        description:
          "We test relevant storefront flows and launch requirements. Staging and approved launch procedures are used where they reflect the engagement.",
        itemsLabel: "What we validate",
        items: [
          "Critical purchase flows",
          "Integrations in scope",
          "Performance checks in scope",
          "Launch requirements",
        ],
        outcome: "A launch plan matched to the agreed work.",
      },
      {
        id: "handover",
        index: "05",
        shortName: "Handover",
        name: "Handover and Support",
        title: "Access, documentation and optional ongoing support.",
        description:
          "You receive the agreed access and documentation. Ongoing support is optional and scoped separately. Shopify and third-party platforms keep their own licensing.",
        itemsLabel: "What you receive",
        items: [
          "Agreed access and handover",
          "Documentation in scope",
          "Optional support options explained",
        ],
        outcome: "Practical ownership of the agreed custom work.",
      },
    ],
    closingTitle: "Already running on Shopify?",
    closingBody:
      "Start with the problem. We will help identify whether the next step is a focused improvement, redesign, migration, integration or ongoing support.",
    ctaLabel: "Discuss your store",
    ctaHref: "/contact?service=shopify",
  },

  why: {
    eyebrow: "Why Buildaze",
    headline: "Why work with Buildaze",
    intro: [
      "Practical reasons tied to how we work — not a second capability list or unsupported ranking claims.",
    ],
    differentiators: [
      {
        id: "problem-first",
        index: "01",
        name: "Problem-first recommendations",
        summary: "We start from the store’s actual constraint.",
        title: "Recommendations based on the store’s actual problem.",
        description:
          "We investigate what is happening — theme debt, journey friction, migration risk or missing functionality — before recommending a rebuild, custom work or a smaller change.",
        panelStatement:
          "The first job is to understand the constraint — not to sell a preset package.",
        panelNote: "Scoped recommendations after we understand the store.",
      },
      {
        id: "ux-dev",
        index: "02",
        name: "UX and development together",
        summary: "Buying experience and build stay connected.",
        title: "UX and development considered together.",
        description:
          "Storefront structure, mobile UX and technical implementation are discussed as one system so changes stay maintainable and usable.",
        panelStatement:
          "A cleaner theme means little if customers still struggle to buy.",
        panelNote: "Experience and engineering in the same conversation.",
      },
      {
        id: "clear-scope",
        index: "03",
        name: "Clear scope and communication",
        summary: "Deliverables and milestones before build.",
        title: "Clear scope and communication.",
        description:
          "Deliverables, responsibilities and milestones are agreed before development. Progress is shared at defined review points.",
        panelStatement:
          "You should know what is in scope before work starts.",
        panelNote: "Written scope. Defined reviews.",
      },
      {
        id: "handover",
        index: "04",
        name: "Maintainable handover",
        summary: "Agreed work and access you can keep using.",
        title: "Maintainable work and practical handover.",
        description:
          "You receive the agreed custom work, documentation and access. Ongoing support is optional — not required to keep what we delivered.",
        panelStatement:
          "Handover should leave your team able to operate the storefront.",
        panelNote: "Optional support. No invented lock-in.",
      },
    ],
    closingTitle: "Ready to describe the store?",
    closingBody:
      "Share the problem and the outcome you want. We will suggest the next step.",
    pillars: ["Scope", "UX", "Development", "Handover"],
    closingNote: "One Shopify-focused engagement at a time.",
    ctaLabel: "Discuss your Shopify store",
    ctaHref: "/contact?service=shopify",
  },

  overviewTitle: "What Shopify services include",
  overview: [
    "Shopify work covers storefront design and development, migrations, apps and integrations, headless or B2B architecture when justified, and optional ongoing support.",
    "CRO, performance, SEO preservation and analytics are applied inside those services where they support the engagement — not as guaranteed growth outcomes.",
  ],
  solutionsTitle: "Shopify service groups",
  solutions: [
    "Store Design & Development",
    "Migrations & Replatforming",
    "App Development & System Integrations",
    "Headless Commerce & Enterprise B2B",
    "Retainers & Ongoing Support",
  ],
  deliverables: [
    "Scoped storefront, migration or integration deliverables",
    "Testing and launch support within scope",
    "Documentation and access handover for agreed custom work",
    "Optional ongoing support scoped separately",
  ],
  included: [
    "Discovery and scoping",
    "Agreed design and development",
    "Launch approach matched to the engagement",
    "Practical handover",
  ],
  stackTags: ["Shopify", "Liquid", "Shopify APIs", "Theme development"],
  process: [
    {
      index: "01",
      name: "Understand",
      duration: "Scoped",
      description:
        "Review goals, current setup and the problem before recommending an approach.",
    },
    {
      index: "02",
      name: "Define the Scope",
      duration: "Scoped",
      description:
        "Agree deliverables, responsibilities, milestones and cost before build.",
    },
    {
      index: "03",
      name: "Build and Launch",
      duration: "Scoped",
      description:
        "Complete the agreed work with reviews, testing and handover.",
    },
  ],
  relatedWorkIds: ["shopify-performance"],
  faqEyebrow: "Shopify FAQs",
  faqHeadline: "Shopify development questions",
  faqIntro: [
    "Practical answers about themes, cost, migrations, apps, headless, support and what happens after you contact us.",
  ],
  faqs: [
    {
      question: "Can you improve our existing Shopify theme?",
      answer:
        "Yes. Many engagements improve an existing theme when a full rebuild is unnecessary. We review the theme, apps and constraints first, then recommend the lightest approach that solves the problem.",
    },
    {
      question: "What affects project cost and timeline?",
      answer:
        "After we understand the problem and constraints, we define deliverables, responsibilities and milestones. Cost and schedule follow that agreed scope — there is no universal price or timeline for every Shopify project.",
    },
    {
      question: "Can you migrate our store while reducing SEO risk?",
      answer:
        "We plan URL mapping, redirects, important metadata, tracking and launch checks as part of a controlled migration. Careful planning reduces avoidable SEO risk, but ranking fluctuations cannot be ruled out and not every record or feature can always move unchanged.",
    },
    {
      question: "When do we need a custom Shopify app?",
      answer:
        "When native Shopify features or existing apps cannot support the workflow reliably. We evaluate the operational need first and will recommend a simpler approach when it is enough. Custom apps also bring hosting, access and maintenance considerations.",
    },
    {
      question: "Do we need headless Shopify or Shopify Plus?",
      answer:
        "Only when requirements justify the complexity, plan features and maintenance load. A conventional theme is often the clearer path. Shopify Plus can matter for some project scopes, but it is not a separate service group and is not required for every store. Headless is not an automatic performance or conversion upgrade.",
    },
    {
      question: "What does ongoing support include?",
      answer:
        "Agreed ongoing support typically covers a prioritized backlog of theme changes, fixes, features, integrations and performance or UX work, with release checks and communication. Included capacity and exclusions are defined in the retainer scope — we do not invent hours, SLAs or unlimited tasks.",
    },
    {
      question: "Can you improve our store’s conversion journey?",
      answer:
        "Yes, as part of Store Design & Development or ongoing support. We review product discovery, product pages, mobile UX, cart behavior and measurable friction, then prioritize changes. Conversion outcomes also depend on traffic, offer and creative — we do not promise a specific lift.",
    },
    {
      question: "What happens after we contact Buildaze?",
      answer:
        "We review your store context and enquiry, identify a practical starting point, and reply with the next step. If there is a fit, we define scope before any build begins. Contacting us does not create a guaranteed timeline or commitment until scope is agreed.",
    },
  ],
  faqClosingTitle: "Still have a question?",
  faqClosingBody:
    "Include it in the enquiry form and we will answer in context of your store.",
  faqCtaLabel: "Ask about your store",
  faqCtaHref: "/contact?service=shopify",
};
