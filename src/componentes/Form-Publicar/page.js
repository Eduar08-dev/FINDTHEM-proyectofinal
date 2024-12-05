import React from "react";


export default function FormPublicar() {
  return (
    <div className="bg-white p-4 font-sans">
      <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dotted border-Azul-Fuerte p-4">
        <span className="mb-4 text-3xl font-bold text-Azul-Fuerte sm:text-2xl md:text-3xl">
          Llenar formulario
        </span>
        <div className="w-full">
          <span className="block pt-3 text-xl text-Azul-Fuerte sm:text-lg md:text-xl">
            Datos de la persona:
          </span>
          <div className="grid grid-cols-1 gap-4 p-3 text-white sm:grid-cols-2 md:grid-cols-3">
            <div className="flex w-full flex-col items-start">
              <span className="text-left text-Azul-Fuerte">Nombre:</span>
              <input
                type="text"
                className="input input-bordered h-12 w-full bg-Azul-Fuerte"
                placeholder="Ingresa aquí el nombre"
              />
            </div>
            <div className="flex w-full flex-col items-start">
              <span className="text-left text-Azul-Fuerte">Edad:</span>
              <input
                type="text"
                className="input input-bordered h-12 w-full bg-Azul-Fuerte"
                placeholder="33 Años"
              />
            </div>
            <div className="flex w-full flex-col items-start">
              <span className="text-left text-Azul-Fuerte">Estatura:</span>
              <input
                type="text"
                className="input input-bordered h-12 w-full bg-Azul-Fuerte"
                placeholder="1.60 m"
              />
            </div>
            <div className="flex w-full flex-col items-start">
              <span className="text-left text-Azul-Fuerte">Sexo:</span>
              <select
                className="select select-bordered h-12 w-full bg-Azul-Fuerte"
                defaultValue=""
              >
                <option value="" disabled>
                  Seleccione
                </option>
                <option value="Masculino">Masculino</option>
                <option value="Femenino">Femenino</option>
              </select>
            </div>
            <div className="flex w-full flex-col items-start">
              <span className="text-left text-Azul-Fuerte">Color de piel:</span>
              <input
                type="text"
                className="input input-bordered h-12 w-full bg-Azul-Fuerte"
                placeholder="Morena"
              />
            </div>
            <div className="flex w-full flex-col items-start">
              <span className="text-left text-Azul-Fuerte">Contacto:</span>
              <input
                type="text"
                className="input input-bordered h-12 w-full bg-Azul-Fuerte"
                placeholder="+57 3001234567"
              />
            </div>
            <div className="flex w-full flex-col items-start">
              <span className="text-left text-Azul-Fuerte">
                Grupo sanguíneo:
              </span>
              <input
                type="text"
                className="input input-bordered h-12 w-full bg-Azul-Fuerte"
                placeholder="O +"
              />
            </div>
            <div className="flex w-full flex-col items-start">
              <span className="text-left text-Azul-Fuerte">
                Características físicas:
              </span>
              <textarea
                placeholder="Cicatrices, tatuajes, etc."
                className="textarea textarea-bordered h-12 w-full bg-Azul-Fuerte"
              ></textarea>
            </div>
            <div className="flex w-full flex-col items-start">
              <span className="text-left text-Azul-Fuerte">Condición:</span>
              <textarea
                placeholder="Tiene alzheimer, es sordomudo, tiene autismo..."
                className="textarea textarea-bordered h-12 w-full bg-Azul-Fuerte"
              ></textarea>
            </div>
          </div>
          <span className="block pt-3 text-xl text-Azul-Fuerte sm:text-lg md:text-xl">
            Información:
          </span>
          <div className="grid grid-cols-1 gap-4 p-3 text-white sm:grid-cols-2 md:grid-cols-3">
            <div className="flex w-full flex-col items-start">
              <span className="text-left text-Azul-Fuerte">Barrio:</span>
              <input
                type="text"
                className="input input-bordered h-12 w-full bg-Azul-Fuerte"
                placeholder="Riomar, Barranquilla/Atlá..."
              />
            </div>
            <div className="flex w-full flex-col items-start">
              <span className="text-left text-Azul-Fuerte">
                Última ubicación:
              </span>
              <input
                type="text"
                className="input input-bordered h-12 w-full bg-Azul-Fuerte"
                placeholder="Cra. 57 #90-138"
              />
            </div>
            <div className="flex w-full flex-col items-start">
              <span className="text-left text-Azul-Fuerte">
                Día del suceso:
              </span>
              <input
                type="date"
                className="input input-bordered h-12 w-full bg-Azul-Fuerte"
              />
            </div>
            <div className="flex w-full flex-col items-start">
              <span className="text-left text-Azul-Fuerte">
                Última vez vista:
              </span>
              <input
                type="text"
                className="input input-bordered h-12 w-full bg-Azul-Fuerte"
                placeholder="9:24 PM"
              />
            </div>
            <div className="flex w-full flex-col items-start">
              <span className="text-left text-Azul-Fuerte">Parentesco:</span>
              <input
                type="text"
                className="input input-bordered h-12 w-full bg-Azul-Fuerte"
                placeholder="Padre, Madre, Hijo etc."
              />
            </div>
            <div className="flex w-full flex-col items-start">
              <span className="text-left text-Azul-Fuerte">Vestimenta:</span>
              <textarea
                placeholder="Camisa (color), Pantalón, Accesorios..."
                className="textarea textarea-bordered h-12 w-full bg-Azul-Fuerte"
              ></textarea>
            </div>
            <div className="flex w-full flex-col items-start">
              <span className="text-left text-Azul-Fuerte">
                Descripción de los hechos:
              </span>
              <textarea
                placeholder="Salió de su casa para donde una amiga y no llego..."
                className="textarea textarea-bordered h-12 w-full bg-Azul-Fuerte"
              ></textarea>
            </div>
          </div>
          <span className="block pt-3 text-xl text-Azul-Fuerte sm:text-lg md:text-xl">
            Fotos de la persona:
          </span>
          <div className="grid grid-cols-1 gap-4 p-3 text-white sm:grid-cols-2 md:grid-cols-3">
            <div className="flex w-full flex-col items-start">
              <span className="text-left text-Azul-Fuerte">Max 4 fotos:</span>
              <input
                type="file"
                className="file-input file-input-bordered h-12 w-full bg-Azul-Fuerte"
                accept="image/*"
                multiple
              />
            </div>
          </div>
          <div className="flex flex-row flex-wrap items-end justify-end gap-3 p-3">
            <button className="btn flex items-center gap-2 bg-Azul-Mediano text-white hover:bg-Azul-Suave">
              Publicar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
