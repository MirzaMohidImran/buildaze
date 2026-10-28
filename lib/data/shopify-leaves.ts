import { buildContactHref } from "../contact/paths";
import type { Service, ServicePageContent } from "./services";
import { shopifyPriorityLeaves } from "./shopify-priority-leaves";

const HUB = "/shopify-growth-agency";

function enquiry(capability: string, problem?: string) {
  return buildContactHref({ service: "shopify", capability, problem });
}

function base(
  partial: Omit<ServicePageContent, "relatedWorkIds"> & {
    relatedWorkIds?: string[];
  },
): ServicePageContent {
  return { ...partial, relatedWorkIds: partial.relatedWorkIds ?? [] };
}

const storePath = `${HUB}/store-design-development`;
const migrationPath = `${HUB}/migrations`;
const appsPath = `${HUB}/apps-integrations`;
const headlessPath = `${HUB}/headless-b2b`;
const supportPath = `${HUB}/ongoing-support`;
const performancePath = `${HUB}/performance`;

/**
 * Shopify specialist destinations under `/shopify-growth-agency/*`.
 * Distinct buyer intents with delivery evidence from the Shopify hub and case studies.
 * Candidate keyword targets — volumes/difficulty unverified.
 * Priority CRO / Checkout / Shopify SEO leaves are appended from shopify-priority-leaves.
 */
