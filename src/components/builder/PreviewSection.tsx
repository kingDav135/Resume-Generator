'use client';

import { useResumeStore } from '@/store/useResumeStore';
import { motion } from 'framer-motion';
import { Printer, ZoomIn, ZoomOut, Maximize2 } from 'lucide-react';

export function PreviewSection() {
  const { data } = useResumeStore();

  return (
    <div className="flex flex-col h-full bg-slate-100 dark:bg-slate-900 overflow-hidden">
      {/* Preview Toolbar */}
      <div className="p-4 border-b border-border bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-foreground/60 px-3 py-1 rounded-full bg-white dark:bg-slate-700 shadow-sm border border-border">
            {data.templateId.charAt(0).toUpperCase() + data.templateId.slice(1)} Template
          </span>
        </div>
        
        <div className="flex items-center gap-1">
          <button className="h-9 w-9 flex items-center justify-center rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
            <ZoomOut size={18} />
          </button>
          <span className="text-xs font-medium px-2">100%</span>
          <button className="h-9 w-9 flex items-center justify-center rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
            <ZoomIn size={18} />
          </button>
          <div className="w-px h-4 bg-border mx-1" />
          <button className="h-9 w-9 flex items-center justify-center rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
             <Maximize2 size={16} />
          </button>
        </div>
      </div>

      {/* Resume Canvas Area */}
      <div className="flex-1 overflow-auto p-8 flex justify-center scrollbar-thin">
        <motion.div 
          layout
          className="bg-white shadow-2xl origin-top w-[210mm] min-h-[297mm] p-12 transition-all duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {/* Resume Content Placeholder */}
          <div className="h-full border border-dashed border-slate-200 rounded-lg flex flex-col items-center justify-center text-slate-400 p-24 text-center">
            <div className="h-16 w-16 bg-slate-50 rounded-full flex items-center justify-center mb-4">
              <Printer size={32} className="opacity-20" />
            </div>
            <h3 className="text-xl font-bold text-slate-600 mb-2">Resume Preview</h3>
            <p className="max-w-xs text-sm">
              Your resume will be rendered here in real-time. Start typing in the form to see updates!
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
