import CarruselPublicaciones from '../componentes/CarruselPublicaciones.js';
import Modulos from '../componentes/Modulos/page.js';
import PrimeraSeccion from '../componentes/PrimeraSeccion.js'
import { Search, Heart, Users } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4 flex items-center justify-center">
            <Search className="mr-4 text-blue-600" size={48} />
            Buscamos Esperanza
            <Heart className="ml-4 text-red-500 animate-pulse" size={48} />
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
            Cada rostro cuenta una historia. Ayúdanos a reunir familias y regresar a quienes extraviamos.
          </p>
          <div className="flex justify-center items-center space-x-4">
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