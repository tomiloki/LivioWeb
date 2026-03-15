export default function EvidenceMockup() {
  return (
    <div className="mx-auto w-full max-w-[280px]">
      <div className="overflow-hidden rounded-[2rem] border-[6px] border-[#1A1A1A] bg-white shadow-2xl shadow-black/20">

        {/* Status bar */}
        <div className="flex items-center justify-between bg-[#22B07D] px-5 py-1.5">
          <span className="text-[10px] font-semibold text-white">11:23</span>
          <div className="flex items-center gap-1.5">
            <svg className="h-3 w-3 text-white/80" viewBox="0 0 24 24" fill="currentColor">
              <rect x="2" y="15" width="4" height="7" rx="1"/>
              <rect x="8" y="10" width="4" height="12" rx="1"/>
              <rect x="14" y="5" width="4" height="17" rx="1" opacity="0.5"/>
              <rect x="20" y="2" width="4" height="20" rx="1" opacity="0.3"/>
            </svg>
            <svg className="h-3 w-3 text-white/80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" d="M5 12.55a11 11 0 0114.08 0M1.42 9a16 16 0 0121.16 0M8.53 16.11a6 6 0 016.95 0M12 20h.01" />
            </svg>
            <div className="flex items-center gap-0.5">
              <div className="relative h-2.5 w-4 overflow-hidden rounded-[2px] border border-white/70">
                <div className="h-full w-3/4 rounded-[1px] bg-white/80" />
              </div>
              <div className="h-1.5 w-0.5 rounded-r-sm bg-white/60" />
            </div>
          </div>
        </div>

        {/* Header */}
        <div className="bg-[#22B07D] px-4 pb-3 pt-1">
          <div className="flex items-center justify-between">
            <p className="text-[10px] text-white/70">Entrega 3 de 5</p>
            <span className="rounded-full bg-white/15 px-2 py-0.5 text-[9px] font-semibold text-white">
              En curso
            </span>
          </div>
          <h4 className="mt-0.5 font-[family-name:var(--font-heading)] text-base font-bold text-white">
            Restaurant El Fogón
          </h4>
          <p className="text-[10px] text-white/70">Irarrázaval 3100, Ñuñoa · 4 bidones</p>
        </div>

        <div className="space-y-2.5 px-3 py-3">

          {/* Photo — simulated delivery photo */}
          <div className="overflow-hidden rounded-xl border border-[#E1E6E1]">
            <div className="relative flex aspect-[16/9] items-end overflow-hidden bg-[#BFC0BE]">
              <svg viewBox="0 0 240 135" className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
                {/* Wall */}
                <rect width="240" height="98" fill="#C8C3BB"/>
                <line x1="0" y1="44" x2="240" y2="44" stroke="#B5B0A8" strokeWidth="0.5"/>
                <line x1="0" y1="72" x2="240" y2="72" stroke="#B5B0A8" strokeWidth="0.5"/>
                {/* Floor */}
                <rect y="98" width="240" height="37" fill="#8A8278"/>
                <line x1="0" y1="98" x2="240" y2="98" stroke="#6A6058" strokeWidth="1"/>
                <line x1="80" y1="98" x2="80" y2="135" stroke="#7A7268" strokeWidth="0.5"/>
                <line x1="160" y1="98" x2="160" y2="135" stroke="#7A7268" strokeWidth="0.5"/>
                <line x1="0" y1="116" x2="240" y2="116" stroke="#7A7268" strokeWidth="0.5"/>
                {/* Window left */}
                <rect x="14" y="22" width="44" height="32" rx="2" fill="#9BB5C8" opacity="0.75"/>
                <rect x="14" y="22" width="44" height="32" rx="2" fill="none" stroke="#7A9AB0" strokeWidth="1.5"/>
                <line x1="36" y1="22" x2="36" y2="54" stroke="#7A9AB0" strokeWidth="1"/>
                <line x1="14" y1="38" x2="58" y2="38" stroke="#7A9AB0" strokeWidth="1"/>
                {/* Door right */}
                <rect x="158" y="18" width="54" height="80" rx="2" fill="#3D2B1E"/>
                <rect x="161" y="21" width="48" height="77" rx="1" fill="#4E3828"/>
                <rect x="164" y="24" width="42" height="24" rx="1" fill="#5A4232" opacity="0.7"/>
                <rect x="164" y="52" width="42" height="40" rx="1" fill="#5A4232" opacity="0.7"/>
                <circle cx="162" cy="66" r="2.5" fill="#B8903A"/>
                {/* Pallet */}
                <rect x="20" y="90" width="122" height="8" rx="1" fill="#9B7A45"/>
                <rect x="20" y="90" width="122" height="2.5" rx="1" fill="#B08A55"/>
                <line x1="38" y1="90" x2="38" y2="98" stroke="#7A5830" strokeWidth="1.5"/>
                <line x1="60" y1="90" x2="60" y2="98" stroke="#7A5830" strokeWidth="1.5"/>
                <line x1="82" y1="90" x2="82" y2="98" stroke="#7A5830" strokeWidth="1.5"/>
                <line x1="104" y1="90" x2="104" y2="98" stroke="#7A5830" strokeWidth="1.5"/>
                <line x1="126" y1="90" x2="126" y2="98" stroke="#7A5830" strokeWidth="1.5"/>
                {/* BIDONES — Row 1 bottom (5 bidones) */}
                {([33, 55, 77, 99, 121] as number[]).map((cx) => (
                  <g key={`r1-${cx}`}>
                    <rect x={cx - 9} y="66" width="18" height="24" rx="3" fill="#4A9FCC"/>
                    <rect x={cx + 1} y="66" width="7" height="24" rx="2" fill="#2E7FA8" opacity="0.5"/>
                    <rect x={cx - 7} y="73" width="13" height="10" rx="1" fill="white" opacity="0.82"/>
                    <rect x={cx - 9} y="68" width="3" height="19" rx="1" fill="white" opacity="0.28"/>
                    <ellipse cx={cx} cy="66" rx="9" ry="2.5" fill="#2E7FA8"/>
                    <rect x={cx - 3} y="61" width="6" height="5" rx="2" fill="#1A6090"/>
                  </g>
                ))}
                {/* BIDONES — Row 2 top (3 bidones stacked on first 3) */}
                {([33, 55, 77] as number[]).map((cx) => (
                  <g key={`r2-${cx}`}>
                    <rect x={cx - 9} y="42" width="18" height="24" rx="3" fill="#52AACC"/>
                    <rect x={cx + 1} y="42" width="7" height="24" rx="2" fill="#2E7FA8" opacity="0.5"/>
                    <rect x={cx - 7} y="49" width="13" height="10" rx="1" fill="white" opacity="0.82"/>
                    <rect x={cx - 9} y="44" width="3" height="19" rx="1" fill="white" opacity="0.28"/>
                    <ellipse cx={cx} cy="42" rx="9" ry="2.5" fill="#2E7FA8"/>
                    <rect x={cx - 3} y="37" width="6" height="5" rx="2" fill="#1A6090"/>
                  </g>
                ))}
                {/* Awning — drawn last, clips bidones that go above */}
                <rect x="0" y="0" width="240" height="18" fill="#1A5A8A"/>
                <rect x="0" y="15" width="240" height="3" fill="#0F4268"/>
                <text x="120" y="12" textAnchor="middle" fill="white" fontSize="7" fontFamily="monospace" fontWeight="bold" letterSpacing="0.8">MINIMARKET LOS OLIVOS</text>
              </svg>

              {/* Checkmark overlay */}
              <div className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-[#22B07D] shadow-md">
                <svg className="h-3.5 w-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              {/* GPS watermark */}
              <div className="absolute bottom-2 left-2 flex items-center gap-1 rounded bg-black/40 px-1.5 py-0.5">
                <svg className="h-2.5 w-2.5 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span className="text-[8px] text-white/80">-33.44, -70.65 · 11:23</span>
              </div>
            </div>
            <div className="flex items-center gap-2 border-t border-[#E1E6E1] bg-[#F7F8F4] px-3 py-1.5">
              <svg className="h-3.5 w-3.5 text-[#22B07D]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-[10px] font-medium text-[#22B07D]">Foto registrada</span>
            </div>
          </div>

          {/* Signature */}
          <div className="rounded-xl border border-[#E1E6E1] bg-[#F7F8F4] p-2.5">
            <p className="mb-1.5 text-[10px] font-semibold text-[#66716B]">Firma del receptor</p>
            <div className="flex h-14 items-center justify-center rounded-lg border border-dashed border-[#D8E0DA] bg-white">
              <svg className="h-10 w-24 text-[#1A1A1A]/25" viewBox="0 0 120 50" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path d="M10 35 C20 10, 30 45, 45 25 S60 5, 70 30 S85 45, 95 20 C100 12, 108 28, 115 22" strokeLinecap="round" />
              </svg>
            </div>
            <div className="mt-1.5 flex items-center gap-1.5">
              <svg className="h-3 w-3 text-[#22B07D]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-[10px] font-medium text-[#22B07D]">Firmado: Juan Pérez</span>
            </div>
          </div>

          {/* GPS + Payment */}
          <div className="grid grid-cols-2 gap-2">
            <div className="rounded-xl border border-[#E1E6E1] bg-[#F7F8F4] p-2.5">
              <svg className="h-4 w-4 text-[#22B07D]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <p className="mt-1 text-[10px] font-semibold text-[#171C1A]">GPS registrado</p>
              <p className="text-[9px] text-[#66716B]">-33.44, -70.65</p>
            </div>
            <div className="rounded-xl border border-[#E1E6E1] bg-[#F7F8F4] p-2.5">
              <svg className="h-4 w-4 text-[#22B07D]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
              </svg>
              <p className="mt-1 text-[10px] font-semibold text-[#171C1A]">Pago recibido</p>
              <p className="text-[9px] text-[#66716B]">Efectivo</p>
            </div>
          </div>

          {/* Confirm button */}
          <button className="w-full rounded-xl bg-[#22B07D] py-2.5 text-[12px] font-bold text-white shadow-md shadow-[#22B07D]/20">
            Confirmar entrega
          </button>
        </div>

        <div className="flex justify-center pb-2 pt-0">
          <div className="h-1 w-24 rounded-full bg-black/10" />
        </div>
      </div>
    </div>
  );
}
