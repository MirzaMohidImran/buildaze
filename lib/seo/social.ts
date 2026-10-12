import type { Metadata } from "next";
import { site } from "@/lib/data/site";

/** Default raster Open Graph / Twitter preview (1200×630). */
export const DEFAULT_OG_IMAGE = "/og/default-og.png";
export const DEFAULT_OG_WIDTH = 1200;
export const DEFAULT_OG_HEIGHT = 630;

export function absoluteUrl(pathOrUrl: string): string {
  if (pathOrUrl.startsWith("http://") || pathOrUrl.startsWith("https://")) {
    return pathOrUrl;
  }
  const path = pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`;
  return `${site.url}${path}`;
}

export function ogImages(
  imagePath: string = DEFAULT_OG_IMAGE,
  alt: string = `${site.name} — ${site.tagline}`,
): NonNullable<Metadata["openGraph"]>["images"] {
  return [
    {
      url: absoluteUrl(imagePath),
      width: DEFAULT_OG_WIDTH,
      height: DEFAULT_OG_HEIGHT,
      alt,
    },
  ];
}

export function twitterImages(imagePath: string = DEFAULT_OG_IMAGE): string[] {
  return [absoluteUrl(imagePath)];
}
