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
            If you&apos;re running a $10–$75M SaaS company and AI
            hasn&apos;t hit your P&amp;L yet, let&apos;s talk. I work with
            CEOs on the business model side — pricing, retention, and the path
            to AI-driven EBITDA. I&apos;ve done it twice.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-mono uppercase tracking-widest text-muted mb-3">
            For investors
          </h2>
          <p className="text-base leading-relaxed">
            I advise PE firms and growth investors on AI SaaS value creation.
            If you&apos;re evaluating a portfolio company&apos;s AI
            transition, exit positioning, or AI revenue durability, I can help
            with diligence and strategy. I&apos;ve been on both sides of
            AI revenue due diligence.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-mono uppercase tracking-widest text-muted mb-3">
            For boards
          </h2>
          <p className="text-base leading-relaxed">
            The hardest conversation is deciding which parts of the company are
            QWERTY and which parts are carriage. I help boards navigate that
            decision with frameworks tested across two re-foundings.
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
