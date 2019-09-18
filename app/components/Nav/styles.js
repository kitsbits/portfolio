import styled from 'styled-components';
import { colors, fonts, easings } from 'theme';

export const LINE_HEIGHT = 18;

export const Wrapper = styled.nav`
  position: absolute;
  top: 40px;
  right: 40px;
`;

export const LinkWrapper = styled.div`
  &:not(:last-child) {
    margin-bottom: 21px;
  }
`;

export const ClippedRect = styled.rect`
  height: 100%;
  width: 0%;
  fill: ${colors.brand};
  fill-opacity: 1;
  transition: width 0.65s 0.1s ${easings.backOut};
`;

export const Text = styled.text`
  fill: ${colors.fontLight};
`;

export const FauxTextWrapper = styled.span`
  position: fixed;
  top: -100px;
  right: 0;
  pointer-events: none;
  visibility: hidden;
`;

export const FauxText = styled.span`
  ${fonts.default.bold};
  font-size: ${LINE_HEIGHT}px;
  line-height: ${LINE_HEIGHT}px;
`;

export const Link = styled.a`
  display: inline-block;
  text-decoration: none;
  position: relative;
  text-align: right;
  ${fonts.default.bold};
  font-size: ${LINE_HEIGHT}px;
  line-height: ${LINE_HEIGHT}px;
  color: ${colors.fontLight};
  transform: translateX(${props => props.x}px);

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
    width: 125%;
    top: -25%;
    left: -12.5%;
  }
`;
