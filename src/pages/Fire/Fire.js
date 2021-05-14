import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { usePokeAPi } from "hooks/usePokeApi";
import FireIcon from "static/images/fire-icon.png";
import { ReactComponent as CartIcon } from "static/icons/cart-icon-style-2.svg";
import Header from "components/Header";
import PokeList from "components/PokeList";
import Cart from "components/Cart";
import Footer from "components/Footer";
import PokeDetails from "components/PokeDetails";

const Fire = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const history = useHistory();
  const { pokemons, basicState } = useSelector((state) => state);

  const { getByType, searchPokemon } = usePokeAPi();

  useEffect(() => {
    dispatch({ type: "SET_TYPE", payload: "fire" });
    if (params.pokeName) {
      searchPokemon(params.pokeName);
      history.push(`/fire/${params.pokeName}`);
    } else {
      getByType("fire");
    }
  }, [dispatch, getByType, searchPokemon, history, params.pokeName]);

  return (
    <div className="flex flex-col items-center bg-gray-default-light">
      <Header
        variant={"fire"}
        logo={{ image: FireIcon, width: "130rem" }}
        input={{
          className: "text-gray-600 h-11",
          text: "Busque aqui seu Pokémon",
        }}
        searchIcon={{ className: "w-7 h-7 text-fire" }}
        cartIcon={<CartIcon className="text-white fill-current w-10" />}
      />
      {!basicState.loading && (
        <>
          {params.pokeName ? (
            <PokeDetails
              pokemon={pokemons.pokemon}
              variant="fire"
              cartIcon={
                <CartIcon className="text-white fill-current w-7 mr-3" />
              }
            />
          ) : (
            <PokeList
              pokemons={pokemons.pokemons}
              variant="fire"
              itemsPerPage={24}
            />
          )}
          <Cart variant="fire" show={basicState.openCart} />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Fire;
