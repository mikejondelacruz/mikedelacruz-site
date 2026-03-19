import Link from "next/link";

export default function Proof() {
  return (
    <div className="max-w-2xl mx-auto px-6 md:px-12 py-16">
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
        Proof
      </h1>
      <p className="text-lg text-muted mt-4">
        Two re-foundings. Same pattern. The AI performed first, then EBITDA
        followed. The traditional SaaS playbook was what got in the way.
      </p>

      {/* iAdvize */}
      <div className="mt-16">
        <div className="border-l-2 border-ink pl-6">
          <h2 className="text-2xl font-semibold tracking-tight">iAdvize</h2>
          <p className="text-sm font-mono text-muted mt-1">
            President &amp; Chief Strategy Officer · 2023–2026
          </p>
        </div>

        <div className="mt-8 space-y-4 text-base leading-relaxed">
          <p>
            At iAdvize, the company was positioned as a 360-degree CX platform with 18 products. I worked with the CEO to re-found the company by collapsing everything into a single vertical agent for e-commerce, plus 1 SaaS product. 18 → 2.
          </p>
          <p>
            The product team focused on building one AI agent for one high-value workflow. Customer onboarding compressed dramatically. Trial-to-paid conversion tripled during the first customer cohorts.
          </p>
          <p>
            AI revenue went from $0 to $10M+ ARR in 24 months and overtook legacy SaaS.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { metric: "$0→$10M+", value: "AI ARR in 24 months" },
            { metric: "18→2", value: "Focused products" },
            { metric: "9mo→60d", value: "Acquisition cycle" },
            { metric: "20%→60%", value: "Trial-to-paid" },
            { metric: "Consumption", value: "Tied to outcome" },
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
          <p className="text-sm font-mono text-muted mt-1">
            CEO 2020–2022, Chief Business Officer 2019
          </p>
        </div>

        <div className="mt-8 space-y-4 text-base leading-relaxed">
          <p>
            Directly was an AI-powered customer support platform serving
            Microsoft, Airbnb, AT&amp;T, and SAP. I joined as CBO and scaled
            ARR from $3.7M to $8.1M+.
          </p>
          <p>
            Promoted to CEO starting Obligations exceeded cash with $1.2M/mo burn. Raised
            funding 19 days after the pandemic was declared. Then rebuilt.
          </p>
          <p>
            Instant Answers AI resolved support tickets on pre-LLM, intent-based technology and ultimately drove ~50% of company EBITDA — structural margin improvement that compounded regardless of the product roadmap.
          </p>
          <p>
            Rationalized low-margin accounts to improve revenue quality. EBITDA
            went from survival to 22%, expanding to 31% by the time we sold.
          </p>
          <p>
            Led the full exit process: advisor selection, diligence,
            negotiation, board coordination. Closed the asset sale to a
            PE-backed portfolio company at 2.6x TTM revenue.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { metric: "$3.7M→$8M+", value: "30% CAGR" },
            { metric: "22%+", value: "EBITDA margin" },
            { metric: "~50%", value: "EBITDA from AI" },
            { metric: "2.6x TTM", value: "Exit multiple" },
            { metric: "Outcome", value: "Per resolution" },
            { metric: "PE portco", value: "Acquirer" },
          ].map((item) => (
            <div key={item.value} className="border border-border p-4">
              <p className="font-medium">{item.metric}</p>
              <p className="text-sm text-muted mt-1">{item.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* The Pattern */}
      <div className="mt-20 bg-white border border-border p-8">
        <h2 className="text-sm font-mono uppercase tracking-widest text-muted mb-4">
          The pattern
        </h2>
        <ol className="space-y-4">
          {[
            "AI capability is never the bottleneck. Business model design is.",
            "Seat-based pricing breaks when AI replaces human work.",
            "The renewal is the new sale. AI only renews when it moves a line on the customer's P&L.",
            "EBITDA comes from aligning price to value, not cutting costs.",
            "The transition is a re-founding, not an upgrade. Know what's QWERTY and what's carriage.",
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

      <div className="mt-12">
        <Link
          href="/contact"
          className="text-sm font-medium border border-ink px-6 py-3 hover:bg-ink hover:text-paper transition-colors"
        >
          Get in touch
        </Link>
      </div>
    </div>
  );
}
