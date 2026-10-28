import { buildContactHref } from "../contact/paths";
import type { Service, ServicePageContent } from "./services";

const HUB = "/services/digital-marketing";

function leafEnquiry(_path: string, service: string, problem?: string) {
  return buildContactHref({
    service: "digital-marketing",
    capability: service,
    problem,
  });
}

function baseFields(
  partial: Omit<
    ServicePageContent,
    | "overviewTitle"
    | "overview"
    | "solutionsTitle"
    | "solutions"
    | "deliverables"
    | "included"
    | "stackTags"
    | "process"
    | "relatedWorkIds"
  > & {
    overviewTitle: string;
    overview: string[];
    solutionsTitle: string;
    solutions: string[];
    deliverables: string[];
    included: string[];
    stackTags: string[];
    process: ServicePageContent["process"];
  },
): ServicePageContent {
  return {
    ...partial,
    relatedWorkIds: [],
  };
}

const emailPath = `${HUB}/email-sms-marketing`;
const contentPath = `${HUB}/content-strategy`;

/**
 * Phase 5 Batch A — P1 Digital Marketing commercial pages (28 Oct 2026 research).
 */
export const digitalMarketingPriorityLeaves: Service[] = [
  {
    id: "dm-email-sms",
    slug: "email-sms-marketing",
    path: emailPath,
    role: "detail",
    index: "07",
    name: "Email & SMS Marketing",
    shortName: "Email & SMS",
    oneLiner:
      "Lifecycle email and SMS for ecommerce — welcome, recovery, post-purchase and win-back with consent built in.",
    description:
      "Email and SMS marketing for retention and eligible recovery: segmentation, flows, campaigns and deliverability — without promising you can message every anonymous visitor.",
    capabilities: [
      "Lifecycle flow design",
      "Eligible cart and checkout recovery",
      "Segmentation and campaigns",
      "Deliverability basics",
      "Consent and suppression",
    ],
    flow: ["Audit", "Design", "Build", "Measure"],
    cta: "Discuss Email & SMS",
    relatedServiceIds: [
      "digital-marketing",
      "dm-ecommerce-growth",
      "dm-analytics",
      "shopify-checkout",
      "shopify-cro",
      "shopify",
    ],
    page: baseFields({
      metaTitle: "Email & SMS Marketing for Ecommerce | Buildaze",
      metaDescription:
        "Welcome, recovery, post-purchase and win-back flows with consent, suppression and deliverability considered upfront.",
      eyebrow: "Lifecycle messaging",
      headline: "Email and SMS that bring eligible customers back.",
      subheadline:
        "Retention is not a discount blast. We design welcome, browse/cart/checkout recovery, post-purchase and win-back flows around consent, suppression after purchase and measurable repeat behaviour — especially for Shopify stores.",
      ctaLabel: "Discuss Email & SMS",
      secondaryCtaLabel: "Back to Digital Marketing",
      problems: {
        eyebrow: "Lifecycle starting points",
        headline: "When customers rarely return and recovery is guesswork",
        intro: [
          "Use this service when lifecycle messaging is missing, recovery is non-compliant or reporting cannot separate operational recovery from marketing campaigns.",
        ],
        problems: [
          {
            id: "no-flows",
            index: "01",
            name: "There is no welcome or post-purchase journey",
            title: "Core flows before more acquisition spend.",
            description:
              "Welcome, order confirmation support and post-purchase help often matter before scaling paid traffic.",
            enquiryHref: leafEnquiry(
              emailPath,
              "Email & SMS Marketing",
              "Missing welcome or post-purchase flows",
            ),
          },
          {
            id: "recovery",
            index: "02",
            name: "Abandoned checkouts are not followed up correctly",
            title: "Eligible recovery with purchase suppression.",
            description:
              "Recovery needs identifiable recipients and consent. We coordinate with Shopify Checkout Optimization for stage diagnosis.",
            enquiryHref: leafEnquiry(
              emailPath,
              "Email & SMS Marketing",
              "Abandoned checkout recovery",
            ),
          },
          {
            id: "repeat",
            index: "03",
            name: "One-time buyers rarely return",
            title: "Replenishment and win-back with margin guardrails.",
            description:
              "Segmentation and offers are designed around contribution — not attributed email revenue alone.",
            enquiryHref: leafEnquiry(
              emailPath,
              "Email & SMS Marketing",
              "Low repeat purchase",
            ),
          },
          {
            id: "deliverability",
            index: "04",
            name: "Messages hit spam or lists are unhealthy",
            title: "List hygiene and sending practices first.",
            description:
              "Deliverability work precedes creative volume. We do not promise inbox placement rates.",
            enquiryHref: leafEnquiry(
              emailPath,
              "Email & SMS Marketing",
              "Email deliverability issues",
            ),
          },
        ],
        closingTitle: "Need storefront conversion work too?",
        closingBody:
          "Product and journey CRO sits on Shopify Conversion Rate Optimization. Checkout-stage diagnosis sits on Shopify Checkout Optimization.",
        ctaLabel: "Discuss Email & SMS",
        ctaHref: leafEnquiry(emailPath, "Email & SMS Marketing"),
      },
      capabilities: {
        eyebrow: "Email & SMS scope",
        headline: "What a lifecycle engagement can include",
        intro: [
          "Platform choice (for example Klaviyo or native Shopify tools) is confirmed against your stack. SMS is included only where lawful and operationally ready.",
        ],
        capabilities: [
          {
            id: "audit",
            index: "01",
            name: "Lifecycle audit",
            title: "Flows, lists, consent and suppression review.",
            description:
              "Map what exists, what is missing and which messages risk contacting ineligible people.",
            items: [
              "Flow inventory",
              "Consent and preference centres",
              "Suppression after purchase",
              "List hygiene signals",
            ],
            cta: "Discuss a lifecycle audit",
            href: leafEnquiry(
              emailPath,
              "Email & SMS Marketing",
              "Lifecycle audit",
            ),
          },
          {
            id: "flows",
            index: "02",
            name: "Core flow design",
            title: "Welcome, recovery, post-purchase and win-back.",
            description:
              "Design message jobs, timing and branches — then build in the agreed platform.",
            items: [
              "Welcome series",
              "Browse / cart / checkout recovery",
              "Post-purchase and replenishment",
              "Win-back",
            ],
            cta: "Discuss flow design",
            href: leafEnquiry(
              emailPath,
              "Email & SMS Marketing",
              "Lifecycle flow design",
            ),
          },
          {
            id: "campaigns",
            index: "03",
            name: "Campaigns and segmentation",
            title: "Useful campaigns without exhausting the list.",
            description:
              "Segment by behaviour and eligibility. Campaign cadence is agreed — not assumed as unlimited sends.",
            items: [
              "Segment definitions",
              "Campaign briefs",
              "Creative and offer checks",
              "Send QA",
            ],
            cta: "Discuss campaigns",
            href: leafEnquiry(
              emailPath,
              "Email & SMS Marketing",
              "Email campaigns",
            ),
          },
          {
            id: "measure",
            index: "04",
            name: "Measurement and deliverability",
            title: "Report outcomes that matter to the store.",
            description:
              "Track incremental recovered purchases where measurable, opt-outs and complaints — not vanity open rates alone.",
            items: [
              "Revenue and cohort definitions",
              "Opt-out and complaint monitoring",
              "Deliverability checklist",
              "Handover documentation",
            ],
            cta: "Discuss measurement",
            href: leafEnquiry(
              emailPath,
              "Email & SMS Marketing",
              "Email measurement",
            ),
          },
        ],
        closingTitle: "Platform undecided?",
        closingBody:
          "We recommend tools against your catalogue size, team capacity and markets — not a default stack for every store.",
        ctaLabel: "Discuss Email & SMS",
        ctaHref: leafEnquiry(emailPath, "Email & SMS Marketing"),
      },
      overviewTitle: "What Email & SMS work covers",
      overview: [
        "Lifecycle marketing for ecommerce focuses on eligible recipients, useful message jobs and measurement that accounts for consent and suppression.",
        "Abandoned checkout recovery is coordinated with Shopify Checkout Optimization. We do not claim every anonymous cart visitor can be emailed.",
        "Creative production volume, SMS carrier registration and jurisdiction-specific legal advice are scoped explicitly when required — not assumed.",
      ],
      solutionsTitle: "Lifecycle outcomes we aim for",
      solutions: [
        "Clear core flows in the agreed platform",
        "Eligible recovery with purchase suppression",
        "Segmentation that matches how the store sells",
        "Campaign cadence the list can sustain",
        "Reporting definitions your team can reuse",
      ],
      deliverables: [
        "Lifecycle audit notes",
        "Flow map and build in agreed tools",
        "Campaign or segment plan in scope",
        "Measurement and suppression documentation",
      ],
      included: [
        "Discovery against current ESP/SMS setup",
        "Scoped design and implementation",
        "QA of critical flows before go-live",
        "Handover for ongoing operation",
      ],
      stackTags: [
        "Klaviyo (when used)",
        "Shopify Email",
        "SMS (when lawful)",
        "Segmentation",
        "Deliverability",
      ],
      process: [
        {
          index: "01",
          name: "Audit",
          duration: "Scoped",
          description: "Review lists, consent, flows and reporting gaps.",
        },
        {
          index: "02",
          name: "Design",
          duration: "Scoped",
          description: "Define message jobs, timing, segments and offers.",
        },
        {
          index: "03",
          name: "Build",
          duration: "Scoped",
          description: "Implement flows and campaigns in the agreed platform.",
        },
        {
          index: "04",
          name: "Measure",
          duration: "Scoped",
          description:
            "Monitor outcomes, opt-outs and deliverability; adjust with evidence.",
        },
      ],
      faqs: [
        {
          question: "Can you email every abandoned cart?",
          answer:
            "No. Recovery requires an identifiable, eligible recipient and respect for consent and suppression after purchase. Anonymous visitors cannot all be emailed.",
        },
        {
          question: "Do you only work with Klaviyo?",
          answer:
            "Klaviyo is common for Shopify brands, but the stack is confirmed against your store. Native Shopify tools or other platforms can be appropriate.",
        },
        {
          question: "Is SMS always included?",
          answer:
            "Only when markets, consent and operational readiness support it. SMS is never assumed as a free add-on.",
        },
        {
          question: "Do you guarantee revenue from email?",
          answer:
            "No. We design for eligible engagement and track contribution carefully. Attributed email revenue alone is not treated as the full business story.",
        },
      ],
      faqEyebrow: "Email & SMS FAQs",
      faqHeadline: "Consent, recovery and platforms",
      faqCtaLabel: "Discuss Email & SMS",
      faqCtaHref: leafEnquiry(emailPath, "Email & SMS Marketing"),
    }),
  },
  {
    id: "dm-content-strategy",
    slug: "content-strategy",
    path: contentPath,
    role: "detail",
    index: "08",
    name: "Content Strategy",
    shortName: "Content Strategy",
    oneLiner:
      "Intent research, briefs and original commercial copy that routes buyers to the right service page.",
    description:
      "Content strategy and service-page copywriting: keyword and intent research, briefs, original commercial pages and maintenance priorities — without ranking guarantees.",
    capabilities: [
      "Intent and keyword research",
      "Content briefs",
      "Commercial page copy",
      "Internal linking plans",
      "Content maintenance priorities",
    ],
    flow: ["Research", "Brief", "Write", "Maintain"],
    cta: "Discuss Content Strategy",
    relatedServiceIds: [
      "digital-marketing",
      "dm-seo",
      "shopify-seo",
      "dm-ecommerce-growth",
      "design",
    ],
    page: baseFields({
      metaTitle: "Content Strategy & Service Page Copy | Buildaze",
      metaDescription:
        "Intent research, briefs and original commercial pages that route buyers to the right Buildaze service owner.",
      eyebrow: "Commercial content",
      headline: "Content strategy that answers commercial questions.",
      subheadline:
        "Useful pages beat keyword-stuffed outlines. We research buyer intent, brief distinct page jobs and write original commercial copy that connects to a clear service owner — without promising rankings or inventing case metrics.",
      ctaLabel: "Discuss Content Strategy",
      secondaryCtaLabel: "Back to Digital Marketing",
      problems: {
        eyebrow: "Content starting points",
        headline: "When pages do not answer what buyers actually ask",
        intro: [
          "Use this engagement when service pages compete with each other, supporting articles chase news without a commercial route, or copy needs a research-backed rewrite.",
        ],
        problems: [
          {
            id: "overlap",
            index: "01",
            name: "Several pages chase the same intent",
            title: "One commercial owner per primary intent.",
            description:
              "We resolve overlap before writing more pages that fight each other in search.",
            enquiryHref: leafEnquiry(
              contentPath,
              "Content Strategy",
              "Overlapping service page intent",
            ),
          },
          {
            id: "thin",
            index: "02",
            name: "Service pages are thin or generic",
            title: "Buyer-problem copy with real deliverables and limits.",
            description:
              "Hero, scope, process, FAQs and CTAs are written from evidence — not competitor paraphrase.",
            enquiryHref: leafEnquiry(
              contentPath,
              "Content Strategy",
              "Thin service page copy",
            ),
          },
          {
            id: "blog-drift",
            index: "03",
            name: "Articles do not support enquiries",
            title: "Supporting topics with a natural internal-link route.",
            description:
              "Each article should resolve a buyer question and point to the correct commercial page.",
            enquiryHref: leafEnquiry(
              contentPath,
              "Content Strategy",
              "Blog without commercial routes",
            ),
          },
          {
            id: "refresh",
            index: "04",
            name: "Important pages are outdated",
            title: "Maintenance priorities from real search and sales feedback.",
            description:
              "Refresh when user need or evidence changes — not only to stamp a new date.",
            enquiryHref: leafEnquiry(
              contentPath,
              "Content Strategy",
              "Outdated commercial pages",
            ),
          },
        ],
        closingTitle: "Need technical SEO or Shopify catalogue SEO?",
        closingBody:
          "Technical and general SEO sits on Search Engine Optimization. Shopify product and collection SEO sits on Shopify SEO.",
        ctaLabel: "Discuss Content Strategy",
        ctaHref: leafEnquiry(contentPath, "Content Strategy"),
      },
      capabilities: {
        eyebrow: "Content scope",
        headline: "What a content strategy engagement can include",
        intro: [
          "Implementation on the live site can be included or handed to your team. Fixed monthly article quotas are not assumed.",
        ],
        capabilities: [
          {
            id: "research",
            index: "01",
            name: "Intent research",
            title: "Map queries to page jobs and buyer stages.",
            description:
              "Separate measured data from editorial seeds. Volumes are recorded only when a named tool provides them.",
            items: [
              "Commercial and problem queries",
              "Page ownership map",
              "Overlap risks",
              "Supporting topic ideas",
            ],
            cta: "Discuss intent research",
            href: leafEnquiry(contentPath, "Content Strategy", "Intent research"),
          },
          {
            id: "briefs",
            index: "02",
            name: "Briefs",
            title: "Page purpose, audience, proof needs and FAQs.",
            description:
              "Briefs define what success looks like before drafting — including evidence still required from the owner.",
            items: [
              "Purpose and primary intent",
              "Must-cover questions",
              "Proof and boundary notes",
              "Internal link targets",
            ],
            cta: "Discuss content briefs",
            href: leafEnquiry(contentPath, "Content Strategy", "Content briefs"),
          },
          {
            id: "copy",
            index: "03",
            name: "Original commercial copy",
            title: "Service pages and supporting articles written for buyers.",
            description:
              "Distinct structure per URL. No mass-produced location pages or hidden AI instructions.",
            items: [
              "Service page drafts",
              "Metadata aligned to approved map",
              "FAQs that resolve objections",
              "Natural internal links",
            ],
            cta: "Discuss copywriting",
            href: leafEnquiry(
              contentPath,
              "Content Strategy",
              "Commercial copywriting",
            ),
          },
          {
            id: "maintain",
            index: "04",
            name: "Maintenance plan",
            title: "What to update when evidence or products change.",
            description:
              "A practical refresh order tied to enquiries and search feedback — not vanity republishing.",
            items: [
              "Priority refresh list",
              "Evidence gaps",
              "Cannibalization watchlist",
            ],
            cta: "Discuss content maintenance",
            href: leafEnquiry(
              contentPath,
              "Content Strategy",
              "Content maintenance",
            ),
          },
        ],
        closingTitle: "Writing for AI answer engines?",
        closingBody:
          "Citeable, accurate service pages help multiple surfaces. Dedicated AI-search packaging is a separate offer when you have a monitoring plan — not a duplicate of this page.",
        ctaLabel: "Discuss Content Strategy",
        ctaHref: leafEnquiry(contentPath, "Content Strategy"),
      },
      overviewTitle: "What content strategy covers",
      overview: [
        "Research before writing: confirm page ownership, intent and proof. Then brief and draft pages that help a buyer choose the right engagement.",
        "We do not invent keyword volumes, awards or case-study metrics. Owner-gated evidence stays labelled until approved.",
        "Technical SEO implementation and Shopify catalogue SEO remain with their specialist pages; this engagement owns briefs and commercial copy quality.",
      ],
      solutionsTitle: "Content outcomes",
      solutions: [
        "Clear URL and intent ownership",
        "Briefs ready for writing or design",
        "Original service-page copy",
        "Supporting article plan with routes to owners",
        "Maintenance priorities",
      ],
      deliverables: [
        "Intent and ownership map for agreed URLs",
        "Briefs for priority pages",
        "Draft copy and metadata in scope",
        "Internal-link recommendations",
      ],
      included: [
        "Discovery against current site and research notes",
        "Scoped research, briefing and writing",
        "Revision rounds agreed in the engagement",
        "Handover for CMS or engineering publish",
      ],
      stackTags: [
        "Content strategy",
        "Service page copy",
        "Intent mapping",
        "Internal links",
      ],
      process: [
        {
          index: "01",
          name: "Research",
          duration: "Scoped",
          description: "Confirm intents, owners and evidence gaps.",
        },
        {
          index: "02",
          name: "Brief",
          duration: "Scoped",
          description: "Define page jobs, FAQs and proof requirements.",
        },
        {
          index: "03",
          name: "Write",
          duration: "Scoped",
          description: "Draft original copy and metadata for approved URLs.",
        },
        {
          index: "04",
          name: "Maintain",
          duration: "Scoped",
          description: "Set refresh priorities from real feedback and search data.",
        },
      ],
      faqs: [
        {
          question: "Do you guarantee rankings from new copy?",
          answer:
            "No. Stronger pages improve relevance and usefulness. Rankings depend on competition, authority and technical access. We optimize for qualified enquiries as well as visibility.",
        },
        {
          question: "Will you rewrite every page at once?",
          answer:
            "We prioritize the strongest commercial intents first. Large sites are batched so quality stays high.",
        },
        {
          question: "Can you invent case studies for proof sections?",
          answer:
            "No. We use approved project evidence or explain honestly what can be shown today.",
        },
      ],
      faqEyebrow: "Content strategy FAQs",
      faqHeadline: "Research-led copy without empty promises",
      faqCtaLabel: "Discuss Content Strategy",
      faqCtaHref: leafEnquiry(contentPath, "Content Strategy"),
    }),
  },
];
