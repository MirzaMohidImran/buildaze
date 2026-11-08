import { readFileSync, writeFileSync, mkdirSync } from "fs";

const html = readFileSync(
  "D:/Buildaze/incoming/Buildaze _ Design, Development & Digital Growth Agency.html",
  "utf8",
);
const start = html.indexOf(
  '<section style="padding:56px 64px;background:#F7F8F2;border-bottom:1px solid #E4E7DA">',
);
const end = html.indexOf("</footer>", start) + "</footer>".length;
if (start < 0 || end < 10) {
  console.error("markers", start, end);
  process.exit(1);
}

let slice = html.slice(start, end);
slice = slice.replace('<div class="faq"', '<div id="faq" class="faq"');

const footerAt = slice.indexOf("<footer");
let head = slice.slice(0, footerAt);
let foot = slice.slice(footerAt);

const swaps = [
  [">Home</a>", "/"],
  [">About</a>", "/about"],
  [">Work</a>", "/work"],
  [">Blog</a>", "/resources"],
  [">Process</a>", "/#process"],
  [">Contact</a>", "/contact"],
  [">FAQ</a>", "/#faq"],
  [">Design</a>", "/services/design"],
  [">Development</a>", "/services/development"],
  [">Artificial Intelligence</a>", "/services/ai-development"],
  [">Digital Marketing</a>", "/services/digital-marketing"],
  [">Shopify</a>", "/shopify-growth-agency"],
  [">Shopify SEO</a>", "/shopify-growth-agency/seo"],
  [">Conversion Rate Optimization</a>", "/shopify-growth-agency/conversion-rate-optimization"],
  [">Shopify Performance</a>", "/shopify-growth-agency/performance"],
  [">Store Design & Development</a>", "/shopify-growth-agency/store-design-development"],
  [">AI Voice Agents</a>", "/services/ai-development/voice-agent"],
  [">UI/UX Design</a>", "/services/design/ui-ux-design"],
  [">Shopify Theme</a>", "/#products"],
  [">Shopify App</a>", "/#products"],
  [">Custom Chatbot</a>", "/#products"],
  [">Custom Voice Agents</a>", "/#products"],
  [">Privacy Policy</a>", "/privacy-policy"],
  [">Website Terms</a>", "/terms-of-use"],
  [">Cookie Policy</a>", "/cookie-policy"],
  [">LinkedIn", "https://www.linkedin.com/company/buildaze"],
  [">Instagram", "https://www.instagram.com/buildaze"],
  [">Facebook", "https://www.facebook.com/people/Buildaze/61590512365408/"],
  [">Clutch", "https://clutch.co/profile/buildaze"],
];

foot = foot.replace(
  'href="#" style="font-family:\'Anton\',Impact,\'Arial Narrow\',sans-serif;font-weight:400;font-size:30px',
  'href="/" style="font-family:\'Anton\',Impact,\'Arial Narrow\',sans-serif;font-weight:400;font-size:30px',
);

for (const [label, href] of swaps) {
  const i = foot.indexOf(label);
  if (i < 0) {
    console.log("MISS", label);
    continue;
  }
  const from = foot.lastIndexOf('href="#"', i);
  if (from < 0 || i - from > 600) {
    console.log("NO HREF", label);
    continue;
  }
  foot = `${foot.slice(0, from)}href="${href}"${foot.slice(from + 'href="#"'.length)}`;
}

slice = head + foot;
slice = slice.replace(
  'href="#" style="display:inline-block;background:#151713;color:#F7F8F2;padding:20px 40px',
  'href="#inquiry" style="display:inline-block;background:#151713;color:#F7F8F2;padding:20px 40px',
);
slice = slice.replace(
  '<section style="padding:100px 64px;background:#EEF1E2">',
  '<section id="inquiry" style="padding:100px 64px;background:#EEF1E2">',
);

mkdirSync("components/home", { recursive: true });
writeFileSync(
  "components/home/incoming-markup.ts",
  `export const incomingHomeMarkup = ${JSON.stringify(slice)};\n`,
);
console.log("bytes", slice.length);
