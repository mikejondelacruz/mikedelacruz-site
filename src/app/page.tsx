import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto px-6 md:px-12 py-24">
      {/* Hero */}
      <div className="space-y-6">
        <p className="font-mono text-sm text-muted tracking-wide">
          AI → EBITDA → Exit Value
        </p>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1]">
          I rebuild $10–$75M B2B SaaS companies by turning AI into EBITDA.
        </h1>
        <p className="text-lg text-muted leading-relaxed max-w-xl">
          Enterprise CX → AI revenue engines under live operating pressure.
          <br className="hidden md:block" />
          $0 → $10M+ AI ARR in 24 months. AI drove ~50% of EBITDA at exit.
        </p>
      </div>

      {/* Proof strip */}
      <div className="mt-16 grid grid-cols-3 gap-4">
        {[
          { metric: "2x", label: "SaaS→AI" },
          { metric: "$10M+", label: "AI ARR, 24 mos" },
          { metric: "22%+", label: "EBITDA, AI-led" },
        ].map((item) => (
          <div key={item.label} className="border border-border py-4 pr-4 pl-6">
            <p className="text-2xl font-semibold tracking-tight">{item.metric}</p>
            <p className="text-sm text-muted mt-1">{item.label}</p>
          </div>
        ))}
      </div>

      {/* The Playbook */}
      <div className="mt-20">
        <h2 className="text-sm font-mono uppercase tracking-widest text-muted mb-8">
          The Playbook
        </h2>
        <ol className="space-y-4">
          {[
            "One high-value workflow — not a feature, the actual business process.",
            "AI that improves customer EBITDA — measurable on the customer's P&L.",
            "Consumption pricing tied to value — outcome-based, not seat-based.",
            "GTM around continuous value creation — deliver, expand, deliver again.",
            "Operating cadence on AI performance + margins — weekly, not quarterly.",
          ].map((step, i) => (
            <li key={i} className="flex gap-4">
              <span className="font-mono text-sm text-muted mt-0.5 shrink-0">
                {i + 1}/
              </span>
              <p className="text-base leading-relaxed">{step}</p>
            </li>
          ))}
        </ol>
      </div>

      {/* Frameworks */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
        {[
          {
            title: "AI → EBITDA Playbook",
            desc: "AI does not create value until it shows up in EBITDA. Here's how.",
            href: "/ai-to-ebitda-playbook",
          },
          {
            title: "SaaS → AI Transition",
            desc: "18 products became 2. That's what re-founding looks like.",
            href: "/saas-to-ai-transition",
          },
          {
            title: "Outcome-Based Pricing",
            desc: "Seat-based pricing breaks when AI replaces human work. Price the outcome.",
            href: "/outcome-based-pricing-ai",
          },
          {
            title: "AI Agent Pricing Models",
            desc: "AI agents don't have seats. They don't log in. The old pricing models don't apply.",
            href: "/ai-agent-pricing-models",
          },
        ].map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="bg-paper p-8 group hover:bg-white transition-colors"
          >
            <h3 className="text-base font-medium text-ink group-hover:underline">
              {item.title}
            </h3>
            <p className="text-sm text-muted mt-2 leading-relaxed">
              {item.desc}
            </p>
            <span className="text-sm text-muted mt-4 inline-block group-hover:text-ink transition-colors">
              Read →
            </span>
          </Link>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-20 border-t border-border pt-12">
        <p className="text-muted text-sm font-semibold">Typical situation</p>
        <p className="text-muted text-sm mt-1">
          $10M–$75M ARR B2B SaaS. Enterprise CX. Growth slowing. AI hasn&apos;t hit the P&L.
        </p>
        <div className="flex gap-4 mt-6">
          <Link
            href="/proof"
            className="text-sm font-medium border border-ink px-6 py-3 hover:bg-ink hover:text-paper transition-colors"
          >
            See the proof
          </Link>
          <Link
            href="/contact"
            className="text-sm text-muted border border-border px-6 py-3 hover:border-ink hover:text-ink transition-colors"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </div>
  );
}
