'use client';

import { useResumeStore } from '@/store/useResumeStore';
import { motion } from 'framer-motion';
import { Layout, Check, Palette } from 'lucide-react';

const TEMPLATES = [
  { id: 'modern', name: 'Modern', description: 'Clean and readable with a touch of purple.', color: 'bg-primary' },
  { id: 'minimal', name: 'Minimal', description: 'Focus on essentials with lots of whitespace.', color: 'bg-slate-200' },
  { id: 'professional', name: 'Professional', description: 'Traditional layout for corporate roles.', color: 'bg-blue-600' },
  { id: 'creative', name: 'Creative', description: 'Stand out with bold accents and patterns.', color: 'bg-accent' },
  { id: 'sidebar', name: 'Sidebar', description: 'Efficient layout with a dedicated sidebar.', color: 'bg-slate-800' },
  { id: 'centered', name: 'Centered', description: 'Elegant and symmetrical design.', color: 'bg-indigo-500' },
  { id: 'ats', name: 'ATS Ready', description: 'Highly optimized for automated systems.', color: 'bg-zinc-700' },
  { id: 'compact', name: 'Compact', description: 'Maximum info density for senior roles.', color: 'bg-emerald-600' },
  { id: 'elegant', name: 'Elegant', description: 'Premium feel with serif typography.', color: 'bg-amber-600' },
  { id: 'bold', name: 'Bold', description: 'High contrast for a strong impression.', color: 'bg-black' },
];

export function TemplateSelector() {
  const { data, setTemplate } = useResumeStore();

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-purple">Template Selection</h2>
        <p className="text-foreground/60">Choose a design that best fits your professional identity.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {TEMPLATES.map((tmpl) => (
          <motion.div
            key={tmpl.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setTemplate(tmpl.id)}
            className={`cursor-pointer group relative overflow-hidden rounded-3xl border-2 transition-all ${
              data.templateId === tmpl.id 
                ? 'border-primary bg-primary/5' 
                : 'border-border hover:border-primary/20 bg-card'
            }`}
          >
            {data.templateId === tmpl.id && (
              <div className="absolute top-4 right-4 z-10 h-6 w-6 rounded-full bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/20">
                <Check size={14} strokeWidth={3} />
              </div>
            )}
            
            <div className="p-6">
              <div className="flex items-center gap-4 mb-3">
                <div className={`h-12 w-12 rounded-2xl ${tmpl.color} flex items-center justify-center text-white shadow-soft transition-transform group-hover:rotate-6`}>
                  <Layout size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-foreground">{tmpl.name}</h3>
                  <p className="text-xs text-foreground/40 font-medium">{tmpl.description}</p>
                </div>
              </div>
              
              <div className="mt-4 aspect-video rounded-xl bg-slate-100 dark:bg-slate-800 overflow-hidden relative border border-border/50">
                 {/* Placeholder for template thumbnail */}
                 <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity">
                    <Palette size={48} />
                 </div>
                 
                 {/* Visual skeleton */}
                 <div className="p-4 space-y-2">
                    <div className="h-2 w-1/3 bg-slate-200 dark:bg-slate-700 rounded-full" />
                    <div className="h-1 w-full bg-slate-200 dark:bg-slate-700 rounded-full" />
                    <div className="flex gap-2">
                      <div className="h-1 w-1/4 bg-slate-200 dark:bg-slate-700 rounded-full" />
                      <div className="h-1 w-1/4 bg-slate-200 dark:bg-slate-700 rounded-full" />
                    </div>
                 </div>

                 {data.templateId === tmpl.id && (
                    <motion.div 
                      layoutId="selected-overlay"
                      className="absolute inset-0 bg-primary/10 backdrop-blur-[1px]"
                    />
                 )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
