import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Button = styled.button`
  display: block;
  background-color: transparent;
  padding: 5px 15px;
  font-weight: 700;
  cursor: pointer;

  margin: 20px auto 15px auto;

  border: 1px solid #212529;
  border-radius: 5px;

  transition: 250ms;
  
  &:hover {
    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
  }

  @media (min-width: 768px) {
    margin: 20px auto 15px 0;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 300px;

  margin-right: auto;
  margin-left: auto;

  text-align: center;

  @media (min-width: 425px) {
    max-width: 738px;
  }

  @media (min-width: 768px) {
    max-width: 738px;
    text-align: start;
  }

  @media (min-width: 877px) {
    max-width: 1300px;
    padding-left: 15px;
    padding-right: 15px;
  }
`;

export const InfoWrapper = styled.div`
  display: block;

  max-width: 425px;
  margin-left: auto;
  margin-right: auto;

  margin-bottom: 30px;

  @media (min-width: 768px) {
    display: flex;
    gap: 40px;

    max-width: 738px;
  }

  @media (min-width: 877px) {
    max-width: 1300px;
  }
`;

export const Img = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 300px;

  @media (min-width: 768px) {
    width: 350px;
  }
`;

export const AditionalList = styled.ul`
  display: flex;

  list-style: none;
  gap: 15px;
  padding: 0;
  margin-bottom: 30px;

  justify-content: center;

  @media (min-width: 768px) {
    justify-content: start;
  }
`;

export const InfoLink = styled(NavLink)`
  background-color: transparent;
  padding: 5px 15px;
  font-size: 15px;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;

  color: #212529;

  border: 1px solid #212529;
  border-radius: 5px;

  transition: 250ms;
  
  &:hover {
    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
  }

  &.active {
    background-color: #212529;
    color: white;

    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
  }
`;





