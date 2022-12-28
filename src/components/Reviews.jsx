import { fetchMovieReviews } from "../API";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Reviews = () => {
  const { movieId } = useParams('movieId');
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchMovieReviews(movieId).then(setReviews);
  }, [movieId]);

  return (
    <div>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <h3>{author}</h3>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Sorry, do not have any reviews</p>
      )}
    </div>
  );
};

export default Reviews;

Reviews.propTypes = {
    reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      author: PropTypes.string,
      content: PropTypes.string,
    }),
  )
};