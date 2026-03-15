export default function OrdersPanelMockup() {
  const orders = [
    { client: "Distribuidora Central", id: "#1047", time: "hace 8 min", channel: "WhatsApp", status: "Nuevo", statusColor: "bg-amber-soft/15 text-amber-soft" },
    { client: "Comercial Norte", id: "#1046", time: "hace 24 min", channel: "Formulario", status: "Asignado", statusColor: "bg-livio/15 text-livio" },
    { client: "Minimarket Los Olivos", id: "#1045", time: "hace 1 h", channel: "Llamada", status: "En ruta", statusColor: "bg-blue-400/15 text-blue-400" },
    { client: "Bodega Sur", id: "#1044", time: "hace 1 h 15 min", channel: "WhatsApp", status: "Entregado", statusColor: "bg-positive/15 text-positive" },
    { client: "Restaurant El Fogón", id: "#1043", time: "hace 2 h", channel: "WhatsApp", status: "Entregado", statusColor: "bg-positive/15 text-positive" },
  ];

  return (
    <div className="w-full overflow-hidden rounded-xl border border-black/[0.06] bg-white shadow-xl shadow-black/[0.06]">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 border-b border-black/[0.06] bg-[#F8F8F7] px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#FF605C]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD44]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#00CA4E]" />
        <span className="ml-3 text-[11px] text-black/30">Panel de pedidos — hoy</span>
      </div>

      <div className="p-4 sm:p-5">
        {/* Header */}
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h4 className="font-[family-name:var(--font-heading)] text-base font-bold text-[#1A1A1A]">
              12 pedidos recibidos
            </h4>
            <p className="text-xs text-[#6B7280]">Lunes 14/03</p>
          </div>
          <span className="rounded-lg bg-livio/10 px-3 py-1.5 text-xs font-semibold text-livio">
            Lunes 14/03
          </span>
        </div>

        {/* Orders list */}
        <div className="space-y-2">
          {orders.map((o) => (
            <div
              key={o.id}
              className="flex items-center justify-between rounded-lg border border-black/[0.04] bg-[#FAFAF8] px-3 py-2.5 transition-colors hover:bg-[#F1F0EE]"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className={`h-2 w-2 shrink-0 rounded-full ${
                  o.status === "Nuevo" ? "bg-amber-soft" :
                  o.status === "Asignado" ? "bg-livio" :
                  o.status === "En ruta" ? "bg-blue-400" : "bg-positive"
                }`} />
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-[#1A1A1A]">
                    {o.client} — Pedido {o.id}
                  </p>
                  <p className="text-[11px] text-[#6B7280]">
                    Ingresado {o.time} · {o.channel}
                  </p>
                </div>
              </div>
              <span className={`shrink-0 rounded-md px-2 py-1 text-[11px] font-medium ${o.statusColor}`}>
                {o.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
