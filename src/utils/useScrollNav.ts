import { useNavigate, useLocation } from 'react-router-dom';

export const useScrollNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    // Definir offset igual que en ScrollHandler
    const headerOffset = 100; 

    if (location.pathname === '/') {
    
      if (sectionId === 'inicio') {
        window.scrollTo({ top: 0, behavior: 'instant' });
        return;
      }

      // Caso Secciones
      const element = document.getElementById(sectionId);
      if (element) {
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    } 
    // Caso OTRA PÁGINA
    else {
      navigate('/', { state: { targetId: sectionId } });
    }
  };

  return scrollToSection;
};