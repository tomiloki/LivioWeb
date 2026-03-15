export default function ChaosMockup() {
  return (
    <div className="relative w-full max-w-[520px] mx-auto h-[380px] sm:h-[420px]">
      {/* WhatsApp messages — tilted left */}
      <div
        className="absolute left-0 top-0 w-[260px] sm:w-[280px] rounded-xl border border-white/[0.06] bg-[#1A2634] p-3 shadow-xl shadow-black/30"
        style={{ transform: "rotate(-3deg)" }}
      >
        <div className="mb-2 flex items-center gap-2 border-b border-white/[0.06] pb-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#25D366]/20">
            <svg className="h-3.5 w-3.5 text-[#25D366]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            </svg>
          </div>
          <span className="text-xs font-medium text-white/50">WhatsApp · 23 mensajes</span>
          <span className="ml-auto flex h-5 w-5 items-center justify-center rounded-full bg-negative/80 text-[10px] font-bold text-white">
            23
          </span>
        </div>
        <div className="space-y-1.5">
          <div className="rounded-lg bg-white/[0.04] px-3 py-2">
            <p className="text-[11px] font-medium text-white/60">Distribuidora Central</p>
            <p className="text-xs text-white/40">manda 15 bidones a la misma direc de siempre</p>
          </div>
          <div className="rounded-lg bg-white/[0.04] px-3 py-2">
            <p className="text-[11px] font-medium text-white/60">Minimarket Los Olivos</p>
            <p className="text-xs text-white/40">hoy necesito el pedido antes de las 2 porfa</p>
          </div>
          <div className="rounded-lg bg-white/[0.04] px-3 py-2">
            <p className="text-[11px] font-medium text-white/60">+56 9 8765 4321</p>
            <p className="text-xs text-white/40">oye me mandaste el pedido equivocado ayer</p>
          </div>
          <div className="rounded-lg bg-white/[0.04] px-3 py-2">
            <p className="text-[11px] font-medium text-white/60">Bodega Sur</p>
            <p className="text-xs text-white/40">necesito 20 cajas pero no tengo la direcc...</p>
          </div>
        </div>
      </div>

      {/* Excel spreadsheet — tilted right, overlapping */}
      <div
        className="absolute right-0 top-8 sm:top-4 w-[250px] sm:w-[270px] rounded-xl border border-white/[0.06] bg-[#1A2634] p-3 shadow-xl shadow-black/30"
        style={{ transform: "rotate(2.5deg)" }}
      >
        <div className="mb-2 flex items-center gap-2 border-b border-white/[0.06] pb-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#217346]/20">
            <span className="text-[10px] font-bold text-[#217346]">XLS</span>
          </div>
          <span className="text-xs font-medium text-white/50">pedidos_marzo_v3_FINAL.xlsx</span>
        </div>
        {/* Fake spreadsheet grid */}
        <div className="overflow-hidden rounded-lg border border-white/[0.06]">
          <div className="grid grid-cols-4 border-b border-white/[0.06] bg-white/[0.04]">
            <span className="px-2 py-1 text-[9px] font-medium text-white/40">Cliente</span>
            <span className="px-2 py-1 text-[9px] font-medium text-white/40">Cant.</span>
            <span className="px-2 py-1 text-[9px] font-medium text-white/40">Dir.</span>
            <span className="px-2 py-1 text-[9px] font-medium text-white/40">Estado</span>
          </div>
          {[
            ["Dist. Cent.", "15", "??", ""],
            ["Los Olivos", "8", "Av. Man...", ""],
            ["Bodega S.", "20", "", "pend"],
            ["Comerci...", "???", "llam...", ""],
          ].map((row, i) => (
            <div
              key={i}
              className={`grid grid-cols-4 border-b border-white/[0.04] ${
                i === 2 ? "bg-negative/[0.06]" : ""
              }`}
            >
              {row.map((cell, j) => (
                <span
                  key={j}
                  className={`px-2 py-1 text-[9px] ${
                    cell === "??" || cell === "???" || cell === ""
                      ? "text-negative/60"
                      : "text-white/40"
                  }`}
                >
                  {cell || "—"}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Missed call notification — bottom left */}
      <div
        className="absolute bottom-12 left-2 sm:left-4 w-[230px] sm:w-[250px] rounded-xl border border-white/[0.06] bg-[#1A2634] p-3 shadow-xl shadow-black/30"
        style={{ transform: "rotate(-1.5deg)" }}
      >
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-negative/15">
            <svg className="h-4 w-4 text-negative" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <div>
            <p className="text-xs font-medium text-white/70">3 llamadas perdidas</p>
            <p className="text-[11px] text-white/40">Carlos (chofer) · hace 45 min</p>
          </div>
        </div>
      </div>

      {/* Sticky note — bottom right */}
      <div
        className="absolute bottom-4 right-4 sm:right-8 w-[160px] rounded-lg bg-amber-soft/90 p-3 shadow-lg shadow-black/20"
        style={{ transform: "rotate(4deg)" }}
      >
        <p className="text-[11px] font-medium leading-relaxed text-slate-deep/80">
          Acordarse: pedido de Comercial Norte va con factura. Roberto sabe la dirección.
        </p>
      </div>
    </div>
  );
}
