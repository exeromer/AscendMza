import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import { translations } from '../data/translations';

// Definimos los idiomas disponibles
type Language = 'es' | 'en' | 'pt';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('es'); // Español por defecto

  const t = (key: string) => {
    // Busca la traducción, si no existe devuelve la clave como error visual
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage debe usarse dentro de un LanguageProvider');
  return context;
};