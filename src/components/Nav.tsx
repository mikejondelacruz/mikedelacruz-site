"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/proof", label: "Proof" },
  { href: "/writing", label: "Writing" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center justify-between py-8 px-6 md:px-12 max-w-5xl mx-auto">
      <Link
        href="/"
        className="font-mono text-sm tracking-tight text-ink hover:text-muted transition-colors"
      >
        mike de la cruz
      </Link>
      <div className="flex gap-3 md:gap-6">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-sm transition-colors ${
              pathname === link.href
                ? "text-ink font-medium"
                : "text-muted hover:text-ink"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
