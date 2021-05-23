import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    ${theme.utils.display.flex.spaceBetween}
    align-items: flex-start;

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

  border: 2px solid ${({ theme }) => theme.colors.secondary};
  border-radius: ${({ theme }) => theme.utils.button.border.radius};

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
