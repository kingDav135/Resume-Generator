"use client";

import { motion } from 'framer-motion';
import { SectionReorderPreview } from './PreviewMocks';

const CONTENT_BLOCKS = ['Summary', 'Experience', 'Projects', 'Skills', 'Education', 'Certifications'];

export function LivePreviewDemo() {
  return (
    <section className="bg-background py-32 lg:py-40">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Dynamic content</p>
            <h2 className="max-w-lg text-4xl font-black leading-tight tracking-[-0.03em] md:text-5xl">
              Build richer resume sections without making the page feel cluttered.
            </h2>
            <p className="max-w-lg text-lg leading-8 text-foreground/68">
              One thing the reference gets right is how it turns features into clear product blocks. This section does
              that for resume content, showing how each piece of the document can stay organized and easy to edit.
            </p>

            <div className="grid gap-3 sm:grid-cols-2">
              {CONTENT_BLOCKS.map((block) => (
                <div
                  key={block}
                  className="rounded-[1.4rem] border border-border/60 bg-white/55 px-4 py-4 text-sm font-medium shadow-soft"
                >
                  {block}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative flex items-center justify-center"
          >
            <SectionReorderPreview />

            <div className="absolute -top-5 right-6 rounded-full border border-primary/15 bg-white/90 px-4 py-2 text-sm font-medium text-primary shadow-soft">
              Reorder sections instantly
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
