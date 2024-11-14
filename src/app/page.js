import Header from "../componentes/Header";
import Footer from "../componentes/Footer";
import DonationButton from "@/componentes/DonacionBoton";
import PrimeraSeccion from "@/componentes/PrimeraSeccion";
import SocialButtons from "@/componentes/SocialButtons";
import CarruselPublicaciones from "@/componentes/CarruselPublicaciones";
import UltimasNoticias from "@/componentes/UltimasNoticias";

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
