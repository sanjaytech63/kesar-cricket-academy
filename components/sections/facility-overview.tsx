'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { facilityHighlights } from '@/constants/data';

export function FacilityOverview() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.32em] text-emerald-500">Facilities</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
            Everything players need for elite cricket preparation.
          </h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {facilityHighlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.08, duration: 0.7, ease: 'easeOut' }}
              className="group overflow-hidden rounded-[2rem] border border-slate-200/70 bg-white/90 shadow-soft backdrop-blur-xl transition-colors duration-300 dark:border-white/10 dark:bg-slate-900/80"
            >
              <div className="relative h-72 overflow-hidden bg-slate-100/90 transition-colors duration-300 dark:bg-slate-950/80">
                <Image src={item.image} alt={item.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="space-y-3 p-6">
                <span className={`inline-flex rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300 ${item.accent}`}>
                  {item.title}
                </span>
                <h3 className="text-2xl font-semibold text-slate-950 dark:text-white">{item.title}</h3>
                <p className="text-slate-700 dark:text-slate-300">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
