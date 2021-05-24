import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    ${theme.utils.display.flex.spaceBetween}

    width: 100%;

    margin: 2rem 0;

    ${media.lessThan('small')`
      flex-direction: column-reverse;
      align-items: flex-start;
    `}
  `}

  div:first-child {
    margin-right: 2rem;

    ${media.lessThan('small')`
      margin-top: 2rem;
    `}
  }
`;

export const Img = styled.div`
  flex: ${({ gifSrc }) => (gifSrc ? 0.2 : 0.12)};

  ${({ theme }) => css`
    ${theme.utils.display.flex.center}
  `}

  img {
    width: 100%;
  }
`;

export const Gif = styled.div`
  flex: 0.3;

  margin-left: 2rem;

  ${media.lessThan('small')`
    margin-bottom: 2rem;
  `}

  ${({ theme, correctAnswer }) => css`
    ${theme.utils.display.flex.center}
    border-radius: ${theme.utils.border.radius};

    ${correctAnswer
      ? css`
          background: ${theme.colors.correctDialogBackground};
          border: 2px solid ${theme.colors.correctDialogBorder};
        `
      : css`
          background: ${theme.colors.wrongDialogBackground};
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
          border: 2px solid ${theme.colors.correctDialogBorder};
        `
      : css`
          background: ${theme.colors.wrongDialogBackground};
          border: 2px solid ${theme.colors.wrongDialogBorder};
        `}

    font-size: ${theme.font.sizes.xsmall};
  `}
`;
