'use client';

import { useResumeStore } from '@/store/useResumeStore';
import { calculateScore } from '@/lib/scoring-utils';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertCircle, Lightbulb } from 'lucide-react';

export function ResumeScore() {
  const { data } = useResumeStore();
  const { score, suggestions } = calculateScore(data);

  return (
    <div className="bg-primary/5 border border-primary/10 rounded-2xl p-4 space-y-3">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <div className="p-1.5 bg-primary/10 rounded-lg text-primary">
            <Lightbulb size={16} />
          </div>
          <span className="text-xs font-bold text-foreground/80 uppercase tracking-wider">Score Analysis</span>
        </div>
        <span className={`text-sm font-black ${score > 70 ? 'text-green-500' : 'text-primary'}`}>
          {score}/100
        </span>
      </div>

      <div className="space-y-2">
        <AnimatePresence mode="popLayout">
          {suggestions.map((suggestion, index) => (
            <motion.div
              key={suggestion}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start gap-2 text-[11px] leading-relaxed text-foreground/50 font-medium"
            >
              <div className="mt-0.5 shrink-0 text-accent">
                <AlertCircle size={10} strokeWidth={3} />
              </div>
              <span>{suggestion}</span>
            </motion.div>
          ))}
        </AnimatePresence>
        
        {suggestions.length === 0 && (
          <p className="text-[11px] text-green-500 font-bold flex items-center gap-1.5 px-1">
             Perfect! Your resume is highly competitive.
          </p>
        )}
      </div>
    </div>
  );
}
