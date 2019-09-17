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
  padding: 70px 20px 0;
  background: url(${bg}) no-repeat center;
  background-size: cover;
  position: fixed;
`;

const Logo = styled(LogoBase)`
  display: block;
  padding-top: 38px;
  margin: 0 auto;
`;

export default function HomePage() {
  return (
    <Wrapper>
      <Nav />
      <Logo />
    </Wrapper>
  );
}
