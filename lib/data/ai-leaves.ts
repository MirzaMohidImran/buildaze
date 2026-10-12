import { buildContactHref } from "../contact/paths";
import type { Service, ServicePageContent } from "./services";

const HUB = "/services/ai-development";
const VOICE = "/voice-agent";

function leafEnquiry(_path: string, service: string, problem?: string) {
  return buildContactHref({ service: "ai", capability: service, problem });
}

function base(
  partial: Omit<ServicePageContent, "relatedWorkIds"> & {
    relatedWorkIds?: string[];
  },
): ServicePageContent {
  return {
    ...partial,
    relatedWorkIds: partial.relatedWorkIds ?? [],
  };
}

const appsPath = `${HUB}/ai-applications`;
const chatPath = `${HUB}/ai-chatbots`;
const solutionsPath = `${HUB}/custom-ai-solutions`;
const autoPath = `${HUB}/business-automation`;

/**
 * AI service destinations.
 * Nested leaves under `/services/ai-development/*`.
 * Voice Agents reuse `/voice-agent` (not a duplicate nested page).
 */
export const aiLeaves: Service[] = [
  {
    id: "ai-applications",
    slug: "ai-applications",
    path: appsPath,
    role: "detail",
    index: "01",
    name: "AI Applications",
    shortName: "Applications",
    oneLiner:
      "AI-powered products and features inside new or existing applications.",
    description:
      "AI application development for new products or AI features inside software you already run — scoped around the user task and evaluation.",
    capabilities: [
      "AI product features",
      "LLM integrations",
      "Internal assistants",
      "Evaluation and handover",
    ],
    flow: ["Task", "Design", "Build", "Evaluate"],
    cta: "Explore AI Applications",
    relatedServiceIds: ["ai", "ai-solutions", "ai-chatbots", "development"],
    page: base({
      metaTitle: "AI Application & Product Development | Buildaze",
      metaDescription:
        "Build AI-powered applications or add useful AI features to an existing product. Explore product scope, integrations, evaluation and delivery with Buildaze.",
      eyebrow: "AI product and feature development",
      headline: "AI Application Development for New and Existing Products",
      subheadline:
        "Turn a product idea into an application people can use, or add an AI feature to the software you already have. Start with the user task, expected output and integration needs before choosing the model or architecture.",
      ctaLabel: "Discuss Your AI Application",
      secondaryCtaLabel: "Back to AI Services",
      problems: {
        eyebrow: "Common application problems",
        headline: "When AI needs a real product surface",
        intro: [
          "Applications own the usable product or feature. Deep knowledge systems may also involve Custom AI Solutions.",
        ],
        problems: [
          {
            id: "prototype",
            index: "01",
            name: "AI prototype lacks a usable product",
            title: "A demo that never became a product.",
            description:
              "We define the user journey, permissions and operating constraints so the feature can be used day to day.",
            enquiryHref: leafEnquiry(
              appsPath,
              "AI Applications",
              "AI prototype lacks a usable product",
            ),
          },
          {
            id: "existing-app",
            index: "02",
            name: "Existing app needs search, summarization or assistant features",
            title: "AI features inside software you already have.",
            description:
              "Feasibility depends on architecture and APIs. A full rebuild is not assumed.",
            enquiryHref: leafEnquiry(
              appsPath,
              "AI Applications",
              "Add AI features to an existing app",
            ),
          },
          {
            id: "disconnected",
            index: "03",
            name: "AI output is disconnected from the workflow",
            title: "Answers that never reach the next step.",
            description:
              "We design how outputs enter the user’s existing tools and review paths.",
            enquiryHref: leafEnquiry(
              appsPath,
              "AI Applications",
              "AI output disconnected from workflow",
            ),
          },
          {
            id: "unclear-cost",
            index: "04",
            name: "Product scope and operating costs are unclear",
            title: "Features without cost or evaluation boundaries.",
            description:
              "Prioritized scope and evaluation cases come before open-ended model experimentation.",
            enquiryHref: leafEnquiry(
              appsPath,
              "AI Applications",
              "Unclear AI product scope and operating costs",
            ),
          },
        ],
        closingTitle: "Need a knowledge system first?",
        closingBody:
          "RAG and document intelligence detail live on Custom AI Solutions. Chat interfaces for Q&A may fit AI Chatbots.",
        ctaLabel: "Discuss AI application",
        ctaHref: leafEnquiry(appsPath, "AI Applications"),
      },
      capabilities: {
        eyebrow: "Application scope",
        headline: "What AI application work can include",
        intro: [
          "Possible scopes include document summarization inside a product, internal assistant interfaces, knowledge search and AI-powered MVPs. Native mobile, custom model training and unlimited platform support are not assumed.",
        ],
        capabilities: [
          {
            id: "define",
            index: "01",
            name: "Product and use-case definition",
            title: "Prioritized feature scope around the user task.",
            description:
              "Agree who uses the feature, what “done” looks like and what stays out of the first release.",
            items: [
              "User task definition",
              "Prioritized features",
              "Success criteria",
              "Out-of-scope list",
            ],
            cta: "Discuss product scope",
            href: leafEnquiry(appsPath, "AI Applications", "Product scope"),
          },
          {
            id: "integrate",
            index: "02",
            name: "Integration design",
            title: "Fit the existing app or new application.",
            description:
              "LLM integrations and data access are designed around available APIs and permissions.",
            items: [
              "System context",
              "API and auth needs",
              "Data access rules",
              "Fallback paths",
            ],
            cta: "Discuss integrations",
            href: leafEnquiry(appsPath, "AI Applications", "Integration design"),
          },
          {
            id: "build",
            index: "03",
            name: "UI and AI feature implementation",
            title: "Ship the agreed product surface.",
            description:
              "Implement the interface and AI behaviour in scope — including internal copilots when that is the deliverable.",
            items: [
              "Application UI",
              "AI feature behaviour",
              "Review and edit paths",
              "Agreed monitoring hooks",
            ],
            cta: "Discuss implementation",
            href: leafEnquiry(appsPath, "AI Applications", "AI feature implementation"),
          },
          {
            id: "evaluate",
            index: "04",
            name: "Evaluation and handover",
            title: "Representative cases before you rely on it.",
            description:
              "Test useful task completion, output quality on examples, latency expectations and operating-cost considerations as scoped.",
            items: [
              "Evaluation cases",
              "Fallback behaviour",
              "Documentation",
              "Handover access",
            ],
            cta: "Discuss evaluation",
            href: leafEnquiry(appsPath, "AI Applications", "Evaluation and handover"),
          },
        ],
        closingTitle: "Related Development work",
        closingBody:
          "Broader web or SaaS builds without an AI feature remain on Development pages.",
        ctaLabel: "Discuss AI application",
        ctaHref: leafEnquiry(appsPath, "AI Applications"),
      },
      deliveryProcess: {
        eyebrow: "Application process",
        headline: "From user task to validated feature",
        intro: [
          "Define user task → design feature and integration → build and evaluate → validate and hand over.",
        ],
        steps: [
          {
            id: "task",
            index: "01",
            shortName: "Task",
            name: "Define the user task",
            title: "What the person needs to complete.",
            description:
              "Capture inputs, expected outputs and where the feature sits in the product.",
            itemsLabel: "Define",
            items: ["Users", "Task", "Examples", "Constraints"],
            outcome: "A clear product problem statement.",
          },
          {
            id: "design",
            index: "02",
            shortName: "Design",
            name: "Design feature and integration",
            title: "Architecture matched to the existing system.",
            description:
              "Agree interfaces, permissions and evaluation cases before coding the full feature.",
            itemsLabel: "Design",
            items: ["Integration approach", "UI touchpoints", "Evaluation set"],
            outcome: "A buildable feature plan.",
          },
          {
            id: "build",
            index: "03",
            shortName: "Build",
            name: "Build and evaluate",
            title: "Working increments with tests.",
            description:
              "Implement the agreed scope and review output quality on representative examples.",
            itemsLabel: "Build",
            items: ["Feature implementation", "Tests", "Review points"],
            outcome: "A feature you can try against the plan.",
          },
          {
            id: "handover",
            index: "04",
            shortName: "Handover",
            name: "Validate and hand over",
            title: "Access, docs and operating notes.",
            description:
              "Hand over agreed custom work. Model providers keep their own terms.",
            itemsLabel: "Handover",
            items: ["Access", "Documentation", "Cost/monitoring notes as scoped"],
            outcome: "Practical ownership of the agreed work.",
          },
        ],
        closingTitle: "No invented benchmarks",
        closingBody:
          "Latency and cost targets are discussed against your workload — not published as universal guarantees.",
        ctaLabel: "Discuss AI application",
        ctaHref: "/contact?service=ai",
      },
      why: {
        eyebrow: "How success is assessed",
        headline: "Measurement for AI applications",
        intro: [
          "Judge features on useful task completion and evaluated examples — not demo theatre.",
        ],
        differentiators: [
          {
            id: "task-completion",
            index: "01",
            name: "Task completion",
            summary: "Users finish the job.",
            title: "Useful task completion in the product.",
            description:
              "The feature should help someone complete the agreed task with an appropriate review path.",
            panelStatement: "A clever answer is not enough.",
            panelNote: "Fit the workflow.",
          },
          {
            id: "quality",
            index: "02",
            name: "Output quality",
            summary: "Representative examples.",
            title: "Quality on agreed evaluation cases.",
            description:
              "Review outputs against examples that reflect real use — including awkward cases.",
            panelStatement: "Evaluation sets beat anecdotes.",
            panelNote: "Include fallbacks.",
          },
          {
            id: "operations",
            index: "03",
            name: "Operating fit",
            summary: "Latency and cost context.",
            title: "Response behaviour and cost considerations.",
            description:
              "Discuss expected latency and operating cost for the scoped workload without inventing benchmarks.",
            panelStatement: "Runtime cost is part of product fitness.",
            panelNote: "Scoped, not guaranteed.",
          },
        ],
        closingTitle: "Ready to discuss an AI application?",
        closingBody:
          "Describe the user task, current application and useful input examples. Do not send confidential credentials through the enquiry form.",
        pillars: ["Task", "Integrate", "Build", "Evaluate"],
        closingNote: "Custom training is not assumed.",
        ctaLabel: "Discuss Your AI Application",
        ctaHref: "/contact?service=ai",
      },
      overviewTitle: "What AI application development includes",
      overview: [
        "AI application work covers product/feature scope, integrations, implementation and evaluation.",
        "Knowledge retrieval detail may link to Custom AI Solutions when the core problem is the system behind the UI.",
      ],
      solutionsTitle: "Application focus areas",
      solutions: [
        "AI-powered web applications",
        "AI feature integration",
        "Internal assistant interfaces",
        "LLM integrations",
        "Evaluation and handover",
      ],
      deliverables: [
        "Scoped product or feature definition",
        "Integration and implementation in scope",
        "Evaluation cases and fallbacks",
        "Documentation and access handover",
      ],
      included: [
        "User-task discovery",
        "Written feature scope",
        "Build with review points",
        "Handover as agreed",
      ],
      stackTags: ["LLM integrations", "Product AI", "Evaluation", "APIs"],
      process: [
        {
          index: "01",
          name: "Task",
          duration: "Scoped",
          description: "Define users, outputs and constraints.",
        },
        {
          index: "02",
          name: "Design",
          duration: "Scoped",
          description: "Integration and evaluation plan.",
        },
        {
          index: "03",
          name: "Build",
          duration: "Scoped",
          description: "Implement and test agreed features.",
        },
        {
          index: "04",
          name: "Handover",
          duration: "Scoped",
          description: "Access, docs and operating notes.",
        },
      ],
      relatedWorkIds: ["support-copilot", "catalog-intelligence"],
      faqEyebrow: "Application FAQs",
      faqHeadline: "Questions about AI applications",
      faqs: [
        {
          question: "Can you add AI without rebuilding our app?",
          answer:
            "An existing application can sometimes gain an AI feature through its current architecture and APIs. The feasibility and required changes depend on the system.",
        },
        {
          question: "Does an AI application need a custom-trained model?",
          answer:
            "Not necessarily. Existing models and business-specific context may be sufficient. Model selection and any training should follow the actual task and evaluation.",
        },
        {
          question: "What should we provide to start?",
          answer:
            "Describe the user task, current application, useful input examples, expected output and available integration access. Do not send confidential credentials through the enquiry form.",
        },
      ],
      faqCtaLabel: "Discuss AI application",
      faqCtaHref: "/contact?service=ai",
    }),
  },
  {
    id: "ai-chatbots",
    slug: "ai-chatbots",
    path: chatPath,
    role: "detail",
    index: "02",
    name: "AI Chatbots",
    shortName: "Chatbots",
    oneLiner:
      "Custom AI chatbots for customer questions, lead intake and team knowledge.",
    description:
      "AI chatbot development scoped around approved information, conversation goals and human handoff.",
    capabilities: [
      "Support chatbots",
      "Lead qualification",
      "Knowledge chatbots",
      "Handoff design",
    ],
    flow: ["Questions", "Knowledge", "Build", "Test"],
    cta: "Explore AI Chatbots",
    relatedServiceIds: ["ai", "ai-voice", "ai-solutions", "ai-automation"],
    page: base({
      metaTitle: "Custom AI Chatbot Development Services | Buildaze",
      metaDescription:
        "Explore custom AI chatbots for customer questions, lead intake and team knowledge. Buildaze scopes approved information, integrations and human handoff.",
      eyebrow: "Text conversations for customers and teams",
      headline: "AI Chatbot Development for Customers and Teams",
      subheadline:
        "Give customers or staff a clearer way to ask questions and find useful information. A custom AI chatbot starts with approved knowledge, defined conversation goals and a clear path to human help.",
      ctaLabel: "Discuss Your Chatbot Use Case",
      secondaryCtaLabel: "Back to AI Services",
      problems: {
        eyebrow: "Common chatbot problems",
        headline: "When text conversations need clearer boundaries",
        intro: [
          "Chatbots own text channels. Voice Agents own spoken conversations. Bots should not be sold as infallible.",
        ],
        problems: [
          {
            id: "repeated",
            index: "01",
            name: "Repeated routine questions",
            title: "The same answers asked every day.",
            description:
              "Map supported questions and prepare approved answers before expanding to edge cases.",
            enquiryHref: leafEnquiry(
              chatPath,
              "AI Chatbots",
              "Repeated routine questions",
            ),
          },
          {
            id: "hard-to-find",
            index: "02",
            name: "Visitors cannot find relevant information",
            title: "Knowledge that never reaches the conversation.",
            description:
              "A chatbot can retrieve from approved documents when scope supports it — permissions and freshness must be defined.",
            enquiryHref: leafEnquiry(
              chatPath,
              "AI Chatbots",
              "Visitors cannot find relevant information",
            ),
          },
          {
            id: "lead-context",
            index: "03",
            name: "Lead intake misses context",
            title: "Forms and chats that lose the essentials.",
            description:
              "Lead qualification chatbots should collect agreed fields and escalate when the ask is outside scope.",
            enquiryHref: leafEnquiry(
              chatPath,
              "AI Chatbots",
              "Lead intake misses context",
            ),
          },
          {
            id: "hallucination",
            index: "04",
            name: "Existing bot answers outside its scope",
            title: "Confident answers without approved grounding.",
            description:
              "Define supported questions, test cases and fallback when information is missing or uncertain.",
            enquiryHref: leafEnquiry(
              chatPath,
              "AI Chatbots",
              "Bot answers outside its scope",
            ),
          },
        ],
        closingTitle: "Need spoken conversations?",
        closingBody:
          "See the Voice Agent page for spoken intake and handoff. Deep RAG systems are detailed under Custom AI Solutions.",
        ctaLabel: "Discuss chatbot use case",
        ctaHref: leafEnquiry(chatPath, "AI Chatbots"),
      },
      capabilities: {
        eyebrow: "Chatbot scope",
        headline: "What AI chatbot work can include",
        intro: [
          "Website chat does not automatically include WhatsApp, Slack, Instagram, authenticated account data or CRM updates. Channels and tools are confirmed during scoping.",
        ],
        capabilities: [
          {
            id: "map",
            index: "01",
            name: "Conversation and use-case mapping",
            title: "Goals, boundaries and escalation.",
            description:
              "Decide which questions are supported and what happens when they are not.",
            items: [
              "Supported intents",
              "Out-of-scope rules",
              "Handoff triggers",
              "Channel assumptions",
            ],
            cta: "Discuss conversation mapping",
            href: leafEnquiry(chatPath, "AI Chatbots", "Conversation mapping"),
          },
          {
            id: "knowledge",
            index: "02",
            name: "Knowledge preparation",
            title: "Approved information the bot may use.",
            description:
              "Prepare documents or content sources, update responsibilities and permission boundaries.",
            items: [
              "Approved sources",
              "Update ownership",
              "Permission notes",
              "Missing-info behaviour",
            ],
            cta: "Discuss knowledge prep",
            href: leafEnquiry(chatPath, "AI Chatbots", "Knowledge preparation"),
          },
          {
            id: "implement",
            index: "03",
            name: "Chatbot implementation",
            title: "Interface, retrieval and integrations in scope.",
            description:
              "Build the chatbot experience and any scoped tool calls. Taking a message differs from live queue transfer.",
            items: [
              "Chat interface",
              "Retrieval when scoped",
              "Tool integrations in scope",
              "Fallback paths",
            ],
            cta: "Discuss implementation",
            href: leafEnquiry(chatPath, "AI Chatbots", "Chatbot implementation"),
          },
          {
            id: "test",
            index: "04",
            name: "Tests and handover",
            title: "Representative conversations before launch.",
            description:
              "Test supported questions and escalation quality. Ticket reduction is not automatic proof of good support.",
            items: [
              "Test conversation set",
              "Escalation checks",
              "Documentation",
              "Handover",
            ],
            cta: "Discuss testing",
            href: leafEnquiry(chatPath, "AI Chatbots", "Conversation tests"),
          },
        ],
        closingTitle: "Automation after the chat",
        closingBody:
          "If the bot should create tasks or update records, Business Automation owns those workflow actions.",
        ctaLabel: "Discuss chatbot use case",
        ctaHref: leafEnquiry(chatPath, "AI Chatbots"),
      },
      deliveryProcess: {
        eyebrow: "Chatbot process",
        headline: "From questions to tested conversations",
        intro: [
          "Define questions and boundaries → prepare approved knowledge → build and test conversations → review and hand over.",
        ],
        steps: [
          {
            id: "define",
            index: "01",
            shortName: "Define",
            name: "Define questions and boundaries",
            title: "What the bot should and should not answer.",
            description:
              "Agree conversation goals, channels and escalation rules.",
            itemsLabel: "Define",
            items: ["Goals", "Supported questions", "Handoff rules"],
            outcome: "Clear conversation boundaries.",
          },
          {
            id: "prepare",
            index: "02",
            shortName: "Prepare",
            name: "Prepare approved knowledge",
            title: "Sources the bot may rely on.",
            description:
              "Organize content and responsibilities for keeping it current.",
            itemsLabel: "Prepare",
            items: ["Source list", "Permissions", "Update process"],
            outcome: "Approved knowledge ready for use.",
          },
          {
            id: "build",
            index: "03",
            shortName: "Build",
            name: "Build and test",
            title: "Conversations against a real test set.",
            description:
              "Implement the bot and run representative conversations, including failure cases.",
            itemsLabel: "Build",
            items: ["Implementation", "Test set", "Escalation checks"],
            outcome: "A chatbot you can evaluate.",
          },
          {
            id: "handover",
            index: "04",
            shortName: "Handover",
            name: "Review and hand over",
            title: "Ownership of configuration and next steps.",
            description:
              "Document supported behaviour, known limits and how to update knowledge.",
            itemsLabel: "Handover",
            items: ["Docs", "Access", "Maintenance options"],
            outcome: "A maintainable chatbot engagement.",
          },
        ],
        closingTitle: "No “answers everything” claim",
        closingBody:
          "Fallback and review paths are part of a responsible chatbot scope.",
        ctaLabel: "Discuss chatbot use case",
        ctaHref: "/contact?service=ai",
      },
      why: {
        eyebrow: "How success is assessed",
        headline: "Measurement for AI chatbots",
        intro: [
          "Use a defined test set and escalation quality — not vanity reply counts.",
        ],
        differentiators: [
          {
            id: "supported",
            index: "01",
            name: "Supported questions",
            summary: "Performance on the test set.",
            title: "Supported-question performance.",
            description:
              "Measure how the bot handles the questions you agreed to support.",
            panelStatement: "Define the set before judging quality.",
            panelNote: "Include awkward cases.",
          },
          {
            id: "escalation",
            index: "02",
            name: "Escalation quality",
            summary: "Know when to stop.",
            title: "Handoff when information is missing.",
            description:
              "A good bot escalates or takes a message instead of inventing answers.",
            panelStatement: "Handoff is success when uncertainty is high.",
            panelNote: "Design the path.",
          },
          {
            id: "outcomes",
            index: "03",
            name: "Useful outcomes",
            summary: "Enquiries and task completion.",
            title: "Relevant enquiries and completed tasks.",
            description:
              "Track whether conversations help users finish what they came to do.",
            panelStatement: "Ticket count alone can mislead.",
            panelNote: "Look at task completion.",
          },
        ],
        closingTitle: "Ready to discuss a chatbot?",
        closingBody:
          "Share the channel, the top questions and who handles escalations today.",
        pillars: ["Boundaries", "Knowledge", "Test", "Handoff"],
        closingNote: "Not infallible by design.",
        ctaLabel: "Discuss Your Chatbot Use Case",
        ctaHref: "/contact?service=ai",
      },
      overviewTitle: "What AI chatbot development includes",
      overview: [
        "Chatbot work covers conversation mapping, approved knowledge, implementation, handoff and testing.",
        "Spoken agents are covered on `/voice-agent`. Deep RAG methodology is detailed under Custom AI Solutions.",
      ],
      solutionsTitle: "Chatbot focus areas",
      solutions: [
        "Customer support chatbots",
        "Lead qualification chatbots",
        "Internal knowledge chatbots",
        "Handoff design",
        "Conversation testing",
      ],
      deliverables: [
        "Conversation map and boundaries",
        "Knowledge preparation in scope",
        "Chatbot implementation",
        "Test results and handover notes",
      ],
      included: [
        "Use-case discovery",
        "Written scope and channels",
        "Build and test cycles",
        "Handover documentation",
      ],
      stackTags: ["AI chatbots", "Approved knowledge", "Handoff", "Evaluation"],
      process: [
        {
          index: "01",
          name: "Define",
          duration: "Scoped",
          description: "Questions, boundaries and handoff.",
        },
        {
          index: "02",
          name: "Prepare",
          duration: "Scoped",
          description: "Approved knowledge and permissions.",
        },
        {
          index: "03",
          name: "Build",
          duration: "Scoped",
          description: "Implement and test conversations.",
        },
        {
          index: "04",
          name: "Handover",
          duration: "Scoped",
          description: "Docs, access and maintenance options.",
        },
      ],
      faqs: [
        {
          question: "Can the chatbot use our documents?",
          answer:
            "A chatbot can be designed to retrieve from approved documents where the scope supports it. Permissions, document quality and updating responsibilities need to be defined.",
        },
        {
          question: "Can it pass a conversation to a person?",
          answer:
            "The handoff path should be designed for the channel and tools in scope. Taking a message is different from transferring into a live support queue.",
        },
        {
          question: "Will it always give the right answer?",
          answer:
            "No AI system should be presented as infallible. Define supported questions, test representative cases and include fallback or review when the answer is uncertain.",
        },
      ],
      faqCtaLabel: "Discuss chatbot use case",
      faqCtaHref: "/contact?service=ai",
    }),
  },
  {
    id: "ai-solutions",
    slug: "custom-ai-solutions",
    path: solutionsPath,
    role: "detail",
    index: "04",
    name: "Custom AI Solutions",
    shortName: "Solutions",
    oneLiner:
      "Problem-specific AI for knowledge retrieval, documents and decision support.",
    description:
      "Custom AI solutions including RAG systems, document intelligence, LLM integration and internal copilots for a defined business task.",
    capabilities: [
      "RAG systems",
      "Document intelligence",
      "LLM integration",
      "Internal copilots",
    ],
    flow: ["Task", "Prototype", "Evaluate", "Handover"],
    cta: "Explore Custom AI Solutions",
    relatedServiceIds: ["ai", "ai-applications", "ai-chatbots", "ai-automation"],
    page: base({
      metaTitle: "Custom AI Solutions for Business | Buildaze",
      metaDescription:
        "Turn a specific business problem into a scoped AI solution. Explore knowledge retrieval, document workflows, integrations and evaluation with Buildaze.",
      eyebrow: "Knowledge, documents and decision support",
      headline: "Custom AI Solutions for Your Knowledge and Workflows",
      subheadline:
        "When the problem does not fit an off-the-shelf tool, start with your knowledge, documents and existing systems. Define the output your team needs and build a solution around that specific task.",
      ctaLabel: "Discuss Your Custom AI Solution",
      secondaryCtaLabel: "Back to AI Services",
      problems: {
        eyebrow: "Common solutions problems",
        headline: "When the hard part is the knowledge system",
        intro: [
          "Custom Solutions own RAG, document intelligence and problem-specific AI systems. This page is not another five-service hub.",
        ],
        problems: [
          {
            id: "buried",
            index: "01",
            name: "Useful knowledge is buried in documents",
            title: "Information people cannot find quickly.",
            description:
              "RAG retrieves relevant approved information for an answer — it is not automatic model training or a guarantee of accuracy.",
            enquiryHref: leafEnquiry(
              solutionsPath,
              "Custom AI Solutions",
              "Knowledge buried in documents",
            ),
          },
          {
            id: "summarize",
            index: "02",
            name: "Staff repeatedly search or summarize information",
            title: "Manual review of the same document piles.",
            description:
              "Document extraction and summarization can be scoped with evaluation examples and review paths.",
            enquiryHref: leafEnquiry(
              solutionsPath,
              "Custom AI Solutions",
              "Repeated search and summarization",
            ),
          },
          {
            id: "generic",
            index: "03",
            name: "Generic assistants lack business context",
            title: "Tools that do not know your information.",
            description:
              "Business-specific context, permissions and retrieval design matter more than a generic chat UI alone.",
            enquiryHref: leafEnquiry(
              solutionsPath,
              "Custom AI Solutions",
              "Generic assistants lack business context",
            ),
          },
          {
            id: "no-eval",
            index: "04",
            name: "Prototype has no evaluation criteria",
            title: "A demo without a definition of correct.",
            description:
              "Agree task-specific evaluation and acceptable performance before treating a prototype as production-ready.",
            enquiryHref: leafEnquiry(
              solutionsPath,
              "Custom AI Solutions",
              "Prototype has no evaluation criteria",
            ),
          },
        ],
        closingTitle: "Need the product interface too?",
        closingBody:
          "AI Applications own the usable product surface. A project may include both, with separate deliverables.",
        ctaLabel: "Discuss custom AI solution",
        ctaHref: leafEnquiry(solutionsPath, "Custom AI Solutions"),
      },
      capabilities: {
        eyebrow: "Solutions scope",
        headline: "What custom AI solution work can include",
        intro: [
          "Supported examples may include RAG, internal copilots, document extraction/summarization and LLM integration. Prediction models, computer vision, fine-tuning, on-premise deployment and compliance certifications are omitted unless confirmed.",
        ],
        capabilities: [
          {
            id: "assess",
            index: "01",
            name: "Problem and data assessment",
            title: "What the system must produce — and from what.",
            description:
              "Assess documents, systems, permissions and whether information is complete enough for the task.",
            items: [
              "Task definition",
              "Data inventory",
              "Permission boundaries",
              "Gap and risk notes",
            ],
            cta: "Discuss assessment",
            href: leafEnquiry(
              solutionsPath,
              "Custom AI Solutions",
              "Problem and data assessment",
            ),
          },
          {
            id: "rag",
            index: "02",
            name: "Knowledge retrieval and document workflows",
            title: "RAG and document intelligence in plain language.",
            description:
              "Design how approved information is retrieved or processed for the specific output your team needs.",
            items: [
              "Retrieval design",
              "Document workflows",
              "Freshness considerations",
              "Fallback when info is missing",
            ],
            cta: "Discuss RAG / documents",
            href: leafEnquiry(
              solutionsPath,
              "Custom AI Solutions",
              "RAG and document workflows",
            ),
          },
          {
            id: "integrate",
            index: "03",
            name: "Model and system integration",
            title: "LLM integration with your systems.",
            description:
              "Connect models and tools with access controls and auditability appropriate to the task.",
            items: [
              "LLM integration",
              "System connections in scope",
              "Access controls",
              "Logging as agreed",
            ],
            cta: "Discuss LLM integration",
            href: leafEnquiry(
              solutionsPath,
              "Custom AI Solutions",
              "LLM integration",
            ),
          },
          {
            id: "evaluate",
            index: "04",
            name: "Evaluation and handover",
            title: "Representative examples before release.",
            description:
              "Evaluate retrieval quality, exception handling, usefulness and operating cost for the scoped task.",
            items: [
              "Evaluation examples",
              "Exception handling",
              "Monitoring scope",
              "Handover docs",
            ],
            cta: "Discuss evaluation",
            href: leafEnquiry(
              solutionsPath,
              "Custom AI Solutions",
              "Evaluation and handover",
            ),
          },
        ],
        closingTitle: "Internal copilots",
        closingBody:
          "Internal copilots may be delivered as a Custom Solution, an Application interface, or both — depending on whether the primary deliverable is the knowledge system or the product UI.",
        ctaLabel: "Discuss custom AI solution",
        ctaHref: leafEnquiry(solutionsPath, "Custom AI Solutions"),
      },
      deliveryProcess: {
        eyebrow: "Solutions process",
        headline: "From task and data to evaluated system",
        intro: [
          "Define task and data → prototype a specific approach → evaluate and integrate → validate and hand over.",
        ],
        steps: [
          {
            id: "define",
            index: "01",
            shortName: "Define",
            name: "Define task and data",
            title: "Output, sources and permissions.",
            description:
              "Write down the job to be done and what information is allowed.",
            itemsLabel: "Define",
            items: ["Task", "Sources", "Permissions", "Success criteria"],
            outcome: "A problem statement ready for design.",
          },
          {
            id: "prototype",
            index: "02",
            shortName: "Prototype",
            name: "Prototype the approach",
            title: "A bounded approach you can test.",
            description:
              "Try the retrieval or document approach on representative examples before scaling.",
            itemsLabel: "Prototype",
            items: ["Approach choice", "Sample corpus", "Early tests"],
            outcome: "Evidence the approach can work.",
          },
          {
            id: "evaluate",
            index: "03",
            shortName: "Evaluate",
            name: "Evaluate and integrate",
            title: "Quality, exceptions and system fit.",
            description:
              "Measure task-specific quality and wire integrations required for real use.",
            itemsLabel: "Evaluate",
            items: ["Quality review", "Exceptions", "Integrations in scope"],
            outcome: "A system ready for validation.",
          },
          {
            id: "handover",
            index: "04",
            shortName: "Handover",
            name: "Validate and hand over",
            title: "Documentation and operating notes.",
            description:
              "Hand over agreed work with known limitations. Incomplete documents need fallback behaviour — better retrieval cannot invent missing facts.",
            itemsLabel: "Handover",
            items: ["Docs", "Access", "Known limits", "Support options"],
            outcome: "An operable custom solution.",
          },
        ],
        closingTitle: "No general accuracy guarantee",
        closingBody:
          "Agree task-specific evaluation instead of promising every output is correct.",
        ctaLabel: "Discuss custom AI solution",
        ctaHref: "/contact?service=ai",
      },
      why: {
        eyebrow: "How success is assessed",
        headline: "Measurement for custom AI solutions",
        intro: [
          "Success depends on task-specific quality, relevant retrieval and useful exception handling.",
        ],
        differentiators: [
          {
            id: "retrieval",
            index: "01",
            name: "Relevant retrieval",
            summary: "Right sources for the answer.",
            title: "Retrieval that matches approved information.",
            description:
              "When RAG is in scope, review whether answers draw on the right material — and refuse when they should not.",
            panelStatement: "RAG is not automatic truth.",
            panelNote: "Permissions matter.",
          },
          {
            id: "task-quality",
            index: "02",
            name: "Task quality",
            summary: "Outputs people can use.",
            title: "Quality on representative examples.",
            description:
              "Summaries, extractions or recommendations are judged against agreed examples and review needs.",
            panelStatement: "Evaluation replaces vague accuracy claims.",
            panelNote: "Include hard cases.",
          },
          {
            id: "exceptions",
            index: "03",
            name: "Exceptions",
            summary: "Missing or unauthorized info.",
            title: "Correct behaviour when information is absent.",
            description:
              "The system should handle gaps without inventing unauthorized answers.",
            panelStatement: "Fallback is part of quality.",
            panelNote: "Document the limits.",
          },
        ],
        closingTitle: "Ready to discuss a custom AI solution?",
        closingBody:
          "Share the task, document types and systems involved — not confidential credentials in the form.",
        pillars: ["Task", "Retrieve", "Evaluate", "Handover"],
        closingNote: "Not a second AI hub.",
        ctaLabel: "Discuss Your Custom AI Solution",
        ctaHref: "/contact?service=ai",
      },
      overviewTitle: "What custom AI solutions include",
      overview: [
        "Custom AI solutions focus on knowledge retrieval, document workflows, LLM integration and evaluation for a specific business problem.",
        "Applications own product UI delivery; Automation owns multi-tool workflow actions.",
      ],
      solutionsTitle: "Solutions focus areas",
      solutions: [
        "RAG systems",
        "Document intelligence",
        "LLM integration",
        "Internal copilots",
        "Evaluation frameworks",
      ],
      deliverables: [
        "Problem and data assessment",
        "Retrieval or document workflow design",
        "Integration and evaluation in scope",
        "Handover documentation",
      ],
      included: [
        "Task discovery",
        "Written approach and evaluation plan",
        "Build and review cycles",
        "Known-limits documentation",
      ],
      stackTags: ["RAG", "Document intelligence", "LLM integration", "Evaluation"],
      process: [
        {
          index: "01",
          name: "Define",
          duration: "Scoped",
          description: "Task, data and permissions.",
        },
        {
          index: "02",
          name: "Prototype",
          duration: "Scoped",
          description: "Test a bounded approach.",
        },
        {
          index: "03",
          name: "Evaluate",
          duration: "Scoped",
          description: "Quality, exceptions and integrations.",
        },
        {
          index: "04",
          name: "Handover",
          duration: "Scoped",
          description: "Docs, access and limits.",
        },
      ],
      relatedWorkIds: [
        "support-copilot",
        "underwriting-copilot",
        "clinical-summarizer",
      ],
      faqs: [
        {
          question: "How is this different from AI Applications?",
          answer:
            "Applications focus on the usable product or feature. Custom Solutions focus on the underlying knowledge, document or business-specific AI system. A project may include both, with separate deliverables.",
        },
        {
          question: "What if our documents are incomplete?",
          answer:
            "The scope should account for missing or outdated information and define fallback behaviour. Better retrieval cannot compensate for information that is absent or unauthorized.",
        },
        {
          question: "Do you guarantee accuracy?",
          answer:
            "Agree a task-specific evaluation and acceptable performance before release. No general guarantee that every output is correct should replace testing and appropriate review.",
        },
      ],
      faqCtaLabel: "Discuss custom AI solution",
      faqCtaHref: "/contact?service=ai",
    }),
  },
  {
    id: "ai-automation",
    slug: "business-automation",
    path: autoPath,
    role: "detail",
    index: "05",
    name: "Business Automation",
    shortName: "Automation",
    oneLiner:
      "Workflow automation that connects tools, tasks and exception handling.",
    description:
      "AI automation services and process automation that move work between systems — with AI only where interpretation helps.",
    capabilities: [
      "Workflow automation",
      "Integrations",
      "Exception handling",
      "Scoped AI steps",
    ],
    flow: ["Map", "Bound", "Build", "Handover"],
    cta: "Explore Business Automation",
    relatedServiceIds: [
      "ai",
      "ai-solutions",
      "ai-chatbots",
      "ai-voice",
      "development",
    ],
    page: base({
      metaTitle: "AI Automation & Workflow Integration | Buildaze",
      metaDescription:
        "Reduce repetitive work with scoped business automation. Connect workflows, tools and approved AI steps with clear exceptions and reporting.",
      eyebrow: "Workflows, integrations and exceptions",
      headline: "Business Automation That Connects Your Tools and Tasks",
      subheadline:
        "Connect the steps your team repeats across tools, from collecting information to routing work and updating records. Use clear rules for predictable tasks and AI only where interpretation is useful.",
      ctaLabel: "Discuss Your Automation Workflow",
      secondaryCtaLabel: "Back to AI Services",
      problems: {
        eyebrow: "Common automation problems",
        headline: "When handoffs between tools waste time",
        intro: [
          "Automation owns triggers, actions and exception handling. Not every step needs a model.",
        ],
        problems: [
          {
            id: "data-entry",
            index: "01",
            name: "Repeated data entry",
            title: "The same fields typed into multiple tools.",
            description:
              "Map the fields, sources of truth and authorized write actions before automating updates.",
            enquiryHref: leafEnquiry(
              autoPath,
              "Business Automation",
              "Repeated data entry",
            ),
          },
          {
            id: "routing",
            index: "02",
            name: "Manual routing and follow-ups",
            title: "Work that waits for someone to notice.",
            description:
              "Routing rules and notifications can often run without AI when criteria are clear.",
            enquiryHref: leafEnquiry(
              autoPath,
              "Business Automation",
              "Manual routing and follow-ups",
            ),
          },
          {
            id: "fragmented",
            index: "03",
            name: "Fragmented tools and missed handoffs",
            title: "Steps that drop between systems.",
            description:
              "Integration depends on APIs, permissions and plans. Dependencies are verified before promising a connection.",
            enquiryHref: leafEnquiry(
              autoPath,
              "Business Automation",
              "Fragmented tools and missed handoffs",
            ),
          },
          {
            id: "silent-fail",
            index: "04",
            name: "Automations fail without clear exceptions",
            title: "Silent failures and unclear ownership.",
            description:
              "Projects should define notifications, review responsibilities and recovery for actions in scope.",
            enquiryHref: leafEnquiry(
              autoPath,
              "Business Automation",
              "Automations fail without clear exceptions",
            ),
          },
        ],
        closingTitle: "Document-heavy work?",
        closingBody:
          "Document intelligence and RAG detail live on Custom AI Solutions. Intake chat or voice can feed an automation when scoped.",
        ctaLabel: "Discuss automation workflow",
        ctaHref: leafEnquiry(autoPath, "Business Automation"),
      },
      capabilities: {
        eyebrow: "Automation scope",
        headline: "What business automation can include",
        intro: [
          "Examples may include approved document routing, structured intake, summaries for review, task creation and authorized record updates. n8n, Make, Zapier, every CRM or 24/7 monitoring are not claimed by default. No unapproved live actions are executed by this page.",
        ],
        capabilities: [
          {
            id: "map",
            index: "01",
            name: "Workflow mapping and baseline",
            title: "Understand the current path before changing it.",
            description:
              "Document steps, owners, systems and where work stalls today.",
            items: [
              "Current workflow map",
              "Systems involved",
              "Baseline pain points",
              "Success signals",
            ],
            cta: "Discuss workflow mapping",
            href: leafEnquiry(autoPath, "Business Automation", "Workflow mapping"),
          },
          {
            id: "design",
            index: "02",
            name: "Trigger, action and integration design",
            title: "Bounded automation with clear permissions.",
            description:
              "Design what starts a run, what actions are allowed and which systems are updated.",
            items: [
              "Triggers",
              "Authorized actions",
              "API dependencies",
              "Approval steps when needed",
            ],
            cta: "Discuss integration design",
            href: leafEnquiry(
              autoPath,
              "Business Automation",
              "Trigger and integration design",
            ),
          },
          {
            id: "ai-steps",
            index: "03",
            name: "Rules and AI steps",
            title: "AI only where interpretation helps.",
            description:
              "Predictable rules can often run without a model. Scoped AI agents for workflow actions belong here when buyer intent is process automation.",
            items: [
              "Rule-based steps",
              "AI steps when justified",
              "Cost/reliability trade-offs",
              "Human review points",
            ],
            cta: "Discuss rules vs AI",
            href: leafEnquiry(
              autoPath,
              "Business Automation",
              "Rules and AI steps",
            ),
          },
          {
            id: "exceptions",
            index: "04",
            name: "Validation, exceptions and handover",
            title: "Normal paths and failure paths.",
            description:
              "Test success and exception cases. Logs, documentation and maintenance commitments belong in the agreement.",
            items: [
              "Normal-path tests",
              "Exception handling",
              "Logs and notifications",
              "Handover responsibilities",
            ],
            cta: "Discuss exception handling",
            href: leafEnquiry(
              autoPath,
              "Business Automation",
              "Exception handling",
            ),
          },
        ],
        closingTitle: "System integration depth",
        closingBody:
          "Complex custom backends may also involve Development. Chatbots and Voice Agents can provide intake that starts a workflow.",
        ctaLabel: "Discuss automation workflow",
        ctaHref: leafEnquiry(autoPath, "Business Automation"),
      },
      deliveryProcess: {
        eyebrow: "Automation process",
        headline: "From mapped workflow to owned automation",
        intro: [
          "Map existing workflow → choose bounded starting scope → build and test normal and exception paths → hand over responsibilities.",
        ],
        steps: [
          {
            id: "map",
            index: "01",
            shortName: "Map",
            name: "Map the workflow",
            title: "Steps, tools and owners today.",
            description:
              "Capture the real process, including the messy exceptions people handle manually.",
            itemsLabel: "Map",
            items: ["Steps", "Tools", "Owners", "Failure points"],
            outcome: "A shared workflow picture.",
          },
          {
            id: "bound",
            index: "02",
            shortName: "Bound",
            name: "Choose a bounded scope",
            title: "Start where automation is safest and useful.",
            description:
              "Pick a first slice with clear permissions rather than automating everything at once.",
            itemsLabel: "Bound",
            items: ["Starting slice", "Permissions", "Success criteria"],
            outcome: "A written first automation scope.",
          },
          {
            id: "build",
            index: "03",
            shortName: "Build",
            name: "Build and test",
            title: "Normal paths and exception paths.",
            description:
              "Implement agreed triggers and actions, then test failures as carefully as successes.",
            itemsLabel: "Build",
            items: ["Implementation", "Normal tests", "Exception tests"],
            outcome: "An automation you can observe.",
          },
          {
            id: "handover",
            index: "04",
            shortName: "Handover",
            name: "Hand over responsibilities",
            title: "Who watches, who fixes, what is in maintenance.",
            description:
              "Document ownership, logs and what happens when a run fails.",
            itemsLabel: "Handover",
            items: ["Runbooks in scope", "Access", "Maintenance options"],
            outcome: "Clear operating ownership.",
          },
        ],
        closingTitle: "No fabricated hours saved",
        closingBody:
          "Time savings need a measured baseline. Headcount replacement promises are not used here.",
        ctaLabel: "Discuss automation workflow",
        ctaHref: "/contact?service=ai",
      },
      why: {
        eyebrow: "How success is assessed",
        headline: "Measurement for business automation",
        intro: [
          "Judge automations on completion, exceptions and output quality — with baselines when available.",
        ],
        differentiators: [
          {
            id: "completion",
            index: "01",
            name: "Workflow completion",
            summary: "Runs that finish correctly.",
            title: "Successful completion of the scoped workflow.",
            description:
              "Track whether authorized steps complete as designed.",
            panelStatement: "A trigger without a finish is not success.",
            panelNote: "Watch exceptions.",
          },
          {
            id: "exceptions",
            index: "02",
            name: "Exception rate",
            summary: "Failures you can act on.",
            title: "Visible exceptions with owners.",
            description:
              "Failures should notify the right people and stop unauthorized actions.",
            panelStatement: "Silent failure is worse than no automation.",
            panelNote: "Define recovery.",
          },
          {
            id: "baseline",
            index: "03",
            name: "Baseline context",
            summary: "Time per task when measured.",
            title: "Time-per-task with a measured baseline.",
            description:
              "When a baseline exists, compare carefully. Do not invent hours saved.",
            panelStatement: "Measurement before marketing claims.",
            panelNote: "Optional and honest.",
          },
        ],
        closingTitle: "Ready to discuss automation?",
        closingBody:
          "Share the workflow, tools involved and which actions must never run without approval.",
        pillars: ["Map", "Bound", "Test", "Own"],
        closingNote: "AI optional, rules first when enough.",
        ctaLabel: "Discuss Your Automation Workflow",
        ctaHref: "/contact?service=ai",
      },
      overviewTitle: "What business automation includes",
      overview: [
        "Business automation covers workflow mapping, integrations, rules or AI steps, exception handling and handover.",
        "AI agents for workflow actions belong here; product copilots and RAG systems have other owners.",
      ],
      solutionsTitle: "Automation focus areas",
      solutions: [
        "Workflow automation",
        "Process automation",
        "API integrations",
        "Exception handling",
        "Scoped AI workflow steps",
      ],
      deliverables: [
        "Workflow map and bounded scope",
        "Implemented triggers and actions in scope",
        "Exception handling and logs as agreed",
        "Handover documentation",
      ],
      included: [
        "Workflow discovery",
        "Written permissions and scope",
        "Build and exception tests",
        "Operating ownership notes",
      ],
      stackTags: [
        "Workflow automation",
        "Integrations",
        "Exception handling",
        "AI steps (when useful)",
      ],
      process: [
        {
          index: "01",
          name: "Map",
          duration: "Scoped",
          description: "Current workflow and failure points.",
        },
        {
          index: "02",
          name: "Bound",
          duration: "Scoped",
          description: "First automation slice and permissions.",
        },
        {
          index: "03",
          name: "Build",
          duration: "Scoped",
          description: "Implement and test paths.",
        },
        {
          index: "04",
          name: "Handover",
          duration: "Scoped",
          description: "Ownership and maintenance options.",
        },
      ],
      faqs: [
        {
          question: "Does every automation need AI?",
          answer:
            "No. Predictable rules can often be automated without a model. Use AI where interpretation adds value and evaluate its effect on reliability and cost.",
        },
        {
          question: "Can you connect our existing tools?",
          answer:
            "Connection depends on their APIs, permissions, plans and the actions you need. Verify these dependencies before promising an integration.",
        },
        {
          question: "What happens when a workflow fails?",
          answer:
            "The project should define exception handling, notifications, review responsibilities and recovery for the actions in scope. Maintenance commitments belong in the agreement.",
        },
      ],
      faqCtaLabel: "Discuss automation workflow",
      faqCtaHref: "/contact?service=ai",
    }),
  },
  {
    /** Linking/sitemap entry only — page remains `app/voice-agent`. */
    id: "ai-voice",
    slug: "voice-agent",
    path: VOICE,
    role: "detail",
    index: "03",
    name: "AI Voice Agents",
    shortName: "Voice",
    oneLiner:
      "Custom AI voice agents for routine calls, intake and human handoff.",
    description:
      "Spoken AI voice agents with approved information, scoped channels and clear escalation — browser demo on /voice-agent.",
    capabilities: [
      "Voice conversations",
      "Call intake",
      "Appointment requests",
      "Human handoff",
    ],
    flow: ["Configure", "Test", "Deploy", "Monitor"],
    cta: "Explore Voice Agent",
    relatedServiceIds: ["ai", "ai-chatbots", "ai-automation"],
    page: base({
      metaTitle: "Custom AI Voice Agent Development | Buildaze",
      metaDescription:
        "Explore custom AI voice agents for routine calls, lead intake and appointment requests. Review the demo and discuss integrations and handoff with Buildaze.",
      headline: "Custom AI Voice Agents for Your Business",
      subheadline:
        "Build a voice experience around the questions callers ask, the information your business approves and the situations that need a person.",
      ctaLabel: "Discuss Your Voice Agent",
      overviewTitle: "Voice agents",
      overview: [
        "Voice Agent content and demo live on /voice-agent.",
      ],
      solutionsTitle: "Voice focus",
      solutions: ["AI voice agents"],
      deliverables: ["Scoped voice agent engagement"],
      included: ["Discovery and custom configuration"],
      stackTags: ["Voice AI"],
      process: [
        {
          index: "01",
          name: "Configure",
          duration: "Scoped",
          description: "Approved information and escalation rules.",
        },
      ],
      faqs: [],
    }),
  },
];
