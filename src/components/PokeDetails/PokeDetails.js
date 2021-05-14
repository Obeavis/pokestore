import React from "react";
import { useDispatch } from "react-redux";
import { getImage, moneyFormat } from "utils/functions";
import ProgressBar from "components/ProgressBar";
import Sad from "static/images/sad-pikachu.png";

const PokeDetails = ({ pokemon, variant, cartIcon }) => {
  const dispatch = useDispatch();
  const moves = pokemon?.moves?.map((move) => move?.move?.name);

  const buy = () => {
    dispatch({ type: "ADD_TO_CART", payload: pokemon });
    dispatch({ type: "SET_OPEN_CART", payload: true });
  };

  return pokemon === "404" ? (
    <div className="container flex flex-grow max-w-7xl pt-28 pb-5">
      <div className="flex flex-col items-center w-full py-8">
        <span className="font-semibold text-3xl text-gray-800">
          Nenhum Pokémon encontrado
        </span>
        <img className="px-5 sm:px-0 py-10" src={Sad} alt="Sad Pikachu" />
      </div>
    </div>
  ) : (
    <div className="container flex flex-col lg:flex-row max-w-7xl h-full flex-grow pt-28 pb-5">
      <div className="flex flex-col md:flex-row bg-white lg:w-4/6 py-8 px-5 lg:px-4 rounded-md lg:mr-4">
        <div className="flex flex-col items-center md:w-4/6 lg:px-4">
          <span className="md:hidden capitalize font-semibold text-5xl mb-4">
            {pokemon?.name}
          </span>
          <img
            className="h-96"
            src={getImage(pokemon?.sprites)}
            alt={pokemon?.name}
          />
          <div className="hidden md:flex flex-col mt-4 text-left w-full">
            <span className="text-xl font-medium mb-2">Movimentos: </span>
            <p className="capitalize">
              {moves?.toString().replaceAll("-", " ").replaceAll(",", ", ")}
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:justify-center items-center md:w-2/6 text-gray-800 px-4 mt-5">
          <span className="capitalize font-semibold text-5xl mb-4 hidden md:flex">
            {pokemon?.name}
          </span>
          <span className="text-xl font-medium mb-2">Informações: </span>
          <ul className="flex flex-col w-full px-2">
            <li className="flex w-full justify-between mb-4 border-b border-gray-300 px-2">
              <span>Peso</span>
              <span>{pokemon?.weight} kg</span>
            </li>
            <li className="flex w-full justify-between mb-4 border-b border-gray-300 px-2">
              <span>Altura</span>
              <span>{pokemon?.height} cm</span>
            </li>
          </ul>
          <span className="text-xl font-medium mb-2 mt-4">Habilidades: </span>
          <ul className="flex flex-col items w-full px-2">
            {pokemon?.abilities?.map((ability, i) => {
              return (
                <li
                  className="mb-4 border-b border-gray-300 px-2"
                  key={`${ability?.ability?.name}-${i}`}
                >
                  <span className="capitalize">
                    {ability?.ability?.name.replace("-", " ")}
                  </span>
                </li>
              );
            })}
          </ul>

          <span className="text-xl font-medium mb-2 mt-4">Estatísticas: </span>
          <div className="flex flex-col w-full px-2">
            {pokemon?.stats?.map((stat, i) => {
              return (
                <div
                  className="flex flex-col w-full mt-2"
                  key={`${stat?.stat?.name}-${i}`}
                >
                  <span className="capitalize">
                    {stat?.stat?.name.replace("-", " ")}
                  </span>
                  <ProgressBar className="h-2" progress={stat?.base_stat} />
                </div>
              );
            })}
          </div>
          <div className="md:hidden flex flex-col mt-4 w-full">
            <span className="text-xl font-medium mb-3">Movimentos: </span>
            <p className="capitalize overflow-auto">
              {moves?.toString().replaceAll("-", " ").replaceAll(",", ", ")}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between bg-white lg:w-2/6 px-8 py-10 lg:py-20 rounded-md lg:ml-4">
        <span className="font-semibold text-gray-800 text-5xl md:text-6xl mt-1">
          {moneyFormat(pokemon?.weight)}
        </span>
        <button
          className={`bg-${variant} flex items-center text-gray-default-light rounded-md focus:outline-none font-medium py-3 px-8 mt-24 lg:mt-0`}
          onClick={() => buy()}
        >
          {cartIcon}
          COMPRAR
        </button>
      </div>
    </div>
  );
};

export default PokeDetails;
