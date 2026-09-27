/** Copy and structure for the Voice Agent product page and homepage section. */

export const voiceAgent = {
  path: "/voice-agent",
  /** Unique title — product + demo intent; distinct from AI Development services title. */
  metaTitle: "Custom AI Voice Agent for Business | Live Demo — Buildaze",
  metaDescription:
    "Buildaze designs custom AI voice agents for routine inquiries, lead qualification, appointment requests and human handoff. Try the browser demo when available, or start a scoped build with our team.",
  ogImage: "/og/voice-agent.svg",
  hero: {
    eyebrow: "Our Products",
    headline: "Custom AI voice agent for your business.",
    subheadline:
      "Buildaze designs and ships voice agents trained on your knowledge, tone and escalation rules — so routine calls get consistent answers, and your team only joins when a person is needed. Hear a live demo in the browser when it is connected, then talk to us about your use case.",
  },
  homepage: {
    index: "10",
    label: "Voice agent",
    heading: "Answer the call without putting a person on every line.",
    body: "A Buildaze custom AI voice agent handles routine questions, qualifies leads, takes appointment requests and routes to a human when the conversation needs one — configured on your information, not a generic script.",
  },
  demo: {
    title: "Try the AI voice agent demo",
    instructions:
      "When the demo is available, allow the microphone when prompted and speak naturally. Headphones help keep the agent from hearing its own voice. End the conversation whenever you are done.",
    tip: "Microphone access is requested only when you start a conversation — never on page load. If the demo is unavailable on this deployment, contact us for a live walkthrough.",
  },
  intro: {
    title: "What this product is — and is not",
    paragraphs: [
      "Buildaze’s voice agent is a custom-built conversational system for businesses that need callers answered with approved information, clear boundaries and a path to a human. It is not a one-click SaaS template with fixed pricing or pre-claimed integrations.",
      "The page below explains what you can test in the browser demo when credentials are connected, which problems a production agent can address, and how a Buildaze engagement moves from configuration to deployment.",
    ],
  },
  benefits: [
    {
      title: "Routine inquiries",
      description:
        "Hours, locations, services and policy answers drawn from the knowledge you provide — so common questions do not wait for an inbox.",
    },
    {
      title: "Lead qualification",
      description:
        "Capture name, intent, budget band or timeline before a salesperson joins, so outbound follow-up starts with context.",
    },
    {
      title: "Appointment requests",
      description:
        "Collect preferred times and details, then hand structured requests to your team or a scheduling workflow you already run. Calendar write-back is scoped per project when you need it.",
    },
    {
      title: "Consistent answers",
      description:
        "The same approved facts and escalation rules every call — useful when staffing, language coverage or after-hours volume varies.",
    },
    {
      title: "Human handoff",
      description:
        "When a caller asks for a person, or the question sits outside configured knowledge, the agent can transfer or take a message instead of guessing. Live queue transfer is configured in a production build.",
    },
  ],
  steps: [
    {
      title: "Configure business information",
      description:
        "We load hours, offerings, FAQs, tone and the situations that must go to a human — from documents and systems you already maintain.",
    },
    {
      title: "Test the conversation",
      description:
        "You call the agent yourself: interrupt it, ask edge cases, and tighten prompts until answers match how your business actually speaks.",
    },
    {
      title: "Deploy where callers already are",
      description:
        "Browser widget, phone number or both — wired into the channels and handoff paths your team uses today. Telephony and CRM connections are implemented when they are in scope, not assumed on the public demo.",
    },
  ],
  useCases: [
    {
      title: "Support and front desk",
      description:
        "After-hours and peak-volume coverage for questions your team answers every day, with a clear path to a person.",
    },
    {
      title: "Sales intake",
      description:
        "Qualify inbound interest, collect essentials and book a callback — without inventing pricing or commitments.",
    },
    {
      title: "Service businesses",
      description:
        "Take appointment requests, confirm details and summarize the ask for staff who complete the booking.",
    },
    {
      title: "Product and SaaS teams",
      description:
        "Guide visitors through onboarding questions or status checks grounded in your docs — then escalate account issues.",
    },
  ],
  faqs: [
    {
      question: "What is a custom AI voice agent from Buildaze?",
      answer:
        "A conversational voice system configured on your business information, tone and escalation rules, then integrated into the channels you need — often a browser experience, a phone line, or both. Buildaze builds and hands over the implementation; you own the code and infrastructure.",
    },
    {
      question: "Is the browser demo a finished product for my business?",
      answer:
        "No. The demo lets you hear a Buildaze-configured agent in the browser when credentials are connected. A production agent for your company is a custom engagement: your knowledge, channels, handoff rules and integrations.",
    },
    {
      question: "What works in the demo today?",
      answer:
        "When the demo is available, you get a live two-way voice session in a supported browser over HTTPS, with start/end controls, connection status and a transcript when the provider sends one. Phone numbers, CRM writes and calendar booking are part of a custom build — not claimed as live here unless we have wired them for you.",
    },
    {
      question: "How is this different from Buildaze AI Development?",
      answer:
        "AI Development covers broader production AI — LLM workflows, RAG, copilots and agents inside products. This Voice Agent page is specifically about spoken conversation for callers and the live browser demo. Many voice projects still start from an AI Development engagement when retrieval, evals or product integration are required.",
    },
    {
      question: "Can the agent hand off to a human?",
      answer:
        "Yes in a production setup. We define transfer or messaging rules during configuration. The public demo may not connect to a live queue; ask us if you need to see handoff in a scoped pilot.",
    },
    {
      question: "How is the agent customized?",
      answer:
        "From your documents, FAQs, product catalog and the tone you approve. We also set boundaries: what it must not invent, and when it must stop and escalate.",
    },
    {
      question: "What do I need to try the demo?",
      answer:
        "A modern browser (Chrome or Edge work best), HTTPS, and microphone permission when you tap Start Conversation. If the demo shows as unavailable, the agent credentials are not configured on this deployment — contact us and we will set up a live session.",
    },
    {
      question: "Who owns the implementation?",
      answer:
        "Same as every Buildaze engagement: you own the code, configuration and infrastructure we ship. No proprietary lock-in required to keep the agent running.",
    },
  ],
  related: {
    title: "Related Buildaze work",
    ai: {
      label: "AI Development",
      href: "/services/ai-development",
      description:
        "LLM workflows, RAG systems and production agents when your voice agent needs grounded answers, evals or product integration.",
    },
  },
} as const;
