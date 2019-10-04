/**
 *
 * Nav
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { TimelineMax, Cubic, Expo, Quad } from 'gsap';
import _ from 'lodash';

import {
  LINE_HEIGHT,
  MARGIN_BOTTOM,
  Wrapper,
  LinkWrapper,
  ClippedRect,
  Text,
  FauxTextWrapper,
  FauxText,
  Link,
  Svg,
  Line,
} from './styles';

const items = [
  {
    label: 'Work',
    href: '#',
  },
  {
    label: 'Github',
    href: '#',
  },
  {
    label: 'Pet Projects',
    href: '#',
  },
];

const HEIGHT = LINE_HEIGHT + MARGIN_BOTTOM + 5;
const X_START = 30;

class Nav extends React.Component {
  constructor(props) {
    super(props);
    const textWidths = _.map(_.range(items.length), () => 0);
    this.state = {
      textWidths,
      longestWidth: null,
    };
  }

  componentDidMount() {
    this.navWidth = this.fauxTextsRef.clientWidth;
    const { children } = this.fauxTextsRef;
    const textWidths = _.map(children, item => item.offsetWidth);
    const longestWidth = _.max(textWidths);
    this.x2 = longestWidth + 40;
    this.setWidths(textWidths, longestWidth);
  }

  componentDidUpdate(prevProps, prevState) {
    const { longestWidth } = this.state;
    const doSetLinePosition = !prevState.longestWidth && !!longestWidth;
    if (doSetLinePosition) {
      [this.targetWidth] = this.state.textWidths;
      this.navIndex = 0;
      this.tweenY1 = X_START;
      this.tweenY2 = HEIGHT;
      this.tweenX1 = 0;
      this.animateLine(0, 0);
    }
  }

  setWidths = (textWidths, longestWidth) => {
    this.setState({ textWidths, longestWidth });
  };

  onClick = (event, index) => {
    this.targetWidth = this.state.textWidths[index];
    this.navIndex = index;
    this.tweenY1 = Number(this.lineRef.getAttribute('y1'));
    this.tweenY2 = Number(this.lineRef.getAttribute('y2'));
    this.tweenX1 = Number(this.lineRef.getAttribute('x1'));
    this.x2 = Number(this.lineRef.getAttribute('x2'));
    this.animateLine(index);
  };

  animateLine = (index = 0, duration = 0.35) => {
    this.animation = new TimelineMax();
    const tweenY1To = 42 * this.navIndex + X_START;
    const tweenY2To = tweenY1To + 15;
    const tweenXTo = this.x2 - this.targetWidth * 1.1 - 35;
    const navItems = _.map(items, (item, i) => this[`clippedRef${i}`]);
    const currentNavItem = _.remove(navItems, (item, i) => i === index);
    const ease = Quad.easeIn;
    this.animation
      .set(navItems, { width: '0%' }, 'start')
      .set(currentNavItem, { width: '100%', opacity: 1, ease }, 'start')
      .to(
        this,
        duration,
        {
          tweenY1: tweenY1To,
          ease,
          onUpdate: () => {
            this.lineRef.setAttribute('y1', this.tweenY1);
          },
        },
        'start',
      )
      .to(
        this,
        duration,
        {
          tweenX1: tweenXTo,
          ease,
          onUpdate: () => {
            this.lineRef.setAttribute('x1', this.tweenX1);
          },
        },
        'start',
      )
      .to(
        this,
        duration,
        {
          tweenY2: tweenY2To,
          ease,
          onUpdate: () => {
            this.lineRef.setAttribute('y2', this.tweenY2);
          },
        },
        `start+=${duration}`,
      )
      .set(navItems, { opacity: 0 });
  };

  renderNavLink = (item, i) => {
    const key = `nav-link-${i}`;

    const { label, href } = item;
    const { textWidths, longestWidth } = this.state;
    const width = textWidths[i];
    const moveX = longestWidth ? longestWidth - width : 0;
    const y = LINE_HEIGHT - 3;
    const onClick = event => this.onClick(event, i);

    return (
      <LinkWrapper key={key}>
        <Link href={href} x={moveX} onClick={onClick}>
          <svg height={`${LINE_HEIGHT}px`} width={`${width}px`}>
            <clipPath id={`nav-link-mask-${i}`}>
              <Text x="0" y={y}>
                {label}
              </Text>
            </clipPath>
            <Text x="0" y={y}>
              {label}
            </Text>
            <ClippedRect clipPath={`url(#nav-link-mask-${i})`} />
            <ClippedRect
              clipPath={`url(#nav-link-mask-${i})`}
              ref={ref => {
                this[`clippedRef${i}`] = ref;
              }}
            />
          </svg>
        </Link>
      </LinkWrapper>
    );
  };

  renderFauxText = (item, i) => {
    const key = `faux-nav-text-${i}`;
    return <FauxText key={key}>{item.label}</FauxText>;
  };

  render() {
    return (
      <React.Fragment>
        <Wrapper>
          <Svg>
            <Line
              ref={ref => {
                this.lineRef = ref;
              }}
              x1={0}
              y1={0}
              x2={this.x2}
              y2={0}
            />
          </Svg>
          {_.map(items, this.renderNavLink)}
        </Wrapper>
        <FauxTextWrapper
          ref={ref => {
            this.fauxTextsRef = ref;
          }}
        >
          {_.map(items, this.renderFauxText)}
        </FauxTextWrapper>
      </React.Fragment>
    );
  }
}

Nav.propTypes = {};

export default Nav;
