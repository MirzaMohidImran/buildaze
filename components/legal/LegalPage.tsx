import Link from "next/link";
import { Footer } from "@/components/sections/Footer";
import { Navbar } from "@/components/sections/Navbar";
import {
  LEGAL_LAST_UPDATED,
  cookieTechnologyRows,
  type LegalPageContent,
} from "@/lib/data/legal-pages";
import { site } from "@/lib/data/site";

function mailtoHref(email: string) {
  return `mailto:${email}`;
}

/** Compact ink hero + white reading area — no promo sections. */
export function LegalPage({
  content,
  showCookieTable = false,
}: {
  content: LegalPageContent;
  showCookieTable?: boolean;
}) {
  return (
    <>
      <Navbar />
      <main id="main">
        <header className="surface-ink relative pt-32 pb-12 md:pt-40 md:pb-16">
          <div className="mx-auto w-full max-w-[800px] px-5 md:px-10">
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="t-label flex flex-wrap items-center gap-2 text-mist-2">
                <li>
                  <Link href="/" className="transition-colors hover:text-white">
                    Home
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li className="text-accent-soft" aria-current="page">
                  {content.title}
                </li>
              </ol>
            </nav>
            <p className="t-label text-mist-2">Legal</p>
            <h1 className="text-h2 mt-4 tracking-tight text-white">
              {content.h1}
            </h1>
            <p className="mt-4 text-[15px] text-mist-2">
              Last updated: {LEGAL_LAST_UPDATED}
            </p>
          </div>
        </header>

        <article className="surface-page relative pb-20 md:pb-28">
          <div className="mx-auto w-full max-w-[800px] px-5 pt-12 md:px-10 md:pt-16">
            <div className="space-y-4 text-[16px] leading-[1.65] text-mist md:text-[17px]">
              <p>{content.intro}</p>
            </div>

            <div className="mt-12 space-y-12">
              {content.sections.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  aria-labelledby={`${section.id}-heading`}
                >
                  <h2
                    id={`${section.id}-heading`}
                    className="text-h3 tracking-tight text-white"
                  >
                    {section.heading}
                  </h2>
                  <div className="mt-4 space-y-4 text-[16px] leading-[1.65] text-mist md:text-[17px]">
                    {section.paragraphs.map((paragraph, index) => (
                      <p key={`${section.id}-${index}`}>
                        {paragraph.includes(site.email) ? (
                          <>
                            {paragraph.split(site.email)[0]}
                            <a
                              href={mailtoHref(site.email)}
                              className="text-accent-soft underline-offset-2 hover:underline"
                            >
                              {site.email}
                            </a>
                            {paragraph.split(site.email)[1]}
                          </>
                        ) : (
                          paragraph
                        )}
                      </p>
                    ))}
                    {section.bullets && section.bullets.length > 0 && (
                      <ul className="list-disc space-y-2 pl-5">
                        {section.bullets.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </section>
              ))}

              {showCookieTable && (
                <section
                  id="cookie-table"
                  aria-labelledby="cookie-table-heading"
                >
                  <h2
                    id="cookie-table-heading"
                    className="text-h3 tracking-tight text-white"
                  >
                    Cookie and similar technologies
                  </h2>
                  <div className="mt-6 overflow-x-auto rounded-panel border border-line">
                    <table className="w-full min-w-[720px] border-collapse text-left text-[14px]">
                      <thead>
                        <tr className="border-b border-line bg-[var(--section-soft,#f7f8fa)]">
                          <th className="px-4 py-3 font-semibold text-white">
                            Technology
                          </th>
                          <th className="px-4 py-3 font-semibold text-white">
                            Provider
                          </th>
                          <th className="px-4 py-3 font-semibold text-white">
                            Purpose
                          </th>
                          <th className="px-4 py-3 font-semibold text-white">
                            Category
                          </th>
                          <th className="px-4 py-3 font-semibold text-white">
                            Duration
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {cookieTechnologyRows.map((row) => (
                          <tr
                            key={row.technology}
                            className="border-b border-line last:border-b-0"
                          >
                            <td className="px-4 py-3 align-top text-white">
                              {row.technology}
                            </td>
                            <td className="px-4 py-3 align-top text-mist">
                              {row.provider}
                            </td>
                            <td className="px-4 py-3 align-top text-mist">
                              {row.purpose}
                            </td>
                            <td className="px-4 py-3 align-top text-mist">
                              {row.category}
                            </td>
                            <td className="px-4 py-3 align-top text-mist">
                              {row.duration}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>
              )}
            </div>

            <p className="mt-16 text-[14px] text-mist-2">
              Questions:{" "}
              <a
                href={mailtoHref(site.email)}
                className="text-accent-soft underline-offset-2 hover:underline"
              >
                {site.email}
              </a>
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
