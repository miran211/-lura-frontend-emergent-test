import React from 'react';
import { salonInfo } from '../mock';
import { Phone, Mail, MapPin, Instagram, Facebook, Heart, Calendar } from 'lucide-react';
import { Button } from './ui/button';

const Footer = ({ onBookAppointment }) => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">{salonInfo.name}</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              {salonInfo.description}
            </p>
            <Button
              onClick={onBookAppointment}
              className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white rounded-full"
            >
              <Calendar size={18} className="mr-2" />
              Randevu Al
            </Button>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-300">Keçidlər</h4>
            <ul className="space-y-3">
              <li>
                <button onClick={() => scrollToSection('hero')} className="text-gray-400 hover:text-amber-400 transition-colors">
                  Ana Səhifə
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-amber-400 transition-colors">
                  Xidmətlər
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('staff')} className="text-gray-400 hover:text-amber-400 transition-colors">
                  Komanda
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('gallery')} className="text-gray-400 hover:text-amber-400 transition-colors">
                  Qalereya
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="text-gray-400 hover:text-amber-400 transition-colors">
                  Əlaqə
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-300">Əlaqə</h4>
            <ul className="space-y-4">
              <li>
                <a href={`tel:${salonInfo.phone}`} className="flex items-start gap-3 text-gray-400 hover:text-amber-400 transition-colors group">
                  <Phone size={20} className="mt-0.5 group-hover:scale-110 transition-transform" />
                  <span>{salonInfo.phone}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${salonInfo.email}`} className="flex items-start gap-3 text-gray-400 hover:text-amber-400 transition-colors group">
                  <Mail size={20} className="mt-0.5 group-hover:scale-110 transition-transform" />
                  <span>{salonInfo.email}</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-gray-400">
                  <MapPin size={20} className="mt-0.5" />
                  <span>{salonInfo.address}</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Working Hours & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-300">İş Saatları</h4>
            <ul className="space-y-2 mb-6">
              <li className="text-gray-400">
                <span className="font-medium">B.e - Cümə:</span> {salonInfo.workingHours.weekdays}
              </li>
              <li className="text-gray-400">
                <span className="font-medium">Şənbə:</span> {salonInfo.workingHours.saturday}
              </li>
              <li className="text-red-400">
                <span className="font-medium">Bazar:</span> {salonInfo.workingHours.sunday}
              </li>
            </ul>

            <h4 className="text-lg font-semibold mb-4 text-amber-300">Sosial Media</h4>
            <div className="flex gap-3">
              <a
                href={salonInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 transition-all group"
              >
                <Instagram size={20} className="group-hover:scale-110 transition-transform" />
              </a>
              <a
                href={salonInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all group"
              >
                <Facebook size={20} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} {salonInfo.name}. Bütün hüquqlar qorunur.
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-2">
              Made with <Heart size={16} className="text-red-500 fill-red-500" /> for Beauty
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
