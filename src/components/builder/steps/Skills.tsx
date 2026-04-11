'use client';

import { useResumeStore } from '@/store/useResumeStore';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { X, Plus, Wrench } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Skills() {
  const { data, addSkill, removeSkill } = useResumeStore();
  const [newSkill, setNewSkill] = useState('');

  const handleAdd = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (newSkill.trim() && !data.skills.includes(newSkill.trim())) {
      addSkill(newSkill.trim());
      setNewSkill('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleAdd();
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-purple">Skills</h2>
        <p className="text-foreground/60">Add keywords that highlight your expertise.</p>
      </div>

      <div className="space-y-6">
        <div className="flex gap-2">
          <Input
            placeholder="e.g. React, TypeScript, Figma..."
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1"
          />
          <Button variant="outline" size="icon" onClick={handleAdd} className="rounded-2xl">
            <Plus size={20} />
          </Button>
        </div>

        <div className="flex flex-wrap gap-2 min-h-[100px] p-6 border-2 border-dashed border-border rounded-3xl bg-card/30">
          <AnimatePresence>
            {data.skills.length === 0 && (
              <div className="w-full flex flex-col items-center justify-center text-foreground/40 py-4">
                <Wrench size={24} className="mb-2 opacity-20" />
                <p className="text-sm">No skills added yet.</p>
              </div>
            )}
            {data.skills.map((skill) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium group"
              >
                <span>{skill}</span>
                <button
                  onClick={() => removeSkill(skill)}
                  className="hover:text-accent transition-colors"
                >
                  <X size={14} />
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="bg-accent/5 p-4 rounded-2xl border border-accent/10">
           <p className="text-xs text-accent/80 leading-relaxed font-medium">
             💡 <span className="underline">Pro Tip:</span> Group your skills by category (e.g. Languages, Frontend, Tools) for better readability in some templates.
           </p>
        </div>
      </div>
    </div>
  );
}
