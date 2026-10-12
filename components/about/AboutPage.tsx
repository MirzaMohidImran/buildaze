import Link from "next/link";
import { AboutFaq } from "@/components/about/AboutFaq";
import { ContactInvite } from "@/components/contact/ContactInvite";
import { Footer } from "@/components/sections/Footer";
import { Navbar } from "@/components/sections/Navbar";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SectionLabel } from "@/components/ui/SectionLabel";
import {
  aboutPage,
  getAboutFeaturedCases,
  getAboutTeam,
  getFeaturedTeamMember,
} from "@/lib/data/about-page";
import { getServiceById } from "@/lib/data/services";
import { linkedIn } from "@/lib/data/site";
import { getServicePath } from "@/lib/seo/paths";

function TeamMemberCard({
  name,
  role,
  bio,
  initials,
  featured = false,
}: {
  name: string;
  role: string;
  bio: string;
  initials: string;
  featured?: boolean;
}) {
  return (
    <article
      className={`surface-card rounded-card border border-line bg-white p-6 md:p-8 ${
        featured ? "sm:col-span-2 lg:col-span-2" : ""
      }`}
    >
      <div className="build-grid relative mb-6 flex aspect-[4/3] max-h-[200px] items-end overflow-hidden rounded-panel border border-line bg-[var(--section-soft,#f7f8fa)] p-5">
        <span
          aria-hidden
          className="font-mono text-[48px] leading-none font-medium tracking-tight text-white/20 md:text-[56px]"
        >
          {initials}
        </span>
      </div>
      <h3 className="text-[18px] font-medium tracking-tight text-white">
        {name}
      </h3>
      <p className="t-label mt-2 text-accent-soft">{role}</p>
      <p className="mt-4 max-w-[520px] text-[14.5px] leading-relaxed text-mist">
        {bio}
      </p>
    </article>
  );
}

function serviceHref(link: (typeof aboutPage.serviceLinks)[number]): string {
  if ("href" in link && typeof link.href === "string") return link.href;
  if ("serviceId" in link && typeof link.serviceId === "string") {
    const service = getServiceById(link.serviceId);
    if (service) return getServicePath(service);
  }
  return "/services";
}

