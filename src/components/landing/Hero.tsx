'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Play } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { HeroPreviewPanel } from './PreviewMocks';

const HERO_BADGES = ['Live preview', 'ATS-aware writing', 'Template switching'];

export function Hero() {
  const router = useRouter();

  return (
    <section className="relative overflow-hidden pt-16 pb-24 lg:pt-20 lg:pb-32">
      <div className="absolute inset-0 -z-10 bg-background" />
      <div className="absolute top-0 left-[-8%] -z-10 h-72 w-72 rounded-full bg-primary/14 blur-[110px]" />
      <div className="absolute right-[-6%] bottom-10 -z-10 h-80 w-80 rounded-full bg-accent/10 blur-[130px]" />

      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl space-y-10"
          >
            <div className="inline-flex items-center rounded-full border border-primary/15 bg-primary/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] text-primary">
              Progressive Resume Builder
            </div>

            <div className="space-y-6">
              <h1 className="max-w-4xl text-5xl font-black leading-[0.94] tracking-[-0.04em] md:text-7xl lg:text-[5.75rem]">
                Build smarter.
                <br />
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Apply sharper.
                </span>
              </h1>
              <p className="max-w-xl text-lg leading-8 text-foreground/68 md:text-xl">
                ResumeFlow guides your writing, previews every change instantly, and helps you shape a cleaner resume
                without the usual guesswork.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {HERO_BADGES.map((badge) => (
                <div
                  key={badge}
                  className="rounded-full border border-border bg-white/60 px-4 py-2 text-sm font-medium text-foreground/70 backdrop-blur-sm"
                >
                  {badge}
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                variant="primary"
                size="lg"
                onClick={() => router.push('/builder')}
                className="border-none bg-gradient-to-r from-primary to-accent px-7 shadow-lg transition-all duration-300 hover:from-primary/90 hover:to-accent/90 hover:shadow-xl"
              >
                Start Building <ArrowRight size={18} className="ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => document.getElementById('templates')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-border/70 bg-white/40 px-7 hover:bg-foreground/5"
              >
                <Play size={18} className="mr-2" /> Explore the flow
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -top-6 left-8 rounded-full border border-primary/20 bg-white/80 px-4 py-2 text-sm font-medium text-primary shadow-soft backdrop-blur-sm">
              Resume score up to 92
            </div>

            <HeroPreviewPanel />

            <div className="absolute right-0 -bottom-5 rounded-full border border-accent/20 bg-white/80 px-4 py-2 text-sm font-medium text-accent shadow-soft backdrop-blur-sm">
              Tailored bullet suggestions
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
