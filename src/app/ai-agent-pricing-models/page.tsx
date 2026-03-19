import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Agent Pricing Models — Five Models from Seat-Based to Outcome-Based",
  description:
    "Frameworks for pricing autonomous AI agents. Per-outcome, value-share, tiered capacity, usage-based, and hybrid models. Built from two AI re-foundings.",
};

export default function AIAgentPricingModels() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "AI Agent Pricing Models",
    author: {
      "@type": "Person",
      name: "Mike de la Cruz",
      url: "https://mikedelacruz.com/about",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What are the main pricing models for AI agents?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The five main AI agent pricing models are per-outcome pricing (charge per task completed), value-share pricing (percentage of customer EBITDA created), tiered capacity pricing (volume-based), usage-based pricing (a transitional bridge to outcome-based pricing), and hybrid models combining a platform fee with outcome-based upside.",
        },
      },
    ],
  };

  const steps = [
    "Per-outcome pricing. Charge for each completed task—ticket resolved, lead qualified, order closed. Best when outcomes are clearly measurable. Requires measurement infrastructure but creates the cleanest retention signal. This is the model that drove EBITDA at Directly.",
    "Value-share pricing. Take a percentage of Customer EBITDA Created. Best for high-value workflows where the AI drives significant P&L impact. Hardest to sell initially. Most durable when proven.",
    "Tiered capacity pricing. Charge based on volume or complexity the agent handles. Lower risk for the customer. Lower margin for you. Use when outcomes aren't yet measurable.",
    "Usage-based pricing. A transitional bridge. Charge per interaction or unit of work until the agent has a proven track record. Once outcomes are measurable, migrate to outcome-based pricing. Usage-based is a starting point, not a destination.",
    "Hybrid pricing. A platform fee as the revenue floor plus outcome-based upside. This is where mature AI businesses land. Predictable base. Natural expansion as customer volume grows. No upsell motion required.",
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <article className="max-w-2xl mx-auto px-6 md:px-12 py-16">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-ink leading-tight">
          AI Agent Pricing Models
        </h1>

        <p className="text-lg text-muted mt-6 leading-relaxed">
          Most companies apply SaaS pricing to AI agents and wonder why the economics don&apos;t work. The agent doesn&apos;t log in. It doesn&apos;t have a seat. The old model is the problem.
        </p>

        {/* Why it matters */}
        <div className="border-l-2 border-ink pl-6 mt-12">
          <h2 className="text-sm font-mono uppercase tracking-widest text-muted mb-4">
            Why it matters
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-ink">
            <p>
              When the product is an autonomous AI agent, the pricing model shapes everything downstream: what the product team builds, how customers measure value, whether renewals happen, and whether EBITDA follows.
            </p>
            <p>
              Five pricing models exist. Most companies start in the wrong one and don&apos;t move until the renewal cycle punishes them. Over five years building AI revenue to $10M+ ARR, pricing tied to economic value created was the unlock. Not AI quality. Not GTM motion. The pricing model forced alignment between what we built and what the customer needed.
            </p>
          </div>
        </div>

        {/* How it works */}
        <div className="mt-12">
          <h2 className="text-sm font-mono uppercase tracking-widest text-muted mb-6">
            How it works
          </h2>
          <ol className="space-y-4">
            {steps.map((step, i) => (
              <li key={i} className="flex gap-4">
                <span className="font-mono text-sm text-muted mt-0.5 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-base leading-relaxed text-ink">{step}</p>
              </li>
            ))}
          </ol>
        </div>

        {/* Example */}
        <div className="mt-12 bg-white border border-border rounded-lg p-6">
          <h2 className="text-sm font-mono uppercase tracking-widest text-muted mb-4">
            Example
          </h2>
          <p className="text-base leading-relaxed text-ink">
            An AI agent qualifies inbound leads under hybrid pricing: $500 per month platform fee plus $15 per qualified lead. Low-volume customers pay a predictable minimum. High-volume customers pay more, but at a fraction of a human SDR&apos;s cost. CER stays in the 3–10x zone. As customers grow, revenue expands without a sales motion. The model creates its own upsell.
          </p>
        </div>

        {/* Key takeaway */}
        <div className="mt-12 border-t border-border pt-8">
          <h2 className="text-sm font-mono uppercase tracking-widest text-muted mb-4">
            Key takeaway
          </h2>
          <p className="text-lg font-medium leading-relaxed text-ink">
            The pricing model is not an afterthought. It&apos;s a product decision. Per-outcome or hybrid for AI that can prove value. Usage-based as a bridge, not a destination. The agent is the AE. Pricing is the compensation plan. Get it wrong and performance doesn&apos;t close revenue. Get it right and the business model compounds.
          </p>
        </div>

        {/* Related */}
        <div className="mt-16 pt-8 border-t border-border">
          <h2 className="text-sm font-mono uppercase tracking-widest text-muted mb-4">
            Related
          </h2>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/outcome-based-pricing-ai"
              className="text-sm border border-border rounded-full px-4 py-2 text-muted hover:text-ink hover:border-ink transition-colors"
            >
              Outcome-Based Pricing
            </Link>
            <Link
              href="/ai-saas-retention"
              className="text-sm border border-border rounded-full px-4 py-2 text-muted hover:text-ink hover:border-ink transition-colors"
            >
              AI SaaS Retention
            </Link>
            <Link
              href="/saas-to-ai-transition"
              className="text-sm border border-border rounded-full px-4 py-2 text-muted hover:text-ink hover:border-ink transition-colors"
            >
              SaaS → AI Transition
            </Link>
            <Link
              href="/proof"
              className="text-sm border border-border rounded-full px-4 py-2 text-muted hover:text-ink hover:border-ink transition-colors"
            >
              See the proof →
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
