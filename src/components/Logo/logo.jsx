import React, { useState, useEffect, useContext } from "react";
import "./logo.scss";
import NumItemsPurchase from "../../Context/Context";
import CartDropDown from "../cart-dropdown/cart-dropdown";

function Logo({ products }) {
  const [numProducts, setNumProducts] = useState("");
  const [showCart, setShowCart] = useState(false);
  const items = useContext(NumItemsPurchase);
  console.log(products);
  useEffect(() => {
    setNumProducts(items.itemsPurchase);
  }, [items, showCart]);

  function handleClick() {
    if (showCart) {
      return setShowCart(false);
    } else {
      return setShowCart(true);
    }
  }

  return (
    <div>
      <h1 className="logo-click" onClick={handleClick}>
        Cart
      </h1>
      {!showCart ? null : (
        <CartDropDown numProducts={numProducts} products={products.products} />
      )}
    </div>
  );
}
export default Logo;
