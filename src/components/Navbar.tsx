
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-black tracking-tighter text-white">
          SEVEN<span className="text-purple-500">.</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-bold uppercase tracking-widest text-gray-300">
          <a href="#events" className="hover:text-purple-400 transition-colors">Eventos</a>
          <a href="#concept" className="hover:text-purple-400 transition-colors">Concepto</a>
          <a href="#privateEvent" className="hover:text-purple-400 transition-colors">Contrataciones</a>
          <a href="#gallery" className="hover:text-purple-400 transition-colors">Galería</a>
        </div>
        {/* <a href="#reservations" className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full text-sm font-bold transition-all transform hover:scale-105">
          VIP ACCESS
        </a> */}
      </div>
    </nav>
  );
};

export default Navbar;
