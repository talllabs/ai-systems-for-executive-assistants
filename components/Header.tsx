"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Button from "./Button";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm border-b border-[#E5E7EB] shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-tight group">
            <span className="text-[#0B1F3B] font-bold text-base md:text-lg tracking-tight transition-opacity group-hover:opacity-80">
              AI Systems
            </span>
            <span className="text-[#374151] font-normal text-xs tracking-wider uppercase">
              for Executive Assistants
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/#how-it-works"
              className="text-sm font-medium text-[#374151] hover:text-[#0B1F3B] transition-colors"
            >
              How It Works
            </Link>
            <Link
              href="/#program"
              className="text-sm font-medium text-[#374151] hover:text-[#0B1F3B] transition-colors"
            >
              Program
            </Link>
            <Button href="/apply" variant="primary" size="sm">
              Apply Now
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-[#1F2937] hover:text-[#0B1F3B] transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span className="block w-5 h-0.5 bg-current mb-1.5 transition-transform duration-200" />
            <span
              className={`block w-5 h-0.5 bg-current mb-1.5 transition-opacity duration-200 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span className="block w-5 h-0.5 bg-current transition-transform duration-200" />
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-[#E5E7EB] px-6 py-6 flex flex-col gap-5">
          <Link
            href="/#how-it-works"
            className="text-sm font-medium text-[#374151] hover:text-[#0B1F3B] transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            How It Works
          </Link>
          <Link
            href="/#program"
            className="text-sm font-medium text-[#374151] hover:text-[#0B1F3B] transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Program
          </Link>
          <Button href="/apply" variant="primary" size="md" className="w-fit">
            Apply Now
          </Button>
        </div>
      )}
    </header>
  );
}
