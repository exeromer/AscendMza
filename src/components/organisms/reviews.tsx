import { useInView } from '@/utils/useInView';
import { StarIcon } from '../atoms/icons/starIcon';
import { cn } from '@/utils/utils';
import { useLanguage } from '@/context/languageContext';
import { useRef } from 'react';
import { ArrowLeftIcon } from '../atoms/icons/arrowLeftIcon';   
import { ArrowRightIcon } from '../atoms/icons/arrowRightIcon';

export const Reviews = () => {
    const [ref, isInView] = useInView({ threshold: 0.2, triggerOnce: true });
    const { t } = useLanguage();
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const reviews = [
        {
            id: 1,
            name: "Tomás Garcia",
            role: "Cerro Camello",
            rating: 5,
            text: "Una experiencia inolvidable. Los guías fueron súper profesionales y la comida en el campamento base excelente.",
        },
        {
            id: 2,
            name: "Maria González",
            role: "Cerro Bayo",
            rating: 4,
            text: "El paisaje es increíble, pero lo mejor fue la calidez del grupo humano. Volveré seguro.",
        },
        {
            id: 3,
            name: "Carlos Ábrego",
            role: "Vias Multi Largo",
            rating: 4,
            text: "Dura exigencia física pero vale totalmente la pena. Ascend se encargó de toda la logística impecablemente.",
        },
        {
            id: 4,
            name: "Sarah",
            role: "Escalada Mono Largo",
            rating: 5,
            text: "I had never climbed on real rock before and felt very safe. The gear is top notch. Will definitely come back for more!"
        },
        {
            id: 5,
            name: "André",
            role: "Trekking Cascada",
            rating: 5,
            text: "Uma conexão única com a natureza. Mendoza é linda e a Ascend torna tudo fácil e seguro. Altamente recomendado."
        }
    ];
    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const cardWidth = container.firstElementChild?.clientWidth || 300;
            const scrollAmount = cardWidth + 32; 
            direction === 'left' 
                ? container.scrollBy({ left: -scrollAmount, behavior: 'smooth' })
                : container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <section id="reviews" className="scroll-mt-24 py-24 px-4 bg-brand-brown text-white relative overflow-hidden">

            {/* Fondo decorativo */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-brand-terracotta/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                
                {/* Título con referencia para activar animación */}
                <div ref={ref} className="text-center mb-14">
                    <h2 className="font-display text-4xl md:text-5xl font-bold">
                        {t('reviews.title.prefix')} <span className="text-brand-terracotta">{t('reviews.title.highlight')}</span>
                    </h2>
                </div>

                {/* --- SLIDER CONTAINER --- */}
                <div className="relative group/slider">
                    
                    {/* Botón Izquierda */}
                    <button
                        onClick={() => scroll('left')}
                        className="absolute left-0 sm:left-1 md:left-2 lg:-left-12 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm p-2 sm:p-2.5 md:p-3 rounded-full shadow-lg text-white hover:bg-brand-terracotta transition-all border border-white/10 hidden md:flex hover:scale-110"
                    >
                        <ArrowLeftIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                    </button>

                    {/* Botón Derecha */}
                    <button
                        onClick={() => scroll('right')}
                        className="absolute right-0 sm:right-1 md:right-2 lg:-right-12 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm p-2 sm:p-2.5 md:p-3 rounded-full shadow-lg text-white hover:bg-brand-terracotta transition-all border border-white/10 hidden md:flex hover:scale-110"
                    >
                        <ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                    </button>

                    {/* SCROLL AREA */}
                    <div 
                        ref={scrollContainerRef}
                        className="flex gap-8 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide px-4 md:px-4"
                        style={{ scrollBehavior: 'smooth' }}
                    >
                        {reviews.map((review, reviewIndex) => (
                            <div
                                key={review.id}
                                className="shrink-0 snap-proximity w-[85%] md:w-87.5 lg:w-96 flex"
                            >
                                <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-brand-terracotta/30 transition-all duration-300 flex flex-col h-full text-center group w-full">
                                    
                                    {/* Estrellas Dinámicas */}
                                    <div className="flex justify-center gap-1 mb-6 text-brand-gold">
                                        {[...Array(5)].map((_, starIndex) => (
                                            <div
                                                key={starIndex}
                                                className={cn(
                                                    "transition-opacity duration-300",
                                                    isInView ? "animate-jump-in animate-fill-both" : "opacity-0",
                                                    starIndex < review.rating ? "text-brand-gold" : "text-white/20"
                                                )}
                                                style={{
                                                    animationDelay: `${(reviewIndex * 100) + (starIndex * 100)}ms`,
                                                    animationDuration: '600ms'
                                                }}
                                            >
                                                <StarIcon className="w-5 h-5" fill={starIndex < review.rating ? "currentColor" : "none"} />
                                            </div>
                                        ))}
                                    </div>

                                    {/* Texto Reseña */}
                                    <p className="font-sans italic mb-8 text-gray-300 text-lg leading-relaxed grow">
                                        "{review.text}"
                                    </p>

                                    {/* Autor */}
                                    <div className="pt-6 border-t border-white/10">
                                        <p className="font-display font-bold text-lg tracking-wide text-white group-hover:text-brand-terracotta transition-colors">
                                            {review.name}
                                        </p>
                                        <p className="font-sans text-sm text-brand-gold/80 uppercase font-medium mt-1">
                                            {review.role}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Indicadores móviles (Puntitos) */}
                    <div className="flex justify-center md:hidden gap-2 mt-4">
                        {reviews.map((_, index) => (
                            <div key={index} className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};
