import { Link } from 'react-router-dom';
import { Button } from '../atoms/button';
import { ClockIcon } from '../atoms/icons/clockIcon';
import { DiffIcon } from '../atoms/icons/diffIcon';
import { CalendarIcon } from '../atoms/icons/calendarIcon';

interface ActivityCardProps {
  title: string;
  imageSrc: string;
  duration: string;
  slug: string;
  difficulty: string;
  season: string;
  price?: string;
}

export const ActivityCard = ({ title, imageSrc, duration, slug, difficulty, season }: ActivityCardProps) => {
  return (
    <div className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-brand-brown/10 flex flex-col h-full">
      {/* 1. IMAGEN */}
      <div className="relative w-full aspect-4/3 overflow-hidden">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
      </div>

      {/* 2. CONTENIDO */}
      <div className="p-6 flex flex-col grow justify-between">

        {/* Título */}
        <h3 className="font-display text-2xl text-brand-brown font-bold mb-4 group-hover:text-brand-terracotta transition-colors">
          {title}
        </h3>

        {/* Detalles */}
        <div className="space-y-3 mb-6 grow">

          <div className="flex items-center text-brand-brown-light">
            <ClockIcon className="w-5 h-5 mr-3 text-brand-green" />
            <span className="font-sans text-sm font-medium">{duration}</span>
          </div>

          <div className="flex items-center text-brand-brown-light">
            <DiffIcon className="w-5 h-5 mr-3 text-brand-green" />
            <span className="font-sans text-sm font-medium">Dificultad: {difficulty}</span>
          </div>

          <div className="flex items-center text-brand-brown-light">
            <CalendarIcon className="w-5 h-5 mr-3 text-brand-green" />
            <span className="font-sans text-sm font-medium">{season}</span>
          </div>

        </div>

        {/* Botón (Full width) */}
        <Link to={`/experiencia/${slug}`} className="w-full mt-auto">
          <Button variant="outline" className="w-full justify-center border-brand-terracotta text-brand-terracotta hover:bg-brand-terracotta hover:text-white">
            Ver Detalles
          </Button>
        </Link>

      </div>
    </div>
  );
};