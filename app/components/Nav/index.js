/**
 *
 * Nav
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import _ from 'lodash';

import {
  LINE_HEIGHT,
  Wrapper,
  LinkWrapper,
  ClippedRect,
  Text,
  FauxTextWrapper,
  FauxText,
  Link,
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
    const { children } = this.fauxTextsRef;
    const textWidths = _.map(children, item => item.offsetWidth);
    const longestWidth = _.max(textWidths);
    this.setWidths(textWidths, longestWidth);
  }

  setWidths = (textWidths, longestWidth) => {
    this.setState({ textWidths, longestWidth });
  };

  renderNavLink = (item, i) => {
    const key = `nav-link-${i}`;

    const { label, href } = item;
    const { textWidths, longestWidth } = this.state;
    const width = textWidths[i];
    const moveX = longestWidth ? longestWidth - width : 0;
    const y = LINE_HEIGHT - 3;

    return (
      <LinkWrapper key={key}>
        <Link href={href} x={moveX}>
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
        <Wrapper
          ref={ref => {
            this.wrapperRef = ref;
          }}
        >
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
