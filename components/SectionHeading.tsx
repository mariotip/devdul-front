import type { ReactNode } from "react";
import { Icon } from "./Icon";
import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  action?: { href: string; label: string };
};

export function SectionHeading({ eyebrow, title, description, action }: SectionHeadingProps) {
  return (
    <Reveal>
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-400">{eyebrow}</p>
          <h2 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-white md:text-5xl lg:text-[3.4rem]">
            {title}
          </h2>
          {description ? <p className="mt-5 max-w-xl text-base leading-7 text-slate-400">{description}</p> : null}
        </div>
        {action ? (
          <a
            href={action.href}
            className="group inline-flex shrink-0 items-center gap-3 self-start rounded-full border border-white/15 bg-white/[.03] px-5 py-3 text-sm font-semibold text-white transition hover:border-brand-400/50 hover:bg-brand-500/10"
          >
            {action.label}
            <Icon name="arrow" className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
        ) : null}
      </div>
    </Reveal>
  );
}
