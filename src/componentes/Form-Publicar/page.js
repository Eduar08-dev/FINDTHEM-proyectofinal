"use client";

import React, { useState, useEffect } from "react";
import { db, storage, auth, isDevelopment } from "../../lib/firebase";
import { collection, addDoc, setDoc, doc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { signInAnonymously } from "firebase/auth";
import { useAuth } from "../../context/AuthContext"; // Importamos el contexto de autenticación
import { useRouter } from "next/navigation"; // Para redirigir si no estamos logueados
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function FormPublicar() {
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
          Para poder crear una solicitud de búsqueda, debemos verificar tu
          correo electrónico, para eso te hemos enviado un enlace de
          verificación a tu correo electrónico. Por favor, verifica tu bandeja
          de entrada y haz clic en el enlace para continuar.
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

  const [formData, setFormData] = useState({
    nombre: "",
    edad: "",
    estatura: "",
    sexo: "",
    colorPiel: "",
    contacto: "",
    grupoSanguineo: "",
    caracteristicasFisicas: "",
    condicion: "",
    barrio: "",
    ultimaUbicacion: "",
    diaSuceso: "",
    ultimaVezVista: "",
    parentesco: "",
    vestimenta: "",
    descripcionHechos: "",
  });
  const validateForm = () => {
    const requiredFields = [
      "nombre",
      "edad",
      "estatura",
      "sexo",
      "colorPiel",
      "contacto",
      "grupoSanguineo",
      "caracteristicasFisicas",
      "condicion",
      "barrio",
      "ultimaUbicacion",
      "diaSuceso",
      "ultimaVezVista",
      "parentesco",
      "vestimenta",
      "descripcionHechos",
    ];

    for (let field of requiredFields) {
      if (!formData[field]) {
        return false;
      }
    }

    if (imagenes.length === 0) {
      return false;
    }

    return true;
  };

  const [imagenes, setImagenes] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    if (e.target.files.length > 4) {
      alert("¡!Solo puedes subir un máximo de 4 imágenes!");
      return;
    }
    setImagenes(Array.from(e.target.files));
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);
  //   setSubmitMessage("");

  //   if (!validateForm()) {
  //     setSubmitMessage("Por favor, complete todos los campos requeridos y suba al menos una imagen.");
  //     setIsSubmitting(false);
  //     return;
  //   }

  //   try {
  //     const imageUrls = await Promise.all(
  //       imagenes.map(async (imagen) => {
  //         const imageRef = ref(storage, `imagenes/${imagen.name}`);
  //         await uploadBytes(imageRef, imagen);
  //         return getDownloadURL(imageRef);
  //       })
  //     );

  //     const docRef = await addDoc(collection(db, "personas_desaparecidas"), {
  //       ...formData,
  //       imageUrls,
  //       fechaPublicacion: new Date(),
  //     });

  //     setSubmitMessage("Formulario enviado con éxito!");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    console.log("Form Data:", formData);
    console.log("Images:", imagenes);

    if (!validateForm()) {
      setSubmitMessage(
        "¡Por favor, complete todos los campos requeridos y suba al menos una imagen.!",
      );
      setIsSubmitting(false);
      return;
    }

    try {
      const imageUrls = await Promise.all(
        imagenes.map(async (imagen) => {
          const imageRef = ref(storage, `imagenes/${imagen.name}`);
          await uploadBytes(imageRef, imagen);
          return getDownloadURL(imageRef);
        }),
      );

      console.log("Image URLs:", imageUrls); // Verifica que las URLs se generen correctamente

      const docRef = await addDoc(collection(db, "personas_desaparecidas"), {
        ...formData,
        imageUrls,
        fechaPublicacion: new Date(),
      });

      console.log("Document written with ID: ", docRef.id); // Verifica que el documento se haya creado

      setSubmitMessage("Formulario enviado con éxito!");
      setFormData({
        nombre: "",
        edad: "",
        estatura: "",
        sexo: "",
        colorPiel: "",
        contacto: "",
        grupoSanguineo: "",
        caracteristicasFisicas: "",
        condicion: "",
        barrio: "",
        ultimaUbicacion: "",
        diaSuceso: "",
        ultimaVezVista: "",
        parentesco: "",
        vestimenta: "",
        descripcionHechos: "",
      });
      setImagenes([]);
    } catch (error) {
      console.error("Error al enviar el formulario: ", error);
      setSubmitMessage(
        "Error al enviar el formulario. Por favor, intenta de nuevo.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 font-sans">
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
                name="nombre"
                value={formData.nombre}
                onChange={handleInputChange}
                className="input input-bordered h-12 w-full bg-Azul-Fuerte"
                placeholder="Ingresa aquí el nombre"
              />
            </div>
            <div className="flex w-full flex-col items-start">
              <span className="text-left text-Azul-Fuerte">Edad:</span>
              <input
                type="text"
                name="edad"
                value={formData.edad}
                onChange={handleInputChange}
                className="input input-bordered h-12 w-full bg-Azul-Fuerte"
                placeholder="33 Años"
              />
            </div>
            <div className="flex w-full flex-col items-start">
              <span className="text-left text-Azul-Fuerte">Estatura:</span>
              <input
                type="text"
                name="estatura"
                value={formData.estatura}
                onChange={handleInputChange}
                className="input input-bordered h-12 w-full bg-Azul-Fuerte"
                placeholder="1.60 m"
              />
            </div>
            <div className="flex w-full flex-col items-start">
              <span className="text-left text-Azul-Fuerte">Sexo:</span>
              <select
                name="sexo"
                value={formData.sexo}
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
              <span className="text-left text-Azul-Fuerte">Color de piel:</span>
              <input
                type="text"
                name="colorPiel"
                value={formData.colorPiel}
                onChange={handleInputChange}
                className="input input-bordered h-12 w-full bg-Azul-Fuerte"
                placeholder="Morena"
              />
            </div>
            <div className="flex w-full flex-col items-start">
              <span className="text-left text-Azul-Fuerte">Contacto:</span>
              <input
                type="text"
                name="contacto"
                value={formData.contacto}
                onChange={handleInputChange}
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
                name="grupoSanguineo"
                value={formData.grupoSanguineo}
                onChange={handleInputChange}
                className="input input-bordered h-12 w-full bg-Azul-Fuerte"
                placeholder="O +"
              />
            </div>
            <div className="flex w-full flex-col items-start">
              <span className="text-left text-Azul-Fuerte">
                Características físicas:
              </span>
              <textarea
                name="caracteristicasFisicas"
                value={formData.caracteristicasFisicas}
                onChange={handleInputChange}
                placeholder="Cicatrices, tatuajes, etc."
                className="textarea textarea-bordered w-full bg-Azul-Fuerte"
              ></textarea>
            </div>
            <div className="flex w-full flex-col items-start">
              <span className="text-left text-Azul-Fuerte">Condición:</span>
              <textarea
                name="condicion"
                value={formData.condicion}
                onChange={handleInputChange}
                placeholder="Tiene alzheimer, es sordomudo, tiene autismo..."
                className="textarea textarea-bordered w-full bg-Azul-Fuerte"
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
                name="barrio"
                value={formData.barrio}
                onChange={handleInputChange}
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
                name="ultimaUbicacion"
                value={formData.ultimaUbicacion}
                onChange={handleInputChange}
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
                name="diaSuceso"
                value={formData.diaSuceso}
                onChange={handleInputChange}
                className="input input-bordered h-12 w-full bg-Azul-Fuerte"
              />
            </div>
            <div className="flex w-full flex-col items-start">
              <span className="text-left text-Azul-Fuerte">
                Última vez vista:
              </span>
              <input
                type="text"
                name="ultimaVezVista"
                value={formData.ultimaVezVista}
                onChange={handleInputChange}
                className="input input-bordered h-12 w-full bg-Azul-Fuerte"
                placeholder="9:24 PM"
              />
            </div>
            <div className="flex w-full flex-col items-start">
              <span className="text-left text-Azul-Fuerte">Parentesco:</span>
              <input
                type="text"
                name="parentesco"
                value={formData.parentesco}
                onChange={handleInputChange}
                className="input input-bordered h-12 w-full bg-Azul-Fuerte"
                placeholder="Padre, Madre, Hijo etc."
              />
            </div>
            <div className="flex w-full flex-col items-start">
              <span className="text-left text-Azul-Fuerte">Vestimenta:</span>
              <textarea
                name="vestimenta"
                value={formData.vestimenta}
                onChange={handleInputChange}
                placeholder="Camisa (color), Pantalón, Accesorios..."
                className="textarea textarea-bordered w-full bg-Azul-Fuerte"
              ></textarea>
            </div>
            <div className="flex w-full flex-col items-start">
              <span className="text-left text-Azul-Fuerte">
                Descripción de los hechos:
              </span>
              <textarea
                name="descripcionHechos"
                value={formData.descripcionHechos}
                onChange={handleInputChange}
                placeholder="Salió de su casa para donde una amiga y no llego..."
                className="textarea textarea-bordered w-full bg-Azul-Fuerte"
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
                onChange={handleFileChange}
                className="file-input file-input-bordered h-12 w-full bg-Azul-Fuerte"
                accept="image/*"
                multiple
              />
            </div>
          </div>
          <div className="flex flex-row flex-wrap justify-center gap-3 p-3">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`btn flex w-1/2 items-center gap-2 text-lg ${isSubmitting ? "bg-white text-black" : "bg-Azul-Mediano text-white"} hover:bg-Azul-Suave`}
            >
              {isSubmitting ? "Enviando..." : "Publicar"}
            </button>
          </div>
          {submitMessage && (
            <div
              className={`mt-4 p-2 text-center ${submitMessage.includes("éxito") ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
            >
              {submitMessage}
            </div>
          )}
        </div>
      </div>
    </form>
  );
}
