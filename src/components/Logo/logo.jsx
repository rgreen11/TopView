import React, { useState, useEffect, useContext } from "react";
import NumItemsPurchase from "../../Context/Context";
import Filter from "../filter/filter";
function Logo({ products }) {
  const [items, setItems] = useState("");
  const { itemsPurchase } = useContext(NumItemsPurchase);
  const bikes = Filter(products, "bike");
  useEffect(() => {
    console.log("in logo:", itemsPurchase);
    console.log(bikes);
  }, [itemsPurchase]);

  if (items === {}) return;
  return (
    <div>
      <h1>Logo</h1>
      {/* <span>{itemsPurchase[products.name].price}</span> */}
    </div>
  );
}
export default Logo;
