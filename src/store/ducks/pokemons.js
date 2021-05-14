import { createActions, createReducer } from "reduxsauce";

//Action types e Creators
export const { Types, Creators } = createActions({
  setPokemons: ["pokemons"],
  setPokemonDetails: ["pokemon"],
});

//Reducer Handlers
const INITIAL_STATE = {
  pokemons: [],
  pokemon: null,
};

const setPokemons = (state = INITIAL_STATE, action) => {
  return { ...state, pokemons: action.payload };
};

const setPokemonDetails = (state = INITIAL_STATE, action) => {
  return { ...state, pokemon: action.payload };
};

//Criando Reducer
export default createReducer(INITIAL_STATE, {
  [Types.SET_POKEMONS]: setPokemons,
  [Types.SET_POKEMON_DETAILS]: setPokemonDetails,
});
