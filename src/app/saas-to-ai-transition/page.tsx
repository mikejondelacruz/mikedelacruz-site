import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SaaS to AI Transition — Re-founding, Not Upgrading",
  description:
    "The SaaS to AI transition is re-founding a traditional SaaS company around AI-native architecture, pricing, and delivery. Know what's QWERTY and what's carriage.",
  openGraph: {
    title: "SaaS to AI Transition — Re-founding, Not Upgrading",
    description: "Re-founding means tearing out the carriage and keeping the QWERTY.",
    url: "https://www.mikedelacruz.com/saas-to-ai-transition",
    type: "article",
  },
};

export default function SaaSToAITransition() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "SaaS to AI Transition",
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
        name: "How do you transition a SaaS company to AI?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Transition by identifying your QWERTY (durable assets like proprietary data and workflow depth), rebuilding around AI as the primary execution layer, collapsing features into one AI-driven workflow, migrating to outcome-based pricing, and changing GTM from sell-and-renew to deliver-and-expand.",
        },
      },
    ],
  };

  const steps = [
    "Identify your QWERTY—the durable asset. Clarity on the job to be done. Proprietary data. Workflow depth. Operational tasks only your AI can execute at scale. Strip away the carriage.",
    "Rebuild the core workflow with AI as the primary execution layer, not an assistant. At one company, we made the decision to \"fire the chatbot\" to make sure we embraced the full workflow and business outcome.",
    "Change the unit. From seats sold to Customer EBITDA Created. The seat is carriage. The outcome is QWERTY.",
    "Change the GTM motion. From: market, sell, implement, renew. To: deliver, expand, deliver again. Acquisition cycles compress when the trial proves value before the contract is signed. One re-founding I led dropped acquisition cycles from ~9 months to ~60 days.",
    "Retrain the org around AI delivery metrics. Trial-to-paid conversion. AI quality. Customer EBITDA Created. Weekly operating cadence, not quarterly. The board agenda changes too—agent performance becomes a standing item, not a product update footnote.",
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
          SaaS to AI Transition
        </h1>

        <p className="text-lg text-muted mt-6 leading-relaxed">
          Adding AI to a SaaS company is not a product refresh. It&apos;s a rebuild. Re-founding means tearing out the carriage and keeping the QWERTY.
        </p>

        {/* Why it matters */}
        <div className="border-l-2 border-ink pl-6 mt-12">
          <h2 className="text-sm font-mono uppercase tracking-widest text-muted mb-4">
            Why it matters
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-ink">
            <p>
              QWERTY survived every machine change since 1873. The typewriter became the computer. The computer became the phone. The keyboard stayed. The carriage—the mechanism that moved the typewriter across the page—disappeared when the machine changed.
            </p>
            <p>
              Most of the 20-year SaaS playbook is carriage: build a CRUD app for a persona, market it, sell it, implement it, renew it, repeat. That motion built real companies. It is not the part that survives.
            </p>
            <p>
              The companies that bolt AI onto that motion will be outcompeted by those that start from the outcome and rebuild the workflow. Customers know the difference. Investors know the difference. So does the exit multiple.
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
            At one re-founding, the company had 18 product features across a single workflow category. The transition collapsed everything into one vertical AI agent. Trial-to-paid conversion tripled. AI revenue went from zero to $10M+ ARR in 24 months. The legacy SaaS business did not go away—the new business overtook it. That shift in revenue mix changes the durability profile a buyer sees at exit.
          </p>
        </div>

        {/* Key takeaway */}
        <div className="mt-12 border-t border-border pt-8">
          <h2 className="text-sm font-mono uppercase tracking-widest text-muted mb-4">
            Key takeaway
          </h2>
          <p className="text-lg font-medium leading-relaxed text-ink">
            The SaaS to AI transition is a re-founding, not an upgrade. Identify your QWERTY. Don&apos;t get sentimental about the carriage. Rebuild backwards from the customer outcome. The companies that do this will command higher multiples. The ones that don&apos;t will be rationalized by the ones that did.
          </p>
        </div>

        {/* Related */}
        <div className="mt-16 pt-8 border-t border-border">
          <h2 className="text-sm font-mono uppercase tracking-widest text-muted mb-4">
            Related
          </h2>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/ai-to-ebitda-playbook"
              className="text-sm border border-border rounded-full px-4 py-2 text-muted hover:text-ink hover:border-ink transition-colors"
            >
              AI → EBITDA Playbook
            </Link>
            <Link
              href="/outcome-based-pricing-ai"
              className="text-sm border border-border rounded-full px-4 py-2 text-muted hover:text-ink hover:border-ink transition-colors"
            >
              Outcome-Based Pricing
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
