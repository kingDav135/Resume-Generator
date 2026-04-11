'use client';

import { FormSection } from '@/components/builder/FormSection';
import { PreviewSection } from '@/components/builder/PreviewSection';
import { useEffect, useState } from 'react';
import { useResumeStore } from '@/store/useResumeStore';

export default function Home() {
  const { data } = useResumeStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Sync dark mode class
    if (data.theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [data.theme]);

  if (!mounted) return null;

  return (
    <div className="flex flex-col lg:flex-row h-[calc(100vh-64px)] overflow-hidden">
      {/* Form / Left Side */}
      <div className="w-full lg:w-1/3 xl:w-1/4 h-full overflow-hidden">
        <FormSection />
      </div>

      {/* Preview / Right Side */}
      <div className="w-full lg:w-2/3 xl:w-3/4 h-full">
        <PreviewSection />
      </div>
    </div>
  );
}
