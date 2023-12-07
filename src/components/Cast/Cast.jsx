import { fetchMovieCredits } from '../../api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Container, List, Item, Img, Description, ActorName, Character } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams('movieId');
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    fetchMovieCredits(movieId).then(setCredits);
  }, [movieId]);

  return (
    <Container>
      {credits.length > 0 ? (
        <List>
          {credits.map(({ id, name, character, photo }) => (
            <Item key={id}>
              <Img src={photo} alt={name} />
              <Description>
                <ActorName>{name}</ActorName>
                <Character>Character: {character}</Character>
              </Description>
            </Item>
          ))}
        </List>
      ) : (
        <p>We don't have any actors for this movie.</p>
      )}
    </Container>
  );
};

export default Cast;