import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieLink = styled(Link)`
  text-decoration: none;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 1140px;
  margin-left: auto;
  margin-right: auto;
`;

export const Title = styled.h1`
  font-weight: 700;
  color: #212529;
  margin: 30px 0 15px 0;

  @media (min-width: 877px) {
    margin: 50px 0 25px 0;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  margin: 0 auto 0 auto;
  padding: 0;
`;

export const Item = styled.li`
  display: inline-block;

  max-width: 280px;
  margin: 12px;

  border: 1px solid rgba(0, 0, 0, 0.23);
  border-radius: 5px;

  transition: 250ms;

  &:hover {
    cursor: pointer;
    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
  }
`;

export const Img = styled.img`
  display: block;

  height: 400px;
  width: auto;
  max-width: 266px;

  padding: 0px;
  margin: 0px;

  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  padding: 5px;
  margin: 0px;
  max-width: 256px;

  font-size: 20px;
  color: #212529;
`;




