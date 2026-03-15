export default function DriverAppMockup() {
  const deliveries = [
    { client: "Comercial Norte", address: "Av. Matta 1240, Santiago", status: "completed", time: "09:15" },
    { client: "Minimarket Los Olivos", address: "Los Olivos 892, Ñuñoa", status: "completed", time: "10:02" },
    { client: "Restaurant El Fogón", address: "Irarrázaval 3100, Ñuñoa", status: "current", time: "10:45" },
    { client: "Supermercado Lira", address: "Lira 456, Santiago Centro", status: "pending", time: "11:30" },
  ];

  return (
    <div className="mx-auto w-full max-w-[280px]">
      {/* Phone frame */}
      <div className="overflow-hidden rounded-[2rem] border-[6px] border-[#1A1A1A] bg-white shadow-2xl shadow-black/20">
        {/* Status bar */}
        <div className="flex items-center justify-between bg-livio px-5 py-2">
          <span className="text-[10px] font-medium text-white/80">10:47</span>
          <div className="flex items-center gap-1.5">
            <svg className="h-3 w-3 text-white/70" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21l-1.5-1.5c-5-4.5-8-7.5-8-11C2.5 5.5 5 3 8 3c1.7 0 3.4.8 4.5 2.1C13.6 3.8 15.3 3 17 3c3 0 5.5 2.5 5.5 5.5 0 3.5-3 6.5-8 11L12 21z" />
            </svg>
            <svg className="h-3 w-3 text-white/70" fill="currentColor" viewBox="0 0 24 24">
              <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z" />
            </svg>
          </div>
        </div>

        {/* App header */}
        <div className="bg-livio px-5 pb-4 pt-1">
          <p className="text-xs text-white/70">Viernes 14 de marzo</p>
          <h4 className="mt-0.5 font-[family-name:var(--font-heading)] text-lg font-bold text-white">
            Mis entregas
          </h4>
          <div className="mt-2 flex items-center gap-3">
            <div className="rounded-md bg-white/15 px-2 py-1">
              <span className="text-[11px] font-medium text-white">2/4 completadas</span>
            </div>
            <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/15">
              <div className="h-full w-1/2 rounded-full bg-white/80" />
            </div>
          </div>
        </div>

        {/* Delivery list */}
        <div className="px-4 py-3 space-y-2">
          {deliveries.map((d, i) => (
            <div
              key={i}
              className={`rounded-xl border p-3 ${
                d.status === "current"
                  ? "border-livio/20 bg-livio/[0.04]"
                  : d.status === "completed"
                  ? "border-black/[0.04] bg-[#FAFAF8]"
                  : "border-black/[0.04] bg-white"
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-2.5 min-w-0">
                  {d.status === "completed" ? (
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-positive/15">
                      <svg className="h-3 w-3 text-positive" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  ) : d.status === "current" ? (
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-livio/15">
                      <div className="h-2 w-2 rounded-full bg-livio animate-[pulse-soft_1.5s_ease-in-out_infinite]" />
                    </div>
                  ) : (
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-black/[0.04]">
                      <span className="text-[9px] font-bold text-[#6B7280]">{i + 1}</span>
                    </div>
                  )}
                  <div className="min-w-0">
                    <p className={`text-sm font-medium truncate ${
                      d.status === "completed" ? "text-[#1A1A1A]/50 line-through" : "text-[#1A1A1A]"
                    }`}>
                      {d.client}
                    </p>
                    <p className="text-[11px] text-[#6B7280] truncate">{d.address}</p>
                  </div>
                </div>
                <span className="shrink-0 text-[11px] text-[#6B7280]">{d.time}</span>
              </div>

              {d.status === "current" && (
                <button className="mt-2.5 w-full rounded-lg bg-livio py-2 text-xs font-semibold text-white">
                  Iniciar entrega
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Bottom home bar */}
        <div className="flex justify-center pb-2 pt-1">
          <div className="h-1 w-24 rounded-full bg-black/10" />
        </div>
      </div>
    </div>
  );
}
