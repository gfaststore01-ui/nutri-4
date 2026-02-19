import React from 'react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-16">
          
          {/* Quote */}
          <div className="w-full md:w-1/2">
            <h3 className="font-serif text-3xl md:text-4xl text-brand-dark leading-snug mb-8">
              "Sinto-me com mais energia, o meu peso está sob controlo e a minha qualidade de vida aumentou consideravelmente. Recomendo vivamente!"
            </h3>
            <p className="text-gray-500 mb-8 leading-relaxed">
              Desde que comecei o acompanhamento nutricional, a minha saúde melhorou significativamente. A Dra. Mariana não apenas desenvolveu um plano alimentar personalizado para mim, mas também me orientou de maneira clara e empática em todas as consultas.
            </p>
            
            <div className="flex items-center gap-4">
              <img 
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&q=80" 
                alt="Fernanda Aguiar" 
                className="w-16 h-16 rounded-full object-cover border-2 border-brand-orange"
              />
              <span className="font-display font-bold text-xs tracking-widest text-brand-dark uppercase">
                Fernanda Aguiar - 29 anos
              </span>
            </div>
          </div>

          {/* Decorative Food Images */}
          <div className="w-full md:w-1/2 relative h-[500px] hidden md:block">
             <div className="absolute top-0 right-0 w-2/3 h-2/3">
               <img 
                 src="https://images.unsplash.com/photo-1490818387583-1b0ba689a074?w=600&q=80" 
                 alt="Healthy food" 
                 className="w-full h-full object-cover"
                 style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 20% 100%)' }}
               />
             </div>
             <div className="absolute bottom-0 left-0 w-2/3 h-2/3">
               <img 
                 src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80" 
                 alt="Salad" 
                 className="w-full h-full object-cover"
                 style={{ clipPath: 'polygon(0 0, 80% 0, 100% 100%, 0 100%)' }}
               />
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};
