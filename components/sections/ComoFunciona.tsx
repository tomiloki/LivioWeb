"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import OrdersPanelMockup from "@/components/mockups/OrdersPanelMockup";
import AssignmentMockup from "@/components/mockups/AssignmentMockup";
import DriverAppMockup from "@/components/mockups/DriverAppMockup";
import EvidenceMockup from "@/components/mockups/EvidenceMockup";
import DayCloseMockup from "@/components/mockups/DayCloseMockup";

const steps = [
  {
    number: "01",
    label: "Recibe pedidos",
    title: "Todos los pedidos en un solo lugar",
    description:
      "Sin importar de dónde vienen — WhatsApp, llamada, formulario — todos los pedidos del día quedan centralizados desde el primer momento. Nada se pierde. Nada queda en la memoria de nadie.",
    bullets: [
      "Pedidos de WhatsApp ingresan automáticamente por IA",
      "Ingreso manual en segundos desde el panel",
      "Estado visible desde el primer momento",
    ],
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
    ),
  },
  {
    number: "02",
    label: "Planifica",
    title: "Asigna entregas en un par de clicks",
    description:
      "El operador ve los pedidos pendientes y los choferes disponibles. Asignar es arrastrar un pedido al chofer indicado. Sin llamadas, sin depender de la memoria.",
    bullets: [
      "Vista de carga por chofer y vehículo",
      "Pedidos urgentes destacados",
      "Asignación clara, trazable, sin ambigüedad",
    ],
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
  },
  {
    number: "03",
    label: "Ejecuta",
    title: "El chofer sabe qué hacer, sin preguntarle a nadie",
    description:
      "Cada chofer ve sus entregas del día en orden, con dirección, cliente y detalle. Actualiza el estado con un toque. Sin llamar al jefe, sin depender de instrucciones verbales.",
    bullets: [
      "Ruta del día en la palma de su mano",
      "Estado actualizado en tiempo real",
      "El operador ve todo sin preguntar",
    ],
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    number: "04",
    label: "Registra evidencia",
    title: "Cada entrega queda con prueba completa",
    description:
      "Foto del producto entregado, firma del receptor, ubicación GPS y registro de pago. Todo automático, todo asociado al pedido. Sin fotos sueltas en WhatsApp que después nadie encuentra.",
    bullets: [
      "Foto, firma digital y GPS automáticos",
      "Registro de pago recibido",
      "Evidencia asociada al pedido, siempre",
    ],
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    number: "05",
    label: "Cierra el día",
    title: "El día se cierra solo. Tú solo revisas.",
    description:
      "Al final de la jornada, el resumen está listo: cuántas entregas se hicieron, quién las hizo, qué quedó pendiente, cuánto se cobró. Sin llamar a nadie, sin armar el puzzle.",
    bullets: [
      "Resumen automático por chofer",
      "Evidencia completa de cada entrega",
      "Incidentes y pendientes visibles",
    ],
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12" />
      </svg>
    ),
  },
];

const mockups = [
  <OrdersPanelMockup key="orders" />,
  <AssignmentMockup key="assign" />,
  <DriverAppMockup key="driver" />,
  <EvidenceMockup key="evidence" />,
  <DayCloseMockup key="close" />,
];

export default function ComoFunciona() {
  const [active, setActive] = useState(0);

  return (
    <section id="como-funciona" className="relative bg-warm-white">
      <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
        {/* Section header */}
        <ScrollReveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-livio">
            Cómo funciona
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="mt-3 max-w-2xl font-[family-name:var(--font-heading)] text-[clamp(28px,4.5vw,44px)] font-extrabold leading-[1.1] tracking-[-1px] text-[#1A1A1A]">
            Un flujo simple que ordena tu operación de principio a fin.
          </h2>
        </ScrollReveal>

        {/* Step tabs — horizontal scrollable on mobile */}
        <ScrollReveal delay={0.15}>
          <div className="mt-10 flex gap-1 overflow-x-auto pb-2 scrollbar-hide sm:gap-2">
            {steps.map((step, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`flex shrink-0 items-center gap-2 rounded-xl px-4 py-3 text-sm font-medium transition-all ${
                  active === i
                    ? "bg-livio text-white shadow-lg shadow-livio/20"
                    : "bg-black/[0.03] text-[#6B7280] hover:bg-black/[0.06]"
                }`}
              >
                <span className={active === i ? "text-white/70" : "text-[#6B7280]/50"}>
                  {step.icon}
                </span>
                <span className="whitespace-nowrap">
                  <span className="mr-1.5 text-xs opacity-60">{step.number}</span>
                  {step.label}
                </span>
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Content area */}
        <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-16 lg:items-start">
          {/* Left: text */}
          <div className="lg:sticky lg:top-28">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-livio/10">
              <span className="font-[family-name:var(--font-heading)] text-lg font-bold text-livio">
                {steps[active].number}
              </span>
            </div>

            <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold tracking-[-0.5px] text-[#1A1A1A] lg:text-3xl">
              {steps[active].title}
            </h3>

            <p className="mt-4 text-base leading-relaxed text-[#6B7280] lg:text-lg">
              {steps[active].description}
            </p>

            <ul className="mt-6 space-y-3">
              {steps[active].bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg
                    className="mt-0.5 h-5 w-5 shrink-0 text-livio"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-[#1A1A1A]/70">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: mockup */}
          <div className="flex justify-center">
            <div
              className="w-full transition-all duration-500 ease-out"
              key={active}
              style={{
                animation: "fade-up 0.5s ease-out both",
              }}
            >
              {mockups[active]}
            </div>
          </div>
        </div>

        {/* Step dots mobile indicator */}
        <div className="mt-10 flex justify-center gap-2 lg:hidden">
          {steps.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-2 rounded-full transition-all ${
                active === i ? "w-6 bg-livio" : "w-2 bg-black/10"
              }`}
              aria-label={`Paso ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
