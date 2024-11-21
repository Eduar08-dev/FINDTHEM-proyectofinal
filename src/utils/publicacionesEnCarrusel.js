// /c:/Users/eduar/Desktop/proyecto-final/my-app/src/utils/publicacionesEnCarrusel.js

let publicaciones = [];

function agregarPublicacion(imagen, nombre, descripcion) {
    const nuevaPublicacion = { imagen, nombre, descripcion };

    if (publicaciones.length >= 3) {
        publicaciones.shift(); // Elimina la primera publicación
    }

    publicaciones.push(nuevaPublicacion);
    actualizarCarrusel();
}

function actualizarCarrusel() {
    const carrusel = document.getElementById('carruselPublicaciones');
    carrusel.innerHTML = '';

    publicaciones.forEach(publicacion => {
        const publicacionElemento = document.createElement('div');
        publicacionElemento.className = 'publicacion';

        const img = document.createElement('img');
        img.src = publicacion.imagen;
        img.alt = publicacion.nombre;

        const nombreElemento = document.createElement('h3');
        nombreElemento.textContent = publicacion.nombre;

        const descripcionElemento = document.createElement('p');
        descripcionElemento.textContent = publicacion.descripcion;

        publicacionElemento.appendChild(img);
        publicacionElemento.appendChild(nombreElemento);
        publicacionElemento.appendChild(descripcionElemento);

        carrusel.appendChild(publicacionElemento);
    });
}

export { agregarPublicacion };