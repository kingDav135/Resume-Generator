import { ReactNode, ButtonHTMLAttributes } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'accent';
  size?: 'sm' | 'md' | 'lg' | 'icon';
  children: ReactNode;
}

export function Button({ 
  variant = 'primary', 
  size = 'md', 
  className, 
  children, 
  ...props 
}: ButtonProps) {
  const variants = {
    primary: 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-soft',
    secondary: 'bg-secondary text-white hover:bg-secondary/90 shadow-soft',
    outline: 'border border-border bg-transparent hover:bg-accent/10',
    ghost: 'hover:bg-accent/10',
    accent: 'bg-accent text-white hover:bg-accent/90 shadow-soft',
  };

  const sizes = {
    sm: 'h-9 px-3 text-sm',
    md: 'h-11 px-6 text-base',
    lg: 'h-13 px-8 text-lg',
    icon: 'h-10 w-10 flex items-center justify-center p-0',
  };

  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-2xl font-medium transition-all focus:outline-none focus:ring-2 focus:ring-primary/20 active:scale-95 disabled:opacity-50 disabled:pointer-events-none',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
