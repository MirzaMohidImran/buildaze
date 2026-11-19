import Link from "next/link";
import type { ServiceBodyInline, ServiceFaqAnswerPart } from "@/lib/data/services";

type Inline = ServiceBodyInline | ServiceFaqAnswerPart;

export function ServiceRichText({
  parts,
  className,
}: {
  parts: Inline[];
  className?: string;
}) {
  return (
    <span className={className}>
      {parts.map((part, i) => {
        if (typeof part === "string") {
          return <span key={i}>{part}</span>;
        }
        return (
          <Link
            key={i}
            href={part.href}
            className="text-accent-soft underline-offset-2 transition-colors hover:text-white hover:underline"
          >
            {part.label}
          </Link>
        );
      })}
    </span>
  );
}
