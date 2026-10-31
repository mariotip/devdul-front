import { siteConfig } from "@/lib/site";
import { Icon } from "./Icon";
import { Reveal } from "./Reveal";

export function CTA() {
  return (
    <section id="contacto" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-brand-400/30 bg-gradient-to-br from-brand-600 via-brand-700 to-[#082046] px-6 py-14 shadow-[0_50px_140px_-50px_rgba(43,123,255,0.8)] sm:rounded-[2.5rem] md:px-14 md:py-20 lg:px-16">
            <div aria-hidden="true" className="absolute inset-0">
              <div className="grid-pattern absolute inset-0 opacity-20" />
              <div className="absolute -right-24 -top-24 size-80 rounded-full bg-cyan-300/20 blur-3xl" />
              <div className="absolute -bottom-32 left-1/3 size-80 rounded-full bg-white/10 blur-3xl" />
              <div className="absolute right-10 top-10 hidden size-24 rounded-full border border-white/20 lg:block" />
              <div className="absolute right-24 top-24 hidden size-3 rounded-full bg-cyan-300 lg:block" />
            </div>

            <div className="relative grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">¿Hablamos?</p>
                <h2 className="mt-5 max-w-xl text-4xl font-semibold leading-[1.02] tracking-[-0.05em] text-white md:text-5xl lg:text-[3.6rem]">
                  Tu siguiente gran idea empieza aquí.
                </h2>
                <p className="mt-5 max-w-md text-base leading-7 text-white/70">
                  Cuéntanos qué quieres construir. Respondemos en menos de 24 horas, sin compromiso.
                </p>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <a
                    href={`mailto:${siteConfig.contactEmail}?subject=${encodeURIComponent("Proyecto con DevDul")}`}
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-ink transition hover:bg-brand-50"
                  >
                    Escríbenos
                    <Icon name="arrow" className="size-4 transition-transform group-hover:translate-x-1" />
                  </a>
                  <a
                    href="#servicios"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/50 hover:bg-white/10"
                  >
                    Ver servicios
                  </a>
                </div>
              </div>

              <div className="rounded-3xl border border-white/15 bg-white/[.08] p-6 backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-white/15 text-white">
                    <Icon name="sparkles" className="size-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">Hablemos de tu proyecto</p>
                    <p className="text-[11px] text-white/60">Diagnóstico inicial gratuito</p>
                  </div>
                </div>
                <div className="mt-6 space-y-3">
                  {[
                    { icon: "check" as const, text: "Respuesta en menos de 24 horas" },
                    { icon: "check" as const, text: "Alcance claro desde el día uno" },
                    { icon: "check" as const, text: "Equipo senior, sin intermediarios" },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-3">
                      <span className="flex size-5 items-center justify-center rounded-full bg-white/15 text-white">
                        <Icon name={item.icon} className="size-3" strokeWidth={2.2} />
                      </span>
                      <p className="text-sm text-white/80">{item.text}</p>
                    </div>
                  ))}
                </div>
                <a
                  href={`mailto:${siteConfig.contactEmail}`}
                  className="mt-6 block rounded-xl border border-white/15 bg-night/20 px-4 py-3 text-sm font-medium text-white transition hover:bg-night/35"
                >
                  {siteConfig.contactEmail}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
