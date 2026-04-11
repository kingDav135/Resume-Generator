import { Hero } from '@/components/landing/Hero';
import { Features } from '@/components/landing/Features';
import { TemplateShowcase } from '@/components/landing/TemplateShowcase';
import { Testimonials } from '@/components/landing/Testimonials';
import { Footer } from '@/components/landing/Footer';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Features />
      <TemplateShowcase />
      <Testimonials />
      
      {/* Bottom CTA Section */}
      <section className="py-32 relative overflow-hidden">
         <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 -z-10" />
         <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-[100px] animate-pulse-slow" />
         <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent/10 rounded-full blur-[100px] animate-float" />

         <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-10 italic uppercase">
               Ready to <span className="text-primary italic">Transform</span> <br />
               Your <span className="bg-clip-text text-transparent bg-gradient-vibrant">Career?</span>
            </h2>
            <p className="text-lg md:text-xl text-foreground/50 mb-16 max-w-xl mx-auto font-medium leading-relaxed">
               Join 10,000+ professionals who have landed their dream roles using our expert-crafted builder.
            </p>
            
            <div className="p-2 bg-white/50 dark:bg-white/5 backdrop-blur-3xl rounded-[2.5rem] border border-white/20 dark:border-white/10 inline-flex flex-col md:flex-row items-center gap-2 group shadow-[0_30px_100px_-20px_rgba(139,92,246,0.3)]">
               <input 
                  type="email" 
                  placeholder="name@company.com" 
                  className="bg-transparent px-10 py-4 outline-none w-full md:w-80 text-sm font-bold tracking-wide"
               />
               <button className="w-full md:w-auto bg-primary text-white py-5 px-12 rounded-[2rem] font-bold text-xs tracking-[0.3em] uppercase hover:scale-[1.02] transition-all active:scale-95 shadow-xl shadow-primary/40 bg-gradient-to-r from-primary to-secondary">
                  GET STARTED FREE
               </button>
            </div>
         </div>
      </section>

      <Footer />
    </div>
  );
}
