"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const faqs = [
  {
    q: "¿Qué tan difícil es implementar LIVIO en mi empresa?",
    a: "El onboarding lo hacemos nosotros contigo. No necesitas conocimientos técnicos. En la primera semana ya estás operando con el sistema.",
  },
  {
    q: "¿Mis choferes necesitan un celular especial?",
    a: "No. La app funciona en cualquier smartphone Android o iPhone con conexión a internet. No requiere un equipo nuevo.",
  },
  {
    q: "¿Qué pasa después de los 2 meses de piloto?",
    a: "Si LIVIO te sirve, seguimos con un precio especial de lanzamiento. Si no, no hay compromiso — tus datos son tuyos y los puedes exportar en cualquier momento.",
  },
  {
    q: "¿LIVIO reemplaza a mi despachador o coordinador?",
    a: "No. LIVIO le da herramientas al operador para que haga su trabajo más rápido y con menos errores. La persona sigue tomando las decisiones — el sistema ordena la información.",
  },
  {
    q: "¿Funciona para mi rubro específico?",
    a: "LIVIO está diseñado para pymes con reparto recurrente: agua embotellada, gas, distribución mayorista, Horeca. Si tu operación es pedido → despacho → entrega, te sirve.",
  },
  {
    q: "¿Cómo funciona la recepción de pedidos por WhatsApp?",
    a: "Tu cliente envía un mensaje de WhatsApp como lo haría normalmente. Una IA interpreta el pedido y lo estructura automáticamente. El operador revisa, confirma y asigna. Las excepciones las resuelve la persona, no el bot.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-black/[0.06]">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <span className="pr-4 text-base font-medium text-[#1A1A1A] lg:text-lg">
          {q}
        </span>
        <svg
          className={`h-5 w-5 shrink-0 text-[#6B7280] transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-48 pb-5" : "max-h-0"
        }`}
      >
        <p className="text-sm leading-relaxed text-[#6B7280]">{a}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="relative bg-white">
      <div className="mx-auto max-w-3xl px-5 py-24 lg:px-8 lg:py-32">
        <ScrollReveal>
          <h2 className="text-center font-[family-name:var(--font-heading)] text-[clamp(28px,4vw,38px)] font-extrabold tracking-[-1px] text-[#1A1A1A]">
            Preguntas frecuentes
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mt-12">
            {faqs.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </ScrollReveal>

        {/* Bottom CTA */}
        <ScrollReveal delay={0.15}>
          <div className="mt-12 text-center">
            <p className="text-sm text-[#6B7280]">
              ¿Tienes otra pregunta?{" "}
              <a
                href="#contacto"
                className="font-medium text-livio transition-colors hover:text-livio-deep"
              >
                Escríbenos directo
              </a>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
