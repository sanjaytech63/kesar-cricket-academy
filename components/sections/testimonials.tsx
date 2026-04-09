'use client';

import { motion } from 'framer-motion';
import { testimonials } from '@/constants/data';

export function TestimonialsSection() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.32em] text-emerald-500">Testimonials</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-4xl">What our players say about the academy.</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="rounded-[2rem] border border-slate-200/70 bg-white/90 p-8 shadow-soft backdrop-blur-xl transition-colors duration-300 dark:border-white/10 dark:bg-slate-900/80"
            >
              <p className="text-lg leading-8 text-slate-900 dark:text-slate-200">“{item.quote}”</p>
              <div className="mt-6 border-t border-slate-200/70 pt-5 transition-colors duration-300 dark:border-white/10">
                <p className="font-semibold text-slate-950 dark:text-white">{item.name}</p>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{item.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
