import films from '../data/films.js';

const renderFilm = () => {
    var filmListDiv = document.getElementById("film-list");

    films.forEach(function(film) {
    var filmItemDiv = document.createElement("div");
    filmItemDiv.className = "film-item";

    filmItemDiv.innerHTML = `
    <img src="${film.gambar}" alt="${film.judul}">
    <h2 class="film-title">${film.judul}</h2>
    <p class="film-genre">${film.genre.join(", ")}</p>
    `;

    filmListDiv.appendChild(filmItemDiv);
    });
}

export default renderFilm;