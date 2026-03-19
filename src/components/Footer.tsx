import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border mt-24 py-12 px-6 md:px-12 max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between gap-8">
        <div>
          <p className="font-mono text-sm text-muted">
            © {new Date().getFullYear()} Mike de la Cruz
          </p>
        </div>
        <div className="flex gap-6">
          <Link href="/ai-to-ebitda-playbook" className="text-[11px] md:text-sm text-muted hover:text-ink transition-colors">
            AI → EBITDA
          </Link>
          <Link href="/saas-to-ai-transition" className="text-[11px] md:text-sm text-muted hover:text-ink transition-colors">
            SaaS → AI
          </Link>
          <Link href="/outcome-based-pricing-ai" className="text-[11px] md:text-sm text-muted hover:text-ink transition-colors">
            Outcome-Based Pricing
          </Link>
        </div>
      </div>
    </footer>
  );
}
