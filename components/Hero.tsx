import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden relative">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-b from-orange-50 to-white -z-10 opacity-50 rounded-bl-[100px]"></div>
      
      <div className="container mx-auto px-6 max-w-6xl relative">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* Text Content */}
          <div className="w-full md:w-1/2 flex flex-col items-start z-10">
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-brand-dark leading-tight mb-4">
              Comece hoje a sua jornada para o novo eu!
            </h1>
            <p className="font-script text-4xl md:text-5xl text-brand-orange mb-10 -rotate-2">
              Juntos rumo à saúde e bem-estar.
            </p>
            <a 
              href="#agendar"
              className="inline-block bg-brand-orange hover:bg-brand-orangeHover text-white font-display font-bold uppercase tracking-widest text-sm py-4 px-8 rounded-sm shadow-xl shadow-brand-orange/20 transition-all hover:-translate-y-1"
            >
              Quero uma vida mais saudável
            </a>
          </div>

          {/* Image Content */}
          <div className="w-full md:w-1/2 relative">
            {/* Background blob for image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-orange-100/50 rounded-full blur-3xl -z-10"></div>
            
            <img 
              src="https://images.unsplash.com/photo-1550828520-4cb496926fc9?q=80&w=1000&auto=format&fit=crop" 
              alt="Frutas cítricas saudáveis" 
              className="w-full h-auto object-cover rounded-[40px] shadow-2xl relative z-10 animate-[wiggle_10s_ease-in-out_infinite]"
              style={{
                 clipPath: 'polygon(10% 0%, 100% 10%, 90% 100%, 0% 90%)'
              }}
            />
          </div>

        </div>
      </div>
    </section>
  );
};
