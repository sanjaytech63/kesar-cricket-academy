import { HeroSection } from '@/components/sections/hero';
import { StatsSection } from '@/components/sections/stats';
import { AboutPreview } from '@/components/sections/about-preview';
import { FacilityOverview } from '@/components/sections/facility-overview';
import { TestimonialsSection } from '@/components/sections/testimonials';
import { CallToActionSection } from '@/components/sections/cta-strip';

export const metadata = {
  title: 'Home | Kesar Cricket Academy & Ground',
  description: 'Train like a pro at Kesar Cricket Academy with premium coaching, facilities, and match-ready training in Jaipur.'
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <AboutPreview />
      <FacilityOverview />
      <TestimonialsSection />
      <CallToActionSection />
    </>
  );
}
