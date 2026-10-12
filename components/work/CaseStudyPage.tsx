import { ContactInvite } from "@/components/contact/ContactInvite";
import { Footer } from "@/components/sections/Footer";
import { Navbar } from "@/components/sections/Navbar";
import { CaseHero } from "@/components/work/CaseHero";
import { CaseMeta } from "@/components/work/CaseMeta";
import { CaseNarrative } from "@/components/work/CaseNarrative";
import { CaseNext } from "@/components/work/CaseNext";
import { contactServiceParamForId } from "@/lib/contact/paths";
import type { CaseStudy } from "@/lib/data/work";
import { getNextCaseStudy } from "@/lib/data/work";

export function CaseStudyPage({ study }: { study: CaseStudy }) {
  const next = getNextCaseStudy(study.id);
  const relatedId = study.page.relatedServiceIds[0] ?? "";
  const serviceParam = contactServiceParamForId(relatedId);

  return (
    <>
      <Navbar />
      <main id="main">
        <CaseHero study={study} />
        <CaseNarrative study={study} />
        <CaseMeta study={study} />
        <CaseNext next={next} />
        <ContactInvite
          sectionIndex="06"
          service={serviceParam || undefined}
          source={`case-${study.id}`}
        />
      </main>
      <Footer />
    </>
  );
}
