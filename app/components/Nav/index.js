/**
 *
 * Nav
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors, fonts } from 'theme';

const Wrapper = styled.nav`
  position: absolute;
  top: 40px;
  right: 40px;
`;

const Link = styled.a`
  ${fonts.default.bold};
  display: block;
  font-size: 16px;
  line-height: 20px;
  color: ${colors.fontLight};
  text-decoration: none;
  text-align: right;
  position: relative;

  &:not(:last-child) {
    margin-bottom: 21px;
  }

  &:after {
    content: '';
    position: absolute;
    height: 110%;
    width: 126%;
    top: -13%;
    left: -5%;
  }
`;

function Nav() {
  return (
    <Wrapper>
      <Link href="/#">Work</Link>
      <Link href="/#">Github</Link>
      <Link href="/#">Pet Projects</Link>
    </Wrapper>
  );
}

Nav.propTypes = {};

export default Nav;
