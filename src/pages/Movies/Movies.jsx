import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { fetchByQuery } from '../../api';

import { Container, Input, Button, Form, List, Item, Img, TitleWrapper, MovieLink } from './Movies.styled.js';

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
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input type="text" value={query} placeholder="Search a movie" onChange={onChange} />
        <Button type="submit">Search</Button>
      </Form>
      {movies.length > 0 && (
        <List>
          {movies.map(({ id, title, poster }) => (
            <Item key={id}>
              <MovieLink to={`/movies/${id}`} state={{ from: location }}>
                <Img src={poster} alt={title}/>
                <TitleWrapper>
                  <h5>{title}</h5>
                </TitleWrapper>
              </MovieLink>
            </Item>
          ))}
        </List>
      )}
    </Container>
    </>
  );
};

export default Movies;

