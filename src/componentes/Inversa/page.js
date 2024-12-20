"use client";

import React, { useState, useEffect } from "react";
import { db, storage } from "../../lib/firebase";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useAuth } from "@/context/AuthContext"; // Importamos el contexto de autenticación
import { useRouter } from "next/navigation"; // Para redirigir si no estamos logueados
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function FormInversa() {
  const [usuarioVerificado, setUsuarioVerificado] = useState(false);
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const auth = getAuth();

    // Escuchar cambios en el estado de autenticación del usuario
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // Verificar si el correo está verificado
        setUsuario(user);
        setUsuarioVerificado(user.emailVerified);
      } else {
        setUsuario(null);
        setUsuarioVerificado(false);
      }
    });

    // Limpiar el listener cuando el componente se desmonte
    return () => unsubscribe();
  }, []);

  // Si el usuario no está autenticado o el correo no ha sido verificado, no mostrar el componente
  if (!usuario || !usuarioVerificado) {
    return (
      <div className="flex flex-col flex-nowrap content-center items-center justify-center gap-[20px] py-52 text-Azul-Fuerte">
        <h1 className="flex text-4xl font-bold">
          Verificación de correo electronico
        </h1>
        <p className="flex w-7/12 text-xl">
          Para poder crear una búsqueda inversa, debemos verificar tu correo
          electrónico, para eso te hemos enviado un enlace de verificación a tu
          correo electrónico. Por favor, verifica tu bandeja de entrada y haz
          clic en el enlace para continuar.
        </p>
        <p className="flex w-7/12 content-end items-end justify-end">
          Equipo de Find Them.
        </p>
      </div>
    );
  }
  const { user } = useAuth(); // Obtenemos el usuario autenticado
  const router = useRouter(); // Para redirigir al usuario si no está autenticado

  useEffect(() => {
    if (!user) {
      // Si no hay usuario logueado, redirigir a la página de login
      router.push("/");
    }
  }, [user, router]); // Se ejecuta solo cuando el `user` cambia

  if (!user) {
    // Mientras se hace la redirección, puedes mostrar un "loading" o alguna interfaz de espera.
    return <div>Cargando...</div>;
  }
  const [form, setForm] = useState({
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
    const requeridos = [
      "dia",
      "barrio",
      "edad",
      "estatura",
      "telefono",
      "ubicacion",
      "sexo",
      "vestimenta",
      "descripcion",
      "condicion",
    ];
    for (let i = 0; i < requeridos.length; i++) {
      if (form[requeridos[i]] === "") {
        setMensajeEnviado(
          "¡Por favor, complete todos los campos y suba al menos una foto!",
        );
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
          }),
        );

        // Add document to Firestore
        const docRef = await addDoc(collection(db, "busqueda_inversa"), {
          ...form,
          fotos: uploadedPhotos,
        });
        console.log("Document written with ID: ", docRef.id);
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
          <div className="flex flex-row flex-wrap justify-center gap-3 p-3">
            <button
              type="button"
              onClick={handleEnviar}
              className={`btn flex w-1/2 items-center gap-2 text-lg ${enviar ? "bg-white text-black" : "bg-Azul-Mediano text-white"} hover:bg-Azul-Suave`}
            >
              {enviar ? "Enviando..." : "Enviar"}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
