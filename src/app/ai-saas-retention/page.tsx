import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Agent Retention — Why AI Revenue Churns and How to Fix It",
  description:
    "AI agent retention measures whether an AI agent delivers enough economic value for the customer to renew. Track AI GRR separately. The renewal is the new sale.",
  openGraph: {
    title: "AI Agent Retention — Why AI Revenue Churns and How to Fix It",
    description: "Most agents convert pilots to paid and lose the renewal. The cause is consistent: the agent never moved a line on the customer's P&L.",
    url: "https://www.mikedelacruz.com/ai-saas-retention",
    type: "article",
  },
};

export default function AISaaSRetention() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "AI Agent Retention",
    author: {
      "@type": "Person",
      name: "Mike de la Cruz",
      url: "https://www.mikedelacruz.com/about",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is AI agent retention and why is it different from SaaS retention?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Traditional SaaS retention measures whether users keep logging in and paying for seats. AI agent retention measures whether the agent delivered enough economic value for the customer to pay again. Usage is not the signal. Customer EBITDA Created is the signal.",
        },
      },
      {
        "@type": "Question",
        name: "What is a good AI agent GRR benchmark?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AI Gross Revenue Retention (GRR) below 85% means the next renewal cycle will hurt. Most SaaS CEOs don't track AI GRR separately from their legacy SaaS base. NRR can mask the deterioration. GRR reveals it.",
        },
      },
      {
        "@type": "Question",
        name: "What causes AI agent churn?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Three patterns repeat: all new logos are running experiments (easy to acquire, easy to churn), the renewal is the new sale and most GTM teams aren't built for it, and the agent only renews when it moves a line on the customer's P&L.",
        },
      },
      {
        "@type": "Question",
        name: "What is Minimum Productive Agent (MPA)?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Minimum Productive Agent (MPA) is the threshold at which an AI agent reliably delivers measurable customer outcomes. Three tests define MPA: you can measure Customer EBITDA Created, you generate a 3x return on your price, and the customer agrees with both.",
        },
      },
      {
        "@type": "Question",
        name: "What is Customer EBITDA Created (CEC)?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Customer EBITDA Created (CEC) is the actual dollars an AI agent creates on the customer's P&L. A sales agent closes a $150 e-commerce order. That's $15 CEC. CEC is the metric that determines whether AI agent revenue renews.",
        },
      },
    ],
  };

  const steps = [
    "Track AI GRR by cohort, separate from legacy SaaS. This is the retention signal that matters.",
    "Quantify Customer EBITDA Created for every deployment before the renewal conversation starts.",
    "Price so the customer sees a 3\u201310x return on their P&L. Below 3x, the agent is expendable at budget time.",
    "Make the renewal deck a P&L review, not a product review. The CFO is the retention anchor, not the CSM.",
    "Start new AI agent logos on monthly contracts until retention proves itself. Annual contracts before proven retention is a bet that rarely pays off.",
    "Review agent quality, churn reasons, downgrades, and stalled trials weekly. Not quarterly.",
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
          AI Agent Retention
        </h1>

        <p className="text-lg text-muted mt-6 leading-relaxed">
          AI agent retention measures whether an AI agent delivers enough economic value for the customer to renew. Most agents convert pilots to paid and lose the renewal. The cause is consistent: the agent never moved a line on the customer&apos;s P&amp;L.
        </p>

        {/* What is AI agent retention */}
        <div className="border-l-2 border-ink pl-6 mt-12">
          <h2 className="text-sm font-mono uppercase tracking-widest text-muted mb-4">
            What is AI agent retention and why is it different from SaaS retention?
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-ink">
            <p>
              Traditional SaaS retention measures whether users keep logging in and paying for seats. AI agent retention measures whether the agent delivered enough economic value for the customer to pay again. Usage is not the signal. Customer EBITDA Created is the signal.
            </p>
            <p>
              The Monday dashboard looks clean. Your AI business might not be. Growing ARR fast while a segment of the base quietly decides not to renew is already happening. This is showing up in diligence. Investors are asking one question: does the AI revenue actually renew?
            </p>
          </div>
        </div>

        {/* GRR benchmark */}
        <div className="border-l-2 border-ink pl-6 mt-12">
          <h2 className="text-sm font-mono uppercase tracking-widest text-muted mb-4">
            What is a good AI agent GRR benchmark?
          </h2>
          <p className="text-base leading-relaxed text-ink">
            AI Gross Revenue Retention (GRR) below 85% means the next renewal cycle will hurt. Most SaaS CEOs don&apos;t track AI GRR separately from their legacy SaaS base. NRR can mask the deterioration. GRR reveals it. Separate the two before the diligence conversation starts.
          </p>
        </div>

        {/* What causes churn */}
        <div className="border-l-2 border-ink pl-6 mt-12">
          <h2 className="text-sm font-mono uppercase tracking-widest text-muted mb-4">
            What causes AI agent churn?
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-ink">
            <p>Three patterns repeat across AI agent deployments:</p>
            <ul className="space-y-2 ml-1">
              <li>All new logos are running experiments. Easy to acquire, easy to churn.</li>
              <li>The renewal is the new sale. Most GTM teams aren&apos;t built for it.</li>
              <li>After the pilots, the agent only renews when it moves a line on the customer&apos;s P&amp;L.</li>
            </ul>
            <p>
              Traditional retention tactics—onboarding flows, health scores, CSM outreach—don&apos;t answer the renewal question. If you can&apos;t quantify the impact on the customer&apos;s P&amp;L, you&apos;re not securing the renewal.
            </p>
          </div>
        </div>

        {/* MPA */}
        <div className="mt-12 bg-white border border-border rounded-lg p-6">
          <h2 className="text-sm font-mono uppercase tracking-widest text-muted mb-4">
            What is Minimum Productive Agent (MPA)?
          </h2>
          <p className="text-base leading-relaxed text-ink">
            Minimum Productive Agent (MPA) is the threshold at which an AI agent reliably delivers measurable customer outcomes. Three tests define MPA: you can measure Customer EBITDA Created, you generate a 3x return on your price, and the customer agrees with both. Check all three for three customers and the agent is at MPA. Outcome-based pricing becomes the conversation at that point, not before.
          </p>
        </div>

        {/* CEC */}
        <div className="mt-12 bg-white border border-border rounded-lg p-6">
          <h2 className="text-sm font-mono uppercase tracking-widest text-muted mb-4">
            What is Customer EBITDA Created (CEC)?
          </h2>
          <p className="text-base leading-relaxed text-ink">
            Customer EBITDA Created (CEC) is the actual dollars an AI agent creates on the customer&apos;s P&amp;L. A sales agent closes a $150 e-commerce order. That&apos;s $15 CEC. CEC is the metric that determines whether AI agent revenue renews. If the customer can&apos;t measure it, the renewal is at risk.
          </p>
        </div>

        {/* Six-step framework */}
        <div className="mt-12">
          <h2 className="text-sm font-mono uppercase tracking-widest text-muted mb-6">
            How to improve AI agent retention: a six-step framework
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
            What does AI agent retention look like in practice?
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-ink">
            <p>
              Building AI revenue from zero to $10M+ ARR in 24 months, one metric determined every renewal: customer outcome. During trials, it was agent quality. At renewal, it was whether the impact showed up on the customer&apos;s P&amp;L. Customers that couldn&apos;t quantify the impact didn&apos;t renew. Customers where the agent was structurally necessary—load-bearing in the workflow—renewed and expanded without a sales motion.
            </p>
            <p>
              Performance closes revenue. In the AI cycle, the agent is the AE.
            </p>
          </div>
        </div>

        {/* Key takeaway */}
        <div className="mt-12 border-t border-border pt-8">
          <h2 className="text-sm font-mono uppercase tracking-widest text-muted mb-4">
            Key takeaway
          </h2>
          <div className="space-y-4">
            <p className="text-lg font-medium leading-relaxed text-ink">
              AI agent revenue only becomes durable when it shows up on the customer&apos;s income statement. Track AI GRR separate from SaaS. Make every renewal deck a P&amp;L review. Start new logos on monthly contracts until retention proves itself.
            </p>
            <p className="text-lg font-medium leading-relaxed text-ink">
              Everything else is just a pilot.
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
              href="/ai-to-ebitda-playbook"
              className="text-sm border border-border rounded-full px-4 py-2 text-muted hover:text-ink hover:border-ink transition-colors"
            >
              AI → EBITDA Playbook
            </Link>
            <Link
              href="/usage-based-pricing-ai-agents"
              className="text-sm border border-border rounded-full px-4 py-2 text-muted hover:text-ink hover:border-ink transition-colors"
            >
              Usage-Based Pricing
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
