"use client";

import { useEffect, useRef } from "react";
import HeroMockupComposition from "@/components/mockups/HeroMockupComposition";

function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const particles: { x: number; y: number; vx: number; vy: number; r: number; o: number }[] = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    const init = () => {
      resize();
      const count = Math.floor((canvas.offsetWidth * canvas.offsetHeight) / 18000);
      particles.length = 0;
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.offsetWidth,
          y: Math.random() * canvas.offsetHeight,
          vx: (Math.random() - 0.5) * 0.15,
          vy: (Math.random() - 0.5) * 0.15,
          r: Math.random() * 1.2 + 0.4,
          o: Math.random() * 0.08 + 0.015,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.offsetWidth;
        if (p.x > canvas.offsetWidth) p.x = 0;
        if (p.y < 0) p.y = canvas.offsetHeight;
        if (p.y > canvas.offsetHeight) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(34, 176, 125, ${p.o})`;
        ctx.fill();
      }
      animId = requestAnimationFrame(draw);
    };

    init();
    draw();
    window.addEventListener("resize", init);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", init);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#071A17]">
      {/* Particles background */}
      <Particles />

      {/* Radial gradient glow behind mockup */}
      <div className="pointer-events-none absolute right-[-10%] top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-[#22B07D]/[0.035] blur-[130px] lg:right-[5%]" />

      {/* Content */}
      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-5 pt-28 pb-16 lg:flex-row lg:items-center lg:gap-16 lg:px-8 lg:pt-28 lg:pb-28">
        {/* Left column — Copy */}
        <div className="flex-1 lg:max-w-[560px]">
          {/* Badge */}
          <div
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#16352E] bg-[#0C2420]/70 px-4 py-1.5"
            style={{
              animation: "fade-up 0.6s ease-out both",
            }}
          >
            <span className="relative overflow-hidden text-xs font-medium text-[#A9B5AF]">
              <span
                className="relative z-10"
                style={{
                  backgroundImage:
                    "linear-gradient(110deg, rgba(169,181,175,0.55) 35%, rgba(53,201,146,0.95) 50%, rgba(169,181,175,0.55) 65%)",
                  backgroundSize: "200% 100%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  animation: "shimmer 4s ease-in-out infinite",
                }}
              >
                Para distribuidoras con 1 a 15 vehículos
              </span>
            </span>
          </div>

          {/* Headline */}
          <h1
            className="font-[family-name:var(--font-heading)] text-[clamp(30px,5.5vw,58px)] font-extrabold leading-[1.08] tracking-[-1.5px] text-[#F3F4EF]"
            style={{ animation: "fade-up 0.7s ease-out 0.1s both" }}
          >
            Todo lo que hoy coordinas de memoria{" "}
            <span className="text-[#22B07D]">en un solo sistema.</span>
          </h1>

          {/* Subtext */}
          <p
            className="mt-5 max-w-[480px] text-base leading-relaxed text-[#A9B5AF] lg:text-lg"
            style={{ animation: "fade-up 0.7s ease-out 0.2s both" }}
          >
            Deja de depender de que una persona esté en todo para que la operación no se caiga. LIVIO centraliza tus pedidos, guía a tus choferes y cierra el día con evidencia — desde el primer día.
          </p>

          {/* CTAs */}
          <div
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            style={{ animation: "fade-up 0.7s ease-out 0.3s both" }}
          >
            <a
              href="#contacto"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-[#1E8E69] px-7 py-3.5 text-sm font-semibold text-[#F3F4EF] transition-all hover:bg-[#23A879] hover:shadow-xl hover:shadow-[#1E8E69]/20"
            >
              <span className="relative z-10">Quiero ser empresa piloto</span>
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-[#F3F4EF]/15 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </a>
            <a
              href="#como-funciona"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#1E4A3F] bg-[#0C2420]/30 px-6 py-3.5 text-sm font-medium text-[#CFEFDF] transition-all hover:border-[#22B07D]/60 hover:text-[#F3F4EF]"
            >
              Ver cómo funciona
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </a>
          </div>

          {/* Micro info */}
          <div
            className="mt-8 flex flex-wrap gap-3"
            style={{ animation: "fade-up 0.7s ease-out 0.4s both" }}
          >
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#1E4A3F] bg-[#0C2420]/60 px-3.5 py-1.5 text-xs font-medium text-[#CFEFDF]">
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Lanzamiento en abril
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#1E4A3F] bg-[#0C2420]/60 px-3.5 py-1.5 text-xs font-medium text-[#CFEFDF]">
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Cupos limitados
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#1E4A3F] bg-[#0C2420]/60 px-3.5 py-1.5 text-xs font-medium text-[#CFEFDF]">
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              2 primeros meses gratis
            </span>
          </div>
        </div>

        {/* Right column — Mockup */}
        <div
          className="mt-12 flex flex-1 justify-center lg:mt-0 lg:justify-end"
          style={{ animation: "fade-up 0.8s ease-out 0.35s both" }}
        >
          <div
            className="relative"
            style={{ animation: "float 6s ease-in-out infinite" }}
          >
            {/* Glow behind mockup */}
            <div className="absolute -inset-8 rounded-3xl bg-[#22B07D]/[0.03] blur-[65px]" />
            <div className="relative">
              <HeroMockupComposition />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade — no gradient needed, Problema continues same bg */}
    </section>
  );
}
