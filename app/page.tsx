import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/lib/site";

const services = [
  {
    title: "ERP a la medida",
    text: "Centraliza inventario, compras, ventas, facturación y finanzas en un solo sistema adaptado a tus procesos.",
    icon: "📊",
  },
  {
    title: "CRM",
    text: "Gestiona clientes, oportunidades y seguimiento comercial con tableros claros y automatizaciones.",
    icon: "🤝",
  },
  {
    title: "Aplicaciones web y móviles",
    text: "Construimos apps modernas, rápidas y seguras para tus clientes o tu equipo interno.",
    icon: "📱",
  },
  {
    title: "Integración de IA",
    text: "Agregamos asistentes, análisis predictivo y automatización inteligente a tus sistemas actuales o nuevos.",
    icon: "🤖",
  },
];

const aiFeatures = [
  "Asistentes virtuales que responden a clientes 24/7",
  "Clasificación y extracción automática de documentos",
  "Pronósticos de ventas e inventario",
  "Reportes en lenguaje natural sobre los datos de tu empresa",
];

const steps = [
  { n: "01", title: "Diagnóstico", text: "Entendemos tu negocio, tus procesos y lo que necesitas resolver." },
  { n: "02", title: "Diseño", text: "Proponemos la solución, el alcance y un plan de entregas por etapas." },
  { n: "03", title: "Desarrollo", text: "Construimos con entregas frecuentes para que veas avances reales." },
  { n: "04", title: "Soporte", text: "Acompañamos la puesta en marcha y la evolución del sistema." },
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 to-white">
          <div className="mx-auto max-w-6xl px-6 py-24 text-center md:py-32">
            <span className="inline-block rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-700">
              Software + Inteligencia Artificial
            </span>
            <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-extrabold tracking-tight text-ink md:text-6xl">
              Sistemas que hacen crecer tu empresa
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
              En {siteConfig.name} desarrollamos ERP, CRM y aplicaciones a la medida, e integramos
              Inteligencia Artificial para automatizar y tomar mejores decisiones.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#contacto"
                className="rounded-full bg-brand-600 px-6 py-3 font-semibold text-white shadow-lg shadow-brand-600/20 transition hover:bg-brand-700"
              >
                Solicitar una cotización
              </a>
              <a
                href="#servicios"
                className="rounded-full border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:border-brand-500 hover:text-brand-600"
              >
                Ver servicios
              </a>
            </div>
          </div>
        </section>

        {/* Servicios */}
        <section id="servicios" className="scroll-mt-20 py-24">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-center text-3xl font-bold text-ink md:text-4xl">Servicios</h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600">
              Soluciones completas, desde la idea hasta la operación diaria.
            </p>
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((s) => (
                <article
                  key={s.title}
                  className="rounded-2xl border border-slate-200 p-6 transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="text-3xl" aria-hidden>
                    {s.icon}
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-ink">{s.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{s.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* IA */}
        <section id="ia" className="scroll-mt-20 bg-ink py-24 text-white">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold md:text-4xl">
                Inteligencia Artificial aplicada a tu negocio
              </h2>
              <p className="mt-4 text-slate-300">
                No es solo tecnología de moda: integramos IA donde genera valor medible, dentro
                de los sistemas que tu equipo ya usa.
              </p>
            </div>
            <ul className="space-y-4">
              {aiFeatures.map((f) => (
                <li key={f} className="flex items-start gap-3 rounded-xl bg-white/5 p-4">
                  <span className="mt-0.5 text-brand-400" aria-hidden>
                    ✓
                  </span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Proceso */}
        <section id="proceso" className="scroll-mt-20 py-24">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-center text-3xl font-bold text-ink md:text-4xl">Cómo trabajamos</h2>
            <div className="mt-14 grid gap-8 md:grid-cols-4">
              {steps.map((s) => (
                <div key={s.n}>
                  <div className="text-4xl font-extrabold text-brand-100">{s.n}</div>
                  <h3 className="mt-2 text-lg font-semibold text-ink">{s.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contacto */}
        <section id="contacto" className="scroll-mt-20 bg-brand-50 py-24">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="text-3xl font-bold text-ink md:text-4xl">¿Tienes un proyecto en mente?</h2>
            <p className="mt-4 text-slate-600">
              Cuéntanos qué necesitas y te respondemos con una propuesta sin compromiso.
            </p>
            <a
              href={`mailto:${siteConfig.contactEmail}?subject=${encodeURIComponent("Proyecto con DevDul")}`}
              className="mt-8 inline-block rounded-full bg-brand-600 px-8 py-4 font-semibold text-white shadow-lg shadow-brand-600/20 transition hover:bg-brand-700"
            >
              Escríbenos a {siteConfig.contactEmail}
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
