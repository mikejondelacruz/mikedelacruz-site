import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Mike de la Cruz — AI → EBITDA → Exit Value",
  description:
    "I rebuild $10–$75M SaaS companies where AI hasn't translated to EBITDA.",
  openGraph: {
    title: "Mike de la Cruz — AI → EBITDA → Exit Value",
    description:
      "I rebuild $10–$75M SaaS companies where AI hasn't translated to EBITDA.",
    url: "https://mikedelacruz.com",
    type: "website",
  },
};

const authorSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mike de la Cruz",
  url: "https://mikedelacruz.com",
  jobTitle: "AI SaaS Operator",
  description:
    "I rebuild $10–$75M SaaS companies where AI hasn't translated to EBITDA.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans bg-paper text-ink antialiased">
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
