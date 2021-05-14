import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import Logo from "static/images/pokestore.png";
import Fire from "static/images/fire-icon.png";
import Water from "static/images/water-icon.png";
import Grass from "static/images/grass-icon.png";
import Electric from "static/images/electric-icon.png";

const Main = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const chooseType = (type) => {
    dispatch({ type: "SET_TYPE", payload: type });
    history.push(`/${type}`);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex justify-center items-center flex-grow bg-fire">
        <div
          className="flex flex-col items-center cursor-pointer my-5"
          onClick={() => chooseType("fire")}
        >
          <img src={Logo} alt="PokeStore Logo" />
          <img className="mt-2" src={Fire} alt="Fire Type" width="200rem" />
        </div>
      </div>
      <div className="flex justify-center items-center flex-grow bg-water">
        <div
          className="flex flex-col items-center cursor-pointer my-5"
          onClick={() => chooseType("water")}
        >
          <img src={Logo} alt="PokeStore Logo" />
          <img className="mt-2" src={Water} alt="Water Type" width="200rem" />
        </div>
      </div>
      <div className="flex justify-center items-center flex-grow bg-grass">
        <div
          className="flex flex-col items-center cursor-pointer my-5"
          onClick={() => chooseType("grass")}
        >
          <img src={Logo} alt="PokeStore Logo" />
          <img className="mt-2" src={Grass} alt="Grass Type" width="200rem" />
        </div>
      </div>
      <div className="flex justify-center items-center flex-grow bg-electric">
        <div
          className="flex flex-col items-center cursor-pointer my-5"
          onClick={() => chooseType("electric")}
        >
          <img src={Logo} alt="PokeStore Logo" />
          <img
            className="mt-2"
            src={Electric}
            alt="Electric Type"
            width="200rem"
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
