'use client';

import { FormSection } from '@/components/builder/FormSection';
import { PreviewSection } from '@/components/builder/PreviewSection';
import { Navbar } from '@/components/builder/Navbar';
import { useEffect } from 'react';
import { useResumeStore } from '@/store/useResumeStore';

export default function Home() {
  const { data } = useResumeStore();

  useEffect(() => {
    // Sync dark mode class
    if (data.theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [data.theme]);

  return (
    <div className="flex h-full min-h-full flex-col overflow-hidden rounded-[1.5rem] border border-border bg-background">
      <Navbar />
      <div className="flex flex-col lg:flex-row flex-1 overflow-hidden">
        {/* Form / Left Side */}
        <div className="w-full lg:w-1/3 xl:w-1/4 h-full overflow-hidden">
          <FormSection />
        </div>

        {/* Preview / Right Side */}
        <div className="w-full lg:w-2/3 xl:w-3/4 h-full">
          <PreviewSection />
        </div>
      </div>
    </div>
  );
}
