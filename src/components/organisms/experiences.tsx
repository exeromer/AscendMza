import { useEffect, useRef, useState } from 'react';
import { ActivityCard } from '../molecules/activityCard';
import { ArrowLeftIcon } from '../atoms/icons/arrowLeftIcon';
import { ArrowRightIcon } from '../atoms/icons/arrowRightIcon';
import { activitiesData } from '@/data/activityData';
import { Reveal } from '../atoms/reveal';
import { cn } from '@/utils/utils';

export const Experiences = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [activeCategory, setActiveCategory] = useState<'Trekking' | 'Escalada'>('Trekking');

    // Filtramos las actividades según la categoría seleccionada
    const filteredActivities = activitiesData.filter(
        (activity) => activity.category === activeCategory
    );

    // Reseteamos el scroll al cambiar de categoría
    useEffect(() => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        }
    }, [activeCategory]);

    
    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const cardWidth = container.firstElementChild?.clientWidth || 300;
            const scrollAmount = cardWidth + 24;

            if (direction === 'left') {
                container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    };

    return (
        <section id="experiencias" className="py-24 px-4 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto relative group/slider">

                <Reveal>
                    <div className="text-center mb-10">
                        <h2 className="font-display text-4xl md:text-5xl text-brand-brown font-bold mb-4">
                            Nuestras <span className="text-brand-terracotta">Aventuras</span>
                        </h2>
                        <p className="font-sans text-brand-text-gray text-lg max-w-2xl mx-auto mb-8">
                            Seleccionamos las mejores rutas de Mendoza para desafiar tus límites.
                        </p>

                        {/* --- SELECTOR DE CATEGORÍA (TABS) --- */}
                        <div className="inline-flex bg-white p-1 rounded-xl shadow-sm border border-gray-100 mb-4">
                            <button
                                onClick={() => setActiveCategory('Trekking')}
                                className={cn(
                                    "cursor-pointer px-6 py-2 rounded-lg text-sm font-bold uppercase tracking-wide transition-all",
                                    activeCategory === 'Trekking'
                                        ? "bg-brand-brown text-white shadow-md"
                                        : "text-gray-500 hover:text-brand-brown hover:bg-gray-50"
                                )}
                            >
                                Trekking
                            </button>
                            <button
                                onClick={() => setActiveCategory('Escalada')}
                                className={cn(
                                    "cursor-pointer px-6 py-2 rounded-lg text-sm font-bold uppercase tracking-wide transition-all",
                                    activeCategory === 'Escalada'
                                        ? "bg-brand-brown text-white shadow-md"
                                        : "text-gray-500 hover:text-brand-brown hover:bg-gray-50"
                                )}
                            >
                                Escalada
                            </button>
                        </div>
                    </div>
                </Reveal>
                
                <div className="relative w-full min-h-[450px]:">

                    {/* BOTÓN IZQUIERDA (Oculto en móvil, visible en md) */}
                    <button
                        onClick={() => scroll('left')}
                        className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 z-50 bg-white p-3 rounded-full shadow-lg text-brand-brown hover:text-brand-terracotta transition-all border border-gray-100 hidden md:flex items-center justify-center cursor-pointer"
                    >
                        <ArrowLeftIcon className="w-6 h-6" />
                    </button>

                    {/* ÁREA DE SCROLL */}
                    <div
                        ref={scrollContainerRef}
                        className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide w-full justify-start scroll-px-4 px-4 md:px-0"
                        style={{ scrollBehavior: 'smooth' }}
                    >
                        {filteredActivities.map((activity) => (
                            <div
                                key={activity.id}
                                className="shrink-0 snap-center md:snap-start w-[85%] sm:w-[60%] md:w-[45%] lg:w-[31%] flex animate-fade animate-duration-500 animate-ease-out"
                            >
                                <ActivityCard
                                    slug={activity.slug}
                                    title={activity.title}
                                    imageSrc={activity.images[0]} // Usamos la primera imagen del array
                                    duration={activity.duration}
                                    difficulty={activity.difficulty}
                                    season={activity.season}
                                />
                            </div>
                        ))}
                    </div>

                    {/* BOTÓN DERECHA (Oculto en móvil) */}
                    <button
                        onClick={() => scroll('right')}
                        className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 z-50 bg-white p-3 rounded-full shadow-lg text-brand-brown hover:text-brand-terracotta transition-all border border-gray-100 hidden md:flex items-center justify-center cursor-pointer"
                    >
                        <ArrowRightIcon className="w-6 h-6" />
                    </button>

                </div>

                {/* Indicadores móviles*/}
                <div className="flex justify-center md:hidden gap-2 mt-2">
                    {filteredActivities.map((_, index) => (
                        <div key={index} className="w-2 h-2 rounded-full bg-brand-brown/20"></div>
                    ))}
                </div>

            </div>
        </section>
    );
};