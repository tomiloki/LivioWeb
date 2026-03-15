"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";

const team = [
  {
    name: "Tomás Fuentealba",
    role: "Co-Founder & CEO",
    bio: "Vio el problema desde adentro trabajando en distribución de agua y paquetería. Construyó Livio para resolverlo.",
    photo: "/images/FuentealbaIA.jpeg",
  },
  {
    name: "Tomás Escalante",
    role: "Co-Founder & CTO",
    bio: "Estuvo en terreno desde el primer día. Lidera la visión técnica del producto.",
    photo: "/images/EscalanteIA.png",
  },
  {
    name: "Esteban Cortés",
    role: "Software Architect — Founder Team",
    bio: "Diseñó y construyó la arquitectura completa de Livio.",
    photo: "/images/estebanIA.png",
  },
  {
    name: "Ignacio Saavedra",
    role: "Head of Operations — Founder Team",
    bio: "Conoce el rubro logístico desde adentro. Acompaña la implementación con cada cliente.",
    photo: "/images/ignacioIA.jpeg",
  },
];

export default function Equipo() {
  return (
    <section id="equipo" className="relative bg-warm-white">
      <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
        {/* Header */}
        <ScrollReveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-livio">
            El equipo
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="mt-3 max-w-xl font-[family-name:var(--font-heading)] text-[clamp(28px,4.5vw,44px)] font-extrabold leading-[1.1] tracking-[-1px] text-[#1A1A1A]">
            Construimos LIVIO porque vimos el problema de cerca.
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-[#6B7280] lg:text-lg">
            Un equipo pequeño con foco en un problema real: la operación
            logística diaria de pymes que merecen mejores herramientas.
          </p>
        </ScrollReveal>

        {/* Team grid */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, i) => (
            <ScrollReveal key={member.name} delay={0.1 * (i + 1)}>
              <div className="group overflow-hidden rounded-2xl border border-black/[0.04] bg-white transition-all hover:shadow-lg hover:shadow-black/[0.04]">
                {/* Photo */}
                <div className="relative aspect-[4/5] overflow-hidden bg-[#F1F0EE]">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  {/* Role badge */}
                  <div className="absolute bottom-3 left-3">
                    <span className="rounded-md bg-livio/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
                      {member.role.split(" — ")[0].split(" & ")[0] === "Co-Founder"
                        ? member.role.split(" — ")[0]
                        : member.role.split(" — ")[0]}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-4">
                  <h3 className="font-[family-name:var(--font-heading)] text-base font-bold text-[#1A1A1A]">
                    {member.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#6B7280]">
                    {member.bio}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
