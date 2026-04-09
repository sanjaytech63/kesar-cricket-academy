import type { ReactNode } from 'react';

export function SectionHeading({ title, description }: { title: string; description?: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm uppercase tracking-[0.32em] text-emerald-400">Kesar Academy</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-7 text-slate-300">{description}</p> : null}
    </div>
  );
}
