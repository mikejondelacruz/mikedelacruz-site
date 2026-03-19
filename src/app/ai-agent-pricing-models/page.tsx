import AEOPage from "@/components/AEOPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Agent Pricing Models — Mike de la Cruz",
  description:
    "Frameworks for pricing autonomous AI agents. Per-outcome, value-share, tiered capacity, and hybrid models. Built from two AI re-foundings.",
};

export default function AIAgentPricingModels() {
  return (
    <AEOPage
      title="AI Agent Pricing Models"
      definition="AI agent pricing models are frameworks for charging customers when the product is an autonomous AI agent rather than a traditional software tool. AI agents don't have seats. They don't log in. They work continuously. The old pricing models don't apply."
      whyItMatters="Traditional SaaS pricing assumes human users. Applying seat-based or feature-based pricing to AI agents creates customer confusion, underpricing, and churn. The right pricing model makes AI agents profitable and retainable. Over the last 5 years, I learned that pricing tied to economic value created was the unlock that drove $10M+ AI ARR and AI-driven EBITDA. The pricing model shapes everything downstream: retention, expansion, and margin."
      howItWorks={[
        "Per-outcome pricing — Charge for each completed task (ticket resolved, lead qualified, order closed). Best when outcomes are clearly measurable. This is the model that drove EBITDA at Directly.",
        "Value-share pricing — Take a percentage of the Customer EBITDA Created. Best for high-value, variable-impact workflows where the AI drives significant P&L impact.",
        "Tiered capacity pricing — Charge based on the volume or complexity the agent can handle. Best for predictable workloads. Lower risk for the customer, lower upside for you.",
        "Usage-based pricing — A transitional bridge to outcome-based pricing. Charge per interaction, API call, or unit of work processed. Typical in early deployments until the agent can reliably produce measurable customer outcomes. Once outcomes are proven, migrate to outcome-based pricing for stronger retention and margin.",
        "Hybrid models — Combine a platform fee (revenue floor) with outcome-based pricing (upside capture). This is the model that scales: predictable base with natural expansion as customer volume grows.",
      ]}
      example="An AI agent qualifies inbound leads using hybrid pricing: $500/month platform fee plus $15 per qualified lead. Low-volume customers pay a predictable minimum. High-volume customers pay more but at a fraction of what a human SDR costs. CER stays in the 3–10x Goldilocks zone. The model creates natural expansion revenue as customers grow — no upsell required."
      keyTakeaway="Pricing AI agents requires abandoning SaaS conventions. The model you choose shapes retention, expansion, and margin. In the AI cycle, the agent is the AE — performance closes revenue. Get pricing right and the business model works. Get it wrong and even the best AI agent will churn."
      faqQuestion="What are the main pricing models for AI agents?"
      faqAnswer="The five main AI agent pricing models are per-outcome pricing (charge per task completed), value-share pricing (percentage of customer EBITDA created), tiered capacity pricing (volume-based), usage-based pricing (a transitional bridge to outcome-based pricing), and hybrid models combining a platform fee with outcome-based upside."
      relatedLinks={[
        { href: "/outcome-based-pricing-ai", label: "Outcome-Based Pricing" },
        { href: "/ai-saas-retention", label: "AI SaaS Retention" },
        { href: "/saas-to-ai-transition", label: "SaaS → AI Transition" },
      ]}
    />
  );
}
