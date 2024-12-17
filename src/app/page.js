import CarruselPublicaciones from "../componentes/CarruselPublicaciones.js";
import Modulos from "../componentes/Modulos/page.js";
import PrimeraSeccion from "../componentes/PrimeraSeccion.js";
import { Search, Heart, Users } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="bg-white">
        <div className="mx-auto max-w-4xl py-5 text-center">
          <h1 className="mb-4 flex items-center justify-center text-4xl font-extrabold text-gray-800 md:text-5xl">
            <Search className="mr-4 text-blue-600" size={48} />
            Buscamos Esperanza
            <Heart className="ml-4 animate-pulse text-red-500" size={48} />
          </h1>
          <p className="mx-auto mb-6 max-w-2xl text-xl text-gray-600">
            Cada rostro cuenta una historia. Ayúdanos a reunir familias y
            regresar a quienes extraviamos.
          </p>
          <div className="flex items-center justify-center space-x-4">
            <Users className="text-blue-500" size={32} />
            <span className="text-lg font-semibold text-gray-700">
              Juntos podemos marcar la diferencia
            </span>
          </div>
        </div>
        <CarruselPublicaciones />
      </div>
      <Modulos/>
      <PrimeraSeccion />
    </main>
  );
}
