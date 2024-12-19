// 'use client'

// import { useState, useEffect } from 'react';
// import { doc, getDoc } from 'firebase/firestore';
// import { ref, getDownloadURL } from 'firebase/storage';
// import { db, storage } from '../../lib/firebase';
// import Link from 'next/link';
// import Image from 'next/image';

// export default function PestañaUsuario() {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const userId = localStorage.getItem('uid');
//     async function fetchUserData() {
//       if (!userId) {
//         setError('ID de usuario no proporcionado');
//         setLoading(false);
//         return;
//       }

//       try {
//         const userDoc = await getDoc(doc(db, 'usuarios', userId));
//         if (userDoc.exists()) {
//           const userData = userDoc.data();

//           // Aseguramos que los datos existan antes de intentar acceder a ellos
//           const profilePicture = userData.fotoURL || null;
//           const nombre = userData.nombre || 'Nombre no disponible';
//           const correo = userData.correo || 'Correo no disponible';
//           const telefono = userData.telefono || 'No especificado';
//           const direccionResidencia = userData.direccionResidencia || 'No especificada';
//           const fechaNacimiento = userData.fechaNacimiento || 'No especificada';

//           // Obtener la URL de la imagen de perfil si existe
//           if (profilePicture) {
//             const imageUrl = await getDownloadURL(ref(storage, profilePicture));
//             userData.profilePictureUrl = imageUrl;
//           }

//           // Actualizar el estado con los datos del usuario
//           setUser({
//             ...userData,
//             nombre,
//             correo,
//             telefono,
//             direccionResidencia,
//             fechaNacimiento,
//           });
//         } else {
//           setError('Usuario no encontrado');
//         }
//       } catch (err) {
//         setError(`Error al cargar los datos del usuario: ${err.message}`);
//         console.error('Error fetching user data:', err);
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchUserData();
//   }, []);

//   if (loading) return <div>Cargando...</div>;
//   if (error) return <div>Error: {error}</div>;
//   if (!user) return <div>No se encontró el usuario</div>;

//   return (
//     <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-16">
//       <div className="text-center p-6">
//         {user.profilePictureUrl ? (
//           <Image
//             src={user.profilePictureUrl}
//             alt="Foto de perfil"
//             width={128}
//             height={128}
//             className="mx-auto rounded-full"
//           />
//         ) : (
//           <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto"></div>
//         )}
//         <h2 className="mt-4 text-xl font-semibold">{user.nombre}</h2>
//         <p className="text-gray-600">{user.correo}</p>
//       </div>
//       <div className="border-t border-gray-200 px-6 py-4">
//         <p><strong>Teléfono:</strong> {user.telefono}</p>
//         <p><strong>Dirección:</strong> {user.direccionResidencia}</p>
//         <p><strong>Fecha de nacimiento:</strong> {user.fechaNacimiento}</p>
//       </div>
//       <div className="border-t border-gray-200 px-6 py-4">
//         <Link href={`/perfil/edit`} className="block w-full text-center bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
//           Editar Perfil
//         </Link>
//       </div>
//     </div>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { ref, getDownloadURL } from "firebase/storage";
import { db, storage } from "../../lib/firebase";
import Link from "next/link";
import Image from "next/image";

export default function PerfilUsuario() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const userId = localStorage.getItem("uid");
    async function fetchUserData() {
      if (!userId) {
        setError("ID de usuario no proporcionado");
        setLoading(false);
        return;
      }

      try {
        const userDoc = await getDoc(doc(db, "usuarios", userId));
        if (userDoc.exists()) {
          const userData = userDoc.data();

          const profilePicture = userData.fotoURL || null;
          const nombre = userData.nombre || "Nombre no disponible";
          const correo = userData.correo || "Correo no disponible";
          const telefono = userData.telefono || "No especificado";
          const direccionResidencia =
            userData.direccionResidencia || "No especificada";
          const fechaNacimiento = userData.fechaNacimiento || "No especificada";

          if (profilePicture) {
            const imageUrl = await getDownloadURL(ref(storage, profilePicture));
            userData.profilePictureUrl = imageUrl;
          }

          setUser({
            ...userData,
            nombre,
            correo,
            telefono,
            direccionResidencia,
            fechaNacimiento,
          });
        } else {
          setError("Usuario no encontrado");
        }
      } catch (err) {
        setError(`Error al cargar los datos del usuario: ${err.message}`);
        console.error("Error fetching user data:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchUserData();
  }, []);

  if (loading)
    return (
      <div className="flex h-screen items-center justify-center">
        <div
          className="spinner-border inline-block h-8 w-8 animate-spin rounded-full border-4 text-gray-600"
          role="status"
        ></div>
      </div>
    );
  if (error)
    return (
      <div className="flex h-screen items-center justify-center text-red-600">
        {error}
      </div>
    );
  if (!user)
    return (
      <div className="flex h-screen items-center justify-center">
        No se encontró el usuario
      </div>
    );

  return (
    <div className="mx-auto mt-5 max-w-3xl overflow-hidden rounded-lg bg-white shadow-custom-shadow">
      <div className="bg-Azul-Fuerte p-4 text-center text-white">
        <h1 className="text-2xl font-bold">Perfil de usuario</h1>
      </div>
      <div className="flex justify-center pb-3 pt-5">
        {user.profilePictureUrl ? (
          <Image
            src={user.profilePictureUrl}
            alt="Foto de perfil"
            width={500}
            height={500}
            className="h-56 w-56 rounded-full object-cover shadow-custom-shadow"
          />
        ) : (
          <div className="h-48 w-48 rounded-full bg-gray-300"></div>
        )}
      </div>
      <div className="mb-4 text-center">
        <h2 className="text-3xl font-bold text-Azul-Fuerte">{user.nombre}</h2>
        <p className="text-Azul-Fuerte">{user.correo}</p>
      </div>
      <div className="mb-4 flex flex-wrap justify-center gap-4">
        <div className="w-1/2 rounded-lg border-2 border-dotted border-Azul-Fuerte bg-gray-100 p-4 text-Azul-Fuerte">
          <h3 className="text-lg font-bold">Información de contacto</h3>
          <p>
            <strong>Teléfono:</strong> {user.telefono}
          </p>
          <p>
            <strong>Dirección:</strong> {user.direccionResidencia}
          </p>
        </div>
        <div className="w-1/2 rounded-lg border-2 border-dotted border-Azul-Fuerte bg-gray-100 p-4 text-Azul-Fuerte">
          <h3 className="text-lg font-bold">Información personal</h3>
          <p>
            <strong>Fecha de nacimiento:</strong> {user.fechaNacimiento}
          </p>
        </div>
      </div>
      <div className="mb-4 flex justify-center">
        <Link
          href={`/perfil/edit`}
          className="rounded border-2 border-Azul-Fuerte bg-Azul-Suave px-4 py-2 font-bold text-white hover:bg-Azul-Mediano"
        >
          Editar Perfil
        </Link>
      </div>
    </div>
  );
}
