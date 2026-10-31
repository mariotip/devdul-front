import Link from "next/link";
import { Icon } from "@/components/Icon";

export default function NotFound() {
  return (
    <main className="relative isolate flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(43,123,255,0.2),transparent_60%)]" />
        <div className="grid-pattern absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      </div>

      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-400">Error 404</p>
      <h1 className="text-gradient mt-4 text-7xl font-semibold tracking-[-0.06em] md:text-9xl">404</h1>
      <p className="mt-4 max-w-md text-base leading-7 text-slate-400">
        La página que buscas no existe o cambió de lugar.
      </p>
      <Link
        href="/"
        className="group mt-8 inline-flex items-center gap-2 rounded-full bg-brand-500 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_20px_50px_-15px_rgba(43,123,255,0.9)] transition hover:bg-brand-400"
      >
        Volver al inicio
        <Icon name="arrow" className="size-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </main>
  );
}
