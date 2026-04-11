'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { useRouter } from 'next/navigation';
import { Check, Star } from 'lucide-react';

const TEMPLATES = [
  { id: 'modern', name: 'Modern UI', color: 'from-blue-500 to-indigo-600', popular: true },
  { id: 'minimal', name: 'Minimalist', color: 'from-slate-400 to-slate-600' },
  { id: 'professional', name: 'Executive', color: 'from-slate-800 to-black' },
  { id: 'creative', name: 'Creative High', color: 'from-secondary to-purple-600' },
  { id: 'sidebar', name: 'Sidebar Pro', color: 'from-accent to-blue-600' },
  { id: 'bold', name: 'Bold Impact', color: 'from-primary to-secondary' },
];

export function TemplateShowcase() {
  const router = useRouter();

  return (
    <section id="templates" className="py-32 bg-slate-50/50 dark:bg-slate-900/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-primary font-bold text-sm tracking-[0.3em] uppercase mb-4"
            >
              <Star size={16} fill="currentColor" />
              <span>Premium Gallery</span>
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 uppercase leading-tight">
               Designed to <br />
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Dominate.</span>
            </h2>
            <p className="text-foreground/50 font-medium text-lg leading-relaxed">
               Every template is battle-tested for ATS compatibility and human readability.
            </p>
          </div>
          <Button 
             variant="primary" 
             className="rounded-2xl px-12 h-14 font-bold uppercase tracking-widest shadow-xl shadow-primary/20 group"
             onClick={() => router.push('/builder')}
          >
             Select a template
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {TEMPLATES.map((tmpl, index) => (
            <motion.div
              key={tmpl.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -12 }}
              className="group cursor-pointer relative"
              onClick={() => router.push('/builder')}
            >
              <div className="aspect-[3/4.2] rounded-[3rem] bg-card border border-border overflow-hidden relative mb-6 shadow-xl group-hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] transition-all duration-500">
                {/* Mock Template Visualization */}
                <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br ${tmpl.color} opacity-[0.03] group-hover:opacity-[0.07] transition-opacity`} />
                <div className="p-10 space-y-6 relative z-10">
                   <div className={`h-24 w-full bg-gradient-to-r ${tmpl.color} rounded-2xl opacity-20`} />
                   <div className="space-y-3">
                      <div className="h-4 w-3/4 bg-slate-200 dark:bg-slate-700 rounded-full" />
                      <div className="h-4 w-1/2 bg-slate-100 dark:bg-slate-800 rounded-full" />
                   </div>
                   <div className="grid grid-cols-1 gap-4 pt-6">
                      <div className="h-32 bg-slate-50 dark:bg-slate-900 rounded-[2rem] border border-border/50" />
                      <div className="h-12 bg-slate-50 dark:bg-slate-900 rounded-xl flex items-center px-4">
                         <div className="h-2 w-full bg-slate-200 dark:bg-slate-800 rounded-full" />
                      </div>
                   </div>
                </div>

                {/* Popular Tag */}
                {tmpl.popular && (
                  <div className="absolute top-6 right-6 px-4 py-1.5 rounded-full bg-secondary text-white text-[10px] font-black uppercase tracking-widest shadow-lg z-20">
                    Most Popular
                  </div>
                )}

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-secondary/90 opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-[2px] flex items-center justify-center p-8">
                   <div className="text-center">
                    <div className="h-16 w-16 rounded-full bg-white flex items-center justify-center text-primary mx-auto mb-6 shadow-2xl scale-75 group-hover:scale-100 transition-transform duration-500">
                        <Check size={32} strokeWidth={3} />
                    </div>
                    <p className="text-white font-black text-xl uppercase tracking-[0.2em]">Use Template</p>
                   </div>
                </div>
              </div>
              <p className="text-center font-black text-sm uppercase tracking-[0.3em] text-foreground/40 group-hover:text-primary transition-colors">{tmpl.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
