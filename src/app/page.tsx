import { Hero } from "@/components/home/Hero";
import { SocialProof } from "@/components/home/SocialProof";
import { FeaturedInventory } from "@/components/home/FeaturedInventory";
import { Features } from "@/components/home/Features";
import { Testimonials } from "@/components/home/Testimonials";
import { CTA } from "@/components/home/CTA";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <SocialProof />
      <FeaturedInventory />
      <Features />
      <Testimonials />
      <CTA />
    </div>
  );
}
