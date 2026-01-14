import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../../context/languageContext';
import { cn } from '@/utils/utils';

export const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: 'es', label: 'ES', flag: '🇦🇷' },
    { code: 'en', label: 'EN', flag: '🇺🇸' },
    { code: 'pt', label: 'PT', flag: '🇧🇷' },
  ];

  // Cerrar si clic fuera
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
    <div className="relative" ref={dropdownRef}>
      {/* Botón Principal  */}
      <button
      onClick={() => setIsOpen(!isOpen)}
      className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-all border border-brand-brown/20 backdrop-blur-sm"
      >
      <span className="text-xl">{currentLang.flag}</span>
      {/* Flechita pequeña */}
      <svg 
        className={cn("w-3 h-3 text-brand-brown transition-transform", isOpen && "rotate-180")} 
        fill="none" viewBox="0 0 24 24" stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
      </svg>
      </button>

      {/* Menú Desplegable */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden animate-fade-down animate-duration-200 z-50">
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
              <span className="text-lg">{lang.flag}</span>
              <span className="text-sm">{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};