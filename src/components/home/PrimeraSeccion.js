const PrimeraSeccion = () => {
    return (
      <div className="container font-sans mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">

          {/* Columna de texto */}
          <div className="flex flex-col space-y-6">
            <h1 className="text-3xl md:text-4xl sm:text-4xl font-bold text-slate-800">
              Ayúdanos a encontrar a las personas desaparecidas
            </h1>
            <p className="text-lg md:text-xl sm:text-sm text-gray-600">
              Cada persona desaparecida tiene una familia que la busca. 
              Tu apoyo puede hacer la diferencia.
            </p>
            <div className="flex gap-4 justify-center flex-col items-center">
              <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-sans text-2xl w-6/12 mr-20 p-3 rounded-lg transition-colors">
                Reportar
              </button>
              <div className="text-black text-2xl mr-20">#UNIDOSHACEMOSLADIFERENCIA</div>
            </div>

            {/* {lineas de atencion} */}
            <div className="flex justify-around mr-10 text-lg">
             <div className="flex items-center text-white bg-emerald-500 p-2 rounded-lg">
              <span>Línea Nacional:</span>
              <a href="tel:018000117175" className="ml-2 hover:underline">
                xxxxxxxxxx
              </a>
             </div>
             <div className="flex items-center text-white bg-emerald-500 p-2 rounded-lg">
              <span>Línea Exterior:</span>
              <a href="tel:+573192783318" className="ml-2 hover:underline">
                (+57) xxxxxxxxxx
              </a>
             </div>
            </div>
          </div>
  
          {/* Columna de imagen */}
          <div className="relative h-[400px] w-full overflow-hidden rounded-lg -z-1">
            <img
              src="img-principal.jpg"
              alt="Imagen representativa"
              className="w-full h-full object-cover"
            />
            {/* Capa opaca */}
            <div className="absolute inset-0 bg-black/40 transition-opacity hover:bg-black/30"></div>
            
            {/* Texto sobre la imagen */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-6 text-center">
              <h2 className="text-3xl font-bold mb-2">Juntos podemos encontrarlos</h2>
              <p className="text-2sm text-gray-100">
                Cada compartir cuenta. Cada mirada importa.
              </p>
            </div>
          </div>
        </div>
      </div>
      
    );
  };
  
  export default PrimeraSeccion;