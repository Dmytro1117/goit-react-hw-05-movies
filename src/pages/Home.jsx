import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchTrending } from "../API";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  
  useEffect(() => {
    fetchTrending().then(setMovies);
  }, []);

  return (
    <div>
      <h1>Tranding films:</h1>
      {movies.length > 0 && (
        <ul>
          {movies.map(({ id, title = "Unknow title"}) => (           
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                <div>
                  <h3>{title}</h3>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;


Home.propTypes = {
    movies: PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
    }),
  )
};