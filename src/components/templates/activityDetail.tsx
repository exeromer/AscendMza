import { useParams, Link } from 'react-router-dom';
import { Navbar } from '../organisms/navBar';
import { Footer } from '../organisms/footer';
import { Button } from '../atoms/button';

export const ActivityDetail = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-brand-bg flex flex-col">
      <Navbar />
      
      <main className="grow pt-32 px-4 max-w-7xl mx-auto w-full">
        {/* Breadcrumb simple */}
        <div className="mb-8">
            <Link to="/" className="text-brand-text-gray hover:text-brand-terracotta transition-colors">
                ← Volver al Inicio
            </Link>
        </div>

        <h1 className="font-display text-4xl md:text-6xl text-brand-brown font-bold mb-4 uppercase">
          Detalle de: <span className="text-brand-terracotta">{id}</span>
        </h1>
        
        <p className="font-sans text-brand-text-gray text-lg mb-8">
          Aquí cargaremos dinámicamente la información, fotos y precios de esta actividad específica.
        </p>

        <Button>Reservar esta experiencia</Button>
      </main>

      <Footer />
    </div>
  );
};