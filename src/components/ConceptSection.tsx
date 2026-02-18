
import React from 'react';

const ConceptSection: React.FC = () => {
  return (
    <section id="concept" className="relative py-24 bg-black overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/20 blur-[150px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/20 blur-[150px] -z-10" />

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-4">DOS MODOS, UNA PASIÓN</h2>
          <p className="text-gray-400 text-lg">Seven se transforma para darte lo que necesitas cada noche.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Pub Mode */}
          <div className="relative group overflow-hidden rounded-3xl aspect-[4/5] md:aspect-auto md:h-[600px]">
            <img 
              src="https://images.unsplash.com/photo-1574096079513-d8259312b785?auto=format&fit=crop&q=80&w=800" 
              alt="Modo Pub" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-12 flex flex-col justify-end">
              <span className="text-blue-400 font-bold tracking-[0.3em] uppercase mb-2">21:00 hs</span>
              <h3 className="text-5xl font-black mb-4">MODO PUB</h3>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Tragos de autor, música ambiente seleccionada y el clima perfecto para empezar el fin de semana. Relax, amigos y buena vibra.
              </p>
              <ul className="space-y-3 mb-8 text-gray-400">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500" /> Coctelería Premium
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500" /> Platos para compartir
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500" /> Lounge Music
                </li>
              </ul>
            </div>
          </div>

          {/* Disco Mode */}
          <div className="relative group overflow-hidden rounded-3xl aspect-[4/5] md:aspect-auto md:h-[600px]">
            <img 
              src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=800" 
              alt="Modo Disco" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-12 flex flex-col justify-end">
              <span className="text-purple-400 font-bold tracking-[0.3em] uppercase mb-2">01:00 hs</span>
              <h3 className="text-5xl font-black mb-4">MODO DISCO</h3>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Sube el volumen. DJs invitados, pista de baile iluminada y energía explosiva. La fiesta que mereces.
              </p>
              <ul className="space-y-3 mb-8 text-gray-400">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-purple-500" /> DJs Nacionales
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-purple-500" /> Show de Luces & Visuales
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-purple-500" /> Shots Free
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConceptSection;
