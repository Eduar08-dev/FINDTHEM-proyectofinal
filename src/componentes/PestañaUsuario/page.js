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

import { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { ref, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../../lib/firebase';
import Link from 'next/link';
import Image from 'next/image';

export default function PerfilUsuario() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const userId = localStorage.getItem('uid');
    async function fetchUserData() {
      if (!userId) {
        setError('ID de usuario no proporcionado');
        setLoading(false);
        return;
      }

      try {
        const userDoc = await getDoc(doc(db, 'usuarios', userId));
        if (userDoc.exists()) {
          const userData = userDoc.data();

          const profilePicture = userData.fotoURL || null;
          const nombre = userData.nombre || 'Nombre no disponible';
          const correo = userData.correo || 'Correo no disponible';
          const telefono = userData.telefono || 'No especificado';
          const direccionResidencia = userData.direccionResidencia || 'No especificada';
          const fechaNacimiento = userData.fechaNacimiento || 'No especificada';

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
          setError('Usuario no encontrado');
        }
      } catch (err) {
        setError(`Error al cargar los datos del usuario: ${err.message}`);
        console.error('Error fetching user data:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchUserData();
  }, []);

  if (loading) return <div className="flex justify-center items-center h-screen"><div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-gray-600" role="status"></div></div>;
  if (error) return <div className="flex justify-center items-center h-screen text-red-600">{error}</div>;
  if (!user) return <div className="flex justify-center items-center h-screen">No se encontró el usuario</div>;

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-16">
      <div className="bg-Azul-Fuerte text-white text-center p-4">
        <h1 className="text-2xl font-bold">Perfil de usuario</h1>
      </div>
      <div className="flex justify-center p-6">
        {user.profilePictureUrl ? (
          <Image
            src={user.profilePictureUrl}
            alt="Foto de perfil"
            width={500}
            height={500}
            className="rounded-full"
          />
        ) : (
          <div className="w-48 h-48 bg-gray-300 rounded-full"></div>
        )}
      </div>
      <div className="text-center mb-4">
        <h2 className="text-3xl font-bold">{user.nombre}</h2>
        <p className="text-gray-600">{user.correo}</p>
      </div>
      <div className="flex flex-wrap justify-center gap-4 mb-4">
        <div className="bg-gray-100 p-4 rounded-lg w-1/2">
          <h3 className="text-lg font-bold">Información de contacto</h3>
          <p><strong>Teléfono:</strong> {user.telefono}</p>
          <p><strong>Dirección:</strong> {user.direccionResidencia}</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg w-1/2">
          <h3 className="text-lg font-bold">Información personal</h3>
          <p><strong>Fecha de nacimiento:</strong> {user.fechaNacimiento}</p>
        </div>
      </div>
      <div className="flex justify-center mb-4">
        <Link href={`/perfil/edit`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Editar Perfil
        </Link>
      </div>
    </div>
  );
}