import { useEffect, useRef, useState } from 'react';
import { ActivityCard } from '../molecules/activityCard';
import { ArrowLeftIcon } from '../atoms/icons/arrowLeftIcon';
import { ArrowRightIcon } from '../atoms/icons/arrowRightIcon';
import { activitiesData } from '@/data/activityData';
import { Reveal } from '../atoms/reveal';
import { cn } from '@/utils/utils';
import { useLanguage } from '@/context/languageContext';

export const Experiences = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [activeCategory, setActiveCategory] = useState<'Trekking' | 'Escalada'>('Trekking');
    const { language, t } = useLanguage();

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
                            {t('exp.title.prefix')} <span className="text-brand-terracotta">{t('exp.title.highlight')}</span>
                        </h2>
                        <p className="font-sans text-brand-text-gray text-lg max-w-2xl mx-auto mb-8">
                            {t('exp.subtitle')}
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
                                {t('exp.tab.trekking')}
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
                                {t('exp.tab.climbing')}
                            </button>
                        </div>
                    </div>
                </Reveal>

                <div className="relative group/slider">

                    {/* BOTÓN IZQUIERDA (Oculto en móvil, visible en md) */}
                           <button
                        onClick={() => scroll('left')}
                        className="absolute left-0 md:left-2 lg:-left-4 xl:-left-12 2xl:-left-20 top-1/2 -translate-y-1/2 z-50 bg-white p-2 sm:p-2.5 md:p-3 rounded-full shadow-lg text-brand-brown hover:text-brand-terracotta hover:bg-gray-50 transition-all border border-gray-100 hidden md:flex items-center justify-center cursor-pointer hover:scale-110"
                    >
                        <ArrowLeftIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                    </button>

                    {/* BOTÓN DERECHA (Oculto en móvil) */}
                    <button
                        onClick={() => scroll('right')}
                        className="absolute right-0 md:right-2 lg:-right-4 xl:-right-12 2xl:-right-20 top-1/2 -translate-y-1/2 z-50 bg-white p-2 sm:p-2.5 md:p-3 rounded-full shadow-lg text-brand-brown hover:text-brand-terracotta hover:bg-gray-50 transition-all border border-gray-100 hidden md:flex items-center justify-center cursor-pointer hover:scale-110"
                    >
                        <ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
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
                                    title={activity.title[language]}
                                    imageSrc={activity.images[0]} 
                                    duration={activity.duration[language]}
                                    difficulty={activity.difficulty[language]}
                                    season={activity.season[language]}
                                />
                            </div>
                        ))}
                    </div>


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