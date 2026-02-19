import React from 'react';

export const CallToAction: React.FC = () => {
  return (
    <section className="py-32 bg-brand-light relative overflow-hidden">
      {/* Very faint background elements to simulate the sketch look */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>

      <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
        
        {/* Hand drawn style arrows & text */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-32 mb-16 relative">
          
          <div className="flex flex-col items-center">
            <h3 className="font-script text-4xl text-brand-dark mb-4">Agende uma<br/>consulta</h3>
            {/* SVG Arrow curving down-right */}
            <svg width="100" height="60" viewBox="0 0 100 60" fill="none" className="text-brand-dark -ml-10">
              <path d="M10 10 Q 50 60 90 30" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
              <path d="M80 20 L 90 30 L 80 40" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          <div className="flex flex-col items-center pt-10 md:pt-0">
            <h3 className="font-script text-4xl text-brand-dark mb-4 text-right">Ganhe um plano<br/>nutricional<br/>personalizado</h3>
             {/* SVG Arrow curving down-left */}
             <svg width="100" height="60" viewBox="0 0 100 60" fill="none" className="text-brand-dark -ml-20 md:-ml-0 md:-mr-20">
              <path d="M90 10 Q 50 60 10 30" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
              <path d="M20 20 L 10 30 L 20 40" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        <h2 className="font-script text-5xl md:text-6xl text-brand-dark mb-10">
          Vamos executá-lo juntos!
        </h2>

        <a 
          href="#agendar"
          className="inline-block bg-brand-beige text-brand-dark font-display font-bold uppercase tracking-widest text-sm py-4 px-10 hover:bg-[#d4ba97] transition-colors"
        >
          Quero mais qualidade de vida
        </a>

      </div>
    </section>
  );
};
