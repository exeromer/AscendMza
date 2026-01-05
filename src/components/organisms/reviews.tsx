import { useInView } from '@/utils/useInView';
import { StarIcon } from '../atoms/icons/starIcon';
import { cn } from '@/utils/utils';

export const Reviews = () => {
    const [ref, isInView] = useInView({ threshold: 0.2, triggerOnce: true });

    const reviews = [
        {
            id: 1,
            name: "Juan Pérez",
            role: "Trekking Aconcagua",
            text: "Una experiencia inolvidable. Los guías fueron súper profesionales y la comida en el campamento base excelente.",
        },
        {
            id: 2,
            name: "Maria González",
            role: "Valle de las Lágrimas",
            text: "El paisaje es increíble, pero lo mejor fue la calidez del grupo humano. Volveré seguro.",
        },
        {
            id: 3,
            name: "Carlos Ruiz",
            role: "Cruce de los Andes",
            text: "Dura exigencia física pero vale totalmente la pena. Ascend Mza se encargó de toda la logística impecablemente.",
        }
    ];

    return (
        <section id="reviews"className="scroll-mt-24 py-16 px-4 bg-brand-brown text-white relative overflow-hidden">

            <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <h2 className="font-display text-5xl text-center font-bold mb-14">
                    Lo que dicen nuestros <span className="text-brand-terracotta">Aventureros</span>
                </h2>

                <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review) => (
                        <div
                            key={review.id}
                            className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors flex flex-col h-full text-center group"
                        >
                            {/* Estrellas centradas */}
                            <div className="flex justify-center gap-1 mb-6 text-brand-gold">
                                {[...Array(5)].map((_, i) => (
                                    <div
                                        key={i}
                                        className={cn(
                                            "transition-opacity duration-300",
                                            isInView ? "animate-jump-in animate-fill-both" : "opacity-0"
                                        )}
                                        // Lógica de Sincronización:
                                        style={{
                                            animationDelay: `${i * 250}ms`,
                                            animationDuration: '600ms'
                                        }}
                                    >
                                        <StarIcon className="w-5 h-5" fill="currentColor" />
                                    </div>
                                ))}
                            </div>
                            <p className="font-sans italic mb-6 text-gray-300 text-lg leading-relaxed grow">
                                "{review.text}"
                            </p>
                            <div className="pt-6 border-t border-white/10">
                                <p className="font-display font-bold text-lg tracking-wide">{review.name}</p>
                                <p className="font-sans text-sm text-brand-gold uppercase font-medium">{review.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};