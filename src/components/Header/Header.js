import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ReactComponent as MagnifierIcon } from "static/icons/magnifier.svg";
import { CartIcon } from "./style";

const Header = ({
  variant,
  logo,
  input,
  searchButton,
  searchIcon,
  cartIcon,
}) => {
  const dispatch = useDispatch();
  const { basicState, cart } = useSelector((state) => state);

  const history = useHistory();
  const [valueToSearch, setValueToSearch] = useState("");

  const search = async (e) => {
    e.preventDefault();
    if (valueToSearch) {
      history.push(`/${basicState.type}/${valueToSearch.toLowerCase()}`);
      setValueToSearch("");
      window.scrollTo(0, 0);
    }
    setValueToSearch("");
    e.target.reset();
  };

  return (
    <header
      className={`flex fixed justify-center items-center  w-full top-0 z-10 h-32 lg:h-24 bg-${variant}`}
    >
      <div className="container flex flex-wrap justify-between items-center max-w-7xl px-2 sm:px-5 lg:px-0">
        <div
          className="flex ml-3 sm:ml-0 bg-tertiary cursor-pointer order-1"
          onClick={() => history.push(`/${variant}`)}
        >
          <img src={logo.image} width={logo.width} alt="Logo" />
        </div>
        <form
          className="relative flex flex-grow w-full lg:w-0 lg:mx-5 order-3 lg:order-2 mt-3 lg:mt-0"
          onSubmit={(e) => search(e)}
        >
          <input
            className={`py-1 pl-3 block w-full appearance-none border border-transparent focus:outline-none text-left select-none truncate bg-white shadow-md ${input?.className}`}
            placeholder={input?.text}
            onChange={({ target }) => setValueToSearch(target.value)}
          />
          <button
            className={`cursor-pointer absolute inset-y-0 right-0 px-4 flex items-center focus:outline-none ${searchButton?.className}`}
            type="submit"
          >
            <MagnifierIcon
              className={`fill-current ${searchIcon?.className}`}
            />
          </button>
        </form>

        <div className="flex items-center order-2 lg:order-3">
          <div className="group inline-block ml-1">
            <button className="outline-none focus:outline-none border px-3 py-1 bg-white rounded-sm flex items-center w-28">
              <span className="pr-1 font-semibold flex-1 capitalize text-gray-800 ">
                {basicState.type}
              </span>
              <span>
                <svg
                  className="fill-current h-4 w-4 transform group-hover:rotate-180 transition duration-150 ease-in-out"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
                </svg>
              </span>
            </button>
            <ul className="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top">
              {basicState.types
                ?.filter((type) => type !== basicState.type)
                .map((type, i) => {
                  return (
                    <li
                      className="rounded-sm px-3 py-1 hover:bg-gray-100 w-28 capitalize text-gray-800 cursor-pointer"
                      key={`${type}-${i}`}
                      onClick={() => {
                        dispatch({ type: "SET_TYPE", payload: type });
                        history.push(`/${type}`);
                      }}
                    >
                      {type}
                    </li>
                  );
                })}
            </ul>
          </div>

          <CartIcon
            className="relative mx-4 cursor-pointer"
            items={cart.quantity}
            onClick={() =>
              dispatch({ type: "SET_OPEN_CART", payload: !basicState.openCart })
            }
          >
            {cartIcon}
          </CartIcon>
        </div>
      </div>
    </header>
  );
};

export default Header;
