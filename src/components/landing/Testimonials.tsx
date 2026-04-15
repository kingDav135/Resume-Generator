'use client';

import { motion } from 'framer-motion';

const TESTIMONIALS = [
  {
    name: 'Sarah Jenkins',
    role: 'Product Designer',
    content: 'A masterpiece of minimalism. The builder stays out of your way and lets your content speak.',
    avatar: 'SJ'
  },
  {
    name: 'Michael Chen',
    role: 'Staff Engineer',
    content: 'The most technical and efficient builder I have used. Structural integrity is clearly the priority.',
    avatar: 'MC'
  },
  {
    name: 'Elena Rodriguez',
    role: 'Marketing Lead',
    content: 'Elevates the standard of what a professional tool should feel like. Pure utility, pure design.',
    avatar: 'ER'
  }
];

export function Testimonials() {
  return (
    <section className="py-32 bg-background border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {TESTIMONIALS.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col group"
            >
              <p className="text-xl md:text-2xl font-black tracking-tight text-foreground/80 mb-12 leading-tight">
                &quot;{t.content}&quot;
              </p>

              <div className="mt-auto flex items-center gap-4 pt-8 border-t border-border/30">
                <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary text-[10px] font-black">
                  {t.avatar}
                </div>
                <div>
                  <h4 className="font-black text-[10px] uppercase tracking-widest leading-none mb-1">{t.name}</h4>
                  <p className="text-[10px] font-medium text-foreground/20 uppercase tracking-wider">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
