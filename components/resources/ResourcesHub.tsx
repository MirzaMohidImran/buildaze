import Link from "next/link";
import { Footer } from "@/components/sections/Footer";
import { Navbar } from "@/components/sections/Navbar";
import { resourceArticles } from "@/lib/data/resources";

export function ResourcesHub() {
  return (
    <>
      <Navbar />
      <main id="main" className="surface-ink">
        <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-20">
          <div aria-hidden className="build-grid fade-edges absolute inset-0" />
          <div className="relative mx-auto max-w-[1100px] px-5 md:px-10">
            <p className="t-label text-accent-soft">Buildaze Resources</p>
            <h1 className="text-h2 mt-4 max-w-[720px] tracking-tight text-white">
              Practical guides for Shopify growth and digital delivery.
            </h1>
            <p className="mt-5 max-w-[640px] text-[16.5px] leading-relaxed text-mist">
              Problem-solving articles that connect to a clear Buildaze service
              owner. No ranking guarantees — useful diagnosis and next steps.
            </p>

            <ul className="mt-14 space-y-6 md:mt-16">
              {resourceArticles.map((article) => (
                <li key={article.id}>
                  <Link
                    href={`/resources/${article.slug}`}
                    className="group block rounded-xl border border-line bg-white/[0.02] px-6 py-7 transition-colors hover:border-accent/50 md:px-8"
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
