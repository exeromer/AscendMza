import { useState } from 'react';
import { cn } from '@/utils/utils';

interface ActivityTabsProps {
  itinerary: string[];
  equipment: string[];
  included: string[];
}

export const ActivityTabs = ({ itinerary, equipment, included }: ActivityTabsProps) => {
  const [activeTab, setActiveTab] = useState<'itinerary' | 'equipment' | 'included'>('itinerary');

  return (
    <div>
      {/* Selector de Tabs */}
      <div className="flex border-b border-gray-200 mb-0 overflow-x-auto no-scrollbar justify-center">
        {[
          { id: 'itinerary', label: 'Itinerario' },
          { id: 'equipment', label: 'Equipamiento' },
          { id: 'included', label: 'Qué Incluye' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as 'itinerary' | 'equipment' | 'included')}
            className={cn(
              "px-8 py-4 font-display font-bold uppercase tracking-wider text-sm transition-all border-b-2 whitespace-nowrap",
              activeTab === tab.id
                ? "border-brand-terracotta text-brand-terracotta bg-brand-terracotta/5"
                : "border-transparent text-gray-400 hover:text-brand-brown hover:bg-gray-50"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Contenido */}
      <div className="bg-white p-4 rounded-b-2xl shadow-sm border border-t-0 border-gray-100 min-h-64">
        
        {/* ITINERARIO */}
        {activeTab === 'itinerary' && (
          <div className="animate-fade-in space-y-8">
            <h3 className="font-display text-2xl text-brand-brown font-bold text-center">Itinerario Propuesto</h3>
            <div className="relative border-l-2 border-brand-green/20 ml-3 space-y-8">
              {itinerary.map((item, i) => (
                <div key={i} className="relative pl-8">
                  <span className="absolute -left-2.25 top-0 w-4 h-4 rounded-full bg-brand-green border-2 border-white ring-2 ring-brand-green/20"></span>
                  <p className="text-brand-text-gray">{item}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* EQUIPO */}
        {activeTab === 'equipment' && (
          <div className="animate-fade-in">
            <h3 className="font-display text-2xl text-brand-brown font-bold mb-6 text-center">Lista de Equipo</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {equipment.map((item, i) => (
                <li key={i} className="flex items-center text-brand-text-gray p-2 hover:bg-gray-50 rounded-lg transition-colors">
                  <div className="w-8 h-8 rounded-full bg-brand-green/10 flex items-center justify-center mr-3 text-brand-green shrink-0">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* INCLUIDO */}
        {activeTab === 'included' && (
          <div className="animate-fade-in">
            <h3 className="font-display text-2xl text-brand-brown font-bold mb-6 text-center">Incluido en el precio</h3>
            <div className="grid gap-4">
              {included.map((item, i) => (
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
  );
};