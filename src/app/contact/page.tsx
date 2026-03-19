import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Mike de la Cruz",
  description:
    "For operators running $10–$75M SaaS companies and investors evaluating AI transitions, exit positioning, and revenue durability.",
};

export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto px-6 md:px-12 py-16">
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
        Contact
      </h1>

      <div className="mt-12 space-y-8">
        <div>
          <h2 className="text-sm font-mono uppercase tracking-widest text-muted mb-3">
            For operators
          </h2>
          <p className="text-base leading-relaxed">
            I rebuild $10–$75M SaaS companies by turning AI into EBITDA. Two companies rebuilt under live operating pressure. If AI isn&apos;t showing up in EBITDA, that&apos;s the problem I solve.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-mono uppercase tracking-widest text-muted mb-3">
            For investors and boards
          </h2>
          <p className="text-base leading-relaxed">
            I&apos;ve built AI revenue and sold an AI asset. I&apos;ve seen where it breaks:
          </p>
          <ul className="list-disc list-inside text-base leading-relaxed mt-2 space-y-1">
            <li>AI performs but doesn&apos;t renew</li>
            <li>Revenue doesn&apos;t translate to EBITDA</li>
            <li>GTM can&apos;t price outcomes</li>
          </ul>
          <p className="text-base leading-relaxed mt-2">
            The board question is simple: what to keep, what to kill.
          </p>
        </div>

        <div className="border-t border-border pt-8">
          <h2 className="text-sm font-mono uppercase tracking-widest text-muted mb-3">
            Reach out
          </h2>
          <div className="space-y-2 text-base">
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
            <p>
              <span className="text-muted">Email:</span>{" "}
              <a
                href="mailto:mikejdelacruz@gmail.com"
                className="underline hover:text-muted transition-colors"
              >
                mikejdelacruz@gmail.com
              </a>
            </p>
          </div>
          <p className="text-sm text-muted mt-6">
            New Orleans, Louisiana
          </p>
        </div>
      </div>
    </div>
  );
}
