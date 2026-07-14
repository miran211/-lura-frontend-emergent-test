import React, { useState } from 'react';
import { salonInfo, submitContactForm } from '../mock';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Send } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await submitContactForm(formData);
      if (result.success) {
        toast.success(result.message);
        setFormData({ name: '', phone: '', email: '', message: '' });
      }
    } catch (error) {
      toast.error('Xəta baş verdi. Zəhmət olmasa yenidən cəhd edin.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-white to-amber-50/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fadeInUp">
          <Badge className="mb-4 bg-amber-100 text-amber-800 hover:bg-amber-200 px-4 py-2 text-sm">
            Əlaqə
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Bizimlə Əlaqə</span>
          </h2>
          <p className="text-lg text-gray-600">
            Suallarınız varmı və ya randevu almaq istəyirsiniz? Bizimlə əlaqə saxlayın, tezliklə sizə cavab verəcəyik.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6 animate-fadeInUp">
            <Card className="border-none shadow-lg hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                    <MapPin className="text-amber-700" size={24} />
                  </div>
                  Ünvan
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-lg">{salonInfo.address}</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                    <Phone className="text-amber-700" size={24} />
                  </div>
                  Telefon
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a href={`tel:${salonInfo.phone}`} className="text-amber-700 hover:text-amber-800 font-semibold text-lg">
                  {salonInfo.phone}
                </a>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                    <Mail className="text-amber-700" size={24} />
                  </div>
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a href={`mailto:${salonInfo.email}`} className="text-amber-700 hover:text-amber-800 font-semibold text-lg">
                  {salonInfo.email}
                </a>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                    <Clock className="text-amber-700" size={24} />
                  </div>
                  İş Saatları
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-medium">Bazar ertəsi - Cümə:</span>
                  <span className="text-amber-700 font-semibold">{salonInfo.workingHours.weekdays}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700 font-medium">Şənbə:</span>
                  <span className="text-amber-700 font-semibold">{salonInfo.workingHours.saturday}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700 font-medium">Bazar:</span>
                  <span className="text-red-600 font-semibold">{salonInfo.workingHours.sunday}</span>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="border-none shadow-lg bg-gradient-to-br from-amber-600 to-amber-700 text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Sosial Media</h3>
                <div className="flex gap-4">
                  <a
                    href={salonInfo.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                  >
                    <Instagram size={24} />
                  </a>
                  <a
                    href={salonInfo.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                  >
                    <Facebook size={24} />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <Card className="border-none shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl">Mesaj Göndərin</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Adınız *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Adınızı daxil edin"
                      className="w-full border-gray-300 focus:border-amber-500 focus:ring-amber-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefon *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+994 XX XXX XX XX"
                      className="w-full border-gray-300 focus:border-amber-500 focus:ring-amber-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="email@example.com"
                      className="w-full border-gray-300 focus:border-amber-500 focus:ring-amber-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Mesajınız *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Mesajınızı buraya yazın..."
                      rows={5}
                      className="w-full border-gray-300 focus:border-amber-500 focus:ring-amber-500 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white py-6 text-lg font-semibold rounded-lg shadow-lg"
                  >
                    {loading ? (
                      <span>Göndərilir...</span>
                    ) : (
                      <>
                        <Send size={20} className="mr-2" />
                        Mesajı Göndər
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;