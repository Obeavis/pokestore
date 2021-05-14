import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import Routes from "./utils/Routes";
import Presentation from "components/Presentation";
import Loader from "components/Loader";

function App() {
  const dispatch = useDispatch();
  const { loading, openCart } = useSelector((state) => state.basicState);

  return (
    <div className={`App ${openCart ? "overflow-hidden" : ""}`}>
      <Routes />
      {openCart && (
        <Presentation
          onClick={() => dispatch({ type: "SET_OPEN_CART", payload: false })}
        />
      )}
      {loading && <Loader />}
    </div>
  );
}

export default App;
