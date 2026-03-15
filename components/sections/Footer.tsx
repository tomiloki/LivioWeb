export default function Footer() {
  return (
    <footer className="bg-[#071A17]">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <span className="font-[family-name:var(--font-heading)] text-xl font-extrabold tracking-tight text-[#F3F4EF]">
              LIVIO
            </span>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-[#A9B5AF]">
              La operación logística de tu pyme, en orden.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-[#A9B5AF]">
              Navegación
            </p>
            <ul className="space-y-2.5">
              {[
                { label: "El problema", href: "#problema" },
                { label: "Cómo funciona", href: "#como-funciona" },
                { label: "Nosotros", href: "#equipo" },
                { label: "Contacto", href: "#contacto" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-[#A9B5AF] transition-colors hover:text-[#22B07D]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-[#A9B5AF]">
              Contacto
            </p>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="mailto:contacto@liviogistics.com"
                  className="text-sm text-[#A9B5AF] transition-colors hover:text-[#22B07D]"
                >
                  contacto@liviogistics.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+56998817621"
                  className="text-sm text-[#A9B5AF] transition-colors hover:text-[#22B07D]"
                >
                  +56 9 9881 7621
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-[#A9B5AF]">
              Legal
            </p>
            <ul className="space-y-2.5">
              <li>
                <span className="text-sm text-[#A9B5AF]">
                  Política de privacidad
                </span>
              </li>
              <li>
                <span className="text-sm text-[#A9B5AF]">
                  Términos de servicio
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-white/[0.06] pt-6 text-center">
          <p className="text-xs text-[#A9B5AF]/60">
            &copy; {new Date().getFullYear()} LIVIO. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
