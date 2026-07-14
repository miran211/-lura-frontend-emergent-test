import React from 'react';
import { testimonials } from '../mock';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Star, Quote } from 'lucide-react';
import { Avatar, AvatarFallback } from './ui/avatar';

const Testimonials = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fadeInUp">
          <Badge className="mb-4 bg-amber-100 text-amber-800 hover:bg-amber-200 px-4 py-2 text-sm">
            Rəylər
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Müştərilərimiz Deyir</span>
          </h2>
          <p className="text-lg text-gray-600">
            Məmnun müştərilərimizin bizim haqqımızda düşüncələri. Onların rəyləri bizim üçün çox dəyərlidir.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id} 
              className="border-none shadow-lg hover-lift bg-gradient-to-br from-white to-amber-50/30 animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="mb-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                    <Quote className="text-amber-700" size={24} />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="text-amber-500 fill-amber-500" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-gray-700 mb-6 leading-relaxed text-sm">
                  "{testimonial.comment}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                  <Avatar className="w-10 h-10">
                    <AvatarFallback className="bg-gradient-to-br from-amber-500 to-amber-600 text-white font-semibold">
                      {testimonial.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{testimonial.name}</p>
                    <p className="text-xs text-gray-500">{new Date(testimonial.date).toLocaleDateString('az-AZ')}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center animate-fadeInUp">
          <div className="bg-gradient-to-r from-amber-600 to-amber-700 rounded-3xl p-12 max-w-4xl mx-auto shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Siz də bizim ailimizə qoşulun!
            </h3>
            <p className="text-amber-100 text-lg mb-8 max-w-2xl mx-auto">
              Gözəlliyiniz üçün peşəkar komandmız hər zaman sizə xidmət etməyə hazırdır. İlk randevunuzu bu gün ayırın!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="#contact"
                className="bg-white text-amber-700 px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl hover:bg-amber-50 transition-all inline-block"
              >
                Bizimlə Əlaqə Saxlayın
              </a>
              <a
                href={`tel:+994123456789`}
                className="bg-amber-800 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl hover:bg-amber-900 transition-all inline-block"
              >
                Dərhal Zəng Edin
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;