const shopifyCoreLeaves: Service[] = [
  {
    id: "shopify-store-design",
    slug: "store-design-development",
    path: storePath,
    role: "detail",
    index: "01",
    name: "Shopify Store Design & Development",
    shortName: "Store Design",
    oneLiner:
      "Launch or redesign a Shopify storefront around products, brand and buying journeys.",
    description:
      "Shopify store design, theme development and redesign scoped around catalogue structure, product discovery and conversion clarity.",
    capabilities: [
      "New store launches",
      "Storefront redesign",
      "Theme customization",
      "Mobile UX improvements",
    ],
    flow: ["Brief", "Design", "Build", "Launch"],
    cta: "Discuss store design",
    relatedServiceIds: [
      "shopify",
      "shopify-performance",
      "shopify-cro",
      "shopify-checkout",
      "shopify-migrations",
      "shopify-support",
      "ecommerce",
    ],
    page: base({
      metaTitle: "Shopify Store Design & Development | Buildaze",
      metaDescription:
        "Launch or redesign a Shopify storefront around catalogue structure, product discovery and mobile buying clarity.",
      eyebrow: "Shopify storefronts",
      headline: "Shopify store design built around how customers buy.",
      subheadline:
        "Whether you are launching on Shopify or improving an existing theme, we scope design and development around product discovery, mobile clarity and a practical handover — not a template swap without a plan. Journey-wide CRO and checkout diagnosis have their own specialist pages.",
      ctaLabel: "Discuss Your Shopify Store",
      secondaryCtaLabel: "Back to Shopify services",
      problems: {
        eyebrow: "Common storefront needs",
        headline: "When the storefront is the product",
        intro: [
          "Use this service when the priority is the Shopify Online Store experience — launch, redesign, theme work or mobile shopping clarity.",
        ],
        problems: [
          {
            id: "launch",
            index: "01",
            name: "Launching a new Shopify store",
            title: "A storefront designed around brand, products and purchase flow.",
            description:
              "Scope theme structure, collections, product templates and launch checks before build.",
            enquiryHref: enquiry(
              "Store Design & Development",
              "Launching a new Shopify store",
            ),
          },
          {
            id: "redesign",
            index: "02",
            name: "The store no longer reflects the business",
            title: "A focused redesign of what customers see and use.",
            description:
              "Keep what still works, replace what holds the brand back, and prioritize measurable journey friction.",
            enquiryHref: enquiry(
              "Store Design & Development",
              "Storefront redesign",
            ),
          },
          {
            id: "friction",
            index: "03",
            name: "Visitors struggle to find products or buy",
            title: "Clearer discovery, product pages and cart behaviour.",
            description:
              "Investigate navigation, PDP clarity and mobile UX. Conversion outcomes depend on traffic and offer — no guaranteed lift.",
            enquiryHref: enquiry(
              "Store Design & Development",
              "Purchase journey friction",
            ),
          },
          {
            id: "theme",
            index: "04",
            name: "Theme debt is slowing every change",
            title: "Maintainable theme architecture for ongoing work.",
            description:
              "Clean sections, app impact and front-end structure so future changes are safer.",
            enquiryHref: enquiry(
              "Store Design & Development",
              "Theme debt and maintainability",
            ),
          },
        ],
        closingTitle: "Need migration or apps instead?",
        closingBody:
          "Platform moves belong on Shopify Migrations. Custom apps and ERP/CRM connections belong on Apps & Integrations.",
        ctaLabel: "Discuss store design",
        ctaHref: enquiry("Store Design & Development"),
      },
      overviewTitle: "What Shopify store design and development covers",
      overview: [
        "This page owns Shopify Online Store design and theme development — new launches, redesigns, section work, mobile UX and conversion-focused storefront improvements.",
        "Performance engineering with a documented lab case study has its own destination. Migrations, custom apps and headless/B2B architecture are separate when that is the primary need.",
        "You receive agreed theme work, documentation and access. Shopify and third-party apps keep their own licensing.",
      ],
      solutionsTitle: "Storefront work we deliver",
      solutions: [
        "New Shopify store launches",
        "Existing-store redesign",
        "Custom Liquid sections and templates",
        "Collection and product-page improvements",
        "Mobile shopping UX improvements",
        "Conversion friction reviews inside development scope",
      ],
      deliverables: [
        "Scoped storefront design and theme implementation",
        "Responsive product, collection and content templates in scope",
        "Launch checks for critical shopping paths",
        "Handover notes for content and theme ownership",
      ],
      included: [
        "Discovery around catalogue and buying journeys",
        "Theme or section implementation in agreed scope",
        "QA on key desktop and mobile paths",
        "Practical handover of agreed custom work",
      ],
      stackTags: ["Shopify", "Online Store 2.0", "Liquid", "Theme architecture"],
      process: [
        {
          index: "01",
          name: "Discover",
          duration: "Scoped",
          description:
            "Understand brand, catalogue, current theme debt and priority journeys.",
        },
        {
          index: "02",
          name: "Design & plan",
          duration: "Scoped",
          description:
            "Agree templates, sections and acceptance criteria before full build.",
        },
        {
          index: "03",
          name: "Build & review",
          duration: "Scoped",
          description:
            "Implement with progress reviews so merchandising and brand stay aligned.",
        },
        {
          index: "04",
          name: "Launch & hand over",
          duration: "Scoped",
          description:
            "Validate critical flows and hand over access plus documentation.",
        },
      ],
      relatedWorkIds: ["shopify-performance"],
      faqs: [
        {
          question: "Is redesign a separate service from store development?",
          answer:
            "Redesign is part of Store Design & Development. A focused visual refresh and a full storefront rebuild differ in scope, but they share the same destination so buyers are not split across near-identical pages.",
        },
        {
          question: "Do you promise a conversion-rate lift?",
          answer:
            "No. We investigate product discovery, product pages, mobile UX and cart friction, then prioritize changes. Outcomes also depend on traffic, offer and creative.",
        },
        {
          question: "How is this different from the ecommerce development page?",
          answer:
            "Ecommerce Development covers multi-platform store work. This page is Shopify-specific storefront design and theme development.",
        },
      ],
      faqEyebrow: "Store design FAQs",
      faqHeadline: "Practical questions about Shopify storefront work",
      faqCtaLabel: "Discuss Your Shopify Store",
      faqCtaHref: enquiry("Store Design & Development"),
    }),
  },
  {
    id: "shopify-migrations",
    slug: "migrations",
    path: migrationPath,
    role: "detail",
    index: "02",
    name: "Shopify Migrations",
    shortName: "Migrations",
    oneLiner:
      "Plan data, URLs, redirects and launch checks when moving a store to Shopify.",
    description:
      "Shopify migration and replatforming with catalogue mapping, URL redirects, content transfer and launch verification.",
    capabilities: [
      "Platform migration planning",
      "URL and redirect mapping",
      "Catalogue and content transfer",
      "Launch verification",
    ],
    flow: ["Assess", "Map", "Migrate", "Verify"],
    cta: "Discuss a migration",
    relatedServiceIds: [
      "shopify",
      "shopify-store-design",
      "shopify-apps",
      "ecommerce",
    ],
    page: base({
      metaTitle: "Shopify Migration Services | Buildaze",
      metaDescription:
        "Migrate to Shopify with Buildaze. Plan catalogue mapping, URL redirects, content transfer and launch checks around your real store data.",
      eyebrow: "Replatforming to Shopify",
      headline: "Shopify migrations planned around data, URLs and launch risk.",
      subheadline:
        "Moving platforms is a cutover project, not a theme install. We assess what can move, what must be rebuilt and how redirects protect important URLs before launch.",
      ctaLabel: "Discuss a Migration",
      secondaryCtaLabel: "Back to Shopify services",
      problems: {
        eyebrow: "Migration starting points",
        headline: "When the platform change is the project",
        intro: [
          "Use this service when the primary need is moving store data, content and URLs onto Shopify with controlled launch checks.",
        ],
        problems: [
          {
            id: "platform",
            index: "01",
            name: "Leaving WooCommerce, Magento or another platform",
            title: "A migration plan before the cutover date.",
            description:
              "Map products, customers, orders, content and integrations that must survive the move.",
            enquiryHref: enquiry(
              "Migrations & Replatforming",
              "Platform migration to Shopify",
            ),
          },
          {
            id: "seo",
            index: "02",
            name: "Ranking URLs must not break",
            title: "URL mapping and redirects in the plan.",
            description:
              "Preserve important paths where possible and redirect changed ones. Rankings can still fluctuate.",
            enquiryHref: enquiry(
              "Migrations & Replatforming",
              "URL and SEO preservation",
            ),
          },
          {
            id: "ops",
            index: "03",
            name: "Operations depend on apps and workflows",
            title: "Integrations reviewed before go-live.",
            description:
              "Confirm which apps and workflows can be replaced, rebuilt or deferred.",
            enquiryHref: enquiry(
              "Migrations & Replatforming",
              "Operations and integrations during migration",
            ),
          },
        ],
        closingTitle: "Need a redesign after migration?",
        closingBody:
          "Storefront redesign and theme work sit on Store Design & Development. Custom apps sit on Apps & Integrations.",
        ctaLabel: "Discuss migration",
        ctaHref: enquiry("Migrations & Replatforming"),
      },
      overviewTitle: "What a Shopify migration includes",
      overview: [
        "We assess catalogue, content, workflows and integrations, then plan data mapping, URL redirects, important metadata, tracking and launch checks around the agreed scope.",
        "Not every record or feature can always move unchanged. Confirm which data can move and which features need rebuilding before cutover.",
        "Careful planning reduces avoidable SEO risk, but ranking fluctuations cannot be ruled out.",
      ],
      solutionsTitle: "Migration focus areas",
      solutions: [
        "Discovery and migration requirements",
        "Catalogue and content mapping",
        "URL redirects and important metadata",
        "Tracking and analytics checks",
        "Launch and post-launch verification",
      ],
      deliverables: [
        "Migration requirements and risk notes",
        "Data and URL mapping for agreed entities",
        "Redirect plan for changed paths",
        "Launch checklist and verification support in scope",
      ],
      included: [
        "Source-platform assessment",
        "Scoped migration plan",
        "Cutover support within agreed windows",
        "Handover of mapping notes",
      ],
      stackTags: ["Shopify", "Migrations", "Redirects", "Catalogue data"],
      process: [
        {
          index: "01",
          name: "Assess",
          duration: "Scoped",
          description: "Inventory data, URLs, apps and operational must-haves.",
        },
        {
          index: "02",
          name: "Map",
          duration: "Scoped",
          description: "Define entity mapping, redirects and rebuild decisions.",
        },
        {
          index: "03",
          name: "Migrate",
          duration: "Scoped",
          description: "Transfer agreed data and configure the Shopify storefront baseline.",
        },
        {
          index: "04",
          name: "Verify",
          duration: "Scoped",
          description: "Test critical paths, redirects and tracking before and after cutover.",
        },
      ],
      relatedWorkIds: ["shopify-performance"],
      faqs: [
        {
          question: "Can you guarantee SEO rankings after migration?",
          answer:
            "No. We plan URL mapping, redirects, important metadata and crawl checks to reduce avoidable risk. Rankings can still change after a platform move.",
        },
        {
          question: "Do you migrate every historical order and customer?",
          answer:
            "Scope decides what moves. Some historical records or custom features are better archived or rebuilt than forced into an imperfect import.",
        },
        {
          question: "Is theme redesign included in migration?",
          answer:
            "A baseline storefront is part of getting Shopify live. A full brand redesign is scoped under Store Design & Development when that is a separate goal.",
        },
      ],
      faqEyebrow: "Migration FAQs",
      faqHeadline: "Questions teams ask before a Shopify cutover",
      faqCtaLabel: "Discuss a Migration",
      faqCtaHref: enquiry("Migrations & Replatforming"),
    }),
  },
  {
    id: "shopify-apps",
    slug: "apps-integrations",
    path: appsPath,
    role: "detail",
    index: "03",
    name: "Shopify Apps & Integrations",
    shortName: "Apps",
    oneLiner:
      "Custom Shopify apps, Admin/Storefront API work and system integrations.",
    description:
      "Shopify app development and integrations with ERP, CRM, fulfilment and other operational systems.",
    capabilities: [
      "Custom Shopify apps",
      "Admin and Storefront API",
      "Webhooks and automations",
      "ERP/CRM connections",
    ],
    flow: ["Need", "Design", "Build", "Operate"],
    cta: "Discuss apps & integrations",
    relatedServiceIds: [
      "shopify",
      "shopify-store-design",
      "shopify-headless",
      "shopify-support",
    ],
    page: base({
      metaTitle: "Shopify Apps & Integrations | Buildaze",
      metaDescription:
        "Build custom Shopify apps and system integrations with Buildaze. APIs, webhooks and operational connections scoped around real workflows.",
      eyebrow: "Custom apps and systems",
      headline: "Shopify apps and integrations that support how you operate.",
      subheadline:
        "When native features or existing apps cannot support the workflow reliably, we evaluate the operational need first — then build only when a simpler approach is not enough.",
      ctaLabel: "Discuss Apps & Integrations",
      secondaryCtaLabel: "Back to Shopify services",
      problems: {
        eyebrow: "Integration starting points",
        headline: "When the storefront is not the whole system",
        intro: [
          "Use this service for custom apps, Admin or Storefront API work, webhooks and connections to ERP, CRM, fulfilment or inventory systems.",
        ],
        problems: [
          {
            id: "gap",
            index: "01",
            name: "An app or native feature cannot support the workflow",
            title: "Custom functionality scoped to the operational gap.",
            description:
              "Define the job to be done, access model and maintenance before writing code.",
            enquiryHref: enquiry(
              "App Development & System Integrations",
              "Custom Shopify functionality",
            ),
          },
          {
            id: "systems",
            index: "02",
            name: "Shopify must talk to ERP, CRM or fulfilment",
            title: "System integrations with clear ownership.",
            description:
              "Map data direction, failure handling and who maintains each side after launch.",
            enquiryHref: enquiry(
              "App Development & System Integrations",
              "ERP CRM or fulfilment integration",
            ),
          },
          {
            id: "ops",
            index: "03",
            name: "Manual ops work does not scale",
            title: "Automations and webhooks with visible exceptions.",
            description:
              "Automate agreed steps without silent failures or unrestricted write access.",
            enquiryHref: enquiry(
              "App Development & System Integrations",
              "Shopify operational automation",
            ),
          },
        ],
        closingTitle: "Need headless or B2B architecture?",
        closingBody:
          "Advanced storefront architecture and wholesale/B2B plan features are covered on Headless & B2B.",
        ctaLabel: "Discuss apps",
        ctaHref: enquiry("App Development & System Integrations"),
      },
      overviewTitle: "What Shopify apps and integrations cover",
      overview: [
        "This page owns custom Shopify app development and system integrations — Admin API, Storefront API, webhooks and connections to operational tools where supported.",
        "Custom apps bring hosting, access and maintenance considerations. We evaluate the operational need first and recommend a simpler approach when it is enough.",
        "You receive agreed custom work, documentation and access. Shopify and third-party platforms keep their own terms.",
      ],
      solutionsTitle: "Integration work we deliver",
      solutions: [
        "Custom Shopify apps",
        "Admin and Storefront API integrations",
        "Webhook-driven automations",
        "ERP, CRM, fulfilment or inventory connections where supported",
        "Operational tooling inside agreed permissions",
      ],
      deliverables: [
        "Scoped app or integration design",
        "Implemented API workflows in scope",
        "Exception handling and access notes as agreed",
        "Handover documentation for operating the custom work",
      ],
      included: [
        "Workflow and access discovery",
        "Build against agreed APIs and permissions",
        "Basic failure handling in scope",
        "Practical ownership notes",
      ],
      stackTags: [
        "Shopify Admin API",
        "Storefront API",
        "Webhooks",
        "Custom apps",
      ],
      process: [
        {
          index: "01",
          name: "Define need",
          duration: "Scoped",
          description: "Confirm the operational gap and whether an app is justified.",
        },
        {
          index: "02",
          name: "Design",
          duration: "Scoped",
          description: "Agree data flows, permissions, hosting and failure paths.",
        },
        {
          index: "03",
          name: "Build",
          duration: "Scoped",
          description: "Implement and test against representative cases.",
        },
        {
          index: "04",
          name: "Hand over",
          duration: "Scoped",
          description: "Document access, limits and operating ownership.",
        },
      ],
      relatedWorkIds: ["catalog-intelligence"],
      faqs: [
        {
          question: "When do you recommend a custom app?",
          answer:
            "When native Shopify features or existing apps cannot support the workflow reliably. We evaluate the need first and recommend a simpler approach when it is enough.",
        },
        {
          question: "Do you maintain the app after launch?",
          answer:
            "Ongoing maintenance can be scoped separately under Ongoing Support. Handover includes agreed access and documentation either way.",
        },
        {
          question: "Can every ERP or CRM be connected?",
          answer:
            "Only where APIs, permissions and commercial access allow it. Feasibility is confirmed during scoping — not assumed from a vendor logo list.",
        },
      ],
      faqEyebrow: "Apps FAQs",
      faqHeadline: "Questions about Shopify custom development",
      faqCtaLabel: "Discuss Apps & Integrations",
      faqCtaHref: enquiry("App Development & System Integrations"),
    }),
  },
  {
    id: "shopify-headless",
    slug: "headless-b2b",
    path: headlessPath,
    role: "detail",
    index: "04",
    name: "Shopify Headless & B2B",
    shortName: "Headless / B2B",
    oneLiner:
      "Headless storefronts and B2B commerce when requirements justify the complexity.",
    description:
      "Headless Shopify architecture and B2B/wholesale commerce planning when a conventional theme is not enough.",
    capabilities: [
      "Headless architecture assessment",
      "B2B / wholesale requirements",
      "Plan-dependent features",
      "Enterprise integrations",
    ],
    flow: ["Assess", "Decide", "Build", "Operate"],
    cta: "Discuss headless or B2B",
    relatedServiceIds: [
      "shopify",
      "shopify-apps",
      "shopify-store-design",
      "web",
    ],
    page: base({
      metaTitle: "Shopify Headless & B2B Commerce | Buildaze",
      metaDescription:
        "Evaluate headless Shopify or B2B commerce with Buildaze. Architecture decisions, plan-dependent features and maintenance load before you commit.",
      eyebrow: "Advanced commerce architecture",
      headline: "Shopify headless and B2B when requirements justify it.",
      subheadline:
        "Headless adds cost, complexity and maintenance load. It is not an automatic performance or conversion guarantee. We assess whether a conventional theme, supported B2B features or a headless architecture best fits your goals.",
      ctaLabel: "Discuss Headless or B2B",
      secondaryCtaLabel: "Back to Shopify services",
      problems: {
        eyebrow: "Advanced commerce needs",
        headline: "When a conventional theme may not be enough",
        intro: [
          "Use this page for headless storefronts, wholesale/B2B requirements and plan-dependent architecture decisions — not for a standard theme launch.",
        ],
        problems: [
          {
            id: "experience",
            index: "01",
            name: "The storefront experience cannot be delivered in a theme",
            title: "Architecture matched to the product experience.",
            description:
              "Assess whether Hydrogen/headless complexity is justified versus theme customization.",
            enquiryHref: enquiry(
              "Headless Commerce & Enterprise B2B",
              "Headless storefront requirements",
            ),
          },
          {
            id: "b2b",
            index: "02",
            name: "Wholesale or B2B buying rules are required",
            title: "B2B features planned against real buyer rules.",
            description:
              "Company accounts, catalogues and pricing rules depend on Shopify plan capabilities and custom work.",
            enquiryHref: enquiry(
              "Headless Commerce & Enterprise B2B",
              "B2B or wholesale commerce",
            ),
          },
          {
            id: "enterprise",
            index: "03",
            name: "Enterprise systems must stay in the loop",
            title: "Integrations designed with architecture choices.",
            description:
              "Headless and B2B projects often depend on ERP/CRM connections scoped with Apps & Integrations.",
            enquiryHref: enquiry(
              "Headless Commerce & Enterprise B2B",
              "Enterprise integrations with headless or B2B",
            ),
          },
        ],
        closingTitle: "Not sure you need headless?",
        closingBody:
          "Many stores are better served by Store Design & Development on a conventional theme. We will say so when that is the clearer path.",
        ctaLabel: "Discuss architecture",
        ctaHref: enquiry("Headless Commerce & Enterprise B2B"),
      },
      overviewTitle: "What headless and B2B work covers",
      overview: [
        "We assess whether a conventional Shopify theme, supported B2B features or a headless architecture best fits your goals, operating model and maintenance capacity — then plan only when requirements justify the work.",
        "Shopify Plus may matter for some project scopes. It is not a separate service group and is not required for every store.",
        "Headless is not an automatic performance or conversion upgrade.",
      ],
      solutionsTitle: "Architecture decisions we support",
      solutions: [
        "Headless feasibility assessment",
        "B2B / wholesale requirement mapping",
        "Plan-dependent feature checks",
        "Front-end architecture planning",
        "Enterprise integration boundaries",
      ],
      deliverables: [
        "Architecture recommendation with trade-offs",
        "Scoped build plan when headless or B2B proceeds",
        "Implementation of agreed surfaces and rules",
        "Operating and maintenance notes",
      ],
      included: [
        "Requirements and plan-capability review",
        "Architecture decision record",
        "Build for approved scope",
        "Handover documentation",
      ],
      stackTags: [
        "Shopify",
        "Headless",
        "Hydrogen (when justified)",
        "B2B commerce",
      ],
      process: [
        {
          index: "01",
          name: "Assess",
          duration: "Scoped",
          description: "Capture experience, B2B rules and maintenance constraints.",
        },
        {
          index: "02",
          name: "Decide",
          duration: "Scoped",
          description: "Choose theme, B2B features or headless with explicit trade-offs.",
        },
        {
          index: "03",
          name: "Build",
          duration: "Scoped",
          description: "Implement only the approved architecture scope.",
        },
        {
          index: "04",
          name: "Operate",
          duration: "Scoped",
          description: "Hand over ownership notes and optional support options.",
        },
      ],
      relatedWorkIds: ["catalog-intelligence"],
      faqs: [
        {
          question: "Do I need Shopify Plus for every advanced project?",
          answer:
            "No. Shopify Plus can matter for some scopes, but it is not required for every store and is not sold here as a separate service label.",
        },
        {
          question: "Is headless faster by default?",
          answer:
            "No. Headless can enable specific experiences, but performance depends on implementation, hosting and third-party cost. It is not an automatic upgrade.",
        },
        {
          question: "Can headless and apps be the same engagement?",
          answer:
            "Often yes. Architecture and integrations are planned together when both are required, with clear ownership of each surface.",
        },
      ],
      faqEyebrow: "Headless & B2B FAQs",
      faqHeadline: "Architecture questions before you commit",
      faqCtaLabel: "Discuss Headless or B2B",
      faqCtaHref: enquiry("Headless Commerce & Enterprise B2B"),
    }),
  },
  {
    id: "shopify-support",
    slug: "ongoing-support",
    path: supportPath,
    role: "detail",
    index: "05",
    name: "Shopify Ongoing Support",
    shortName: "Support",
    oneLiner:
      "Optional retainers for prioritized Shopify theme, feature and performance work.",
    description:
      "Ongoing Shopify support with a prioritized backlog of theme changes, fixes, features and UX improvements.",
    capabilities: [
      "Prioritized backlog",
      "Theme fixes and features",
      "Release checks",
      "Optional retainer capacity",
    ],
    flow: ["Prioritize", "Build", "Review", "Release"],
    cta: "Discuss ongoing support",
    relatedServiceIds: [
      "shopify",
      "shopify-store-design",
      "shopify-apps",
      "shopify-performance",
    ],
    page: base({
      metaTitle: "Shopify Ongoing Support & Retainers | Buildaze",
      metaDescription:
        "Optional Shopify retainers with Buildaze. Prioritized theme changes, fixes, features and release checks — capacity and exclusions agreed in writing.",
      eyebrow: "Optional retainers",
      headline: "Shopify ongoing support with a clear backlog and capacity.",
      subheadline:
        "Agree a prioritized backlog covering theme changes, bug fixes, new features, integrations and performance or UX improvements. Ongoing support is optional — not required to keep agreed custom work after handover.",
      ctaLabel: "Discuss Ongoing Support",
      secondaryCtaLabel: "Back to Shopify services",
      problems: {
        eyebrow: "Support starting points",
        headline: "When the store needs continuous improvement",
        intro: [
          "Use this service when you need recurring Shopify development capacity with agreed communication — not unlimited tasks or invented SLAs.",
        ],
        problems: [
          {
            id: "backlog",
            index: "01",
            name: "A growing backlog of store improvements",
            title: "Prioritized work with visible progress.",
            description:
              "Define what ships this cycle and what waits — capacity is finite and agreed.",
            enquiryHref: enquiry(
              "Retainers & Ongoing Support",
              "Prioritized Shopify backlog",
            ),
          },
          {
            id: "fixes",
            index: "02",
            name: "Theme bugs and small features compete for attention",
            title: "Release checks around practical changes.",
            description:
              "Bundle fixes and features with QA on the paths that matter.",
            enquiryHref: enquiry(
              "Retainers & Ongoing Support",
              "Theme fixes and small features",
            ),
          },
          {
            id: "owner",
            index: "03",
            name: "No internal Shopify developer bandwidth",
            title: "External capacity without lock-in theatre.",
            description:
              "You keep ownership of agreed custom work. Support is scoped separately.",
            enquiryHref: enquiry(
              "Retainers & Ongoing Support",
              "Need Shopify development capacity",
            ),
          },
        ],
        closingTitle: "Need a defined project instead?",
        closingBody:
          "Launches, redesigns, migrations and apps can be scoped as projects. Support is for continuous prioritized work after that foundation exists.",
        ctaLabel: "Discuss support",
        ctaHref: enquiry("Retainers & Ongoing Support"),
      },
      overviewTitle: "What ongoing Shopify support includes",
      overview: [
        "Included work, exclusions, capacity and communication are agreed in writing. We do not publish invented monthly hours, prices, 24/7 coverage, SLAs, response times or unlimited tasks as universal defaults.",
        "Typical retainer work covers a prioritized backlog of theme changes, bug fixes, features, integrations and performance or UX improvements, with release checks.",
        "Ongoing support is optional after project handover.",
      ],
      solutionsTitle: "Support work we can cover",
      solutions: [
        "Theme fixes and refinements",
        "Small feature development",
        "Integration troubleshooting in scope",
        "Performance and UX improvements",
        "Release checks and communication",
      ],
      deliverables: [
        "Agreed capacity and exclusions",
        "Prioritized backlog process",
        "Completed items within the cycle",
        "Release notes for shipped work",
      ],
      included: [
        "Kickoff on priorities and access",
        "Cycle planning against capacity",
        "Implementation and QA in scope",
        "Clear communication cadence",
      ],
      stackTags: ["Shopify", "Retainers", "Theme maintenance", "Release QA"],
      process: [
        {
          index: "01",
          name: "Prioritize",
          duration: "Each cycle",
          description: "Confirm backlog order against agreed capacity.",
        },
        {
          index: "02",
          name: "Build",
          duration: "Each cycle",
          description: "Implement the agreed items for the cycle.",
        },
        {
          index: "03",
          name: "Review",
          duration: "Each cycle",
          description: "QA critical paths affected by the changes.",
        },
        {
          index: "04",
          name: "Release",
          duration: "Each cycle",
          description: "Ship with notes and update the backlog.",
        },
      ],
      relatedWorkIds: ["shopify-performance"],
      faqs: [
        {
          question: "Is a retainer required after a Shopify project?",
          answer:
            "No. Ongoing support is optional. You keep agreed custom work, documentation and access after handover.",
        },
        {
          question: "What is not included by default?",
          answer:
            "Unlimited tasks, 24/7 coverage, guaranteed response times and open-ended redesigns are not assumed. Capacity and exclusions are written into the retainer scope.",
        },
        {
          question: "Can support include performance work?",
          answer:
            "Yes, as prioritized backlog items. Larger performance engagements can also be scoped as a project — see Shopify Performance.",
        },
      ],
      faqEyebrow: "Support FAQs",
      faqHeadline: "How Shopify retainers work here",
      faqCtaLabel: "Discuss Ongoing Support",
      faqCtaHref: enquiry("Retainers & Ongoing Support"),
    }),
  },
  {
    id: "shopify-performance",
    slug: "performance",
    path: performancePath,
    role: "detail",
    index: "06",
    name: "Shopify Performance",
    shortName: "Performance",
    oneLiner:
      "Theme, asset and front-end performance work for Shopify storefronts.",
    description:
      "Shopify performance optimization focused on theme debt, assets, scripts and front-end delivery — with lab scores distinguished from field Core Web Vitals.",
    capabilities: [
      "Theme performance audits",
      "Asset and script optimization",
      "Mobile experience review",
      "Lab measurement context",
    ],
    flow: ["Audit", "Prioritize", "Optimize", "Measure"],
    cta: "Discuss performance work",
    relatedServiceIds: [
      "shopify",
      "shopify-store-design",
      "shopify-cro",
      "shopify-support",
      "dm-analytics",
    ],
    page: base({
      metaTitle: "Shopify Performance Optimization | Buildaze",
      metaDescription:
        "Theme cleanup and front-end delivery work that targets real bottlenecks — lab scores kept distinct from field CWV.",
      eyebrow: "Speed engineering",
      headline: "Shopify performance work that targets real bottlenecks.",
      subheadline:
        "We diagnose theme, app, media and rendering issues before choosing changes. Lab Lighthouse scores are useful diagnostics — they are not Core Web Vitals field claims or revenue promises.",
      ctaLabel: "Discuss Performance Work",
      secondaryCtaLabel: "Back to Shopify services",
      problems: {
        eyebrow: "Performance starting points",
        headline: "When the storefront feels slow",
        intro: [
          "Use this service when speed and front-end delivery are the primary engagement — not a full redesign, CRO programme or migration.",
        ],
        problems: [
          {
            id: "slow",
            index: "01",
            name: "Product and collection pages feel heavy",
            title: "Find theme, app and media bottlenecks first.",
            description:
              "Audit before gutting design for synthetic scores.",
            enquiryHref: enquiry(
              "Store Design & Development",
              "Slow Shopify storefront",
            ),
          },
          {
            id: "mobile",
            index: "02",
            name: "Mobile shopping suffers most",
            title: "Mobile paths reviewed with performance work.",
            description:
              "Speed gains should support shopping clarity, not only lab metrics.",
            enquiryHref: enquiry(
              "Store Design & Development",
              "Mobile Shopify performance",
            ),
          },
          {
            id: "maintain",
            index: "03",
            name: "Performance regresses after every app install",
            title: "Maintainable front-end structure.",
            description:
              "Reduce fragile debt so future changes are less costly.",
            enquiryHref: enquiry(
              "Store Design & Development",
              "Shopify performance regressions",
            ),
          },
        ],
        closingTitle: "Conversion research beyond speed?",
        closingBody:
          "Broader funnel diagnosis sits on Shopify CRO. Checkout and payment-stage issues sit on Checkout Optimization. Speed work alone is not sold as a guaranteed conversion lift.",
        ctaLabel: "Discuss performance",
        ctaHref: enquiry("Store Design & Development", "Shopify performance"),
      },
      overviewTitle: "What Shopify performance work covers",
      overview: [
        "Performance engagements focus on theme architecture cleanup, asset and script optimization, and front-end delivery improvements without stripping the brand experience.",
        "A documented Buildaze case study reports a Lighthouse Performance lab score moving from 28 to 91. That is a lab metric — not a Core Web Vitals field claim or revenue outcome. Exact tool version, device profile and test date remain owner-verified where recorded.",
        "Journey-wide CRO and checkout diagnosis are separate specialist pages when buying friction — not speed — is the primary problem.",
      ],
      solutionsTitle: "Performance work we deliver",
      solutions: [
        "Theme performance audits",
        "JavaScript and app impact review",
        "Image and asset delivery improvements",
        "Critical rendering path fixes in scope",
        "Comparable lab measurement notes",
      ],
      deliverables: [
        "Performance audit findings",
        "Prioritized optimization backlog",
        "Implemented front-end changes in scope",
        "Before/after lab notes when measured",
      ],
      included: [
        "Baseline review of key templates",
        "Scoped optimization implementation",
        "QA on critical shopping paths",
        "Measurement notes for agreed pages",
      ],
      stackTags: [
        "Shopify",
        "Theme performance",
        "Lighthouse (lab)",
        "Front-end delivery",
      ],
      process: [
        {
          index: "01",
          name: "Audit",
          duration: "Scoped",
          description: "Identify theme, app, media and rendering bottlenecks.",
        },
        {
          index: "02",
          name: "Prioritize",
          duration: "Scoped",
          description: "Choose changes that improve real shopping paths.",
        },
        {
          index: "03",
          name: "Optimize",
          duration: "Scoped",
          description: "Implement maintainable front-end and theme fixes.",
        },
        {
          index: "04",
          name: "Measure",
          duration: "Scoped",
          description:
            "Record comparable lab results where tested; distinguish field CWV separately.",
        },
      ],
      relatedWorkIds: ["shopify-performance"],
      faqs: [
        {
          question: "Is a Lighthouse score the same as Core Web Vitals?",
          answer:
            "No. Lighthouse lab scores are diagnostic. Field Core Web Vitals come from real-user data and can differ by device, network and page.",
        },
        {
          question: "Will performance work increase revenue?",
          answer:
            "Faster pages can support conversion confidence, but revenue depends on traffic, offer, UX and merchandising. Lab scores alone are not treated as revenue proof.",
        },
        {
          question: "Can performance be part of ongoing support?",
          answer:
            "Yes. Smaller improvements can sit in a retainer backlog. Larger remediation can be a dedicated project.",
        },
      ],
      faqEyebrow: "Performance FAQs",
      faqHeadline: "How we talk about Shopify speed honestly",
      faqCtaLabel: "Discuss Performance Work",
      faqCtaHref: enquiry("Store Design & Development", "Shopify performance"),
    }),
  },
];

export const shopifyLeaves: Service[] = [
  ...shopifyCoreLeaves,
  ...shopifyPriorityLeaves,
];

export const SHOPIFY_LEAF_IDS = shopifyLeaves.map((s) => s.id);
