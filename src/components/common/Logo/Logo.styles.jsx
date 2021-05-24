import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    max-width: 20rem;
    max-height: 20rem;

    min-width: 16rem;
    min-height: 16rem;

    width: 5%;
    height: 5vw;

    position: fixed;
    top: 2rem;
    left: 5rem;
    z-index: 5;

    ${media.lessThan('medium')`
      width: 100%;
      height: auto;
      max-height: initial;

      min-width: initial;
      min-height: initial;

      max-width: 15rem;

      left: 50%;
      transform: translateX(-50%);
    `}

    ${theme.utils.display.flex.center}

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  `}
`;
