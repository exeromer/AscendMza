import { Link } from 'react-router-dom';
import { Button } from '../atoms/button';
import { ClockIcon } from '../atoms/icons/clockIcon';
import { DiffIcon } from '../atoms/icons/diffIcon';
import { CalendarIcon } from '../atoms/icons/calendarIcon';
import { MapIcon } from '../atoms/icons/mapIcon';
import { cn } from '@/utils/utils';
import { useLanguage } from '../../context/languageContext';

interface ActivityCardProps {
  title: string;
  imageSrc?: string;
  duration: string;
  slug: string;
  difficulty: string;
  season: string;
  price?: string;
}

export const ActivityCard = ({ title, imageSrc, duration, slug, difficulty, season }: ActivityCardProps) => {
  const hasImage = imageSrc && imageSrc.trim() !== '';
  const { t } = useLanguage();

  return (
    <Link
      to={`/experiencia/${slug}`}
      className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-brand-brown/10 flex flex-col h-full w-full cursor-pointer"
    >

      <div className="group cursor-pointer bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-brand-brown/10 flex flex-col h-full w-full">

        {/* 1. ZONA DE IMAGEN  */}
        <div className="relative w-full aspect-4/3 overflow-hidden bg-gray-100 shrink-0">
          {hasImage ? (
            <>
              <img
                src={imageSrc}
                alt={title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
              {/* Fallback oculto por si falla la carga */}
              <div className="hidden absolute inset-0 flex-col items-center justify-center bg-brand-brown/5">
                <MapIcon className="w-12 h-12 text-brand-brown/20 mb-2" />
              </div>
            </>
          ) : (
            /* Placeholder visible por defecto */
            <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center bg-brand-brown/5 group-hover:bg-brand-brown/10 transition-colors">
              <MapIcon className="w-12 h-12 text-brand-brown/20 mb-2" />
              <span className="text-xs font-bold text-brand-brown/30 uppercase tracking-widest">Ascend</span>
            </div>
          )}
        </div>

        {/* 2. CONTENIDO */}
        <div className="p-6 flex flex-col grow justify-between">
          <h3 className="font-display text-2xl text-brand-brown font-bold mb-4 group-hover:text-brand-terracotta transition-colors line-clamp-2">
            {title}
          </h3>

          <div className="space-y-3 mb-6 grow">
            <div className="flex items-center text-brand-brown-light">
              <ClockIcon className="w-5 h-5 mr-3 text-brand-green shrink-0" />
              <span className="font-sans text-sm font-medium">{duration}</span>
            </div>
            <div className="flex items-center text-brand-brown-light">
              <DiffIcon className="w-5 h-5 mr-3 text-brand-green shrink-0" />
              <span className="font-sans text-sm font-medium">Dificultad: {difficulty}</span>
            </div>
            <div className="flex items-center text-brand-brown-light">
              <CalendarIcon className="w-5 h-5 mr-3 text-brand-green shrink-0" />
              <span className="font-sans text-sm font-medium">{season}</span>
            </div>
          </div>

          <div className="w-full mt-auto">
            <Button
              variant="outline"
              className={cn(
                "w-full justify-center border-brand-terracotta text-brand-terracotta pointer-events-none",
                "group-hover:bg-brand-terracotta group-hover:text-white transition-all duration-300"
              )}
            >
              {t('exp.card.btn')}
            </Button>
          </div>
        </div>
      </div>

    </Link>
  );
};
