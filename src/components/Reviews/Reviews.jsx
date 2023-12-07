import { fetchMovieReviews } from '../../api';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { Container, Title, List, Item, Author, Text } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams('movieId');
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchMovieReviews(movieId).then(setReviews);
  }, [movieId]);

  return (
    <Container>
      <Title>Reviews</Title>
      {reviews.length > 0 ? (
        <List>
          {reviews.map(({ id, author, content }) => (
            <Item key={id}>
              <Author>{author}</Author>
              <Text>{content}</Text>
            </Item>
          ))}
        </List>
      ) : (
        <p>We don`t have any reviews for this movie</p>
      )}
    </Container>
  );
};

export default Reviews;