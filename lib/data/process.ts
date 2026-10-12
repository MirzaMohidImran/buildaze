export interface ProcessPhase {
  index: string;
  name: string;
  description: string;
  deliverables: string[];
}

/** Homepage How We Work sequence — timelines depend on agreed scope. */
export const processPhases: ProcessPhase[] = [
  {
    index: "01",
    name: "Understand",
    description:
      "We discuss your goals, current setup and the problem to solve — so recommendations match the business, not a generic template.",
    deliverables: [
      "Discovery conversation",
      "Current setup review",
      "Problem framing",
    ],
  },
  {
    index: "02",
    name: "Define the Scope",
    description:
      "We agree on deliverables, responsibilities, milestones and cost before development starts. You know what is in and out of the engagement.",
    deliverables: [
      "Scope document",
      "Milestones and responsibilities",
      "Cost before build",
    ],
  },
  {
    index: "03",
    name: "Build and Review",
    description:
      "We develop the agreed work and share progress at defined review points so feedback arrives while changes are still practical.",
    deliverables: [
      "Agreed deliverables in progress",
      "Scheduled reviews",
      "Course corrections within scope",
    ],
  },
  {
    index: "04",
    name: "Launch and Handover",
    description:
      "We test, launch and hand over the agreed deliverables. You receive the custom work and access we scoped. Shopify, hosting, apps and other third-party services keep their own licensing and costs. Ongoing support is optional — not required to keep access to what we delivered.",
    deliverables: [
      "Testing and launch",
      "Agreed code and access handover",
      "Optional support options explained",
    ],
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
      "Clear scope before development",
      "Progress reviews at defined points",
      "Practical handover of agreed custom work",
      "Scope, timeline and cost agreed before we build",
      "Third-party platforms retain their own licensing",
      "Optional support after launch",
    ],
  },
} as const;

/** Paired rows for the comparison matrix — retained for any non-homepage use. */
export const comparisonRows = [
  {
    axis: "Scoping",
    buildaze: "Clear scope before development",
    traditional: "Long discovery cycles before anything is built",
  },
  {
    axis: "Visibility",
    buildaze: "Progress reviews at defined points",
    traditional: "Monthly status updates instead of working software",
  },
  {
    axis: "Team",
    buildaze: "The people you speak with stay close to delivery",
    traditional: "Junior-heavy delivery behind senior salespeople",
  },
  {
    axis: "Commercials",
    buildaze: "Scope, timeline and cost agreed before we build",
    traditional: "Scope ambiguity and surprise invoices",
  },
  {
    axis: "Ownership",
    buildaze: "Handover of agreed custom work and access",
    traditional: "Proprietary platforms that create lock-in",
  },
  {
    axis: "Feedback",
    buildaze: "Course corrections during agreed review points",
    traditional: "Feedback arrives after the budget is spent",
  },
] as const;

export const differentiators = [
  {
    title: "Clear scope and responsibilities",
    description:
      "Deliverables, responsibilities and cost are agreed before work begins, so both sides know what success looks like.",
  },
  {
    title: "Business needs first",
    description:
      "We start from the problem you need solved — not a technology or channel list — and shape the engagement around practical outcomes.",
  },
  {
    title: "Regular communication and reviews",
    description:
      "Progress is shared at defined review points so feedback arrives while changes are still practical to make.",
  },
  {
    title: "Maintainable delivery and handover",
    description:
      "You receive the agreed custom deliverables, documentation and access. Third-party platforms keep their own terms. Ongoing support is available when you want it.",
  },
] as const;
