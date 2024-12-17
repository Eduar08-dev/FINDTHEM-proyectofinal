// 'use client';

// import { useState, useEffect } from 'react';
// import { doc, getDoc } from 'firebase/firestore';
// import { ref, getDownloadURL } from 'firebase/storage';
// import { db, storage } from '../../lib/firebase';
// import Link from 'next/link';
// import Image from 'next/image';

// export default function PestañaUsuario({ userId }) {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     if (!userId) {
//       setError('ID de usuario no proporcionado');
//       setLoading(false);
//       return;
//     }

//     async function fetchUserData() {
//       try {
//         const userDoc = await getDoc(doc(db, 'usuarios', userId));
//         if (userDoc.exists()) {
//           const userData = {
//             ...userDoc.data(),
//             profilePictureUrl: null, // Inicialización para la imagen
//           };

//           if (userData.fotoURL) {
//             try {
//               const imageUrl = await getDownloadURL(ref(storage, userData.fotoURL));
//               userData.profilePictureUrl = imageUrl;
//             } catch (err) {
//               console.error('Error al cargar la imagen de perfil:', err);
//               userData.profilePictureUrl = '/ruta-a-imagen-por-defecto.png';
//             }
//           }

//           setUser(userData);
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
//   }, [userId]);

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
//         <Link href={`/perfil/${userId}`} className="block w-full text-center bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
//           Editar Perfil
//         </Link>
//       </div>
//     </div>
//   );
// }


// 'use client';

// import { useState, useEffect } from 'react';
// import { doc, getDoc } from 'firebase/firestore';
// import { ref, getDownloadURL } from 'firebase/storage';
// import { db, storage } from '../../lib/firebase';
// import Image from 'next/image';

// export default function PestañaUsuario({ userId }) {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     async function fetchUserData() {
//       if (!userId) {
//         console.log('userId recibido:', userId); // Para debugging
//         setError('ID del usuario no proporcionado');
//         setLoading(false);
//         return;
//       }

//       try {
//         // Cambiado de 'users' a 'usuarios' para coincidir con tu estructura de Firestore
//         const userDoc = await getDoc(doc(db, 'usuarios', userId));
        
//         if (userDoc.exists()) {
//           const userData = userDoc.data();
//           // Usar fotoURL directamente ya que ya es una URL completa
//           setUser({
//             ...userData,
//             profilePictureUrl: userData.fotoURL // Usar el campo fotoURL de Firestore
//           });
//         } else {
//           setError('Usuario no encontrado');
//         }
//       } catch (err) {
//         console.error('Error completo:', err); // Para debugging
//         setError(`Error al cargar los datos del usuario: ${err.message}`);
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchUserData();
//   }, [userId]);

//   if (loading) return <div className="text-center py-4">Cargando...</div>;
//   if (error) return <div className="text-center py-4 text-red-500">Error: {error}</div>;
//   if (!user) return <div className="text-center py-4">No se encontró el usuario</div>;

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
//         <p><strong>Usuario:</strong> {user.usuario || 'No especificado'}</p>
//         <p><strong>Apellido:</strong> {user.apellido || 'No especificado'}</p>
//         <p><strong>Teléfono:</strong> {user.telefono || 'No especificado'}</p>
//         <p><strong>Sexo:</strong> {user.sexo || 'No especificado'}</p>
//       </div>
//     </div>
//   );
// }

// app/usuario/[userId]/page.js

// 'use client';

// import { useState, useEffect } from 'react';
// import { doc, getDoc } from 'firebase/firestore';
// import { ref, getDownloadURL } from 'firebase/storage';
// import { db, storage } from '../../lib/firebase'; // Ajusta la ruta según tu estructura
// import Image from 'next/image';

