'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Sparkles, ShieldCheck, Zap } from 'lucide-react';
import { useRouter } from 'next/navigation';

export function Hero() {
  const router = useRouter();

  return (
    <section className="relative pt-20 pb-32 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10 opacity-30 dark:opacity-20 pointer-events-none">
        <div className="absolute top-0 left-10 w-72 h-72 bg-primary/30 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold mb-8"
        >
          <Sparkles size={16} />
          <span>New: 10+ Premium Templates Added</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-black tracking-tighter mb-6 leading-[1.1]"
        >
          Build a Resume That <br />
          <span className="bg-clip-text text-transparent bg-gradient-purple">Gets You Hired.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto mb-10 leading-relaxed font-medium"
        >
          The ultimate progressive resume builder. Real-time preview, smart scoring, 
          and professional templates designed to pass ATS and wow recruiters.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button 
            variant="primary" 
            size="lg" 
            className="w-full sm:w-auto gap-2 group shadow-xl shadow-primary/20"
            onClick={() => router.push('/builder')}
          >
            Start Building for Free
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="w-full sm:w-auto"
            onClick={() => document.getElementById('templates')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Templates
          </Button>
        </motion.div>

        {/* Social Proof / Trust Badges */}
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 1, delay: 0.5 }}
           className="mt-20 flex flex-wrap justify-center items-center gap-8 md:gap-16 grayscale opacity-50 dark:invert"
        >
           <div className="flex items-center gap-2 font-black text-xl italic tracking-tighter">
              <Zap size={24} className="text-primary fill-primary" /> TECHFLOW
           </div>
           <div className="flex items-center gap-2 font-black text-xl italic tracking-tighter">
              <ShieldCheck size={24} className="text-primary fill-primary" /> SECUREHR
           </div>
           <div className="flex items-center gap-2 font-black text-xl italic tracking-tighter">
              <Sparkles size={24} className="text-primary fill-primary" /> CREATIVE.CO
           </div>
        </motion.div>
      </div>
    </section>
  );
}
