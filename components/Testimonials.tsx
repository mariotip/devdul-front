import { Icon } from "./Icon";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const testimonials = [
  {
    quote:
      "Pasamos de tres sistemas desconectados a una sola operación. El equipo dejó de perseguir datos y empezó a decidir.",
    name: "Carolina Meza",
    role: "COO · Distribución",
    initials: "CM",
    tone: "from-brand-400 to-brand-700",
  },
  {
    quote:
      "La app móvil cambió la forma en que nuestros técnicos reportan en campo. Todo llega en tiempo real, sin llamadas.",
    name: "Andrés Ríos",
    role: "Gerente de servicio · Energía",
    initials: "AR",
    tone: "from-cyan-400 to-brand-600",
  },
  {
    quote:
      "El asistente de IA responde con el conocimiento real de la empresa. Es como tener un experto disponible 24/7.",
    name: "Lucía Pardo",
    role: "Directora de personas · Servicios",
    initials: "LP",
    tone: "from-indigo-400 to-brand-700",
  },
];

export function Testimonials() {
  return (
    <section id="testimonios" className="relative overflow-hidden py-24 md:py-32">
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 size-[520px] -translate-x-1/2 rounded-full bg-brand-600/10 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Testimonios"
          title={
            <>
              Equipos que ya <span className="text-brand-400">trabajan distinto.</span>
            </>
          }
          description="Lo que dicen quienes confiaron en DevDul para llevar su operación al siguiente nivel."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={index * 80}>
              <figure className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[.03] p-7 transition duration-300 hover:-translate-y-1.5 hover:border-brand-400/40 hover:bg-white/[.05]">
                <div
                  aria-hidden="true"
                  className="absolute -right-8 -top-8 size-28 rounded-full bg-brand-500/10 blur-2xl transition group-hover:bg-brand-500/20"
                />
                <div className="flex items-center gap-1 text-brand-400">
                  {Array.from({ length: 5 }).map((_, star) => (
                    <Icon key={star} name="star" className="size-3.5" />
                  ))}
                </div>
                <blockquote className="relative mt-5 flex-1 text-[15px] leading-7 text-slate-300">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-7 flex items-center gap-3 border-t border-white/[.08] pt-5">
                  <span
                    className={`flex size-10 items-center justify-center rounded-full bg-gradient-to-br ${testimonial.tone} text-[11px] font-bold text-white`}
                  >
                    {testimonial.initials}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">{testimonial.name}</p>
                    <p className="text-[11px] text-slate-500">{testimonial.role}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
