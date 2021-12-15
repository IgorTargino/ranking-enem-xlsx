import { SchoolContextProvider } from './context/SchoolContext';
import AppRoutes from './routes';
import GlobalStyles from './styles/global';

function App() {
  return (
    <SchoolContextProvider>
      <GlobalStyles />
      <AppRoutes />
    </SchoolContextProvider>
  );
}

export default App;
