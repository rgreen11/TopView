import React, { useContext } from "react";
import { Operations, addZeros } from "../operations/operations";
import "./cart-dropdown.scss";
import NumItemsPurchase from "../../Context/Context";

const CartDropDown = ({ numProducts, products }) => {
  const { itemsPurchase, setItemsPurchase } = useContext(NumItemsPurchase);
  const operation = new Operations();
  let total = 0;
  console.log(products);
  return (
    <div className="cart-dropdown ">
      <div className="cart-items">
        {products.map((e, i) => {
          if (numProducts.hasOwnProperty(e.name)) {
            total = total + e.price * numProducts[e.name].quantity;
            return (
              <div className="cart-item" key={i}>
                <img src={e.image} alt="bike" className="image-size" />
                <h4>${addZeros(e.price)}</h4> <h4>X</h4>{" "}
                <h4>{numProducts[e.name].quantity}</h4>
                <button
                  className="cart-item_subtract-button"
                  onClick={event => {
                    event.preventDefault();
                    setItemsPurchase(operation.subtract(event, e.name));
                  }}
                >
                  -{" "}
                </button>
              </div>
            );
          } else {
            return "";
          }
        })}
      </div>
      <h4>Total : ${addZeros(total)}</h4>
    </div>
  );
};
export default CartDropDown;
