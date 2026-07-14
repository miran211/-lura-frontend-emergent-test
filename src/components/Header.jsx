import React, { useState } from 'react';
import { Phone, Mail, Menu, X, Calendar } from 'lucide-react';
import { Button } from './ui/button';
import { salonInfo } from '../mock';

const Header = ({ scrolled, onBookAppointment }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-amber-800 to-amber-700 text-white py-2 px-4 hidden md:block">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href={`tel:${salonInfo.phone}`} className="flex items-center gap-2 hover:text-amber-200 transition-colors">
              <Phone size={14} />
              <span>{salonInfo.phone}</span>
            </a>
            <a href={`mailto:${salonInfo.email}`} className="flex items-center gap-2 hover:text-amber-200 transition-colors">
              <Mail size={14} />
              <span>{salonInfo.email}</span>
            </a>
          </div>
          <div className="text-sm">
            {salonInfo.workingHours.weekdays}
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg'
            : 'bg-white'
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-2xl md:text-3xl font-bold gradient-text cursor-pointer" onClick={() => scrollToSection('hero')}>
                {salonInfo.name}
              </h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('hero')} className="text-gray-700 hover:text-amber-700 transition-colors font-medium">
                Ana Səhifə
              </button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-amber-700 transition-colors font-medium">
                Xidmətlər
              </button>
              <button onClick={() => scrollToSection('staff')} className="text-gray-700 hover:text-amber-700 transition-colors font-medium">
                Komanda
              </button>
              <button onClick={() => scrollToSection('gallery')} className="text-gray-700 hover:text-amber-700 transition-colors font-medium">
                Qalereya
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-amber-700 transition-colors font-medium">
                Əlaqə
              </button>
              <Button
                onClick={onBookAppointment}
                className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-6 py-2 rounded-full shadow-md"
              >
                <Calendar size={18} className="mr-2" />
                Randevu
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700 hover:text-amber-700 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <button onClick={() => scrollToSection('hero')} className="text-gray-700 hover:text-amber-700 transition-colors font-medium text-left py-2">
                Ana Səhifə
              </button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-amber-700 transition-colors font-medium text-left py-2">
                Xidmətlər
              </button>
              <button onClick={() => scrollToSection('staff')} className="text-gray-700 hover:text-amber-700 transition-colors font-medium text-left py-2">
                Komanda
              </button>
              <button onClick={() => scrollToSection('gallery')} className="text-gray-700 hover:text-amber-700 transition-colors font-medium text-left py-2">
                Qalereya
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-amber-700 transition-colors font-medium text-left py-2">
                Əlaqə
              </button>
              <Button
                onClick={() => {
                  onBookAppointment();
                  setMobileMenuOpen(false);
                }}
                className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-6 py-3 rounded-full shadow-md w-full"
              >
                <Calendar size={18} className="mr-2" />
                Randevu Al
              </Button>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;