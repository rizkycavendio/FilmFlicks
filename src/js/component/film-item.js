export default class FilmItem extends HTMLElement {
  constructor(film) {
      super();
      this.film = film;
  }

  connectedCallback() {
      const filmItemDiv = document.createElement('div');
      filmItemDiv.classList.add('film-item');

      const infoDiv = document.createElement('div');
      infoDiv.classList.add('film-info');
      
      const yearSpan = document.createElement('span');
      yearSpan.classList.add('film-year');
      yearSpan.textContent = this.film.y;
      infoDiv.appendChild(yearSpan);
      
      const rank = document.createElement('span');
      rank.classList.add('film-rank');
      rank.textContent = `Rank: ${this.film.rank}`;
      infoDiv.appendChild(rank);

      const img = document.createElement('img');
      img.src = this.film.i.imageUrl;
      img.alt = this.film.l;

      const title = document.createElement('h2');
      title.classList.add('film-title');
      title.textContent = this.film.l;

      const genreP = document.createElement('p');
      genreP.classList.add('film-genre');
      genreP.textContent = `Genre: ${this.film.q}`;

      const descriptionP = document.createElement('p');
      descriptionP.classList.add('film-description');
      descriptionP.textContent = `Actors: ${this.film.s}`;

      filmItemDiv.appendChild(infoDiv);
      filmItemDiv.appendChild(img);
      filmItemDiv.appendChild(title);
      filmItemDiv.appendChild(genreP);
      filmItemDiv.appendChild(descriptionP);

      this.appendChild(filmItemDiv);
  }
}

customElements.define('film-item', FilmItem);
