import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Operator — Mike de la Cruz | B2B Vertical SaaS CEO",
  description:
    "B2B Vertical SaaS CEO. Two AI-led re-foundings. $0 to $10M+ AI ARR in 24 months. 22%+ EBITDA margin. Asset sale to a PE-backed portfolio company.",
  alternates: { canonical: "https://www.mikedelacruz.com/about" },
  openGraph: {
    title: "Operator — Mike de la Cruz | B2B Vertical SaaS CEO",
    description: "B2B Vertical SaaS CEO. iAdvize: $0 to $10M+ AI ARR in 24 months. Directly: 22%+ EBITDA margin, asset sale to a PE-backed portfolio company.",
    url: "https://www.mikedelacruz.com/about",
    type: "profile",
  },
};

export default function About() {
  return (
    <div className="max-w-2xl mx-auto px-6 md:px-12 py-16">
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
        Operator
      </h1>

      <div className="mt-6 w-48 h-56 overflow-hidden">
        <Image
          src="/mike-de-la-cruz.jpg"
          alt="Mike de la Cruz"
          width={384}
          height={448}
          className="object-cover object-top w-full h-full"
          priority
        />
      </div>

      {/* Opening */}
      <p className="mt-10 text-base leading-relaxed">
        B2B Vertical SaaS CEO. I go into B2B SaaS companies where the AI works but the commercial model hasn&apos;t caught up, and rebuild the operating infrastructure so AI shows up in EBITDA. Two rebuilds under live operating pressure. I&apos;m an operator that has lived inside the chaos of SaaS rebuilds, and created AI businesses out of it.
      </p>
      <p className="mt-4 text-base leading-relaxed">
        Positioning: Portfolio Company CEO or Operating Partner for PE-backed B2B vertical SaaS.
      </p>

      {/* Directly */}
      <div className="mt-10 border-t border-border pt-8">
        <h2 className="text-xl font-semibold tracking-tight">Directly</h2>
        <p className="mt-4 text-base leading-relaxed">
          Grew ARR from $3.7M to $8M+. Promoted to CEO when obligations exceeded cash. Raised funding 19 days after the pandemic was declared. Rebuilt the cost architecture, sustained 22%+ EBITDA margin, and led the asset sale to a PE-backed portfolio company. The Instant Answers AI contributing an estimated 50% of EBITDA at exit. Enterprise customers included Microsoft, Airbnb, AT&amp;T, and SAP.
        </p>
      </div>

      {/* iAdvize */}
      <div className="mt-10 border-t border-border pt-8">
        <h2 className="text-xl font-semibold tracking-tight">iAdvize</h2>
        <p className="mt-4 text-base leading-relaxed">
          Led the operational restructure alongside the CEO. Reset an 18-product portfolio to two: one vertical AI agent, one SaaS add-on. Built AI revenue from $0 to $10M+ ARR in 24 months. Compressed acquisition cycles from roughly 9 months to 60 days. Trial-to-paid conversion tripled.
        </p>
      </div>

      {/* The pattern */}
      <div className="mt-10 border-t border-border pt-8">
        <h2 className="text-xl font-semibold tracking-tight">The pattern</h2>
        <p className="mt-4 text-base leading-relaxed">
          In both cases, the AI worked before the operating model did. Financial results followed once pricing, commercial infrastructure, and operating cadence caught up. That is where I operate: where AI capability is real but has not yet translated to durable revenue, margin expansion, and exit value.
        </p>
      </div>

      {/* CTAs */}
      <div className="mt-10 flex gap-4">
        <Link
          href="/results"
          className="text-sm font-medium bg-ink text-paper border-2 border-ink px-6 py-3 inline-block hover:bg-transparent hover:text-ink transition-colors"
        >
          Portfolio Results
        </Link>
        <div className="border border-border px-6 py-3 inline-flex items-center">
          <a
            href="mailto:mike@mikedelacruz.com?subject=Operating%20model%20reset"
            className="text-sm hover:text-muted transition-colors"
          >
            mike@mikedelacruz.com
          </a>
        </div>
      </div>
    </div>
  );
}
