import "./globals.css";
import Link from "next/link";
import Header from "../componentes/Header";
import DonacionButon from "../componentes/DonacionBoton";
import PrimeraSeccion from "../componentes/PrimeraSeccion";
import CarruselPublicaciones from "../componentes/CarruselPublicaciones";
import SocialButtons from "../componentes/SocialButtons";
import UltimasNoticias from "../componentes/UltimasNoticias";
import Footer from "../componentes/Footer";
import Nosotros from "@/componentes/Nosotros/page";
import Navbar from "@/componentes/Navbar/page";
import Modulos from "@/componentes/Modulos/page";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Nosotros />
      <Navbar />
      <CarruselPublicaciones />
      <Modulos />
      <PrimeraSeccion />
      <Footer />

      {/* <Header />
      <DonacionButon />
      <SocialButtons />
      <UltimasNoticias />
      <PrimeraSeccion />
      
      <Footer /> */}
    </main>
  );
}
