export default function AssignmentMockup() {
  const unassigned = [
    { client: "Distribuidora Central", id: "#1047", items: "15 bidones", zone: "Maipú", urgent: true, isWA: true },
    { client: "Bodega Sur", id: "#1044", items: "20 cajas", zone: "San Bernardo", urgent: false, isWA: false },
    { client: "Almacén Figueroa", id: "#1048", items: "6 cajas", zone: "Pudahuel", urgent: false, isWA: true },
  ];

  const drivers = [
    {
      name: "Carlos Muñoz",
      initials: "CM",
      vehicle: "Furgón · AA-1234",
      load: 4,
      capacity: 8,
      zones: ["Ñuñoa", "Macul"],
      orders: 4,
    },
    {
      name: "Roberto Silva",
      initials: "RS",
      vehicle: "Camioneta · BB-5678",
      load: 2,
      capacity: 6,
      zones: ["Santiago Centro", "Estación Central"],
      orders: 2,
    },
  ];

  return (
    <div className="w-full overflow-hidden rounded-xl border border-[#E1E6E1] bg-[#FFFFFF] shadow-xl shadow-black/[0.06]">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 border-b border-[#E1E6E1] bg-[#F1F3EF] px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#FF605C]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD44]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#00CA4E]" />
        <span className="ml-3 flex-1 text-[11px] text-[#8A948E]">app.livio.cl/asignacion</span>
        <span className="text-[11px] text-[#8A948E]">Lunes 14/03</span>
      </div>

      <div className="grid divide-y divide-[#E1E6E1] sm:grid-cols-2 sm:divide-x sm:divide-y-0">
        {/* Left: unassigned orders */}
        <div className="p-4">
          <div className="mb-3 flex items-center gap-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#66716B]">
              Sin asignar
            </p>
            <span className="rounded-full bg-[#F7F1F0] px-2 py-0.5 text-[10px] font-bold text-[#D96C5F]">
              {unassigned.length}
            </span>
          </div>

          <div className="space-y-2">
            {unassigned.map((o, idx) => (
              <div
                key={o.id}
                className={`rounded-lg border px-3 py-2.5 ${
                  o.urgent ? "border-[#F0D8D4] bg-[#FDF8F7]" : "border-[#E1E6E1] bg-[#F7F8F4]"
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5">
                      <p className="truncate text-[12px] font-medium text-[#171C1A]">{o.client}</p>
                      {o.isWA && (
                        <span className="shrink-0 rounded bg-[#E3F2EA] px-1 py-0 text-[9px] font-bold text-[#22B07D]">
                          ✦ IA
                        </span>
                      )}
                    </div>
                    <p className="text-[10px] text-[#8A948E]">
                      {o.items} ·{" "}
                      <span className="font-medium text-[#66716B]">{o.zone}</span>
                    </p>
                  </div>
                  {o.urgent && (
                    <span className="shrink-0 rounded bg-[#F7F1F0] px-1.5 py-0.5 text-[9px] font-bold text-[#D96C5F]">
                      URGENTE
                    </span>
                  )}
                </div>

                {/* First item shows open dropdown, rest show closed button */}
                {idx === 0 ? (
                  <div className="mt-2">
                    <div className="rounded-md border border-[#22B07D] bg-white shadow-md">
                      <div className="border-b border-[#E1E6E1] px-2 py-1">
                        <p className="text-[9px] font-semibold uppercase tracking-wider text-[#8A948E]">
                          Asignar a →
                        </p>
                      </div>
                      {drivers.map((d, di) => (
                        <div
                          key={d.name}
                          className={`flex items-center gap-2 px-2 py-1.5 ${
                            di === 0 ? "bg-[#22B07D]/8" : "hover:bg-[#F7F8F4]"
                          }`}
                        >
                          <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E3F2EA] text-[8px] font-bold text-[#22B07D]">
                            {d.initials}
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="text-[10px] font-medium text-[#171C1A]">{d.name}</p>
                            <p className="text-[9px] text-[#8A948E]">{d.load}/{d.capacity} · {d.zones[0]}</p>
                          </div>
                          {di === 0 && (
                            <svg className="h-3 w-3 text-[#22B07D]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <button className="mt-2 flex w-full items-center justify-between rounded-md border border-[#E1E6E1] bg-white px-2 py-1.5 text-[10px] text-[#8A948E] hover:border-[#22B07D]/40">
                    <span>Asignar a chofer →</span>
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right: drivers */}
        <div className="p-4">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#66716B]">
            Choferes hoy
          </p>
          <div className="space-y-3">
            {drivers.map((d) => (
              <div key={d.name} className="rounded-lg border border-[#E1E6E1] bg-[#F7F8F4] p-3">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#E3F2EA] text-xs font-semibold text-[#22B07D]">
                    {d.initials}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[12px] font-medium text-[#171C1A]">{d.name}</p>
                    <p className="text-[10px] text-[#8A948E]">{d.vehicle}</p>
                  </div>
                  <span className="shrink-0 text-[11px] font-semibold text-[#66716B]">
                    {d.load}/{d.capacity}
                  </span>
                </div>

                {/* Load bar */}
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-[#E1E6E1]">
                  <div
                    className="h-full rounded-full bg-[#22B07D] transition-all"
                    style={{ width: `${(d.load / d.capacity) * 100}%` }}
                  />
                </div>

                {/* Zones + order count */}
                <div className="mt-2 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {d.zones.map((z) => (
                      <span key={z} className="rounded bg-[#E3F2EA] px-1.5 py-0.5 text-[9px] font-medium text-[#5A9E7A]">
                        {z}
                      </span>
                    ))}
                  </div>
                  <span className="text-[10px] text-[#8A948E]">
                    {d.orders} entregas
                  </span>
                </div>
              </div>
            ))}

            {/* Add driver hint */}
            <button className="flex w-full items-center justify-center gap-1.5 rounded-lg border border-dashed border-[#D8E0DA] py-2 text-[10px] text-[#8A948E] hover:border-[#22B07D]/40 hover:text-[#22B07D]">
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
              Agregar chofer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
