import { createContext, useContext, useReducer } from 'react';
import { createAction } from '../utils/createAction';

const ingredients = [
  { id: 1, name: "피자 도우", price: 1000 },
  { id: 2, name: "토마토 소스", price: 500 },
  { id: 3, name: "치즈", price: 1000 },
  { id: 4, name: "피망", price: 500 },
  { id: 5, name: "양파", price: 500 },
];

export const GlobalContext = createContext();
export const GlobalDispatchContext = createContext();

export const useShopState = () => useContext(GlobalContext);
export const useShopDispatch = () => useContext(GlobalDispatchContext);

export const Add_state = createAction('ADD_STATE');
export const Del_state = createAction('DEL_STATE');

const userListReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_STATE':
      return [...state, {id: action.payload.id, name: action.payload.name, price: action.payload.price}];
    case 'DEL_STATE':
      return state.filter(( list ) => list.id !== action.payload);
    default:
      return state;
  }
}

const ContextProvider = ({ children }) => {
  const [state, dispacth] = useReducer(userListReducer, ingredients);
  return (
    <GlobalContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispacth}>{ children }</GlobalDispatchContext.Provider>
    </GlobalContext.Provider>
  );
};
export default ContextProvider;


