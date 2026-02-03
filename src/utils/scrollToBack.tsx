import { useLayoutEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const ScrollHandler = () => {
  const { pathname, hash, state } = useLocation();
  const navigate = useNavigate();

  useLayoutEffect(() => {
    // Control manual del scroll para evitar "saltos" del navegador
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    // Identificar un objetivo 
    const targetId = state?.targetId || (hash ? hash.replace('#', '') : null);

    // --- CASO A: Navegación a una SECCIÓN específica ---
    if (targetId) {
      if (targetId === 'inicio') {
        window.scrollTo(0, 0);
      } 
      else {
        setTimeout(() => {
          const element = document.getElementById(targetId);
          if (element) {
            const headerOffset = 100; 
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth"
            });
          }
        }, 100);
      }
      if (state?.targetId) {
        navigate(pathname, { replace: true, state: {} });
      }
    } 
    
    // --- CASO B: Navegación Normal  ---
    else {
      window.scrollTo(0, 0);
    }

  }, [pathname, hash, state, navigate]);

  return null;
};