import Link from "next/link";

export default function About() {
  return (
    <div className="max-w-2xl mx-auto px-6 md:px-12 py-16">
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
        About
      </h1>

      <div className="mt-12 space-y-6 text-base leading-relaxed">
        <p>
          I rebuild $10–$75M B2B SaaS companies by turning AI into EBITDA.
        </p>
        <p>
          Moved two enterprise CX platforms to AI-first under live operating
          pressure. In both, AI worked before the business did. EBITDA followed
          once the model caught up. The legacy SaaS playbook was the constraint.
        </p>
        <p>
          My work sits at a specific intersection: mid-market SaaS where AI
          capability exists but hasn&apos;t hit the P&L. The gap is structural,
          not technical. Outcomes over features. Customer EBITDA impact over
          productivity claims. Deliver before annual contracts. Break GTM silos.
        </p>
        <p>
          I reset the model so AI produces measurable financial value for the
          customer and the business.
        </p>
      </div>

      {/* Career */}
      <div className="mt-16 border-t border-border pt-8">
        <h2 className="text-sm font-mono uppercase tracking-widest text-muted mb-8">
          Operating history
        </h2>

        <div className="space-y-10">
          <div>
            <div className="flex items-baseline justify-between">
              <h3 className="font-medium">President &amp; Chief Strategy Officer</h3>
              <span className="text-sm text-muted font-mono">2023–2026</span>
            </div>
            <p className="text-sm text-muted">iAdvize</p>
            <div className="mt-3 space-y-1 text-sm leading-relaxed">
              <p>Turned 18-product portfolio into a single vertical AI agent.</p>
              <p>Built AI revenue engine from $0→$10M+ ARR in 24 months.</p>
              <p>Reduced customer acquisition cycles from ~9 months→~60 days.</p>
              <p>Trial-to-paid conversion from 20%→60%.</p>
            </div>
          </div>

          <div>
            <div className="flex items-baseline justify-between">
              <h3 className="font-medium">Chief Executive Officer</h3>
              <span className="text-sm text-muted font-mono">2019–2022</span>
            </div>
            <p className="text-sm text-muted">Directly</p>
            <div className="mt-3 space-y-1 text-sm leading-relaxed">
              <p>Customer support platform for Microsoft, Airbnb, AT&amp;T, SAP.</p>
              <p>Took over as CEO at the start of the pandemic, $9M in the hole.</p>
              <p>Raised capital, rebuilt the cost architecture, turned AI into margin expansion driver.</p>
              <p>Sustained 22%+ EBITDA and led asset sale to PE-backed portfolio company.</p>
            </div>
          </div>

          <div>
            <div className="flex items-baseline justify-between">
              <h3 className="font-medium">VP of Sales</h3>
              <span className="text-sm text-muted font-mono">2017–2018</span>
            </div>
            <p className="text-sm text-muted">Arago (KKR-backed)</p>
            <div className="mt-3 space-y-1 text-sm leading-relaxed">
              <p>Led US expansion for European general AI platform (reasoning).</p>
              <p>Secured initial enterprise logos and built enterprise pipeline.</p>
            </div>
          </div>

          <div className="text-sm text-muted">
            <p>Previously: Hewlett Packard Enterprise, SAP, Siebel</p>
          </div>
        </div>
      </div>

      {/* The Playbook */}
      <div className="mt-16 border-t border-border pt-8">
        <h2 className="text-sm font-mono uppercase tracking-widest text-muted mb-6">
          The Playbook
        </h2>
        <ol className="space-y-3">
          {[
            "One high-value workflow",
            "AI that improves customer EBITDA",
            "Consumption pricing tied to value",
            "GTM around continuous value creation",
            "Operating cadence on AI performance + margins",
          ].map((item, i) => (
            <li key={i} className="flex gap-3 text-base">
              <span className="text-muted font-mono text-sm mt-0.5">{i + 1}/</span>
              {item}
            </li>
          ))}
        </ol>
      </div>

      {/* Education */}
      <div className="mt-16 border-t border-border pt-8">
        <h2 className="text-sm font-mono uppercase tracking-widest text-muted mb-6">
          Education
        </h2>
        <p className="text-base">Harvard Business School</p>
        <p className="text-base">Yale University</p>
      </div>

      {/* Typical engagement */}
      <div className="mt-16 bg-white border border-border rounded-lg p-6">
        <h2 className="text-sm font-mono uppercase tracking-widest text-muted mb-4">
          Typical situation
        </h2>
        <div className="space-y-2 text-base leading-relaxed">
          <p>$10M–$75M ARR, enterprise SaaS.</p>
          <p>Growth slowing. New logo velocity feels different.</p>
          <p>AI capability exists but margin hasn&apos;t moved.</p>
          <p>Board asking hard questions about the AI investment.</p>
        </div>
        <Link
          href="/contact"
          className="text-sm font-medium border border-ink px-5 py-2 mt-6 inline-block hover:bg-ink hover:text-paper transition-colors"
        >
          Get in touch
        </Link>
      </div>
    </div>
  );
}
