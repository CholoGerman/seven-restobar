import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050505] pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="text-4xl font-black mb-6">SEVEN<span className="text-purple-500">.</span></div>
            <p className="text-gray-400 max-w-sm text-lg leading-relaxed">
              No vendemos comida ni bebida. Vendemos el momento que recordarás por el resto del mes. Únete a la experiencia Seven.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-sm mb-6">Ubicación</h4>
            <ul className="text-gray-400 space-y-4">
              <li>Real de San Carlos</li>
              <li>Colonia del Sacramento, Uruguay</li>
              <li>Abierto Vie y Sáb desde las 21:00</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-sm mb-6">Social</h4>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/sevenrestobar/" 
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all text-xl"
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a 
                href="#" 
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all text-xl"
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a 
                href="#" 
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all text-xl"
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Seven Restobar. All rights reserved. Design by Cholo Team.
        </div>
      </div>
    </footer>
  );
};

export default Footer;