import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CrispFlows | Tijd voor wat echt telt",
  description: "Bespaar uren per week met slimme AI-automatisering. Voor hoveniers en content agencies.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <head>
        <Script
          id="vtag-ai-js"
          src="https://r2.leadsy.ai/tag.js"
          data-pid="1bLiejThlewdQIfDH"
          data-version="062024"
          strategy="beforeInteractive"
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
