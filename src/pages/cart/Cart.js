/** @format */

import { useContext } from "react";
import { Cartcontext } from "../../context/Context";
// import "./index.css";

const Cart = () => {
  const Globalstate = useContext(Cartcontext);
  const state = Globalstate.state;
  const dispatch = Globalstate.dispatch;

  const total = state.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
  return (
    <div className="cart">
      {state.map((item, index) => {
        return (
          <div className="card" key={index}>
            <div className="box">
              <img src={item.image} alt="" />
              <div class="product">
                <p>{item.title}</p>
                <h1>Price:${item.price}</h1>
              </div>
            </div>
            <h2 onClick={() => dispatch({ type: "REMOVE", payload: item })}>
              <button>Delete</button>
            </h2>
          </div>
        );
      })}
      {state.length > 0 && (
        <div className="total">
          <h2>{total}</h2>
        </div>
      )}
    </div>
  );
};

export default Cart;
