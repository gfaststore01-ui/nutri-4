import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { BookingWidget } from './components/BookingWidget';
import { About } from './components/About';
import { ServicesGrid } from './components/ServicesGrid';
import { Banner } from './components/Banner';
import { Testimonials } from './components/Testimonials';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans bg-brand-light text-brand-text">
      <Header />
      <main>
        <Hero />
        <Features />
        <BookingWidget />
        <About />
        <ServicesGrid />
        <Banner />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default App;