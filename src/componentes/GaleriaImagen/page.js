// "use client";

// import { useState, useEffect } from "react";
// import { collection, query, orderBy, limit, onSnapshot } from 'firebase/firestore';
// import { db } from '../../lib/firebase';
// import Image from "next/image";

// export default function GaleriaImagen({ images, className = "" }) {
//   const [isOpen, setIsOpen] = useState(false);
//   const [currentImage, setCurrentImage] = useState(0);
//   const [imagenesPublicaciones, setImagenesPublicaciones] = useState([]);

//   const openModal = (index) => {
//     setCurrentImage(index);
//     setIsOpen(true);
//   };

//   const closeModal = () => {
//     setIsOpen(false);
//   };

//   const nextImage = () => {
//     setCurrentImage((prev) => (prev + 1) % images.length);
//   };

//   const prevImage = () => {
//     setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
//   };

//   return (
//     <div
//       className={`relative mx-auto grid grid-cols-2 items-center justify-center gap-1 md:w-[320px] md:gap-2 ${className}`}
//     >
//       {imagenesPublicaciones.map((src, index) => (
//         <div
//           key={index}
//           className={`flex justify-center ${index % 2 === 0 ? "md:mr-1" : "md:ml-1"} ${
//             index >= 2 ? "md:mt-8" : "" // Aquí ajustamos el margen
//           }`}
//           style={{ width: "150px", height: "150px" }}
//         >
//           <Image
//             src={imagenesPublicaciones.imageUrls[0]}
//             alt={`Image ${index + 1}`}
//             width={150}
//             height={150}
//             className="cursor-pointer rounded-lg object-cover shadow-custom-shadow"
//             onClick={() => openModal(index)}
//           />
//         </div>
//       ))}
//       {isOpen && (
//         <div
//           className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
//           onClick={closeModal}
//         >
//           <div
//             className="relative h-auto w-auto max-w-xs p-4 sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <Image
//               src={images[currentImage]}
//               alt={`Image ${currentImage + 1}`}
//               width={600}
//               height={600}
//               className="h-auto w-full rounded-lg object-contain sm:h-[200px] sm:w-[300px] md:h-[300px] md:w-[400px] lg:h-[350px] lg:w-[500px] xl:h-[600px] xl:w-[600px]"
//             />
//             <button
//               className="absolute right-5 top-5 h-10 w-10 rounded-full bg-Azul-Suave text-white"
//               onClick={closeModal}
//             >
//               &times;
//             </button>
//           </div>
//           <button
//             className="absolute left-5 top-1/2 h-10 w-10 rounded-full bg-Azul-Suave text-white"
//             onClick={(e) => {
//               e.stopPropagation();
//               prevImage();
//             }}
//           >
//             &lt;
//           </button>
//           <button
//             className="absolute right-5 top-1/2 h-10 w-10 rounded-full bg-Azul-Suave text-white"
//             onClick={(e) => {
//               e.stopPropagation();
//               nextImage();
//             }}
//           >
//             &gt;
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

"use client";
import { useState, useEffect } from "react";
import { collection, query, orderBy, limit, onSnapshot } from 'firebase/firestore';
import { ref, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../../lib/firebase';
import Image from "next/image";

export default function GaleriaImagen({ className = "" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [imagenesPublicaciones, setImagenesPublicaciones] = useState([]);

  useEffect(() => {
    // Crear una referencia a la colección de publicaciones
    const publicacionesRef = collection(db, 'personas_desaparecidas');
    
    // Consulta para obtener las publicaciones más recientes
    const q = query(publicacionesRef, orderBy('id'),);

    // Configurar un listener en tiempo real
    const unsubscribe = onSnapshot(q, async (querySnapshot) => {
      const publicaciones = [];

      // Iterar sobre cada documento
      for (const doc of querySnapshot.docs) {
        const publicacion = doc.data();
        
        // Si hay imágenes, obtener la URL de descarga
        if (publicacion.imageUrls && publicacion.imageUrls.length > 0) {
          try {
            // Obtener la URL de descarga para cada imagen
            const imageDownloadUrls = await Promise.all(
              publicacion.imageUrls.map(async (imagePath) => {
                const imageRef = ref(storage, imagePath);
                return await getDownloadURL(imageRef);
              })
            );

            publicaciones.push({
              ...publicacion,
              id: doc.id,
              imageDownloadUrls
            });
          } catch (error) {
            console.error("Error obteniendo URLs de imágenes:", error);
          }
        }
      }

      setImagenesPublicaciones(publicaciones);
    });

    // Limpiar el listener cuando el componente se desmonte
    return () => unsubscribe();
  }, []);

  const openModal = (index) => {
    setCurrentImage(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % imagenesPublicaciones.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + imagenesPublicaciones.length) % imagenesPublicaciones.length);
  };

  return (
    <div 
      className={`relative mx-auto grid grid-cols-2 items-center justify-center gap-1 md:w-[320px] md:gap-2 ${className}`}
    >
      {imagenesPublicaciones.map((publicacion, index) => (
        publicacion.imageDownloadUrls.map((imageUrl, imageIndex) => (
          <div
            key={`${publicacion.id}-${imageIndex}`}
            className={`flex justify-center ${index % 2 === 0 ? "md:mr-1" : "md:ml-1"} ${
              index >= 2 ? "md:mt-8" : ""
            }`}
            style={{ width: "150px", height: "150px" }}
          >
            <Image
              src={imageUrl}
              alt={`Imagen de publicación ${index + 1}`}
              width={150}
              height={150}
              className="cursor-pointer rounded-lg object-cover shadow-custom-shadow"
              onClick={() => openModal(index)}
            />
          </div>
        ))
      ))}

      {isOpen && imagenesPublicaciones.length > 0 && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={closeModal}
        >
          <div
            className="relative h-auto w-auto max-w-xs p-4 sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={imagenesPublicaciones[currentImage].imageDownloadUrls[0]}
              alt={`Imagen de publicación ${currentImage + 1}`}
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