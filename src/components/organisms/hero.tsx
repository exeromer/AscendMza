import { Button } from '../atoms/button';
import { LocationIcon } from '../atoms/icons/locationIcon';
import { LocationPointIcon } from '../atoms/icons/locationPointIcon';
import { getWhatsAppUrl, getReservationMessage } from '../../utils/wpp';
import { useLanguage } from '@/context/languageContext';
import { useScrollNav } from '@/utils/useScrollNav';

export const Hero = () => {
  const { t } = useLanguage();
  const scrollNav = useScrollNav();

  return (
    <section id="inicio" className="relative w-full h-screen overflow-hidden">

      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/fondoHero.png"
      >
        <source src="/fondoHero.mp4" type="video/mp4" />
        Tu navegador no soporta el tag de video.
      </video>

      {/* 1. OVERLAY */}
      <div className="absolute top-0 left-0 w-full h-full bg-[#00000057]"></div>

      {/* 2. CONTENIDO */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
          {t('hero.title.prefix')} <br />
          <span className="text-brand-terracotta">
            {t('hero.title.highlight')}
          </span>
        </h1>

        <p className="font-sans text-gray-200 text-lg md:text-2xl max-w-3xl mb-10 font-light drop-shadow-md animate-fade-up animate-delay-300 animate-duration-1000">
          {t('hero.subtitle')}
        </p>

        <div className="flex flex-col sm:flex-row gap-6 animate-fade-up animate-delay-700 animate-duration-1000">
          <Button variant="primary" className="text-lg px-8 py-3 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all"
            onClick={() => window.open(getWhatsAppUrl(getReservationMessage()), '_blank')}
          >
            <LocationPointIcon className="w-5 h-5" />
            {t('hero.cta')}
          </Button>
          <Button
            variant="outline"
            className="text-lg px-8 py-3 border-brand-bg text-brand-bg hover:bg-brand-bg hover:text-brand-brown flex items-center gap-2"
            onClick={() => scrollNav('experiencias')}
          >
            <LocationIcon className="w-5 h-5" />
            {t('hero.cta2')}
          </Button>
        </div>

      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce animate-infinite animate-duration-2000">
        <svg className="w-10 h-10 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>

    </section>
  );
};