import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/utils/utils'; 
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'outline' | 'ghost';
  className?: string;
}

export const Button = ({ 
  children, 
  variant = 'primary', 
  className, 
  ...props 
}: ButtonProps) => {
  //Estilo General
  const baseStyles = "font-display inline-flex items-center justify-center rounded-md transition-colors uppercase tracking-wider text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
  
  // Estilos específicos
  const variants = {
    primary: "bg-brand-terracotta text-white hover:bg-brand-brown focus:ring-brand-terracotta",
    outline: "border-2 border-brand-terracotta text-brand-terracotta hover:bg-brand-terracotta hover:text-white",
    ghost: "text-brand-brown hover:text-brand-terracotta hover:bg-brand-brown/5"
  };

  // Tamaños
  const sizeStyles = "px-6 py-2";

  return (
    <button 
      className={cn(baseStyles, variants[variant], sizeStyles, className)} 
      {...props}
    >
      {children}
    </button>
  );
};