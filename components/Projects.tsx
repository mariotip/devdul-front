import { Icon } from "./Icon";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const products = [
  {
    title: "Nexo ERP",
    tag: "ERP & CRM",
    text: "Plataforma de operación multi-sede que unifica ventas, inventario y finanzas en tiempo real.",
    metric: "-40% tiempo administrativo",
    visual: "erp",
  },
  {
    title: "Ruta",
    tag: "App móvil",
    text: "Aplicación de logística para técnicos en campo, con seguimiento, evidencia y reportes al instante.",
    metric: "+32% entregas a tiempo",
    visual: "mobile",
  },
  {
    title: "Copiloto IA",
    tag: "IA aplicada",
    text: "Asistente interno conectado al conocimiento de la empresa para responder con contexto real.",
    metric: "12h ahorradas por semana",
    visual: "ai",
  },
] as const;

function ErpVisual() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-[#0a1b3a] via-[#0c2a5c] to-[#07101f] p-4 sm:p-6">
      <div className="absolute -right-12 -top-12 size-44 rounded-full bg-brand-500/40 blur-3xl" />
      <div className="absolute -bottom-16 -left-10 size-40 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="relative flex h-full w-full flex-col overflow-hidden rounded-xl border border-white/10 bg-[#071021]/90 shadow-2xl backdrop-blur">
        <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2">
          <span className="size-1.5 rounded-full bg-[#ff6b6b]" />
          <span className="size-1.5 rounded-full bg-[#ffc857]" />
          <span className="size-1.5 rounded-full bg-[#64d990]" />
          <span className="ml-2 h-1.5 w-16 rounded-full bg-white/10" />
        </div>
        <div className="grid flex-1 grid-cols-[38px_1fr] sm:grid-cols-[64px_1fr]">
          <div className="border-r border-white/10 p-2">
            <span className="mx-auto flex size-5 items-center justify-center rounded-md bg-gradient-to-br from-brand-400 to-brand-700 text-[7px] font-bold text-white">
              D
            </span>
            <div className="mt-3 space-y-2">
              {[1, 2, 3, 4].map((item) => (
                <span
                  key={item}
                  className={`block h-1.5 rounded-full ${item === 1 ? "bg-brand-400" : "bg-white/10"}`}
                />
              ))}
            </div>
          </div>
          <div className="min-w-0 p-2.5 sm:p-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[7px] text-slate-500">Operación norte</p>
                <p className="text-[10px] font-semibold text-white sm:text-xs">Resumen general</p>
              </div>
              <span className="rounded bg-brand-500/20 px-1.5 py-0.5 text-[7px] text-brand-200">En vivo</span>
            </div>
            <div className="mt-2 grid grid-cols-3 gap-1.5">
              {[
                { label: "Ventas", value: "$84.2k" },
                { label: "Pedidos", value: "412" },
                { label: "Stock", value: "94%" },
              ].map((kpi) => (
                <div key={kpi.label} className="rounded-md border border-white/10 bg-white/[.04] p-1.5">
                  <p className="text-[6px] text-slate-500">{kpi.label}</p>
                  <p className="text-[9px] font-semibold text-white sm:text-[11px]">{kpi.value}</p>
                </div>
              ))}
            </div>
            <div className="mt-2 flex h-[42%] items-end gap-1 rounded-md border border-white/10 bg-white/[.03] p-2 sm:gap-1.5">
              {[42, 58, 48, 74, 62, 88, 78, 96, 70, 84].map((height, index) => (
                <span
                  key={height}
                  className={`flex-1 rounded-t ${index === 7 ? "bg-brand-400" : "bg-brand-500/35"}`}
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileVisual() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-[#062a3a] via-[#0b4b63] to-[#07101f] p-4">
      <div className="absolute -left-10 top-0 size-40 rounded-full bg-cyan-400/30 blur-3xl" />
      <div className="absolute -bottom-12 right-0 size-40 rounded-full bg-brand-500/30 blur-3xl" />
      <div className="absolute left-1/2 top-1/2 h-[86%] w-[42%] min-w-[116px] -translate-x-1/2 -translate-y-1/2 rotate-[-5deg] rounded-[1.7rem] border border-white/20 bg-[#071021] p-1.5 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.85)]">
        <div className="flex h-full flex-col rounded-[1.35rem] bg-gradient-to-b from-white/[.08] to-transparent p-2.5">
          <span className="mx-auto h-1 w-8 rounded-full bg-white/20" />
          <div className="mt-2 flex items-center justify-between">
            <div>
              <p className="text-[6px] text-slate-500">Hoy, 12 oct</p>
              <p className="text-[9px] font-semibold text-white">Mi ruta</p>
            </div>
            <span className="flex size-4 items-center justify-center rounded-full bg-brand-500/25 text-[6px] text-brand-200">
              AR
            </span>
          </div>
          <div className="mt-2 rounded-lg border border-brand-400/30 bg-brand-500/20 p-2">
            <p className="text-[6px] text-brand-200">Ruta activa</p>
            <p className="text-[10px] font-semibold text-white">12 entregas</p>
            <div className="mt-1.5 h-1 rounded-full bg-white/10">
              <div className="h-full w-2/3 rounded-full bg-brand-400" />
            </div>
          </div>
          <div className="mt-2 space-y-1.5">
            {[
              { label: "Cliente norte", status: "En ruta" },
              { label: "Bodega central", status: "Entregado" },
              { label: "Sucursal sur", status: "Pendiente" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between rounded-md border border-white/10 bg-white/[.04] px-1.5 py-1"
              >
                <span className="text-[6px] text-white/80">{item.label}</span>
                <span className="text-[5px] uppercase tracking-wide text-slate-500">{item.status}</span>
              </div>
            ))}
          </div>
          <div className="mt-auto flex items-center justify-around rounded-lg border border-white/10 bg-white/[.04] py-1">
            {[1, 2, 3].map((item) => (
              <span key={item} className={`size-2 rounded-sm ${item === 1 ? "bg-brand-400" : "bg-white/15"}`} />
            ))}
          </div>
        </div>
      </div>
      <div className="absolute right-3 top-1/2 -translate-y-1/2 rounded-xl border border-white/15 bg-[#07101f]/90 px-2.5 py-2 shadow-xl backdrop-blur">
        <p className="text-[6px] uppercase tracking-wide text-slate-500">En ruta</p>
        <p className="text-[11px] font-semibold text-cyan-300">+18%</p>
      </div>
    </div>
  );
}

function AiVisual() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-[#131a3a] via-[#22306e] to-[#07101f] p-4 sm:p-6">
      <div className="absolute left-1/2 top-0 size-44 -translate-x-1/2 rounded-full bg-brand-400/30 blur-3xl" />
      <div className="relative flex h-full flex-col justify-center gap-2">
        <div className="mx-auto mb-1 flex size-8 items-center justify-center rounded-full border border-brand-400/40 bg-brand-500/20 text-brand-200 shadow-[0_0_30px_-4px_rgba(79,155,255,0.8)]">
          <Icon name="sparkles" className="size-4" />
        </div>
        <div className="ml-auto max-w-[82%] rounded-2xl rounded-br-sm bg-white/10 px-2.5 py-2 text-[7px] leading-relaxed text-white/80 sm:text-[9px]">
          ¿Cuánto vendimos en la sede norte este mes?
        </div>
        <div className="max-w-[88%] rounded-2xl rounded-bl-sm border border-brand-400/30 bg-brand-500/15 px-2.5 py-2 text-[7px] leading-relaxed text-white/90 sm:text-[9px]">
          Ventas de octubre: <span className="font-semibold text-white">$84.2k</span> (+12%). El producto con mayor
          margen fue Soporte Pro. Te preparé el detalle por vendedor.
        </div>
        <div className="mt-1 flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[.06] px-2.5 py-1.5">
          <Icon name="sparkles" className="size-2.5 shrink-0 text-brand-300" />
          <span className="flex-1 text-[6px] text-slate-500 sm:text-[8px]">Pregunta algo sobre tu operación...</span>
          <span className="flex size-3.5 items-center justify-center rounded-full bg-brand-500 text-white">
            <Icon name="arrow" className="size-2" />
          </span>
        </div>
      </div>
    </div>
  );
}

const visuals = {
  erp: <ErpVisual />,
  mobile: <MobileVisual />,
  ai: <AiVisual />,
};

export function Projects() {
  return (
    <section id="proyectos" className="relative overflow-hidden py-24 md:py-32">
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute right-0 top-1/4 size-[460px] rounded-full bg-brand-600/10 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Proyectos"
          title={
            <>
              Productos que <span className="text-brand-400">mueven negocios.</span>
            </>
          }
          description="Una muestra de cómo combinamos producto, datos e inteligencia artificial para resolver problemas reales."
          action={{ href: "#contacto", label: "Hablemos de tu proyecto" }}
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {products.map((product, index) => (
            <Reveal key={product.title} delay={index * 80}>
              <article className="group h-full rounded-3xl border border-white/10 bg-white/[.03] p-3 transition duration-300 hover:-translate-y-1.5 hover:border-brand-400/40 hover:bg-white/[.05]">
                <div className="relative overflow-hidden rounded-2xl" aria-hidden="true">
                  <div className="aspect-[4/3] w-full overflow-hidden transition-transform duration-700 group-hover:scale-[1.02]">
                    {visuals[product.visual]}
                  </div>
                  <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-night/70 px-3 py-1 text-[10px] font-semibold text-white backdrop-blur">
                    {product.tag}
                  </span>
                  <span className="absolute right-4 top-4 flex size-8 items-center justify-center rounded-full border border-white/20 bg-night/60 text-white opacity-0 backdrop-blur transition duration-300 group-hover:opacity-100">
                    <Icon name="arrow" className="size-3.5 -rotate-45" />
                  </span>
                </div>

                <div className="px-3 pb-3 pt-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-xl font-semibold tracking-[-0.02em] text-white">{product.title}</h3>
                    <span className="text-[10px] font-semibold tracking-[0.25em] text-white/25">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{product.text}</p>
                  <div className="mt-4 flex items-center gap-2 border-t border-white/[.08] pt-4">
                    <Icon name="trend" className="size-4 shrink-0 text-emerald-400" />
                    <span className="text-xs font-medium text-white">{product.metric}</span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-center text-[11px] text-slate-600">
          Proyectos ilustrativos del tipo de soluciones que construimos con nuestros clientes.
        </p>
      </div>
    </section>
  );
}
