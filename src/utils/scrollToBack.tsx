import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToBack = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }

    // Si hay hash (ej: #reviews), esperamos un momento a que cargue y scrolleamos
    const element = document.getElementById(hash.replace('#', ''));
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, [pathname, hash]);

  return null;
};