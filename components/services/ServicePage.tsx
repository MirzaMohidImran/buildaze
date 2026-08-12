import { ContactCTA } from "@/components/sections/ContactCTA";
import { Footer } from "@/components/sections/Footer";
import { Navbar } from "@/components/sections/Navbar";
import { ServiceAudience } from "@/components/services/ServiceAudience";
import { ServiceCapabilities } from "@/components/services/ServiceCapabilities";
import { ServiceClientProof } from "@/components/services/ServiceClientProof";
import { ServiceDeliverables } from "@/components/services/ServiceDeliverables";
import { ServiceDeliveryProcess } from "@/components/services/ServiceDeliveryProcess";
import { ServiceEcosystem } from "@/components/services/ServiceEcosystem";
import { ServiceFaq } from "@/components/services/ServiceFaq";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceOverview } from "@/components/services/ServiceOverview";
import { ServiceProblems } from "@/components/services/ServiceProblems";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { ServiceRelated } from "@/components/services/ServiceRelated";
import { ServiceRelatedWork } from "@/components/services/ServiceRelatedWork";
import { ServiceSelectedWorkSection } from "@/components/services/ServiceSelectedWork";
import { ServiceShopifyContact } from "@/components/services/ServiceShopifyContact";
import { ServiceTrust } from "@/components/services/ServiceTrust";
import { ServiceWhy } from "@/components/services/ServiceWhy";
import type { Service } from "@/lib/data/services";
import { getServiceById } from "@/lib/data/services";
import { getServicePath } from "@/lib/seo/paths";
import Link from "next/link";

function padIndex(n: number) {
  return String(n).padStart(2, "0");
}

