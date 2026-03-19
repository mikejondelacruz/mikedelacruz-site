import Link from "next/link";

const links = [
  { href: "/proof", label: "Results" },
  { href: "/about", label: "About" },
  { href: "/writing", label: "Writing" },
  { href: "/contact", label: "Work With Mike" },
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
            className="text-sm text-muted hover:text-ink transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
