import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/utils/utils';

interface NavLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  active?: boolean;
}

export const NavLink = ({ children, className, active, ...props }: NavLinkProps) => {
  return (
    <a 
      className={cn(
        "font-sans font-medium text-brand-brown hover:text-brand-terracotta transition-colors text-base cursor-pointer",
        active && "text-brand-terracotta font-bold", 
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
};