import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { moneyFormat, getImage } from "utils/functions";
import { List, StyledPagination } from "./style";
import Pagination from "react-js-pagination";

const PokeList = ({ pokemons, variant, itemsPerPage }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  const buy = (pokemon) => {
    dispatch({ type: "ADD_TO_CART", payload: pokemon });
    dispatch({ type: "SET_OPEN_CART", payload: true });
  };

  const PokeShow = (pokemons, variant) => {
    let rows = [];
    for (let i = (page - 1) * itemsPerPage; i < page * itemsPerPage; i++) {
      if (pokemons[i]) {
        rows.push(
          <div
            className="poke group h-96 overflow-hidden"
            key={pokemons[i]?.name}
          >
            <div
              className="flex flex-col group-hover:bg-gray-100 p-5 cursor-pointer"
              onClick={() => history.push(`/${variant}/${pokemons[i]?.name}`)}
            >
              <img
                className="h-60"
                src={getImage(pokemons[i]?.sprites)}
                alt={pokemons[i]?.name}
              />
              <span className="text-gray-700 capitalize mt-2">
                {pokemons[i]?.name}
              </span>
              <span className="font-semibold text-lg mt-1">
                {moneyFormat(pokemons[i]?.weight)}
              </span>
            </div>
            <div className="relative">
              <button
                className={`bg-${variant} btn-buy lg:top-16 flex justify-center items-center w-full h-9 text-white`}
                onClick={() => buy(pokemons[i])}
              >
                COMPRAR
              </button>
            </div>
          </div>
        );
      }
    }
    return rows;
  };

  return (
    <List className="container flex flex-col items-center max-w-7xl flex-grow pt-28 pb-10 px-2 sm:px-5 lg:px-0">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-5">
        {pokemons?.length > 1 && PokeShow(pokemons, variant)}
      </div>
      <StyledPagination className="lg:text-lg mt-8">
        <Pagination
          hideFirstLastPages
          activePage={page}
          itemsCountPerPage={itemsPerPage}
          totalItemsCount={pokemons.length}
          pageRangeDisplayed={8}
          onChange={(page) => {
            setPage(page);
            window.scrollTo(0, 0);
          }}
        />
      </StyledPagination>
    </List>
  );
};

export default PokeList;
