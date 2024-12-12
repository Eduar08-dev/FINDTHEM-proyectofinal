"use client";

import Navbar from "@/componentes/Navbar/page";
import Nosotros from "@/componentes/Nosotros/page";
import Noticia from "@/componentes/Noticias/page";
import Footer from "@/componentes/Footer";

export default function Page() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-r from-blue-200 to-Azul-Suave py-8 my-1 px-4 rounded-lg shadow-md">
       <Noticia />
      </div>
    </>
  );
}
