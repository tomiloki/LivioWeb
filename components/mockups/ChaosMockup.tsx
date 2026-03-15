export default function ChaosMockup() {
  return (
    <div className="relative mx-auto h-[520px] w-full max-w-[580px] sm:h-[560px]">

      {/* ── CAPA 1: Excel ── */}
      <div
        className="absolute right-0 top-5 z-10 w-[250px] overflow-hidden rounded-lg border border-gray-200/90 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.32),0_4px_16px_rgba(0,0,0,0.14)] sm:w-[265px]"
        style={{ transform: "rotate(2.5deg)" }}
      >
        <div className="flex items-center gap-1.5 bg-[#217346] px-2.5 py-1.5">
          <div className="flex h-5 w-6 shrink-0 items-center justify-center rounded-sm bg-white/25">
            <span className="text-[9px] font-black leading-none text-white">X</span>
          </div>
          <span className="flex-1 truncate text-[10px] font-medium text-white/90">pedidos_marzo_v3_FINAL.xlsx</span>
          <div className="flex items-center gap-0.5">
            <div className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <div className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <div className="h-2.5 w-2.5 rounded-full bg-white/20" />
          </div>
        </div>
        <div className="flex items-center gap-1.5 border-b border-gray-200 bg-gray-50 px-2 py-0.5">
          <span className="rounded border border-gray-200 px-1 py-0.5 font-mono text-[8px] text-gray-400">D3</span>
          <span className="text-[9px] text-gray-300">ƒx</span>
          <span className="font-mono text-[8.5px] text-[#C75050]">=???</span>
        </div>
        <div className="text-[8.5px]">
          <div className="grid grid-cols-[88px_30px_58px_44px] border-b border-gray-200 bg-[#f2f2f2]">
            {["Cliente", "Cant.", "Dir.", "Estado"].map((h, i) => (
              <span key={i} className="border-r border-gray-200 px-1.5 py-0.5 font-semibold text-gray-500 last:border-r-0">{h}</span>
            ))}
          </div>
          {[
            { cells: ["Dist. Central", "15", "???",        "—"],    hi: false, err: [2] },
            { cells: ["Los Olivos",    "8",  "Av. Matta…", "pend"], hi: false, err: [] },
            { cells: ["Bodega Sur",    "20", "—",          "—"],    hi: true,  err: [2, 3] },
            { cells: ["Comercial N.",  "???","llam…",      "—"],    hi: false, err: [1, 2, 3] },
            { cells: ["Ferretería E.", "11", "Av. Perú…",  "ok"],   hi: false, err: [] },
          ].map((row, i) => (
            <div key={i} className={`grid grid-cols-[88px_30px_58px_44px] border-b border-gray-100 ${row.hi ? "bg-[#FBEAE7]" : i % 2 === 0 ? "bg-white" : "bg-[#FAFAFA]"}`}>
              {row.cells.map((cell, j) => (
                <span key={j} className={`truncate border-r border-gray-100 px-1.5 py-1 last:border-r-0 ${j === 1 ? "text-center" : ""} ${
                  row.err.includes(j) ? "font-semibold text-[#C75050]" :
                  cell === "ok" ? "font-semibold text-[#22B07D]" :
                  cell === "pend" ? "font-medium text-[#C17F4E]" : "text-gray-600"
                }`}>{cell}</span>
              ))}
            </div>
          ))}
        </div>
        <div className="flex items-center gap-0.5 border-t border-gray-200 bg-[#f2f2f2] px-1.5 py-0.5">
          <div className="rounded-sm border border-gray-300 bg-white px-2 py-0.5">
            <span className="text-[7px] font-medium text-gray-600">Pedidos</span>
          </div>
          <div className="px-2 py-0.5"><span className="text-[7px] text-gray-400">Rutas</span></div>
          <div className="px-2 py-0.5"><span className="text-[7px] text-gray-400">Resumen</span></div>
          <div className="ml-auto flex items-center gap-1">
            <svg className="h-2.5 w-2.5 text-[#C75050]" viewBox="0 0 12 12" fill="currentColor">
              <path d="M6 1a5 5 0 100 10A5 5 0 006 1zm.5 7h-1V5.5h1V8zm0-3h-1V4h1v1z" />
            </svg>
            <span className="text-[7px] text-[#C75050]">3 errores</span>
          </div>
        </div>
      </div>

      {/* ── CAPA 2: WhatsApp ── */}
      <div
        className="absolute left-0 top-0 z-20 w-[252px] overflow-hidden rounded-xl border border-gray-200/60 bg-white shadow-[0_24px_80px_rgba(0,0,0,0.38),0_8px_24px_rgba(0,0,0,0.2)] sm:w-[270px]"
        style={{ transform: "rotate(-3deg)" }}
      >
        <div className="flex items-center justify-between bg-[#075E54] px-3 py-[3px]">
          <span className="font-mono text-[8px] font-semibold text-white/90">09:47</span>
          <div className="flex items-center gap-1">
            <div className="flex items-end gap-[1.5px]">
              <div className="h-1 w-[2px] rounded-[1px] bg-white/50" />
              <div className="h-1.5 w-[2px] rounded-[1px] bg-white/60" />
              <div className="h-2 w-[2px] rounded-[1px] bg-white/70" />
              <div className="h-2.5 w-[2px] rounded-[1px] bg-white/90" />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between bg-[#075E54] px-3 pb-2 pt-0.5">
          <span className="text-sm font-bold text-white">WhatsApp</span>
          <div className="relative">
            <svg className="h-5 w-5 text-white/80" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7z" clipRule="evenodd" />
            </svg>
            <span className="absolute -right-1.5 -top-1.5 flex h-4 min-w-[16px] animate-pulse items-center justify-center rounded-full bg-[#C75050] px-0.5 text-[8px] font-black leading-none text-white">23</span>
          </div>
        </div>
        <div className="divide-y divide-gray-100">
          {[
            { name: "Distribuidora Central", msg: "mándame 15 bidones a la misma direc",           time: "14:32", unread: 3, color: "#22B07D",  avatar: "D" },
            { name: "Minimarket Los Olivos", msg: "hoy necesito el pedido antes de las 2 porfa",   time: "14:28", unread: 1, color: "#8B5CF6",  avatar: "M" },
            { name: "+56 9 8765 4321",       msg: "el pedido no llegó, necesito que me llamen YA", time: "13:51", unread: 5, color: "#C75050",  avatar: "?", urgent: true },
            { name: "Bodega Sur",            msg: "20 cajas pero no sé si tienen stock...",         time: "13:09", unread: 0, color: "#C17F4E",  avatar: "B" },
          ].map((m, i) => (
            <div key={i} className={`flex items-center gap-2.5 px-3 py-2 ${m.urgent ? "bg-[#FFF5F5]" : ""}`}>
              <div className="relative shrink-0">
                <div className="flex h-8 w-8 items-center justify-center rounded-full text-[11px] font-black text-white" style={{ backgroundColor: m.color }}>{m.avatar}</div>
                {m.urgent && (
                  <div className="absolute -bottom-0.5 -right-0.5 flex h-3 w-3 items-center justify-center rounded-full border-2 border-white bg-[#C75050]">
                    <span className="text-[6px] font-black text-white">!</span>
                  </div>
                )}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-baseline justify-between gap-1">
                  <p className={`truncate text-[10.5px] font-semibold ${m.urgent ? "text-[#C75050]" : "text-gray-800"}`}>{m.name}</p>
                  <span className={`shrink-0 text-[8px] ${m.urgent ? "font-bold text-[#C75050]" : "text-gray-400"}`}>{m.time}</span>
                </div>
                <div className="flex items-center justify-between gap-1">
                  <p className={`truncate text-[9.5px] ${m.urgent ? "text-[#C75050]" : "text-gray-500"}`}>{m.msg}</p>
                  {m.unread > 0 && (
                    <span className={`flex h-4 min-w-[16px] shrink-0 items-center justify-center rounded-full px-1 text-[8px] font-black text-white ${m.urgent ? "bg-[#C75050]" : "bg-[#22B07D]"}`}>{m.unread}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2 border-t border-[#22B07D]/10 bg-[#F0FFF8] px-3 py-1.5">
          <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#C17F4E] text-[8px] font-black text-white">C</div>
          <span className="text-[9px] text-[#22B07D]">Carlos está escribiendo</span>
          <div className="ml-1 flex items-end gap-[2px]">
            <div className="h-1 w-1 animate-bounce rounded-full bg-[#22B07D]" style={{ animationDelay: "0ms" }} />
            <div className="h-1 w-1 animate-bounce rounded-full bg-[#22B07D]" style={{ animationDelay: "150ms" }} />
            <div className="h-1 w-1 animate-bounce rounded-full bg-[#22B07D]" style={{ animationDelay: "300ms" }} />
          </div>
        </div>
        <div className="flex items-center gap-1.5 border-t border-gray-100 bg-gray-50 px-3 py-1.5">
          <svg className="h-3 w-3 shrink-0 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
          </svg>
          <span className="flex-1 text-[8.5px] text-gray-400">2 mensajes de voz sin escuchar</span>
          <span className="flex h-3.5 min-w-[14px] items-center justify-center rounded-full bg-[#C17F4E] px-1 text-[7px] font-black text-white">2</span>
        </div>
      </div>

      {/* ── CAPA 3: Llamadas perdidas ── */}
      <div
        className="absolute bottom-[118px] left-[28px] z-30 w-[210px] overflow-hidden rounded-xl border border-gray-200/80 bg-white shadow-[0_16px_48px_rgba(0,0,0,0.28),0_4px_12px_rgba(0,0,0,0.12)]"
        style={{ transform: "rotate(-2deg)" }}
      >
        <div className="flex items-center gap-1.5 border-b border-gray-100 bg-gray-50 px-3 py-1.5">
          <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#C75050]" />
          <span className="text-[9px] font-bold uppercase tracking-widest text-gray-400">Llamadas perdidas</span>
        </div>
        {[
          { label: "Carlos (chofer)", time: "hace 45 min", color: "#C75050" },
          { label: "Cliente nuevo",   time: "hace 2 h",    color: "#C75050" },
          { label: "Proveedor Aguas", time: "hace 3 h",    color: "#C17F4E" },
        ].map((call, i) => (
          <div key={i} className={`flex items-center gap-2.5 px-3 py-2 ${i < 2 ? "border-b border-gray-100" : ""}`}>
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full" style={{ backgroundColor: `${call.color}18` }}>
              <svg className="h-3.5 w-3.5" style={{ color: call.color }} viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-[10px] font-semibold text-gray-700">{call.label}</p>
              <p className="text-[8.5px]" style={{ color: call.color }}>{call.time}</p>
            </div>
            <svg className="h-3 w-3 text-gray-300" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 2.5L9 6l-4.5 3.5" />
            </svg>
          </div>
        ))}
      </div>

      {/* ── CAPA 3: Mini mapa (Google Maps style) ── */}
      <div
        className="absolute bottom-24 right-8 z-30 w-[230px] overflow-hidden rounded-xl border border-gray-200/80 bg-white shadow-[0_16px_48px_rgba(0,0,0,0.28),0_4px_12px_rgba(0,0,0,0.12)] sm:w-[245px]"
        style={{ transform: "rotate(-1.5deg)" }}
      >
        {/* Header barra de búsqueda */}
        <div className="flex items-center gap-2 border-b border-gray-100 bg-white px-3 py-2">
          <svg className="h-3.5 w-3.5 shrink-0 text-[#4285F4]" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          <span className="flex-1 truncate text-[9.5px] text-gray-400">Buscar en el mapa…</span>
          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-gray-100">
            <svg className="h-3 w-3 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
          </div>
        </div>

        {/* Mapa SVG simplificado estilo Maps */}
        <div className="relative h-[148px] overflow-hidden bg-[#E8EAD3]">
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 245 148" fill="none" aria-hidden="true">
            {/* Fondo de manzanas */}
            <rect width="245" height="148" fill="#E8EAD3" />
            {/* Bloques/manzanas */}
            <rect x="0"   y="0"   width="38" height="28" fill="#DDE0C8" />
            <rect x="42"  y="0"   width="50" height="28" fill="#DDE0C8" />
            <rect x="96"  y="0"   width="44" height="28" fill="#DDE0C8" />
            <rect x="144" y="0"   width="36" height="28" fill="#DDE0C8" />
            <rect x="0"   y="32"  width="38" height="38" fill="#DDE0C8" />
            <rect x="42"  y="32"  width="50" height="38" fill="#DDE0C8" />
            <rect x="96"  y="32"  width="44" height="38" fill="#DDE0C8" />
            <rect x="144" y="32"  width="96" height="38" fill="#DDE0C8" />
            <rect x="0"   y="74"  width="38" height="34" fill="#DDE0C8" />
            <rect x="42"  y="74"  width="50" height="34" fill="#DDE0C8" />
            <rect x="96"  y="74"  width="44" height="34" fill="#DDE0C8" />
            <rect x="144" y="74"  width="46" height="34" fill="#DDE0C8" />
            <rect x="194" y="74"  width="51" height="34" fill="#DDE0C8" />
            <rect x="0"   y="112" width="60" height="36" fill="#DDE0C8" />
            <rect x="64"  y="112" width="70" height="36" fill="#DDE0C8" />
            <rect x="138" y="112" width="52" height="36" fill="#DDE0C8" />
            <rect x="194" y="112" width="51" height="36" fill="#DDE0C8" />
            {/* Calles horizontales */}
            <rect x="0"   y="28"  width="245" height="4"  fill="#F5F5F0" />
            <rect x="0"   y="70"  width="245" height="4"  fill="#F5F5F0" />
            <rect x="0"   y="108" width="245" height="4"  fill="#F5F5F0" />
            {/* Avenida ancha */}
            <rect x="0"   y="50"  width="245" height="8"  fill="#FAFAF5" />
            {/* Calles verticales */}
            <rect x="38"  y="0"   width="4"   height="148" fill="#F5F5F0" />
            <rect x="92"  y="0"   width="4"   height="148" fill="#F5F5F0" />
            <rect x="140" y="0"   width="4"   height="148" fill="#F5F5F0" />
            <rect x="190" y="0"   width="4"   height="148" fill="#F5F5F0" />
            {/* Avenida vertical ancha */}
            <rect x="60"  y="0"   width="8"   height="148" fill="#FAFAF5" />
            {/* Zona verde (parque) */}
            <rect x="144" y="74"  width="46"  height="34"  fill="#C8D8A8" />
            {/* Ruta enredada — sin sentido, va y vuelve */}
            <path
              d="M48,22 L68,22 L68,54 L42,54 L42,32 L96,32 L96,14 L142,14 L142,54 L192,54 L192,22 L220,22 L220,54 L192,54 L192,74 L162,74 L162,32 L142,32 L142,74 L96,74 L96,54 L68,54 L68,74 L42,74 L42,91 L96,91 L96,112 L64,112 L64,130 L96,130 L96,112 L142,112 L142,91 L162,91 L162,112 L142,112 L142,130 L192,130 L192,112 L220,112 L220,91 L192,91 L192,74 L220,74 L220,54"
              stroke="#C75050"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="4 2"
              opacity="0.7"
            />
          </svg>

          {/* Markers sin rutas entre ellos */}
          {/* P1 ámbar */}
          <div className="absolute" style={{ top: 18, left: 48 }}>
            <div className="relative flex flex-col items-center">
              <div className="absolute h-4 w-4 animate-ping rounded-full bg-[#C17F4E]/50" style={{ animationDuration: "2s" }} />
              <div className="relative flex h-4 w-4 items-center justify-center rounded-full border border-white bg-[#C17F4E] shadow-md">
                <span className="text-[7px] font-black text-white">?</span>
              </div>
              <div className="h-1.5 w-[1.5px] bg-[#C17F4E]" />
            </div>
          </div>
          {/* P2 rojo */}
          <div className="absolute" style={{ top: 38, left: 158 }}>
            <div className="relative flex flex-col items-center">
              <div className="absolute h-4 w-4 animate-ping rounded-full bg-[#C75050]/50" style={{ animationDuration: "1.5s" }} />
              <div className="relative flex h-4 w-4 items-center justify-center rounded-full border border-white bg-[#C75050] shadow-md">
                <span className="text-[7px] font-black text-white">!</span>
              </div>
              <div className="h-1.5 w-[1.5px] bg-[#C75050]" />
            </div>
          </div>
          {/* P3 gris ok */}
          <div className="absolute" style={{ top: 80, left: 100 }}>
            <div className="flex flex-col items-center">
              <div className="flex h-4 w-4 items-center justify-center rounded-full border border-white bg-[#718078] shadow-md">
                <svg className="h-2 w-2 text-white" viewBox="0 0 8 8" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M1.5 4l2 2 3-3" />
                </svg>
              </div>
              <div className="h-1.5 w-[1.5px] bg-[#718078]" />
            </div>
          </div>
          {/* P4 ámbar */}
          <div className="absolute" style={{ top: 94, left: 200 }}>
            <div className="flex flex-col items-center">
              <div className="flex h-4 w-4 items-center justify-center rounded-full border border-white bg-[#C17F4E] shadow-md">
                <span className="text-[7px] font-black text-white">?</span>
              </div>
              <div className="h-1.5 w-[1.5px] bg-[#C17F4E]" />
            </div>
          </div>
          {/* P5 rojo */}
          <div className="absolute" style={{ top: 116, left: 30 }}>
            <div className="flex flex-col items-center">
              <div className="flex h-4 w-4 items-center justify-center rounded-full border border-white bg-[#C75050] shadow-md">
                <span className="text-[7px] font-black text-white">!</span>
              </div>
              <div className="h-1.5 w-[1.5px] bg-[#C75050]" />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-gray-100 bg-gray-50 px-3 py-1.5">
          <span className="text-[8.5px] text-gray-400">5 puntos · sin ruta asignada</span>
          <span className="text-[8px] font-semibold text-[#C75050]">40 min</span>
        </div>
      </div>

      {/* ── CAPA 4: Post-its desparramados ── */}

      {/* Post-it 1 — hueco derecho entre Excel (bottom ~190) y mapa (top ~270) */}
      <div
        className="absolute right-[6px] top-[196px] z-40 w-[150px] shadow-[4px_6px_16px_rgba(0,0,0,0.28)]"
        style={{ transform: "rotate(4deg)" }}
      >
        <div className="relative border-l-[3px] border-l-[#C17F4E]/50 bg-[#FFD9B8] px-3 pb-4 pt-3">
          <div className="absolute right-0 top-0 h-0 w-0 border-l-[13px] border-t-[13px] border-l-transparent border-t-[#C17F4E]/35" />
          <p className="text-[10px] font-medium leading-snug text-[#5A2C1C]">
            Acordarse: Comercial Norte va con factura. Roberto sabe la dirección.
          </p>
        </div>
      </div>

      {/* Post-it 2 — abajo izquierda, bajo las llamadas (bottom ~390) */}
      <div
        className="absolute bottom-[160px] left-[34%] z-40 w-[148px] shadow-[4px_6px_14px_rgba(0,0,0,0.22)]"
        style={{ transform: "rotate(-3deg)" }}
      >
        <div className="relative border-l-[3px] border-l-[#C17F4E]/50 bg-[#F7C896] px-3 pb-3 pt-3">
          <div className="absolute right-0 top-0 h-0 w-0 border-l-[11px] border-t-[11px] border-l-transparent border-t-[#C17F4E]/35" />
          <p className="text-[10px] font-medium leading-snug text-[#5A2C1C]">
            Ojo: cambio de horario. Confirmar pago al entregar.
          </p>
        </div>
      </div>

      {/* Post-it 3 — arriba centro, entre WhatsApp y Excel */}
      <div
        className="absolute left-[31%] top-[10px] z-40 w-[138px] shadow-[4px_6px_14px_rgba(0,0,0,0.22)]"
        style={{ transform: "rotate(2.5deg)" }}
      >
        <div className="relative border-l-[3px] border-l-[#C17F4E]/50 bg-[#FFD9B8] px-2.5 pb-3 pt-2.5">
          <div className="absolute right-0 top-0 h-0 w-0 border-l-[10px] border-t-[10px] border-l-transparent border-t-[#C17F4E]/35" />
          <p className="text-[9.5px] font-medium leading-snug text-[#5A2C1C]">
            Verificar si quedó stock para mañana
          </p>
        </div>
      </div>

      {/* ── CAPA 5: Badges flotantes ── */}

      {/* Reloj */}
      <div className="absolute right-3 top-3 z-50 flex items-center gap-1.5 rounded-full bg-black/78 px-2.5 py-1 shadow-lg backdrop-blur-sm">
        <svg className="h-2.5 w-2.5 shrink-0 text-gray-300" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
        </svg>
        <span className="font-mono text-[13px] font-semibold leading-none tracking-tight text-white">14:47</span>
      </div>

      {/* Batería */}
      <div className="absolute right-3 top-[38px] z-50 flex items-center gap-1.5 rounded-full bg-black/78 px-2.5 py-1 shadow-lg backdrop-blur-sm">
        <svg className="h-3 w-4 shrink-0" viewBox="0 0 20 12" fill="none">
          <rect x="0.75" y="0.75" width="15.5" height="10.5" rx="1.75" stroke="#C75050" strokeWidth="1.5" />
          <rect x="17" y="3.5" width="2.5" height="5" rx="1" fill="#C75050" />
          <rect x="2" y="2.5" width="3" height="7" rx="0.75" fill="#C75050" />
        </svg>
        <span className="font-mono text-[11px] font-semibold leading-none text-[#C75050]">12%</span>
      </div>

      {/* Stamp URGENTE */}
      <div
        className="pointer-events-none absolute left-[24%] top-[36%] z-50"
        style={{ transform: "rotate(-13deg)" }}
      >
        <div className="rounded border-[2.5px] border-[#C75050]/75 px-2.5 py-1 shadow-sm">
          <span className="text-[11px] font-black uppercase tracking-[0.22em] text-[#C75050]/80">Urgente</span>
        </div>
      </div>

    </div>
  );
}
