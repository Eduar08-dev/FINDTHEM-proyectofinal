"use client";

import { useState, useEffect } from 'react';

const CarruselPublicaciones = () => {
  const images = [
    {
      url: "img-principal.jpg",
      title: "Aquí va el nombre",
      description: "Breve descripción de la situacion",
    },
    {
      url: "img-principal.jpg",
      title: "Aquí va el nombre",
      description: "Breve descripción de la situacion"
    },
    {
      url: "img-principal.jpg",
      title: "Aquí va el nombre",
      description: "Breve descripción de la situacion",
    },
    {
      url: "img-principal.jpg",
      title: "Aquí va el nombre",
      description: "Breve descripción de la situacion",
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center text-white mb-8">
        Últimas Publicaciones
      </h2>
      
      {/* Contenedor del carrusel */}
      <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-lg">
        {/* Imágenes */}
        <div 
          className="absolute w-full h-full transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          <div className="absolute w-full h-full flex">
            {images.map((image, index) => (
              <div
                key={index}
                className="min-w-full h-full relative"
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
                {/* Overlay con texto */}
                <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-8">
                  <h3 className="text-white text-2xl font-bold mb-2">
                    {image.title}
                  </h3>
                  <p className="text-gray-200 text-lg">
                    {image.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Indicadores */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                currentIndex === index ? 'bg-white' : 'bg-white/50'
              }`}
              aria-label={`Ir a imagen ${index + 1}`}
            />
          ))}
        </div>

        {/* Flechas de navegación */}
        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
          onClick={() => goToSlide(currentIndex === 0 ? images.length - 1 : currentIndex - 1)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
          onClick={() => goToSlide(currentIndex === images.length - 1 ? 0 : currentIndex + 1)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CarruselPublicaciones;




