// /src/app/noticias/[id]/page.js
"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import GaleriaImagen from "../GaleriaImagen/page"; // Usando la ruta correcta

const NoticiaDetalle = () => {
  const pathname = usePathname();
  const id = pathname.split("/").pop();
  const [noticia, setNoticia] = useState(null);

  useEffect(() => {
    const fetchNoticia = () => {
      const data = {
        id,
        nombre: "Daisy Perez Lopez",
        barrio: "Riomar, Barranquilla/Atlántico",
        edad: "33 Años",
        ubicacion: "Cra. 57 #90-138",
        diaSuceso: "01/01/2024",
        horaVista: "9:24 PM",
        condicion:
          "Tipo de alergia, sufre de Alzheimer, es sordomuda, tiene autismo.",
        images: [
          "/toby.jpg",
          "/tom.jpg",
          "/Andrew.jpg",
          "/actriz-gabriela-andrada_98.jpg",
        ],
      };
      setNoticia(data);
    };

    if (id) {
      fetchNoticia();
    }
  }, [id]);

  if (!noticia) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex grid-cols-2 flex-col rounded-lg bg-white p-4 md:flex-row">
      <div className="p-5 md:w-1/2">
        {/* Pasa la clase 'separar-imagenes' solo a esta vista */}
        <GaleriaImagen images={noticia.images} className="separar-imagenes" />
      </div>
      <div className="p-4 md:w-1/2">
        <h1 className="text-2xl font-bold text-Azul-Suave">{noticia.nombre}</h1>
        <div className="mb-1 mt-4 flex items-center text-xl">
          <p className="flex-shrink-0 text-lg font-bold text-Azul-Suave">
            Barrio:{" "}
          </p>
          <p className="ml-2 flex-grow text-lg text-Azul-Fuerte">
            {noticia.barrio}
          </p>
        </div>
        <div className="mb-1 flex items-center text-xl">
          <p className="flex-shrink-0 text-lg font-bold text-Azul-Suave">
            Edad:{" "}
          </p>
          <p className="ml-2 flex-grow text-lg text-Azul-Fuerte">
            {noticia.edad}
          </p>
        </div>
        <div className="mb-1 flex items-center text-xl">
          <p className="flex-shrink-0 text-lg font-bold text-Azul-Suave">
            Última ubicación:
          </p>
          <p className="ml-2 flex-grow text-lg text-Azul-Fuerte">
            {noticia.ubicacion}
          </p>
        </div>
        <div className="mb-1 flex items-center text-xl">
          <p className="flex-shrink-0 text-lg font-bold text-Azul-Suave">
            Día del suceso:
          </p>
          <p className="ml-2 flex-grow text-lg text-Azul-Fuerte">
            {noticia.diaSuceso}
          </p>
        </div>
        <div className="mb-1 flex items-center text-xl">
          <p className="flex-shrink-0 text-lg font-bold text-Azul-Suave">
            Última vez vista:
          </p>
          <p className="ml-2 flex-grow text-lg text-Azul-Fuerte">
            {noticia.horaVista}
          </p>
        </div>
        <div className="mb-1 flex items-center text-xl">
          <p className="flex-shrink-0 text-lg font-bold text-Azul-Suave">
            Condición:
          </p>
          <p className="ml-2 flex-grow text-lg text-Azul-Fuerte">
            {noticia.condicion}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NoticiaDetalle;
