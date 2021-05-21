import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 50vw;
  height: 100%;
  max-width: 100rem;

  background-color: ${({ theme }) => theme.colors.white};

  border-radius: 0.8rem;

  padding: 5rem;

  ${({ theme }) => theme.utils.display.flex.center}
  flex-direction: column;
`;
