'use client';

import { motion } from 'framer-motion';
import { Shield, Cpu, BarChart3, Globe, Code2 } from 'lucide-react';

const FEATURES = [
  {
    icon: <BarChart3 className="text-primary" />,
    title: 'Atomic Scoring Engine',
    description: 'Proprietary algorithms analyze 50+ data points for maximum ATS compatibility.',
    className: 'md:col-span-2 md:row-span-1',
    value: '99.9%',
  },
  {
    icon: <Cpu className="text-accent" />,
    title: 'Instant Compute',
    description: 'Sub-second rendering of complex PDF structures.',
    className: 'md:col-span-1 md:row-span-1',
    value: '< 100ms',
  },
  {
    icon: <Globe className="text-primary" />,
    title: 'Global Standards',
    description: 'Templates optimized for US, EU, and Asian markets.',
    className: 'md:col-span-1 md:row-span-1',
  },
  {
    icon: <Code2 className="text-accent" />,
    title: 'Dynamic Source',
    description: 'Export as JSON, PDF, or Markdown formats.',
    className: 'md:col-span-1 md:row-span-1',
  },
  {
    icon: <Shield className="text-primary" />,
    title: 'Zero Trust Data',
    description: 'Biometric-grade security with purely local storage.',
    className: 'md:col-span-1 md:row-span-1',
  },
];

export function Features() {
  return (
    <section id="features" className="py-32 relative overflow-hidden bg-black">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-primary font-black text-[10px] uppercase tracking-[0.4em] mb-4"
            >
              System Capabilities
            </motion.div>
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase italic leading-[0.9]">
              Technological <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Superiority.</span>
            </h2>
          </div>
          <p className="text-white/30 font-medium text-lg max-w-sm">
            We rebuilt the resume from the ground up using modern engineering principles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {FEATURES.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`glow-border p-10 rounded-3xl group overflow-hidden ${feature.className}`}
            >
              <div className="relative z-10 h-full flex flex-col">
                <div className="flex justify-between items-start mb-12">
                  <div className="h-12 w-12 rounded-2xl bg-white/5 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  {feature.value && (
                    <span className="text-2xl font-black font-mono text-white/10 group-hover:text-primary transition-colors">
                      {feature.value}
                    </span>
                  )}
                </div>
                <div className="mt-auto">
                  <h3 className="font-black text-xs uppercase tracking-[0.3em] mb-3 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-white/40 text-sm font-medium leading-snug">
                    {feature.description}
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shimmer" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
