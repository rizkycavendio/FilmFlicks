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

    renderFilms(data.d);

    $('.btn-search').on('click', async () => {
      const query = $('#searchBar').val();

      if (query) {
        const searchData = await $.ajax({
          url: `https://imdb8.p.rapidapi.com/auto-complete?q=${query}`,
          headers: headers,
          method: 'GET',
          dataType: 'json'
        });

        renderFilms(searchData.d);
      }
    });
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

const renderFilms = (films) => {
  const filmList = document.querySelector('film-list');
  filmList.innerHTML = '';

  films.sort(() => Math.random() - 0.5);
  const filmsToShow = films.slice(0, 15);

  filmsToShow.forEach((film) => {
    const filmItem = new FilmItem(film);
    filmList.appendChild(filmItem);
  });
}
