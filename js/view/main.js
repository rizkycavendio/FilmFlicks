import films from '../data/films.js';

const renderFilm = () => {
    var filmListDiv = document.getElementById("film-list");

    films.forEach((film) => {
        var filmItemDiv = document.createElement("div");
        filmItemDiv.className = "film-item";

        filmItemDiv.innerHTML = `
            <div class="film-info">
                <span class="film-year">${film.tahun}</span>
                <span class="film-duration">${film.durasi}</span>
            </div>
            <img src="${film.gambar}" alt="${film.judul}">
            <h2 class="film-title">${film.judul}</h2>
            <p class="film-genre">${film.genre.join(", ")}</p>
            <p class="film-description">${film.deskripsi || 'Belum ada deskripsi'}</p>
        `;

        filmListDiv.appendChild(filmItemDiv);
    });
}

export default renderFilm;