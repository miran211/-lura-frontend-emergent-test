import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Staff from '../components/Staff';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import AppointmentModal from '../components/AppointmentModal';

const HomePage = () => {
  const [showAppointmentModal, setShowAppointmentModal] = useState(false);
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
      <Header scrolled={scrolled} onBookAppointment={() => setShowAppointmentModal(true)} />
      <Hero onBookAppointment={() => setShowAppointmentModal(true)} />
      <Services />
      <Staff />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer onBookAppointment={() => setShowAppointmentModal(true)} />
      <AppointmentModal 
        open={showAppointmentModal} 
        onOpenChange={setShowAppointmentModal} 
      />
    </div>
  );
};

export default HomePage;