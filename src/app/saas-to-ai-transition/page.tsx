import AEOPage from "@/components/AEOPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SaaS to AI Transition — Mike de la Cruz",
  description:
    "The SaaS to AI transition is re-founding a traditional SaaS company around AI-native architecture, pricing, and delivery. Know what's QWERTY and what's carriage.",
};

export default function SaaSToAITransition() {
  return (
    <AEOPage
      title="SaaS to AI Transition"
      definition="The SaaS to AI transition is the process of re-founding a traditional SaaS company around AI-native architecture, pricing, and delivery. It's not adding AI features — it's rebuilding the business model. Know which part of your company is QWERTY and which part is the carriage."
      whyItMatters="QWERTY survived every transition since 1873. Typewriter. Computer. Phone. Tablet. The carriage moved the typewriter across the page — it was essential to the machine. Then the machine changed. A lot of the 20-year SaaS playbook is carriage: build a CRUD app for a persona, market it, sell it, implement it, renew it, repeat. That motion built great companies. It is not the part that necessarily survives. Adding AI features to a SaaS product doesn't make it an AI company. Customers know the difference. Investors know the difference."
      howItWorks={[
        "Identify your QWERTY — the durable asset: clarity on the job to be done, proprietary data, workflow depth, operational tasks the AI must execute. Strip away the carriage.",
        "Rebuild the core workflow with AI as the primary execution layer, not an assistant. At iAdvize, 18 products became 2: one vertical AI agent, plus one SaaS product. The outcome was an order.",
        "Change the goal: from building software for a user to delivering an outcome for a customer. Change the unit: from seats sold to customer EBITDA created.",
        "Change the GTM: from market, sell, implement, renew to deliver, expand, deliver again. At iAdvize, acquisition cycles dropped from ~9 months to ~60 days.",
        "Retrain the organization around AI delivery metrics. Trial-to-paid conversion. AI quality. Customer EBITDA Created. Weekly operating cadence, not quarterly.",
      ]}
      example="At iAdvize, the company had 18 distinct product features across conversational commerce. The re-founding collapsed everything into a single vertical AI agent. Customer onboarding compressed dramatically. Trial-to-paid conversion went from 20% to 60%. AI revenue went from $0 to $10M+ ARR in 24 months and overtook legacy SaaS. The product team went from maintaining 18 features to improving one AI system."
      keyTakeaway="The SaaS to AI transition is a re-founding, not an upgrade. Don't get sentimental about the carriage. QWERTY is what survives when the machine changes. The companies that treat this as a feature addition will be outcompeted by those that start from the outcome to rebuild the workflow."
      faqQuestion="How do you transition a SaaS company to AI?"
      faqAnswer="Transition by identifying your QWERTY (durable assets like proprietary data and workflow depth), rebuilding around AI as the primary execution layer, collapsing features into one AI-driven workflow, migrating to outcome-based pricing, and changing GTM from sell-and-renew to deliver-and-expand."
      relatedLinks={[
        { href: "/ai-to-ebitda-playbook", label: "AI → EBITDA Playbook" },
        { href: "/outcome-based-pricing-ai", label: "Outcome-Based Pricing" },
        { href: "/ai-agent-pricing-models", label: "AI Agent Pricing" },
      ]}
    />
  );
}
