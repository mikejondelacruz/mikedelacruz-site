import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The AI to EBITDA Playbook — CEC, CER, and Exit Multiples",
  description:
    "A framework for converting AI capabilities into measurable earnings. Includes Customer EBITDA Created (CEC) and Customer EBITDA Return (CER) metrics.",
  openGraph: {
    title: "The AI to EBITDA Playbook — CEC, CER, and Exit Multiples",
    description: "A framework for converting AI capabilities into measurable EBITDA.",
    url: "https://www.mikedelacruz.com/ai-to-ebitda-playbook",
    type: "article",
  },
};

export default function AIToEBITDA() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "The AI to EBITDA Playbook",
    datePublished: "2025-01-15",
    dateModified: "2026-03-19",
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
        name: "What is Customer EBITDA Created (CEC)?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "CEC is the actual dollar value your AI generates on the customer's P&L—not projected savings, not efficiency estimates. It is the number the customer CFO can measure. Example: an AI agent that closes a $150 order at 10% margin creates $15 of CEC.",
        },
      },
      {
        "@type": "Question",
        name: "What is Customer EBITDA Return (CER)?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "CER is CEC divided by the price the customer pays for your product. A CER of 3–10x is the target zone. Below 3x, the customer will rationalize the spend at renewal. Above 10x, the pricing model is underpriced relative to the value delivered.",
        },
      },
      {
        "@type": "Question",
        name: "Why does outcome-based pricing matter for AI revenue durability?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Seat-based pricing does not track to value created. When AI replaces or augments labor, the unit of economic value changes. Outcome-based pricing ties your revenue to the customer's P&L impact, which makes renewal justification straightforward and durability visible to investors.",
        },
      },
      {
        "@type": "Question",
        name: "How do PE investors and acquirers evaluate AI-attributable EBITDA?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Acquirers assess durability. They ask: is this margin repeatable? Is it tied to defensible workflows, or to experimental budget that won't renew? AI-attributable revenue tracked separately, with CEC and CER benchmarks, gives acquirers the evidence they need to underwrite a higher multiple.",
        },
      },
      {
        "@type": "Question",
        name: "What does re-founding mean in the context of this playbook?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Re-founding is the process of rebuilding a SaaS company's product, GTM motion, and pricing architecture around AI—not bolting AI onto an existing model. The AI to EBITDA Playbook is the financial framework that governs a re-founding. It ensures the rebuild produces measurable margin, not just capability.",
        },
      },
    ],
  };

  const steps = [
    "Measure CEC. Identify the actual dollars your AI creates on the customer's P&L. This is not theoretical savings. It is the number a customer CFO can measure and defend.",
    "Calculate CER. Divide CEC by price. If CER falls below 3x, re-examine pricing or product scope. If CER exceeds 10x, you are leaving value on the table.",
    "Restructure pricing to capture a share of that value. Outcome-based, not seat-based. Price so the customer sees a 3–10x return on their P&L. The unit of value must match the unit of pricing.",
    "Consolidate product surface area. Fewer features. More load-bearing AI workflows. At iAdvize, 18 products became one vertical AI agent. The consolidation restructured the delivery cost architecture and sharpened the value proposition.",
    "Track AI-attributable revenue as a distinct line item. At Directly, the AI agent drove approximately 50% of SaaS EBITDA. That was not buried in a blended margin. It was visible, defensible, and transferred fully to the acquirer at exit.",
  ];

  const faqs = [
    {
      q: "What is Customer EBITDA Created (CEC)?",
      a: "CEC is the actual dollar value your AI generates on the customer's P&L—not projected savings, not efficiency estimates. It is the number the customer CFO can measure. Example: an AI agent that closes a $150 order at 10% margin creates $15 of CEC.",
    },
    {
      q: "What is Customer EBITDA Return (CER)?",
      a: "CER is CEC divided by the price the customer pays for your product. A CER of 3–10x is the target zone. Below 3x, the customer will rationalize the spend at renewal. Above 10x, the pricing model is underpriced relative to the value delivered.",
    },
    {
      q: "Why does outcome-based pricing matter for AI revenue durability?",
      a: "Seat-based pricing does not track to value created. When AI replaces or augments labor, the unit of economic value changes. Outcome-based pricing ties your revenue to the customer's P&L impact, which makes renewal justification straightforward and durability visible to investors.",
    },
    {
      q: "How do PE investors and acquirers evaluate AI-attributable EBITDA?",
      a: "Acquirers assess durability. They ask: is this margin repeatable? Is it tied to defensible workflows, or to experimental budget that won't renew? AI-attributable revenue tracked separately, with CEC and CER benchmarks, gives acquirers the evidence they need to underwrite a higher multiple.",
    },
    {
      q: "What does re-founding mean in the context of this playbook?",
      a: "Re-founding is the process of rebuilding a SaaS company's product, GTM motion, and pricing architecture around AI—not bolting AI onto an existing model. The AI to EBITDA Playbook is the financial framework that governs a re-founding. It ensures the rebuild produces measurable margin, not just capability.",
    },
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
          The AI to EBITDA Playbook
        </h1>

        <p className="text-lg text-muted mt-6 leading-relaxed">
          The AI agent does not create value until it appears in EBITDA.
        </p>

        <p className="text-base leading-relaxed text-ink mt-4">
          Most AI agents demonstrate impressive technology. Few convert it into margin. This playbook is the bridge.
        </p>

        {/* The two metrics that matter */}
        <div className="border-l-2 border-ink pl-6 mt-12">
          <h2 className="text-sm font-mono uppercase tracking-widest text-muted mb-4">
            The two metrics that matter
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-ink">
            <p>
              <strong>Customer EBITDA Created (CEC)</strong> is the actual dollar value your AI generates on the customer&apos;s P&amp;L. If an AI sales agent closes a $150 e-commerce order at a 10% margin, that order creates $15 of CEC.
            </p>
            <p>
              <strong>Customer EBITDA Return (CER)</strong> is CEC divided by the price the customer pays. A CER of 3–10x is the target zone for durable AI revenue. Below 3x, the value is too thin—you will be rationalized. Above 10x, you are underpriced.
            </p>
            <p>
              The more customer EBITDA you create, the more you can capture. Investors and acquirers do not pay for AI capabilities. They pay for EBITDA. At exit, your acquirer will assess the durability of your EBITDA. The companies that translate AI into margin expansion will command higher multiples. Those that don&apos;t will trade at declining-SaaS multiples.
            </p>
          </div>
        </div>

        {/* The five steps */}
        <div className="mt-12">
          <h2 className="text-sm font-mono uppercase tracking-widest text-muted mb-6">
            The five steps
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
            What this looks like in practice
          </h2>
          <p className="text-base leading-relaxed text-ink">
            At Directly, the company operated at negative EBITDA. After rebuilding around outcome-based pricing and letting the AI agent drive resolution economics, EBITDA expanded to 22%, then to 31% by sale. The AI margin improvement transferred fully to the PE-backed acquirer.
          </p>
          <p className="text-base leading-relaxed text-ink mt-4">
            That is what the playbook produces. Not a better pitch. A better P&amp;L.
          </p>
        </div>

        {/* Key takeaway */}
        <div className="mt-12 border-t border-border pt-8">
          <h2 className="text-sm font-mono uppercase tracking-widest text-muted mb-4">
            The playbook in one line
          </h2>
          <p className="text-lg font-medium leading-relaxed text-ink">
            Make AI load-bearing. Measure CEC. Price at 3–10x CER. Restructure delivery cost architecture. Expand your own EBITDA. That is what drives your multiple.
          </p>
        </div>

        {/* FAQ */}
        <div className="mt-12 border-t border-border pt-8">
          <h2 className="text-sm font-mono uppercase tracking-widest text-muted mb-6">
            Frequently asked questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i}>
                <h3 className="text-base font-semibold text-ink">{faq.q}</h3>
                <p className="text-base leading-relaxed text-ink mt-2">{faq.a}</p>
              </div>
            ))}
          </div>
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
              AI Agent Retention
            </Link>
            <Link
              href="/outcome-based-pricing-ai"
              className="text-sm border border-border rounded-full px-4 py-2 text-muted hover:text-ink hover:border-ink transition-colors"
            >
              Outcome-Based Pricing
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
