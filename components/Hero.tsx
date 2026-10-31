import { Counter } from "./Counter";
import { Icon, type IconName } from "./Icon";
import { Reveal } from "./Reveal";

const capabilities: { icon: IconName; title: string; text: string; featured?: boolean }[] = [
  { icon: "grid", title: "Apps web", text: "Rápidas y escalables" },
  { icon: "sparkles", title: "IA aplicada", text: "Tu operación, más lista", featured: true },
  { icon: "database", title: "ERP & CRM", text: "Todo conectado" },
  { icon: "headset", title: "Soporte 24/7", text: "Siempre contigo" },
];

const sidebarItems: { icon: IconName; label: string; active?: boolean }[] = [
  { icon: "grid", label: "Resumen", active: true },
  { icon: "chart", label: "Operación" },
  { icon: "users", label: "Clientes" },
  { icon: "database", label: "Reportes" },
  { icon: "sparkles", label: "Copiloto IA" },
];

const kpis = [
  { label: "Ingresos", value: "$248.5k", delta: "+12.4%", width: "76%" },
  { label: "Pedidos", value: "1,284", delta: "+8.2%", width: "58%" },
  { label: "Retención", value: "96%", delta: "+3.1%", width: "84%" },
];

const activity = [
  { initials: "LG", name: "Laura Gómez", action: "cerró una oportunidad", value: "$12.400", tone: "from-brand-400 to-brand-700" },
  { initials: "MR", name: "Marco Ruiz", action: "actualizó inventario", value: "320 uds.", tone: "from-cyan-400 to-brand-600" },
  { initials: "NT", name: "Nadia Torres", action: "automatizó un flujo", value: "8 horas", tone: "from-indigo-400 to-brand-700" },
];

const avatars = [
  "from-brand-400 to-brand-700",
  "from-cyan-400 to-brand-600",
  "from-indigo-400 to-brand-700",
  "from-emerald-400 to-cyan-600",
];

