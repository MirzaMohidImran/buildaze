export interface ProcessPhase {
  index: string;
  name: string;
  duration: string;
  description: string;
  deliverables: string[];
}

/** The real Buildaze delivery model with verified timelines. */
export const processPhases: ProcessPhase[] = [
  {
    index: "01",
    name: "Scope & Plan",
    duration: "3–5 days",
    description:
      "We align on requirements, stack and success metrics in a scoping workshop. You get a fixed scope document, timeline and cost estimate before we write a line of code.",
    deliverables: ["Scoping workshop", "Fixed scope document", "Timeline & cost estimate"],
  },
  {
    index: "02",
    name: "Build & Demo",
    duration: "2–8 weeks",
    description:
      "Weekly sprints with live demos. You see working software every week, not status emails. Course corrections happen before they get expensive.",
    deliverables: ["Weekly live demos", "Working software each sprint", "Continuous feedback loop"],
  },
  {
    index: "03",
    name: "Ship & Hand Off",
    duration: "1 week",
    description:
      "We test, deploy and hand over the full codebase with documentation. You own the repo, the infrastructure and every line of code.",
    deliverables: ["Testing & deployment", "Full repo + documentation", "Infrastructure access"],
  },
];

export const comparison = {
  traditional: {
    title: "The typical agency model",
    points: [
      "Long discovery cycles before anything is built",
      "Monthly status updates instead of working software",
      "Junior-heavy delivery behind senior salespeople",
      "Scope ambiguity and surprise invoices",
      "Proprietary platforms that create lock-in",
      "Feedback arrives after the budget is spent",
    ],
  },
  buildaze: {
    title: "How Buildaze works",
    points: [
      "Fixed technical scope in 3–5 days",
      "A live demo of working software every week",
      "Senior specialists on every project — no bait-and-switch",
      "Scope, timeline and cost agreed before we build",
      "Full repo, infrastructure and deployment access at handoff",
      "Course corrections every sprint, while they're cheap",
    ],
  },
} as const;

export const differentiators = [
  {
    title: "Results, not retainers",
    description:
      "Fixed-scope sprints. You know exactly what ships, when, and for how much — before we write a line of code.",
  },
  {
    title: "Weekly visibility",
    description:
      "Every sprint ends with a live demo. You review working software, not slide decks or status emails.",
  },
  {
    title: "Secure by design",
    description:
      "PII handling, SSO/SAML, RBAC, encryption and audit trails — built in, not bolted on.",
  },
  {
    title: "Senior team, full ownership",
    description:
      "No junior developers billed at senior rates. Every line of code is yours the day we ship.",
  },
] as const;
