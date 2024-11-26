import Link from "next/link"
import Header from "@/components/home/Header"
import PrimeraSeccion from "@/components/home/PrimeraSeccion";
import SocialButtons from "@/components/home/SocialButtons";
import DonationButton from "@/components/home/DonacionBoton";
import CarruselPublicaciones from "@/components/home/CarruselPublicaciones";
import UltimasNoticias from "@/components/home/UltimasNoticias";
import Footer from "@/components/home/Footer";

export default function Home() {
  return (
 <>
 <Header/>
 <PrimeraSeccion/>
 <SocialButtons/>
 <DonationButton/>
 <div className="flex justify-center w-full bg-slate-800">
 <CarruselPublicaciones/>
 </div>
 <UltimasNoticias/>
 <Footer/>
 </>
  );
}
