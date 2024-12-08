// /components/usuario/InfoUsuario.js
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { updateUsuario } from "../../lib/firebaseActions";

const InfoUsuario = () => {
  const [userInfo, setUserInfo] = useState({
    userName: "",
    nombre: "",
    apellido: "",
    email: "",
    numTel: "",
    sexo: "",
    foto: "",
  });
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;
    // Puedes cargar información previa del usuario aquí, si es necesario
  }, [router.isReady]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setUserInfo({ ...userInfo, [name]: files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userId = "ID_DEL_USUARIO"; // Debes obtener este ID del contexto de autenticación o router
    try {
      await updateUsuario(userId, userInfo);
      // Redirigir a otra página después de guardar
      router.push("/perfil"); // Ajusta la ruta según sea necesario
    } catch (error) {
      console.error("Error al guardar la información: ", error);
    }
  };

  return (
    <div className="bg-white p-4 font-sans">
      <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dotted border-Azul-Fuerte p-4">
        <span className="mb-4 text-3xl font-bold text-Azul-Fuerte sm:text-2xl md:text-3xl">
          Información Usuario
        </span>
        <div className="w-full">
          <span className="block pt-3 text-xl text-Azul-Fuerte sm:text-lg md:text-xl">
            Datos de la persona:
          </span>
          <div className="grid grid-cols-1 gap-4 p-3 text-white sm:grid-cols-2 md:grid-cols-3">
            <div className="flex w-full flex-col items-start">
              <span className="text-left text-Azul-Fuerte">
                Nombre de usuario:
              </span>
              <input
                type="text"
                className="input input-bordered h-12 w-full bg-Azul-Fuerte"
                placeholder="daisyperez"
                name="userName"
                value={userInfo.userName}
                onChange={handleChange}
              />
            </div>
            <div className="flex w-full flex-col items-start">
              <span className="text-left text-Azul-Fuerte">Nombre:</span>
              <input
                type="text"
                className="input input-bordered h-12 w-full bg-Azul-Fuerte"
                placeholder="Daisy"
                name="nombre"
                value={userInfo.nombre}
                onChange={handleChange}
              />
            </div>
            <div className="flex w-full flex-col items-start">
              <span className="text-left text-Azul-Fuerte">Apellido:</span>
              <input
                type="text"
                className="input input-bordered h-12 w-full bg-Azul-Fuerte"
                placeholder="Perez"
                name="apellido"
                value={userInfo.apellido}
                onChange={handleChange}
              />
            </div>
            <div className="flex w-full flex-col items-start">
              <span className="text-left text-Azul-Fuerte">Correo:</span>
              <input
                type="text"
                className="input input-bordered h-12 w-full bg-Azul-Fuerte"
                placeholder="daisy@gmail.com"
                name="email"
                value={userInfo.email}
                onChange={handleChange}
              />
            </div>
            <div className="flex w-full flex-col items-start">
              <span className="text-left text-Azul-Fuerte">
                Numero de telefono:
              </span>
              <input
                type="text"
                className="input input-bordered h-12 w-full bg-Azul-Fuerte"
                placeholder="+57 3001234567"
                name="numTel"
                value={userInfo.numTel}
                onChange={handleChange}
              />
            </div>
            <div className="flex w-full flex-col items-start">
              <span className="text-left text-Azul-Fuerte">Sexo:</span>
              <select
                className="select select-bordered h-12 w-full bg-Azul-Fuerte"
                name="sexo"
                value={userInfo.sexo}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Seleccione
                </option>
                <option value="Masculino">Masculino</option>
                <option value="Femenino">Femenino</option>
              </select>
            </div>
            <div className="flex w-full flex-col items-start">
              <span className="text-left text-Azul-Fuerte">
                Foto de perfil:
              </span>
              <input
                type="file"
                className="file-input file-input-bordered h-12 w-full bg-Azul-Fuerte"
                accept="image/*"
                name="foto"
                onChange={handleFileChange}
              />
            </div>
          </div>
          <div className="flex flex-row flex-wrap items-end justify-end gap-3 p-3">
            <button
              className="btn flex items-center gap-2 bg-Azul-Mediano text-white hover:bg-Azul-Suave"
              onClick={handleSubmit}
            >
              Guardar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoUsuario;
