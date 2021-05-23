import styled, { css } from 'styled-components';

export const Box = styled.div`
  padding: 2rem;

  ${({ theme }) => css`
    ${theme.utils.display.flex.center}
    border-radius: ${theme.utils.border.radius};
    background: ${theme.colors.evenLighterSecondary};
    border: 2px solid ${theme.colors.secondary};

    font-size: ${theme.font.sizes.xsmall};
    text-align: center;
  `}
`;
