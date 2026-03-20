import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Mike de la Cruz — AI Re-founder, Directly & iAdvize",
  description:
    "Two enterprise CX platforms rebuilt to AI-first under live operating pressure. Previously Hewlett Packard Enterprise, SAP, Siebel.",
  openGraph: {
    title: "About Mike de la Cruz — AI Re-founder, Directly & iAdvize",
    description: "Two enterprise CX platforms rebuilt to AI-first under live operating pressure.",
    url: "https://www.mikedelacruz.com/about",
    type: "profile",
  },
};

export default function About() {
  return (
    <div className="max-w-2xl mx-auto px-6 md:px-12 py-16">
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
        About
      </h1>

      <div className="mt-8 w-48 h-56 overflow-hidden">
        <Image
          src="/mike-de-la-cruz.jpg"
          alt="Mike de la Cruz"
          width={384}
          height={448}
          className="object-cover object-top w-full h-full"
          priority
        />
      </div>

      {/* Narrative */}
      <div className="mt-12 space-y-6 text-base leading-relaxed">
        <p>
          I rebuild $10–$75M B2B SaaS companies by turning AI into EBITDA.
        </p>
        <p>
          I&apos;ve led two enterprise SaaS rebuilds under live operating pressure.
        </p>
        <p>
          At Directly, AI became a major driver of EBITDA in an outcome-based model and part of the value creation behind the sale to a PE-backed portfolio company.
        </p>
        <p>
          At iAdvize, I reset an 18-product portfolio to 2 and built an AI revenue engine from $0 to $10M+ ARR in 24 months.
        </p>
        <p>
          In both cases, the AI worked before the operating model did. Financial results followed once pricing, packaging, and GTM caught up.
        </p>
        <p>
          That is where I operate: where AI capability is real, but the company has not yet converted it into revenue quality, margin expansion, and exit-grade fundamentals.
        </p>
      </div>

      {/* Where I operate */}
      <div className="mt-12 space-y-6 text-base leading-relaxed">
        <p>
          I operate in a specific kind of situation: B2B SaaS companies, typically in the $10M–$75M range, where AI capability is real but growth, margins, and GTM have not caught up. The product may be working. The commercial infrastructure is not. That is usually when boards and CEOs realize they do not need more AI activity. They need an operating reset.
        </p>
      </div>

      {/* Selected operating results */}
      <div className="mt-16 border-t border-border pt-8">
        <h2 className="text-sm font-mono uppercase tracking-widest text-muted mb-8">
          Selected operating results
        </h2>

        <div className="space-y-10">
          <div>
            <h3 className="font-medium">iAdvize</h3>
            <p className="text-sm text-muted">President &amp; Chief Strategy Officer</p>
            <ul className="mt-3 space-y-1 text-sm leading-relaxed list-disc list-inside">
              <li>Reset an 18-product portfolio to <strong>2</strong>: one vertical AI agent and one SaaS product</li>
              <li>Built AI revenue from $0 to <strong>$10M+ ARR</strong> in 24 months</li>
              <li>Reduced the customer acquisition cycle from ~9 months to <strong>~60 days</strong> and <strong>tripled</strong> trial-to-paid conversion</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium">Directly</h3>
            <p className="text-sm text-muted">CEO</p>
            <ul className="mt-3 space-y-1 text-sm leading-relaxed list-disc list-inside">
              <li>Took over at the start of the pandemic with obligations exceeding cash and rebuilt the cost architecture</li>
              <li>Sustained <strong>22%+ EBITDA</strong> and led the asset sale to a PE-backed portfolio company</li>
              <li>AI drove <strong>~50% of EBITDA</strong> at exit</li>
            </ul>
          </div>

          <div className="text-sm text-muted">
            <p>Previously: Hewlett Packard Enterprise, SAP, Arago, Siebel.</p>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <a
          href="mailto:mikejdelacruz@gmail.com"
          className="text-sm font-medium border border-ink px-6 py-3 inline-block hover:bg-ink hover:text-paper transition-colors"
        >
          Let's Talk
        </a>
      </div>
    </div>
  );
}
