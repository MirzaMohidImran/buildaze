import Link from "next/link";
import { Suspense } from "react";
import { ContactFaq } from "@/components/contact/ContactFaq";
import { ContactInquiryForm } from "@/components/contact/ContactInquiryForm";
import { Footer } from "@/components/sections/Footer";
import { Navbar } from "@/components/sections/Navbar";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { contactPage } from "@/lib/data/contact-page";
import { site } from "@/lib/data/site";

function ContactFormFallback() {
  return (
    <div
      className="surface-card min-h-[360px] rounded-panel border border-line bg-white p-7 md:p-10"
      aria-hidden
    />
  );
}

export function ContactPage({
  initialService = "",
}: {
  initialService?: string;
}) {
  return (
    <>
      <Navbar />
      <main id="main">
        {/* A. Hero — ink */}
        <section
          aria-labelledby="contact-hero-heading"
          className="surface-ink relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-20"
        >
          <div aria-hidden className="build-grid fade-edges absolute inset-0" />
          <div className="relative mx-auto max-w-[1600px] px-5 md:px-10">
            <nav aria-label="Breadcrumb" className="mb-10">
              <ol className="t-label flex flex-wrap items-center gap-2 text-mist-2">
                <li>
                  <Link href="/" className="transition-colors hover:text-white">
                    Home
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li className="text-accent-soft" aria-current="page">
                  Contact
                </li>
              </ol>
            </nav>

            <SectionLabel index="01" label={contactPage.hero.eyebrow} />
            <h1
              id="contact-hero-heading"
              className="text-display mt-8 max-w-[16ch] font-semibold text-white"
            >
              {contactPage.hero.h1}
            </h1>
            <p className="mt-6 max-w-[560px] text-lead text-mist">
              {contactPage.hero.intro}
            </p>
          </div>
        </section>

        {/* B. Form + supporting info — soft / white form panel */}
        <section
          aria-labelledby="contact-form-heading"
          className="surface-soft relative border-t border-line py-16 md:py-24"
        >
          <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-14 px-5 md:px-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <h2 id="contact-form-heading" className="sr-only">
                Project inquiry form
              </h2>
              <Suspense fallback={<ContactFormFallback />}>
                <ContactInquiryForm
                  initialService={initialService}
                  source="contact-page"
                />
              </Suspense>
            </div>

            <aside className="space-y-12 lg:col-span-5">
              <div>
                <SectionLabel index="02" label={contactPage.direct.eyebrow} />
                <h2 className="text-h3 mt-6 font-semibold text-white">
                  {contactPage.direct.headline}
                </h2>
                <p className="mt-4 text-[15px] leading-relaxed text-mist">
                  {contactPage.direct.body}
                </p>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-6 inline-flex items-center gap-3 font-mono text-[17px] text-white transition-colors hover:text-accent-soft"
                >
                  <span aria-hidden className="h-1.5 w-1.5 bg-accent" />
                  {site.email}
                </a>
              </div>

              <div>
                <SectionLabel
                  index="03"
                  label={contactPage.nextSteps.eyebrow}
                />
                <h2 className="text-h3 mt-6 font-semibold text-white">
                  {contactPage.nextSteps.headline}
                </h2>
                <ol className="mt-8 space-y-6">
                  {contactPage.nextSteps.steps.map((step) => (
                    <li key={step.index} className="flex gap-4">
                      <span className="t-label shrink-0 text-accent-soft">
                        {step.index}
                      </span>
                      <div>
                        <h3 className="text-[16px] font-medium tracking-tight text-white">
                          {step.name}
                        </h3>
                        <p className="mt-2 text-[14.5px] leading-relaxed text-mist">
                          {step.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <p>
                <Link
                  href={contactPage.proof.href}
                  className="text-[15px] font-medium text-accent-soft underline-offset-2 hover:underline"
                >
                  {contactPage.proof.label}
                </Link>
              </p>
            </aside>
          </div>
        </section>

        {/* F. FAQ — page */}
        <section
          aria-labelledby="contact-faq-heading"
          className="surface-page relative border-t border-line py-20 md:py-28"
        >
          <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-12 px-5 md:px-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionLabel index="04" label="Questions" />
              <h2
                id="contact-faq-heading"
                className="text-h2 mt-8 font-semibold text-white"
              >
                Before you send an inquiry.
              </h2>
            </div>
            <div className="lg:col-span-8">
              <ContactFaq />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
