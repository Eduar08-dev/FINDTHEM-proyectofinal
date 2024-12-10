

function CajaPublicacion () {
      return (
        <div class="flex gap-[20px] flex-wrap">
            {/* ENCABEZADO */}
            <div class="w-full h-[5%]">
                <h1 className="text-3xl md:text-4xl sm:text-4xl font-bold text-slate-800 text-center text-Azul-fuerte">Publicaciones recientes</h1>
            <hr className="my-4 mx-10 border border-Azul-mediano" />
            </div>
            
            {/* CUERPO */}
            <div class="w-1/4 h-3/4">
                <h2>
                    Encuentras a:
                </h2>
                <div class="flex gap-[20px] flex-col items-stretch">
                    <div className="">
                        <div className="picture">
                            <div className="w-[200px] h-[300px] rounded">
                                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="grow h-3/4">
                <h3>Descripción de la persona:</h3>
            </div>
        </div>
      
    )
}

export default CajaPublicacion