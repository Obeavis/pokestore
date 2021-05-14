import { useCallback } from "react";
import PokeService from "services/pokeService";
import { useDispatch } from "react-redux";

export const usePokeAPi = () => {
  const dispatch = useDispatch();

  const getPokemonDetail = async (pokemons) => {
    dispatch({ type: "LOADING", payload: true });
    const details = await Promise.all(
      pokemons.map(async (item) => {
        try {
          const { data } = await PokeService.getDetails(item.pokemon.url);
          return data;
        } catch (error) {
          return {};
        }
      })
    );
    dispatch({ type: "LOADING", payload: true });
    return details;
  };

  const getByType = useCallback(
    async (type) => {
      try {
        dispatch({ type: "LOADING", payload: true });

        const { data } = await PokeService.getByType(type);

        let responseDetails = await getPokemonDetail(data?.pokemon);
        responseDetails = responseDetails.filter(
          (value) => Object.keys(value).length !== 0
        );

        dispatch({ type: "SET_POKEMONS", payload: responseDetails });
      } catch (error) {
        console.log(error);
        if (error?.response?.status === 404) {
        } else {
        }
      } finally {
        dispatch({ type: "LOADING", payload: false });
      }
    },
    // eslint-disable-next-line
    [dispatch]
  );

  const searchPokemon = useCallback(
    async (name) => {
      try {
        dispatch({ type: "LOADING", payload: true });

        const { data } = await PokeService.search(name);
        dispatch({ type: "SET_POKEMON_DETAILS", payload: data });
      } catch (error) {
        console.log(error);
        dispatch({ type: "SET_POKEMON_DETAILS", payload: "404" });
      } finally {
        dispatch({ type: "LOADING", payload: false });
      }
    },
    [dispatch]
  );

  return {
    getByType,
    searchPokemon,
  };
};
