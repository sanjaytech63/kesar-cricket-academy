'use client';

import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/ui/theme-provider';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const nextTheme = theme === 'dark' ? 'light' : 'dark';

  return (
    <Button
      type="button"
      variant="outline"
      className="h-11 w-11 rounded-full p-0 text-slate-100 hover:bg-slate-900/80 dark:text-slate-900 dark:hover:bg-slate-200/20"
      onClick={() => setTheme(nextTheme)}
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? <Sun size={18} className='text-white' /> : <Moon size={18} />}
    </Button>
  );
}
