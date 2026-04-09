'use client';

import { motion } from 'framer-motion';

export function AboutPreview() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="rounded-[2rem] border border-slate-200/70 bg-white/90 p-8 shadow-soft backdrop-blur-xl transition-colors duration-300 dark:border-white/10 dark:bg-slate-950/70"
        >
          <div className="grid gap-10 lg:grid-cols-[0.9fr_0.6fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.32em] text-emerald-500">Why Kesar Academy</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
                A complete academy that builds skill, confidence and match temperament.
              </h2>
              <p className="mt-5 leading-8 text-slate-700 dark:text-slate-300 sm:text-lg">
                Our training philosophy focuses on technique, field awareness, and fitness so every player becomes more resilient, consistent, and ready for real match pressure.
              </p>
            </div>
            <div className="rounded-[2rem] bg-gradient-to-br from-emerald-500/10 to-slate-100/90 p-6 transition-colors duration-300 dark:from-emerald-600/15 dark:to-slate-900/80">
              <p className="text-sm uppercase tracking-[0.28em] text-slate-700 dark:text-slate-400">Academy preview</p>
              <ul className="mt-6 space-y-4 text-slate-700 dark:text-slate-300">
                <li className="rounded-3xl bg-slate-100/90 p-4 text-slate-950 dark:bg-slate-950/70 dark:text-slate-200">Pro-level cricket nets and practice surfaces.</li>
                <li className="rounded-3xl bg-slate-100/90 p-4 text-slate-950 dark:bg-slate-950/70 dark:text-slate-200">Coach-led skill sessions for batters, bowlers and fielders.</li>
                <li className="rounded-3xl bg-slate-100/90 p-4 text-slate-950 dark:bg-slate-950/70 dark:text-slate-200">Fitness, recovery and smart cricket mindset training.</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
