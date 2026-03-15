"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "El problema", href: "#problema" },
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "Nosotros", href: "#equipo" },
  { label: "Contacto", href: "#contacto" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[#22B07D]/15 bg-[#071A17]/90 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        {/* Logo */}
        <a
          href="#"
          className="font-[family-name:var(--font-heading)] text-[22px] font-extrabold tracking-tight text-[#F3F4EF]"
        >
          LIVIO
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-2 py-1 text-sm font-medium text-[#F3F4EF]/70 transition-all hover:text-[#F3F4EF]"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-4 md:flex">
          <span className="flex items-center gap-1.5 text-xs font-medium text-[#22B07D]">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#22B07D] animate-[pulse-soft_2s_ease-in-out_infinite]" />
            Cupos limitados
          </span>
          <a
            href="#contacto"
            className="rounded-lg bg-[#22B07D] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#1B9468] hover:shadow-lg hover:shadow-[#22B07D]/20"
          >
            Reservar cupo
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="-mr-2 flex flex-col items-center justify-center gap-1.5 p-2 md:hidden"
          aria-label="Abrir menú"
        >
          <span
            className={`block h-0.5 w-6 bg-[#F3F4EF] transition-all duration-300 ${
              mobileOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-[#F3F4EF] transition-all duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-[#F3F4EF] transition-all duration-300 ${
              mobileOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          mobileOpen ? "max-h-80" : "max-h-0"
        }`}
      >
        <div className="border-t border-[#22B07D]/15 bg-[#071A17]/95 backdrop-blur-md px-5 pb-6 pt-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block rounded-md px-2 py-3 text-base font-medium text-[#F3F4EF]/80 transition-all hover:text-[#F3F4EF]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setMobileOpen(false)}
            className="mt-3 block rounded-lg bg-[#22B07D] px-5 py-3 text-center text-sm font-semibold text-white transition-all hover:bg-[#1B9468]"
          >
            Reservar cupo
          </a>
        </div>
      </div>
    </nav>
  );
}
