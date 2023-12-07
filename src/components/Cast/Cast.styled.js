import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1300px;

  margin-left: auto;
  margin-right: auto;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;

  margin: 0;
  padding: 0;
`;

export const Item = styled.li`
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
  0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);

  max-width: 200px;
  margin: 12px;
  border-radius: 5px;
`;

export const Img = styled.img`
  display: flex;
  align-items: center;
  width: 100%;

  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

export const Description = styled.div`
  padding: 8px;

  color: #212529;
`;

export const ActorName = styled.h3`
  font-size: 15px;
  margin: 0px;
`;

export const Character = styled.p`
  font-size: 13px;
  margin: 5px 0 0 0;
`;