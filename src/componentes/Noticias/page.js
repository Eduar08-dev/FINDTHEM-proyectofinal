// "use client";

// import { useState, useEffect, useRef } from "react";
// import { collection, query, orderBy, limit, onSnapshot } from 'firebase/firestore';
// import { db } from '../../lib/firebase';
// import Image from 'next/image';
// import Link from 'next/link';

// const CardNoticias = () => {
//   const [publicaciones, setPublicaciones] = useState([]);

//   useEffect(() => {
//     const q = query(
//       collection(db, 'personas_desaparecidas'),
//       orderBy('fechaPublicacion', 'desc'),
//     );

//     const unsubscribe = onSnapshot(q, (snapshot) => {
//       const nuevasPublicaciones = snapshot.docs.map(doc => ({
//         id: doc.id,
//         ...doc.data()
//       }));
//       setPublicaciones(nuevasPublicaciones);
//     });

//     return () => unsubscribe();
//   }, []);

//   const useIntersectionObserver = (options = {}) => {
//     const ref = useRef(null);
//     const [isIntersecting, setIsIntersecting] = useState(false);

//     useEffect(() => {
//       const observer = new IntersectionObserver(([entry]) => {
//         setIsIntersecting(entry.isIntersecting);
//       }, options);

//       if (ref.current) {
//         observer.observe(ref.current);
//       }

//       return () => {
//         if (ref.current) {
//           observer.unobserve(ref.current);
//         }
//       };
//     }, [options]);

//     return [ref, isIntersecting];
//   };

