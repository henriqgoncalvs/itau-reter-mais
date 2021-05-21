import { createGlobalStyle, css } from 'styled-components';
import { normalize } from 'styled-normalize';

import bg from 'assets/img/bg.jpg';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  // Myriad
  @font-face {
    font-family: 'Myriad Pro';
    font-style: normal;
    font-weight: 800;
    font-display: swap;
    src: url('/fonts/MYRIADPRO-BOLD.otf') format('otf');
  }
  @font-face {
    font-family: 'Myriad Pro';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url('/fonts/MYRIADPRO-SEMIBOLD.otf') format('otf'); /* Modern Browsers */
  }

  @font-face {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('/fonts/MYRIADPRO-REGULAR.otf') format('otf');
  }

	* {
		-webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
	}

  ${({ theme }) => css`
    html {
      font-family: ${theme.font.family.myriad};
      font-size: 62.5%;
      scroll-behavior: smooth;
    }
    body {
      background: url(${bg});
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      background-attachment: fixed;
      color: ${theme.colors.text};
      font-size: ${theme.font.sizes.small};
      min-height: calc(100vh - 10rem);

      padding: 5rem;

      ${theme.utils.display.flex.center}
    }

    img {
      pointer-events: none;
    }

    a,
    button {
      cursor: pointer;
    }
  `}
`;

export default GlobalStyle;
