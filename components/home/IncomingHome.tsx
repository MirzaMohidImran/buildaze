import { Anton, Inter } from "next/font/google";
import { incomingHomeMarkup } from "./incoming-markup";
import { IncomingHomeEnhance } from "./IncomingHomeEnhance";
import "./incoming-home.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const inter = Inter({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-incoming",
  display: "swap",
});

/** Homepage below the preserved hero. Markup matches the incoming HTML file. */
export function IncomingHome() {
  return (
    <div className={`incoming-home ${anton.variable} ${inter.variable}`}>
      <div dangerouslySetInnerHTML={{ __html: incomingHomeMarkup }} />
      <IncomingHomeEnhance />
    </div>
  );
}
