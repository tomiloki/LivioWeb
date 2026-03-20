"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Comienzo() {
  return (
    <section className="relative bg-[#071A17]">
      <div className="mx-auto max-w-4xl px-5 py-16 lg:px-8 lg:py-24">
        <ScrollReveal>
          <div className="rounded-2xl border border-[#22B07D]/15 bg-[#0D2420] px-6 py-8 sm:px-8 sm:py-10">
            <h2 className="font-[family-name:var(--font-heading)] text-[clamp(28px,4vw,40px)] font-extrabold leading-[1.1] tracking-[-1px] text-[#F3F4EF]">
              Esto es solo el comienzo.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#A9B5AF] lg:text-lg">
              El MVP resuelve lo esencial: pedidos, choferes y cierre del día. Livio está diseñado para seguir mejorando — y lo hará basado en lo que sus primeros clientes necesitan en la operación real.
            </p>
            <p className="mt-5 text-base font-semibold leading-relaxed text-[#F3F4EF] lg:text-lg">
              Entrar ahora no es ser el primer sujeto de prueba. Es tener voz en lo que Livio se convierte.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
