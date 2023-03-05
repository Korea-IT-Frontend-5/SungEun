import { createContext, useState } from "react";

const modalState = false;

export const ModalContext = createContext();
export const ModalDispatch = createContext();

const ModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(modalState);

  return (
    <ModalContext.Provider value={isModalOpen}>
      <ModalDispatch.Provider value={setIsModalOpen}>{ children }</ModalDispatch.Provider>
    </ModalContext.Provider>
  )
}
export default ModalProvider;
