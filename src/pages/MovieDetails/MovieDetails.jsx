import { useState, useEffect } from 'react';

import { useParams, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { fetchMovieDetails } from '../../api';

import { Container, Button, InfoWrapper, Img, AditionalList, InfoLink } from './MovieDetails.styled.js';

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
    <Container>
      <Button onClick={backToMovies}>
        Back to movies
      </Button>
      {movie && (
        <div>
          <InfoWrapper>
            <Img src={poster} alt={title} />
            <div>
              <h2>
                {title} ({releaseYear})
              </h2>
              <p>User Score: {userScore}%</p>
              <h3>Overview</h3>
              <p>{overview}</p>
              <h3>Genres</h3>
              <p>{genres.map(({ name }) => name).join(', ')}</p>
            </div>
          </InfoWrapper>

          <h2>Additional information</h2>

          <AditionalList>
            <li>
              <InfoLink to={`cast`} state={{ from: location?.state?.from }}>
                Cast
              </InfoLink>
            </li>
            <li>
              <InfoLink to={`reviews`} state={{ from: location?.state?.from }}>
                Reviews
              </InfoLink>
            </li>
          </AditionalList>
            <Outlet />
        </div>
      )}
    </Container>
  );
};

export default MovieDetails;