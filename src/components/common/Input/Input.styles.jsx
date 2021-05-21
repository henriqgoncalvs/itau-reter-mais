import styled from 'styled-components';

export const Input = styled.input`
  font-size: ${({ theme }) => theme.font.sizes.xsmall};

  background-color: ${({ theme }) => theme.colors.input};
  border-radius: ${({ theme }) => theme.utils.border.radius};

  border: 1px solid #ced1d69a;

  padding: ${({ theme }) => theme.utils.button.padding.small};

  color: ${({ theme }) => theme.colors.text};

  &::placeholder {
    color: ${({ theme }) => theme.colors.textSecondary};
  }

  margin-bottom: ${({ theme }) => theme.spacing.small};
`;
