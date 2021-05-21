import styled from 'styled-components';

export const Hr = styled.hr`
  width: 100%;
  height: 5px;

  border: none;

  margin: 3rem 0;

  background-color: ${({ theme }) => theme.colors.secondary};
`;
