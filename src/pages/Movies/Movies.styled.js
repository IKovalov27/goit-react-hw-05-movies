import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 1140px;
  margin-left: auto;
  margin-right: auto;
`;

export const Form = styled.form`
  display: flex;

  margin-top: 25px;
  margin-bottom: 20px;
`;

export const Input  = styled.input`
  height: 20px;
  padding: 5px;

  font-size: 15px;

  width: 250px;
  border: none;
  outline: none;

  padding-left: 8px;
  padding-right: 4px;
  margin-right: 10px;

  border-radius: 5px;
  border: 1px solid #212529;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);

  &::placeholder {
    font-size: 15px;
  }
`;

export const Button = styled.button`
  display: block;

  background-color: white;
  border-radius: 5px;
  border: 1px solid #212529;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);

  transition: 250ms;

  cursor: pointer;
  outline: none;
  font-weight: 600;

  &:hover {
    background-color: #212529;
    color: white;
    border: 1px solid transparent;
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

width: 100%;
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

export const MovieLink = styled(Link)`
  text-decoration: none;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  padding: 5px;
  margin: 0px;

  font-size: 20px;
  color: #212529;
`;

export const Img = styled.img`
display: block;

height: 400px;
width: 100%;

padding: 0px;
margin: 0px;

border-top-left-radius: 5px;
border-top-right-radius: 5px;
`;






