interface SectionLabelProps {
  index: string;
  label: string;
  className?: string;
}

/** Editorial mono section marker: blue node + index + label. Part of the Build Grid language. */
export function SectionLabel({ index, label, className = "" }: SectionLabelProps) {
  return (
    <p className={`t-label flex items-center gap-3 text-mist-2 ${className}`}>
      <span aria-hidden className="inline-block h-1.5 w-1.5 bg-accent" />
      <span className="text-accent-soft">{index}</span>
      <span aria-hidden className="inline-block h-px w-8 bg-line-strong" />
      {label}
    </p>
  );
}
