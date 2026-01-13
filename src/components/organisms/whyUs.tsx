import { ShieldIcon } from '../atoms/icons/shieldIcon';
import { UserGroupIcon } from '../atoms/icons/userGroupIcon';
import { StarIcon } from '../atoms/icons/starIcon';
import { SpotlightCard } from '../atoms/spotlightCard';
import { Reveal } from '../atoms/reveal';

export const WhyUs = () => {
  const features = [
    {
      icon: <ShieldIcon className="w-12 h-12 text-brand-terracotta" />,
      title: "Seguridad Primero",
      description: "Protocolos internacionales y equipo certificado WFR para cuidarte en cada paso."
    },
    {
      icon: <UserGroupIcon className="w-12 h-12 text-brand-terracotta" />,
      title: "Guías Locales",
      description: "Expertos que conocen cada secreto de la montaña y su historia."
    },
    {
      icon: <StarIcon className="w-12 h-12 text-brand-terracotta" />,
      title: "Experiencias Únicas",
      description: "Diseñamos aventuras a medida, lejos de las multitudes y el turismo masivo."
    }
  ];

  return (
    <section className="py-24 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl text-brand-brown font-bold mb-4">
            ¿Por qué elegir <span className="text-brand-terracotta">Ascend Mza</span>?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Reveal
              key={index}
              delay={`animate-delay-${index * 400}`}
              // 1. IMPORTANTE: Agregamos className="h-full" aquí para que la animación no colapse la altura
              className="h-full"
            >
              <SpotlightCard className="p-8 h-full flex flex-col items-center text-center shadow-md hover:shadow-xl transition-all duration-300">
                <div
                  key={index}
                  
                  className="bg-white p-8 rounded-2xl hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center h-full w-full"
                >
                  <div className="mb-6 p-4 bg-brand-bg rounded-full transition-transform group-hover:scale-110 duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="font-display text-2xl text-brand-brown font-bold mb-3">
                    {feature.title}
                  </h3>
                  <p className="font-sans text-brand-brown-light leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};