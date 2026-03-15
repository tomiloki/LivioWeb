"use client";

import ChaosMockup from "@/components/mockups/ChaosMockup";
import ScrollReveal from "@/components/ui/ScrollReveal";

const painPoints = [
  {
    title: "WhatsApp, llamadas, Excel. Todo llega, nada se cruza.",
    description:
      "Los pedidos entran por todos lados. El dueño los anota, los recuerda o los pierde. No hay un solo lugar donde esté todo.",
  },
  {
    title: "Si falta quien coordina, nadie sabe qué hacer.",
    description:
      "Toda la lógica de quién reparte qué, a dónde, y en qué orden está en la cabeza de una persona. Si esa persona no está un día, todo se desordena.",
  },
  {
    title: "El día termina y hay que armar el rompecabezas para cerrar.",
    description:
      "Fotos sueltas en WhatsApp, cobros sin confirmar, pedidos que nadie sabe si llegaron. Cerrar el día es un acto de fe.",
  },
];

export default function Problema() {
  return (
    <section id="problema" className="relative overflow-hidden bg-slate-deep">
      {/* Top gradient blending with hero */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-slate-deep to-transparent" />

      {/* Subtle radial glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-negative/[0.03] blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
        {/* Section header */}
        <ScrollReveal className="mb-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-negative/70">
            El problema real
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="max-w-3xl font-[family-name:var(--font-heading)] text-[clamp(28px,4.5vw,46px)] font-extrabold leading-[1.1] tracking-[-1px] text-white">
            Tu operación funciona porque tú estás en todo.{" "}
            <span className="text-white/40">
              Pero tiene un techo.
            </span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/40 lg:text-lg">
            Los pedidos llegan por WhatsApp, por llamada, por chat. Alguien los anota, los asigna
            de memoria, coordina a los choferes por teléfono y al final del día tiene que reconstruir
            qué se cobró y qué quedó pendiente. Si esa persona no está un día, la operación se complica.
          </p>
        </ScrollReveal>

        {/* Two-part layout: pain points + chaos mockup */}
        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          {/* Left: Pain points */}
          <div className="space-y-8">
            {painPoints.map((point, i) => (
              <ScrollReveal key={i} delay={0.1 * (i + 1)}>
                <div className="flex gap-4">
                  <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-negative/10">
                    <span className="text-sm font-bold text-negative/70">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold leading-snug text-white/90 lg:text-lg">
                      {point.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/40">
                      {point.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Right: Chaos mockup */}
          <ScrollReveal delay={0.2}>
            <ChaosMockup />
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}
