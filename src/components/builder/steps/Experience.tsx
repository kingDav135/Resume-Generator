'use client';

import { useResumeStore } from '@/store/useResumeStore';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Plus, Trash2, ChevronDown, ChevronUp, Briefcase } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Experience() {
  const { data, addExperience, updateExperience, removeExperience } = useResumeStore();
  const [expandedId, setExpandedId] = useState<string | null>(
    data.experience.length > 0 ? data.experience[0].id : null
  );

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const handleAdd = () => {
    addExperience();
    setTimeout(() => {
      const last = data.experience[data.experience.length - 1];
      if (last) setExpandedId(last.id);
    }, 0);
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-purple">Work Experience</h2>
          <p className="text-foreground/60">Detail your professional journey and key achievements.</p>
        </div>
        <Button variant="outline" size="sm" onClick={handleAdd} className="rounded-full gap-2">
          <Plus size={16} /> Add Experience
        </Button>
      </div>

      <div className="space-y-4">
        {data.experience.length === 0 && (
          <div className="p-12 border-2 border-dashed border-border rounded-3xl flex flex-col items-center justify-center text-center bg-card/50">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
              <Briefcase size={24} />
            </div>
            <p className="font-medium text-foreground/60">No experience added yet.</p>
            <Button variant="ghost" size="sm" onClick={handleAdd} className="mt-2 text-primary">
              Add your first role
            </Button>
          </div>
        )}

        <AnimatePresence>
          {data.experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className={`rounded-3xl border border-border bg-card overflow-hidden transition-shadow ${
                expandedId === exp.id ? 'shadow-soft border-primary/30' : 'hover:border-primary/20'
              }`}
            >
              <div
                className="p-4 flex items-center justify-between cursor-pointer"
                onClick={() => toggleExpand(exp.id)}
              >
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">
                      {exp.role || 'New Role'} {exp.company ? `@ ${exp.company}` : ''}
                    </h3>
                    <p className="text-xs text-foreground/40 font-medium uppercase tracking-wider">
                      {exp.duration || 'Duration not set'}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={(e) => {
                      e.stopPropagation();
                      removeExperience(exp.id);
                    }}
                    className="text-foreground/20 hover:text-red-500 rounded-lg h-8 w-8"
                  >
                    <Trash2 size={16} />
                  </Button>
                  <div className="text-foreground/20">
                    {expandedId === exp.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </div>
                </div>
              </div>

              <AnimatePresence>
                {expandedId === exp.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 space-y-4 border-t border-border/50 bg-background/30">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Input
                          label="Company Name"
                          value={exp.company}
                          onChange={(e) => updateExperience(exp.id, { company: e.target.value })}
                          placeholder="e.g. Google"
                        />
                        <Input
                          label="Role / Position"
                          value={exp.role}
                          onChange={(e) => updateExperience(exp.id, { role: e.target.value })}
                          placeholder="e.g. Senior Frontend Engineer"
                        />
                        <Input
                          label="Duration"
                          value={exp.duration}
                          onChange={(e) => updateExperience(exp.id, { duration: e.target.value })}
                          placeholder="e.g. Jan 2021 - Present"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground/80 ml-1">Key Responsibilities & Achievements</label>
                        <textarea
                          className="w-full h-32 rounded-2xl border border-border bg-card px-4 py-3 text-base transition-colors placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                          placeholder={"- Led a team of 5 developers...\n- Reduced load time by 40%..."}
                          value={exp.description}
                          onChange={(e) => updateExperience(exp.id, { description: e.target.value })}
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {data.experience.length > 0 && (
        <Button variant="ghost" onClick={handleAdd} className="w-full border-2 border-dashed border-border rounded-3xl py-8 text-foreground/40 hover:text-primary hover:border-primary/40 transition-all">
          <Plus size={20} className="mr-2" /> Add another experience
        </Button>
      )}
    </div>
  );
}
