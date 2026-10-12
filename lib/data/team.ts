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
    bio: "Leads custom web applications and Shopify storefront work, from themes to performance-minded ecommerce builds.",
    initials: "MI",
  },
  {
    name: "M Ahsan",
    role: "AI & LLM Lead",
    bio: "Leads custom AI agents and RAG systems grounded in client business information.",
    initials: "MA",
  },
  {
    name: "Saalik Khan",
    role: "Design Lead",
    bio: "Shapes product and interface design so engineering stays clear and usable.",
    initials: "SK",
  },
  {
    name: "M Hamza",
    role: "Lead & Social Media Manager",
    bio: "Keeps client communication and launches organised from kickoff through handover.",
    initials: "MH",
  },
];

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  context: string;
}

/**
 * Testimonials carried from the existing site.
 * Owner follow-up: verify attribution and metrics with clients before wider claims.
 */
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
