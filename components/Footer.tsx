import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { Icon } from "./Icon";

const nav = [
  { href: "#servicios", label: "Servicios" },
  { href: "#tecnologia", label: "Tecnología" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#proceso", label: "Proceso" },
  { href: "#contacto", label: "Contacto" },
];

const services = [
  { href: "#servicios", label: "ERP & CRM" },
  { href: "#servicios", label: "Aplicaciones web" },
  { href: "#servicios", label: "Aplicaciones móviles" },
  { href: "#servicios", label: "IA aplicada" },
  { href: "#servicios", label: "Integraciones" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-[#040913]">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.1fr]">
          <div>
            <Link href="/" className="flex items-center gap-2.5" aria-label="DevDul, inicio">
              <span className="flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400 to-brand-700 text-[17px] font-bold leading-none text-white shadow-[0_0_28px_-4px_rgba(43,123,255,0.7)]">
                D
              </span>
              <span className="text-lg font-semibold tracking-tight text-white">
                Dev<span className="text-brand-400">Dul</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-6 text-slate-500">
              Convertimos procesos complejos en productos digitales claros, útiles y listos para crecer.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[.03] px-3 py-1.5 text-[11px] text-slate-400">
              <span className="relative flex size-1.5">
                <span className="animate-pulse-ring absolute inline-flex size-full rounded-full bg-emerald-400" />
                <span className="relative inline-flex size-1.5 rounded-full bg-emerald-400" />
              </span>
              Disponibles para nuevos proyectos
            </div>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">Navegación</p>
            <ul className="mt-4 space-y-3">
              {nav.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-slate-400 transition hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">Servicios</p>
            <ul className="mt-4 space-y-3">
              {services.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-slate-400 transition hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">Contacto</p>
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="mt-4 inline-flex items-center gap-2 text-sm text-slate-300 transition hover:text-white"
            >
              <Icon name="arrow" className="size-4 text-brand-400" />
              {siteConfig.contactEmail}
            </a>
            <p className="mt-3 text-sm text-slate-500">LATAM · Trabajo remoto</p>
            <p className="mt-3 text-sm text-slate-500">Respuesta en menos de 24h</p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. Todos los derechos reservados.
          </p>
          <p className="flex items-center gap-2">
            Diseñado y desarrollado con
            <span className="text-brand-400">foco en producto</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
