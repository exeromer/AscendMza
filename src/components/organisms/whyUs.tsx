import { ShieldIcon } from '../atoms/icons/shieldIcon';
import { UserGroupIcon } from '../atoms/icons/userGroupIcon';
import { StarIcon } from '../atoms/icons/starIcon';
import { SpotlightCard } from '../atoms/spotlightCard';
import { Reveal } from '../atoms/reveal';
import { useLanguage } from '@/context/languageContext';

export const WhyUs = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: <ShieldIcon className="w-12 h-12 text-brand-terracotta" />,
      title: t('why.safety.title'),
      description: t('why.safety.desc')
    },
    {
      icon: <UserGroupIcon className="w-12 h-12 text-brand-terracotta" />,
      title: t('why.guides.title'),
      description: t('why.guides.desc')
    },
    {
      icon: <StarIcon className="w-12 h-12 text-brand-terracotta" />,
      title: t('why.unique.title'),
      description: t('why.unique.desc')
    }
  ];

  return (
    <section className="py-24 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl text-brand-brown font-bold mb-4">
            {t('why.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Reveal
              key={index}
              delay={`animate-delay-${index * 400}`}
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