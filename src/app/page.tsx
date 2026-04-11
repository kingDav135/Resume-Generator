import { Hero } from '@/components/landing/Hero';
import { Features } from '@/components/landing/Features';
import { TemplateShowcase } from '@/components/landing/TemplateShowcase';
import { Footer } from '@/components/landing/Footer';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Features />
      <TemplateShowcase />
      
      {/* Bottom CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary/10 via-background to-accent/5">
         <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-8 italic">
               Ready to land your <span className="text-primary underline decoration-accent/30 underline-offset-8">Dream Job?</span>
            </h2>
            <p className="text-lg text-foreground/60 mb-12 max-w-xl mx-auto font-medium">
               Join thousands of professionals who have built successful careers with Creava Resume.
            </p>
            <div className="p-1.5 bg-card/50 backdrop-blur-md rounded-2xl md:rounded-[2.5rem] border border-border inline-flex flex-col md:flex-row items-center gap-2 group shadow-2xl shadow-primary/10">
               <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-transparent px-8 py-3 outline-none w-64 text-sm font-medium"
               />
               <button className="bg-primary text-white py-4 px-10 rounded-xl md:rounded-[2rem] font-bold text-sm tracking-widest hover:bg-primary/90 transition-all active:scale-95 shadow-lg shadow-primary/20">
                  GET STARTED NOW
               </button>
            </div>
         </div>
      </section>

      <Footer />
    </div>
  );
}
