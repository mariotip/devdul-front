import { Icon, type IconName } from "./Icon";

const clients: { name: string; icon: IconName }[] = [
  { name: "Altura", icon: "layers" },
  { name: "Nexo", icon: "bolt" },
  { name: "Lumen", icon: "sparkles" },
  { name: "Vertex", icon: "shield" },
  { name: "Nova", icon: "cloud" },
  { name: "Andes", icon: "chart" },
];

export function TrustedBy() {
  return (
    <section aria-label="Equipos que confían en DevDul" className="border-y border-white/[.06] bg-white/[.015] py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="text-center text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-500">
          Equipos que ya construyen con DevDul
        </p>
        <div className="marquee marquee-mask mt-7 overflow-hidden">
          <div className="animate-marquee flex w-max">
            {[0, 1].map((group) => (
              <ul
                key={group}
                aria-hidden={group === 1}
                className="flex shrink-0 items-center gap-12 pr-12 sm:gap-16 sm:pr-16"
              >
                {clients.map((client) => (
                  <li key={`${group}-${client.name}`} className="flex items-center gap-2.5 opacity-60 transition hover:opacity-100">
                    <span className="flex size-8 items-center justify-center rounded-lg border border-white/10 bg-white/[.04] text-brand-300">
                      <Icon name={client.icon} className="size-4" />
                    </span>
                    <span className="text-base font-semibold tracking-tight text-white">{client.name}</span>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
