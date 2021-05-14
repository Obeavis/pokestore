import { createActions, createReducer } from "reduxsauce";
import { setPrice } from "utils/functions";

//Action types e Creators
export const { Types, Creators } = createActions({
  addToCart: ["item"],
  removeItem: ["name"],
  addOne: ["name"],
  removeOne: ["name"],
  clearCart: [""],
});

//Reducer Handlers
const INITIAL_STATE = {
  items: {},
  quantity: 0,
  totalPrice: 0,
};

const addItem = (state = INITIAL_STATE, action) => {
  const pokemon = action.payload;

  const name = pokemon.name;
  const weight = pokemon.weight;
  const sprites = pokemon.sprites;
  const price = setPrice(weight);
  const quantity = state.items?.[name] ? state.items[name].quantity + 1 : 1;

  return {
    ...state,
    items: {
      ...state.items,
      [name]: {
        name: name,
        price: price,
        sprites: sprites,
        quantity: quantity,
        totalPrice: quantity * price,
      },
    },
    quantity: state.quantity + 1,
    totalPrice: (state.totalPrice += price),
  };
};

const addOne = (state = INITIAL_STATE, action) => {
  const quantity = state.items[action.payload]?.quantity + 1;
  const price = state.items[action.payload]?.price;
  return {
    ...state,
    items: {
      ...state.items,
      [action.payload]: {
        ...state.items[action.payload],
        quantity: quantity,
        totalPrice: quantity * state.items[action.payload].price,
      },
    },
    quantity: state.quantity + 1,
    totalPrice: (state.totalPrice += price),
  };
};

const removeOne = (state = INITIAL_STATE, action) => {
  const quantity = state.items[action.payload]?.quantity - 1;
  const price = state.items[action.payload]?.price;
  return {
    ...state,
    items: {
      ...state.items,
      [action.payload]: {
        ...state.items[action.payload],
        quantity: quantity,
        totalPrice: quantity * state.items[action.payload].price,
      },
    },
    quantity: state.quantity - 1,
    totalPrice: (state.totalPrice -= price),
  };
};

const removeItem = (state = INITIAL_STATE, action) => {
  const quantity = state.items[action.payload]?.quantity;
  const itemTotalPrice = state.items[action.payload]?.totalPrice;
  const itemsCopy = { ...state.items };
  delete itemsCopy[action.payload];
  return {
    ...state,
    items: {
      ...itemsCopy,
    },
    quantity: state.quantity - quantity,
    totalPrice: state.totalPrice - itemTotalPrice,
  };
};

const clearCart = (state = INITIAL_STATE, action) => {
  return { ...state, items: {}, quantity: 0, totalPrice: 0 };
};

//Criando Reducer
export default createReducer(INITIAL_STATE, {
  [Types.ADD_TO_CART]: addItem,
  [Types.REMOVE_ITEM]: removeItem,
  [Types.ADD_ONE]: addOne,
  [Types.REMOVE_ONE]: removeOne,
  [Types.CLEAR_CART]: clearCart,
});
