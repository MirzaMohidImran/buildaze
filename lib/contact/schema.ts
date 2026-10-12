export const CONTACT_SERVICES = [
  "Design",
  "Development",
  "Artificial Intelligence",
  "Digital Marketing",
  "Shopify",
  "Not sure yet",
  "Something else",
] as const;

export type ContactService = (typeof CONTACT_SERVICES)[number];

/**
 * Dedicated /contact page service choices — maps onto CONTACT_SERVICES
 * (and Development capabilities) on submit.
 */
export const CONTACT_PAGE_SERVICES = [
  "Shopify",
  "Development",
  "Web Development",
  "SaaS Development",
  "Ecommerce Development",
  "AI Development",
  "Design",
  "Digital Marketing",
  "Not sure yet",
  "Something else",
] as const;

export type ContactPageService = (typeof CONTACT_PAGE_SERVICES)[number];

/** Development overview enquiry chips — mapped as capability under Development. */
export const DEVELOPMENT_CONTACT_SERVICES = [
  "Web Development",
  "App Development",
  "Ecommerce Development",
  "Software Development",
  "Dashboards",
  "Web Applications",
  "Management Systems",
  "Not Sure Yet",
] as const;

export type DevelopmentContactService =
  (typeof DEVELOPMENT_CONTACT_SERVICES)[number];

/** Digital Marketing hub / leaf enquiry chips — capability under Digital Marketing. */
export const MARKETING_CONTACT_SERVICES = [
  "Search Engine Optimization",
  "Meta Ads",
  "Google Ads",
  "Social Media Marketing",
  "Web Analytics & Data Tracking",
  "Ecommerce Growth Marketing",
  "Not Sure Yet",
] as const;

export type MarketingContactService =
  (typeof MARKETING_CONTACT_SERVICES)[number];

/** AI hub / leaf enquiry chips — capability under Artificial Intelligence. */
export const AI_CONTACT_SERVICES = [
  "AI Applications",
  "AI Chatbots",
  "AI Voice Agents",
  "Custom AI Solutions",
  "Business Automation",
  "Not Sure Yet",
] as const;

export type AiContactService = (typeof AI_CONTACT_SERVICES)[number];

/** Design hub / leaf enquiry chips — capability under Design. */
export const DESIGN_CONTACT_SERVICES = [
  "Graphic Design",
  "Illustration",
  "App Design",
  "UI/UX Design",
  "Branding",
  "Not Sure Yet",
] as const;

export type DesignContactService = (typeof DESIGN_CONTACT_SERVICES)[number];

export const CONTACT_BUDGETS = [
  "Under $10k",
  "$10k – $25k",
  "$25k – $50k",
  "$50k+",
  "Not sure yet",
] as const;

export const CONTACT_TIMELINES = [
  "As soon as possible",
  "Within 1–3 months",
  "Still exploring",
  "Flexible",
] as const;

export const FIELD_LIMITS = {
  name: 120,
  email: 254,
  company: 200,
  details: 4000,
  service: 80,
  capability: 80,
  budget: 40,
  timeline: 60,
  source: 80,
  honeypot: 200,
  idempotencyKey: 80,
} as const;

export interface ContactPayload {
  name: string;
  email: string;
  company?: string;
  details: string;
  service?: string;
  /** Optional capability context (e.g. Voice Agent under Artificial Intelligence). */
  capability?: string;
  budget?: string;
  timeline?: string;
  /** Optional form origin label for the internal notification. */
  source?: string;
  /** Honeypot — must be empty. */
  website?: string;
}

export type ContactValidationResult =
  | { ok: true; data: Required<Pick<ContactPayload, "name" | "email" | "details">> & ContactPayload }
  | { ok: false; errors: Record<string, string> };

function trim(value: unknown, max: number): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}

