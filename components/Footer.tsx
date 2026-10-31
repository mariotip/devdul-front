import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-slate-500 md:flex-row">
        <p>
          © {new Date().getFullYear()} {siteConfig.name}. Todos los derechos reservados.
        </p>
        <a href={`mailto:${siteConfig.contactEmail}`} className="hover:text-brand-600">
          {siteConfig.contactEmail}
        </a>
      </div>
    </footer>
  );
}
