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
          o: Math.random() * 0.3 + 0.05,
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
        ctx.fillStyle = `rgba(42, 157, 143, ${p.o})`;
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
    <section className="relative min-h-screen overflow-hidden bg-slate-deep">
      {/* Particles background */}
      <Particles />

      {/* Radial gradient glow behind mockup */}
      <div className="pointer-events-none absolute right-[-10%] top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-livio/[0.07] blur-[120px] lg:right-[5%]" />

      {/* Content */}
      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-5 pt-28 pb-16 lg:flex-row lg:items-center lg:gap-16 lg:px-8 lg:pt-28 lg:pb-28">
        {/* Left column — Copy */}
        <div className="flex-1 lg:max-w-[560px]">
          {/* Badge */}
          <div
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-1.5"
            style={{
              animation: "fade-up 0.6s ease-out both",
            }}
          >
            <span className="relative overflow-hidden text-xs font-medium text-white/60">
              <span
                className="relative z-10"
                style={{
                  backgroundImage:
                    "linear-gradient(110deg, rgba(255,255,255,0.4) 35%, rgba(42,157,143,0.9) 50%, rgba(255,255,255,0.4) 65%)",
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
            className="font-[family-name:var(--font-heading)] text-[clamp(36px,5.5vw,58px)] font-extrabold leading-[1.08] tracking-[-1.5px] text-white"
            style={{ animation: "fade-up 0.7s ease-out 0.1s both" }}
          >
            Todo lo que hoy coordinas de memoria{" "}
            <span className="text-livio">en un solo sistema.</span>
          </h1>

          {/* Subtext */}
          <p
            className="mt-5 max-w-[480px] text-base leading-relaxed text-white/50 lg:text-lg"
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
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-livio px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-livio-deep hover:shadow-xl hover:shadow-livio/20"
            >
              <span className="relative z-10">Quiero ser empresa piloto</span>
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </a>
            <a
              href="#como-funciona"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/[0.12] px-6 py-3.5 text-sm font-medium text-white/70 transition-all hover:border-white/25 hover:text-white"
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
            <span className="inline-flex items-center gap-1.5 rounded-full border border-positive/20 bg-positive/[0.06] px-3.5 py-1.5 text-xs font-medium text-positive/80">
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Lanzamiento en abril
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-positive/20 bg-positive/[0.06] px-3.5 py-1.5 text-xs font-medium text-positive/80">
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Cupos limitados
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-positive/20 bg-positive/[0.06] px-3.5 py-1.5 text-xs font-medium text-positive/80">
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
            <div className="absolute -inset-8 rounded-3xl bg-livio/[0.06] blur-[60px]" />
            <div className="relative">
              <HeroMockupComposition />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-deep to-transparent" />
    </section>
  );
}
