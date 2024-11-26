"use client";

import { useState, useEffect } from "react";

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
      description: "Breve descripción de la situacion",
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
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1,
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="mx-auto w-full">
      {/* Contenedor del carrusel */}
      <div className="relative h-[400px] overflow-hidden rounded-lg md:h-[500px]">
        {/* Imágenes */}
        <div
          className="absolute h-full w-full transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          <div className="absolute flex h-full w-full">
            {images.map((image, index) => (
              <div key={index} className="relative h-full min-w-full">
                <img
                  src={image.url}
                  alt={image.title}
                  className="h-full w-full object-cover"
                />
                {/* Overlay con texto */}
                <div className="absolute inset-0 flex flex-col justify-end bg-black/40 p-8">
                  <h3 className="mb-2 text-2xl font-bold text-white">
                    {image.title}
                  </h3>
                  <p className="text-lg text-gray-200">{image.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Indicadores */}
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 transform space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-3 w-3 rounded-full transition-colors duration-200 ${
                currentIndex === index ? "bg-white" : "bg-white/50"
              }`}
              aria-label={`Ir a imagen ${index + 1}`}
            />
          ))}
        </div>

        {/* Flechas de navegación */}
        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white transition-colors hover:bg-black/50"
          onClick={() =>
            goToSlide(currentIndex === 0 ? images.length - 1 : currentIndex - 1)
          }
        >
          <svg
            className="h-6 w-6"
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
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white transition-colors hover:bg-black/50"
          onClick={() =>
            goToSlide(currentIndex === images.length - 1 ? 0 : currentIndex + 1)
          }
        >
          <svg
            className="h-6 w-6"
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
