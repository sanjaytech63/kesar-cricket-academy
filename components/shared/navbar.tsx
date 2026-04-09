'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { heroLinks } from '@/constants/data';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn('sticky top-0 z-50 transition-all duration-500', isScrolled ? 'backdrop-blur-xl bg-slate-950/95 shadow-lg shadow-slate-950/30' : 'bg-slate-950/80')}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-lg font-semibold tracking-wide text-white">
          Kesar Cricket Academy
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {heroLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm text-slate-300 transition hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full bg-brand px-5 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-emerald-500"
          >
            Book Practice
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Button
            type="button"
            variant="outline"
            className="h-11 w-11 rounded-full p-0 text-white"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={20} />
          </Button>
        </div>
      </div>

      {isOpen ? (
        <div className="fixed inset-0 z-50 grid bg-slate-950/95 md:hidden">
          <div className="relative flex h-full w-full items-start bg-slate-950/100 p-6 shadow-2xl sm:w-[85%]">
            <div className="flex w-full flex-col gap-8">
              <div className="flex items-center justify-between">
                <Link href="/" className="text-lg font-semibold tracking-wide text-white" onClick={() => setIsOpen(false)}>
                  Kesar Academy
                </Link>
                <Button
                  type="button"
                  variant="outline"
                  className="h-11 w-11 rounded-full p-0 text-white"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close menu"
                >
                  <X size={20} />
                </Button>
              </div>

              <div className="flex flex-col gap-4 text-lg text-slate-100">
                {heroLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-3xl border border-slate-800/80 bg-slate-950/90 px-5 py-4 text-base font-medium transition hover:bg-slate-900"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="flex flex-col gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-500"
                  onClick={() => setIsOpen(false)}
                >
                  Book Practice
                </Link>
                <p className="text-sm leading-7 text-slate-400">
                  Kesar Cricket Academy & Ground · Jaipur, Rajasthan · Rating 4.5 (287 reviews)
                </p>
              </div>
            </div>
          </div>
          <button
            type="button"
            className="absolute inset-y-0 right-0 w-[15%] bg-transparent"
            onClick={() => setIsOpen(false)}
            aria-label="Close sidebar"
          />
        </div>
      ) : null}
    </header>
  );
}
