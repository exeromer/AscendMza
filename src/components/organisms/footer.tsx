import { useLanguage } from "../../context/languageContext";
import { useScrollNav } from "@/utils/useScrollNav";
export const Footer = () => {
  const { t } = useLanguage();
  const scrollNav = useScrollNav();

  return (
    <footer className="bg-brand-footer-bg/90 text-white py-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-4">

        {/* Columna 1: Info General  */}
        <div className="col-span-2 md:col-span-1 flex flex-col items-center text-center md:items-start md:text-left">
          <h4 className="font-display text-2xl font-bold mb-4 tracking-widest">
            ASCEND<span className="text-brand-terracotta">MZA</span>
          </h4>
          <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
            {t('footer.tagline')}
          </p>
        </div>

        {/* Columna 2: Links */}
        <div className="col-span-1 flex flex-col items-center text-center md:items-start md:text-left">
          <h4 className="font-bold mb-4 uppercase text-base md:text-lg tracking-widest text-brand-terracotta">{t('footer.explore')}</h4>
          <ul className="space-y-2 text-gray-300 text-sm md:text-sm flex flex-col items-center md:items-start">
            <li>
              <button onClick={() => scrollNav('inicio')} className="text-gray-300 hover:text-white transition-all text-left cursor-pointer">
                {t('nav.home')}
              </button>
            </li>
            <li>
              <button onClick={() => scrollNav('experiencias')} className="text-gray-300 hover:text-white transition-all text-left cursor-pointer">
                {t('footer.explore')}
              </button>
            </li>
            <li>
              <button onClick={() => scrollNav('whyUs')} className="text-gray-300 hover:text-white transition-all text-left cursor-pointer">
                {t('footer.proposal')}
              </button>
            </li>
          </ul>
        </div>

        {/* Columna 3: Contacto (Comparte fila en móvil) */}
        <div className="col-span-1 flex flex-col items-center text-center md:items-start md:text-left">
          <h4 className="font-bold mb-4 uppercase  md:text-lg tracking-widest text-brand-terracotta">{t('footer.contact')}</h4>
          <ul className="space-y-2 text-gray-300 text-sm md:text-sm flex flex-col items-center md:items-start">
            <li className="flex items-center gap-2"><span>📧</span> info@ascend.com</li>
            <li className="flex items-center gap-2"><span>📱</span> +54 9 261 213 132</li>
            <li className="flex items-center gap-2"><span>📍</span> Mendoza, Arg</li>
          </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-4 mt-8 pt-6 border-t border-white/10 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Ascend Mza. {t('footer.rights')}
      </div>
    </footer>
  );
};