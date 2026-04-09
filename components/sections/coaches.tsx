'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { coaches } from '@/constants/data';

export function CoachesSection() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.32em] text-emerald-400">Meet our coaches</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Expert mentors for every cricket discipline.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {coaches.map((coach, index) => (
            <motion.div
              key={coach.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.6, ease: 'easeOut' }}
              className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/80 shadow-soft backdrop-blur-xl"
            >
              <div className="relative h-72 bg-slate-950/80">
                <Image src={coach.image} alt={coach.name} fill className="object-cover" />
              </div>
              <div className="space-y-3 p-6">
                <p className="text-base font-semibold text-white">{coach.name}</p>
                <p className="text-sm uppercase tracking-[0.24em] text-emerald-300">{coach.role}</p>
                <p className="text-slate-300 leading-7">{coach.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
