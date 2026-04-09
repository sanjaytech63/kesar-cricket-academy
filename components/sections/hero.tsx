'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight, Star } from 'lucide-react';
import { siteConfig } from '@/constants/site';
import { heroLinks } from '@/constants/data';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-slate-50 text-slate-950 transition-colors duration-300 pt-24 sm:pt-28 dark:bg-slate-950/80 dark:text-white">
      <div className="absolute inset-0 bg-hero-glow opacity-90" />
      <div className="absolute inset-0">
        <Image
          src="/images/ground.jpg"
          alt="Cricket academy ground"
          quality={90}
          fill
          className="object-cover opacity-60 transition-opacity"
          priority
        />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-2 text-sm text-emerald-300 backdrop-blur">
              <Star size={18} className="text-emerald-300" />
              Rated {siteConfig.rating} · {siteConfig.reviews} reviews
            </div>
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.32em] text-emerald-500">Elite Cricket Training</p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
                Train Like a Pro at Kesar Cricket Academy
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-700 dark:text-slate-300 sm:text-lg">
                Led by Jitu Singh Rolaniya, our academy combines premium cricket coaching, match-ready facilities, and performance-led training in Jaipur for beginners, juniors, and aspiring professionals.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-brand px-7 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-emerald-500"
              >
                Join Now
              </Link>
              <Link href="/facilities" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-950/80 transition hover:text-slate-950 dark:text-white/85 dark:hover:text-white">
                View Facilities <ChevronRight size={18} />
              </Link>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {heroLinks.slice(0, 3).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-3xl border border-slate-200/70 bg-white/90 px-4 py-3 text-sm text-slate-950 transition hover:border-emerald-400/40 hover:bg-slate-100 dark:border-white/10 dark:bg-slate-900/80 dark:text-slate-100 dark:hover:bg-slate-800"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.85, ease: 'easeOut' }}
            className="rounded-[2rem] border border-slate-200/70 bg-white/90 p-6 shadow-soft backdrop-blur-xl transition-colors duration-300 dark:border-white/10 dark:bg-slate-900/80"
          >
            <div className="h-full rounded-[2rem] border border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 to-slate-100/90 p-6 shadow-inner transition-colors duration-300 dark:from-slate-900/80 dark:to-slate-950/90">
              <div className="grid gap-5">
                <div className="rounded-3xl bg-white/90 p-6 shadow-lg shadow-slate-200/30 transition-colors duration-300 dark:bg-slate-950/95 dark:shadow-black/20">
                  <p className="text-sm uppercase tracking-[0.26em] text-emerald-500">Location</p>
                  <h2 className="mt-3 text-2xl font-semibold text-slate-950 dark:text-white">{siteConfig.location}</h2>
                  <p className="mt-3 text-sm leading-6 text-slate-700 dark:text-slate-300">
                    Full academy experience with covered nets, fitness studio, video support, and professional coaching.
                  </p>
                </div>
                <div className="grid gap-4 rounded-3xl border border-slate-200/70 bg-slate-100/90 p-5 transition-colors duration-300 dark:border-white/10 dark:bg-slate-900/95">
                  <div className="rounded-3xl bg-white/90 p-5 transition-colors duration-300 dark:bg-slate-950/80">
                    <p className="text-xs uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">Short Intro</p>
                    <p className="mt-3 text-sm leading-6 text-slate-700 dark:text-slate-300">
                      Kesar Academy blends modern cricket science with a premium academy environment for growth and confidence.
                    </p>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-3xl bg-white/90 p-4 text-sm text-slate-950 transition-colors duration-300 dark:bg-slate-950/80 dark:text-slate-200">
                      <p className="font-medium text-slate-950 dark:text-white">Expert Coaches</p>
                      <p className="mt-2 text-slate-600 dark:text-slate-400">Personalized plans for every player.</p>
                    </div>
                    <div className="rounded-3xl bg-white/90 p-4 text-sm text-slate-950 transition-colors duration-300 dark:bg-slate-950/80 dark:text-slate-200">
                      <p className="font-medium text-slate-950 dark:text-white">Modern Facilities</p>
                      <p className="mt-2 text-slate-600 dark:text-slate-400">Turf ground, nets, and fitness support.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
