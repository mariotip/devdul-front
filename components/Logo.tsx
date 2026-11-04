import Link from "next/link";

export function Logo({ className = "h-9 w-auto" }: { className?: string }) {
  return (
    <Link href="/" className="flex items-center" aria-label="DevDul, inicio">
      {/* eslint-disable-next-line @next/next/no-img-element -- SVG estático, sin optimización */}
      <img src="/brand/devdul-logo.svg" alt="DevDul" width={377} height={100} className={className} />
    </Link>
  );
}
