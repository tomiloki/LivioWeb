export default function OrdersPanelMockup() {
  const orders = [
    { client: "Distribuidora Central", id: "#1047", time: "hace 8 min", channel: "WhatsApp", status: "Nuevo", items: "15 bidones" },
    { client: "Comercial Norte", id: "#1046", time: "hace 24 min", channel: "WhatsApp", status: "Nuevo", items: "8 cajas" },
    { client: "Minimarket Los Olivos", id: "#1045", time: "hace 1 h", channel: "Llamada", status: "Asignado", items: "6 cajas" },
    { client: "Bodega Sur", id: "#1044", time: "hace 1 h 15 min", channel: "Formulario", status: "En ruta", items: "20 cajas" },
    { client: "Restaurant El Fogón", id: "#1043", time: "hace 2 h", channel: "WhatsApp", status: "Entregado", items: "4 bidones" },
    { client: "Supermercado Lira", id: "#1042", time: "hace 2 h 30 min", channel: "WhatsApp", status: "Entregado", items: "12 cajas" },
  ];

  const statusMeta: Record<string, { dot: string; pill: string; text: string }> = {
    Nuevo:     { dot: "bg-[#D96C5F]",  pill: "bg-[#F7F1F0] text-[#D96C5F]",  text: "Nuevo" },
    Asignado:  { dot: "bg-[#C17F4E]",  pill: "bg-[#FBF3EC] text-[#C17F4E]",  text: "Asignado" },
    "En ruta": { dot: "bg-[#22B07D] animate-pulse", pill: "bg-[#E5F5EE] text-[#22B07D]", text: "En ruta" },
    Entregado: { dot: "bg-[#A0B8A8]",  pill: "bg-[#E3F2EA] text-[#5A9E7A]",  text: "Entregado" },
  };

  const counts = {
    Nuevo: orders.filter((o) => o.status === "Nuevo").length,
    Asignado: orders.filter((o) => o.status === "Asignado").length,
    "En ruta": orders.filter((o) => o.status === "En ruta").length,
    Entregado: orders.filter((o) => o.status === "Entregado").length,
  };

  return (
    <div className="w-full overflow-hidden rounded-xl border border-[#E1E6E1] bg-[#FFFFFF] shadow-xl shadow-black/[0.06]">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 border-b border-[#E1E6E1] bg-[#F1F3EF] px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#FF605C]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD44]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#00CA4E]" />
        <span className="ml-3 flex-1 text-[11px] text-[#8A948E]">app.livio.cl/pedidos</span>
        <span className="text-[11px] text-[#8A948E]">Lunes 14/03</span>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className="flex w-10 shrink-0 flex-col items-center gap-4 border-r border-[#E1E6E1] bg-[#F7F8F4] py-4">
          {/* Logo mark */}
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-[#22B07D]">
            <span className="text-[8px] font-black text-white">L</span>
          </div>
          {/* Nav icons */}
          {[
            <path key="a" strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h7.5M8.25 12h7.5m-7.5 5.25h7.5M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />,
            <path key="b" strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />,
            <path key="c" strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />,
          ].map((iconPath, i) => (
            <button
              key={i}
              className={`flex h-7 w-7 items-center justify-center rounded-md transition-colors ${i === 0 ? "bg-[#22B07D]/10 text-[#22B07D]" : "text-[#A0A8A4] hover:bg-[#EAEEE9]"}`}
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                {iconPath}
              </svg>
            </button>
          ))}
        </div>

        {/* Main content */}
        <div className="min-w-0 flex-1 p-4">
          {/* Header */}
          <div className="mb-3 flex items-center justify-between">
            <h4 className="font-[family-name:var(--font-heading)] text-sm font-bold text-[#171C1A]">
              Pedidos del día
            </h4>
            <button className="rounded-lg bg-[#22B07D] px-2.5 py-1 text-[11px] font-semibold text-white">
              + Nuevo pedido
            </button>
          </div>

          {/* Status counters */}
          <div className="mb-3 flex gap-1.5 flex-wrap">
            {(["Nuevo", "Asignado", "En ruta", "Entregado"] as const).map((s) => (
              <span
                key={s}
                className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold ${statusMeta[s].pill}`}
              >
                <span className={`h-1.5 w-1.5 rounded-full ${statusMeta[s].dot}`} />
                {counts[s]} {s}
              </span>
            ))}
          </div>

          {/* Orders list */}
          <div className="space-y-1.5">
            {orders.map((o, i) => {
              const meta = statusMeta[o.status];
              const isWA = o.channel === "WhatsApp";
              const isNew = o.status === "Nuevo";
              return (
                <div
                  key={o.id}
                  className={`flex items-center gap-2 rounded-lg border px-3 py-2 transition-colors ${
                    isNew
                      ? "border-[#F0D8D4] bg-[#FDF8F7]"
                      : "border-[#E1E6E1] bg-[#F7F8F4]"
                  }`}
                >
                  <div className={`h-2 w-2 shrink-0 rounded-full ${meta.dot}`} />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1.5 min-w-0">
                      <p className="truncate text-[12px] font-medium text-[#171C1A]">
                        {o.client}
                      </p>
                      <span className="shrink-0 text-[10px] text-[#A0A8A4]">{o.id}</span>
                      {isWA && (
                        <span className="shrink-0 inline-flex items-center gap-0.5 rounded bg-[#E3F2EA] px-1 py-0 text-[9px] font-bold text-[#22B07D]">
                          ✦ IA
                        </span>
                      )}
                    </div>
                    <p className="text-[10px] text-[#8A948E]">
                      {o.items} · {o.time}
                    </p>
                  </div>
                  {isNew ? (
                    <button className="shrink-0 rounded-md bg-[#22B07D] px-2 py-1 text-[10px] font-semibold text-white">
                      Asignar
                    </button>
                  ) : (
                    <span className={`shrink-0 rounded-md px-2 py-0.5 text-[10px] font-medium ${meta.pill}`}>
                      {meta.text}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