export function ServicePage({ service }: { service: Service }) {
  const hasTrust = Boolean(service.page.trust);
  const hasSelectedWork = Boolean(service.page.selectedWork);
  const hasProblems = Boolean(service.page.problems);
  const hasCapabilities = Boolean(service.page.capabilities);
  const hasDeliveryProcess = Boolean(service.page.deliveryProcess);
  const hasWhy = Boolean(service.page.why);
  const hasClientProof = Boolean(service.page.clientProof);
  const hasEcosystem = Boolean(service.page.ecosystem);
  const hasAudience = Boolean(service.page.audience);

  // Full Shopify page: skip generic overview / deliverables / process / related work
  const skipGenericCore = hasAudience;

  // Shopify early sections: 02 trust … 09 ecosystem, 10 audience
  let next = 1;
  if (hasTrust) next = 3;
  if (hasSelectedWork) next = Math.max(next, hasTrust ? 4 : 2);
  if (hasProblems) next = Math.max(next, hasTrust && hasSelectedWork ? 5 : next + 1);
  if (hasCapabilities) {
    next = Math.max(
      next,
      hasTrust && hasSelectedWork && hasProblems ? 6 : next + 1,
    );
  }
  if (hasDeliveryProcess) {
    next = Math.max(
      next,
      hasTrust && hasSelectedWork && hasProblems && hasCapabilities
        ? 7
        : next + 1,
    );
  }
  if (hasWhy) {
    next = Math.max(
      next,
      hasTrust &&
        hasSelectedWork &&
        hasProblems &&
        hasCapabilities &&
        hasDeliveryProcess
        ? 8
        : next + 1,
    );
  }
  if (hasClientProof) {
    next = Math.max(
      next,
      hasTrust &&
        hasSelectedWork &&
        hasProblems &&
        hasCapabilities &&
        hasDeliveryProcess &&
        hasWhy
        ? 9
        : next + 1,
    );
  }
  if (hasEcosystem) {
    next = Math.max(
      next,
      hasTrust &&
        hasSelectedWork &&
        hasProblems &&
        hasCapabilities &&
        hasDeliveryProcess &&
        hasWhy &&
        hasClientProof
        ? 10
        : next + 1,
    );
  }
  if (hasAudience) {
    next = Math.max(
      next,
      hasTrust &&
        hasSelectedWork &&
        hasProblems &&
        hasCapabilities &&
        hasDeliveryProcess &&
        hasWhy &&
        hasClientProof &&
        hasEcosystem
        ? 11
        : next + 1,
    );
  }

  const overviewIndex = skipGenericCore ? "" : padIndex(next++);
  const deliverablesIndex = skipGenericCore ? "" : padIndex(next++);
  const processIndex = skipGenericCore ? "" : padIndex(next++);
  const relatedWorkIndex = skipGenericCore ? "" : padIndex(next++);
  const faqIndex = padIndex(next++);
  const relatedIndex = skipGenericCore ? "" : padIndex(next++);
  const contactIndex = padIndex(next++);

  const problemsIndex =
    hasTrust && hasSelectedWork ? "04" : padIndex(hasTrust || hasSelectedWork ? 3 : 1);
  const capabilitiesIndex =
    hasTrust && hasSelectedWork && hasProblems
      ? "05"
      : padIndex(Number(problemsIndex) + 1);
  const deliveryProcessIndex =
    hasTrust && hasSelectedWork && hasProblems && hasCapabilities
      ? "06"
      : padIndex(Number(capabilitiesIndex) + 1);
  const whyIndex =
    hasTrust &&
    hasSelectedWork &&
    hasProblems &&
    hasCapabilities &&
    hasDeliveryProcess
      ? "07"
      : padIndex(Number(deliveryProcessIndex) + 1);
  const clientProofIndex =
    hasTrust &&
    hasSelectedWork &&
    hasProblems &&
    hasCapabilities &&
    hasDeliveryProcess &&
    hasWhy
      ? "08"
      : padIndex(Number(whyIndex) + 1);
  const ecosystemIndex =
    hasTrust &&
    hasSelectedWork &&
    hasProblems &&
    hasCapabilities &&
    hasDeliveryProcess &&
    hasWhy &&
    hasClientProof
      ? "09"
      : padIndex(Number(clientProofIndex) + 1);
  const audienceIndex =
    hasTrust &&
    hasSelectedWork &&
    hasProblems &&
    hasCapabilities &&
    hasDeliveryProcess &&
    hasWhy &&
    hasClientProof &&
    hasEcosystem
      ? "10"
      : padIndex(Number(ecosystemIndex) + 1);

  return (
    <>
      <Navbar />
      <main id="main">
        <ServiceHero service={service} />
        {service.id === "ecommerce" && (
          <section
            aria-label="Shopify specialist path"
            className="relative border-b border-line py-10 md:py-12"
          >
            <div className="mx-auto max-w-[1600px] px-5 md:px-10">
              <p className="max-w-[720px] text-[15.5px] leading-relaxed text-mist">
                Looking specifically for{" "}
                <Link
                  href={getServicePath(getServiceById("shopify")!)}
                  className="text-accent-soft underline-offset-2 hover:underline"
                  data-analytics="ecommerce-to-shopify"
                >
                  Shopify development
                </Link>
                ? Explore Buildaze&apos;s{" "}
                <Link
                  href={getServicePath(getServiceById("shopify")!)}
                  className="text-white underline-offset-2 hover:underline"
                  data-analytics="ecommerce-to-shopify-agency"
                >
                  Shopify Growth Agency
                </Link>{" "}
                page for custom Shopify stores, redesigns, CRO, performance,
                migrations, and Shopify Plus support.
              </p>
            </div>
          </section>
        )}
        {service.page.trust && (
          <ServiceTrust trust={service.page.trust} sectionIndex="02" />
        )}
        {service.page.selectedWork && (
          <ServiceSelectedWorkSection
            selectedWork={service.page.selectedWork}
            sectionIndex={hasTrust ? "03" : "01"}
          />
        )}
        {service.page.problems && (
          <ServiceProblems
            problems={service.page.problems}
            sectionIndex={problemsIndex}
          />
        )}
        {service.page.capabilities && (
          <ServiceCapabilities
            capabilities={service.page.capabilities}
            sectionIndex={capabilitiesIndex}
          />
        )}
        {service.page.deliveryProcess && (
          <ServiceDeliveryProcess
            deliveryProcess={service.page.deliveryProcess}
            sectionIndex={deliveryProcessIndex}
          />
        )}
        {service.page.why && (
          <ServiceWhy why={service.page.why} sectionIndex={whyIndex} />
        )}
        {service.page.clientProof && (
          <ServiceClientProof
            clientProof={service.page.clientProof}
            sectionIndex={clientProofIndex}
          />
        )}
        {service.page.ecosystem && (
          <ServiceEcosystem
            ecosystem={service.page.ecosystem}
            sectionIndex={ecosystemIndex}
          />
        )}
        {service.page.audience && (
          <ServiceAudience
            audience={service.page.audience}
            sectionIndex={audienceIndex}
          />
        )}
        {!skipGenericCore && (
          <>
            <ServiceOverview service={service} sectionIndex={overviewIndex} />
            <ServiceDeliverables service={service} sectionIndex={deliverablesIndex} />
            <ServiceProcess service={service} sectionIndex={processIndex} />
            <ServiceRelatedWork service={service} sectionIndex={relatedWorkIndex} />
          </>
        )}
        <ServiceFaq service={service} sectionIndex={faqIndex} />
        {!skipGenericCore && (
          <ServiceRelated service={service} sectionIndex={relatedIndex} />
        )}
        {skipGenericCore ? (
          <ServiceShopifyContact sectionIndex={contactIndex} />
        ) : (
          <ContactCTA
            defaultProjectType={service.name}
            sectionIndex={contactIndex}
          />
        )}
      </main>
      <Footer />
    </>
  );
}