//   const AnimatedCard = ({ children, className = '' }) => {
//     const [ref, isIntersecting] = useIntersectionObserver({
//       threshold: 0.1,
//       triggerOnce: true,
//     });
//     return (
//       <div
//         ref={ref}
//         className={`transition-all duration-1000 ${
//           isIntersecting
//             ? 'opacity-100 translate-y-0'
//             : 'opacity-0 translate-y-10'
//         } ${className}`}
//       >
//         {children}
//       </div>
//     );
//   };
//   if (publicaciones.length === 0) {
//     return <div className="flex justify-center text-2xl py-6 px-10">Cargando publicaciones...</div>;
//   }

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h2 className="text-4xl h-auto font-bold mb-6 text-center text-Azul-Fuerte border-md rounded-lg shadow-lg"> <strong>PERSONAS DESAPARECIDAS</strong></h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {publicaciones.map((publicacion) => (
//            <AnimatedCard key={publicacion.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
//            <div className="relative h-64">
//              {publicacion.imageUrls && publicacion.imageUrls[0] ? (
//                <Image
//                  src={publicacion.imageUrls[0]}
//                  alt={publicacion.nombre || 'Imagen'}
//                  layout="fill"
//                  objectFit="cover"
//                />
//              ) : (
//                <div className="bg-gray-200 w-full h-full flex items-center justify-center font-bold text-xl">
//                  <p>Sin Fotos</p>
//                </div>
//              )}
//            </div>
//            <div className="p-4 flex-grow">
//              <h3 className="text-2xl text-black font-semibold mb-2">{publicacion.nombre}</h3>
//              <p className="text-black mb-2">Edad: {publicacion.edad}</p>
//              <p className="text-black mb-2">Barrio: {publicacion.barrio}</p>
//              <p className="text-black mt-4 line-clamp-3">{publicacion.descripcionHechos}</p>
//            </div>
//            <div className="flex justify-center text-center p-4 bg-gray-100 mt-auto">
//              <Link href={`/noticias/${publicacion.id}`} passHref>
//                <p className="w-28 flex text-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
//                  Ver publicación
//                </p>
//              </Link>
//            </div>
//          </AnimatedCard>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CardNoticias;

"use client";

import { useState, useEffect, useRef } from "react";
import {
  collection,
  query,
  orderBy,
  limit,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../../lib/firebase";
import Image from "next/image";
import Link from "next/link";

const CardNoticias = () => {
  const [publicaciones, setPublicaciones] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  useEffect(() => {
    const q = query(
      collection(db, "personas_desaparecidas"),
      orderBy("fechaPublicacion", "desc"),
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const nuevasPublicaciones = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPublicaciones(nuevasPublicaciones);
    });

    return () => unsubscribe();
  }, []);

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

  const AnimatedCard = ({ children, className = "" }) => {
    const [ref, isIntersecting] = useIntersectionObserver({
      threshold: 0.1,
      triggerOnce: true,
    });
    return (
      <div
        ref={ref}
        className={`transition-all duration-1000 ${
          isIntersecting
            ? "translate-y-0 opacity-100"
            : "translate-y-10 opacity-0"
        } ${className}`}
      >
        {children}
      </div>
    );
  };

  const totalPages = Math.ceil(publicaciones.length / itemsPerPage);
  const paginatedPublicaciones = publicaciones.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  if (publicaciones.length === 0) {
    return (
      <div className="flex justify-center px-10 py-6 text-2xl">
        Cargando publicaciones...
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="border-md mb-6 h-auto rounded-lg text-center text-4xl font-bold text-Azul-Fuerte shadow-custom-shadow">
        {" "}
        <strong>PERSONAS DESAPARECIDAS</strong>
      </h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {paginatedPublicaciones.map((publicacion) => (
          <AnimatedCard
            key={publicacion.id}
            className="flex h-full flex-col overflow-hidden rounded-lg bg-white shadow-custom-shadow"
          >
            <div className="relative h-64">
              {publicacion.imageUrls && publicacion.imageUrls[0] ? (
                <Image
                  src={publicacion.imageUrls[0]}
                  alt={publicacion.nombre || "Imagen"}
                  layout="fill"
                  objectFit="cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-gray-200 text-xl font-bold">
                  <p>Sin Fotos</p>
                </div>
              )}
            </div>
            <div className="flex-grow p-4 text-center">
              <h3 className="mb-2 text-2xl font-semibold text-Azul-Fuerte">
                {publicacion.nombre}
              </h3>

              <div className="mb-2 flex items-center">
                <p className="mr-2 font-bold text-Azul-Fuerte">Edad:</p>
                <p className="text-Azul-Fuerte">{publicacion.edad}</p>
              </div>

              <div className="mb-2 flex items-center">
                <p className="mr-2 font-bold text-Azul-Fuerte">Barrio:</p>
                <p className="text-Azul-Fuerte">{publicacion.barrio}</p>
              </div>

              <div className="mt-2 flex items-center">
                <p className="mr-2 font-bold text-Azul-Fuerte">Hechos:</p>
                <p className="max-w-xs truncate text-Azul-Fuerte">
                  {publicacion.descripcionHechos}
                </p>
              </div>
            </div>

            <div className="mt-auto flex justify-center bg-gray-100 p-4 text-center">
              <Link href={`/noticias/${publicacion.id}`} passHref>
                <p className="w-26 flex rounded border-2 border-Azul-Fuerte bg-Azul-Suave px-4 py-2 text-center text-white transition-colors hover:bg-Azul-Mediano">
                  Más información
                </p>
              </Link>
            </div>
          </AnimatedCard>
        ))}
      </div>
      <div className="mt-6 flex justify-center">
        <button
          className="mx-2 rounded border-2 border-Azul-Fuerte bg-Azul-Suave px-4 py-2 text-white hover:bg-Azul-Mediano disabled:bg-gray-300"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Anterior
        </button>
        <span className="px-4 py-2">
          Página {currentPage} de {totalPages}
        </span>
        <button
          className="mx-2 rounded border-2 border-Azul-Fuerte bg-Azul-Suave px-4 py-2 text-white hover:bg-Azul-Mediano disabled:bg-gray-300"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default CardNoticias;
