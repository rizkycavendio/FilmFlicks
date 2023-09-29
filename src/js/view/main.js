import FilmItem from '../component/film-item.js';
import $ from 'jquery';

export async function fetchData() {
  const url = 'https://imdb8.p.rapidapi.com/auto-complete?q=avangers';
  const headers = {
    'X-RapidAPI-Key': '185d22d143msh70d6d6045d47c92p10730fjsna5332e8d0b15',
    'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
  };

  try {
    const data = await $.ajax({
      url: url,
      headers: headers,
      method: 'GET',
      dataType: 'json'
    });

    const films = data.d;
    films.sort(() => Math.random() - 0.5);
    const filmsToShow = films.slice(0, 15);

    const filmList = document.querySelector('film-list');

    filmsToShow.forEach((film) => {
      const filmItem = new FilmItem(film);
      filmList.appendChild(filmItem);
    });
  } catch (error) {
    console.error('An error occurred:', error);
  }
}


