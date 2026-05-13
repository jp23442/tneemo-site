import Link from "next/link";
import { StatusDot } from "./ui/StatusDot";

const footerLinks = [
  { href: "/lab", label: "LAB" },
  { href: "/products", label: "PRODUTOS" },
  { href: "/patents", label: "PATENTES" },
  { href: "/spec", label: "SPEC" },
  { href: "/dragonrealms", label: "DRAGONREALMS" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/8 mt-24 pb-8">
      <div className="max-w-6xl mx-auto px-5 pt-10">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          {/* Left */}
          <div className="flex flex-col gap-2">
            <p className="font-mono text-[11px] tracking-[0.15em] uppercase text-alloy">
              TNEEMO Industries
            </p>
            <p className="font-mono text-[11px] text-niobium">
              Mandaguari, PR · Brasil
            </p>
            <p className="font-mono text-[11px] text-niobium">
              Engenharia industrial, chassis avançados e infraestrutura computacional.
            </p>
            <a
              href="mailto:contato@tneemo.com"
              className="font-mono text-[11px] text-niobium hover:text-alloy transition-colors mt-1"
            >
              contato@tneemo.com
            </a>
          </div>

          {/* Nav */}
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-mono text-[10px] tracking-[0.2em] uppercase text-text-3 hover:text-niobium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-10 pt-6 border-t border-white/8">
          <p className="font-mono text-[10px] text-text-3">
            © 2026 TNEEMO Industries · tneemo.com
          </p>
          <div className="flex items-center gap-2">
            <StatusDot status="online" />
            <span className="font-mono text-[10px] text-text-3 tracking-[0.2em] uppercase">
              NCORE · ONLINE
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
