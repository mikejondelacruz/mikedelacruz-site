import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border mt-24 py-12 px-6 md:px-12 max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between gap-8">
        <div>
          <p className="font-mono text-sm text-muted">
            © {new Date().getFullYear()} Mike de la Cruz
          </p>
          <p className="text-sm text-muted mt-1">
            AI → EBITDA → Exit Value
          </p>
        </div>
        <div className="flex gap-6">
          <Link href="/ai-saas-retention" className="text-sm text-muted hover:text-ink transition-colors">
            AI SaaS Retention
          </Link>
          <Link href="/outcome-based-pricing-ai" className="text-sm text-muted hover:text-ink transition-colors">
            Outcome-Based Pricing
          </Link>
          <Link href="/ai-to-ebitda-playbook" className="text-sm text-muted hover:text-ink transition-colors">
            AI → EBITDA
          </Link>
        </div>
      </div>
    </footer>
  );
}
