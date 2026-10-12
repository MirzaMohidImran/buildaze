/**
 * Google Analytics 4 measurement ID (public by design).
 * Override with NEXT_PUBLIC_GA_MEASUREMENT_ID; set to empty string to disable.
 */
export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID === undefined
    ? "G-SXMYZ684LN"
    : process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export function isGaEnabled(): boolean {
  return Boolean(GA_MEASUREMENT_ID && GA_MEASUREMENT_ID.startsWith("G-"));
}
