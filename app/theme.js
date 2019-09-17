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
