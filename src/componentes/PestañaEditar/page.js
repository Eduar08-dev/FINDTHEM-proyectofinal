"use client";

import { useState, useEffect } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../lib/firebase";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function EditProfile({ userId, initialUserData }) {
  const [userData, setUserData] = useState(initialUserData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [profilePicture, setProfilePicture] = useState(null);
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setProfilePicture(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const userRef = doc(db, "users", userId);
      let updatedData = { ...userData };

      if (profilePicture) {
        const storageRef = ref(storage, `fotos_usuarios/${userId}`);
        await uploadBytes(storageRef, profilePicture);
        const downloadURL = await getDownloadURL(storageRef);
        updatedData.profilePicture = downloadURL;
      }

      await updateDoc(userRef, updatedData);
      router.push("/profile");
    } catch (err) {
      setError("Error al actualizar el perfil");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto mt-16 max-w-md overflow-hidden rounded-lg bg-white shadow-custom-shadow">
      <form onSubmit={handleSubmit} className="p-6">
        <h2 className="mb-6 text-2xl font-semibold">Editar Perfil</h2>

        <div className="mb-4">
          <label
            className="mb-2 block text-sm font-bold text-gray-700"
            htmlFor="profilePicture"
          >
            Foto de Perfil
          </label>
          <input
            type="file"
            id="profilePicture"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full"
          />
          {userData.profilePicture && (
            <Image
              src={userData.profilePicture}
              alt="Foto de perfil actual"
              width={100}
              height={100}
              className="mt-2 rounded"
            />
          )}
        </div>

        <div className="mb-4">
          <label
            className="mb-2 block text-sm font-bold text-gray-700"
            htmlFor="name"
          >
            Nombre
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={userData.nombre}
            onChange={handleChange}
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
          />
        </div>

        <div className="mb-4">
          <label
            className="mb-2 block text-sm font-bold text-gray-700"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={userData.correo}
            onChange={handleChange}
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
          />
        </div>

        <div className="mb-4">
          <label
            className="mb-2 block text-sm font-bold text-gray-700"
            htmlFor="phone"
          >
            Teléfono
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={userData.telefono}
            onChange={handleChange}
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
          />
        </div>

        <div className="mb-4">
          <label
            className="mb-2 block text-sm font-bold text-gray-700"
            htmlFor="address"
          >
            Dirección
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={userData.direccionResidencia}
            onChange={handleChange}
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
          />
        </div>

        <div className="mb-6">
          <label
            className="mb-2 block text-sm font-bold text-gray-700"
            htmlFor="birthDate"
          >
            Fecha de Nacimiento
          </label>
          <input
            type="date"
            id="birthDate"
            name="birthDate"
            value={userData.fechaNacimiento}
            onChange={handleChange}
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
          />
        </div>

        {error && <p className="mb-4 text-xs italic text-red-500">{error}</p>}

        <div className="flex items-center justify-between">
          <button
            type="submit"
            disabled={loading}
            className="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
          >
            {loading ? "Actualizando..." : "Actualizar Perfil"}
          </button>
          <button
            type="button"
            onClick={() => router.push("/profile")}
            className="focus:shadow-outline rounded bg-gray-500 px-4 py-2 font-bold text-white hover:bg-gray-700 focus:outline-none"
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}
