import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import arrowDialog from 'assets/img/arrow-dialog.svg';
import arrowDialogPrimary from 'assets/img/arrow-dialog-primary.svg';

export const Wrapper = styled.div`
  max-width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  position: relative;
`;

export const Dialog = styled.div`
  max-width: 60%;

  padding: 2rem;

  margin-top: 2rem;
  position: relative;

  ${({ theme, direction }) => css`
    border-radius: ${theme.utils.border.radius};

    ${direction === 'right'
      ? css`
          background: ${theme.colors.input};
          align-self: flex-end;
          border: 2px solid ${theme.colors.secondary};

          &:after {
            content: '';
            position: absolute;
            background: url(${arrowDialog});
            background-position: center;
            background-size: contain;
            background-repeat: no-repeat;
            width: 3rem;
            height: 3rem;
            right: -2.6rem;
            top: 50%;
            transform: translateY(-50%);
          }
        `
      : css`
          background: ${theme.colors.dialogBackground};
          align-self: flex-start;
          border: 2px solid ${theme.colors.lighterPrimary};

          &:after {
            content: '';
            position: absolute;
            background: url(${arrowDialogPrimary});
            background-size: contain;
            background-position: center;
            background-repeat: no-repeat;
            width: 3rem;
            height: 3rem;
            left: -2.6rem;
            top: 50%;
            transform: translateY(-50%) rotate(180deg);
          }
        `}

    font-size: ${theme.font.sizes.xsmall};
  `}

  ${media.lessThan('medium')`
    max-width: 100%;
  `}
`;

export const Icon = styled.img`
  width: 100%;
  max-width: 15rem;

  margin-top: 2rem;
`;
