import { caseStudies } from "./work";
import { team } from "./team";

/** About page copy and selections — claims limited to verified site data. */
export const aboutPage = {
  metaTitle: "About Buildaze | The Team Behind the Work",
  metaDescription:
    "Meet the Buildaze team. We help businesses launch and improve websites, products, Shopify stores, AI systems and digital marketing — with clear scope and practical handover.",
  path: "/about" as const,
  hero: {
    eyebrow: "About Buildaze",
    h1: "The team behind Buildaze.",
    intro:
      "Buildaze helps businesses launch and improve websites, applications, Shopify stores, AI systems and digital marketing. We work with founders and teams who need scoped delivery, clear progress and a practical handover — not a vague agency package.",
    primaryCta: { label: "Discuss Your Project", href: "/contact" },
    secondaryCta: { label: "Explore Our Work", href: "/work" },
  },
  whoWeAre: {
    eyebrow: "Who we are",
    headline: "A digital agency organised around real project work.",
    paragraphs: [
      "Buildaze brings design, development, artificial intelligence, digital marketing and Shopify services together so businesses can launch, improve and grow with a defined scope.",
      "We connect the visual and product side of the work with how customers and teams actually use a site or system. The goal is usable delivery — not slides that stop when the build begins.",
      "Clients typically start with a clear problem, agree deliverables and responsibilities, then review progress at defined points before launch and handover of the agreed custom work.",
    ],
  },
  /** Highlight Mohid using existing team record only. */
  featuredMemberName: "Mohid Imran",
  teamIntro:
    "These are the people who contribute to client projects. Roles and bios come from our published team information. Photos are not published here, so we use the site’s initials treatment.",
  journey: {
    eyebrow: "How working with us feels",
    headline: "From first conversation to handover.",
    intro:
      "Engagements follow a simple sequence. Timelines and support depend on the scope you agree — not a universal calendar for every project.",
    steps: [
      {
        index: "01",
        name: "Discuss the project",
        description:
          "We talk through your goals, current setup and the problem to solve so recommendations match the business.",
        clientProvides: "Goals, constraints and access to the current setup where relevant.",
        weHandle: "Discovery conversation, problem framing and an honest fit check.",
      },
      {
        index: "02",
        name: "Agree the scope",
        description:
          "Deliverables, responsibilities, milestones and cost are agreed before development starts.",
        clientProvides: "Decisions on priorities and what is in or out of the engagement.",
        weHandle: "A written scope with milestones and responsibilities.",
      },
      {
        index: "03",
        name: "Build with review points",
        description:
          "We develop the agreed work and share progress at defined review points so feedback arrives while changes are still practical.",
        clientProvides: "Timely feedback at review points.",
        weHandle: "Delivery within the agreed scope and scheduled reviews.",
      },
      {
        index: "04",
        name: "Validate, launch and hand over",
        description:
          "We test, launch through the agreed process and hand over the custom work and access we scoped. Third-party platforms keep their own licensing. Ongoing support is optional.",
        clientProvides: "Launch preferences and any required third-party account access.",
        weHandle: "Testing, launch preparation and practical handover of agreed deliverables.",
      },
    ],
  },
  expectations: {
    eyebrow: "What clients can expect",
    headline: "Practical commitments, not slogans.",
    items: [
      {
        title: "Clear scope and responsibilities",
        description:
          "What is in and out of the engagement is written down before build work starts.",
      },
      {
        title: "Direct communication",
        description:
          "You work with the people delivering the project — not a long chain of status relays.",
      },
      {
        title: "Reviewable progress",
        description:
          "Progress is shared at defined review points so feedback can shape the work while it is still practical.",
      },
      {
        title: "Attention to usability and performance",
        description:
          "Interfaces and implementation choices consider how people use the product and how the site or app behaves in practice.",
      },
      {
        title: "Documented handover and optional support",
        description:
          "You receive the agreed custom work and access. Follow-on support can be scoped separately when you want it.",
      },
    ],
  },
  servicesIntro: {
    eyebrow: "Find the right service",
    headline: "Choose the destination that matches your need.",
    body: "If you already know the category, go straight to the specialist page. If you are unsure, start with an enquiry and we will help map the problem to the right service.",
  },
  serviceLinks: [
    {
      label: "Shopify Development and Growth",
      description: "Stores, migrations, apps and ongoing Shopify work.",
      serviceId: "shopify",
    },
    {
      label: "Web Development",
      description: "Business websites, structure, performance and technical foundations.",
      serviceId: "web",
    },
    {
      label: "SaaS Development",
      description: "Multi-tenant products, billing, permissions and product tooling.",
      serviceId: "saas",
    },
    {
      label: "AI Development",
      description: "AI applications, chatbots, automation and related systems.",
      serviceId: "ai",
    },
    {
      label: "Ecommerce Development",
      description: "Broader ecommerce platforms and store builds beyond Shopify-only work.",
      serviceId: "ecommerce",
    },
    {
      label: "All services",
      description: "Design, Development, AI, Digital Marketing and Shopify overview.",
      href: "/services",
    },
  ],
  faqs: [
    {
      question: "Who will I communicate with?",
      answer:
        "You communicate with the Buildaze team members involved in delivery for your engagement. Project communication stays close to the people doing the work.",
    },
    {
      question: "Can you work on an existing website or product?",
      answer:
        "Yes. Many projects start with an existing site, product or Shopify store. We review the current setup and propose a scoped improvement rather than assuming a full rebuild.",
    },
    {
      question: "What information do you need to scope a project?",
      answer:
        "A clear description of the problem, who will use the solution, the current setup, constraints and any must-have outcomes. You do not need a finished technical specification to start the conversation.",
    },
    {
      question: "How are deliverables and changes agreed?",
      answer:
        "Deliverables, responsibilities and milestones are agreed in writing before development. Changes outside that scope are discussed and agreed rather than assumed.",
    },
    {
      question: "What happens at handover?",
      answer:
        "We hand over the agreed custom work and access included in the engagement. Third-party platforms such as Shopify, hosting or model providers keep their own terms and costs.",
    },
    {
      question: "Is ongoing support available?",
      answer:
        "Support or a follow-on phase can be scoped separately when you want it. It is not required to keep access to custom work already delivered.",
    },
  ],
  contact: {
    eyebrow: "Next step",
    headline: "Tell us what you need to build or improve.",
    body: "Share the problem, who it affects and your current setup. We review the enquiry and reply with next steps for a scoped conversation. Submitting the form means our delivery provider accepted it for delivery — not a booked kickoff or a guaranteed inbox time.",
    ctaLabel: "Discuss Your Project",
    ctaHref: "/contact",
    emailNote: "Prefer email?",
  },
} as const;

/** Featured case studies for the About evidence section — existing published work only. */
export const aboutFeaturedCaseIds = [
  "support-copilot",
  "catalog-intelligence",
  "shopify-performance",
] as const;

export function getAboutTeam() {
  return team;
}

export function getAboutFeaturedCases() {
  return aboutFeaturedCaseIds
    .map((id) => caseStudies.find((c) => c.id === id))
    .filter((c): c is (typeof caseStudies)[number] => Boolean(c));
}

export function getFeaturedTeamMember() {
  return team.find((m) => m.name === aboutPage.featuredMemberName) ?? team[0];
}
