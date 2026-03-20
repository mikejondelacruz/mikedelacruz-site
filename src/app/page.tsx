import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mike de la Cruz — I Rebuild $10–$75M B2B SaaS Companies by Turning AI into EBITDA",
  description:
    "Two enterprise SaaS rebuilds to AI-first. $0 → $10M+ AI ARR in 24 months. AI drove ~50% of EBITDA at exit.",
  openGraph: {
    title: "Mike de la Cruz — AI → EBITDA → Exit Value",
    description: "I rebuild $10–$75M B2B SaaS companies by turning AI into EBITDA. Two enterprise SaaS rebuilds to AI-first.",
    url: "https://www.mikedelacruz.com",
    type: "website",
  },
};

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto px-6 md:px-12 py-24">
      {/* Hero */}
      <div className="space-y-6">
        <p className="font-mono text-sm text-muted tracking-wide">
          AI → EBITDA → Exit Value
        </p>
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.1]">
          I rebuild $10–$75M B2B SaaS companies by turning AI into EBITDA.
        </h1>
        <p className="text-xl text-muted leading-relaxed max-w-xl">
          Two enterprise SaaS rebuilds under live operating pressure.
          <br />
          From product reset to AI revenue to EBITDA.
        </p>
        <div className="flex gap-4 mt-2">
          <Link
            href="/proof"
            className="text-sm font-medium border border-ink px-6 py-3 hover:bg-ink hover:text-paper transition-colors"
          >
            See Results
          </Link>
          <a
            href="mailto:mikejdelacruz@gmail.com"
            className="text-sm text-muted border border-border px-6 py-3 hover:border-ink hover:text-ink transition-colors"
          >
            Let's Talk
          </a>
        </div>
      </div>

      {/* Proof strip */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { metric: "2", label: "AI-led SaaS rebuilds" },
          { metric: "18→2", label: "product reset" },
          { metric: "$0→$10M+", label: "AI ARR" },
          { metric: "~50%", label: "of EBITDA at exit" },
        ].map((item) => (
          <div key={item.label} className="border border-border py-4 pr-4 pl-6">
            <p className="text-2xl font-semibold tracking-tight">{item.metric}</p>
            <p className="text-xs text-muted mt-1">{item.label}</p>
          </div>
        ))}
      </div>

      {/* Best for */}
      <div className="mt-20 border-l-2 border-ink pl-6">
        <h2 className="text-sm font-mono uppercase tracking-widest text-muted mb-4">
          Best for
        </h2>
        <div className="space-y-2 text-base leading-relaxed">
          <p>PE-backed or venture-backed B2B SaaS.</p>
          <p>$10M–$75M ARR.</p>
          <p>AI capability is real, but growth, margin, and GTM have not caught up.</p>
        </div>
      </div>

      {/* How I Rebuild */}
      <div className="mt-20">
        <h2 className="text-sm font-mono uppercase tracking-widest text-muted mb-8">
          How I Rebuild
        </h2>
        <ol className="space-y-6">
          {[
            { step: "Collapse to one high-value workflow", detail: "Not a feature. The business process that matters." },
            { step: "Tie AI to customer EBITDA", detail: "If it does not hit the customer P&L, it will not renew." },
            { step: "Price the outcome, not the seat", detail: "AI breaks seat-based logic when it replaces labor." },
            { step: "Rebuild GTM around delivery", detail: "Deliver, expand, deliver more." },
            { step: "Run on AI performance and margins", detail: "Weekly operating cadence, not quarterly theater." },
          ].map((item, i) => (
            <li key={i} className="flex gap-4">
              <span className="font-mono text-sm text-muted mt-0.5 shrink-0">
                {i + 1}/
              </span>
              <div>
                <p className="text-base font-medium">{item.step}</p>
                <p className="text-sm text-muted mt-1">{item.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      {/* Selected Writing */}
      <div className="mt-20">
        <h2 className="text-sm font-mono uppercase tracking-widest text-muted mb-2">
          Selected Writing
        </h2>
        <p className="text-sm text-muted mb-8">
          For CEOs, boards, and investors navigating AI-led SaaS resets.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
        {[
          {
            title: "AI → EBITDA Playbook",
            desc: "AI does not create value until it shows up in EBITDA. Here's how.",
            href: "/ai-to-ebitda-playbook",
          },
          {
            title: "SaaS to AI Transition",
            desc: "18 products became 2. That's what re-founding looks like.",
            href: "/saas-to-ai-transition",
          },
          {
            title: "Outcome-Based Pricing",
            desc: "Seat-based pricing breaks when AI replaces human work. Price the outcome.",
            href: "/outcome-based-pricing-ai",
          },
          {
            title: "Usage-Based Pricing for AI Agents",
            desc: "Outcome-based pricing is the destination. Usage-based pricing is the bridge.",
            href: "/usage-based-pricing-ai-agents",
          },
          {
            title: "AI Agent Retention",
            desc: "Most agents convert pilots to paid and lose the renewal. The cause is structural.",
            href: "/ai-saas-retention",
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

      {/* Close */}
      <div className="mt-20 border-t border-border pt-12">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">
          Your company has AI. It has not translated to value.
        </h2>
        <p className="text-base leading-relaxed max-w-xl">
          That&apos;s the problem I solve. Two rebuilds, same pattern. Rationalize the product, tie AI to customer P&amp;L, new GTM to convert AI into EBITDA.
        </p>
        <a
          href="mailto:mikejdelacruz@gmail.com"
          className="text-sm font-medium border border-ink px-6 py-3 mt-6 inline-block hover:bg-ink hover:text-paper transition-colors"
        >
          Let's Talk
        </a>
      </div>

    </div>
  );
}
