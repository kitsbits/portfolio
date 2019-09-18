/**
 *
 * Nav
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors, fonts } from 'theme';

const LINE_HEIGHT = 18;

const Wrapper = styled.span`
  position: absolute;
  top: 40px;
  right: 40px;
`;

const LinkWrapper = styled.div`
  &:not(:last-child) {
    margin-bottom: 21px;
  }
`;

const ClippedRect = styled.rect`
  height: 100%;
  width: 0%;
  fill: ${colors.brand};
  fill-opacity: 1;
  transition: width 0.3s ease-out;
`;

const Text = styled.text`
  fill: ${colors.fontLight};
`;

const FauxTextWrapper = styled.span`
  position: fixed;
  top: -100px;
  right: 0;
  pointer-events: none;
  visibility: hidden;
`;

const FauxText = styled.p`
  ${fonts.default.bold};
  font-size: ${LINE_HEIGHT}px;
  line-height: ${LINE_HEIGHT}px;
`;

const Link = styled.a`
  text-decoration: none;
  position: relative;
  text-align: right;
  ${fonts.default.bold};
  font-size: ${LINE_HEIGHT}px;
  line-height: ${LINE_HEIGHT}px;
  color: ${colors.fontLight};

  &:hover {
    ${ClippedRect} {
      width: 100%;
      height: 100%;
    }
  }

  &:after {
    content: '';
    position: absolute;
    height: 150%;
    width: 180%;
    top: -25%;
    left: -35%;
  }
`;

class Nav extends React.Component {
  state = {
    item1: 0,
  };

  componentDidMount() {
    const { clientWidth } = this.item1Ref;
    this.setState({ item1: clientWidth });
  }

  render() {
    const { item1 } = this.state;
    const y = LINE_HEIGHT - 3;
    return (
      <React.Fragment>
        <Wrapper>
          <Link href="/#">
            <svg height={`${LINE_HEIGHT}px`} width={`${item1}px`}>
              <clipPath id="nav-link-mask-1">
                <Text x="0" y={y}>
                  Work
                </Text>
              </clipPath>
              <Text x="0" y={y}>
                Work
              </Text>
              <ClippedRect clipPath="url(#nav-link-mask-1)" />
            </svg>
          </Link>
          <LinkWrapper />
        </Wrapper>
        <FauxTextWrapper>
          <FauxText
            ref={ref => {
              this.item1Ref = ref;
            }}
          >
            Work
          </FauxText>
        </FauxTextWrapper>
      </React.Fragment>
    );
  }
}

Nav.propTypes = {};

export default Nav;
