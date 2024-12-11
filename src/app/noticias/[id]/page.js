"use client";

import Navbar from "@/componentes/Navbar/page";
import Nosotros from "@/componentes/Nosotros/page";
import NoticiaDetalle from "@/componentes/NoticiaDetalles/page";
import Footer from "@/componentes/Footer";

export default function Page() {
  return (
    <>
      <div className="min-h-screen bg-white">
        <NoticiaDetalle />
      </div>
    </>
  );
}
