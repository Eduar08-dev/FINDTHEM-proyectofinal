import React from "react";
import Link from "next/link";

const PrimeraSeccion = () => {
  return (
    <div className="container mx-auto px-4 py-1.5 font-sans">
      <div className="grid items-center gap-8 lg:grid-cols-2">
        {/* Columna de texto */}
        <div className="flex flex-col space-y-6">
          <h1 className="text-3xl font-bold text-Azul-Fuerte sm:text-4xl md:text-5xl">
            Ayúdanos a encontrar a las personas desaparecidas
          </h1>
          <p className="text-lg text-Azul-Fuerte sm:text-base md:text-xl">
            Cada persona desaparecida tiene una familia que la busca. Tu apoyo
            puede hacer la diferencia.
          </p>
          <div className="flex flex-col items-center justify-center gap-4">
            <button className="w-6/12 rounded-lg bg-Azul-Suave p-3 font-sans text-xl text-white transition-colors hover:bg-Azul-Mediano sm:w-8/12 md:w-1/2">
            <Link href="/inversa">
              Reportar
            </Link>
            </button>
            <div className="text-xl text-Azul-Fuerte underline sm:text-2xl md:text-3xl">
              #UNIDOSHACEMOSLADIFERENCIA
            </div>
          </div>

          {/* {lineas de atencion} */}
          <div className="flex flex-col space-y-4 text-lg sm:flex-row sm:space-x-4 sm:space-y-0 md:justify-around">
            <div className="flex items-center rounded-lg bg-Azul-Suave p-2 text-white">
              <span>Línea Nacional:</span>
              <a href="tel:018000117175" className="ml-2 hover:underline">
                xxxxxxxxxx
              </a>
            </div>
            <div className="flex items-center rounded-lg bg-Azul-Suave p-2 text-white">
              <span>Línea Exterior:</span>
              <a href="tel:+573192783318" className="ml-2 hover:underline">
                (+57) xxxxxxxxxx
              </a>
            </div>
          </div>
        </div>

        {/* Columna de imagen */}
        <div className="relative h-64 w-full overflow-hidden rounded-lg shadow-custom-shadow sm:h-96 md:h-[400px]">
          <img
            src="img-principal.jpg"
            alt="Imagen representativa"
            className="h-full w-full object-cover"
          />
          {/* Capa opaca */}
          <div className="absolute inset-0 bg-black/40 transition-opacity hover:bg-black/30"></div>

          {/* Texto sobre la imagen */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white">
            <h2 className="mb-2 text-2xl font-bold sm:text-3xl md:text-4xl">
              Juntos podemos encontrarlos
            </h2>
            <p className="text-sm text-gray-100 sm:text-base md:text-lg">
              Cada compartir cuenta. Cada mirada importa.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrimeraSeccion;
