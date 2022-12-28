import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { fetchByQuery } from "../../API";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Form,
  Input,
  Button,
} from './Movies.styled';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams('');
  const location = useLocation();

  const searchQuery = searchParams.get('query');

  useEffect(() => {
    searchQuery && fetchByQuery(searchQuery).then(setMovies);
  }, [searchQuery]);

  const handleSubmit = async e => {
    e.preventDefault();
    if (query === "") return;
    const response = await fetchByQuery(query);
    setMovies(response);
    setSearchParams({ query });
    setQuery('');
  };
  const onChange = e => {
    setQuery(e.target.value);
  };

  return (
    <>
        <Form onSubmit={handleSubmit}>
          <Input type="text" value={query} onChange={onChange} />
          <Button type="submit">Find</Button>
        </Form>
      {movies.length > 0 && (
        <ul>
          {movies.map(({ id, title }) => (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>             
                  <h3>{title}</h3>  
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Movies;

Movies.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
};