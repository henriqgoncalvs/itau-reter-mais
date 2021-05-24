import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  ${({ theme, display }) => css`
    ${theme.utils.display.flex.center}
    width: 50vw;

    height: 100%;
    min-height: calc(100vh - 10rem);

    padding: 5rem;

    display: ${display};

    position: relative;
    z-index: 10;

    ${media.lessThan('medium')`
      min-height: calc(100vh - 6rem);
      width: calc(80vw);
      padding: 3rem 1rem;
    `}

    ${media.lessThan('small')`
      min-height: calc(100vh - 6rem);
      width: calc(100vw - 2rem);
      padding: 3rem 1rem;
    `}
  `}
`;
