'use client';

import { useResumeStore } from '@/store/useResumeStore';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Plus, Trash2, GraduationCap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Education() {
  const { data, addEducation, updateEducation, removeEducation } = useResumeStore();

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-purple">Education</h2>
          <p className="text-foreground/60">Share your academic background and certificates.</p>
        </div>
        <Button variant="outline" size="sm" onClick={addEducation} className="rounded-full gap-2">
          <Plus size={16} /> Add Education
        </Button>
      </div>

      <div className="space-y-6">
        {data.education.length === 0 && (
          <div className="p-12 border-2 border-dashed border-border rounded-3xl flex flex-col items-center justify-center text-center bg-card/50">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
              <GraduationCap size={24} />
            </div>
            <p className="font-medium text-foreground/60">No education entries added.</p>
          </div>
        )}

        <AnimatePresence>
          {data.education.map((edu) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="p-6 rounded-3xl border border-border bg-card space-y-4"
            >
              <div className="flex justify-between items-start">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
                  <Input
                    label="School / University"
                    value={edu.school}
                    onChange={(e) => updateEducation(edu.id, { school: e.target.value })}
                    placeholder="e.g. Stanford University"
                  />
                  <Input
                    label="Degree / Field of Study"
                    value={edu.degree}
                    onChange={(e) => updateEducation(edu.id, { degree: e.target.value })}
                    placeholder="e.g. B.S. in Computer Science"
                  />
                  <Input
                    label="Duration"
                    value={edu.duration}
                    onChange={(e) => updateEducation(edu.id, { duration: e.target.value })}
                    placeholder="e.g. 2016 - 2020"
                  />
                </div>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => removeEducation(edu.id)}
                  className="text-foreground/20 hover:text-red-500 rounded-lg ml-4"
                >
                  <Trash2 size={18} />
                </Button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
