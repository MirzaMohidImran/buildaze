import Link from "next/link";
import { Footer } from "@/components/sections/Footer";
import { Navbar } from "@/components/sections/Navbar";
import { MagneticButton } from "@/components/ui/MagneticButton";
import type {
  ResourceArticle,
  ResourceBlock,
  ResourceInline,
} from "@/lib/data/resources";
import { getServiceById } from "@/lib/data/services";
import { getServicePath } from "@/lib/seo/paths";

function Inline({ part }: { part: ResourceInline }) {
  if (part.type === "link") {
    return (
      <Link
        href={part.href}
        className="text-accent-soft underline-offset-2 hover:underline"
      >
        {part.label}
      </Link>
    );
  }
  return <>{part.value}</>;
}

function Block({ block }: { block: ResourceBlock }) {
  if (block.type === "p") {
    return (
      <p className="text-[16.5px] leading-[1.75] text-mist md:text-[17px]">
        {block.parts.map((part, i) => (
          <Inline key={i} part={part} />
        ))}
      </p>
    );
  }

  if (block.type === "ul") {
    return (
      <ul className="list-disc space-y-2 pl-5 text-[16.5px] leading-[1.7] text-mist md:text-[17px]">
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }

  if (block.type === "callout") {
    return (
      <aside className="rounded-lg border border-line bg-white/[0.03] px-5 py-4 md:px-6 md:py-5">
        <p className="t-label text-accent-soft">{block.title}</p>
        <p className="mt-3 text-[15.5px] leading-[1.7] text-mist">
          {block.parts.map((part, i) => (
            <Inline key={i} part={part} />
          ))}
        </p>
      </aside>
    );
  }

  return (
    <figure className="overflow-x-auto">
      {block.caption ? (
        <figcaption className="t-label mb-3 text-mist-2">
          {block.caption}
        </figcaption>
      ) : null}
      <table className="w-full min-w-[560px] border-collapse text-left text-[14.5px] text-mist">
        <thead>
          <tr className="border-b border-line">
            {block.headers.map((header) => (
              <th
                key={header}
                className="px-3 py-3 font-medium text-white first:pl-0"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {block.rows.map((row, ri) => (
            <tr key={ri} className="border-b border-line/70 align-top">
              {row.map((cell, ci) => (
                <td key={ci} className="px-3 py-3 first:pl-0">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {block.footnote ? (
        <p className="mt-3 text-[13.5px] leading-relaxed text-mist-2">
          {block.footnote}
        </p>
      ) : null}
    </figure>
  );
}

export function ResourceArticlePage({ article }: { article: ResourceArticle }) {
  const related = article.relatedServiceIds
    .map((id) => getServiceById(id))
    .filter(Boolean);

  return (
    <>
      <Navbar />
      <main id="main" className="surface-ink">
        <article className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-20">
          <div aria-hidden className="build-grid fade-edges absolute inset-0" />
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 55% 50% at 50% 30%, rgba(37,99,235,0.12), transparent 70%)",
            }}
          />
          <div className="relative mx-auto max-w-[760px] px-5 md:px-10">
            <header className="flex flex-col items-center text-center">
              <nav aria-label="Breadcrumb" className="mb-10 w-full">
                <ol className="t-label flex flex-wrap items-center justify-center gap-2 text-mist-2">
                  <li>
                    <Link
                      href="/"
                      className="transition-colors hover:text-white"
                    >
                      Home
                    </Link>
                  </li>
                  <li aria-hidden>/</li>
                  <li>
                    <Link
                      href="/resources"
                      className="transition-colors hover:text-white"
                    >
                      Blog
                    </Link>
                  </li>
                  <li aria-hidden>/</li>
                  <li className="max-w-[280px] truncate text-accent-soft sm:max-w-none">
                    {article.h1}
                  </li>
                </ol>
              </nav>

              <p className="t-label text-accent-soft">{article.cluster}</p>
              <h1
                id="article-heading"
                className="text-h2 mt-4 tracking-tight text-white"
              >
                {article.h1}
              </h1>
              <p className="mt-5 max-w-[640px] text-[16.5px] leading-relaxed text-mist md:text-[17.5px]">
                {article.excerpt}
              </p>
              <p className="mt-6 text-[13.5px] text-mist-2">
                By {article.authorName} · Published {article.publishedAt}
                {article.updatedAt !== article.publishedAt
                  ? ` · Updated ${article.updatedAt}`
                  : ""}
              </p>
            </header>

            <div className="mt-12 space-y-14 text-left md:mt-16 md:space-y-16">
              {article.sections.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  aria-labelledby={`${section.id}-heading`}
                  className="space-y-5"
                >
                  <h2
                    id={`${section.id}-heading`}
                    className="text-[1.45rem] font-semibold tracking-tight text-white md:text-[1.6rem]"
                  >
                    {section.heading}
                  </h2>
                  {section.blocks.map((block, i) => (
                    <Block key={i} block={block} />
                  ))}
                </section>
              ))}

              <section
                id="faqs"
                aria-labelledby="faqs-heading"
                className="space-y-6 border-t border-line pt-12"
              >
                <h2
                  id="faqs-heading"
                  className="text-[1.45rem] font-semibold tracking-tight text-white md:text-[1.6rem]"
                >
                  Questions merchants ask next
                </h2>
                <dl className="space-y-6">
                  {article.faqs.map((faq) => (
                    <div key={faq.question}>
                      <dt className="font-medium text-white">{faq.question}</dt>
                      <dd className="mt-2 text-[15.5px] leading-[1.7] text-mist">
                        {faq.answer}
                      </dd>
                    </div>
                  ))}
                </dl>
              </section>

              <section
                id="sources"
                aria-labelledby="sources-heading"
                className="space-y-4 border-t border-line pt-12"
              >
                <h2
                  id="sources-heading"
                  className="text-[1.2rem] font-semibold text-white"
                >
                  Sources checked
                </h2>
                <ul className="space-y-2 text-[14.5px] text-mist">
                  {article.citations.map((cite) => (
                    <li key={cite.url}>
                      <a
                        href={cite.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent-soft underline-offset-2 hover:underline"
                      >
                        {cite.label}
                      </a>
                      <span className="text-mist-2">
                        {" "}
                        · checked {cite.checked}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>

              {related.length > 0 ? (
                <section
                  id="related-services"
                  aria-labelledby="related-services-heading"
                  className="space-y-4 border-t border-line pt-12"
                >
                  <h2
                    id="related-services-heading"
                    className="text-[1.2rem] font-semibold text-white"
                  >
                    Related Buildaze services
                  </h2>
                  <ul className="flex flex-wrap gap-3">
                    {related.map((service) =>
                      service ? (
                        <li key={service.id}>
                          <Link
                            href={getServicePath(service)}
                            className="inline-flex rounded-full border border-line px-4 py-2 text-[14px] text-mist transition-colors hover:border-accent hover:text-white"
                          >
                            {service.shortName || service.name}
                          </Link>
                        </li>
                      ) : null,
                    )}
                  </ul>
                </section>
              ) : null}

              <section
                aria-labelledby="article-cta-heading"
                className="rounded-xl border border-line bg-white/[0.03] px-6 py-8 md:px-8 md:py-10"
              >
                <h2
                  id="article-cta-heading"
                  className="text-[1.35rem] font-semibold tracking-tight text-white"
                >
                  {article.cta.heading}
                </h2>
                <p className="mt-3 max-w-[560px] text-[15.5px] leading-relaxed text-mist">
                  {article.cta.body}
                </p>
                <div className="mt-6">
                  <MagneticButton
                    href={article.cta.href}
                    analytics={`resource-cta-${article.id}`}
                  >
                    {article.cta.label}
                  </MagneticButton>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
