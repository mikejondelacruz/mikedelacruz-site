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

      {/* Narrative */}
      <div className="mt-12 space-y-6 text-base leading-relaxed">
        <p>
          I rebuild $10–$75M B2B SaaS companies by turning AI into EBITDA.
        </p>
        <p>
          I&apos;ve led two enterprise SaaS rebuilds to AI-first under live operating pressure.
        </p>
        <p>
          At Directly, AI became a major driver of EBITDA in an outcome-based model and a core part of the value creation behind the sale to a PE-backed portfolio company.
        </p>
        <p>
          At iAdvize, I rationalized an 18-product portfolio to 2 and built an AI revenue engine from $0 to $10M+ ARR in 24 months.
        </p>
        <p>
          In both, the AI worked before the business model did. Financial results followed once pricing, GTM, and packaging caught up.
        </p>
        <p>
          That gap is where I operate: where AI capability is real, but the company has not yet converted it into revenue quality, margin expansion, and exit-grade fundamentals.
        </p>
      </div>

      {/* Typical situation */}
      <div className="mt-16 bg-white border border-border rounded-lg p-6">
        <h2 className="text-sm font-mono uppercase tracking-widest text-muted mb-4">
          Typical situation
        </h2>
        <div className="space-y-2 text-base leading-relaxed">
          <p>$10–$75M ARR B2B SaaS company.</p>
          <p>AI capability exists, but margin has not moved.</p>
          <p>Growth is slowing. New logo velocity feels different.</p>
          <p>The board is asking whether the AI investment is translating into durable value.</p>
        </div>
        <a
          href="mailto:mikejdelacruz@gmail.com"
          className="text-sm font-medium border border-ink px-5 py-2 mt-6 inline-block hover:bg-ink hover:text-paper transition-colors"
        >
          Email Mike
        </a>
      </div>

      {/* The Playbook */}
      <div className="mt-16 border-t border-border pt-8">
        <h2 className="text-sm font-mono uppercase tracking-widest text-muted mb-6">
          The Playbook
        </h2>
        <ol className="space-y-3">
          {[
            "One high-value workflow",
            "AI that improves customer EBITDA",
            "Consumption pricing tied to value",
            "GTM around continuous value creation",
            "Operating cadence on AI performance + margins",
          ].map((item, i) => (
            <li key={i} className="flex gap-3 text-base">
              <span className="text-muted font-mono text-sm mt-0.5">{i + 1}/</span>
              {item}
            </li>
          ))}
        </ol>
      </div>

      {/* Operating History */}
      <div className="mt-16 border-t border-border pt-8">
        <h2 className="text-sm font-mono uppercase tracking-widest text-muted mb-8">
          Operating history
        </h2>

        <div className="space-y-10">
          <div>
            <div className="flex items-baseline justify-between">
              <h3 className="font-medium">President &amp; Chief Strategy Officer</h3>
              <span className="text-sm text-muted font-mono">2023–2026</span>
            </div>
            <p className="text-sm text-muted">iAdvize</p>
            <ul className="mt-3 space-y-1 text-sm leading-relaxed list-disc list-inside">
              <li>Rationalized an 18-product portfolio to <strong>2</strong>: one vertical AI agent and one SaaS product</li>
              <li>Built AI revenue engine from $0→<strong>$10M+ ARR</strong> in 24 months</li>
              <li>Reduced customer acquisition cycle from ~9 months to <strong>~60 days</strong></li>
              <li><strong>Tripled</strong> trial-to-paid conversion</li>
            </ul>
          </div>

          <div>
            <div className="flex items-baseline justify-between">
              <h3 className="font-medium">CEO</h3>
              <span className="text-sm text-muted font-mono">2020–2022</span>
            </div>
            <p className="text-sm text-muted">Directly</p>
            <ul className="mt-3 space-y-1 text-sm leading-relaxed list-disc list-inside">
              <li>Customer support platform for Microsoft, Airbnb, AT&amp;T, and SAP</li>
              <li>Took over as CEO at the start of the pandemic with obligations exceeding cash</li>
              <li>Raised capital and rebuilt the cost architecture</li>
              <li>AI drove <strong>~50% of EBITDA</strong> at exit</li>
              <li>Sustained <strong>22%+ EBITDA</strong> and led asset sale to a PE-backed portfolio company</li>
            </ul>
          </div>

          <div className="text-sm text-muted">
            <p>Previously: Hewlett Packard Enterprise, SAP, Arago (KKR-backed), Siebel</p>
          </div>
        </div>
      </div>
    </div>
  );
}
