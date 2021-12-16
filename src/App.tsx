import { ThemeProvider } from 'styled-components';
import { SchoolContextProvider } from './context/SchoolContext';
import AppRoutes from './routes';
import GlobalStyles from './styles/global';

import ligth from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={ligth}>
      <SchoolContextProvider>
        <GlobalStyles />
        <AppRoutes />
      </SchoolContextProvider>
    </ThemeProvider>
  );
}

export default App;
