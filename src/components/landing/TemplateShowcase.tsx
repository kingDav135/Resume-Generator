'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { useRouter } from 'next/navigation';
import { ArrowUpRight, ShieldCheck } from 'lucide-react';

const TEMPLATES = [
  { id: 'modern', name: 'Layout 01', type: 'Centered', popular: true },
  { id: 'minimal', name: 'Layout 02', type: 'Atomic' },
  { id: 'professional', name: 'Layout 03', type: 'Executive' },
  { id: 'creative', name: 'Layout 04', type: 'Sidebar' },
  { id: 'sidebar', name: 'Layout 05', type: 'Dynamic' },
  { id: 'bold', name: 'Layout 06', type: 'Structural' },
];

export function TemplateShowcase() {
  const router = useRouter();

  return (
    <section id="templates" className="py-32 bg-black overflow-hidden relative">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[150px] -z-10" />

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-primary font-black text-[10px] uppercase tracking-[0.4em] mb-4"
            >
              Architectural Library
            </motion.div>
            <h2 className="text-4xl md:text-8xl font-black tracking-tighter mb-8 uppercase italic leading-[0.9]">
               Design <br />
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Blueprints.</span>
            </h2>
          </div>
          <Button 
             variant="ghost" 
             className="rounded-full px-10 h-14 font-black text-[10px] uppercase tracking-[0.4em] border border-white/10 hover:bg-white/5 group"
             onClick={() => router.push('/builder')}
          >
             Explore All <ArrowUpRight size={16} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {TEMPLATES.map((tmpl, index) => (
            <motion.div
              key={tmpl.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group cursor-pointer"
              onClick={() => router.push('/builder')}
            >
              <div className="aspect-[3/4.2] rounded-[2.5rem] glow-border glass overflow-hidden relative mb-8 transition-all duration-500">
                {/* Most Popular Badge */}
                {tmpl.popular && (
                  <div className="absolute top-6 right-6 z-20 flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/50 text-primary text-[8px] font-black uppercase tracking-widest shadow-glow">
                    <ShieldCheck size={10} />
                    Verified Best
                  </div>
                )}

                {/* Technical Abstract Illustration */}
                <div className="absolute inset-0 p-10 flex flex-col gap-8">
                   <div className="flex items-center gap-4 border-b border-white/5 pb-8">
                      <div className="h-12 w-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-primary/50 transition-colors">
                         <div className="h-4 w-4 rounded-full border-2 border-primary/50 animate-pulse" />
                      </div>
                      <div className="space-y-3 flex-1">
                        <div className="h-2 w-1/2 bg-white/10 rounded-full group-hover:bg-primary/20 transition-colors" />
                        <div className="h-1.5 w-1/3 bg-white/5 rounded-full" />
                      </div>
                   </div>
                   
                   <div className="flex-1 flex gap-8">
                      {tmpl.id === 'creative' || tmpl.id === 'sidebar' ? (
                        <div className="w-1/3 h-full border-r border-white/5 pr-4 space-y-4">
                           <div className="h-1.5 w-full bg-white/10 rounded-full" />
                           <div className="h-1.5 w-3/4 bg-white/5 rounded-full" />
                           <div className="h-1.5 w-full bg-white/5 rounded-full" />
                        </div>
                      ) : null}
                      <div className="flex-1 space-y-8">
                         <div className="space-y-4">
                           <div className="h-2 w-full bg-white/10 rounded-full" />
                           <div className="h-2 w-full bg-white/5 rounded-full" />
                           <div className="h-2 w-3/4 bg-white/5 rounded-full" />
                         </div>
                         <div className="grid grid-cols-1 gap-4">
                            <div className="h-32 w-full rounded-2xl border border-white/5 border-dashed group-hover:border-primary/30 transition-colors" />
                         </div>
                      </div>
                   </div>
                </div>

                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shimmer" />

                {/* Hover Action */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                   <div className="px-10 py-3 rounded-2xl bg-white text-black text-[10px] font-black uppercase tracking-[0.3em] shadow-2xl">
                      Select Architecture
                   </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between px-6">
                <p className="font-black text-[10px] uppercase tracking-[0.4em] text-white/20 group-hover:text-primary transition-colors">{tmpl.name}</p>
                <div className="h-px w-8 bg-white/5" />
                <p className="font-medium text-[10px] uppercase tracking-[0.3em] text-white/10">{tmpl.type}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
