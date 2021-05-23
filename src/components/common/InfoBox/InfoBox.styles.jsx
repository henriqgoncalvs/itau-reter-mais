import styled, { css } from 'styled-components';

export const Box = styled.div`
  padding: 1rem;

  ${({ theme }) => css`
    ${theme.utils.display.flex.center}
    flex-direction: column;
    border-radius: ${theme.utils.border.radius};
    background: ${theme.colors.evenLighterSecondary};
    border: 2px solid ${theme.colors.secondary};

    font-size: ${theme.font.sizes.xxsmall};
    font-weight: bold;
    text-align: center;
  `}

  img {
    margin-bottom: 1rem;
    max-width: 4rem;
  }
`;
