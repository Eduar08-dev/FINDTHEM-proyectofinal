// 'use client';
// import Link from 'next/link';
// import React from 'react';
// import Image from 'next/image';

//   const CardNosotros = () => {
//     return (
//     <div className="">
//       <main className="container mx-auto px-4 py-12">
//         <div className="mb-16 bg-Azul-Fuerte p-5 w-full rounded-lg shadow-lg fade-in">
//           <h2 className="text-3xl font-semibold text-white">¿Quiénes Somos?</h2>
//           <div className="container flex flex-col md:flex-row items-center gap-8">
//             <div className="md:w-1/2">
//               <p className="text-white text-xl mb-4">
//               En FindThem, somos un equipo apasionado comprometido con la misión de conectar personas y brindar apoyo en los momentos más importantes. Con raíces en la empatía y la responsabilidad social, nuestra plataforma se enfoca en facilitar la búsqueda de seres queridos, amigos o personas desaparecidas, ofreciendo una solución intuitiva, segura y eficiente.
//               </p>
//               <p className="text-white text-xl">
//                 Fundada en 2024, nuestra organización ha ayudado a resolver cientos de casos de personas desaparecidas, trabajando en estrecha colaboración con las autoridades locales y utilizando la tecnología para maximizar nuestras posibilidades de éxito.
//               </p>
//             </div>
//             <div className="md:w-1/2">
//               <Image
//                 src="/quienes-somos.jpg"
//                 alt="Equipo de búsqueda en acción"
//                 width={500}
//                 height={300}
//                 className="rounded-lg shadow-md"
//               />
//             </div>
//           </div>
//         </div>

//         <div className="mb-16 fade-in fade-in-delay-1">
//           <h2 className="text-3xl font-semibold text-[#2f3a56] mb-6">¿Qué Ofrecemos?</h2>
//           <div className="grid md:grid-cols-3 gap-8">
//             <div className="bg-gray-100 p-6 rounded-lg shadow">
//               <h3 className="text-xl font-semibold text-Azul-Fuerte mb-4">Búsqueda Activa</h3>
//               <p className="text-gray-700 text-xl">
//                 Realizamos búsquedas exhaustivas utilizando métodos tradicionales y tecnología avanzada para localizar a personas desaparecidas.
//               </p>
//             </div>
//             <div className="bg-gray-100 p-6 rounded-lg shadow">
//               <h3 className="text-xl font-semibold text-Azul-Fuerte mb-4">Apoyo Familiar</h3>
//               <p className="text-gray-700 text-xl">
//                 Ofrecemos apoyo emocional y recursos a las familias de las personas desaparecidas durante todo el proceso de búsqueda.
//               </p>
//             </div>
//             <div className="bg-gray-100 p-6 rounded-lg shadow">
//               <h3 className="text-xl font-semibold text-Azul-Fuerte mb-4">Concientización Pública</h3>
//               <p className="text-gray-700 text-xl">
//                 Trabajamos para aumentar la conciencia sobre las personas desaparecidas a través de campañas y colaboraciones con medios de comunicación.
//               </p>
//             </div>
//           </div>
//         </div>

//         <section className='fade-in fade-in-delay-1'>
//           <h2 className="text-3xl font-semibold text-[#2f3a56] mb-6">¿Por qué lo hacemos?</h2>
//           <div className="flex flex-col md:flex-row-reverse items-center gap-8">
//             <div className="md:w-1/2">
//               <p className="text-gray-700 mb-4 text-xl">
//                 Creemos firmemente que cada persona merece ser encontrada y que cada familia merece respuestas. Nuestra motivación surge de la profunda empatía por aquellos que sufren la ausencia de un ser querido y del deseo de hacer una diferencia tangible en sus vidas.
//               </p>
//               <p className="text-gray-700 text-xl">
//                 Trabajamos incansablemente porque entendemos el impacto devastador que tiene una desaparición en las familias y comunidades. Cada caso resuelto, cada persona encontrada, es una victoria que nos impulsa a continuar nuestra misión con renovada energía y determinación.
//               </p>
//             </div>
//             <div className="md:w-1/2">
//               <Image
//                 src="/encontrar-personas.jpg"
//                 alt="Familia reunida después de una búsqueda exitosa"
//                 width={400}
//                 height={300}
//                 className="rounded-lg shadow-md"
//               />
//             </div>
//           </div>
//         </section>
//       </main>
//     </div>
//     );
// };

