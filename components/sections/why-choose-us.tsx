'use client';

import { motion } from 'framer-motion';

const advantages = [
  'Personalized player development plans.',
  'Performance tracking with video review.',
  'Modern academy environment with safe training spaces.',
  'Coaching that prepares players for competitive cricket.'
];

export function WhyChooseUs() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-emerald-400">Why choose us</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              We focus on quality coaching, fitness, and a winning mindset.
            </h2>
            <p className="mt-5 max-w-xl text-slate-300 leading-7">
              Our academy experience is built for players who want more than just practice: they want measurable progress, confidence, and readiness for match competition.
            </p>
          </div>
          <div className="grid gap-4">
            {advantages.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.55 }}
                className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-6 shadow-soft backdrop-blur-xl"
              >
                <p className="text-base font-semibold text-white">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
