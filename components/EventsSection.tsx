
import React from 'react';
import { EVENTS } from '../constants';

const EventsSection: React.FC = () => {
  return (
    <section id="events" className="py-24 bg-[#050505]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-purple-500 font-bold uppercase tracking-[0.2em]">Live the Night</span>
            <h2 className="text-4xl md:text-6xl font-black mt-2">PRÓXIMOS EVENTOS</h2>
          </div>
          <p className="text-gray-400 max-w-sm">
            Asegura tu lugar en las noches más épicas de la ciudad. Entradas limitadas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {EVENTS.map((event) => (
            <div key={event.id} className="group relative overflow-hidden rounded-2xl glass transition-all hover:-translate-y-2">
              <div className="relative h-96 overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-purple-600 text-white text-xs font-black px-3 py-1 rounded-full uppercase">
                  Nuevo
                </div>
              </div>
              
              <div className="p-8">
                <p className="text-purple-400 font-bold text-sm mb-1">{event.date}</p>
                <h3 className="text-2xl font-black mb-2 uppercase tracking-tight">{event.title}</h3>
                <p className="text-gray-400 mb-6 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                  </svg>
                  {event.dj}
                </p>
                
                <div className="flex items-center justify-between pt-6 border-t border-white/10">
                  <span className="text-xl font-bold">{event.price}</span>
                  <a 
                    href={event.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-black px-6 py-2 rounded-full font-black text-sm uppercase transition-colors hover:bg-purple-500 hover:text-white"
                  >
                    Comprar Ticket
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
