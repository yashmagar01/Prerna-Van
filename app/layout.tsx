import type { Metadata } from "next";
import { Inter, Lora, Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";

// ponytail: same three families as the prototype <link>; self-hosted via next/font, readable system fallbacks if fonts fail.
const body = Inter({ subsets: ["latin"], variable: "--font-body" });
const display = Lora({ subsets: ["latin"], variable: "--font-display" });
const marathi = Noto_Sans_Devanagari({
  subsets: ["devanagari", "latin"],
  variable: "--font-mr",
});

export const metadata: Metadata = {
  title: "Prerna Tirth — Inspire. Connect. Transform.",
  description:
    "Prerna Tirth (प्रेरणा तीर्थ) is an open, community-driven initiative centered on inspiration, human connection, nature, learning and personal growth — set at Maitri Hills, near Kadus–Rajgurunagar, Pune district. Prototype V0.1.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${body.variable} ${display.variable} ${marathi.variable}`}
      >
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
