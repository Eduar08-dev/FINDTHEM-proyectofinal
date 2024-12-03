"use client";

import { useState } from "react";

export default function Post() {
  // Estado para almacenar la publicación seleccionada
  const [selectedPost, setSelectedPost] = useState(null);

  // Datos de ejemplo para las publicaciones
  const posts = [
    {
      id: 1,
      name: "Juan Pérez",
      age: 25,
      height: "1.75m",
      gender: "Masculino",
      skinColor: "Claro",
      phone: "+1 234 567 890",
      neighborhood: "Centro",
      address: "Calle Ficticia, 123",
      date: "02/12/2024",
      time: "14:30",
      images: ["/image1.jpg", "/image2.jpg", "/image3.jpg", "/image4.jpg"],
    },
    {
      id: 2,
      name: "Ana Gómez",
      age: 30,
      height: "1.68m",
      gender: "Femenino",
      skinColor: "Morena",
      phone: "+1 234 567 891",
      neighborhood: "Norte",
      address: "Calle Ejemplo, 456",
      date: "03/12/2024",
      time: "16:00",
      images: ["/image5.jpg", "/image6.jpg", "/image7.jpg", "/image8.jpg"],
    },
    // Agregar más publicaciones si es necesario
  ];

  return (
    <div className="flex h-screen">
      {/* Barra Lateral */}
      <div className="w-1/4 overflow-y-auto bg-gray-100 p-4">
        <h2 className="mb-4 text-lg font-bold">Publicaciones</h2>
        <ul>
          {posts.map((post) => (
            <li
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className="mb-2 cursor-pointer rounded-md p-2 hover:bg-gray-200"
            >
              {post.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Vista Principal de la Publicación */}
      <div className="w-3/4 p-6">
        {selectedPost ? (
          <>
            <h1 className="mb-4 text-2xl font-semibold">{selectedPost.name}</h1>
            <div className="mb-4">
              <p>
                <strong>Edad:</strong> {selectedPost.age}
              </p>
              <p>
                <strong>Estatura:</strong> {selectedPost.height}
              </p>
              <p>
                <strong>Sexo:</strong> {selectedPost.gender}
              </p>
              <p>
                <strong>Color de piel:</strong> {selectedPost.skinColor}
              </p>
              <p>
                <strong>Teléfono:</strong> {selectedPost.phone}
              </p>
              <p>
                <strong>Barrio:</strong> {selectedPost.neighborhood}
              </p>
              <p>
                <strong>Dirección:</strong> {selectedPost.address}
              </p>
              <p>
                <strong>Fecha:</strong> {selectedPost.date}
              </p>
              <p>
                <strong>Hora:</strong> {selectedPost.time}
              </p>
            </div>

            {/* Galería de imágenes */}
            <div className="grid grid-cols-4 gap-4">
              {selectedPost.images.map((image, index) => (
                <div key={index} className="cursor-pointer">
                  <img
                    src={image}
                    alt={`Imagen ${index + 1}`}
                    className="h-24 w-full rounded-md object-cover"
                  />
                </div>
              ))}
            </div>
          </>
        ) : (
          <p className="text-gray-500">
            Selecciona una publicación para ver los detalles.
          </p>
        )}
      </div>
    </div>
  );
}
