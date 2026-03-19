import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Usage-Based Pricing for AI Agents — The Bridge to Outcome-Based Pricing",
  description:
    "Outcome-based pricing is the destination. Usage-based pricing is the bridge. Three MPA tests, three implementation models, and the renewal trap to avoid.",
  openGraph: {
    title: "Usage-Based Pricing for AI Agents — The Bridge to Outcome-Based Pricing",
    description: "Outcome-based pricing is the destination. Usage-based pricing is the bridge. The mistake is treating it as the destination too.",
    url: "https://www.mikedelacruz.com/ai-agent-pricing-models",
    type: "article",
  },
};

export default function AIAgentPricingModels() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Usage-Based Pricing for AI Agents",
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
        name: "What is usage-based pricing for AI agents?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Usage-based pricing charges per interaction or unit of work. It serves as a transitional bridge to outcome-based pricing while the AI agent reaches Minimum Productive Agent (MPA)--the point where Customer EBITDA Created is measurable, the return exceeds 3x, and the customer agrees.",
        },
      },
    ],
  };

  const steps = [
    "Fixed-price consumption bands. Customers pay a flat fee for a defined volume of agent activity--interactions, tasks, API calls. Predictable for the customer. Protects your revenue floor. Best for early deployments where outcome measurement isn\u2019t yet clean.",
    "Tiered pricing. Charge different rates based on volume thresholds. Lower tiers reduce customer risk and accelerate trial conversion. Higher tiers capture expansion as usage grows. Keeps the door open to outcome-based pricing as the tier logic shifts from volume to value.",
    "Hybrid pricing with a platform fee. A fixed platform fee as the revenue floor with usage-based upside above it. The most common model in mature AI deployments. Gives the customer cost predictability and gives you natural expansion. When the agent hits MPA, the hybrid model migrates cleanly to outcome-based pricing by replacing the usage variable with an outcome variable.",
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
          Usage-Based Pricing for AI Agents
        </h1>

        <p className="text-lg text-muted mt-6 leading-relaxed">
          Outcome-based pricing is the destination. Usage-based pricing is the bridge. The mistake is treating it as the destination too.
        </p>

        {/* Why it matters */}
        <div className="border-l-2 border-ink pl-6 mt-12">
          <h2 className="text-sm font-mono uppercase tracking-widest text-muted mb-4">
            Why it matters
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-ink">
            <p>
              AI agents sell faster than SaaS. Renewals are the trap.
            </p>
            <p>
              The pattern is consistent: the first call ends in a yes to a pilot, the pilot converts to paid, then silence at renewal. That last step is where companies churn.
            </p>
            <p>
              If the AI agent can&apos;t reliably deliver the outcome yet, you&apos;re not at MPA--Minimum Productive Agent. Outcome-based pricing before MPA creates a measurement problem neither side can resolve. Usage-based pricing buys time to get there. But it only works if both sides understand it&apos;s a bridge, not a business model.
            </p>
            <p>
              The customer still needs to trace impact to their P&L. Usage-based pricing has to move them toward that moment, not away from it.
            </p>
          </div>
        </div>

        {/* MPA tests */}
        <div className="mt-12 bg-white border border-border rounded-lg p-6">
          <h2 className="text-sm font-mono uppercase tracking-widest text-muted mb-4">
            Three MPA tests before moving to outcome-based pricing
          </h2>
          <ol className="space-y-3 text-base leading-relaxed text-ink">
            <li className="flex gap-3">
              <span className="font-mono text-sm text-muted mt-0.5 shrink-0">1/</span>
              <p>You can measure Customer EBITDA Created.</p>
            </li>
            <li className="flex gap-3">
              <span className="font-mono text-sm text-muted mt-0.5 shrink-0">2/</span>
              <p>You generate 3x return on your price.</p>
            </li>
            <li className="flex gap-3">
              <span className="font-mono text-sm text-muted mt-0.5 shrink-0">3/</span>
              <p>The customer agrees with 1/ and 2/.</p>
            </li>
          </ol>
          <p className="text-base leading-relaxed text-ink mt-4">
            Check all three for three customers and you&apos;re at MPA. That&apos;s when outcome-based pricing becomes the conversation.
          </p>
        </div>

        {/* How to implement */}
        <div className="mt-12">
          <h2 className="text-sm font-mono uppercase tracking-widest text-muted mb-6">
            How to implement usage-based pricing
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

        {/* Key takeaway */}
        <div className="mt-12 border-t border-border pt-8">
          <h2 className="text-sm font-mono uppercase tracking-widest text-muted mb-4">
            Key takeaway
          </h2>
          <div className="space-y-4">
            <p className="text-lg font-medium leading-relaxed text-ink">
              Usage-based pricing is not a permanent model. It&apos;s a commitment to get to MPA. Track Customer EBITDA Created from day one, even before you price on it. When the customer can trace impact to their P&L and agrees the return is 3x or better, the bridge has done its job.
            </p>
            <p className="text-lg font-medium leading-relaxed text-ink">
              The renewal is the new sale. Usage-based pricing only earns it if the outcome is visible by the time the conversation happens.
            </p>
          </div>
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
              SaaS to AI Transition
            </Link>
            <Link
              href="/proof"
              className="text-sm border border-border rounded-full px-4 py-2 text-muted hover:text-ink hover:border-ink transition-colors"
            >
              See results →
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
