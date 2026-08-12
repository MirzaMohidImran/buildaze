export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  initials: string;
}

/** The actual Buildaze team from the existing site. */
export const team: TeamMember[] = [
  {
    name: "Mohid Imran",
    role: "Senior Web & Ecommerce Developer",
    bio: "Builds custom web applications and Shopify storefronts — including Liquid theme development, headless commerce on Next.js, and performance-minded ecommerce experiences.",
    initials: "MI",
  },
  {
    name: "M Ahsan",
    role: "AI & LLM Lead",
    bio: "Builds custom AI agents and RAG systems on OpenAI, Claude, LangChain and vector databases.",
    initials: "MA",
  },
  {
    name: "Saalik Khan",
    role: "Design Lead",
    bio: "The best builds are the ones where the engineering is invisible and the product just works.",
    initials: "SK",
  },
  {
    name: "M Hamza",
    role: "Lead & Social Media Manager",
    bio: "Keeps launches sharp and client communication clear, from kickoff to handoff.",
    initials: "MH",
  },
];

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  context: string;
}

/** Testimonials from the existing Buildaze site. */
export const testimonials: Testimonial[] = [
  {
    quote:
      "We had a working product in 6 weeks. Weekly demos kept us aligned the whole way. Buildaze handed off a clean codebase with full docs on day one.",
    name: "Elena Ruiz",
    role: "VP Product, Cantos SaaS",
    context: "SaaS product build",
  },
  {
    quote:
      "We needed a custom LLM integration built fast. Buildaze scoped it in 3 days, shipped in 5 weeks, and we own every line. Zero lock-in.",
    name: "Marcus Tan",
    role: "CTO, VectorPay",
    context: "Custom LLM integration",
  },
  {
    quote:
      "Our Shopify store was outdated and slow. Buildaze rebuilt it headless in 7 weeks. Conversion rate went up 18% in the first month.",
    name: "David Kim",
    role: "Ecommerce Director, Northway",
    context: "Headless Shopify rebuild",
  },
];
