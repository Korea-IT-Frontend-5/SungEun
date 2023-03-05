import { createContext, useContext, useReducer, useState } from "react";
import { createAction } from "../utils/createAction";

const userList = [
  { id: 1, name: "홍길동", nickname: "히히" },
];

export const UserFormContext = createContext();
export const UserFormDisPatchContext = createContext();

export const useUserFormState = () => useContext(UserFormContext);
export const useUserFormDispatch = () => useContext(UserFormDisPatchContext);


export const add_form = createAction('ADD_FORM');
export const add_isEdit = createAction('ADD_ISEDIT');
export const reset_form = createAction('RESET_FORM');
export const view_form = createAction('VIEW_FORM');


const formReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_FORM':
      const id = state.length + 1;
      return [...state, { id: id, name: action.payload.name, nickname: action.payload.nickname }];
    case 'ADD_ISEDIT':
      const addIsEditState = state.map((list) => (
        {...list, isEdit:true}
      ));
      return addIsEditState;
    case 'RESET_FORM':
      const resetState = [...state];
      resetState.length = 0;
      return resetState;
    case 'VIEW_FORM':
      const viewState = [...state];
      {
        viewState.map((viewList) => {
          if (viewList.isEdit !== undefined) return console.log(viewList);
        });
      }
      //return viewState;
    default:
      return state;
  }
}
const FormContextProvider = ({ children }) => {
  const [state, dispacth] = useReducer(formReducer, userList);

  return (
    <UserFormContext.Provider value={state}>
      <UserFormDisPatchContext.Provider value={dispacth}>{children}</UserFormDisPatchContext.Provider>
    </UserFormContext.Provider>
  );
};

export default FormContextProvider;

