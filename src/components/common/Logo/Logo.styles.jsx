import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    max-width: 20rem;
    max-height: 20rem;

    min-width: 16rem;
    min-height: 16rem;

    width: 5%;
    height: 5vw;

    position: absolute;
    top: 2rem;
    left: 5rem;

    ${theme.utils.display.flex.center}

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  `}
`;
