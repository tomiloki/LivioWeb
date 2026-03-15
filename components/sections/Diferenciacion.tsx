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
    <section className="relative overflow-hidden bg-[#071A17]">
      <div className="relative mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 lg:items-center">
          {/* Left: copy */}
          <div>
            <ScrollReveal>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#22B07D]">
                Diferente de verdad
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="mt-3 font-[family-name:var(--font-heading)] text-[clamp(28px,4.5vw,44px)] font-extrabold leading-[1.1] tracking-[-1px] text-[#F3F4EF]">
                No vendemos rutas.
                <br />
                <span className="text-[#22B07D]">Ordenamos tu operación completa.</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="mt-5 text-base leading-relaxed text-[#A9B5AF] lg:text-lg">
                Hoy hay una persona que sabe dónde está cada chofer, qué pedidos van atrasados y cuánto se cobró. LIVIO hace que esa información no dependa de nadie en particular — queda visible, trazable y disponible para todo el equipo.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p className="mt-4 text-base leading-relaxed text-[#A9B5AF]/60 lg:text-lg">
                Desde que llega el primer pedido hasta que cierras el día con evidencia. Eso es lo que resuelve LIVIO.
              </p>
            </ScrollReveal>
          </div>

          {/* Right: visual diagram */}
          <ScrollReveal delay={0.2}>
            <div className="rounded-2xl border border-[#22B07D]/15 bg-[#0D2420] p-6 sm:p-8">
              <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#22B07D]/60">
                Flujo completo
              </p>
              <p className="mb-6 text-sm font-semibold text-[#F3F4EF]">
                Desde el primer pedido hasta el cierre del día
              </p>

              <div className="flex items-start justify-between gap-1">
                {flowSteps.map((step, i) => (
                  <div key={i} className="flex flex-1 flex-col items-center gap-0">
                    {/* Step */}
                    <div className="flex flex-col items-center">
                      <span className="mb-1.5 text-[9px] font-bold tracking-widest text-[#22B07D]/50">
                        0{i + 1}
                      </span>
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#22B07D]/20 bg-[#22B07D]/10 shadow-[0_0_12px_rgba(34,176,125,0.08)]">
                        <svg
                          className="h-5 w-5 text-[#22B07D]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={1.5}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d={step.icon} />
                        </svg>
                      </div>
                      <p className="mt-2 text-center text-[11px] font-semibold text-[#F3F4EF]">
                        {step.label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Arrows row — separate from icons so they never overlap */}
              <div className="mt-[-42px] mb-[62px] flex items-center justify-between px-[22px]">
                {flowSteps.slice(0, -1).map((_, i) => (
                  <div key={i} className="flex flex-1 justify-center">
                    <svg className="h-3 w-3 text-[#22B07D]/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex items-center justify-center gap-2 rounded-xl border border-[#22B07D]/10 bg-[#071A17] px-4 py-2.5">
                <svg className="h-4 w-4 text-[#22B07D]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-xs font-medium text-[#A9B5AF]">
                  Un solo sistema que cubre lo esencial
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
