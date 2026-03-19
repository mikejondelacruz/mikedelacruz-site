import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Outcome-Based Pricing for AI — How to Price What the Agent Delivers",
  description:
    "Outcome-based pricing charges customers for the results AI delivers. Consumption pricing tied to economic value created. The model that drove 22%+ EBITDA at Directly.",
  openGraph: {
    title: "Outcome-Based Pricing for AI — How to Price What the Agent Delivers",
    description: "Seat-based pricing breaks when AI replaces human work. Outcome-based pricing is the destination.",
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
          text: "AI products should use outcome-based pricing: charge for results delivered (tickets resolved, leads qualified, orders closed), measure Customer EBITDA Created, and price at 3–10x Customer EBITDA Return. This aligns revenue with value and drives retention and margin.",
        },
      },
    ],
  };

  const steps = [
    "Define the measurable outcome the AI delivers. Tickets resolved. Leads qualified. Orders closed. This is your unit of value, not your feature list.",
    "Measure Customer EBITDA Created (CEC): the actual dollars your AI creates on the customer's P&L. A sales agent closes a $150 order. That's $15 CEC. Know this number before you set any price.",
    "Price so the customer sees 3–10x CER (Customer EBITDA Return). Below 3x, you get rationalized at renewal. Above 10x, you're leaving margin on the table. The Goldilocks zone is where durable revenue lives.",
    "Build measurement infrastructure so both sides can verify outcomes. The renewal conversation becomes a P&L review. That's the shift from CSM to CFO as your retention anchor.",
    "Set a platform fee as the revenue floor with outcome-based upside. This hybrid model gives the customer predictability and gives you natural expansion as their volume grows. No upsell motion required.",
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
          Seat-based pricing made sense when software served humans. AI doesn&apos;t use seats. Customers who figured that out first will renegotiate every contract you have.
        </p>

        {/* Why it matters */}
        <div className="border-l-2 border-ink pl-6 mt-12">
          <h2 className="text-sm font-mono uppercase tracking-widest text-muted mb-4">
            Why it matters
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-ink">
            <p>
              When an AI agent does the work of five people, customers stop paying for five seats. That&apos;s not a negotiation tactic. It&apos;s arithmetic.
            </p>
            <p>
              Usage-based pricing is the transition model. Outcome-based pricing is the destination. At Directly, the AI resolved support tickets better than most humans from day one. The pricing model took 18 months to catch up. That lag cost margin. Once pricing aligned to value, EBITDA went to 22% and expanded to 31% by sale. Misaligned pricing doesn&apos;t just leave money on the table. It delays exit value.
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
            At Directly, every pricing decision anchored to resolved support tickets. The AI was priced at less than a third of Customer EBITDA Created. Customers got the 3x+ return. The company captured the margin. AI became the primary driver of company EBITDA, not by cutting costs, but by aligning price to value. Customers renewed because the impact showed up on their P&amp;L. GRR strengthened. EBITDA expanded from 22% to 31%. That margin improvement transferred fully to the PE-backed acquirer at exit.
          </p>
        </div>

        {/* Key takeaway */}
        <div className="mt-12 border-t border-border pt-8">
          <h2 className="text-sm font-mono uppercase tracking-widest text-muted mb-4">
            Key takeaway
          </h2>
          <p className="text-lg font-medium leading-relaxed text-ink">
            Outcome-based pricing is not a billing change. It&apos;s a product strategy. When you charge for outcomes, you build for outcomes. That alignment drives retention, expansion, and EBITDA. Get it right and the business model compounds. Get it wrong and even excellent AI will churn because no one can measure why it matters.
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
              See the proof →
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
