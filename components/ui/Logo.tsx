/** Buildaze wordmark with the Build Grid node mark. */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <svg aria-hidden width="24" height="24" viewBox="0 0 24 24" fill="none">
        {/* modular build mark: three stacked blocks, top one active */}
        <rect x="3" y="15" width="18" height="5" stroke="rgba(255,255,255,0.5)" strokeWidth="1.4" />
        <rect x="5.5" y="9" width="13" height="5" stroke="rgba(255,255,255,0.8)" strokeWidth="1.4" />
        <rect x="8" y="3" width="8" height="5" fill="#2563EB" />
      </svg>
      <span className="text-[17px] font-semibold tracking-tight text-white">
        Buildaze
      </span>
    </span>
  );
}
