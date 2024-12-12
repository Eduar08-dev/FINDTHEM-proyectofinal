import { db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import NoticiaDetalles from "../../../componentes/NoticiaDetalles/page";

// Función para obtener datos de Firestore
async function getPublicaciones(id) {
  if (!id) {
    throw new Error("ID no proporcionado.");
  }

  const docRef = doc(db, "personas_desaparecidas", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() };
  } else {
    throw new Error("Publicación no encontrada.");
  }
}

// Página de detalle de la publicación
export default async function PublicacionDetalle({ params }) {
  try {
    // Verificar si params e id están disponibles
    if (!params || !params.id) {
      throw new Error("Parámetros inválidos.");
    }

    // Obtener los datos de la publicación
    const publicacion = await getPublicaciones(params.id);

    // Renderizar el componente con los datos
    return <NoticiaDetalles publicacion={publicacion} />;
  } catch (error) {
    // Mostrar un mensaje de error en la página
    return <div>Error: {error.message}</div>;
  }
}
