export default function DayCloseMockup() {
  const drivers = [
    { name: "Carlos M.", delivered: 7, total: 7, incidents: 0 },
    { name: "Roberto S.", delivered: 6, total: 6, incidents: 0 },
    { name: "Miguel Á.", delivered: 5, total: 5, incidents: 1 },
  ];

  return (
    <div className="w-full overflow-hidden rounded-xl border border-black/[0.06] bg-white shadow-xl shadow-black/[0.06]">
      <div className="flex items-center gap-2 border-b border-black/[0.06] bg-[#F8F8F7] px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#FF605C]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD44]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#00CA4E]" />
        <span className="ml-3 text-[11px] text-black/30">Cierre del día — Viernes 14/03</span>
      </div>

      <div className="p-4 sm:p-5">
        {/* Main stat */}
        <div className="mb-4 flex items-start justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-[#6B7280]">Entregas hoy</p>
            <div className="mt-1 flex items-baseline gap-1.5">
              <span className="font-[family-name:var(--font-heading)] text-4xl font-bold text-[#1A1A1A]">18</span>
              <span className="text-lg text-[#6B7280]">/</span>
              <span className="font-[family-name:var(--font-heading)] text-lg text-[#6B7280]">18</span>
            </div>
          </div>
          <span className="rounded-lg bg-positive/10 px-3 py-1.5 text-xs font-bold text-positive">
            100% completado
          </span>
        </div>

        {/* Progress */}
        <div className="mb-5 h-2.5 overflow-hidden rounded-full bg-black/[0.04]">
          <div className="h-full w-full rounded-full bg-gradient-to-r from-livio to-positive" />
        </div>

        {/* Stats grid */}
        <div className="mb-5 grid grid-cols-3 gap-2">
          <div className="rounded-lg bg-[#FAFAF8] p-3 text-center">
            <p className="font-[family-name:var(--font-heading)] text-2xl font-bold text-positive">18</p>
            <p className="text-[10px] text-[#6B7280]">Completadas</p>
          </div>
          <div className="rounded-lg bg-[#FAFAF8] p-3 text-center">
            <p className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[#1A1A1A]">0</p>
            <p className="text-[10px] text-[#6B7280]">Pendientes</p>
          </div>
          <div className="rounded-lg bg-[#FAFAF8] p-3 text-center">
            <p className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[#1A1A1A]">1</p>
            <p className="text-[10px] text-[#6B7280]">Incidentes</p>
          </div>
        </div>

        {/* Driver breakdown */}
        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#6B7280]">Por chofer</p>
        <div className="space-y-2">
          {drivers.map((d) => (
            <div key={d.name} className="flex items-center justify-between rounded-lg border border-black/[0.04] bg-[#FAFAF8] px-3 py-2.5">
              <div className="flex items-center gap-2.5">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-livio/10 text-[11px] font-semibold text-livio">
                  {d.name.split(" ")[0][0]}{d.name.split(" ")[1]?.[0] || ""}
                </div>
                <div>
                  <p className="text-sm font-medium text-[#1A1A1A]">{d.name}</p>
                  <p className="text-[11px] text-[#6B7280]">{d.delivered}/{d.total} entregas</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {d.incidents > 0 && (
                  <span className="rounded bg-amber-soft/15 px-1.5 py-0.5 text-[10px] font-medium text-amber-soft">
                    {d.incidents} incidente
                  </span>
                )}
                <svg className="h-4 w-4 text-positive" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Evidence footer */}
        <div className="mt-4 flex items-center gap-2 rounded-lg border border-positive/15 bg-positive/[0.04] px-3 py-2.5">
          <svg className="h-4 w-4 text-positive" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          <p className="text-xs text-[#6B7280]">
            <span className="font-medium text-[#1A1A1A]">18 evidencias completas</span> — foto, firma y GPS
          </p>
        </div>
      </div>
    </div>
  );
}
