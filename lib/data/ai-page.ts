import { buildContactHref } from "../contact/paths";
import type { ServicePageContent } from "./services";

/** Established AI hub route — preserve `/services/ai-development`. */
const HUB_PATH = "/services/ai-development";
const VOICE_PATH = "/voice-agent";

const LEAF = {
  applications: `${HUB_PATH}/ai-applications`,
  chatbots: `${HUB_PATH}/ai-chatbots`,
  solutions: `${HUB_PATH}/custom-ai-solutions`,
  automation: `${HUB_PATH}/business-automation`,
  voice: VOICE_PATH,
} as const;

function enquiry(service: string, problem?: string) {
  return buildContactHref({ service: "ai", capability: service, problem });
}

/**
 * Artificial Intelligence hub for `/services/ai-development`.
 * Copy direction from Buildaze AI SEO research (12 Oct 2026).
 * Voice Agents remain on `/voice-agent`; other leaves nest under this hub.
 */
export const aiPageContent: ServicePageContent = {
  metaTitle: "AI Development Services: Chatbots, RAG & Automation | Buildaze",
  metaDescription:
    "Custom AI development for businesses: AI apps, chatbots, voice agents, RAG and workflow automation. Scoped, tested and handed over. Talk to our team.",
  ogImage: "/og/ai-development-og.png",
  eyebrow: "Applications, conversations, knowledge and automation",
  headline: "AI development services built around your business.",
  subheadline:
    "Have a product idea, buried documents, repetitive work or too many routine questions? Identify where AI can help, choose the right owner — including RAG and knowledge systems under Custom AI Solutions — and define a build you can evaluate.",
  ctaLabel: "Discuss Your AI Use Case",
  secondaryCtaLabel: "Explore AI Services",

  problems: {
    eyebrow: "Starting points",
    headline: "Which AI problem should we solve first?",
    intro: [
      "Start with the person and the task — not the model name. Match the situation below to a service, then discuss the simplest useful scope.",
    ],
    problems: [
      {
        id: "product-feature",
        index: "01",
        name: "Our product needs an AI feature",
        title: "An AI-powered product or feature people can use.",
        description:
          "Define the user task, expected output and integrations before choosing architecture. Broader software builds may also involve Development.",
        serviceLabel: "AI Applications",
        enquiryHref: enquiry(
          "AI Applications",
          "Product needs an AI feature",
        ),
      },
      {
        id: "text-questions",
        index: "02",
        name: "Customers or staff ask the same text questions",
        title: "A chatbot over approved information.",
        description:
          "Help people find answers through a text conversation, with a path to a person when needed. Spoken conversations belong on Voice Agents.",
        serviceLabel: "AI Chatbots",
        enquiryHref: enquiry(
          "AI Chatbots",
          "Repeated text questions from customers or staff",
        ),
      },
      {
        id: "routine-calls",
        index: "03",
        name: "Routine calls interrupt the team",
        title: "A custom voice agent for spoken enquiries.",
        description:
          "Handle routine spoken questions and collect useful context. Browser demo and production telephony are different scopes — see the Voice Agent page.",
        serviceLabel: "AI Voice Agents",
        enquiryHref: `/contact?service=ai&capability=${encodeURIComponent("AI Voice Agents")}`,
      },
      {
        id: "buried-knowledge",
        index: "04",
        name: "Useful knowledge is buried in documents",
        title: "Grounded retrieval over approved sources — with evaluation.",
        description:
          "RAG (retrieval-augmented generation) uses your approved documents and systems to answer or draft — with source design, permissions, citations, freshness and evaluation owned by Custom AI Solutions.",
        serviceLabel: "Custom AI Solutions",
        enquiryHref: enquiry(
          "Custom AI Solutions",
          "Knowledge buried in documents",
        ),
      },
      {
        id: "repetitive-handoffs",
        index: "05",
        name: "Repeated data entry and handoffs between tools",
        title: "Automation with clear rules and exceptions.",
        description:
          "Connect steps across tools. Use AI only where interpretation helps — predictable rules often do not need a model.",
        serviceLabel: "Business Automation",
        enquiryHref: enquiry(
          "Business Automation",
          "Repeated data entry and handoffs between tools",
        ),
      },
      {
        id: "not-sure",
        index: "06",
        name: "Not sure where to start",
        title: "Tell us what your team is trying to achieve.",
        description:
          "Describe the users, the task and what “good” looks like. Discovery helps pick the simplest useful service without forcing every AI category.",
        serviceLabel: "Not Sure Yet",
        enquiryHref: enquiry(
          "Not Sure Yet",
          "Not sure which AI service fits",
        ),
      },
    ],
    closingTitle: "Need ordinary software without AI?",
    closingBody:
      "Websites, apps and business systems without an AI feature remain under Development. We will say when AI is not the right starting point.",
    ctaLabel: "Discuss your AI use case",
    ctaHref: enquiry("Not Sure Yet"),
  },

  selectedWork: {
    eyebrow: "Portfolio",
    headline: "Selected AI-related work",
    intro: [
      "Projects where Buildaze contributed AI product features, retrieval or operational tooling. Read each case study for measurement notes — outcome figures are published when evidence is approved.",
    ],
    cases: [
      {
        id: "support-copilot",
        index: "01",
        category: "Application / copilot",
        title: "A support product feature grounded in live account context.",
        relevance:
          "Relevant to AI Applications, internal copilots and LLM integrations with RAG.",
        description:
          "A SaaS support team needed drafted replies with account context. Buildaze delivered a production web application feature that uses retrieval and live integrations — agents review before send.",
        outcome: {
          value: "Result",
          label:
            "TODO: approved metric pending — production feature with grounded drafts and human review (see case study).",
        },
        tags: ["AI Applications", "Custom AI Solutions", "RAG"],
        cta: "View case study",
        href: "/work/support-copilot",
        visual: "build",
      },
      {
        id: "underwriting-copilot",
        index: "02",
        category: "Document intelligence / tooling",
        title: "Claims summarization underwriters can adopt.",
        relevance:
          "Relevant to Custom AI Solutions, document intelligence and decision-support interfaces.",
        description:
          "Underwriters spent hours summarizing claims. Buildaze built operational software that summarizes claims and surfaces risk signals for day-to-day use — with human review in the loop.",
        outcome: {
          value: "Result",
          label:
            "TODO: approved metric pending — document intelligence with review in the loop (see case study).",
        },
        tags: ["Custom AI Solutions", "Document intelligence"],
        cta: "View case study",
        href: "/work/underwriting-risk-copilot",
        visual: "build",
      },
      {
        id: "catalog-intelligence",
        index: "03",
        category: "Product AI feature",
        title: "Product discovery that understands attributes.",
        relevance:
          "Relevant to AI Applications and knowledge retrieval inside a shopping experience.",
        description:
          "Shoppers could not find products when search ignored attributes. Buildaze cleaned catalogue data, built a retrieval layer and shipped a shopping experience integration.",
        outcome: {
          value: "Result",
          label:
            "TODO: approved metric pending — attribute-aware retrieval in shopping UX (see case study).",
        },
        tags: ["AI Applications", "Retrieval"],
        cta: "View case study",
        href: "/work/catalog-intelligence-engine",
        visual: "build",
      },
    ],
  },

  capabilities: {
    eyebrow: "AI services",
    headline: "Choose the AI service that fits",
    intro: [
      "Five focused destinations. Capabilities such as RAG, LLM integrations, document intelligence, internal copilots and workflow agents are covered under the owners below — not as thin extra pages.",
    ],
    capabilities: [
      {
        id: "ai-applications",
        index: "01",
        name: "AI Applications",
        title: "Build an AI-powered product or add a useful AI feature.",
        bestFor:
          "Teams shipping a new AI product experience or adding search, summarization or assistant features inside an existing app.",
        boundaries:
          "Deep knowledge/RAG systems sit under Custom AI Solutions. Ordinary website or app builds without AI remain under Development.",
        description:
          "Start with the user task, expected output and integration needs before choosing the model or architecture. LLM integrations and product copilots often live here when the deliverable is a usable application interface.",
        items: [
          "Use-case and feature scope",
          "Integration design",
          "AI feature implementation",
          "Evaluation cases and fallbacks",
          "Handover and cost visibility",
        ],
        cta: "Discuss Your AI Application",
        href: enquiry("AI Applications"),
        detailHref: LEAF.applications,
        detailLabel: "Explore AI Applications",
      },
      {
        id: "ai-chatbots",
        index: "02",
        name: "AI Chatbots",
        title: "Text conversations over approved information.",
        bestFor:
          "Customer support, lead intake or staff knowledge questions that should stay in a text channel.",
        boundaries:
          "Spoken conversations belong on Voice Agents. Deeper retrieval design lives on Custom AI Solutions — chatbots can use approved documents when scoped.",
        description:
          "Map conversation goals, prepare knowledge, implement the chatbot interface, define handoff and test representative conversations. Channels beyond website chat are added when scoped.",
        items: [
          "Conversation mapping",
          "Approved knowledge",
          "Chatbot implementation",
          "Handoff and fallbacks",
          "Conversation tests",
        ],
        cta: "Discuss Your Chatbot Use Case",
        href: enquiry("AI Chatbots"),
        detailHref: LEAF.chatbots,
        detailLabel: "Explore AI Chatbots",
      },
      {
        id: "ai-voice",
        index: "03",
        name: "AI Voice Agents",
        title: "Spoken enquiries with a path to a person.",
        bestFor:
          "Businesses that need routine calls answered with approved information and clear escalation.",
        boundaries:
          "The public browser demo shows conversation behaviour; production telephony and calendar booking integrations are scoped separately when needed.",
        description:
          "Configure business information, test realistic conversations and implement the agreed channel. Production handoff and telephony are written into the project scope.",
        items: [
          "Conversation design",
          "Approved knowledge and tone",
          "Browser or telephony as agreed",
          "Intake and handoff",
          "Evaluation of test conversations",
        ],
        cta: "Discuss Your Voice Agent",
        href: "/contact?service=ai&capability=AI%20Voice%20Agents",
        detailHref: LEAF.voice,
        detailLabel: "Explore Voice Agent",
      },
      {
        id: "custom-ai-solutions",
        index: "04",
        name: "Custom AI Solutions",
        title: "RAG, documents and problem-specific knowledge systems.",
        bestFor:
          "Teams whose core problem is grounded retrieval, document workflows, internal copilots or LLM systems tied to a specific business task — not only a chat skin.",
        boundaries:
          "RAG retrieves from approved sources rather than training a new model. Chat UI alone may sit on AI Chatbots or Applications. Fine-tuning, computer vision and compliance certifications are included only when scoped.",
        description:
          "Define the output, inventory approved sources, design retrieval with permissions and citations where useful, then evaluate on representative hard cases before treating a demo as production-ready.",
        items: [
          "Source and permission assessment",
          "RAG / knowledge retrieval design",
          "Citations and freshness controls",
          "Document intelligence workflows",
          "Task evaluation and handover",
        ],
        cta: "Discuss Your Custom AI Solution",
        href: enquiry("Custom AI Solutions"),
        detailHref: LEAF.solutions,
        detailLabel: "Explore Custom AI Solutions",
      },
      {
        id: "business-automation",
        index: "05",
        name: "Business Automation",
        title: "Workflows that connect tools, tasks and exceptions.",
        bestFor:
          "Teams repeating data entry, routing, follow-ups or record updates across systems.",
        boundaries:
          "Many workflows succeed with clear rules alone. Specific automation platforms are named only when confirmed for a project; agent behaviour stays within the agreed steps and exceptions.",
        description:
          "Map the workflow, choose a bounded starting scope, implement triggers and actions, and define exception handling. AI agents that carry out workflow steps belong here when the buyer intent is process automation.",
        items: [
          "Workflow mapping",
          "Triggers and integrations",
          "Rules and AI steps as needed",
          "Exception handling",
          "Logs and handover",
        ],
        cta: "Discuss Your Automation Workflow",
        href: enquiry("Business Automation"),
        detailHref: LEAF.automation,
        detailLabel: "Explore Business Automation",
      },
    ],
    closingTitle: "Capabilities across services",
    closingBody:
      "LLM integrations, RAG, document intelligence, internal copilots and scoped AI workflow agents appear under the owner that matches the deliverable — with brief mentions and links from related pages.",
    ctaLabel: "Discuss your AI use case",
    ctaHref: enquiry("Not Sure Yet"),
  },

  deliveryProcess: {
    eyebrow: "How we work",
    headline: "From use case to a system you can evaluate",
    intro: [
      "Discover the task → define scope and evaluation → build and test → hand over with ownership and operating notes. Delivery dates are set once requirements are clear enough to estimate.",
    ],
    steps: [
      {
        id: "discover",
        index: "01",
        shortName: "Discover",
        name: "Discover",
        title: "Users, tasks, data and what “correct” means.",
        description:
          "We clarify who uses the system, which inputs and outputs matter, and what integrations or permissions exist.",
        itemsLabel: "What we review",
        items: [
          "User tasks and channels",
          "Available data and access",
          "Integration constraints",
          "Evaluation criteria",
        ],
        outcome: "A shared definition of the problem to solve.",
      },
      {
        id: "scope",
        index: "02",
        shortName: "Scope",
        name: "Scope",
        title: "Smallest useful build with clear boundaries.",
        description:
          "Deliverables, fallbacks, ownership and what is out of scope are written down before a larger build.",
        itemsLabel: "What we agree",
        items: [
          "Service and deliverables",
          "Evaluation examples",
          "Dependencies and risks",
          "Handover expectations",
        ],
        outcome: "A written scope you can approve.",
      },
      {
        id: "build",
        index: "03",
        shortName: "Build",
        name: "Build and evaluate",
        title: "Working increments against agreed tests.",
        description:
          "We implement the agreed work and review representative cases so progress is judged against the scope, not a single demo.",
        itemsLabel: "What happens",
        items: [
          "Agreed implementation",
          "Representative tests",
          "Fallback behaviour",
          "Review points",
        ],
        outcome: "Progress you can inspect against the scope.",
      },
      {
        id: "handover",
        index: "04",
        shortName: "Handover",
        name: "Validate and hand over",
        title: "Access, documentation and operating notes.",
        description:
          "You receive the agreed custom deliverables and documentation. Third-party models and platforms keep their own terms. Ongoing support is optional and scoped separately.",
        itemsLabel: "What you receive",
        items: [
          "Agreed custom work and access",
          "Documentation in scope",
          "Monitoring/cost notes as agreed",
          "Optional support explained",
        ],
        outcome: "Practical handover with clear ownership of agreed custom work.",
      },
    ],
    closingTitle: "Our approach and limits",
    closingBody:
      "Useful AI work defines how quality will be judged, includes fallbacks for missing information, and keeps human review where the task needs it. We scope what we can verify — and we say when ordinary software is the better starting point.",
    ctaLabel: "Discuss your AI use case",
    ctaHref: "/contact?service=ai",
  },

  why: {
    eyebrow: "Why Buildaze",
    headline: "Practical AI delivery you can verify",
    intro: [
      "Buildaze combines product, retrieval and automation delivery with clear scope and handover. Review our Clutch profile for third-party feedback, then talk through the use case with the team.",
    ],
    differentiators: [
      {
        id: "clutch",
        index: "01",
        name: "Clutch profile",
        summary: "Independent reviews on Clutch.",
        title: "Check Buildaze on Clutch.",
        description:
          "Read client reviews on our Clutch profile for an external view of how we work.",
        panelStatement: "Third-party reviews sit on Clutch — not invented on this page.",
        panelNote: "https://clutch.co/profile/buildaze",
      },
      {
        id: "projects",
        index: "02",
        name: "Project depth",
        summary: "TODO: confirm public project count.",
        title: "Shipped AI and software work.",
        description:
          "TODO: confirm the public project or case-study count to show here. Until approved, see selected AI work on this page and the Work section for real examples.",
        panelStatement: "Case studies stay evidence-led.",
        panelNote: "TODO: approved project count",
      },
      {
        id: "team",
        index: "03",
        name: "Team",
        summary: "TODO: confirm public team size / roles.",
        title: "A delivery team matched to the scope.",
        description:
          "TODO: confirm the public team size, roles or locations to publish. Engagements are staffed against the written scope rather than a generic bench claim.",
        panelStatement: "Staffing follows the agreement.",
        panelNote: "TODO: approved team details",
      },
      {
        id: "evaluation",
        index: "04",
        name: "Evaluation first",
        summary: "Agree what “good” looks like.",
        title: "Define evaluation before launch.",
        description:
          "Representative examples and acceptable performance belong in scope so demos are not mistaken for production readiness.",
        panelStatement: "A single impressive answer is not an evaluation set.",
        panelNote: "Task-specific quality over slogans.",
      },
    ],
    closingTitle: "Ready to describe the use case?",
    closingBody:
      "Share the users, the task and the systems involved. We will suggest a practical starting service.",
    pillars: ["Task", "Scope", "Evaluate", "Handover"],
    closingNote: "AI only where it adds value.",
    ctaLabel: "Discuss Your AI Use Case",
    ctaHref: "/contact?service=ai",
  },

  industries: {
    eyebrow: "Industries",
    headline: "Industries we work with",
    intro: [
      "AI engagements follow the same delivery approach across verticals. The examples below are already evidenced by published case studies on this site — not a claim of every industry under the sun.",
    ],
    items: [
      {
        name: "Ecommerce",
        description:
          "Product discovery, catalogue intelligence and shopping experiences where retrieval and attributes matter — see the catalogue intelligence case study.",
      },
      {
        name: "SaaS",
        description:
          "In-product copilots and support features grounded in live account context — see the support copilot case study.",
      },
      {
        name: "Insurance",
        description:
          "Document intelligence and underwriting support tooling with human review in the loop — see the underwriting risk copilot case study.",
      },
      {
        name: "Other knowledge-heavy teams",
        description:
          "Operations and product teams with approved documents, repetitive questions or workflow handoffs that fit chatbots, RAG or automation.",
      },
    ],
  },

  overviewTitle: "What AI development includes",
  overview: [
    "AI development covers applications, chatbots, voice agents, custom knowledge/document solutions and business automation.",
    "RAG and knowledge systems are owned by Custom AI Solutions: approved sources, permissions, retrieval, citations where useful and evaluation against representative cases.",
    "LLM integrations, document intelligence, internal copilots and scoped AI workflow agents appear under the owner that matches the deliverable — not as thin synonym pages.",
  ],
  solutionsTitle: "AI services",
  solutions: [
    "AI Applications",
    "AI Chatbots",
    "AI Voice Agents",
    "Custom AI Solutions",
    "Business Automation",
  ],
  deliverables: [
    "Scoped AI application, conversation or workflow deliverables",
    "Integrations and retrieval as agreed",
    "Evaluation approach for representative cases",
    "Documentation and access handover for agreed custom work",
  ],
  included: [
    "Discovery of users, tasks and data",
    "Written scope and evaluation criteria",
    "Build with defined review points",
    "Optional support scoped separately",
  ],
  stackTags: ["OpenAI", "Anthropic Claude", "RAG", "LLM integrations", "AI Agents"],
  process: [
    {
      index: "01",
      name: "Discover",
      duration: "Scoped",
      description: "Users, tasks, data access and evaluation criteria.",
    },
    {
      index: "02",
      name: "Scope",
      duration: "Scoped",
      description: "Deliverables, boundaries and dependencies before build.",
    },
    {
      index: "03",
      name: "Build and evaluate",
      duration: "Scoped",
      description: "Implement agreed work against representative tests.",
    },
    {
      index: "04",
      name: "Handover",
      duration: "Scoped",
      description: "Access, documentation and operating notes as agreed.",
    },
  ],
  relatedWorkIds: [
    "support-copilot",
    "underwriting-copilot",
    "catalog-intelligence",
  ],
  faqEyebrow: "AI FAQs",
  faqHeadline: "Questions before choosing an AI service",
  faqIntro: [
    "Short answers about service choice, integrations and when AI is unnecessary.",
  ],
  faqs: [
    {
      question: "Which AI service do I need?",
      answer:
        "Start with the problem and the person using the solution. An application, chatbot, voice agent, knowledge/RAG system or workflow may be the right fit; discovery helps define the simplest useful scope.",
    },
    {
      question: "Can AI be added to our existing systems?",
      answer:
        "That depends on available APIs, access, data quality and the feature you need. The integration scope should be assessed before a build is promised.",
    },
    {
      question: "Do we need AI for every workflow?",
      answer:
        "No. Some tasks are better handled with ordinary rules and integrations. Use AI where it adds value to the task rather than making the workflow more complicated.",
    },
    {
      question: "Where do RAG and internal copilots fit?",
      answer:
        "RAG (retrieval over approved sources — not automatic model training) and document-intelligence systems are owned by Custom AI Solutions, including permissions, citations where useful and evaluation. Product interfaces may also involve AI Applications. Chatbots can retrieve approved documents when that is in scope, but deep knowledge-pipeline work still belongs on Custom AI Solutions.",
    },
    {
      question: "Is a chatbot the same as a custom AI solution?",
      answer:
        "No. A chatbot is a conversation channel with routing and handoff. A custom AI solution designs the knowledge system behind answers or drafts — sources, retrieval, permissions and evaluation. Some projects need both.",
    },
    {
      question: "How much does AI development cost?",
      answer:
        "Cost depends on scope: a focused chatbot, a product feature, a RAG system or a broader automation programme each land differently. TODO: publish an approved starting range or typical package prices if the owner wants public figures — until then, enquire for a written estimate after discovery.",
    },
    {
      question: "How long does it take to build an AI chatbot?",
      answer:
        "A bounded chatbot over approved content can often move from discovery to a testable build in weeks; multi-channel, deep retrieval or complex handoff extends that. Timeline is written after we know knowledge readiness, channels and integrations — not before.",
    },
    {
      question: "RAG vs fine-tuning: which do I need?",
      answer:
        "Most business knowledge problems start with RAG — retrieving from approved sources with permissions and evaluation. Fine-tuning changes model behaviour and is a separate, narrower decision when retrieval alone cannot meet the task. We recommend starting with the simplest approach that can be evaluated.",
    },
    {
      question: "Is my business data safe?",
      answer:
        "We only use the systems and documents you authorize for the engagement, and we keep sensitive credentials out of the public contact form. TODO: confirm the public data-handling / retention policy wording the owner wants published (DPA, hosting regions, subprocessors) before stating stronger compliance claims.",
    },
  ],
  faqClosingTitle: "Still choosing a starting point?",
  faqClosingBody:
    "Include the goal in the enquiry form and we will answer in the context of your systems and data.",
  faqCtaLabel: "Discuss your AI use case",
  faqCtaHref: "/contact?service=ai",
};

export const AI_LEAF_PATHS = LEAF;
