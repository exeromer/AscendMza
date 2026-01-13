import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Navbar } from '../organisms/navBar';
import { Footer } from '../organisms/footer';
import { activitiesData } from '../../data/activityData';

// Componentes Refactorizados
import { ActivityGallery } from '../organisms/activityGallery';
import { ActivityHeader } from '../molecules/activityHeader';
import { ActivityInfoGrid } from '../molecules/activityInfoGrid';
import { ActivityTabs } from '../organisms/activityTabs';
import { BookingCard } from '../molecules/bookingCard';

export const ActivityDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const activity = activitiesData.find((a) => a.slug === slug);

  useEffect(() => {
    if (!activity) {
      navigate('/');
    }
  }, [activity, navigate]);

  if (!activity) return null;

  return (
    <div className="min-h-screen bg-brand-bg flex flex-col font-sans">
      <Navbar />

      {/* 1. HERO SECTION */}
      <ActivityGallery images={activity.images} />

      <main className="grow pt-8 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* --- COLUMNA IZQUIERDA  --- */}
            <div className="lg:col-span-2">
              
              {/* Header  */}
              <ActivityHeader 
                category={activity.category}
                title={activity.title}
                location={activity.location}
              />

              {/* Descripción + Grid de Características + Tabs */}
              <div className="space-y-10">
                <div className="animate-fade-up animate-once animate-duration-700 animate-delay-200 animate-ease-out">
                  <h2 className="font-display text-2xl text-brand-brown font-bold mb-4 text-center">Sobre esta experiencia</h2>
                  <p className="text-brand-text-gray leading-relaxed text-lg whitespace-pre-line text-center lg:text-left">
                    {activity.fullDescription}
                  </p>

                  <ActivityInfoGrid 
                    duration={activity.duration}
                    difficulty={activity.difficulty}
                    season={activity.season}
                    altitude={activity.altitude}
                  />
                </div>

                <ActivityTabs 
                  itinerary={activity.itinerary}
                  equipment={activity.equipment}
                  included={activity.included}
                />
              </div>
            </div>

            {/* --- COLUMNA DERECHA --- */}
            <div className="lg:col-span-1">
              <BookingCard 
                price={activity.price} 
                title={activity.title}
              />
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};