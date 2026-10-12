import { buildContactHref } from "../contact/paths";
import type { ServicePageContent } from "./services";

function enquiry(service: string, problem?: string) {
  return buildContactHref({ service, problem });
}

/**
 * Development overview body for `/services/development`.
 * Copy direction from Buildaze Development SEO research (12 Oct 2026).
 * Specialist commercial intents remain on Web, SaaS, Ecommerce and Shopify routes.
 */
export const developmentPageContent: ServicePageContent = {
  metaTitle: "Web, App & Software Development Services | Buildaze",
  metaDescription:
    "Buildaze develops websites, mobile apps, ecommerce platforms and custom business software. Discuss your dashboard, web application or management system.",
  eyebrow: "Websites, applications and business systems",
  headline: "Web, app and software development around your business.",
  subheadline:
    "Buildaze provides web, app and custom software development for businesses launching something new or improving an existing system. We scope websites, ecommerce platforms, dashboards, web applications and management systems around your users, workflows and goals.",
  ctaLabel: "Discuss Your Development Project",
  secondaryCtaLabel: "View Development Work",

  problems: {
    eyebrow: "Starting points",
    headline: "What does your current setup need to do better?",
    intro: [
      "You do not need to choose the technology first. Tell us what needs to work differently and we will discuss the suitable starting point.",
    ],
    problems: [
      {
        id: "outdated-website",
        index: "01",
        name: "Website no longer explains the business",
        title: "A clearer site that helps visitors find the next step.",
        description:
          "We review what still works and what is holding the brand back, then scope focused website improvements — not an automatic full replacement of every page.",
        serviceLabel: "Web Development",
        enquiryHref: enquiry(
          "Web Development",
          "Website no longer explains the business",
        ),
      },
      {
        id: "mobile-app",
        index: "02",
        name: "Customers or staff need a mobile experience",
        title: "A mobile application scoped to the journeys that matter.",
        description:
          "We define key journeys, supported platforms and backend requirements before development. Store approval and universal device compatibility are never guaranteed.",
        serviceLabel: "App Development",
        enquiryHref: enquiry(
          "App Development",
          "Customers or staff need a mobile experience",
        ),
      },
      {
        id: "sell-online",
        index: "03",
        name: "Online store needs a clearer purchase journey",
        title: "Commerce scoped around discovery, checkout and operations.",
        description:
          "We help with catalogue, product pages, cart and supported checkout. Shopify-specific storefront work belongs on the Shopify page; broader platform work sits under Ecommerce Development.",
        serviceLabel: "Ecommerce Development (Shopify when relevant)",
        enquiryHref: enquiry(
          "Ecommerce Development",
          "Online store needs a clearer purchase journey",
        ),
      },
      {
        id: "manual-processes",
        index: "04",
        name: "Repeated manual work across disconnected tools",
        title: "Software or a management system around the real workflow.",
        description:
          "We map the process, decide what should be custom versus configured tooling, and scope a maintainable system — not a rebuild for its own sake.",
        serviceLabel: "Software Development or Management Systems",
        enquiryHref: enquiry(
          "Management Systems",
          "Repeated manual work across disconnected tools",
        ),
      },
      {
        id: "portal",
        index: "05",
        name: "Team needs an online portal or interactive tool",
        title: "A web application beyond an informational website.",
        description:
          "Accounts, portals, interactive tools and data-driven workflows are scoped around how users work in the browser.",
        serviceLabel: "Web Applications",
        enquiryHref: enquiry(
          "Web Applications",
          "Online portal or interactive tool",
        ),
      },
      {
        id: "reporting",
        index: "06",
        name: "Reports are scattered across different sources",
        title: "Dashboards built around decisions and available data.",
        description:
          "We start with the decisions the interface must support, the sources available and the access each user needs. Real-time reporting depends on source and architecture.",
        serviceLabel: "Dashboards",
        enquiryHref: enquiry(
          "Dashboards",
          "Reports are scattered across different sources",
        ),
      },
      {
        id: "extend-software",
        index: "07",
        name: "Existing software needs improvements",
        title: "Review the current system before prescribing a rebuild.",
        description:
          "We assess code access, limitations and requirements to determine whether focused improvements are practical — recommending a rebuild only when the existing system cannot reasonably support the agreed work.",
        serviceLabel: "Software Development",
        enquiryHref: enquiry(
          "Software Development",
          "Existing software needs improvements",
        ),
      },
      {
        id: "idea-scope",
        index: "08",
        name: "We have an idea but need help defining scope",
        title: "Start with what needs to work differently.",
        description:
          "The first conversation clarifies users, constraints and success criteria so you can decide what to build — and what to leave out.",
        serviceLabel: "Not Sure Yet",
        enquiryHref: enquiry("Not Sure Yet", "Idea — need help defining scope"),
      },
    ],
    closingTitle: "Not sure which service fits?",
    closingBody:
      "You do not need to choose the technology first. Tell us what needs to work differently and we will discuss the suitable starting point.",
    ctaLabel: "Discuss your project",
    ctaHref: enquiry("Not Sure Yet", "Not sure what we need"),
  },

  selectedWork: {
    eyebrow: "Portfolio",
    headline: "Selected development work",
    intro: [
      "Genuine projects with a clear problem and Buildaze's contribution. Outcome figures below match the published case studies and should be read with each project's baseline and measurement notes.",
    ],
    cases: [
      {
        id: "support-copilot",
        index: "01",
        category: "Web application / software",
        title: "A support product feature grounded in live account context.",
        relevance:
          "Relevant to web applications, custom software and system integrations.",
        description:
          "A SaaS support team was buried in repeat tickets with account context scattered across tools. Buildaze delivered a production web application feature that drafts replies and pulls live account context through integrations.",
        outcome: {
          value: "-38%",
          label: "first-response time (see case study)",
        },
        tags: ["Web Applications", "Software Development", "Integrations"],
        cta: "View case study",
        href: "/work/support-copilot",
        visual: "build",
      },
      {
        id: "catalog-intelligence",
        index: "02",
        category: "Ecommerce / web application",
        title: "Product discovery that understands attributes, not just keywords.",
        relevance:
          "Relevant to ecommerce development and interactive web applications.",
        description:
          "Shoppers could not find products because search ignored attributes and intent. Buildaze cleaned catalogue data, built a retrieval layer and shipped a shopping experience integration on that foundation.",
        outcome: {
          value: "+12%",
          label: "add-to-cart rate (see case study)",
        },
        tags: ["Ecommerce Development", "Web Applications", "Catalogue data"],
        cta: "View case study",
        href: "/work/catalog-intelligence-engine",
        visual: "build",
      },
      {
        id: "underwriting-copilot",
        index: "03",
        category: "Software / operational tooling",
        title: "Claims triage tooling underwriters can adopt.",
        relevance:
          "Relevant to custom software and decision-support interfaces.",
        description:
          "Underwriters spent hours summarizing claims before decisions. Buildaze built operational software that summarizes claims and surfaces risk signals, with UI patterns designed for day-to-day use.",
        outcome: {
          value: "-42%",
          label: "manual review time (see case study)",
        },
        tags: ["Software Development", "Dashboards", "Workflow tooling"],
        cta: "View case study",
        href: "/work/underwriting-risk-copilot",
        visual: "build",
      },
    ],
  },

  capabilities: {
    eyebrow: "Development services",
    headline: "Development services for websites, products and operations",
    intro: [
      "Start with what you need to achieve. Your project may use one service or combine several within an agreed scope.",
    ],
    capabilities: [
      {
        id: "web-development",
        index: "01",
        name: "Web Development",
        title: "Business websites that explain your offering and next step.",
        bestFor:
          "Companies that need a marketing or company website for discovery, trust and enquiries — not a full product application.",
        boundaries:
          "Interactive accounts, dashboards or workflows usually belong under Web Applications. Specialist website engineering detail also lives on the existing Web Development page.",
        description:
          "Build or improve a business website that explains your offering and helps visitors find the next step. Our web development scope can cover page structure, responsive implementation, content editing, forms and required integrations, with technical SEO and performance considered during the build.",
        items: [
          "Page and content structure",
          "Responsive pages",
          "Supported CMS editing",
          "Forms and integrations",
          "Launch checks",
          "Technical SEO foundations in scope",
        ],
        cta: "Discuss Your Website",
        href: enquiry("Web Development"),
        detailHref: "/services/web-development",
        detailLabel: "Explore Web Development",
      },
      {
        id: "app-development",
        index: "02",
        name: "App Development",
        title: "Mobile applications around the tasks that matter.",
        bestFor:
          "Teams that need mobile journeys beyond a responsive website — confirmed during scoping against real platform requirements.",
        boundaries:
          "Supported platforms are agreed in scope. Native or cross-platform choices follow the project requirements. App Store or Play Store approval is never guaranteed.",
        description:
          "Create a mobile application around the tasks your customers or team need to complete. We define the key journeys, supported platforms and backend requirements before development, then plan testing and release preparation around the agreed scope.",
        items: [
          "User flows",
          "Mobile interfaces",
          "Backend and auth where required",
          "Integrations",
          "Testing and release preparation",
        ],
        cta: "Discuss Your App",
        href: enquiry("App Development"),
        detailHref: "/services/development/app-development",
        detailLabel: "Explore App Development",
      },
      {
        id: "ecommerce-development",
        index: "03",
        name: "Ecommerce Development",
        title: "Online stores around discovery, purchase and operations.",
        bestFor:
          "Businesses selling products or services online, or improving an existing storefront and operations.",
        boundaries:
          "Checkout, payments and fulfilment follow platform constraints. Shopify storefronts, migrations and retainers are detailed on the Shopify page — not duplicated here. Broader platform work also has an Ecommerce Development page.",
        description:
          "Develop an online store around product discovery, purchase journeys and the operations behind each order. We scope the catalogue, product pages, cart, supported checkout and required integrations around your platform and business needs. Shopify-specific work is covered on the Shopify page.",
        items: [
          "Catalogue and collections",
          "Storefront and product pages",
          "Product and cart journeys",
          "Supported payments and fulfilment",
          "Launch QA",
        ],
        cta: "Discuss Your Ecommerce Project",
        href: enquiry("Ecommerce Development"),
        detailHref: "/services/ecommerce-development",
        detailLabel: "Explore Ecommerce Development",
      },
      {
        id: "software-development",
        index: "04",
        name: "Software Development",
        title: "Custom business software for defined requirements.",
        bestFor:
          "Teams that need custom features, integrations or product development beyond an off-the-shelf tool.",
        boundaries:
          "We describe actual project types during scoping — not “any software.” Multi-tenant subscription products are covered in more depth on the SaaS Development page. Third-party platforms keep their own terms.",
        description:
          "Build custom business software when existing tools cannot meet a defined requirement. We start with the users, workflows and integrations, then develop the agreed functionality with testing, documentation and maintenance needs in view.",
        items: [
          "Requirements",
          "Architecture",
          "Custom functionality",
          "Integrations",
          "Testing and documentation",
        ],
        cta: "Discuss Your Software Requirements",
        href: enquiry("Software Development"),
        detailHref: "/services/development/custom-software",
        detailLabel: "Explore Custom Software",
      },
      {
        id: "dashboards",
        index: "05",
        name: "Dashboards",
        title: "Metrics and operational views your team can use.",
        bestFor:
          "Operators and leaders who need clearer views of metrics already available (or soon available) in reliable sources.",
        boundaries:
          "Refresh frequency and data quality depend on upstream systems. Real-time data is conditional on source and architecture. Dedicated BI-tool specialisms are not claimed unless separately approved.",
        description:
          "Bring relevant metrics and operational information into an interface your team can use. Dashboard development starts with the decisions it must support, the data sources available and the access each user needs.",
        items: [
          "KPI definitions",
          "Source connections",
          "Reporting views",
          "Roles and access",
          "Agreed refresh behaviour",
        ],
        cta: "Discuss Your Dashboard",
        href: enquiry("Dashboards"),
        detailHref: "/services/development/web-applications",
        detailLabel: "Explore Web Applications & Dashboards",
      },
      {
        id: "web-applications",
        index: "06",
        name: "Web Applications",
        title: "Browser-based software beyond an informational website.",
        bestFor:
          "Businesses that need accounts, portals, interactive tools or data-driven workflows in the browser.",
        boundaries:
          "Informational marketing sites sit under Web Development. Multi-tenant commercial products sit under SaaS Development.",
        description:
          "Develop browser-based software for customers, partners or internal teams. Web applications can support accounts, portals, interactive tools and data-driven workflows that go beyond an informational website.",
        items: [
          "User and account flows",
          "Application UI",
          "Backend and database",
          "Integrations",
          "Permissions and testing",
        ],
        cta: "Discuss Your Web Application",
        href: enquiry("Web Applications"),
        detailHref: "/services/development/web-applications",
        detailLabel: "Explore Web Applications & Dashboards",
      },
      {
        id: "management-systems",
        index: "07",
        name: "Management Systems",
        title: "Software built around a specific business process.",
        bestFor:
          "Teams managing records, tasks, approvals or reporting that spreadsheets cannot sustain.",
        boundaries:
          "This is custom system development for agreed workflows — not a claim that we deliver every ERP, HR, school, hospital or accounting suite. Off-the-shelf tools may be better when they already fit.",
        description:
          "Organize a specific business process through software built around the way your team works. We map the records, tasks, approvals and reporting requirements before defining the system and any connections to existing tools.",
        items: [
          "Workflow mapping",
          "Records and tasks",
          "Permissions",
          "Reporting",
          "Agreed import and integrations",
        ],
        cta: "Discuss Your Management System",
        href: enquiry("Management Systems"),
        detailHref: "/services/development/web-applications",
        detailLabel: "Explore Web Applications & Dashboards",
      },
    ],
    closingTitle: "Need more than one service?",
    closingBody:
      "Start with what you need to achieve. Your project may use one service or combine several within an agreed scope — including when Shopify-specific work should move to the Shopify page.",
    ctaLabel: "Discuss your development needs",
    ctaHref: enquiry("Not Sure Yet"),
  },

  deliveryProcess: {
    eyebrow: "How we work",
    headline: "From business requirements to a working solution",
    intro: [
      "Timelines depend on functionality, integrations, data, content readiness and testing — not one universal schedule for every website, app and software project.",
    ],
    steps: [
      {
        id: "understand",
        index: "01",
        shortName: "Understand",
        name: "Understand",
        title: "Users, workflows, current setup and goals.",
        description:
          "We discuss who will use the solution, how work happens today and what needs to change before recommending an approach.",
        itemsLabel: "What we review",
        items: [
          "Users and journeys",
          "Workflows and constraints",
          "Current setup and systems",
          "Goals and success signals",
        ],
        outcome: "A shared understanding of the problem to solve.",
      },
      {
        id: "scope",
        index: "02",
        shortName: "Scope",
        name: "Scope",
        title: "Deliverables, responsibilities, dependencies and success criteria.",
        description:
          "Deliverables, milestones, cost and ownership of work are written down before build so both sides know what is in and out.",
        itemsLabel: "What we agree",
        items: [
          "Deliverables and success criteria",
          "Responsibilities",
          "Dependencies and risks",
          "Cost before build",
        ],
        outcome: "A written scope you can decide on before work starts.",
      },
      {
        id: "design-build",
        index: "03",
        shortName: "Build",
        name: "Design and build",
        title: "Key journeys and working functionality at agreed stages.",
        description:
          "We design the relevant experience and develop the agreed work, sharing progress at defined review points so feedback arrives while changes are still practical.",
        itemsLabel: "What happens",
        items: [
          "Key journeys and screens",
          "Agreed development increments",
          "Scheduled reviews",
        ],
        outcome: "Progress you can inspect against the written scope.",
      },
      {
        id: "validate",
        index: "04",
        shortName: "Validate",
        name: "Validate",
        title: "Functional, integration and agreed release checks.",
        description:
          "We test critical paths and in-scope integrations, then prepare release according to the engagement — staging and cutover where they apply.",
        itemsLabel: "What we validate",
        items: [
          "Critical user flows",
          "Integrations in scope",
          "Agreed release requirements",
        ],
        outcome: "A release plan matched to the agreed work.",
      },
      {
        id: "handover",
        index: "05",
        shortName: "Handover",
        name: "Handover and support",
        title: "Approved access, documentation and support arrangements.",
        description:
          "You receive the agreed custom deliverables, documentation and access. Third-party platforms keep their own terms. Ongoing support is optional and scoped separately.",
        itemsLabel: "What you receive",
        items: [
          "Agreed custom work and access",
          "Documentation in scope",
          "Optional support explained",
        ],
        outcome: "Practical handover — without invented lock-in claims.",
      },
    ],
    closingTitle: "Improving something that already exists?",
    closingBody:
      "Many engagements extend or tidy an existing website, app or system. We start with the constraint — not a default rebuild.",
    ctaLabel: "Discuss your project",
    ctaHref: "/contact?service=development",
  },

  why: {
    eyebrow: "Why Buildaze",
    headline: "Working practices you can verify in delivery",
    intro: [
      "Concrete habits — not blanket comparisons with other agencies or unsupported guarantees.",
    ],
    differentiators: [
      {
        id: "clear-scope",
        index: "01",
        name: "Clear agreed scope",
        summary: "Deliverables and cost before build.",
        title: "Clear agreed scope.",
        description:
          "Deliverables, responsibilities and cost are agreed before development so both sides know what success looks like.",
        panelStatement: "You should know what is in scope before work starts.",
        panelNote: "Written scope. Defined milestones.",
      },
      {
        id: "visible-progress",
        index: "02",
        name: "Visible progress",
        summary: "Reviews while changes are still practical.",
        title: "Visible progress and communication.",
        description:
          "Progress is shared at defined review points so feedback arrives while changes are still affordable to make.",
        panelStatement: "No waiting until the budget is spent to see the work.",
        panelNote: "Scheduled reviews. Clear status.",
      },
      {
        id: "maintainable",
        index: "03",
        name: "Maintainable implementation",
        summary: "Built to be operated after handover.",
        title: "Maintainable implementation.",
        description:
          "We favour approaches your team can operate: clear structure, sensible dependencies and documentation matched to the engagement.",
        panelStatement:
          "Handover should leave you able to run what was agreed.",
        panelNote: "Practical engineering over novelty for its own sake.",
      },
      {
        id: "handover-docs",
        index: "04",
        name: "Documentation and handover",
        summary: "Agreed work, access and optional support.",
        title: "Appropriate documentation and handover.",
        description:
          "Custom deliverables follow the agreement. Third-party software, licensed assets and platforms retain their own terms. Ongoing support is available when you want it — not as a requirement to keep access.",
        panelStatement:
          "Ownership language stays accurate — including third-party limits.",
        panelNote: "Optional support. No zero-dependency fiction.",
      },
    ],
    closingTitle: "Ready to describe the problem?",
    closingBody:
      "Share what you want to build or improve. We will suggest a practical starting point.",
    pillars: ["Scope", "Reviews", "Maintainability", "Handover"],
    closingNote: "One clear engagement at a time.",
    ctaLabel: "Discuss Your Development Project",
    ctaHref: "/contact?service=development",
  },

  overviewTitle: "What development includes",
  overview: [
    "Development covers websites, apps, ecommerce experiences, custom software, dashboards, web applications and management systems.",
    "Projects often combine more than one of these labels under a single agreed scope. Shopify-specific storefront work is detailed on the Shopify service page.",
  ],
  solutionsTitle: "Development services",
  solutions: [
    "Web Development",
    "App Development",
    "Ecommerce Development",
    "Software Development",
    "Dashboards",
    "Web Applications",
    "Management Systems",
  ],
  deliverables: [
    "Scoped website, app or software deliverables",
    "Integrations and dashboards as agreed",
    "Testing and launch support within scope",
    "Documentation and access handover for agreed custom work",
  ],
  included: [
    "Discovery and technical scoping",
    "Build with defined review points",
    "Deployment approach agreed for your stack",
    "Optional support scoped separately after launch",
  ],
  stackTags: ["Next.js", "React", "Node.js", "Laravel", "Postgres", "APIs"],
  process: [
    {
      index: "01",
      name: "Understand",
      duration: "Scoped",
      description:
        "Discuss users, workflows, current setup and goals before recommending an approach.",
    },
    {
      index: "02",
      name: "Scope",
      duration: "Scoped",
      description:
        "Agree deliverables, responsibilities, dependencies and success criteria before build.",
    },
    {
      index: "03",
      name: "Design and build",
      duration: "Scoped",
      description:
        "Develop key journeys and working functionality with reviews at agreed stages.",
    },
    {
      index: "04",
      name: "Validate and handover",
      duration: "Scoped",
      description:
        "Test, release and hand over agreed custom work. Third-party platforms keep their own licensing.",
    },
  ],
  relatedWorkIds: [
    "support-copilot",
    "catalog-intelligence",
    "underwriting-copilot",
  ],
  faqEyebrow: "Development FAQs",
  faqHeadline: "Questions before starting a development project",
  faqIntro: [
    "Short answers about websites versus apps, improvements, integrations, scope, data and support. Deeper Shopify detail lives on the Shopify page.",
  ],
  faqs: [
    {
      question: "How do we choose between a website, app and web application?",
      answer:
        "A website may be enough when visitors mainly need information and enquiries. Accounts, interactive workflows or mobile-specific tasks may require a web application or mobile app. We assess the users and requirements before recommending an approach.",
    },
    {
      question: "Can you improve an existing website or software system?",
      answer:
        "We can assess the current setup, code access and limitations to determine whether focused improvements are practical. A rebuild is considered when the existing system cannot reasonably support the agreed requirements.",
    },
    {
      question: "Can the solution connect to our existing tools?",
      answer:
        "Integration depends on the tools' APIs, access permissions and data requirements. We assess feasibility and define the supported connections, error handling and ongoing responsibilities within scope.",
    },
    {
      question: "Can we start with a smaller first version?",
      answer:
        "A focused first release can prioritize the essential user journey or business workflow. We define what it includes, what remains for later and how the initial solution will be evaluated.",
    },
    {
      question: "What affects development cost and timeline?",
      answer:
        "Functionality, design, integrations, data migration, testing and content readiness affect the scope. Cost and milestones are confirmed after requirements and dependencies are understood.",
    },
    {
      question: "What happens to our existing data?",
      answer:
        "Where migration is required, we assess formats, quality, access and mapping before agreeing what can be transferred. Validation, backups and cutover responsibilities must be planned; completeness is not assumed.",
    },
    {
      question: "What ownership and documentation do we receive?",
      answer:
        "The agreement defines custom deliverables, repository/access handover and documentation. Third-party platforms, tools and licensed assets remain subject to their own terms.",
    },
    {
      question: "Is ongoing support available?",
      answer:
        "Support can be scoped around maintenance, fixes and continued development. Included work, request handling and coverage are agreed separately rather than implied by the initial build.",
    },
  ],
  faqClosingTitle: "Still have a question?",
  faqClosingBody:
    "Include it in the enquiry form and we will answer in the context of your project.",
  faqCtaLabel: "Ask about your project",
  faqCtaHref: "/contact?service=development",
};
