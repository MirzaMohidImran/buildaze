import { buildContactHref } from "../contact/paths";
import type { Service, ServicePageContent } from "./services";

const HUB = "/services/development";

function enquiry(capability: string, problem?: string) {
  return buildContactHref({
    service: "development",
    capability,
    problem,
  });
}

function base(
  partial: Omit<ServicePageContent, "relatedWorkIds"> & {
    relatedWorkIds?: string[];
  },
): ServicePageContent {
  return { ...partial, relatedWorkIds: partial.relatedWorkIds ?? [] };
}

const appPath = `${HUB}/app-development`;
const softwarePath = `${HUB}/custom-software`;
const webAppsPath = `${HUB}/web-applications`;

/**
 * Development specialist destinations under `/services/development/*`.
 * Web / SaaS / Ecommerce pillars remain on existing `/services/*` routes.
 * Candidate keyword targets — volumes/difficulty unverified.
 */
export const developmentLeaves: Service[] = [
  {
    id: "dev-app",
    slug: "app-development",
    path: appPath,
    role: "detail",
    index: "01",
    name: "App Development",
    shortName: "Apps",
    oneLiner:
      "Mobile application development around the journeys your users need.",
    description:
      "Mobile app development with scoped platforms, key journeys, backend needs and release preparation — distinct from app UI/UX design.",
    capabilities: [
      "Mobile journeys",
      "Platform scoping",
      "Backend and auth",
      "Release preparation",
    ],
    flow: ["Journeys", "Scope", "Build", "Release"],
    cta: "Discuss app development",
    relatedServiceIds: [
      "development",
      "design-app",
      "dev-software",
      "dev-web-apps",
      "saas",
    ],
    page: base({
      metaTitle: "Mobile App Development Services | Buildaze",
      metaDescription:
        "Build mobile applications with Buildaze. Scope platforms, user journeys, backend needs and release preparation before choosing a stack.",
      eyebrow: "Mobile application development",
      headline: "App development built around the tasks users must complete.",
      subheadline:
        "Create a mobile application around the journeys your customers or team need. Platforms, backend requirements and store submission expectations are confirmed during scoping — not promised as universal guarantees.",
      ctaLabel: "Discuss Your App",
      secondaryCtaLabel: "Back to Development",
      problems: {
        eyebrow: "App development needs",
        headline: "When a responsive website is not enough",
        intro: [
          "Use this service for mobile application builds. UI/UX-only mobile design lives on App Design. Broader product platforms may fit SaaS or Web Applications.",
        ],
        problems: [
          {
            id: "mobile",
            index: "01",
            name: "Users need a mobile app, not only a website",
            title: "Journeys designed for mobile use.",
            description:
              "Define the tasks that justify an app before choosing native or cross-platform approaches.",
            enquiryHref: enquiry("App Development", "Need a mobile application"),
          },
          {
            id: "backend",
            index: "02",
            name: "The app depends on accounts, data or integrations",
            title: "Backend and auth planned with the product.",
            description:
              "Scope APIs, authentication and third-party connections early.",
            enquiryHref: enquiry(
              "App Development",
              "App backend and integrations",
            ),
          },
          {
            id: "release",
            index: "03",
            name: "Release and store requirements are unclear",
            title: "Testing and release preparation in scope.",
            description:
              "Store approval is never guaranteed. We prepare against agreed platform requirements.",
            enquiryHref: enquiry(
              "App Development",
              "App release preparation",
            ),
          },
        ],
        closingTitle: "Need design without development?",
        closingBody:
          "Mobile App UI/UX Design covers flows, screens and prototypes for your development team. Custom software and dashboards have their own destinations.",
        ctaLabel: "Discuss app development",
        ctaHref: enquiry("App Development"),
      },
      overviewTitle: "What app development covers",
      overview: [
        "App development owns mobile application implementation — key journeys, supported platforms, backend needs where required, integrations and release preparation.",
        "Supported platforms are agreed in scope. Native or cross-platform choices follow project requirements. App Store or Play Store approval is never guaranteed.",
        "Design-only mobile work remains on App Design so design and engineering intents stay distinct.",
      ],
      solutionsTitle: "App work we deliver",
      solutions: [
        "User journey definition for mobile",
        "Mobile interface implementation in scope",
        "Backend and authentication where required",
        "Integrations with agreed systems",
        "Testing and release preparation",
      ],
      deliverables: [
        "Scoped mobile application build",
        "Agreed platform targets",
        "Working journeys for prioritized use cases",
        "Handover access and documentation",
      ],
      included: [
        "Discovery of users and must-have journeys",
        "Technical scope and constraints",
        "Implementation with progress reviews",
        "Release preparation within agreed platforms",
      ],
      stackTags: [
        "Mobile apps",
        "Platforms scoped per project",
        "APIs",
        "Release QA",
      ],
      process: [
        {
          index: "01",
          name: "Discover",
          duration: "Scoped",
          description: "Confirm users, journeys and platform constraints.",
        },
        {
          index: "02",
          name: "Scope",
          duration: "Scoped",
          description: "Agree MVP journeys, backend needs and out-of-scope items.",
        },
        {
          index: "03",
          name: "Build",
          duration: "Scoped",
          description: "Implement with reviews against the agreed journeys.",
        },
        {
          index: "04",
          name: "Release prep",
          duration: "Scoped",
          description: "Test and prepare for store or distribution steps in scope.",
        },
      ],
      relatedWorkIds: ["support-copilot"],
      faqs: [
        {
          question: "How is this different from App Design?",
          answer:
            "App Design delivers mobile UI/UX, flows and prototypes. App Development implements the application, backend needs and release preparation.",
        },
        {
          question: "Do you always build native iOS and Android apps?",
          answer:
            "Platforms are confirmed during scoping against real requirements. We do not publish a single stack promise for every project.",
        },
        {
          question: "Can you guarantee App Store approval?",
          answer:
            "No. We prepare against agreed platform guidelines, but store approval decisions belong to Apple and Google.",
        },
      ],
      faqEyebrow: "App development FAQs",
      faqHeadline: "Questions before you commission a mobile app",
      faqCtaLabel: "Discuss Your App",
      faqCtaHref: enquiry("App Development"),
    }),
  },
  {
    id: "dev-software",
    slug: "custom-software",
    path: softwarePath,
    role: "detail",
    index: "02",
    name: "Custom Software",
    shortName: "Software",
    oneLiner:
      "Custom business software for workflows that off-the-shelf tools cannot cover.",
    description:
      "Custom software development for operational tooling, internal systems and product features grounded in real workflows.",
    capabilities: [
      "Operational tooling",
      "Workflow software",
      "System integrations",
      "Ownership-focused delivery",
    ],
    flow: ["Workflow", "Design", "Build", "Hand over"],
    cta: "Discuss custom software",
    relatedServiceIds: [
      "development",
      "dev-web-apps",
      "dev-app",
      "saas",
      "ai",
    ],
    page: base({
      metaTitle: "Custom Software Development Services | Buildaze",
      metaDescription:
        "Build custom business software with Buildaze. Operational tooling and workflow systems scoped around how your team actually works.",
      eyebrow: "Custom business software",
      headline: "Custom software for the workflows off-the-shelf tools miss.",
      subheadline:
        "When spreadsheets, disconnected SaaS tools or manual steps cannot support the operation, we scope software around the real workflow — with clear ownership after handover.",
      ctaLabel: "Discuss Custom Software",
      secondaryCtaLabel: "Back to Development",
      problems: {
        eyebrow: "Software starting points",
        headline: "When the process needs its own system",
        intro: [
          "Use this service for custom operational software. Multi-tenant commercial products may fit SaaS Development. Dashboard-led internal tools may fit Web Applications.",
        ],
        problems: [
          {
            id: "manual",
            index: "01",
            name: "Critical work still runs on spreadsheets and inbox threads",
            title: "Software that matches the real process.",
            description:
              "Map the workflow, exceptions and permissions before choosing a build.",
            enquiryHref: enquiry(
              "Software Development",
              "Replace spreadsheet-heavy workflow",
            ),
          },
          {
            id: "tools",
            index: "02",
            name: "Existing tools do not fit the operation",
            title: "Scoped custom tooling instead of forced fit.",
            description:
              "We confirm whether customization, integration or a new system is the clearer path.",
            enquiryHref: enquiry(
              "Software Development",
              "Off-the-shelf tools do not fit",
            ),
          },
          {
            id: "ownership",
            index: "03",
            name: "You need ownership, not another locked platform",
            title: "Handover of agreed custom work.",
            description:
              "Access, documentation and deployment notes are part of delivery.",
            enquiryHref: enquiry(
              "Software Development",
              "Need owned custom software",
            ),
          },
        ],
        closingTitle: "Need a customer-facing product?",
        closingBody:
          "Commercial multi-tenant products belong on SaaS Development. Mobile apps and internal web applications have dedicated pages.",
        ctaLabel: "Discuss software",
        ctaHref: enquiry("Software Development"),
      },
      overviewTitle: "What custom software development covers",
      overview: [
        "Custom software owns operational systems and workflow tooling that are not primarily a marketing website, Shopify storefront or multi-tenant SaaS product.",
        "We start from the workflow: users, exceptions, integrations and what “done” means. Stack choices follow the problem.",
        "Published case studies show Buildaze delivering production copilots and operational tooling — metrics remain tied to those project pages.",
      ],
      solutionsTitle: "Software work we deliver",
      solutions: [
        "Internal operational systems",
        "Workflow and decision-support tooling",
        "Integrations with existing systems",
        "Role-aware access where required",
        "Handover-ready custom builds",
      ],
      deliverables: [
        "Scoped software design and implementation",
        "Working workflows for prioritized use cases",
        "Integration work in agreed scope",
        "Documentation and access at handover",
      ],
      included: [
        "Workflow discovery",
        "Written scope and exclusions",
        "Build with progress reviews",
        "Practical ownership handover",
      ],
      stackTags: [
        "Custom software",
        "APIs",
        "Workflow tooling",
        "Full code ownership",
      ],
      process: [
        {
          index: "01",
          name: "Map the workflow",
          duration: "Scoped",
          description: "Users, exceptions, data and success criteria.",
        },
        {
          index: "02",
          name: "Design the system",
          duration: "Scoped",
          description: "Architecture, permissions and integration boundaries.",
        },
        {
          index: "03",
          name: "Build",
          duration: "Scoped",
          description: "Implement prioritized workflows with reviews.",
        },
        {
          index: "04",
          name: "Hand over",
          duration: "Scoped",
          description: "Access, docs and operating notes for agreed custom work.",
        },
      ],
      relatedWorkIds: ["underwriting-copilot", "support-copilot"],
      faqs: [
        {
          question: "How is custom software different from SaaS development?",
          answer:
            "SaaS Development focuses on multi-tenant commercial products with billing and customer onboarding. Custom software focuses on operational systems and workflow tooling for your organization or a defined user group.",
        },
        {
          question: "Will you invent a fixed price or timeline on this page?",
          answer:
            "No. Timelines and commercial terms follow discovery and written scope.",
        },
        {
          question: "Can AI features be part of custom software?",
          answer:
            "Yes, when they support the workflow. Dedicated AI product surfaces also have AI service pages.",
        },
      ],
      faqEyebrow: "Custom software FAQs",
      faqHeadline: "Questions about commissioning a build",
      faqCtaLabel: "Discuss Custom Software",
      faqCtaHref: enquiry("Software Development"),
    }),
  },
  {
    id: "dev-web-apps",
    slug: "web-applications",
    path: webAppsPath,
    role: "detail",
    index: "03",
    name: "Web Applications & Dashboards",
    shortName: "Web Apps",
    oneLiner:
      "Web applications, dashboards and management systems for teams and customers.",
    description:
      "Web application development including dashboards, portals and management systems — distinct from marketing websites.",
    capabilities: [
      "Web applications",
      "Dashboards",
      "Management systems",
      "Role-based access",
    ],
    flow: ["Users", "Model", "Build", "Launch"],
    cta: "Discuss a web application",
    relatedServiceIds: [
      "development",
      "web",
      "dev-software",
      "saas",
      "dev-app",
    ],
    page: base({
      metaTitle: "Web Application & Dashboard Development | Buildaze",
      metaDescription:
        "Build web applications, dashboards and management systems with Buildaze. Scoped around users, permissions and the decisions the interface must support.",
      eyebrow: "Web applications and dashboards",
      headline: "Web applications and dashboards for real operational decisions.",
      subheadline:
        "When people need accounts, workflows or reporting — not only a marketing site — we scope a web application around roles, data and the actions users must complete.",
      ctaLabel: "Discuss Your Web Application",
      secondaryCtaLabel: "Back to Development",
      problems: {
        eyebrow: "Web application needs",
        headline: "When the interface is a working system",
        intro: [
          "This page owns dashboards, portals and management systems. Marketing websites remain on Web Development. Multi-tenant commercial products remain on SaaS Development.",
        ],
        problems: [
          {
            id: "dashboard",
            index: "01",
            name: "Teams need a dashboard, not another spreadsheet export",
            title: "Reporting and actions in one place.",
            description:
              "Define the decisions the dashboard must support before designing charts for their own sake.",
            enquiryHref: enquiry(
              "Dashboards",
              "Need an operational dashboard",
            ),
          },
          {
            id: "portal",
            index: "02",
            name: "Customers or staff need a portal",
            title: "Role-aware web application journeys.",
            description:
              "Accounts, permissions and core tasks are scoped before expanding feature lists.",
            enquiryHref: enquiry(
              "Web Applications",
              "Customer or staff portal",
            ),
          },
          {
            id: "management",
            index: "03",
            name: "Operations need a management system",
            title: "Management workflows with clear ownership.",
            description:
              "Model records, statuses and exceptions the team already uses.",
            enquiryHref: enquiry(
              "Management Systems",
              "Need a management system",
            ),
          },
        ],
        closingTitle: "Is this a SaaS product?",
        closingBody:
          "If you are selling a multi-tenant product with billing and customer onboarding, start on SaaS Development. Marketing websites stay on Web Development.",
        ctaLabel: "Discuss web application",
        ctaHref: enquiry("Web Applications"),
      },
      overviewTitle: "What web applications and dashboards cover",
      overview: [
        "Dashboards, management systems and web applications share one destination here so near-identical synonym pages are not created. The buyer intent is an interactive system with roles and data — not a brochure site.",
        "We define users, permissions, core records and success criteria before expanding the feature list.",
        "Relevant Buildaze case studies include production web application features and operational tooling with published project metrics on their case-study pages.",
      ],
      solutionsTitle: "Application work we deliver",
      solutions: [
        "Internal and customer web applications",
        "Operational dashboards",
        "Management systems and admin tools",
        "Authentication and role-based access",
        "Integrations with source systems",
      ],
      deliverables: [
        "Scoped application or dashboard build",
        "Role-aware journeys in agreed scope",
        "Data views and actions users need",
        "Handover access and documentation",
      ],
      included: [
        "User and workflow discovery",
        "Information architecture for core records",
        "Implementation with progress reviews",
        "Launch support within scope",
      ],
      stackTags: [
        "Web applications",
        "Dashboards",
        "RBAC",
        "APIs",
      ],
      process: [
        {
          index: "01",
          name: "Users & jobs",
          duration: "Scoped",
          description: "Who uses the system and which decisions it supports.",
        },
        {
          index: "02",
          name: "Model",
          duration: "Scoped",
          description: "Core records, permissions and integration boundaries.",
        },
        {
          index: "03",
          name: "Build",
          duration: "Scoped",
          description: "Ship prioritized journeys with review checkpoints.",
        },
        {
          index: "04",
          name: "Launch",
          duration: "Scoped",
          description: "Validate access, critical paths and handover notes.",
        },
      ],
      relatedWorkIds: [
        "support-copilot",
        "underwriting-copilot",
        "catalog-intelligence",
      ],
      faqs: [
        {
          question: "Why are dashboards and management systems on one page?",
          answer:
            "They share the same buyer intent: an interactive system with roles and data. Splitting every synonym into thin pages creates overlap without adding useful distinction.",
        },
        {
          question: "How is this different from Web Development?",
          answer:
            "Web Development focuses on marketing and company websites. This page focuses on applications people log into to complete work.",
        },
        {
          question: "Can this become a commercial SaaS product later?",
          answer:
            "Sometimes. If multi-tenant billing and customer onboarding are primary from day one, start on SaaS Development instead.",
        },
      ],
      faqEyebrow: "Web application FAQs",
      faqHeadline: "Choosing the right development destination",
      faqCtaLabel: "Discuss Your Web Application",
      faqCtaHref: enquiry("Web Applications"),
    }),
  },
];

export const DEVELOPMENT_LEAF_IDS = developmentLeaves.map((s) => s.id);
