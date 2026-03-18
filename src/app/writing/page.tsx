import Link from "next/link";

const articles = [
  {
    title: "AI SaaS Retention",
    description: "If a customer can turn off the AI and nothing breaks, retention will always be fragile.",
    href: "/ai-saas-retention",
  },
  {
    title: "Outcome-Based Pricing for AI",
    description: "Seat-based pricing breaks when AI replaces human work. Here's what replaces it.",
    href: "/outcome-based-pricing-ai",
  },
  {
    title: "The AI to EBITDA Playbook",
    description: "AI does not create value until it appears in EBITDA. Demos don't count. Pilots don't count.",
    href: "/ai-to-ebitda-playbook",
  },
  {
    title: "SaaS to AI Transition",
    description: "18 products collapsed into one AI agent. That's what a re-founding looks like.",
    href: "/saas-to-ai-transition",
  },
  {
    title: "AI Agent Pricing Models",
    description: "AI agents don't have seats. They don't log in. The old pricing models don't apply.",
    href: "/ai-agent-pricing-models",
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
          enterprise scale — Directly (CEO, exit to PE) and iAdvize
          (President, $0→$10M+ AI ARR).
        </p>
        <Link
          href="/proof"
          className="text-sm text-muted mt-4 inline-block hover:text-ink transition-colors"
        >
          See the proof →
        </Link>
      </div>
    </div>
  );
}
