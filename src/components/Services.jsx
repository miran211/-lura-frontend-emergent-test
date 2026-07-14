import React from 'react';
import { services } from '../mock';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { Scissors, Sparkles, Heart, Palette, Hand, Zap } from 'lucide-react';
import { Badge } from './ui/badge';

const iconMap = {
  Scissors: Scissors,
  Sparkles: Sparkles,
  Heart: Heart,
  Palette: Palette,
  Hand: Hand,
  Zap: Zap
};

const Services = () => {
  return (
    <section id="services" className="section-padding bg-gradient-to-b from-white to-amber-50/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fadeInUp">
          <Badge className="mb-4 bg-amber-100 text-amber-800 hover:bg-amber-200 px-4 py-2 text-sm">
            Xidmətlərimiz
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Professional Xidmətlər</span>
          </h2>
          <p className="text-lg text-gray-600">
            Gözəlliyiniz üçün ən yaxşı xidmətləri təqdim edirik. Hər bir xidmət peşəkar komandamız tərəfindən yüksək keyfiyyətlə həyata keçirilir.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <Card 
                key={service.id} 
                className="hover-lift border-none shadow-lg overflow-hidden group animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                      <Icon className="text-amber-700" size={28} />
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>

        {/* Detailed Price List with Accordion */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 gradient-text">Qiymət Siyahısı</h3>
            <p className="text-gray-600">Ətraflı məlumat üçün xidmətləri seçin</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {services.map((service) => {
              const Icon = iconMap[service.icon];
              return (
                <AccordionItem 
                  key={service.id} 
                  value={`item-${service.id}`}
                  className="bg-white border-2 border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="px-6 py-5 hover:no-underline group">
                    <div className="flex items-center gap-4 text-left">
                      <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center group-hover:bg-amber-200 transition-colors">
                        <Icon className="text-amber-700" size={24} />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">{service.title}</h4>
                        <p className="text-sm text-gray-500 hidden sm:block">{service.description}</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <div className="pt-4 space-y-3">
                      {service.items.map((item, idx) => (
                        <div 
                          key={idx} 
                          className="flex justify-between items-center py-3 px-4 bg-amber-50/50 rounded-lg hover:bg-amber-50 transition-colors"
                        >
                          <span className="text-gray-700 font-medium">{item.name}</span>
                          <span className="text-amber-700 font-bold text-lg">{item.price}</span>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Services;