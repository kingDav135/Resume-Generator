'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Sparkles, Zap, ChevronRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export function Hero() {
  const router = useRouter();

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-40 overflow-hidden">
      {/* Background Mesh & Grid */}
      <div className="absolute inset-0 -z-10 bg-background overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full animate-float" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent/10 blur-[120px] rounded-full" />
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          {/* Glowing Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-white/10 text-primary text-[10px] font-black uppercase tracking-[0.3em] mb-10 shadow-glow cursor-default"
          >
            <Sparkles size={12} className="animate-pulse" />
            <span>The Intelligence Layer for Careers</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-8xl lg:text-9xl font-black tracking-[-0.05em] leading-[0.9] mb-12 uppercase italic"
          >
            Engineer Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-accent">Success.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-2xl text-foreground/50 max-w-2xl mx-auto mb-16 leading-tight font-medium tracking-tight"
          >
            A high-performance resume engine built with atomic precision. 
            Real-time scoring, live rendering, and premium design patterns.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-24"
          >
            <Button 
              variant="primary" 
              size="lg" 
              className="w-full sm:w-auto px-12 h-16 rounded-2xl text-xs font-black uppercase tracking-[0.2em] group shadow-soft bg-gradient-to-r from-primary to-accent border-none"
              onClick={() => router.push('/builder')}
            >
              Start Building <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="ghost" 
              size="lg" 
              className="w-full sm:w-auto px-12 h-16 rounded-2xl text-xs font-black uppercase tracking-[0.2em] gap-2 border border-white/10 hover:bg-white/5"
            >
              Select Layout <ChevronRight size={16} className="opacity-30" />
            </Button>
          </motion.div>

          {/* Perspective Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 60, rotateX: 20 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-6xl mx-auto relative group"
            style={{ perspective: '2000px' }}
          >
            <div className="relative rounded-3xl p-px bg-gradient-to-b from-white/20 to-transparent shadow-2xl overflow-hidden group-hover:from-primary/50 group-hover:to-accent/50 transition-all duration-700">
              <div className="relative aspect-[21/10] w-full glass rounded-[22px] overflow-hidden">
                <Image 
                  src="/advanced-mockup.png"
                  alt="Creava Advanced Engine"
                  fill
                  className="object-cover opacity-90 group-hover:scale-[1.02] transition-transform duration-1000"
                  priority
                />
              </div>
            </div>

            {/* Float Elements */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-12 -right-12 p-6 rounded-3xl glass border border-white/10 z-20 hidden lg:block backdrop-blur-3xl shadow-glow"
            >
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-2xl bg-primary/20 flex items-center justify-center text-primary">
                  <Zap size={24} fill="currentColor" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-black uppercase tracking-widest opacity-40">Performance</p>
                  <p className="text-xl font-black">99.9% ATS Score</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
