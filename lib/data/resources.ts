/**
 * Buildaze Resources — indexable educational articles.
 * Canonical copy for Prompt 2 article 01 lives here; docs/seo/blog-01-* mirrors it.
 */

export type ResourceInline =
  | { type: "text"; value: string }
  | { type: "link"; href: string; label: string };

export interface ResourceParagraph {
  type: "p";
  parts: ResourceInline[];
}

export interface ResourceList {
  type: "ul";
  items: string[];
}

export interface ResourceTable {
  type: "table";
  caption?: string;
  headers: string[];
  rows: string[][];
  footnote?: string;
}

export interface ResourceCallout {
  type: "callout";
  title: string;
  parts: ResourceInline[];
}

export type ResourceBlock =
  | ResourceParagraph
  | ResourceList
  | ResourceTable
  | ResourceCallout;

export interface ResourceSection {
  id: string;
  heading: string;
  blocks: ResourceBlock[];
}

export interface ResourceFaq {
  question: string;
  answer: string;
}

export interface ResourceCitation {
  label: string;
  url: string;
  checked: string;
}

export interface ResourceArticle {
  id: string;
  slug: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  excerpt: string;
  publishedAt: string;
  updatedAt: string;
  authorName: string;
  cluster: string;
  relatedServiceIds: string[];
  sections: ResourceSection[];
  faqs: ResourceFaq[];
  citations: ResourceCitation[];
  cta: {
    heading: string;
    body: string;
    label: string;
    href: string;
  };
}

function t(value: string): ResourceInline {
  return { type: "text", value };
}

function a(href: string, label: string): ResourceInline {
  return { type: "link", href, label };
}

function p(...parts: ResourceInline[]): ResourceParagraph {
  return { type: "p", parts };
}

