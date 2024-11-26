
const MAX_PUBLICACIONES = 4; 

const subirPublicacion = (nuevaPublicacion) => {
    setPublicacionesEnCarrusel(prev => {
        const nuevasPublicaciones = [...prev, nuevaPublicacion];
        if (nuevasPublicaciones.length > MAX_PUBLICACIONES) {
            nuevasPublicaciones.shift();
        }
        return nuevasPublicaciones;
        });
};

export default subirPublicacion;