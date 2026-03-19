import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI SaaS Retention — How GRR Reveals Durability Before NRR Obscures It",
  description:
    "AI SaaS retention depends on whether the AI is load-bearing in the customer's workflow. Track GRR for AI customers separately. The renewal is the new sale.",
};

export default function AISaaSRetention() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "AI SaaS Retention",
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
        name: "What drives retention in AI SaaS products?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Retention in AI SaaS is driven by whether the AI is load-bearing in the customer's workflow and creates measurable economic value. Track AI GRR separately from SaaS GRR, quantify Customer EBITDA Created for every deployment, and price at 3–10x return.",
        },
      },
    ],
  };

  const steps = [
    "Track AI Gross Revenue Retention (GRR) by cohort, separate from legacy SaaS. Most CEOs don't have this number. If AI GRR is below 85%, the next renewal cycle will hurt. NRR can mask the deterioration. GRR reveals it.",
    "Quantify Customer EBITDA Created (CEC) for every deployment. The renewal conversation should be a P&L review, not a product review.",
    "Price so the customer sees 3–10x return on their P&L. Below 3x, the AI is expendable. It gets rationalized at budget time. The Goldilocks zone is where renewals become automatic.",
    "Start with monthly contracts for new AI logos until retention proves itself. The renewal is the new sale. Annual contracts before proven retention is a bet that rarely pays off.",
    "Review AI quality, churn reasons, downgrades, and stalled trials weekly. Not quarterly. In the AI cycle, performance closes revenue. The agent is the AE. Weekly cadence is the minimum to stay ahead of it.",
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
          AI SaaS Retention
        </h1>

        <p className="text-lg text-muted mt-6 leading-relaxed">
          The pilot converts. Three months later, it churns. That&apos;s not a customer success problem. It&apos;s a product problem. If the AI doesn&apos;t show up on the customer&apos;s P&amp;L, it will be turned off.
        </p>

        {/* Why it matters */}
        <div className="border-l-2 border-ink pl-6 mt-12">
          <h2 className="text-sm font-mono uppercase tracking-widest text-muted mb-4">
            Why it matters
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-ink">
            <p>
              Most AI SaaS products show strong initial conversion and declining usage within 90 days. Every new logo is an experiment. Easy to acquire. Easy to cut when the quarter gets hard. The dashboard looks clean. The AI business is fragile.
            </p>
            <p>
              This is already showing up in diligence. Investors are asking one question: does the AI revenue actually renew? Traditional retention tactics—onboarding flows, health scores, CSM outreach—don&apos;t answer it. AI only renews when it moves a line on the customer&apos;s P&amp;L. Structurally necessary products don&apos;t get turned off. Experiments do.
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
            Building AI revenue from zero to $10M+ ARR in 24 months, one metric determined every renewal: did the customer outcome land on their P&amp;L? Customers that couldn&apos;t quantify the impact didn&apos;t renew. Customers where the AI was structurally necessary, load-bearing in the workflow, renewed and expanded without a sales motion. The distinction wasn&apos;t product quality. It was whether the AI was part of how the business ran or just a feature they had switched on.
          </p>
        </div>

        {/* Key takeaway */}
        <div className="mt-12 border-t border-border pt-8">
          <h2 className="text-sm font-mono uppercase tracking-widest text-muted mb-4">
            Key takeaway
          </h2>
          <p className="text-lg font-medium leading-relaxed text-ink">
            AI SaaS retention is not an engagement problem. It&apos;s a structural necessity problem. Get the AI load-bearing in the workflow, make the P&amp;L impact measurable, and price so the customer can see the return. Everything else is just a pilot.
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
              href="/ai-to-ebitda-playbook"
              className="text-sm border border-border rounded-full px-4 py-2 text-muted hover:text-ink hover:border-ink transition-colors"
            >
              AI → EBITDA Playbook
            </Link>
            <Link
              href="/ai-agent-pricing-models"
              className="text-sm border border-border rounded-full px-4 py-2 text-muted hover:text-ink hover:border-ink transition-colors"
            >
              AI Agent Pricing
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
