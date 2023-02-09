
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './style/global';
import router from './routes/routing';
import theme from './style/theme';
import { RouterProvider } from 'react-router-dom';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
