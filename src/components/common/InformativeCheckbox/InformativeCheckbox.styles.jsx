import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 12px;
  font-size: 22px;
  width: 100%;

  min-height: 35px;

  ${({ theme }) => css`
    background: ${theme.colors.input};
    border-radius: ${theme.utils.border.radius};
    font-size: ${theme.font.sizes.xxsmall};

    color: ${theme.colors.textSecondary};
  `}

  img {
    height: 3rem;
    width: 3rem;
    padding: 0.5rem 1.5rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  p {
    margin: 0.5rem 0;

    &:first-child {
      font-weight: bold;
    }
  }
`;
