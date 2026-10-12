"use client";

import { GoogleAnalytics as NextGoogleAnalytics } from "@next/third-parties/google";
import { GA_MEASUREMENT_ID, isGaEnabled } from "@/lib/seo/analytics";

/**
 * Loads gtag.js once via Next.js third-parties and tracks App Router
 * navigations as page_view. Do not also call gtag('config') elsewhere.
 */
export function GoogleAnalytics() {
  if (!isGaEnabled()) return null;
  return <NextGoogleAnalytics gaId={GA_MEASUREMENT_ID} />;
}
