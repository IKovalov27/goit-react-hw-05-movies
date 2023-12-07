import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchTrending } from '../../api';
import { Container, Title, List, Item, Img, TitleWrapper, MovieLink } from './Home.styled.js';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchTrending().then(setMovies);
  }, []);

  return (
    <Container>
      <Title>Trends of the week</Title>
      {movies && movies.length > 0 && (
        <List>
          {movies.map(({ id, title, poster }) => (
            <Item key={id}>
              <MovieLink to={`/movies/${id}`} state={{ from: location }}>
                <Img src={poster} alt={title} />
                <TitleWrapper>
                  <h5>{title}</h5>
                </TitleWrapper>
              </MovieLink>
            </Item>
          ))}
        </List>
      )}
    </Container>
  );
};

export default Home;
