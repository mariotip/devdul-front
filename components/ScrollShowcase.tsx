"use client";

import { useEffect, useRef, useState } from "react";

const projects = [
  {
    number: "01",
    eyebrow: "OPERACIÓN INTELIGENTE",
    title: "Todo tu negocio, en una sola vista.",
    text: "ERP y CRM conectados para que tu equipo deje de perseguir información y empiece a tomar decisiones.",
    label: "Dashboard operativo",
    tone: "from-[#14284d] via-[#123a76] to-[#0b1220]",
    accent: "#5ba6ff",
    stats: ["Ventas", "Inventario", "Clientes"],
  },
  {
    number: "02",
    eyebrow: "EXPERIENCIAS DIGITALES",
    title: "Apps que se sienten hechas para tu equipo.",
    text: "Diseñamos productos web y móviles que convierten procesos complejos en flujos simples y rápidos.",
    label: "Aplicación móvil",
    tone: "from-[#24204f] via-[#47358b] to-[#0b1220]",
    accent: "#d29cff",
    stats: ["Proyectos", "Tareas", "Equipo"],
  },
  {
    number: "03",
    eyebrow: "IA APLICADA",
    title: "La inteligencia que trabaja contigo.",
    text: "Automatización, asistentes y datos accionables integrados directamente en las herramientas que ya usas.",
    label: "Centro de IA",
    tone: "from-[#073e3b] via-[#08776b] to-[#0b1220]",
    accent: "#65e5c6",
    stats: ["Automatizaciones", "Insights", "Alertas"],
  },
];

export function ScrollShowcase() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(Number((visible.target as HTMLElement).dataset.index));
      },
      { threshold: [0.35, 0.6, 0.85] },
    );
    const panels = section.querySelectorAll<HTMLElement>("[data-index]");
    panels.forEach((panel) => observer.observe(panel));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="servicios" ref={sectionRef} className="relative bg-[#090e19] text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-24 lg:flex-row lg:gap-20 lg:px-10">
        <div className="lg:w-[35%] lg:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-400">Lo que construimos</p>
          <h2 className="mt-6 text-4xl font-semibold tracking-[-0.04em] md:text-6xl">Tecnología que se mueve contigo.</h2>
          <p className="mt-6 max-w-md text-base leading-7 text-slate-400">Baja por la página. Cada sección acerca una nueva solución: del mapa general a la pantalla que tu equipo usará todos los días.</p>
          <div className="mt-12 flex gap-3">
            {projects.map((project, index) => (
              <button key={project.number} type="button" aria-label={`Ver proyecto ${project.number}`} onClick={() => document.querySelector(`[data-index="${index}"]`)?.scrollIntoView({ behavior: "smooth" })} className={`h-1.5 rounded-full transition-all ${index === active ? "w-14 bg-white" : "w-6 bg-white/20"}`} />
            ))}
          </div>
        </div>

        <div className="lg:w-[65%]">
          {projects.map((project, index) => (
            <article key={project.number} data-index={index} className="flex min-h-[78vh] items-center py-10 lg:py-20">
              <div className={`group relative w-full overflow-hidden rounded-[2rem] bg-gradient-to-br ${project.tone} p-5 shadow-2xl shadow-black/30 md:p-8`}>
                <div className="absolute right-8 top-7 text-sm font-medium text-white/40">{project.number} / 03</div>
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#f5f7fb] p-3 shadow-2xl transition-transform duration-700 group-hover:scale-[1.015] md:p-5">
                  <div className="flex items-center gap-1.5 border-b border-slate-200 pb-3"><span className="size-2 rounded-full bg-[#ff6b6b]" /><span className="size-2 rounded-full bg-[#ffc857]" /><span className="size-2 rounded-full bg-[#64d990]" /><span className="ml-3 h-2 w-24 rounded-full bg-slate-200" /></div>
                  <div className="grid min-h-[245px] grid-cols-[92px_1fr] gap-3 pt-4 md:min-h-[330px] md:grid-cols-[150px_1fr] md:gap-6">
                    <div className="rounded-xl bg-slate-100 p-3"><div className="h-3 w-16 rounded bg-slate-300" /><div className="mt-7 flex flex-col gap-3">{[1, 2, 3, 4, 5].map((item) => <div key={item} className={`h-2 rounded ${item === 2 ? "bg-slate-800" : "bg-slate-200"}`} />)}</div></div>
                    <div><div className="flex items-center justify-between"><div><div className="h-3 w-20 rounded bg-slate-300" /><div className="mt-2 h-5 w-36 rounded bg-slate-800/90 md:w-48" /></div><div className="rounded-lg bg-slate-100 px-3 py-2 text-[9px] text-slate-400">{project.label}</div></div><div className="mt-7 grid grid-cols-3 gap-2 md:gap-4">{project.stats.map((stat, statIndex) => <div key={stat} className="rounded-xl border border-slate-200 bg-white p-3 md:p-4"><div className="text-[9px] text-slate-400">{stat}</div><div className="mt-3 h-5 w-12 rounded bg-slate-800 md:h-7 md:w-16" /><div className="mt-3 h-1.5 w-full rounded bg-slate-100"><div className="h-full rounded" style={{ width: `${55 + statIndex * 12}%`, backgroundColor: project.accent }} /></div></div>)}</div><div className="mt-4 h-24 rounded-xl border border-slate-200 bg-white p-4 md:h-32"><div className="flex h-full items-end gap-2">{[35, 52, 43, 72, 60, 88, 78, 96, 84].map((height, barIndex) => <div key={barIndex} className="flex-1 rounded-t" style={{ height: `${height}%`, backgroundColor: barIndex === 7 ? project.accent : `${project.accent}55` }} />)}</div></div></div>
                  </div>
                </div>
                <div className="px-2 pb-3 pt-7 md:px-4 md:pb-5"><p className="text-xs font-semibold tracking-[0.25em]" style={{ color: project.accent }}>{project.eyebrow}</p><h3 className="mt-3 max-w-xl text-2xl font-semibold tracking-[-0.03em] md:text-4xl">{project.title}</h3><p className="mt-4 max-w-lg text-sm leading-6 text-white/60 md:text-base">{project.text}</p></div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