export function AboutPage() {
  const featured = getFeaturedTeamMember();
  const others = getAboutTeam().filter((m) => m.name !== featured.name);
  const cases = getAboutFeaturedCases();

  return (
    <>
      <Navbar />
      <main id="main">
        {/* A. Hero */}
        <section
          aria-labelledby="about-hero-heading"
          className="surface-ink relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28"
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
                  About
                </li>
              </ol>
            </nav>

            <SectionLabel index="01" label={aboutPage.hero.eyebrow} />
            <h1
              id="about-hero-heading"
              className="text-display mt-8 max-w-[18ch] font-semibold text-white"
            >
              {aboutPage.hero.h1}
            </h1>
            <p className="mt-6 max-w-[640px] text-lead text-mist">
              {aboutPage.hero.intro}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <MagneticButton
                href={aboutPage.hero.primaryCta.href}
                analytics="about-hero-contact"
              >
                {aboutPage.hero.primaryCta.label}
              </MagneticButton>
              <MagneticButton
                href={aboutPage.hero.secondaryCta.href}
                variant="ghost"
                analytics="about-hero-work"
              >
                {aboutPage.hero.secondaryCta.label}
              </MagneticButton>
            </div>
          </div>
        </section>

        {/* B. Who we are */}
        <section
          aria-labelledby="about-who-heading"
          className="surface-page relative border-t border-line py-20 md:py-28"
        >
          <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-12 px-5 md:px-10 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-4">
              <SectionLabel index="02" label={aboutPage.whoWeAre.eyebrow} />
              <h2
                id="about-who-heading"
                className="text-h2 mt-8 font-semibold text-white"
              >
                {aboutPage.whoWeAre.headline}
              </h2>
            </div>
            <div className="space-y-5 text-[16px] leading-[1.65] text-mist lg:col-span-7 lg:col-start-6">
              {aboutPage.whoWeAre.paragraphs.map((p) => (
                <p key={p.slice(0, 48)}>{p}</p>
              ))}
              <p>
                Company updates and professional presence:{" "}
                <a
                  href={linkedIn.company}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-soft underline-offset-2 hover:underline"
                >
                  Buildaze on LinkedIn
                </a>
                .
              </p>
            </div>
          </div>
        </section>

        {/* C. Team */}
        <section
          id="team"
          aria-labelledby="about-team-heading"
          className="surface-soft relative scroll-mt-20 border-t border-line py-20 md:py-28"
        >
          <div className="mx-auto max-w-[1600px] px-5 md:px-10">
            <SectionLabel index="03" label="The people behind the work" />
            <h2
              id="about-team-heading"
              className="text-h2 mt-8 max-w-[20ch] font-semibold text-white"
            >
              Meet the team.
            </h2>
            <p className="mt-6 max-w-[560px] text-[15.5px] leading-relaxed text-mist">
              {aboutPage.teamIntro}
            </p>

            <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <TeamMemberCard
                name={featured.name}
                role={featured.role}
                bio={featured.bio}
                initials={featured.initials}
                featured
              />
              {others.map((member) => (
                <TeamMemberCard
                  key={member.name}
                  name={member.name}
                  role={member.role}
                  bio={member.bio}
                  initials={member.initials}
                />
              ))}
            </div>
          </div>
        </section>

        {/* D. Journey */}
        <section
          aria-labelledby="about-journey-heading"
          className="surface-soft relative border-t border-line py-20 md:py-28"
        >
          <div className="mx-auto max-w-[1600px] px-5 md:px-10">
            <SectionLabel index="04" label={aboutPage.journey.eyebrow} />
            <h2
              id="about-journey-heading"
              className="text-h2 mt-8 max-w-[22ch] font-semibold text-white"
            >
              {aboutPage.journey.headline}
            </h2>
            <p className="mt-6 max-w-[560px] text-[15.5px] leading-relaxed text-mist">
              {aboutPage.journey.intro}
            </p>

            <ol className="mt-14 space-y-0 border-t border-line">
              {aboutPage.journey.steps.map((step) => (
                <li
                  key={step.index}
                  className="grid grid-cols-1 gap-6 border-b border-line py-10 md:grid-cols-12 md:gap-8"
                >
                  <div className="md:col-span-4">
                    <span className="t-label text-accent-soft">{step.index}</span>
                    <h3 className="mt-3 text-[20px] font-medium tracking-tight text-white">
                      {step.name}
                    </h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-mist">
                      {step.description}
                    </p>
                  </div>
                  <div className="space-y-4 text-[14.5px] leading-relaxed md:col-span-7 md:col-start-6">
                    <p>
                      <span className="t-label text-mist-2">You provide</span>
                      <span className="mt-2 block text-mist">
                        {step.clientProvides}
                      </span>
                    </p>
                    <p>
                      <span className="t-label text-mist-2">Buildaze handles</span>
                      <span className="mt-2 block text-mist">
                        {step.weHandle}
                      </span>
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* E. Evidence */}
        <section
          aria-labelledby="about-work-heading"
          className="surface-ink relative border-t border-line py-20 md:py-28"
        >
          <div className="mx-auto max-w-[1600px] px-5 md:px-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <SectionLabel index="05" label="Evidence of our work" />
                <h2
                  id="about-work-heading"
                  className="text-h2 mt-8 max-w-[22ch] font-semibold text-white"
                >
                  Selected projects with published detail.
                </h2>
                <p className="mt-6 max-w-[520px] text-[15.5px] leading-relaxed text-mist">
                  Results below belong to the project described. They are not a
                  guarantee of the same outcome for every client.
                </p>
              </div>
              <Link
                href="/work"
                className="text-[15px] font-semibold text-accent-soft underline-offset-2 hover:underline"
              >
                View all work
              </Link>
            </div>

            <ul className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
              {cases.map((study) => (
                <li
                  key={study.id}
                  className="rounded-card border border-line bg-ink-2 p-7 md:p-8"
                >
                  <span className="t-label text-accent-soft">{study.index}</span>
                  <p className="t-label mt-3 text-mist-2">{study.industry}</p>
                  <h3 className="mt-3 text-[18px] font-medium tracking-tight text-white">
                    {study.name}
                  </h3>
                  <p className="mt-4 text-[14.5px] leading-relaxed text-mist">
                    <span className="text-white">Problem: </span>
                    {study.challenge}
                  </p>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-mist">
                    <span className="text-white">What we did: </span>
                    {study.solution}
                  </p>
                  <p className="mt-5 text-[15px] font-medium text-white">
                    {study.outcome.value}{" "}
                    <span className="font-normal text-mist">
                      {study.outcome.label}
                    </span>
                  </p>
                  <Link
                    href={`/work/${study.slug}`}
                    className="mt-6 inline-flex items-center gap-2 text-[14px] font-semibold text-accent-soft underline-offset-2 hover:underline"
                  >
                    Read case study
                    <span aria-hidden>→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* F. Expectations */}
        <section
          aria-labelledby="about-expect-heading"
          className="surface-page relative border-t border-line py-20 md:py-28"
        >
          <div className="mx-auto max-w-[1600px] px-5 md:px-10">
            <SectionLabel index="06" label={aboutPage.expectations.eyebrow} />
            <h2
              id="about-expect-heading"
              className="text-h2 mt-8 max-w-[20ch] font-semibold text-white"
            >
              {aboutPage.expectations.headline}
            </h2>
            <ul className="mt-12 divide-y divide-line border-y border-line">
              {aboutPage.expectations.items.map((item, i) => (
                <li
                  key={item.title}
                  className="grid grid-cols-1 gap-3 py-8 md:grid-cols-12 md:gap-8"
                >
                  <div className="flex items-baseline gap-3 md:col-span-4">
                    <span className="t-label text-accent-soft">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-[17px] font-medium tracking-tight text-white">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-[15px] leading-relaxed text-mist md:col-span-7 md:col-start-6">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* G. Services */}
        <section
          aria-labelledby="about-services-heading"
          className="surface-soft relative border-t border-line py-20 md:py-28"
        >
          <div className="mx-auto max-w-[1600px] px-5 md:px-10">
            <SectionLabel index="07" label={aboutPage.servicesIntro.eyebrow} />
            <h2
              id="about-services-heading"
              className="text-h2 mt-8 max-w-[22ch] font-semibold text-white"
            >
              {aboutPage.servicesIntro.headline}
            </h2>
            <p className="mt-6 max-w-[560px] text-[15.5px] leading-relaxed text-mist">
              {aboutPage.servicesIntro.body}
            </p>
            <ul className="mt-12 grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
              {aboutPage.serviceLinks.map((link) => (
                <li key={link.label} className="surface-card bg-white">
                  <Link
                    href={serviceHref(link)}
                    className="group flex h-full flex-col p-7 transition-colors hover:bg-[var(--section-blue-soft,#EFF5FF)] md:p-8"
                  >
                    <span className="text-[17px] font-medium tracking-tight text-white group-hover:text-accent-soft">
                      {link.label}
                    </span>
                    <span className="mt-3 text-[14.5px] leading-relaxed text-mist">
                      {link.description}
                    </span>
                    <span
                      aria-hidden
                      className="mt-6 text-accent-soft transition-transform group-hover:translate-x-0.5"
                    >
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* H. FAQ */}
        <section
          aria-labelledby="about-faq-heading"
          className="surface-page relative border-t border-line py-20 md:py-28"
        >
          <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-12 px-5 md:px-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionLabel
                index="08"
                label="Questions before getting started"
              />
              <h2
                id="about-faq-heading"
                className="text-h2 mt-8 font-semibold text-white"
              >
                Useful answers before you enquire.
              </h2>
            </div>
            <div className="lg:col-span-8">
              <AboutFaq />
            </div>
          </div>
        </section>

        {/* I. Contact */}
        <ContactInvite
          sectionIndex="09"
          heading={aboutPage.contact.headline}
          intro={aboutPage.contact.body}
          ctaLabel={aboutPage.contact.ctaLabel}
          source="about-page"
        />
      </main>
      <Footer />
    </>
  );
}
