'use client';

import { motion } from 'framer-motion';

export function MissionVision() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-soft backdrop-blur-xl"
          >
            <p className="text-sm uppercase tracking-[0.32em] text-emerald-400">Mission</p>
            <h3 className="mt-4 text-2xl font-semibold text-white">Develop match-ready athletes with lasting skills.</h3>
            <p className="mt-5 text-slate-300 leading-7">
              We provide structured coaching, modern facilities, and disciplined preparation to help players perform with confidence in every game.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-soft backdrop-blur-xl"
          >
            <p className="text-sm uppercase tracking-[0.32em] text-emerald-400">Vision</p>
            <h3 className="mt-4 text-2xl font-semibold text-white">Create the most trusted cricket training hub in Rajasthan.</h3>
            <p className="mt-5 text-slate-300 leading-7">
              Our vision is to set the standard for academy training by investing in coaching talent, technology, and an inspiring training culture.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
