import Link from 'next/link';
import { Facebook, Instagram, Mail, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/95 py-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:px-8 xl:flex-row xl:items-center xl:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-emerald-400">Kesar Academy</p>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400">
            Jaipur’s premium cricket training ground with expert coaches, modern facilities, and a performance-first approach for every level.
          </p>
        </div>
        <div className="grid gap-4 text-slate-300 sm:grid-cols-3">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Address</p>
            <p className="mt-2 text-sm">Jaipur, Rajasthan</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Contact</p>
            <p className="mt-2 text-sm">+91 9828236523</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Connect</p>
            <div className="mt-2 flex items-center gap-3 text-slate-300">
              <Link href="mailto:info@kesaracademy.com" className="inline-flex items-center gap-2 text-sm hover:text-white">
                <Mail size={16} /> Email
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl px-4 text-center text-sm text-slate-500 sm:px-6 lg:px-8">
        © {new Date().getFullYear()} Kesar Cricket Academy. Built for performance and premium training.
      </div>
    </footer>
  );
}
