'use client';

import { useResumeStore } from '@/store/useResumeStore';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Plus, Trash2, Code2, Link as LinkIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Projects() {
  const { data, addProject, updateProject, removeProject } = useResumeStore();

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-purple">Side Projects</h2>
          <p className="text-foreground/60">Showcase your personal work and contributions.</p>
        </div>
        <Button variant="outline" size="sm" onClick={addProject} className="rounded-full gap-2">
          <Plus size={16} /> Add Project
        </Button>
      </div>

      <div className="space-y-6">
        {data.projects.length === 0 && (
          <div className="p-12 border-2 border-dashed border-border rounded-3xl flex flex-col items-center justify-center text-center bg-card/50">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
              <Code2 size={24} />
            </div>
            <p className="font-medium text-foreground/60">No projects added yet.</p>
          </div>
        )}

        <AnimatePresence>
          {data.projects.map((proj) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="p-6 rounded-3xl border border-border bg-card space-y-4 shadow-sm"
            >
              <div className="flex justify-between items-start gap-4">
                <div className="flex-1 space-y-4">
                  <Input
                    label="Project Name"
                    value={proj.name}
                    onChange={(e) => updateProject(proj.id, { name: e.target.value })}
                    placeholder="e.g. Open Source Library X"
                  />
                  <Input
                    label="Project Link (Optional)"
                    value={proj.link}
                    onChange={(e) => updateProject(proj.id, { link: e.target.value })}
                    placeholder="e.g. https://github.com/..."
                  />
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground/80 ml-1">Project Description</label>
                    <textarea
                      className="w-full h-24 rounded-2xl border border-border bg-card px-4 py-3 text-base transition-colors placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      placeholder="Briefly describe what you built and the tools used..."
                      value={proj.description}
                      onChange={(e) => updateProject(proj.id, { description: e.target.value })}
                    />
                  </div>
                </div>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => removeProject(proj.id)}
                  className="text-foreground/20 hover:text-red-500 rounded-lg mt-8"
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
