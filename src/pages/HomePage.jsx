import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Staff from '../components/Staff';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const HomePage = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header scrolled={scrolled} onBookAppointment={() => window.LuraWidget.open()} />
      <Hero onBookAppointment={() => window.LuraWidget.open()} />
      <Services />
      <Staff />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer onBookAppointment={() => window.LuraWidget.open()} />
    </div>
  );
};

export default HomePage;
