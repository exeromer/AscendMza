import type { ReactNode } from 'react';
import { ClockIcon } from '../atoms/icons/clockIcon';
import { DiffIcon } from '../atoms/icons/diffIcon';
import { CalendarIcon } from '../atoms/icons/calendarIcon';
import { cn } from '@/utils/utils';
import { useInView } from '@/utils/useInView';
import { useLanguage } from '@/context/languageContext';

interface ActivityInfoGridProps {
  duration: string;
  difficulty: string;
  season: string;
  altitude?: string;
}

export const ActivityInfoGrid = ({ duration, difficulty, season, altitude }: ActivityInfoGridProps) => {
  const [ref, inView] = useInView({ threshold: 0.2 });
  const { t } = useLanguage();

  return (
    <div
      ref={ref}
      className={cn(
        "grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 py-8 border-y border-gray-100 transition-all duration-1000",
        inView ? "opacity-100 translate-y-0 filter-none" : "opacity-0 translate-y-8 blur-sm"
      )}
    >
      <InfoItem icon={<ClockIcon className="w-8 h-8 text-brand-terracotta mb-2" />} label={t('detail.label.duration')} value={duration} />
      <InfoItem icon={<DiffIcon className="w-8 h-8 text-brand-terracotta mb-2" />} label={t('detail.label.difficulty')} value={difficulty} />
      <InfoItem icon={<CalendarIcon className="w-8 h-8 text-brand-terracotta mb-2" />} label={t('detail.label.season')} value={season} />
      <InfoItem 
        icon={<svg className="w-8 h-8 text-brand-terracotta mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 21h18M5 21V7l8-4 8 4v14" /></svg>} 
        label={t('detail.label.altitude')} 
        value={altitude || "N/A"} 
      />
    </div>
  );
};

const InfoItem = ({ icon, label, value }: { icon: ReactNode, label: string, value: string }) => (
  <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-gray-50 text-center">
    {icon}
    <p className="text-xs uppercase text-gray-400 font-bold tracking-wide">{label}</p>
    <p className="text-brand-brown font-bold">{value}</p>
  </div>
);