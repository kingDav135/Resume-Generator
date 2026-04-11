'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import Image from 'next/image';

const TESTIMONIALS = [
  {
    name: 'Sarah Jenkins',
    role: 'Product Designer at Meta',
    content: 'The progressive builder is a game changer. I finished my resume in 15 minutes and landed 3 interviews in the first week.',
    rating: 5,
    avatar: 'SJ'
  },
  {
    name: 'Michael Chen',
    role: 'Senior Software Engineer',
    content: 'Cleanest interface I’ve used. The smart scoring helped me identify exactly what was missing from my experience section.',
    rating: 5,
    avatar: 'MC'
  },
  {
    name: 'Elena Rodriguez',
    role: 'Marketing Director',
    content: 'The creative templates are stunning! Finally, a builder that understands modern design aesthetics. Highly recommended.',
    rating: 5,
    avatar: 'ER'
  }
];

export function Testimonials() {
  return (
    <section className="py-32 relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-xs font-black uppercase tracking-[0.2em] mb-6"
          >
            <Star size={14} fill="currentColor" />
            <span>Success Stories</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase italic">
            Trusted by <span className="text-secondary">Growth-Minded</span> Professionals.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-10 rounded-[2.5rem] glass border border-border/50 relative group"
            >
              <Quote className="absolute top-8 right-8 text-secondary/10 group-hover:text-secondary/20 transition-colors h-12 w-12" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={14} className="text-yellow-500 fill-yellow-500" />
                ))}
              </div>

              <p className="text-lg font-medium text-foreground/70 mb-8 leading-relaxed italic">
                "{t.content}"
              </p>

              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-black">
                  {t.avatar}
                </div>
                <div>
                  <h4 className="font-black text-sm uppercase tracking-wider">{t.name}</h4>
                  <p className="text-xs font-medium text-foreground/40">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Decorative Blur */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[120px] -z-10" />
    </section>
  );
}
