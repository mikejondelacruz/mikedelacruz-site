import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Run an AI Agent Business Week to Week | Mike de la Cruz",
  description:
    "AI businesses break on SaaS cadence. The weekly operating rhythm: AI quality, trial-to-paid conversion, Customer EBITDA Created, AI-attributable revenue, and margin trajectory.",
  alternates: { canonical: "https://www.mikedelacruz.com/ai-operating-cadence" },
  openGraph: {
    title: "How to Run an AI Agent Business Week to Week | Mike de la Cruz",
    description:
      "AI businesses break on SaaS cadence. The weekly operating rhythm: AI quality, trial-to-paid conversion, Customer EBITDA Created, AI-attributable revenue, and margin trajectory.",
    url: "https://www.mikedelacruz.com/ai-operating-cadence",
    type: "article",
  },
};

export default function AIOperatingCadence() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "The AI Operating Cadence",
    datePublished: "2026-03-21",
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
        name: "How often should you review AI agent performance?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Weekly. AI quality, conversion, and customer outcomes move too fast for quarterly cycles to be the primary operating rhythm.",
        },
      },
      {
        "@type": "Question",
        name: "What is the most important metric in an AI agent business?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AI quality. It is the leading indicator for conversion, retention, and margin.",
        },
      },
    ],
  };

  const weeklyNumbers = [
    "AI quality. Is the agent delivering the outcome at the required standard? This is the leading indicator for everything else. If quality drops, conversion slows. If quality stays inconsistent, retention weakens. In SaaS, feature velocity gets too much attention. In AI, quality is the product.",
    "Trial-to-paid conversion. How are new cohorts converting? This tells you whether the AI is proving value fast enough to monetize. If customers need too long to see results, the problem is usually not pipeline. It is that the product has not made the value obvious enough, fast enough.",
    "Customer EBITDA Created. Are deployments generating measurable P&amp;L impact for the customer? This is the number that matters at renewal. A lot of teams measure activity. Few measure economic impact. That is the gap.",
    "AI-attributable revenue. Track it as a distinct line item, separate from legacy SaaS. This is the revenue quality number an investor or acquirer will need. If you cannot isolate what the AI earns, you cannot properly value it.",
    "Margin trajectory. Is delivery cost falling as AI quality improves? Margin expansion in an AI business should be structural, not seasonal. Revenue can grow while the operating model stays weak. A real AI business should get better at delivery as it scales.",
  ];

  const related = [
    { label: "The AI to EBITDA Playbook", href: "/ai-to-ebitda-playbook" },
    { label: "How to Price AI Agents", href: "/outcome-based-pricing-ai" },
    { label: "The AI Commercial Model", href: "/ai-commercial-model" },
    { label: "See Results \u2192", href: "/results" },
  ];

  const faqs = [
    {
      q: "How often should you review AI agent performance?",
      a: "Weekly. AI quality, conversion, and customer outcomes move too fast for quarterly cycles to be the primary operating rhythm.",
    },
    {
      q: "What is the most important metric in an AI agent business?",
      a: "AI quality. It is the leading indicator for conversion, retention, and margin.",
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
        {/* H1 */}
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-ink leading-tight">
          The AI Operating Cadence
        </h1>

        {/* Intro */}
        <p className="text-lg text-muted mt-6 leading-relaxed">
          AI businesses stall when they are managed on SaaS cadence.
        </p>

        <p className="text-lg text-muted mt-4 leading-relaxed">
          Quarterly reviews were built for slow-moving software economics. AI
          moves faster. Quality shifts weekly. Customer value shows up sooner.
          Delivery cost changes in real time.
        </p>

        <p className="text-lg text-muted mt-4 leading-relaxed">
          If you are still running an AI business quarter to quarter, the
          economics are moving faster than your decisions.
        </p>

        <p className="text-lg text-muted mt-4 leading-relaxed">
          At iAdvize, the operating cadence shifted from quarterly business
          reviews to weekly AI performance reviews, and trial-to-paid conversion
          tripled. At Directly, weekly discipline around AI resolution quality
          helped drive roughly 50% of EBITDA at exit. In both cases, the cadence
          was not a reporting preference. It was part of the model.
        </p>

        {/* Why quarterly cadence breaks in AI */}
        <div className="border-l-2 border-ink pl-6 mt-12">
          <h2 className="text-sm font-mono uppercase tracking-widest text-muted mb-4">
            Why quarterly cadence breaks in AI
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-ink">
            <p>
              Traditional SaaS businesses can run on quarterly rhythms because
              the core inputs move slowly. Pipeline builds over months. Renewals
              are often annual. Headcount changes are budgeted. The review cycle
              matches the speed of the business.
            </p>
            <p>AI businesses do not behave that way.</p>
            <p>
              AI quality can change weekly. Customer outcomes are measurable in
              near real time. Delivery cost shifts as the system improves.
              Retention signals appear in weeks, not quarters.
            </p>
            <p>
              A quarterly cadence means you are reviewing results that were
              determined weeks ago by decisions you did not make fast enough.
              That is not an operating system. That is a rearview mirror.
            </p>
          </div>
        </div>

        {/* The weekly operating rhythm */}
        <div className="mt-12">
          <h2 className="text-sm font-mono uppercase tracking-widest text-muted mb-4">
            The weekly operating rhythm
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-ink">
            <p>
              The operating cadence for an AI agent business should run weekly
              against five numbers.
            </p>
          </div>
          <ol className="space-y-4 mt-6">
            {weeklyNumbers.map((item, i) => (
              <li key={i} className="flex gap-4">
                <span className="font-mono text-sm text-muted mt-0.5 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p
                  className="text-base leading-relaxed text-ink"
                  dangerouslySetInnerHTML={{ __html: item }}
                />
              </li>
            ))}
          </ol>
        </div>

        {/* The renewal is the new sale */}
        <div className="border-l-2 border-ink pl-6 mt-12">
          <h2 className="text-sm font-mono uppercase tracking-widest text-muted mb-4">
            The renewal is the new sale
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-ink">
            <p>
              In legacy SaaS, retention tracks product adoption, workflow
              stickiness, and account management. In AI, retention is harsher.
              The product renews when it becomes structurally necessary.
            </p>
            <p>
              Most AI products generate strong early interest. Pilots start
              quickly. Initial usage looks promising. But many of those logos are
              still running experiments. Easy to acquire. Easy to lose.
            </p>
            <p>
              AI revenue becomes durable only when the customer sees that turning
              it off would create a real economic problem. That is downside
              protection built into the product, not the contract.
            </p>
            <p>
              The renewal conversation changes. It is no longer about engagement,
              onboarding, or customer success motion. It is a P&amp;L review.
              The customer is asking one question: did this create measurable
              economic value?
            </p>
            <p>
              If the answer is weak, the account is fragile no matter how good
              the relationship feels.
            </p>
          </div>
        </div>

        {/* AI Gross Revenue Retention */}
        <div className="mt-12">
          <h2 className="text-sm font-mono uppercase tracking-widest text-muted mb-4">
            AI Gross Revenue Retention
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-ink">
            <p>
              Track AI gross revenue retention by cohort, separate from SaaS
              GRR. Most companies do not. That is a mistake.
            </p>
            <p>
              AI revenue behaves differently from legacy software revenue,
              especially in the first 12 to 24 months of the model shift. It
              needs its own lens.
            </p>
            <p>Below 85% AI GRR: the revenue is fragile.</p>
            <p>Above 90% AI GRR: the revenue is becoming structural.</p>
            <p>
              That spread matters. It is the gap between an interesting demo
              business and a durable operating model.
            </p>
          </div>
        </div>

        {/* What to measure that SaaS does not */}
        <div className="border-l-2 border-ink pl-6 mt-12">
          <h2 className="text-sm font-mono uppercase tracking-widest text-muted mb-4">
            What to measure that SaaS does not
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-ink">
            <p>
              The standard SaaS dashboard still matters: ARR, NRR, pipeline,
              CAC, LTV/CAC, gross margin.
            </p>
            <p>
              But in an AI business, those are increasingly trailing indicators.
            </p>
            <p>
              AI agent operating metrics add: AI quality score, Customer EBITDA
              Created per deployment, trial-to-paid conversion by cohort, AI
              GRR, AI-attributable revenue as a percentage of total revenue,
              margin trajectory for AI versus legacy.
            </p>
            <p>
              The point is not to throw away SaaS metrics. The point is to stop
              pretending they are enough.
            </p>
          </div>
        </div>

        {/* The management shift */}
        <div className="mt-12">
          <h2 className="text-sm font-mono uppercase tracking-widest text-muted mb-4">
            The management shift
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-ink">
            <p>This is the real change.</p>
            <p>
              An AI business is not just a SaaS company with a better feature
              set. It requires a different operating cadence because it compounds
              differently.
            </p>
            <p>
              Quality improves faster. Value proof appears faster. Churn risk
              appears faster. Margin shifts faster.
            </p>
            <p>That means management has to move faster too.</p>
          </div>
        </div>

        {/* Key takeaway */}
        <div className="mt-12 border-t border-border pt-8">
          <h2 className="text-sm font-mono uppercase tracking-widest text-muted mb-4">
            Key takeaway
          </h2>
          <p className="text-lg font-medium leading-relaxed text-ink">
            AI businesses should be run on a weekly operating rhythm. Track AI
            quality. Track Customer EBITDA Created. Track trial-to-paid
            conversion by cohort. Track AI-attributable revenue separately.
            Track margin trajectory. That is the cadence that turns AI
            performance into durable revenue, expanding margin, and real
            enterprise value.
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

        {/* FAQs */}
        <div className="mt-16 pt-8 border-t border-border">
          <h2 className="text-sm font-mono uppercase tracking-widest text-muted mb-6">
            Frequently asked questions
          </h2>
          <div className="space-y-8">
            {faqs.map((faq, i) => (
              <div key={i}>
                <h3 className="text-base font-medium text-ink">{faq.q}</h3>
                <p className="text-base leading-relaxed text-muted mt-2">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
