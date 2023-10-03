import FilmItem from '../component/film-item.js';
import $ from 'jquery';

export async function fetchData() {
  const url = 'https://imdb8.p.rapidapi.com/auto-complete?q=avengers';
  const headers = {
    'X-RapidAPI-Key': 'c933377053msh36dec8daddb676fp134e77jsn52834871f775',
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
    console.error('Error fetching data:', error);
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
