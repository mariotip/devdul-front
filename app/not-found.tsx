import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center">
      <h1 className="text-5xl font-extrabold text-ink">404</h1>
      <p className="text-slate-600">La página que buscas no existe.</p>
      <Link href="/" className="font-semibold text-brand-600 hover:underline">
        Volver al inicio
      </Link>
    </main>
  );
}
