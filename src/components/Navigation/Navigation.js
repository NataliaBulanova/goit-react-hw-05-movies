import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <nav>
    <NavLink
      exact
      to="/"
      // className={styles.link}
      // activeClassName={styles.activeLink}
    >
      Home
    </NavLink>

    <NavLink
      to="/films"
      // className={styles.link}
      // activeClassName={styles.activeLink}
    >
      Movies
    </NavLink>
  </nav>
);

export default Navigation;
