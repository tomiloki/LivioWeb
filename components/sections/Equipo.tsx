"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";

const team: { name: string; role: string; bio: string; photo: string; objectPosition?: string }[] = [
  {
    name: "Tomás Fuentealba",
    role: "Co-Founder & CEO",
    bio: "Administrador de empresas que renunció a la gerencia para entender el problema desde adentro. Trabajó como chofer peoneta en distribución y hoy estudia logística para construir Livio con base real — no con supuestos. Livio nació de haberlo vivido, no de una presentación.",
    photo: "/images/FuentealbaIA.jpeg",
    objectPosition: "center center",
  },
  {
    name: "Tomás Escalante",
    role: "Co-Founder & CTO",
    bio: "Lleva más de 7 meses dedicado a Livio desde el primer día — construyó la plataforma web y estuvo en terreno entendiendo el problema que el sistema tiene que resolver. Hoy lidera la construcción del MVP junto al equipo técnico. Aplica herramientas de IA donde realmente aportan — sin forzarlas donde no corresponde.",
    photo: "/images/EscalanteIA.png",
  },
  {
    name: "Esteban Cortés",
    role: "Software Architect",
    bio: "Más de 10 años en desarrollo de software. Hoy lidera equipos técnicos en proyectos de alta exigencia. En Livio es responsable de que la arquitectura del sistema sea sólida desde el día uno.",
    photo: "/images/estebanIA.png",
  },
  {
    name: "Ignacio Saavedra",
    role: "Head of Operations",
    bio: "Más de 10 años en jefaturas logísticas en empresas de gran escala. Conoce las herramientas, los problemas y la incomodidad real de los choferes. En Livio asegura que lo que construimos funcione en la realidad operativa de cada cliente.",
    photo: "/images/ignacioIA.jpeg",
  },
];

function TeamCard({ member }: { member: typeof team[0] }) {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#22B07D]/10 bg-[#0D2420] transition-all hover:border-[#22B07D]/25 hover:shadow-lg hover:shadow-black/30">
      <div className="relative aspect-[4/5] overflow-hidden bg-[#0A1C18]">
        <Image
          src={member.photo}
          alt={member.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          style={{ objectPosition: member.objectPosition ?? "center top" }}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        <div className="absolute bottom-3 left-3">
          <span className="rounded-md bg-[#22B07D] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
            {member.role}
          </span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-[family-name:var(--font-heading)] text-base font-bold text-[#F3F4EF]">
          {member.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-[#A9B5AF]">
          {member.bio}
        </p>
      </div>
    </div>
  );
}

export default function Equipo() {
  const [activeCard, setActiveCard] = useState(0);
  const touchStartX = useRef<number>(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) < 50) return;
    if (delta > 0) setActiveCard((prev) => Math.min(prev + 1, team.length - 1));
    else setActiveCard((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section id="equipo" className="relative bg-[#071A17]">
      <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
        {/* Header */}
        <ScrollReveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#22B07D]">
            El equipo
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="mt-3 max-w-3xl font-[family-name:var(--font-heading)] text-[clamp(28px,4.5vw,44px)] font-extrabold leading-[1.1] tracking-[-1px] text-[#F3F4EF]">
            Construimos Livio porque conocemos el problema desde adentro.
          </h2>
        </ScrollReveal>

        {/* Mobile carousel - visible only on < sm */}
        <div
          className="mt-14 sm:hidden"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            key={activeCard}
            style={{ animation: "fade-up 0.3s ease-out both" }}
          >
            <TeamCard member={team[activeCard]} />
          </div>

          {/* Swipe hint */}
          <div className="mt-4 flex items-center justify-center gap-2">
            <svg className="h-3.5 w-3.5 animate-[pulse_2s_ease-in-out_infinite] text-[#22B07D]/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#A9B5AF]/40">desliza</span>
            <svg className="h-3.5 w-3.5 animate-[pulse_2s_ease-in-out_infinite] text-[#22B07D]/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </div>

          {/* Dots */}
          <div className="mt-4 flex justify-center gap-2">
            {team.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveCard(i)}
                className={`h-2 rounded-full transition-all ${
                  activeCard === i ? "w-6 bg-[#22B07D]" : "w-2 bg-white/[0.12]"
                }`}
                aria-label={`Ver ${team[i].name}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop grid - hidden on mobile */}
        <div className="mt-14 hidden gap-5 sm:grid sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, i) => (
            <ScrollReveal key={member.name} delay={0.1 * (i + 1)} className="h-full">
              <TeamCard member={member} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
