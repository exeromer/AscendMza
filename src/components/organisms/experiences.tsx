import { useRef } from 'react';
import { ActivityCard } from '../molecules/activityCard';
import { ArrowLeftIcon } from '../atoms/icons/arrowLeftIcon';
import { ArrowRightIcon } from '../atoms/icons/arrowRightIcon';

export const Experiences = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const activities = [
        {
            id: 1,
            title: "Trekking Aconcagua",
            imageSrc: "/trekking.jpg",
            duration: "15 Días",
            difficulty: "Alta / Experto",
            season: "Noviembre - Marzo"
        },
        {
            id: 2,
            title: "Valle de las Lágrimas",
            imageSrc: "/valle.jpg",
            duration: "3 Días",
            difficulty: "Media",
            season: "Octubre - Abril"
        },
        {
            id: 3,
            title: "Cruce de los Andes",
            imageSrc: "/cruce.jpg",
            duration: "6 Días",
            difficulty: "Media / Alta",
            season: "Enero - Febrero"
        },
        {
            id: 4,
            title: "Cerro Arco Nocturno",
            imageSrc: "/arco.jpg",
            duration: "4 Horas",
            difficulty: "Baja",
            season: "Todo el año"
        },
        {
            id: 5,
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

            const currentScroll = container.scrollLeft;
            const maxScroll = container.scrollWidth - container.clientWidth;

            if (direction === 'left') {
                // Lógica Infinita izq
                if (currentScroll <= 0) {
                    container.scrollTo({ left: maxScroll, behavior: 'smooth' });
                } else {
                    container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
                }
            } else {
                // Lógica Infinita Der
                if (currentScroll >= maxScroll - 10) {
                    container.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
                }
            }
        }
    };

    return (
        <section id="experiencias" className="py-24 px-4 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto relative group/slider">

                {/* Encabezado */}
                <div className="text-center mb-12">
                    <h2 className="font-display text-4xl md:text-5xl text-brand-brown font-bold mb-4">
                        Nuestras <span className="text-brand-terracotta">Aventuras</span>
                    </h2>
                    <p className="font-sans text-brand-brown-light text-lg max-w-2xl mx-auto">
                        Seleccionamos las mejores rutas de Mendoza para desafiar tus pañales.
                    </p>
                </div>

                {/* --- CONTENEDOR CARRUSEL --- */}
                <div className="relative">

                    {/* Botón Izquierda */}
                    <button
                        onClick={() => scroll('left')}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-6 z-20 bg-white p-3 rounded-full shadow-lg text-brand-brown hover:text-brand-terracotta transition-all opacity-0 group-hover/slider:opacity-100 hidden md:flex items-center justify-center"
                        aria-label="Anterior"
                    >
                        <ArrowLeftIcon className="w-6 h-6" />
                    </button>

                    {/* Área de Scroll */}
                    <div
                        ref={scrollContainerRef}
                        className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide px-2"
                        style={{ scrollBehavior: 'smooth' }}
                    >
                        {activities.map((activity) => (
                            <div
                                key={activity.id}
                                className="shrink-0 snap-center w-[85%] md:w-[45%] lg:w-[30%]"
                            >
                                <ActivityCard
                                    title={activity.title}
                                    imageSrc={activity.imageSrc}
                                    duration={activity.duration}
                                    difficulty={activity.difficulty}
                                    season={activity.season}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Botón Derecha */}
                    <button
                        onClick={() => scroll('right')}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-6 z-20 bg-white p-3 rounded-full shadow-lg text-brand-brown hover:text-brand-terracotta transition-all opacity-0 group-hover/slider:opacity-100 hidden md:flex items-center justify-center"
                        aria-label="Siguiente"
                    >
                        <ArrowRightIcon className="w-6 h-6" />
                    </button>

                </div>

                {/* Indicadores móviles (puntos) opcionales */}
                <div className="flex justify-center md:hidden gap-2 mt-2">
                    {activities.map((_, index) => (
                        <div key={index} className="w-2 h-2 rounded-full bg-brand-brown/20"></div>
                    ))}
                </div>

            </div>
        </section>
    );
};