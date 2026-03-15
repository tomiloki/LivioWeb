"use client";

import ChaosMockup from "@/components/mockups/ChaosMockup";
import ScrollReveal from "@/components/ui/ScrollReveal";

const painPoints = [
  {
    title: "Primero hay que capturar todo lo que entra.",
    description:
      "Pedidos por WhatsApp, llamadas, mensajes y planillas. Entre responder clientes y anotar información, se pueden perder ventas.",
  },
  {
    title: "Después hay que traducir eso en reparto real.",
    description:
      "Asignar pedidos, coordinar choferes, ajustar rutas y resolver cambios en el momento consume tiempo y atención todo el día.",
  },
  {
    title: "Y al final, hay que armar el cierre pieza por pieza.",
    description:
      "Fotos, pagos, entregas e incidencias no siempre quedan en un mismo lugar, así que cerrar bien depende de volver a juntar todo.",
  },
];

export default function Problema() {
  return (
    <section id="problema" className="relative overflow-hidden bg-[#071A17]">
      <div className="relative mx-auto max-w-7xl px-5 py-16 pb-12 lg:px-8 lg:py-32 lg:pb-16">
        {/* Section header */}
        <ScrollReveal className="mb-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#22B07D] sm:text-sm">
            El problema real
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="max-w-3xl font-[family-name:var(--font-heading)] text-[clamp(28px,4.5vw,46px)] font-extrabold leading-[1.1] tracking-[-1px] text-[#F3F4EF]">
            Mientras más crece tu operación, <span className="text-[#22B07D]">más te exige estar en todo.</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#A9B5AF] lg:text-lg">
            Los pedidos llegan por distintos canales y alguien tiene que mantener todo en orden:
            anotarlos, coordinarlos y cerrar el día entendiendo qué pasó en terreno. Cuando muchas cosas
            dependen de una misma persona, la operación se complica.
          </p>
        </ScrollReveal>

        {/* Two-part layout: pain points + chaos mockup */}
        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          {/* Left: Pain points */}
          <div className="space-y-8">
            {painPoints.map((point, i) => (
              <ScrollReveal key={i} delay={0.1 * (i + 1)}>
                <div className="flex gap-4">
                  <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[#22B07D]/15 bg-[#0D2420]">
                    <span className="text-sm font-bold text-[#22B07D]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold leading-snug text-[#F3F4EF] lg:text-lg">
                      {point.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#A9B5AF]">
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
