import axios from 'axios';
import {
  KEY,
  BASE_URL,
  POPULAR_FILM_FETCH,
  SEARCH__MOVIE,
  SEARCH_BY_ID,
} from './constants';

axios.defaults.baseURL = BASE_URL;

export const fetchPopularFilms = async () => {
  const response = await axios.get(
    `${POPULAR_FILM_FETCH}?api_key=${KEY}&page=1&language=en&query=''`
  );
  console.log(response.data.results);
  return await response.data.results;
};

export const fetchFilmById = async id => {
  const response = await axios.get(
    `${SEARCH_BY_ID}${id}?api_key=${KEY}&page=1&language=en&query=''`
  );
  console.log(response.data);
  return await response.data;
};
