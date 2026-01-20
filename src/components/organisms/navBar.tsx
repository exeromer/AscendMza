import { useState, useEffect } from 'react';
import { Button } from '../atoms/button';
import { NavLink } from '../atoms/navLink';
import { MenuIcon } from '../atoms/icons/menuIcon';
import { CloseIcon } from '../atoms/icons/closeIcon';
import { cn } from '../../utils/utils';
import { Link } from 'react-router-dom';
import { getWhatsAppUrl, getReservationMessage } from '../../utils/wpp';
import { useLanguage } from '../../context/languageContext';
import { LanguageSelector } from '../atoms/languageSelector';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
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

    return (
        <nav
            className={cn(
                // Clase base
                "fixed w-full z-50 transition-all duration-300 ease-in-out border-b",

                // ESTADO 1: Scrolled
                isScrolled
                    ? "bg-brand-bg/95 backdrop-blur-md shadow-sm border-brand-brown/10 py-2"

                    // ESTADO 2: Top
                    : "bg-brand-bg/20 border-transparent py-4 backdrop-blur-none"
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
                    <div className="hidden md:flex space-x-14 items-center">
                        <NavLink to="/">{t('nav.home')}</NavLink>
                        <NavLink to="/#experiencias">{t('nav.experiences')}</NavLink>
                        {/* El botón Nosotros */}
                        <NavLink to="/#reviews">{t('nav.about')}</NavLink>
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
                <div className="md:hidden bg-brand-bg/70 border-t border-brand-brown/10 h-screen absolute w-full top-full left-0">
                    <div className="px-4 pt-8 pb-3 space-y-6 flex flex-col items-center text-center">
                        <NavLink to="/" onClick={toggleMenu} className="text-2xl font-display">{t('nav.home')}</NavLink>
                        <NavLink to="/#experiencias" onClick={toggleMenu} className="text-2xl font-display">{t('nav.experiences')}</NavLink>
                        <NavLink to="/#whyUs" onClick={toggleMenu} className="text-2xl font-display">{t('nav.about')}</NavLink>
                        <div className="flex justify-center mt-4 mb-4">
                            <LanguageSelector />
                        </div>
                        <Button className="w-full max-w-xs mt-8 py-3 text-lg">
                            {t('nav.reserve')}
                        </Button>
                    </div>
                </div>
            )}
        </nav>
    );
};