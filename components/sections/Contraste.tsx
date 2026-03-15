"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";

const sinLivio = [
  {
    text: "Pedidos por WhatsApp, llamadas y Excel",
    detail: "Todo llega por canales distintos. Nada se cruza.",
    icon: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
      </svg>
    ),
  },
  {
    text: "Asignación de palabra o de memoria",
    detail: "El dueño decide quién reparte qué. De cabeza.",
    icon: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
  },
  {
    text: "No sabes dónde está cada vehículo",
    detail: "Hasta que el chofer no contesta, no sabes nada.",
    icon: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
      </svg>
    ),
  },
  {
    text: "Evidencia en fotos sueltas de WhatsApp",
    detail: "Se pierden, se confunden, no quedan asociadas al pedido.",
    icon: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
      </svg>
    ),
  },
  {
    text: "Al cierre del día, nadie sabe qué pasó exactamente",
    detail: "Hay que llamar a cada chofer y armar el puzzle.",
    icon: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    text: "Si falta una persona, la operación se para o se desordena",
    detail: "Todo el sistema depende de una cabeza.",
    icon: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    ),
  },
];

const conLivio = [
  {
    text: "Pedidos automáticos por WhatsApp",
    detail: "El cliente manda mensaje, la IA estructura el pedido.",
    icon: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
    ),
  },
  {
    text: "Asignación clara por vehículo y conductor",
    detail: "Arrastras el pedido al chofer. Listo.",
    icon: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
  },
  {
    text: "Seguimiento en tiempo real",
    detail: "Sabes dónde está cada entrega, en cada momento.",
    icon: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
  {
    text: "Evidencia con foto, firma y ubicación",
    detail: "Cada entrega queda registrada con prueba completa.",
    icon: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    text: "El día cierra aunque no estés en todo",
    detail: "Resumen automático. Sin llamar a nadie.",
    icon: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    text: "Tu negocio funciona aunque no estés mirando",
    detail: "El sistema sabe qué hacer. Todos los días, igual.",
    icon: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
];

export default function Contraste() {
  return (
    <section id="contraste" className="relative bg-warm-white">
      {/* Subtle top transition */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-slate-deep to-transparent" />

      <div className="mx-auto max-w-7xl px-5 py-24 pt-36 lg:px-8 lg:py-32 lg:pt-40">
        <ScrollReveal>
          <h2 className="text-center font-[family-name:var(--font-heading)] text-[clamp(28px,4.5vw,44px)] font-extrabold leading-[1.1] tracking-[-1px] text-[#1A1A1A]">
            El mismo día.{" "}
            <span className="text-[#1A1A1A]/40">Dos formas de operarlo.</span>
          </h2>
        </ScrollReveal>

        {/* Two columns */}
        <div className="mt-14 grid gap-6 lg:grid-cols-2 lg:gap-8">
          {/* Sin Livio */}
          <ScrollReveal delay={0.1}>
            <div className="relative h-full overflow-hidden rounded-2xl border border-negative/10 bg-gradient-to-b from-negative/[0.04] to-transparent p-6 sm:p-8">
              {/* Header */}
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-negative/10">
                  <svg className="h-5 w-5 text-negative" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-[#1A1A1A]">
                  Sin LIVIO
                </h3>
              </div>

              {/* Items */}
              <div className="space-y-4">
                {sinLivio.map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-negative/8 text-negative/60">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#1A1A1A]/80">
                        {item.text}
                      </p>
                      <p className="mt-0.5 text-xs text-[#6B7280]">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Background texture */}
              <div className="pointer-events-none absolute -bottom-4 -right-4 h-32 w-32 rounded-full bg-negative/[0.03] blur-[40px]" />
            </div>
          </ScrollReveal>

          {/* Con Livio */}
          <ScrollReveal delay={0.2}>
            <div className="relative h-full overflow-hidden rounded-2xl border border-livio/15 bg-gradient-to-b from-livio/[0.04] to-transparent p-6 sm:p-8">
              {/* Header */}
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-livio/10">
                  <svg className="h-5 w-5 text-livio" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-[#1A1A1A]">
                  Con LIVIO
                </h3>
              </div>

              {/* Items */}
              <div className="space-y-4">
                {conLivio.map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-livio/8 text-livio">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#1A1A1A]/80">
                        {item.text}
                      </p>
                      <p className="mt-0.5 text-xs text-[#6B7280]">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Background texture */}
              <div className="pointer-events-none absolute -bottom-4 -right-4 h-32 w-32 rounded-full bg-livio/[0.04] blur-[40px]" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