export function validateContactPayload(input: unknown): ContactValidationResult {
  if (!input || typeof input !== "object") {
    return { ok: false, errors: { form: "Invalid request." } };
  }

  const body = input as Record<string, unknown>;
  const name = trim(body.name, FIELD_LIMITS.name);
  const email = trim(body.email, FIELD_LIMITS.email);
  const company = trim(body.company, FIELD_LIMITS.company);
  const details = trim(body.details, FIELD_LIMITS.details);
  const service = trim(body.service, FIELD_LIMITS.service);
  const capability = trim(body.capability, FIELD_LIMITS.capability);
  const budget = trim(body.budget, FIELD_LIMITS.budget);
  const timeline = trim(body.timeline, FIELD_LIMITS.timeline);
  const source = trim(body.source, FIELD_LIMITS.source);
  const website = trim(body.website, FIELD_LIMITS.honeypot);

  const errors: Record<string, string> = {};

  if (name.length < 2) errors.name = "Please tell us your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Please enter a valid work email.";
  }
  if (details.length < 10) {
    errors.details = "A sentence or two helps us respond usefully.";
  }
  if (service && !(CONTACT_SERVICES as readonly string[]).includes(service)) {
    // Allow specialist chips and /contact page labels as free-text project types.
    const isSpecialistChip =
      (DEVELOPMENT_CONTACT_SERVICES as readonly string[]).includes(service) ||
      (MARKETING_CONTACT_SERVICES as readonly string[]).includes(service) ||
      (AI_CONTACT_SERVICES as readonly string[]).includes(service) ||
      (DESIGN_CONTACT_SERVICES as readonly string[]).includes(service) ||
      (CONTACT_PAGE_SERVICES as readonly string[]).includes(service);
    if (!isSpecialistChip && service.length > FIELD_LIMITS.service) {
      errors.service = "Invalid service selection.";
    }
  }
  if (budget && !(CONTACT_BUDGETS as readonly string[]).includes(budget)) {
    errors.budget = "Invalid budget selection.";
  }
  if (timeline && !(CONTACT_TIMELINES as readonly string[]).includes(timeline)) {
    errors.timeline = "Invalid timeline selection.";
  }

  if (Object.keys(errors).length) {
    return { ok: false, errors };
  }

  return {
    ok: true,
    data: {
      name,
      email,
      details,
      company: company || undefined,
      service: service || undefined,
      capability: capability || undefined,
      budget: budget || undefined,
      timeline: timeline || undefined,
      source: source || undefined,
      website: website || undefined,
    },
  };
}

/** Map legacy bookmarks and free-text labels onto the five primary categories. */
export function resolveContactService(value: string): string {
  if (!value) return "";
  if ((CONTACT_SERVICES as readonly string[]).includes(value)) return value;

  const normalized = value.trim().toLowerCase();

  if (/not sure|something else/i.test(value)) {
    if (/something else/i.test(value)) return "Something else";
    return "Not sure yet";
  }
  if (
    (MARKETING_CONTACT_SERVICES as readonly string[]).includes(value) ||
    /digital marketing|marketing|seo|meta ads|google ads|social media|analytics|ecommerce growth/i.test(
      value,
    )
  ) {
    return "Digital Marketing";
  }
  if (
    (DESIGN_CONTACT_SERVICES as readonly string[]).includes(value) ||
    (/design|branding|illustration|ui\/?ux|graphic|app design|brand identity/i.test(
      value,
    ) &&
      !/web design|web development/i.test(value))
  ) {
    return "Design";
  }
  if (/shopify/i.test(value)) return "Shopify";
  if (
    (AI_CONTACT_SERVICES as readonly string[]).includes(value) ||
    /voice|artificial intelligence|\bai\b|llm|chatbot|rag|copilot|automation/i.test(
      value,
    )
  ) {
    return "Artificial Intelligence";
  }
  if (
    /web development|saas|ecommerce|e-commerce|development|software|dashboard|portal/i.test(
      value,
    ) ||
    normalized === "web" ||
    normalized === "saas" ||
    normalized === "ecommerce"
  ) {
    return "Development";
  }

  const match = CONTACT_SERVICES.find(
    (t) => value === t || value.startsWith(t) || t.startsWith(value.split(" ")[0] ?? ""),
  );
  if (match) return match;

  return "";
}

/**
 * Resolve `?service=` for the /contact page chips.
 * Unknown values fall back to empty so the visitor can choose.
 */
