import React from 'react';
import { FacebookIcon, InstagramIcon } from './Icons';

export const Footer: React.FC = () => {
  return (
    <footer id="contactos" className="bg-white pt-20 pb-10">
      <div className="container mx-auto px-6 max-w-6xl border-b border-gray-100 pb-16">
        
        {/* Top area with logo and social */}
        <div className="flex flex-col items-center mb-16">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-10 h-10 bg-brand-dark text-white flex items-center justify-center rounded-full font-serif font-bold text-2xl">
              M
            </div>
            <span className="font-serif font-bold text-3xl text-brand-dark">
              Dra. Mariana
            </span>
          </div>
          <div className="flex gap-4">
             <a href="#" className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center text-brand-dark hover:bg-brand-orange hover:text-white hover:border-brand-orange transition-all">
               <FacebookIcon className="w-5 h-5"/>
             </a>
             <a href="#" className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center text-brand-dark hover:bg-brand-orange hover:text-white hover:border-brand-orange transition-all">
               <InstagramIcon className="w-5 h-5"/>
             </a>
          </div>
        </div>

        {/* Contact info grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
          <div>
            <h4 className="font-script text-3xl text-brand-dark mb-2">WhatsApp</h4>
            <p className="text-gray-500 text-sm font-semibold">+351 912 345 678</p>
          </div>
          <div>
            <h4 className="font-script text-3xl text-brand-dark mb-2">Telefone</h4>
            <p className="text-gray-500 text-sm font-semibold">+351 213 456 789</p>
          </div>
          <div>
            <h4 className="font-script text-3xl text-brand-dark mb-2">E-mail</h4>
            <p className="text-gray-500 text-sm font-semibold">contacto@dramariana.pt</p>
          </div>
          <div>
            <h4 className="font-script text-3xl text-brand-dark mb-2">Atendimento</h4>
            <p className="text-gray-500 text-sm font-semibold">Seg-Sex: 8h – 12h | 13h – 18h</p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-brand-dark text-center py-6 text-xs text-gray-400">
        <p>Desenvolvido para clínica de nutrição.<br/>Todos os direitos reservados &copy; {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};
