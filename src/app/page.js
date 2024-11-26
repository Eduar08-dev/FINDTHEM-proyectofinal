import "./globals.css";
import Link from "next/link";
import PrimeraSeccion from "../components/PrimeraSeccion";
import CarruselPublicaciones from "../components/CarruselPublicaciones";
import Footer from "../components/Footer";
import Nosotros from "@/components/Nosotros/page";
import Navbar from "@/components/Navbar/page";
import Modulos from "@/components/Modulos/page";
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