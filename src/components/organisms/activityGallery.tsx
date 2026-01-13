import { useState } from 'react';
import type { MouseEvent } from 'react';
import { cn } from '@/utils/utils';

interface ActivityGalleryProps {
  images: string[];
}

export const ActivityGallery = ({ images }: ActivityGalleryProps) => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Lógica para el grid lateral inteligente
  const sideImages = images.slice(1, 5);
  const sideCount = sideImages.length;
  
  const getSideGridClass = (count: number) => {
    if (count <= 1) return "grid-cols-1 grid-rows-1";
    if (count === 2) return "grid-cols-1 grid-rows-2";
    return "grid-cols-2 grid-rows-2";
  };
  const sideGridClass = getSideGridClass(sideCount);

  // Handlers Lightbox
  const openLightbox = (index = 0) => {
    setCurrentImageIndex(index);
    setIsLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const nextImage = (e: MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      {/* --- HERO GRID --- */}
      <div className="pt-22 md:pt-22 w-full px-4 md:px-0">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 h-[50vh] md:h-[60vh] rounded-xl md:rounded-none overflow-hidden cursor-pointer relative animate-fade animate-duration-1000 animate-ease-out gap-1">
          
          {/* Imagen Principal */}
          <div className="relative md:col-span-2 h-full overflow-hidden group" onClick={() => openLightbox(0)}>
            <img
              src={images[0]}
              alt="Principal"
              className="absolute inset-0 w-full h-full object-cover brightness-95 group-hover:brightness-110 transition-all duration-900 hover:scale-105"
            />
          </div>

          {/* Imágenes Laterales */}
          <div className={cn("hidden md:grid md:col-span-2 h-full gap-1", sideGridClass)}>
            {sideImages.map((img, index) => (
              <div key={index} className="relative h-full w-full overflow-hidden group" onClick={() => openLightbox(index + 1)}>
                <img
                  src={img}
                  alt={`Detalle ${index}`}
                  className="absolute inset-0 w-full h-full object-cover brightness-95 group-hover:brightness-110 transition-all duration-700 hover:scale-105"
                />
              </div>
            ))}
          </div>

          {/* Botón Ver Fotos */}
          <button
            onClick={(e) => { e.stopPropagation(); openLightbox(0); }}
            className="absolute bottom-4 left-4 md:bottom-8 md:left-8 bg-white/90 backdrop-blur-sm text-brand-brown px-4 py-2 rounded-lg text-sm font-bold shadow-lg hover:scale-105 transition-transform flex items-center gap-2 z-20"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
            Ver fotos ({images.length})
          </button>
        </div>
      </div>

      {/* --- LIGHTBOX MODAL --- */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center animate-fade-in" onClick={closeLightbox}>
          <button className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2 z-50" onClick={closeLightbox}>
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
          
          <button className="absolute left-4 text-white/50 hover:text-white p-4 transition-colors hidden md:block z-50" onClick={prevImage}>
            <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
          </button>

          <img
            src={images[currentImageIndex]}
            alt={`Galería ${currentImageIndex + 1}`}
            className="max-h-[90vh] max-w-[90vw] object-contain shadow-2xl rounded-sm"
            onClick={(e) => e.stopPropagation()}
          />

          <button className="absolute right-4 text-white/50 hover:text-white p-4 transition-colors hidden md:block z-50" onClick={nextImage}>
            <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
          </button>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80 font-medium">
            {currentImageIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
};