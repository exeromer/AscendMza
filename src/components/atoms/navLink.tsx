import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import type { LinkProps } from 'react-router-dom';
import { cn } from '@/utils/utils';

interface NavLinkProps extends LinkProps {
  children: ReactNode;
  active?: boolean;
}

export const NavLink = ({ children, className, active, ...props }: NavLinkProps) => {
  return (
    <Link 
      className={cn(
        "font-sans font-medium text-brand-brown hover:text-brand-terracotta transition-colors text-base cursor-pointer",
        active && "text-brand-terracotta font-bold", 
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
};