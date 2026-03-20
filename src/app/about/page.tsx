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
          I operate in a specific kind of situation: B2B SaaS companies, typically in the $10M–$75M range, where AI capability is real but commercial infrastructure has not converted it into revenue quality or margin expansion. The product may be working. The operating model is not. That is usually when boards and CEOs realize they do not need more AI activity. They need an operating reset.
        </p>
      </div>

      {/* Two re-foundings */}
      <div className="mt-16 border-t border-border pt-8">
        <div className="space-y-6 text-base leading-relaxed">
          <p className="font-medium">
            Two re-foundings, same pattern.
          </p>
          <p>
            At iAdvize, I reset an 18-product portfolio around one vertical AI agent, built AI revenue from $0 to $10M+ ARR in 24 months, and compressed the sales cycle from ~9 months to ~60 days.
          </p>
          <p>
            At Directly, I took over as CEO at the start of the pandemic with obligations exceeding cash, rebuilt the cost architecture, sustained 22%+ EBITDA, and led the asset sale to a PE-backed portfolio company. AI drove ~50% of EBITDA at exit.
          </p>
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
