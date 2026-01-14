import { Link } from 'react-router-dom';
import { DiffIcon } from '../atoms/icons/diffIcon';
import { useLanguage } from '@/context/languageContext';

interface ActivityHeaderProps {
  category: string;
  title: string;
  location: string;
}

export const ActivityHeader = ({ category, title, location }: ActivityHeaderProps) => {
  const { t } = useLanguage();
  return (
    <div className="mb-6 border-b border-gray-200 pb-6 animate-fade-up animate-once animate-duration-700 animate-delay-100 animate-ease-out">
      <div className="mb-3 text-lg text-center lg:text-left">
        <Link to="/" className="text-brand-text-gray hover:text-brand-terracotta transition-colors">{t('detail.crumb.home')}</Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="text-brand-brown font-medium">{category}</span>
      </div>
      <h1 className="font-display text-4xl md:text-5xl font-bold text-brand-brown uppercase leading-tight mb-3 text-center lg:text-left">
        {title}
      </h1>
      <p className="text-brand-green font-medium flex items-center justify-center lg:justify-start gap-2 text-lg">
        <DiffIcon className="w-5 h-5" /> {location}
      </p>
    </div>
  );
};