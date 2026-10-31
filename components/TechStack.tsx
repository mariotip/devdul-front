import { Icon } from "./Icon";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const tools = [
  { mark: "N", name: "Next.js", role: "Framework web", accent: "#ffffff" },
  { mark: "R", name: "React", role: "Interfaces", accent: "#61dafb" },
  { mark: "N", name: "Node.js", role: "Backend", accent: "#84cc16" },
  { mark: "P", name: "PostgreSQL", role: "Datos", accent: "#38bdf8" },
  { mark: "AI", name: "OpenAI", role: "Modelos de IA", accent: "#34d399" },
  { mark: "C", name: "Claude", role: "Agentes", accent: "#f59e0b" },
  { mark: "F", name: "Figma", role: "Diseño", accent: "#a78bfa" },
  { mark: "AWS", name: "AWS", role: "Infraestructura", accent: "#fbbf24" },
];

export function TechStack() {
  return (
    <section
      id="tecnologia"
      className="relative overflow-hidden border-y border-white/[.06] bg-night-soft py-24 md:py-32"
    >
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="dot-pattern absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
        <div className="absolute -left-32 top-1/3 size-[380px] rounded-full bg-brand-600/15 blur-[120px]" />
        <div className="absolute -right-32 bottom-0 size-[340px] rounded-full bg-cyan-500/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Tecnología"
          title={
            <>
              Herramientas modernas. <span className="text-brand-400">Resultados reales.</span>
            </>
          }
          description="Elegimos el stack según el problema, no al revés. Estas son algunas de las piezas que usamos todos los días."
        />

        <div className="relative mt-14">
          <div
            aria-hidden="true"
            className="absolute left-10 right-10 top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-brand-500/40 to-transparent lg:block"
          />
          <div className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {tools.map((tool, index) => (
              <Reveal key={tool.name} delay={index * 50}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-[#091426]/80 p-5 backdrop-blur transition duration-300 hover:-translate-y-1.5 hover:border-white/25 hover:bg-[#0b1930]">
                  <div
                    aria-hidden="true"
                    className="absolute -right-8 -top-8 size-24 rounded-full opacity-20 blur-2xl transition-opacity duration-500 group-hover:opacity-50"
                    style={{ background: tool.accent }}
                  />
                  <div className="relative flex items-start justify-between">
                    <span
                      className="flex size-11 items-center justify-center rounded-xl border border-white/10 bg-white/[.05] text-sm font-bold"
                      style={{ color: tool.accent, boxShadow: `0 0 28px -8px ${tool.accent}99` }}
                    >
                      {tool.mark}
                    </span>
                    <Icon
                      name="arrow"
                      className="size-4 -rotate-45 text-white/20 transition duration-300 group-hover:-rotate-0 group-hover:text-white/70"
                    />
                  </div>
                  <p className="relative mt-5 text-sm font-semibold text-white">{tool.name}</p>
                  <p className="relative mt-1 text-[10px] font-medium uppercase tracking-[0.18em] text-slate-500">
                    {tool.role}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={120}>
          <div className="mt-6 flex flex-col items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[.02] px-6 py-5 sm:flex-row">
            <p className="text-sm text-slate-400">
              ¿Tu equipo ya usa otra herramienta? <span className="text-white">La integramos.</span>
            </p>
            <a
              href="#contacto"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-brand-300 transition hover:text-brand-200"
            >
              Hablemos de tu stack
              <Icon name="arrow" className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
