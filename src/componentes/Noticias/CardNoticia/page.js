"use client";

import GaleriaImagen from "@/componentes/GaleriaImagen/page";

export default function CardNoticia({
  images,
  nombre,
  barrio,
  edad,
  ubicacion,
  diaSuceso,
  horaVista,
  condicion,
}) {
  return (
    <>
      <div className="flex flex-col rounded-lg bg-white p-4 md:flex-row">
        <GaleriaImagen images={images} />
        <div className="p-4 md:w-1/2">
          <div className="mb-2 flex items-center text-xl">
            <p className="flex-shrink-0 font-bold text-Azul-Suave">Nombre:</p>
            <p className="ml-2 flex-grow text-Azul-Fuerte">{nombre}</p>
          </div>
          <div className="mb-2 flex items-center text-xl">
            <p className="flex-shrink-0 font-bold text-Azul-Suave">Barrio:</p>
            <p className="ml-2 flex-grow text-Azul-Fuerte">{barrio}</p>
          </div>
          <div className="mb-2 flex items-center text-xl">
            <p className="flex-shrink-0 font-bold text-Azul-Suave">Edad:</p>
            <p className="ml-2 flex-grow text-Azul-Fuerte">{edad}</p>
          </div>
          <div className="mb-2 flex items-center text-xl">
            <p className="flex-shrink-0 font-bold text-Azul-Suave">
              Última ubicación:
            </p>
            <p className="ml-2 flex-grow text-Azul-Fuerte">{ubicacion}</p>
          </div>
          <div className="mb-2 flex items-center text-xl">
            <p className="font-bold text-Azul-Suave">Día del suceso:</p>
            <p className="ml-2 flex-grow text-Azul-Fuerte">{diaSuceso}</p>
          </div>
          <div className="mb-2 flex items-center text-xl">
            <p className="flex-shrink-0 font-bold text-Azul-Suave">
              Última vez vista:
            </p>
            <p className="ml-2 flex-grow text-Azul-Fuerte">{horaVista}</p>
          </div>
          <div className="mb-2 flex items-start text-xl">
            <p className="flex-shrink-0 font-bold text-Azul-Suave">
              Condición:
            </p>
            <p className="ml-2 flex-grow text-Azul-Fuerte">{condicion}</p>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            <button className="btn border-2 border-Azul-Fuerte bg-Azul-Suave text-white">
              Compartir
            </button>
            <button className="btn border-2 border-Azul-Fuerte bg-Azul-Suave text-white">
              Más Información
            </button>
          </div>
        </div>
      </div>
      <div className="divider divider-primary"></div>
    </>
  );
}
