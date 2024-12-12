import { db } from "@/lib/firebase";
import { doc, getDoc } from 'firebase/firestore';
import Image from 'next/image';
import Link from 'next/link';

async function getPublicacion(id) {
  const docRef = doc(db, 'personas_desaparecidas', id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() };
  } else {
    throw new Error('Publicación no encontrada');
  }
}

export default async function PublicacionDetalle({ params }) {
  try {
    const publicacion = await getPublicacion(params.id);

    return (
      <div className="container mx-auto px-4 py-8">
        <Link href="/" className="text-blue-500 hover:underline mb-4 inline-block">
          &larr; Volver a la lista
        </Link>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="relative h-96">
            <Image
              src={publicacion.imageUrls[0]}
              alt={publicacion.nombre}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">{publicacion.nombre}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <p><strong>Edad:</strong> {publicacion.edad}</p>
              <p><strong>Barrio:</strong> {publicacion.barrio}</p>
              <p><strong>Última ubicación:</strong> {publicacion.ultimaUbicacion}</p>
              <p><strong>Día del suceso:</strong> {publicacion.diaSuceso}</p>
              <p><strong>Última vez vista:</strong> {publicacion.ultimaVezVista}</p>
              <p><strong>Condición:</strong> {publicacion.condicion}</p>
            </div>
            <p className="mt-6 text-gray-700">{publicacion.descripcionHechos}</p>
          </div>
          <div className="p-6 bg-gray-100">
            <h2 className="text-2xl font-semibold mb-4">Galería de imágenes</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {publicacion.imageUrls.map((url, index) => (
                <div key={index} className="relative h-48">
                  <Image
                    src={url}
                    alt={`Imagen ${index + 1} de ${publicacion.nombre}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    return <div>Error: {error.message}</div>;
  }
}