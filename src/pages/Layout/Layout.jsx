import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from '../../components/Loader/Loader';
import { ImFilm } from "react-icons/im";

import css from './Layout.module.css';
import { Container, Nav, SNavLink, LogoWrapper } from './Layout.styled.js';

const Layout = () => {
  return (
    <>
      <Nav>
        <Container className={css.container}>
          <LogoWrapper>
            <ImFilm className={css.icon} />
            MovieFinder
          </LogoWrapper>
          <SNavLink to="/">
            Home
          </SNavLink>
          <SNavLink to="/movies">
            Movies
          </SNavLink>
        </Container>
      </Nav>

        <div className={css.container}>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </div >

    </>
  );
};

export default Layout;