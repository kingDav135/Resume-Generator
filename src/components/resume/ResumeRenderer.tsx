'use client';

import { useResumeStore } from '@/store/useResumeStore';
import { Modern } from './templates/Modern';
import { Minimal } from './templates/Minimal';
import { Professional } from './templates/Professional';
import { Creative } from './templates/Creative';
import { Sidebar } from './templates/Sidebar';
import { Centered } from './templates/Centered';
import { ATSReady } from './templates/ATSReady';
import { Compact } from './templates/Compact';
import { Elegant } from './templates/Elegant';
import { Bold } from './templates/Bold';
import { motion, AnimatePresence } from 'framer-motion';

export function ResumeRenderer() {
  const { data } = useResumeStore();

  const renderTemplate = () => {
    switch (data.templateId) {
      case 'modern': return <Modern data={data} />;
      case 'minimal': return <Minimal data={data} />;
      case 'professional': return <Professional data={data} />;
      case 'creative': return <Creative data={data} />;
      case 'sidebar': return <Sidebar data={data} />;
      case 'centered': return <Centered data={data} />;
      case 'ats': return <ATSReady data={data} />;
      case 'compact': return <Compact data={data} />;
      case 'elegant': return <Elegant data={data} />;
      case 'bold': return <Bold data={data} />;
      default: return <Modern data={data} />;
    }
  };

  return (
    <div className="w-full h-full min-h-[297mm]">
      <AnimatePresence mode="wait">
        <motion.div
          key={data.templateId}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="h-full"
        >
          {renderTemplate()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
