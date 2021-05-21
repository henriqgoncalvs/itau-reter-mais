import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme, display }) => css`
    ${theme.utils.display.flex.center}

    height: 100%;
    min-height: calc(100vh - 10rem);

    padding: 5rem;

    display: ${display};
  `}
`;
