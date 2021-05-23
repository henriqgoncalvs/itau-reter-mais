import styled, { css } from 'styled-components';

const directionModifier = {
  left: () => css`
    flex-direction: row;
  `,
  right: () => css`
    flex-direction: row-reverse;
  `,
};

export const Wrapper = styled.div`
  ${({ theme, direction }) => css`
    ${theme.utils.display.flex.spaceBetween}

    ${direction && directionModifier[direction]()}

    width: 100%;

    margin: 2rem 0;
  `}

  div:first-child {
    margin-right: 2rem;
  }

  div:last-child {
    margin-left: 2rem;
  }
`;

export const Img = styled.div`
  flex: 0.1;

  ${({ theme }) => css`
    ${theme.utils.display.flex.center}
  `}

  img {
    width: 100%;
  }
`;

export const Gif = styled.div`
  flex: 0.2;

  ${({ theme, correctAnswer }) => css`
    ${theme.utils.display.flex.center}
    border-radius: ${theme.utils.border.radius};

    ${correctAnswer
      ? css`
          background: ${theme.colors.correctDialogBackground};
          align-self: flex-end;
          border: 2px solid ${theme.colors.correctDialogBorder};
        `
      : css`
          background: ${theme.colors.wrongDialogBackground};
          align-self: flex-start;
          border: 2px solid ${theme.colors.wrongDialogBorder};
        `}
  `}

  img {
    border-radius: ${({ theme }) => theme.utils.button.border.radius};
    width: 100%;
  }
`;

export const Text = styled.div`
  flex: 1;
  padding: 2rem;

  p {
    margin: 0;
  }

  ${({ theme, correctAnswer }) => css`
    border-radius: ${theme.utils.border.radius};

    ${correctAnswer
      ? css`
          background: ${theme.colors.correctDialogBackground};
          align-self: flex-end;
          border: 2px solid ${theme.colors.correctDialogBorder};
        `
      : css`
          background: ${theme.colors.wrongDialogBackground};
          align-self: flex-start;
          border: 2px solid ${theme.colors.wrongDialogBorder};
        `}

    font-size: ${theme.font.sizes.xsmall};
  `}
`;
