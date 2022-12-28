import { useState, useEffect } from 'react';
import { useParams, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { fetchMovieDetails } from "../../API";
import PropTypes from 'prop-types';
import {
  Btn,
  MovieContainer,
  Img,
  MovieInfo,
  InfoList,
  InfoLink,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const backLinkHref = location.state?.from ?? '/movies';

  const { poster, title, releaseYear, userScore, overview, genres } =
    movie ?? {};

  useEffect(() => {
    fetchMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  const backToMovies = () => {
    navigate(backLinkHref);
  };

  return (
    <div>
      <Btn type="button" onClick={backToMovies}>
        Back
      </Btn>
      {movie && (
        <div>
          <MovieContainer>
            <Img src={poster} alt={title} />
            <MovieInfo>
              <h2>
                {title} ({releaseYear})
              </h2>
              <p>User Score: {userScore}%</p>
              <h3>Overview</h3>
              <p>{overview}</p>
              <h3>Genres</h3>
              <p>{genres.map(({ name }) => name).join(' ')}</p>
            </MovieInfo>
          </MovieContainer>

          <h3>More information</h3>

          <InfoList>
            <li>
              <InfoLink to={'cast'} state={{ from: location?.state?.from }}>
                Credits
              </InfoLink>
            </li>
            <li>
              <InfoLink to={'reviews'} state={{ from: location?.state?.from }}>
                Reviews
              </InfoLink>
            </li>
          </InfoList>
          <Outlet />
        </div>
      )}
    </div>
  );
};

export default MovieDetails;


MovieDetails.propTypes = {
  title: PropTypes.string,
  releaseYear: PropTypes.string,
  poster: PropTypes.string,
  userScore: PropTypes.string,
  genres: PropTypes.string,
  overview: PropTypes.string,
};

