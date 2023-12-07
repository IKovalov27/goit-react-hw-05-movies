import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from '../../components/Loader/Loader';
import { ImFilm } from "react-icons/im";

import css from './Layout.module.css';
import { Container, Nav, SNavLink, LogoWrapper, LinkWrapper, WrapperItem } from './Layout.styled.js';

const Layout = () => {
  return (
    <>
      <Nav>
        <Container className={css.container}>
          <LogoWrapper>
            <ImFilm className={css.icon} />
            MovieFinder
          </LogoWrapper>
          <LinkWrapper>
            <WrapperItem>
              <SNavLink to="/">
                Home
              </SNavLink>
            </WrapperItem>
            <WrapperItem>
              <SNavLink to="/movies" className={css.link}>
                Movies
              </SNavLink>
            </WrapperItem>
          </LinkWrapper>
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