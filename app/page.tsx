import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ScrollShowcase } from "@/components/ScrollShowcase";
import { siteConfig } from "@/lib/site";

const services = [
  { title: "Aplicaciones web", text: "Productos digitales rápidos, escalables y diseñados alrededor de las personas que los usan.", tag: "WEB" },
  { title: "Aplicaciones móviles", text: "Experiencias nativas y multiplataforma que acompañan a tu equipo y tus clientes.", tag: "MOBILE" },
  { title: "ERP y CRM", text: "Una operación conectada para ver más claro, trabajar mejor y crecer con control.", tag: "SYSTEMS" },
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="relative overflow-hidden bg-[#f5f7fb]">
          <div className="mx-auto grid min-h-[calc(100vh-73px)] max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-[1.05fr_.95fr] lg:px-10 lg:py-28">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-600">Software + Inteligencia Artificial</p>
              <h1 className="mt-7 max-w-3xl text-5xl font-semibold leading-[0.98] tracking-[-0.06em] text-ink md:text-7xl">Diseñamos la próxima versión de tu negocio.</h1>
              <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">En {siteConfig.name} convertimos procesos complejos en productos digitales claros, útiles y listos para crecer.</p>
              <div className="mt-10 flex flex-wrap items-center gap-4"><a href="#servicios" className="rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-brand-700">Explorar soluciones</a><a href="#contacto" className="text-sm font-semibold text-ink underline decoration-slate-300 underline-offset-8 transition hover:decoration-brand-500">Cuéntanos tu idea</a></div>
            </div>
            <div className="relative flex min-h-[360px] items-center justify-center lg:min-h-[500px]"><div className="absolute size-72 rounded-full bg-brand-100 blur-3xl" /><div className="relative w-full max-w-lg -rotate-3 rounded-3xl border border-white/80 bg-white p-4 shadow-[0_30px_80px_-30px_rgba(22,95,230,.4)]"><div className="rounded-2xl bg-[#101828] p-5 md:p-7"><div className="flex items-center justify-between"><span className="text-xs font-semibold text-white/50">DEV<span className="text-brand-400">DUL</span> / INSIGHTS</span><span className="rounded-full bg-emerald-400/15 px-2 py-1 text-[10px] text-emerald-300">● En línea</span></div><div className="mt-12 grid grid-cols-2 gap-3"><div className="rounded-xl bg-white/10 p-4"><span className="text-[10px] text-white/40">Ingresos este mes</span><div className="mt-2 text-2xl font-semibold text-white">$84.2k</div><div className="mt-5 h-1 rounded bg-brand-400" /></div><div className="rounded-xl bg-white/10 p-4"><span className="text-[10px] text-white/40">Automatizaciones</span><div className="mt-2 text-2xl font-semibold text-white">+32%</div><div className="mt-5 h-1 w-2/3 rounded bg-[#65e5c6]" /></div></div><div className="mt-3 h-28 rounded-xl bg-gradient-to-t from-brand-500/30 to-transparent p-4"><div className="flex h-full items-end gap-2">{[25, 40, 35, 62, 52, 80, 70, 94].map((height, i) => <div key={i} className="flex-1 rounded-t bg-brand-400/80" style={{ height: `${height}%` }} />)}</div></div></div></div><div className="absolute -bottom-5 -left-5 rounded-2xl bg-white px-4 py-3 text-xs font-semibold text-ink shadow-xl">Construido para avanzar.</div></div>
          </div>
          <div className="flex justify-center pb-10 text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-400">Scroll para descubrir <span className="ml-3 animate-bounce">↓</span></div>
        </section>

        <ScrollShowcase />

        <section className="bg-white py-28" id="categorias"><div className="mx-auto max-w-7xl px-6 lg:px-10"><div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-600">Áreas de experiencia</p><h2 className="mt-5 max-w-2xl text-4xl font-semibold tracking-[-0.05em] text-ink md:text-6xl">Una solución para cada reto.</h2></div><p className="max-w-sm text-sm leading-6 text-slate-500">Desde una aplicación móvil hasta el sistema que coordina toda tu operación.</p></div><div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-slate-200 bg-slate-200 md:grid-cols-3">{services.map((service, i) => <article key={service.title} className="group bg-white p-7 transition hover:bg-[#f5f7fb] md:p-10"><span className="text-[10px] font-bold tracking-[0.25em] text-slate-400">0{i + 1} / {service.tag}</span><h3 className="mt-20 text-2xl font-semibold tracking-[-0.04em] text-ink">{service.title}</h3><p className="mt-4 text-sm leading-6 text-slate-500">{service.text}</p><div className="mt-10 flex size-10 items-center justify-center rounded-full border border-slate-200 text-xl transition group-hover:border-ink group-hover:bg-ink group-hover:text-white">↗</div></article>)}</div></div></section>

        <section id="contacto" className="bg-ink py-28 text-white"><div className="mx-auto max-w-7xl px-6 lg:px-10"><p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-400">¿Hablamos?</p><h2 className="mt-6 max-w-3xl text-5xl font-semibold tracking-[-0.06em] md:text-7xl">Tu siguiente gran idea empieza aquí.</h2><div className="mt-10 flex flex-wrap items-center gap-5"><a href={`mailto:${siteConfig.contactEmail}?subject=${encodeURIComponent("Proyecto con DevDul")}`} className="rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-ink transition hover:bg-brand-100">Escríbenos</a><span className="text-sm text-white/50">{siteConfig.contactEmail}</span></div></div></section>
      </main>
      <Footer />
    </>
  );
}