/** First Buildaze resource article — Shopify traffic without purchases. */
export const resourceArticles: ResourceArticle[] = [
  {
    id: "shopify-traffic-not-converting",
    slug: "shopify-traffic-not-converting",
    metaTitle: "Shopify Traffic but No Sales: Find the Drop-Off | Buildaze",
    metaDescription:
      "Diagnose why Shopify sessions do not become orders. Separate traffic quality, product pages, cart, checkout and payment before redesigning the store.",
    h1: "Shopify traffic but no sales: find where the journey fails",
    excerpt:
      "A single conversion rate hides the real problem. Use session-based funnel stages — and human traffic filters — to decide whether you need better traffic, clearer product pages, cart fixes, checkout work or recovery.",
    publishedAt: "2026-10-28",
    updatedAt: "2026-10-28",
    authorName: "Buildaze",
    cluster: "Shopify CRO",
    relatedServiceIds: [
      "shopify-cro",
      "shopify-checkout",
      "shopify-performance",
      "dm-email-sms",
      "dm-analytics",
    ],
    sections: [
      {
        id: "short-answer",
        heading: "The short answer",
        blocks: [
          p(
            t(
              "If your Shopify store gets sessions but few orders, treat conversion as a stage problem — not a single “site is broken” verdict. Confirm the traffic is human and relevant, then find which step loses the most worthwhile sessions: product engagement, add to cart, reaching checkout, or completing payment. Fix that stage before you rebuild the theme, stack apps or cut prices.",
            ),
          ),
          p(
            t(
              "Shopify’s Conversion rate breakdown report is built for this view. It tracks sessions, sessions with cart additions, sessions that reached checkout, and sessions that completed checkout. Rates at each step are calculated against total sessions unless you use a closed-funnel view for sequential drop-off.",
            ),
          ),
        ],
      },
      {
        id: "one-rate-hides",
        heading: "Why one conversion rate hides the leak",
        blocks: [
          p(
            t(
              "Overall online store conversion rate answers “what share of sessions bought?” It does not tell you whether paid social is sending the wrong audience, whether product pages fail to create confidence, or whether payment errors kill checkout. Those need different owners and different work.",
            ),
          ),
          p(
            t(
              "Use consistent session (or shopper) cohorts and a documented date range. Do not mix raw event counts with unique-session rates. A spike in add-to-cart events can still show a weak add-to-cart rate if sessions rose faster than carts.",
            ),
          ),
          {
            type: "callout",
            title: "Measurement change to watch",
            parts: [
              t(
                "Shopify documents a session measurement update rolling out 21–23 September 2026. After it reaches a store, sessions, conversion rate and other session-based metrics can look different without a real change in shopper behaviour. When you compare periods that straddle the rollout, treat the shift as a measurement change first.",
              ),
            ],
          },
        ],
      },
      {
        id: "prove-traffic",
        heading: "Step 0: prove the traffic is human and relevant",
        blocks: [
          p(
            t(
              "Before you redesign anything, validate the denominator. Shopify notes that bot sessions can make conversion rates look lower than expected, and Analytics supports filtering by human or bot sessions. Diagnose conversion on human traffic when you are trying to understand real shoppers — especially after a sudden traffic spike.",
            ),
          ),
          p(t("Then segment human sessions before blaming the theme:")),
          {
            type: "ul",
            items: [
              "Source / channel (organic, paid search, paid social, email, direct, referral)",
              "Device (mobile vs desktop)",
              "Geography you can fulfil vs markets with weak delivery economics",
              "Landing page or product",
              "New vs returning visitors",
            ],
          },
          p(
            t(
              "If one campaign drives most sessions but almost no product engagement, you may have a targeting or message-match problem — not a storewide conversion problem. Compare the promise in the ad or email with the landing page, price and market before touching the storefront.",
            ),
          ),
        ],
      },
      {
        id: "stage-map",
        heading: "Map the journey in stages that match the data",
        blocks: [
          p(
            t(
              "Shopify’s default funnel visualisation moves through all sessions → sessions with cart additions → sessions that reached checkout → sessions that completed checkout. Open funnel views include people who enter mid-path; closed funnel views require sequential completion. Know which view you are reading before you act.",
            ),
          ),
          {
            type: "table",
            caption: "Diagnostic map (session-based)",
            headers: [
              "Stage question",
              "What usually fails",
              "Sensible next owner",
            ],
            rows: [
              [
                "Sessions → product engagement",
                "Wrong intent, weak landing match, slow first paint, hard navigation",
                "Traffic/offer review; storefront clarity; performance if pages feel slow",
              ],
              [
                "Product view → add to cart",
                "Unclear benefits, variants, sizing, delivery, trust or stock",
                "Product page and merchandising work; CRO diagnosis",
              ],
              [
                "Cart → checkout start",
                "Surprise totals, confusing cart, weak CTA, mobile friction",
                "Cart clarity; checkout optimisation",
              ],
              [
                "Checkout → paid order",
                "Payment errors, shipping rates, address issues, plan limits",
                "Checkout / payment diagnosis (Plus-aware if extending checkout UI)",
              ],
              [
                "Known abandoners → return",
                "No eligible recovery, missing consent, no suppression",
                "Email & SMS lifecycle (not every anonymous cart)",
              ],
            ],
            footnote:
              "Owners below are Buildaze service routes for readers who want scoped help — the diagnosis still comes first.",
          },
          p(
            t("For a conversion programme that starts with funnel diagnosis, see "),
            a(
              "/shopify-growth-agency/conversion-rate-optimization",
              "Shopify CRO",
            ),
            t(". For cart-to-checkout and payment-stage work, see "),
            a(
              "/shopify-growth-agency/checkout-optimization",
              "Checkout Optimization",
            ),
            t(". For speed bottlenecks, see "),
            a(
              "/shopify-growth-agency/performance",
              "Shopify Performance",
            ),
            t(". For eligible recovery and lifecycle flows, see "),
            a(
              "/services/digital-marketing/email-sms-marketing",
              "Email & SMS Marketing",
            ),
            t(". For GA4 and Shopify reporting reconciliation, see "),
            a(
              "/services/digital-marketing/web-analytics-data-tracking",
              "Web Analytics & Data Tracking",
            ),
            t("."),
          ),
        ],
      },
      {
        id: "stage-detail",
        heading: "What to inspect at each stage",
        blocks: [
          p(
            t(
              "Sessions without product engagement. Check landing message match, collection navigation, search with zero results, and whether mobile pages feel usable. A performance problem can look like weak interest if the main content is late — but lab scores are not the same as field Core Web Vitals or revenue. A documented lab example on a Buildaze project moved Lighthouse Performance from 28 to 91; that remains a lab metric, not a conversion guarantee. See the ",
            ),
            a(
              "/work/shopify-performance-optimization",
              "Shopify performance case study",
            ),
            t(" for published caveats."),
          ),
          p(
            t(
              "Product views without add to cart. Review offer clarity, imagery, variant selection, sizing guidance, stock and delivery/return visibility, and whether proof is authentic. Do not assume a theme rebuild is required until the product information problem is ruled in or out.",
            ),
          ),
          p(
            t(
              "Add to cart without checkout start. Unexpected costs, unclear totals, distraction and weak mobile cart behaviour are common. Surface shipping expectations earlier when the first meaningful cost appears only at checkout.",
            ),
          ),
          p(
            t(
              "Checkout start without payment. Inspect payment errors, address and shipping rate issues, market eligibility and supported checkout settings. Checkout UI extensions on the information, shipping and payment steps are available on Shopify Plus — confirm plan and targets before promising custom checkout UI on every plan.",
            ),
          ),
          p(
            t(
              "Known shoppers who leave. Abandoned checkout recovery needs an identifiable, eligible recipient plus consent and suppression after purchase. Anonymous cart visitors cannot all be emailed. Operational recovery messages and marketing campaigns are different jobs.",
            ),
          ),
        ],
      },
      {
        id: "illustrative",
        heading: "Illustrative funnel (not Buildaze client data)",
        blocks: [
          p(
            t(
              "Illustration only: one matched reporting cohort has 10,000 human sessions, 500 sessions with add to cart, 300 with checkout started and 90 with a paid purchase. Add-to-cart rate is 5%; cart-to-checkout progression among cart sessions is 60%; checkout completion among checkout starts is 30%; session purchase conversion is 0.9%.",
            ),
          ),
          p(
            t(
              "If checkout completion moved from 30% to 40% while the same 300 checkout starts were held constant, arithmetic would produce 120 orders rather than 90. That is a scenario, not a forecast. Real tests must account for seasonality, traffic mix, refunds and measurement changes.",
            ),
          ),
        ],
      },
      {
        id: "when-not-ab",
        heading: "When not to run an A/B test yet",
        blocks: [
          p(
            t(
              "A/B testing needs enough traffic, a clear hypothesis, a minimum detectable effect and a stopping rule. If volume cannot support a fair test in a sensible window, prefer qualitative research, technical fixes and clearly labelled observational comparisons. Do not describe a before-and-after change as a causal A/B win when it is not.",
            ),
          ),
          p(
            t(
              "Something plainly broken — a dead size guide, a payment method failing in a key market — should be fixed, not parked behind an underpowered experiment.",
            ),
          ),
        ],
      },
      {
        id: "checklist",
        heading: "Practical checklist before you rebuild",
        blocks: [
          {
            type: "ul",
            items: [
              "Filter to human sessions for the diagnosis window",
              "Note open vs closed funnel definitions in Shopify Analytics",
              "Segment by source, device, market and landing page",
              "Name the first weak stage in absolute session terms, not only percentages",
              "Check tracking agreement between Shopify orders and your analytics events",
              "Decide the owner: traffic, PDP, cart, checkout, performance or recovery",
              "Only then scope redesign, apps, discounts or experiments",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Is a low conversion rate always a website problem?",
        answer:
          "No. Wrong traffic, weak offer fit, shipping economics, payment failures and broken tracking can all produce the same symptom. Stage diagnosis prevents fixing the wrong layer.",
      },
      {
        question: "Should I compare add-to-cart events with unique sessions?",
        answer:
          "Keep definitions consistent. Prefer sessions with cart additions over raw event totals when you are reading session conversion rates. Document the window and filters you used.",
      },
      {
        question: "Can I customise checkout on every Shopify plan?",
        answer:
          "Not unrestricted. Shopify documents that checkout UI extensions for the information, shipping and payment steps are available on Shopify Plus. Other plans rely on supported settings, apps and theme-side cart improvements.",
      },
      {
        question: "Can abandoned checkout email reach every cart?",
        answer:
          "No. Recovery needs an identifiable eligible recipient, consent rules and suppression after purchase. Anonymous visitors cannot all be emailed.",
      },
    ],
    citations: [
      {
        label: "Shopify Help — Behavior reports / Conversion rate breakdown",
        url: "https://help.shopify.com/en/manual/reports-and-analytics/shopify-reports/report-types/default-reports/behaviour-reports",
        checked: "2026-10-28",
      },
      {
        label: "Shopify Help — Acquisition reports (sessions, bot filter note)",
        url: "https://help.shopify.com/en/manual/reports-and-analytics/shopify-reports/report-types/default-reports/acquisition-reports",
        checked: "2026-10-28",
      },
      {
        label: "Shopify.dev — Checkout UI extensions (Plus for info/shipping/payment)",
        url: "https://shopify.dev/docs/api/checkout-ui-extensions",
        checked: "2026-10-28",
      },
      {
        label: "Shopify Blog — Traffic but no sales (platform education)",
        url: "https://www.shopify.com/blog/traffic-no-sales",
        checked: "2026-10-28",
      },
      {
        label: "Shopify Blog — Conversion funnel leaks",
        url: "https://www.shopify.com/blog/conversion-funnel-leaks",
        checked: "2026-10-28",
      },
    ],
    cta: {
      heading: "Need help naming the drop-off on your store?",
      body: "Share what you are seeing in Shopify Analytics — traffic source, device mix and where sessions stall. Buildaze can discuss a scoped conversion diagnosis without promising a fixed lift.",
      label: "Discuss your conversion problem",
      href: "/contact?service=shopify&capability=Shopify%20Conversion%20Rate%20Optimization&problem=Traffic%20without%20purchases",
    },
  },
];

export const resourceSlugs = resourceArticles.map((a) => a.slug);

export function getResourceBySlug(slug: string): ResourceArticle | undefined {
  return resourceArticles.find((a) => a.slug === slug);
}
