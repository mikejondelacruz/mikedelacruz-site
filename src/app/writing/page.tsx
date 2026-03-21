import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI EBITDA Frameworks — Mike de la Cruz",
  description:
    "Selected writing for CEOs, boards, and investors navigating AI-led SaaS resets. The operating ideas behind the rebuilds.",
  openGraph: {
    title: "AI EBITDA Frameworks — Mike de la Cruz",
    description: "Selected writing for CEOs, boards, and investors navigating AI-led SaaS resets.",
    url: "https://www.mikedelacruz.com/writing",
    type: "website",
  },
};

const articles = [
  {
    title: "AI \u2192 EBITDA Playbook",
    description: "AI only matters when it changes the P&L. Here is the operating model.",
    href: "/ai-to-ebitda-playbook",
  },
  {
    title: "SaaS Re-founding",
    description: "18 products became 2. That is what an AI reset looks like under pressure.",
    href: "/saas-to-ai-transition",
  },
  {
    title: "Outcome-Based Pricing",
    description: "Seat-based pricing breaks when AI replaces labor. Price the result.",
    href: "/outcome-based-pricing-ai",
  },
  {
    title: "AI Agent Retention",
    description: "Pilots convert. Renewals fail. The cause is usually structural, not technical.",
    href: "/ai-saas-retention",
  },
  {
    title: "Pricing AI Agents",
    description: "Outcome pricing is the destination. Usage pricing is often the bridge.",
    href: "/usage-based-pricing-ai-agents",
  },
];

export default function Writing() {
  return (
    <div className="max-w-2xl mx-auto px-6 md:px-12 py-16">
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
        Writing
      </h1>
      <p className="text-lg text-muted mt-4 leading-relaxed">
        Selected writing for CEOs, boards, and investors navigating AI-led SaaS resets. These are the operating ideas behind the rebuilds.
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

      {/* Closing */}
      <div className="mt-12 border-t border-border pt-8">
        <p className="text-base leading-relaxed">
          If you are evaluating a B2B SaaS reset around AI, reach out.
        </p>
        <a
          href="mailto:mikejdelacruz@gmail.com"
          className="text-sm font-medium border border-ink px-6 py-3 mt-6 inline-block hover:bg-ink hover:text-paper transition-colors"
        >
          Let's Talk
        </a>
      </div>
    </div>
  );
}
