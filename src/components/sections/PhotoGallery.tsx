
import React from 'react';

const photos = [
  { src: `https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop`, alt: "Matrix movie code rain" },
  { src: `https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop`, alt: "People standing around a display of video screens" },
  { src: `https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=600&h=400&fit=crop`, alt: "Man in an office chair looking at code" },
  { src: `https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=600&h=400&fit=crop`, alt: "A modern living room with a couch and table" },
  { src: `https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop`, alt: "Woman in a lab coat using a laptop" },
  { src: `https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=400&fit=crop`, alt: "Woman sitting on a bed using a laptop" },
];

export function PhotoGallery() {
  return (
    <section id="photos" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-display font-bold text-center mb-4 animate-fade-in-up">
          My Gallery
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-12 text-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          A collection of moments and things I find interesting. A glimpse into my world outside of coding.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {photos.map((photo, index) => (
            <div 
              key={index} 
              className="overflow-hidden rounded-lg shadow-lg group animate-fade-in-up"
              style={{ animationDelay: `${(index * 0.1) + 0.4}s` }}
            >
              <img 
                src={photo.src} 
                alt={photo.alt}
                className="w-full h-64 object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
