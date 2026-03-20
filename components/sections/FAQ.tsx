"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const faqs = [
  {
    q: "¿Cuánto cuesta Livio?",
    a: "Livio está diseñado para ser accesible para pymes. Sabemos que no tienes el presupuesto de una empresa grande — y nuestros precios lo reflejan. Los planes se definen según tu operación real. Cuéntanos cómo trabajas y te decimos qué te corresponde.",
  },
  {
    q: "¿Funciona para mi rubro?",
    a: "Livio funciona para cualquier negocio con reparto recurrente y flota propia — distribución de alimentos, insumos, flores, lácteos y más. Si tu operación es pedido → despacho → entrega con clientes fijos, Livio funciona para ti.",
  },
  {
    q: "¿Qué tan difícil es implementar Livio?",
    a: "La implementación la llevamos nosotros contigo. No necesitas conocimientos técnicos. En el piloto apuntamos a que estés operando en 30 días o menos — y en la práctica esperamos que sea bastante menos.",
  },
  {
    q: "¿Mis choferes necesitan aprender una app nueva?",
    a: "La app del chofer está diseñada para ser lo más simple posible. No requiere capacitación formal ni un teléfono especial — funciona en cualquier smartphone con conexión a internet. En la práctica, el chofer aprende a usarla en los primeros repartos: registrar el método de pago, agregar un comentario y navegar con Maps. Si sabe usar el celular, en minutos entiende el flujo.",
  },
  {
    q: "¿Qué pasa con los datos de mis clientes?",
    a: "Los datos de tu operación son tuyos. Nunca compartimos información que identifique directamente a tus clientes. Al terminar el contrato, eliminamos los datos sensibles de tu cuenta. Nuestra política de privacidad completa la revisas antes de firmar.",
  },
  {
    q: "¿Qué pasa si el sistema falla en medio de la operación?",
    a: "Durante el piloto el equipo de Livio está disponible para resolver cualquier problema. Puedes llamarnos o escribirnos y respondemos en menos de una hora. Al inicio la relación es directa y cercana.",
  },
  {
    q: "¿Livio reemplaza a mi despachador o coordinador?",
    a: "No. Livio le da a tu operador las herramientas para hacer su trabajo más rápido y con menos errores. La persona sigue tomando las decisiones — el sistema ordena la información para que pueda hacerlo mejor.",
  },
  {
    q: "¿Y si en mi negocio no hay un despachador — el dueño hace todo?",
    a: "Livio también funciona para eso. Si eres tú quien coordina los pedidos y además sales a repartir, tenemos contemplada una solución para operar desde el celular sin necesitar estar en el computador todo el día. Los pedidos llegan solos y tú defines la ruta cuando puedas. Estamos trabajando en la mejor forma de resolverlo para este perfil — y es parte de lo que afinaremos con los primeros clientes pioneros.",
  },
  {
    q: "¿Cómo funciona la recepción de pedidos por WhatsApp?",
    a: "Tu cliente escribe como siempre — en lenguaje natural. Livio interpreta el mensaje y lo estructura. No es un bot con opciones fijas. La conversación se siente humana porque está diseñada para serlo. Los pedidos claros entran solos — las excepciones las resuelve tu equipo.",
  },
  {
    q: "¿Qué pasa después del piloto gratuito?",
    a: "Si Livio te sirve, continuamos con un precio especial de lanzamiento. Si no, no hay compromiso — tus datos son tuyos y puedes exportarlos cuando quieras.",
  },
  {
    q: "¿Hasta cuándo está disponible el piloto?",
    a: "El piloto gratuito de 2 meses está disponible para las primeras 15 empresas pioneras. Una vez que se llenen los cupos, se cierra el programa.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/[0.08]">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <span className="pr-4 text-base font-medium text-[#F3F4EF] lg:text-lg">
          {q}
        </span>
        <svg
          className={`h-5 w-5 shrink-0 text-[#A9B5AF] transition-transform duration-300 ${
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
          open ? "max-h-[1000px] pb-5" : "max-h-0"
        }`}
      >
        <p className="text-sm leading-relaxed text-[#A9B5AF]">{a}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="relative bg-[#071A17]">
      <div className="mx-auto max-w-3xl px-5 py-24 lg:px-8 lg:py-32">
        <ScrollReveal>
          <h2 className="text-center font-[family-name:var(--font-heading)] text-[clamp(28px,4vw,38px)] font-extrabold tracking-[-1px] text-[#F3F4EF]">
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
            <p className="text-sm text-[#A9B5AF]">
              ¿Tienes otra pregunta?{" "}
              <a
                href="#contacto"
                className="font-medium text-[#22B07D] transition-colors hover:text-[#1B9468]"
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
