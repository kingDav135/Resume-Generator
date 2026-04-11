'use client';

import { motion } from 'framer-motion';
import { 
  Layers, 
  BarChart3, 
  Download, 
  Smartphone, 
  ShieldCheck, 
  Zap,
  MousePointer2,
  Clock
} from 'lucide-react';

const FEATURES = [
  {
    icon: <BarChart3 className="text-secondary" />,
    title: 'Smart Scoring',
    description: 'Real-time AI-powered analysis to optimize your impact.',
    className: 'md:col-span-2 md:row-span-2 bg-gradient-to-br from-secondary/5 to-transparent',
    large: true
  },
  {
    icon: <Layers className="text-primary" />,
    title: '10+ Styles',
    description: 'Expert-crafted templates for every industry.',
    className: 'md:col-span-1 md:row-span-1',
  },
  {
    icon: <MousePointer2 className="text-accent" />,
    title: 'Live Preview',
    description: 'See changes instantly as you type.',
    className: 'md:col-span-1 md:row-span-1',
  },
  {
    icon: <Zap className="text-yellow-500" />,
    title: 'Instant Export',
    description: 'Pro-grade PDF in one click.',
    className: 'md:col-span-1 md:row-span-2 bg-gradient-to-t from-accent/5 to-transparent',
  },
  {
    icon: <Smartphone className="text-orange-500" />,
    title: 'Any Device',
    description: 'Build on your phone or desktop.',
    className: 'md:col-span-1 md:row-span-1',
  },
  {
    icon: <ShieldCheck className="text-green-500" />,
    title: 'Private & Secure',
    description: 'Your data never leaves your browser.',
    className: 'md:col-span-1 md:row-span-1',
  }
];

export function Features() {
  return (
    <section id="features" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black tracking-tighter mb-6 uppercase italic"
          >
            Engineered for <br />
            <span className="text-primary underline decoration-secondary decoration-4 underline-offset-8">Maximum Impact.</span>
          </motion.h2>
          <p className="text-foreground/50 font-medium text-lg leading-relaxed">
             We’ve combined cutting-edge design with powerful rules to help you land that interview.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[200px]">
          {FEATURES.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className={`p-8 rounded-[2.5rem] border border-border/50 glass relative group overflow-hidden ${feature.className}`}
            >
              <div className="h-full flex flex-col justify-between relative z-10">
                <div className={`h-14 w-14 rounded-2xl bg-slate-50 dark:bg-slate-800/50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform shadow-sm`}>
                  {feature.icon}
                </div>
                <div>
                  <h3 className={`font-black mb-2 tracking-tight ${feature.large ? 'text-2xl' : 'text-lg'}`}>
                    {feature.title}
                  </h3>
                  <p className="text-foreground/50 text-sm font-medium leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
              {/* Decorative Gradient Glow */}
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
