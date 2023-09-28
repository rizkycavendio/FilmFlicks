export default class FilmItem extends HTMLElement {
    constructor(film) {
      super();
      this.film = film;
    }
  
    connectedCallback() {
      this.innerHTML = `
        <div class="film-item">
          <div class="film-info">
            <span class="film-year">${this.film.tahun}</span>
            <span class="film-duration">${this.film.durasi}</span>
          </div>
          <img src="${this.film.gambar}" alt="${this.film.judul}">
          <h2 class="film-title">${this.film.judul}</h2>
          <p class="film-genre">${this.film.genre.join(", ")}</p>
          <p class="film-description">${this.film.deskripsi || 'Belum ada deskripsi'}</p>
        </div>
      `;
    }
  }
  
  customElements.define('film-item', FilmItem);
  