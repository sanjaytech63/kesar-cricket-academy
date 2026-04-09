'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { facilityHighlights } from '@/constants/data';

export function FacilityCardsSection() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.32em] text-emerald-400">Facilities</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">A modern academy built for every aspect of cricket training.</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {facilityHighlights.map((facility, index) => (
            <motion.div
              key={facility.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.08, duration: 0.6, ease: 'easeOut' }}
              className="group overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/80 shadow-soft backdrop-blur-xl"
            >
              <div className="relative h-64 overflow-hidden bg-slate-950/80">
                <Image src={facility.image} alt={facility.title} fill className="object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="space-y-4 p-6">
                <p className="text-sm uppercase tracking-[0.28em] text-emerald-400">{facility.title}</p>
                <p className="text-slate-300 leading-7">{facility.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
