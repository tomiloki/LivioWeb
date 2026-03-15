export default function DaySummaryMockup() {
  const drivers = [
    { name: "Carlos M.", route: "Sector Norte", delivered: 7, total: 7, status: "Completado" },
    { name: "Roberto S.", route: "Sector Centro", delivered: 5, total: 6, status: "En ruta" },
    { name: "Miguel Á.", route: "Sector Sur", delivered: 5, total: 5, status: "Completado" },
  ];

  const recentOrders = [
    { client: "Distribuidora Central", time: "10:32", status: "Entregado", items: "12 bidones" },
    { client: "Minimarket Los Olivos", time: "10:18", status: "Entregado", items: "8 bidones" },
    { client: "Comercial Norte", time: "09:55", status: "En ruta", items: "15 bidones" },
    { client: "Bodega Sur", time: "09:40", status: "Entregado", items: "6 bidones" },
  ];

  return (
    <div className="w-full overflow-hidden rounded-xl border border-[#E0DDD6] bg-[#FAF9F5] shadow-2xl shadow-black/20">
      {/* Browser chrome */}
      <div className="flex items-center gap-3 border-b border-[#E8E5DE] bg-[#F0EDE6] px-4 py-2.5">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#FF605C]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD44]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#00CA4E]" />
        </div>
        {/* Nav buttons */}
        <div className="flex items-center gap-1.5">
          <div className="flex h-5 w-5 items-center justify-center rounded text-[#999]">
            <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
          </div>
          <div className="flex h-5 w-5 items-center justify-center rounded text-[#999]">
            <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
          </div>
        </div>
        {/* URL bar */}
        <div className="flex flex-1 items-center gap-2 rounded-md bg-[#FAF9F5] border border-[#E0DDD6] px-3 py-1">
          <svg className="h-3 w-3 shrink-0 text-[#999]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
          <span className="min-w-0 truncate text-[11px] text-[#999]">app.livio.cl/dashboard</span>
        </div>
        {/* User avatar */}
        <div className="flex items-center gap-2">
          <div className="flex h-5 w-5 items-center justify-center rounded text-[#999]">
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" /></svg>
          </div>
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#22B07D]/15 text-[9px] font-bold text-[#22B07D]">TF</div>
        </div>
      </div>

      {/* App shell */}
      <div className="flex h-auto min-h-[300px] sm:h-[380px]">
        {/* Sidebar */}
        <div className="flex w-[52px] shrink-0 flex-col items-center gap-1 border-r border-[#E8E5DE] bg-[#F0EDE6] py-3">
          {/* Logo */}
          <div className="mb-2 flex h-7 w-7 items-center justify-center rounded-lg bg-[#22B07D]/15">
            <span className="text-[10px] font-extrabold text-[#22B07D]">L</span>
          </div>
          {[
            { path: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6", active: true },
            { path: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2", active: false },
            { path: "M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12", active: false },
            { path: "M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z", active: false },
          ].map((item, i) => (
            <div
              key={i}
              className={`flex h-8 w-8 items-center justify-center rounded-lg transition-colors ${item.active ? "bg-[#22B07D]/10" : "hover:bg-black/[0.03]"}`}
            >
              <svg className={`h-4 w-4 ${item.active ? "text-[#22B07D]" : "text-[#999]"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d={item.path} />
              </svg>
            </div>
          ))}
          {/* Spacer + bottom icon */}
          <div className="mt-auto">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg hover:bg-black/[0.03]">
              <svg className="h-4 w-4 text-[#999]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 overflow-hidden bg-[#FAF9F5] p-4">
          {/* Header */}
          <div className="mb-3 flex items-center justify-between gap-2">
            <div className="min-w-0">
              <h3 className="font-[family-name:var(--font-heading)] text-sm font-bold text-[#1A1A1A]">
                Resumen del día
              </h3>
              <p className="truncate text-[11px] text-[#6B7280]">Viernes 14 de marzo, 2026</p>
            </div>
            <div className="flex shrink-0 items-center gap-2">
              <div className="flex items-center gap-1.5 rounded-lg bg-[#22B07D]/10 px-2.5 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-[#22B07D] animate-[pulse-soft_1.5s_ease-in-out_infinite]" />
                <span className="text-[11px] font-semibold text-[#22B07D]">94% completado</span>
              </div>
              <div className="hidden rounded-lg border border-[#E0DDD6] bg-white px-2.5 py-1 sm:block">
                <span className="text-[10px] text-[#6B7280]">10:45 AM</span>
              </div>
            </div>
          </div>

          {/* Stats row */}
          <div className="mb-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {[
              { label: "Total entregas", value: "18", sub: "programadas", color: "text-[#1A1A1A]" },
              { label: "Completadas", value: "17", sub: "94.4%", color: "text-[#22B07D]" },
              { label: "En ruta", value: "1", sub: "Roberto S.", color: "text-[#E9783D]" },
              { label: "Incidentes", value: "0", sub: "sin novedad", color: "text-[#6B7280]" },
            ].map((s) => (
              <div key={s.label} className="rounded-lg bg-white p-2.5 border border-[#E8E5DE]">
                <p className="text-[10px] text-[#6B7280]">{s.label}</p>
                <p className={`font-[family-name:var(--font-heading)] text-lg font-bold ${s.color}`}>{s.value}</p>
                <p className="text-[9px] text-[#9CA3AF]">{s.sub}</p>
              </div>
            ))}
          </div>

          {/* Progress bar */}
          <div className="mb-3">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[9px] text-[#9CA3AF]">Progreso del día</span>
              <span className="text-[9px] font-medium text-[#6B7280]">17 de 18</span>
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-[#E8E5DE]">
              <div className="h-full w-[94%] rounded-full bg-gradient-to-r from-[#22B07D] to-[#35C992]" />
            </div>
          </div>

          {/* Two columns */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {/* Drivers */}
            <div>
              <div className="mb-2 flex items-center justify-between">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-[#9CA3AF]">
                  Choferes activos
                </p>
                <span className="text-[9px] text-[#22B07D]">3 en calle</span>
              </div>
              <div className="space-y-1.5">
                {drivers.map((d, i) => (
                  <div key={d.name} className={`flex items-center justify-between rounded-lg bg-white px-2.5 py-2 border border-[#E8E5DE] ${i >= 2 ? "hidden sm:flex" : ""}`}>
                    <div className="flex items-center gap-2">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#22B07D]/12 text-[10px] font-bold text-[#22B07D]">
                        {d.name[0]}
                      </div>
                      <div>
                        <p className="text-[11px] font-medium text-[#1A1A1A]">{d.name}</p>
                        <p className="text-[10px] text-[#9CA3AF]">{d.route} · {d.delivered}/{d.total}</p>
                      </div>
                    </div>
                    <span className={`rounded px-1.5 py-0.5 text-[9px] font-semibold ${d.status === "Completado" ? "bg-[#22B07D]/10 text-[#22B07D]" : "bg-[#E9783D]/10 text-[#E9783D]"}`}>
                      {d.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent activity */}
            <div className="hidden sm:block">
              <div className="mb-2 flex items-center justify-between">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-[#9CA3AF]">
                  Últimas entregas
                </p>
                <span className="text-[9px] text-[#9CA3AF]">Hoy</span>
              </div>
              <div className="space-y-1.5">
                {recentOrders.map((o) => (
                  <div key={o.client} className="flex items-center justify-between rounded-lg bg-white px-2.5 py-2 border border-[#E8E5DE]">
                    <div className="min-w-0">
                      <p className="truncate text-[11px] font-medium text-[#1A1A1A]">{o.client}</p>
                      <p className="text-[10px] text-[#9CA3AF]">{o.time} · {o.items}</p>
                    </div>
                    <span className={`ml-2 shrink-0 rounded px-1.5 py-0.5 text-[9px] font-semibold ${o.status === "Entregado" ? "bg-[#22B07D]/10 text-[#22B07D]" : "bg-[#E9783D]/10 text-[#E9783D]"}`}>
                      {o.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
