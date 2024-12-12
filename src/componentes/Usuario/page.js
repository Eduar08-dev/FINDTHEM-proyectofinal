"use client";

import { useState, useEffect } from "react";
import { db, storage, auth } from "../../lib/firebase";
import { doc, getDoc, updateDoc, setDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

const InfoUsuario = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [usuario, setUsuario] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [confirmarContraseña, setConfirmarContraseña] = useState("");
  const [telefono, setTelefono] = useState("");
  const [sexo, setSexo] = useState("");
  const [foto, setFoto] = useState(null);

  const handleTogglePassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword((prevState) => !prevState);
  };

  const handleCrearUsuario = async (e) => {
    e.preventDefault();
    if (contraseña !== confirmarContraseña) {
      alert("Las contraseñas no coinciden");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        correo,
        contraseña,
      );
      const user = userCredential.user;

      if (foto) {
        const storageRef = ref(storage, `fotos/${user.uid}`);
        await uploadBytes(storageRef, foto);
        const fotoURL = await getDownloadURL(storageRef);
        await updateProfile(user, { photoURL: fotoURL });
      }

      await setDoc(doc(db, "usuarios", user.uid), {
        usuario,
        nombre,
        apellido,
        correo,
        telefono,
        sexo,
      });
      if (foto) {
        const storageRef = ref(storage, `fotos/${user.uid}`);
        try {
          await uploadBytes(storageRef, foto);
          const fotoURL = await getDownloadURL(storageRef);
          await updateProfile(user, { photoURL: fotoURL });
        } catch (error) {
          console.error("Error al subir la foto:", error);
        }
      }

      alert("Usuario creado con éxito");
    } catch (error) {
      alert("Error al crear el usuario: " + error.message);
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
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
              />
            </div>
            <div className="flex w-full flex-col items-start">
              <span className="text-left text-Azul-Fuerte">Nombre:</span>
              <input
                type="text"
                className="input input-bordered h-12 w-full bg-Azul-Fuerte"
                placeholder="Daisy"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>
            <div className="flex w-full flex-col items-start">
              <span className="text-left text-Azul-Fuerte">Apellido:</span>
              <input
                type="text"
                className="input input-bordered h-12 w-full bg-Azul-Fuerte"
                placeholder="Perez"
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
              />
            </div>
            <div className="flex w-full flex-col items-start">
              <span className="text-left text-Azul-Fuerte">Correo:</span>
              <input
                type="text"
                className="input input-bordered h-12 w-full bg-Azul-Fuerte"
                placeholder="daisy@gmail.com"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
              />
            </div>
            <div className="flex w-full flex-col items-start">
              <span className="text-left text-Azul-Fuerte">Contraseña:</span>
              <div className="relative w-full">
                <input
                  type={showPassword ? "text" : "password"}
                  className="input input-bordered h-12 w-full bg-Azul-Fuerte"
                  id="password"
                  placeholder="*******"
                  value={contraseña}
                  onChange={(e) => setContraseña(e.target.value)}
                />
                <input
                  className="absolute right-3 top-1/2 -translate-y-1/2 transform"
                  type="checkbox"
                  id="showPassword"
                  checked={showPassword}
                  onChange={handleTogglePassword}
                />
              </div>
            </div>
            <div className="flex w-full flex-col items-start">
              <span className="text-left text-Azul-Fuerte">
                Repetir contraseña:
              </span>
              <div className="relative w-full">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  className="input input-bordered h-12 w-full bg-Azul-Fuerte"
                  id="confirmPassword"
                  placeholder="Confirmar contraseña"
                  value={confirmarContraseña}
                  onChange={(e) => setConfirmarContraseña(e.target.value)}
                />
                <input
                  className="absolute right-3 top-1/2 -translate-y-1/2 transform"
                  type="checkbox"
                  id="showConfirmPassword"
                  checked={showConfirmPassword}
                  onChange={handleToggleConfirmPassword}
                />
              </div>
            </div>
            <div className="flex w-full flex-col items-start">
              <span className="text-left text-Azul-Fuerte">
                Número de teléfono:
              </span>
              <input
                type="text"
                className="input input-bordered h-12 w-full bg-Azul-Fuerte"
                placeholder="+57 3001234567"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
              />
            </div>
            <div className="flex w-full flex-col items-start">
              <span className="text-left text-Azul-Fuerte">Sexo:</span>
              <select
                className="select select-bordered h-12 w-full bg-Azul-Fuerte"
                name="sexo"
                value={sexo}
                onChange={(e) => setSexo(e.target.value)}
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
                onChange={(e) => setFoto(e.target.files[0])}
              />
            </div>
          </div>
          <div className="flex flex-row flex-wrap items-end justify-end gap-3 p-3">
            <button
              className="btn flex items-center gap-2 bg-Azul-Mediano text-white hover:bg-Azul-Suave"
              onClick={handleCrearUsuario}
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
