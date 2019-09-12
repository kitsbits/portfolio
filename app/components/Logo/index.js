/**
 *
 * Logo
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from 'theme';

const Svg = styled.svg`
  height: 112px;
  width: 66px;
  stroke-width: 1;
  stroke: none;
  fill: none;
`;

function Logo(props) {
  return (
    <Svg className={props.className} viewBox="0 0 66 112">
      <path
        fill={colors.brand}
        d="M32.88,15.78 L23.04,21 L27.42,21 L28.74,22.8 C25.26,30.42 22.44,37.86 19.26,45.6 L19.92,47.34 L9.54,49.44 L12.48,44.88 C14.4,40.26 16.2,35.76 18.12,31.08 L16.86,28.56 L19.92,26.64 L21.06,23.94 L16.5,24.06 L14.64,24.96 L3.72,51.9 L0,43.86 L4.8,31.08 L3.54,28.56 L6.54,26.64 L15.3,6.36 L4.08,7.74 L9.96,0.06 L11.46,1.2 L19.74,0.6 L23.28,4.74 L16.14,20.88 L25.26,16.14 L30.84,4.26 L28.38,0.84 L40.38,0.84 L32.88,15.78 Z M35.76,16.02 L45.18,14.28 L33.9,41.58 L43.98,34.2 L44.1,36.36 L31.68,47.34 L26.7,42.3 L31.14,31.08 L29.88,28.56 L32.94,26.64 L36.42,17.82 L35.76,16.02 Z M47.76,6.84 L41.04,14.16 L40.14,7.2 L46.38,0.48 L47.76,6.84 Z M55.62,3.9 L54.96,2.1 L65.58,0 L62.64,4.56 L60.6,9.48 L65.52,8.88 L64.56,10.8 L59.64,11.76 L47.22,41.58 L57.3,34.2 L57.42,36.36 L45,47.34 L40.02,42.3 L44.46,31.08 L43.2,28.56 L46.26,26.64 L51.72,13.32 L46.38,14.34 L48.48,10.86 L52.92,10.38 L55.62,3.9 Z M20.88,86.64 L26.28,73.5 L12.72,90.18 L3.72,111.9 L0,103.86 L4.8,91.08 L3.54,88.56 L6.54,86.64 L15.3,66.36 L4.08,67.74 L9.96,60.06 L11.46,61.2 L19.74,60.6 L23.28,64.74 L16.74,80.58 L32.88,60.84 L37.74,64.68 L30.72,80.82 L47.04,60.84 L51.84,64.68 L34.38,105.6 L35.04,107.34 L24.66,109.44 L27.6,104.88 L33.3,91.08 L31.98,88.56 L35.04,86.64 L40.44,73.5 L26.46,90.66 L17.16,112.08 L13.5,104.88 L19.14,91.08 L17.88,88.56 L20.88,86.64 Z M53.34,105.6 L50.88,107.34 L46.08,107.34 L45,105.6 L46.92,100.74 L49.38,99 L54.24,99 L55.26,100.74 L53.34,105.6 Z"
      />
    </Svg>
  );
}

Logo.propTypes = {
  className: PropTypes.string,
};

export default Logo;
