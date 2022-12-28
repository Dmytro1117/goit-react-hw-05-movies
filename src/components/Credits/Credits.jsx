import { fetchMovieCredits } from "../../API";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  Img,
  CastName,
  CastChar,
} from './Credits.styled';

const Credits = () => {
  const { movieId } = useParams('movieId');
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    fetchMovieCredits(movieId).then(setCredits);
  }, [movieId]);

  return (
    <div>
      {credits.length > 0 ? (
        <ul>
          {credits.map(({ id, name, character, photo }) => {
            return (
              <li key={id}>
                <Img src={photo} alt={name} />
                <div>
                  <CastName>{name}</CastName>
                  <CastChar>Character: {character}</CastChar>
                </div>
              </li>
            );
          })}
        </ul>
      ): (
        <p>Sorry, do not have any credits</p>
      )}
    </div>
  );
};

export default Credits;

Credits.propTypes = {
    credits: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      photo: PropTypes.string,
      character: PropTypes.string,
    }),
  )
};