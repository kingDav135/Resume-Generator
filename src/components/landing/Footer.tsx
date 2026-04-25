'use client';

import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-border/70 bg-background py-20 lg:py-24">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-r from-primary to-accent text-sm font-black text-white shadow-soft">
                RF
              </div>
              <div>
                <p className="text-lg font-black tracking-[-0.02em]">ResumeFlow</p>
                <p className="text-sm text-foreground/50">Build sharper resumes with less friction.</p>
              </div>
            </div>

            <p className="max-w-lg text-base leading-8 text-foreground/65">
              A guided resume experience with live preview, flexible sections, cleaner layout control, and a calmer path
              from first draft to final PDF.
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2">
            <div>
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-foreground/40">Navigate</p>
              <div className="space-y-3 text-sm text-foreground/68">
                <div><Link href="#features" className="transition-colors hover:text-primary">Features</Link></div>
                <div><Link href="#templates" className="transition-colors hover:text-primary">Templates</Link></div>
                <div><Link href="#how-it-works" className="transition-colors hover:text-primary">How it works</Link></div>
                <div><Link href="/builder" className="transition-colors hover:text-primary">Builder</Link></div>
              </div>
            </div>

            <div>
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-foreground/40">Product</p>
              <div className="space-y-3 text-sm text-foreground/68">
                <div>Live preview</div>
                <div>Resume scoring</div>
                <div>Template switching</div>
                <div>PDF export</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-border/70 pt-8 text-xs uppercase tracking-[0.24em] text-foreground/35 md:flex-row md:items-center md:justify-between">
          <p>Copyright 2026 ResumeFlow</p>
          <div className="flex gap-6">
            <span>Privacy</span>
            <span>Terms</span>
            <span>Next.js 16</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
