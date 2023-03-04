
// const [isModalOpen, setIsModalOpen] = useState(false);

import { createContext } from "react";

/*
export const modalViewReducer = (state, action) => {
  switch (action.type) {
    case 'MODAL_OPEN':
      return;
    case 'MODAL_CLOSE':
      return;
    default:
      return state;
  }
}
*/

export const ModalContext = createContext([]);
export const ModelDispatchContext = createContext({
  open: () => {},
  close: () => {}
})