'use client';

import { motion } from 'framer-motion';
import { User, Palette, Download } from 'lucide-react';

const STEPS = [
  {
    icon: <User className="text-primary" size={40} />,
    title: 'Enter your details',
    description: 'Fill in your personal information, experience, education, and skills with our guided form.',
  },
  {
    icon: <Palette className="text-accent" size={40} />,
    title: 'Choose a template',
    description: 'Select from our collection of professional templates designed for different industries.',
  },
  {
    icon: <Download className="text-primary" size={40} />,
    title: 'Download your resume',
    description: 'Export your resume as a high-quality PDF and start applying to your dream jobs.',
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-gradient-to-br from-primary/5 to-accent/5 py-36 lg:py-40">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-20 max-w-3xl text-center lg:mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How it{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              works
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-8 text-foreground/70">
            Create a professional resume in just three simple steps.
          </p>
        </motion.div>

        <div className="relative mx-auto max-w-5xl">
          {/* Connector line */}
          <div className="hidden md:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary opacity-30"></div>

          <div className="grid gap-10 md:grid-cols-3 md:gap-14">
            {STEPS.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative px-2 text-center"
              >
                {/* Step number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm transition-all duration-300 group-hover:border-primary/30 group-hover:shadow-lg group-hover:shadow-primary/10">
                  {step.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
