
import React, { useState } from 'react';

const PublicacionForm = ({ onSubirPublicacion }) => {
    const [url, setUrl] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Crear un objeto para la nueva publicación
        const nuevaPublicacion = {
            url,
            title,
            description,
        };

        // Llamar a la función para subir la publicación
        onSubirPublicacion(nuevaPublicacion);

        // Limpiar los campos
        setUrl('');
        setTitle('');
        setDescription('');
    };

    return (
        <div className='flex justify-center align-center flex-col'>
            <form onSubmit={handleSubmit} className="container flex flex-col justify-center space-yw-4 size-2/4">
            <input
                type="text"
                placeholder="Nombres y apellidos"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="border rounded p-2"
                required
            />
            <textarea
                placeholder="Descripción"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="border rounded p-2"
                required
            />
          </form>
          <div className="flex justify-center">
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                Subir Publicación
            </button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
                Sube la foto aquí
            </button>
          </div>
        </div>
    );
};

export default PublicacionForm;