import type { CSSProperties, ReactNode } from 'react';
import { useInView } from '../../utils/useInView';
import { cn } from '@/utils/utils';

interface RevealProps {
  children: ReactNode;
  className?: string;
  animation?: string; 
  delay?: string;     
  duration?: string;  
  style?: CSSProperties;
}

export const Reveal = ({ 
  children, 
  className, 
  animation = 'animate-fade-up', 
  delay = 'animate-delay-0',
  duration = 'animate-duration-1000',
  style
}: RevealProps) => {
  
  // Hook con triggerOnce para que no desaparezca al subir
  const [ref, isInView] = useInView({ threshold: 0.5, triggerOnce: true });

  return (
    <div
      ref={ref}
      style={style}
      className={cn(
        "w-full opacity-0 transition-opacity", 
        className,
        isInView && `opacity-100 ${animation} ${delay} ${duration}`
      )}
    >
      {children}
    </div>
  );
};