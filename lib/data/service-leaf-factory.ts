import { buildContactHref } from "../contact/paths";
import type {
  ServiceFaq,
  ServicePageContent,
  ServiceProblem,
} from "./services";

export type LeafProblemInput = {
  id: string;
  name: string;
  title: string;
  description: string;
};

export type LeafCapabilityCard = {
  id: string;
  name: string;
  title: string;
  description: string;
  items: string[];
  bestFor?: string;
  boundaries?: string;
};

export type LeafStepInput = {
  id: string;
  shortName: string;
  name: string;
  title: string;
  description: string;
  items: string[];
  outcome: string;
};

export type LeafWhyInput = {
  id: string;
  name: string;
  summary: string;
  title: string;
  description: string;
  panelStatement: string;
  panelNote: string;
};

export type LeafPageSpec = {
  path: string;
  contactService: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  headline: string;
  subheadline: string;
  ctaLabel: string;
  secondaryCtaLabel?: string;
  problemsEyebrow: string;
  problemsHeadline: string;
  problemsIntro: string;
  problems: LeafProblemInput[];
  problemsClosingTitle: string;
  problemsClosingBody: string;
  capabilitiesEyebrow: string;
  capabilitiesHeadline: string;
  capabilitiesIntro: string;
  capabilities: LeafCapabilityCard[];
  /** Optional closing callout shown below the capability cards. */
  capabilitiesClosingTitle?: string;
  capabilitiesClosingBody?: string;
  processEyebrow: string;
  processHeadline: string;
  processIntro: string;
  steps: LeafStepInput[];
  processClosingTitle: string;
  processClosingBody: string;
  whyEyebrow: string;
  whyHeadline: string;
  whyIntro: string;
  whyItems: LeafWhyInput[];
  whyClosingTitle: string;
  whyClosingBody: string;
  overviewTitle: string;
  overview: string[];
  solutionsTitle: string;
  solutions: string[];
  deliverables: string[];
  included: string[];
  stackTags: string[];
  faqs: ServiceFaq[];
  faqEyebrow: string;
  faqHeadline: string;
  relatedWorkIds?: string[];
};

function enquiry(_path: string, service: string, problem?: string) {
  return buildContactHref({ service, problem });
}

/** Build a full specialist leaf page body from a compact service specification. */
export function buildLeafPage(spec: LeafPageSpec): ServicePageContent {
  const problems: ServiceProblem[] = spec.problems.map((p, i) => ({
    id: p.id,
    index: String(i + 1).padStart(2, "0"),
    name: p.name,
    title: p.title,
    description: p.description,
    enquiryHref: enquiry(spec.path, spec.contactService, p.name),
  }));

  return {
    metaTitle: spec.metaTitle,
    metaDescription: spec.metaDescription,
    eyebrow: spec.eyebrow,
    headline: spec.headline,
    subheadline: spec.subheadline,
    ctaLabel: spec.ctaLabel,
    secondaryCtaLabel: spec.secondaryCtaLabel ?? "Back to services",
    problems: {
      eyebrow: spec.problemsEyebrow,
      headline: spec.problemsHeadline,
      intro: [spec.problemsIntro],
      problems,
      closingTitle: spec.problemsClosingTitle,
      closingBody: spec.problemsClosingBody,
      ctaLabel: spec.ctaLabel,
      ctaHref: enquiry(spec.path, spec.contactService),
    },
    capabilities: {
      eyebrow: spec.capabilitiesEyebrow,
      headline: spec.capabilitiesHeadline,
      intro: [spec.capabilitiesIntro],
      closingTitle: spec.capabilitiesClosingTitle ?? "",
      closingBody: spec.capabilitiesClosingBody ?? "",
      ctaLabel: spec.ctaLabel,
      ctaHref: enquiry(spec.path, spec.contactService),
      capabilities: spec.capabilities.map((c, i) => ({
        id: c.id,
        index: String(i + 1).padStart(2, "0"),
        name: c.name,
        title: c.title,
        bestFor: c.bestFor,
        boundaries: c.boundaries,
        description: c.description,
        items: c.items,
        cta: `Discuss ${c.name}`,
        href: enquiry(spec.path, spec.contactService, c.name),
      })),
    },
    deliveryProcess: {
      eyebrow: spec.processEyebrow,
      headline: spec.processHeadline,
      intro: [spec.processIntro],
      steps: spec.steps.map((s, i) => ({
        id: s.id,
        index: String(i + 1).padStart(2, "0"),
        shortName: s.shortName,
        name: s.name,
        title: s.title,
        description: s.description,
        itemsLabel: "Includes",
        items: s.items,
        outcome: s.outcome,
      })),
      closingTitle: spec.processClosingTitle,
      closingBody: spec.processClosingBody,
      ctaLabel: spec.ctaLabel,
      ctaHref: "/contact",
    },
    why: {
      eyebrow: spec.whyEyebrow,
      headline: spec.whyHeadline,
      intro: [spec.whyIntro],
      differentiators: spec.whyItems.map((w, i) => ({
        id: w.id,
        index: String(i + 1).padStart(2, "0"),
        name: w.name,
        summary: w.summary,
        title: w.title,
        description: w.description,
        panelStatement: w.panelStatement,
        panelNote: w.panelNote,
      })),
      closingTitle: spec.whyClosingTitle,
      closingBody: spec.whyClosingBody,
      pillars: spec.steps.slice(0, 4).map((s) => s.shortName),
      closingNote: "Scope is agreed before build work starts.",
      ctaLabel: spec.ctaLabel,
      ctaHref: "/contact",
    },
    overviewTitle: spec.overviewTitle,
    overview: spec.overview,
    solutionsTitle: spec.solutionsTitle,
    solutions: spec.solutions,
    deliverables: spec.deliverables,
    included: spec.included,
    stackTags: spec.stackTags,
    process: spec.steps.map((s, i) => ({
      index: String(i + 1).padStart(2, "0"),
      name: s.shortName,
      duration: "Scoped",
      description: s.description,
    })),
    relatedWorkIds: spec.relatedWorkIds ?? [],
    faqEyebrow: spec.faqEyebrow,
    faqHeadline: spec.faqHeadline,
    faqs: spec.faqs,
    faqCtaLabel: spec.ctaLabel,
    faqCtaHref: "/contact",
  };
}
