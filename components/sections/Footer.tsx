export default function Footer() {
  return (
    <footer className="bg-slate-deep">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <span className="font-[family-name:var(--font-heading)] text-xl font-extrabold tracking-tight text-white">
              LIVIO
            </span>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/40">
              La operación logística de tu pyme, en orden.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-white/30">
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
                    className="text-sm text-white/50 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-white/30">
              Contacto
            </p>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="mailto:contacto@livio.cl"
                  className="text-sm text-white/50 transition-colors hover:text-white"
                >
                  contacto@livio.cl
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-white/30">
              Legal
            </p>
            <ul className="space-y-2.5">
              <li>
                <span className="text-sm text-white/50">
                  Política de privacidad
                </span>
              </li>
              <li>
                <span className="text-sm text-white/50">
                  Términos de servicio
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-white/[0.06] pt-6 text-center">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} LIVIO. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
