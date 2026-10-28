/**
 * Lighthouse via chrome-launcher (bundled with lighthouse).
 */
import { mkdir, writeFile } from "fs/promises";
import path from "path";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const lighthouseMod = require("lighthouse");
const lighthouse = lighthouseMod.default || lighthouseMod;
const chromeLauncher = require("chrome-launcher");

const baseUrl = process.argv[2] || "http://127.0.0.1:3001";
const outDir = path.resolve("docs/ui-audit/lighthouse");

const pages = [
  { slug: "home", path: "/" },
  { slug: "services", path: "/services" },
  { slug: "work", path: "/work" },
  { slug: "about", path: "/about" },
  { slug: "contact", path: "/contact" },
  { slug: "resources", path: "/resources" },
  { slug: "voice-agent", path: "/voice-agent" },
  { slug: "shopify", path: "/shopify-growth-agency" },
];

function scoreOf(categories, key) {
  const c = categories?.[key];
  return c?.score == null ? null : Math.round(c.score * 100);
}

async function runOne(url, formFactor, port) {
  const result = await lighthouse(url, {
    port,
    output: "json",
    logLevel: "error",
    formFactor,
    screenEmulation:
      formFactor === "desktop"
        ? {
            mobile: false,
            width: 1350,
            height: 940,
            deviceScaleFactor: 1,
            disabled: false,
          }
        : undefined,
    onlyCategories: ["performance", "accessibility", "best-practices", "seo"],
  });
  const lhr = result.lhr;
  return {
    url,
    formFactor,
    scores: {
      performance: scoreOf(lhr.categories, "performance"),
      accessibility: scoreOf(lhr.categories, "accessibility"),
      bestPractices: scoreOf(lhr.categories, "best-practices"),
      seo: scoreOf(lhr.categories, "seo"),
    },
    audits: {
      "first-contentful-paint": lhr.audits["first-contentful-paint"]?.displayValue,
      "largest-contentful-paint": lhr.audits["largest-contentful-paint"]?.displayValue,
      "cumulative-layout-shift": lhr.audits["cumulative-layout-shift"]?.displayValue,
      "total-blocking-time": lhr.audits["total-blocking-time"]?.displayValue,
      "speed-index": lhr.audits["speed-index"]?.displayValue,
      "unused-javascript": lhr.audits["unused-javascript"]?.displayValue,
      "unused-css-rules": lhr.audits["unused-css-rules"]?.displayValue,
      "font-display": lhr.audits["font-display"]?.score,
      "color-contrast": lhr.audits["color-contrast"]?.score,
      "heading-order": lhr.audits["heading-order"]?.score,
      "image-alt": lhr.audits["image-alt"]?.score,
      "tap-targets": lhr.audits["tap-targets"]?.score,
      "meta-description": lhr.audits["meta-description"]?.score,
      "link-name": lhr.audits["link-name"]?.score,
    },
  };
}

async function main() {
  await mkdir(outDir, { recursive: true });

  const chrome = await chromeLauncher.launch({
    chromeFlags: ["--headless", "--no-sandbox", "--disable-gpu"],
  });

  const summary = [];
  try {
    for (const page of pages) {
      const url = `${baseUrl}${page.path}`;
      console.log(`Lighthouse ${page.slug}…`);
      const mobile = await runOne(url, "mobile", chrome.port);
      console.log(
        `  mobile P${mobile.scores.performance} A${mobile.scores.accessibility} BP${mobile.scores.bestPractices} SEO${mobile.scores.seo}`,
      );
      const desktop = await runOne(url, "desktop", chrome.port);
      console.log(
        `  desktop P${desktop.scores.performance} A${desktop.scores.accessibility} BP${desktop.scores.bestPractices} SEO${desktop.scores.seo}`,
      );
      summary.push({ slug: page.slug, mobile, desktop });
    }
  } finally {
    await chrome.kill();
  }

  await writeFile(
    path.join(outDir, "summary.json"),
    JSON.stringify({ baseUrl, generatedAt: new Date().toISOString(), pages: summary }, null, 2),
  );
  console.log(`Lighthouse summary → ${outDir}/summary.json`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
