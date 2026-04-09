import { cn } from '@/lib/utils';
import type { HTMLAttributes } from 'react';

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'overflow-hidden rounded-3xl border border-slate-800/80 bg-white/90 p-6 shadow-soft backdrop-blur-xl transition-colors duration-200 dark:border-slate-700/80 dark:bg-slate-950/90',
        className
      )}
      {...props}
    />
  );
}
