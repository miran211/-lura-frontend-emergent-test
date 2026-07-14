import React, { useState } from 'react';
import { gallery } from '../mock';
import { Badge } from './ui/badge';
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : gallery.length - 1;
    setCurrentIndex(newIndex);
    setSelectedImage(gallery[newIndex]);
  };

  const goToNext = () => {
    const newIndex = currentIndex < gallery.length - 1 ? currentIndex + 1 : 0;
    setCurrentIndex(newIndex);
    setSelectedImage(gallery[newIndex]);
  };

  return (
    <section id="gallery" className="section-padding bg-gradient-to-b from-amber-50/30 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fadeInUp">
          <Badge className="mb-4 bg-amber-100 text-amber-800 hover:bg-amber-200 px-4 py-2 text-sm">
            Qalereya
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Bizim Salon</span>
          </h2>
          <p className="text-lg text-gray-600">
            Salonumuzun atmosferi və xidmətlərimizdən görüntülər. Gözəl və rahat muhəyitdə sizə xidmət edirik.
          </p>
        </div>

        {/* Gallery Grid - Masonry Style */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {gallery.map((item, index) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer animate-fadeIn hover-scale ${
                index === 0 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
              style={{ animationDelay: `${index * 0.05}s` }}
              onClick={() => openLightbox(item, index)}
            >
              <div className="relative h-full min-h-[200px] md:min-h-[250px]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Overlay Info */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-xs font-medium text-amber-300 mb-1">{item.category}</p>
                  <p className="text-sm font-semibold">{item.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Dialog */}
        {selectedImage && (
          <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
            <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-black/95 border-none">
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Close Button */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 z-50 text-white hover:bg-white/20 rounded-full"
                  onClick={() => setSelectedImage(null)}
                >
                  <X size={24} />
                </Button>

                {/* Previous Button */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-50 text-white hover:bg-white/20 rounded-full"
                  onClick={(e) => {
                    e.stopPropagation();
                    goToPrevious();
                  }}
                >
                  <ChevronLeft size={32} />
                </Button>

                {/* Next Button */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-50 text-white hover:bg-white/20 rounded-full"
                  onClick={(e) => {
                    e.stopPropagation();
                    goToNext();
                  }}
                >
                  <ChevronRight size={32} />
                </Button>

                {/* Image */}
                <div className="max-w-6xl max-h-[85vh] p-8">
                  <img
                    src={selectedImage.image}
                    alt={selectedImage.title}
                    className="w-full h-full object-contain rounded-lg"
                  />
                  <div className="text-center mt-4 text-white">
                    <p className="text-amber-400 text-sm mb-1">{selectedImage.category}</p>
                    <p className="text-lg font-semibold">{selectedImage.title}</p>
                    <p className="text-sm text-gray-400 mt-2">
                      {currentIndex + 1} / {gallery.length}
                    </p>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </section>
  );
};

export default Gallery;