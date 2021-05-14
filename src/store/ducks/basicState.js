import { createActions, createReducer } from "reduxsauce";

//Action types e Creators
export const { Types, Creators } = createActions({
  loading: ["status"],
  setType: ["type"],
  setOpenCart: ["state"],
});

//Reducer Handlers
const INITIAL_STATE = {
  loading: false,
  type: "",
  types: ["fire", "water", "grass", "electric"],
  openCart: false,
};

const loading = (state = INITIAL_STATE, action) => {
  return { ...state, loading: action.payload };
};

const setType = (state = INITIAL_STATE, action) => {
  return { ...state, type: action.payload };
};

const setOpenCart = (state = INITIAL_STATE, action) => {
  return { ...state, openCart: action.payload };
};

//Criando Reducer
export default createReducer(INITIAL_STATE, {
  [Types.LOADING]: loading,
  [Types.SET_TYPE]: setType,
  [Types.SET_OPEN_CART]: setOpenCart,
});
