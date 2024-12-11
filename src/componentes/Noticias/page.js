// /src/app/noticias/page.js
"use client";
import CardNoticia from "./CardNoticia/page";

const noticias = [
  {
    id: "1",
    images: [
      "/toby.jpg",
      "/tom.jpg",
      "/Andrew.jpg",
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
  {
    id: "2",
    images: ["/Andrew.jpg", "/LogoFindThem.png"],
    nombre: "Juan Perez Martinez",
    barrio: "Centro, Barranquilla/Atlántico",
    edad: "45 Años",
    ubicacion: "Cra. 50 #40-50",
    diaSuceso: "02/02/2024",
    horaVista: "10:30 AM",
    condicion: "Sufre de hipertensión y diabetes.",
  },
];

export default function NoticiasPage() {
  return (
    <div>
      {noticias.map((noticia) => (
        <CardNoticia
          key={noticia.id}
          id={noticia.id}
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
