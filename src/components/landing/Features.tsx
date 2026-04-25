'use client';

import { motion } from 'framer-motion';
import { Brain, Eye, FileText, Layers3, Sparkles, WandSparkles } from 'lucide-react';

const MODULES = [
  {
    icon: <Layers3 className="text-primary" size={24} />,
    title: 'Adaptive sections',
    description: 'Switch between summary, projects, skills, education, and experience without losing structure.',
  },
  {
    icon: <Eye className="text-accent" size={24} />,
    title: 'Always-on preview',
    description: 'Watch the page shape itself while you write, edit, and reorder details.',
  },
  {
    icon: <Brain className="text-primary" size={24} />,
    title: 'Smarter writing cues',
    description: 'Get prompts that push your bullets toward clearer outcomes and stronger phrasing.',
  },
  {
    icon: <FileText className="text-accent" size={24} />,
    title: 'Export-ready formatting',
    description: 'Keep spacing, hierarchy, and polish intact when it is time to download your PDF.',
  },
  {
    icon: <WandSparkles className="text-primary" size={24} />,
    title: 'Template variation',
    description: 'Move between layout directions without restarting the whole document.',
  },
  {
    icon: <Sparkles className="text-accent" size={24} />,
    title: 'Cleaner final pass',
    description: 'Spot weak sections, missing details, and visual imbalance before you send applications.',
  },
];

export function Features() {
  return (
    <section id="features" className="bg-background py-32 lg:py-40">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Adaptive tools</p>
            <h2 className="max-w-md text-4xl font-black leading-tight tracking-[-0.03em] md:text-5xl">
              A modular builder that keeps evolving with your resume.
            </h2>
            <p className="max-w-md text-lg leading-8 text-foreground/68">
              The reference site leans on tool blocks and product modules, so this section does the same for ResumeFlow:
              flexible pieces, clearer hierarchy, and lots of visual breathing room.
            </p>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {MODULES.map((module, index) => (
              <motion.div
                key={module.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="rounded-[1.8rem] border border-border/60 bg-white/50 p-7 shadow-soft backdrop-blur-sm"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-foreground/[0.03]">
                  {module.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground">{module.title}</h3>
                <p className="mt-3 text-sm leading-7 text-foreground/65">{module.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
