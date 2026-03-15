"use client";

import { useState, useRef } from "react";
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
      "Sin duplicados ni pedidos perdidos",
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
    title: "Asigna con claridad, no con llamadas",
    description:
      "Ves todo lo que hay que entregar en el día y lo asignas a cada chofer en segundos. Sin Excel, sin coordinación por teléfono, sin confusiones de último minuto.",
    bullets: [
      "Sugerencia de ruta por vehículo y zona",
      "Ruta ajustable al criterio del operador",
      "Capacidad de carga visible por vehículo",
      "Cambios de último minuto sin desorden",
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
    title: "El chofer sabe exactamente qué hacer",
    description:
      "La app guía al chofer paso a paso: qué entregar, en qué orden, cómo registrarlo. No depende de instrucciones por WhatsApp ni de memoria.",
    bullets: [
      "Seguimiento de vehículos en tiempo real",
      "Estado de cada entrega visible al instante",
      "Conductores con ruta clara en la app móvil",
      "Alertas de retraso o incidencia",
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
    title: "Cada entrega queda documentada",
    description:
      "Foto, firma y estado registrado desde la app. Si algo falla, también queda registrado. Trazabilidad real, no suposiciones.",
    bullets: [
      "Foto de entrega desde la app del conductor",
      "Firma digital del receptor",
      "Coordenadas GPS registradas automáticamente",
      "Registro de método de pago contra entrega",
      "Todo vinculado al pedido y al conductor",
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
    title: "Cierre del día en minutos, no en horas",
    description:
      "Al terminar, tienes el resumen completo: qué se entregó, qué no, qué se cobró y qué quedó pendiente. El día cierra con datos, no con llamadas.",
    bullets: [
      "Resumen automático de entregas del día",
      "Pendientes con detalle de cada caso",
      "Exportable para administración o cliente",
      "Historial acumulado de cada conductor",
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
  const touchStartX = useRef<number>(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) < 50) return;
    if (delta > 0) setActive((prev) => Math.min(prev + 1, steps.length - 1));
    else setActive((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section id="como-funciona" className="relative overflow-x-hidden bg-[#071A17]">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-32">
        {/* Section header */}
        <ScrollReveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#22B07D]">
            Cómo funciona
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="mt-3 max-w-2xl font-[family-name:var(--font-heading)] text-[clamp(28px,4.5vw,44px)] font-extrabold leading-[1.1] tracking-[-1px] text-[#F3F4EF]">
            Un flujo simple que ordena tu operación de principio a fin.
          </h2>
        </ScrollReveal>

        {/* Step tabs — desktop only */}
        <ScrollReveal delay={0.15}>
          <div className="mt-10 hidden gap-1 overflow-x-auto pb-2 scrollbar-hide lg:flex lg:gap-2">
            {steps.map((step, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`flex shrink-0 items-center gap-2 rounded-xl border px-4 py-3 text-sm font-medium transition-all ${
                  active === i
                    ? "border-[#22B07D] bg-[#22B07D] text-white shadow-lg shadow-[#22B07D]/20"
                    : "border-white/[0.07] bg-[#0D2420] text-[#A9B5AF] hover:bg-[#112820]"
                }`}
              >
                <span className={active === i ? "text-white/80" : "text-[#9CA3AF]"}>
                  {step.icon}
                </span>
                <span className="whitespace-nowrap">
                  <span className={`mr-1.5 text-xs ${active === i ? "text-white/70" : "text-[#9CA3AF]"}`}>{step.number}</span>
                  {step.label}
                </span>
              </button>
            ))}
          </div>

          {/* Mobile step navigator */}
          <div className="mt-8 flex items-center justify-between lg:hidden">
            <button
              onClick={() => setActive((prev) => Math.max(prev - 1, 0))}
              disabled={active === 0}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.1] bg-[#0D2420] text-[#A9B5AF] transition-opacity disabled:opacity-25"
              aria-label="Paso anterior"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="text-center">
              <span className="font-[family-name:var(--font-heading)] text-sm font-bold text-[#22B07D]">
                {steps[active].number}
              </span>
              <span className="ml-2 text-sm font-medium text-[#F3F4EF]">
                {steps[active].label}
              </span>
              <p className="mt-0.5 text-[10px] uppercase tracking-widest text-[#A9B5AF]/40">
                {active + 1} de {steps.length}
              </p>
            </div>
            <button
              onClick={() => setActive((prev) => Math.min(prev + 1, steps.length - 1))}
              disabled={active === steps.length - 1}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.1] bg-[#0D2420] text-[#A9B5AF] transition-opacity disabled:opacity-25"
              aria-label="Paso siguiente"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </ScrollReveal>

        {/* Content area */}
        <div
          className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-16 lg:items-start"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Left: text */}
          <div className="lg:sticky lg:top-28">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#22B07D]/10">
              <span className="font-[family-name:var(--font-heading)] text-lg font-bold text-[#22B07D]">
                {steps[active].number}
              </span>
            </div>

            <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold tracking-[-0.5px] text-[#F3F4EF] lg:text-3xl">
              {steps[active].title}
            </h3>

            <p className="mt-4 text-base leading-relaxed text-[#A9B5AF] lg:text-lg">
              {steps[active].description}
            </p>

            <ul className="mt-6 space-y-3">
              {steps[active].bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg
                    className="mt-0.5 h-5 w-5 shrink-0 text-[#22B07D]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-[#A9B5AF]">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: mockup */}
          <div className="flex w-full min-w-0 flex-col items-center gap-4">
            <div
              className="w-full min-w-0 transition-all duration-500 ease-out"
              key={active}
              style={{
                animation: "fade-up 0.5s ease-out both",
              }}
            >
              {mockups[active]}
            </div>
            {/* Swipe hint — mobile only */}
            <div className="flex items-center gap-2 lg:hidden">
              <svg className="h-3.5 w-3.5 animate-[pulse_2s_ease-in-out_infinite] text-[#22B07D]/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#A9B5AF]/40">desliza</span>
              <svg className="h-3.5 w-3.5 animate-[pulse_2s_ease-in-out_infinite] text-[#22B07D]/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
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
                active === i ? "w-6 bg-[#22B07D]" : "w-2 bg-white/[0.12]"
              }`}
              aria-label={`Paso ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
