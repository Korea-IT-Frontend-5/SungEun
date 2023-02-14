import { useContext } from "react";
import { useReducer } from "react";
import { createContext } from "react";
import { createAciton } from "./createAction";

const initialState = [
  {
    id: 1,
    obj: '내용 어쩌구 저쩌구',
    content: 'content',
    objImg1: '',
    objImg2: '',
    objImg3: '',
    objImg4: '',
    objImg5: '',
    username: '홍길동',
    state: false,
  }
];

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
        id: action.payload.id, 
        obj: action.payload.obj, 
        username: action.payload.username, 
        setDayNow: action.payload.setDayNow
      }, ...state];
    case 'Del_Box':
      return state.filter((listBox) => listBox.id !== action.payload.id);
    case 'Modify_Box':
      return state.filter((listBox) => (
        listBox.obj === action.payload.obj,
        listBox.username === action.payload.username
      ));
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