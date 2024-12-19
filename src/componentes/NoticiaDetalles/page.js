// import Image from 'next/image';
// import Link from 'next/link';

// const CardDetalles = ({ publicacion }) => {
//   return (
//     <div>
//       <Link
//        href="/noticias"
//        className="inline-block px-4 py-2 bg-blue-500 text-white font-semibold text-sm rounded-lg shadow-md hover:bg-blue-600 hover:shadow-lg transition-all duration-300"
//        >
//         &larr; Volver a la lista
//       </Link>
//       <div className="bg-white rounded-lg shadow-md overflow-hidden">
//         <div className="relative h-96">
//           <Image
//             src={publicacion.imageUrls[0]}
//             alt={publicacion.nombre}
//             layout="fill"
//             objectFit="contain"
//           />
//         </div>
//         <div className="p-6 text-black">
//           <h1 className="text-3xl font-bold mb-4">{publicacion.nombre}</h1>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <p><strong>Edad:</strong> {publicacion.edad}</p>
//             <p><strong>Barrio:</strong> {publicacion.barrio}</p>
//             <p><strong>Última ubicación:</strong> {publicacion.ultimaUbicacion}</p>
//             <p><strong>Día del suceso:</strong> {publicacion.diaSuceso}</p>
//             <p><strong>Última vez vista:</strong> {publicacion.ultimaVezVista}</p>
//             <p><strong>Condición:</strong> {publicacion.condicion}</p>
//           </div>
//           <p className="mt-6 text-black text-xl">{publicacion.descripcionHechos}</p>
//         </div>
//         <div className="p-6 bg-gray-100">
//           <h2 className="text-2xl font-semibold mb-4">Galería de imágenes</h2>
//           <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//             {publicacion.imageUrls.map((url, index) => (
//               <div key={index} className="relative h-48">
//               <Link href={url}>
//               <p target="_blank" rel="noopener noreferrer">
//                 <Image
//                 src={url}
//                 alt={`Imagen ${index + 1} de ${publicacion.nombre}`}
//                 layout="fill"
//                 objectFit="contain"
//                 className="rounded"
//                 />
//               </p>
//               </Link>
//             </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CardDetalles;

"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const CardDetalles = ({ publicacion }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const convertTimestamp = (timestamp) => {
    if (timestamp && timestamp.seconds) {
      return new Date(timestamp.seconds * 1000).toISOString();
    }
    return timestamp;
  };

  const publicacionConFechaConvertida = {
    ...publicacion,
    fechaPublicacion: convertTimestamp(publicacion.fechaPublicacion),
    ultimaVezVista: convertTimestamp(publicacion.ultimaVezVista),
    diaSuceso: convertTimestamp(publicacion.diaSuceso),
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === publicacionConFechaConvertida.imageUrls.length - 1
        ? 0
        : prevIndex + 1,
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? publicacionConFechaConvertida.imageUrls.length - 1
        : prevIndex - 1,
    );
  };

  const handleClose = () => {
    setIsGalleryOpen(false);
  };

  const handleOpen = (index) => {
    setCurrentIndex(index);
    setIsGalleryOpen(true);
  };

  // Asegurarse de que `imageUrls` sea un arreglo válido antes de mapear
  const images = Array.isArray(publicacionConFechaConvertida.imageUrls)
    ? publicacionConFechaConvertida.imageUrls
    : [];

  return (
    <div className="mx-auto max-w-7xl p-4 md:p-6 lg:p-8">
      <div className="mb-4 flex justify-start">
        <Link
          href="/noticias"
          className="rounded-lg border-2 border-Azul-Fuerte bg-Azul-Suave px-4 py-2 font-semibold text-white shadow-custom-shadow hover:bg-Azul-Mediano"
        >
          &larr; Volver a la lista
        </Link>
      </div>
      <div className="overflow-hidden rounded-lg bg-white shadow-custom-shadow">
        <div className="relative h-96 w-full">
          {images.length > 0 ? (
            <Image
              src={images[0]}
              alt={publicacionConFechaConvertida.nombre || "Imagen"}
              layout="fill"
              objectFit="contain"
              className="rounded border-2"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gray-200 text-xl font-bold">
              <p>Sin Fotos</p>
            </div>
          )}
        </div>
        <div className="p-6 text-Azul-Fuerte">
          <h1 className="mb-4 text-center text-3xl font-bold">
            {publicacionConFechaConvertida.nombre}
          </h1>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <p>
              <strong>Edad:</strong> {publicacionConFechaConvertida.edad}
            </p>
            <p>
              <strong>Barrio:</strong> {publicacionConFechaConvertida.barrio}
            </p>
            <p>
              <strong>Última ubicación:</strong>{" "}
              {publicacionConFechaConvertida.ultimaUbicacion}
            </p>
            <p>
              <strong>Día del suceso:</strong>{" "}
              {publicacionConFechaConvertida.diaSuceso}
            </p>
            <p>
              <strong>Última vez vista:</strong>{" "}
              {publicacionConFechaConvertida.ultimaVezVista}
            </p>
            <p>
              <strong>Condición:</strong>{" "}
              {publicacionConFechaConvertida.condicion}
            </p>
          </div>
          <p className="mt-6">
            <strong>Descripción de hechos:</strong>{" "}
            {publicacionConFechaConvertida.descripcionHechos}
          </p>
        </div>
        <div className="bg-gray-100 p-6">
          <h2 className="mb-4 text-2xl font-semibold text-Azul-Fuerte">
            Galería de imágenes
          </h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {images.map((url, index) => (
              <div
                key={index}
                className="relative h-48 cursor-pointer"
                onClick={() => handleOpen(index)}
              >
                <Image
                  src={url}
                  alt={`Imagen ${index + 1} de ${publicacionConFechaConvertida.nombre}`}
                  layout="fill"
                  objectFit="contain"
                  className="rounded shadow-custom-shadow"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {isGalleryOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative w-full max-w-xl">
            <button
              onClick={handleClose}
              className="absolute right-4 top-4 rounded-full bg-Azul-Suave px-4 py-2 text-white shadow-md hover:bg-red-600"
            >
              X
            </button>
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 transform rounded-full bg-Azul-Suave px-4 py-2 text-white shadow-md hover:bg-Azul-Mediano"
            >
              &larr;
            </button>
            <Image
              src={images[currentIndex]}
              alt={`Imagen ${currentIndex + 1} de ${publicacionConFechaConvertida.nombre}`}
              width={800}
              height={500}
              objectFit="contain"
              className="mx-auto rounded shadow-md"
            />
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 transform rounded-full bg-Azul-Suave px-4 py-2 text-white shadow-md hover:bg-Azul-Mediano"
            >
              &rarr;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardDetalles;
