import { useState, useEffect } from 'react';
import type { MouseEvent } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Navbar } from '../organisms/navBar';
import { Footer } from '../organisms/footer';
import { Button } from '../atoms/button';
import { activitiesData } from '../../data/activityData';
import { ClockIcon } from '../atoms/icons/clockIcon';
import { DiffIcon } from '../atoms/icons/diffIcon';
import { CalendarIcon } from '../atoms/icons/calendarIcon';
import { cn } from '@/utils/utils';
import { useInView } from '@/utils/useInView';


export const ActivityDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('itinerary');
  const [featuresRef, featuresInView] = useInView({ threshold: 0.2 });

  // Estados para la Galería (Lightbox)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const activity = activitiesData.find((a) => a.slug === slug);


  useEffect(() => {
    if (!activity) {
      navigate('/');
    }
  }, [activity, navigate]);

  if (!activity) return null;

  // Funciones para el Lightbox
  const openLightbox = (index = 0) => {
    setCurrentImageIndex(index);
    setIsLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const nextImage = (e: MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % activity.images.length);
  };

  const prevImage = (e: MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + activity.images.length) % activity.images.length);
  };


  return (
    <div className="min-h-screen bg-brand-bg flex flex-col font-sans">
      <Navbar />

      {/* --- 1. HERO SECTION --- */}
      <div className="pt-22 md:pt-22 w-full px-4 md:px-0">
        <div className="max-w-480 mx-auto grid grid-cols-1 md:grid-cols-4 h-[50vh] md:h-[60vh] rounded-xl md:rounded-none overflow-hidden cursor-pointer relative animate-fade animate-duration-1000 animate-ease-out">

          {/* Imagen Principal (Grande Izquierda) */}
          <div
            className="relative md:col-span-2 md:row-span-2 h-full overflow-hidden group"
            onClick={() => openLightbox(0)}
          >
            <img
              src={activity.images[0]}
              alt="Principal"
              className="w-full h-full object-cover brightness-95 group-hover:brightness-110 transition-all duration-900 hover:scale-105"
            />
          </div>

          {/* Imágenes Secundarias - Solo se muestran si hay suficientes */}
          <div className="hidden md:grid md:col-span-2 grid-cols-2 h-full">
            {activity.images.slice(1, 5).map((img, index) => (
              <div
                key={index}
                className="relative h-full overflow-hidden group"
                onClick={() => openLightbox(index + 1)}
              >
                <img
                  src={img}
                  alt={`Detalle ${index}`}
                  className="w-full h-full object-cover brightness-95 group-hover:brightness-110 transition-all duration-700 hover:scale-105"
                />
              </div>
            ))}
          </div>
          <button
            onClick={(e) => { e.stopPropagation(); openLightbox(0); }}
            className="absolute bottom-4 left-4 md:bottom-8 md:left-8 bg-white/90 backdrop-blur-sm text-brand-brown px-4 py-2 rounded-lg text-sm font-bold shadow-lg hover:scale-105 transition-transform flex items-center gap-2 z-10"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
            Ver fotos ({activity.images.length})
          </button>
        </div>
      </div>

      <main className="grow pt-8 pb-16 px-4">
        <div className="max-w-7xl mx-auto">

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* --- 2. COLUMNA IZQUIERDA --- */}
            <div className="lg:col-span-2">

              {/* Breadcrumb & Header  */}
              <div className="mb-6 border-b border-gray-200 pb-6 animate-fade-up animate-once animate-duration-700 animate-delay-100 animate-ease-out">
                <div className="mb-3 text-sm">
                  <Link to="/" className="text-brand-text-gray hover:text-brand-terracotta transition-colors">Inicio</Link>
                  <span className="mx-2 text-gray-400">/</span>
                  <span className="text-brand-brown font-medium">{activity.category}</span>
                </div>
                <h1 className="font-display text-4xl md:text-5xl font-bold text-brand-brown uppercase leading-tight mb-3">
                  {activity.title}
                </h1>
                <p className="text-brand-green font-medium flex items-center gap-2 text-lg">
                  <DiffIcon className="w-5 h-5" /> {activity.location}
                </p>
              </div>

              {/* Descripción */}
              <div className="space-y-10">
                <div className="animate-fade-up animate-once animate-duration-700 animate-delay-200 animate-ease-out">
                  <h2 className="font-display text-2xl text-brand-brown font-bold mb-4">Sobre esta experiencia</h2>
                  <p className="text-brand-text-gray leading-relaxed text-lg whitespace-pre-line">
                    {activity.fullDescription}
                  </p>

                  {/* Grid de Iconos */}
                  <div
                    ref={featuresRef}
                    className={cn(
                      "grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 py-8 border-y border-gray-100 transition-all duration-1000",
                      featuresInView
                        ? "opacity-100 translate-y-0 filter-none"
                        : "opacity-0 translate-y-8 blur-sm"
                    )}
                  >
                    <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-gray-50">
                      <ClockIcon className="w-8 h-8 text-brand-terracotta mb-2" />
                      <p className="text-xs uppercase text-gray-400 font-bold tracking-wide">Duración</p>
                      <p className="text-brand-brown font-bold">{activity.duration}</p>
                    </div>
                    <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-gray-50">
                      <DiffIcon className="w-8 h-8 text-brand-terracotta mb-2" />
                      <p className="text-xs uppercase text-gray-400 font-bold tracking-wide">Dificultad</p>
                      <p className="text-brand-brown font-bold">{activity.difficulty}</p>
                    </div>
                    <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-gray-50">
                      <CalendarIcon className="w-8 h-8 text-brand-terracotta mb-2" />
                      <p className="text-xs uppercase text-gray-400 font-bold tracking-wide">Temporada</p>
                      <p className="text-brand-brown font-bold">{activity.season}</p>
                    </div>
                    <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-gray-50">
                      <svg className="w-8 h-8 text-brand-terracotta mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 21h18M5 21V7l8-4 8 4v14" /></svg>
                      <p className="text-xs uppercase text-gray-400 font-bold tracking-wide">Altura</p>
                      <p className="text-brand-brown font-bold">{activity.altitude || "N/A"}</p>
                    </div>
                  </div>
                </div>

                {/* TABS */}
                <div>
                  <div className="flex border-b border-gray-200 mb-0 overflow-x-auto no-scrollbar">
                    {['itinerary', 'equipment', 'included'].map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={cn(
                          "px-8 py-4 font-display font-bold uppercase tracking-wider text-sm transition-all border-b-2 whitespace-nowrap",
                          activeTab === tab
                            ? "border-brand-terracotta text-brand-terracotta bg-brand-terracotta/5"
                            : "border-transparent text-gray-400 hover:text-brand-brown hover:bg-gray-50"
                        )}
                      >
                        {tab === 'itinerary' && 'Itinerario'}
                        {tab === 'equipment' && 'Equipamiento'}
                        {tab === 'included' && 'Qué Incluye'}
                      </button>
                    ))}
                  </div>

                  <div className="bg-white p-8 rounded-b-2xl shadow-sm border border-t-0 border-gray-100 min-h-64">
                    {activeTab === 'itinerary' && (
                      <div className="animate-fade-in space-y-8">
                        <h3 className="font-display text-xl text-brand-brown font-bold">Itinerario Propuesto</h3>
                        <div className="relative border-l-2 border-brand-green/20 ml-3 space-y-8">
                          {activity.itinerary.map((item, i) => (
                            <div key={i} className="relative pl-8">
                              <span className="absolute -left-2.25 top-0 w-4 h-4 rounded-full bg-brand-green border-2 border-white ring-2 ring-brand-green/20"></span>
                              <p className="text-brand-text-gray">{item}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    {activeTab === 'equipment' && (
                      <div className="animate-fade-in">
                        <h3 className="font-display text-xl text-brand-brown font-bold mb-6">Lista de Equipo</h3>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {activity.equipment.map((item, i) => (
                            <li key={i} className="flex items-center text-brand-text-gray p-2 hover:bg-gray-50 rounded-lg transition-colors">
                              <div className="w-8 h-8 rounded-full bg-brand-green/10 flex items-center justify-center mr-3 text-brand-green">
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                              </div>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {activeTab === 'included' && (
                      <div className="animate-fade-in">
                        <h3 className="font-display text-xl text-brand-brown font-bold mb-6">Incluido en el precio</h3>
                        <div className="grid gap-4">
                          {activity.included.map((item, i) => (
                            <li key={i} className="flex items-start p-4 border border-gray-100 rounded-xl hover:border-brand-terracotta/30 hover:shadow-sm transition-all bg-white">
                              <svg className="w-6 h-6 text-brand-terracotta mr-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                              <span className="text-brand-text-gray font-medium">{item}</span>
                            </li>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* --- 3. COLUMNA DERECHA (STICKY ) --- */}
            <div className="lg:col-span-1 animate-fade-left animate-once animate-duration-800 animate-delay-300 animate-ease-out lg:animate-fade-up">
              <div className="sticky top-28 bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                <div className="mb-8 text-center lg:text-left">
                  <p className="text-gray-500 text-xs uppercase font-bold tracking-widest mb-2">Precio Total</p>
                  <div className="flex items-baseline justify-center lg:justify-start gap-1">
                    <span className="text-4xl font-bold text-brand-brown">{activity.price}</span>
                    <span className="text-gray-500 font-medium text-sm">/ persona</span>
                  </div>
                  <div className="mt-4 inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-bold uppercase rounded-full">
                    Disponibilidad Inmediata
                  </div>
                </div>

                <div className="space-y-4">
                  <Button className="w-full py-4 text-lg shadow-brand-terracotta/20 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
                    Reservar Aventura
                  </Button>

                  <a
                    href={`https://wa.me/5492611234567?text=Hola,%20quisiera%20más%20info%20sobre%20${activity.title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full py-3 border-2 border-brand-green text-brand-green font-display font-bold uppercase rounded-lg hover:bg-brand-green hover:text-white transition-all gap-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.463 1.065 2.876 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" /></svg>
                    Consultar WhatsApp
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />

      {/* --- LIGHTBOX MODAL --- */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center animate-fade-in"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2 z-50"
            onClick={closeLightbox}
          >
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>

          <button
            className="absolute left-4 text-white/50 hover:text-white p-4 transition-colors hidden md:block z-50"
            onClick={prevImage}
          >
            <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
          </button>

          <img
            src={activity.images[currentImageIndex]}
            alt={`Galería ${currentImageIndex + 1}`}
            className="max-h-[90vh] max-w-[90vw] object-contain shadow-2xl rounded-sm"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="absolute right-4 text-white/50 hover:text-white p-4 transition-colors hidden md:block z-50"
            onClick={nextImage}
          >
            <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
          </button>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80 font-medium">
            {currentImageIndex + 1} / {activity.images.length}
          </div>
        </div>
      )}
    </div>
  );
};