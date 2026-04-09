import {
  Activity,
  ShieldCheck,
  Users,
  Trophy,
  Clock,
  MapPin,
  MessageCircle,
} from "lucide-react";

export type StatItem = {
  label: string;
  value: string;
  icon: typeof Activity;
};

export type FacilityItem = {
  title: string;
  description: string;
  image: string;
  accent: string;
};

export type CoachItem = {
  name: string;
  role: string;
  bio: string;
  image: string;
};

export type TestimonialItem = {
  quote: string;
  name: string;
  detail: string;
};

export const heroLinks = [
  { label: "About", href: "/about" },
  { label: "Facilities", href: "/facilities" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export const stats: StatItem[] = [
  { label: "Players Trained", value: "1,220+", icon: Users },
  { label: "Years of Expertise", value: "12+", icon: Clock },
  { label: "Matches Played", value: "450+", icon: Trophy },
];

export const facilityHighlights: FacilityItem[] = [
  {
    title: "Premium Practice Ground",
    description:
      "A lush, tournament-grade turf perfect for batting and fielding development.",
    image: "/images/ground.jpg",
    accent: "from-emerald-500/80",
  },
  {
    title: "All-weather Nets",
    description:
      "Four modern net lanes with expert tracking and safety padding.",
    image: "/images/img2.jpg",
    accent: "from-slate-700/80",
  },
  {
    title: "Coaching Studio",
    description:
      "Individual analysis with video review and technical breakdowns.",
    image: "/images/img3.jpg",
    accent: "from-emerald-700/70",
  },
  {
    title: "Strength & Fitness",
    description: "Tailored cricket fitness training for endurance and power.",
    image: "/images/img1.jpg",
    accent: "from-emerald-600/70",
  },
  {
    title: "Strength & Fitness",
    description: "Tailored cricket fitness training for endurance and power.",
    image: "/images/img5.jpg",
    accent: "from-emerald-600/70",
  },
  {
    title: "Strength & Fitness",
    description: "Tailored cricket fitness training for endurance and power.",
    image: "/images/img4.jpg",
    accent: "from-emerald-600/70",
  },
];

export const coaches: CoachItem[] = [
  {
    name: "Jitu Singh Rolaniya",
    role: "Director of Coaching",
    bio: "Veteran coach with a deep history in competitive cricket and player development.",
    image:
      "/images/owner.png",
  },
  {
    name: "Rahul Sharma",
    role: "Batting Specialist",
    bio: "Former state-level all-rounder specializing in batting precision and match strategy.",
    image:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Amit Patel",
    role: "Bowling Specialist",
    bio: "Fast-bowling coach with a sharp focus on line, length, and injury-free technique.",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80",
  },
];

export const testimonials: TestimonialItem[] = [
  {
    quote:
      "The coaching staff helped me improve my game quicker than I expected. The facilities feel like a professional setup.",
    name: "Aarav Mehta",
    detail: "U-19 Allrounder, Jaipur",
  },
  {
    quote:
      "Structured sessions, excellent nets, and a friendly environment for every age and skill level.",
    name: "Riya Khan",
    detail: "Youth Academy Participant",
  },
  {
    quote:
      "A premium academy with the right balance of technique, fitness, and mental coaching.",
    name: "Vikram Joshi",
    detail: "Club Captain",
  },
];

export const galleryImages = [
  "/images/ground.jpg",
  "/images/img2.jpg",
  "/images/img3.jpg",
  "/images/img4.jpg",
  "/images/img1.jpg",
  "/images/img5.jpg",
];

export const contactDetails = [
  { icon: MapPin, label: "Address", value: "Sikar Road, Jaipur, Rajasthan" },
  { icon: ShieldCheck, label: "Office Hours", value: "Mon - Sat, 7 AM - 8 PM" },
  { icon: MessageCircle, label: "Phone", value: "+91 9828236523" },
];