export function Hero() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden pb-16 pt-10 sm:pt-14">
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(43,123,255,0.22),transparent_58%)]" />
        <div className="grid-pattern absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)]" />
        <div className="absolute -left-40 top-44 size-[440px] rounded-full bg-brand-600/20 blur-[130px]" />
        <div className="absolute -right-40 top-16 size-[400px] rounded-full bg-cyan-500/10 blur-[130px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[.04] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.26em] text-brand-200">
              <span className="relative flex size-1.5">
                <span className="animate-pulse-ring absolute inline-flex size-full rounded-full bg-brand-400" />
                <span className="relative inline-flex size-1.5 rounded-full bg-brand-400" />
              </span>
              Software · IA · Producto
            </span>

            <h1 className="mt-7 text-[2.9rem] font-semibold leading-[0.98] tracking-[-0.055em] text-white sm:text-6xl md:text-7xl lg:text-[5rem]">
              Pensamos en grande.
              <span className="text-gradient mt-2 block pb-2">Construimos mejor.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
              En DevDul convertimos procesos complejos en productos digitales claros, útiles y listos para crecer:
              ERP, CRM, apps a la medida e inteligencia artificial.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <a
                href="#contacto"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-500 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_20px_50px_-15px_rgba(43,123,255,0.9)] transition hover:bg-brand-400 sm:w-auto"
              >
                Empezar un proyecto
                <Icon name="arrow" className="size-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#proyectos"
                className="group inline-flex w-full items-center justify-center gap-3 rounded-full border border-white/15 bg-white/[.03] px-7 py-3.5 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/[.06] sm:w-auto"
              >
                <span className="flex size-6 items-center justify-center rounded-full bg-white/10">
                  <Icon name="arrow" className="size-3 rotate-45" />
                </span>
                Ver proyectos
              </a>
            </div>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <div className="flex -space-x-2.5">
                {avatars.map((tone, index) => (
                  <span
                    key={tone}
                    className={`flex size-8 items-center justify-center rounded-full border-2 border-night bg-gradient-to-br ${tone} text-[9px] font-bold text-white`}
                  >
                    {["LG", "MR", "NT", "JP"][index]}
                  </span>
                ))}
              </div>
              <p className="text-xs text-slate-400">
                <span className="font-semibold text-white">50+ equipos</span> ya construyen con DevDul
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative mx-auto mt-14 max-w-4xl sm:mt-20">
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 -z-10 h-[55%] w-[112%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500/20 blur-[110px]"
            />

            <div
              aria-hidden="true"
              className="animate-float-soft absolute -left-36 top-36 z-20 hidden w-48 rounded-2xl border border-white/10 bg-[#0a1424]/90 p-4 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)] backdrop-blur-xl xl:block"
            >
              <div className="flex items-center gap-2 text-[11px] text-slate-400">
                <span className="relative flex size-2">
                  <span className="animate-pulse-ring absolute inline-flex size-full rounded-full bg-emerald-400" />
                  <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
                </span>
                Sistema activo
              </div>
              <p className="mt-3 text-2xl font-semibold text-white">24</p>
              <p className="text-[11px] text-slate-500">proyectos en curso</p>
              <div className="mt-4 flex h-12 items-end gap-1.5">
                {[36, 58, 46, 72, 64, 88, 78, 100].map((height, index) => (
                  <i
                    key={height}
                    className="flex-1 rounded-t bg-brand-400"
                    style={{ height: `${height}%`, opacity: 0.35 + index / 14 }}
                  />
                ))}
              </div>
            </div>

            <div
              aria-hidden="true"
              className="animate-float absolute -right-36 top-16 z-20 hidden w-44 rounded-2xl border border-white/10 bg-[#0a1424]/90 p-4 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)] backdrop-blur-xl xl:block"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-[0.18em] text-slate-500">Impacto</span>
                <Icon name="trend" className="size-4 text-emerald-400" />
              </div>
              <p className="mt-2 text-2xl font-semibold text-emerald-300">+68%</p>
              <p className="text-[11px] text-slate-500">crecimiento operativo</p>
              <svg viewBox="0 0 120 36" className="mt-3 h-9 w-full" aria-hidden="true">
                <path
                  d="M2 30 18 24 34 27 50 16 66 19 82 10 98 13 118 4"
                  fill="none"
                  stroke="#34d399"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div className="relative" aria-hidden="true">
              <div className="rounded-[1.75rem] border border-white/15 bg-gradient-to-b from-white/25 via-white/10 to-white/5 p-1.5 shadow-[0_50px_140px_-40px_rgba(43,123,255,0.65)] sm:rounded-[2.25rem] sm:p-2.5">
                <div className="overflow-hidden rounded-[1.4rem] border border-white/10 bg-[#060e1c] sm:rounded-[1.8rem]">
                  <div className="flex items-center gap-3 border-b border-white/10 bg-white/[.03] px-3 py-2.5 sm:px-4">
                    <div className="flex gap-1.5">
                      <span className="size-2 rounded-full bg-[#ff6b6b]" />
                      <span className="size-2 rounded-full bg-[#ffc857]" />
                      <span className="size-2 rounded-full bg-[#64d990]" />
                    </div>
                    <div className="mx-auto flex max-w-[240px] flex-1 items-center justify-center gap-1.5 rounded-md bg-white/[.04] px-3 py-1 text-[9px] text-slate-500">
                      <Icon name="shield" className="size-2.5" />
                      app.devdul.com
                    </div>
                    <div className="hidden items-center gap-1 sm:flex">
                      <span className="h-1 w-4 rounded-full bg-white/10" />
                      <span className="h-1 w-4 rounded-full bg-white/10" />
                      <span className="h-1 w-4 rounded-full bg-white/10" />
                    </div>
                  </div>

                  <div className="grid grid-cols-[52px_1fr] sm:grid-cols-[150px_1fr]">
                    <aside className="flex flex-col border-r border-white/10 bg-white/[.02] p-2.5 sm:p-4">
                      <div className="flex items-center gap-2 px-1">
                        <span className="flex size-6 items-center justify-center rounded-md bg-gradient-to-br from-brand-400 to-brand-700 text-[9px] font-bold text-white sm:size-7">
                          D
                        </span>
                        <span className="hidden text-[11px] font-semibold tracking-tight text-white sm:block">
                          DevDul OS
                        </span>
                      </div>
                      <div className="mt-5 flex flex-col gap-1">
                        {sidebarItems.map((item) => (
                          <div
                            key={item.label}
                            className={`flex items-center gap-2 rounded-lg px-1.5 py-1.5 text-[10px] sm:px-2 ${
                              item.active
                                ? "bg-brand-500/15 text-brand-200"
                                : "text-slate-500"
                            }`}
                          >
                            <Icon name={item.icon} className="size-3.5 shrink-0" />
                            <span className="hidden sm:block">{item.label}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-auto hidden items-center gap-2 rounded-lg border border-white/10 bg-white/[.03] px-2 py-1.5 sm:flex">
                        <span className="flex size-5 items-center justify-center rounded-full bg-gradient-to-br from-brand-400 to-brand-700 text-[8px] font-bold text-white">
                          JP
                        </span>
                        <div className="min-w-0">
                          <p className="truncate text-[9px] font-medium text-white">Juan Pérez</p>
                          <p className="truncate text-[8px] text-slate-500">Admin</p>
                        </div>
                      </div>
                    </aside>

                    <div className="min-w-0 p-3 sm:p-5">
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <p className="text-[10px] text-slate-500">Panel de control</p>
                          <h3 className="text-sm font-semibold text-white sm:text-base">Resumen operativo</h3>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="hidden rounded-md border border-white/10 bg-white/[.03] px-2 py-1 text-[9px] text-slate-400 sm:block">
                            Últimos 30 días
                          </span>
                          <span className="rounded-md bg-brand-500 px-2 py-1 text-[9px] font-semibold text-white">
                            + Nuevo
                          </span>
                        </div>
                      </div>

                      <div className="mt-3 grid grid-cols-2 gap-1.5 sm:mt-4 sm:grid-cols-3 sm:gap-2">
                        {kpis.map((kpi, index) => (
                          <div
                            key={kpi.label}
                            className={`rounded-lg border border-white/10 bg-white/[.03] p-2 sm:p-2.5 ${
                              index === 2 ? "hidden sm:block" : ""
                            }`}
                          >
                            <p className="text-[8px] text-slate-500 sm:text-[9px]">{kpi.label}</p>
                            <p className="mt-0.5 text-xs font-semibold text-white sm:text-sm">{kpi.value}</p>
                            <div className="mt-1.5 flex items-center justify-between gap-1">
                              <span className="text-[8px] text-emerald-400">{kpi.delta}</span>
                              <span className="h-1 w-8 overflow-hidden rounded-full bg-white/10">
                                <span
                                  className="block h-full rounded-full bg-brand-400"
                                  style={{ width: kpi.width }}
                                />
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="mt-2 grid gap-2 sm:mt-3 sm:grid-cols-[1.6fr_1fr]">
                        <div className="rounded-lg border border-white/10 bg-white/[.03] p-2.5">
                          <div className="flex items-center justify-between">
                            <p className="text-[9px] text-slate-400">Crecimiento</p>
                            <span className="text-[8px] text-emerald-400">+24.8%</span>
                          </div>
                          <svg
                            viewBox="0 0 400 120"
                            className="mt-2 h-16 w-full sm:h-24"
                            preserveAspectRatio="none"
                            role="img"
                            aria-label="Gráfico de crecimiento mensual"
                          >
                            <defs>
                              <linearGradient id="hero-area" x1="0" x2="0" y1="0" y2="1">
                                <stop offset="0%" stopColor="#4f9bff" stopOpacity="0.42" />
                                <stop offset="100%" stopColor="#4f9bff" stopOpacity="0" />
                              </linearGradient>
                            </defs>
                            {[24, 48, 72, 96].map((y) => (
                              <line
                                key={y}
                                x1="0"
                                x2="400"
                                y1={y}
                                y2={y}
                                stroke="rgba(255,255,255,0.06)"
                                strokeWidth="1"
                              />
                            ))}
                            <path
                              d="M0 100 C25 96 35 84 50 84 C70 84 80 94 100 90 C125 85 130 70 150 64 C170 58 185 76 200 72 C225 66 230 46 250 40 C270 35 285 52 300 48 C325 42 330 26 350 20 C370 15 385 12 400 8 L400 120 L0 120 Z"
                              fill="url(#hero-area)"
                            />
                            <path
                              d="M0 100 C25 96 35 84 50 84 C70 84 80 94 100 90 C125 85 130 70 150 64 C170 58 185 76 200 72 C225 66 230 46 250 40 C270 35 285 52 300 48 C325 42 330 26 350 20 C370 15 385 12 400 8"
                              fill="none"
                              stroke="#4f9bff"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              vectorEffect="non-scaling-stroke"
                            />
                          </svg>
                          <div className="mt-1 flex justify-between text-[7px] text-slate-600">
                            {["Ene", "Feb", "Mar", "Abr", "May", "Jun"].map((month) => (
                              <span key={month}>{month}</span>
                            ))}
                          </div>
                        </div>

                        <div className="hidden rounded-lg border border-white/10 bg-gradient-to-br from-brand-500/20 to-white/[.02] p-2.5 sm:block">
                          <p className="text-[9px] text-slate-400">Meta del trimestre</p>
                          <div className="mt-3 flex items-center justify-center">
                            <div className="relative">
                              <svg viewBox="0 0 80 80" className="size-20" aria-hidden="true">
                                <circle cx="40" cy="40" r="30" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="7" />
                                <circle
                                  cx="40"
                                  cy="40"
                                  r="30"
                                  fill="none"
                                  stroke="#4f9bff"
                                  strokeWidth="7"
                                  strokeLinecap="round"
                                  strokeDasharray="128 188.5"
                                  transform="rotate(-90 40 40)"
                                />
                              </svg>
                              <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-white">
                                68%
                              </span>
                            </div>
                          </div>
                          <p className="mt-1 text-center text-[8px] text-slate-500">$248.5k de $365k</p>
                        </div>
                      </div>

                      <div className="mt-2 hidden rounded-lg border border-white/10 bg-white/[.03] p-2.5 sm:mt-3 sm:block">
                        <div className="flex items-center justify-between">
                          <p className="text-[9px] text-slate-400">Actividad reciente</p>
                          <span className="text-[8px] text-brand-300">Ver todo</span>
                        </div>
                        <div className="mt-2 space-y-1.5">
                          {activity.map((row) => (
                            <div key={row.initials} className="flex items-center gap-2">
                              <span
                                className={`flex size-5 items-center justify-center rounded-full bg-gradient-to-br ${row.tone} text-[7px] font-bold text-white`}
                              >
                                {row.initials}
                              </span>
                              <p className="min-w-0 flex-1 truncate text-[8px] text-slate-400">
                                <span className="text-white">{row.name}</span> {row.action}
                              </p>
                              <span className="text-[8px] font-medium text-emerald-400">{row.value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mx-auto h-2.5 w-[62%] rounded-b-[1.2rem] bg-gradient-to-b from-slate-600/70 to-slate-900 sm:h-3.5" />
              <div className="mx-auto h-1.5 w-[78%] rounded-b-[2rem] bg-slate-900/60 blur-[2px]" />
            </div>

            <div className="relative z-10 mx-auto -mt-4 grid max-w-4xl grid-cols-2 gap-2.5 px-1 sm:-mt-6 sm:gap-4">
              {capabilities.map((capability) => {
                const featured = Boolean(capability.featured);
                return (
                  <div
                    key={capability.title}
                    className={`group rounded-2xl border p-3.5 transition duration-300 hover:-translate-y-1 sm:p-5 ${
                      featured
                        ? "border-brand-400/40 bg-gradient-to-br from-brand-500 to-brand-700 shadow-[0_24px_60px_-20px_rgba(43,123,255,0.8)]"
                        : "border-white/10 bg-[#0a1628]/85 backdrop-blur-xl hover:border-brand-400/40 hover:bg-[#0c1b33]"
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <span
                        className={`flex size-9 items-center justify-center rounded-xl sm:size-11 ${
                          featured ? "bg-white/15 text-white" : "bg-brand-500/15 text-brand-300"
                        }`}
                      >
                        <Icon name={capability.icon} className="size-4.5 sm:size-5" />
                      </span>
                      <span className={`text-[9px] font-semibold tracking-[0.2em] ${featured ? "text-white/60" : "text-white/25"}`}>
                        ● ● ●
                      </span>
                    </div>
                    <p className="mt-3 text-sm font-semibold text-white sm:mt-4 sm:text-base">{capability.title}</p>
                    <p className={`mt-0.5 text-[10px] sm:text-xs ${featured ? "text-white/70" : "text-slate-400"}`}>
                      {capability.text}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:mt-10">
              <div className="grid grid-cols-2 gap-px bg-white/10 sm:grid-cols-4">
                <div className="bg-[#070f1e] px-4 py-6 text-center sm:py-7">
                  <p className="text-2xl font-semibold text-white sm:text-3xl">
                    <Counter to={10} suffix="+" />
                  </p>
                  <p className="mt-1 text-[11px] text-slate-400 sm:text-xs">Años creando</p>
                </div>
                <div className="bg-[#070f1e] px-4 py-6 text-center sm:py-7">
                  <p className="text-2xl font-semibold text-white sm:text-3xl">
                    <Counter to={50} suffix="+" />
                  </p>
                  <p className="mt-1 text-[11px] text-slate-400 sm:text-xs">Productos lanzados</p>
                </div>
                <div className="bg-[#070f1e] px-4 py-6 text-center sm:py-7">
                  <p className="text-2xl font-semibold text-white sm:text-3xl">
                    <Counter to={98} suffix="%" />
                  </p>
                  <p className="mt-1 text-[11px] text-slate-400 sm:text-xs">Satisfacción</p>
                </div>
                <div className="bg-[#070f1e] px-4 py-6 text-center sm:py-7">
                  <p className="text-2xl font-semibold text-white sm:text-3xl">24/7</p>
                  <p className="mt-1 text-[11px] text-slate-400 sm:text-xs">Soporte</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
