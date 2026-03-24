import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mike de la Cruz \u2014 AI \u2192 EBITDA",
  description:
    "B2B Vertical SaaS CEO. Two AI-led re-foundings. $0 to $10M+ AI ARR in 24 months. 22%+ EBITDA margin. Asset sale to a PE-backed portfolio company.",
  alternates: { canonical: "https://www.mikedelacruz.com" },
  openGraph: {
    title: "Mike de la Cruz \u2014 AI \u2192 EBITDA",
    description: "B2B Vertical SaaS CEO. Two AI-led re-foundings. $0 to $10M+ AI ARR in 24 months. 22%+ EBITDA margin. Asset sale to a PE-backed portfolio company.",
    url: "https://www.mikedelacruz.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mike de la Cruz \u2014 AI \u2192 EBITDA",
    description: "B2B Vertical SaaS CEO. Two AI-led re-foundings. $0 to $10M+ AI ARR in 24 months. 22%+ EBITDA margin. Asset sale to a PE-backed portfolio company.",
  },
};

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto px-6 md:px-12 pt-16 pb-12">
      {/* Hero */}
      <div className="space-y-5">
        <p className="font-mono text-sm text-muted tracking-wide">
          AI → EBITDA → Exit Value
        </p>
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.1]">
          B2B Vertical SaaS CEO who turns AI into EBITDA.
        </h1>
        <p className="text-xl text-muted leading-relaxed max-w-xl">
          $0 to $10M+ AI ARR in 24 months. 22%+ EBITDA margin. Asset sale to a PE-backed portfolio company.
        </p>
        <div className="mt-2">
          <Link
            href="/results"
            className="text-sm font-medium bg-ink text-paper border-2 border-ink px-6 py-3 inline-block hover:bg-transparent hover:text-ink transition-colors"
          >
            See Portfolio Results
          </Link>
        </div>
      </div>

      {/* Proof strip */}
      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          { metric: "2", label: "SaaS re-foundings" },
          { metric: "18→2", label: "portfolio reset" },
          { metric: "$0→$10M+", label: "AI ARR" },
          { metric: "~50%", label: "of EBITDA at exit" },
        ].map((item) => (
          <div key={item.label} className="border-2 border-border py-3 pr-4 pl-5">
            <p className="text-2xl font-semibold tracking-tight">{item.metric}</p>
            <p className="text-xs text-muted mt-1">{item.label}</p>
          </div>
        ))}
      </div>

      {/* When this matters */}
      <div className="mt-14">
        <h2 className="text-sm font-mono font-medium uppercase tracking-widest text-accent mb-4">
          When this matters
        </h2>
        <div className="border-l-2 border-ink pl-6 space-y-3">
          <p className="text-base leading-relaxed"><strong>Your portco built working AI.</strong> Revenue hasn&apos;t followed.</p>
          <p className="text-base leading-relaxed"><strong>The commercial model</strong> is still SaaS. Pricing, GTM, and operating cadence haven&apos;t been rebuilt for AI delivery.</p>
          <p className="text-base leading-relaxed"><strong>You need an operator</strong> who has solved this problem before and can show the financial results.</p>
        </div>
        <p className="text-xl font-medium leading-relaxed mt-6">
          I go in as CEO. Collapse the portfolio. Reset GTM. Convert AI to EBITDA.
        </p>
        <a
          href="mailto:mike@mikedelacruz.com?subject=Portfolio%20Company"
          className="text-sm font-medium bg-ink text-paper border-2 border-ink px-6 py-3 mt-6 inline-block hover:bg-transparent hover:text-ink transition-colors"
        >
          Let's Talk
        </a>
      </div>

      {/* How I convert AI to EBITDA: Operating Frameworks */}
      <div className="mt-14">
        <h2 className="text-sm font-mono font-medium uppercase tracking-widest text-accent mb-4">
          How I convert AI to EBITDA: Operating Frameworks
        </h2>
        <ol className="space-y-0">
          {[
            { step: "Concentrate into one load-bearing workflow", detail: "Where AI delivers measurable customer EBITDA.", linkText: "SaaS to AI Re-founding", href: "/saas-to-ai-transition" },
            { step: "Anchor AI to customer EBITDA", detail: "If it does not hit customer EBITDA, it will not renew.", linkText: "The AI to EBITDA Playbook", href: "/ai-to-ebitda-playbook" },
            { step: "Price the outcome, not your target margin", detail: "Start from customer value, not cost plus markup.", linkText: "How to Price AI Agents", href: "/outcome-based-pricing-ai" },
            { step: "Deliver first", detail: "Prove the result before you scale the contract.", linkText: "The AI Commercial Model", href: "/ai-commercial-model" },
            { step: "Run on AI performance", detail: "Weekly execution cadence, not quarterly theater.", linkText: "The AI Operating Cadence", href: "/ai-operating-cadence" },
          ].map((item, i) => (
            <li key={i}>
              <Link href={item.href} className="flex gap-4 py-3 px-4 -mx-4 rounded hover:bg-white transition-colors duration-200 cursor-pointer">
                <span className="font-mono text-sm text-muted mt-0.5 shrink-0">
                  {i + 1}/
                </span>
                <div className="flex-1">
                  <div className="flex items-baseline justify-between">
                    <p className="text-base font-medium">{item.step}</p>
                    <span className="text-sm text-muted ml-4 shrink-0 hidden md:inline">→</span>
                  </div>
                  <p className="text-sm text-muted mt-1">{item.detail}</p>
                  <p className="text-sm italic text-muted mt-1">
                    Read: {item.linkText} →
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ol>
      </div>

      {/* Closing */}
      <div className="mt-14">
        <p className="text-base leading-relaxed">
          If your portfolio company has AI that isn&apos;t yet showing up in EBITDA, I&apos;ve solved that problem twice.
        </p>
        <a
          href="mailto:mike@mikedelacruz.com?subject=Portfolio%20Company"
          className="text-sm font-medium bg-ink text-paper border-2 border-ink px-6 py-3 mt-6 inline-block hover:bg-transparent hover:text-ink transition-colors"
        >
          Let's Talk
        </a>
      </div>

    </div>
  );
}
