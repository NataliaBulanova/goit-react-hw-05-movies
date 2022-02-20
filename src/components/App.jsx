import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import MoviesPage from './MoviesPage/MoviesPage';
import MovieDelailsPage from './MovieDetailsPage/MovieDetailsPage';
import Container from './Container/Container';
import Navigation from './Navigation/Navigation';


export const App = () => {
  return (
    <Container>
      <Navigation />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/films' element={<MoviesPage />} />
        <Route path="films/:itemId" element={<MovieDelailsPage />} />
      </Routes>

    </Container>


    // <Routes>
    //   <Route path="/" exact><HomePage /></Route>
    /* <Route path='/movies'><MoviesPage /></Route>
    <Route path='/films/:filmsId'><MovieDelailsPage /></Route> */
    // </Routes >
  );
};
