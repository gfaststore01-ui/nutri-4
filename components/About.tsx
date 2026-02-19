import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="sobre" className="py-24 bg-brand-light overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image Area */}
          <div className="w-full lg:w-1/2 relative h-[400px] lg:h-[500px]">
            {/* Main single image */}
            <div className="absolute inset-0 z-10 pl-8 pb-8">
              <img 
                src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80" 
                alt="Preparação de alimentos saudáveis" 
                className="w-full h-full object-cover rounded-tl-[80px] rounded-br-[80px] shadow-xl"
              />
            </div>

            {/* Decorative dots */}
            <div className="absolute top-10 left-0 flex gap-2 z-30">
               <div className="w-3 h-3 bg-brand-orange rounded-full"></div>
               <div className="w-3 h-3 bg-brand-dark rounded-full"></div>
            </div>
            
            {/* Background decorative shape */}
            <div className="absolute bottom-0 right-0 w-3/4 h-3/4 bg-orange-50 rounded-tl-[80px] rounded-br-[80px] z-0"></div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 z-20 bg-white/80 backdrop-blur-sm p-8 rounded-2xl lg:bg-transparent lg:p-0">
            <h2 className="font-serif text-5xl text-brand-dark mb-2">Olá, tudo bem?</h2>
            <h2 className="font-serif text-5xl text-brand-dark mb-8">Sou a Mariana.</h2>
            
            <div className="space-y-6 text-lg leading-relaxed text-gray-600">
              <p>
                Bem-vindo à clínica da Dra. Mariana, onde a nutrição e o bem-estar se encontram para transformar vidas. O nosso compromisso é proporcionar a cada cliente uma jornada personalizada em direção à saúde ideal.
              </p>
              <p>
                Com uma abordagem holística e baseada em evidências científicas, a Dra. Mariana combina o seu conhecimento especializado em nutrição com um profundo cuidado pelo bem-estar dos seus pacientes.
              </p>
              <p className="font-bold text-brand-dark">
                Junte-se a nós e descubra como a nutrição pode ser a chave para uma vida mais vibrante e plena. Estamos aqui para apoiá-lo em cada passo do caminho.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
