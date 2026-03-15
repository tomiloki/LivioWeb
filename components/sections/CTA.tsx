"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";

const pilotBenefits = [
  "2 meses de piloto completamente gratuitos",
  "Precio especial de lanzamiento a partir del mes 3",
  "Onboarding incluido desde el día uno",
  "Acceso directo al equipo para dar feedback y moldear el producto",
  "Tus datos siempre son tuyos — exportables en cualquier momento",
];

export default function CTA() {
  return (
    <section id="contacto" className="relative bg-warm-gray">
      <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left: urgency copy + benefits */}
          <div>
            <ScrollReveal>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-soft/20 bg-amber-soft/10 px-4 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-soft animate-[pulse-soft_2s_ease-in-out_infinite]" />
                <span className="text-xs font-semibold text-amber-soft">
                  Cupos limitados — Arranca en abril
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="font-[family-name:var(--font-heading)] text-[clamp(28px,4.5vw,42px)] font-extrabold leading-[1.1] tracking-[-1px] text-[#1A1A1A]">
                El piloto arranca en abril.{" "}
                <span className="text-livio">Reserva tu cupo ahora.</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <p className="mt-4 text-base leading-relaxed text-[#6B7280] lg:text-lg">
                Estamos cerrando los últimos cupos antes del lanzamiento. Si
                tienes entre 1 y 15 vehículos y hoy operas con WhatsApp y Excel,
                este es el momento.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="mt-8">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-[#1A1A1A]/50">
                  Las empresas que entran al piloto reciben
                </p>
                <ul className="space-y-3">
                  {pilotBenefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg
                        className="mt-0.5 h-5 w-5 shrink-0 text-livio"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-sm text-[#1A1A1A]/70">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: form */}
          <ScrollReveal delay={0.15}>
            <div className="rounded-2xl border border-black/[0.06] bg-white p-6 shadow-xl shadow-black/[0.04] sm:p-8">
              <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-[#1A1A1A]">
                Quiero ser empresa piloto
              </h3>
              <p className="mt-2 text-sm text-[#6B7280]">
                Cuéntanos cómo es tu operación hoy y te contactamos.
              </p>

              <form
                className="mt-6 space-y-4"
                onSubmit={(e) => e.preventDefault()}
              >
                <div>
                  <label
                    htmlFor="empresa"
                    className="mb-1.5 block text-xs font-medium text-[#1A1A1A]/60"
                  >
                    Nombre de tu empresa
                  </label>
                  <input
                    id="empresa"
                    type="text"
                    placeholder="Ej: Distribuidora Los Andes"
                    className="w-full rounded-lg border border-black/[0.08] bg-[#FAFAF8] px-4 py-3 text-sm text-[#1A1A1A] placeholder:text-[#6B7280]/40 outline-none transition-colors focus:border-livio/40 focus:ring-2 focus:ring-livio/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-xs font-medium text-[#1A1A1A]/60"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="tu@empresa.cl"
                    className="w-full rounded-lg border border-black/[0.08] bg-[#FAFAF8] px-4 py-3 text-sm text-[#1A1A1A] placeholder:text-[#6B7280]/40 outline-none transition-colors focus:border-livio/40 focus:ring-2 focus:ring-livio/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="telefono"
                    className="mb-1.5 block text-xs font-medium text-[#1A1A1A]/60"
                  >
                    Teléfono
                  </label>
                  <input
                    id="telefono"
                    type="tel"
                    placeholder="+56 9 1234 5678"
                    className="w-full rounded-lg border border-black/[0.08] bg-[#FAFAF8] px-4 py-3 text-sm text-[#1A1A1A] placeholder:text-[#6B7280]/40 outline-none transition-colors focus:border-livio/40 focus:ring-2 focus:ring-livio/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="operacion"
                    className="mb-1.5 block text-xs font-medium text-[#1A1A1A]/60"
                  >
                    Cuéntanos cómo es tu operación hoy
                  </label>
                  <textarea
                    id="operacion"
                    rows={3}
                    placeholder="Ej: tengo 6 vehículos, repartimos agua en bidones, hoy coordino todo por WhatsApp..."
                    className="w-full resize-none rounded-lg border border-black/[0.08] bg-[#FAFAF8] px-4 py-3 text-sm text-[#1A1A1A] placeholder:text-[#6B7280]/40 outline-none transition-colors focus:border-livio/40 focus:ring-2 focus:ring-livio/10"
                  />
                </div>

                <button
                  type="submit"
                  className="group relative w-full overflow-hidden rounded-lg bg-livio py-3.5 text-sm font-semibold text-white transition-all hover:bg-livio-deep hover:shadow-lg hover:shadow-livio/20"
                >
                  <span className="relative z-10">Quiero ser empresa piloto</span>
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                </button>

                <p className="text-center text-[11px] text-[#6B7280]/60">
                  Sin compromiso. Te contactamos en menos de 24 horas.
                </p>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
