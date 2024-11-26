
import DonacionButon from "./componentes/DonacionBoton";
import PrimeraSeccion from "./componentes/PrimeraSeccion";
import CarruselPublicaciones from "./componentes/CarruselPublicaciones";
import SocialButtons from "./componentes/SocialButtons";
import UltimasNoticias from "./componentes/UltimasNoticias";
import Footer from "./componentes/Footer";

export default function Home() {
  return (
    <main>
      <header className="">
        <Header></Header>

      </header>

      <DonacionButon></DonacionButon>
      <SocialButtons></SocialButtons>

      <section>
        <div>
          <PrimeraSeccion></PrimeraSeccion>
        </div>
      </section>

       <div className="flex justify-center bg-slate-800">
        <CarruselPublicaciones>
        </CarruselPublicaciones>
       </div>
       <div className="flex justify-center">
        <UltimasNoticias>
        </UltimasNoticias>
       </div>
      
      <Footer>

      </Footer>

    </main>
  );
}
