import { useState } from 'react';

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
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <input
                type="text"
                placeholder="URL de la imagen"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="border rounded p-2"
                required
            />
            <input
                type="text"
                placeholder="Título"
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
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                Subir Publicación
            </button>
        </form>
    );
};

export default PublicacionForm;