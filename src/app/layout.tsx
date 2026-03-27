import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const sans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
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
  title: {
    default: "Mike de la Cruz \u2014 AI \u2192 EBITDA",
    template: "%s",
  },
  description:
    "B2B Vertical SaaS CEO. Two AI-led re-foundings. $0 to $10M AI ARR in 24 months. 22% EBITDA margin. Asset sale to a PE-backed portfolio company.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" },
    ],
  },
  openGraph: {
    title: "Mike de la Cruz \u2014 AI \u2192 EBITDA",
    description:
      "B2B Vertical SaaS CEO. Two AI-led re-foundings. $0 to $10M AI ARR in 24 months. 22% EBITDA margin. Asset sale to a PE-backed portfolio company.",
    url: "https://www.mikedelacruz.com",
    type: "website",
    images: [
      {
        url: "https://www.mikedelacruz.com/og-image-final-v5.png",
        width: 1200,
        height: 630,
        alt: "Mike de la Cruz \u2014 AI \u2192 EBITDA",
      },
    ],
  },
};

const authorSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mike de la Cruz",
  url: "https://www.mikedelacruz.com",
  jobTitle: "B2B Vertical SaaS CEO | AI-to-EBITDA Operator",
  description:
    "B2B Vertical SaaS CEO. Two AI-led re-foundings. $0 to $10M AI ARR in 24 months. 22% EBITDA margin. Asset sale to a PE-backed portfolio company.",
  sameAs: ["https://www.linkedin.com/in/mikejdelacruz"],
  alumniOf: [
    { "@type": "Organization", name: "Harvard Business School" },
    { "@type": "Organization", name: "Yale University" },
  ],
  knowsAbout: [
    "AI to EBITDA conversion",
    "SaaS to AI re-founding",
    "Outcome-based pricing for AI agents",
    "AI commercial model",
    "AI operating cadence",
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
