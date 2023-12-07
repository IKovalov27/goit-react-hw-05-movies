import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  padding-left: 15px;
  padding-right: 15px;

  display: flex;
  align-items: center;
`;
;

export const Nav = styled.nav`
  /*display: flex;
  align-items: center;
  /*height: 50px;*/
  /*padding-left: 90px;*/
  padding-top: 12px;
  padding-bottom: 12px;
  background-color: #212529;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);*/


    display: block;
    /* align-items: center; */
    /* justify-content: space-between; */
    /*height: 50px;*/
    /* padding-left: 90px; */
    padding-top: 12px;
    padding-bottom: 12px;
    background-color: #212529;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;
;

export const LinkWrapper = styled.ul`
  /*display: flex;*/
  margin: 0 0 0 auto;
  padding: 0;
  list-style: none;
`;
;

export const WrapperItem = styled.li`

`;
;

export const SNavLink = styled(NavLink)`
  font-weight: 600;
  /*font-size: 23px;*/
  /*font-size: 16px;*/
  color: rgba(255, 255, 255, 0.55);
  /*margin-right: 15px;*/
  text-decoration: none;
  transition: all 250ms;

  &.active {
    color: white;
  }

  &:hover {
    color: rgba(255, 255, 255, 0.705);
  }
`;

export const LogoWrapper = styled.div`
  display: inline-flex;
  align-items: center;

  font-size: 25px;
  color: white;

  /*margin-right: 30px;*/
  cursor: pointer;
`;
;