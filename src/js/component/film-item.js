export default class FilmItem extends HTMLElement {
  constructor(film) {
    super();
    this.film = film;
 }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="film-item">
        <div class="film-info">
          <span class="film-year">${this.film.y}</span>
          <span class="film-rank">Rank: ${this.film.rank}</span>
        </div>
        <img src="${this.film.i.imageUrl}" alt="${this.film.l}">
        <h2 class="film-title">${this.film.l}</h2>
        <p class="film-genre">Genre: ${this.film.q}</p>
        <p class="film-description">Actors: ${this.film.s}</p>
      </div>
    `;
  }
}

customElements.define('film-item', FilmItem);

