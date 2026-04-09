import { ContactDetailsSection } from '@/components/sections/contact-details';
import { ContactForm } from '@/components/sections/contact-form';

export const metadata = {
  title: 'Contact | Kesar Cricket Academy & Ground',
  description: 'Contact Kesar Cricket Academy for membership, practice booking, and training inquiries in Jaipur.'
};

export default function ContactPage() {
  return (
    <>
      <ContactDetailsSection />
      <div className="relative py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_0.95fr] lg:items-start">
            <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-soft backdrop-blur-xl">
              <p className="text-sm uppercase tracking-[0.32em] text-emerald-400">Google Maps</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Find us on Sikar Road, Jaipur.</h2>
              <p className="mt-5 text-slate-300 leading-7">
                Our academy is centrally located with easy access to the city and excellent parking for visitors.
              </p>
              <div className="mt-8 aspect-[16/9] overflow-hidden rounded-[2rem] border border-white/10">
                <iframe
                  title="Kesar Cricket Academy Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.7606508400393!2d75.78727907442344!3d26.85011798312749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5d8a3a4c819%3A0x5a67c19d0a9f9c38!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1702158254959!5m2!1sen!2sin"
                  className="h-full w-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
}
