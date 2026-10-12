import { buildContactHref } from "../contact/paths";
import type { Service, ServicePageContent } from "./services";

const HUB = "/services/design";

function leafEnquiry(_path: string, service: string, problem?: string) {
  return buildContactHref({ service: "design", capability: service, problem });
}

function base(
  partial: Omit<ServicePageContent, "relatedWorkIds"> & {
    relatedWorkIds?: string[];
  },
): ServicePageContent {
  return { ...partial, relatedWorkIds: partial.relatedWorkIds ?? [] };
}

const graphicPath = `${HUB}/graphic-design`;
const illustrationPath = `${HUB}/illustration`;
const appPath = `${HUB}/app-design`;
const uiuxPath = `${HUB}/ui-ux-design`;
const brandingPath = `${HUB}/branding`;

/** Five Design leaf services nested under `/services/design/*`. */
export const designLeaves: Service[] = [
  {
    id: "design-graphic",
    slug: "graphic-design",
    path: graphicPath,
    role: "detail",
    index: "01",
    name: "Graphic Design",
    shortName: "Graphic",
    oneLiner:
      "Marketing and business visuals scoped to your message and channels.",
    description:
      "Graphic design services for campaign assets, social graphics, presentations and business materials — with clear formats and brand rules.",
    capabilities: [
      "Campaign assets",
      "Social graphics",
      "Presentations",
      "Business materials",
    ],
    flow: ["Brief", "Direction", "Design", "Export"],
    cta: "Explore Graphic Design",
    relatedServiceIds: [
      "design",
      "design-branding",
      "design-illustration",
      "dm-social",
      "dm-meta-ads",
    ],
    page: base({
      metaTitle: "Graphic Design Services for Businesses | Buildaze",
      metaDescription:
        "Create consistent marketing and business visuals with Buildaze. Discuss campaign assets, social graphics, presentations and the formats you need.",
      eyebrow: "Communication and campaign visuals",
      headline: "Graphic design that makes your message clear.",
      subheadline:
        "Buildaze creates graphic design around your message, audience and intended channels. We define the required assets, sizes and brand rules before developing the layouts and preparing the agreed files.",
      ctaLabel: "Discuss your graphic design brief",
      secondaryCtaLabel: "Back to Design services",
      problems: {
        eyebrow: "Common graphic design needs",
        headline: "Visuals for the channels you use",
        intro: [
          "Use graphic design when you need a clear way to communicate an offer, explain information or keep campaign assets consistent.",
        ],
        problems: [
          {
            id: "campaign",
            index: "01",
            name: "Campaign assets need consistency",
            title: "Layouts that follow the same visual rules.",
            description:
              "Scope an asset list and dimensions so every placement stays on-brand.",
            enquiryHref: leafEnquiry(
              graphicPath,
              "Graphic Design",
              "Campaign assets need consistency",
            ),
          },
          {
            id: "social",
            index: "02",
            name: "Social graphics look improvised",
            title: "Social formats with a clear brief.",
            description:
              "Define channels, sizes and variations before production — not endless one-off requests without a system.",
            enquiryHref: leafEnquiry(
              graphicPath,
              "Graphic Design",
              "Social graphics look improvised",
            ),
          },
          {
            id: "presentations",
            index: "03",
            name: "Presentations and decks are hard to follow",
            title: "Clear business communication layouts.",
            description:
              "Structure slides or documents so the message is easy to scan and present.",
            enquiryHref: leafEnquiry(
              graphicPath,
              "Graphic Design",
              "Presentations hard to follow",
            ),
          },
        ],
        closingTitle: "Need ads managed too?",
        closingBody:
          "Graphic design supplies agreed creative assets. Campaign setup and media optimization sit under Digital Marketing services such as Meta Ads or Social Media Marketing.",
        ctaLabel: "Discuss graphic design brief",
        ctaHref: leafEnquiry(graphicPath, "Graphic Design"),
      },
      capabilities: {
        eyebrow: "Graphic design scope",
        headline: "What your design brief covers",
        intro: [
          "A scoped project can cover social graphics, digital banners, presentation layouts or business materials where these outputs are part of the approved offer.",
        ],
        capabilities: [
          {
            id: "brief",
            index: "01",
            name: "Asset list and direction",
            title: "Dimensions, channels and brand rules.",
            description:
              "Agree what will be designed and which placements must be supported.",
            items: [
              "Asset inventory",
              "Sizes and channels",
              "Brand rules or references",
              "Variation needs",
            ],
            cta: "Discuss asset list",
            href: leafEnquiry(graphicPath, "Graphic Design", "Asset list"),
          },
          {
            id: "layouts",
            index: "02",
            name: "Layouts and variations",
            title: "Approved designs for the agreed set.",
            description:
              "Develop layouts with review stages written into the scope — not unlimited revisions unless offered.",
            items: [
              "Creative direction",
              "Draft layouts",
              "Agreed refinements",
              "Final approved set",
            ],
            cta: "Discuss layouts",
            href: leafEnquiry(graphicPath, "Graphic Design", "Layouts"),
          },
          {
            id: "exports",
            index: "03",
            name: "Exports and editable files",
            title: "Files matched to the placements.",
            description:
              "Prepare exports for specified placements and editable sources where included.",
            items: [
              "Export formats",
              "Placement-ready files",
              "Editable sources where included",
              "Licensing notes",
            ],
            cta: "Discuss exports",
            href: leafEnquiry(graphicPath, "Graphic Design", "Exports"),
          },
        ],
        closingTitle: "Print materials",
        closingBody:
          "Print design is included only when it is an approved part of the brief. Printing and production are separately scoped.",
        ctaLabel: "Discuss graphic design brief",
        ctaHref: leafEnquiry(graphicPath, "Graphic Design"),
      },
      deliveryProcess: {
        eyebrow: "Process",
        headline: "From concept to final assets",
        intro: [
          "Define the brief → develop concepts → review → export agreed files.",
        ],
        steps: [
          {
            id: "brief",
            index: "01",
            shortName: "Brief",
            name: "Brief",
            title: "Message, channels and asset list.",
            description:
              "Capture audience, offer and required placements before design starts.",
            itemsLabel: "Brief",
            items: ["Message", "Channels", "Asset list", "Brand inputs"],
            outcome: "A clear production brief.",
          },
          {
            id: "concept",
            index: "02",
            shortName: "Concept",
            name: "Concept",
            title: "Direction you can approve.",
            description:
              "Share creative direction and early layouts for feedback.",
            itemsLabel: "Concept",
            items: ["Direction", "Draft layouts", "Feedback"],
            outcome: "Approved direction for production.",
          },
          {
            id: "produce",
            index: "03",
            shortName: "Produce",
            name: "Produce",
            title: "Final assets for agreed placements.",
            description:
              "Complete the scoped set and prepare exports.",
            itemsLabel: "Produce",
            items: ["Final layouts", "Variations", "Exports"],
            outcome: "Files ready for the channels you named.",
          },
        ],
        closingTitle: "Identity rules missing?",
        closingBody:
          "If visuals are inconsistent because identity is unclear, start with Branding — then apply it through Graphic Design.",
        ctaLabel: "Discuss graphic design brief",
        ctaHref: "/contact?service=design",
      },
      why: {
        eyebrow: "Boundaries",
        headline: "What graphic design does — and does not — include",
        intro: [
          "Design covers the agreed visual assets. Media spend and printing are separate.",
        ],
        differentiators: [
          {
            id: "assets",
            index: "01",
            name: "Agreed assets",
            summary: "Known outputs.",
            title: "An asset list before production.",
            description:
              "Dimensions and variations are written down so delivery stays measurable.",
            panelStatement: "Ambiguous requests create rework.",
            panelNote: "Specify placements.",
          },
          {
            id: "not-ads",
            index: "02",
            name: "Not ad management",
            summary: "Creative ≠ media.",
            title: "Campaign management stays separate.",
            description:
              "Setup, spend and optimization belong to marketing services when you need them.",
            panelStatement: "Assets support campaigns; they are not the campaign.",
            panelNote: "Link to Meta Ads or Social when relevant.",
          },
          {
            id: "revisions",
            index: "03",
            name: "Defined revisions",
            summary: "Review stages.",
            title: "Revision rounds are scoped.",
            description:
              "Agree review stages in the project. Unlimited revisions are not assumed.",
            panelStatement: "Feedback works best with checkpoints.",
            panelNote: "Write it into the brief.",
          },
        ],
        closingTitle: "Ready to brief graphic design?",
        closingBody:
          "Share channels, sizes and any brand guidelines you already have.",
        pillars: ["Brief", "Design", "Export"],
        closingNote: "No dedicated graphic portfolio strip until verified.",
        ctaLabel: "Discuss your graphic design brief",
        ctaHref: "/contact?service=design",
      },
      overviewTitle: "What graphic design includes",
      overview: [
        "Graphic design covers communication and campaign visuals with agreed formats.",
        "Original illustration series and full brand systems have their own destinations.",
      ],
      solutionsTitle: "Graphic design focus",
      solutions: [
        "Social media graphic design",
        "Digital banners",
        "Presentation layouts",
        "Business communication assets",
      ],
      deliverables: [
        "Agreed asset list and dimensions",
        "Approved layouts and variations",
        "Exports for specified placements",
        "Editable files where included",
      ],
      included: [
        "Brief clarification",
        "Creative direction",
        "Review stages in scope",
        "Export preparation",
      ],
      stackTags: ["Figma", "Brand application", "Export formats"],
      process: [
        {
          index: "01",
          name: "Brief",
          duration: "Scoped",
          description: "Message, channels and asset list.",
        },
        {
          index: "02",
          name: "Concept",
          duration: "Scoped",
          description: "Direction and draft layouts.",
        },
        {
          index: "03",
          name: "Produce",
          duration: "Scoped",
          description: "Final assets and exports.",
        },
      ],
      faqs: [
        {
          question: "Can you prepare assets for different placements?",
          answer:
            "Yes, the brief should specify dimensions, channels and required variations so those exports are included in scope.",
        },
        {
          question: "Does the service include ad management?",
          answer:
            "Graphic design supplies agreed creative assets. Campaign setup, media spend and optimization are a separate marketing scope.",
        },
        {
          question: "How are revisions handled?",
          answer:
            "Agree review stages and included revision rounds in the project scope; do not promise unlimited revisions unless this is the actual offer.",
        },
        {
          question: "Can you design print materials?",
          answer:
            "Discuss the required output and printer specifications first. Print design is included only if it is an approved service; printing itself is separately scoped.",
        },
      ],
      faqCtaLabel: "Discuss graphic design brief",
      faqCtaHref: "/contact?service=design",
    }),
  },
  {
    id: "design-illustration",
    slug: "illustration",
    path: illustrationPath,
    role: "detail",
    index: "02",
    name: "Illustration",
    shortName: "Illustration",
    oneLiner:
      "Custom illustration for brand communication and digital experiences.",
    description:
      "Custom illustration design services scoped around style, intended use and required artwork formats.",
    capabilities: [
      "Custom illustration",
      "Brand illustration",
      "Digital artwork",
      "Visual storytelling",
    ],
    flow: ["Purpose", "Style", "Draft", "Final"],
    cta: "Explore Illustration",
    relatedServiceIds: [
      "design",
      "design-graphic",
      "design-branding",
      "design-uiux",
    ],
    page: base({
      metaTitle: "Custom Illustration Design Services | Buildaze",
      metaDescription:
        "Buildaze creates custom illustrations for brand communication and digital experiences. Define the style, intended use and required artwork formats.",
      eyebrow: "Original artwork with a purpose",
      headline: "Custom illustrations with a clear purpose.",
      subheadline:
        "Turn an idea or message into artwork that fits your brand and context. Buildaze scopes illustration around the intended use, visual direction and required formats, with review points before final production.",
      ctaLabel: "Discuss your illustration project",
      secondaryCtaLabel: "Back to Design services",
      problems: {
        eyebrow: "When illustration helps",
        headline: "Artwork for your message and audience",
        intro: [
          "Illustration can help explain a concept, give content a distinct style or support a digital experience. Define whether you need one image or a consistent series.",
        ],
        problems: [
          {
            id: "explain",
            index: "01",
            name: "A concept is hard to explain with photos alone",
            title: "Artwork that makes the idea visible.",
            description:
              "Agree what the illustration must communicate and where it will appear.",
            enquiryHref: leafEnquiry(
              illustrationPath,
              "Illustration",
              "Concept hard to explain with photos",
            ),
          },
          {
            id: "style",
            index: "02",
            name: "Content needs a recognizable visual style",
            title: "A shared direction for one piece or a series.",
            description:
              "Share references for a compatible direction — without copying another creator’s artwork.",
            enquiryHref: leafEnquiry(
              illustrationPath,
              "Illustration",
              "Need recognizable visual style",
            ),
          },
          {
            id: "digital",
            index: "03",
            name: "Product or marketing pages need custom visuals",
            title: "Illustrations suited to digital placements.",
            description:
              "Scope export sizes and how artwork will sit in layouts or interfaces.",
            enquiryHref: leafEnquiry(
              illustrationPath,
              "Illustration",
              "Need custom visuals for digital pages",
            ),
          },
        ],
        closingTitle: "Need layout around the artwork?",
        closingBody:
          "Graphic Design covers asset composition. Branding sets identity rules that illustration can follow.",
        ctaLabel: "Discuss illustration project",
        ctaHref: leafEnquiry(illustrationPath, "Illustration"),
      },
      capabilities: {
        eyebrow: "Illustration scope",
        headline: "Agree the visual direction",
        intro: [
          "Character design, icon sets, infographics, animation and 3D appear only when explicitly offered and scoped. Static illustration does not automatically include animation.",
        ],
        capabilities: [
          {
            id: "direction",
            index: "01",
            name: "Concept and style direction",
            title: "Purpose, references and constraints.",
            description:
              "Define the story, audience and visual boundaries before drafting.",
            items: [
              "Intended use",
              "Style references",
              "Do-not-copy boundaries",
              "Series vs single piece",
            ],
            cta: "Discuss style direction",
            href: leafEnquiry(
              illustrationPath,
              "Illustration",
              "Style direction",
            ),
          },
          {
            id: "draft",
            index: "02",
            name: "Draft and review",
            title: "Checkpoint before final production.",
            description:
              "Review draft artwork so direction issues are caught early.",
            items: ["Draft artwork", "Feedback", "Agreed refinements"],
            cta: "Discuss draft review",
            href: leafEnquiry(illustrationPath, "Illustration", "Draft review"),
          },
          {
            id: "final",
            index: "03",
            name: "Final artwork and exports",
            title: "Formats and usage terms as agreed.",
            description:
              "Deliver finals, defined variations and editable artwork where included. Usage rights for channels belong in the agreement.",
            items: [
              "Final illustrations",
              "Variations in scope",
              "Export formats",
              "Usage terms",
            ],
            cta: "Discuss final artwork",
            href: leafEnquiry(illustrationPath, "Illustration", "Final artwork"),
          },
        ],
        closingTitle: "Icons and infographics",
        closingBody:
          "Icon sets and infographics are scoped separately when Buildaze provides them for a project — they are not assumed with every illustration engagement.",
        ctaLabel: "Discuss illustration project",
        ctaHref: leafEnquiry(illustrationPath, "Illustration"),
      },
      deliveryProcess: {
        eyebrow: "Process",
        headline: "From concept to final artwork",
        intro: [
          "Purpose and style → draft → refine → deliver finals and formats.",
        ],
        steps: [
          {
            id: "purpose",
            index: "01",
            shortName: "Purpose",
            name: "Purpose",
            title: "Message, use and style boundaries.",
            description:
              "Confirm where artwork will live and what it must communicate.",
            itemsLabel: "Purpose",
            items: ["Message", "Placement", "Style boundaries"],
            outcome: "A clear creative brief.",
          },
          {
            id: "draft",
            index: "02",
            shortName: "Draft",
            name: "Draft",
            title: "Artwork you can review.",
            description:
              "Produce drafts for feedback before final rendering.",
            itemsLabel: "Draft",
            items: ["Drafts", "Review", "Adjustments"],
            outcome: "Approved direction for finals.",
          },
          {
            id: "deliver",
            index: "03",
            shortName: "Deliver",
            name: "Deliver",
            title: "Finals and agreed files.",
            description:
              "Hand over finals, exports and editable sources where included.",
            itemsLabel: "Deliver",
            items: ["Finals", "Exports", "Usage notes"],
            outcome: "Artwork ready for the agreed channels.",
          },
        ],
        closingTitle: "Stock and fonts",
        closingBody:
          "Licensed assets retain their own terms. Custom work does not convert stock into exclusive ownership automatically.",
        ctaLabel: "Discuss illustration project",
        ctaHref: "/contact?service=design",
      },
      why: {
        eyebrow: "Boundaries",
        headline: "Custom illustration — not borrowed style",
        intro: [
          "References guide direction. They do not authorize copying another creator’s work.",
        ],
        differentiators: [
          {
            id: "purpose",
            index: "01",
            name: "Purpose-led",
            summary: "Know the job of the art.",
            title: "Artwork tied to a message and placement.",
            description:
              "Decorative filler without a communication job is out of scope until the purpose is clear.",
            panelStatement: "Style without purpose wastes budget.",
            panelNote: "Start with use.",
          },
          {
            id: "rights",
            index: "02",
            name: "Usage clarity",
            summary: "Channels in the agreement.",
            title: "Intended channels and rights are specified.",
            description:
              "Multi-channel reuse needs explicit usage terms, including third-party restrictions.",
            panelStatement: "Ask before assuming perpetual all-media rights.",
            panelNote: "Write it down.",
          },
          {
            id: "animation",
            index: "03",
            name: "Static by default",
            summary: "Motion is separate.",
            title: "Animation is not automatic.",
            description:
              "Include motion only when explicitly offered and scoped.",
            panelStatement: "Still artwork ≠ motion design.",
            panelNote: "Scope motion separately.",
          },
        ],
        closingTitle: "Ready to discuss illustration?",
        closingBody:
          "Share the message, placements and any approved style references.",
        pillars: ["Purpose", "Style", "Review", "Deliver"],
        closingNote: "No fabricated illustration gallery.",
        ctaLabel: "Discuss your illustration project",
        ctaHref: "/contact?service=design",
      },
      overviewTitle: "What illustration includes",
      overview: [
        "Illustration covers custom artwork for brand and digital use with agreed style and formats.",
        "Layout systems and brand guidelines have their own service pages.",
      ],
      solutionsTitle: "Illustration focus",
      solutions: [
        "Custom illustration",
        "Brand illustration",
        "Digital illustration",
        "Series with shared direction",
      ],
      deliverables: [
        "Agreed concept and style direction",
        "Reviewed draft artwork",
        "Final illustrations and variations",
        "Exports and usage terms where included",
      ],
      included: [
        "Purpose and style discussion",
        "Draft review checkpoint",
        "Final production in scope",
        "File handover as agreed",
      ],
      stackTags: ["Custom illustration", "Style direction", "Export formats"],
      process: [
        {
          index: "01",
          name: "Purpose",
          duration: "Scoped",
          description: "Message, placement and style boundaries.",
        },
        {
          index: "02",
          name: "Draft",
          duration: "Scoped",
          description: "Reviewable artwork.",
        },
        {
          index: "03",
          name: "Deliver",
          duration: "Scoped",
          description: "Finals and formats.",
        },
      ],
      faqs: [
        {
          question: "Can you match our existing visual style?",
          answer:
            "Share approved references and usage requirements. Agree a compatible visual direction without copying another creator's artwork.",
        },
        {
          question: "Can we use the artwork in different channels?",
          answer:
            "Specify intended channels and usage rights in the agreement, including any restrictions from third-party assets.",
        },
        {
          question: "Do you provide a series of illustrations?",
          answer:
            "A series can be scoped around a shared visual direction, an agreed number of pieces and defined variations.",
        },
        {
          question: "Are illustrations animated?",
          answer:
            "Static illustration does not automatically include animation; include it only where explicitly offered and scoped.",
        },
      ],
      faqCtaLabel: "Discuss illustration project",
      faqCtaHref: "/contact?service=design",
    }),
  },
  {
    id: "design-app",
    slug: "app-design",
    path: appPath,
    role: "detail",
    index: "03",
    name: "App Design",
    shortName: "App Design",
    oneLiner:
      "Mobile app UI/UX design for journeys, screens and prototypes.",
    description:
      "Mobile app design services covering flows, screens, interaction states, prototypes and developer handoff — separate from app development.",
    capabilities: [
      "Mobile journeys",
      "App wireframes",
      "UI screens",
      "Prototypes",
      "Developer handoff",
    ],
    flow: ["Tasks", "Flows", "Screens", "Handoff"],
    cta: "Explore App Design",
    relatedServiceIds: ["design", "design-uiux", "development", "ai-applications"],
    page: base({
      metaTitle: "Mobile App UI/UX Design Services | Buildaze",
      metaDescription:
        "Plan mobile app journeys, screens and prototypes with Buildaze. Define the design scope, interaction states and handoff your development team needs.",
      eyebrow: "Mobile product design",
      headline: "Mobile app design built around your users.",
      subheadline:
        "Buildaze designs mobile app experiences around the tasks people need to complete. We map the agreed journeys, develop screens and interaction states, and prepare a prototype and handoff suited to the project.",
      ctaLabel: "Discuss your app design",
      secondaryCtaLabel: "Back to Design services",
      problems: {
        eyebrow: "Common app design needs",
        headline: "Start with the essential mobile journeys",
        intro: [
          "Use App Design to plan a new mobile experience or improve an existing one. Define target platforms and device assumptions rather than stretching one screen across every context.",
        ],
        problems: [
          {
            id: "onboarding",
            index: "01",
            name: "Onboarding or core tasks are confusing",
            title: "Journeys focused on what users must complete.",
            description:
              "Map onboarding, browsing, booking or account tasks that matter to your app.",
            enquiryHref: leafEnquiry(
              appPath,
              "App Design",
              "Onboarding or core tasks confusing",
            ),
          },
          {
            id: "redesign",
            index: "02",
            name: "Existing app needs a clearer experience",
            title: "Improve selected journeys with current screens as input.",
            description:
              "Share current screens and known problems so scope stays focused.",
            enquiryHref: leafEnquiry(
              appPath,
              "App Design",
              "Existing app needs clearer experience",
            ),
          },
          {
            id: "handoff-gap",
            index: "03",
            name: "Developers lack clear design inputs",
            title: "Handoff notes, components and states.",
            description:
              "List design files, assets, interaction notes and platform assumptions in the agreement.",
            enquiryHref: leafEnquiry(
              appPath,
              "App Design",
              "Developers lack clear design inputs",
            ),
          },
        ],
        closingTitle: "Need the app built?",
        closingBody:
          "App Design covers flows, screens, prototype and handoff. Implementation is discussed under Development — there is no separate App Development URL yet.",
        ctaLabel: "Discuss app design",
        ctaHref: leafEnquiry(appPath, "App Design"),
      },
      capabilities: {
        eyebrow: "App design scope",
        headline: "Screens and states in scope",
        intro: [
          "A prototype demonstrates the agreed experience; it is not a deployed app. Backend work, development, platform submission and maintenance require separate scope.",
        ],
        capabilities: [
          {
            id: "flows",
            index: "01",
            name: "Flows and inventory",
            title: "Scoped journeys and screen list.",
            description:
              "Agree which journeys and screens are in the first design release.",
            items: [
              "Core tasks",
              "Screen inventory",
              "Platform assumptions",
              "Out-of-scope journeys",
            ],
            cta: "Discuss flows",
            href: leafEnquiry(appPath, "App Design", "Flows and inventory"),
          },
          {
            id: "ui",
            index: "02",
            name: "Wireframes, UI and states",
            title: "Screens, components and key states.",
            description:
              "Design agreed UI screens and reusable components, including loading, empty and error states in scope.",
            items: [
              "Wireframes",
              "UI screens",
              "Components",
              "Key interaction states",
            ],
            cta: "Discuss UI screens",
            href: leafEnquiry(appPath, "App Design", "UI screens and states"),
          },
          {
            id: "prototype",
            index: "03",
            name: "Prototype and handoff",
            title: "Selected journeys, not every possible state.",
            description:
              "Specify which interactions the prototype covers and what developers receive.",
            items: [
              "Prototype for specified journeys",
              "Design files",
              "Assets and notes",
              "Device assumptions",
            ],
            cta: "Discuss prototype",
            href: leafEnquiry(appPath, "App Design", "Prototype and handoff"),
          },
        ],
        closingTitle: "Broader web product UX?",
        closingBody:
          "Website and multi-surface product journeys are covered on UI/UX Design. Mobile-specific work stays here.",
        ctaLabel: "Discuss app design",
        ctaHref: leafEnquiry(appPath, "App Design"),
      },
      deliveryProcess: {
        eyebrow: "Process",
        headline: "Review before development",
        intro: [
          "Tasks → flows and wireframes → UI and prototype → handoff for build.",
        ],
        steps: [
          {
            id: "tasks",
            index: "01",
            shortName: "Tasks",
            name: "Tasks",
            title: "What users must complete.",
            description:
              "Define platforms, users and essential journeys.",
            itemsLabel: "Tasks",
            items: ["Users", "Core tasks", "Platforms"],
            outcome: "A focused design problem.",
          },
          {
            id: "structure",
            index: "02",
            shortName: "Structure",
            name: "Structure",
            title: "Flows and wireframes.",
            description:
              "Organize journeys before high-fidelity polish.",
            itemsLabel: "Structure",
            items: ["Flows", "Wireframes", "Screen list"],
            outcome: "Agreed structure for UI.",
          },
          {
            id: "ui",
            index: "03",
            shortName: "UI",
            name: "UI and prototype",
            title: "Screens and interactive review.",
            description:
              "Design UI and prototype specified journeys for review.",
            itemsLabel: "UI",
            items: ["Screens", "States", "Prototype"],
            outcome: "A reviewable mobile experience.",
          },
          {
            id: "handoff",
            index: "04",
            shortName: "Handoff",
            name: "Handoff",
            title: "Files developers can use.",
            description:
              "Deliver design files, assets and notes listed in the agreement.",
            itemsLabel: "Handoff",
            items: ["Files", "Assets", "Interaction notes"],
            outcome: "Design ready for implementation scoping.",
          },
        ],
        closingTitle: "Platform expertise claims",
        closingBody:
          "We do not promise platform-specific expertise without evidence. Assumptions are written into the brief.",
        ctaLabel: "Discuss app design",
        ctaHref: "/contact?service=design",
      },
      why: {
        eyebrow: "Boundaries",
        headline: "Design is not deployment",
        intro: [
          "Keep prototype review separate from store submission and engineering.",
        ],
        differentiators: [
          {
            id: "prototype",
            index: "01",
            name: "Prototype clarity",
            summary: "Demo ≠ shipped app.",
            title: "A prototype demonstrates agreed journeys.",
            description:
              "It is not a claim that every screen or backend path is built.",
            panelStatement: "Specify what the prototype covers.",
            panelNote: "Avoid over-promising completeness.",
          },
          {
            id: "dev",
            index: "02",
            name: "Separate build",
            summary: "Development is distinct.",
            title: "Implementation has its own scope.",
            description:
              "Discuss build under Development when you need the working product.",
            panelStatement: "Design handoff enables build — it is not the build.",
            panelNote: "Combine only with written responsibilities.",
          },
          {
            id: "states",
            index: "03",
            name: "Real states",
            summary: "Empty, loading, error.",
            title: "Include states that matter in scope.",
            description:
              "Happy-path mockups alone leave developers guessing.",
            panelStatement: "Edge states are part of usable design.",
            panelNote: "List them in the inventory.",
          },
        ],
        closingTitle: "Ready to discuss app design?",
        closingBody:
          "Share core tasks, current screens if any, and target platforms.",
        pillars: ["Tasks", "Flows", "UI", "Handoff"],
        closingNote: "No invented mobile case metrics.",
        ctaLabel: "Discuss your app design",
        ctaHref: "/contact?service=design",
      },
      overviewTitle: "What app design includes",
      overview: [
        "App Design covers mobile journeys, screens, prototypes and developer handoff.",
        "Building and submitting the app is a separate Development discussion.",
      ],
      solutionsTitle: "App design focus",
      solutions: [
        "Mobile app design",
        "App wireframes and prototyping",
        "App UI/UX design",
        "App redesign of selected journeys",
      ],
      deliverables: [
        "Scoped flows and screen inventory",
        "Wireframes and UI screens",
        "Prototype for specified journeys",
        "Developer handoff notes and assets",
      ],
      included: [
        "Task and platform clarification",
        "Written design scope",
        "Review checkpoints",
        "Handoff package as agreed",
      ],
      stackTags: ["Figma", "Mobile UI", "Prototyping", "Handoff"],
      process: [
        {
          index: "01",
          name: "Tasks",
          duration: "Scoped",
          description: "Users, journeys and platforms.",
        },
        {
          index: "02",
          name: "Structure",
          duration: "Scoped",
          description: "Flows and wireframes.",
        },
        {
          index: "03",
          name: "UI",
          duration: "Scoped",
          description: "Screens, states and prototype.",
        },
        {
          index: "04",
          name: "Handoff",
          duration: "Scoped",
          description: "Files and notes for build.",
        },
      ],
      faqs: [
        {
          question: "Does App Design include development?",
          answer:
            "App Design covers agreed flows, screens, prototype and handoff. Implementation and deployment are separate unless included in a combined agreement.",
        },
        {
          question: "Can you improve an existing app?",
          answer:
            "Share the current screens, core tasks and known problems so the design scope can focus on the relevant journeys.",
        },
        {
          question: "Will every screen be in the prototype?",
          answer:
            "Specify the screens and interactions included. A prototype may demonstrate selected journeys rather than every possible state.",
        },
        {
          question: "What does a developer receive?",
          answer:
            "The agreement should list design files, components, assets, interaction notes and platform/device assumptions.",
        },
      ],
      faqCtaLabel: "Discuss app design",
      faqCtaHref: "/contact?service=design",
    }),
  },
  {
    id: "design-uiux",
    slug: "ui-ux-design",
    path: uiuxPath,
    role: "detail",
    index: "04",
    name: "UI/UX Design",
    shortName: "UI/UX",
    oneLiner:
      "UI/UX design for websites and digital product journeys.",
    description:
      "UI/UX design services connecting user journeys with clear interface design for websites and digital products.",
    capabilities: [
      "User flows",
      "Wireframes",
      "Interface design",
      "Prototypes",
      "UX review",
    ],
    flow: ["Goals", "Journeys", "Interface", "Handoff"],
    cta: "Explore UI/UX Design",
    relatedServiceIds: [
      "design",
      "design-app",
      "web",
      "shopify",
      "development",
    ],
    page: base({
      metaTitle: "UI/UX Design Services for Digital Products | Buildaze",
      metaDescription:
        "Buildaze plans user flows and interfaces for websites and digital products. Discuss a new experience, redesign or focused review of usability problems.",
      eyebrow: "Journeys and interfaces",
      headline: "UI/UX design that helps people complete their tasks.",
      subheadline:
        "Buildaze connects user journeys with clear interface design. Whether you are planning a new website or improving a digital product, we define the key tasks, organize the experience and design the screens and states needed for the agreed scope.",
      ctaLabel: "Discuss your UI/UX needs",
      secondaryCtaLabel: "Back to Design services",
      problems: {
        eyebrow: "Common UI/UX problems",
        headline: "Understand where users get stuck",
        intro: [
          "UX shapes how people move through a product. UI defines the screens, controls and visual hierarchy supporting those tasks.",
        ],
        problems: [
          {
            id: "stuck",
            index: "01",
            name: "Users abandon key tasks",
            title: "Journeys that need clearer structure.",
            description:
              "Map the tasks that matter and find where the experience breaks down.",
            enquiryHref: leafEnquiry(
              uiuxPath,
              "UI/UX Design",
              "Users abandon key tasks",
            ),
          },
          {
            id: "redesign",
            index: "02",
            name: "Website or product needs a clearer interface",
            title: "Interface design for agreed screens.",
            description:
              "Organize information architecture and design layouts for the scoped experience.",
            enquiryHref: leafEnquiry(
              uiuxPath,
              "UI/UX Design",
              "Website or product needs clearer interface",
            ),
          },
          {
            id: "review",
            index: "03",
            name: "We need a focused usability review",
            title: "A review with defined inputs and deliverables.",
            description:
              "A review can target selected journeys — methods and access must be agreed. Stakeholder review is not user testing.",
            enquiryHref: leafEnquiry(
              uiuxPath,
              "UI/UX Design",
              "Focused usability review",
            ),
          },
        ],
        closingTitle: "Mobile-only product?",
        closingBody:
          "Mobile-specific app design has its own destination. Store builds and CRO implementation link to Shopify or Development when relevant.",
        ctaLabel: "Discuss UI/UX needs",
        ctaHref: leafEnquiry(uiuxPath, "UI/UX Design"),
      },
      capabilities: {
        eyebrow: "UI/UX scope",
        headline: "Shape the journeys and interface",
        intro: [
          "Interviews, usability testing, analytics review and accessibility audits need defined methods, participants or access. Do not describe internal design review as user-tested research.",
        ],
        capabilities: [
          {
            id: "journey",
            index: "01",
            name: "Goals and journey mapping",
            title: "Tasks, IA and priorities.",
            description:
              "Define what users must complete and how content is organized.",
            items: [
              "Goals",
              "Journey map",
              "Scoped information architecture",
              "Priority screens",
            ],
            cta: "Discuss journeys",
            href: leafEnquiry(uiuxPath, "UI/UX Design", "Journey mapping"),
          },
          {
            id: "interface",
            index: "02",
            name: "Wireframes and UI",
            title: "Layouts, components and states.",
            description:
              "Design responsive interfaces and defined states for the agreed scope.",
            items: [
              "Wireframes",
              "Interface layouts",
              "Components",
              "Defined states",
            ],
            cta: "Discuss interface design",
            href: leafEnquiry(uiuxPath, "UI/UX Design", "Interface design"),
          },
          {
            id: "handoff",
            index: "03",
            name: "Prototype and handoff",
            title: "Reviewable experience and build notes.",
            description:
              "Prototype and documentation where included, ready for Web Development or Shopify implementation discussions.",
            items: [
              "Prototype where included",
              "Handoff documentation",
              "Asset notes",
              "Implementation dependencies",
            ],
            cta: "Discuss handoff",
            href: leafEnquiry(uiuxPath, "UI/UX Design", "Prototype and handoff"),
          },
        ],
        closingTitle: "Conversion claims",
        closingBody:
          "Design improvements should be evaluated with appropriate business data or experiments. No conversion increase is guaranteed.",
        ctaLabel: "Discuss UI/UX needs",
        ctaHref: leafEnquiry(uiuxPath, "UI/UX Design"),
      },
      deliveryProcess: {
        eyebrow: "Process",
        headline: "Review and developer handoff",
        intro: [
          "Goals → journeys and wireframes → interface design → review and handoff.",
        ],
        steps: [
          {
            id: "goals",
            index: "01",
            shortName: "Goals",
            name: "Goals",
            title: "Tasks and success signals.",
            description:
              "Clarify users, jobs to be done and constraints.",
            itemsLabel: "Goals",
            items: ["Users", "Tasks", "Constraints"],
            outcome: "A focused UX problem.",
          },
          {
            id: "structure",
            index: "02",
            shortName: "Structure",
            name: "Structure",
            title: "Journeys and wireframes.",
            description:
              "Organize the experience before visual polish.",
            itemsLabel: "Structure",
            items: ["Journeys", "IA", "Wireframes"],
            outcome: "Agreed structure.",
          },
          {
            id: "ui",
            index: "03",
            shortName: "UI",
            name: "UI",
            title: "Interface design and states.",
            description:
              "Design screens and components for the scoped product.",
            itemsLabel: "UI",
            items: ["Layouts", "Components", "States"],
            outcome: "Interface ready for review.",
          },
          {
            id: "handoff",
            index: "04",
            shortName: "Handoff",
            name: "Handoff",
            title: "Prototype and documentation as scoped.",
            description:
              "Prepare materials your build team can use.",
            itemsLabel: "Handoff",
            items: ["Prototype", "Docs", "Assets"],
            outcome: "Design ready for implementation scoping.",
          },
        ],
        closingTitle: "Implementation partners",
        closingBody:
          "Web Development and Shopify cover building the experience. Design and build can be combined with clear responsibilities.",
        ctaLabel: "Discuss UI/UX needs",
        ctaHref: "/contact?service=design",
      },
      why: {
        eyebrow: "Boundaries",
        headline: "UI and UX work together — with honest methods",
        intro: [
          "Call research and testing only what you actually run.",
        ],
        differentiators: [
          {
            id: "ux-ui",
            index: "01",
            name: "UX + UI",
            summary: "Journeys and interface.",
            title: "UX organizes tasks; UI supports them visually.",
            description:
              "Both can sit in one engagement without splitting into thin keyword pages.",
            panelStatement: "One destination, clear deliverables.",
            panelNote: "App Design remains for mobile-specific work.",
          },
          {
            id: "methods",
            index: "02",
            name: "Scoped methods",
            summary: "No fake research.",
            title: "Testing and audits only when defined.",
            description:
              "Participants, access and deliverables must be written into scope.",
            panelStatement: "Internal review ≠ user testing.",
            panelNote: "Be explicit.",
          },
          {
            id: "conversion",
            index: "03",
            name: "No conversion promises",
            summary: "Measure instead.",
            title: "Evaluate improvements with data when available.",
            description:
              "Design can reduce friction; it cannot honestly guarantee a lift.",
            panelStatement: "No guaranteed conversion increase.",
            panelNote: "Use experiments when you have them.",
          },
        ],
        closingTitle: "Ready to discuss UI/UX?",
        closingBody:
          "Share the product URL or screens, key tasks and known friction points.",
        pillars: ["Goals", "Journeys", "UI", "Handoff"],
        closingNote: "No fabricated UX case metrics.",
        ctaLabel: "Discuss your UI/UX needs",
        ctaHref: "/contact?service=design",
      },
      overviewTitle: "What UI/UX design includes",
      overview: [
        "UI/UX design covers journeys, information architecture, wireframes, interface design and handoff for websites and digital products.",
        "Mobile-only app design and store implementation have related specialist pages.",
      ],
      solutionsTitle: "UI/UX focus",
      solutions: [
        "Website UX design",
        "Product interface design",
        "UX audit or focused review",
        "Responsive UI design",
      ],
      deliverables: [
        "Goals and journey map",
        "Scoped information architecture",
        "Wireframes and interface layouts",
        "Prototype and handoff documentation where included",
      ],
      included: [
        "Task discovery",
        "Written scope and methods",
        "Design review checkpoints",
        "Handoff as agreed",
      ],
      stackTags: ["Figma", "UX flows", "UI systems", "Prototyping"],
      process: [
        {
          index: "01",
          name: "Goals",
          duration: "Scoped",
          description: "Users, tasks and constraints.",
        },
        {
          index: "02",
          name: "Structure",
          duration: "Scoped",
          description: "Journeys and wireframes.",
        },
        {
          index: "03",
          name: "UI",
          duration: "Scoped",
          description: "Interface and states.",
        },
        {
          index: "04",
          name: "Handoff",
          duration: "Scoped",
          description: "Prototype and docs as scoped.",
        },
      ],
      faqs: [
        {
          question: "What is the difference between UI and UX?",
          answer:
            "UX organizes tasks and journeys; UI defines the visual and interactive interface supporting them.",
        },
        {
          question: "Can we start with a focused review?",
          answer:
            "A review can be scoped to selected journeys or screens, with agreed inputs, methods and deliverables.",
        },
        {
          question: "Is user testing included?",
          answer:
            "Only when scoped with a method, participants and responsibilities. A stakeholder review is not a substitute for user testing.",
        },
        {
          question: "Can design guarantee more conversions?",
          answer:
            "Design improvements should be evaluated using appropriate business data or experiments. No conversion increase is guaranteed.",
        },
      ],
      faqCtaLabel: "Discuss UI/UX needs",
      faqCtaHref: "/contact?service=design",
    }),
  },
  {
    id: "design-branding",
    slug: "branding",
    path: brandingPath,
    role: "detail",
    index: "05",
    name: "Branding",
    shortName: "Branding",
    oneLiner:
      "Brand identity design, logo work and practical guidelines.",
    description:
      "Brand identity and branding design services for logo systems, visual identity and usage guidelines within a clear scope.",
    capabilities: [
      "Visual identity",
      "Logo design",
      "Brand guidelines",
      "Identity refresh",
    ],
    flow: ["Direction", "Identity", "Guidelines", "Handoff"],
    cta: "Explore Branding",
    relatedServiceIds: [
      "design",
      "design-graphic",
      "design-illustration",
      "design-uiux",
    ],
    page: base({
      metaTitle: "Brand Identity & Branding Design Services | Buildaze",
      metaDescription:
        "Buildaze helps businesses define a consistent visual identity. Discuss logo design, identity assets and brand guidelines within a clear project scope.",
      eyebrow: "Visual identity you can apply",
      headline: "A visual identity your business can use consistently.",
      subheadline:
        "Buildaze helps translate your business direction into a coherent visual identity. We scope the required logo work, visual system and practical guidelines so your team can apply the brand consistently across agreed touchpoints.",
      ctaLabel: "Discuss your brand identity",
      secondaryCtaLabel: "Back to Design services",
      problems: {
        eyebrow: "Common branding needs",
        headline: "Define the identity you need",
        intro: [
          "Branding design helps when starting a business, updating an identity or resolving inconsistent visuals. Agree whether the work is a focused logo project or a wider identity system.",
        ],
        problems: [
          {
            id: "new",
            index: "01",
            name: "We need a visual identity for a new business",
            title: "Identity components for the channels that matter.",
            description:
              "Identify where the brand must work before designing the system.",
            enquiryHref: leafEnquiry(
              brandingPath,
              "Branding",
              "Need visual identity for new business",
            ),
          },
          {
            id: "refresh",
            index: "02",
            name: "Our identity needs a refresh, not a full replacement",
            title: "Keep what should stay recognizable.",
            description:
              "Define what must remain and what needs improvement before agreeing scope.",
            enquiryHref: leafEnquiry(
              brandingPath,
              "Branding",
              "Identity refresh not full replacement",
            ),
          },
          {
            id: "inconsistent",
            index: "03",
            name: "Teams apply the brand inconsistently",
            title: "Practical guidelines for everyday use.",
            description:
              "Specify usage rules, formats and handoff materials suited to your team.",
            enquiryHref: leafEnquiry(
              brandingPath,
              "Branding",
              "Brand applied inconsistently",
            ),
          },
        ],
        closingTitle: "Logo only?",
        closingBody:
          "A logo is one identity element. A broader package can include visual rules, assets and guidelines — agree which you need.",
        ctaLabel: "Discuss brand identity",
        ctaHref: leafEnquiry(brandingPath, "Branding"),
      },
      capabilities: {
        eyebrow: "Branding scope",
        headline: "What your brand package includes",
        intro: [
          "Naming, messaging strategy, market research, trademark registration and legal clearance are separate and only claimed when actually provided. Client-brand type recommendations do not change Buildaze website typography.",
        ],
        capabilities: [
          {
            id: "direction",
            index: "01",
            name: "Visual direction",
            title: "Positioning inputs for the identity.",
            description:
              "Capture business direction and touchpoints before designing marks and systems.",
            items: [
              "Business context",
              "Touchpoints",
              "What must stay recognizable",
              "Out-of-scope strategy items",
            ],
            cta: "Discuss visual direction",
            href: leafEnquiry(brandingPath, "Branding", "Visual direction"),
          },
          {
            id: "identity",
            index: "02",
            name: "Identity system",
            title: "Logo variants and visual elements.",
            description:
              "Design logo work and supporting elements in the agreed package.",
            items: [
              "Logo variants where scoped",
              "Color recommendations",
              "Type recommendations for the client brand",
              "Supporting elements",
            ],
            cta: "Discuss identity system",
            href: leafEnquiry(brandingPath, "Branding", "Identity system"),
          },
          {
            id: "guidelines",
            index: "03",
            name: "Guidelines and assets",
            title: "Usage rules teams can follow.",
            description:
              "Deliver practical guidelines and final assets. Ownership and font/stock licensing follow the agreement.",
            items: [
              "Usage guidelines",
              "Final assets",
              "Do and do-not examples",
              "Licensing notes",
            ],
            cta: "Discuss guidelines",
            href: leafEnquiry(brandingPath, "Branding", "Brand guidelines"),
          },
        ],
        closingTitle: "Apply the identity next",
        closingBody:
          "Graphic Design and Illustration help produce ongoing materials and custom visual language once identity rules exist. UI/UX applies identity in digital products.",
        ctaLabel: "Discuss brand identity",
        ctaHref: leafEnquiry(brandingPath, "Branding"),
      },
      deliveryProcess: {
        eyebrow: "Process",
        headline: "From direction to brand guidelines",
        intro: [
          "Direction → identity exploration → guidelines → asset handoff.",
        ],
        steps: [
          {
            id: "direction",
            index: "01",
            shortName: "Direction",
            name: "Direction",
            title: "What the identity must support.",
            description:
              "Clarify business context and required touchpoints.",
            itemsLabel: "Direction",
            items: ["Context", "Touchpoints", "Constraints"],
            outcome: "A clear identity brief.",
          },
          {
            id: "identity",
            index: "02",
            shortName: "Identity",
            name: "Identity",
            title: "Marks and visual system.",
            description:
              "Explore and refine the agreed identity components.",
            itemsLabel: "Identity",
            items: ["Concepts", "Refinement", "System elements"],
            outcome: "Approved visual identity in scope.",
          },
          {
            id: "guidelines",
            index: "03",
            shortName: "Guidelines",
            name: "Guidelines",
            title: "Rules and files for consistent use.",
            description:
              "Document usage and deliver final assets.",
            itemsLabel: "Guidelines",
            items: ["Guidelines", "Assets", "Licensing notes"],
            outcome: "Identity ready for everyday application.",
          },
        ],
        closingTitle: "Legal clearance",
        closingBody:
          "Trademark checks and legal review need appropriate professional involvement. They are not automatic with visual identity design.",
        ctaLabel: "Discuss brand identity",
        ctaHref: "/contact?service=design",
      },
      why: {
        eyebrow: "Boundaries",
        headline: "Visual identity — not every strategy service",
        intro: [
          "Be explicit about logo-only versus wider identity packages.",
        ],
        differentiators: [
          {
            id: "logo-vs-system",
            index: "01",
            name: "Logo vs system",
            summary: "Agree the package.",
            title: "A logo is one element of identity.",
            description:
              "Wider packages add rules, assets and guidelines — only when scoped.",
            panelStatement: "Do not sell a mark as a full strategy by default.",
            panelNote: "Write the package down.",
          },
          {
            id: "legal",
            index: "02",
            name: "Legal separate",
            summary: "No automatic trademarks.",
            title: "Naming and trademark checks are separate.",
            description:
              "Visual identity design does not replace legal clearance.",
            panelStatement: "Use appropriate professionals for legal review.",
            panelNote: "Keep claims accurate.",
          },
          {
            id: "apply",
            index: "03",
            name: "Practical application",
            summary: "Guidelines for teams.",
            title: "Rules your team can actually use.",
            description:
              "Formats and examples should match how the brand will be applied day to day.",
            panelStatement: "Guidelines fail when they are impractical.",
            panelNote: "Design for the real team.",
          },
        ],
        closingTitle: "Ready to discuss branding?",
        closingBody:
          "Share whether you need a focused logo project or a wider identity system, and where it must work.",
        pillars: ["Direction", "Identity", "Guidelines"],
        closingNote: "Website fonts stay unchanged.",
        ctaLabel: "Discuss your brand identity",
        ctaHref: "/contact?service=design",
      },
      overviewTitle: "What branding design includes",
      overview: [
        "Branding design covers visual identity, logo work where scoped, supporting elements and usage guidelines.",
        "Ongoing materials and digital application link to Graphic Design, Illustration and UI/UX.",
      ],
      solutionsTitle: "Branding focus",
      solutions: [
        "Brand identity design",
        "Logo and visual system",
        "Brand guidelines",
        "Identity refresh",
      ],
      deliverables: [
        "Agreed visual direction",
        "Logo variants where scoped",
        "Color and type recommendations for the client brand",
        "Usage guidelines and final assets",
      ],
      included: [
        "Identity brief",
        "Design exploration and review",
        "Guidelines as scoped",
        "Asset handover",
      ],
      stackTags: ["Visual identity", "Logo system", "Brand guidelines"],
      process: [
        {
          index: "01",
          name: "Direction",
          duration: "Scoped",
          description: "Context and touchpoints.",
        },
        {
          index: "02",
          name: "Identity",
          duration: "Scoped",
          description: "Marks and visual system.",
        },
        {
          index: "03",
          name: "Guidelines",
          duration: "Scoped",
          description: "Rules and final assets.",
        },
      ],
      faqs: [
        {
          question: "Is branding the same as logo design?",
          answer:
            "A logo is one identity element. A broader package can include visual rules, assets and guidelines.",
        },
        {
          question: "Can you refresh our identity instead of replacing it?",
          answer:
            "Define what must remain recognizable and what needs improvement before agreeing the scope.",
        },
        {
          question: "Are naming and trademark checks included?",
          answer:
            "They are not automatically part of visual identity design. Any legal review needs appropriate professional involvement.",
        },
        {
          question: "Can our internal team use the guidelines?",
          answer:
            "Specify practical usage rules, formats and handoff materials suited to the team's needs.",
        },
      ],
      faqCtaLabel: "Discuss brand identity",
      faqCtaHref: "/contact?service=design",
    }),
  },
];
