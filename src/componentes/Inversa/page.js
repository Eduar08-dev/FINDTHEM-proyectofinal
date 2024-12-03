import React from "react";

export default function FormInversa() {
  return (
    <div className="bg-white p-3 font-sans">
      <div className="flex flex-wrap items-center justify-center rounded-lg border-2 border-dotted border-Azul-Fuerte p-3">
        <span className="text-3xl font-bold text-Azul-Fuerte">
          Llenar fomulario
        </span>
        <div>
          <span className="flex flex-col items-start justify-start pt-3 text-xl text-Azul-Fuerte">
            Información de la persona:
          </span>
          <div className="flex flex-row flex-wrap content-center items-center justify-start gap-3 p-3 text-white">
            <label className="input input-bordered flex items-center gap-2 bg-Azul-Fuerte">
              Día del suceso:
              <input type="date" className="grow" />
            </label>
            <label className="input input-bordered flex items-center gap-2 bg-Azul-Fuerte">
              Barrio
              <input
                type="text"
                className="grow"
                placeholder="Riomar, Barranquilla/Atlá..."
              />
            </label>
            <label className="input input-bordered flex items-center gap-2 bg-Azul-Fuerte">
              Ubicación:
              <input
                type="text"
                className="grow"
                placeholder="Cra. 57 #90-138"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2 bg-Azul-Fuerte">
              Descripción de la persona:
              <textarea
                placeholder="Se encuentra desorientada, no recuerda su información personal, etc."
                className="textarea textarea-bordered textarea-xs z-10 w-full max-w-xs"
              ></textarea>
            </label>

            <label className="input input-bordered flex items-center gap-2 bg-Azul-Fuerte">
              Comuníquese al número:
              <input
                type="text"
                className="grow"
                placeholder="+57 3001234567"
              />
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
          <div className="flex flex-row flex-wrap content-end items-end justify-end gap-3 p-3">
            <button className="btn flex items-center gap-2 bg-Azul-Mediano text-white hover:bg-Azul-Suave">
              Publicar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
