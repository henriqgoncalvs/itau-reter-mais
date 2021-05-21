import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme, display }) => css`
    ${theme.utils.display.flex.center}

    height: 100%;
    min-height: calc(100vh - 20rem);

    display: ${display};

    margin-top: 10rem;
    margin-bottom: 10rem;
  `}
`;
