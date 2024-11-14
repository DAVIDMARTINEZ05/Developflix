import peliculas from './peliculas.js'

const accion = document.getElementById("Acción");
const thriller = document.getElementById("Thriller");
const aventura = document.getElementById("aventura");


const moviesContainerAccion = document.getElementById("movies-container-accion");
const moviesContainerThriller = document.getElementById("movies-container-triller");
const moviesContainerAventura = document.getElementById("movies-container-aventura");


function mostrarPeliculas(peliculasFiltradas, container) {
    container.innerHTML = '';


    if (peliculasFiltradas.length === 0) {
        container.innerHTML = '<p>No hay películas disponibles en este género.</p>';
        return;
    }


    peliculasFiltradas.forEach((pelicula) => {
        const movieElement = document.createElement("div");
        movieElement.classList.add("movie");
        movieElement.innerHTML = `
          <img src="https://image.tmdb.org/t/p/w500${pelicula.poster_path}" alt="${pelicula.title}">
          <h3>${pelicula.title}</h3>
          <p>Rating: ${pelicula.vote_average}</p>
        `;
        container.appendChild(movieElement);
    });
}


accion.addEventListener("click", function() {
    console.log("Contenedor de películas de acción cliqueado");
    const peliculasAccion = peliculas.filter(pelicula => pelicula.genre_ids.includes(28));
    mostrarPeliculas(peliculasAccion, moviesContainerAccion);
});


thriller.addEventListener("click", function() {
    console.log("Contenedor de películas de thriller cliqueado");
    const peliculasThriller = peliculas.filter(pelicula => pelicula.genre_ids.includes(53));
    mostrarPeliculas(peliculasThriller, moviesContainerThriller);
});


aventura.addEventListener("click", function() {
    console.log("Contenedor de películas de aventura cliqueado");
    const peliculasAventura = peliculas.filter(pelicula => pelicula.genre_ids.includes(12));
    mostrarPeliculas(peliculasAventura, moviesContainerAventura);
});