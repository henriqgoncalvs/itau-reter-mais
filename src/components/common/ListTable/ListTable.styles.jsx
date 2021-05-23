import styled, { css } from 'styled-components';

export const Wrapper = styled.ul`
  padding: 1rem 0.2rem;

  width: 100%;

  ${({ theme, yes }) => css`
    background: ${yes
      ? theme.colors.correctDialogBackground
      : theme.colors.wrongDialogBackground};
    border: 2px solid
      ${yes ? theme.colors.correctDialogBorder : theme.colors.wrongDialogBorder};
    border-radius: ${({ theme }) => theme.utils.border.radius};

    li {
      ${theme.utils.display.flex.spaceBetween}
      align-items: flex-start;
      justify-content: flex-start;

      padding: 0.2rem 0.2rem 1rem;
      border-bottom: 1px solid ${theme.colors.secondary};
      margin-bottom: 1rem;

      font-size: ${theme.font.sizes.xsmall};

      &:not(:first-child) {
        span {
          ${theme.utils.display.flex.center}
          background: ${theme.colors.secondary};
          border-radius: ${({ theme }) => theme.utils.border.radius};
          padding: 0.2rem;

          margin-right: 1rem;

          img {
            padding: 0.3rem 0.1rem;
            width: 2rem;
          }
        }
      }
    }
  `}
`;

export const TableTitle = styled.li`
  ${({ theme, yes }) => css`
    background: ${yes
      ? theme.colors.correctDialogBorder
      : theme.colors.wrongDialogBorder};

    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.medium}!important;

    width: max-content;

    ${theme.utils.display.flex.center}
    align-items: center!important;

    margin: 1rem auto 2rem !important;

    padding: 0.5rem !important;
    border-bottom: 0px solid transparent;
    border-radius: ${({ theme }) => theme.utils.border.radius};

    span {
      ${theme.utils.display.flex.center}
      background: transparent;
      border-radius: ${({ theme }) => theme.utils.border.radius};
      padding: 0.3rem;

      margin-right: 0.5rem;

      img {
        padding: 0.3rem 0.1rem;
        width: 2rem;
        border: 1px solid ${theme.colors.white};
        border-radius: 0.3rem;
      }
    }
  `}
`;
