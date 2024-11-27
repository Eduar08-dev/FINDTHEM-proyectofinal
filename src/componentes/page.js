import React from "react";

export default function FormPublicar() {
  return (
    <div className="bg-white p-3 font-sans">
      <div className="flex flex-wrap items-center justify-center rounded-lg border-2 border-dotted border-Azul-Fuerte p-3">
        <span className="text-3xl font-bold text-Azul-Fuerte">
          Llenar fomulario
        </span>
        <div>
          <span className="flex flex-col items-start justify-start pt-3 text-xl text-Azul-Fuerte">
            Datos de la persona:
          </span>
          <div className="flex flex-row flex-wrap content-center items-center justify-start gap-3 p-3 text-white">
            <label className="input input-bordered flex items-center gap-2 bg-Azul-Fuerte">
              Nombre
              <input
                type="text"
                className="grow"
                placeholder="Daisy Perez Lopez"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2 bg-Azul-Fuerte">
              Edad
              <input type="text" className="grow" placeholder="33 Años" />
            </label>
            <label className="input input-bordered flex items-center gap-2 bg-Azul-Fuerte">
              Estatura
              <input type="text" className="grow" placeholder="1.60 m" />
            </label>
            <label className="input input-bordered flex items-center gap-2 bg-Azul-Fuerte">
              Color de piel:
              <input type="text" className="grow" placeholder="Morena" />
            </label>
            <label className="input input-bordered flex items-center gap-2 bg-Azul-Fuerte">
              Contacto:
              <input
                type="text"
                className="grow"
                placeholder="+57 3001234567"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2 bg-Azul-Fuerte">
              Condición:
              <textarea
                placeholder="Tiene alzheimer, es sordomudo, tiene autismo..."
                className="textarea textarea-bordered textarea-xs w-full max-w-xs"
              ></textarea>
            </label>
          </div>
          <span className="flex flex-col items-start justify-start pt-3 text-xl text-Azul-Fuerte">
            Información:
          </span>
          <div className="flex flex-row flex-wrap content-center items-center justify-start gap-3 p-3 text-white">
            <label className="input input-bordered flex items-center gap-2 bg-Azul-Fuerte">
              Barrio
              <input
                type="text"
                className="grow"
                placeholder="Riomar, Barranquilla"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2 bg-Azul-Fuerte">
              Última ubicación:
              <input
                type="text"
                className="grow"
                placeholder="Cra. 57 #90-138"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2 bg-Azul-Fuerte">
              Día del suceso:
              <input type="date" className="grow" />
            </label>
            <label className="input input-bordered flex items-center gap-2 bg-Azul-Fuerte">
              Última vez vista:
              <input type="text" className="grow" placeholder="9:24 PM" />
            </label>
            <label className="input input-bordered flex items-center gap-2 bg-Azul-Fuerte">
              Vestimenta:
              <textarea
                placeholder="Camisa, Pantalón, Accesorios..."
                className="textarea textarea-bordered textarea-xs w-full max-w-xs"
              ></textarea>
            </label>
            <label className="input input-bordered flex items-center gap-2 bg-Azul-Fuerte">
              Descripción de los hechos:
              <textarea
                placeholder="Salió de su casa para donde una amiga y no llego..."
                className="textarea textarea-bordered textarea-xs w-full max-w-xs"
              ></textarea>
            </label>
          </div>
          <span className="flex flex-col items-start justify-start pt-3 text-xl text-Azul-Fuerte">
            Fotos de la persona:
          </span>
          <div className="flex flex-row flex-wrap content-center items-center justify-start gap-3 p-3 text-white">
            <label className="input input-bordered flex items-center gap-2 bg-Azul-Fuerte">
              Max 4
              <input
                type="file"
                className="file-input file-input-bordered w-full max-w-xs"
                accept="image/*"
                multiple
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
