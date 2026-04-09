'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 disabled:pointer-events-none disabled:opacity-50',
          variant === 'primary' && 'bg-brand text-white shadow-soft hover:-translate-y-0.5 hover:bg-emerald-500',
          variant === 'secondary' && 'bg-slate-800 text-slate-100 hover:bg-slate-700',
          variant === 'outline' && 'border border-slate-700 bg-transparent text-slate-100 hover:bg-slate-950/80',
          variant === 'ghost' && 'bg-transparent text-slate-100 hover:bg-slate-900/80 dark:text-slate-200 dark:hover:bg-slate-200/10',
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';
