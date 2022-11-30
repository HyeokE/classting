import { ThemeProvider } from 'styled-components';

import Routes from './Routes';
import GlobalStyles from './styles/globalStyles';
import { theme } from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
