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
          ? "bg-slate-deep/90 backdrop-blur-md shadow-lg shadow-black/10"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        {/* Logo */}
        <a
          href="#"
          className="font-[family-name:var(--font-heading)] text-[22px] font-extrabold tracking-tight text-white"
        >
          LIVIO
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-4 md:flex">
          <span className="flex items-center gap-1.5 text-xs font-medium text-positive">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-positive animate-[pulse-soft_2s_ease-in-out_infinite]" />
            Cupos limitados
          </span>
          <a
            href="#contacto"
            className="rounded-lg bg-livio px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-livio-deep hover:shadow-lg hover:shadow-livio/20"
          >
            Reservar cupo
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Abrir menú"
        >
          <span
            className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
              mobileOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
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
        <div className="bg-slate-deep/95 backdrop-blur-md px-5 pb-6 pt-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-base font-medium text-white/80 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setMobileOpen(false)}
            className="mt-3 block rounded-lg bg-livio px-5 py-3 text-center text-sm font-semibold text-white transition-all hover:bg-livio-deep"
          >
            Reservar cupo
          </a>
        </div>
      </div>
    </nav>
  );
}
