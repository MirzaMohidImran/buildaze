import Link from "next/link";
import { Footer } from "@/components/sections/Footer";
import { Navbar } from "@/components/sections/Navbar";
import { resourceArticles } from "@/lib/data/resources";

export function ResourcesHub() {
  return (
    <>
      <Navbar />
      <main id="main" className="surface-ink">
        <section
          aria-labelledby="blog-hub-heading"
          className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-20"
        >
          <div aria-hidden className="build-grid fade-edges absolute inset-0" />
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 55% 50% at 50% 35%, rgba(37,99,235,0.14), transparent 70%)",
            }}
          />

          <div className="relative mx-auto flex max-w-[1100px] flex-col items-center px-5 text-center md:px-10">
            <nav aria-label="Breadcrumb" className="mb-10 w-full">
              <ol className="t-label flex flex-wrap items-center justify-center gap-2 text-mist-2">
                <li>
                  <Link href="/" className="transition-colors hover:text-white">
                    Home
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li className="text-accent-soft" aria-current="page">
                  Blog
                </li>
              </ol>
            </nav>

            <p className="t-label text-accent-soft">Buildaze Blog</p>
            <h1
              id="blog-hub-heading"
              className="text-h2 mx-auto mt-4 max-w-[720px] tracking-tight text-white"
            >
              Practical guides for Shopify growth and digital delivery.
            </h1>
            <p className="mx-auto mt-5 max-w-[640px] text-[16.5px] leading-relaxed text-mist">
              Problem-solving articles that connect to a clear Buildaze service
              owner. No ranking guarantees — useful diagnosis and next steps.
            </p>
          </div>

          <div className="relative mx-auto mt-14 max-w-[1100px] px-5 md:mt-16 md:px-10">
            <ul className="space-y-6">
              {resourceArticles.map((article) => (
                <li key={article.id}>
                  <Link
                    href={`/resources/${article.slug}`}
                    className="group block rounded-xl border border-line bg-white/[0.02] px-6 py-7 text-left transition-colors hover:border-accent/50 md:px-8"
                  >
                    <p className="t-label text-accent-soft">{article.cluster}</p>
                    <h2 className="mt-3 text-[1.35rem] font-semibold tracking-tight text-white group-hover:text-accent-soft md:text-[1.5rem]">
                      {article.h1}
                    </h2>
                    <p className="mt-3 max-w-[720px] text-[15.5px] leading-relaxed text-mist">
                      {article.excerpt}
                    </p>
                    <p className="mt-4 text-[13.5px] text-mist-2">
                      Published {article.publishedAt}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
