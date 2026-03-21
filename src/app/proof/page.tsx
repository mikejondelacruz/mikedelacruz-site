import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Results — Two AI Re-foundings",
  description:
    "Results from two AI re-foundings: iAdvize ($0 to $10M+ AI ARR, 18 products to 2) and Directly (22%+ EBITDA, AI-driven margin expansion, PE exit).",
  openGraph: {
    title: "Results — Two AI Re-foundings",
    description: "Two AI re-foundings. Same pattern. The product worked before the operating model did.",
    url: "https://www.mikedelacruz.com/proof",
    type: "article",
  },
};

export default function Proof() {
  return (
    <div className="max-w-2xl mx-auto px-6 md:px-12 py-16">
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
        Results
      </h1>
      <p className="text-lg text-muted mt-4 leading-relaxed">
        Two AI re-foundings. Same pattern. The product worked before the operating model did. Results followed once pricing, GTM, and operating cadence caught up.
      </p>

      {/* iAdvize */}
      <div className="mt-16">
        <div className="border-l-2 border-ink pl-6">
          <h2 className="text-2xl font-semibold tracking-tight">iAdvize</h2>
        </div>

        <div className="mt-8 space-y-4 text-base leading-relaxed">
          <p>
            iAdvize was positioned as a 360-degree CX platform with 18 products. Re-founded the company alongside the CEO by collapsing 18 products into one vertical AI agent for e-commerce. The portfolio became two: one AI agent and one SaaS product.
          </p>
          <p>
            We focused the company on one AI agent for one high-value workflow. Onboarding compressed. Trial-to-paid conversion tripled in the first cohorts. AI revenue scaled from $0 to $10M+ ARR in 24 months and overtook SaaS.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { metric: "$0→$10M+", value: "AI ARR" },
            { metric: "18→2", value: "Product reset" },
            { metric: "9mo→60d", value: "Sales cycle" },
            { metric: "3x", value: "Trial-to-paid" },
            { metric: "Consumption", value: "Pricing model" },
            { metric: "AI-first", value: "GTM rebuilt" },
          ].map((item) => (
            <div key={item.value} className="border border-border p-4">
              <p className="font-medium">{item.metric}</p>
              <p className="text-sm text-muted mt-1">{item.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Directly */}
      <div className="mt-20">
        <div className="border-l-2 border-ink pl-6">
          <h2 className="text-2xl font-semibold tracking-tight">Directly</h2>
        </div>

        <div className="mt-8 space-y-4 text-base leading-relaxed">
          <p>
            Directly was a customer support platform serving Microsoft, Airbnb, AT&amp;T, and SAP. Joined as CBO, grew ARR from $3.7M to $8M+ through revenue quality improvement and account expansion, and led the re-founding to AI-first delivery alongside the CEO and CTO.
          </p>
          <p>
            Promoted to CEO as obligations exceeded cash and burn reached $1.2M per month. We raised funding 19 days after the pandemic was declared, then rebuilt the company. Instant Answers AI, built on pre-LLM intent-based technology, ultimately drove about 50% of EBITDA at exit.
          </p>
          <p>
            We rationalized low-margin accounts to improve revenue quality. EBITDA reached 22% and expanded to 31% by sale. I led the full exit process, including advisor selection, diligence, negotiation, and board coordination, culminating in an asset sale to a PE-backed portfolio company.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { metric: "$3.7M→$8M+", value: "ARR" },
            { metric: "22%+", value: "EBITDA margin" },
            { metric: "~50%", value: "EBITDA at exit" },
            { metric: "PE exit", value: "Asset sale" },
            { metric: "Outcome", value: "Per-resolution pricing" },
            { metric: "PE portco", value: "Acquirer" },
          ].map((item) => (
            <div key={item.value} className="border border-border p-4">
              <p className="font-medium">{item.metric}</p>
              <p className="text-sm text-muted mt-1">{item.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Principles */}
      <div className="mt-20 bg-white border border-border p-8">
        <h2 className="text-sm font-mono uppercase tracking-widest text-muted mb-4">
          Principles
        </h2>
        <ol className="space-y-4">
          {[
            "The AI transition is a re-founding, not an upgrade.",
            "The bottleneck is commercial infrastructure that converts AI into revenue quality.",
            "Outcome pricing is the destination. Usage pricing is the bridge.",
            "The renewal is the new sale. AI only renews when it moves a line on the customer\u2019s P&L.",
            "Durable EBITDA comes from aligning price to value.",
          ].map((step, i) => (
            <li key={i} className="flex gap-4">
              <span className="font-mono text-sm text-muted shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-base">{step}</p>
            </li>
          ))}
        </ol>
      </div>

      {/* Related articles */}
      <div className="mt-16 border-t border-border pt-8">
        <h2 className="text-sm font-mono uppercase tracking-widest text-muted mb-6">
          The frameworks behind these results
        </h2>
        <div className="space-y-3">
          <Link href="/ai-to-ebitda-playbook" className="block text-base hover:text-muted transition-colors">
            AI → EBITDA Playbook →
          </Link>
          <Link href="/outcome-based-pricing-ai" className="block text-base hover:text-muted transition-colors">
            Outcome-Based Pricing for AI →
          </Link>
        </div>
      </div>

      {/* Closing */}
      <div className="mt-12 border-t border-border pt-8">
        <p className="text-lg font-medium leading-relaxed">
          The question is not whether the AI works. It is whether the commercial infrastructure can convert that into durable financial performance.
        </p>
        <Link
          href="/contact"
          className="text-sm font-medium border border-ink px-6 py-3 mt-6 inline-block hover:bg-ink hover:text-paper transition-colors"
        >
          Let's Talk →
        </Link>
      </div>
    </div>
  );
}
