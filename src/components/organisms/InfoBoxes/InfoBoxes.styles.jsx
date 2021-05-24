import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  width: 80%;

  ${media.lessThan('small')`
    width: 100%;
  `}

  ${({ theme }) => css`
    ${theme.utils.display.flex.spaceBetween}
    flex-direction: column;

    margin: 2rem 0 4rem;
  `};
`;

export const BoxWrapper = styled.div`
  ${({ theme }) => css`
    ${theme.utils.display.flex.spaceBetween}
    align-items: stretch;

    margin-top: 2rem;
    width: 100%;
  `};

  div {
    flex: 0.25;

    ${media.lessThan('small')`
      flex: 0.3;
    `}
  }
`;
