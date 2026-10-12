/** Official Buildaze marks from /public/Logo. */
export function Logo({
  className = "",
  variant = "default",
  tone = "dark",
}: {
  className?: string;
  /** `mark` = favicon icon; `default` = footer/full wordmark; `horizontal` = light-bg wordmark. */
  variant?: "default" | "mark" | "horizontal";
  /** `light` surfaces use dark mark / light-background wordmarks. */
  tone?: "dark" | "light";
}) {
  if (variant === "mark") {
    return (
      <img
        src={tone === "light" ? "/Logo/logo-1-dark.svg" : "/Logo/logo-1.svg"}
        alt="Buildaze"
        width={56}
        height={56}
        className={`h-12 w-12 shrink-0 object-contain md:h-14 md:w-14 ${className}`}
      />
    );
  }

  if (variant === "horizontal" || tone === "light") {
    return (
      <img
        src="/Logo/buildaze-logo-horizontal.svg"
        alt="Buildaze"
        width={200}
        height={56}
        className={`h-11 w-auto max-h-11 max-w-[200px] object-contain object-left md:h-12 md:max-h-12 md:max-w-[220px] ${className}`}
      />
    );
  }

  // Horizontal wordmark for dark backgrounds (white + blue)
  return (
    <img
      src="/Logo/buildaze-logo-footer.svg"
      alt="Buildaze"
      width={200}
      height={56}
      className={`h-11 w-auto max-h-11 max-w-[200px] object-contain object-left md:h-12 md:max-h-12 md:max-w-[220px] ${className}`}
    />
  );
}
