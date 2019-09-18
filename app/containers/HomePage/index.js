/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import styled from 'styled-components';

import Nav from 'components/Nav';
import LogoBase from 'components/Logo';

const bg = require('../../images/background.jpg');

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background: url(${bg}) no-repeat center;
  background-size: cover;
  position: fixed;
`;

const Constrain = styled.div`
  /* max-width: 1440px; */
  margin: 0 auto;
  padding: 70px 20px 0;
  position: relative;
`;

const Logo = styled(LogoBase)`
  display: block;
  padding-top: 38px;
  margin: 0 auto;
`;

export default function HomePage() {
  return (
    <Wrapper>
      <Constrain>
        <Nav />
        <Logo />
      </Constrain>
    </Wrapper>
  );
}
