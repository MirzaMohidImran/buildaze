import sharp from "sharp";
import { mkdirSync, writeFileSync } from "fs";

mkdirSync("public/og", { recursive: true });

function card({ title1, title2, subtitle }) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#151713"/>
      <stop offset="55%" stop-color="#1c1f18"/>
      <stop offset="100%" stop-color="#23261F"/>
    </linearGradient>
    <radialGradient id="glow" cx="78%" cy="28%" r="45%">
      <stop offset="0%" stop-color="#C8F542" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="#C8F542" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>
  <g opacity="0.18" stroke="#C8F542" stroke-width="1">
    <path d="M0 90 H1200 M0 180 H1200 M0 270 H1200 M0 360 H1200 M0 450 H1200 M0 540 H1200"/>
    <path d="M120 0 V630 M240 0 V630 M360 0 V630 M480 0 V630 M600 0 V630 M720 0 V630 M840 0 V630 M960 0 V630 M1080 0 V630"/>
  </g>
  <rect x="72" y="72" width="10" height="10" fill="#C8F542"/>
  <text x="96" y="82" fill="#C8F542" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="22" letter-spacing="3">BUILDAZE</text>
  <text x="72" y="250" fill="#ffffff" font-family="Arial, sans-serif" font-size="64" font-weight="600">${title1}</text>
  <text x="72" y="325" fill="#ffffff" font-family="Arial, sans-serif" font-size="64" font-weight="600">${title2}</text>
  <text x="72" y="400" fill="#C9CDBE" font-family="Arial, sans-serif" font-size="28">${subtitle}</text>
  <rect x="72" y="470" width="220" height="48" fill="#C8F542"/>
  <text x="92" y="502" fill="#151713" font-family="Arial, sans-serif" font-size="22" font-weight="500">buildaze.com</text>
</svg>`;
}

async function writePng(path, svg) {
  const buf = await sharp(Buffer.from(svg)).png().toBuffer();
  writeFileSync(path, buf);
  console.log("wrote", path, buf.length);
}

await writePng(
  "public/og/default-og.png",
  card({
    title1: "Design, Development",
    title2: "and Digital Growth",
    subtitle: "Websites · Shopify · AI · Marketing",
  }),
);

await writePng(
  "public/og/voice-agent-og.png",
  card({
    title1: "Custom AI Voice Agents",
    title2: "for Your Business",
    subtitle: "Routine calls · Lead intake · Human handoff",
  }),
);

await writePng(
  "public/og/shopify-cro-og.png",
  card({
    title1: "Shopify Conversion",
    title2: "Rate Optimization",
    subtitle: "Funnel diagnosis · Product and cart fixes · CRO backlog",
  }),
);

await writePng(
  "public/og/ai-development-og.png",
  card({
    title1: "AI Development",
    title2: "for Your Business",
    subtitle: "Apps · Chatbots · RAG · Voice · Automation",
  }),
);
