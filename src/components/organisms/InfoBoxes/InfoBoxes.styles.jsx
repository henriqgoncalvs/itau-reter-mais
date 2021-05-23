import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  width: 80%;

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
  }
`;
