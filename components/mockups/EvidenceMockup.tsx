export default function EvidenceMockup() {
  return (
    <div className="mx-auto w-full max-w-[280px]">
      <div className="overflow-hidden rounded-[2rem] border-[6px] border-[#1A1A1A] bg-white shadow-2xl shadow-black/20">
        {/* Status bar */}
        <div className="flex items-center justify-between bg-livio px-5 py-2">
          <span className="text-[10px] font-medium text-white/80">11:23</span>
          <div className="flex items-center gap-1.5">
            <svg className="h-3 w-3 text-white/70" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21l-1.5-1.5c-5-4.5-8-7.5-8-11C2.5 5.5 5 3 8 3c1.7 0 3.4.8 4.5 2.1C13.6 3.8 15.3 3 17 3c3 0 5.5 2.5 5.5 5.5 0 3.5-3 6.5-8 11L12 21z" />
            </svg>
            <svg className="h-3 w-3 text-white/70" fill="currentColor" viewBox="0 0 24 24">
              <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z" />
            </svg>
          </div>
        </div>

        {/* Header */}
        <div className="bg-livio px-5 pb-4 pt-1">
          <p className="text-[11px] text-white/70">Entrega completada</p>
          <h4 className="mt-0.5 font-[family-name:var(--font-heading)] text-base font-bold text-white">
            Minimarket Los Olivos
          </h4>
        </div>

        <div className="px-4 py-3 space-y-3">
          {/* Photo placeholder */}
          <div className="overflow-hidden rounded-xl border border-black/[0.06] bg-[#F1F0EE]">
            <div className="flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-[#E8E7E5] to-[#D8D7D5]">
              <div className="text-center">
                <svg className="mx-auto h-8 w-8 text-[#6B7280]/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />
                </svg>
                <p className="mt-1 text-[10px] font-medium text-[#6B7280]/50">Foto de entrega capturada</p>
              </div>
            </div>
            <div className="flex items-center gap-2 border-t border-black/[0.06] px-3 py-2">
              <svg className="h-3.5 w-3.5 text-positive" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-[11px] font-medium text-positive">Foto registrada</span>
            </div>
          </div>

          {/* Signature */}
          <div className="rounded-xl border border-black/[0.06] bg-[#FAFAF8] p-3">
            <p className="mb-2 text-[11px] font-medium text-[#6B7280]">Firma del receptor</p>
            <div className="flex h-16 items-center justify-center rounded-lg border border-dashed border-black/[0.08] bg-white">
              <svg className="h-12 w-24 text-[#1A1A1A]/20" viewBox="0 0 120 50" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path d="M10 35 C20 10, 30 45, 45 25 S60 5, 70 30 S85 45, 95 20 C100 12, 108 28, 115 22" strokeLinecap="round" />
              </svg>
            </div>
            <div className="mt-2 flex items-center gap-1.5">
              <svg className="h-3.5 w-3.5 text-positive" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-[11px] font-medium text-positive">Firmado por: Juan Pérez</span>
            </div>
          </div>

          {/* GPS + Payment */}
          <div className="grid grid-cols-2 gap-2">
            <div className="rounded-xl border border-black/[0.06] bg-[#FAFAF8] p-3">
              <svg className="h-4 w-4 text-livio" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <p className="mt-1.5 text-[10px] font-medium text-[#1A1A1A]">GPS registrado</p>
              <p className="text-[9px] text-[#6B7280]">-33.44, -70.65</p>
            </div>
            <div className="rounded-xl border border-black/[0.06] bg-[#FAFAF8] p-3">
              <svg className="h-4 w-4 text-positive" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
              </svg>
              <p className="mt-1.5 text-[10px] font-medium text-[#1A1A1A]">Pago recibido</p>
              <p className="text-[9px] text-[#6B7280]">Efectivo</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center pb-2 pt-1">
          <div className="h-1 w-24 rounded-full bg-black/10" />
        </div>
      </div>
    </div>
  );
}
