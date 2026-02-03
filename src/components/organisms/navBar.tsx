import { useState, useEffect } from 'react';
import { Button } from '../atoms/button';
import { MenuIcon } from '../atoms/icons/menuIcon';
import { CloseIcon } from '../atoms/icons/closeIcon';
import { cn } from '../../utils/utils';
import { Link, useLocation } from 'react-router-dom';
import { getWhatsAppUrl, getReservationMessage } from '../../utils/wpp';
import { useLanguage } from '../../context/languageContext';
import { LanguageSelector } from '../atoms/languageSelector';
import { useScrollNav } from '../../utils/useScrollNav';


export const Navbar = () => {
    const scrollNav = useScrollNav();
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
    const location = useLocation();
    const handleReserveClick = () => {
        const url = getWhatsAppUrl(getReservationMessage());
        window.open(url, '_blank');
    };
    const { t } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    return (
        <nav
            className={cn(
                // Clase base
                "fixed w-full z-60 transition-all duration-300 px-4 md:px-8 py-3",
                // ESTADO 
                isOpen
                    ? "bg-brand-bg shadow-none py-4" // 1.Abierto
                    : isScrolled
                        ? "bg-white/95 backdrop-blur-md shadow-sm py-2" // 2. Scroll
                        : "bg-brand-bg/15 border-transparent py-4 backdrop-blur-none" // 3. Top
            )}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-14 transition-all duration-300">
                    {/* LOGO */}
                    <div className="shrink-0 flex items-center">
                        <Link to="/">
                            <img
                                src="/logo-ascend.png"
                                alt="Ascend Mza Logo"
                                className={cn("w-auto object-contain transition-all duration-300", "-ml-2 md:-ml-6", isScrolled ? "h-18" : "h-24")}
                            />
                        </Link>
                    </div>

                    {/* MENU DESKTOP */}
                    <div className="hidden md:flex space-x-10 items-center">
                        <button onClick={() => scrollNav('inicio')} className="font-sans font-medium text-brand-brown hover:text-brand-terracotta transition-colors text-lg cursor-pointer">
                            {t('nav.home')}
                        </button>
                        <button onClick={() => scrollNav('experiencias')} className="font-sans font-medium text-brand-brown hover:text-brand-terracotta transition-colors text-lg cursor-pointer">
                            {t('nav.experiences')}
                        </button>
                        <button onClick={() => scrollNav('reviews')} className="font-sans font-medium text-brand-brown hover:text-brand-terracotta transition-colors text-lg cursor-pointer">
                            {t('nav.about')}
                        </button>
                        <div className="flex items-center gap-4">
                            <LanguageSelector />
                            <Button onClick={handleReserveClick}>
                                {t('nav.reserve')}
                            </Button>
                        </div>
                    </div>

                    {/* BOTÓN HAMBURGUESA MOVILE */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            className="text-brand-brown hover:text-brand-terracotta p-2"
                        >
                            {isOpen ? <CloseIcon className="w-8 h-8" /> : <MenuIcon className="w-8 h-8" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* MENÚ MÓVIL */}
            {isOpen && (
                <div className="md:hidden bg-brand-bg border-t border-brand-brown/10 h-screen absolute w-full top-full left-0 ">
                    <div className="px-4 pt-8 pb-3 space-y-4 flex flex-col items-center text-center">
                        <div className="w-full max-w-xs bg-white/60 rounded-lg shadow-md p-4">
                            <button onClick={() => { scrollNav('inicio'); toggleMenu(); }} className="text-2xl font-display text-brand-brown w-full text-center">
                                {t('nav.home')}
                            </button>
                        </div>
                        <div className="w-full max-w-xs bg-white/55 rounded-lg shadow-md p-4">
                            <button onClick={() => { scrollNav('experiencias'); toggleMenu(); }} className="text-2xl font-display text-brand-brown w-full text-center">
                                {t('nav.experiences')}
                            </button>
                        </div>
                        <div className="w-full max-w-xs bg-white/50 rounded-lg shadow-md p-4">
                            <button onClick={() => { scrollNav('reviews'); toggleMenu(); }} className="text-2xl font-display text-brand-brown w-full text-center">
                                {t('nav.about')}
                            </button>
                        </div>
                        <div className="flex justify-center mt-4 mb-4">
                            <LanguageSelector />
                        </div>
                        <div className="mt-8">
                            <Button
                                onClick={handleReserveClick}
                                className="text-lg px-18 py-4 shadow-xl"
                            >
                                {t('nav.reserve')}
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};