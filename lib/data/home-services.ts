/**
 * Homepage service presentation — derived from primary serviceCategories
 * so nav, hub and homepage cannot drift.
 */

import { serviceCategories } from "./services";

export interface HomeServiceCard {
  id: string;
  name: string;
  description: string;
  examples: string[];
}

/** Homepage order matches primary categories: Design → Development → AI → Marketing → Shopify */
export const homeServiceOrder: HomeServiceCard[] = serviceCategories.map(
  (service) => ({
    id: service.id,
    name: service.name,
    description: service.description,
    examples: service.capabilities,
  }),
);

/** Featured case study ids for the homepage Selected Work carousel. */
export const featuredWorkIds = [
  "support-copilot",
  "shopify-performance",
  "catalog-intelligence",
] as const;
