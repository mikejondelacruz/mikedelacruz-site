import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI EBITDA Frameworks — Mike de la Cruz",
  description:
    "Operating frameworks for PE teams and portfolio company CEOs navigating AI-led SaaS rebuilds. Pricing, GTM, and operating cadence for AI-to-EBITDA conversion.",
  alternates: { canonical: "https://www.mikedelacruz.com/frameworks" },
  openGraph: {
    title: "AI EBITDA Frameworks — Mike de la Cruz",
    description: "Operating frameworks for PE teams and portfolio company CEOs navigating AI-led SaaS rebuilds.",
    url: "https://www.mikedelacruz.com/frameworks",
    type: "website",
  },
};

const articles = [
  {
    title: "SaaS to AI Re-founding",
    description: "You do not add AI to a SaaS company. You re-found it around AI.",
    href: "/saas-to-ai-transition",
  },
  {
    title: "The AI to EBITDA Playbook",
    description: "Customer EBITDA first. Company EBITDA second. Multiple expansion at exit.",
    href: "/ai-to-ebitda-playbook",
  },
  {
    title: "How to Price AI Agents",
    description: "It is not a pricing tactic. It is how value gets captured in the P&L.",
    href: "/outcome-based-pricing-ai",
  },
  {
    title: "The AI Commercial Model",
    description: "The commercial model follows how the customer buys. In AI, they expect proof first.",
    href: "/ai-commercial-model",
  },
  {
    title: "The AI Operating Cadence",
    description: "Weekly execution cadence, not quarterly theater. Five numbers that matter.",
    href: "/ai-operating-cadence",
  },
];

export default function Frameworks() {
  return (
    <div className="max-w-2xl mx-auto px-6 md:px-12 py-16">
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
        Frameworks
      </h1>
      <p className="text-lg text-muted mt-4 leading-relaxed">
        Five operating frameworks built and tested across two operational restructures, each mapping from working AI to durable EBITDA. Documented and designed to transfer. For PE portfolio companies navigating the AI transition.
      </p>

      <div className="mt-12 divide-y divide-border">
        {articles.map((article) => (
          <Link
            key={article.href}
            href={article.href}
            className="block py-6 px-4 -mx-4 rounded hover:bg-white transition-colors duration-200 cursor-pointer"
          >
            <div className="flex items-baseline justify-between">
              <h2 className="text-lg font-medium">{article.title}</h2>
              <span className="text-sm text-muted ml-4 shrink-0">→</span>
            </div>
            <p className="text-sm text-muted mt-1 leading-relaxed">
              {article.description}
            </p>
          </Link>
        ))}
      </div>

      {/* Closing */}
      <div className="mt-12 border-t border-border pt-8">
        <p className="text-base leading-relaxed">
          If your portfolio company has AI that isn&apos;t driving EBITDA, I&apos;ve solved that problem twice.
        </p>
        <div className="mt-6 border border-border inline-block px-6 py-3">
          <a
            href="mailto:mike@mikedelacruz.com?subject=Operating%20model%20reset"
            className="text-base hover:text-muted transition-colors"
          >
            mike@mikedelacruz.com
          </a>
        </div>
      </div>
    </div>
  );
}
