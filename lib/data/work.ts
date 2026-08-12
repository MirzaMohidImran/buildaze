export interface CaseOutcome {
  value: string;
  label: string;
}

export interface CaseStudyPage {
  metaTitle: string;
  metaDescription: string;
  headline: string;
  summary: string;
  /** Narrative sections */
  challengeDetail: string[];
  approach: string[];
  results: string[];
  stack: string[];
  timeline: string;
  relatedServiceIds: string[];
}

export interface CaseStudy {
  id: string;
  slug: string;
  index: string;
  name: string;
  industry: string;
  challenge: string;
  solution: string;
  outcome: CaseOutcome;
  deliverables: string[];
  /** Visual theme for the abstract product canvas. */
  visual: "support" | "risk" | "clinical" | "catalog" | "performance";
  page: CaseStudyPage;
}

/** Actual Buildaze case studies from the existing site, with verified outcomes. */
export const caseStudies: CaseStudy[] = [
  {
    id: "support-copilot",
    slug: "support-copilot",
    index: "01",
    name: "Support Copilot for SaaS",
    industry: "SaaS",
    challenge:
      "A support team drowning in repeat tickets, with account context scattered across tools.",
    solution:
      "An LLM agent that drafts replies and pulls live account context into every conversation — grounded in the company's own data via RAG.",
    outcome: { value: "−38%", label: "first-response time" },
    deliverables: ["AI strategy", "AI UX flows", "LLM agent", "RAG"],
    visual: "support",
    page: {
      metaTitle: "Support Copilot for SaaS — Case Study",
      metaDescription:
        "How Buildaze shipped a support copilot with RAG and live account context — cutting first-response time by 38%.",
      headline: "Support that answers with context, not guesswork.",
      summary:
        "Draft replies and live account context in every conversation — a production copilot that cut first-response time by 38%.",
      challengeDetail: [
        "The support team was buried in repeat tickets. Agents spent more time hunting for account context across helpdesk, CRM and billing tools than writing useful replies.",
        "Previous experiments with chatbots collapsed under edge cases — no grounding in real customer data, no audit trail, and no way to measure whether answers were actually correct.",
      ],
      approach: [
        "We mapped the highest-volume ticket types and defined what a “correct” reply meant for each — with citations back to source systems.",
        "An LLM agent drafts replies while a RAG layer pulls live account context into the conversation. Agents review, edit and send — with full visibility into what the model used.",
        "AI UX flows were designed so the copilot feels like a senior teammate in the inbox, not a black-box bot bolted onto the side.",
      ],
      results: [
        "First-response time dropped 38% after launch.",
        "Agents stopped context-switching across tools for the majority of routine tickets.",
        "The team left with the full repo, eval hooks and deployment access — no platform lock-in.",
      ],
      stack: ["OpenAI", "LangChain", "Pinecone", "Next.js", "Helpdesk API"],
      timeline: "7 weeks",
      relatedServiceIds: ["ai", "saas"],
    },
  },
  {
    id: "underwriting-copilot",
    slug: "underwriting-risk-copilot",
    index: "02",
    name: "Underwriting Risk Copilot",
    industry: "Fintech",
    challenge:
      "Underwriters spending hours manually reviewing and summarizing claims before decisions.",
    solution:
      "A triage assistant that summarizes claims and surfaces risk signals, built with prompt and UI patterns underwriters actually adopt.",
    outcome: { value: "−42%", label: "manual review time" },
    deliverables: ["Use-case mapping", "Prompt & UI patterns", "Triage assistant"],
    visual: "risk",
    page: {
      metaTitle: "Underwriting Risk Copilot — Case Study",
      metaDescription:
        "How Buildaze built a claims triage assistant for fintech underwriters — cutting manual review time by 42%.",
      headline: "Claims triage that underwriters actually trust.",
      summary:
        "A triage assistant that summarizes claims and surfaces risk signals — cutting manual review time by 42%.",
      challengeDetail: [
        "Underwriters were spending hours summarizing claims before they could make a decision. Critical signals were buried in long documents and inconsistent notes.",
        "Any AI tool had to earn trust: wrong summaries in underwriting aren’t a UX problem — they’re a risk problem.",
      ],
      approach: [
        "We started with use-case mapping alongside underwriters — which claim types, which signals matter, and where a human must stay in the loop.",
        "Prompt and UI patterns were designed for adoption: clear summaries, visible risk flags, and easy paths to the source evidence.",
        "The triage assistant ships as a working layer in their workflow — not a demo chat window.",
      ],
      results: [
        "Manual review time dropped 42%.",
        "Underwriters adopted the tool because the interface matched how they already decide — not because it was novel.",
        "Full code ownership and documentation at handoff.",
      ],
      stack: ["Anthropic Claude", "LangChain", "Postgres", "Next.js"],
      timeline: "8 weeks",
      relatedServiceIds: ["ai", "saas"],
    },
  },
  {
    id: "clinical-summarizer",
    slug: "clinical-note-summarizer",
    index: "03",
    name: "Clinical Note Summarizer",
    industry: "Healthcare",
    challenge:
      "Front-desk staff fielding constant pre-visit questions that pulled them away from patients.",
    solution:
      "A clinic-lobby assistant answering pre-visit questions on top of PHI-safe retrieval and HIPAA-aligned workflows.",
    outcome: { value: "−28%", label: "front-desk calls" },
    deliverables: ["PHI-safe RAG", "HIPAA-aligned workflows", "Lobby assistant"],
    visual: "clinical",
    page: {
      metaTitle: "Clinical Note Summarizer — Case Study",
      metaDescription:
        "How Buildaze shipped a PHI-safe clinic-lobby assistant — reducing front-desk calls by 28%.",
      headline: "Pre-visit answers without pulling staff off the floor.",
      summary:
        "A clinic-lobby assistant on PHI-safe retrieval — decreasing front-desk calls by 28%.",
      challengeDetail: [
        "Front-desk staff were fielding the same pre-visit questions all day — hours, parking, prep instructions — while patients waited in person.",
        "Healthcare constraints meant the system had to be PHI-safe and HIPAA-aligned from architecture, not as an afterthought.",
      ],
      approach: [
        "We designed PHI-safe RAG over approved clinic content, with clear boundaries on what the assistant can and cannot answer.",
        "HIPAA-aligned workflows covered access control, logging and escalation to a human when the question left the approved scope.",
        "The lobby experience was built for real patients — short answers, clear next steps, no medical advice theatre.",
      ],
      results: [
        "Front-desk calls dropped 28%.",
        "Staff time returned to in-person patients.",
        "Security and ownership requirements were met at handoff — repo, docs and deployment access included.",
      ],
      stack: ["OpenAI", "Supabase Vector", "Next.js", "RBAC"],
      timeline: "6 weeks",
      relatedServiceIds: ["ai", "web"],
    },
  },
  {
    id: "catalog-intelligence",
    slug: "catalog-intelligence-engine",
    index: "04",
    name: "Catalog Intelligence Engine",
    industry: "Ecommerce / Retail",
    challenge:
      "Shoppers couldn't find products because search didn't understand attributes or intent.",
    solution:
      "A shopping copilot that understands product attributes, built on cleaned catalog data and embeddings.",
    outcome: { value: "+12%", label: "add-to-cart rate" },
    deliverables: ["Data cleaning & embeddings", "Shopping copilot", "Attribute search"],
    visual: "catalog",
    page: {
      metaTitle: "Catalog Intelligence Engine — Case Study",
      metaDescription:
        "How Buildaze launched a shopping copilot that understands product attributes — raising add-to-cart by 12%.",
      headline: "Search that understands products, not just keywords.",
      summary:
        "A shopping copilot on cleaned catalog embeddings — raising add-to-cart by 12%.",
      challengeDetail: [
        "Shoppers couldn’t find products because search didn’t understand attributes or intent. Catalog data was inconsistent — missing fields, duplicate listings, messy naming.",
        "Merchandising wanted better discovery without a multi-year PIM rewrite.",
      ],
      approach: [
        "We cleaned and embedded the catalog so attributes like size, material and use-case became searchable signals — not buried text.",
        "A shopping copilot sits on top of that retrieval layer, helping shoppers describe what they want in natural language.",
        "Attribute search and recommendations were wired into the storefront experience the brand already operated.",
      ],
      results: [
        "Add-to-cart rate rose 12% after launch.",
        "Catalog quality improved enough that search and filters became trustworthy again.",
        "The brand owns the pipeline, embeddings workflow and storefront integration end to end.",
      ],
      stack: ["OpenAI", "Pinecone", "Shopify", "Next.js"],
      timeline: "7 weeks",
      relatedServiceIds: ["ecommerce", "ai", "shopify"],
    },
  },
  {
    id: "shopify-performance",
    slug: "shopify-performance-optimization",
    index: "05",
    name: "Shopify Performance Optimization",
    industry: "Ecommerce / Shopify",
    challenge:
      "A Shopify storefront was slow enough that performance itself became a conversion and trust risk.",
    solution:
      "Theme architecture cleanup, asset and script optimization, and front-end delivery improvements without stripping the brand experience.",
    outcome: { value: "28 → 91", label: "performance score" },
    deliverables: [
      "Theme performance audit",
      "Asset & script optimization",
      "Mobile experience improvements",
    ],
    visual: "performance",
    page: {
      metaTitle: "Shopify Performance Optimization — Case Study | Buildaze",
      metaDescription:
        "How Buildaze improved a Shopify storefront performance score from 28 to 91 through theme cleanup, asset optimization, and conversion-focused front-end work.",
      headline: "A Shopify storefront that stopped feeling slow.",
      summary:
        "Buildaze optimized Shopify theme code, assets, and front-end delivery — moving a verified performance score from 28 to 91.",
      challengeDetail: [
        "The storefront looked presentable but felt heavy: theme debt, scripts, apps, and media were competing with the shopping experience.",
        "Performance had become a business problem — not only a Lighthouse score — because slow product and collection pages undermine conversion confidence on mobile.",
      ],
      approach: [
        "We audited theme architecture, JavaScript weight, app impact, image delivery, and critical rendering paths before recommending changes.",
        "Optimization focused on maintainable theme cleanup and front-end delivery — keeping the brand experience intact rather than gutting design for synthetic scores.",
        "Mobile shopping paths were reviewed alongside performance so speed gains would support conversion clarity, not just lab metrics.",
      ],
      results: [
        "Verified performance score improved from 28 to 91.",
        "Storefront architecture became easier to maintain for ongoing Shopify development.",
        "The engagement stayed scoped to performance and experience — no invented revenue claims beyond the verified score.",
      ],
      stack: ["Shopify", "Liquid", "Theme architecture", "Core Web Vitals"],
      timeline: "Scoped performance engagement",
      relatedServiceIds: ["shopify", "ecommerce"],
    },
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}

export function getCaseStudyById(id: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.id === id);
}

export function getNextCaseStudy(currentId: string): CaseStudy {
  const index = caseStudies.findIndex((c) => c.id === currentId);
  return caseStudies[(index + 1) % caseStudies.length];
}

export const caseStudySlugs = caseStudies.map((c) => c.slug);
