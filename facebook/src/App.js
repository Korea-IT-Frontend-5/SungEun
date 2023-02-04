import { ThemeProvider } from "styled-components";
import MainCont from "./component/main";
import GlobalStyles from "./Styles/global";
import theme from "./Styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MainCont />
    </ThemeProvider>
  );
}

export default App;
