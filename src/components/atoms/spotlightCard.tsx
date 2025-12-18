import type { ReactNode, CSSProperties } from 'react';
import { useMousePosition } from '../../utils/useMousePosition';
import { cn } from '@/utils/utils';

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
  spotlightColor?: string; 
}

export const SpotlightCard = ({ children, className, spotlightColor = "rgba(214, 164, 74, 0.15)" }: SpotlightCardProps) => {
  const [ref, mouse] = useMousePosition();

  return (
    <div
      ref={ref}
      className={cn(
        "relative overflow-hidden rounded-2xl bg-white border border-gray-100 group",
        className
      )}
    >
      {/* Capa de luz que sigue al mouse */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100 z-0"
        style={{
          background: `radial-gradient(600px circle at ${mouse.x}px ${mouse.y}px, ${spotlightColor}, transparent 40%)`,
        } as CSSProperties}
      />
      
      {/* Contenido  */}
      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>
  );
};