// export default function PestañaUsuario({ params }) {
//   const { userId } = params;  // Obtener el userId desde los params
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     async function fetchUserData() {
//       if (!userId) {
//         setError('ID del usuario no proporcionado');
//         setLoading(false);
//         return;
//       }

//       try {
//         const userDoc = await getDoc(doc(db, 'usuarios', userId));
//         if (userDoc.exists()) {
//           const userData = userDoc.data();
//           if (userData.fotoURL) {
//             const imageUrl = await getDownloadURL(ref(storage, userData.fotoURL));
//             userData.profilePictureUrl = imageUrl;
//           }
//           setUser(userData);
//         } else {
//           setError('Usuario no encontrado');
//         }
//       } catch (err) {
//         setError(`Error al cargar los datos del usuario: ${err.message}`);
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchUserData();
//   }, [userId]);

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
//         <p><strong>Teléfono:</strong> {user.telefono || 'No especificado'}</p>
//         <p><strong>Dirección:</strong> {user.direccionResidencia || 'No especificada'}</p>
//         <p><strong>Fecha de nacimiento:</strong> {user.fechaNacimiento || 'No especificada'}</p>
//       </div>
//       <div className="border-t border-gray-200 px-6 py-4">
//         <Link href={`/usuario/edit/${userId}`} className="block w-full text-center bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
//           Editar Perfil
//         </Link>
//       </div>
//     </div>
//   );
// }


// 'use client'

// import { useState, useEffect } from 'react';
// import { doc, getDoc } from 'firebase/firestore';
// import { ref, getDownloadURL } from 'firebase/storage';
// import { db, storage } from '../../lib/firebase';
// import Link from 'next/link';
// import Image from 'next/image';

// export default function PestañaUsuario({ params }) {
//   const { usuariosId } = params; // Accediendo al ID desde los parámetros
//   const [usuario, setUsuario] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     async function fetchUserData() {
//       try {
//         const userDoc = await getDoc(doc(db, 'usuarios', usuariosId));

//         if (userDoc.exists()) {
//           const userData = userDoc.data();

//           if (userData.fotoURL) {
//             const imageUrl = await getDownloadURL(ref(storage, userData.fotoURL));
//             userData.fotoURL = imageUrl; 
//           }

//           setUsuario(userData);
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
//   }, [usuariosId]);

//   if (loading) return <div>Cargando...</div>;
//   if (error) return <div>Error: {error}</div>;
//   if (!usuario) return <div>No se encontró el usuario</div>;

//   return (
//     <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-16">
//       <div className="text-center p-6">
//         {usuario.fotoURL ? (
//           <Image
//             src={usuario.fotoURL}
//             alt="Foto de perfil"
//             width={128}
//             height={128}
//             className="mx-auto rounded-full"
//           />
//         ) : (
//           <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto"></div>
//         )}
//         <h2 className="mt-4 text-xl font-semibold">{usuario.nombre}</h2>
//         <p className="text-gray-600">{usuario.correo}</p>
//       </div>
//       <div className="border-t border-gray-200 px-6 py-4">
//         <p><strong>Teléfono:</strong> {usuario.telefono || 'No especificado'}</p>
//         <p><strong>Dirección:</strong> {usuario.direccionResidencia || 'No especificada'}</p>
//         <p><strong>Fecha de nacimiento:</strong> {usuario.fechaNacimiento || 'No especificada'}</p>
//       </div>
//       <div className="border-t border-gray-200 px-6 py-4">
//         <Link href={`/profile/edit/${usuariosId}`} className="block w-full text-center bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
//           Editar Perfil
//         </Link>
//       </div>
//     </div>
//   );
// }

'use client'

import { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { ref, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../../lib/firebase';
import Link from 'next/link';
import Image from 'next/image';

export default function PestañaUsuario() {
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

          // Aseguramos que los datos existan antes de intentar acceder a ellos
          const profilePicture = userData.fotoURL || null;
          const nombre = userData.nombre || 'Nombre no disponible';
          const correo = userData.correo || 'Correo no disponible';
          const telefono = userData.telefono || 'No especificado';
          const direccionResidencia = userData.direccionResidencia || 'No especificada';
          const fechaNacimiento = userData.fechaNacimiento || 'No especificada';

          // Obtener la URL de la imagen de perfil si existe
          if (profilePicture) {
            const imageUrl = await getDownloadURL(ref(storage, profilePicture));
            userData.profilePictureUrl = imageUrl;
          }

          // Actualizar el estado con los datos del usuario
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

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!user) return <div>No se encontró el usuario</div>;

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-16">
      <div className="text-center p-6">
        {user.profilePictureUrl ? (
          <Image
            src={user.profilePictureUrl}
            alt="Foto de perfil"
            width={128}
            height={128}
            className="mx-auto rounded-full"
          />
        ) : (
          <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto"></div>
        )}
        <h2 className="mt-4 text-xl font-semibold">{user.nombre}</h2>
        <p className="text-gray-600">{user.correo}</p>
      </div>
      <div className="border-t border-gray-200 px-6 py-4">
        <p><strong>Teléfono:</strong> {user.telefono}</p>
        <p><strong>Dirección:</strong> {user.direccionResidencia}</p>
        <p><strong>Fecha de nacimiento:</strong> {user.fechaNacimiento}</p>
      </div>
      <div className="border-t border-gray-200 px-6 py-4">
        <Link href={`/perfil/edit`} className="block w-full text-center bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
          Editar Perfil
        </Link>
      </div>
    </div>
  );
}
