import { useContext } from "react";
import { useState } from "react";
import { useReducer } from "react";
import { createContext } from "react";
import { createAciton } from "./createAction";

const initialState = [];

export const ListContext = createContext();
export const ListDispatchContext = createContext();
export const useViewState = () => useContext(ListContext);
export const useViewDispatch = () => useContext(ListDispatchContext);

export const Add_Box = createAciton('Add_Box');
export const Del_Box = createAciton('Del_Box');
export const Modify_Box = createAciton('Modify_Box');

const userBoxReducer = (state, action) => {
  switch(action.type){
    case 'Add_Box': 
      return [{
        id: state.length - 1, 
        obj: action.payload.obj, 
        username: action.payload.username, 
        setDayNow: action.payload.setDayNow,
        state: false,
      }, ...state];
    case 'Del_Box':
      return state.filter((listBox) => listBox.id !== action.payload.id);
    case 'Modify_Box':
      const reState = [...state];
      const reList = reState.find((list)=>list.id === action.payload.id);
      reList.obj = action.payload.obj;
      reList.username = action.payload.username;
      reList.setDayNow = action.payload.setDayNow;
      console.log(state)
      return state;
    default:
      return;
  }
}

const ContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(userBoxReducer, initialState);
  return (
    <ListContext.Provider value={state}>
      <ListDispatchContext.Provider value={dispatch}>
        {children}
      </ListDispatchContext.Provider>
    </ListContext.Provider>
  )
}
export default ContextProvider;