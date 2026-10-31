import { Icon } from "./Icon";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const steps = [
  {
    title: "Descubrimiento",
    text: "Entendemos el negocio, los usuarios y las métricas que importan antes de escribir una línea de código.",
    time: "Semana 1",
    deliverable: "Brief y alcance",
  },
  {
    title: "Diseño",
    text: "Prototipos navegables, arquitectura clara y un alcance acordado. Sin sorpresas ni cajas negras.",
    time: "Semanas 2-3",
    deliverable: "Prototipo y arquitectura",
  },
  {
    title: "Construcción",
    text: "Sprints cortos con demos frecuentes, pruebas y código de calidad listo para producción.",
    time: "Semanas 3-8",
    deliverable: "MVP en producción",
  },
  {
    title: "Escala",
    text: "Medimos el impacto, iteramos con datos y acompañamos el crecimiento de tu operación.",
    time: "Continuo",
    deliverable: "Roadmap y soporte",
  },
];

export function Process() {
  return (
    <section
      id="proceso"
      className="relative overflow-hidden border-y border-white/[.06] bg-night-soft py-24 md:py-32"
    >
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="grid-pattern absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Cómo trabajamos"
          title={
            <>
              De la idea al producto, <span className="text-brand-400">sin fricción.</span>
            </>
          }
          description="Un proceso transparente, con entregas visibles desde la primera semana y un equipo que se involucra."
        />

        <div className="relative mt-14">
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-5 hidden h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent lg:block"
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <Reveal key={step.title} delay={index * 80}>
                <div className="group relative flex h-full flex-col">
                  <div className="relative z-10 flex size-10 items-center justify-center rounded-full border border-brand-400/40 bg-night text-sm font-semibold text-brand-300 shadow-[0_0_30px_-6px_rgba(43,123,255,0.8)]">
                    {index + 1}
                  </div>
                  <div className="mt-5 flex flex-1 flex-col rounded-3xl border border-white/10 bg-white/[.03] p-6 backdrop-blur transition duration-300 group-hover:-translate-y-1 group-hover:border-brand-400/40 group-hover:bg-white/[.05] lg:mt-6">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-brand-400">
                      {step.time}
                    </span>
                    <h3 className="mt-3 text-xl font-semibold tracking-[-0.02em] text-white">{step.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-400">{step.text}</p>
                    <div className="mt-6 flex items-center gap-2 border-t border-white/[.08] pt-4 text-[11px] text-slate-500">
                      <Icon name="check" className="size-3.5 text-brand-400" strokeWidth={2.2} />
                      {step.deliverable}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
