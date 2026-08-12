export interface Engagement {
  id: string;
  name: string;
  price: string;
  priceNote: string;
  bestFor: string;
  description: string;
  deliverables: string[];
  timeline: string;
  featured?: boolean;
}

/** Existing Buildaze engagement models, presented correctly as fixed-scope engagements. */
export const engagements: Engagement[] = [
  {
    id: "starter",
    name: "Starter Sprint",
    price: "$9,900",
    priceNote: "fixed scope",
    bestFor: "Founders validating an idea",
    description:
      "Validate your idea in two weeks. You get a working prototype, a fixed technical scope and a decision-ready roadmap.",
    deliverables: [
      "Scoping workshop",
      "Fixed scope document",
      "Working prototype",
      "1 data source & 1 integration",
    ],
    timeline: "~2 weeks",
  },
  {
    id: "growth",
    name: "Growth Build",
    price: "$19,900",
    priceNote: "fixed scope, from",
    bestFor: "Teams ready to ship and scale",
    description:
      "Full production build with deployment, testing and handoff. Built for teams ready to ship to real users and scale from day one.",
    deliverables: [
      "Everything in Starter Sprint",
      "Full production deployment",
      "CI/CD setup & monitoring",
      "3 data sources & integrations",
    ],
    timeline: "4–10 weeks",
    featured: true,
  },
];

export interface FaqItem {
  question: string;
  answer: string;
}

/** FAQ grounded in the existing site's answers, expanded to remove real sales objections. */
export const faqs: FaqItem[] = [
  {
    question: "What's the typical timeline from idea to v1?",
    answer:
      "Most projects reach a working v1 in 4–8 weeks. Complex SaaS or AI products with multiple integrations can take 10–12 weeks. We give you a fixed timeline before we start — not a range we revise later.",
  },
  {
    question: "What do we need to start?",
    answer:
      "A clear problem statement and a stakeholder who can make decisions. We run a scoping workshop in the first 3–5 days to align requirements, stack and success metrics before anything gets built.",
  },
  {
    question: "Do we own the code after the project?",
    answer:
      "Yes — 100%. You get the full repo, deployment access and documentation on the day we ship. No retainers required to keep the lights on, no proprietary platforms that trap you.",
  },
  {
    question: "What happens if the scope changes mid-project?",
    answer:
      "The fixed scope document exists to protect both sides. If priorities shift, we re-scope explicitly — you approve the change, the timeline and the cost before we act on it. No silent scope creep, no surprise invoices.",
  },
  {
    question: "How often will we see progress?",
    answer:
      "Every week. Each sprint ends with a live demo of working software — not a slide deck or a status email. Course corrections happen while they're still cheap.",
  },
  {
    question: "Which stack do you build on?",
    answer:
      "For web: Next.js, React, Node.js, Laravel. For AI: OpenAI, Anthropic Claude, LangChain, Pinecone, Supabase Vector. For ecommerce: Shopify, WooCommerce, Medusa. For SaaS: Stripe, multi-tenant Postgres, RBAC. We pick the right tool for the problem — not the trendiest one.",
  },
  {
    question: "Can you work with our existing team and stack?",
    answer:
      "Yes. We integrate with your CRM, helpdesk, data warehouse or existing codebase via APIs and webhooks, and we're comfortable working alongside in-house engineers as an external senior team.",
  },
  {
    question: "What happens after launch?",
    answer:
      "You leave with the full repo, deployment access and documentation, so you're never dependent on us. If you want ongoing support or a next phase, we scope it as a new fixed engagement — never as a forced retainer.",
  },
  {
    question: "How do you handle security and sensitive data?",
    answer:
      "PII handling, SSO/SAML, role-based access control, secrets management, encryption and audit trails are built in from the architecture stage — not bolted on at the end. We've shipped HIPAA-aligned and PHI-safe workflows in production.",
  },
];
