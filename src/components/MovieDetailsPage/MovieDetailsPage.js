import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { fetchFilmById } from '../../fetchFilms';

const MovieDetailsPage = () => {
  const { itemId } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [posterPath, setPosterPath] = useState(null);

  useEffect(() => {
    async function fetchItem() {
      try {
        const details = await fetchFilmById(itemId);
        setMovie(details);
        setPosterPath(`https://image.tmdb.org/t/p/w500${details.poster_path}`);
      } catch (error) {
        console.log('Details not found!');
      }
    }
    fetchItem();
    // fetchFilmById(itemId).then(setMovie);
  }, [itemId]);

  return (
    <main>
      <Link to="/">Back</Link>
      {movie && (
        <>
          <h2>
            {movie.title}({movie.release_date})
          </h2>
          <p>User Score: {movie.vote_average}</p>
          <img alt={movie.title} src={posterPath} width="300" />
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <ul>
            {movie.genres.map(({ name }) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
          <p>Additional information</p>
          <ul>
            <li>Cast</li>
            <li>Reviews</li>
          </ul>
        </>
      )}
    </main>
  );
};

export default MovieDetailsPage;
