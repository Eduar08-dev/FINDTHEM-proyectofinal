"use client";

import { useState } from "react";
import Image from "next/image";

export default function GaleriaImagen({ images, className = "" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const openModal = (index) => {
    setCurrentImage(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div
      className={`relative mx-auto grid grid-cols-2 items-center justify-center gap-1 md:w-[320px] md:gap-2 ${className}`}
    >
      {images.map((src, index) => (
        <div
          key={index}
          className={`flex justify-center ${index % 2 === 0 ? "md:mr-1" : "md:ml-1"} ${
            index >= 2 ? "md:mt-8" : "" // Aquí ajustamos el margen
          }`}
          style={{ width: "150px", height: "150px" }}
        >
          <Image
            src={src}
            alt={`Image ${index + 1}`}
            width={150}
            height={150}
            className="cursor-pointer rounded-lg object-cover shadow-custom-shadow"
            onClick={() => openModal(index)}
          />
        </div>
      ))}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={closeModal}
        >
          <div
            className="relative h-auto w-auto max-w-xs p-4 sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[currentImage]}
              alt={`Image ${currentImage + 1}`}
              width={600}
              height={600}
              className="h-auto w-full rounded-lg object-contain sm:h-[200px] sm:w-[300px] md:h-[300px] md:w-[400px] lg:h-[350px] lg:w-[500px] xl:h-[600px] xl:w-[600px]"
            />
            <button
              className="absolute right-5 top-5 h-10 w-10 rounded-full bg-Azul-Suave text-white"
              onClick={closeModal}
            >
              &times;
            </button>
          </div>
          <button
            className="absolute left-5 top-1/2 h-10 w-10 rounded-full bg-Azul-Suave text-white"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
          >
            &lt;
          </button>
          <button
            className="absolute right-5 top-1/2 h-10 w-10 rounded-full bg-Azul-Suave text-white"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
          >
            &gt;
          </button>
        </div>
      )}
    </div>
  );
}
