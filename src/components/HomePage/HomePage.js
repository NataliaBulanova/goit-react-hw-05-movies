import { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import { fetchPopularFilms } from 'fetchFilms';

const HomePage = () => {
  const [trendyFilms, setTrendyFilms] = useState([]);

  useEffect(() => {
    fetchPopularFilms().then(setTrendyFilms);
  }, []);

  return (
    <ul>
      {trendyFilms.map(({ title, id }) => (
        <li key={id}>
          <Link to={`films/${id}`}>{title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default HomePage;
