import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/context/languageContext';
import { cn } from '@/utils/utils';
import { ArgentinaFlag, USAFlag, BrazilFlag } from './icons/flagIcons';

export const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: 'es', label: 'ES', Flag: ArgentinaFlag, name: 'Español' },
    { code: 'en', label: 'EN', Flag: USAFlag, name: 'English' },
    { code: 'pt', label: 'PT', Flag: BrazilFlag, name: 'Português' },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentLang = languages.find(l => l.code === language) || languages[0];

  return (
    <div className="relative z-50" ref={dropdownRef}>
      {/* Botón Principal */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center gap-2 px-3 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-all border border-brand-brown/20 backdrop-blur-sm text-brand-brown min-w-20"
        title="Cambiar idioma"
      >
        <currentLang.Flag className="w-6 h-6 rounded-full shadow-sm object-cover" />
        
        <span className="font-bold text-sm">{currentLang.label}</span>
        
        <svg 
          className={cn("w-3 h-3 transition-transform opacity-70", isOpen && "rotate-180")} 
          fill="none" viewBox="0 0 24 24" stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Menú Desplegable */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-44 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden animate-fade-down animate-duration-200">
          <div className="py-1">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code as any);
                  setIsOpen(false);
                }}
                className={cn(
                  "w-full px-4 py-3 text-left flex items-center gap-3 hover:bg-gray-50 transition-colors",
                  language === lang.code && "bg-brand-terracotta/5 text-brand-terracotta font-bold"
                )}
              >
                <lang.Flag className="w-6 h-6 rounded-full shadow-sm" />
                <span className="text-sm">{lang.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};