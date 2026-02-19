import React from 'react';

export const Banner: React.FC = () => {
  return (
    <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      {/* Background Image with overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1498837167922-41c53bbf1029?q=80&w=2000&auto=format&fit=crop)',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed', // Parallax effect
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 text-center px-6">
        <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white drop-shadow-lg leading-tight">
          Descubra o poder<br />da nutrição
        </h2>
      </div>
    </section>
  );
};
