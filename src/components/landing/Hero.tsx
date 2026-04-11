'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Sparkles, Play } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export function Hero() {
  const router = useRouter();

  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 pb-32 overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-[20%] right-[10%] w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[150px] animate-float" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_70%)] dark:bg-[radial-gradient(circle_at_center,rgba(15,23,42,0.1),transparent_70%)]" />
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 dark:bg-white/5 border border-primary/20 text-primary text-xs font-black uppercase tracking-[0.2em] mb-8 shadow-glow"
            >
              <Sparkles size={14} className="animate-spin-slow" />
              <span>Next-Gen Resume Builder</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-[1]"
            >
              Elevate Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent animate-gradient bg-[length:200%_auto]">
                Career Story.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-foreground/70 max-w-xl mx-auto lg:mx-0 mb-12 leading-relaxed font-medium"
            >
              Craft professional, ATS-ready resumes in minutes with our progressive building engine. 
              Real-time scoring, 10+ premium templates, and instant PDF export.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <Button 
                variant="primary" 
                size="lg" 
                className="w-full sm:w-auto px-10 h-16 rounded-2xl gap-3 group shadow-2xl shadow-primary/30 relative overflow-hidden"
                onClick={() => router.push('/builder')}
              >
                <span className="relative z-10 flex items-center gap-2 text-base uppercase tracking-wider font-bold">
                  Start Building <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
              </Button>
              <Button 
                variant="ghost" 
                size="lg" 
                className="w-full sm:w-auto h-16 rounded-2xl gap-3 text-base font-bold dark:hover:bg-white/5"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800">
                  <Play size={16} fill="currentColor" />
                </div>
                See it in action
              </Button>
            </motion.div>
          </div>

          {/* Right Visuals */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-1 relative w-full lg:w-auto"
          >
            <div className="relative z-10 w-full aspect-video lg:aspect-square max-w-[600px] mx-auto group">
              {/* Glass Frame */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/30 via-secondary/10 to-accent/30 rounded-[3rem] blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative h-full w-full rounded-[2.5rem] border border-white/20 dark:border-white/10 overflow-hidden shadow-2xl glass animate-float">
                <Image 
                  src="/builder_mockup_1775939933336.png"
                  alt="Creava Builder Interface"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
              </div>

              {/* Decorative Widgets */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 p-6 rounded-3xl glass shadow-xl border border-white/20 z-20 hidden md:block"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                    <Sparkles size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest opacity-50">Resume Score</p>
                    <p className="text-xl font-black text-green-500">98%</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
