import { ThemeProvider } from 'styled-components';

import GlobalStyle from 'styles/global.style';
import theme from 'styles/theme';

const GlobalProvider = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default GlobalProvider;
