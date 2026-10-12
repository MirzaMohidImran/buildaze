/** Copy and structure for the Voice Agent product page and homepage section. */

export const voiceAgent = {
  path: "/voice-agent",
  /** Preserved route — AI Voice Agents destination (not duplicated under AI hub). */
  metaTitle: "Custom AI Voice Agent Development | Buildaze",
  metaDescription:
    "Custom AI voice agents for routine enquiries, lead intake and human handoff. Discuss a scoped build or request a Buildaze walkthrough.",
  ogImage: "/og/voice-agent-og.png",
  hero: {
    eyebrow: "AI Voice Agents",
    headline: "Custom AI Voice Agents for Your Business",
    subheadline:
      "Build a voice experience around the questions callers ask, the information your business approves and the situations that need a person. Start with a scoped use case before promising phone, calendar or CRM integrations.",
  },
  homepage: {
    index: "05",
    label: "Voice agent",
    heading: "Handle routine calls with a clear path to a person.",
    body: "A Buildaze voice agent can cover routine enquiries, lead qualification and appointment requests, then hand off to your team when a human is needed. Appointment requests are collected for your team — they are not automatic confirmed bookings unless that integration is scoped separately.",
  },
  demo: {
    title: "Try the AI voice agent demo",
    instructions:
      "When the demo is available, allow the microphone when prompted and speak naturally. Headphones help keep the agent from hearing its own voice. End the conversation whenever you are done.",
    tip: "Microphone access is requested only when you start a conversation — never on page load. If the demo is unavailable on this deployment, use the enquiry form for a walkthrough. The browser demo does not by itself prove telephone transfer or calendar booking.",
  },
  intro: {
    title: "What this product is — and is not",
    paragraphs: [
      "Buildaze’s voice agent is a custom-built conversational system for businesses that need callers answered with approved information, clear boundaries and a path to a human. It is not a one-click SaaS template with fixed pricing or pre-claimed integrations.",
      "The page below explains what you can test in the browser demo when credentials are connected, which problems a production agent can address, and how a Buildaze engagement moves from configuration to deployment. Browser microphone access does not establish phone-line capability.",
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
        "Collect preferred times and details, then hand structured requests to your team or a scheduling workflow you already run. Collecting appointment requests and writing confirmed bookings into a calendar are different capabilities.",
    },
    {
      title: "Consistent answers",
      description:
        "The same approved facts and escalation rules every call — useful when staffing or after-hours volume varies. Multilingual coverage and concurrency are scoped per project when measured.",
    },
    {
      title: "Human handoff",
      description:
        "When a caller asks for a person, or the question sits outside configured knowledge, the agent can transfer or take a message instead of guessing. A summary or message is different from a successful live transfer — production handoff is configured in a custom build.",
    },
  ],
  steps: [
    {
      title: "Configure approved information",
      description:
        "We load hours, offerings, FAQs, tone and the situations that must go to a human — from documents and systems you already maintain.",
    },
    {
      title: "Test realistic conversations",
      description:
        "You call the agent yourself: interrupt it, ask edge cases, and tighten prompts until answers match how your business actually speaks.",
    },
    {
      title: "Implement agreed channel and integrations",
      description:
        "Browser widget, phone number or both — wired into the channels and handoff paths your team uses today. Telephony, CRM and calendar connections are implemented when they are in scope, not assumed on the public demo.",
    },
    {
      title: "Monitor and hand over",
      description:
        "You receive the agreed configuration, documentation and access. Deployment support is described only where offered — without invented uptime or 24/7 staffing promises.",
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
        "Qualify inbound interest, collect essentials and request a callback — without inventing pricing or commitments.",
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
      question: "Is the browser demo already customized for us?",
      answer:
        "No. It demonstrates the available interaction. A business deployment needs its own approved information, conversation scope and integrations.",
    },
    {
      question: "Can it book appointments?",
      answer:
        "Collecting appointment requests and writing confirmed bookings into a calendar are different capabilities. Calendar access and booking rules must be included in the project scope.",
    },
    {
      question: "Can it transfer to a person?",
      answer:
        "A production handoff can be designed for your phone or support setup. The public browser demo does not by itself prove live telephone transfer.",
    },
    {
      question: "What works in the demo today?",
      answer:
        "When the demo is available, you get a live two-way voice session in a supported browser over HTTPS, with start/end controls, connection status and a transcript when the provider sends one. Phone numbers, CRM writes and calendar booking are part of a custom build — not claimed as live here unless we have wired them for you.",
    },
    {
      question: "How is this different from Buildaze AI development services?",
      answer:
        "The AI hub covers applications, chatbots, custom solutions and automation. This Voice Agent page is the spoken-conversation destination, including the browser demo. Many voice projects still start from an AI engagement when retrieval, evals or product integration are required.",
    },
    {
      question: "What do I need to try the demo?",
      answer:
        "A modern browser (Chrome or Edge work best), HTTPS, and microphone permission when you tap Start Conversation. If the demo shows as unavailable, the agent credentials are not configured on this deployment — use the enquiry form and we will arrange a live session.",
    },
    {
      question: "Who owns the implementation?",
      answer:
        "Custom deliverables follow the agreement. You receive agreed code, configuration and access. Model providers and third-party platforms retain their own terms.",
    },
  ],
  related: {
    title: "Related Buildaze AI services",
    ai: {
      label: "AI Development hub",
      href: "/services/ai-development",
      description:
        "AI applications, chatbots, custom solutions and automation when your voice agent needs grounded answers, evals or product integration.",
    },
    chatbots: {
      label: "AI Chatbots",
      href: "/services/ai-development/ai-chatbots",
      description:
        "Text conversations for customers or teams when spoken interaction is not required.",
    },
    automation: {
      label: "Business Automation",
      href: "/services/ai-development/business-automation",
      description:
        "Workflow actions after intake — task creation, routing and authorized record updates.",
    },
  },
} as const;
