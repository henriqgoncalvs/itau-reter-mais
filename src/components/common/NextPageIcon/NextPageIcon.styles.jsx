import styled, { keyframes } from 'styled-components';

const animation = keyframes`
  from {
    transform: translateY(0%);
  }
  to {
    transform: translateY(-20%);
  }
`;

export const Wrapper = styled.div`
  ${({ theme }) => theme.utils.display.flex.spaceBetween}
  align-items: flex-end;

  img {
    width: 3.5rem;
    height: 3.5rem;
    margin-left: 0.5rem;

    animation: ${animation} 1s alternate-reverse infinite;
  }
`;

export const Text = styled.div`
  font-size: 1.1rem;
  font-weight: 400;
`;
