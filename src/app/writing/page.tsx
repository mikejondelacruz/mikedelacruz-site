import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Writing on AI, SaaS Re-founding, and Exit Value",
  description:
    "Frameworks for turning AI into EBITDA: the AI to EBITDA Playbook, SaaS to AI transition, outcome-based pricing, AI agent pricing models, and AI SaaS retention.",
  openGraph: {
    title: "Writing on AI, SaaS Re-founding, and Exit Value",
    description: "Frameworks for turning AI into EBITDA. Built from two re-foundings.",
    url: "https://www.mikedelacruz.com/writing",
    type: "website",
  },
};

const articles = [
  {
    title: "The AI to EBITDA Playbook",
    description: "Most AI initiatives demonstrate impressive technology. Few convert it into margin. This playbook is the bridge.",
    href: "/ai-to-ebitda-playbook",
  },
  {
    title: "SaaS to AI Transition",
    description: "Adding AI to a SaaS company is not a product refresh. It's a rebuild. Re-founding means tearing out the carriage and keeping the QWERTY.",
    href: "/saas-to-ai-transition",
  },
  {
    title: "Outcome-Based Pricing for AI",
    description: "Seat-based pricing made sense when software served humans. AI doesn't use seats. Customers who figured that out first will renegotiate every contract you have.",
    href: "/outcome-based-pricing-ai",
  },
  {
    title: "AI Agent Pricing Models",
    description: "Most companies apply SaaS pricing to AI agents and wonder why the economics don't work. The old model is the problem.",
    href: "/ai-agent-pricing-models",
  },
  {
    title: "AI SaaS Retention",
    description: "The pilot converts. Three months later, it churns. If the AI doesn't show up on the customer's P&L, it will be turned off.",
    href: "/ai-saas-retention",
  },
];

export default function Writing() {
  return (
    <div className="max-w-2xl mx-auto px-6 md:px-12 py-16">
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
        Writing
      </h1>
      <p className="text-lg text-muted mt-4">
        Frameworks for turning AI capability into business value. Built from
        two re-foundings, not theory.
      </p>

      <div className="mt-12 divide-y divide-border">
        {articles.map((article) => (
          <Link
            key={article.href}
            href={article.href}
            className="block py-6 group"
          >
            <h2 className="text-lg font-medium group-hover:underline">
              {article.title}
            </h2>
            <p className="text-sm text-muted mt-1 leading-relaxed">
              {article.description}
            </p>
          </Link>
        ))}
      </div>

      <div className="mt-12 border-t border-border pt-8">
        <p className="text-sm text-muted">
          These frameworks come from operating two AI transitions at
          enterprise scale—Directly (CEO, exit to PE) and iAdvize
          (President, $0→$10M+ AI ARR).
        </p>
        <Link
          href="/proof"
          className="text-sm text-muted mt-4 inline-block hover:text-ink transition-colors"
        >
          See results →
        </Link>
      </div>
    </div>
  );
}
