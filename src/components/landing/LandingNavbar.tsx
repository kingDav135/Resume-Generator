'use client';

import Link from 'next/link';

export function LandingNavbar() {
  return (
    <header className="py-8 lg:py-10">
      <div className="container mx-auto flex items-center justify-between px-6 lg:px-8">
        <Link href="/" className="text-xl font-bold">ResumeFlow</Link>
        <nav className="space-x-6 lg:space-x-8">
          <Link href="#features" className="text-sm">Features</Link>
          <Link href="#templates" className="text-sm">Templates</Link>
          <Link href="/builder" className="text-sm">Builder</Link>
        </nav>
      </div>
    </header>
  );
}
