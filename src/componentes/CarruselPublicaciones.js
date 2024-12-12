"use client";

import { useState, useEffect, useRef } from "react";
import { collection, query, orderBy, limit, onSnapshot } from 'firebase/firestore';
import { db } from '../lib/firebase';


const CarruselPublicaciones = () => {
  const [publicaciones, setPublicaciones] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const q = query(
      collection(db, 'personas_desaparecidas'),
      orderBy('fechaPublicacion'),
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const nuevasPublicaciones = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
      }));

      if (nuevasPublicaciones.length > 3) {
      setPublicaciones(nuevasPublicaciones.slice(-3).reverse());
      } else {
      setPublicaciones(nuevasPublicaciones.reverse());
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === publicaciones.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [publicaciones]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  if (publicaciones.length === 0) {
    return <div className="flex justify-center text-6xl py-6 px-10">Cargando carrusel informativo...</div>;
  }
  4
  const useIntersectionObserver = (options = {}) => {
    const ref = useRef(null);
    const [isIntersecting, setIsIntersecting] = useState(false);
  
    useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      }, options);
  
      if (ref.current) {
        observer.observe(ref.current);
      }
  
      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }, [options]);
  
    return [ref, isIntersecting];
  };
  
  const AnimatedSection = ({ children, className = '' }) => {
    const [ref, isIntersecting] = useIntersectionObserver({
      threshold: 0.1,
      triggerOnce: true,
    });
  
    return (
      <div
        ref={ref}
        className={`transition-all duration-1000 ${
          isIntersecting
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-10'
        } ${className}`}
      >
        {children}
      </div>
    );
  };

  return (
    <AnimatedSection>

    <div className=" mx-auto max-w-screen-xl py-4">
      {/* Contenedor del carrusel */}
      <div className="relative h-[300px] overflow-hidden rounded-lg sm:h-[400px] md:h-[500px]">
        {/* Imágenes */}
        <div
          className="h-full w-full transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          <div className="flex h-full w-full">
            {publicaciones.map((publicacion) => (
              <div key={publicacion.id} className="relative h-full min-w-full">
                <img
                  src={publicacion.imageUrls[0]}
                  alt={publicacion.nombre}
                  className="h-full w-full object-cover md:object-contain"
                />
                {/* Overlay con texto */}
                <div className="absolute inset-0 flex flex-col justify-end bg-black/40 p-4 sm:p-6 md:p-8">
                  <h3 className="mb-2 text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl">
                    {publicacion.nombre}
                  </h3>
                  <p className="text-sm text-gray-300 sm:text-base md:text-lg lg:text-xl">
                    {publicacion.descripcionHechos}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Indicadores */}
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 transform space-x-2">
          {publicaciones.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-3 w-3 rounded-full transition-colors duration-300 ${
                currentIndex === index ? "bg-white" : "bg-white/50 hover:bg-white/70"
              }`}
              aria-label={`Ir a imagen ${index + 1}`}
            />
          ))}
        </div>

        {/* Flechas de navegación */}
        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white transition hover:bg-black/50"
          onClick={() =>
            goToSlide(currentIndex === 0 ? publicaciones.length - 1 : currentIndex - 1)
          }
          aria-label="Anterior"
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
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white transition hover:bg-black/50"
          onClick={() =>
            goToSlide(currentIndex === publicaciones.length - 1 ? 0 : currentIndex + 1)
          }
          aria-label="Siguiente"
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
    </AnimatedSection>
  );
};

export default CarruselPublicaciones;

