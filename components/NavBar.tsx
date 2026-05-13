"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "./Logo";

const navLinks = [
  { href: "/lab", label: "LAB" },
  { href: "/products", label: "PRODUTOS" },
  { href: "/patents", label: "PATENTES" },
  { href: "/spec", label: "SPEC" },
];

export function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-bg/80 backdrop-blur-sm border-b border-white/8">
      <div className="max-w-6xl mx-auto px-5 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 text-alloy hover:text-white transition-colors"
        >
          <Logo size={22} />
          <span className="font-mono text-[11px] tracking-[0.2em] uppercase hidden sm:block">
            TNEEMO
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-mono text-[11px] tracking-[0.2em] uppercase text-niobium hover:text-alloy transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="/dragonrealms"
            className="font-mono text-[11px] tracking-[0.15em] uppercase text-uplink hover:text-blue-400 transition-colors"
          >
            DRAGONREALMS ↗
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <span
            className={`block w-5 h-px bg-alloy transition-transform origin-center ${
              mobileOpen ? "rotate-45 translate-y-[3.5px]" : ""
            }`}
          />
          <span
            className={`block w-5 h-px bg-alloy transition-opacity ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-px bg-alloy transition-transform origin-center ${
              mobileOpen ? "-rotate-45 -translate-y-[3.5px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 top-14 bg-bg z-40 flex flex-col p-8 gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="font-mono text-[13px] tracking-[0.3em] uppercase text-alloy border-b border-white/8 pb-4"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="/dragonrealms"
            onClick={() => setMobileOpen(false)}
            className="font-mono text-[13px] tracking-[0.3em] uppercase text-uplink border-b border-white/8 pb-4"
          >
            DRAGONREALMS ↗
          </a>
        </div>
      )}
    </nav>
  );
}
