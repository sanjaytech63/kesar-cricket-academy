import { contactDetails } from '@/constants/data';

export function ContactDetailsSection() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-soft backdrop-blur-xl sm:grid-cols-3">
          {contactDetails.map((item) => (
            <div key={item.label} className="space-y-3">
              <div className="inline-flex rounded-full bg-emerald-500/10 p-3 text-emerald-300">
                <item.icon size={20} />
              </div>
              <p className="text-sm uppercase tracking-[0.26em] text-slate-500">{item.label}</p>
              <p className="text-base font-semibold text-white">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
