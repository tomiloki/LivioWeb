export default function DriverAppMockup() {
  const deliveries = [
    { client: "Comercial Norte", address: "Av. Matta 1240, Santiago", status: "completed", time: "09:15", items: "8 cajas" },
    { client: "Minimarket Los Olivos", address: "Los Olivos 892, Ñuñoa", status: "completed", time: "10:02", items: "6 cajas" },
    { client: "Restaurant El Fogón", address: "Irarrázaval 3100, Ñuñoa", status: "current", time: "10:45", items: "4 bidones", eta: "~8 min", late: false },
    { client: "Bodega Sur", address: "Gran Av. 560, San Miguel", status: "delayed", time: "11:30", items: "12 cajas", eta: "+18 min", late: true },
    { client: "Supermercado Lira", address: "Lira 456, Santiago Centro", status: "pending", time: "12:15", items: "10 cajas" },
  ];

  const completed = deliveries.filter((d) => d.status === "completed").length;
  const total = deliveries.length;
  const progress = (completed / total) * 100;

  return (
    <div className="mx-auto w-full max-w-[280px]">
      {/* Phone frame */}
      <div className="overflow-hidden rounded-[2rem] border-[6px] border-[#1A1A1A] bg-white shadow-2xl shadow-black/20">

        {/* Status bar */}
        <div className="flex items-center justify-between bg-[#22B07D] px-5 py-1.5">
          <span className="text-[10px] font-semibold text-white">10:47</span>
          <div className="flex items-center gap-1.5">
            {/* Signal bars */}
            <svg className="h-3 w-3 text-white/80" viewBox="0 0 24 24" fill="currentColor">
              <rect x="2" y="15" width="4" height="7" rx="1" opacity="1"/>
              <rect x="8" y="10" width="4" height="12" rx="1" opacity="1"/>
              <rect x="14" y="5" width="4" height="17" rx="1" opacity="0.5"/>
              <rect x="20" y="2" width="4" height="20" rx="1" opacity="0.3"/>
            </svg>
            {/* Wifi */}
            <svg className="h-3 w-3 text-white/80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" d="M5 12.55a11 11 0 0114.08 0M1.42 9a16 16 0 0121.16 0M8.53 16.11a6 6 0 016.95 0M12 20h.01" />
            </svg>
            {/* Battery */}
            <div className="flex items-center gap-0.5">
              <div className="relative h-2.5 w-4 overflow-hidden rounded-[2px] border border-white/70">
                <div className="h-full w-3/4 rounded-[1px] bg-white/80" />
              </div>
              <div className="h-1.5 w-0.5 rounded-r-sm bg-white/60" />
            </div>
          </div>
        </div>

        {/* App header */}
        <div className="bg-[#22B07D] px-4 pb-4 pt-1">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[10px] text-white/70">Lunes 14 de marzo</p>
              <h4 className="mt-0.5 font-[family-name:var(--font-heading)] text-base font-bold text-white">
                Mis entregas
              </h4>
            </div>
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-[11px] font-bold text-white">
              CM
            </div>
          </div>
          <div className="mt-2.5 flex items-center gap-2.5">
            <span className="rounded-md bg-white/15 px-2 py-1 text-[10px] font-semibold text-white">
              {completed}/{total} completadas
            </span>
            <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/15">
              <div
                className="h-full rounded-full bg-white/80 transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>

        {/* Delivery list */}
        <div className="space-y-1.5 px-3 py-3">
          {deliveries.map((d, i) => (
            <div
              key={i}
              className={`rounded-xl border p-2.5 ${
                d.status === "current"
                  ? "border-[#B8E0CF] bg-[#E5F5EE]"
                  : d.status === "delayed"
                  ? "border-[#F5DFC0] bg-[#FEF8F1]"
                  : d.status === "completed"
                  ? "border-[#E1E6E1] bg-[#F7F8F4]"
                  : "border-[#E1E6E1] bg-[#F3F4EF]"
              }`}
            >
              <div className="flex items-start gap-2">
                {/* Status indicator */}
                {d.status === "completed" ? (
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E3F2EA]">
                    <svg className="h-3 w-3 text-[#22B07D]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                ) : d.status === "current" ? (
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#22B07D]">
                    <div className="h-2 w-2 rounded-full bg-white animate-pulse" />
                  </div>
                ) : d.status === "delayed" ? (
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#F5DFC0]">
                    <svg className="h-3 w-3 text-[#C17F4E]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0 3.75h.008v.008H12v-.008z" />
                    </svg>
                  </div>
                ) : (
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E8ECEB]">
                    <span className="text-[9px] font-bold text-[#7F8882]">{i + 1}</span>
                  </div>
                )}

                {/* Info */}
                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline justify-between gap-1">
                    <p className={`truncate text-[11px] font-semibold ${
                      d.status === "completed" ? "text-[#8A948E] line-through" : "text-[#171C1A]"
                    }`}>
                      {d.client}
                    </p>
                    <span className={`shrink-0 text-[10px] font-medium ${
                      d.status === "delayed" ? "text-[#C17F4E]" : "text-[#8A948E]"
                    }`}>
                      {d.eta ?? d.time}
                    </span>
                  </div>
                  <p className="truncate text-[10px] text-[#8A948E]">{d.address}</p>
                  {d.status !== "completed" && (
                    <p className="text-[10px] font-medium text-[#66716B]">{d.items}</p>
                  )}
                </div>
              </div>

              {d.status === "current" && (
                <div className="mt-2 flex gap-2">
                  <button className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-[#B8E0CF] bg-white py-1.5 text-[11px] font-semibold text-[#22B07D]">
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    Maps
                  </button>
                  <button className="flex-[2] rounded-lg bg-[#22B07D] py-1.5 text-[11px] font-bold text-white">
                    Registrar entrega →
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom home bar */}
        <div className="flex justify-center pb-2 pt-0.5">
          <div className="h-1 w-24 rounded-full bg-black/10" />
        </div>
      </div>
    </div>
  );
}
