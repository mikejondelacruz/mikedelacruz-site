import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Re-found a SaaS Company Around AI | Mike de la Cruz",
  description:
    "You don\u2019t add AI to a SaaS company. You re-found it. How to concentrate into the one workflow where AI delivers measurable EBITDA, then rebuild from there.",
  alternates: { canonical: "https://www.mikedelacruz.com/saas-to-ai-transition" },
  openGraph: {
    title: "How to Re-found a SaaS Company Around AI | Mike de la Cruz",
    description:
      "You don\u2019t add AI to a SaaS company. You re-found it. How to concentrate into the one workflow where AI delivers measurable EBITDA, then rebuild from there.",
    url: "https://www.mikedelacruz.com/saas-to-ai-transition",
    type: "article",
  },
};

export default function SaaSToAITransition() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "SaaS to AI Re-founding",
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
        name: "How do you re-found a SaaS company around AI?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Identify the durable asset (QWERTY), rebuild the core workflow with AI as the execution layer, set Customer EBITDA Created as the unit, design a delivery-led commercial motion, and reset operating cadence to weekly AI performance.",
        },
      },
    ],
  };

  const steps = [
    "Identify your QWERTY.",
    "Rebuild the core workflow with AI as the execution layer, not an assistant. The product is now the outcome, not a UI screen.",
    "Set the unit: Customer EBITDA Created.",
    "Design the commercial motion: deliver first, monetize, and expand margins.",
    "Reset the organization around AI performance: quality, trial-to-paid conversion, Customer EBITDA Created, WoW improvement. Not quarterly.",
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
          SaaS to AI Re-founding
        </h1>

        <p className="text-lg text-muted mt-6 leading-relaxed">
          You do not add AI to a SaaS company. You re-found the company around
          AI.
        </p>

        <div className="space-y-4 text-base leading-relaxed text-ink mt-4">
          <p>
            That means concentrating into the one workflow where AI replaces
            labor and the customer can measure the outcome. Then rebuilding
            pricing, commercial infrastructure, and operating cadence from that
            workflow out.
          </p>
          <p>
            At iAdvize, 18 products became two: one vertical AI agent, and one
            SaaS add-on. Quality went up first. Trial-to-paid conversion tripled
            in the first cohorts. Once we monetized, AI revenue went from $0 to
            $10M+ ARR in 24 months.
          </p>
          <p>Re-founding is not transformation. It is a full reset.</p>
        </div>

        {/* Know which part is QWERTY and which part is the carriage */}
        <div className="border-l-2 border-ink pl-6 mt-12">
          <h2 className="text-sm font-mono uppercase tracking-widest text-muted mb-4">
            Know which part of your company is QWERTY and which part is the
            carriage
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-ink">
            <p>
              QWERTY survived every transition since 1873: typewriter, computer,
              phone, tablet. The carriage moved the typewriter across the page.
              Essential to the machine. Then the machine changed.
            </p>
            <p>
              A lot of the 20-year SaaS playbook is carriage: build a CRUD app
              for a persona, market it, sell it, implement it, renew it. That
              motion built great companies. It is not the part that survives.
            </p>
            <p>
              Your QWERTY is the durable asset: clarity on the job to be done,
              proprietary data, workflow depth, the operational task the AI must
              execute. Everything else is carriage.
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

        {/* Key takeaway */}
        <div className="mt-12 border-t border-border pt-8">
          <h2 className="text-sm font-mono uppercase tracking-widest text-muted mb-4">
            Key takeaway
          </h2>
          <p className="text-lg font-medium leading-relaxed text-ink">
            Do not get sentimental about the carriage. The companies that treat
            AI as a feature addition will be outcompeted by those that re-found
            from the outcome and rebuild the workflow. QWERTY is what survives
            when the machine changes.
          </p>
        </div>


        {/* CTA */}
        <div className="mt-12">
          <p className="text-base leading-relaxed">If you are evaluating an AI-led SaaS reset, reach out.</p>
          <a
            href="mailto:mike@mikedelacruz.com"
            className="text-sm font-medium border border-ink px-6 py-3 mt-4 inline-block hover:bg-ink hover:text-paper transition-colors"
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
            <Link
              href="/ai-to-ebitda-playbook"
              className="text-sm border border-border rounded-full px-4 py-2 text-muted hover:text-ink hover:border-ink transition-colors"
            >
              The AI to EBITDA Playbook
            </Link>
            <Link
              href="/outcome-based-pricing-ai"
              className="text-sm border border-border rounded-full px-4 py-2 text-muted hover:text-ink hover:border-ink transition-colors"
            >
              How to Price AI Agents
            </Link>
            <Link
              href="/results"
              className="text-sm border border-border rounded-full px-4 py-2 text-muted hover:text-ink hover:border-ink transition-colors"
            >
              See Results &rarr;
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
