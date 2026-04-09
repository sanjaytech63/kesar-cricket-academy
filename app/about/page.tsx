import { AboutDetails } from '@/components/sections/about-details';
import { MissionVision } from '@/components/sections/mission-vision';
import { WhyChooseUs } from '@/components/sections/why-choose-us';
import { CoachesSection } from '@/components/sections/coaches';

export const metadata = {
  title: 'About | Kesar Cricket Academy & Ground',
  description: 'Learn about Kesar Cricket Academy’s mission, coaching philosophy, and expert staff in Jaipur.'
};

export default function AboutPage() {
  return (
    <>
      <AboutDetails />
      <MissionVision />
      <WhyChooseUs />
      <CoachesSection />
    </>
  );
}
