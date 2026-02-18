
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Video/Image Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-[#050505] z-10" />
        <img 
          src="https://images.unsplash.com/photo-1514525253344-03d3c13c706d?auto=format&fit=crop&q=80&w=1920" 
          alt="Nightclub Vibe" 
          className="w-full h-full object-cover scale-110 animate-pulse-slow"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        <h2 className="text-purple-400 font-bold tracking-[0.3em] uppercase mb-4 animate-fade-in-up">
          Resto • Pub • Disco
        </h2>
        <h1 className="text-6xl md:text-9xl font-black mb-8 tracking-tighter neon-glow animate-fade-in">
          SEVEN RESTOBAR
        </h1>
        <p className="text-xl md:text-2xl font-light text-gray-300 mb-12 tracking-wide animate-fade-in delay-200">
          Despierta tus sentidos. La experiencia nocturna definitiva.
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <a 
            href="#events" 
            className="w-full md:w-auto px-10 py-4 bg-white text-black font-black uppercase tracking-widest rounded-full hover:bg-gray-200 transition-all transform hover:scale-105"
          >
            Ver Eventos
          </a>
          {/* <a 
            href="#reservations" 
            className="w-full md:w-auto px-10 py-4 border-2 border-white/50 text-white font-black uppercase tracking-widest rounded-full hover:bg-white hover:text-black transition-all transform hover:scale-105"
          >
            Reservar Mesa
          </a> */}
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
