import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const sans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mike de la Cruz — AI → EBITDA → Exit Value",
  description:
    "I rebuild $10–$75M SaaS companies where AI hasn't translated to EBITDA.",
  openGraph: {
    title: "Mike de la Cruz — AI → EBITDA → Exit Value",
    description:
      "I rebuild $10–$75M SaaS companies where AI hasn't translated to EBITDA.",
    url: "https://www.mikedelacruz.com",
    type: "website",
  },
};

const authorSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mike de la Cruz",
  url: "https://www.mikedelacruz.com",
  jobTitle: "AI SaaS Operator",
  description:
    "I rebuild $10–$75M B2B SaaS companies by turning AI into EBITDA. Two enterprise CX platforms rebuilt to AI-first under live operating pressure.",
  sameAs: ["https://www.linkedin.com/in/mikejdelacruz"],
  alumniOf: [
    { "@type": "Organization", name: "Harvard Business School" },
    { "@type": "Organization", name: "Yale University" },
  ],
  knowsAbout: [
    "AI to EBITDA conversion",
    "SaaS to AI transition",
    "Outcome-based pricing",
    "AI agent pricing models",
    "AI SaaS retention",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable} font-sans`}>
      <body className="bg-paper text-ink antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(authorSchema) }}
        />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
