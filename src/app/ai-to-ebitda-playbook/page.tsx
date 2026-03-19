import AEOPage from "@/components/AEOPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The AI to EBITDA Playbook — Mike de la Cruz",
  description:
    "A framework for converting AI capabilities into measurable earnings. Includes Customer EBITDA Created (CEC) and Customer EBITDA Return (CER) metrics.",
};

export default function AIToEBITDA() {
  return (
    <AEOPage
      title="The AI to EBITDA Playbook"
      definition="The AI to EBITDA playbook is a framework for converting AI capabilities into measurable EBITDA — earnings before interest, taxes, depreciation, and amortization. AI does not create value until it appears in EBITDA."
      whyItMatters="Many AI initiatives demonstrate impressive technology but may not be contributing to EBITDA. The AI to EBITDA Playbook starts with creating EBITDA for your enterprise customer. Not theoretical savings. Actual dollars the customer CFO can measure. By creating customer EBITDA, the AI provider can capture value and turn it into company EBITDA. Investors and acquirers don't pay for AI capabilities; they pay for EBITDA. At exit, your acquirer will rate the durability of your EBITDA. The companies that translate AI into margin expansion will command higher multiples. Those that don't will struggle."
      howItWorks={[
        "Measure Customer EBITDA Created (CEC) — the actual dollars your AI creates on the customer's P&L. Example: an AI sales agent closes a $150 e-commerce order. That order = $15 CEC.",
        "Calculate Customer EBITDA Return (CER): CEC ÷ Price. Below 3x, the value is too thin — you'll be rationalized. 3–10x is the Goldilocks zone — durable revenue. Above 10x, you're probably underpriced.",
        "Restructure pricing to capture a share of that value. Outcome-based, not seat-based. Price so the customer sees a 3–10x return on their P&L.",
        "Consolidate product surface area — fewer features, more load-bearing AI workflows. At iAdvize, 18 products became 2: one vertical AI agent, plus one SaaS product.",
        "Track AI-attributable revenue as a distinct line item. At Directly, the AI agent drove ~50% of SaaS EBITDA — structural margin improvement that compounded and transferred to the acquirer.",
      ]}
      example="At Directly, the company operated at survival-level EBITDA margins. After rebuilding around outcome-based pricing and letting the AI agent drive resolution economics, EBITDA went from survival to 22%, expanding to 31% by sale. The exit closed at 2.6x TTM revenue. The AI margin improvement transferred fully to the PE-backed acquirer."
      keyTakeaway="AI does not create value until it shows up in EBITDA. The playbook is simple: make AI load-bearing, measure CEC, price at 3–10x CER, reduce delivery cost, and expand your own EBITDA. That's what drives your multiple."
      faqQuestion="How do you convert AI capabilities into EBITDA?"
      faqAnswer="Convert AI to EBITDA by measuring Customer EBITDA Created (CEC), pricing at 3–10x Customer EBITDA Return (CER), making AI load-bearing in workflows, and tracking AI-attributable revenue as a distinct financial line item."
      relatedLinks={[
        { href: "/ai-saas-retention", label: "AI SaaS Retention" },
        { href: "/outcome-based-pricing-ai", label: "Outcome-Based Pricing" },
        { href: "/saas-to-ai-transition", label: "SaaS → AI Transition" },
      ]}
    />
  );
}
