import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { usePokeAPi } from "hooks/usePokeApi";
import ElectricIcon from "static/images/electric-icon.png";
import { ReactComponent as CartIcon } from "static/icons/cart-icon-style-4.svg";
import Header from "components/Header";
import PokeList from "components/PokeList";
import Cart from "components/Cart";
import Footer from "components/Footer";
import PokeDetails from "components/PokeDetails";

const Electric = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const history = useHistory();
  const { pokemons, basicState } = useSelector((state) => state);

  const { getByType, searchPokemon } = usePokeAPi();

  useEffect(() => {
    dispatch({ type: "SET_TYPE", payload: "electric" });
    if (params.pokeName) {
      searchPokemon(params.pokeName);
      history.push(`/electric/${params.pokeName}`);
    } else {
      getByType("electric");
    }
  }, [dispatch, getByType, searchPokemon, history, params.pokeName]);

  return (
    <div className="flex flex-col items-center bg-gray-default-light">
      <Header
        variant={"electric"}
        logo={{ image: ElectricIcon, width: "130rem" }}
        input={{
          className: "text-gray-600 h-11",
          text: "Que Pokémon você procura hoje?",
        }}
        searchButton={{ className: "bg-black" }}
        searchIcon={{ className: "w-6 h-6 text-white" }}
        cartIcon={<CartIcon className="text-white fill-current w-10" />}
      />
      {!basicState.loading && (
        <>
          {params.pokeName && pokemons.pokemon ? (
            <PokeDetails
              pokemon={pokemons.pokemon}
              variant="electric"
              cartIcon={
                <CartIcon className="text-white fill-current w-7 mr-3" />
              }
            />
          ) : (
            <PokeList
              pokemons={pokemons.pokemons}
              variant="electric"
              itemsPerPage={24}
            />
          )}
          <Cart variant="electric" show={basicState.openCart} />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Electric;
