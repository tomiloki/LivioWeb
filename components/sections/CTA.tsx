"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const pilotBenefits = [
  "2 meses de piloto completamente gratuitos",
  "Precio especial de lanzamiento a partir del mes 3",
  "Onboarding incluido desde el día uno",
  "Acceso directo al equipo para dar feedback y moldear el producto",
  "Tus datos siempre son tuyos — exportables en cualquier momento",
];

export default function CTA() {
  const [empresa, setEmpresa] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [operacion, setOperacion] = useState("");
  const [hp, setHp] = useState(""); // honeypot — debe quedar vacío
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ empresa, email, telefono, operacion, _hp: hp }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contacto" className="relative bg-[#071A17]">
      <div>
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Left: urgency copy + benefits */}
            <div>
              <ScrollReveal>
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#22B07D]/25 bg-[#22B07D]/10 px-4 py-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#22B07D] animate-[pulse-soft_2s_ease-in-out_infinite]" />
                  <span className="text-xs font-semibold text-[#22B07D]">
                    Cupos limitados — Arranca en abril
                  </span>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <h2 className="font-[family-name:var(--font-heading)] text-[clamp(28px,4.5vw,42px)] font-extrabold leading-[1.1] tracking-[-1px] text-[#F3F4EF]">
                  El piloto arranca en abril.{" "}
                  <span className="text-[#22B07D]">Reserva tu cupo ahora.</span>
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={0.15}>
                <p className="mt-4 text-base leading-relaxed text-[#A9B5AF] lg:text-lg">
                  Estamos cerrando los últimos cupos antes del lanzamiento. Si
                  tienes entre 1 y 15 vehículos y hoy operas con WhatsApp y Excel,
                  este es el momento.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="mt-8">
                  <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-[#A9B5AF]">
                    Las empresas que entran al piloto reciben
                  </p>
                  <ul className="space-y-3">
                    {pilotBenefits.map((b, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <svg
                          className="mt-0.5 h-5 w-5 shrink-0 text-[#22B07D]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-sm text-[#A9B5AF]">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>

            {/* Right: form */}
            <ScrollReveal delay={0.15}>
              <div className="rounded-2xl border border-[#E0DDD6] bg-[#FAF9F5] shadow-xl shadow-black/10 overflow-hidden">
                {/* Card header strip */}
                <div className="border-b border-[#E0DDD6] bg-white px-6 py-4 sm:px-8">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-[#1A1A1A]">
                        Quiero ser empresa piloto
                      </h3>
                      <p className="mt-0.5 text-sm text-[#6B7280]">
                        Cuéntanos cómo es tu operación y te contactamos.
                      </p>
                    </div>
                    <span className="shrink-0 rounded-full border border-[#C17F4E]/25 bg-[#FEF8F1] px-3 py-1 text-[11px] font-semibold text-[#C17F4E]">
                      Cupos limitados
                    </span>
                  </div>
                </div>

                {status === "success" ? (
                  <div className="flex flex-col items-center justify-center px-6 py-12 text-center sm:px-8">
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#22B07D]/15">
                      <svg className="h-7 w-7 text-[#22B07D]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-[#1A1A1A]">
                      ¡Listo, recibimos tu solicitud!
                    </h3>
                    <p className="mt-2 text-sm text-[#6B7280]">
                      Te contactamos en menos de 24 horas.
                    </p>
                  </div>
                ) : (
                  <form className="space-y-4 p-6 sm:p-8" onSubmit={handleSubmit}>
                    {/* Honeypot — oculto para humanos, los bots lo rellenan */}
                    <input
                      type="text"
                      name="_hp"
                      value={hp}
                      onChange={(e) => setHp(e.target.value)}
                      tabIndex={-1}
                      autoComplete="off"
                      aria-hidden="true"
                      style={{ display: "none" }}
                    />
                    {/* Row 1: empresa + teléfono */}
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="empresa" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-[#8A948E]">
                          Empresa
                        </label>
                        <input
                          id="empresa"
                          type="text"
                          required
                          autoComplete="organization"
                          value={empresa}
                          onChange={(e) => setEmpresa(e.target.value)}
                          placeholder="Distribuidora Los Andes"
                          className="w-full rounded-lg border border-[#E0DDD6] bg-white px-4 py-3 text-sm text-[#1A1A1A] placeholder:text-[#9CA3AF] outline-none transition-colors focus:border-[#22B07D] focus:ring-2 focus:ring-[#22B07D]/20"
                        />
                      </div>
                      <div>
                        <label htmlFor="telefono" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-[#8A948E]">
                          Teléfono
                        </label>
                        <input
                          id="telefono"
                          type="tel"
                          autoComplete="tel"
                          value={telefono}
                          onChange={(e) => setTelefono(e.target.value)}
                          placeholder="+56 9 1234 5678"
                          className="w-full rounded-lg border border-[#E0DDD6] bg-white px-4 py-3 text-sm text-[#1A1A1A] placeholder:text-[#9CA3AF] outline-none transition-colors focus:border-[#22B07D] focus:ring-2 focus:ring-[#22B07D]/20"
                        />
                      </div>
                    </div>

                    {/* Row 2: email (full width) */}
                    <div>
                      <label htmlFor="email" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-[#8A948E]">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        autoComplete="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="tu@empresa.cl"
                        className="w-full rounded-lg border border-[#E0DDD6] bg-white px-4 py-3 text-sm text-[#1A1A1A] placeholder:text-[#9CA3AF] outline-none transition-colors focus:border-[#22B07D] focus:ring-2 focus:ring-[#22B07D]/20"
                      />
                    </div>

                    {/* Row 3: operacion */}
                    <div>
                      <label htmlFor="operacion" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-[#8A948E]">
                        ¿Cómo es tu operación hoy? <span className="font-normal normal-case text-[#9CA3AF]">(opcional)</span>
                      </label>
                      <textarea
                        id="operacion"
                        rows={3}
                        value={operacion}
                        onChange={(e) => setOperacion(e.target.value)}
                        placeholder="Ej: repartimos agua en bidones, hoy coordino todo por WhatsApp..."
                        className="w-full resize-none rounded-lg border border-[#E0DDD6] bg-white px-4 py-3 text-sm text-[#1A1A1A] placeholder:text-[#9CA3AF] outline-none transition-colors focus:border-[#22B07D] focus:ring-2 focus:ring-[#22B07D]/20"
                      />
                    </div>

                    {status === "error" && (
                      <p className="text-center text-xs text-red-500">
                        Hubo un error al enviar. Intenta de nuevo o escríbenos directamente.
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="group relative w-full overflow-hidden rounded-lg bg-[#22B07D] py-3.5 text-sm font-semibold text-white transition-all hover:bg-[#1B9468] hover:shadow-lg hover:shadow-[#22B07D]/20 disabled:opacity-70"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        {status === "loading" ? "Enviando…" : (
                          <>
                            Quiero ser empresa piloto
                            <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                          </>
                        )}
                      </span>
                      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                    </button>

                    <p className="text-center text-xs text-[#9CA3AF]">
                      Respondemos en menos de 24h.
                    </p>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
