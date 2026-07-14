import React from 'react';
import { staff } from '../mock';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Award, Star } from 'lucide-react';

const Staff = () => {
  return (
    <section id="staff" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fadeInUp">
          <Badge className="mb-4 bg-amber-100 text-amber-800 hover:bg-amber-200 px-4 py-2 text-sm">
            Komandamız
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Peşəkar Komanda</span>
          </h2>
          <p className="text-lg text-gray-600">
            Təcrübəli və lisenziyalı mütəxəssislərimiz sizə ən yaxşı xidməti təqdim etmək üçün hər zaman hazırdır.
          </p>
        </div>

        {/* Staff Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {staff.map((member, index) => (
            <Card 
              key={member.id} 
              className="overflow-hidden border-none shadow-lg hover-lift group animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                {/* Name and Position Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                  <p className="text-amber-300 font-medium mb-2">{member.position}</p>
                  <div className="flex items-center gap-2 text-sm">
                    <Award size={16} className="text-amber-400" />
                    <span>{member.experience}</span>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Star size={18} className="text-amber-500 fill-amber-500" />
                    <span className="font-semibold text-gray-900">İxtisas</span>
                  </div>
                  <p className="text-amber-700 font-medium">{member.specialization}</p>
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="mt-20 bg-gradient-to-br from-amber-50 to-amber-100/50 rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="animate-fadeInUp">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <Award size={32} className="text-amber-700" />
              </div>
              <h4 className="text-2xl font-bold mb-2 gradient-text">12+</h4>
              <p className="text-gray-700">İllik Təcrübə</p>
            </div>
            
            <div className="animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <Star size={32} className="text-amber-700" />
              </div>
              <h4 className="text-2xl font-bold mb-2 gradient-text">500+</h4>
              <p className="text-gray-700">Məmnun Müştəri</p>
            </div>
            
            <div className="animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <Sparkles size={32} className="text-amber-700" />
              </div>
              <h4 className="text-2xl font-bold mb-2 gradient-text">100%</h4>
              <p className="text-gray-700">Keyfiyyət Zəmanəti</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Sparkles = ({ size, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
  </svg>
);

export default Staff;