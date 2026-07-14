import React from 'react';
import { Button } from './ui/button';
import { Calendar, Sparkles, Phone } from 'lucide-react';
import { salonInfo } from '../mock';

const Hero = ({ onBookAppointment }) => {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-white to-amber-50/30 z-0"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-amber-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-amber-300/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fadeInUp">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-amber-200 shadow-sm">
              <Sparkles size={18} className="text-amber-600" />
              <span className="text-sm font-medium text-amber-800">Premium Gözəllik Salonu</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="gradient-text">{salonInfo.name}</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              {salonInfo.tagline}
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
              {salonInfo.description}
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                onClick={onBookAppointment}
                size="lg"
                className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl"
              >
                <Calendar size={20} className="mr-2" />
                Randevu Al
              </Button>
              
              <Button
                onClick={scrollToServices}
                size="lg"
                variant="outline"
                className="border-2 border-amber-600 text-amber-700 hover:bg-amber-50 px-8 py-6 text-lg rounded-full"
              >
                Xidmətlərimiz
              </Button>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-6 pt-6">
              <a href={`tel:${salonInfo.phone}`} className="flex items-center gap-3 text-gray-700 hover:text-amber-700 transition-colors group">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center group-hover:bg-amber-200 transition-colors">
                  <Phone size={20} className="text-amber-700" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Bizimlə əlaqə</p>
                  <p className="font-semibold">{salonInfo.phone}</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right Content - Image Grid */}
          <div className="relative animate-fadeIn">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-2xl hover-lift">
                  <img
                    src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTJ8MHwxfHNlYXJjaHwzfHxzYWxvbiUyMGludGVyaW9yfGVufDB8fHx8MTc4Mzg3MzkxNnww&ixlib=rb-4.1.0&q=85"
                    alt="Salon Interior"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-2xl hover-lift">
                  <img
                    src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzOTB8MHwxfHNlYXJjaHwyfHxoYWlyJTIwc3R5bGluZ3xlbnwwfHx8fDE3ODM4NzM5MjJ8MA&ixlib=rb-4.1.0&q=85"
                    alt="Hair Styling"
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-2xl overflow-hidden shadow-2xl hover-lift">
                  <img
                    src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzJ8MHwxfHNlYXJjaHwxfHxzcGElMjB0cmVhdG1lbnR8ZW58MHx8fHwxNzgzODczOTI3fDA&ixlib=rb-4.1.0&q=85"
                    alt="Spa Treatment"
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-2xl hover-lift">
                  <img
                    src="https://images.unsplash.com/photo-1560066984-138dadb4c035?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTJ8MHwxfHNlYXJjaHw0fHxzYWxvbiUyMGludGVyaW9yfGVufDB8fHx8MTc4Mzg3MzkxNnww&ixlib=rb-4.1.0&q=85"
                    alt="Salon"
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-6 glass-effect animate-scaleIn">
              <div className="text-center">
                <p className="text-4xl font-bold gradient-text">12+</p>
                <p className="text-sm text-gray-600 mt-1">İllik Təcrübə</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;