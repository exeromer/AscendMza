import { Button } from '../atoms/button';
import { LocationIcon } from '../atoms/icons/locationIcon';
import {LocationPointIcon} from '../atoms/icons/locationPointIcon';

export const Hero = () => {
  return (
    <section id="inicio" className="relative w-full h-screen overflow-hidden">
      
      {/* 1. VIDEO DE FONDO */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline 
      >
        <source src="/fondoHero.mp4" type="video/mp4" />
        Tu navegador no soporta el tag de video.
      </video>

      {/* 2. OVERLAY (La capa oscura) */}
      <div className="absolute top-0 left-0 w-full h-full bg-[#00000057]"></div>

      {/* 3. CONTENIDO (Texto y Botones) */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-brand-bg mb-4 tracking-wide uppercase drop-shadow-lg">
          Pasión y <span className="text-brand-terracotta">Locura</span>
        </h1>
        
        <p className="font-sans text-gray-200 text-lg md:text-2xl max-w-3xl mb-10 font-light drop-shadow-md">
          Vive la experiencia de alta montaña en Mendoza con el chupete completamente INSIDE.
        </p>

        <div className="flex flex-col sm:flex-row gap-6">
          <Button variant="primary"             
          className="text-lg px-8 py-3 border-brand-bg text-brand-bg hover:bg-brand-bg hover:text-brand-brown flex items-center gap-2">
            <LocationPointIcon className="w-5 h-5" />
            Reservar Aventura
          </Button>
          
          <Button 
            variant="outline" 
            className="text-lg px-8 py-3 border-brand-bg text-brand-bg hover:bg-brand-bg hover:text-brand-brown flex items-center gap-2"
          >
            <LocationIcon className="w-5 h-5" />
            Conocer Rutas
          </Button>
        </div>

      </div>
      
      {/* 4. Flecha de scroll animado  */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <svg className="w-10 h-10 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>

    </section>
  );
};