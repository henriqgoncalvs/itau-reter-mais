import styled, { css } from 'styled-components';

export const Wrapper = styled.ul`
  ${({ theme }) => css`
    ${theme.utils.display.flex.spaceBetween}
    flex-direction: column;
    align-items: flex-start;

    padding: 0;

    width: 100%;

    list-style: none;

    margin: 2rem 0;
  `};
`;

export const ListItem = styled.li`
  ${({ theme }) => theme.utils.display.flex.center};
  font-size: ${({ theme }) => theme.font.sizes.xsmall};

  margin-bottom: 1rem;

  span {
    font-size: ${({ theme }) => theme.font.sizes.medium};
    font-weight: bold;

    padding: 0.3rem 0.8rem;

    margin-right: 0.5rem;
    border: 2px solid ${({ theme }) => theme.colors.secondary};
    border-radius: ${({ theme }) => theme.utils.border.radius};
  }
`;
