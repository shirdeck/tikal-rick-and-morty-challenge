import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Schwifty';
    src: url('/fonts/get_schwifty.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
`;

export default GlobalStyles;