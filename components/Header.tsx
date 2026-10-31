"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Icon } from "./Icon";

const links = [
  { href: "#servicios", id: "servicios", label: "Servicios" },
  { href: "#tecnologia", id: "tecnologia", label: "Tecnología" },
  { href: "#proyectos", id: "proyectos", label: "Proyectos" },
  { href: "#proceso", id: "proceso", label: "Proceso" },
];

export function Header() {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.id))
      .filter((section): section is HTMLElement => section !== null);

    const update = () => {
      const probe = window.scrollY + 200;
      const current = sections.find((section) => {
        const top = section.getBoundingClientRect().top + window.scrollY;
        return probe >= top && probe < top + section.offsetHeight;
      });
      setActive(current?.id ?? "");
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-b from-night via-night/85 to-transparent pb-4 pt-3">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-[#070f1e]/80 px-4 py-2.5 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.9)] backdrop-blur-xl sm:px-5">
          <Link href="/" className="flex items-center gap-2.5" aria-label="DevDul, inicio">
            <span className="flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400 to-brand-700 text-[17px] font-bold leading-none text-white shadow-[0_0_28px_-4px_rgba(43,123,255,0.7)]">
              D
            </span>
            <span className="text-lg font-semibold tracking-tight text-white">
              Dev<span className="text-brand-400">Dul</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-7 md:flex" aria-label="Navegación principal">
            {links.map((link) => {
              const isActive = active === link.id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative text-sm font-medium transition ${
                    isActive ? "text-white" : "text-slate-400 hover:text-white"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-2 left-0 h-0.5 rounded-full bg-brand-400 transition-all duration-300 ${
                      isActive ? "w-full opacity-100" : "w-0 opacity-0"
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#contacto"
              className="group hidden items-center gap-2 rounded-full bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_14px_35px_-12px_rgba(43,123,255,0.9)] transition hover:bg-brand-400 sm:inline-flex"
            >
              Hablemos
              <Icon name="arrow" className="size-3.5 transition-transform group-hover:translate-x-0.5" />
            </a>
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              className="flex size-10 items-center justify-center rounded-xl border border-white/10 bg-white/[.04] text-white transition hover:bg-white/[.08] md:hidden"
            >
              <Icon name={open ? "close" : "menu"} className="size-5" />
            </button>
          </div>

          {open ? (
            <div
              id="mobile-nav"
              className="absolute left-0 right-0 top-full mt-2 rounded-2xl border border-white/10 bg-[#070f1e] p-3 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.95)] md:hidden"
            >
              <nav className="flex flex-col" aria-label="Navegación móvil">
                {[...links, { href: "#contacto", id: "contacto", label: "Contacto" }].map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-4 py-3 text-sm font-medium text-slate-300 transition hover:bg-white/[.06] hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}
