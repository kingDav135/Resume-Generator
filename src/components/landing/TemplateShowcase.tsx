'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { landingTemplatePreviews } from './previewData';
import { TemplateDirectionPreview } from './PreviewMocks';

export function TemplateShowcase() {
  const router = useRouter();

  return (
    <section id="templates" className="bg-background py-32 lg:py-40">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mb-16 flex flex-col gap-6 lg:mb-20 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Visualize the format</p>
            <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.03em] md:text-5xl">
              Switch the same content across polished layout directions.
            </h2>
          </div>
          <p className="max-w-lg text-lg leading-8 text-foreground/68">
            Inspired by the reference&apos;s large product cards, these previews feel more like premium format blocks than a
            small carousel of templates.
          </p>
        </div>

        <div className="grid gap-6 xl:grid-cols-3">
          {landingTemplatePreviews.map((layout, index) => (
            <motion.div
              key={layout.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
              className="group overflow-hidden rounded-[2rem] border border-border/60 bg-white/55 shadow-soft"
            >
              <div className={`relative h-[27rem] bg-gradient-to-br ${layout.accent} p-6 text-white`}>
                <div className="rounded-[1.6rem] bg-white/16 p-5 backdrop-blur-sm">
                  <div className="mb-5 flex items-center justify-between">
                    <div>
                      <p className="text-[0.65rem] font-bold uppercase tracking-[0.28em] text-white/65">Preview</p>
                      <p className="mt-2 text-sm font-semibold text-white/90">Same resume, different visual voice</p>
                    </div>
                    <div className="rounded-full border border-white/30 px-3 py-1 text-xs font-semibold">
                      {layout.name}
                    </div>
                  </div>

                  <div className="h-[21rem] overflow-hidden rounded-[1.25rem] border border-white/20 bg-white/95 shadow-[0_24px_50px_-30px_rgba(15,23,42,0.65)]">
                    <TemplateDirectionPreview variant={layout.id} />
                  </div>
                </div>
              </div>

              <div className="space-y-4 p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">{layout.name}</h3>
                  <span className="text-sm text-foreground/50">Format {index + 1}</span>
                </div>
                <p className="text-sm leading-7 text-foreground/65">
                  Keep the same resume data while changing the visual voice to match the role you are applying for.
                </p>
                <Button
                  variant="outline"
                  onClick={() => router.push('/builder')}
                  className="border-border/70 bg-transparent group-hover:bg-foreground/5"
                >
                  Use this direction <ArrowRight size={16} className="ml-2" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
