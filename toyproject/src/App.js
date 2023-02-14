
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './style/global';
import router from './routes/routing';
import theme from './style/theme';
import { RouterProvider } from 'react-router-dom';
import ContextProvider from './context/listDate';

function App() {
  return (
    <ContextProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <RouterProvider router={router} />
      </ThemeProvider>
    </ContextProvider>
  );
}

export default App;
