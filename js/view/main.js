import films from '../data/films.js';
import FilmItem from '../component/film-item.js';

const renderFilm = () => {
  const filmListDiv = document.querySelector('film-list');

  films.forEach((film) => {
    const filmItem = new FilmItem(film);
    filmListDiv.appendChild(filmItem);
  });
}

export default renderFilm;

