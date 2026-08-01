import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Calendar, Clock } from 'lucide-react';
import { bookAppointment } from '../mock';
import { useEffect } from 'react';
import { toast } from 'sonner';

const AppointmentModal = ({ open, onOpenChange }) => {
  const [services, setServices] = useState([]);
  const [staff, setStaff] = useState([]);

  useEffect(() => {
    fetch('https://lura-platform-main.vercel.app/api/v1/tenant-data?subdomain=test')
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setServices(data.services);
          setStaff(data.staff);
        }
      })
      .catch((err) => console.error('Melumat cekilmedi:', err));
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    staffMember: '',
    date: '',
    time: '',
    notes: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value
    });
  };

const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('https://lura-platform-main.vercel.app/api/v1/create-appointment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          subdomain: 'test',
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          serviceName: formData.service,
          staffName: formData.staffMember,
          date: formData.date,
          time: formData.time,
          notes: formData.notes,
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast.success(result.message);
        setFormData({
          name: '',
          phone: '',
          email: '',
          service: '',
          staffMember: '',
          date: '',
          time: '',
          notes: ''
        });
        onOpenChange(false);
      } else {
        toast.error(result.error || 'Xəta baş verdi.');
      }
    } catch (error) {
      toast.error('Xəta baş verdi. Zəhmət olmasa yenidən cəhd edin.');
    } finally {
      setLoading(false);
    }
  };

  // Get tomorrow's date as minimum date
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold gradient-text">Randevu Al</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
         <div>
            <Label htmlFor="staffMember" className="text-sm font-medium mb-2 block">
              Usta Seçin *
            </Label>
            <Select value={formData.staffMember} onValueChange={(value) => handleChange('staffMember', value)} required>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Usta seçin" />
              </SelectTrigger>
              <SelectContent>
               {staff.map((member) => (
                  <SelectItem key={member.id} value={member.name}>
                    {member.name} — {member.specialty}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="date" className="text-sm font-medium mb-2 block">
                <Calendar size={16} className="inline mr-2" />
                Tarix *
              </Label>
              <Input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                placeholder="Adınızı daxil edin"
                className="w-full"
              />
            </div>

            <div>
              <Label htmlFor="phone" className="text-sm font-medium mb-2 block">
                Telefon Nömrəsi *
              </Label>
              <Input
                id="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                placeholder="+994 XX XXX XX XX"
                className="w-full"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="email" className="text-sm font-medium mb-2 block">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              placeholder="email@example.com"
              className="w-full"
            />
          </div>

          <div>
            <Label htmlFor="service" className="text-sm font-medium mb-2 block">
              Xidmət Növü *
            </Label>
            <Select value={formData.service} onValueChange={(value) => handleChange('service', value)} required>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Xidmət seçin" />
              </SelectTrigger>
              <SelectContent>
               {services.map((service) => (
                  <SelectItem key={service.id} value={service.name}>
                    {service.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="date" className="text-sm font-medium mb-2 block">
                <Calendar size={16} className="inline mr-2" />
                Tarix *
              </Label>
              <Input
                id="date"
                type="date"
                required
                min={minDate}
                value={formData.date}
                onChange={(e) => handleChange('date', e.target.value)}
                className="w-full"
              />
            </div>

            <div>
              <Label htmlFor="time" className="text-sm font-medium mb-2 block">
                <Clock size={16} className="inline mr-2" />
                Saat *
              </Label>
              <Select value={formData.time} onValueChange={(value) => handleChange('time', value)} required>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Saat seçin" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="09:00">09:00</SelectItem>
                  <SelectItem value="10:00">10:00</SelectItem>
                  <SelectItem value="11:00">11:00</SelectItem>
                  <SelectItem value="12:00">12:00</SelectItem>
                  <SelectItem value="13:00">13:00</SelectItem>
                  <SelectItem value="14:00">14:00</SelectItem>
                  <SelectItem value="15:00">15:00</SelectItem>
                  <SelectItem value="16:00">16:00</SelectItem>
                  <SelectItem value="17:00">17:00</SelectItem>
                  <SelectItem value="18:00">18:00</SelectItem>
                  <SelectItem value="19:00">19:00</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <Label htmlFor="notes" className="text-sm font-medium mb-2 block">
              Əlavə Qeydlər
            </Label>
            <Textarea
              id="notes"
              value={formData.notes}
              onChange={(e) => handleChange('notes', e.target.value)}
              placeholder="Əlavə məlumat və ya istəklərinizi qeyd edə bilərsiniz..."
              rows={4}
              className="w-full resize-none"
            />
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white py-6 text-lg font-semibold rounded-lg shadow-lg"
          >
            {loading ? 'Göndərilir...' : 'Randevu Təsdiqlə'}
          </Button>

          <p className="text-sm text-gray-600 text-center">
            Randevunuzu təsdiq etdikdən sonra sizinlə əlaqə saxlayacağıq.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AppointmentModal;
