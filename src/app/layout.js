import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CrispFlows | Tijd voor wat echt telt",
  description: "Bespaar uren per week met slimme AI-automatisering. Voor hoveniers en content agencies.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
