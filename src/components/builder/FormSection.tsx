'use client';

import { useResumeStore } from '@/store/useResumeStore';
import { Button } from '@/components/ui/Button';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, CheckCircle2 } from 'lucide-react';
import { BasicInfo } from './steps/BasicInfo';
import { Experience } from './steps/Experience';
import { Education } from './steps/Education';
import { Skills } from './steps/Skills';
import { Projects } from './steps/Projects';
import { Summary } from './steps/Summary';
import { TemplateSelector } from './steps/TemplateSelector';
import { ResumeScore } from './ResumeScore';

const STEPS = [
  { id: 1, title: 'Basic Info' },
  { id: 2, title: 'Experience' },
  { id: 3, title: 'Education' },
  { id: 4, title: 'Skills' },
  { id: 5, title: 'Projects' },
  { id: 6, title: 'Summary' },
  { id: 7, title: 'Template' },
  { id: 8, title: 'Review' },
];

export function FormSection() {
  const { currentStep, nextStep, prevStep } = useResumeStore();

  return (
    <div className="flex flex-col h-full bg-card/50 backdrop-blur-sm border-r border-border">
      {/* Progress Indicator */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-semibold text-foreground/60 uppercase tracking-wider">
            Step {currentStep} of {STEPS.length}
          </span>
          <span className="text-sm font-bold text-primary">
            {Math.round((currentStep / STEPS.length) * 100)}% Complete
          </span>
        </div>
        <div className="h-2 w-full rounded-full bg-border overflow-hidden">
          <motion.div 
            className="h-full bg-gradient-purple" 
            initial={{ width: 0 }}
            animate={{ width: `${(currentStep / STEPS.length) * 100}%` }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          />
        </div>
      </div>

      {/* Step Content */}
      <div className="flex-1 overflow-y-auto p-6 lg:p-10 scrollbar-thin">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="min-h-[400px]"
          >
            {currentStep === 1 && <BasicInfo />}
            {currentStep === 2 && <Experience />}
            {currentStep === 3 && <Education />}
            {currentStep === 4 && <Skills />}
            {currentStep === 5 && <Projects />}
            {currentStep === 6 && <Summary />}
            {currentStep === 7 && <TemplateSelector />}
            {currentStep === 8 && (
               <div className="space-y-6">
                  <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-purple">Final Review</h2>
                  <p className="text-foreground/60">Your resume is ready! Check the preview on the right and download your PDF.</p>
                  
                  <div className="p-12 border-2 border-dashed border-border rounded-3xl flex flex-col items-center justify-center text-center bg-card/50">
                     <div className="h-16 w-16 rounded-3xl bg-green-500/10 flex items-center justify-center text-green-500 mb-4 shadow-sm shadow-green-500/10">
                       <CheckCircle2 size={32} />
                     </div>
                     <h4 className="text-lg font-bold mb-2">Everything looks great!</h4>
                     <p className="text-sm text-foreground/40 max-w-xs mx-auto">
                        You've completed all sections. Use the download button in the header to get your PDF.
                     </p>
                  </div>
               </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Footer */}
      <div className="p-6 border-t border-border bg-card/80 backdrop-blur-sm space-y-4">
        <ResumeScore />
        <div className="flex items-center justify-between gap-4">
          <Button 
            variant="outline" 
            onClick={prevStep}
            disabled={currentStep === 1}
            className="flex-1 sm:flex-none"
          >
            <ChevronLeft className="mr-2 h-4 w-4" /> Back
          </Button>
          <Button 
            variant="primary" 
            onClick={nextStep}
            className="flex-1 sm:flex-none"
          >
            {currentStep === STEPS.length ? 'Finish' : 'Next'} <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
