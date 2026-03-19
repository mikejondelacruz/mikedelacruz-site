import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work With Mike de la Cruz",
  description:
    "For B2B SaaS companies at an AI inflection point. CEOs, investors, and boards evaluating AI transitions, exit positioning, and revenue durability.",
  openGraph: {
    title: "Work With Mike de la Cruz",
    description: "For B2B SaaS companies at an AI inflection point.",
    url: "https://www.mikedelacruz.com/contact",
    type: "website",
  },
};

export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto px-6 md:px-12 py-16">
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
        Work With Mike
      </h1>

      <p className="text-lg text-muted mt-6 leading-relaxed">
        For B2B SaaS companies where AI investment has not yet translated to EBITDA.
      </p>

      <div className="mt-12 space-y-8">
        <div>
          <h2 className="text-sm font-mono uppercase tracking-widest text-muted mb-3">
            For CEOs
          </h2>
          <p className="text-base leading-relaxed">
            Your AI investment is real. Your business model may still be old. That gap is where I operate.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-mono uppercase tracking-widest text-muted mb-3">
            For investors and boards
          </h2>
          <p className="text-base leading-relaxed">
            Most SaaS companies optimize around AI. Some need to be rebuilt around it. I&apos;ve done the second, twice.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-mono uppercase tracking-widest text-muted mb-3">
            For operating roles
          </h2>
          <p className="text-base leading-relaxed">
            Open to select CEO and President roles where the mandate is to rebuild the company around AI and convert that into revenue quality, margin expansion, and exit-grade fundamentals.
          </p>
        </div>

        <div className="border-t border-border pt-8">
          <h2 className="text-sm font-mono uppercase tracking-widest text-muted mb-3">
            Contact
          </h2>
          <div className="space-y-2 text-base">
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
    </div>
  );
}
