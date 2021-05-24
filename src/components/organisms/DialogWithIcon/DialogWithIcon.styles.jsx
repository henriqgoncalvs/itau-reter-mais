import styled, { css } from 'styled-components';
import media from 'styled-media-query';

const directionModifier = {
  left: () => css`
    flex-direction: row;
  `,
  right: () => css`
    flex-direction: row-reverse;
  `,
};

export const Wrapper = styled.div`
  ${({ theme, direction, withBackground }) => css`
    ${theme.utils.display.flex.spaceBetween}

    ${direction && directionModifier[direction]()}

    ${withBackground &&
    css`
      padding: 2rem;
      background: ${theme.colors.evenLighterSecondary};
      border: 2px solid ${theme.colors.secondary};
      border-radius: ${({ theme }) => theme.utils.button.border.radius};

      ${media.lessThan('small')`
        max-width: calc(100% - 4rem);
      `}
    `}

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

  border: 2px solid ${({ theme }) => theme.colors.secondary};
  border-radius: ${({ theme }) => theme.utils.button.border.radius};

  margin-left: 2rem;

  ${media.lessThan('small')`
    margin-bottom: 2rem;
  `}

  ${({ theme }) => css`
    ${theme.utils.display.flex.center}
  `}

  img {
    border-radius: ${({ theme }) => theme.utils.button.border.radius};
    width: 100%;
  }
`;

export const Text = styled.div`
  flex: 1;

  p {
    margin: 0;
  }

  ${({ theme }) => theme.font.sizes.small};
`;