export function resolveContactPageService(value: string): string {
  if (!value) return "";
  const trimmed = value.trim();
  const exact = CONTACT_PAGE_SERVICES.find(
    (o) => o.toLowerCase() === trimmed.toLowerCase(),
  );
  if (exact) return exact;

  const slug = trimmed.toLowerCase().replace(/[\s_]+/g, "-");
  const slugMap: Record<string, ContactPageService> = {
    shopify: "Shopify",
    "shopify-growth-agency": "Shopify",
    web: "Web Development",
    "web-development": "Web Development",
    saas: "SaaS Development",
    "saas-development": "SaaS Development",
    development: "Development",
    ecommerce: "Ecommerce Development",
    "e-commerce": "Ecommerce Development",
    "ecommerce-development": "Ecommerce Development",
    ai: "AI Development",
    "ai-development": "AI Development",
    "artificial-intelligence": "AI Development",
    design: "Design",
    "digital-marketing": "Digital Marketing",
    marketing: "Digital Marketing",
    "not-sure": "Not sure yet",
    "not-sure-yet": "Not sure yet",
    other: "Something else",
    "something-else": "Something else",
  };
  if (slugMap[slug]) return slugMap[slug];

  // Named specialist chips → nearest page label
  if ((DEVELOPMENT_CONTACT_SERVICES as readonly string[]).includes(trimmed)) {
    if (/saas/i.test(trimmed)) return "SaaS Development";
    if (/ecommerce|e-commerce/i.test(trimmed)) return "Ecommerce Development";
    if (/web/i.test(trimmed)) return "Web Development";
    if (/not sure/i.test(trimmed)) return "Development";
    return "Development";
  }
  if ((AI_CONTACT_SERVICES as readonly string[]).includes(trimmed)) {
    return "AI Development";
  }
  if ((DESIGN_CONTACT_SERVICES as readonly string[]).includes(trimmed)) {
    return "Design";
  }
  if ((MARKETING_CONTACT_SERVICES as readonly string[]).includes(trimmed)) {
    return "Digital Marketing";
  }

  const primary = resolveContactService(trimmed);
  if (primary === "Shopify") return "Shopify";
  if (primary === "Design") return "Design";
  if (primary === "Digital Marketing") return "Digital Marketing";
  if (primary === "Artificial Intelligence") return "AI Development";
  if (primary === "Development") return "Development";
  if (primary === "Not sure yet") return "Not sure yet";
  if (primary === "Something else") return "Something else";
  return "";
}

/** Map a /contact page chip to API service + optional capability. */
export function mapContactPageServiceToPayload(pageService: string): {
  service?: string;
  capability?: string;
} {
  switch (pageService) {
    case "Development":
      return { service: "Development" };
    case "Web Development":
    case "SaaS Development":
    case "Ecommerce Development":
      return { service: "Development", capability: pageService };
    case "AI Development":
      return {
        service: "Artificial Intelligence",
        capability: "AI Development",
      };
    case "Shopify":
      return { service: "Shopify" };
    case "Design":
      return { service: "Design" };
    case "Digital Marketing":
      return { service: "Digital Marketing" };
    case "Not sure yet":
      return { service: "Not sure yet" };
    case "Something else":
      return { service: "Something else" };
    default:
      return {};
  }
}

export function buildMailtoDraft(payload: {
  name: string;
  email: string;
  company?: string;
  details: string;
  service?: string;
  capability?: string;
  budget?: string;
  timeline?: string;
  to: string;
  subjectPrefix?: string;
}): string {
  const subject = `${payload.subjectPrefix ?? "Project enquiry"} — ${payload.name}${
    payload.company ? ` (${payload.company})` : ""
  }`;
  const body = [
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    payload.company && `Company / website: ${payload.company}`,
    payload.service && `Service: ${payload.service}`,
    payload.capability && `Capability: ${payload.capability}`,
    payload.budget && `Budget: ${payload.budget}`,
    payload.timeline && `Timeline: ${payload.timeline}`,
    "",
    payload.details,
  ]
    .filter(Boolean)
    .join("\n");

  return `mailto:${payload.to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
