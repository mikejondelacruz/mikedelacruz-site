import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Outcome-Based Pricing for AI — How to Price What the Agent Delivers",
  description:
    "Outcome-based pricing charges customers for the results AI delivers. Consumption pricing tied to economic value created. The model that drove 22%+ EBITDA at Directly.",
  openGraph: {
    title: "Outcome-Based Pricing for AI — How to Price What the Agent Delivers",
    description: "Cost-plus quietly caps the exit multiple. Anchor pricing to the customer's P&L instead.",
    url: "https://www.mikedelacruz.com/outcome-based-pricing-ai",
    type: "article",
  },
};

export default function OutcomeBasedPricing() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Outcome-Based Pricing for AI",
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
        name: "How should AI products be priced?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AI products should use outcome-based pricing: anchor price to the customer's P&L, measure Customer EBITDA Created, and price at 3–10x Customer EBITDA Return. This aligns revenue with value and drives retention, margin, and exit multiples.",
        },
      },
    ],
  };

  const steps = [
    "Decide the one main business outcome your AI agent delivers. Tickets resolved. Leads qualified. Orders closed. This is your unit of value.",
    "Measure Customer EBITDA Created (CEC): calculate what one unit of that outcome is worth on the customer's P&L. A sales agent closes a $150 order. That's $15 CEC. Know this number before you set any price.",
    "Price so the customer sees 3–10x CER (Customer EBITDA Return). If the agent produces $100 profit per transaction, the unit price is roughly $30. Below 3x, you get rationalized at renewal. Above 10x, you're leaving margin on the table. The Goldilocks zone is where durable revenue lives.",
    "Build measurement infrastructure so both sides can verify outcomes. The renewal conversation becomes a P&L review, not a product review.",
    "Set a platform fee as the revenue floor with outcome-based upside. Predictable base. Natural expansion as customer volume grows. No upsell motion required.",
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
          Outcome-Based Pricing for AI
        </h1>

        <p className="text-lg text-muted mt-6 leading-relaxed">
          SaaS companies price AI agents from their cost structure. Platform cost. Inference cost. Target margin. That&apos;s cost-plus, regardless of what the model is called. Cost-plus quietly caps the exit multiple. Most don&apos;t realize it yet.
        </p>

        {/* Why it matters */}
        <div className="border-l-2 border-ink pl-6 mt-12">
          <h2 className="text-sm font-mono uppercase tracking-widest text-muted mb-4">
            Why it matters
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-ink">
            <p>
              Seat-based pricing breaks when AI replaces human work. Usage-based pricing sounds different but often isn&apos;t. If the unit price starts from your cost structure, it&apos;s still cost-plus. The name changes. The misalignment doesn&apos;t.
            </p>
            <p>
              At Directly, the AI resolved support tickets better than most humans from day one. The pricing model took 18 months to catch up. That lag cost margin and delayed exit value. Once pricing anchored to the customer&apos;s P&amp;L instead of our cost structure, EBITDA went to 22% and expanded to 31% by sale. The distinction wasn&apos;t product quality. It was where the price started.
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

        {/* What value-based pricing does to the org */}
        <div className="border-l-2 border-ink pl-6 mt-12">
          <h2 className="text-sm font-mono uppercase tracking-widest text-muted mb-4">
            What value-based pricing does to the org
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-ink">
            <p>
              This is the argument most CEOs miss. When you anchor pricing to customer outcomes, the org aligns around it.
            </p>
            <p>
              Engineering works backwards from the margin. Inference costs fall because they have to. GTM sells value, not features. CS optimizes impact, not usage volume. AI performance becomes a reliable leading indicator for Finance.
            </p>
            <p>
              EBITDA quality improves because revenue is earned through performance. That&apos;s what a buyer pays a durable multiple for.
            </p>
          </div>
        </div>

        {/* Example */}
        <div className="mt-12 bg-white border border-border rounded-lg p-6">
          <h2 className="text-sm font-mono uppercase tracking-widest text-muted mb-4">
            Example
          </h2>
          <p className="text-base leading-relaxed text-ink">
            At Directly, every pricing decision anchored to resolved support tickets at less than a third of Customer EBITDA Created. Customers got the 3x+ return. The company captured the margin. AI became the primary driver of company EBITDA—not by cutting costs, but by starting price from the customer&apos;s P&amp;L, not from ours. GRR strengthened. EBITDA expanded from 22% to 31%. That margin improvement transferred fully to the PE-backed acquirer at exit.
          </p>
        </div>

        {/* Key takeaway */}
        <div className="mt-12 border-t border-border pt-8">
          <h2 className="text-sm font-mono uppercase tracking-widest text-muted mb-4">
            Key takeaway
          </h2>
          <p className="text-lg font-medium leading-relaxed text-ink">
            If your pricing strategy starts from cost structure, you&apos;re accepting a cap on exit value. Anchor to the customer&apos;s P&amp;L. Price so the customer sees 3–10x return. Let the org align around it. That&apos;s what turns AI revenue into durable EBITDA—and durable EBITDA into a multiple worth selling.
          </p>
        </div>

        {/* Related */}
        <div className="mt-16 pt-8 border-t border-border">
          <h2 className="text-sm font-mono uppercase tracking-widest text-muted mb-4">
            Related
          </h2>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/ai-saas-retention"
              className="text-sm border border-border rounded-full px-4 py-2 text-muted hover:text-ink hover:border-ink transition-colors"
            >
              AI SaaS Retention
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
              See results →
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
