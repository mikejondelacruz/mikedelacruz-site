import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CEO Mandate — Mike de la Cruz",
  description:
    "Select CEO mandates to rebuild B2B SaaS companies around AI. Revenue quality, margin expansion, and exit-grade performance.",
  openGraph: {
    title: "CEO Mandate — Mike de la Cruz",
    description: "Select CEO mandates to rebuild B2B SaaS companies around AI.",
    url: "https://www.mikedelacruz.com/contact",
    type: "website",
  },
};

export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto px-6 md:px-12 py-16">
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
        Your company has AI. It has not translated to value.
      </h1>

      <p className="text-lg text-muted mt-6 leading-relaxed">
        That&apos;s the problem I solve.
      </p>
      <p className="text-lg text-muted mt-4 leading-relaxed">
        Two rebuilds, same pattern. In both cases, the AI worked before the operating model did. Rationalize the portfolio, tie the AI agent to customer P&amp;L, and install a new operating cadence to convert AI into EBITDA.
      </p>

      {/* Best for */}
      <div className="border-l-2 border-ink pl-6 mt-12">
        <h2 className="text-sm font-mono uppercase tracking-widest text-muted mb-4">
          Best for
        </h2>
        <div className="space-y-2 text-base leading-relaxed">
          <p>PE- or venture-backed B2B SaaS.</p>
          <p>$10M–$75M ARR.</p>
          <p>AI capability is real, but GTM, growth, and margin have not caught up.</p>
          <p>Needs EBITDA impact, not AI narrative.</p>
        </div>
      </div>

      {/* Most impactful when */}
      <div className="border-l-2 border-ink pl-6 mt-12">
        <h2 className="text-sm font-mono uppercase tracking-widest text-muted mb-4">
          Most impactful when
        </h2>
        <div className="space-y-2 text-base leading-relaxed">
          <p>The product works, but the business model does not.</p>
          <p>AI exists in market, but has not changed the P&amp;L.</p>
          <p>The company needs tighter focus, faster GTM learning, and a reset around one high-value workflow.</p>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-12 border-t border-border pt-8">
        <p className="text-base leading-relaxed">
          If this matches the situation, reach out.
        </p>
        <div className="mt-6 space-y-2 text-base">
          <p>
            <span className="text-muted">Email:</span>{" "}
            <a
              href="mailto:mikejdelacruz@gmail.com"
              className="underline hover:text-muted transition-colors"
            >
              mikejdelacruz@gmail.com
            </a>
          </p>
          <p>
            <span className="text-muted">LinkedIn:</span>{" "}
            <a
              href="https://www.linkedin.com/in/mikejdelacruz"
              className="underline hover:text-muted transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/mikejdelacruz
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
