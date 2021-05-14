import { combineReducers } from "redux";
import basicState from "./basicState";
import cart from "./cart";
import pokemons from "./pokemons";

export default combineReducers({
  basicState,
  cart,
  pokemons,
});
