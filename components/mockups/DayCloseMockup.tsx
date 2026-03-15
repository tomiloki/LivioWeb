export default function DayCloseMockup() {
  const drivers = [
    { name: "Carlos M.", initials: "CM", delivered: 12, total: 12, incidents: 0 },
    { name: "Roberto S.", initials: "RS", delivered: 9,  total: 10, incidents: 1, incidentDetail: "Dirección incorrecta" },
    { name: "Miguel Á.",  initials: "MÁ", delivered: 7,  total: 9,  incidents: 2, incidentDetail: "2 clientes ausentes" },
  ];

  const totalDelivered = drivers.reduce((s, d) => s + d.delivered, 0); // 28
  const totalOrders    = drivers.reduce((s, d) => s + d.total, 0);     // 31
  const progress       = (totalDelivered / totalOrders) * 100;

  const cobros = [
    { label: "Efectivo",      amount: "$840.000", color: "bg-[#E3F2EA] text-[#22B07D]" },
    { label: "Transferencia", amount: "$450.000", color: "bg-[#EEF2FB] text-[#4A7AC5]" },
    { label: "Por cobrar",    amount: "$145.000", color: "bg-[#FEF8F1] text-[#C17F4E]" },
  ];

  const pendientes = [
    { client: "Bodega Sur",    detail: "Reprogramar entrega" },
    { client: "Los Aromos",    detail: "Reprogramar entrega" },
    { client: "Miguel Á.",     detail: "Resolver 2 incidentes" },
  ];

  return (
    <div className="w-full overflow-hidden rounded-xl border border-[#E1E6E1] bg-[#FFFFFF] shadow-xl shadow-black/[0.06]">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 border-b border-[#E1E6E1] bg-[#F1F3EF] px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#FF605C]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD44]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#00CA4E]" />
        <span className="ml-3 flex-1 text-[11px] text-[#8A948E]">app.livio.cl/cierre</span>
        <span className="text-[11px] text-[#8A948E]">Lunes 14/03</span>
      </div>

      <div className="p-4 sm:p-5">
        {/* Header */}
        <div className="mb-3 flex items-start justify-between gap-3">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-wider text-[#8A948E]">Entregas del día</p>
            <div className="mt-0.5 flex items-baseline gap-1.5">
              <span className="font-[family-name:var(--font-heading)] text-4xl font-bold text-[#171C1A]">{totalDelivered}</span>
              <span className="text-lg text-[#A0A8A4]">/</span>
              <span className="font-[family-name:var(--font-heading)] text-lg text-[#66716B]">{totalOrders}</span>
            </div>
            <p className="mt-0.5 text-[10px] text-[#8A948E]">3 choferes · 31 clientes</p>
            <p className="mt-1 flex items-center gap-1 text-[10px] text-[#8A948E]">
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Cierre automático — 18:32
            </p>
          </div>
          <span className="shrink-0 rounded-lg bg-[#FEF8F1] px-3 py-1.5 text-xs font-bold text-[#C17F4E]">
            90% completado
          </span>
        </div>

        {/* Progress */}
        <div className="mb-3 h-2 overflow-hidden rounded-full bg-black/[0.04]">
          <div className="h-full rounded-full bg-[#22B07D]" style={{ width: `${progress}%` }} />
        </div>

        {/* Stats grid */}
        <div className="mb-3 grid grid-cols-3 gap-2">
          <div className="rounded-lg bg-[#F7F8F4] p-2.5 text-center">
            <p className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[#22B07D]">{totalDelivered}</p>
            <p className="text-[10px] text-[#66716B]">Completadas</p>
          </div>
          <div className="rounded-lg bg-[#F7F1F0] p-2.5 text-center">
            <p className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[#D96C5F]">3</p>
            <p className="text-[10px] text-[#66716B]">Pendientes</p>
          </div>
          <div className="rounded-lg bg-[#FEF8F1] p-2.5 text-center">
            <p className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[#C17F4E]">3</p>
            <p className="text-[10px] text-[#66716B]">Incidentes</p>
          </div>
        </div>

        {/* Recaudación */}
        <div className="mb-3 rounded-lg border border-[#E1E6E1] bg-[#F7F8F4] px-3 py-2.5">
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-[#8A948E]">
            Recaudación del día
          </p>
          <div className="flex flex-wrap gap-1.5">
            {cobros.map((c) => (
              <span key={c.label} className={`inline-flex items-center gap-1 rounded-md px-2 py-1 text-[10px] font-semibold ${c.color}`}>
                {c.label}
                <span className="font-bold">{c.amount}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Driver breakdown */}
        <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-[#8A948E]">Por chofer</p>
        <div className="mb-3 space-y-1.5">
          {drivers.map((d) => (
            <div
              key={d.name}
              className={`rounded-lg border px-3 py-2 ${
                d.incidents > 0 ? "border-[#F0D8D4] bg-[#FDF8F7]" : "border-[#E1E6E1] bg-[#F7F8F4]"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px] font-semibold ${
                    d.incidents > 0 ? "bg-[#F7F1F0] text-[#D96C5F]" : "bg-[#E3F2EA] text-[#22B07D]"
                  }`}>
                    {d.initials}
                  </div>
                  <div>
                    <p className="text-[11px] font-medium text-[#171C1A]">{d.name}</p>
                    <p className="text-[10px] text-[#66716B]">{d.delivered}/{d.total} entregas</p>
                  </div>
                </div>
                {d.incidents > 0 ? (
                  <svg className="h-3.5 w-3.5 text-[#D96C5F]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                  </svg>
                ) : (
                  <svg className="h-3.5 w-3.5 text-[#22B07D]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )}
              </div>
              {d.incidentDetail && (
                <div className="mt-1 flex items-center gap-1.5 rounded bg-[#F7F1F0] px-2 py-0.5">
                  <span className="text-[9px] font-semibold uppercase tracking-wide text-[#D96C5F]">Incidente</span>
                  <span className="text-[9px] text-[#8A948E]">—</span>
                  <span className="text-[9px] text-[#66716B]">{d.incidentDetail}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Pendientes mañana */}
        <div className="mb-3 rounded-lg border border-[#E8E3D8] bg-[#FDFBF7] px-3 py-2.5">
          <div className="mb-2 flex items-center gap-1.5">
            <svg className="h-3.5 w-3.5 text-[#C17F4E]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-[10px] font-semibold uppercase tracking-wider text-[#C17F4E]">
              Pendientes para mañana
            </p>
          </div>
          <div className="space-y-1.5">
            {pendientes.map((p) => (
              <div key={p.client} className="flex items-start gap-2">
                <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C17F4E]/50" />
                <p className="text-[10px] text-[#66716B]">
                  <span className="font-semibold text-[#171C1A]">{p.client}</span>
                  {" — "}{p.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Evidence row */}
        <div className="mb-3 flex items-center gap-2 rounded-lg border border-[#D8E0DA] bg-[#E5F5EE] px-3 py-2">
          <svg className="h-3.5 w-3.5 shrink-0 text-[#22B07D]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          <p className="text-[10px] text-[#66716B]">
            <span className="font-semibold text-[#171C1A]">28 evidencias completas</span> — foto, firma y GPS
          </p>
        </div>

        {/* Export button */}
        <button className="flex w-full items-center justify-center gap-2 rounded-lg border border-[#E1E6E1] bg-[#F7F8F4] py-2.5 text-[11px] font-semibold text-[#66716B] transition-colors hover:border-[#22B07D]/30 hover:text-[#22B07D]">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
          </svg>
          Exportar resumen
        </button>
      </div>
    </div>
  );
}
