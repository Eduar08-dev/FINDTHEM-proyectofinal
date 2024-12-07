"use client";

import CardNoticia from "./CardNoticia/page";

const noticias = [
  {
    images: [
      "/toby.jpg",
      "/tom.jpg",
      "/spiderman.jpg",
      "/actriz-gabriela-andrada_98.jpg",
    ],
    nombre: "Daisy Perez Lopez",
    barrio: "Riomar, Barranquilla/Atlántico",
    edad: "33 Años",
    ubicacion: "Cra. 57 #90-138",
    diaSuceso: "01/01/2024",
    horaVista: "9:24 PM",
    condicion:
      "Tipo de alergia, sufre de Alzheimer, es sordomuda, tiene autismo.",
  },
];

export default function NoticiasPage() {
  return (
    <div>
      {noticias.map((noticia, index) => (
        <CardNoticia
          key={index}
          images={noticia.images}
          nombre={noticia.nombre}
          barrio={noticia.barrio}
          edad={noticia.edad}
          ubicacion={noticia.ubicacion}
          diaSuceso={noticia.diaSuceso}
          horaVista={noticia.horaVista}
          condicion={noticia.condicion}
        />
      ))}
      {noticias.map((noticia, index) => (
        <CardNoticia
          key={index}
          images={noticia.images}
          nombre={noticia.nombre}
          barrio={noticia.barrio}
          edad={noticia.edad}
          ubicacion={noticia.ubicacion}
          diaSuceso={noticia.diaSuceso}
          horaVista={noticia.horaVista}
          condicion={noticia.condicion}
        />
      ))}
      {noticias.map((noticia, index) => (
        <CardNoticia
          key={index}
          images={noticia.images}
          nombre={noticia.nombre}
          barrio={noticia.barrio}
          edad={noticia.edad}
          ubicacion={noticia.ubicacion}
          diaSuceso={noticia.diaSuceso}
          horaVista={noticia.horaVista}
          condicion={noticia.condicion}
        />
      ))}
      {noticias.map((noticia, index) => (
        <CardNoticia
          key={index}
          images={noticia.images}
          nombre={noticia.nombre}
          barrio={noticia.barrio}
          edad={noticia.edad}
          ubicacion={noticia.ubicacion}
          diaSuceso={noticia.diaSuceso}
          horaVista={noticia.horaVista}
          condicion={noticia.condicion}
        />
      ))}
      {noticias.map((noticia, index) => (
        <CardNoticia
          key={index}
          images={noticia.images}
          nombre={noticia.nombre}
          barrio={noticia.barrio}
          edad={noticia.edad}
          ubicacion={noticia.ubicacion}
          diaSuceso={noticia.diaSuceso}
          horaVista={noticia.horaVista}
          condicion={noticia.condicion}
        />
      ))}
      {noticias.map((noticia, index) => (
        <CardNoticia
          key={index}
          images={noticia.images}
          nombre={noticia.nombre}
          barrio={noticia.barrio}
          edad={noticia.edad}
          ubicacion={noticia.ubicacion}
          diaSuceso={noticia.diaSuceso}
          horaVista={noticia.horaVista}
          condicion={noticia.condicion}
        />
      ))}
    </div>
  );
}
