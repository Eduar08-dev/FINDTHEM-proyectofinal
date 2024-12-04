import Nosotros from '../componentes/Nosotros/page.js';
import Navbar from '../componentes/Navbar/page.js';
import Footer from '../componentes/Footer.js';
import CarruselPublicaciones from '../componentes/CarruselPublicaciones.js';
import Modulos from '../componentes/Modulos/page.js';
import PrimeraSeccion from '../componentes/PrimeraSeccion.js'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <CarruselPublicaciones />
      <Modulos />
      <PrimeraSeccion />

      {/* <Header />
      <DonacionButon />
      <SocialButtons /> s
      <UltimasNoticias />
      <PrimeraSeccion />
      
      <Footer /> */}
    </main>
  );
}