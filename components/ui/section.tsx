import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import type { ComponentPropsWithoutRef } from 'react';

export function Section({ className, children, ...props }: ComponentPropsWithoutRef<typeof motion.section>) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={cn('py-16 sm:py-20 lg:py-24', className)}
      {...props}
    >
      {children}
    </motion.section>
  );
}
