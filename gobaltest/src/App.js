import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./adapters/router";
import ContextProvider from "./store/1_reducer";
import FormContextProvider from "./store/3_context";
import ModalProvider from "./store/2_context";

function App() {
  return (
    <ContextProvider>
      <ModalProvider>
        <FormContextProvider>
          <RouterProvider router={router} />
        </FormContextProvider>
      </ModalProvider>
    </ContextProvider>
  );
}

export default App;
