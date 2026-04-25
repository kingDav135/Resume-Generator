'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

export function FinalCTA() {
  const router = useRouter();

  return (
    <section className="py-32 lg:py-40">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-r from-primary via-primary to-accent p-10 text-white shadow-[0_35px_90px_-35px_rgba(124,58,237,0.55)] md:p-14 lg:p-16"
        >
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto]">
            <div className="max-w-3xl space-y-5">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/70">Build with more clarity</p>
              <h2 className="text-4xl font-black leading-tight tracking-[-0.03em] md:text-5xl">
                Open the builder and turn this inspiration into your actual resume.
              </h2>
              <p className="max-w-2xl text-lg leading-8 text-white/80">
                You now have the more editorial, spacious landing style you wanted. The next click should take you into
                the tool itself.
              </p>
            </div>

            <Button
              variant="secondary"
              size="lg"
              onClick={() => router.push('/builder')}
              className="border-none bg-white px-7 text-slate-950 hover:bg-white/90"
            >
              Open Resume Builder <ArrowRight size={18} className="ml-2" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
