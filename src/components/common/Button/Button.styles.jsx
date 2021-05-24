import styled from 'styled-components';

// const colorModifiers = {
//   yellowFilled: (theme) => `
//     background-color: ${theme.colors.secondary};
//     border: none;
//     color: ${theme.colors.black};
//   `,
//   yellowLine: (theme) => `
//     border: 2px solid ${theme.colors.secondary};
//     color: ${theme.colors.black};
//   `,
//   blueFilled: (theme) => `
//     background-color: ${theme.colors.primary};
//     border: none;
//     color: ${theme.colors.black};
//   `,
//   blueLine: (theme) => `
//     border: 2px solid ${theme.colors.primary};
//     color: ${theme.colors.black};
//   `,
// };

const sizeModifiers = {
  small: (theme) => `
    font-size: ${theme.font.sizes.xxxsmall};
    padding: ${theme.utils.button.padding.xsmall};
  `,
  medium: (theme) => `
    font-size: ${theme.font.sizes.xxsmall};
    padding: ${theme.utils.button.padding.small};
  `,
  large: (theme) => `
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.utils.button.padding.large};
  `,
};

// const borderModifiers = {
//   squared: () => `
//     border-radius: 0rem;
//   `,
//   rounded: (theme) => `
//     border-radius: ${theme.utils.button.border.radius};
//   `,
// };

const commonStyles = ({ theme, size, disabled }) => `
  ${size && sizeModifiers[size](theme)}

  text-decoration: none;
  text-align: center;

  transition: all 0.2s ease-in-out;


  &:hover {
    filter: brightness(110%);
  }


  background-color: ${theme.colors.secondary};
  border: none;
  border-radius: ${theme.utils.button.border.radius};
  color: ${theme.colors.black};

  font-weight: ${theme.font.weights.regular};

  ${
    disabled &&
    `
      cursor: not-allowed;
      background-color: ${theme.colors.textSecondary};
    `
  }
`;

export const Button = styled.button`
  ${({ theme, size, disabled }) => commonStyles({ theme, size, disabled })}
`;
