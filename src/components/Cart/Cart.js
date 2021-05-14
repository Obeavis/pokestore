import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getImage, moneyMask, getColor, isEmpty } from "utils/functions";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Cart = ({ variant, show }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { cart, basicState } = useSelector((state) => state);
  const { items, totalPrice, quantity } = cart;

  const finish = () => {
    const text = `Você escolheu ${quantity} Pokemón${
      quantity > 1 ? "s" : ""
    }.<br />O valor total é de ${moneyMask(totalPrice)}`;
    const MySwal = withReactContent(Swal);
    MySwal.fire({
      title: "Revisão do pedido",
      html: text,
      confirmButtonText: "Concluir pedido",
      confirmButtonColor: getColor(basicState.type),
      showCancelButton: true,
      cancelButtonText: "Voltar",
      cancelButtonColor: "#595959",
      reverseButtons: true,
      allowOutsideClick: false,
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch({ type: "CLEAR_CART" });
        dispatch({ type: "SET_OPEN_CART", payload: false });
        history.push(`/${variant}`);
        MySwal.fire({
          icon: "success",
          title: "Obrigado pela compra!",
          text: `Você vai receber ${moneyMask(
            totalPrice / 10
          )} (10%) de cashback!`,
          showConfirmButton: false,
          timerProgressBar: true,
          timer: 5000,
        });
      }
    });
  };

  return (
    <aside
      className={`fixed flex flex-col h-screen top-0 right-0 w-9/12 md:w-96 bg-gray-default-light z-50 overflow-auto transform  transition duration-300 ease-in-out origin-right ${
        show ? "scale-100" : "scale-0"
      }`}
    >
      <div className="flex items-center justify-center border-gray-default shadow-md">
        <span className="font-semibold text-gray-700 text-xl py-3">
          Sua Cesta
        </span>
      </div>
      <div className="pb-10 px-8">
        {!isEmpty(items) ? (
          <>
            {Object.entries(items).map((item, i) => {
              return (
                <div className="flex justify-between my-10" key={`cart-${i}`}>
                  <div className="flex flex-col justify-center">
                    <div className="flex flex-col border-2 border-gray-800 rounded-md text-xl">
                      <button
                        className="focus:outline-none"
                        onClick={() =>
                          dispatch({ type: "ADD_ONE", payload: item[1].name })
                        }
                      >
                        +
                      </button>
                      <span>{item[1].quantity}</span>
                      <button
                        className="focus:outline-none disabled:opacity-30 disabled:cursor-not-allowed"
                        disabled={item[1].quantity === 1}
                        onClick={() =>
                          dispatch({
                            type: "REMOVE_ONE",
                            payload: item[1].name,
                          })
                        }
                      >
                        -
                      </button>
                    </div>

                    <span
                      className="text-sm mt-1 cursor-pointer"
                      onClick={() =>
                        dispatch({ type: "REMOVE_ITEM", payload: item[1].name })
                      }
                    >
                      Remover
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-800 capitalize">
                      {item[1].name}
                    </span>
                    <img
                      src={getImage(item[1].sprites, "default")}
                      alt={item[1].name}
                    />
                  </div>
                  <div>
                    <span>{moneyMask(item[1].totalPrice)}</span>
                  </div>
                </div>
              );
            })}
            <div className="flex justify-between mt-5 font-semibold">
              <span>TOTAL:</span>
              <span>{moneyMask(totalPrice)}</span>
            </div>
            <div className="mt-8">
              <button
                className={`bg-${variant} text-gray-default-light py-3 px-5 rounded-md focus:outline-none font-medium`}
                onClick={() => finish()}
              >
                FINALIZAR COMPRA
              </button>
            </div>
          </>
        ) : (
          <div className="mt-5 font-semibold">
            <span className="text-gray-800">Seu carrinho está vazio</span>
          </div>
        )}
      </div>
    </aside>
  );
};

export default Cart;
