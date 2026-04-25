import { Hero } from '@/components/landing/Hero';
import { Features } from '@/components/landing/Features';
import { HowItWorks } from '@/components/landing/HowItWorks';
import { TemplateShowcase } from '@/components/landing/TemplateShowcase';
import { SmartFeatures } from '@/components/landing/SmartFeatures';
import { LivePreviewDemo } from '@/components/landing/LivePreviewDemo';
import { Testimonials } from '@/components/landing/Testimonials';
import { FinalCTA } from '@/components/landing/FinalCTA';
import { Footer } from '@/components/landing/Footer';
import { LandingNavbar } from '@/components/landing/LandingNavbar';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <LandingNavbar />
      <Hero />
      <Features />
      <HowItWorks />
      <TemplateShowcase />
      <SmartFeatures />
      <LivePreviewDemo />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </div>
  );
}
