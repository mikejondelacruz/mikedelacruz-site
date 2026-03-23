import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border mt-14 py-10 px-6 md:px-12 max-w-5xl mx-auto">
      <div className="flex flex-row justify-between items-center">
        <div>
          <p className="font-mono text-sm text-muted">
            © {new Date().getFullYear()} Mike de la Cruz
          </p>
        </div>
        <div>
          <Link href="/frameworks" className="font-mono text-sm tracking-wide text-muted hover:text-ink transition-colors">
            Frameworks
          </Link>
        </div>
      </div>
    </footer>
  );
}
