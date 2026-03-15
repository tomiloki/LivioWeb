"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";

const flowSteps = [
  { label: "Pedido", icon: "M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" },
  { label: "Asignación", icon: "M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6z" },
  { label: "Ejecución", icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" },
  { label: "Evidencia", icon: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" },
  { label: "Cierre", icon: "M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12" },
];

export default function Diferenciacion() {
  return (
    <section className="relative overflow-hidden bg-slate-deep">
      {/* Subtle gradient */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-livio/[0.04] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 lg:items-center">
          {/* Left: copy */}
          <div>
            <ScrollReveal>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-livio/70">
                Diferente de verdad
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="mt-3 font-[family-name:var(--font-heading)] text-[clamp(28px,4.5vw,44px)] font-extrabold leading-[1.1] tracking-[-1px] text-white">
                No vendemos rutas.{" "}
                <span className="text-livio">Ordenamos tu operación completa.</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="mt-5 text-base leading-relaxed text-white/45 lg:text-lg">
                Las apps de rutas optimizan un pedazo del problema: por dónde ir. Pero tu
                operación empieza mucho antes y termina mucho después de la ruta. Empieza
                cuando llega el pedido y termina cuando cierras el día con evidencia de todo
                lo que pasó.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p className="mt-4 text-base leading-relaxed text-white/45 lg:text-lg">
                LIVIO cubre ese flujo completo. Desde que llega el primer pedido hasta que
                cierras el día con evidencia. Eso es lo que resuelve LIVIO.
              </p>
            </ScrollReveal>
          </div>

          {/* Right: visual diagram */}
          <ScrollReveal delay={0.2}>
            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 sm:p-8">
              {/* Competitors bar */}
              <div className="mb-8">
                <p className="mb-3 text-xs font-medium uppercase tracking-wider text-white/30">
                  Apps de rutas
                </p>
                <div className="relative">
                  {/* Full track */}
                  <div className="flex items-center gap-0">
                    {flowSteps.map((step, i) => (
                      <div key={i} className="flex flex-1 flex-col items-center">
                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                            i === 2
                              ? "bg-white/[0.08] ring-1 ring-white/10"
                              : "bg-white/[0.03]"
                          }`}
                        >
                          <svg
                            className={`h-4 w-4 ${i === 2 ? "text-white/50" : "text-white/15"}`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={1.5}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d={step.icon} />
                          </svg>
                        </div>
                        <p className={`mt-2 text-[10px] sm:text-xs ${
                          i === 2 ? "text-white/40 font-medium" : "text-white/15"
                        }`}>
                          {step.label}
                        </p>
                      </div>
                    ))}
                  </div>
                  {/* Connector line */}
                  <div className="absolute top-5 left-[10%] right-[10%] h-px bg-white/[0.06]" />
                  {/* Highlighted segment — only step 3 (Ejecución/Rutas) */}
                  <div className="absolute top-4 left-[36%] w-[28%] h-3 rounded-full bg-white/[0.06] border border-white/[0.08]" />
                </div>
                <p className="mt-4 text-center text-xs text-white/25 italic">
                  Solo optimizan por dónde ir
                </p>
              </div>

              {/* Divider */}
              <div className="my-6 border-t border-white/[0.06]" />

              {/* LIVIO bar */}
              <div>
                <p className="mb-3 text-xs font-medium uppercase tracking-wider text-livio/60">
                  LIVIO
                </p>
                <div className="relative">
                  <div className="flex items-center gap-0">
                    {flowSteps.map((step, i) => (
                      <div key={i} className="flex flex-1 flex-col items-center">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-livio/15 ring-1 ring-livio/20">
                          <svg
                            className="h-4 w-4 text-livio"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={1.5}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d={step.icon} />
                          </svg>
                        </div>
                        <p className="mt-2 text-[10px] sm:text-xs font-medium text-livio/70">
                          {step.label}
                        </p>
                      </div>
                    ))}
                  </div>
                  {/* Connector line — full */}
                  <div className="absolute top-5 left-[10%] right-[10%] h-px bg-livio/30" />
                  {/* Full coverage bar */}
                  <div className="absolute top-4 left-[6%] right-[6%] h-3 rounded-full bg-livio/10 border border-livio/20" />
                </div>
                <p className="mt-4 text-center text-xs text-livio/50 font-medium">
                  Cubre el flujo operativo completo
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
