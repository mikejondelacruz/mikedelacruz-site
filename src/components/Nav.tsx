import Link from "next/link";

const links = [
  { href: "/results", label: "Results" },
  { href: "/about", label: "Operator" },
  { href: "/frameworks", label: "Frameworks" },
];

export default function Nav() {
  return (
    <nav className="flex items-center justify-between py-8 px-6 md:px-12 max-w-5xl mx-auto">
      <Link
        href="/"
        className="font-mono text-sm tracking-tight text-ink hover:text-muted transition-colors"
      >
        Mike de la Cruz
      </Link>
      <div className="flex gap-3 md:gap-6">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-[11px] md:text-sm text-accent hover:text-ink transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
