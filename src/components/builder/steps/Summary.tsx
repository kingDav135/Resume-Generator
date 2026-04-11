'use client';

import { useResumeStore } from '@/store/useResumeStore';
import { motion } from 'framer-motion';
import { Sparkles, MessageSquareQuote } from 'lucide-react';

export function Summary() {
  const { data, updateBasicInfo } = useResumeStore();

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    updateBasicInfo({ summary: e.target.value });
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-purple">Professional Summary</h2>
        <p className="text-foreground/60">Briefly describe your career goals and what makes you a great candidate.</p>
      </div>

      <div className="space-y-6">
        <div className="relative group">
          <div className="absolute -top-4 -right-4 p-2 bg-accent/10 rounded-full text-accent opacity-0 group-hover:opacity-100 transition-opacity">
            <Sparkles size={20} />
          </div>
          <textarea
            className="w-full h-64 rounded-3xl border border-border bg-card px-6 py-6 text-lg leading-relaxed transition-all placeholder:text-foreground/20 focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary scrollbar-thin shadow-sm"
            placeholder="e.g. Dedicated Software Engineer with 5+ years of experience in building scalable cloud solutions. Proven track record of optimizing performance and leading cross-functional teams..."
            value={data.basicInfo.summary}
            onChange={handleChange}
          />
          
          <div className="absolute bottom-6 right-6 flex items-center gap-2">
            <span className={`text-xs font-bold px-3 py-1 rounded-full ${
              data.basicInfo.summary.length < 100 ? 'bg-accent/10 text-accent' : 'bg-green-500/10 text-green-600'
            }`}>
              {data.basicInfo.summary.length} Characters
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-6 rounded-3xl bg-primary/5 border border-primary/10 flex gap-4 items-start">
            <div className="h-10 w-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
              <Sparkles size={20} />
            </div>
            <div>
              <h4 className="font-bold text-sm mb-1 text-primary">Be Concise</h4>
              <p className="text-xs text-foreground/60 leading-relaxed">
                Aim for 3-5 sentences that highlight your most relevant experience and skills.
              </p>
            </div>
          </div>
          <div className="p-6 rounded-3xl bg-secondary/5 border border-secondary/10 flex gap-4 items-start">
            <div className="h-10 w-10 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
              <MessageSquareQuote size={20} />
            </div>
            <div>
              <h4 className="font-bold text-sm mb-1 text-secondary">Tailor It</h4>
              <p className="text-xs text-foreground/60 leading-relaxed">
                Use keywords from the job description to pass Applicant Tracking Systems (ATS).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
