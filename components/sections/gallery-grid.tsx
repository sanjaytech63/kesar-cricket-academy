'use client';

import Image from 'next/image';
import { useMemo, useState } from 'react';
import { galleryImages } from '@/constants/data';
import { motion } from 'framer-motion';
import { X as IconX } from 'lucide-react';

export function GalleryGrid() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeImage = useMemo(() => (activeIndex !== null ? galleryImages[activeIndex] : null), [activeIndex]);

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.32em] text-emerald-400">Gallery</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Captured moments from training and match preparation.</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((src, index) => (
            <motion.button
              key={src}
              type="button"
              whileHover={{ scale: 1.02 }}
              onClick={() => setActiveIndex(index)}
              className="group relative h-72 overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 p-0 shadow-soft"
            >
              <Image src={src} alt={`Gallery image ${index + 1}`} fill className="object-cover transition duration-500 group-hover:scale-105" />
              <div className="absolute inset-x-0 bottom-0 rounded-b-[2rem] bg-gradient-to-t from-slate-950/90 to-transparent p-4 text-slate-100 opacity-0 transition duration-300 group-hover:opacity-100">
                <p className="text-sm font-semibold">Academy Visuals</p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {activeImage ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 p-4">
          <div className="relative max-h-full w-full max-w-4xl overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/90 shadow-soft">
            <button
              type="button"
              onClick={() => setActiveIndex(null)}
              className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-slate-950/90 text-slate-100 transition hover:bg-slate-900"
            >
              <IconX size={20} />
            </button>
            <Image src={activeImage} alt="Gallery preview" width={1200} height={800} className="h-auto w-full object-cover" />
          </div>
        </div>
      ) : null}
    </section>
  );
}
