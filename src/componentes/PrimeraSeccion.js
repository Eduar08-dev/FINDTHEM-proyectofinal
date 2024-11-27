const PrimeraSeccion = () => {
  return (
    <div className="container mx-auto px-4 py-1.5 font-sans">
      <div className="grid items-center gap-8 md:grid-cols-2">
        {/* Columna de texto */}
        <div className="flex flex-col space-y-6">
          <h1 className="text-3xl font-bold text-Azul-Fuerte sm:text-4xl md:text-4xl">
            Ayúdanos a encontrar a las personas desaparecidas
          </h1>
          <p className="text-lg text-Azul-Fuerte sm:text-sm md:text-xl">
            Cada persona desaparecida tiene una familia que la busca. Tu apoyo
            puede hacer la diferencia.
          </p>
          <div className="flex flex-col items-center justify-center gap-4">
            <button className="mr-20 w-6/12 rounded-lg bg-Azul-Suave p-3 font-sans text-2xl text-white transition-colors hover:bg-Azul-Mediano">
              Reportar
            </button>
            <div className="mr-20 text-2xl text-Azul-Fuerte underline">
              #UNIDOSHACEMOSLADIFERENCIA
            </div>
          </div>

          {/* {lineas de atencion} */}
          <div className="mr-10 flex justify-around text-lg">
            <div className="flex items-center rounded-lg bg-Azul-Suave p-2 text-white">
              <span>Línea Nacional:</span>
              <a href="tel:018000117175" className="ml-2 hover:underline">
                xxxxxxxxxx
              </a>
            </div>
            <div className="flex items-center rounded-lg bg-Azul-Suave p-2 text-white">
              <span>Línea Exterior:</span>
              <a href="tel:+573192783318" className="ml-2 hover:underline">
                (+57) xxxxxxxxxx
              </a>
            </div>
          </div>
        </div>

        {/* Columna de imagen */}
        <div className="-z-1 relative h-[400px] w-full overflow-hidden rounded-lg shadow-custom-shadow">
          <img
            src="img-principal.jpg"
            alt="Imagen representativa"
            className="h-full w-full object-cover"
          />
          {/* Capa opaca */}
          <div className="absolute inset-0 bg-black/40 transition-opacity hover:bg-black/30"></div>

          {/* Texto sobre la imagen */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white">
            <h2 className="mb-2 text-3xl font-bold">
              Juntos podemos encontrarlos
            </h2>
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
