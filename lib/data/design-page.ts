import { buildContactHref } from "../contact/paths";
import type { ServicePageContent } from "./services";

/** Established Design overview route in this repository. */
const HUB_PATH = "/services/design";

const LEAF = {
  graphic: `${HUB_PATH}/graphic-design`,
  illustration: `${HUB_PATH}/illustration`,
  app: `${HUB_PATH}/app-design`,
  uiux: `${HUB_PATH}/ui-ux-design`,
  branding: `${HUB_PATH}/branding`,
} as const;

function enquiry(service: string, problem?: string) {
  return buildContactHref({ service: "design", capability: service, problem });
}

/**
 * Design hub body for `/services/design`.
 * Copy direction from Buildaze Design SEO research (12 Oct 2026).
 * No separate dedicated Design portfolio cases are verified — proof strip omitted.
 */
export const designPageContent: ServicePageContent = {
  metaTitle: "Graphic, Brand & UI/UX Design Services | Buildaze",
  metaDescription:
    "Buildaze offers graphic design, illustration, app design, UI/UX and brand identity design. Discuss the visuals and experiences your business needs.",
  eyebrow: "Brand visuals and digital experiences",
  headline: "Design services for your brand and digital experiences.",
  subheadline:
    "Buildaze helps businesses communicate clearly and create usable digital experiences. Choose graphic design, custom illustration, app design, UI/UX or branding—or combine the services around a defined brief.",
  ctaLabel: "Discuss your design project",
  secondaryCtaLabel: "Explore design services",

  problems: {
    eyebrow: "Starting points",
    headline: "When your design needs a clearer direction",
    intro: [
      "Your marketing assets may look inconsistent, your app may be difficult to navigate, or your brand may no longer reflect the business. Start with the problem and the intended audience — then we define the design work, outputs and review process.",
    ],
    problems: [
      {
        id: "inconsistent-assets",
        index: "01",
        name: "Marketing assets look inconsistent",
        title: "Clear visuals for campaigns and communication.",
        description:
          "Graphic design scopes the assets, sizes and brand rules before layouts and exports are prepared.",
        serviceLabel: "Graphic Design",
        enquiryHref: enquiry(
          "Graphic Design",
          "Marketing assets look inconsistent",
        ),
      },
      {
        id: "need-artwork",
        index: "02",
        name: "We need original artwork for our message",
        title: "Custom illustration with a defined purpose.",
        description:
          "Illustration scopes style, intended use and formats — without copying another creator’s work.",
        serviceLabel: "Illustration",
        enquiryHref: enquiry(
          "Illustration",
          "Need original artwork for our message",
        ),
      },
      {
        id: "mobile-journeys",
        index: "03",
        name: "Our mobile app is hard to navigate",
        title: "Mobile journeys, screens and prototypes.",
        description:
          "App Design plans agreed flows and states. Development of the working app is a separate scope.",
        serviceLabel: "App Design",
        enquiryHref: enquiry(
          "App Design",
          "Mobile app is hard to navigate",
        ),
      },
      {
        id: "digital-friction",
        index: "04",
        name: "Users get stuck on our website or product",
        title: "UI/UX for websites and digital products.",
        description:
          "Map key tasks, organize the experience and design the screens needed for the agreed scope.",
        serviceLabel: "UI/UX Design",
        enquiryHref: enquiry(
          "UI/UX Design",
          "Users get stuck on website or product",
        ),
      },
      {
        id: "identity-drift",
        index: "05",
        name: "Our brand no longer reflects the business",
        title: "A visual identity you can apply consistently.",
        description:
          "Branding scopes logo work, visual system and practical guidelines — not automatic naming or trademark services.",
        serviceLabel: "Branding",
        enquiryHref: enquiry(
          "Branding",
          "Brand no longer reflects the business",
        ),
      },
      {
        id: "not-sure",
        index: "06",
        name: "Not sure which design service fits",
        title: "Tell us what you need to communicate or improve.",
        description:
          "Describe the audience, channels and outputs. One project can combine services when the brief needs it.",
        serviceLabel: "Not Sure Yet",
        enquiryHref: enquiry(
          "Not Sure Yet",
          "Not sure which design service fits",
        ),
      },
    ],
    closingTitle: "Need the product built as well?",
    closingBody:
      "Design focuses on visuals and experience. Implementation sits under Development — and both can be discussed together with clear responsibilities.",
    ctaLabel: "Discuss your design project",
    ctaHref: enquiry("Not Sure Yet"),
  },

  capabilities: {
    eyebrow: "Design services",
    headline: "Find the right design service",
    intro: [
      "Five focused destinations. Start with the output you need — communication assets, artwork, mobile design, digital journeys or visual identity.",
    ],
    capabilities: [
      {
        id: "graphic-design",
        index: "01",
        name: "Graphic Design",
        title: "Clear, consistent visuals for campaigns and communication.",
        bestFor:
          "Teams that need social graphics, digital banners, presentation layouts or business materials within an agreed asset list.",
        boundaries:
          "Copywriting, photography, paid media management, printing and production are included only when separately specified.",
        description:
          "Create graphic design around your message, audience and channels. We define required assets, sizes and brand rules before developing layouts and preparing agreed files.",
        items: [
          "Asset list and dimensions",
          "Creative direction",
          "Layouts and variations",
          "Exports for placements",
          "Editable files where included",
        ],
        cta: "Discuss your graphic design brief",
        href: enquiry("Graphic Design"),
        detailHref: LEAF.graphic,
        detailLabel: "Explore Graphic Design",
      },
      {
        id: "illustration",
        index: "02",
        name: "Illustration",
        title: "Custom artwork that explains an idea.",
        bestFor:
          "Brands that need original visual storytelling for content, campaigns or digital experiences.",
        boundaries:
          "Character design, icon sets, infographics, animation and 3D are separate scope items — included only when Buildaze actually provides them for the project. Fonts and stock retain their licensing terms.",
        description:
          "Turn an idea into artwork that fits your brand and context. Scope style direction, intended use and formats with review points before final production.",
        items: [
          "Concept and style direction",
          "Draft artwork review",
          "Final illustrations",
          "Export formats",
          "Usage terms where included",
        ],
        cta: "Discuss your illustration project",
        href: enquiry("Illustration"),
        detailHref: LEAF.illustration,
        detailLabel: "Explore Illustration",
      },
      {
        id: "app-design",
        index: "03",
        name: "App Design",
        title: "Mobile journeys, screens and prototypes.",
        bestFor:
          "Teams planning a new mobile experience or improving core tasks such as onboarding, browsing, booking or account management.",
        boundaries:
          "A prototype is not a deployed app. Backend work, development, store submission and maintenance require separate scope. There is no separate App Development leaf URL — implementation discussions start on the Development hub.",
        description:
          "Map agreed journeys, develop screens and interaction states, and prepare a prototype and handoff suited to the project. Define platform and device assumptions early.",
        items: [
          "Flows and screen inventory",
          "Wireframes",
          "UI screens and components",
          "Prototype for specified journeys",
          "Developer handoff notes",
        ],
        cta: "Discuss your app design",
        href: enquiry("App Design"),
        detailHref: LEAF.app,
        detailLabel: "Explore App Design",
      },
      {
        id: "ui-ux-design",
        index: "04",
        name: "UI/UX Design",
        title: "User flows and interfaces for websites and products.",
        bestFor:
          "Businesses planning a new website or improving a digital product experience.",
        boundaries:
          "Interviews, usability testing, analytics review and accessibility audits need defined methods and access. Stakeholder review is not user testing. Conversion gains are not guaranteed.",
        description:
          "UX shapes how people complete tasks; UI defines the screens and hierarchy supporting them. Projects can combine journey mapping, wireframes, responsive interface design and a scoped prototype.",
        items: [
          "Goals and journey map",
          "Information architecture",
          "Wireframes and layouts",
          "Interface components and states",
          "Prototype and handoff where included",
        ],
        cta: "Discuss your UI/UX needs",
        href: enquiry("UI/UX Design"),
        detailHref: LEAF.uiux,
        detailLabel: "Explore UI/UX Design",
      },
      {
        id: "branding",
        index: "05",
        name: "Branding",
        title: "A visual identity and practical guidelines.",
        bestFor:
          "Businesses starting an identity, refreshing an existing one or resolving inconsistent visuals.",
        boundaries:
          "Naming, messaging strategy, market research, trademark registration and legal clearance are separate and only claimed when actually provided. Client-brand typography work does not change Buildaze website fonts.",
        description:
          "Translate business direction into a coherent visual identity — logo work, visual system and guidelines for agreed touchpoints. Agree whether the work is a focused logo project or a wider identity system.",
        items: [
          "Visual direction",
          "Logo variants where scoped",
          "Color and type recommendations",
          "Supporting visual elements",
          "Usage guidelines and final assets",
        ],
        cta: "Discuss your brand identity",
        href: enquiry("Branding"),
        detailHref: LEAF.branding,
        detailLabel: "Explore Branding",
      },
    ],
    closingTitle: "Need more than one service?",
    closingBody:
      "One project can combine services — for example branding with graphic design, or UI/UX with development — when deliverables and responsibilities are written down.",
    ctaLabel: "Discuss your design needs",
    ctaHref: enquiry("Not Sure Yet"),
  },

  deliveryProcess: {
    eyebrow: "How we work",
    headline: "From brief to handoff",
    intro: [
      "Understand the audience and problem → define scope and outputs → design and review → hand over files and guidance. Price and timeline depend on complexity, review rounds and content readiness.",
    ],
    steps: [
      {
        id: "understand",
        index: "01",
        shortName: "Understand",
        name: "Understand",
        title: "Audience, problem and intended channels.",
        description:
          "We clarify who the design is for, where it will appear and what success looks like for the brief.",
        itemsLabel: "What we review",
        items: [
          "Audience and message",
          "Channels and placements",
          "Existing brand assets",
          "Required outputs",
        ],
        outcome: "A shared understanding of the design problem.",
      },
      {
        id: "scope",
        index: "02",
        shortName: "Scope",
        name: "Scope",
        title: "Deliverables, formats and review rounds.",
        description:
          "Agree the asset list or screen inventory, file formats, responsibilities and included revision stages before production.",
        itemsLabel: "What we agree",
        items: [
          "Deliverables and formats",
          "Review stages",
          "Licensing notes",
          "Out-of-scope items",
        ],
        outcome: "A written brief you can approve.",
      },
      {
        id: "design",
        index: "03",
        shortName: "Design",
        name: "Design and review",
        title: "Concepts and refinements at agreed checkpoints.",
        description:
          "We develop the agreed work and review while changes are still practical — not unlimited rounds unless that is the actual offer.",
        itemsLabel: "What happens",
        items: [
          "Creative direction",
          "Drafts for review",
          "Agreed refinements",
          "Final production in scope",
        ],
        outcome: "Approved design work matched to the brief.",
      },
      {
        id: "handover",
        index: "04",
        shortName: "Handover",
        name: "Handover",
        title: "Files, guidelines and developer notes as scoped.",
        description:
          "You receive agreed exports and editable sources where included. Fonts, stock and third-party tools keep their own licensing. Development of a website or app is separate unless combined in the agreement.",
        itemsLabel: "What you receive",
        items: [
          "Final assets",
          "Editable files where included",
          "Usage guidance",
          "Handoff notes for build teams",
        ],
        outcome: "Practical files your team can use.",
      },
    ],
    closingTitle: "What your project includes",
    closingBody:
      "Every engagement lists outputs, formats and review stages in writing. We do not invent universal revision counts or file packages.",
    ctaLabel: "Discuss your design project",
    ctaHref: "/contact?service=design",
  },

  why: {
    eyebrow: "Working practices",
    headline: "What your design project includes",
    intro: [
      "Clear briefs, honest boundaries and handoff materials — without fabricated portfolio metrics.",
    ],
    differentiators: [
      {
        id: "output-first",
        index: "01",
        name: "Output first",
        summary: "Know what you receive.",
        title: "Define the outputs before production.",
        description:
          "Asset lists, screen inventories and intended channels are agreed so design work stays purposeful.",
        panelStatement: "A gallery without a brief leaves buyers guessing.",
        panelNote: "Problem → output → review.",
      },
      {
        id: "boundaries",
        index: "02",
        name: "Clear boundaries",
        summary: "Design vs build vs media.",
        title: "Keep design, development and media distinct.",
        description:
          "Graphic assets are not ad management. Prototypes are not deployed apps. Identity design is not trademark registration.",
        panelStatement: "Scope clarity prevents surprise gaps.",
        panelNote: "Link to the right specialist when needed.",
      },
      {
        id: "handoff",
        index: "03",
        name: "Practical handoff",
        summary: "Files teams can use.",
        title: "Handover matched to the agreement.",
        description:
          "Exports, editable sources and developer notes are listed when included. Licensing for fonts and stock stays accurate.",
        panelStatement: "Editable files are specified — not assumed.",
        panelNote: "Third-party terms still apply.",
      },
      {
        id: "honest-proof",
        index: "04",
        name: "Honest evidence",
        summary: "No filler gallery claims.",
        title: "Show real work only when provenance is clear.",
        description:
          "Dedicated Design case studies are not invented to fill every service. When work is shown, Buildaze’s role and deliverables must be accurate.",
        panelStatement: "Missing proof is better than borrowed claims.",
        panelNote: "Portfolio gaps are recorded for the owner.",
      },
    ],
    closingTitle: "Ready to describe the brief?",
    closingBody:
      "Share the problem, audience, channels and required outputs. Existing brand guidelines help when you have them.",
    pillars: ["Brief", "Scope", "Review", "Handoff"],
    closingNote: "Typography on this website stays unchanged.",
    ctaLabel: "Discuss your design project",
    ctaHref: "/contact?service=design",
  },

  overviewTitle: "What design includes",
  overview: [
    "Design covers graphic design, illustration, app design, UI/UX and branding.",
    "App design belongs here; building the working product belongs under Development. Campaign management belongs under Digital Marketing.",
  ],
  solutionsTitle: "Design services",
  solutions: [
    "Graphic Design",
    "Illustration",
    "App Design",
    "UI/UX Design",
    "Branding",
  ],
  deliverables: [
    "Scoped visual or experience deliverables",
    "Review stages agreed in writing",
    "Exports and editable files where included",
    "Handoff notes for internal or development teams",
  ],
  included: [
    "Discovery of goals and audience",
    "Written scope before production",
    "Design with defined review points",
    "Handover matched to the agreement",
  ],
  stackTags: ["Figma", "Brand systems", "UI kits", "Illustration"],
  process: [
    {
      index: "01",
      name: "Understand",
      duration: "Scoped",
      description: "Audience, problem and intended channels.",
    },
    {
      index: "02",
      name: "Scope",
      duration: "Scoped",
      description: "Deliverables, formats and review rounds.",
    },
    {
      index: "03",
      name: "Design and review",
      duration: "Scoped",
      description: "Concepts and refinements at checkpoints.",
    },
    {
      index: "04",
      name: "Handover",
      duration: "Scoped",
      description: "Files, guidelines and notes as agreed.",
    },
  ],
  relatedWorkIds: [],
  faqEyebrow: "Design FAQs",
  faqHeadline: "Design questions",
  faqIntro: [
    "Short answers about choosing a service, briefs, files, pricing factors and development.",
  ],
  faqs: [
    {
      question: "Which design service do I need?",
      answer:
        "Choose Graphic Design for communication assets, Illustration for original artwork, App Design for mobile experiences, UI/UX for digital journeys and interfaces, and Branding for visual identity. One project can combine services.",
    },
    {
      question: "Can you work with our current branding?",
      answer:
        "Share your brand guidelines and existing assets. The scope can focus on applying that identity consistently or include agreed changes to it.",
    },
    {
      question: "What should we provide before the project starts?",
      answer:
        "A description of the problem, audience, intended channels, examples, required outputs and any existing assets. For digital products, include the key user tasks and current screens where available.",
    },
    {
      question: "What affects the price and timeline?",
      answer:
        "The number and complexity of outputs, research requirements, platform or device coverage, review rounds and readiness of your content all affect the scope. Agree the estimate after the brief is defined.",
    },
    {
      question: "Will we receive editable files?",
      answer:
        "List editable source files and export formats in the agreement. Third-party assets, fonts and tools may have separate licensing requirements.",
    },
    {
      question: "Can you also develop the website or app?",
      answer:
        "Buildaze also offers development services. Design and implementation can be discussed together, with the deliverables and responsibilities clearly defined for each.",
    },
  ],
  faqClosingTitle: "Still shaping the brief?",
  faqClosingBody:
    "Include what you need in the enquiry form and we will suggest a practical starting service.",
  faqCtaLabel: "Discuss your design project",
  faqCtaHref: "/contact?service=design",
};

export const DESIGN_LEAF_PATHS = LEAF;
