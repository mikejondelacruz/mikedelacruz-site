import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The AI to EBITDA Playbook | Mike de la Cruz",
  description:
    "AI does not create enterprise value until it shows up in EBITDA. The Customer EBITDA Created (CEC) and Customer EBITDA Return (CER) frameworks for pricing and measuring AI.",
  alternates: { canonical: "https://www.mikedelacruz.com/ai-to-ebitda-playbook" },
  openGraph: {
    title: "The AI to EBITDA Playbook | Mike de la Cruz",
    description:
      "AI does not create enterprise value until it shows up in EBITDA. The Customer EBITDA Created (CEC) and Customer EBITDA Return (CER) frameworks for pricing and measuring AI.",
    url: "https://www.mikedelacruz.com/ai-to-ebitda-playbook",
    type: "article",
  },
};

export default function AIToEBITDAPlaybook() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "The AI to EBITDA Playbook",
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
        name: "How does AI translate into EBITDA?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Measure Customer EBITDA Created (CEC) — the dollars your AI creates on the customer's P&L. Price so the customer sees 3x to 10x CER. Let margin expand as AI delivery cost falls. Customer EBITDA first, company EBITDA second, multiple expansion at exit.",
        },
      },
    ],
  };

  const steps = [
    "Calculate CEC for every deployment.",
    "Price so the customer sees 3x to 10x CER. That is the zone where revenue renews.",
    "Build measurement infrastructure so both sides can verify outcomes. The renewal conversation becomes a P&amp;L review, not a product review.",
    "Let margin expand as AI delivery cost falls. At Directly, the AI agent drove roughly 50% of EBITDA at exit. That margin improvement transferred fully to the acquirer.",
  ];

  const related = [
    { label: "SaaS to AI Re-founding", href: "/saas-to-ai-transition" },
    { label: "How to Price AI Agents", href: "/outcome-based-pricing-ai" },
    { label: "The AI Commercial Model", href: "/ai-commercial-model" },
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
          The AI to EBITDA Playbook
        </h1>

        {/* Intro */}
        <p className="text-lg text-muted mt-6 leading-relaxed">
          AI does not create enterprise value until it shows up in EBITDA. The
          bridge is customer EBITDA: measure the dollars your AI creates on the
          customer&apos;s P&amp;L, price to capture a share, and let that flow
          through to your own margins.
        </p>

        <p className="text-lg text-muted mt-4 leading-relaxed">
          At Directly, the AI resolved support tickets at $1 per resolution.
          EBITDA margin went from survival-level to 22%, expanding to 31% at exit. The
          AI created value on the customer&apos;s income statement first. Company
          EBITDA followed.
        </p>

        {/* Customer EBITDA Created (CEC) */}
        <div className="border-l-2 border-ink pl-6 mt-12">
          <h2 className="text-sm font-mono uppercase tracking-widest text-muted mb-4">
            Customer EBITDA Created (CEC)
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-ink">
            <p>
              CEC is the actual dollars your AI creates on the customer&apos;s
              P&amp;L. Not projected savings. Not theoretical ROI. Dollars the
              customer CFO can measure.
            </p>
            <p>
              An AI support agent resolves one ticket. Your customer pays its
              outsourced call center $5 per ticket for B2C support. Each AI
              resolution generates $5 CEC.
            </p>
            <p>
              An AI sales agent closes a $150 e-commerce order. That order
              creates roughly $15 of customer EBITDA. That is also CEC.
            </p>
            <p>
              Different workflows. Same measurement. If you cannot calculate CEC
              for your AI, you do not yet have an EBITDA story.
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
              incentive to renew.
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
                <p
                  className="text-base leading-relaxed text-ink"
                  dangerouslySetInnerHTML={{ __html: step }}
                />
              </li>
            ))}
          </ol>
        </div>

        {/* What it looked like at Directly */}
        <div className="mt-12 bg-white border border-border rounded-lg p-6">
          <h2 className="text-sm font-mono uppercase tracking-widest text-muted mb-4">
            What it looked like at Directly
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-ink">
            <p>
              The Instant Answers AI resolved support tickets in an outcome
              model at $1 per resolution. Customers saw clear CER above 3x.
              Because pricing anchored to the customer&apos;s P&amp;L instead of
              our cost structure, margin contribution stacked quarter over
              quarter. The AI margin improvement transferred fully to the
              PE-backed portfolio company.
            </p>
          </div>
        </div>

        {/* Key takeaway */}
        <div className="mt-12 border-t border-border pt-8">
          <h2 className="text-sm font-mono uppercase tracking-widest text-muted mb-4">
            Key takeaway
          </h2>
          <p className="text-lg font-medium leading-relaxed text-ink">
            AI creates enterprise value through one path: customer EBITDA first,
            company EBITDA second, multiple expansion at exit. Measure CEC.
            Price inside the 3x to 10x CER zone. That is what an acquirer pays
            a premium for.
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
          <div className="flex flex-wrap gap-3">
            {related.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm border border-border rounded-full px-4 py-2 text-muted hover:text-ink hover:border-ink transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
