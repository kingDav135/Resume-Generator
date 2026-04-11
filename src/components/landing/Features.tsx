'use client';

import { motion } from 'framer-motion';
import { 
  FileText, 
  Layers, 
  BarChart3, 
  Download, 
  Smartphone, 
  Monitor, 
  Palette, 
  Clock 
} from 'lucide-react';

const FEATURES = [
  {
    icon: <Layers className="text-primary" />,
    title: '10+ Premium Templates',
    description: 'Beautifully crafted designs by industry experts. Modern, Creative, ATS-Ready, and more.'
  },
  {
    icon: <Monitor className="text-secondary" />,
    title: 'Real-time Live Preview',
    description: 'See your changes instantly as you type. No more constant page reloads or guessing.'
  },
  {
    icon: <BarChart3 className="text-accent" />,
    title: 'Smart Resume Scoring',
    description: 'Get actionable suggestions to improve your resume’s impact and pass recruiter screenings.'
  },
  {
    icon: <Download className="text-green-500" />,
    title: 'One-click PDF Export',
    description: 'Export high-quality, print-ready PDFs in seconds. Your formatting stays pixel-perfect.'
  },
  {
    icon: <Smartphone className="text-orange-500" />,
    title: 'Responsive Design',
    description: 'Build your resume on desktop or mobile. The interface adapts perfectly to any screen.'
  },
  {
    icon: <Clock className="text-blue-500" />,
    title: 'Auto-save Progress',
    description: 'Never lose your hard work. Data is automatically saved to your browser’s local storage.'
  }
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-card/30 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-4 italic uppercase">
             Powerful Features for <br />
             <span className="text-primary">Professional Result.</span>
          </h2>
          <p className="text-foreground/60 font-medium">
             Everything you need to build a world-class resume in minutes, not hours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-background border border-border/50 hover:border-primary/30 transition-all hover:shadow-xl hover:shadow-primary/5 group"
            >
              <div className="h-12 w-12 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-foreground/60 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
