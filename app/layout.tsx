import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';
import { Navbar } from '@/components/shared/navbar';
import { Footer } from '@/components/shared/footer';
import { ThemeProvider } from '@/components/ui/theme-provider';

export const metadata: Metadata = {
  title: 'Kesar Cricket Academy & Ground | Jaipur',
  description: 'Premium cricket coaching, facilities, and training at Kesar Cricket Academy in Jaipur.',
  openGraph: {
    title: 'Kesar Cricket Academy & Ground',
    description: 'Train like a pro with premium coaching, nets, and grounds in Jaipur.',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="min-h-screen bg-slate-950 text-slate-100 selection:bg-brand/40 selection:text-white transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100 dark:selection:bg-brand/40 dark:selection:text-white">
        <ThemeProvider>
          <div className="relative overflow-hidden bg-slate-950 text-slate-100">
            <Navbar />
            <main>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
