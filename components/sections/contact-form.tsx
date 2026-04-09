'use client';

import { useState } from 'react';
import type React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function ContactForm() {
  const [formState, setFormState] = useState({ name: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_0.85fr] lg:items-start">
          <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-soft backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.32em] text-emerald-400">Contact us</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Get personalized training and membership details.</h2>
            <p className="mt-5 text-slate-300 leading-7">
              Share your goals and our team will reach out with the best plan for your cricket development.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="rounded-[2rem] border border-white/10 bg-slate-950/90 p-8 shadow-soft backdrop-blur-xl">
            <div className="grid gap-6">
              <Input name="name" type="text" placeholder="Full name" value={formState.name} onChange={handleChange} required />
              <Input name="phone" type="tel" placeholder="Phone number" value={formState.phone} onChange={handleChange} required />
              <textarea
                name="message"
                rows={6}
                className="w-full rounded-3xl border border-white/10 bg-slate-950/90 px-4 py-4 text-sm text-slate-100 outline-none transition-colors duration-200 focus:border-brand focus:ring-2 focus:ring-brand/20"
                placeholder="Tell us about your training goals"
                value={formState.message}
                onChange={handleChange}
                required
              />
              <Button type="submit">Send Message</Button>
              {submitted ? (
                <p className="rounded-3xl bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200">Thanks! We will contact you shortly.</p>
              ) : null}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
