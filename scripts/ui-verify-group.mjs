/**
 * Focused axe + screenshots for a STEP 2 group.
 * Usage: node scripts/ui-verify-group.mjs <groupId> [baseUrl] [page,page,...]
 */
import { mkdir, writeFile } from "fs/promises";
import path from "path";
import { chromium } from "playwright";
import { AxeBuilder } from "@axe-core/playwright";

const groupId = process.argv[2] || "g1";
const baseUrl = process.argv[3] || "http://127.0.0.1:3001";
const pageList = (process.argv[4] || "home:/,voice-agent:/voice-agent,about:/about,shopify:/shopify-growth-agency")
  .split(",")
  .map((entry) => {
    const [slug, ...rest] = entry.split(":");
    return { slug, path: rest.join(":") || "/" };
  });

const outDir = path.resolve(`docs/ui-audit/verify-${groupId}`);
const widths = [375, 1280];

async function waitForServer(url, attempts = 40) {
  for (let i = 0; i < attempts; i++) {
    try {
      const res = await fetch(url, { redirect: "manual" });
      if (res.status > 0) return;
    } catch {
      // retry
    }
    await new Promise((r) => setTimeout(r, 500));
  }
  throw new Error(`Server not reachable at ${url}`);
}

async function main() {
  await mkdir(path.join(outDir, "screenshots"), { recursive: true });
  await waitForServer(baseUrl);

  const browser = await chromium.launch({ headless: true });
  const pages = [];

  for (const pageDef of pageList) {
    const pageResult = { slug: pageDef.slug, path: pageDef.path, byWidth: {} };
    for (const width of widths) {
      const context = await browser.newContext({
        viewport: { width, height: width <= 768 ? 812 : 900 },
        reducedMotion: "reduce",
      });
      const page = await context.newPage();
      await page.goto(`${baseUrl}${pageDef.path}`, {
        waitUntil: "networkidle",
        timeout: 90000,
      });
      await page.waitForTimeout(500);
      await page.screenshot({
        path: path.join(outDir, "screenshots", `${pageDef.slug}-${width}.png`),
        fullPage: width === 1280,
      });

      if (width === 1280 || (width === 375 && pageDef.slug === "home")) {
        const results = await new AxeBuilder({ page })
          .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
          .analyze();
        pageResult.byWidth[width] = {
          violations: results.violations.map((v) => ({
            id: v.id,
            impact: v.impact,
            nodes: v.nodes.length,
            samples: v.nodes.slice(0, 2).map((n) => ({
              target: n.target,
              failureSummary: n.failureSummary,
            })),
          })),
          passes: results.passes.length,
        };
        console.log(
          `${pageDef.slug}@${width}: ${results.violations.length} violations (${results.violations.map((v) => `${v.id}:${v.nodes.length}`).join(", ") || "none"})`,
        );
      }
      await context.close();
    }
    pages.push(pageResult);
  }

  await writeFile(
    path.join(outDir, "axe-results.json"),
    JSON.stringify({ groupId, baseUrl, generatedAt: new Date().toISOString(), pages }, null, 2),
  );
  await browser.close();
  console.log(`Wrote ${outDir}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
