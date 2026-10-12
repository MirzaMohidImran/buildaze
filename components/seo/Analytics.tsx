"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Maps data-analytics attribute clicks to GA4 custom events when gtag is present
 * (loaded once by GoogleAnalytics). Does not call gtag('config') or send page_view.
 * Never sends form field contents.
 */
export function Analytics() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const el = target?.closest?.("[data-analytics]") as HTMLElement | null;
      if (!el) return;

      const name = el.getAttribute("data-analytics");
      if (!name) return;

      const payload = {
        event: "buildaze_interaction",
        event_name: name,
      };

      if (typeof window.gtag === "function") {
        window.gtag("event", name, { event_category: "engagement" });
      }

      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push(payload);
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
