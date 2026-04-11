'use client';

import { useResumeStore } from '@/store/useResumeStore';
import { Button } from '@/components/ui/Button';
import { Moon, Sun, Download, FileText, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';

import { calculateScore } from '@/lib/scoring-utils';
import { exportToPDF } from '@/lib/pdf-utils';

export function Navbar() {
  const { data, setTheme } = useResumeStore();
  const [mounted, setMounted] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  
  const isBuilder = pathname === '/builder';
  const { score } = calculateScore(data);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleDownload = async () => {
    setIsExporting(true);
    await exportToPDF('resume-content', data.basicInfo.name || 'My');
    setIsExporting(false);
  };

  const toggleTheme = () => {
    const newTheme = data.theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  if (!mounted) return null;

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-8">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-purple text-white shadow-soft">
            <FileText size={24} />
          </div>
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-purple">
            Creava Resume
          </span>
        </Link>

        <div className="flex items-center gap-4">
          {isBuilder ? (
            <>
              <div className="hidden md:flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20">
                <span className="text-xs font-semibold text-accent uppercase tracking-wider">Score</span>
                <div className="h-2 w-24 rounded-full bg-accent/20">
                  <div 
                    className="h-full rounded-full bg-accent transition-all duration-500" 
                    style={{ width: `${score}%` }}
                  />
                </div>
                <span className="text-sm font-bold text-accent">{score}</span>
              </div>

              <Button 
                variant="ghost" 
                size="icon" 
                onClick={toggleTheme}
                className="rounded-full"
              >
                {data.theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
              </Button>

              <Button 
                variant="primary" 
                className="gap-2 group"
                onClick={handleDownload}
                disabled={isExporting}
              >
                <Download size={18} className={isExporting ? "animate-bounce" : "group-hover:translate-y-0.5 transition-transform"} />
                <span className="hidden sm:inline">{isExporting ? 'Exporting...' : 'Download PDF'}</span>
              </Button>
            </>
          ) : (
            <>
              <nav className="hidden md:flex items-center gap-8 mr-4">
                <Link href="#features" className="text-sm font-medium hover:text-primary transition-colors">Features</Link>
                <Link href="#templates" className="text-sm font-medium hover:text-primary transition-colors">Templates</Link>
                <Link href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">Pricing</Link>
              </nav>
              
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={toggleTheme}
                className="rounded-full"
              >
                {data.theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
              </Button>

              <Button 
                variant="primary" 
                className="gap-2 group hidden sm:flex"
                onClick={() => router.push('/builder')}
              >
                Get Started
                <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
              </Button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
