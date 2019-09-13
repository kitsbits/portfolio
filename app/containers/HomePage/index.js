/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import styled from 'styled-components';
import LogoBase from 'components/Logo';
import { colors } from 'theme';

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  padding: 70px 20px 0;
  background-color: ${colors.background};
`;

const Logo = styled(LogoBase)`
  display: block;
  padding-top: 38px;
  margin: 0 auto;
`;

export default function HomePage() {
  return (
    <Wrapper>
      <Logo />
    </Wrapper>
  );
}
