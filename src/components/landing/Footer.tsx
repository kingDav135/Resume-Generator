'use client';

import { FileText, MessageCircle, Code2, Users, Mail } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="py-20 border-t border-border bg-card/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1 space-y-6">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-purple text-white shadow-soft">
                <FileText size={20} />
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-purple">
                Creava Resume
              </span>
            </div>
            <p className="text-sm text-foreground/50 leading-relaxed font-medium">
              Empowering job seekers with premium design and data-driven resume building tools.
            </p>
            <div className="flex items-center gap-4 text-foreground/40">
              <MessageCircle size={18} className="hover:text-primary cursor-pointer transition-colors" />
              <Code2 size={18} className="hover:text-primary cursor-pointer transition-colors" />
              <Users size={18} className="hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-foreground/40">Product</h4>
            <ul className="space-y-4 text-sm font-medium text-foreground/60">
              <li><Link href="/builder" className="hover:text-primary transition-colors">Builder</Link></li>
              <li><Link href="#templates" className="hover:text-primary transition-colors">Templates</Link></li>
              <li><Link href="#features" className="hover:text-primary transition-colors">Features</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Examples</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-foreground/40">Company</h4>
            <ul className="space-y-4 text-sm font-medium text-foreground/60">
              <li><Link href="#" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-foreground/40">Newsletter</h4>
            <p className="text-xs text-foreground/50 mb-4 leading-relaxed">
              Join 5,000+ professionals receiving career tips.
            </p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="flex-1 bg-background border border-border rounded-xl px-4 py-2 text-xs focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              />
              <button className="bg-primary text-white p-2 rounded-xl hover:bg-primary/90 transition-all">
                <Mail size={16} />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-black uppercase tracking-widest text-foreground/30">
          <p>© 2026 Creava Design Labs. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Built with Next.js 15</span>
            <span>Privacy</span>
            <span>Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
