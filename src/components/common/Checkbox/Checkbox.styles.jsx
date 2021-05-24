import styled, { css } from 'styled-components';

import checkmarkImg from 'assets/img/checkmark.svg';

export const Wrapper = styled.label`
  display: flex;
  align-items: center;
  position: relative;
  padding-left: 40px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  max-width: 100%;

  min-height: 35px;

  ${({ theme }) => css`
    background: ${theme.colors.input};
    border-radius: ${theme.utils.border.radius};
    font-size: ${theme.font.sizes.xxsmall};

    color: ${theme.colors.textSecondary};
  `}

  & input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  span {
    position: absolute;
    top: 50%;
    left: 5px;
    transform: translateY(-50%);
    height: 25px;
    width: 25px;
    border: 2px solid ${({ theme }) => theme.colors.secondary};
    border-radius: ${({ theme }) => theme.utils.border.radius};
  }

  /* Create the checkmark/indicator (hidden when not checked) */
  span:after {
    content: '';
    position: absolute;
    display: none;
    background: url(${checkmarkImg});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }

  /* Show the checkmark when checked */
  input:checked ~ span:after {
    display: block;
  }
`;
