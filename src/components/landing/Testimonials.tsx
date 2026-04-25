'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';

const PATHS = [
  {
    name: 'Starter',
    audience: 'First resume',
    description: 'For students, recent graduates, and anyone building a clean first version fast.',
    features: ['Guided sections', 'Live preview', 'Professional templates'],
  },
  {
    name: 'Focused',
    audience: 'Active job search',
    description: 'For candidates tailoring applications, tightening bullets, and improving keyword coverage.',
    features: ['Role targeting', 'Resume score', 'Smarter writing suggestions'],
    featured: true,
  },
  {
    name: 'Polished',
    audience: 'Career upgrades',
    description: 'For professionals refining a premium resume across multiple roles and formats.',
    features: ['Template switching', 'Advanced section ordering', 'Cleaner final review flow'],
  },
];

export function Testimonials() {
  return (
    <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-32 lg:py-40">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center lg:mb-20"
        >
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent">Choose your flow</p>
          <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.03em] md:text-5xl">
            Pick the building rhythm that matches where you are.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-foreground/68">
            This section borrows the reference siteâ€™s plan-card energy, but turns it into guided resume paths instead
            of pricing tables.
          </p>
        </motion.div>

        <div className="grid gap-6 xl:grid-cols-3">
          {PATHS.map((path, index) => (
            <motion.div
              key={path.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`rounded-[2rem] border p-8 shadow-soft ${
                path.featured
                  ? 'border-primary/25 bg-gradient-to-br from-primary/[0.08] to-accent/[0.08]'
                  : 'border-border/60 bg-white/55'
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-foreground/45">{path.audience}</p>
                  <h3 className="mt-3 text-3xl font-black tracking-[-0.03em]">{path.name}</h3>
                </div>
                {path.featured ? (
                  <div className="rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-white">
                    Best fit
                  </div>
                ) : null}
              </div>

              <p className="mt-6 text-sm leading-7 text-foreground/68">{path.description}</p>

              <div className="mt-8 space-y-4">
                {path.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3 text-sm text-foreground/78">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-foreground/[0.05]">
                      <Check size={15} />
                    </div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/builder"
                className="mt-10 inline-flex items-center text-sm font-semibold text-primary transition-colors hover:text-accent"
              >
                Start this path <ArrowRight size={16} className="ml-2" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
