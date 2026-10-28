/**
 * STEP 1 audit harness — screenshots + axe (no source edits).
 * Usage: node scripts/ui-audit.mjs [baseUrl]
 */
import { createRequire } from "module";
import { mkdir, writeFile } from "fs/promises";
import path from "path";
import { chromium } from "playwright";
import { AxeBuilder } from "@axe-core/playwright";

const require = createRequire(import.meta.url);
const baseUrl = process.argv[2] || "http://127.0.0.1:3000";
const outDir = path.resolve("docs/ui-audit");
const widths = [375, 768, 1280, 1920];

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

async function waitForServer(url, attempts = 60) {
  for (let i = 0; i < attempts; i++) {
    try {
      const res = await fetch(url, { redirect: "manual" });
      if (res.status > 0) return;
    } catch {
      // retry
    }
    await new Promise((r) => setTimeout(r, 1000));
  }
  throw new Error(`Server not reachable at ${url}`);
}

async function main() {
  await mkdir(path.join(outDir, "screenshots"), { recursive: true });
  await waitForServer(baseUrl);

  const browser = await chromium.launch({ headless: true });
  const axeSummary = [];

  for (const pageDef of pages) {
    const pageAxe = { slug: pageDef.slug, path: pageDef.path, byWidth: {} };

    for (const width of widths) {
      const context = await browser.newContext({
        viewport: { width, height: width <= 768 ? 812 : 900 },
        deviceScaleFactor: 1,
        reducedMotion: "reduce",
      });
      const page = await context.newPage();
      const url = `${baseUrl}${pageDef.path}`;
      console.log(`Capture ${pageDef.slug} @ ${width} → ${url}`);

      await page.goto(url, { waitUntil: "networkidle", timeout: 90000 });
      await page.waitForTimeout(800);

      const shotPath = path.join(
        outDir,
        "screenshots",
        `${pageDef.slug}-${width}.png`,
      );
      await page.screenshot({ path: shotPath, fullPage: true });

      // axe once per page at 1280 (representative desktop)
      if (width === 1280) {
        const results = await new AxeBuilder({ page })
          .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
          .analyze();
        pageAxe.byWidth[width] = {
          violations: results.violations.map((v) => ({
            id: v.id,
            impact: v.impact,
            description: v.description,
            help: v.help,
            helpUrl: v.helpUrl,
            nodes: v.nodes.length,
            samples: v.nodes.slice(0, 3).map((n) => ({
              target: n.target,
              failureSummary: n.failureSummary,
            })),
          })),
          passes: results.passes.length,
          incomplete: results.incomplete.length,
        };
        console.log(
          `  axe: ${results.violations.length} violations, ${results.passes.length} passes`,
        );
      }

      // mobile axe at 375 for home + contact
      if (
        width === 375 &&
        (pageDef.slug === "home" || pageDef.slug === "contact")
      ) {
        const results = await new AxeBuilder({ page })
          .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
          .analyze();
        pageAxe.byWidth[width] = {
          violations: results.violations.map((v) => ({
            id: v.id,
            impact: v.impact,
            description: v.description,
            help: v.help,
            nodes: v.nodes.length,
            samples: v.nodes.slice(0, 3).map((n) => ({
              target: n.target,
              failureSummary: n.failureSummary,
            })),
          })),
          passes: results.passes.length,
          incomplete: results.incomplete.length,
        };
      }

      await context.close();
    }

    axeSummary.push(pageAxe);
  }

  await writeFile(
    path.join(outDir, "axe-results.json"),
    JSON.stringify({ baseUrl, generatedAt: new Date().toISOString(), pages: axeSummary }, null, 2),
  );

  await browser.close();
  console.log(`Done. Screenshots + axe → ${outDir}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
