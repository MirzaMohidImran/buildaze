import { safeJsonLd } from "@/lib/seo/jsonld";

/** Server-safe JSON-LD script tag. Escapes `<` to prevent XSS via injected content. */
export function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: safeJsonLd(data) }}
    />
  );
}
