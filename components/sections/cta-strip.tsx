import Link from 'next/link';

export function CallToActionSection() {
  return (
    <section className="bg-gradient-to-r from-emerald-500/10 via-slate-100 to-slate-50 py-20 transition-colors duration-300 dark:from-emerald-600/20 dark:via-slate-950/90 dark:to-slate-900">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-4 text-center sm:px-6 lg:flex-row lg:text-left lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.32em] text-emerald-500 dark:text-emerald-300">Ready to elevate your game?</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
            Start your cricket journey today
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-700 dark:text-slate-300">
            Join a premium academy in Jaipur that blends coaching excellence with performance-first facilities.
          </p>
        </div>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-full bg-brand px-7 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-emerald-500"
        >
          Start Training
        </Link>
      </div>
    </section>
  );
}
