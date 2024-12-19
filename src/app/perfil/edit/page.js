"use client";

import { useState, useEffect } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../../../lib/firebase";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function EditProfile({ initialUserData }) {
  const [userData, setUserData] = useState(initialUserData || {});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [profilePicture, setProfilePicture] = useState(null);
  const [profilePictureName, setProfilePictureName] = useState(""); // Estado para el nombre del archivo
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePicture(file);
      setProfilePictureName(file.name); // Guardar el nombre del archivo seleccionado
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const userId = localStorage.getItem("uid");
      const userRef = doc(db, "usuarios", userId);
      let updatedData = { ...userData };

      if (profilePicture) {
        const storageRef = ref(storage, `fotos_usuarios/${userId}`);
        await uploadBytes(storageRef, profilePicture);
        const downloadURL = await getDownloadURL(storageRef);
        updatedData.profilePicture = downloadURL;
      }

      await updateDoc(userRef, updatedData);
      router.push("/perfil");
    } catch (err) {
      setError("Error al actualizar el perfil");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Asegurarse de que userData esté definido antes de renderizar
  if (!userData) {
    return <p>Loading...</p>;
  }

  return (
    <div className="mx-auto mt-5 max-w-md overflow-hidden rounded-lg bg-white shadow-custom-shadow">
      <form onSubmit={handleSubmit} className="p-6">
        <h2 className="mb-6 text-center text-2xl font-semibold text-Azul-Fuerte">
          Editar Perfil
        </h2>

        <div className="mb-6 flex flex-col items-center justify-center">
          <label
            className="mb-2 block text-sm font-bold text-gray-700"
            htmlFor="profilePicture"
          >
            Foto de Perfil
          </label>
          <div
            className="flex h-24 w-24 cursor-pointer items-center justify-center overflow-hidden rounded-full border border-gray-300"
            onClick={() => document.getElementById("profilePicture").click()}
          >
            <input
              type="file"
              id="profilePicture"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />
            {userData?.profilePicture || profilePicture ? (
              <Image
                src={
                  userData.profilePicture || URL.createObjectURL(profilePicture)
                } // Mostrar la imagen seleccionada o la predeterminada
                alt="Foto de perfil actual"
                width={100}
                height={100}
                className="h-full w-full object-cover"
              />
            ) : (
              <span className="text-gray-500">
                {profilePictureName || "Sin imagen"}
              </span> // Mostrar el nombre del archivo o "Sin imagen"
            )}
          </div>
        </div>

        <div className="mb-4">
          <label
            className="mb-2 block text-sm font-bold text-gray-700"
            htmlFor="name"
          >
            Nombre:
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={userData?.nombre}
            onChange={handleChange}
            className="input input-bordered h-12 w-full bg-Azul-Fuerte text-white"
          />
        </div>

        <div className="mb-4">
          <label
            className="mb-2 block text-sm font-bold text-gray-700"
            htmlFor="email"
          >
            Email:
          </label>
          <input
            type="email"
            id="correo"
            name="correo"
            value={userData?.correo}
            onChange={handleChange}
            className="input input-bordered h-12 w-full bg-Azul-Fuerte text-white"
          />
        </div>

        <div className="mb-4">
          <label
            className="mb-2 block text-sm font-bold text-gray-700"
            htmlFor="phone"
          >
            Teléfono:
          </label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            value={userData?.telefono}
            onChange={handleChange}
            className="input input-bordered h-12 w-full bg-Azul-Fuerte text-white"
          />
        </div>

        <div className="mb-4">
          <label
            className="mb-2 block text-sm font-bold text-gray-700"
            htmlFor="address"
          >
            Dirección:
          </label>
          <input
            type="text"
            id="direccionResidencia"
            name="direccionResidencia"
            value={userData?.direccionResidencia}
            onChange={handleChange}
            className="input input-bordered h-12 w-full bg-Azul-Fuerte text-white"
          />
        </div>

        <div className="mb-6">
          <label
            className="mb-2 block text-sm font-bold text-gray-700"
            htmlFor="birthDate"
          >
            Fecha de Nacimiento:
          </label>
          <input
            type="date"
            id="fechaNacimiento"
            name="fechaNacimiento"
            value={userData?.fechaNacimiento}
            onChange={handleChange}
            className="input input-bordered h-12 w-full bg-Azul-Fuerte text-white"
          />
        </div>

        {error && <p className="mb-4 text-xs italic text-red-500">{error}</p>}

        <div className="mt-4 flex items-center justify-between space-x-4">
          <button
            type="submit"
            disabled={loading}
            className="focus:shadow-outline rounded border-2 border-Azul-Fuerte bg-Azul-Suave px-4 py-2 font-bold text-white hover:bg-Azul-Mediano focus:outline-none"
          >
            {loading ? "Actualizando..." : "Actualizar Perfil"}
          </button>
          <button
            type="button"
            onClick={() => router.push("/perfil")}
            className="focus:shadow-outline rounded border-2 border-Azul-Fuerte bg-gray-500 px-4 py-2 font-bold text-white hover:bg-gray-700 focus:outline-none"
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}
