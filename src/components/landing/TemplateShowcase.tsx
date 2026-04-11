'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { useRouter } from 'next/navigation';
import { Check } from 'lucide-react';

const TEMPLATES = [
  { id: 'modern', name: 'Modern', color: 'bg-primary' },
  { id: 'minimal', name: 'Minimal', color: 'bg-slate-400' },
  { id: 'professional', name: 'Professional', color: 'bg-slate-800' },
  { id: 'creative', name: 'Creative', color: 'bg-accent' },
  { id: 'sidebar', name: 'Sidebar', color: 'bg-indigo-600' },
  { id: 'bold', name: 'Impactful', color: 'bg-black' },
];

export function TemplateShowcase() {
  const router = useRouter();

  return (
    <section id="templates" className="py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-xl text-left">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-4 uppercase">
               Choose your <br />
               <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Winning Style.</span>
            </h2>
            <p className="text-foreground/60 font-medium">
               From startup to corporate, we have the perfect template for your next move.
            </p>
          </div>
          <Button 
             variant="outline" 
             className="rounded-full px-8"
             onClick={() => router.push('/builder')}
          >
             Select a template
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {TEMPLATES.map((tmpl, index) => (
            <motion.div
              key={tmpl.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
              onClick={() => router.push('/builder')}
            >
              <div className="aspect-[3/4] rounded-[2rem] bg-card border border-border overflow-hidden relative mb-4 shadow-sm group-hover:shadow-2xl transition-all shadow-primary/5">
                {/* Mock Template Visualization */}
                <div className={`absolute top-0 left-0 w-full h-1/4 ${tmpl.color} opacity-40`} />
                <div className="p-6 space-y-4 relative z-10">
                   <div className="h-4 w-1/2 bg-slate-200 dark:bg-slate-700 rounded-full" />
                   <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full" />
                   <div className="h-2 w-3/4 bg-slate-100 dark:bg-slate-800 rounded-full" />
                   <div className="grid grid-cols-2 gap-2 pt-4">
                      <div className="h-10 bg-slate-50 dark:bg-slate-900 rounded-xl" />
                      <div className="h-10 bg-slate-50 dark:bg-slate-900 rounded-xl" />
                   </div>
                </div>
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                   <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center text-primary">
                      <Check size={24} strokeWidth={3} />
                   </div>
                </div>
              </div>
              <p className="text-center font-bold text-sm uppercase tracking-widest text-foreground/80">{tmpl.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
