import { mkdir, writeFile } from "fs/promises";
import path from "path";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const lighthouse = require("lighthouse").default || require("lighthouse");
const chromeLauncher = require("chrome-launcher");

const baseUrl = process.argv[2] || "http://127.0.0.1:3001";
const outDir = path.resolve("docs/ui-audit/verify-g2");

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
        ? { mobile: false, width: 1350, height: 940, deviceScaleFactor: 1, disabled: false }
        : undefined,
    onlyCategories: ["performance", "accessibility", "best-practices", "seo"],
  });
  const lhr = result.lhr;
  return {
    formFactor,
    scores: {
      performance: scoreOf(lhr.categories, "performance"),
      accessibility: scoreOf(lhr.categories, "accessibility"),
      bestPractices: scoreOf(lhr.categories, "best-practices"),
      seo: scoreOf(lhr.categories, "seo"),
    },
    audits: {
      FCP: lhr.audits["first-contentful-paint"]?.displayValue,
      LCP: lhr.audits["largest-contentful-paint"]?.displayValue,
      TBT: lhr.audits["total-blocking-time"]?.displayValue,
      CLS: lhr.audits["cumulative-layout-shift"]?.displayValue,
      SI: lhr.audits["speed-index"]?.displayValue,
      "color-contrast": lhr.audits["color-contrast"]?.score,
    },
  };
}

async function main() {
  await mkdir(outDir, { recursive: true });
  const chrome = await chromeLauncher.launch({
    chromeFlags: ["--headless", "--no-sandbox", "--disable-gpu"],
  });
  try {
    const url = `${baseUrl}/`;
    console.log("LH home mobile…");
    const mobile = await runOne(url, "mobile", chrome.port);
    console.log(mobile);
    console.log("LH home desktop…");
    const desktop = await runOne(url, "desktop", chrome.port);
    console.log(desktop);
    await writeFile(
      path.join(outDir, "lighthouse-home.json"),
      JSON.stringify(
        { baseUrl, generatedAt: new Date().toISOString(), before: { mobilePerf: 29, desktopPerf: 26, mobileLcp: "10.1 s", desktopLcp: "9.6 s" }, after: { mobile, desktop } },
        null,
        2,
      ),
    );
  } finally {
    await chrome.kill();
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
