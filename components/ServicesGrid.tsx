import React from 'react';

export const ServicesGrid: React.FC = () => {
  const services = [
    {
      title: "Consulta Nutricional Personalizada",
      desc: "Receba uma avaliação completa de saúde e um plano nutricional adaptado às suas necessidades e estilo de vida."
    },
    {
      title: "Nutrição Desportiva",
      desc: "Orientação nutricional específica para melhorar a performance desportiva e a recuperação, incluindo estratégias pré e pós-treino."
    },
    {
      title: "Programa de Emagrecimento Saudável",
      desc: "Um programa focado na perda de peso saudável, com consultas regulares e suporte contínuo."
    },
    {
      title: "Grávidas",
      desc: "Cuidamos da nutrição durante a gravidez, garantindo que você e o seu bebé recebam todos os nutrientes necessários."
    },
    {
      title: "Controlo de Doenças Crónicas",
      desc: "Auxiliamos no controlo e gestão de doenças crónicas como diabetes, hipertensão e colesterol alto através da alimentação."
    },
    {
      title: "Workshops e Palestras",
      desc: "Realizamos workshops sobre nutrição, abordando temas como alimentação saudável, leitura de rótulos e planeamento de refeições."
    }
  ];

  return (
    <section id="servicos" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        
        <h2 className="font-serif text-4xl md:text-5xl text-center text-brand-dark mb-16">
          Como podemos ajudar
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {services.map((service, idx) => (
            <div key={idx} className="flex flex-col">
              <h3 className="font-display font-bold text-sm tracking-widest text-brand-dark uppercase mb-4 border-b border-gray-100 pb-4">
                {service.title}
              </h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
