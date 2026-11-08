"use client";

import { useEffect, useMemo, useState, type FormEvent, type InputHTMLAttributes } from "react";
import {
  catalog as fallbackCatalog,
  DEFAULT_HOURLY_RATE_MXN,
  type QuoteCategory,
} from "@/lib/quote-catalog";
import { siteConfig } from "@/lib/site";
import { Icon } from "./Icon";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const accents: Record<QuoteCategory["id"], string> = {
  crm: "#4f9bff",
  saas: "#22d3ee",
  erp: "#818cf8",
};

const mxn = (value: number) =>
  new Intl.NumberFormat("es-MX", { style: "currency", currency: "MXN", maximumFractionDigits: 0 }).format(value);

type Status = { state: "idle" } | { state: "sending" } | { state: "sent"; id: number } | { state: "error"; message: string };

export function Quote() {
  const [categories, setCategories] = useState<QuoteCategory[]>(fallbackCatalog);
  const [rate, setRate] = useState(DEFAULT_HOURLY_RATE_MXN);
  const [open, setOpen] = useState<QuoteCategory["id"] | null>("crm");
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [formOpen, setFormOpen] = useState(false);
  const [status, setStatus] = useState<Status>({ state: "idle" });

  useEffect(() => {
    const controller = new AbortController();
    fetch(`${siteConfig.apiUrl}/quote/catalog`, { signal: controller.signal })
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .then((data: { hourlyRate: number; categories: QuoteCategory[] }) => {
        if (Array.isArray(data.categories) && data.categories.length) setCategories(data.categories);
        if (data.hourlyRate > 0) setRate(data.hourlyRate);
      })
      .catch(() => {
        // Sin API se usa el catálogo incluido en el sitio.
      });
    return () => controller.abort();
  }, []);

  const known = useMemo(() => new Set(categories.flatMap((c) => c.modules.map((m) => m.id))), [categories]);
  const ids = useMemo(() => [...selected].filter((id) => known.has(id)), [selected, known]);
  const quote = useMemo(() => computeQuoteFor(categories, ids, rate), [categories, ids, rate]);

  const toggle = (id: string) =>
    setSelected((current) => {
      const next = new Set(current);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  const clear = () => {
    setSelected(new Set());
    setStatus({ state: "idle" });
  };

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const optional = (key: string) => {
      const value = String(form.get(key) ?? "").trim();
      return value ? value : undefined;
    };
    setStatus({ state: "sending" });
    try {
      const res = await fetch(`${siteConfig.apiUrl}/quotes`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: String(form.get("name") ?? "").trim(),
          email: String(form.get("email") ?? "").trim(),
          phone: optional("phone"),
          company: optional("company"),
          notes: optional("notes"),
          modules: ids,
        }),
      });
      if (res.status === 422) {
        setStatus({ state: "error", message: "Revisa tu nombre y correo e inténtalo de nuevo." });
        return;
      }
      if (!res.ok) throw new Error(String(res.status));
      const body = (await res.json()) as { id: number };
      setStatus({ state: "sent", id: body.id });
    } catch {
      setStatus({
        state: "error",
        message: `No pudimos enviar tu cotización. Escríbenos a ${siteConfig.contactEmail} y te respondemos hoy.`,
      });
    }
  }

  const mailto = `mailto:${siteConfig.contactEmail}?subject=${encodeURIComponent("Cotización DevDul")}&body=${encodeURIComponent(
    [...quote.items.map((i) => `- [${i.category.toUpperCase()}] ${i.name} (${i.hours} h)`), "", `Total estimado: ${mxn(quote.totalMxn)}`].join("\n"),
  )}`;

  return (
    <section id="cotizador" className="relative py-24 md:py-32">
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute right-0 top-1/3 size-[520px] rounded-full bg-cyan-500/10 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Cotizador"
          title={
            <>
              Arma tu sistema <span className="text-brand-400">y conoce el precio.</span>
            </>
          }
          description={`Elige el tipo de sistema, marca los módulos que necesitas y ve el costo estimado al momento. Calculamos las horas de cada módulo a ${mxn(rate)} por hora.`}
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_380px] lg:items-start">
          <div className="space-y-4">
            {categories.map((category) => {
              const accent = accents[category.id] ?? "#4f9bff";
              const isOpen = open === category.id;
              const count = category.modules.filter((m) => !m.required && selected.has(m.id)).length;
              return (
                <Reveal key={category.id}>
                  <div
                    className={`overflow-hidden rounded-3xl border bg-white/[.03] transition ${
                      isOpen ? "border-white/20" : "border-white/10 hover:border-white/20"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : category.id)}
                      aria-expanded={isOpen}
                      aria-controls={`modulos-${category.id}`}
                      className="flex w-full items-center gap-4 p-5 text-left md:p-6"
                    >
                      <span
                        className="flex size-12 shrink-0 items-center justify-center rounded-2xl border text-sm font-bold tracking-wide"
                        style={{ color: accent, borderColor: `${accent}33`, background: `${accent}14` }}
                      >
                        {category.name}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-lg font-semibold text-white">{category.name}</span>
                        <span className="mt-0.5 block text-sm text-slate-400">{category.description}</span>
                      </span>
                      {count > 0 ? (
                        <span className="hidden shrink-0 rounded-full bg-brand-500/15 px-3 py-1 text-xs font-semibold text-brand-300 sm:inline">
                          {count} {count === 1 ? "módulo" : "módulos"}
                        </span>
                      ) : null}
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        aria-hidden="true"
                        className={`size-5 shrink-0 text-slate-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                      >
                        <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>

                    {isOpen ? (
                      <ul id={`modulos-${category.id}`} className="grid gap-2 border-t border-white/[.08] p-3 md:grid-cols-2 md:p-4">
                        {category.modules.map((module) => {
                          const categoryActive = category.modules.some((m) => !m.required && selected.has(m.id));
                          const checked = module.required ? categoryActive : selected.has(module.id);
                          return (
                            <li key={module.id}>
                              <label
                                className={`flex h-full gap-3 rounded-2xl border p-4 transition ${
                                  module.required ? "cursor-default" : "cursor-pointer hover:bg-white/[.04]"
                                } ${checked ? "border-brand-400/50 bg-brand-500/[.08]" : "border-white/[.08]"}`}
                              >
                                <input
                                  type="checkbox"
                                  className="peer sr-only"
                                  checked={checked}
                                  disabled={module.required}
                                  onChange={() => toggle(module.id)}
                                />
                                <span
                                  aria-hidden="true"
                                  className={`mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-md border transition peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-brand-400 ${
                                    checked ? "border-brand-400 bg-brand-500 text-white" : "border-white/25 text-transparent"
                                  }`}
                                >
                                  <Icon name="check" className="size-3.5" strokeWidth={3} />
                                </span>
                                <span className="min-w-0 flex-1">
                                  <span className="flex items-start justify-between gap-3">
                                    <span className="text-sm font-semibold text-white">{module.name}</span>
                                    <span className="shrink-0 text-sm font-semibold tabular-nums text-brand-300">
                                      {mxn(module.hours * rate)}
                                    </span>
                                  </span>
                                  <span className="mt-1 block text-xs leading-5 text-slate-400">{module.description}</span>
                                  <span className="mt-2 block text-[11px] font-medium uppercase tracking-[0.14em] text-slate-500">
                                    {module.hours} horas{module.required ? " · se incluye al elegir módulos" : ""}
                                  </span>
                                </span>
                              </label>
                            </li>
                          );
                        })}
                      </ul>
                    ) : null}
                  </div>
                </Reveal>
              );
            })}
          </div>

          <aside className="lg:sticky lg:top-28">
            <div className="rounded-3xl border border-brand-400/30 bg-gradient-to-b from-brand-950/80 to-panel p-6 shadow-[0_40px_120px_-50px_rgba(43,123,255,0.8)]">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-400">Tu cotización</p>
              <p className="mt-4 text-4xl font-semibold tabular-nums tracking-[-0.04em] text-white" aria-live="polite">
                {mxn(quote.totalMxn)}
              </p>
              <p className="mt-1 text-sm text-slate-400">
                {quote.totalHours} horas × {mxn(rate)} · MXN
              </p>

              {quote.items.length ? (
                <ul className="mt-6 max-h-72 space-y-2 overflow-y-auto border-t border-white/[.08] pt-4 pr-1">
                  {quote.items.map((item) => (
                    <li key={item.id} className="flex items-start justify-between gap-3 text-sm">
                      <span className="text-slate-300">
                        <span className="mr-1.5 text-[10px] font-bold tracking-wider" style={{ color: accents[item.category] }}>
                          {item.category.toUpperCase()}
                        </span>
                        {item.name}
                      </span>
                      <span className="shrink-0 tabular-nums text-slate-400">{mxn(item.amountMxn)}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-6 border-t border-white/[.08] pt-4 text-sm leading-6 text-slate-400">
                  Abre una categoría y marca los módulos que te interesan. El total se actualiza al instante.
                </p>
              )}

              {status.state === "sent" ? (
                <div className="mt-6 rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-4 text-sm text-emerald-200">
                  ¡Listo! Recibimos tu cotización #{status.id}. Te contactamos en menos de 24 horas.
                </div>
              ) : formOpen && quote.items.length ? (
                <form onSubmit={submit} className="mt-6 space-y-3 border-t border-white/[.08] pt-5">
                  <Field name="name" label="Nombre" required minLength={2} autoComplete="name" />
                  <Field name="email" label="Correo" type="email" required autoComplete="email" />
                  <Field name="phone" label="Teléfono (opcional)" type="tel" autoComplete="tel" />
                  <Field name="company" label="Empresa (opcional)" autoComplete="organization" />
                  <label className="block">
                    <span className="text-xs font-medium text-slate-400">Comentarios (opcional)</span>
                    <textarea
                      name="notes"
                      rows={3}
                      maxLength={5000}
                      className="mt-1 w-full rounded-xl border border-white/10 bg-night/60 px-3 py-2 text-sm text-white placeholder:text-slate-600 focus:border-brand-400/60 focus:outline-none"
                    />
                  </label>
                  {status.state === "error" ? (
                    <p className="text-sm text-rose-300">
                      {status.message}{" "}
                      <a href={mailto} className="underline">
                        Enviar por correo
                      </a>
                    </p>
                  ) : null}
                  <button
                    type="submit"
                    disabled={status.state === "sending"}
                    className="w-full rounded-full bg-brand-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-400 disabled:opacity-60"
                  >
                    {status.state === "sending" ? "Enviando…" : "Enviar cotización"}
                  </button>
                </form>
              ) : (
                <button
                  type="button"
                  disabled={!quote.items.length}
                  onClick={() => setFormOpen(true)}
                  className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-500 px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_35px_-12px_rgba(43,123,255,0.9)] transition hover:bg-brand-400 disabled:cursor-not-allowed disabled:bg-white/10 disabled:text-slate-500 disabled:shadow-none"
                >
                  Solicitar esta cotización
                  <Icon name="arrow" className="size-4 transition-transform group-hover:translate-x-0.5" />
                </button>
              )}

              {quote.items.length ? (
                <button type="button" onClick={clear} className="mt-3 w-full text-xs text-slate-500 transition hover:text-slate-300">
                  Limpiar selección
                </button>
              ) : null}

              <p className="mt-5 text-[11px] leading-5 text-slate-500">
                Precio estimado. El alcance y el precio final se confirman en una llamada de diagnóstico sin costo.
              </p>
            </div>
          </aside>
        </div>
      </div>

      {quote.items.length ? (
        <a
          href="#resumen-cotizacion"
          onClick={(event) => {
            event.preventDefault();
            document.querySelector("#cotizador aside")?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
          className="fixed inset-x-4 bottom-4 z-40 flex items-center justify-between rounded-2xl border border-brand-400/40 bg-[#070f1e]/95 px-5 py-3 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.9)] backdrop-blur-xl lg:hidden"
        >
          <span className="text-xs text-slate-400">
            {quote.items.length} módulos · {quote.totalHours} h
          </span>
          <span className="text-lg font-semibold tabular-nums text-white">{mxn(quote.totalMxn)}</span>
        </a>
      ) : null}
    </section>
  );
}

function computeQuoteFor(categories: QuoteCategory[], ids: string[], rate: number) {
  // Misma regla que el backend: el núcleo de una categoría entra cuando se elige algún módulo de ella.
  const byId = new Map(categories.flatMap((c) => c.modules.map((m) => [m.id, c.id] as const)));
  const active = new Set(ids.map((id) => byId.get(id)));
  const chosen = new Set(ids);
  const items = categories
    .filter((c) => active.has(c.id))
    .flatMap((c) =>
      c.modules
        .filter((m) => m.required || chosen.has(m.id))
        .map((m) => ({ id: m.id, category: c.id, name: m.name, hours: m.hours, amountMxn: m.hours * rate })),
    );
  const totalHours = items.reduce((sum, item) => sum + item.hours, 0);
  return { items, totalHours, hourlyRate: rate, totalMxn: totalHours * rate };
}

function Field({ label, ...props }: { label: string } & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="text-xs font-medium text-slate-400">{label}</span>
      <input
        {...props}
        className="mt-1 w-full rounded-xl border border-white/10 bg-night/60 px-3 py-2 text-sm text-white focus:border-brand-400/60 focus:outline-none"
      />
    </label>
  );
}
