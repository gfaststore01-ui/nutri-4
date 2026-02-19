import React from 'react';
import { AppleIcon, ScaleIcon, AthleteIcon } from './Icons';

export const Features: React.FC = () => {
  const features = [
    {
      icon: <AppleIcon className="w-8 h-8" />,
      title: "Consulta Personalizada",
      desc: "Avaliação completa e plano adaptado ao seu estilo de vida."
    },
    {
      icon: <ScaleIcon className="w-8 h-8" />,
      title: "Programa de Emagrecimento",
      desc: "Foco na perda de peso com suporte contínuo."
    },
    {
      icon: <AthleteIcon className="w-8 h-8" />,
      title: "Nutrição Desportiva",
      desc: "Estratégias para melhorar a performance e recuperação."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {features.map((feat, idx) => (
            <div key={idx} className="flex flex-col items-center group">
              <div className="w-20 h-20 bg-brand-light rounded-full flex items-center justify-center text-brand-dark mb-6 border border-gray-100 group-hover:bg-brand-orange group-hover:text-white transition-colors duration-300">
                {feat.icon}
              </div>
              <h3 className="font-display font-bold text-lg text-brand-dark uppercase tracking-wide mb-3">
                {feat.title}
              </h3>
              <p className="text-gray-500 max-w-xs">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
