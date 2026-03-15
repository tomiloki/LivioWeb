export default function DriverAppMini() {
  return (
    <div className="w-[170px] overflow-hidden rounded-[1.4rem] border-[4px] border-[#1A1A1A] bg-white shadow-2xl shadow-black/40">
      {/* App header */}
      <div className="bg-livio px-3 py-2">
        <p className="text-[8px] text-white/60">Entrega 3 de 6</p>
        <p className="font-[family-name:var(--font-heading)] text-[11px] font-bold text-white">
          El Fogón
        </p>
        <p className="mt-0.5 text-[7px] text-white/50">Av. Los Leones 1420, Providencia</p>
      </div>

      {/* Evidence section */}
      <div className="px-2.5 py-2 space-y-1.5">
        {/* Photo capture */}
        <div className="rounded-lg border border-dashed border-livio/25 bg-livio/[0.03] p-2">
          <div className="flex items-center gap-1.5 mb-1.5">
            <div className="flex h-4 w-4 items-center justify-center rounded-full bg-positive/15">
              <svg className="h-2.5 w-2.5 text-positive" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-[8px] font-semibold text-[#333]">Foto de entrega</span>
          </div>
          {/* Mini photo placeholder */}
          <div className="h-[38px] w-full rounded-md bg-gradient-to-br from-[#e8f5e9] to-[#c8e6c9] flex items-center justify-center">
            <svg className="h-4 w-4 text-positive/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />
            </svg>
          </div>
        </div>

        {/* Signature */}
        <div className="rounded-lg border border-dashed border-livio/25 bg-livio/[0.03] p-2">
          <div className="flex items-center gap-1.5 mb-1.5">
            <div className="flex h-4 w-4 items-center justify-center rounded-full bg-positive/15">
              <svg className="h-2.5 w-2.5 text-positive" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-[8px] font-semibold text-[#333]">Firma del cliente</span>
          </div>
          {/* Signature scribble */}
          <div className="h-[28px] w-full rounded-md bg-[#fafafa] flex items-center justify-center overflow-hidden">
            <svg className="w-[80%] h-[18px]" viewBox="0 0 100 20" fill="none">
              <path d="M5 15 Q15 2 25 12 Q35 22 45 8 Q55 -2 65 14 Q75 22 85 6 Q90 2 95 10" stroke="#333" strokeWidth="1.2" fill="none" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        {/* GPS + Payment row */}
        <div className="flex gap-1.5">
          <div className="flex-1 rounded-lg border border-positive/20 bg-positive/[0.04] p-1.5 flex items-center gap-1">
            <div className="flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full bg-positive/15">
              <svg className="h-2 w-2 text-positive" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <p className="text-[7px] font-semibold text-[#333]">GPS</p>
              <p className="text-[6px] text-[#999]">Verificado</p>
            </div>
          </div>
          <div className="flex-1 rounded-lg border border-positive/20 bg-positive/[0.04] p-1.5 flex items-center gap-1">
            <div className="flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full bg-positive/15">
              <svg className="h-2 w-2 text-positive" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <p className="text-[7px] font-semibold text-[#333]">Pago</p>
              <p className="text-[6px] text-[#999]">$45.000</p>
            </div>
          </div>
        </div>

        {/* Confirm button */}
        <button className="w-full rounded-lg bg-livio py-2 text-[9px] font-bold text-white shadow-sm">
          Confirmar entrega
        </button>
      </div>

      {/* Bottom bar */}
      <div className="flex justify-center pb-1.5 pt-0.5">
        <div className="h-0.5 w-10 rounded-full bg-black/10" />
      </div>
    </div>
  );
}
