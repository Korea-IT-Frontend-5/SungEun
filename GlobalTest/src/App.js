import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./adapters/router";
import ContextProvider from "./store/1_reducer";
import FormContextProvider from "./store/3_context";

function App() {
  return (
    <ContextProvider>
      <FormContextProvider>
        <RouterProvider router={router} />
      </FormContextProvider>
    </ContextProvider>
  );
}

export default App;
