'use client';

import { motion } from 'framer-motion';

export function AboutDetails() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_0.65fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="space-y-4"
          >
            <p className="text-sm uppercase tracking-[0.32em] text-emerald-400">About the academy</p>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              The premier cricket academy in Jaipur for skill, strength, and match strategy.
            </h2>
            <p className="max-w-2xl leading-8 text-slate-300 sm:text-lg">
              Kesar Cricket Academy offers a high-performance training environment with modern nets, structured sessions, and personalized coaching. We prepare players for school, club, and competitive cricket by emphasizing technique, discipline, and smart decision-making.
            </p>
          </motion.div>
          <div className="grid gap-5">
            <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-6 shadow-soft backdrop-blur-xl">
              <p className="text-sm uppercase tracking-[0.28em] text-emerald-300">Core values</p>
              <ul className="mt-6 space-y-4 text-slate-300">
                <li>Commitment to every player’s improvement.</li>
                <li>Precision coaching in batting, bowling, and fielding.</li>
                <li>Focus on fitness, recovery, and game awareness.</li>
              </ul>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-6 shadow-soft backdrop-blur-xl">
              <p className="text-sm uppercase tracking-[0.28em] text-emerald-300">Training experience</p>
              <p className="mt-5 text-slate-300 leading-7">
                Players receive individualized feedback, video analysis, and drills that build consistency under pressure. Our sessions are designed to create players who feel confident in any match situation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
