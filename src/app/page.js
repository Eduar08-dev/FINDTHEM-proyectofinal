import Header from "../componentes/home/Header";
import Footer from "../componentes/home/Footer";
import DonationButton from "@/componentes/home/DonacionBoton";
import PrimeraSeccion from "@/componentes/home/PrimeraSeccion";
import SocialButtons from "@/componentes/home/SocialButtons";
import CarruselPublicaciones from "@/componentes/home/CarruselPublicaciones";
import UltimasNoticias from "@/componentes/home/UltimasNoticias";

export default function Home() {
  return (
 <main>
 <Header/>
 <DonationButton/>
 <DonationButton/>
 <PrimeraSeccion/>
 <SocialButtons/>
 <div className="flex flex-col bg-slate-800">
 <CarruselPublicaciones/>
 <h2 className="flex justify-center items-center p-3 text-xl"> En esta seccion, podrás encontrar información detallada y reciente <br/> sobre los acontecimientos de personas desaparecidas</h2>
 </div>
 <UltimasNoticias/>
 <Footer/>
 </main>
  );
}
