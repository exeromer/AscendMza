import { Button } from '../atoms/button';
import { ClockIcon } from '../atoms/icons/clockIcon';
import { DiffIcon } from '../atoms/icons/diffIcon';
import { CalendarIcon } from '../atoms/icons/calendarIcon';

interface ActivityCardProps {
  title: string;
  imageSrc: string;
  duration: string;
  difficulty: string;
  season: string;
  price?: string;
}

export const ActivityCard = ({ title, imageSrc, duration, difficulty, season }: ActivityCardProps) => {
  return (
    <div className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-brand-brown/10 flex flex-col h-full">
      {/* 1. IMAGEN */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
      </div>

      {/* 2. CONTENIDO */}
      <div className="p-6 flex flex-col grow">

        {/* Título */}
        <h3 className="font-display text-2xl text-brand-brown font-bold mb-4 group-hover:text-brand-terracotta transition-colors">
          {title}
        </h3>

        {/* Detalles (Grid de 2 columnas para móvil, 1 para desktop si prefieres lista, aquí uso Flex wrap) */}
        <div className="space-y-3 mb-6 grow">

          <div className="flex items-center text-brand-brown-light">
            <ClockIcon className="w-5 h-5 mr-3 text-brand-terracotta" />
            <span className="font-sans text-sm font-medium">{duration}</span>
          </div>

          <div className="flex items-center text-brand-brown-light">
            <DiffIcon className="w-5 h-5 mr-3 text-brand-terracotta" />
            <span className="font-sans text-sm font-medium">Dificultad: {difficulty}</span>
          </div>

          <div className="flex items-center text-brand-brown-light">
            <CalendarIcon className="w-5 h-5 mr-3 text-brand-terracotta" />
            <span className="font-sans text-sm font-medium">{season}</span>
          </div>

        </div>

        {/* Botón (Full width) */}
        <Button variant="outline" className="w-full justify-center mt-auto">
          Ver Detalles
        </Button>

      </div>
    </div>
  );
};