import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The AI Commercial Model | Mike de la Cruz",
  description:
    "The delivery-led commercial model for AI. Deploy, measure, monetize, expand. How proof replaces persuasion and creates operational leverage in the commercial function.",
  alternates: { canonical: "https://www.mikedelacruz.com/ai-commercial-model" },
  openGraph: {
    title: "The AI Commercial Model | Mike de la Cruz",
    description:
      "The delivery-led commercial model for AI. Deploy, measure, monetize, expand. How proof replaces persuasion and creates operational leverage in the commercial function.",
    url: "https://www.mikedelacruz.com/ai-commercial-model",
    type: "article",
  },
};

export default function AICommercialModel() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "The AI Commercial Model",
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
        name: "How do you sell AI when the customer expects proof first?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Deploy the AI agent into the customer's workflow on real data. Measure Customer EBITDA Created during the trial. Monetize once the customer sees measurable return.",
        },
      },
      {
        "@type": "Question",
        name: "How does the AI commercial model differ from SaaS GTM?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "SaaS GTM sells access and hopes for value. The AI commercial model delivers the outcome first and monetizes on proof. Trial-to-paid conversion replaces pipeline as the primary commercial signal.",
        },
      },
      {
        "@type": "Question",
        name: "Why does the delivery-led model matter for PE?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It creates operational leverage in the commercial function and makes AI revenue trackable, provable, and clean for diligence. That improves exit readiness.",
        },
      },
    ],
  };

  const steps = [
    "Deploy into a real workflow. Not a sandbox. Not a synthetic proof of concept. The product has to touch a real operating process with enough volume and economic relevance to generate a credible signal. Start with the workflow where value is easiest to prove, not easiest to sell.",
    "Measure the economic effect from day one. The product needs to show a clear operating result: resolved tickets, conversion lift, labor removed, cost avoided, Customer EBITDA Created. If the measurement layer is weak, the sales motion falls back into software theater.",
    "Monetize after proof, not before it. Once the product has demonstrated value in production, the pricing conversation changes. The question is no longer whether the product works. It is how the value is shared. That is why AI fits outcome-based or usage-based pricing better than seat-based SaaS pricing. You are not charging for access. You are charging against productive work.",
    "Expand from economics, not from roadmap. The customer has seen value in one workflow. Now they want more volume, more coverage, more workflows on the same engine. Expansion is driven by observed results and the logic of scaling something that already pays for itself. No upsell deck required.",
  ];

  const faqs = [
    {
      question: "How do you sell AI when the customer expects proof first?",
      answer:
        "Deploy the AI agent into the customer\u2019s workflow on real data. Measure Customer EBITDA Created during the trial. Monetize once the customer sees measurable return.",
    },
    {
      question: "How does the AI commercial model differ from SaaS GTM?",
      answer:
        "SaaS GTM sells access and hopes for value. The AI commercial model delivers the outcome first and monetizes on proof. Trial-to-paid conversion replaces pipeline as the primary commercial signal.",
    },
    {
      question: "Why does the delivery-led model matter for PE?",
      answer:
        "It creates operational leverage in the commercial function and makes AI revenue trackable, provable, and clean for diligence. That improves exit readiness.",
    },
  ];

  const related = [
    { label: "SaaS to AI Re-founding", href: "/saas-to-ai-transition" },
    { label: "The AI to EBITDA Playbook", href: "/ai-to-ebitda-playbook" },
    { label: "How to Price AI Agents", href: "/outcome-based-pricing-ai" },
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
          The AI Commercial Model
        </h1>

        {/* Intro */}
        <p className="text-lg text-muted mt-6 leading-relaxed">
          The commercial model follows how the customer buys.
        </p>

        <p className="text-lg text-muted mt-4 leading-relaxed">
          In SaaS, the customer buys access and hopes for value later.
          Implementation starts, adoption ramps, and proof shows up months into
          the contract. That sequence works when the product is infrastructure or
          a system of record.
        </p>

        <p className="text-lg text-muted mt-4 leading-relaxed">
          AI changes how the customer buys. They expect proof first. They want to
          see whether it works on their data, in their environment, against their
          economics. They will not sign an annual contract on a demo.
        </p>

        <p className="text-lg text-muted mt-4 leading-relaxed">
          The commercial model has to follow: deploy, measure, monetize, expand.
        </p>

        <p className="text-lg text-muted mt-4 leading-relaxed">
          I have seen that shift twice. At iAdvize, putting the AI agent into
          live e-commerce workflows moved proof earlier and compressed
          acquisition cycles from roughly 9 months to 60 days. Trial-to-paid
          conversion improved 3x. At Directly, the Instant Answers AI resolved
          tickets from day one. Customers only paid when the AI delivered. The
          proof was the sale.
        </p>

        {/* Why the SaaS commercial model breaks */}
        <div className="border-l-2 border-ink pl-6 mt-12">
          <h2 className="text-sm font-mono uppercase tracking-widest text-muted mb-4">
            Why the SaaS commercial model breaks
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-ink">
            <p>
              The SaaS commercial model was built around explanation.
            </p>
            <p>
              Marketing creates demand. Sales translates features into business
              value. Implementation gets the product live. Customer success
              drives adoption and renewal.
            </p>
            <p>
              Each function exists because the product does not prove itself
              during the buying process. The customer has to believe the story
              before they experience the result.
            </p>
            <p>
              AI inverts this. If the product can take action in a workflow and
              show measurable impact quickly, the commercial motion no longer
              needs to carry the full burden of persuasion. The job is not to
              talk the customer into future value. The job is to get the product
              into a live environment where value can be observed.
            </p>
            <p>
              This sounds obvious. Most companies still do the opposite. They
              run the AI business through a SaaS motion built for delayed proof.
              They overinvest in decks. They underinvest in instrumentation.
              They treat the pilot like a sales accessory instead of the main
              commercial event.
            </p>
            <p>
              That is usually not a product problem. It is a commercial design
              problem.
            </p>
          </div>
        </div>

        {/* The delivery-led commercial model */}
        <div className="mt-12">
          <h2 className="text-sm font-mono uppercase tracking-widest text-muted mb-6">
            The delivery-led commercial model
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

        {/* What changes in the org */}
        <div className="border-l-2 border-ink pl-6 mt-12">
          <h2 className="text-sm font-mono uppercase tracking-widest text-muted mb-4">
            What changes in the org
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-ink">
            <p>
              Marketing shifts from lead generation to qualified proof
              opportunities. Tighter ICP definition, narrower use-case
              positioning, more discipline about where trials launch. The wrong
              trial is worse than no trial.
            </p>
            <p>
              Sales shifts from closing to qualifying for proof. Can this
              account support a live deployment that produces measurable value in
              30 days? A deal that looks good on budget but cannot produce proof
              quickly is a bad AI deal.
            </p>
            <p>
              Customer success shifts from adoption reviews to value reviews.
              What value was created. What margin was improved. What should be
              expanded next. The customer stays because the economics are
              working, not because the software has become familiar.
            </p>
            <p>
              Finance shifts from bookings forecasts to cohort economics.
              Trial-to-paid conversion, CEC per deployment, AI GRR, and margin
              profile by workflow. Those metrics tell you whether the business is
              building durable AI revenue or just closing interesting pilots.
            </p>
          </div>
        </div>

        {/* The operational leverage argument */}
        <div className="border-l-2 border-ink pl-6 mt-12">
          <h2 className="text-sm font-mono uppercase tracking-widest text-muted mb-4">
            The operational leverage argument
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-ink">
            <p>This is what PE partners should hear.</p>
            <p>
              In a SaaS model, revenue growth typically requires proportional
              sales headcount growth. More pipeline requires more AEs. That is
              linear.
            </p>
            <p>
              In a delivery-led AI model, the AI agent proves value and drives
              conversion. Performance closes revenue. Revenue grows without
              proportional commercial cost. That is operational leverage applied
              to the commercial function.
            </p>
            <p>
              The delivery-led model does not just improve sales efficiency. It
              structurally changes the relationship between revenue growth and
              commercial cost.
            </p>
          </div>
        </div>

        {/* Time-to-value compression */}
        <div className="mt-12">
          <h2 className="text-sm font-mono uppercase tracking-widest text-muted mb-4">
            Time-to-value compression
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-ink">
            <p>
              One of the biggest commercial differences between SaaS and AI is
              how fast value can be established.
            </p>
            <p>
              In SaaS, implementation and adoption delay proof for months. That
              stretches the sales cycle, raises customer acquisition cost, and
              pushes risk onto the buyer.
            </p>
            <p>
              In AI, if the workflow is scoped correctly, value shows up in days
              or weeks. Faster proof improves conversion. Shorter cycles reduce
              acquisition cost. Earlier value capture strengthens retention.
              Expansion happens sooner because the customer is scaling something
              they have already seen work.
            </p>
            <p>
              From a PE lens, time-to-value compression directly improves IRR.
              The faster a portfolio company converts AI capability into revenue,
              the more value is created within the hold period.
            </p>
            <p>
              At iAdvize, that compression did not just improve pipeline
              velocity. It changed the unit economics of the entire commercial
              operation.
            </p>
          </div>
        </div>

        {/* Exit readiness */}
        <div className="border-l-2 border-ink pl-6 mt-12">
          <h2 className="text-sm font-mono uppercase tracking-widest text-muted mb-4">
            Exit readiness
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-ink">
            <p>
              A delivery-led commercial model makes the AI revenue story cleaner
              for an acquirer.
            </p>
            <p>
              AI-attributable revenue is tracked separately. Customer EBITDA
              Created is measurable per deployment. Retention is tied to economic
              proof, not relationship quality. Margin expansion is structural,
              not dependent on sales efficiency.
            </p>
            <p>
              When diligence starts, the acquirer does not have to untangle AI
              revenue from legacy SaaS. The commercial model already produces
              the quality of earnings story they need.
            </p>
            <p>
              <Link
                href="/results"
                className="text-muted hover:text-ink transition-colors underline"
              >
                See the full results from both rebuilds &rarr;
              </Link>
            </p>
          </div>
        </div>

        {/* Key takeaway */}
        <div className="mt-12 border-t border-border pt-8">
          <h2 className="text-sm font-mono uppercase tracking-widest text-muted mb-4">
            Key takeaway
          </h2>
          <p className="text-lg font-medium leading-relaxed text-ink">
            If the product can create measurable value in a live workflow, stop
            forcing it through a commercial model built for delayed proof.
            Deploy it. Instrument the economics. Let the customer measure the
            outcome. Then monetize. The delivery-led model creates operational
            leverage in the commercial function, compresses time-to-value, and
            produces AI revenue that is clean for diligence. Performance closes
            revenue.
          </p>
        </div>


        {/* CTA */}
        <div className="mt-12">
          <p className="text-base leading-relaxed">If your portfolio company has AI that isn&apos;t yet showing up in EBITDA, I&apos;ve solved that problem twice.</p>
          <a
            href="mailto:mike@mikedelacruz.com"
            className="text-sm font-medium border border-ink px-6 py-3 mt-4 inline-block hover:bg-ink hover:text-paper transition-colors"
          >
            Let&apos;s Talk
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
                <h3 className="text-base font-medium text-ink">
                  {faq.question}
                </h3>
                <p className="text-base leading-relaxed text-muted mt-2">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
