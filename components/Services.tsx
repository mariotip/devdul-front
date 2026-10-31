import { Icon, type IconName } from "./Icon";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const services: { icon: IconName; title: string; text: string; tag: string; accent: string }[] = [
  {
    icon: "database",
    title: "ERP & CRM",
    text: "Centraliza ventas, inventario, finanzas y clientes en una sola plataforma hecha a la medida de tu operación.",
    tag: "Sistemas",
    accent: "#4f9bff",
  },
  {
    icon: "grid",
    title: "Aplicaciones web",
    text: "Productos rápidos, escalables y diseñados alrededor de las personas que los usan todos los días.",
    tag: "Web",
    accent: "#38bdf8",
  },
  {
    icon: "mobile",
    title: "Aplicaciones móviles",
    text: "Experiencias nativas y multiplataforma que acompañan a tu equipo y a tus clientes donde estén.",
    tag: "Mobile",
    accent: "#22d3ee",
  },
  {
    icon: "sparkles",
    title: "IA aplicada",
    text: "Asistentes, búsqueda inteligente y automatización integradas directamente en tus herramientas.",
    tag: "Inteligencia artificial",
    accent: "#818cf8",
  },
  {
    icon: "automation",
    title: "Automatización",
    text: "Flujos que eliminan tareas repetitivas para que tu equipo se enfoque en analizar y decidir.",
    tag: "Operaciones",
    accent: "#34d399",
  },
  {
    icon: "plug",
    title: "Integraciones",
    text: "Conectamos tu ecosistema: pagos, mensajería, analítica y APIs de terceros sin fricción.",
    tag: "APIs",
    accent: "#fbbf24",
  },
];

export function Services() {
  return (
    <section id="servicios" className="relative overflow-hidden py-24 md:py-32">
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 size-[600px] -translate-x-1/2 rounded-full bg-brand-600/10 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Servicios"
          title={
            <>
              Todo lo que tu negocio necesita <span className="text-brand-400">para crecer.</span>
            </>
          }
          description="De una aplicación móvil al sistema que coordina toda tu operación. Diseñamos, construimos e integramos."
          action={{ href: "#contacto", label: "Agenda una llamada" }}
        />

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 60}>
              <a
                href="#contacto"
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[.03] p-7 transition duration-300 hover:-translate-y-1.5 hover:border-white/20 hover:bg-white/[.05] md:p-8"
              >
                <div
                  aria-hidden="true"
                  className="absolute -right-10 -top-10 size-36 rounded-full opacity-15 blur-3xl transition-opacity duration-500 group-hover:opacity-40"
                  style={{ background: service.accent }}
                />
                <div className="relative flex items-start justify-between">
                  <span
                    className="flex size-14 items-center justify-center rounded-2xl border transition-transform duration-300 group-hover:scale-105"
                    style={{
                      color: service.accent,
                      borderColor: `${service.accent}33`,
                      background: `${service.accent}14`,
                      boxShadow: `0 0 40px -12px ${service.accent}80`,
                    }}
                  >
                    <Icon name={service.icon} className="size-6" strokeWidth={1.6} />
                  </span>
                  <span className="text-[10px] font-semibold tracking-[0.25em] text-white/25">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="relative mt-8 text-xl font-semibold tracking-[-0.02em] text-white md:text-2xl">
                  {service.title}
                </h3>
                <p className="relative mt-3 flex-1 text-sm leading-6 text-slate-400">{service.text}</p>

                <div className="relative mt-7 flex items-center justify-between border-t border-white/[.08] pt-5">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                    {service.tag}
                  </span>
                  <span className="flex size-8 items-center justify-center rounded-full border border-white/10 bg-white/[.04] text-white/60 transition group-hover:border-brand-400/50 group-hover:bg-brand-500 group-hover:text-white">
                    <Icon name="arrow" className="size-3.5" />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
