import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ScrollShowcase } from "@/components/ScrollShowcase";
import { siteConfig } from "@/lib/site";

const services = [
  { title: "Aplicaciones web", text: "Productos digitales rápidos, escalables y diseñados alrededor de las personas que los usan.", tag: "WEB", icon: "◈" },
  { title: "Aplicaciones móviles", text: "Experiencias nativas y multiplataforma que acompañan a tu equipo y tus clientes.", tag: "MOBILE", icon: "▣" },
  { title: "ERP y CRM", text: "Una operación conectada para ver más claro, trabajar mejor y crecer con control.", tag: "SYSTEMS", icon: "✦" },
];

export default function Home() {
  return (
    <div className="bg-[#050b17] text-white">
      <Header />
      <main>
        <section className="relative isolate min-h-[calc(100vh-73px)] overflow-hidden bg-[#050b17]">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_68%_36%,rgba(31,113,255,.3),transparent_30%),radial-gradient(circle_at_10%_80%,rgba(13,46,108,.4),transparent_30%)]" />
          <div className="mx-auto grid min-h-[calc(100vh-73px)] max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-[.9fr_1.1fr] lg:px-10 lg:py-24">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-400">Software + Inteligencia Artificial</p>
              <h1 className="mt-7 max-w-2xl text-5xl font-semibold leading-[.94] tracking-[-0.06em] text-white md:text-7xl">Pensamos en grande. <span className="text-brand-400">Construimos mejor.</span></h1>
              <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300">En {siteConfig.name} convertimos procesos complejos en productos digitales claros, útiles y listos para crecer.</p>
              <div className="mt-10 flex flex-wrap items-center gap-5"><a href="#servicios" className="rounded-full bg-brand-500 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_0_35px_rgba(43,123,255,.35)] transition hover:bg-brand-400">Explorar soluciones <span aria-hidden="true">→</span></a><a href="#contacto" className="text-sm font-semibold text-white/70 transition hover:text-white">Cuéntanos tu idea <span aria-hidden="true">↗</span></a></div>
              <div className="mt-14 grid max-w-md grid-cols-3 gap-5 border-t border-white/10 pt-6 text-xs text-slate-400"><div><strong className="block text-xl text-white">10+</strong>Años creando</div><div><strong className="block text-xl text-white">50+</strong>Productos lanzados</div><div><strong className="block text-xl text-white">4.9/5</strong>Experiencia</div></div>
            </div>
            <div className="relative flex min-h-[410px] items-center justify-center lg:min-h-[560px]"><div className="absolute size-80 rounded-full bg-brand-500/20 blur-3xl" /><div className="relative w-full max-w-xl rotate-[-4deg] rounded-[2rem] border border-white/15 bg-[#101b30]/90 p-3 shadow-[0_35px_100px_-25px_rgba(43,123,255,.7)] backdrop-blur md:p-5"><div className="rounded-[1.4rem] border border-brand-400/20 bg-[#07101f] p-5 md:p-7"><div className="flex items-center justify-between text-xs"><span className="font-semibold tracking-widest text-white">DEVDUL<span className="text-brand-400">.</span></span><span className="rounded-full border border-emerald-400/30 px-3 py-1 text-emerald-300">● Sistema activo</span></div><div className="mt-10 grid grid-cols-[1fr_1.25fr] gap-4"><div className="rounded-2xl bg-white/5 p-4"><span className="text-[10px] text-white/45">Proyectos en curso</span><strong className="mt-3 block text-4xl text-white">24</strong><div className="mt-8 flex items-end gap-1">{[30,45,35,70,52,88,68,96].map((height, index) => <i key={index} className="flex-1 rounded-t bg-brand-400" style={{ height: `${height}%`, opacity: .35 + index / 15 }} />)}</div></div><div className="rounded-2xl border border-white/10 bg-gradient-to-br from-brand-500/25 to-white/5 p-4"><span className="text-[10px] text-white/45">Impacto del producto</span><strong className="mt-3 block text-4xl text-white">+86%</strong><p className="mt-2 text-xs text-emerald-300">↑ eficiencia operativa</p><div className="mt-8 h-2 rounded-full bg-white/10"><div className="h-full w-[86%] rounded-full bg-brand-400" /></div></div></div><div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4"><div className="flex items-center justify-between text-xs text-white/50"><span>Actividad del equipo</span><span>Últimos 30 días</span></div><div className="mt-5 flex h-20 items-end gap-2">{[35,42,55,48,70,62,82,74,95,88,100].map((height, index) => <i key={index} className="flex-1 rounded-t bg-gradient-to-t from-brand-600 to-brand-300" style={{ height: `${height}%`, opacity: .45 + index / 20 }} />)}</div></div></div></div><div className="absolute -bottom-5 -left-5 rounded-2xl border border-white/10 bg-[#111e35] px-4 py-3 text-xs font-semibold text-white shadow-xl">Hecho para avanzar.</div></div>
          </div>
          <div className="flex justify-center pb-10 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/40">Scroll para descubrir <span className="ml-3 animate-bounce">↓</span></div>
        </section>

        <ScrollShowcase />

        <section className="bg-[#07101f] py-28" id="categorias"><div className="mx-auto max-w-7xl px-6 lg:px-10"><div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-400">Áreas de experiencia</p><h2 className="mt-5 max-w-2xl text-4xl font-semibold tracking-[-0.05em] text-white md:text-6xl">Soluciones que mueven tu negocio.</h2></div><p className="max-w-sm text-sm leading-6 text-slate-400">De una aplicación móvil al sistema que coordina toda tu operación.</p></div><div className="mt-16 grid gap-4 md:grid-cols-3">{services.map((service, i) => <article key={service.title} className="group rounded-3xl border border-white/10 bg-white/[.03] p-7 transition hover:-translate-y-1 hover:border-brand-400/50 hover:bg-brand-500/10 md:p-10"><div className="flex items-center justify-between"><span className="flex size-12 items-center justify-center rounded-2xl bg-brand-500/15 text-xl text-brand-400">{service.icon}</span><span className="text-[10px] font-bold tracking-[0.25em] text-white/35">0{i + 1} / {service.tag}</span></div><h3 className="mt-16 text-2xl font-semibold tracking-[-0.04em] text-white">{service.title}</h3><p className="mt-4 text-sm leading-6 text-slate-400">{service.text}</p><div className="mt-10 text-sm font-semibold text-brand-400">Ver solución <span aria-hidden="true">→</span></div></article>)}</div></div></section>

        <section id="contacto" className="relative overflow-hidden bg-brand-600 py-28 text-white"><div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,.2),transparent_30%)]" /><div className="relative mx-auto max-w-7xl px-6 lg:px-10"><p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">¿Hablamos?</p><h2 className="mt-6 max-w-3xl text-5xl font-semibold tracking-[-0.06em] md:text-7xl">Tu siguiente gran idea empieza aquí.</h2><div className="mt-10 flex flex-wrap items-center gap-5"><a href={`mailto:${siteConfig.contactEmail}?subject=${encodeURIComponent("Proyecto con DevDul")}`} className="rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-ink transition hover:bg-brand-50">Escríbenos</a><span className="text-sm text-white/70">{siteConfig.contactEmail}</span></div></div></section>
      </main>
      <Footer />
    </div>
  );
}
