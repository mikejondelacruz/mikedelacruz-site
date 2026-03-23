import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Price AI Agents | Mike de la Cruz",
  description:
    "Outcome-based pricing for AI agents. When to use it, when to bridge with usage-based pricing, and how to price in the 3x to 10x CER zone where revenue renews.",
  alternates: { canonical: "https://www.mikedelacruz.com/outcome-based-pricing-ai" },
  openGraph: {
    title: "How to Price AI Agents | Mike de la Cruz",
    description:
      "Outcome-based pricing for AI agents. When to use it, when to bridge with usage-based pricing, and how to price in the 3x to 10x CER zone where revenue renews.",
    url: "https://www.mikedelacruz.com/outcome-based-pricing-ai",
    type: "article",
  },
};

export default function OutcomeBasedPricingAI() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Price AI Agents",
    datePublished: "2025-01-15",
    dateModified: "2026-03-22",
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
        name: "When should a SaaS company adopt outcome-based pricing for AI?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can offer it anytime. It becomes reliable when you pass the MPA test: CEC is measurable, CER is 3x or better, and the customer agrees with both.",
        },
      },
      {
        "@type": "Question",
        name: "What are the risks of outcome-based pricing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Revenue variability, attribution disputes, and delivery accountability if the system is not controlled.",
        },
      },
      {
        "@type": "Question",
        name: "What is the difference between usage-based and outcome-based pricing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Usage-based pricing charges for agent activity. Outcome-based pricing charges for results. Usage-based is the bridge to outcome-based when the AI cannot yet reliably deliver a measurable outcome.",
        },
      },
      {
        "@type": "Question",
        name: "How does outcome-based pricing impact EBITDA?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It allows companies to capture a share of the value created by AI, directly increasing margins.",
        },
      },
    ],
  };

  const faqs = [
    {
      q: "When should a SaaS company adopt outcome-based pricing for AI?",
      a: "You can offer it anytime. It becomes reliable when you pass the MPA test: CEC is measurable, CER is 3x or better, and the customer agrees with both.",
    },
    {
      q: "What are the risks of outcome-based pricing?",
      a: "Revenue variability, attribution disputes, and delivery accountability if the system is not controlled.",
    },
    {
      q: "What is the difference between usage-based and outcome-based pricing?",
      a: "Usage-based pricing charges for agent activity. Outcome-based pricing charges for results. Usage-based is the bridge to outcome-based when the AI cannot yet reliably deliver a measurable outcome.",
    },
    {
      q: "How does outcome-based pricing impact EBITDA?",
      a: "It allows companies to capture a share of the value created by AI, directly increasing margins.",
    },
  ];

  const howToGetThere = [
    "Instrument. Measure the outcome inside the product. Track CEC from day one, even before you price on it.",
    "Shadow price. Run outcome economics internally alongside your current model.",
    "Pilot. Test with controlled customers. Validate that both sides can verify the outcome and agree on the return.",
    "Scale. Align GTM, contracts, and packaging around the outcome model.",
  ];

  const usageBridgeSteps = [
    "Fixed-price consumption bands. Flat fee for a defined volume of agent activity. Predictable for the customer. Protects your revenue floor.",
    "Tiered pricing. Lower tiers reduce customer risk and accelerate trial conversion. Higher tiers capture expansion as usage grows.",
    "Hybrid with a platform fee. Fixed platform fee as the floor, usage-based upside above it. When the agent reaches MPA, the hybrid model migrates cleanly to outcome-based pricing.",
  ];

  const related = [
    { label: "The AI to EBITDA Playbook", href: "/ai-to-ebitda-playbook" },
    { label: "The AI Commercial Model", href: "/ai-commercial-model" },
    { label: "The AI Operating Cadence", href: "/ai-operating-cadence" },
    { label: "See Results \u2192", href: "/results" },
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
        {/* H1 */}
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-ink leading-tight">
          How to Price AI Agents
        </h1>

        {/* Intro */}
        <p className="text-lg text-muted mt-6 leading-relaxed">
          Outcome-based pricing is not a pricing tactic. It is how value gets
          captured in the P&amp;L.
        </p>

        <p className="text-lg text-muted mt-6 leading-relaxed">
          At Directly, pre-LLM, the Instant Answers AI priced at ~$1 per
          resolution. That price started from what a resolved ticket was worth to
          the customer, not from our inference cost. EBITDA margin expanded to 31% at
          exit. The pricing model was the difference.
        </p>

        {/* What is outcome-based pricing in AI? */}
        <div className="border-l-2 border-ink pl-6 mt-12">
          <h2 className="text-sm font-mono uppercase tracking-widest text-muted mb-4">
            What is outcome-based pricing in AI?
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-ink">
            <p>
              Outcome-based pricing ties revenue directly to a measurable
              business result. In AI, that typically means: cost removed, revenue
              generated, or work completed.
            </p>
            <p>
              To price that outcome, measure Customer EBITDA Created. The
              customer will compare the cost of the AI agent to the EBITDA it
              generates. That comparison determines whether revenue renews.
            </p>
            <p>
              Revenue becomes a function of output, not access. That changes the
              economics of every function in the company.
            </p>
          </div>
        </div>

        {/* Customer EBITDA Return (CER) */}
        <div className="border-l-2 border-ink pl-6 mt-12">
          <h2 className="text-sm font-mono uppercase tracking-widest text-muted mb-4">
            Customer EBITDA Return (CER)
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-ink">
            <p>
              CER is CEC divided by your price. It answers the question every
              customer asks at renewal: is this worth what I pay?
            </p>
            <p>
              Below 3x: the value is too thin. You will be rationalized.
            </p>
            <p>
              3x to 10x: durable revenue. The customer sees clear return and has
              a strong incentive to stay.
            </p>
            <p>
              Above 10x: you are underpriced. Margin is sitting on the table.
            </p>
            <p>
              The 3x to 10x range is where AI revenue becomes structural. Price
              inside it.
            </p>
          </div>
        </div>

        {/* Market pulse check */}
        <div className="mt-12">
          <h2 className="text-sm font-mono uppercase tracking-widest text-muted mb-4">
            Market pulse check
          </h2>
          <p className="text-base leading-relaxed text-ink mb-6">
            These companies have shifted to outcome-based pricing. The last
            column is the one the industry does not track yet.
          </p>
          <div className="overflow-x-auto -mx-6 px-6">
            <table className="w-full text-sm border-collapse" style={{ minWidth: "640px" }}>
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left font-mono text-xs uppercase tracking-widest text-muted py-3 pr-4" style={{ width: "18%" }}>
                    Company
                  </th>
                  <th className="text-left font-mono text-xs uppercase tracking-widest text-muted py-3 pr-4" style={{ width: "14%" }}>
                    Vertical
                  </th>
                  <th className="text-left font-mono text-xs uppercase tracking-widest text-muted py-3 pr-4" style={{ width: "18%" }}>
                    Outcome
                  </th>
                  <th className="text-left font-mono text-xs uppercase tracking-widest text-muted py-3 pr-4" style={{ width: "20%" }}>
                    AI Price
                  </th>
                  <th className="text-left font-mono text-xs uppercase tracking-widest text-muted py-3 pr-4" style={{ width: "18%" }}>
                    Human Equiv.
                  </th>
                  <th className="text-left font-mono text-xs uppercase tracking-widest text-muted py-3 whitespace-nowrap" style={{ width: "12%" }}>
                    CER Range
                  </th>
                </tr>
              </thead>
              <tbody className="text-ink leading-relaxed">
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 font-medium">Intercom</td>
                  <td className="py-3 pr-4 text-muted">Support</td>
                  <td className="py-3 pr-4">Resolved conversation</td>
                  <td className="py-3 pr-4 font-mono text-xs">
                    $0.99/resolution
                  </td>
                  <td className="py-3 pr-4 font-mono text-xs">
                    $5–$15/ticket
                  </td>
                  <td className="py-3 font-mono font-medium whitespace-nowrap">4x–14x</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 font-medium">Zendesk</td>
                  <td className="py-3 pr-4 text-muted">Support</td>
                  <td className="py-3 pr-4">Automated resolution</td>
                  <td className="py-3 pr-4 font-mono text-xs">
                    $1.50–$2.00/res.
                  </td>
                  <td className="py-3 pr-4 font-mono text-xs">
                    $5–$15/ticket
                  </td>
                  <td className="py-3 font-mono font-medium whitespace-nowrap">2x–10x</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 font-medium">
                    Salesforce Agentforce
                  </td>
                  <td className="py-3 pr-4 text-muted">Sales/CRM</td>
                  <td className="py-3 pr-4">Per conversation</td>
                  <td className="py-3 pr-4 font-mono text-xs">
                    $2/conversation
                  </td>
                  <td className="py-3 pr-4 font-mono text-xs">
                    $15–$30/interact.
                  </td>
                  <td className="py-3 font-mono font-medium whitespace-nowrap">7x–14x</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 font-medium">EvenUp</td>
                  <td className="py-3 pr-4 text-muted">Legal</td>
                  <td className="py-3 pr-4">Demand letter</td>
                  <td className="py-3 pr-4 font-mono text-xs">
                    ~$300/demand
                  </td>
                  <td className="py-3 pr-4 font-mono text-xs">
                    $1K–$3K+/demand
                  </td>
                  <td className="py-3 font-mono font-medium whitespace-nowrap">3x–10x+</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium">Stampli / Vic.ai</td>
                  <td className="py-3 pr-4 text-muted">Finance/AP</td>
                  <td className="py-3 pr-4">Invoice processed</td>
                  <td className="py-3 pr-4 font-mono text-xs">
                    ~$0.50–$2/invoice
                  </td>
                  <td className="py-3 pr-4 font-mono text-xs">
                    $12–$15/invoice
                  </td>
                  <td className="py-3 font-mono font-medium whitespace-nowrap">5x+</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="space-y-4 text-base leading-relaxed text-ink mt-6">
            <p>
              Most of the companies above price within or above the target
              range. The one that dips below 3x is the most vulnerable at
              renewal.
            </p>
            <p>
              This is why CER is the metric that matters. The customer&apos;s
              return on what they pay.
            </p>
          </div>
        </div>

        {/* When outcome-based pricing works */}
        <div className="border-l-2 border-ink pl-6 mt-12">
          <h2 className="text-sm font-mono uppercase tracking-widest text-muted mb-4">
            When outcome-based pricing works
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-ink">
            <p>
              Outcome-based pricing is underwritable when three conditions are
              true:
            </p>
            <ol className="space-y-4">
              <li className="flex gap-4">
                <span className="font-mono text-sm text-muted mt-0.5 shrink-0">
                  1/
                </span>
                <p className="text-base leading-relaxed text-ink">
                  The outcome definition is unambiguous. One line. No ambiguity.
                  Example: resolve a support ticket without human intervention.
                </p>
              </li>
              <li className="flex gap-4">
                <span className="font-mono text-sm text-muted mt-0.5 shrink-0">
                  2/
                </span>
                <p className="text-base leading-relaxed text-ink">
                  Attribution is provable. You can demonstrate the AI caused the
                  outcome and the outcome has economic value.
                </p>
              </li>
              <li className="flex gap-4">
                <span className="font-mono text-sm text-muted mt-0.5 shrink-0">
                  3/
                </span>
                <p className="text-base leading-relaxed text-ink">
                  Delivery is controllable at scale. You control enough of the
                  system to produce the result consistently. If the customer
                  controls too many variables, you are pricing volatility.
                </p>
              </li>
            </ol>
          </div>
        </div>

        {/* Minimum Productive Agent (MPA) */}
        <div className="border-l-2 border-ink pl-6 mt-12">
          <h2 className="text-sm font-mono uppercase tracking-widest text-muted mb-4">
            Minimum Productive Agent (MPA)
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-ink">
            <p>
              You can decide to offer outcome-based pricing anytime. MPA is the
              threshold where your AI agent reliably delivers enough value to
              support it. Three tests:
            </p>
            <ol className="space-y-4">
              <li className="flex gap-4">
                <span className="font-mono text-sm text-muted mt-0.5 shrink-0">
                  1/
                </span>
                <p className="text-base leading-relaxed text-ink">
                  You can measure Customer EBITDA Created (CEC).
                </p>
              </li>
              <li className="flex gap-4">
                <span className="font-mono text-sm text-muted mt-0.5 shrink-0">
                  2/
                </span>
                <p className="text-base leading-relaxed text-ink">
                  The customer sees 3x or better return on your price (CER).
                </p>
              </li>
              <li className="flex gap-4">
                <span className="font-mono text-sm text-muted mt-0.5 shrink-0">
                  3/
                </span>
                <p className="text-base leading-relaxed text-ink">
                  The customer agrees with both.
                </p>
              </li>
            </ol>
            <p>
              Check all three for three customers and you are at MPA. That is
              when outcome-based pricing becomes the conversation. Before MPA,
              price on usage. After MPA, price on outcomes. The bridge is not
              the destination.
            </p>
            <p>
              For the full CEC and CER measurement frameworks, see{" "}
              <Link
                href="/ai-to-ebitda-playbook"
                className="underline underline-offset-4 hover:text-muted transition-colors"
              >
                The AI to EBITDA Playbook
              </Link>
              .
            </p>
          </div>
        </div>

        {/* Usage-based pricing: the bridge */}
        <div className="mt-12">
          <h2 className="text-sm font-mono uppercase tracking-widest text-muted mb-6">
            Usage-based pricing: the bridge
          </h2>
          <p className="text-base leading-relaxed text-ink mb-6">
            Usage-based pricing is the bridge when your AI agent cannot yet
            reliably deliver a measurable outcome. It buys time.
          </p>
          <ol className="space-y-4">
            {usageBridgeSteps.map((step, i) => (
              <li key={i} className="flex gap-4">
                <span className="font-mono text-sm text-muted mt-0.5 shrink-0">
                  {i + 1}/
                </span>
                <p className="text-base leading-relaxed text-ink">{step}</p>
              </li>
            ))}
          </ol>
        </div>

        {/* When outcome-based pricing fails */}
        <div className="border-l-2 border-ink pl-6 mt-12">
          <h2 className="text-sm font-mono uppercase tracking-widest text-muted mb-4">
            When outcome-based pricing fails
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-ink">
            <p>
              Outcome pricing breaks when the product is still multi-purpose,
              the outcome depends on the customer&apos;s process, attribution is
              disputed, or delivery is inconsistent.
            </p>
            <p>
              Symptoms: custom contracts, margin leakage, finance pushback,
              stalled deals.
            </p>
            <p>
              Outcome pricing does not fix those problems. It exposes them. Get
              the workflow and the measurement right first. Then price.
            </p>
          </div>
        </div>

        {/* How to get there */}
        <div className="mt-12">
          <h2 className="text-sm font-mono uppercase tracking-widest text-muted mb-6">
            How to get there
          </h2>
          <ol className="space-y-4">
            {howToGetThere.map((step, i) => (
              <li key={i} className="flex gap-4">
                <span className="font-mono text-sm text-muted mt-0.5 shrink-0">
                  {i + 1}/
                </span>
                <p className="text-base leading-relaxed text-ink">{step}</p>
              </li>
            ))}
          </ol>
        </div>

        {/* What outcome-based pricing does to the org */}
        <div className="mt-12">
          <h2 className="text-sm font-mono uppercase tracking-widest text-muted mb-4">
            What outcome-based pricing does to the org
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-ink">
            <p>
              When pricing anchors to customer outcomes, the entire organization
              aligns around it.
            </p>
            <p>
              Engineering works backwards from the margin. Inference costs fall
              because they have to. GTM sells value, not features. CS optimizes
              customer impact, not usage volume. AI performance becomes a leading
              indicator for Finance.
            </p>
            <p>
              EBITDA quality improves because revenue is earned through
              performance. That is what a buyer pays a durable multiple for.
            </p>
          </div>
        </div>

        {/* Key takeaway */}
        <div className="mt-12 border-t border-border pt-8">
          <h2 className="text-sm font-mono uppercase tracking-widest text-muted mb-4">
            Key takeaway
          </h2>
          <p className="text-lg font-medium leading-relaxed text-ink">
            AI changes the unit of value. If you price outcomes without control,
            you take on risk. The goal: the AI reliably delivers a result, the
            result is measurable, pricing captures the value. That is how AI
            turns into EBITDA.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12">
          <p className="text-base leading-relaxed">If you are evaluating an AI-led SaaS reset, reach out.</p>
          <a
            href="mailto:mike@mikedelacruz.com?subject=AI%20to%20EBITDA%20Reset"
            className="text-sm font-medium bg-ink text-paper border border-ink px-6 py-3 mt-4 inline-block hover:bg-transparent hover:text-ink transition-colors"
          >
            Discuss a Portco
          </a>
        </div>

        {/* Related */}
        <div className="mt-16 pt-8 border-t border-border">
          <h2 className="text-sm font-mono uppercase tracking-widest text-muted mb-4">
            Related
          </h2>
          <div className="flex flex-wrap gap-3">
            {related.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="text-sm border border-border rounded-full px-4 py-2 text-muted hover:text-ink hover:border-ink transition-colors"
              >
                {r.label}
              </Link>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div className="mt-16 pt-8 border-t border-border">
          <h2 className="text-sm font-mono uppercase tracking-widest text-muted mb-6">
            Frequently asked questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group border border-border rounded-lg"
              >
                <summary className="cursor-pointer px-6 py-4 text-base font-medium text-ink leading-relaxed">
                  {faq.q}
                </summary>
                <div className="px-6 pb-4 text-base leading-relaxed text-muted">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
