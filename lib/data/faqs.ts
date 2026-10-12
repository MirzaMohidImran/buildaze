export interface FaqItem {
  question: string;
  answer: string;
}

/**
 * Homepage FAQs — broad buyer questions.
 * Specialist Shopify / AI / SEO detail belongs on those service pages.
 * No FAQPage JSON-LD (Google deprecated FAQ rich results for most sites in 2026).
 */
export const faqs: FaqItem[] = [
  {
    question: "Which service should we start with?",
    answer:
      "Start from the problem you need solved — a clearer brand, a product to build, an AI workflow, growth channels, or a Shopify store — and we help map that to Design, Development, Artificial Intelligence, Digital Marketing or Shopify. If you are unsure, choose “Not sure yet” in the enquiry form.",
  },
  {
    question: "Can we hire Buildaze for one service?",
    answer:
      "Yes. Many engagements are a single category. We can also combine services when the work naturally connects — for example design with development, or Shopify with marketing — without forcing a bundled package.",
  },
  {
    question: "Can Buildaze improve an existing website or application?",
    answer:
      "Yes. Many projects start with an existing site, product or Shopify store that needs performance, UX, features or a cleaner foundation. We review the current setup, then propose a scoped improvement rather than assuming a full rebuild.",
  },
  {
    question: "Can design, development and marketing work together?",
    answer:
      "Yes, when it helps. We can scope those together around one goal, or keep them separate if you only need one area right now. Specialist detail for AI, Shopify or marketing sits on those service pages.",
  },
  {
    question: "How are scope, pricing and timeline determined?",
    answer:
      "After we understand the problem and constraints, we define deliverables, responsibilities and milestones. Cost and timeline follow that agreed scope — not a universal price or delivery window for every project type.",
  },
  {
    question: "What support is available after launch?",
    answer:
      "Support or a follow-on phase can be scoped separately when you want it. It is not required to keep access to the custom work already delivered. Third-party platforms such as Shopify, hosting or ads accounts keep their own terms.",
  },
  {
    question: "What happens after an enquiry?",
    answer:
      "We review your message, clarify goals and constraints if needed, and reply with next steps for a scoped conversation. Submitting the form means our delivery provider accepted the enquiry for delivery — not a booked kickoff or guaranteed inbox timing.",
  },
];
