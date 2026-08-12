export interface StackCategory {
  id: string;
  name: string;
  technologies: string[];
  note: string;
}

/** Verified stack from the existing Buildaze site. */
export const stack: StackCategory[] = [
  {
    id: "frontend",
    name: "Frontend",
    technologies: ["Next.js", "React", "TypeScript"],
    note: "Fast, accessible, SEO-ready interfaces.",
  },
  {
    id: "backend",
    name: "Backend",
    technologies: ["Node.js", "Laravel", "Postgres"],
    note: "APIs and services built for production load.",
  },
  {
    id: "ai",
    name: "AI",
    technologies: ["OpenAI", "Anthropic Claude", "LangChain"],
    note: "Agents, RAG and LLM products with evals.",
  },
  {
    id: "data",
    name: "Data",
    technologies: ["Pinecone", "Supabase", "Supabase Vector"],
    note: "Retrieval your AI can cite and trust.",
  },
  {
    id: "commerce",
    name: "Commerce",
    technologies: ["Shopify", "WooCommerce", "Medusa", "Stripe"],
    note: "Checkout flows measured in revenue.",
  },
  {
    id: "infrastructure",
    name: "Infrastructure",
    technologies: ["CI/CD", "Monitoring", "Vercel"],
    note: "Deployed, observable and handed over to you.",
  },
];

export const industries = [
  {
    name: "SaaS",
    proof: "Support Copilot — first-response time down 38%.",
  },
  {
    name: "Fintech",
    proof: "Underwriting Risk Copilot — manual review time down 42%.",
  },
  {
    name: "Healthcare",
    proof: "Clinical Note Summarizer — front-desk calls down 28%.",
  },
  {
    name: "Ecommerce & Retail",
    proof: "Catalog Intelligence Engine — add-to-cart up 12%.",
  },
] as const;
