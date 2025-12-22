import { useRef } from 'react';
import { ActivityCard } from '../molecules/activityCard';
import { ArrowLeftIcon } from '../atoms/icons/arrowLeftIcon';
import { ArrowRightIcon } from '../atoms/icons/arrowRightIcon';
import { Reveal } from '../atoms/reveal';

export const Experiences = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const activities = [
        {
            id: 1,
            slug: "cerro-banos",
            title: "Cerro Baños",
            imageSrc: "/trekking.jpg",
            duration: "8 Horas",
            difficulty: "Media",
            season: "Todo el año",
        },
        {
            id: 2,
            slug: "cerro-manos",
            title: "Cerro Manos",
            imageSrc: "/valle.jpg",
            duration: "6 Horas",
            difficulty: "Media – Baja",
            season: "Todo el año",
        },
        {
            id: 3,
            slug: "escalada-mono-largo",
            title: "Escalada Deportiva",
            imageSrc: "/cruce.jpg",
            duration: "6 a 8 Horas",
            difficulty: "Adaptable",
            season: "Todo el año",
        },
        {
            id: 4,
            slug: "cerro-arco-nocturno",
            title: "Cerro Arco Nocturno",
            imageSrc: "/arco.jpg",
            duration: "4 Horas",
            difficulty: "Baja",
            season: "Todo el año"
        },
        {
            id: 5,
            slug: "ruta-del-vino",
            title: "Ruta del Vino & Montaña",
            imageSrc: "/vino.jpg",
            duration: "1 Día",
            difficulty: "Baja",
            season: "Todo el año"
        }
    ];

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
                    <div className="text-center mb-12">
                        <h2 className="font-display text-4xl md:text-5xl text-brand-brown font-bold mb-4">
                            Nuestras <span className="text-brand-terracotta">Aventuras</span>
                        </h2>
                        <p className="font-sans text-brand-text-gray text-lg max-w-2xl mx-auto">
                            Seleccionamos las mejores rutas de Mendoza para desafiar tus límites.
                        </p>
                    </div>
                </Reveal>

                <div className="relative w-full">

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
                        {activities.map((activity, index) => (
                            <div
                                key={activity.id}
                                className="shrink-0 snap-center md:snap-start w-[85%] sm:w-[60%] md:w-[45%] lg:w-[31%] flex"
                            >
                                <Reveal
                                    className="w-full h-full"
                                    animation="animate-fade-down animate-ease-in"
                                    duration="animate-duration-1000"
                                    style={{ animationDelay: `${index * 150}ms` }}
                                >
                                    <ActivityCard
                                        slug={activity.slug}
                                        title={activity.title}
                                        imageSrc={activity.imageSrc}
                                        duration={activity.duration}
                                        difficulty={activity.difficulty}
                                        season={activity.season}
                                    />
                                </Reveal>
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
                    {activities.map((_, index) => (
                        <div key={index} className="w-2 h-2 rounded-full bg-brand-brown/20"></div>
                    ))}
                </div>

            </div>
        </section>
    );
};