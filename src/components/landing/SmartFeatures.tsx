'use client';

import { motion } from 'framer-motion';
import { Brain, Search, Target } from 'lucide-react';

const INSIGHTS = [
  {
    icon: <Brain className="text-primary" size={22} />,
    title: 'Smarter bullet guidance',
    description: 'Push vague responsibilities toward outcome-driven writing with stronger action verbs and clearer impact.',
  },
  {
    icon: <Search className="text-accent" size={22} />,
    title: 'Keyword awareness',
    description: 'Spot missing terms from the job description before your resume ever reaches a recruiter.',
  },
  {
    icon: <Target className="text-primary" size={22} />,
    title: 'Role-specific positioning',
    description: 'Adjust tone and emphasis so the same experience feels better aligned to each application.',
  },
];

export function SmartFeatures() {
  return (
    <section className="bg-gradient-to-br from-primary/6 via-background to-accent/6 py-32 lg:py-40">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent">Connect with opportunities</p>
            <h2 className="max-w-lg text-4xl font-black leading-tight tracking-[-0.03em] md:text-5xl">
              Turn your resume into a more targeted application tool.
            </h2>
            <p className="max-w-lg text-lg leading-8 text-foreground/68">
              The reference page leans heavily on business outcomes. Here, that same energy becomes candidate outcomes:
              clearer fit, faster tailoring, and fewer blind spots in your final resume.
            </p>

            <div className="space-y-5 pt-4">
              {INSIGHTS.map((item) => (
                <div key={item.title} className="flex gap-4 rounded-[1.5rem] border border-border/60 bg-white/50 p-5 backdrop-blur-sm">
                  <div className="mt-1 flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-foreground/[0.03]">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-foreground/65">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-[2.4rem] border border-border/50 bg-white/60 p-6 shadow-soft backdrop-blur-sm lg:p-8">
              <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="rounded-[1.7rem] bg-slate-950 p-6 text-white">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/45">Match analysis</p>
                    <div className="rounded-full bg-primary/20 px-3 py-1 text-xs font-semibold text-primary">
                      91%
                    </div>
                  </div>
                  <div className="mt-6 space-y-5">
                    <div>
                      <div className="mb-2 flex items-center justify-between text-sm text-white/70">
                        <span>Leadership language</span>
                        <span>Strong</span>
                      </div>
                      <div className="h-2 rounded-full bg-white/10">
                        <div className="h-2 w-[84%] rounded-full bg-primary" />
                      </div>
                    </div>
                    <div>
                      <div className="mb-2 flex items-center justify-between text-sm text-white/70">
                        <span>Role keywords</span>
                        <span>Needs 3 more</span>
                      </div>
                      <div className="h-2 rounded-full bg-white/10">
                        <div className="h-2 w-[72%] rounded-full bg-accent" />
                      </div>
                    </div>
                    <div className="rounded-[1.25rem] bg-white/6 p-4">
                      <p className="text-sm text-white/80">Suggested next edit</p>
                      <p className="mt-2 text-base font-medium">Add one quantified product launch result to your summary.</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-5">
                  <div className="rounded-[1.7rem] bg-primary/8 p-5">
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">Missing phrases</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {['Go-to-market', 'Cross-functional', 'Pipeline growth', 'Retention'].map((term) => (
                        <span key={term} className="rounded-full bg-white px-3 py-2 text-sm text-foreground/75 shadow-soft">
                          {term}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-[1.7rem] border border-border/70 bg-background p-5">
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-foreground/45">Recommended order</p>
                    <div className="mt-4 space-y-3">
                      {['Summary', 'Experience', 'Selected achievements', 'Skills'].map((item, index) => (
                        <div key={item} className="flex items-center justify-between rounded-2xl bg-foreground/[0.03] px-4 py-3">
                          <span className="text-sm font-medium">{item}</span>
                          <span className="text-xs text-foreground/45">0{index + 1}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
