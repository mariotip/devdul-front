import Link from "next/link";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#ia", label: "Inteligencia Artificial" },
  { href: "#proceso", label: "Cómo trabajamos" },
  { href: "#contacto", label: "Contacto" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold tracking-tight text-ink">
          Dev<span className="text-brand-600">Dul</span>
        </Link>
        <ul className="hidden gap-8 text-sm font-medium text-slate-600 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition hover:text-brand-600">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contacto"
          className="rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-700"
        >
          Hablemos
        </a>
      </nav>
    </header>
  );
}
