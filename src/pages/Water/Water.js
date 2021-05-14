import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { usePokeAPi } from "hooks/usePokeApi";
import WaterIcon from "static/images/water-icon.png";
import { ReactComponent as CartIcon } from "static/icons/cart-icon-style-1.svg";
import Header from "components/Header";
import PokeList from "components/PokeList";
import Cart from "components/Cart";
import Footer from "components/Footer";
import PokeDetails from "components/PokeDetails";

const Water = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const history = useHistory();
  const { pokemons, basicState } = useSelector((state) => state);

  const { getByType, searchPokemon } = usePokeAPi();

  useEffect(() => {
    dispatch({ type: "SET_TYPE", payload: "water" });
    if (params.pokeName) {
      searchPokemon(params.pokeName);
      history.push(`/water/${params.pokeName}`);
    } else {
      getByType("water");
    }
  }, [dispatch, getByType, searchPokemon, history, params.pokeName]);

  return (
    <div className="flex flex-col items-center bg-gray-default-light">
      <Header
        variant={"water"}
        logo={{ image: WaterIcon, width: "130rem" }}
        input={{
          className: "rounded-lg text-gray-600 h-11",
          text: "Que pokémon você está procurando?",
        }}
        searchIcon={{ className: "w-5 h-5" }}
        cartIcon={<CartIcon className="text-white fill-current w-10" />}
      />
      {!basicState.loading && (
        <>
          {params.pokeName ? (
            <PokeDetails
              pokemon={pokemons.pokemon}
              variant="water"
              cartIcon={
                <CartIcon className="text-white fill-current w-7 mr-3" />
              }
            />
          ) : (
            <PokeList
              pokemons={pokemons.pokemons}
              variant="water"
              itemsPerPage={24}
            />
          )}
          <Cart variant="water" show={basicState.openCart} />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Water;