// export default CardNosotros;

'use client';

import Link from 'next/link';
import React, { useRef, useEffect } from 'react';
import Image from 'next/image';

const useIntersectionObserver = (options = {}) => {
  const ref = useRef(null);
  const [isIntersecting, setIsIntersecting] = React.useState(false);

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

const CardNosotros = () => {
  return (
    <div className="">
      <main className="container mx-auto px-4 py-12">
        <AnimatedSection className="mb-16 bg-Azul-Fuerte p-5 w-full rounded-lg shadow-lg">
          <h1 className="text-4xl font-semibold text-white p-5">¿Quiénes Somos?</h1>
          <div className="container flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <p className="text-white text-xl mb-4">
                En FindThem, somos un equipo apasionado comprometido con la misión de conectar personas y brindar apoyo en los momentos más importantes. Con raíces en la empatía y la responsabilidad social, nuestra plataforma se enfoca en facilitar la búsqueda de seres queridos, amigos o personas desaparecidas, ofreciendo una solución intuitiva, segura y eficiente.
              </p>
              <p className="text-white text-xl">
                Fundada en 2024, nuestra organización ha ayudado a resolver cientos de casos de personas desaparecidas, trabajando en estrecha colaboración con las autoridades locales y utilizando la tecnología para maximizar nuestras posibilidades de éxito.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/quienes-somos.jpg"
                alt="Equipo de búsqueda en acción"
                width={500}
                height={300}
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="mb-16">
          <h2 className="text-3xl font-semibold text-[#2f3a56] mb-6">¿Qué Ofrecemos?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection className="bg-gray-100 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-Azul-Fuerte mb-4">Búsqueda Activa</h3>
              <p className="text-gray-700 text-xl">
                Realizamos búsquedas exhaustivas utilizando métodos tradicionales y tecnología avanzada para localizar a personas desaparecidas.
              </p>
            </AnimatedSection>
            <AnimatedSection className="bg-gray-100 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-Azul-Fuerte mb-4">Apoyo Familiar</h3>
              <p className="text-gray-700 text-xl">
                Ofrecemos apoyo emocional y recursos a las familias de las personas desaparecidas durante todo el proceso de búsqueda.
              </p>
            </AnimatedSection>
            <AnimatedSection className="bg-gray-100 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-Azul-Fuerte mb-4">Concientización Pública</h3>
              <p className="text-gray-700 text-xl">
                Trabajamos para aumentar la conciencia sobre las personas desaparecidas a través de campañas y colaboraciones con medios de comunicación.
              </p>
            </AnimatedSection>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <h2 className="text-3xl font-semibold text-[#2f3a56] mb-6">¿Por qué lo hacemos?</h2>
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="md:w-1/2">
              <p className="text-gray-700 mb-4 text-xl">
                Creemos firmemente que cada persona merece ser encontrada y que cada familia merece respuestas. Nuestra motivación surge de la profunda empatía por aquellos que sufren la ausencia de un ser querido y del deseo de hacer una diferencia tangible en sus vidas.
              </p>
              <p className="text-gray-700 text-xl">
                Trabajamos incansablemente porque entendemos el impacto devastador que tiene una desaparición en las familias y comunidades. Cada caso resuelto, cada persona encontrada, es una victoria que nos impulsa a continuar nuestra misión con renovada energía y determinación.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/encontrar-personas.jpg"
                alt="Familia reunida después de una búsqueda exitosa"
                width={400}
                height={300}
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </AnimatedSection>
      </main>
    </div>
  );
};

export default CardNosotros;