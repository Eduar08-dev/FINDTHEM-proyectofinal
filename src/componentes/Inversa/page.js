'use client';
import React from "react";
import { useState } from "react";
import {db, storage} from "../../lib/firebase";
import {collection, addDoc} from "firebase/firestore";
import {ref, uploadBytes, getDownloadURL} from "firebase/storage";


export default function FormInversa() {
   const [form, setForm] = useState ({
    dia: "",
    barrio: "",
    edad: "",
    estatura: "",
    telefono: "",
    ubicacion: "",
    sexo: "",
    vestimenta: "",
    descripcion: "",
    condicion: "",
   });
    const validarForm = () => {
      const requeridos = ["dia", "barrio", "edad", "estatura", "telefono", "ubicacion", "sexo", "vestimenta", "descripcion", "condicion"];
      for (let i = 0; i < requeridos.length; i++) {
        if (form[requeridos[i]] === "") {
          setMensajeEnviado("Por favor, complete todos los campos");
          setEnviar(false);
          return false;
        }
      }
      return true;
    };
    const [fotos, setFotos] = useState([]);
    const [enviar, setEnviar] = useState(false);
    const [mensajeEnviado, setMensajeEnviado] = useState("");

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setForm({ ...form, [name]: value });
      };

  const handleFileChange = (e) => {
      const archivos = Array.from(e.target.files);
      if (archivos.length > 4) {
        alert("Solo se permiten 4 fotos");
        return;
      }
      const fotosArray = [];
      const uploadPromises = archivos.map((archivo) => {
        const storageRef = ref(storage, `fotos/${archivo.name}`);
        return uploadBytes(storageRef, archivo).then((snapshot) => {
          return getDownloadURL(snapshot.ref).then((url) => {
            fotosArray.push(url);
          });
        });
      });
  
      Promise.all(uploadPromises).then(() => {
        setFotos(fotosArray);
      });
    };
  
    const handleEnviar = async (e) => {
      e.preventDefault(); // Prevent default form submission
      if (validarForm()) {
        setEnviar(true);
        setMensajeEnviado("");
        try {
          // Upload photos first
          const uploadedPhotos = await Promise.all(
            fotos.map(async (foto, index) => {
              const storageRef = ref(storage, `fotos/${Date.now()}_${index}`);
              const snapshot = await uploadBytes(storageRef, foto);
              return getDownloadURL(snapshot.ref);
            })
          );
  
          // // Add document to Firestore
          // const docRef = await addDoc(collection(db, "busqueda_inversa"), {
          //   ...form,
          //   fotos: uploadedPhotos,
          // });
          // console.log("Document written with ID: ", docRef.id);
          setMensajeEnviado("Publicación exitosa");
          setForm({
            dia: "",
            barrio: "",
            edad: "",
            estatura: "",
            telefono: "",
            ubicacion: "",
            sexo: "",
            vestimenta: "",
            descripcion: "",
            condicion: "",
          });
          setFotos([]);
        } catch (error) {
          console.error("Error al enviar el formulario:", error);
          setMensajeEnviado("Error al enviar el formulario. Intenta nuevamente");
        } finally {
          setEnviar(false);
        }
      }
    };

  return (
    <form onSubmit={handleEnviar} className="bg-white p-4 font-sans">
      <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dotted border-Azul-Fuerte p-4">
        <span className="mb-4 text-3xl font-bold text-Azul-Fuerte sm:text-2xl md:text-3xl">
          Llenar fomulario
        </span>
        <div className="w-full">
          <span className="block pt-3 text-xl text-Azul-Fuerte sm:text-lg md:text-xl">
            Información de la persona:
          </span>
          <div className="grid grid-cols-1 gap-4 p-3 text-white sm:grid-cols-2 md:grid-cols-3">
            <div className="flex w-full flex-col items-start">
              <span className="text-left text-Azul-Fuerte">
                Día del suceso:
              </span>
              <input
                type="date"
                name="dia"
                value={form.dia}
                onChange={handleInputChange}
                className="input input-bordered h-12 w-full bg-Azul-Fuerte"
              />
            </div>
            <div className="flex w-full flex-col items-start">
              <span className="text-left text-Azul-Fuerte">Barrio:</span>
              <input
                type="text"
                name="barrio"
                value={form.barrio}
                onChange={handleInputChange}
                className="input input-bordered h-12 w-full bg-Azul-Fuerte"
                placeholder="Riomar, Barranquilla/Atlá..."
              />
            </div>
            <div className="flex w-full flex-col items-start">
              <span className="text-left text-Azul-Fuerte">
                Edad aproximada:
              </span>
              <input
                type="text"
                name="edad"
                value={form.edad}
                onChange={handleInputChange}
                className="input input-bordered h-12 w-full bg-Azul-Fuerte"
                placeholder="Entre 40 y 50 años"
              />
            </div>

            <div className="flex w-full flex-col items-start">
              <span className="text-left text-Azul-Fuerte">
                Estatura aproximada:
              </span>
              <input
                type="text"
                name="estatura"
                value={form.estatura}
                onChange={handleInputChange}
                className="input input-bordered h-12 w-full bg-Azul-Fuerte"
                placeholder="1.65 m y 1.70 m"
              />
            </div>
            <div className="flex w-full flex-col items-start">
              <span className="text-left text-Azul-Fuerte">
                Comuníquese al número:
              </span>
              <input
                type="text"
                name="telefono"
                value={form.telefono}
                onChange={handleInputChange}
                className="input input-bordered h-12 w-full bg-Azul-Fuerte"
                placeholder="+57 3001234567"
              />
            </div>
            <div className="flex w-full flex-col items-start">
              <span className="text-left text-Azul-Fuerte">Ubicación:</span>
              <input
                type="text"
                name="ubicacion"
                value={form.ubicacion}
                onChange={handleInputChange}
                className="input input-bordered h-12 w-full bg-Azul-Fuerte"
                placeholder="Cra. 57 #90-138"
              />
            </div>

            <div className="flex w-full flex-col items-start">
              <span className="text-left text-Azul-Fuerte">Sexo:</span>
              <select
                name="sexo"
                value={form.sexo}
                onChange={handleInputChange}
                className="select select-bordered h-12 w-full bg-Azul-Fuerte"
              >
                <option value="" disabled>
                  Seleccione
                </option>
                <option value="Masculino">Masculino</option>
                <option value="Femenino">Femenino</option>
              </select>
            </div>

            <div className="flex w-full flex-col items-start">
              <span className="text-left text-Azul-Fuerte">Vestimenta:</span>
              <textarea
              name="vestimenta"
              value={form.vestimenta}
              onChange={handleInputChange}   
                placeholder="Camisa (color), Pantalón, Accesorios..."
                className="textarea textarea-bordered w-full bg-Azul-Fuerte"
              ></textarea>
            </div>
            <div className="flex w-full flex-col items-start">
              <span className="text-left text-Azul-Fuerte">
                Descripción de la persona:
              </span>
              <textarea
              name="descripcion"
              value={form.descripcion}
              onChange={handleInputChange}
                placeholder="Se encuentra desorientada, no recuerda su información personal, etc."
                className="textarea textarea-bordered w-full bg-Azul-Fuerte"
              ></textarea>
            </div>

            <div className="flex w-full flex-col items-start">
              <span className="text-left text-Azul-Fuerte">Condición:</span>
              <textarea
              name="condicion"
              value={form.condicion}
              onChange={handleInputChange}  
                placeholder="Tiene alzheimer, es sordomudo, tiene autismo..."
                className="textarea textarea-bordered h-12 w-full bg-Azul-Fuerte"
              ></textarea>
            </div>
          </div>
          <span className="block pt-3 text-xl text-Azul-Fuerte sm:text-lg md:text-xl">
            Fotos de la persona:
          </span>
          <div className="grid grid-cols-1 gap-4 p-3 text-white sm:grid-cols-2 md:grid-cols-3">
            <div className="flex w-full flex-col items-start">
              <span className="text-left text-Azul-Fuerte">Max 4</span>
              <input
                type="file"
                onChange={handleFileChange}
                className="file-input file-input-bordered h-12 w-full bg-Azul-Fuerte"
                accept="image/*"
                multiple
              />
            </div>
          </div>
          <div className="flex flex-row flex-wrap items-end justify-end gap-3 p-3">
            <button 
            type="button"
            onClick={handleEnviar}
            className="btn flex items-center gap-2 bg-Azul-Mediano text-white hover:bg-Azul-Suave">
              {enviar ? "Enviando..." : "Enviar"}
            </button>
            </div>
            {mensajeEnviado && (
            <div className={`mt-4 p-2 text-center ${mensajeEnviado.includes("exitosa") ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
              {mensajeEnviado}
            </div>
          )}
          </div>
        </div>
      </form>
      );
    }
