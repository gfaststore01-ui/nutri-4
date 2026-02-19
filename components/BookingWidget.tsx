import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, UserIcon, MailIcon, PhoneIcon, MapPinIcon, ClipboardIcon } from './Icons';

export const BookingWidget: React.FC = () => {
  const [step, setStep] = useState<1 | 2>(1);
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    cidade: '',
    anotacao: ''
  });

  // Generate a mock calendar array for the month
  const days = Array.from({ length: 30 }, (_, i) => i + 1);
  const startOffset = 3; // Starts on Wednesday
  const emptyDays = Array.from({ length: startOffset }, (_, i) => null);
  const allDays = [...emptyDays, ...days];

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setStep(2);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `*Novo Agendamento de Consulta*\n\n*Data:* ${selectedDay} de Novembro 2024\n*Horário:* ${selectedTime}\n\n*Dados do Paciente:*\n*Nome:* ${formData.nome}\n*E-mail:* ${formData.email}\n*Telefone:* ${formData.telefone}\n*Cidade:* ${formData.cidade}\n*Anotações:* ${formData.anotacao || 'Nenhuma'}`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = "5563992342346";
    const url = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    window.open(url, '_blank');
  };

  return (
    <section id="agendar" className="py-24 bg-brand-dark text-white relative">
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl mb-4">Agendar consulta</h2>
          <p className="font-script text-3xl md:text-4xl text-brand-light opacity-90">
            Transforme os seus hábitos alimentares para uma vida mais saudável
          </p>
        </div>

        {/* Mock Scheduling App UI */}
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden max-w-3xl mx-auto text-brand-dark transition-all duration-300">
          
          {step === 1 && (
            <div className="p-6 md:p-10 animate-[fadeIn_0.3s_ease-out]">
              <h3 className="font-bold text-xl mb-1">Agendar Consulta</h3>
              <p className="text-sm text-gray-500 mb-6 border-b pb-6">Duração: 1 hora</p>
              
              <div className="mb-4">
                <p className="text-sm font-semibold text-center mb-1">Fuso horário: <span className="font-normal text-gray-600">Europa/Lisboa</span></p>
              </div>

              <div className="flex items-center justify-between mb-8">
                <h4 className="font-bold text-lg">Selecione uma data</h4>
                <div className="flex items-center gap-4">
                  <button className="p-1 hover:bg-gray-100 rounded-full transition-colors"><ChevronLeftIcon className="w-5 h-5"/></button>
                  <span className="font-semibold">Novembro 2024</span>
                  <button className="p-1 hover:bg-gray-100 rounded-full transition-colors"><ChevronRightIcon className="w-5 h-5"/></button>
                </div>
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-2 mb-6">
                {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'].map(day => (
                  <div key={day} className="text-center text-xs font-bold text-gray-400 py-2">
                    {day}
                  </div>
                ))}
                
                {allDays.map((day, idx) => (
                  <div key={idx} className="aspect-square flex items-center justify-center">
                    {day && (
                      <button 
                        onClick={() => setSelectedDay(day)}
                        className={`w-10 h-10 rounded-full flex items-center justify-center transition-all text-sm font-semibold
                          ${selectedDay === day 
                            ? 'bg-brand-blue text-white shadow-md' 
                            : 'hover:bg-blue-50 text-gray-700'
                          }`}
                      >
                        {day}
                      </button>
                    )}
                  </div>
                ))}
              </div>

              {selectedDay && (
                <div className="mt-8 pt-6 border-t border-gray-100 animate-[fadeIn_0.3s_ease-out]">
                  <h4 className="font-bold text-lg mb-4">Horários para dia {selectedDay} de Novembro</h4>
                  <div className="grid grid-cols-3 gap-3">
                    {['09:00', '10:30', '14:00', '15:30', '17:00'].map(time => (
                      <button 
                        key={time} 
                        onClick={() => handleTimeSelect(time)}
                        className="border border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white py-2 rounded-md font-semibold transition-colors"
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {step === 2 && (
            <div className="p-6 md:p-10 animate-[fadeIn_0.3s_ease-out]">
              
              <div className="mb-8 border-b border-gray-100 pb-6">
                <button 
                  onClick={() => setStep(1)}
                  className="flex items-center gap-1 text-sm text-gray-500 hover:text-brand-orange transition-colors mb-4"
                >
                  <ChevronLeftIcon className="w-4 h-4" /> Voltar
                </button>
                <h3 className="text-2xl font-bold text-brand-dark mb-2">Você está registrando: Agendar Consulta</h3>
                <p className="text-gray-500 text-sm">
                  {selectedDay} de Novembro de 2024 {selectedTime} - {(new Date(`2024-11-${selectedDay}T${selectedTime}:00`).getHours() + 1).toString().padStart(2, '0')}:{(new Date(`2024-11-${selectedDay}T${selectedTime}:00`).getMinutes()).toString().padStart(2, '0')} Europa/Lisboa
                </p>
                <p className="text-brand-dark font-semibold mt-6 text-[15px]">
                  Ao finalizar o agendamento, você receberá uma confirmação de um de nossos atendentes no WhatsApp.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="flex items-center gap-3 bg-[#f5f5f5] p-4 rounded-sm border border-transparent focus-within:border-brand-blue transition-colors">
                  <UserIcon className="text-gray-500 w-5 h-5 flex-shrink-0" />
                  <input 
                    type="text" 
                    name="nome"
                    value={formData.nome}
                    onChange={handleInputChange}
                    placeholder="Nome*" 
                    className="bg-transparent w-full outline-none text-gray-700 placeholder-gray-500 text-[15px]" 
                    required 
                  />
                </div>

                <div className="flex items-center gap-3 bg-[#f5f5f5] p-4 rounded-sm border border-transparent focus-within:border-brand-blue transition-colors">
                  <MailIcon className="text-gray-500 w-5 h-5 flex-shrink-0" />
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="E-mail*" 
                    className="bg-transparent w-full outline-none text-gray-700 placeholder-gray-500 text-[15px]" 
                    required 
                  />
                </div>

                <div className="flex flex-col gap-1 bg-[#f5f5f5] p-3 px-4 rounded-sm border border-transparent focus-within:border-brand-blue transition-colors">
                  <label className="text-xs text-gray-500 ml-8">Telefone</label>
                  <div className="flex items-center gap-3">
                    <PhoneIcon className="text-gray-500 w-5 h-5 flex-shrink-0" />
                    {/* Fake country code dropdown for visual match */}
                    <div className="flex items-center gap-1 text-sm border-r border-gray-300 pr-2">
                       <span>🇵🇹</span>
                       <span className="text-[10px]">▼</span>
                    </div>
                    <input 
                      type="tel" 
                      name="telefone"
                      value={formData.telefone}
                      onChange={handleInputChange}
                      placeholder="Enter a phone number" 
                      className="bg-transparent w-full outline-none text-gray-700 placeholder-gray-500 text-[15px]" 
                      required
                    />
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-[#f5f5f5] p-4 rounded-sm border border-transparent focus-within:border-brand-blue transition-colors">
                  <MapPinIcon className="text-gray-500 w-5 h-5 flex-shrink-0" />
                  <input 
                    type="text" 
                    name="cidade"
                    value={formData.cidade}
                    onChange={handleInputChange}
                    placeholder="Cidade" 
                    className="bg-transparent w-full outline-none text-gray-700 placeholder-gray-500 text-[15px]" 
                  />
                </div>

                <div className="flex items-start gap-3 bg-[#f5f5f5] p-4 rounded-sm border border-transparent focus-within:border-brand-blue transition-colors">
                  <ClipboardIcon className="text-gray-500 w-5 h-5 flex-shrink-0 mt-1" />
                  <textarea 
                    name="anotacao"
                    value={formData.anotacao}
                    onChange={handleInputChange}
                    placeholder="Anotação" 
                    className="bg-transparent w-full outline-none text-gray-700 placeholder-gray-500 text-[15px] resize-y min-h-[80px]" 
                  ></textarea>
                </div>

                <div className="pt-6">
                  <button 
                    type="submit"
                    className="bg-[#FF8640] hover:bg-[#e57535] text-white font-bold py-3 px-8 rounded-sm transition-colors text-sm tracking-wide"
                  >
                    AGENDAR
                  </button>
                </div>

              </form>

            </div>
          )}

        </div>
        
      </div>
      
      {/* Decorative leaf sketch in background */}
      <svg className="absolute top-0 right-0 w-64 h-64 text-white/5 pointer-events-none" viewBox="0 0 200 200" fill="currentColor">
        <path d="M100 0C40 20 10 80 0 150c40-10 100-30 150-100 20-30 30-50 50-50-20 0-40 0-100 0z" />
      </svg>
    </section>
  );
};
