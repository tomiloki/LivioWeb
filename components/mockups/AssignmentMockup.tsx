export default function AssignmentMockup() {
  const unassigned = [
    { client: "Distribuidora Central", id: "#1047", items: "15 bidones", urgent: true },
    { client: "Bodega Sur", id: "#1044", items: "20 cajas", urgent: false },
  ];

  const drivers = [
    {
      name: "Carlos Muñoz",
      vehicle: "Furgón · AA-1234",
      load: 4,
      capacity: 8,
      orders: ["Comercial Norte", "Los Olivos", "El Fogón", "Supermercado Lira"],
    },
    {
      name: "Roberto Silva",
      vehicle: "Camioneta · BB-5678",
      load: 2,
      capacity: 6,
      orders: ["Distribuidora Poniente", "Almacén Central"],
    },
  ];

  return (
    <div className="w-full overflow-hidden rounded-xl border border-black/[0.06] bg-white shadow-xl shadow-black/[0.06]">
      <div className="flex items-center gap-2 border-b border-black/[0.06] bg-[#F8F8F7] px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#FF605C]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD44]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#00CA4E]" />
        <span className="ml-3 text-[11px] text-black/30">Asignación de entregas</span>
      </div>

      <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-black/[0.06]">
        {/* Left: unassigned orders */}
        <div className="p-4">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#6B7280]">
            Sin asignar
            <span className="ml-2 rounded-full bg-amber-soft/15 px-2 py-0.5 text-[10px] font-bold text-amber-soft">
              {unassigned.length}
            </span>
          </p>
          <div className="space-y-2">
            {unassigned.map((o) => (
              <div
                key={o.id}
                className={`rounded-lg border px-3 py-2.5 ${
                  o.urgent
                    ? "border-amber-soft/20 bg-amber-soft/[0.04]"
                    : "border-black/[0.04] bg-[#FAFAF8]"
                }`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-medium text-[#1A1A1A]">{o.client}</p>
                    <p className="text-[11px] text-[#6B7280]">Pedido {o.id} · {o.items}</p>
                  </div>
                  {o.urgent && (
                    <span className="rounded bg-amber-soft/15 px-1.5 py-0.5 text-[9px] font-bold text-amber-soft">
                      URGENTE
                    </span>
                  )}
                </div>
                {/* Drag indicator */}
                <div className="mt-2 flex items-center gap-1 text-[10px] text-[#6B7280]/60">
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                  </svg>
                  Arrastra al chofer
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: drivers */}
        <div className="p-4">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#6B7280]">
            Choferes disponibles
          </p>
          <div className="space-y-3">
            {drivers.map((d) => (
              <div key={d.name} className="rounded-lg border border-black/[0.04] bg-[#FAFAF8] p-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-livio/10 text-xs font-semibold text-livio">
                      {d.name.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#1A1A1A]">{d.name}</p>
                      <p className="text-[11px] text-[#6B7280]">{d.vehicle}</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-medium text-[#6B7280]">
                    {d.load}/{d.capacity}
                  </span>
                </div>
                {/* Load bar */}
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-black/[0.04]">
                  <div
                    className="h-full rounded-full bg-livio/60"
                    style={{ width: `${(d.load / d.capacity) * 100}%` }}
                  />
                </div>
                <div className="mt-2 flex flex-wrap gap-1">
                  {d.orders.map((name) => (
                    <span key={name} className="rounded bg-black/[0.04] px-1.5 py-0.5 text-[9px] text-[#6B7280]">
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
