import React, { useState } from 'react';

const PrivateEventForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventType: '',        // tipo de evento: cumpleaños, corporativo, etc.
    date: '',
    guests: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Construir mensaje para WhatsApp
    const text = `Hola! Quiero información para un evento privado:%0A- Nombre: ${formData.name}%0A- Teléfono: ${formData.phone}%0A- Tipo de evento: ${formData.eventType}%0A- Fecha aproximada: ${formData.date}%0A- Cantidad de personas: ${formData.guests}%0A- Comentarios: ${formData.message}`;
    // Reemplazar con el número real de WhatsApp (código de país + número, sin +)
    window.open(`https://wa.me/1234567890?text=${text}`, '_blank');
  };

  return (
    <section id="privateEvent" className="py-24 bg-[#080808]">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto bg-black border border-white/5 rounded-[40px] overflow-hidden flex flex-col lg:flex-row">
          {/* Columna izquierda - Info */}
          <div className="lg:w-1/2 p-12 md:p-16 flex flex-col justify-center bg-gradient-to-br from-purple-900/20 to-transparent">
            <h2 className="text-5xl md:text-7xl font-black mb-8">EVENTOS PRIVADOS</h2>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              ¿Querés celebrar tu cumpleaños, despedida o evento corporativo en Seven? 
              Dejanos tus datos y te contactamos a la brevedad para armar algo exclusivo.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-purple-400 font-bold uppercase tracking-widest text-sm">
                <span className="w-12 h-[1px] bg-purple-400" /> 
                ¿Qué ofrecemos?
              </div>
              <ul className="grid grid-cols-2 gap-4 text-gray-300">
                <li>• Espacio exclusivo</li>
                <li>• Música personalizada</li>
                <li>• Barra privada</li>
                <li>• Asesoramiento completo</li>
              </ul>
            </div>
          </div>

          {/* Columna derecha - Formulario */}
          <div className="lg:w-1/2 p-12 md:p-16 glass">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nombre */}
              <div>
                <label className="block text-xs font-black uppercase tracking-widest text-gray-500 mb-2">Nombre Completo</label>
                <input 
                  type="text" 
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors placeholder-gray-500"
                  placeholder="Tu nombre"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>

              {/* Teléfono WhatsApp */}
              <div>
                <label className="block text-xs font-black uppercase tracking-widest text-gray-500 mb-2">WhatsApp</label>
                <input 
                  type="tel" 
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors placeholder-gray-500"
                  placeholder="Ej: +598 92 123 456"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>

              {/* Tipo de evento */}
              <div className="relative">
                <label className="block text-xs font-black uppercase tracking-widest text-gray-500 mb-2">Tipo de Evento</label>
                <select 
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors appearance-none cursor-pointer"
                  value={formData.eventType}
                  onChange={(e) => setFormData({...formData, eventType: e.target.value})}
                  style={{ color: formData.eventType ? 'white' : '#9CA3AF' }}
                >
                  <option value="" disabled hidden>Selecciona tipo</option>
                  <option value="Cumpleaños">🎂 Cumpleaños</option>
                  <option value="Despedida">🥂 Despedida</option>
                  <option value="Corporativo">💼 Evento Corporativo</option>
                  <option value="After office">🍻 After office</option>
                  <option value="Otro">✨ Otro</option>
                </select>
                <div className="absolute right-4 bottom-3 pointer-events-none">
                  <svg className={`w-5 h-5 transition-colors ${formData.eventType ? 'text-purple-400' : 'text-gray-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              {/* Fecha aproximada */}
              <div>
                <label className="block text-xs font-black uppercase tracking-widest text-gray-500 mb-2">Fecha Aproximada</label>
                <input 
                  type="date" 
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                  value={formData.date}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                />
              </div>

              {/* Cantidad de personas */}
              <div className="relative">
                <label className="block text-xs font-black uppercase tracking-widest text-gray-500 mb-2">Cantidad de Personas</label>
                <select 
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors appearance-none cursor-pointer"
                  value={formData.guests}
                  onChange={(e) => setFormData({...formData, guests: e.target.value})}
                  style={{ color: formData.guests ? 'white' : '#9CA3AF' }}
                >
                  <option value="" disabled hidden>Selecciona cantidad</option>
                  {[1,2,3,4,5,6,7,8,9,10].map(n => (
                    <option key={n} value={n} className="bg-gray-800 text-white">
                      {n} {n === 1 ? 'Persona' : 'Personas'}
                    </option>
                  ))}
                  <option value="10-20">10-20 personas</option>
                  <option value="20-50">20-50 personas</option>
                  <option value="50+">Más de 50 personas</option>
                </select>
                <div className="absolute right-4 bottom-3 pointer-events-none">
                  <svg className={`w-5 h-5 transition-colors ${formData.guests ? 'text-purple-400' : 'text-gray-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              {/* Mensaje adicional */}
              <div>
                <label className="block text-xs font-black uppercase tracking-widest text-gray-500 mb-2">Comentarios (opcional)</label>
                <textarea 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors placeholder-gray-500"
                  placeholder="Contanos más sobre lo que tenés en mente..."
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
              </div>

              {/* Botón de envío */}
              <button 
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-black py-4 rounded-xl uppercase tracking-[0.2em] transition-all transform hover:scale-[1.02]"
              >
                Consultar disponibilidad
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivateEventForm;