'use client';

import { motion } from 'framer-motion';
import { stats } from '@/constants/data';

export function StatsSection() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {stats.map((item) => (
            <motion.div
              key={item.label}
              whileHover={{ y: -6 }}
              className="rounded-[2rem] border border-slate-200/70 bg-white/90 p-8 shadow-soft backdrop-blur-xl transition-colors duration-300 dark:border-white/10 dark:bg-slate-900/80"
            >
              <div className="flex items-center gap-4 text-emerald-500">
                <item.icon size={28} />
                <p className="text-sm uppercase tracking-[0.28em] text-slate-600 dark:text-slate-400">{item.label}</p>
              </div>
              <p className="mt-5 text-4xl font-semibold text-slate-950 dark:text-white">{item.value}</p>
              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                Driven by performance coaching and proven training progress.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
