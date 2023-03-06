import { ThemeProvider } from 'styled-components';
import GlobalStyle from './style/global';
import router from './routes/routing';
import theme from './style/theme';
import { RouterProvider } from 'react-router-dom';
import { MockPost } from "./__mocks__/post";

function App() {
  const Posts = MockPost(5);
  /*MockPost 함수의 매개변수 count로 전달한 수 만큼 데이터가 생성됩니다*/
  console.log(Posts);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
