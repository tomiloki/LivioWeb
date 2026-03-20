"use client";

import ChaosMockup from "@/components/mockups/ChaosMockup";
import ScrollReveal from "@/components/ui/ScrollReveal";

const painPoints = [
  {
    title: "Los pedidos se pierden antes de llegar a la ruta.",
    description:
      "Los pedidos llegan por WhatsApp mientras tu equipo está en la calle. Cuando nadie está pendiente, el pedido se pierde — y el cliente no vuelve a avisar.",
  },
  {
    title: "Todo depende de que una persona esté en todo.",
    description:
      "Asignar choferes, armar rutas, resolver cambios en el momento. Todo vive en la cabeza de alguien. Si esa persona falla o simplemente no está, la operación se desordena.",
  },
  {
    title: "El cierre del día depende de que alguien lo junte todo a mano.",
    description:
      "Quién entregó, quién no, cuánto cobró cada chofer. Esa información está en fotos de WhatsApp, llamadas y en la memoria de cada uno. Cuadrarlo bien depende de que alguien lo junte todo a mano.",
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
            El reparto crece. <span className="text-[#22B07D]">El caos también.</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#A9B5AF] lg:text-lg">
            Un WhatsApp perdido. Un Excel desactualizado. Un día que no cierra.
          </p>
        </ScrollReveal>

        {/* Two-part layout: pain points + chaos mockup */}
        <div className="mt-8 grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* Left: Pain points */}
          <div className="space-y-6 lg:space-y-4">
            {painPoints.map((point, i) => (
              <ScrollReveal key={i} delay={0.1 * (i + 1)} className="lg:min-h-[132px]">
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
