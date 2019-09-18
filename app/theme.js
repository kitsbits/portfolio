import { css } from 'styled-components';

export const colors = {
  brand: '#64FD66', // bright green
  fontDark: '#032067', // navy
  fontLight: '#F6FFF6', // light green
  highlightLight: '#F8E71C', // yellow
  highlightDark: '#C91CF8', // pink
  lowlight: '#D7D7D7', // grey
  background: '#F6FFF6', // light green
  // background: '#F6F6F6',  // light grey
};

export const fonts = {
  default: {
    light: () => css`
      font-family: 'Josefin Sans', sans-serif;
      font-weight: 300;
    `,
    lightItalic: () => css`
      font-family: 'Josefin Sans', sans-serif;
      font-weight: 300;
      font-style: italic;
    `,
    regular: () => css`
      font-family: 'Josefin Sans', sans-serif;
    `,
    regularItalic: () => css`
      font-family: 'Josefin Sans', sans-serif;
      font-style: italic;
    `,
    bold: () => css`
      font-family: 'Josefin Sans', sans-serif;
      font-weight: 600;
    `,
    boldItalic: () => css`
      font-family: 'Josefin Sans', sans-serif;
      font-weight: 600;
      font-style: italic;
    `,
  },
};

export const easings = {
  cubicIn: 'cubic-bezier(0.550, 0.055, 0.675, 0.190)',
  cubicOut: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
  cubicInOut: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
  circIn: 'cubic-bezier(0.600, 0.040, 0.980, 0.335)',
  circOut: 'cubic-bezier(0.075, 0.820, 0.165, 1.000)',
  circInOut: 'cubic-bezier(0.785, 0.135, 0.150, 0.860)',
  expoIn: 'cubic-bezier(0.950, 0.050, 0.795, 0.035)',
  expoOut: 'cubic-bezier(0.190, 1.000, 0.220, 1.000)',
  expoInOut: 'cubic-bezier(1.000, 0.000, 0.000, 1.000)',
  quadIn: 'cubic-bezier(0.550, 0.085, 0.680, 0.530)',
  quadOut: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
  quadInOut: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
  quartIn: 'cubic-bezier(0.895, 0.030, 0.685, 0.220)',
  quartOut: 'cubic-bezier(0.165, 0.840, 0.440, 1.000)',
  quartInOut: 'cubic-bezier(0.770, 0.000, 0.175, 1.000)',
  quintIn: 'cubic-bezier(0.755, 0.050, 0.855, 0.060)',
  quintOut: 'cubic-bezier(0.230, 1.000, 0.320, 1.000)',
  quintInOut: 'cubic-bezier(0.860, 0.000, 0.070, 1.000)',
  sineIn: 'cubic-bezier(0.470, 0.000, 0.745, 0.715)',
  sineOut: 'cubic-bezier(0.390, 0.575, 0.565, 1.000)',
  sineInOut: 'cubic-bezier(0.445, 0.050, 0.550, 0.950)',
  backIn: 'cubic-bezier(0.600, -0.280, 0.735, 0.045)',
  backOut: 'cubic-bezier(0.175, 0.885, 0.320, 1.275)',
  backInOut: 'cubic-bezier(0.680, -0.550, 0.265, 1.550)',
};
