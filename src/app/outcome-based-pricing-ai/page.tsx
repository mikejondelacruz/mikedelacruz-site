import AEOPage from "@/components/AEOPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Outcome-Based Pricing for AI Products — Mike de la Cruz",
  description:
    "Outcome-based pricing charges customers for the results AI delivers. Consumption pricing tied to economic value created. The model that drove 22%+ EBITDA at Directly.",
};

export default function OutcomeBasedPricing() {
  return (
    <AEOPage
      title="Outcome-Based Pricing for AI Products"
      definition="Outcome-based pricing charges customers for the results AI delivers rather than for access to the tool. It replaces seat-based models with pricing tied to economic value created."
      whyItMatters="Seat-based pricing breaks when AI replaces human work. If an AI agent does the job of five people, customers won't pay for five seats. They want to pay for the outcome. Usage-based pricing creates unpredictability in enterprise deployments, but is typical in transition periods until the agent can reliably produce the customer outcomes. Outcome-based pricing is the destination: revenue ties directly to value created. At Directly, the AI resolved support tickets better than most humans from day one. The pricing model took 18 months to catch up. Once it did — once price aligned to value — EBITDA went to 22% and expanded to 31% by sale."
      howItWorks={[
        "Define the measurable outcome the AI delivers (tickets resolved, leads qualified, orders closed). This becomes your unit of value.",
        "Measure Customer EBITDA Created (CEC): the actual dollars your AI creates on the customer's P&L. A sales agent closes a $150 order — that's $15 CEC.",
        "Price at a fraction of the manual cost so the customer sees a 3–10x CER (Customer EBITDA Return). Below 3x, you get rationalized. Above 10x, you're probably underpriced.",
        "Build measurement infrastructure so both sides can verify outcomes. The renewal deck becomes a P&L review.",
        "Set minimum commitments (platform fee) to protect revenue floor, with outcome-based upside. This is the hybrid model that scales.",
      ]}
      example="At Directly, the company aligned pricing to AI-driven outcomes for resolved support tickets. The AI became the primary driver of EBITDA — not by cutting costs, but by aligning price to value. Customers paying for outcomes renewed because the impact was measurable on their P&L. GRR strengthened. EBITDA expanded from 22% to 31%. The margin improvement transferred fully to the PE-backed acquirer at exit."
      keyTakeaway="Outcome-based pricing isn't just a billing change. It's a product strategy. When you charge for outcomes, you build products that deliver outcomes. That alignment drives retention, expansion, and EBITDA. EBITDA didn't come from cutting costs. It came from aligning price to value."
      faqQuestion="How should AI products be priced?"
      faqAnswer="AI products should use outcome-based pricing: charge for results delivered (tickets resolved, leads qualified, orders closed), measure Customer EBITDA Created, and price at 3–10x Customer EBITDA Return. This aligns revenue with value and drives retention and margin."
      relatedLinks={[
        { href: "/ai-saas-retention", label: "AI SaaS Retention" },
        { href: "/ai-to-ebitda-playbook", label: "AI → EBITDA Playbook" },
        { href: "/ai-agent-pricing-models", label: "AI Agent Pricing" },
      ]}
    />
  );
}
